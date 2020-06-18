import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { DistributionModule } from './distribution/distribution.module';
import { ConfigService } from './config/config.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { tagGroupSchema } from './schema';
import { SequenceModule } from './sequence/sequence.module';
import { TagGroupController } from './tagGroup/tagGroup.controller';
import { TagGroupService } from './tagGroup/tagGroup.service';
import { TagGroupResolver } from './tagGroup/tagGroup.resolver';
import { FileModule } from './file/file.module';
import { AWSCredsModule } from './auth/aws-creds.module';
import { WhispModule } from './whisp/whisp.module';

import Redis = require('ioredis');

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        autoSchemaFile: configService.get('AUTO_SCHEMA_FILE'),
        introspection: configService.get('INTROSPECTION'),
        playground: configService.get('PLAYGROUND'),
        installSubscriptionHandlers: true,
      }),
      inject: [ConfigService],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.getMongooseOptions(),
      inject: [ConfigService],
    }),
    MongooseModule.forFeature([{ name: 'TagGroup', schema: tagGroupSchema }]),
    WhispModule,
    SequenceModule,
    ConfigModule,
    AWSCredsModule,
    FileModule,
    DistributionModule,
  ],
  providers: [
    AppService,
    {
      provide: 'PUB_SUB',
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        new RedisPubSub({
          publisher: new Redis({
            host: configService.get('REDIS_HOST'),
            port: configService.get('REDIS_PORT'),
          }),
          subscriber: new Redis({
            host: configService.get('REDIS_HOST_READ'),
            port: configService.get('REDIS_PORT_READ'),
          }),
        }),
    },
    TagGroupService,
    TagGroupResolver,
  ],
  controllers: [AppController, TagGroupController],
})
export class AppModule {}
