import{aK as s}from"./mc2tj3xhtcshtn61.js";import{cd as u}from"./i7de8yvdg4jlu6h0.js";import{f as h,r as l}from"./lklglvrzltpv3f05.js";function p(){const[t]=h(),n=s(),i=l.useRef(!1);return l.useEffect(()=>{if(i.current)return;i.current=!0;let a;const o=t.get("login_hint"),e=t.get("connection"),r=t.get("callback_path"),c=t.get("auth_flow");c==="auth0"?a=u.Auth0:c==="authapi"&&(a=u.AuthApi),n({authType:"login",forceAuthFlow:a,...r?{callbackUrl:r}:void 0,...o||e?{additionalAuthParams:{...o?{login_hint:o}:{},...e?{connection:e}:{}}}:{}})},[n,t]),null}export{p as default};
//# sourceMappingURL=lkll86l4yauhpw12.js.map
