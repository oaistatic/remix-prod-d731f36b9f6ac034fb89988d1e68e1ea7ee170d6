import{c as u,j as e,M as o}from"./lklglvrzltpv3f05.js";import{F as c,bO as m,bP as n}from"./i7de8yvdg4jlu6h0.js";import{X as g}from"./mc2tj3xhtcshtn61.js";function y({gizmoId:i,onSuccess:r,onClose:t}){const s=u(),l=c(),a=g(),d=async()=>{try{await a.mutateAsync({gizmoId:i}),r()}catch{l.danger("Failed to delete gizmo. Please try again.")}};return e.jsx(m,{isOpen:!0,onClose:t,type:"danger",title:e.jsx(o,{id:"shLmv5",defaultMessage:"Delete GPT"}),primaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"nlWRPu",defaultMessage:"Delete GPT"}),color:"danger",loading:a.isPending,onClick:()=>{d()}}),secondaryButton:e.jsx(n.Button,{title:s.formatMessage({id:"D4IuIb",defaultMessage:"Cancel"}),color:"secondary",onClick:t}),children:e.jsx("div",{className:"text-sm",children:e.jsx(o,{id:"zIR+cK",defaultMessage:"Are you sure you want to delete this GPT? This cannot be undone."})})})}export{y as G};
//# sourceMappingURL=hqr1r1cc1wkd39ey.js.map
