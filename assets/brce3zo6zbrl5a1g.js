import{c as M,r as h,j as e,M as c}from"./lklglvrzltpv3f05.js";import{en as f,bO as g,eN as p,u as m}from"./i7de8yvdg4jlu6h0.js";import{aO as x,aP as j,aQ as v,aR as R,aS as z,aT as G,aU as T,aV as y}from"./mc2tj3xhtcshtn61.js";function S({gizmoId:s,onClose:r}){const{data:o}=z(s),{data:t}=G(p.Gizmo),n=M(),i=T(n,s,p.Gizmo);if(t==null)return null;const a=o!=null?`Report ${o.gizmo.display.name}`:"Report";return e.jsx(y,{reasons:t.reasons,submitReport:i,title:a,onClose:r,header:t.header,subHeader:t.header_explanation})}function k({gizmoId:s,clientThreadId:r,onClose:o}){const t=M(),n=m("1855896025")?.value,i=m("3376455464")?.value,a=f(r),[u,d]=h.useState();return!n||!i||u==="gpt"||a==null?e.jsx(S,{gizmoId:s,onClose:o}):u==="conversation"?e.jsx(x,{serverThreadId:a,onClose:o}):e.jsxs(g,{title:t.formatMessage({id:"gizmo.report.selectorModal.title",defaultMessage:"Report"}),onClose:o,isOpen:!0,showCloseButton:!0,type:"success",children:[e.jsx(j,{header:t.formatMessage({id:"gizmo.report.selectorModal.header",defaultMessage:"What would you like to report?"})}),e.jsxs(v,{children:[e.jsx(R,{onClick:l=>{l.preventDefault(),d("conversation")},children:e.jsx(c,{id:"gizmo.report.selectorModal.conversation",defaultMessage:"The conversation"})}),e.jsx(R,{onClick:l=>{l.preventDefault(),d("gpt")},children:e.jsx(c,{id:"gizmo.report.selectorModal.gpt",defaultMessage:"The GPT"})})]})]})}export{S as G,k as a};
//# sourceMappingURL=brce3zo6zbrl5a1g.js.map
