(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95],{7684:function(e,t,i){Promise.resolve().then(i.bind(i,2316))},7510:function(e,t,i){"use strict";i.d(t,{V:function(){return n},a:function(){return LayoutProvider}});var l=i(7437),o=i(2265);let n=(0,o.createContext)({}),LayoutProvider=e=>{let{children:t}=e,[i,a]=(0,o.useState)({ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14}),[s,r]=(0,o.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),isOverlay=()=>"overlay"===i.menuMode,isDesktop=()=>window.innerWidth>991;return(0,l.jsx)(n.Provider,{value:{layoutConfig:i,setLayoutConfig:a,layoutState:s,setLayoutState:r,onMenuToggle:()=>{isOverlay()&&r(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),isDesktop()?r(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):r(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{r(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:t})}},2316:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return layout}});var l=i(7437),o=i(5304),n=i(2265),a=i(9851),s=i(1396),r=i.n(s),u=i(4100),c=i(1289);let d=(0,n.createContext)({}),MenuProvider=e=>{let{children:t}=e,[i,o]=(0,n.useState)("");return(0,l.jsx)(d.Provider,{value:{activeMenu:i,setActiveMenu:o},children:t})};var m=i(4033);let AppMenuitem=e=>{let t=(0,m.usePathname)(),i=(0,m.useSearchParams)(),{activeMenu:o,setActiveMenu:s}=(0,n.useContext)(d),v=e.item,p=e.parentKey?e.parentKey+"-"+e.index:String(e.index),b=v.to&&t===v.to,y=o===p||o.startsWith(p+"-"),onRouteChange=e=>{v.to&&v.to===e&&s(p)};(0,n.useEffect)(()=>{onRouteChange(t)},[t,i]);let itemClick=t=>{if(v.disabled){t.preventDefault();return}v.command&&v.command({originalEvent:t,item:v}),v.items?s(y?e.parentKey:p):s(p)},x=v.items&&!1!==v.visible&&(0,l.jsx)(c.Z,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:!!e.root||y,children:(0,l.jsx)("ul",{children:v.items.map((e,t)=>(0,l.jsx)(AppMenuitem,{item:e,index:t,className:e.badgeClass,parentKey:p},e.label))})},v.label);return(0,l.jsxs)("li",{className:(0,a.AK)({"layout-root-menuitem":e.root,"active-menuitem":y}),children:[e.root&&!1!==v.visible&&(0,l.jsx)("div",{className:"layout-menuitem-root-text",children:v.label}),(!v.to||v.items)&&!1!==v.visible?(0,l.jsxs)("a",{href:v.url,onClick:e=>itemClick(e),className:(0,a.AK)(v.class,"p-ripple"),target:v.target,tabIndex:0,children:[(0,l.jsx)("i",{className:(0,a.AK)("layout-menuitem-icon",v.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:v.label}),v.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(u.H,{})]}):null,v.to&&!v.items&&!1!==v.visible?(0,l.jsxs)(r(),{href:v.to,replace:v.replaceUrl,target:v.target,onClick:e=>itemClick(e),className:(0,a.AK)(v.class,"p-ripple",{"active-route":b}),tabIndex:0,children:[(0,l.jsx)("i",{className:(0,a.AK)("layout-menuitem-icon",v.icon)}),(0,l.jsx)("span",{className:"layout-menuitem-text",children:v.label}),v.items&&(0,l.jsx)("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),(0,l.jsx)(u.H,{})]}):null,x]})};var v=i(7510),layout_AppMenu=()=>{let{layoutConfig:e}=(0,n.useContext)(v.V);return(0,l.jsx)(MenuProvider,{children:(0,l.jsx)("ul",{className:"layout-menu",children:[{label:"",items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Experience",icon:"pi pi-fw pi-book",to:"/experience"},{label:"Projects",icon:"pi pi-fw pi-folder-open",to:"/projects"}]}].map((e,t)=>(null==e?void 0:e.seperator)?(0,l.jsx)("li",{className:"menu-separator"}):(0,l.jsx)(AppMenuitem,{item:e,root:!0,index:t},e.label))})})},layout_AppSidebar=()=>(0,l.jsx)(layout_AppMenu,{}),p=i(6568);i(9066);var layout=e=>{let{children:t}=e,{layoutConfig:i,layoutState:s,setLayoutState:r}=(0,n.useContext)(v.V),{setRipple:u}=(0,n.useContext)(p.Ou),c=(0,n.useRef)(null),d=(0,n.useRef)(null),[b,y]=(0,o.OR)({type:"click",listener:e=>{var t,i,l,o,n,a;let s=!((null===(t=d.current)||void 0===t?void 0:t.isSameNode(e.target))||(null===(i=d.current)||void 0===i?void 0:i.contains(e.target))||(null===(o=c.current)||void 0===o?void 0:null===(l=o.menubutton)||void 0===l?void 0:l.isSameNode(e.target))||(null===(a=c.current)||void 0===a?void 0:null===(n=a.menubutton)||void 0===n?void 0:n.contains(e.target)));s&&hideMenu()}}),x=(0,m.usePathname)(),f=(0,m.useSearchParams)();(0,n.useEffect)(()=>{hideMenu(),hideProfileMenu()},[x,f]);let[M,h]=(0,o.OR)({type:"click",listener:e=>{var t,i,l,o,n,a,s,r;let u=!((null===(i=c.current)||void 0===i?void 0:null===(t=i.topbarmenu)||void 0===t?void 0:t.isSameNode(e.target))||(null===(o=c.current)||void 0===o?void 0:null===(l=o.topbarmenu)||void 0===l?void 0:l.contains(e.target))||(null===(a=c.current)||void 0===a?void 0:null===(n=a.topbarmenubutton)||void 0===n?void 0:n.isSameNode(e.target))||(null===(r=c.current)||void 0===r?void 0:null===(s=r.topbarmenubutton)||void 0===s?void 0:s.contains(e.target)));u&&hideProfileMenu()}}),hideMenu=()=>{r(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),y(),unblockBodyScroll()},hideProfileMenu=()=>{r(e=>({...e,profileSidebarVisible:!1})),h()},blockBodyScroll=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},unblockBodyScroll=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,n.useEffect)(()=>{(s.overlayMenuActive||s.staticMenuMobileActive)&&b(),s.staticMenuMobileActive&&blockBodyScroll()},[s.overlayMenuActive,s.staticMenuMobileActive]),(0,n.useEffect)(()=>{s.profileSidebarVisible&&M()},[s.profileSidebarVisible]),(0,o.zq)(()=>{y(),h()});let g=(0,a.AK)("layout-wrapper",{"layout-overlay":"overlay"===i.menuMode,"layout-static":"static"===i.menuMode,"layout-static-inactive":s.staticMenuDesktopInactive&&"static"===i.menuMode,"layout-overlay-active":s.overlayMenuActive,"layout-mobile-active":s.staticMenuMobileActive,"p-input-filled":"filled"===i.inputStyle,"p-ripple-disabled":!i.ripple});return(0,l.jsx)(n.Fragment,{children:(0,l.jsxs)("div",{className:g,children:[(0,l.jsx)("div",{ref:d,className:"layout-sidebar",children:(0,l.jsx)(layout_AppSidebar,{})}),(0,l.jsx)("div",{className:"layout-main-container",children:(0,l.jsx)("div",{className:"layout-main",children:t})})]})})}},9066:function(){},1396:function(e,t,i){e.exports=i(8326)},4033:function(e,t,i){e.exports=i(94)}},function(e){e.O(0,[589,819,100,326,289,971,472,744],function(){return e(e.s=7684)}),_N_E=e.O()}]);