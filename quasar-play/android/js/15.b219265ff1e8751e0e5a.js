webpackJsonp([15],{125:function(e,t,n){var d=n(13)(n(197),n(291),null,null);e.exports=d.exports},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=n(3);t.default={data:function(){return{treeModel:[{title:"Item 1",expanded:!0,children:[{title:"Item 1.1",expanded:!1,children:[{title:"Item 1.1.1",expanded:!1,children:[{title:"Item 1.1.1.1",expanded:!1,children:[]}]},{title:"Item 1.1.2",expanded:!1,children:[]}]},{title:"Item 1.2",expanded:!1,children:[]},{title:"Item 1.3",expanded:!1,handler:function(){d.Toast.create("Tapped on item 1.3")},children:[]}]},{title:"Item 2",expanded:!1,children:[{title:"Item 2.1",expanded:!1,children:[{title:"Item 2.1.1",expanded:!1,children:[]},{title:"Item 2.1.2",expanded:!1,children:[{title:"Item 2.1.2.1",expanded:!1,children:[]},{title:"Item 2.1.2.2",expanded:!1,children:[]}]}]},{title:"Item 2.2",expanded:!1,children:[]},{title:"Item 2.3",expanded:!1,children:[]}]}]}}}},291:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"layout-padding"},[e._m(0),e._v(" "),n("p",{staticClass:"caption"},[e._v("\n      Trees are stripped out of any design by default so you can\n      turn them into anything you want.\n    ")]),e._v(" "),n("q-tree",{attrs:{model:e.treeModel,"contract-html":"<i>remove_circle</i>","expand-html":"<i>add_circle</i>"}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"caption"},[n("span",{staticClass:"desktop-only"},[e._v("Click")]),e._v(" "),n("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v('\n      on items to expand/contract and especially on "Item 1.3"\n      to trigger an event.\n    ')])}]}}});