exports.id=240,exports.ids=[240],exports.modules={3390:(e,t,a)=>{Promise.resolve().then(a.bind(a,7519))},5303:()=>{},7519:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>layout});var i=a(784),l=a(1972),s=a(9885),o=a.n(s),n=a(7646),r=a(1440),c=a.n(r),u=a(3834),m=a(5481);let d=(0,s.createContext)({}),MenuProvider=({children:e})=>{let[t,a]=(0,s.useState)("");return i.jsx(d.Provider,{value:{activeMenu:t,setActiveMenu:a},children:e})};var p=a(7114);let AppMenuitem=e=>{let t=(0,p.usePathname)(),a=(0,p.useSearchParams)(),{activeMenu:l,setActiveMenu:o}=(0,s.useContext)(d),r=e.item,b=e.parentKey?e.parentKey+"-"+e.index:String(e.index),x=r.to&&t===r.to,y=l===b||l.startsWith(b+"-"),onRouteChange=e=>{r.to&&r.to===e&&o(b)};(0,s.useEffect)(()=>{onRouteChange(t)},[t,a]);let itemClick=t=>{if(r.disabled){t.preventDefault();return}r.command&&r.command({originalEvent:t,item:r}),r.items?o(y?e.parentKey:b):o(b)},v=r.items&&!1!==r.visible&&i.jsx(m.CSSTransition,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:!!e.root||y,children:i.jsx("ul",{children:r.items.map((e,t)=>i.jsx(AppMenuitem,{item:e,index:t,className:e.badgeClass,parentKey:b},e.label))})},r.label);return(0,i.jsxs)("li",{className:(0,n.classNames)({"layout-root-menuitem":e.root,"active-menuitem":y}),children:[e.root&&!1!==r.visible&&i.jsx("div",{className:"layout-menuitem-root-text",children:r.label}),(!r.to||r.items)&&!1!==r.visible?(0,i.jsxs)("a",{href:r.url,onClick:e=>itemClick(e),className:(0,n.classNames)(r.class,"p-ripple"),target:r.target,tabIndex:0,children:[i.jsx("i",{className:(0,n.classNames)("layout-menuitem-icon",r.icon)}),i.jsx("span",{className:"layout-menuitem-text",children:r.label}),r.items&&i.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),i.jsx(u.Ripple,{})]}):null,r.to&&!r.items&&!1!==r.visible?(0,i.jsxs)(c(),{href:r.to,replace:r.replaceUrl,target:r.target,onClick:e=>itemClick(e),className:(0,n.classNames)(r.class,"p-ripple",{"active-route":x}),tabIndex:0,children:[i.jsx("i",{className:(0,n.classNames)("layout-menuitem-icon",r.icon)}),i.jsx("span",{className:"layout-menuitem-text",children:r.label}),r.items&&i.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),i.jsx(u.Ripple,{})]}):null,v]})};var b=a(6376);let layout_AppMenu=()=>{let{layoutConfig:e}=(0,s.useContext)(b.V);return i.jsx(MenuProvider,{children:i.jsx("ul",{className:"layout-menu",children:[{label:"",items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Experience",icon:"pi pi-fw pi-book",to:"/experience"},{label:"Projects",icon:"pi pi-fw pi-folder-open",to:"/projects"}]}].map((e,t)=>e?.seperator?i.jsx("li",{className:"menu-separator"}):i.jsx(AppMenuitem,{item:e,root:!0,index:t},e.label))})})},layout_AppSidebar=()=>i.jsx(layout_AppMenu,{});var x=a(3950);a(8876);let layout=({children:e})=>{let{layoutConfig:t,layoutState:a,setLayoutState:r}=(0,s.useContext)(b.V),{setRipple:c}=(0,s.useContext)(x.PrimeReactContext),u=(0,s.useRef)(null),m=(0,s.useRef)(null),[d,y]=(0,l.useEventListener)({type:"click",listener:e=>{let t=!(m.current?.isSameNode(e.target)||m.current?.contains(e.target)||u.current?.menubutton?.isSameNode(e.target)||u.current?.menubutton?.contains(e.target));t&&hideMenu()}}),v=(0,p.usePathname)(),f=(0,p.useSearchParams)();(0,s.useEffect)(()=>{hideMenu(),hideProfileMenu()},[v,f]);let[h,g]=(0,l.useEventListener)({type:"click",listener:e=>{let t=!(u.current?.topbarmenu?.isSameNode(e.target)||u.current?.topbarmenu?.contains(e.target)||u.current?.topbarmenubutton?.isSameNode(e.target)||u.current?.topbarmenubutton?.contains(e.target));t&&hideProfileMenu()}}),hideMenu=()=>{r(e=>({...e,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),y(),unblockBodyScroll()},hideProfileMenu=()=>{r(e=>({...e,profileSidebarVisible:!1})),g()},blockBodyScroll=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},unblockBodyScroll=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};(0,s.useEffect)(()=>{(a.overlayMenuActive||a.staticMenuMobileActive)&&d(),a.staticMenuMobileActive&&blockBodyScroll()},[a.overlayMenuActive,a.staticMenuMobileActive]),(0,s.useEffect)(()=>{a.profileSidebarVisible&&h()},[a.profileSidebarVisible]),(0,l.useUnmountEffect)(()=>{y(),g()});let M=(0,n.classNames)("layout-wrapper",{"layout-overlay":"overlay"===t.menuMode,"layout-static":"static"===t.menuMode,"layout-static-inactive":a.staticMenuDesktopInactive&&"static"===t.menuMode,"layout-overlay-active":a.overlayMenuActive,"layout-mobile-active":a.staticMenuMobileActive,"p-input-filled":"filled"===t.inputStyle,"p-ripple-disabled":!t.ripple});return i.jsx(o().Fragment,{children:(0,i.jsxs)("div",{className:M,children:[i.jsx("div",{ref:m,className:"layout-sidebar",children:i.jsx(layout_AppSidebar,{})}),i.jsx("div",{className:"layout-main-container",children:i.jsx("div",{className:"layout-main",children:e})})]})})}},6678:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>AppLayout,metadata:()=>c});var i=a(4656),l=a(5153);let s=(0,l.createProxy)(String.raw`/Users/edotau/src/github.com/edotau/edotau.github.io/frontend/layout/layout.tsx`),{__esModule:o,$$typeof:n}=s,r=s.default,c={title:"auventures",description:"The ultimate collection of design-agnostic, flexible and accessible React UI Components.",robots:{index:!1,follow:!1},viewport:{initialScale:1,width:"device-width"}};function AppLayout({children:e}){return i.jsx(r,{children:e})}},7481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var i=a(8531);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,i.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"32x32",url:t+""}]}},8876:()=>{},1440:(e,t,a)=>{e.exports=a(614)},7114:(e,t,a)=>{e.exports=a(4979)}};