(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{442:function(t,a,s){"use strict";s.r(a);var e=s(55),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"graphql-taggroup-endpoints"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#graphql-taggroup-endpoints"}},[t._v("#")]),t._v(" GraphQl TagGroup Endpoints")]),t._v(" "),s("blockquote",[s("p",[t._v("In this section we will be providing examples that you can use inside your very own playground available here "),s("a",{attrs:{href:"http://localhost:3000/graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/graphql"),s("OutboundLink")],1),t._v(" (if you activated it).")])]),t._v(" "),s("h2",{attrs:{id:"query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query"}},[t._v("#")]),t._v(" Query")]),t._v(" "),s("h3",{attrs:{id:"taggroupbyid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taggroupbyid"}},[t._v("#")]),t._v(" tagGroupById")]),t._v(" "),s("p",[t._v("Retrieves the matching tagGroup by its "),s("RouterLink",{attrs:{to:"/models/tagGroup.html#_id"}},[s("code",[t._v("_id")])]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" getTagGroupById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tagGroupById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroupId")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fields you want to retrieve from the tagGroup")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroupId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5ed644d46f91b10034d731f1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find the list of available fields "),s("RouterLink",{attrs:{to:"/models/tagGroup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"taggroups"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#taggroups"}},[t._v("#")]),t._v(" tagGroups")]),t._v(" "),s("p",[t._v("Retrieves all the tagGroups matching a set of conditions.")]),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("query")]),t._v(" getTagGroups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TagGroupInputType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tagGroups"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fields you want to retrieve from the tagGroup")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I\'m looking for this specific title"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fields you want to filter on")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("If you want to retrieve all the tagGroups you can set the "),s("code",[t._v("tagGroup")]),t._v(" parameter to "),s("code",[t._v("{}")])]),t._v(" "),s("p",[t._v("You can find the list of available fields "),s("RouterLink",{attrs:{to:"/models/tagGroup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h2",{attrs:{id:"mutation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mutation"}},[t._v("#")]),t._v(" Mutation")]),t._v(" "),s("h3",{attrs:{id:"createtaggroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#createtaggroup"}},[t._v("#")]),t._v(" createTagGroup")]),t._v(" "),s("p",[t._v("Creates a new tagGroup.")]),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" createTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TagGroupInputType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  createTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fields you want to retrieve from the created tagGroup")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A great title for a new tagGroup"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fields you want to populate")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find the list of available fields "),s("RouterLink",{attrs:{to:"/models/tagGroup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"updatetaggroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#updatetaggroup"}},[t._v("#")]),t._v(" updateTagGroup")]),t._v(" "),s("p",[t._v("Updates an existing tagGroup.")]),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" updateTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TagGroupInputType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  updateTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fields you want to retrieve from the updated tagGroup")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This title is definetly better"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fields you want to update")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5ed644d46f91b10034d731f1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find the list of available fields "),s("RouterLink",{attrs:{to:"/models/tagGroup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"replacetaggroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#replacetaggroup"}},[t._v("#")]),t._v(" replaceTagGroup")]),t._v(" "),s("p",[t._v("Replaces an existing tagGroup. This endpoint has the same signature as "),s("a",{attrs:{href:"#updateTagGroup"}},[s("code",[t._v("updateTagGroup")])]),t._v(", however instead of updating the fields provided in the "),s("code",[t._v("tagGroup")]),t._v(" parameter, it will instead replace the tagGroup in the database with the "),s("code",[t._v("tagGroup")]),t._v(" parameter.")]),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" replaceTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TagGroupInputType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  replaceTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _id "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fields you want to retrieve from the updated tagGroup")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroup"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A really cool title"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fields you want to populate")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5ed644d46f91b10034d731f1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("You can find the list of available fields "),s("RouterLink",{attrs:{to:"/models/tagGroup.html"}},[t._v("here")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"deletetaggroup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deletetaggroup"}},[t._v("#")]),t._v(" deleteTagGroup")]),t._v(" "),s("p",[t._v("Deletes the matching tagGroup by its "),s("RouterLink",{attrs:{to:"/models/tagGroup.html#_id"}},[s("code",[t._v("_id")])]),t._v(".")],1),t._v(" "),s("div",{staticClass:"language-GraphQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-graphql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mutation")]),t._v(" deleteTagGroupById"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  deleteTagGroup"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tagGroupId")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Query variables")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tagGroupId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"5ed644d46f91b10034d731f1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);