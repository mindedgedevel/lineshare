(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{9777:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[acid]/campaign/insight",function(){return s(7112)}])},5825:function(e,t,s){"use strict";s.d(t,{Z:function(){return r}});var n=s(5893),i=s(872),a=s.n(i),c=s(5697),l=s.n(c);function r(e){let{onClick:t,disabled:s,className:i,children:a,type:c}=e;return(0,n.jsx)("button",{className:i,onClick:t,disabled:s,type:c,children:a})}r.propTypes={onClick:l().func,disabled:l().bool,className:l().string,type:l().string,children:l().node.isRequired},r.defaultProps={isButton:!1,onClick:()=>{},disabled:!1,className:"py-2 px-4 text-white text-base bg-primary-600 border-2 border-primary-600 rounded cursor-pointer ".concat(a().className),children:"Button",type:"button"}},853:function(e,t,s){"use strict";s.d(t,{Z:function(){return E}});var n=s(5893),i=s(9084),a=s.n(i),c=s(3977),l=s.n(c),r=s(7294),d=s(1163),o=s(4053),h=s(1664),u=s.n(h);let x=[{label:"บัญชีของฉัน",link:"/"}];function m(){let e=(0,d.useRouter)(),[t,s]=(0,r.useState)(!1),{supabaseClient:i,session:c}=(0,o.useSessionContext)(),{auth:h}=i,m=c?c.user:null,g=async()=>{s(!t);let{error:e}=await h.signOut();e&&console.log(e)};return(0,n.jsxs)("header",{className:"flex flex-col",children:[(0,n.jsxs)("div",{className:"px-8 min-h-[64px] flex items-center justify-between border-b",children:[(0,n.jsx)("h1",{className:"text-2xl font-semibold ".concat(a().className),children:"LINE SHARE"}),(0,n.jsxs)("div",{className:"flex flex-col relative",children:[(0,n.jsxs)("div",{onClick:()=>{s(!t)},className:"flex items-center cursor-pointer ".concat(a().className),children:[m&&m.email,(0,n.jsx)("svg",{className:"w-4 h-4 ml-2","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),(0,n.jsx)("div",{className:"z-10 absolute right-0 top-[110%] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 ".concat(t?"block":"hidden"),children:(0,n.jsx)("ul",{className:"py-2 text-sm text-gray-700",children:(0,n.jsx)("li",{children:(0,n.jsxs)("span",{onClick:g,className:"flex px-4 py-2 hover:bg-gray-100 cursor-pointer gap-2 ".concat(l().className," items-center"),children:[(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"#21a93a",viewBox:"0 0 256 256",children:(0,n.jsx)("path",{d:"M116,216a12,12,0,0,1-12,12H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28h56a12,12,0,0,1,0,24H52V204h52A12,12,0,0,1,116,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L187,116H104a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,224.49,119.51Z"})}),"ออกจากระบบ"]})})})})]})]}),(0,n.jsx)("div",{className:"px-8 flex items-center border-b",children:(0,n.jsx)("nav",{children:(0,n.jsx)("ul",{className:"flex gap-4 ".concat(l().className),children:e.pathname.includes("/admin")?(0,n.jsx)("li",{className:"px-4 py-3 active border-b-4 border-primary-600",children:(0,n.jsx)(u(),{href:"/admin/settings/account",children:"ตั้งค่า"})}):x.map((t,s)=>(0,n.jsx)("li",{className:"px-4 py-3 ".concat(e.pathname===t.link?"active border-b-4 border-primary-600":""),children:(0,n.jsx)(u(),{href:t.link,children:t.label})},s))})})})]})}function g(){return(0,n.jsx)("footer",{className:"px-4 flex items-center border-t",children:(0,n.jsxs)("p",{className:"text-xs text-gray-400 my-2",children:["\xa9",new Date().getFullYear()," Mindedge Co., Ltd."]})})}var p=s(3415),f=s.n(p),b=s(5675),j=s.n(b),N={src:"/_next/static/media/i-link-simple.488b4213.svg",height:32,width:32,blurWidth:0,blurHeight:0},w={src:"/_next/static/media/i-list-dashes.99f19d3d.svg",height:32,width:32,blurWidth:0,blurHeight:0},v={src:"/_next/static/media/i-megaphone.6b0241ef.svg",height:32,width:32,blurWidth:0,blurHeight:0},k={src:"/_next/static/media/i-magic-wand.50682af5.svg",height:32,width:32,blurWidth:0,blurHeight:0},y={src:"/_next/static/media/i-user-circle.e159f561.svg",height:32,width:32,blurWidth:0,blurHeight:0};function _(){let e=(0,d.useRouter)(),[t,s]=(0,r.useState)(""),i=window.sessionStorage.getItem("acid"),[a,c]=(0,r.useState)({Settings:[{id:"link-account",label:"ลิงก์บัญชี",link:"/settings/link-account",image:N}],Account:[{id:"home-account",label:"Dashboard",link:"/account/".concat(i),image:w},{id:"campaign",label:"แคมเปญทั้งหมด",link:"/account/".concat(i,"/campaign"),image:v},{id:"insight",label:"ข้อมูลเชิงลึก",link:"/account/".concat(i,"/campaign/insight"),image:k}]});return(0,r.useEffect)(()=>{e.pathname.includes("/account")&&!e.pathname.includes("/account/create")?s("Account"):s("")},[e.pathname]),(0,n.jsx)("nav",{className:"md:w-[280px] p-11 bg-gray-50 border-r border-gray-200",children:e.pathname.includes("/admin")?(0,n.jsxs)("ul",{className:"flex flex-col gap-4 ".concat(f().className),children:[(0,n.jsx)("li",{children:(0,n.jsxs)(u(),{href:"/admin/settings/account",className:"flex gap-2",children:[(0,n.jsx)(j(),{src:N,width:24,height:24,alt:"Account"}),"บัญชีทางการ"]})}),(0,n.jsx)("li",{children:(0,n.jsxs)(u(),{href:"/admin/settings/users",className:"flex gap-2",children:[(0,n.jsx)(j(),{src:y,width:24,height:24,alt:"Campaign"}),"ผู้ใช้งาน"]})})]}):""!==t&&(0,n.jsx)("ul",{className:"flex flex-col gap-4 ".concat(f().className),children:a[t].map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsxs)(u(),{href:e.link,className:"flex gap-2",children:[(0,n.jsx)(j(),{src:e.image,width:24,height:24,alt:"Insight"}),e.label]})},t))})})}var B=s(1678),C=s.n(B),H=s(5825);function A(e){return e.setButton&&e.setButton.isButton,(0,n.jsxs)("section",{className:"flex justify-between mb-10",children:[(0,n.jsx)("h1",{className:"text-3xl ".concat(C().className),children:e.setPageTitle}),e.setButton&&(0,n.jsx)("div",{children:(0,n.jsx)(H.Z,{onClick:e.setButton.onClick,disabled:e.setButton.disabled,className:e.setButton.className,children:e.setButton.children})})]})}function E(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{}),(0,n.jsxs)("main",{className:"flex flex-row no-warp items-stretch min-h-[calc(100vh-146px)]",children:[(0,n.jsx)(_,{}),(0,n.jsxs)("div",{className:"content w-full max-w-[1160px] p-11",children:[(0,n.jsx)(A,{setPageTitle:e.setPageTitle,setButton:e.setButton}),e.children]})]}),(0,n.jsx)(g,{})]})}},7112:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return a}});var n=s(5893),i=s(853);function a(){return(0,n.jsx)(i.Z,{setPageTitle:"ข้อมูลเชิงลึก",children:(0,n.jsx)("p",{children:"Comingsoon."})})}a.requireAuth=!0,a.role=["authenticated"]}},function(e){e.O(0,[747,774,888,179],function(){return e(e.s=9777)}),_N_E=e.O()}]);