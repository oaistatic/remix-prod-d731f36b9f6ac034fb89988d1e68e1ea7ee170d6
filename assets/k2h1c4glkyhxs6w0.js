import{e as M,r as o,f as P,j as e,M as n}from"./lklglvrzltpv3f05.js";import{br as d,f as S}from"./i7de8yvdg4jlu6h0.js";import{A,a as p,b as g}from"./oyxhb3n4vhc6e4ki.js";import{i as L,d as v,c as w,e as D}from"./mc2tj3xhtcshtn61.js";const r=S({primaryButton:{id:"OpenInDesktopApp.launchButton",defaultMessage:"Launch ChatGPT desktop app"},secondaryButton:{id:"OpenInDesktopApp.secondaryButton",defaultMessage:"Not launching? Click here instead."},oops:{id:"AuthError.oops",defaultMessage:"Oops!"},goBack:{id:"AuthError.goBack",defaultMessage:"Go back"}});function O(){const m=M(),[t,x]=o.useState(),[f,k]=o.useState(!1),[j,B]=o.useState(!1),[s]=P(),c=o.useCallback(()=>{t!==void 0&&(window.location.href=t)},[t]);o.useEffect(()=>{let a=s.get("path");const u=s.get("code"),h=s.get("state"),b=L();let i=s.get("scheme");if(i||(i=b?w:D),!a||!u||!h)return;a.startsWith("/")||(a="/"+a);const l=new URL(`${i}://${v}${a}`);l.searchParams.set("code",u),l.searchParams.set("state",h);const y=l.toString();x(y),k(!0),c(),setTimeout(()=>{B(!0)},3e3)},[c,s]);const C=()=>{t&&navigator.clipboard.writeText(t)};return e.jsx(e.Fragment,{children:f?e.jsx(A,{isStorageComplianceEnabled:!1,children:t?e.jsxs(p,{children:[e.jsx(g,{}),e.jsx(d,{as:"button",color:"secondary",onClick:c,children:e.jsx(n,{...r.primaryButton})}),e.jsx("div",{className:"mt-2 h-4 text-center text-xs text-token-text-tertiary",children:j&&e.jsx(d,{as:"button",color:"ghost",onClick:C,children:e.jsx(n,{...r.secondaryButton})})})]}):e.jsxs(p,{children:[e.jsx(g,{}),e.jsx("div",{className:"mb-2 text-center text-lg",children:e.jsx(n,{...r.oops})}),e.jsx(d,{as:"button",color:"secondary",onClick:()=>m("/auth/login",{replace:!0}),children:e.jsx(n,{...r.goBack})})]})}):null})}export{O as default};
//# sourceMappingURL=k2h1c4glkyhxs6w0.js.map
