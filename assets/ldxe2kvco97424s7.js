import{c as O,r as f,j as e,u as ne,e as le,b as oe,ac as w,M as s,L as ce,k as D,a2 as de}from"./lklglvrzltpv3f05.js";import{L as ue,T as fe,m as E}from"./ic116gt9z3rr1qcm.js";import{cc as U,cd as H,cq as xe,aL as me,j as P}from"./mc2tj3xhtcshtn61.js";import{az as ge,bH as he,S as h,fJ as pe,F as ve,o as je,J as T,D as ye,c9 as k,br as p,f as _e,ch as be,P as v,h as j,a4 as ke,a5 as Ie,ce as L}from"./i7de8yvdg4jlu6h0.js";import{c as Ne}from"./oyxhb3n4vhc6e4ki.js";import{p as I}from"./j5a6ewagzp9ufsou.js";import"./isjdmfmhzv09v01t.js";function F(){return e.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:e.jsx(be,{})})}const we=({referralCodeId:r,sessionUser:a,auth0Provider:n,redirectUrl:o})=>{const x=O(),c=he(),l=f.useRef(null);return f.useEffect(()=>{h.logEvent("chatgpt_referral_invite_loaded",a?.id?"has_user":"user_logged_out",{user_id:a?.id?a.id:"_no_user",referral_code_id:r})},[r,a?.id]),f.useEffect(()=>{l.current===null&&(l.current=document.body.style.backgroundColor);const d=c?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=d,()=>{l.current!==null&&(document.body.style.backgroundColor=l.current)}},[c]),e.jsxs("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%]",children:[e.jsx(ue,{}),e.jsxs("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[e.jsx("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:e.jsx("h1",{"aria-label":x.formatMessage(t.ariaLabel),children:e.jsx("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:e.jsx("div",{children:fe})})})}),e.jsx(Re,{sessionUser:a,auth0Provider:n,redirectUrl:o,referralCodeId:r}),e.jsxs("div",{className:"flex flex-col items-center justify-end",children:[e.jsx("div",{className:"flex text-gray-300",children:e.jsx(pe,{className:"h-[22px] w-auto"})}),e.jsx("div",{className:"opacity-50",children:e.jsx(Ne,{isStorageComplianceEnabled:!1})})]})]})]})},Me=({offerDollarValue:r,sessionUser:a,isLoading:n,isLoadingLogin:o,handleClaimInvite:x,handleSignupWarning:c,handleLogin:l})=>{const d=U(H.hasPaidSubscription),y=me(E.signUp);return a?.id?e.jsx(p,{disabled:n||d,loading:n,color:d?"disabled":"blue",size:"large",fullWidth:!0,onClick:x,children:d?e.jsx(s,{...t.alreadyPaidUserCta}):e.jsx(s,{...t.acceptInviteCtaLoggedIn,values:{dollarValue:r}})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:e.jsx(s,{...t.claimInviteLoginOrSignUp})}),e.jsx("div",{className:"flex flex-col space-y-4 px-3",children:e.jsxs("div",{className:"flex flex-col gap-3 sm:flex-row",children:[e.jsx(p,{disabled:n,loading:o,fullWidth:!0,onClick:l,children:e.jsx(s,{...E.logIn})}),e.jsx(p,{onClick:c,disabled:n,fullWidth:!0,children:e.jsx(s,{...y})})]})})]})};function Re({sessionUser:r,referralCodeId:a,redirectUrl:n,auth0Provider:o}){const[x,c]=f.useState(!1),[l,d]=f.useState(!1),[y,m]=f.useState(!1),[B,M]=f.useState(!1),R=r?.id??"_no_user",{data:A,isLoading:G,isError:_}=ne({queryKey:["referral-invite",a],queryFn:()=>T.getPublicReferralInvite(a)}),u=O(),W=ve(),i=A?.result.invite_metadata?.invite_data,S=`$${i?.referral_trial_dollar_value}`,V=i?.referrer_public_avatar_url,q="$20",$=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?u.formatMessage(t.monthsOfService,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.daysOfService,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,z=i?.referrer_user_name,Y=i?.referral_trial_duration_months?i?.referral_trial_duration_months>1?u.formatMessage(t.monthsOfBenefit,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.daysOfBenefit,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,J=i?.referral_trial_duration_months?i?.referral_trial_duration_months>=1?u.formatMessage(t.ctaHeaderMonths,{referralTrialDurationMonths:i?.referral_trial_duration_months}):u.formatMessage(t.ctaHeaderDays,{referralTrialDurationDays:i?.referral_trial_duration_days}):null,K=u.formatMessage(t.dollarValue,{offerDollarValue:S}),Q="ChatGPT Plus",X=je(),C=U(H.workspaceId),b=le(),{mutateAsync:Z}=oe({mutationFn:()=>T.postClaimReferralInvite(a,C||""),onSettled:()=>{m(!1)},onError:async()=>{W.danger(u.formatMessage(t.claimReferralError))},onSuccess:()=>{c(!0),b(`/invite/accepted?referralCodeId=${a}`)}}),ee=async()=>{m(!0),h.logEvent("chatgpt_referral_invite_claim",a,{referralCodeId:a,userId:R}),v.logEvent(j.chatgptReferralInviteClaim,{content:R}),await Z()},ae=()=>{m(!0),d(!0),h.logEvent("chatgpt_referral_invite_explain_signup",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteExplainSignup,{content:a}),m(!1)},te=xe(),re=()=>{m(!0),M(!0),h.logEvent("chatgpt_referral_invite_login",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteLogin,{content:a});const g=ke.getCookie(Ie.DeviceId)?.toString(),ie=te();D.signIn(o,{callbackUrl:n,...g?{device_id:g}:{}},{prompt:"login",...P(L()),...ie?{use_email_otp:"true"}:{}})},se=()=>{m(!0),M(!0),h.logEvent("chatgpt_referral_invite_signup",a,{referralCodeId:a}),v.logEvent(j.chatgptReferralInviteSignup,{content:a}),D.signIn(o,{callbackUrl:n},{prompt:"login",screen_hint:"signup",...P(L())})};return f.useEffect(()=>{_&&(b("/?e=oldi"),ye.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[_,b]),_?e.jsx(Ce,{}):G||X==null&&r?.id||x?e.jsx(De,{}):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[l&&e.jsx(w.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx(Se,{handleSignup:se,setHasRequestedSignup:d})}),!l&&e.jsx(w.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsx("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:J}),e.jsx(Ee,{referrerPublicAvatarUrl:V,referrerName:z,benefitWithTime:Y,receivedPlan:Q,dollarValue:K}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.benefitPointsHeader})})}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.demandAccess})})]}),e.jsxs(N,{children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.responseSpeed})})]}),e.jsxs(N,{className:"pb-2",children:[e.jsx("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:e.jsx(k,{className:"h-4 w-4 text-white"})}),e.jsx("span",{className:"max-w-full",children:e.jsx(s,{...I.plus.modelFeatures})})]})]}),e.jsx("div",{className:"w-full",children:e.jsx(Me,{handleClaimInvite:ee,handleSignupWarning:ae,handleLogin:re,sessionUser:r,offerDollarValue:S,isLoading:y,isLoadingLogin:B})}),e.jsxs("div",{className:"space-y-1.5 py-1 text-center",children:[e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaFollowUpSummary,values:{monthlyCost:q,monthsOfService:$}})}),r?.id&&e.jsx("p",{className:"text-xs text-token-text-tertiary",children:e.jsx(s,{...t.ctaNotice,values:{userEmail:r?.email,avatar:()=>e.jsx("img",{className:"inline-block h-4 w-4 rounded-full",src:r?.picture??void 0,alt:r?.name}),email:g=>e.jsx("span",{className:"font-semibold",children:g}),link:g=>e.jsx(ce,{className:"underline",to:"/auth/logout",children:g})}})})]})]})})})]})})}const Se=({setHasRequestedSignup:r,handleSignup:a})=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:e.jsx(s,{...t.signUpExplainTitle})}),e.jsx("div",{children:e.jsx("p",{className:"text-sm",children:e.jsx(s,{...t.signUpExplainDescription})})}),e.jsxs("div",{className:"flex flex-col gap-4 md:flex-row",children:[e.jsx(p,{fullWidth:!0,onClick:()=>{r(!1)},color:"secondary",children:e.jsx(s,{...t.signUpCtaBack})}),e.jsx(p,{onClick:a,fullWidth:!0,color:"primary",children:e.jsx(s,{...t.signUpCtaProceed})})]})]}),Ce=()=>e.jsxs("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(F,{})}),e.jsx(w.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-sm font-semibold",children:e.jsx(s,{...t.errorHeader})}),e.jsx("p",{className:"text-xs font-normal",children:e.jsx(s,{...t.errorDescription,values:{link:r=>e.jsx("a",{href:"/",className:"underline",children:r})}})})]})})]}),De=()=>e.jsx("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:e.jsx("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:e.jsx(F,{})})}),N=ge.div`gap-2 flex flex-row justify-start text-sm items-start`,Ee=({referrerPublicAvatarUrl:r,referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:x})=>e.jsxs("div",{className:"flex w-full items-center",children:[e.jsx("div",{className:"flex-shrink-0 pt-0.5",children:e.jsx("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:r,alt:a})}),e.jsx("div",{className:"ml-3 w-0 flex-1",children:e.jsx("p",{className:"text-sm text-token-text-primary",children:e.jsx(s,{...t.socialProofText,values:{referrerName:a,benefitWithTime:n,receivedPlan:o,dollarValue:x,highlight:c=>e.jsx("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:c})}})})})]}),t=_e({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}});function Be(){const r=de();return e.jsx(we,{...r})}export{Be as default};
//# sourceMappingURL=ldxe2kvco97424s7.js.map
