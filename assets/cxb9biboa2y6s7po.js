import{j as e,M as C,c as E,r as c}from"./lklglvrzltpv3f05.js";import{cA as R,P as p,cB as k,be as b,cC as A,cD as M,cE as j,cF as O,cG as P,cH as F,cI as H,cJ as B,cK as _}from"./mc2tj3xhtcshtn61.js";import{G as m}from"./i4m4t1sfl2ukfiy2.js";import{cA as D,aw as I,N as T,dW as U,ch as W}from"./i7de8yvdg4jlu6h0.js";import"./0zwkq4p4h5hlkinb.js";function G({currentGizmoId:s,onClick:n}){const{isSidebarFlyoutOpen:t,onSidebarFlyoutOpenChange:r}=R(),o=t(p.Snorlax);return e.jsx("div",{className:"group flex w-full items-center justify-start screen-arch:mt-1",children:e.jsx(D,{onOpenChange:a=>r(p.Snorlax,a),side:"right",sideOffset:4,open:o,contentAlign:"end",triggerButton:e.jsxs("button",{className:I("flex flex-1 select-none items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm tracking-condensed text-token-text-secondary ease-[var(--spring-bounce)] hover:bg-token-sidebar-surface-secondary focus:ring-0 screen-arch:py-[7px] screen-arch:text-body screen-arch:hover:bg-token-main-surface-secondary motion-safe:active:scale-[98%] motion-safe:active:transition-transform",o&&"bg-token-main-surface-secondary"),onClick:n,children:[e.jsx("div",{className:"h-6 w-6",children:e.jsx("div",{className:"relative flex h-full items-center justify-center text-token-text-primary",children:e.jsx(k,{className:"icon-md font-semibold text-token-sidebar-icon"})})}),e.jsx("span",{className:"text-left",children:e.jsx(C,{...b.seeMoreProjectItems})})]}),size:"auto",children:e.jsx("div",{className:"max-h-[50dvh] w-80 overflow-x-auto px-2 [scrollbar-gutter:stable]",children:e.jsx(T,{children:e.jsx(A,{currentGizmoId:s,inSidebar:!0,customListItem:m})})})})})}function J({snorlaxes:s,currentGizmoId:n}){return e.jsx(e.Fragment,{children:s.map(t=>e.jsx(m,{gizmo:t.gizmo,isActive:t.gizmo.gizmo.id===n},t.gizmo.gizmo.id))})}function $({currentGizmoId:s}){const n=E(),t=c.useRef(!1),{snorlaxes:r,data:o,isLoading:a,isError:y,refetch:x,hasNextPage:v}=M(),u=r.slice(0,j),l=c.useRef(!1),[N,h]=c.useState(!0),f=c.useCallback(function(L){L&&h(!1),x()},[x,h]),w=r&&(r?.length>j||v),g=(r??[]).length===0,d=y||o===void 0&&!a&&l.current,z=U()&&!d&&(o===void 0||a);o===void 0&&!a&&!l.current&&(l.current=!0,f(!1));const S=r?.find(i=>i.gizmo.gizmo.id===s);return r?.length>0&&!t.current&&(O({namespace:P.ChatPageLoad})?.logTiming("render_snorlax_sidebar"),t.current=!0),e.jsxs(e.Fragment,{children:[d&&e.jsx(F,{showRetry:N,refetch:f}),!d&&!a&&e.jsxs(H,{header:e.jsxs("div",{className:"flex h-[26px] items-center justify-between",children:[n.formatMessage(b.projectsHeading),!g&&e.jsx(B,{})]}),isLastInGroup:!0,ulClassName:"screen-arch:mb-5",children:[e.jsx(J,{snorlaxes:u,currentGizmoId:s}),S&&!u.some(i=>i.gizmo.gizmo.id===s)&&e.jsx(m,{gizmo:S.gizmo,isActive:!0}),w&&e.jsx(G,{currentGizmoId:s}),!a&&g&&e.jsx(_,{})]}),z&&e.jsx(W,{className:"sticky top-4 z-30 mt-4 justify-self-center"})]})}export{$ as SnorlaxSidebarList};
//# sourceMappingURL=cxb9biboa2y6s7po.js.map
