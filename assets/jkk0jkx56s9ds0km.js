import{r as o,j as e,L as pe,c as F,v as oe,M as j,e as ye,an as Ce}from"./lklglvrzltpv3f05.js";import{u as ve,aw as k,o as X,dW as se,P as G,h as E,br as T,ak as O,f as je,ch as be,az as Pe,bF as ae,bG as ie,bk as Ae,f4 as V,fE as Te,fD as Oe,e4 as Re,bg as ne,e2 as De}from"./i7de8yvdg4jlu6h0.js";import{aZ as le,bh as Ie,fs as We,ft as _e,fu as ke,fv as Ne,fw as Ue,fx as Be,bV as U,cU as we,cW as ze,fd as Se,fy as He,bO as Ve,fz as Fe,cZ as Y,aM as Ge,cy as Ke,dl as $e,fA as Qe,fB as A,fC as ce,fD as Ye,fE as Ze,fj as Je,b1 as Xe}from"./mc2tj3xhtcshtn61.js";import{S as D}from"./hcil7bl6nyyvu0ms.js";import{S as qe}from"./heefrlxlra66lmjs.js";import{S as Ee}from"./gq1oquoigcb35b69.js";import{G as te,a as de}from"./c9jtvbm1l824hc0d.js";import{A as Z}from"./btkoqt4hbdc97fvt.js";import{G as es,a as ss,b as ts}from"./f02b02dlobc6ytua.js";import{d as rs,E as os,P as as}from"./0zwkq4p4h5hlkinb.js";import{a as me}from"./nqq4ud16rlffe18u.js";function re({gizmo:t,children:s,onClick:r,onModalOpen:a,onModalClose:m,selectOnly:l,className:u}){const f=ve("1825130190").value,[x,d]=o.useState(!1);return l?e.jsx("a",{className:k("gizmo-link cursor-pointer",u),href:"#",onClick:c=>{c.preventDefault(),r?.(c)},children:s}):f?e.jsxs(e.Fragment,{children:[x&&e.jsx(es,{gizmoId:t.gizmo.id,creatorId:t.gizmo.author.user_id,onClose:()=>{d(!1),m?.()},children:e.jsx(ss,{as:"link",to:le(t)})}),e.jsx("a",{className:k("gizmo-link cursor-pointer",u),href:"#",onClick:c=>{c.preventDefault(),r?.(c),d(!0),a?.()},children:s})]}):e.jsx(pe,{to:le(t),className:k("gizmo-link",u),target:"_blank",onClick:r,children:s})}const ee=o.forwardRef(function({className:s,inputClassName:r,iconClassName:a,open:m,setOpen:l,resultsSizeOffset:u,placeholder:f,effectiveRole:x,onSelect:d},c){const v=F(),[h,i]=o.useState(""),[g,p]=o.useState(""),[b,M]=o.useState(!1),S=m??b,N=l??M,w=o.useRef(null),R=X()?.isWorkspaceAccount(),I=ve("3054422710").value,W=R!==void 0&&R&&I,n=se();o.useEffect(()=>{if(!S)return;const L=Q=>{Q.key==="Escape"&&(N(!1),w.current?.blur())},$=Q=>{Q.target instanceof Node&&typeof c!="function"&&!c?.current?.contains(Q.target)&&N(!1)};return document.addEventListener("keydown",L,!1),document.addEventListener("mousedown",$,!1),()=>{document.removeEventListener("keydown",L,!1),document.removeEventListener("mousedown",$,!1)}},[S,N,w,c]);const[y,P]=o.useState();o.useEffect(()=>{const L=()=>{P(window.visualViewport?.height)};return window.visualViewport?.addEventListener("resize",L),L(),()=>{window.visualViewport?.removeEventListener("resize",L)}},[P]);const[B,K]=o.useState(!1);return o.useEffect(()=>{B&&!S&&N(!0)},[B,N,S]),o.useEffect(()=>{const L=setTimeout(()=>{p(h)},250);return()=>{clearTimeout(L)}},[h]),e.jsxs(me,{as:"div",className:k("group relative rounded-xl",s),ref:c,style:n?{width:"calc(min(var(--screen-content-ideal-size, 40rem), var(--container-w-except-padding)) - 1rem)"}:void 0,children:[e.jsx(Ie,{className:k("pointer-none icon-md absolute top-0 h-full text-token-text-tertiary",a)}),e.jsx("input",{className:k("z-10 w-full rounded-xl border border-token-border-light bg-token-main-surface-primary py-2 pr-3 font-normal outline-0 delay-100","",r),placeholder:f??v.formatMessage(C.discoverySearch),value:h,onChange:L=>i(L.target.value),onFocus:()=>{N(!0),G.logEvent(E.searchOpened)},ref:w}),e.jsx(rs,{show:S,children:e.jsx(me.Panel,{static:!0,className:"absolute top-[calc(100%-10px)] w-full overflow-y-auto rounded-lg rounded-t-none border border-t-0 border-token-border-light bg-token-main-surface-primary px-3 py-2",style:{maxHeight:y!=null?y+(u??0):"100vh"},children:e.jsx(is,{query:g,effectiveRole:x,setPopoverForceOpen:K,onSelect:d,showWorkspaceResults:W})})})]})});function q(){return e.jsx("div",{className:"flex items-center justify-center py-1",children:e.jsx(be,{})})}function is({query:t,effectiveRole:s,setPopoverForceOpen:r,showWorkspaceResults:a,onSelect:m}){const[l,u]=o.useState("ALL");o.useEffect(()=>{G.logEvent(E.searchStart)},[]);const{data:f,isLoading:x}=We(t),{data:d,isLoading:c}=_e(t,a),{data:v,isLoading:h}=ke({cutId:"recent",limit:3});return e.jsx(ns,{debouncedQuery:t,searchResults:f?.items,isLoadingSearch:x,searchResultsCursor:f?.cursor,showWorkspaceResults:a,workspaceSearchResults:d?.items,workspaceSearchResultsCursor:d?.cursor,isLoadingWorkspaceSearch:c,isLoadingRecent:h,recent:v?.pages.flatMap(i=>i.list.items.map(g=>g.resource))??[],effectiveRole:s,setPopoverForceOpen:r,onSelect:m,activeTab:l,setActiveTab:u})}function ns({debouncedQuery:t,searchResults:s,isLoadingSearch:r,searchResultsCursor:a,showWorkspaceResults:m,workspaceSearchResults:l,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:f,recent:x,isLoadingRecent:d,effectiveRole:c,setPopoverForceOpen:v,onSelect:h,activeTab:i,setActiveTab:g}){const p=o.useRef(oe());if(o.useEffect(()=>{G.logEvent(E.searchStart)},[]),o.useEffect(()=>{!r&&s&&(p.current=oe(),s.length>0?Promise.all(s.map((b,M)=>{G.logEvent(E.searchDisplayResult,{search_id:p.current,gizmo_id:b.gizmo.id,position:M,query:t})})):G.logEvent(E.searchNoResults,{query:t}))},[s,r,t]),t===""&&d)return e.jsx(q,{});if(m){if(i==="ALL"&&r||i==="WORKSPACE"&&f)return e.jsx(q,{});if(t!==""&&!r&&!f&&(!s||s.length===0)&&(!l||l.length===0))return e.jsx("div",{className:"mx-2",children:e.jsx(_,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(j,{...C.discoveryNoResultsSearch})})})}else{if(r)return e.jsx(q,{});if(t!==""&&!r&&(!s||s.length===0))return e.jsx("div",{className:"mx-2",children:e.jsx(_,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(j,{...C.discoveryNoResultsSearch})})})}return e.jsxs(e.Fragment,{children:[e.jsx(cs,{query:t,activeTab:i,setActiveTab:g,showWorkspaceResults:m,recentSearchResults:x??[]}),e.jsx(ls,{query:t}),e.jsx(ds,{query:t,searchIdRef:p.current,searchResults:s,searchResultsCursor:a,isLoadingSearch:r,workspaceSearchResults:l,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:f,recentSearchResults:x??[],activeTab:i,setPopoverForceOpen:v,effectiveRole:c,onSelect:h})]})}function ls({query:t}){return/search\s?gpt/i.test(t)?e.jsx("div",{className:"mb-1 mt-2 rounded-lg bg-gray-50 py-3 text-center text-xs dark:bg-gray-750",children:e.jsx(j,{id:"NEGLw8",defaultMessage:"Learn more about OpenAI's <searchGPTLink>SearchGPT prototype</searchGPTLink>",values:{searchGPTLink:r=>e.jsx(pe,{to:"/search",target:"_blank",className:"text-brand-blue-800 dark:text-blue-400",onClick:()=>{G.logEvent(E.searchGPTGizmoBannerLinkClicked)},children:r})}})}):null}function _({children:t,onClick:s,isSelected:r,isClickable:a}){return e.jsx("div",{className:`px-3 pb-2 text-xs text-token-text-tertiary ${r?"border-b-2 font-bold":"font-semibold"} ${a?"cursor-pointer":""}`,onClick:()=>{s?.()},children:t})}function cs({query:t,activeTab:s,setActiveTab:r,showWorkspaceResults:a,recentSearchResults:m}){const l=Ne();return t===""?m&&m.length>0?e.jsx(_,{onClick:void 0,isSelected:!1,isClickable:!1,children:e.jsx(j,{...C.discoverySearchRecentlyUsed})}):e.jsx(_,{onClick:void 0,isSelected:void 0,isClickable:!1,children:e.jsx(j,{...C.discoverySearchRecentlyUsedEmpty})}):e.jsxs("div",{className:"flex",children:[e.jsx(_,{onClick:()=>r("ALL"),isSelected:s==="ALL"&&a,isClickable:a,children:e.jsx(j,{...C.discoveryAllResultsHeader})}),a&&e.jsx(_,{onClick:()=>r("WORKSPACE"),isSelected:s==="WORKSPACE",isClickable:!0,children:e.jsx(j,{...C.discoveryWorkspaceResultsHeader,values:{workspaceName:l}})})]})}function ds({query:t,searchIdRef:s,searchResults:r,searchResultsCursor:a,isLoadingSearch:m,workspaceSearchResults:l,workspaceSearchResultsCursor:u,isLoadingWorkspaceSearch:f,recentSearchResults:x,setPopoverForceOpen:d,activeTab:c,effectiveRole:v,onSelect:h}){const[i,g]=o.useState(!1),p=Ue(t,i,c==="WORKSPACE",c==="WORKSPACE"?u:a),{data:b,hasNextPage:M,fetchNextPage:S,isFetchingNextPage:N,isError:w}={...p,data:p.data?.pages.flatMap(n=>n.items.map(y=>y))??[]},[R,I]=o.useState(b.length),W=o.useRef(null);return o.useEffect(()=>{b.length>R&&(I(b.length),W.current?.scrollIntoView({behavior:"smooth",block:"nearest"}))},[b.length,R]),t===""&&x&&x.length>0?e.jsx(e.Fragment,{children:x.map((n,y)=>e.jsx(H,{searchId:s,position:y,query:t,resource:n,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},n.gizmo.id))}):t!==""&&!m&&c==="ALL"&&(r==null||r.length===0)?e.jsx("div",{className:"mt-4 px-3 pb-2 text-xs font-semibold text-token-text-tertiary",children:e.jsx(j,{...C.discoveryNoResultsSearch})}):t!==""&&!f&&c==="WORKSPACE"&&(l==null||l.length===0)?e.jsx("div",{className:"mt-4 px-3 pb-2 text-xs font-semibold text-token-text-tertiary",children:e.jsx(j,{...C.discoveryNoResultsSearch})}):e.jsx("div",{children:c==="ALL"?e.jsxs("div",{children:[r&&r.map((n,y)=>e.jsx(H,{searchId:s,position:y,query:t,resource:n,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},n.gizmo.id)),r&&b&&b.map((n,y)=>e.jsx(H,{searchId:s,position:y+r?.length,query:t,resource:n,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},n.gizmo.id)),(!i&&b.length===0||M||N||w)&&a!=null&&e.jsx(T,{color:w?"danger-outline":"secondary",onClick:()=>{g(!0),S(),d?.(!0)},loading:N,fullWidth:!0,className:"mt-2 md:mt-3",children:w?e.jsx(j,{...C.discoveryLoadMoreError}):e.jsx(j,{...C.discoveryLoadMore})})]}):e.jsxs("div",{children:[l&&l.map((n,y)=>e.jsx(H,{searchId:s,position:y,resource:n,query:t,setPopoverForceOpen:d},n.gizmo.id)),l&&b&&b.map((n,y)=>e.jsx(H,{searchId:s,position:y+l?.length,query:t,resource:n,effectiveRole:v,setPopoverForceOpen:d,onSelect:h},n.gizmo.id)),(!i&&b.length===0||M||N||w)&&u!=null&&e.jsx(T,{color:w?"danger-outline":"secondary",onClick:()=>{g(!0),S(),d?.(!0)},fullWidth:!0,className:"mt-2 md:mt-3",loading:N,children:w?e.jsx(j,{...C.discoveryLoadMoreError}):e.jsx(j,{...C.discoveryLoadMore})})]})})}function H({searchId:t,resource:s,position:r,query:a,effectiveRole:m,setPopoverForceOpen:l,onSelect:u}){const f=s.gizmo.vanity_metrics?.num_conversations_str,x=Be(),d=s.gizmo.tags?.includes(U.WorkspaceDisabled)&&m!==O.OWNER;return e.jsxs(re,{gizmo:s,className:k("group mx-2 flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-white/10",d&&"opacity-50 hover:opacity-100"),onClick:()=>{u?u(s):G.logEvent(E.storeClickGizmo,{search_id:t,gizmo_id:s.gizmo.id,position:r,query:a,section:"search"})},onModalOpen:()=>{l?.(!0)},onModalClose:()=>{l?.(!1)},selectOnly:!!u,children:[e.jsx(we,{isFirstParty:!!s.gizmo.tags?.includes(U.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:k("h-8 w-8 shrink-0",d&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex flex-col space-y-1 truncate",children:[e.jsx("div",{className:"flex flex-row items-end space-x-2",children:e.jsx("span",{className:"shrink-0 truncate text-sm font-semibold",children:s.gizmo.display.name})}),x&&e.jsx("span",{className:"max-w-md truncate text-xs text-token-text-tertiary",children:s.gizmo.display.description}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"-mt-1",children:e.jsx(ze,{gizmo:s,className:"truncate text-xs text-token-text-tertiary",hideLink:!0})}),f&&e.jsxs("div",{className:"flex items-center gap-1 font-semibold text-token-text-tertiary",style:{marginTop:"-2px"},children:[e.jsx(Se,{className:"icon-xs"}),e.jsx("span",{className:"line-clamp-1 text-xs",children:f})]})]})]})]})}const C=je({discoveryAllResultsHeader:{id:"gizmo.discovery.AllResultsHeader",defaultMessage:"All"},discoveryWorkspaceResultsHeader:{id:"gizmo.discovery.workspaceResultsHeaderName",defaultMessage:"{workspaceName} workspace"},discoveryNoResultsSearch:{id:"gizmo.discovery.search.empty",defaultMessage:"No results found"},discoverySearch:{id:"gizmo.discovery.search",defaultMessage:"Search GPTs"},discoverySearchRecentlyUsed:{id:"gizmo.discovery.search.recentlyUsed",defaultMessage:"Recently Used"},discoverySearchRecentlyUsedEmpty:{id:"gizmo.discovery.search.recentlyUsedEmpty",defaultMessage:"No recently used GPTs"},discoveryLoadMore:{id:"gizmo.discovery.loadMore",defaultMessage:"See more"},discoveryLoadMoreError:{id:"gizmo.discovery.loadMoreError",defaultMessage:"Error loading more"}}),Me=Pe.div`grid grid-cols-1 gap-x-1.5 gap-y-1 md:gap-x-2 md:gap-y-1.5 lg:grid-cols-2 lg:gap-x-3 lg:gap-y-2.5`,ue="gpt_store";function ms(t,s){s.scrollLeft>t.offsetLeft?s.scrollBy({left:t.offsetLeft-s.scrollLeft-20,behavior:"smooth"}):s.scrollLeft+s.clientWidth<t.offsetLeft+t.clientWidth&&s.scrollBy({left:t.offsetLeft+t.clientWidth-s.clientWidth-s.scrollLeft+20,behavior:"smooth"})}function Ls({anon:t}){const[s,r]=o.useState(()=>ae.getItem(ie.GizmoDiscoveryLocale)),a=x=>{r(x),ae.setItem(ie.GizmoDiscoveryLocale,x)},m=X(),[l,u]=o.useState(!1),f=m?.isOwnerOfAccount()&&!l?O.OWNER:O.STANDARD;return e.jsx(us,{anon:t,currAccount:m,requestedLocale:s,effectiveRole:f,setPretendStandardUser:u,setLocale:a})}function us({anon:t,currAccount:s,requestedLocale:r,effectiveRole:a,setPretendStandardUser:m,setLocale:l}){const[u,f]=o.useState(void 0),x=!!t||s?.isPersonalAccount()&&!0,{data:d,isLoading:c,isError:v}=He(r,x);o.useEffect(()=>{d&&f({locale:d.locale,workspace_filtered:d.workspace_filtered,cuts:d.cuts.map(i=>({info:i.info,list:{items:i.list.items.map(g=>g.resource),cursor:i.list.cursor}}))})},[d]);const h=(...i)=>{const g=ke(...i);return{...g,data:g.data?.pages.flatMap(p=>p.list.items.map(b=>b.resource))??[]}};return e.jsx(fs,{anon:t,discoveryLanding:u,isLoading:c,isError:v,effectiveRole:a,setPretendStandardUser:m,requestedLocale:r,setLocale:l,useFetchMoreQuery:h})}function fs({anon:t,discoveryLanding:s,isLoading:r,isError:a,effectiveRole:m,setPretendStandardUser:l,requestedLocale:u,setLocale:f,useFetchMoreQuery:x}){const d=X(),c=se(),v=s?.locale??u,h=o.useRef({}),[i,g]=o.useState({}),p=o.useMemo(()=>Ve(Ae(s?.cuts.map(n=>({id:n.info.id,name:n.info.display_group}))),"name"),[s]),b=o.useRef(null),M=p.find(n=>i[n.id])??p[0];o.useEffect(()=>{const n=h.current,y=new IntersectionObserver(P=>{P.forEach(B=>{for(const K of p){const L=n[K.id];L!=null&&B.target===L&&g($=>({...$,[K.id]:B.isIntersecting}))}})},{root:null,rootMargin:"-96px",threshold:.1});return Object.values(n).forEach(P=>{P!=null&&y.observe(P)}),()=>{Object.values(n).forEach(P=>{P!=null&&y.unobserve(P)})}},[h,p]);const S=o.useRef(null),N=o.useRef(null),[w,R]=o.useState(0);o.useEffect(()=>{const n=N.current,y=()=>{n!=null&&R(n.scrollTop)};return n?.addEventListener("scroll",y),window.addEventListener("resize",y),y(),()=>{n?.removeEventListener("scroll",y),window.removeEventListener("resize",y)}},[N,R]);const I=e.jsx("div",{className:"flex h-full w-full items-center justify-center",children:a?e.jsx(Fe,{type:"danger",children:e.jsx(j,{...z.discoveryError})}):e.jsx(be,{})}),W=e.jsxs("div",{className:"mx-auto max-w-3xl overflow-x-clip px-4 screen-arch:w-full",children:[e.jsx(gs,{}),!t&&e.jsx(ee,{ref:S,className:k("z-20 mb-6 mt-2 shadow-[0px_10px_10px_-6px_rgba(0,0,0,0.04)]",!c&&"flex-grow"),inputClassName:"md:h-14 h-12 text-base pl-12",iconClassName:"left-5",resultsSizeOffset:Math.min(w-260,-110)}),p.length>1&&e.jsx(xs,{displayGroups:p,currentDisplayGroup:M,scrollToDisplayGroup:n=>{(h.current[n.id]??b.current).scrollIntoView({behavior:"smooth",block:"start"})}}),e.jsx("div",{ref:b,className:"scroll-mt-28"}),s?.cuts.map(n=>n.info.display_type==="featured"?e.jsx(hs,{info:n.info,items:n.list.items,ref:y=>{y!=null&&(h.current[n.info.id]=y)},effectiveRole:m},n.info.id):e.jsx(ys,{info:n.info,items:n.list.items,cursor:n.list.cursor??void 0,ref:y=>{y!=null&&(h.current[n.info.id]=y)},anon:t,effectiveRole:m,useFetchMoreQuery:x},n.info.id))??[]]});return r||a?e.jsxs(e.Fragment,{children:[t&&!c?e.jsx(Z,{redirectUrl:Y(),className:"sticky top-0 z-30 h-14 bg-token-main-surface-primary"}):!c&&e.jsx(J,{locale:v,setLocale:f,currAccount:d}),c&&e.jsx(de,{header:t?e.jsx(Z,{redirectUrl:Y(),className:"z-30 flex h-14 items-center bg-token-main-surface-primary"}):e.jsx(J,{locale:v,setLocale:f,currAccount:d}),children:I}),!c&&I]}):e.jsxs("div",{ref:N,className:"h-full overflow-y-auto",children:[t&&!c?e.jsx(Z,{redirectUrl:Y(),className:"sticky top-0 z-30 h-14 bg-token-main-surface-primary"}):!c&&e.jsxs(e.Fragment,{children:[d?.isWorkspaceAccount()&&e.jsx(ge,{role:m,onPretendStandardUser:n=>{l(n)}}),e.jsx(J,{pageSearchRef:S,locale:v,setLocale:f,currAccount:d})]}),c&&e.jsx(de,{header:t?e.jsx(Z,{redirectUrl:Y(),className:"z-30 flex h-14 items-center bg-token-main-surface-primary"}):e.jsxs(e.Fragment,{children:[d?.isWorkspaceAccount()&&e.jsx(ge,{role:m,onPretendStandardUser:n=>{l(n)}}),e.jsx(J,{pageSearchRef:S,locale:v,setLocale:f,currAccount:d})]}),footer:s?.workspace_filtered&&!d?.isOwnerOfAccount()&&e.jsx("div",{className:V.footer,children:e.jsx(Ge,{type:"primary",children:e.jsx(fe,{})})}),children:W}),!c&&W,!c&&s?.workspace_filtered&&!d?.isOwnerOfAccount()&&e.jsx(fe,{})]})}function gs(){return e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"my-2 text-center text-3xl font-bold md:my-4 md:text-5xl",children:e.jsx(j,{...z.discoverySplashHeader})}),e.jsx("div",{className:"mx-auto w-full text-center text-sm text-token-text-secondary md:text-lg md:leading-tight",children:e.jsx(j,{...z.discoverySplashDescription})})]})}function xs({displayGroups:t,currentDisplayGroup:s,scrollToDisplayGroup:r}){const a=o.useRef(null),m=F(),l=(...i)=>m.formatMessage(...i),u=o.useRef({}),[f,x]=o.useState(!1);o.useEffect(()=>{if(f||s==null)return;const g=u.current[s.id];if(g==null)return;const p=a.current;p!=null&&ms(g,p)},[s,f]);const[d,c]=o.useState(!1),[v,h]=o.useState(!1);return o.useEffect(()=>{const i=a.current,g=()=>{i!=null&&(c(i.scrollLeft>0),h(i.scrollLeft+i.clientWidth<i.scrollWidth))};return i?.addEventListener("scroll",g),window.addEventListener("resize",g),g(),()=>{i?.removeEventListener("scroll",g),window.removeEventListener("resize",g)}},[a]),e.jsxs("div",{className:"sticky top-14 z-10 -ml-4 mb-12 w-screen bg-token-main-surface-primary py-2 text-sm md:ml-0 md:w-full md:pb-0",children:[d&&e.jsx("div",{className:"absolute left-0 top-2 hidden h-full items-end bg-gradient-to-r from-white from-50% to-transparent pr-8 dark:from-gray-800 md:block",children:e.jsx("button",{className:"mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/20",onClick:()=>{a.current!=null&&a.current.scrollBy({left:-400,behavior:"smooth"})},children:e.jsx(Te,{className:"icon-sm"})})}),e.jsx("div",{className:"no-scrollbar flex scroll-m-5 gap-1.5 overflow-x-auto md:overflow-hidden",ref:a,children:t.map(i=>e.jsx("div",{className:k("cursor-pointer select-none scroll-mx-5 whitespace-nowrap rounded-3xl px-3 py-2 first:ml-4 last:mr-4 md:px-2 md:first:ml-0 md:last:mr-0",i.id===s?.id?"border-token-text-primary bg-black text-token-main-surface-primary dark:bg-gray-100 md:rounded-none md:border-b-2 md:bg-transparent md:text-token-text-primary dark:md:bg-transparent":"bg-token-main-surface-secondary hover:bg-gray-100 hover:text-token-text-primary dark:hover:bg-white/20 md:rounded-lg md:bg-transparent md:text-token-text-tertiary md:hover:bg-gray-50 dark:md:bg-transparent dark:md:hover:bg-gray-700"),onClick:()=>{x(!0),r(i),setTimeout(()=>{x(!1)},1e3),G.logEvent(E.storeClickCategory,{category:i.id})},ref:g=>{g!=null&&(u.current[i.id]=g)},children:l({id:`gizmo.categoryName.${i.name}`,defaultMessage:i.name,description:"store category"})},i.id))}),v&&e.jsx("div",{className:"absolute right-0 top-2 hidden h-full bg-gradient-to-l from-white from-50% to-transparent pl-8 dark:from-gray-800 md:block",children:e.jsx("button",{className:"mt-2 rounded-full bg-gray-100 p-1 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-white/10",onClick:()=>{a.current!=null&&a.current.scrollBy({left:400,behavior:"smooth"})},children:e.jsx(qe,{className:"icon-sm"})})})]})}function fe(){const t=F(),s=Ne(),r=Ke();return e.jsxs("div",{className:k("fixed bottom-0 flex w-full items-center justify-center gap-2 bg-token-main-surface-secondary p-3 text-sm text-token-text-secondary",!r&&"md:w-[calc(100%-16rem)]"),children:[e.jsx(Ee,{className:"icon-sm"}),t.formatMessage(z.discoveryThirdPartyGPTsDisabled,{workspaceName:s})]})}function ge({role:t,onPretendStandardUser:s}){const r=F();return Oe()?e.jsxs("div",{className:"h-52px flex w-full items-center justify-center gap-2 bg-gray-100 p-3 text-sm dark:bg-gray-700",children:[e.jsx(Ee,{className:"icon-sm"}),e.jsx(j,{id:"gizmo.discovery.browsingAsOwner",defaultMessage:"You're viewing as a <b>workspace member</b>",values:{b:m=>e.jsxs(D.Root,{defaultValue:t,onValueChange:l=>{s(l===O.STANDARD)},children:[e.jsxs(D.Trigger,{className:"-mx-2 -my-2 bg-transparent px-1 font-semibold",children:[e.jsx(Re,{disabled:t!==O.OWNER,label:r.formatMessage({id:"gizmo.discovery.browsingAsOwnerTooltip",defaultMessage:"Owners can access all third-party GPTs, even if they haven’t been approved."}),side:"bottom",children:e.jsx(D.Value,{})}),e.jsx(D.Icon,{})]}),e.jsx(D.Portal,{children:e.jsxs(D.Content,{children:[e.jsx(D.Item,{value:O.OWNER,children:e.jsx(j,{id:"gizmo.discovery.browsingOwnerRole",defaultMessage:"workspace owner"})}),e.jsx(D.Item,{value:O.STANDARD,children:e.jsx(j,{id:"gizmo.discovery.browsingMemberRole",defaultMessage:"workspace member"})})]})})]})}})]}):null}function J({pageSearchRef:t,locale:s,setLocale:r,currAccount:a}){const m=Je(),l=ye(),u=F(),f=$e(),x=se(),[d,c]=o.useState(!1),[v,h]=o.useState(!1);o.useEffect(()=>{if(t==null||typeof t=="function"){c(!1);return}const p=t?.current,b=new IntersectionObserver(M=>{M.forEach(S=>{S.target===p&&c(!S.isIntersecting)})},{root:null,rootMargin:"20px",threshold:.5});return p!=null&&b.observe(p),()=>{p!=null&&b.unobserve(p)}},[t]);const i=a?.canCreateGizmos(),g=e.jsxs(Ge,{leading:!0,type:"primary",className:V.header,children:[e.jsxs("div",{className:V.headerLeading,children:[e.jsx(Qe,{}),e.jsx(ne,{side:"right",label:s===A.GLOBAL?u.formatMessage(z.discoveryGlobalViewOn):u.formatMessage(z.discoveryGlobalViewOff),children:e.jsx(T,{color:"ghost",onClick:()=>{s===A.GLOBAL?r(A.ENGLISH):r(A.GLOBAL)},children:e.jsx(ce,{className:k("icon-sm",s===A.GLOBAL?"text-token-text-primary":"text-token-text-tertiary")})})})]}),e.jsx("div",{className:V.headerCenter,children:e.jsx(ee,{className:"max-w-3xl",inputClassName:k("h-10 text-sm pl-9",!d&&"hidden"),iconClassName:"left-4",open:v,setOpen:h,resultsSizeOffset:-90,placeholder:f?u.formatMessage(z.discoverySearch):u.formatMessage(z.discoverySearchSmall)})}),e.jsxs("div",{className:V.headerTrailing,children:[i&&e.jsx("div",{className:"screen-arch:flex screen-arch:items-center",children:e.jsx(T,{color:"ghost",onClick:()=>{l("/gpts/mine"),G.logEvent(E.storeMyGizmos)},children:e.jsx(j,{...z.discoveryMyGPTs})})}),e.jsx(xe,{canCreateGizmos:i,createUrl:m})]})]});return x?g:e.jsx(e.Fragment,{children:e.jsxs(Ye,{className:"z-30 mx-auto flex w-full justify-center gap-2 whitespace-nowrap pt-[1.125rem]",children:[e.jsxs("div",{className:k("w-[calc((100%-768px)/2)] min-w-fit items-center",v?"hidden lg:flex":"flex"),children:[e.jsx(os,{}),e.jsx(ne,{side:"right",label:s===A.GLOBAL?u.formatMessage(z.discoveryGlobalViewOn):u.formatMessage(z.discoveryGlobalViewOff),children:e.jsx(T,{color:"ghost",onClick:()=>{s===A.GLOBAL?r(A.ENGLISH):r(A.GLOBAL)},children:e.jsx(ce,{className:k("icon-sm",s===A.GLOBAL?"text-token-text-primary":"text-token-text-tertiary")})})})]}),e.jsx(ee,{className:"max-w-3xl flex-grow",inputClassName:k("h-10 text-sm pl-9",!d&&"hidden"),iconClassName:"left-4",open:v,setOpen:h,resultsSizeOffset:-90,placeholder:f?u.formatMessage(z.discoverySearch):u.formatMessage(z.discoverySearchSmall)}),e.jsxs("div",{className:k("w-[calc((100%-768px)/2)] min-w-fit justify-end gap-2",v?"hidden lg:flex":"flex"),children:[i&&e.jsx(T,{color:"ghost",onClick:()=>{l("/gpts/mine"),G.logEvent(E.storeMyGizmos)},children:e.jsx(j,{...z.discoveryMyGPTs})}),e.jsx(xe,{canCreateGizmos:i,createUrl:m})]}),e.jsx(as,{})]})})}const xe=({canCreateGizmos:t,createUrl:s})=>{const[r,a]=o.useState(!1),m=o.useRef(void 0),l=De(),f=X()?.planType??"unknown",x="create_gpt",d=()=>{t||(G.logPopoverHover({location:ue,type:x,plan_type:f}),clearTimeout(m.current),a(!0))},c=()=>{t||(m.current=l(function(){a(!1)},300))},v=ye(),h=()=>{G.logUpsellGetPlusButtonClicked({location:ue,type:x,plan_type:f}),Xe(v,"Gizmo Discovery page upsell")},i=t?()=>G.logEvent(E.storeCreateGizmo):g=>g.preventDefault();return e.jsxs("div",{onMouseEnter:d,onMouseLeave:c,className:"relative screen-arch:flex screen-arch:items-center",children:[e.jsx(T,{color:"primary",disabled:!t,visuallyDisabled:!t,onClick:i,as:"link",to:s,icon:Ze,"data-testid":"create-gpt-discovery-button",children:e.jsx(j,{...z.discoveryCreateGPT})}),!t&&r&&e.jsxs("div",{className:"absolute right-0 z-10 mt-2 w-64 rounded-lg border border-token-border-light bg-token-main-surface-primary p-3 text-sm shadow-lg screen-arch:top-12",children:[e.jsx("p",{className:"mb-2 whitespace-normal break-words from-token-text-tertiary text-left font-normal",children:e.jsx(j,{...z.createGPTUpsell})}),e.jsx(T,{color:"secondary",onClick:h,size:"small",children:e.jsx(j,{...z.createGPTUpsellButtonLabel})})]})]})},hs=o.forwardRef(function({info:s,items:r,effectiveRole:a},m){return e.jsx(Le,{title:s.title,description:s.description,ref:m,children:e.jsx(Me,{children:r.map((l,u)=>e.jsx(ps,{resource:l,effectiveRole:a},`${u}-${l.gizmo.id}`))})})});function ps({resource:t,effectiveRole:s}){const r=t.gizmo.vanity_metrics?.num_conversations_str,a=t.gizmo.tags?.includes(U.WorkspaceDisabled)&&s!==O.OWNER;return e.jsx(te,{children:e.jsxs(re,{gizmo:t,className:k("group flex h-24 items-center gap-5 overflow-hidden rounded-xl bg-gray-50 px-7 py-8 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-white/10 md:h-32 lg:h-36",a&&"opacity-50 hover:opacity-100"),onClick:()=>{G.logEvent(E.storeClickGizmo,{gizmo_id:t.gizmo.id,section:"featured"})},children:[e.jsx(we,{isFirstParty:!!t.gizmo.tags?.includes(U.FirstParty),src:t.gizmo.display.profile_picture_url??void 0,className:k("h-16 w-16 flex-shrink-0 md:h-24 md:w-24",a&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"line-clamp-2 font-semibold md:text-lg",children:t.gizmo.display.name}),e.jsx("span",{className:"line-clamp-2 text-xs md:line-clamp-3",children:t.gizmo.display.description}),e.jsxs("div",{className:"mt-1 line-clamp-1 flex justify-start gap-1 text-xs text-token-text-tertiary",children:[e.jsx(ze,{gizmo:t,className:"text-xs",hideLink:!0}),r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[10px]",children:"•"}),e.jsx(Se,{className:"mt-0.5 h-3 w-3"}),r]})]})]})]})})}const ys=o.forwardRef(function({info:s,items:r,cursor:a,anon:m,effectiveRole:l,useFetchMoreQuery:u},f){const[x,d]=o.useState(r.length===0),{data:c,hasNextPage:v,fetchNextPage:h,isFetchingNextPage:i,isError:g}=u({cutId:s.id,locale:s.locale,limit:6,cursor:a,enabled:x});o.useEffect(()=>{r.length===0&&h()},[h,r.length]);const[p,b]=o.useState(c.length),M=o.useRef(null),S=Ce(.1);return o.useEffect(()=>{c.length>p&&(b(c.length),M.current?.scrollIntoView({behavior:"smooth",block:"nearest"}))},[c.length,p]),e.jsxs(Le,{title:s.title,description:s.description,ref:f,children:[e.jsxs(Me,{children:[r.map((N,w)=>e.jsx(he,{resource:N,rank:w+1,cutId:s.id,effectiveRole:l},w)),c.map((N,w)=>e.jsx(he,{resource:N,rank:r.length+w+1,cutId:s.id,delay:S(w-p,c.length-p),effectiveRole:l},w))]}),(!x||v||i||g)&&!m&&a!=null&&e.jsx(T,{color:g?"danger-outline":"secondary",onClick:()=>{d(!0),G.logEvent(E.storeLoadMore,{section:s.id}),h()},fullWidth:!0,className:"mt-2 md:mt-3",loading:i,children:g?e.jsx(j,{...z.discoveryLoadMoreError}):e.jsx(j,{...z.discoveryLoadMore})}),e.jsx("div",{ref:M})]})});function he({resource:t,rank:s,cutId:r,delay:a,effectiveRole:m}){const l=t.gizmo.tags?.includes(U.WorkspaceDisabled)&&m!==O.OWNER,u=t.gizmo.tags?.includes(U.FirstParty);return e.jsx(te,{delay:a,children:e.jsxs(re,{gizmo:t,className:k("group flex h-[104px] items-center gap-2.5 overflow-hidden rounded-xl px-1 py-4 hover:bg-token-main-surface-secondary md:px-3 md:py-4 lg:px-3",l&&"opacity-50 hover:opacity-100"),onClick:()=>{G.logEvent(E.storeClickGizmo,{gizmo_id:t.gizmo.id,position:s,section:u?"first_party":r})},children:[e.jsx("div",{className:"text-md flex w-8 shrink-0 items-center justify-center font-semibold",children:s}),e.jsx(ts,{resource:t,grayedOut:l})]},t.gizmo.id)})}const Le=o.forwardRef(function({title:s,description:r,className:a,children:m},l){return e.jsxs("div",{ref:l,className:"h-fit scroll-mt-28 last:min-h-[calc(100vh-8rem)]",children:[e.jsxs(te,{animateTap:!1,children:[e.jsx("div",{className:"text-xl font-semibold md:text-2xl",children:s}),r&&e.jsx("div",{className:"text-sm text-token-text-tertiary md:text-base",children:r})]}),e.jsx("div",{className:k("mb-10 mt-4",a),children:m})]})}),z=je({discoveryAllResultsHeader:{id:"gizmo.discovery.AllResultsHeader",defaultMessage:"All"},discoveryWorkspaceResultsHeader:{id:"gizmo.discovery.workspaceResultsHeaderName",defaultMessage:"{workspaceName} workspace"},discoveryEmpty:{id:"gizmo.discovery.empty",defaultMessage:"Nothing to discover"},discoveryNoResultsSearch:{id:"gizmo.discovery.search.empty",defaultMessage:"No results found"},discoveryError:{id:"gizmo.discovery.error",defaultMessage:"Error loading GPTs"},discoverySearch:{id:"gizmo.discovery.search",defaultMessage:"Search GPTs"},discoverySearchSmall:{id:"gizmo.discovery.searchSmall",defaultMessage:"Search"},discoverySearchRecentlyUsed:{id:"gizmo.discovery.search.recentlyUsed",defaultMessage:"Recently Used"},discoverySearchRecentlyUsedEmpty:{id:"gizmo.discovery.search.recentlyUsedEmpty",defaultMessage:"No recently used GPTs"},discoverySearchResults:{id:"gizmo.discovery.search.results",defaultMessage:"Search Results"},discoveryLoadMore:{id:"gizmo.discovery.loadMore",defaultMessage:"See more"},discoveryLoadMoreError:{id:"gizmo.discovery.loadMoreError",defaultMessage:"Error loading more"},discoveryMyGPTs:{id:"gizmo.discovery.myGPTs",defaultMessage:"My GPTs"},discoveryCreateGPT:{id:"gizmo.discovery.createGPT",defaultMessage:"Create"},discoveryThirdPartyGPTsDisabled:{id:"gizmo.discovery.thirdPartyGPTsDisabled",defaultMessage:"Your admin has blocked GPTs created outside {workspaceName}."},discoverySplashHeader:{id:"gizmo.discovery.splashHeader",defaultMessage:"GPTs"},discoverySplashDescription:{id:"gizmo.discovery.splashDescription",defaultMessage:"Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills."},discoveryGlobalViewOn:{id:"gizmo.discovery.globalViewOn",defaultMessage:"Global View On"},discoveryGlobalViewOff:{id:"gizmo.discovery.globalViewOff",defaultMessage:"Global View Off"},createdAgoLabel:{id:"gizmo.discovery.createdAgoLabel",defaultMessage:"Created {createdAgo}"},createGPTUpsell:{id:"gizmo.discovery.createGPTUpsell",defaultMessage:"Get ChatGPT Plus to create and share your own GPTs"},createGPTUpsellButtonLabel:{id:"gizmo.discovery.createGPTUpsellButtonLabel",defaultMessage:"Get Plus"}});export{ee as G,Ls as a};
//# sourceMappingURL=jkk0jkx56s9ds0km.js.map
