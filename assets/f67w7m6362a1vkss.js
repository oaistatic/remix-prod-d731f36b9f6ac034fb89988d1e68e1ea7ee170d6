import{j as e,c as O,r as o}from"./lklglvrzltpv3f05.js";import{z as R,A as k,U as B,H as D,I as g}from"./mc2tj3xhtcshtn61.js";import{v as M,fq as E,F as P,D as x,J as v,bP as p,bO as N,f as q}from"./i7de8yvdg4jlu6h0.js";const s=q({submitRejectModeration:{id:"feedbackModal.moderationReject",defaultMessage:"Block Content"},submitAcceptModeration:{id:"feedbackModal.moderationAccept",defaultMessage:"Allow Content"},thumbsDownPlaceholder:{id:"feedbackModal.thumbsDownPlaceholder",defaultMessage:"What was the issue with the response? How could it be improved?"},copyrightContent:{id:"feedbackModal.copyrightContent",defaultMessage:"This content violates copyright law"},reportOtherContent:{id:"feedbackModal.reportOtherContent",defaultMessage:"I don't like this for some other reason (please describe)"},provideAdditionalFeedback:{id:"feedbackModal.provideAdditionalFeedback",defaultMessage:"Provide additional feedback"}});function _({onClose:n,clientThreadId:d}){const r=O(),b=M.getTree(d),j=o.useContext(E)?.serverSharedThreadId,S=M.getServerThreadId(d),h=j??S,i=P(),c=o.useRef([]),f=o.useRef(""),C=o.useRef(null),l=o.useCallback(()=>{const a=C.current?.elements;c.current=[...a||[]].filter(t=>t.checked).map(t=>t.id).map(t=>t.replace("feedback-","")),f.current=a?.["feedback-other"].value||""},[]),u=o.useCallback((a,t)=>{if(h==null){i.danger("Moderation NOT logged successfully! serverThreadId is null"),x.addError("Moderation: serverThreadId is null");return}const m=b.getMessageId(M.getThreadCurrentLeafId(d));v.submitSharedConversationReportFeedback({message_id:m,shared_conversation_id:h,text:a,tags:t}).then(()=>{i.success("Moderation logged successfully")}).catch(F=>{i.danger("Moderation NOT logged successfully! Please try again"),x.addError(new Error("Moderation: failed to log",{cause:F}))}),n()},[b,d,n,h,i]),w=o.useCallback(()=>{l(),c.current.push("moderation-reject"),u(f.current,c.current)},[u,l]),T=o.useCallback(()=>{l(),c.current.push("moderation-accept"),u(f.current,c.current)},[u,l]),y=e.jsxs(e.Fragment,{children:[e.jsx(p.Button,{title:r.formatMessage(s.submitRejectModeration),color:"danger",onClick:w}),e.jsx(p.Button,{title:r.formatMessage(s.submitAcceptModeration),color:"primary",onClick:T})]}),[A,I]=o.useState([]);return o.useEffect(()=>{v.fetchShareModerationCategories().then(a=>{const t=a.moderation_categories;I(Object.keys(t).map(m=>[m,t[m]]))})},[]),e.jsxs(N,{isOpen:!0,onClose:n,showCloseButton:!0,size:"custom",className:"md:max-w-[672px] lg:max-w-[896px] xl:max-w-6xl",type:"success",title:r.formatMessage(s.provideAdditionalFeedback),children:[e.jsxs("form",{ref:C,children:[e.jsx(D,{id:"feedback-other",placeholder:r.formatMessage(s.thumbsDownPlaceholder),rows:3,className:"mb-1 mt-4 w-full resize-none rounded-md bg-token-main-surface-primary"}),e.jsxs("div",{className:"mb-4",children:[A.map(([a,t])=>e.jsx(g,{id:"feedback-"+a,label:t},a)),e.jsx(g,{id:"feedback-copyright",label:r.formatMessage(s.copyrightContent)}),e.jsx(g,{id:"feedback-content-other",label:r.formatMessage(s.reportOtherContent)})]})]}),e.jsx(p.Actions,{primaryButton:y})]})}function U({clientThreadId:n}){return R(k.SharedConversationModeration)?e.jsx(_,{onClose:()=>B.closeModal(k.SharedConversationModeration),clientThreadId:n}):null}export{U as C};
//# sourceMappingURL=f67w7m6362a1vkss.js.map