exports.id=800,exports.ids=[800],exports.modules={5157:(e,t,i)=>{Promise.resolve().then(i.bind(i,6439))},9990:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,3724,23)),Promise.resolve().then(i.t.bind(i,5365,23)),Promise.resolve().then(i.t.bind(i,4900,23)),Promise.resolve().then(i.t.bind(i,4714,23)),Promise.resolve().then(i.t.bind(i,5392,23)),Promise.resolve().then(i.t.bind(i,8898,23))},6439:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>RootLayout});var r=i(784),o=i(6376),s=i(3950);function RootLayout({children:e}){return(0,r.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[r.jsx("head",{children:r.jsx("link",{id:"theme-css",href:"/themes/lara-light-indigo/theme.css",rel:"stylesheet"})}),r.jsx("body",{children:r.jsx(s.PrimeReactProvider,{children:r.jsx(o.a,{children:e})})})]})}i(833),i(1814),i(4766),i(7729)},6376:(e,t,i)=>{"use strict";i.d(t,{V:()=>s,a:()=>LayoutProvider});var r=i(784),o=i(9885);let s=(0,o.createContext)({}),LayoutProvider=({children:e})=>{let[t,i]=(0,o.useState)({ripple:!1,inputStyle:"outlined",menuMode:"static",colorScheme:"light",theme:"lara-light-indigo",scale:14}),[n,l]=(0,o.useState)({staticMenuDesktopInactive:!1,overlayMenuActive:!1,profileSidebarVisible:!1,configSidebarVisible:!1,staticMenuMobileActive:!1,menuHoverActive:!1}),isOverlay=()=>"overlay"===t.menuMode,isDesktop=()=>window.innerWidth>991;return r.jsx(s.Provider,{value:{layoutConfig:t,setLayoutConfig:i,layoutState:n,setLayoutState:l,onMenuToggle:()=>{isOverlay()&&l(e=>({...e,overlayMenuActive:!e.overlayMenuActive})),isDesktop()?l(e=>({...e,staticMenuDesktopInactive:!e.staticMenuDesktopInactive})):l(e=>({...e,staticMenuMobileActive:!e.staticMenuMobileActive}))},showProfileSidebar:()=>{l(e=>({...e,profileSidebarVisible:!e.profileSidebarVisible}))}},children:e})}},5345:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>n,__esModule:()=>s,default:()=>a});var r=i(5153);let o=(0,r.createProxy)(String.raw`/Users/edotau/src/github.com/edotau/edotau.github.io/frontend/app/layout.tsx`),{__esModule:s,$$typeof:n}=o,l=o.default,a=l},7729:()=>{}};