(window.webpackJsonp=window.webpackJsonp||[]).push([[31,6,36,37],{405:function(t,e,n){"use strict";n.r(e);var l={props:{classes:String}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"btn",class:t.classes},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(405).default})},414:function(t,e,n){"use strict";n.r(e);var l={props:{title:String,desc:String,link:String,classes:String}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown",class:t.classes},[n("div",{attrs:{tabindex:"0"}},[t._t("default")],2),t._v(" "),n("div",{staticClass:"py-2 dropdown-content",attrs:{tabindex:"0"}},[n("div",{staticClass:"shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box"},[n("div",{staticClass:"card-body"},[n("h2",{staticClass:"font-extrabold capitalize card-title"},[t._v(t._s(t.title)+" component")]),t._v(" "),n("p",{staticClass:"text-sm text-neutral-content text-opacity-80"},[t._v(t._s(t.desc))]),t._v(" "),n("div",{staticClass:"flex justify-end mt-4"},[n("NuxtLink",{staticClass:"btn btn-primary btn-sm xl:btn-md",attrs:{to:t.link}},[t._v("\n            See component\n          ")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,n){"use strict";n.r(e);var l=n(8),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("progress",{staticClass:"progress"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Progress:n(415).default})},433:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{selectedIndex:0,tabs:["Stats","Info","Options"],progressData:[{name:"Search Engines",class:"progress-success",value:50,newValue:70},{name:"Direct",class:"progress-primary",value:30,newValue:50},{name:"Social Media",class:"progress-secondary",value:70,newValue:80},{name:"Emails",class:"progress-accent",value:90,newValue:80},{name:"Ad campaigns",class:"progress-warning",value:65,newValue:85}]}}},o=n(8),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col"},[n("PromoDropdown",{attrs:{title:"tab",desc:"Beautiful tabs to switch between sections",classes:"",link:"components/tab"}},[n("div",{staticClass:"flex-grow-0 tabs w-full"},t._l(t.tabs,(function(e,i){return n("button",{key:e,staticClass:"flex-1 tab tab-lifted tab-lg tab-border-none",class:{"tab-active":t.selectedIndex==i},on:{click:function(e){t.selectedIndex=i}}},[t._v(t._s(e))])})),0)]),t._v(" "),n("div",{staticClass:"grid flex-grow gap-3 p-6 shadow-xl rounded-xl bg-base-100 w-full",class:{"rounded-tl-none":0==t.selectedIndex,"rounded-tr-none":2==t.selectedIndex}},[n("div",{staticClass:"flex items-center space-x-2"},[n("PromoDropdown",{attrs:{title:"avatar",desc:"Use avatar component with any size",classes:"",link:"components/avatar"}},[n("div",{staticClass:"avatar online"},[n("div",{staticClass:"w-16 h-16 p-px bg-opacity-10 mask mask-hexagon bg-base-content"},[n("img",{staticClass:"mask mask-hexagon",attrs:{src:"/tailwind-css-component-profile-5@56w.png",alt:"Avatar Tailwind CSS Component"}})])])]),t._v(" "),t._m(0)],1),t._v(" "),n("PromoDropdown",{attrs:{title:"divider",desc:"User divider component to visually separate items",classes:"",link:"components/divider"}},[n("div",{staticClass:"m-0 divider text-base-content text-opacity-40"},[t._v("Reports")])]),t._v(" "),n("div",{staticClass:"text-lg font-extrabold"},[t._v("Audience Report")]),t._v(" "),n("div",{staticClass:"grid gap-3"},[n("PromoDropdown",{attrs:{title:"progress",desc:"Show progressbar, loadings or simple bar charts using progress component",classes:"dropdown-top",link:"components/progress"}},t._l(t.progressData,(function(e,i){return n("div",{key:e.name,staticClass:"flex items-center p-1"},[n("span",{staticClass:"w-48 text-xs text-base-content text-opacity-60"},[t._v(t._s(e.name))]),t._v(" "),n("progress",{staticClass:"progress",class:e.class,attrs:{max:"100"},domProps:{value:e.value},on:{hover:function(t){this.value=e.newValue}}})])})),0)],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-lg font-extrabold"},[t._v("Beatrice Thurman")]),t._v(" "),n("div",{staticClass:"text-sm text-base-content text-opacity-60"},[t._v("220 Followers")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(405).default,PromoDropdown:n(414).default,Progress:n(415).default})}}]);