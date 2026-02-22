import{r as k,a as qt,R as qe}from"./react-vendor-KfUPlHYY.js";import{_ as fe,m as Tt}from"./mermaid-DUpwj47y.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(c){if(c.ep)return;c.ep=!0;const o=i(c);fetch(c.href,o)}})();var xt={exports:{}},lt={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $t=k,Vt=Symbol.for("react.element"),Yt=Symbol.for("react.fragment"),Kt=Object.prototype.hasOwnProperty,zt=$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xt={key:!0,ref:!0,__self:!0,__source:!0};function At(t,r,i){var a,c={},o=null,d=null;i!==void 0&&(o=""+i),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(d=r.ref);for(a in r)Kt.call(r,a)&&!Xt.hasOwnProperty(a)&&(c[a]=r[a]);if(t&&t.defaultProps)for(a in r=t.defaultProps,r)c[a]===void 0&&(c[a]=r[a]);return{$$typeof:Vt,type:t,key:o,ref:d,props:c,_owner:zt.current}}lt.Fragment=Yt;lt.jsx=At;lt.jsxs=At;xt.exports=lt;var e=xt.exports,dt={},St=qt;dt.createRoot=St.createRoot,dt.hydrateRoot=St.hydrateRoot;const It=k.createContext(),$e=()=>{const t=k.useContext(It);if(!t)throw new Error("useAppStore must be used within AppProvider");return t},Zt=({children:t})=>{const[r,i]=k.useState("everything"),[a,c]=k.useState(null),[o,d]=k.useState(["Overview"]),[s,u]=k.useState(1),[y,P]=k.useState(!0),[G,ae]=k.useState(()=>typeof window<"u"&&window.innerWidth<=768),[Ce,X]=k.useState(!1),[A,de]=k.useState(!1),[V,be]=k.useState(!1),Te=k.useCallback((ve,Ae=null)=>{i(ve),c(Ae);const xe=["Overview"];ve!=="overview"&&xe.push(ve),Ae&&xe.push(Ae),d(xe)},[]),Ie=k.useCallback(()=>{u(ve=>Math.min(ve+.2,3))},[]),Ee=k.useCallback(()=>{u(ve=>Math.max(ve-.2,.3))},[]),Ne=k.useCallback(()=>{u(1)},[]),ke=k.useCallback(()=>{P(ve=>!ve)},[]),Oe=k.useCallback(()=>{ae(ve=>!ve)},[]),je=k.useCallback(()=>{X(ve=>!ve)},[]),Me={currentView:r,selectedNode:a,breadcrumbs:o,zoomLevel:s,setZoomLevel:u,showMinimap:y,sidebarCollapsed:G,isFullscreen:Ce,showApiTester:A,isEditMode:V,navigateToView:Te,zoomIn:Ie,zoomOut:Ee,resetZoom:Ne,toggleMinimap:ke,toggleSidebar:Oe,toggleFullscreen:je,setSelectedNode:c,setShowApiTester:de,setIsEditMode:be};return e.jsx(It.Provider,{value:Me,children:t})},ne={NOT_STARTED:"not_started",IN_PROGRESS:"in_progress",COMPLETED:"completed",BLOCKED:"blocked"},l={LOW:"low",MEDIUM:"medium",HIGH:"high",CRITICAL:"critical"},nt=(t,r={})=>{if(!t)return null;const i=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").replace(/Controller|Service|C|S$/i,"").trim();if(!r||Object.keys(r).length===0)return console.warn(`⚠️ No database mappings available for node "${t}". Mappings must be seeded to the database first.`),null;if(r[i])return r[i];if(r[t])return r[t];const a=i.toLowerCase();for(const[y,P]of Object.entries(r))if(y.toLowerCase()===a)return P;const c=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").trim();if(r[c])return r[c];const o=i.replace(/\s+/g,"");if(r[o])return r[o];const d=i+"Service",s=i+"Controller";if(r[d])return r[d];if(r[s])return r[s];const u=[];for(const[y,P]of Object.entries(r)){const G=y.toLowerCase();(a.includes(G)||G.includes(a))&&u.push({key:y,level:P,length:y.length})}return u.length>0?(u.sort((y,P)=>P.length-y.length),u[0].level):(console.warn(`⚠️ Could not map node "${t}" to any Level task. Ensure mappings are seeded in the database.`),null)},Fe={AdminController:{title:"Admin Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:l.HIGH},CustomerController:{title:"Customer Controller",category:"Controllers",level:"Level3_CustomerIdentity",priority:l.CRITICAL},OrderController:{title:"Order Controller",category:"Controllers",level:"Level9_TradingControllers",priority:l.CRITICAL},WalletController:{title:"Wallet Controller",category:"Controllers",level:"Level10_WalletController",priority:l.CRITICAL},TradeController:{title:"Trade Controller",category:"Controllers",level:"Level9_TradingControllers",priority:l.CRITICAL},MarketController:{title:"Market Controller",category:"Controllers",level:"Level8_MarketManagement",priority:l.HIGH},CoinController:{title:"Coin Controller",category:"Controllers",level:"Level8_MarketManagement",priority:l.HIGH},ExchangeActionController:{title:"Exchange Action Controller",category:"Controllers",level:"Level14_OTCExchange",priority:l.HIGH},TicketController:{title:"Ticket Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},BlogController:{title:"Blog Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},GiftCodeController:{title:"Gift Code Controller",category:"Controllers",level:"Level16_Promotional",priority:l.MEDIUM},ReferralCodeController:{title:"Referral Code Controller",category:"Controllers",level:"Level16_Promotional",priority:l.MEDIUM},RolesController:{title:"Roles Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:l.HIGH},FinoTechController:{title:"FinoTech Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:l.HIGH},JibitController:{title:"Jibit Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:l.HIGH},AlarmController:{title:"Alarm Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},FileController:{title:"File Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},LanguageController:{title:"Language Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},CountryController:{title:"Country Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},ExchangeController:{title:"Exchange Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},ExchangeSettingController:{title:"Exchange Setting Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},HealthController:{title:"Health Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},VandarWebhookController:{title:"Vandar Webhook Controller",category:"Controllers",level:"Level11_PaymentGateways",priority:l.HIGH},AtmController:{title:"ATM Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},CreditCardController:{title:"Credit Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},SaminCardController:{title:"Samin Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},SocketController:{title:"Socket Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},AdminService:{title:"Admin Service",category:"Services",level:"Level13_AdminRBAC",priority:l.HIGH},CustomerService:{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:l.CRITICAL},OrderService:{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},WalletService:{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},TradeService:{title:"Trade Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},MarketService:{title:"Market Service",category:"Services",level:"Level8_MarketManagement",priority:l.HIGH},CoinService:{title:"Coin Service",category:"Services",level:"Level8_MarketManagement",priority:l.HIGH},ApieService:{title:"Apie Service (Blockchain)",category:"Services",level:"Level6_Blockchain",priority:l.CRITICAL},GiftCodeService:{title:"Gift Code Service",category:"Services",level:"Level16_Promotional",priority:l.MEDIUM},ReferralCodeService:{title:"Referral Code Service",category:"Services",level:"Level16_Promotional",priority:l.MEDIUM},TicketService:{title:"Ticket Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},BlogService:{title:"Blog Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},FileService:{title:"File Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},EmailService:{title:"Email Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},SMSService:{title:"SMS Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},NotificationService:{title:"Notification Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},CustomerWalletService:{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},DepositService:{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},WithdrawalRequestService:{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},FinoTechService:{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},JibitService:{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},BankAccountService:{title:"Bank Account Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},UserAccountLevelService:{title:"User Account Level Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},RoleService:{title:"Role Service",category:"Services",level:"Level13_AdminRBAC",priority:l.HIGH},ExchangeActionService:{title:"Exchange Action Service",category:"Services",level:"Level14_OTCExchange",priority:l.HIGH},ExchangeSettingService:{title:"Exchange Setting Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},CustomerTokenService:{title:"Customer Token Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},AlarmService:{title:"Alarm Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},MessageService:{title:"Message Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},FAQService:{title:"FAQ Service",category:"Services",level:"Level15_SupportContent",priority:l.LOW},CountryService:{title:"Country Service",category:"Services",level:"Level17_AdditionalServices",priority:l.LOW},LanguageService:{title:"Language Service",category:"Services",level:"Level17_AdditionalServices",priority:l.LOW},AtmService:{title:"ATM Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},CreditCardService:{title:"Credit Card Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},SaminCardService:{title:"Samin Card Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},TomanTransactionService:{title:"Toman Transaction Service",category:"Services",level:"Level5_WalletServices",priority:l.MEDIUM},CashDepositService:{title:"Cash Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.MEDIUM},"Order ServiceervicecreateOrder deleteOrdergetOrder Book validateDTO":{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},"Jibit ServiceervicematchIBAN matchCardidentitySimilarity":{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},"Vandar Serviceervice":{title:"Vandar Payment Gateway",category:"Services",level:"Level11_PaymentGateways",priority:l.HIGH},"Deposit ServiceervicetrackDeposit confirmDeposit":{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Customer Wallet ServiceervicegetBalance updateBalancelockFunds unlockFunds":{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Withdrawal ServiceervicecreateRequestapproveWithdrawalr":{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Wallet ServiceervicecreateHDWalletgenerate Addresscr":{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"FinoTech Serviceervicevalidate NationallDcard TolBAN sendSMSverifyBankAccount":{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},"Controllerustomer Serviceregister authenticateupdateProfile manageKYC":{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:l.CRITICAL}},Qt=t=>{let r=t.replace(/Development/g,"").replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").trim();const i=[];let a="";const c=/([a-z])([A-Z])/g;r=r.replace(c,"$1 $2");const o=r.split(/\s+/).filter(d=>d.length>0);for(let d=0;d<o.length;d++){const s=o[d];s.endsWith("Service")||s.endsWith("Controller")?(a&&(i.push(a.trim()),a=""),i.push(s)):/^[a-z]/.test(s)||/^[a-z][A-Z]/.test(s)?a&&!a.endsWith("Service")&&!a.endsWith("Controller")?a+=" "+s:(a&&i.push(a.trim()),a=s):a+=(a?" ":"")+s}return a&&i.push(a.trim()),i.filter(d=>d.length>0)},er=(t,r)=>{if(Fe[t])return Fe[t].title;const i=r.find(a=>a.endsWith("Service")||a.endsWith("Controller"));return i?Fe[i]?Fe[i].title:i.replace(/([A-Z])/g," $1").trim():r.length>0?r[0].replace(/([A-Z])/g," $1").trim():t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ")[0]},tr=t=>{if(Fe[t])return Fe[t];const r=Qt(t),i=er(t,r),a=r.find(s=>s.endsWith("Service")||s.endsWith("Controller"));let c=null;a&&Fe[a]&&(c=Fe[a]);let o="Other";a&&(a.endsWith("Controller")?o="Controllers":a.endsWith("Service")&&(o="Services"));let d=l.MEDIUM;if(a){const s=["OrderService","TradeService","WalletService","CustomerService","ApieService"],u=["AdminService","MarketService","CoinService","DepositService","WithdrawalRequestService"];s.some(y=>a.includes(y))?d=l.CRITICAL:u.some(y=>a.includes(y))&&(d=l.HIGH)}return{title:i,category:(c==null?void 0:c.category)||o,level:(c==null?void 0:c.level)||null,priority:(c==null?void 0:c.priority)||d,extractedNames:r,originalId:t}},Qe=t=>{let r=l.MEDIUM;if(t.priority){const o=t.priority.toLowerCase().trim();o==="low"?r=l.LOW:o==="medium"?r=l.MEDIUM:o==="high"?r=l.HIGH:o==="critical"?r=l.CRITICAL:r=l[t.priority.toUpperCase()]||l.MEDIUM}let i=t.category||"Other",a=[];Array.isArray(t.subtasks)&&(a=t.subtasks.map((o,d)=>typeof o=="string"?{id:`subtask-${d}`,title:o,completed:!1,aiPrompt:null}:typeof o=="object"?{id:o.id||`subtask-${d}`,title:o.title||o.name||String(o),completed:o.completed||!1,aiPrompt:o.aiPrompt||null}:{id:`subtask-${d}`,title:String(o),completed:!1,aiPrompt:null}));let c=[];return t.notes&&(typeof t.notes=="string"?c=t.notes.split(`
`).filter(o=>o.trim()).map(o=>({content:o.trim(),createdAt:new Date().toISOString()})):Array.isArray(t.notes)&&(c=t.notes.map(o=>({content:typeof o=="string"?o:o.content||String(o),createdAt:o.createdAt||new Date().toISOString()})))),{id:t.nodeId||t.id,nodeId:t.nodeId||t.id,title:t.title||"",description:t.description||"",status:t.status||ne.NOT_STARTED,priority:r,category:i,estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:a,notes:c,dependencies:Array.isArray(t.dependencies)?t.dependencies:[],isMissing:t.isMissing||!1,createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||new Date().toISOString(),backendId:t.id||t.backendId}},Ct=t=>{let r="medium";return t.priority&&(t.priority===l.LOW?r="low":t.priority===l.MEDIUM?r="medium":t.priority===l.HIGH?r="high":t.priority===l.CRITICAL?r="critical":typeof t.priority=="string"&&(r=t.priority.toLowerCase().trim()||"medium")),(!r||r==="")&&(r="medium"),{nodeId:t.nodeId||t.id,title:t.title,description:t.description||"",status:t.status||ne.NOT_STARTED,notes:Array.isArray(t.notes)?t.notes.map(i=>typeof i=="string"?i:i.content).join(`
`):t.notes||"",estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:t.subtasks||[],dependencies:t.dependencies||[],priority:r,category:t.category||"Other",isMissing:t.isMissing||!1}},rr=(t,r)=>{const i=t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").trim(),a=i.match(/(\w+Service)/i),c=i.match(/(\w+Controller)/i);return a?a[1]:c?c[1]:null},Pt=({children:t})=>{const[r,i]=k.useState({}),[a,c]=k.useState(!1),[o,d]=k.useState(null),[s,u]=k.useState(null),[y,P]=k.useState(null),[G,ae]=k.useState(!1),[Ce,X]=k.useState(!0),[A,de]=k.useState(null),[V,be]=k.useState({});k.useEffect(()=>{Te(),Ie(),(async()=>{try{const{seedDiagramsAndNodes:S}=await fe(async()=>{const{seedDiagramsAndNodes:E}=await Promise.resolve().then(()=>We);return{seedDiagramsAndNodes:E}},void 0),{API_ENDPOINTS:h}=await fe(async()=>{const{API_ENDPOINTS:E}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:E}},[]),I=await fetch(h.diagrams);if(I.ok){const E=await I.json(),Z=E==null?void 0:E.some(R=>R.diagramId==="everything");if(!E||E.length===0||!Z)console.log("🌱 Seeding diagrams (VPN + exchange)..."),await S();else{console.log(`✅ Found ${E.length} existing diagrams, skipping seed`);for(const R of E){const W=await fetch(`${h.nodes}?diagramId=${R.id}`);if(W.ok){const n=await W.json();if(!n||n.length===0){console.log(`⚠️ Diagram ${R.diagramId} has no nodes, extracting and saving...`);const{extractNodesFromMermaid:v,saveNodesToBackend:U}=await fe(async()=>{const{extractNodesFromMermaid:ge,saveNodesToBackend:ue}=await Promise.resolve().then(()=>We);return{extractNodesFromMermaid:ge,saveNodesToBackend:ue}},void 0),J=await v(R.mermaidCode||"",R.id);J.length>0&&(J.forEach(ge=>{ge.diagramId=R.id}),await U(R.id,J))}}}}}}catch(S){console.warn("Could not seed diagrams on startup:",S)}})()},[]);const Te=async()=>{try{ae(!0),de(null);const{API_ENDPOINTS:f}=await fe(async()=>{const{API_ENDPOINTS:W}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:W}},[]),S=await fetch(f.tasks);if(!S.ok)throw new Error("Failed to load tasks");const h=await S.json(),I=new Map;h.forEach(W=>{const n=I.get(W.nodeId);(!n||new Date(W.updatedAt||W.createdAt)>new Date(n.updatedAt||n.createdAt))&&I.set(W.nodeId,W)});const E=Array.from(I.values());E.length<h.length&&console.warn(`⚠️ Found ${h.length-E.length} duplicate tasks. Using most recent version of each.`);const Z={},te=[],R={Level1_ProjectSetup:l.CRITICAL,Level2_DatabaseAuth:l.CRITICAL,Level3_CustomerIdentity:l.CRITICAL,Level5_WalletServices:l.CRITICAL,Level6_Blockchain:l.CRITICAL,Level7_TradingEngine:l.CRITICAL,Level11_PaymentGateways:l.CRITICAL,Level4_Notifications:l.HIGH,Level8_MarketManagement:l.HIGH,Level9_TradingControllers:l.HIGH,Level10_WalletController:l.HIGH,Level12_KYCIdentity:l.HIGH,Level13_AdminRBAC:l.HIGH,Level14_OTCExchange:l.HIGH,Level15_SupportContent:l.MEDIUM,Level16_Promotional:l.MEDIUM,Level17_AdditionalServices:l.MEDIUM,Level18:l.MEDIUM,Level19:l.MEDIUM,Level20:l.MEDIUM,Level21:l.MEDIUM,Level22:l.MEDIUM,Level23:l.MEDIUM,Level24:l.MEDIUM,Level25:l.MEDIUM,Level26:l.MEDIUM,Level27:l.MEDIUM,Level28:l.MEDIUM,Level29:l.MEDIUM,Level30:l.MEDIUM,Level31_AdvancedTrading:l.HIGH,Level32_ComplianceRisk:l.HIGH,Level33_SecurityEnhancements:l.HIGH,Level34_FinancialServices:l.HIGH,Level35_AnalyticsReporting:l.MEDIUM,Level36:l.MEDIUM,Level37:l.MEDIUM,Level38:l.MEDIUM,Level39:l.MEDIUM,Level40:l.MEDIUM,Level41:l.MEDIUM,Level42:l.MEDIUM,Level43:l.MEDIUM,Level44:l.MEDIUM,Level45:l.MEDIUM,Level46:l.MEDIUM,Level47:l.MEDIUM,Level48:l.MEDIUM,Level49:l.MEDIUM,Level50:l.MEDIUM,Level51:l.LOW,Level52:l.LOW,Level53:l.LOW,Level54:l.LOW,Level55:l.LOW,Level56:l.LOW,Level57:l.LOW,Level58:l.LOW,Level59:l.LOW,Level60:l.LOW};if(E.forEach(W=>{const n=Qe(W);let v=R[W.nodeId];if(!v&&W.nodeId&&W.nodeId.startsWith("Level")){const J=W.nodeId.match(/Level(\d+)/);if(J){const ge=parseInt(J[1]);ge<=7||ge===11?v=l.CRITICAL:ge<=14?v=l.HIGH:ge<=30||ge<=50?v=l.MEDIUM:v=l.LOW}}v||(v=l.MEDIUM),(!W.priority||W.priority===null||W.priority===""||n.priority!==v)&&(n.priority=v,te.push({nodeId:W.nodeId,backendId:W.id,priority:v})),Z[W.nodeId]=n}),te.length>0){console.log(`🔄 Updating priorities for ${te.length} tasks in database...`);const W=te.map(async({nodeId:J,backendId:ge,priority:ue})=>{try{const{API_ENDPOINTS:Se}=await fe(async()=>{const{API_ENDPOINTS:Ge}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:Ge}},[]),Pe=ue===l.LOW?"low":ue===l.MEDIUM?"medium":ue===l.HIGH?"high":ue===l.CRITICAL?"critical":"medium",_e=await fetch(Se.task(ge),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({priority:Pe})});return _e.ok?(console.log(`✅ Updated priority for ${J} to ${Pe}`),{success:!0,nodeId:J,priorityValue:Pe}):(console.warn(`⚠️ Failed to update priority for ${J}: ${_e.status} ${_e.statusText}`),{success:!1,nodeId:J})}catch(Se){return console.warn(`⚠️ Failed to update priority for ${J}:`,Se),{success:!1,nodeId:J,error:Se.message}}}),n=await Promise.all(W),v=n.filter(J=>J.success).length,U=n.filter(J=>!J.success).length;v>0&&console.log(`✅ Successfully updated priorities for ${v} tasks`),U>0&&console.warn(`⚠️ Failed to update priorities for ${U} tasks`)}else console.log("✅ All tasks already have priorities set in database");if(E.length===0)try{const{stepByStepGuides:W}=await fe(async()=>{const{stepByStepGuides:U}=await Promise.resolve().then(()=>kr);return{stepByStepGuides:U}},void 0),v=Object.entries(W).filter(([U])=>U.startsWith("Level")&&/^Level\d+_/.test(U)).sort((U,J)=>(U[1].order||0)-(J[1].order||0)).map(([U,J])=>({nodeId:U,id:U,title:J.title||U,description:J.description||"",status:ne.NOT_STARTED,priority:l.MEDIUM,category:"Other",notes:[],estimatedHours:0,actualHours:0,subtasks:[],dependencies:[]}));if(v.length>0){console.log("🌱 No tasks in database, seeding",v.length,"Level tasks..."),await Ee(v),await Te();return}}catch(W){console.warn("Could not auto-seed tasks:",W)}i(Z)}catch(f){console.error("Failed to load tasks from backend:",f),de(f.message),console.warn("⚠️ Backend unavailable - no tasks available. Please ensure backend is running and database is seeded."),i({})}finally{ae(!1)}},Ie=async()=>{try{const{API_ENDPOINTS:f}=await fe(async()=>{const{API_ENDPOINTS:I}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:I}},[]);if(!f.nodeMappings){console.error("❌ Backend not available - node mappings API endpoint not configured");return}const S=await fetch(f.nodeMappings);if(!S.ok){console.error(`❌ Failed to load node mappings from database (HTTP ${S.status}). Please seed mappings using: node seed_node_mappings.js`);return}const h=await S.json();console.log(`✅ Loaded ${Object.keys(h).length} node-to-task mappings from database`),be(h)}catch(f){console.error("❌ Error loading node mappings from database:",f),console.error("   Please ensure backend is running and mappings are seeded: node seed_node_mappings.js")}},Ee=async f=>{try{const{API_ENDPOINTS:S}=await fe(async()=>{const{API_ENDPOINTS:Z}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:Z}},[]),h=f.map(Z=>Ct(Z)),I=await fetch(S.seedTasks,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!I.ok)throw new Error("Failed to seed tasks");const E=await I.json();console.log(`✅ Seeded ${E.created} tasks, skipped ${E.skipped} existing tasks`)}catch(S){throw console.error("Failed to seed tasks to backend:",S),S}},Ne=async f=>{try{const{API_ENDPOINTS:S}=await fe(async()=>{const{API_ENDPOINTS:R}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:R}},[]),h=Ct(f);let I,E;if(f.backendId)I=S.task(f.backendId),E="PATCH";else try{const R=await fetch(S.taskByNode(f.nodeId||f.id));if(R.ok){const W=await R.json();W&&W.id?(I=S.task(W.id),E="PATCH"):(I=S.tasks,E="POST")}else I=S.tasks,E="POST"}catch{I=S.tasks,E="POST"}const Z=await fetch(I,{method:E,headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!Z.ok){const R=await Z.text();throw new Error(`Failed to save task: ${Z.status} ${Z.statusText} - ${R}`)}const te=Z.headers.get("content-type");if(te&&te.includes("application/json")){const R=await Z.text();if(R&&R.trim())try{const W=JSON.parse(R);return Qe(W)}catch(W){return console.error("Failed to parse response JSON:",W,"Response text:",R),Qe({...h,id:f.backendId||f.id})}else return Qe({...h,id:f.backendId||f.id})}else return Qe({...h,id:f.backendId||f.id})}catch(S){throw console.error("Failed to save task to backend:",S),S}},ke=async(f,S)=>{i(h=>{const I=h[f];if(!I)return h;const E={...h,[f]:{...I,...S,updatedAt:new Date().toISOString()}};return E[f]&&Ne(E[f]).then(Z=>{i(te=>{const R=te[f];return R?{...te,[f]:{...R,...Z,subtasks:Z.subtasks||R.subtasks,backendId:Z.backendId||Z.id||(R==null?void 0:R.backendId)}}:te})}).catch(Z=>{console.error("Backend save failed:",Z)}),E})},he={tasks:r,updateTask:ke,updateSubtask:(f,S,h)=>{i(I=>{const E=I[f];if(!E)return I;const Z=E.subtasks.map(R=>R.id===S?{...R,...h}:R),te={...E,subtasks:Z,updatedAt:new Date().toISOString()};return Ne(te).then(R=>{i(W=>{var n;return{...W,[f]:{...W[f],...R,backendId:R.id||R.backendId||((n=W[f])==null?void 0:n.backendId)}}})}).catch(R=>console.error("Backend save failed:",R)),{...I,[f]:te}})},addSubtask:(f,S)=>{i(h=>{const I=h[f];if(!I)return h;const E={id:S.id||`subtask-${Date.now()}`,title:S.title||S,completed:!1,...typeof S=="object"?S:{}},Z={...I,subtasks:[...I.subtasks||[],E],updatedAt:new Date().toISOString()};return Ne(Z).then(te=>{i(R=>{var W;return{...R,[f]:{...R[f],...te,backendId:te.id||te.backendId||((W=R[f])==null?void 0:W.backendId)}}})}).catch(te=>console.error("Backend save failed:",te)),{...h,[f]:Z}})},toggleSubtask:(f,S)=>{i(h=>{const I=h[f];if(!I)return h;const E=(I.subtasks||[]).find(ue=>ue.id===S),Z=(E==null?void 0:E.completed)===!0||(E==null?void 0:E.completed)==="true"||(E==null?void 0:E.completed)===1,te=(I.subtasks||[]).map(ue=>ue.id===S?{...ue,completed:!Z}:ue),R=te.filter(ue=>ue.completed===!0||ue.completed==="true"||ue.completed===1).length,W=te.length,n=W>0&&R===W,v=R>0&&R<W;let U=I.status;n&&I.status!==ne.COMPLETED?(U=ne.COMPLETED,console.log(`✅ All subtasks completed for ${f}, auto-updating status to COMPLETED`)):v&&I.status===ne.NOT_STARTED?(U=ne.IN_PROGRESS,console.log(`🔄 Some subtasks completed for ${f}, auto-updating status to IN_PROGRESS`)):!v&&(I.status,ne.IN_PROGRESS);const J={...I,subtasks:te,status:U,updatedAt:new Date().toISOString()},ge={...h,[f]:J};return Ne(J).then(ue=>{i(Se=>{const Pe=Se[f];if(!Pe)return Se;const _e=(ue.subtasks||te).map((Ge,at)=>{var it;const Ve=(it=Pe.subtasks)==null?void 0:it[at];return{...Ge,completed:Ge.completed!==void 0?Ge.completed:(Ve==null?void 0:Ve.completed)||!1}});return{...Se,[f]:{...Pe,...ue,subtasks:_e.length>0?_e:te,status:ue.status||U,backendId:ue.backendId||ue.id||(Pe==null?void 0:Pe.backendId)}}})}).catch(ue=>{console.error("Backend save failed for subtask toggle:",ue)}),ge})},addNote:(f,S)=>{i(h=>{const I=h[f];if(!I)return h;const E={...I,notes:[...I.notes||[],{content:S,createdAt:new Date().toISOString()}],updatedAt:new Date().toISOString()};return Ne(E).then(Z=>{i(te=>{var R;return{...te,[f]:{...te[f],...Z,backendId:Z.id||Z.backendId||((R=te[f])==null?void 0:R.backendId)}}})}).catch(Z=>console.error("Backend save failed:",Z)),{...h,[f]:E}})},updateActualHours:(f,S)=>{i(h=>{const I=h[f];if(!I)return h;const E={...I,actualHours:S,updatedAt:new Date().toISOString()};return Ne(E).then(Z=>{i(te=>{var R;return{...te,[f]:{...te[f],...Z,backendId:Z.id||Z.backendId||((R=te[f])==null?void 0:R.backendId)}}})}).catch(Z=>console.error("Backend save failed:",Z)),{...h,[f]:E}})},updateTaskStatus:(f,S)=>{ke(f,{status:S})},updateTaskPriority:(f,S)=>{ke(f,{priority:S})},getProgress:()=>{const f=Object.values(r).filter(v=>v&&v.id&&v.id.startsWith("Level")),S=f.length,h=f.filter(v=>v.status===ne.COMPLETED).length,I=f.filter(v=>v.status===ne.IN_PROGRESS).length,E=f.filter(v=>v.status===ne.NOT_STARTED).length,Z=f.filter(v=>v.status===ne.BLOCKED).length,te=f.reduce((v,U)=>{var J;return v+(((J=U.subtasks)==null?void 0:J.length)||0)},0),R=f.reduce((v,U)=>{var J;return v+(((J=U.subtasks)==null?void 0:J.filter(ge=>ge.completed===!0||ge.completed==="true"||ge.completed===1).length)||0)},0);let W=0;f.forEach(v=>{if(v.status===ne.COMPLETED)W+=100;else if(v.status===ne.BLOCKED)W+=0;else{const U=v.subtasks||[];if(U.length>0){const ge=U.filter(ue=>ue.completed===!0||ue.completed==="true"||ue.completed===1).length/U.length*100;W+=ge}else v.status===ne.IN_PROGRESS?W+=50:W+=0}});const n=S>0?Math.round(W/S):0;return{total:S,completed:h,inProgress:I,notStarted:E,blocked:Z,percentage:n,subtasks:{total:te,completed:R,percentage:te>0?Math.round(R/te*100):0}}},getCategoryProgress:f=>{const S=Object.values(r).filter(E=>E&&E.id&&E.id.startsWith("Level")&&E.category===f);if(S.length===0)return{total:0,completed:0,percentage:0};const h=S.length,I=S.filter(E=>E.status===ne.COMPLETED).length;return{total:h,completed:I,percentage:h>0?Math.round(I/h*100):0}},getOrCreateTask:async f=>{if(!f)return null;if(r[f])return r[f];if(f.startsWith("Level"))return r[f]||null;const S=nt(f,V);if(S&&r[S])return console.log(`Mapped diagram node "${f}" to Level task: ${S}`),r[S];const h=rr(f);if(h&&r[h])return r[h];if(h){const E=nt(h,V);if(E&&r[E])return console.log(`Mapped base name "${h}" to Level task: ${E}`),r[E]}const I=tr(f);return I.level&&r[I.level]?(console.log(`Mapped via metadata "${f}" to Level task: ${I.level}`),r[I.level]):(console.warn(`Could not map diagram node "${f}" to any Level task. Returning null.`),null)},mapNodeToLevel:f=>nt(f,V),nodeMappings:V,cleanupOldTasks:()=>{console.log("🧹 Cleanup handled by backend - only Level tasks are stored")},showTodoPanel:a,setShowTodoPanel:c,selectedTask:o,setSelectedTask:d,filterStatus:s,setFilterStatus:u,filterCategory:y,setFilterCategory:P,loading:G,useBackend:Ce,setUseBackend:X,backendError:A,loadTasksFromBackend:Te};return e.jsx(Et.Provider,{value:he,children:t})},Et=k.createContext(),tt=()=>{const t=k.useContext(Et);if(!t)throw new Error("useTodoStore must be used within TodoProvider");return t},ar=Object.freeze(Object.defineProperty({__proto__:null,TaskPriority:l,TaskStatus:ne,TodoProvider:Pt,mapNodeToLevel:nt,useTodoStore:tt},Symbol.toStringTag,{value:"Module"})),pt={vpn:{id:"vpn",title:"VPN Architecture (User → Iran VPS → Starlink → Germany → Internet)",subtitle:"Reality + Starlink + WireGuard",icon:"🔐",type:"composite",description:"User in Iran connects via Reality to Iran VPS, then through Starlink PC to Germany VPS and out to the internet. Auth and key management in control plane.",children:[],code:`%%{init: {'theme': 'dark', 'flowchart': {'curve': 'basis'}}}%%
flowchart TD
    subgraph Iran_VPS["🇮🇷 Iran VPS (ParsPack)"]
        direction TB
        Web["🌐 Decoy Shop Website<br/>(Nginx, HTTPS, valid cert)"]
        XrayIn["📡 Xray Inbound (Reality)<br/>• Port 443 (same as website)<br/>• VLESS + Reality<br/>• Dest: cloudflare.com:443<br/>• TLS fingerprint mimicry"]
        XrayOut["📤 Xray Outbound (to Starlink PC)<br/>• VLESS + WebSocket + TLS<br/>• WSS on port 443<br/>• Points to Starlink PC public IP"]
        RouterIran["🔄 Routing Rules<br/>• If dest is website → serve Web<br/>• If dest is proxy → XrayOut"]
    end

    subgraph User_Space["🧑 User Environment (Iran)"]
        Client["📱 Client Device<br/>(Phone/PC)"]
        ClientApp["🛜 Hiddify/Xray Client<br/>• Reality protocol<br/>• TLS 1.3<br/>• Fake SNI: cloudflare.com"]
        AuthClient["🔑 Auth Module<br/>• Login to Auth Server<br/>• Receives WireGuard keys"]
    end

    subgraph Starlink_PC["🛰️ Starlink PC (Hidden in Iran)"]
        direction TB
        StarlinkDish["📡 Starlink Dish (Gen 2/Mini)<br/>• Modified: inside solar panel<br/>• 12V DC conversion kit<br/>• Bypass mode enabled"]
        XrayStarlinkIn["📥 Xray Inbound (from Iran VPS)<br/>• VLESS + WebSocket + TLS<br/>• Port 443 (listens on Starlink IP)"]
        WireGuardOut["🔐 WireGuard Tunnel (to Germany)<br/>• Encrypted UDP tunnel<br/>• Connects to Germany VPS<br/>• Routes all traffic"]
        RouterStarlink["🔄 Routing Rules<br/>• Inbound from Iran VPS → WireGuard<br/>• Outbound from WireGuard → Internet"]
    end

    subgraph Control_Plane["🛂 Control & Management"]
        AuthDB[(Auth Database<br/>• User credentials<br/>• Active sessions)]
        KeyGen["🔑 Key Generator<br/>• Unique WireGuard keys<br/>• UUIDs for Xray"]
    end

    subgraph Germany_VPS["🇩🇪 Germany VPS (Hetzner/Contabo)"]
        direction TB
        WireGuardIn["🔐 WireGuard Server<br/>• Accepts tunnel from Starlink PC<br/>• Assigns internal IP"]
        XrayExit["🌍 Xray Outbound (to Internet)<br/>• Freedom protocol<br/>• NAT to internet"]
        AuthServer["🔑 Auth Server<br/>• User accounts<br/>• One‑connection enforcement<br/>• Issues WireGuard/Xray configs"]
        RouterGermany["🔄 Routing & NAT<br/>• Forwards traffic to/from Internet"]
    end

    subgraph Internet["🌐 Global Internet"]
        Instagram["📸 Instagram/Facebook"]
        Google["🔍 Google"]
        Others["📦 Other Services"]
    end

    AuthDB --> AuthServer
    KeyGen --> AuthServer
    AuthClient -->|"1. Login via Xray/Reality"| XrayIn
    AuthServer -->|"2. Config + Keys"| RouterGermany
    ClientApp -->|"3. VPN Connection"| XrayIn
    XrayIn -->|"4. Inspect & Route"| RouterIran
    RouterIran -->|"5. Proxy traffic"| XrayOut
    RouterIran -.->|"6. Legit browsing"| Web
    Web -->|Decoy / HTTPS| Client
    XrayOut -->|"7. VLESS+WS+TLS Port 443"| XrayStarlinkIn
    XrayStarlinkIn -->|"8. Decapsulate"| RouterStarlink
    RouterStarlink -->|"9. All traffic"| WireGuardOut
    StarlinkDish -->|"10. Raw IP"| RouterStarlink
    WireGuardOut -->|"11. Encrypted UDP Tunnel"| WireGuardIn
    WireGuardIn -->|"12. Decrypt & Route"| RouterGermany
    RouterGermany -->|"13. NAT to Internet"| XrayExit
    XrayExit -->|"14. HTTP/HTTPS"| Instagram & Google & Others
`},everything:{id:"everything",title:"EVERYTHING - Complete System",subtitle:"Every component, service, table, flow - ALL IN ONE",icon:"🌐",type:"composite",description:"The complete Arnitex backend system - every single component from our entire conversation",children:["overview","controllers","services","database","flows","external","advanced"],code:`
graph TB
  Clients["🌐 CLIENTS<br/>Web • Mobile • ATM<br/>Admin • Payment Gateways"]
  Security["🔐 SECURITY<br/>JWT • 2FA • OTP<br/>Auth Manager"]
  Controllers["🎛️ CONTROLLERS 25+<br/>Admin • Users • Orders • Trades<br/>Wallets • Markets • Coins<br/>Exchange • Tickets • Gifts"]
  
  Services1["⚙️ CORE SERVICES<br/>Order • Trade • Market<br/>Exchange • CreateOrder"]
  Services2["💰 WALLET SERVICES<br/>Wallet • CustomerWallet<br/>Deposit • Withdrawal • Toman"]
  Services3["👤 IDENTITY KYC<br/>Customer • FinoTech<br/>Jibit • BankAccount"]
  Services4["📧 NOTIFICATIONS<br/>Email • SMS<br/>Notification • Alarm"]
  Services5["🎫 CONTENT SUPPORT<br/>Ticket • Message • Blog<br/>FAQ • File"]
  
  Blockchain["⛓️ BLOCKCHAIN<br/>ApieService<br/>ETH • TRON • BTC<br/>XRP • XLM • BSC"]
  Payment["💳 PAYMENT GATEWAYS<br/>Vandar • Jibit • NextPay<br/>Sadad • Zarinpal"]
  Database["💾 DATABASE 81 TABLES<br/>Identity • Assets • Markets<br/>Trading • Wallets • Finance<br/>Content • Notifications"]
  External["🌐 EXTERNAL<br/>Apie • FinnoTech • Jibit<br/>Gateways • SMTP • SMS"]
  Advanced["🚀 ADVANCED COMPONENTS<br/>Advanced Trading • Compliance<br/>Security • Financial Services<br/>Analytics • Operations<br/>Levels 31-60"]
  
  Clients --> Security
  Security --> Controllers
  
  Controllers --> Services1
  Controllers --> Services2
  Controllers --> Services3
  Controllers --> Services4
  Controllers --> Services5
  
  Services1 --> Database
  Services2 --> Database
  Services3 --> Database
  Services4 --> Database
  Services5 --> Database
  
  Services1 -.-> Advanced
  Services2 -.-> Advanced
  Services3 -.-> Advanced
  Services2 --> Blockchain
  Services2 --> Payment
  Services3 --> External
  Services4 --> External
  
  Blockchain --> External
  Payment --> External
  Advanced --> Database
  
  style Clients fill:#1e3a5f,stroke:#60a5fa,stroke-width:3px,color:#fff
  style Security fill:#2d4a6f,stroke:#60a5fa,stroke-width:3px,color:#fff
  style Controllers fill:#1e3a5f,stroke:#60a5fa,stroke-width:3px,color:#fff
  style Services1 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px,color:#fff
  style Services2 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px,color:#fff
  style Services3 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px,color:#fff
  style Services4 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px,color:#fff
  style Services5 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px,color:#fff
  style Blockchain fill:#1e3a5f,stroke:#10b981,stroke-width:2px,color:#fff
  style Payment fill:#1e3a5f,stroke:#f59e0b,stroke-width:2px,color:#fff
  style Database fill:#1e3a5f,stroke:#ef4444,stroke-width:3px,color:#fff
  style External fill:#1e3a5f,stroke:#8b5cf6,stroke-width:3px,color:#fff
  style Advanced fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5,color:#fff
  
  click Controllers "#controllers" "View All Controllers"
  click Services1 "#services" "View All Services"
  click Database "#database" "View Database Schema"
  click External "#external" "View Integrations"
  click Advanced "#missing" "View Advanced Components"
`},overview:{id:"overview",title:"System Overview",subtitle:"Complete architecture at a glance",icon:"🏗️",type:"composite",description:"High-level view of the entire Arnitex backend system",children:["controllers","services","database","flows","external","advanced"],code:`
flowchart TB
  subgraph Clients["External Clients"]
    UI[Web Mobile UI]
    ATM[ATM Devices]
    Gateway[Payment Gateways]
    Webhook[Webhooks]
  end

  subgraph Security["Security Layer"]
    JWT[JWT Auth]
    AuthMgr[Auth Manager]
    TwoFA[2FA OTP]
  end

  subgraph API["REST API Layer"]
    Controllers[25+ Controllers]
  end

  subgraph Business["Business Logic"]
    Services[140+ Services]
  end

  subgraph Data["Data Layer"]
    Database[💾 81 Tables<br/>Identity • Assets • Markets<br/>Trading • Wallets • Finance<br/>Content • Notifications]
  end

  subgraph Integration["External"]
    direction TB
    Blockchain[⛓️ Blockchain APIs<br/>Apie • Multi-chain<br/>ETH • TRON • BTC]
    PaymentAPI[💳 Payment APIs<br/>Vandar • Jibit • NextPay<br/>Sadad • Zarinpal]
    KYCAPI[👤 KYC APIs<br/>FinoTech • Jibit<br/>Identity Verification]
  end

  Clients --> Security
  Security --> API
  API --> Business
  Business --> Data
  Business --> Integration

  style Database fill:#1e3a5f,stroke:#ef4444,stroke-width:3px,color:#fff
  style Blockchain fill:#1e3a5f,stroke:#10b981,stroke-width:2px,color:#fff
  style PaymentAPI fill:#1e3a5f,stroke:#f59e0b,stroke-width:2px,color:#fff
  style KYCAPI fill:#1e3a5f,stroke:#8b5cf6,stroke-width:2px,color:#fff

  click Controllers "#controllers" "View Controllers"
  click Services "#services" "View Services"
  click Database "#database" "View Database"
  click Blockchain "#external" "View External Integrations"
  click PaymentAPI "#external" "View External Integrations"
  click KYCAPI "#external" "View External Integrations"
`},controllers:{id:"controllers",title:"Controllers Layer",subtitle:"25+ REST API Controllers",icon:"🎛️",type:"detail",description:"HTTP endpoints and request handlers",parent:"overview",children:["AdminController","CustomerController","OrderController","WalletController","TradeController","MarketController","CoinController","ExchangeActionController","TicketController","GiftCodeController"],code:`
flowchart TB
  subgraph Admin["Admin Management"]
    AdminC[AdminController<br/>POST /api/admins/login<br/>POST /api/admins/create<br/>GET /api/admins]
    RolesC[RolesController<br/>GET POST /api/roles<br/>GET /api/roles/privileges]
  end

  subgraph User["User Management"]
    UserC[CustomerController<br/>POST /api/users/register<br/>POST /api/users/login<br/>GET /api/users/profile<br/>PUT /api/users/kyc]
    AuthC[Authentication<br/>POST /api/users/login-with-otp<br/>POST /api/users/check-otp-code<br/>GET /api/users/google-sso]
  end

  subgraph Trading["Trading"]
    OrderC[OrderController<br/>POST /api/orders/buy<br/>POST /api/orders/sell<br/>DELETE /api/orders/:id<br/>GET /api/orders/order-book]
    TradeC[TradeController<br/>GET /api/trades<br/>GET /api/trades/history<br/>GET /api/trades/admin]
    MarketC[MarketController<br/>GET POST /api/markets<br/>PUT /api/markets/activate]
  end

  subgraph Wallet["Wallets"]
    WalletC[WalletController<br/>POST /api/wallets<br/>POST /api/wallets/generate-address<br/>POST /api/wallets/withdrawal-request<br/>GET /api/wallets/balance]
    DepositC[Deposit Handling<br/>Webhook callbacks<br/>Gateway updates]
  end

  subgraph OTC["OTC Exchange"]
    ExchangeC[ExchangeActionController<br/>POST /api/exchange/buy<br/>POST /api/exchange/sell<br/>POST /api/exchange/approve-order]
    CoinC[CoinController<br/>GET /api/coins/price/usd<br/>GET /api/coins/price/from-to<br/>POST /api/coins/tether-price]
  end

  subgraph Support["Support"]
    TicketC[TicketController<br/>GET POST /api/tickets<br/>POST /api/tickets/message/:id]
    BlogC[BlogController<br/>GET POST /api/blog]
  end

  subgraph Promo["Promotions"]
    GiftC[GiftCodeController<br/>POST /api/gift-code<br/>PUT /api/gift-code/use<br/>POST /api/gift-code/register/:prefix]
    RefC[ReferralCodeController<br/>POST /api/referral/create]
  end

  subgraph AdvancedTrading["🚀 Advanced Trading [ADVANCED]"]
    MarginC[MarginTradingController<br/>POST /api/margin/open<br/>POST /api/margin/close<br/>GET /api/margin/positions]
    FuturesC[FuturesController<br/>POST /api/futures/place<br/>GET /api/futures/positions<br/>GET /api/futures/funding]
    OptionsC[OptionsController<br/>POST /api/options/buy<br/>POST /api/options/sell<br/>GET /api/options/chain]
    TradingBotsC[TradingBotsController<br/>POST /api/bots/create<br/>GET /api/bots/strategies]
  end

  subgraph Compliance["🚀 Compliance [ADVANCED]"]
    AMLController[AMLController<br/>GET /api/aml/transactions<br/>POST /api/aml/report]
    SanctionsC[SanctionsController<br/>POST /api/sanctions/check<br/>GET /api/sanctions/list]
    RegulatoryC[RegulatoryController<br/>GET /api/compliance/reports<br/>POST /api/compliance/submit]
    TaxC[TaxController<br/>GET /api/tax/report<br/>GET /api/tax/calculate]
  end

  subgraph Financial["🚀 Financial Services [ADVANCED]"]
    StakingC[StakingController<br/>POST /api/staking/stake<br/>GET /api/staking/rewards]
    LendingC[LendingController<br/>POST /api/lending/borrow<br/>POST /api/lending/repay]
    YieldC[YieldController<br/>POST /api/yield/deposit<br/>GET /api/yield/earnings]
    ListingC[TokenListingController<br/>POST /api/tokens/list<br/>GET /api/tokens/pending]
  end

  subgraph Analytics["🚀 Analytics [ADVANCED]"]
    AnalyticsC[AnalyticsController<br/>GET /api/analytics/trading<br/>GET /api/analytics/business]
    DashboardC[DashboardController<br/>GET /api/dashboard/admin<br/>GET /api/dashboard/metrics]
  end

  OrderC --> MarginC
  TradeC --> FuturesC
  TradeC --> OptionsC
  WalletC --> StakingC
  WalletC --> LendingC

  click AdminC "#AdminController" "View Details"
  click UserC "#CustomerController" "View Details"
  click OrderC "#OrderController" "View Details"
  click WalletC "#WalletController" "View Details"
  click MarginC "#Level31_MarginTrading" "View Level 31: Margin Trading"
  click FuturesC "#Level32_FuturesPerpetual" "View Level 32: Futures & Perpetual"
  click OptionsC "#Level33_OptionsTrading" "View Level 33: Options Trading"
  click TradingBotsC "#Level35_TradingBotsAPI" "View Level 35: Trading Bots"
  click AMLController "#Level36_AMLMonitoring" "View Level 36: AML Monitoring"
  click SanctionsC "#Level37_SanctionsScreening" "View Level 37: Sanctions"
  click RegulatoryC "#Level38_RegulatoryReporting" "View Level 38: Regulatory"
  click TaxC "#Level39_TaxReporting" "View Level 39: Tax Reporting"
  click StakingC "#Level46_StakingServices" "View Level 46: Staking"
  click LendingC "#Level47_LendingBorrowing" "View Level 47: Lending"
  click YieldC "#Level48_YieldFarming" "View Level 48: Yield Farming"
  click ListingC "#Level50_TokenListing" "View Level 50: Token Listing"
  click AnalyticsC "#Level51_TradingAnalytics" "View Level 51: Analytics"
  click DashboardC "#Level53_AdminDashboards" "View Level 53: Dashboards"

  style MarginC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style FuturesC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style OptionsC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style TradingBotsC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AMLController fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style SanctionsC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style RegulatoryC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style TaxC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style StakingC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style LendingC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style YieldC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style ListingC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AnalyticsC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style DashboardC fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
`},services:{id:"services",title:"Services Layer",subtitle:"140+ Business Services",icon:"⚙️",type:"detail",description:"Core business logic and orchestration",parent:"overview",children:["OrderService","WalletService","CustomerService","TradeService","PaymentGateway"],code:`
flowchart TB
  subgraph Core["Core Services"]
    OrderS[OrderService<br/>createOrder deleteOrder<br/>getOrderBook validateDTO]
    TradeS[TradeService<br/>executeTrade<br/>getTradeHistory<br/>calculateVolume]
    CustomerS[CustomerService<br/>register authenticate<br/>updateProfile manageKYC]
  end

  subgraph Wallet["Wallet Services"]
    WalletS[WalletService<br/>createHDWallet<br/>generateAddress<br/>createTransaction<br/>createWithdrawal]
    BalanceS[CustomerWalletService<br/>getBalance updateBalance<br/>lockFunds unlockFunds]
    DepositS[DepositService<br/>trackDeposit confirmDeposit]
    WithdrawS[WithdrawalService<br/>createRequest<br/>approveWithdrawal<br/>rejectWithdrawal]
  end

  subgraph Blockchain["Blockchain"]
    ApieS[ApieService<br/>createHDWallet<br/>generateAddress<br/>getBalance createRawTx<br/>checkConfirmations]
    NetworkS[Multi-Chain Support<br/>ETH ERC20<br/>TRON TRC20<br/>BTC XRP XLM BSC BEP20]
  end

  subgraph Payment["Payment Gateways"]
    PGW[PaymentGateway Interface]
    Vandar[VandarService]
    Jibit[JibitService]
    NextPay[NextPayService]
    Sadad[SadadService]
    Zarinpal[ZarinpalService]
  end

  subgraph KYC["KYC Identity"]
    FinoTech[FinoTechService<br/>validateNationalID<br/>cardToIBAN sendSMS<br/>verifyBankAccount]
    JibitKYC[JibitService<br/>matchIBAN matchCard<br/>identitySimilarity]
  end

  subgraph Notification["Notifications"]
    EmailS[EmailService<br/>sendEmail templates]
    SMSS[SMSService<br/>sendOTP sendAlert]
    NotifS[NotificationService<br/>createNotification<br/>markAsRead]
  end

  subgraph AdvancedTrading["🚀 Advanced Trading [ADVANCED]"]
    MarginS[MarginTrading<br/>Leverage • Liquidation<br/>Collateral Management]
    FuturesS[Futures & Perpetual<br/>Funding Rates<br/>Mark Prices]
    OptionsS[Options Trading<br/>Black-Scholes • Greeks]
    AdvancedOrders[Advanced Orders<br/>Iceberg • TWAP • VWAP]
    TradingBots[Trading Bots & API<br/>Copy Trading • Social]
  end

  subgraph Compliance["🚀 Compliance & Risk [ADVANCED]"]
    AML[AML Monitoring<br/>Transaction Monitoring<br/>SAR Reporting]
    Sanctions[Sanctions Screening<br/>OFAC • EU • UN]
    Regulatory[Regulatory Reporting<br/>CDD • EDD • Compliance]
    Tax[Tax Reporting<br/>1099-B • Tax Calculation]
    Risk[Risk Management<br/>Risk Scoring • Analytics]
  end

  subgraph Security["🚀 Security Enhancements [ADVANCED]"]
    ColdWallet[Cold Wallet<br/>HSM • Secure Storage]
    MultiSig[Multi-Signature<br/>M-of-N • Approval]
    HSM[HSM Integration<br/>Key Management]
    AdvancedSec[Advanced Security<br/>Rate Limiting • Encryption]
    SecMonitoring[Security Monitoring<br/>Threat Detection • SIEM]
  end

  subgraph Financial["🚀 Financial Services [ADVANCED]"]
    Staking[Staking Services<br/>Rewards • Delegation]
    Lending[Lending & Borrowing<br/>Collateral • Liquidation]
    Yield[Yield Farming<br/>Liquidity Pools • DeFi]
    Airdrops[Airdrops<br/>Token Distribution]
    Listing[Token Listing<br/>Listing Management]
  end

  subgraph Analytics["🚀 Analytics & Reporting [ADVANCED]"]
    TradingAnalytics[Trading Analytics<br/>Statistics • Charts]
    BusinessAnalytics[Business Analytics<br/>Metrics • Reporting]
    AdminDash[Admin Dashboards<br/>Monitoring • Visualizations]
    DataWarehouse[Data Warehouse<br/>ETL • Business Intelligence]
  end

  subgraph Operations["🚀 Operations [ADVANCED]"]
    Fees[Fee Management<br/>Dynamic Fees • Tiers]
    Support[Customer Support<br/>Live Chat • Automation]
    Liquidity[Liquidity Management<br/>Optimization]
    MarketData[Market Data<br/>Aggregation]
    Infrastructure[Infrastructure<br/>Auto-Scaling • Backup]
  end

  %% Core Service Connections
  OrderS --> TradeS
  OrderS --> WalletS
  TradeS --> WalletS
  CustomerS --> BalanceS
  CustomerS --> FinoTech
  CustomerS --> JibitKYC
  CustomerS --> NotifS

  %% Wallet Service Connections
  WalletS --> ApieS
  WalletS --> BalanceS
  WalletS --> DepositS
  WalletS --> WithdrawS
  DepositS --> PGW
  WithdrawS --> ApieS

  %% Payment Gateway Connections
  PGW --> Vandar
  PGW --> Jibit
  PGW --> NextPay
  PGW --> Sadad
  PGW --> Zarinpal

  %% Notification Connections
  NotifS --> EmailS
  NotifS --> SMSS

  %% Advanced Component Connections (dashed)
  OrderS -.-> MarginS
  TradeS -.-> FuturesS
  TradeS -.-> OptionsS
  WalletS -.-> Staking
  WalletS -.-> Lending
  WalletS -.-> ColdWallet
  WalletS -.-> MultiSig
  CustomerS -.-> AML
  CustomerS -.-> Sanctions
  CustomerS -.-> Regulatory
  OrderS -.-> TradingAnalytics
  TradeS -.-> TradingAnalytics

  click OrderS "#OrderService" "View Details"
  click WalletS "#WalletService" "View Details"
  click ApieS "#ApieService" "View Details"
  click MarginS "#Level31_MarginTrading" "View Level 31: Margin Trading"
  click FuturesS "#Level32_FuturesPerpetual" "View Level 32: Futures & Perpetual"
  click OptionsS "#Level33_OptionsTrading" "View Level 33: Options Trading"
  click AdvancedOrders "#Level34_AdvancedOrderTypes" "View Level 34: Advanced Order Types"
  click TradingBots "#Level35_TradingBotsAPI" "View Level 35: Trading Bots & API"
  click AML "#Level36_AMLMonitoring" "View Level 36: AML Monitoring"
  click Sanctions "#Level37_SanctionsScreening" "View Level 37: Sanctions Screening"
  click Regulatory "#Level38_RegulatoryReporting" "View Level 38: Regulatory Reporting"
  click Tax "#Level39_TaxReporting" "View Level 39: Tax Reporting"
  click Risk "#Level40_AdvancedRiskManagement" "View Level 40: Risk Management"
  click ColdWallet "#Level41_ColdWalletManagement" "View Level 41: Cold Wallet"
  click MultiSig "#Level42_MultiSignatureWallets" "View Level 42: Multi-Signature"
  click HSM "#Level43_HSMIntegration" "View Level 43: HSM Integration"
  click AdvancedSec "#Level44_AdvancedSecurity" "View Level 44: Advanced Security"
  click SecMonitoring "#Level45_SecurityMonitoring" "View Level 45: Security Monitoring"
  click Staking "#Level46_StakingServices" "View Level 46: Staking Services"
  click Lending "#Level47_LendingBorrowing" "View Level 47: Lending & Borrowing"
  click Yield "#Level48_YieldFarming" "View Level 48: Yield Farming"
  click Airdrops "#Level49_AirdropsDistribution" "View Level 49: Airdrops"
  click Listing "#Level50_TokenListing" "View Level 50: Token Listing"
  click TradingAnalytics "#Level51_TradingAnalytics" "View Level 51: Trading Analytics"
  click BusinessAnalytics "#Level52_BusinessAnalytics" "View Level 52: Business Analytics"
  click AdminDash "#Level53_AdminDashboards" "View Level 53: Admin Dashboards"
  click DataWarehouse "#Level55_DataWarehouse" "View Level 55: Data Warehouse"
  click Fees "#Level56_FeeManagement" "View Level 56: Fee Management"
  click Support "#Level57_CustomerSupport" "View Level 57: Customer Support"
  click Liquidity "#Level58_LiquidityManagement" "View Level 58: Liquidity Management"
  click MarketData "#Level59_AdvancedMarketData" "View Level 59: Market Data"
  click Infrastructure "#Level60_Infrastructure" "View Level 60: Infrastructure"

  style MarginS fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style FuturesS fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style OptionsS fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AdvancedOrders fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style TradingBots fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AML fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Sanctions fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Regulatory fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Tax fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Risk fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style ColdWallet fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style MultiSig fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style HSM fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AdvancedSec fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style SecMonitoring fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Staking fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Lending fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Yield fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Airdrops fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Listing fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style TradingAnalytics fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style BusinessAnalytics fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AdminDash fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style DataWarehouse fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Fees fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Support fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Liquidity fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style MarketData fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Infrastructure fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
`},database:{id:"database",title:"Database Schema",subtitle:"81 Tables",icon:"💾",type:"detail",description:"MySQL database structure and relationships",parent:"overview",code:`
flowchart TB
  subgraph IdentityTables["Identity Access"]
    RoleTable[ROLE PRIVILEGE roles_privileges]
    UserTable[customers admins login_histories]
    KYCTable[finno_tech_validation bank_accounts credit_card]
  end

  subgraph AssetTables["Assets"]
    CoinTable[COIN_ENTITY]
    NetworkTable[CRYPTO_NETWORK]
    JunctionTable[coin_network_junction]
  end

  subgraph MarketTables["Markets Pricing"]
    MarketTable[markets]
    SettingTable[exchange_setting]
    TetherTable[tether_price]
  end

  subgraph TradingTables["Trading"]
    OrderTable[orders]
    TradeTable[trades]
  end

  subgraph WalletTables["Wallets"]
    HDWalletTable[hd_wallet]
    HDAddressTable[hd_wallet_address]
    AccountTable[account_wallets]
    CustWalletTable[customer_wallet]
  end

  subgraph TransactionTables["On-Chain"]
    EthTxTable[ethereum_transaction]
    TronTxTable[tron_transactions]
    InternalTxTable[internal_transaction]
  end

  subgraph FinanceTables["Finance"]
    DepositTable[deposit_requests]
    TomanTxTable[toman_transactions]
    WithdrawTable[withdrawal_requests]
  end

  subgraph ContentTables["Content"]
    CMSTable[blog faq user_manual]
    SupportTable[ticket notifications]
  end

  subgraph AdvancedTables["🚀 Advanced Tables [ADVANCED]"]
    MarginTable[margin_positions<br/>margin_orders<br/>liquidation_events]
    FuturesTable[futures_contracts<br/>funding_rates<br/>positions]
    OptionsTable[options_contracts<br/>options_chain<br/>exercises]
    AMLTable[aml_transactions<br/>sar_reports<br/>risk_scores]
    SanctionsTable[sanctions_checks<br/>sanctions_lists]
    StakingTable[staking_positions<br/>staking_rewards<br/>delegations]
    LendingTable[lending_positions<br/>collateral<br/>borrows]
    AnalyticsTable[trading_analytics<br/>business_metrics<br/>reports]
    ColdWalletTable[cold_wallets<br/>hsm_keys<br/>signatures]
  end

  UserTable --> RoleTable
  UserTable --> KYCTable
  UserTable --> CustWalletTable
  OrderTable --> UserTable
  OrderTable --> MarketTable
  OrderTable --> TradeTable
  MarketTable --> CoinTable
  CoinTable --> JunctionTable
  JunctionTable --> NetworkTable
  HDWalletTable --> UserTable
  CustWalletTable --> UserTable
  DepositTable --> CustWalletTable
  WithdrawTable --> CustWalletTable
  EthTxTable --> HDWalletTable
  TronTxTable --> HDWalletTable
  
  OrderTable -.-> MarginTable
  TradeTable -.-> FuturesTable
  TradeTable -.-> OptionsTable
  CustWalletTable -.-> StakingTable
  CustWalletTable -.-> LendingTable
  WithdrawTable -.-> AMLTable
  WithdrawTable -.-> SanctionsTable
  HDWalletTable -.-> ColdWalletTable

  click MarginTable "#Level31_MarginTrading" "View Level 31: Margin Trading"
  click FuturesTable "#Level32_FuturesPerpetual" "View Level 32: Futures"
  click OptionsTable "#Level33_OptionsTrading" "View Level 33: Options"
  click AMLTable "#Level36_AMLMonitoring" "View Level 36: AML"
  click SanctionsTable "#Level37_SanctionsScreening" "View Level 37: Sanctions"
  click StakingTable "#Level46_StakingServices" "View Level 46: Staking"
  click LendingTable "#Level47_LendingBorrowing" "View Level 47: Lending"
  click AnalyticsTable "#Level51_TradingAnalytics" "View Level 51: Analytics"
  click ColdWalletTable "#Level41_ColdWalletManagement" "View Level 41: Cold Wallet"

  style MarginTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style FuturesTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style OptionsTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AMLTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style SanctionsTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style StakingTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style LendingTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AnalyticsTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style ColdWalletTable fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
`},flows:{id:"flows",title:"Key System Flows",subtitle:"Critical business processes",icon:"🔄",type:"detail",description:"Step-by-step process flows",parent:"overview",children:["OrderFlow","WithdrawalFlow","DepositFlow","KYCFlow"],code:`
flowchart TB
  subgraph OrderFlow["Order Placement Flow"]
    O1[📝 User Submits Order<br/>Buy/Sell request<br/>Amount • Price • Market]
    O2[✅ Validate DTO<br/>Check request format<br/>Validate fields]
    O3{Market Active?<br/>Trading enabled?}
    O4[💰 Check Unit Price<br/>Get current market price<br/>Validate price range]
    O5[🔒 Lock Funds<br/>Reserve balance<br/>Prevent double-spend]
    O6[📋 Create Order<br/>Save to database<br/>Generate order ID]
    O7[⚙️ Matching Engine<br/>Search for matches<br/>Price-time priority]
    O8{Match Found?<br/>Compatible order?}
    O9[✅ Execute Trade<br/>Create trade record<br/>Update balances]
    O10[📊 Order in Book<br/>Add to order book<br/>Wait for match]

    O1 --> O2
    O2 --> O3
    O3 -->|Yes| O4
    O3 -->|No| O10
    O4 --> O5
    O5 --> O6
    O6 --> O7
    O7 --> O8
    O8 -->|Yes| O9
    O8 -->|No| O10
  end

  subgraph WithdrawFlow["Withdrawal Flow"]
    W1[📝 Create Withdrawal Request<br/>User submits withdrawal<br/>Amount • Address • Coin]
    W2[🔍 Check Limits & Balance<br/>Validate daily/monthly limits<br/>Verify sufficient balance]
    W3[📱 Send OTP Code<br/>Generate OTP<br/>Send via SMS/Email]
    W4[✅ Confirm OTP<br/>User enters OTP<br/>Verify code matches]
    W5{Auto Approve?<br/>Amount < threshold?}
    W6[👤 Admin Review<br/>Manual approval required<br/>Check compliance]
    W7[⛓️ Create On-Chain Transaction<br/>Generate blockchain TX<br/>Sign & broadcast]
    W8[📊 Update Status<br/>Mark as processing<br/>Track transaction]
    W9[💰 Deduct Balance<br/>Update wallet balance<br/>Record transaction]

    W1 --> W2
    W2 --> W3
    W3 --> W4
    W4 --> W5
    W5 -->|Yes| W7
    W5 -->|No| W6
    W6 --> W7
    W7 --> W8
    W8 --> W9
  end

  subgraph DepositFlow["Deposit Flow"]
    D1[💳 Initiate Deposit<br/>User requests deposit<br/>Amount • Currency]
    D2[🔌 Select Gateway<br/>Choose payment provider<br/>Vandar • Jibit • NextPay]
    D3[🔗 Get Redirect URL<br/>Generate payment link<br/>Return to user]
    D4[💵 User Pays<br/>Complete payment<br/>On gateway page]
    D5[📞 Gateway Callback<br/>Webhook received<br/>Payment status update]
    D6[✅ Verify Payment<br/>Validate transaction<br/>Check amount & signature]
    D7{Payment<br/>Successful?}
    D8[💰 Credit Balance<br/>Update wallet balance<br/>Record transaction]
    D9[📧 Send Notification<br/>Email/SMS confirmation<br/>Transaction receipt]

    D1 --> D2
    D2 --> D3
    D3 --> D4
    D4 --> D5
    D5 --> D6
    D6 --> D7
    D7 -->|Yes| D8
    D7 -->|No| D1
    D8 --> D9
  end

  subgraph KYCFlow["KYC Verification Flow"]
    K1[📝 Submit Profile<br/>User provides info<br/>Name • NID • Bank details]
    K2{Country<br/>Iran?}
    K3[🔌 Select KYC Provider<br/>FinoTech or Jibit<br/>Based on requirements]
    K4[🆔 Validate National ID<br/>Verify ID number<br/>Check authenticity]
    K5[🏦 Match IBAN/Card<br/>Validate bank account<br/>Verify ownership]
    K6[👤 Admin Review<br/>Manual verification<br/>Check documents]
    K7{Approved?<br/>All checks pass?}
    K8[✅ Update to AUTHORIZED<br/>Enable full access<br/>Activate account]

    K1 --> K2
    K2 -->|Yes| K3
    K2 -->|No| K6
    K3 --> K4
    K4 --> K5
    K5 --> K6
    K6 --> K7
    K7 -->|Yes| K8
    K7 -->|No| K1
  end

  subgraph AdvancedFlows["🚀 Advanced Flows [ADVANCED]"]
    MarginFlow[Margin Trading Flow<br/>Open Position → Check Collateral<br/>→ Monitor → Liquidate]
    FuturesFlow[Futures Flow<br/>Place Order → Funding Rate<br/>→ Mark Price → Settlement]
    AMLFlow[AML Flow<br/>Transaction → Risk Score<br/>→ Alert → SAR Report]
    StakingFlow[Staking Flow<br/>Stake → Delegate →<br/>Earn Rewards → Claim]
    LendingFlow[Lending Flow<br/>Deposit Collateral → Borrow<br/>→ Repay → Withdraw]
  end

  OrderFlow -.-> MarginFlow
  OrderFlow -.-> FuturesFlow
  WithdrawFlow -.-> AMLFlow
  DepositFlow -.-> StakingFlow
  DepositFlow -.-> LendingFlow

  click MarginFlow "#Level31_MarginTrading" "View Level 31: Margin Trading"
  click FuturesFlow "#Level32_FuturesPerpetual" "View Level 32: Futures"
  click AMLFlow "#Level36_AMLMonitoring" "View Level 36: AML"
  click StakingFlow "#Level46_StakingServices" "View Level 46: Staking"
  click LendingFlow "#Level47_LendingBorrowing" "View Level 47: Lending"

  style MarginFlow fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style FuturesFlow fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style AMLFlow fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style StakingFlow fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style LendingFlow fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
`},external:{id:"external",title:"External Integrations",subtitle:"Third-party services",icon:"🌐",type:"detail",description:"External APIs and service providers",parent:"overview",code:`
flowchart LR
  subgraph System["Arnitex Backend"]
    API[API Layer]
    Services[Service Layer]
  end

  subgraph Blockchain["Blockchain Providers"]
    Apie[Apie Service<br/>Multi-chain provider]
  end

  subgraph Chains["Supported Chains"]
    ETH[Ethereum ETH ERC20]
    TRON[TRON TRX TRC20]
    BTC[Bitcoin BTC]
    XRP[Ripple XRP]
    XLM[Stellar XLM]
    BSC[BSC BNB BEP20]
    DASH[Dash DASH]
  end

  subgraph Payment["Payment Gateways IRR"]
    Vandar[Vandar<br/>Card payments]
    Jibit[Jibit<br/>Bank transfers]
    NextPay[NextPay<br/>Multi-bank]
    Sadad[Sadad<br/>Government]
    Zarinpal[Zarinpal<br/>Popular]
    RayanPay[RayanPay<br/>Alternative]
  end

  subgraph KYCProviders["KYC Identity"]
    FinnoTech[FinnoTech<br/>National ID validation]
    JibitKYC[Jibit Identity<br/>IBAN verification]
  end

  subgraph Communication["Communication"]
    SMTP[SMTP Server<br/>Email]
    SMS[SMS Provider<br/>OTP]
  end

  Services --> Apie
  Apie --> ETH
  Apie --> TRON
  Apie --> BTC
  Apie --> XRP
  Apie --> XLM
  Apie --> BSC
  Apie --> DASH
  Services --> Vandar
  Services --> Jibit
  Services --> NextPay
  Services --> Sadad
  Services --> Zarinpal
  Services --> RayanPay
  Services --> FinnoTech
  Services --> JibitKYC
  Services --> SMTP
  Services --> SMS

  click Apie "#apie-integration" "View Details"
  click FinnoTech "#finnotech-integration" "View Details"
`},advanced:{id:"advanced",title:"Advanced Components",subtitle:"Advanced features not in original Java codebase (Levels 31-60)",icon:"🚀",type:"composite",description:"Advanced features and components that need to be implemented - not present in the original Java codebase",code:`
graph TB
  AdvancedTrading["🚀 ADVANCED TRADING<br/>Margin • Futures • Options<br/>Advanced Orders • Trading Bots"]
  
  Compliance["🛡️ COMPLIANCE & RISK<br/>AML • Sanctions • Regulatory<br/>Tax Reporting • Risk Management"]
  
  Security["🔒 SECURITY ENHANCEMENTS<br/>Cold Wallets • Multi-Sig<br/>HSM • Advanced Security"]
  
  Financial["💰 FINANCIAL SERVICES<br/>Staking • Lending • Yield Farming<br/>Airdrops • Token Listing"]
  
  Analytics["📊 ANALYTICS & REPORTING<br/>Trading Analytics • Business Analytics<br/>Admin Dashboards • Data Warehouse"]
  
  Operations["⚙️ OPERATIONAL FEATURES<br/>Fee Management • Customer Support<br/>Liquidity • Market Data • Infrastructure"]
  
  AdvancedTrading --> Margin["Level 31: Margin Trading<br/>Leverage • Liquidation • Collateral"]
  AdvancedTrading --> Futures["Level 32: Futures & Perpetual<br/>Funding Rates • Mark Prices"]
  AdvancedTrading --> Options["Level 33: Options Trading<br/>Black-Scholes • Greeks"]
  AdvancedTrading --> AdvancedOrders["Level 34: Advanced Orders<br/>Iceberg • TWAP • VWAP"]
  AdvancedTrading --> TradingBots["Level 35: Trading Bots & API<br/>Copy Trading • Social Trading"]
  
  Compliance --> AML["Level 36: AML Monitoring<br/>Transaction Monitoring • SAR"]
  Compliance --> Sanctions["Level 37: Sanctions Screening<br/>OFAC • EU • UN Lists"]
  Compliance --> Regulatory["Level 38: Regulatory Reporting<br/>CDD • EDD • Compliance"]
  Compliance --> Tax["Level 39: Tax Reporting<br/>1099-B • Tax Calculation"]
  Compliance --> Risk["Level 40: Risk Management<br/>Risk Scoring • Behavioral Analytics"]
  
  Security --> ColdWallet["Level 41: Cold Wallet<br/>HSM • Secure Storage"]
  Security --> MultiSig["Level 42: Multi-Signature<br/>M-of-N • Approval Workflow"]
  Security --> HSM["Level 43: HSM Integration<br/>Key Management • Signing"]
  Security --> AdvancedSec["Level 44: Advanced Security<br/>Rate Limiting • Encryption"]
  Security --> SecMonitoring["Level 45: Security Monitoring<br/>Threat Detection • SIEM"]
  
  Financial --> Staking["Level 46: Staking Services<br/>Rewards • Delegation"]
  Financial --> Lending["Level 47: Lending & Borrowing<br/>Collateral • Liquidation"]
  Financial --> Yield["Level 48: Yield Farming<br/>Liquidity Pools • DeFi"]
  Financial --> Airdrops["Level 49: Airdrops<br/>Token Distribution"]
  Financial --> Listing["Level 50: Token Listing<br/>Listing Management"]
  
  Analytics --> TradingAnalytics["Level 51: Trading Analytics<br/>Statistics • Charts"]
  Analytics --> BusinessAnalytics["Level 52: Business Analytics<br/>Metrics • Reporting"]
  Analytics --> AdminDash["Level 53: Admin Dashboards<br/>Monitoring • Visualizations"]
  Analytics --> Performance["Level 54: Performance<br/>Optimization • Profiling"]
  Analytics --> DataWarehouse["Level 55: Data Warehouse<br/>ETL • Business Intelligence"]
  
  Operations --> Fees["Level 56: Fee Management<br/>Dynamic Fees • Tiers"]
  Operations --> Support["Level 57: Customer Support<br/>Live Chat • Automation"]
  Operations --> Liquidity["Level 58: Liquidity Management<br/>Optimization • Monitoring"]
  Operations --> MarketData["Level 59: Market Data<br/>Aggregation • Distribution"]
  Operations --> Infrastructure["Level 60: Infrastructure<br/>Auto-Scaling • Backup"]
  
  style AdvancedTrading fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Compliance fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Security fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Financial fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Analytics fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  style Operations fill:#4c1d95,stroke:#a855f7,stroke-width:3px,stroke-dasharray: 5 5
  
  style Margin fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Futures fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Options fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style AdvancedOrders fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style TradingBots fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  
  style AML fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Sanctions fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Regulatory fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Tax fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Risk fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  
  style ColdWallet fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style MultiSig fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style HSM fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style AdvancedSec fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style SecMonitoring fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  
  style Staking fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Lending fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Yield fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Airdrops fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Listing fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  
  style TradingAnalytics fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style BusinessAnalytics fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style AdminDash fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Performance fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style DataWarehouse fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  
  style Fees fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Support fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Liquidity fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style MarketData fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5
  style Infrastructure fill:#581c87,stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5

  click Margin "#Level31_MarginTrading" "View Level 31: Margin Trading"
  click Futures "#Level32_FuturesPerpetual" "View Level 32: Futures & Perpetual"
  click Options "#Level33_OptionsTrading" "View Level 33: Options Trading"
  click AdvancedOrders "#Level34_AdvancedOrderTypes" "View Level 34: Advanced Orders"
  click TradingBots "#Level35_TradingBotsAPI" "View Level 35: Trading Bots"
  click AML "#Level36_AMLMonitoring" "View Level 36: AML Monitoring"
  click Sanctions "#Level37_SanctionsScreening" "View Level 37: Sanctions"
  click Regulatory "#Level38_RegulatoryReporting" "View Level 38: Regulatory"
  click Tax "#Level39_TaxReporting" "View Level 39: Tax Reporting"
  click Risk "#Level40_AdvancedRiskManagement" "View Level 40: Risk Management"
  click ColdWallet "#Level41_ColdWalletManagement" "View Level 41: Cold Wallet"
  click MultiSig "#Level42_MultiSignatureWallets" "View Level 42: Multi-Signature"
  click HSM "#Level43_HSMIntegration" "View Level 43: HSM Integration"
  click AdvancedSec "#Level44_AdvancedSecurity" "View Level 44: Advanced Security"
  click SecMonitoring "#Level45_SecurityMonitoring" "View Level 45: Security Monitoring"
  click Staking "#Level46_StakingServices" "View Level 46: Staking"
  click Lending "#Level47_LendingBorrowing" "View Level 47: Lending"
  click Yield "#Level48_YieldFarming" "View Level 48: Yield Farming"
  click Airdrops "#Level49_AirdropsDistribution" "View Level 49: Airdrops"
  click Listing "#Level50_TokenListing" "View Level 50: Token Listing"
  click TradingAnalytics "#Level51_TradingAnalytics" "View Level 51: Trading Analytics"
  click BusinessAnalytics "#Level52_BusinessAnalytics" "View Level 52: Business Analytics"
  click AdminDash "#Level53_AdminDashboards" "View Level 53: Admin Dashboards"
  click Performance "#Level54_PerformanceOptimization" "View Level 54: Performance"
  click DataWarehouse "#Level55_DataWarehouse" "View Level 55: Data Warehouse"
  click Fees "#Level56_FeeManagement" "View Level 56: Fee Management"
  click Support "#Level57_CustomerSupport" "View Level 57: Customer Support"
  click Liquidity "#Level58_LiquidityManagement" "View Level 58: Liquidity"
  click MarketData "#Level59_AdvancedMarketData" "View Level 59: Market Data"
  click Infrastructure "#Level60_Infrastructure" "View Level 60: Infrastructure"
`}},ir=()=>Object.values(pt);let ot=null;const sr=async()=>{if(!ot)try{const t=await fe(()=>Promise.resolve().then(()=>ar),void 0);t.mapNodeToLevel&&(ot=t.mapNodeToLevel)}catch(t){console.warn("Could not import mapping from TodoStore:",t)}},bt=async(t,r={})=>t?(await sr(),ot?ot(t,r):(console.warn(`⚠️ mapNodeToLevel function not available. Node "${t}" cannot be mapped.`),null)):null,Rt=async(t,r,i={})=>{const a=[],c=new Set;if(!t)return a;const o=[/(\w+)\[["']?([^"'\]]+)["']?\]/g,/(\w+)\[\(([^)]+)\)\]/g];for(const d of o){let s;for(;(s=d.exec(t))!==null;){const u=s[1];let y=s[2]||s[3]||"";if(c.has(u)||(c.add(u),y=y.replace(/<br\s*\/?>/gi," ").trim(),!y||y.match(/^flowchart[_-]/i)))continue;let P=await bt(y||u,i);if(P||(P=await bt(u,i)),!P){const be=(y||u).toLowerCase(),Te={admin:"Level13_AdminRBAC",customer:"Level3_CustomerIdentity",order:"Level7_TradingEngine",trade:"Level7_TradingEngine",wallet:"Level5_WalletServices",payment:"Level11_PaymentGateways",blockchain:"Level6_Blockchain",market:"Level8_MarketManagement",coin:"Level8_MarketManagement",email:"Level4_Notifications",sms:"Level4_Notifications",notification:"Level4_Notifications",ticket:"Level15_SupportContent",database:"Level2_DatabaseAuth",security:"Level2_DatabaseAuth",auth:"Level2_DatabaseAuth"};for(const[Ie,Ee]of Object.entries(Te))if(be.includes(Ie)){P=Ee;break}}P||(P="Level1_ProjectSetup",console.warn(`⚠️ Node "${y||u}" could not be mapped, using Level1 as fallback`));const G=or(u,y),ae=lr(u,G),Ce=y.split(/\n|<br\s*\/?>/).filter(be=>be.trim()),X=Math.max(...Ce.map(be=>be.length),10),A=Ce.length||1;let de=Math.max(180,X*7+40),V=Math.max(90,A*24+50);switch(G){case"high":de*=1.5,V*=1.5;break;case"medium":de*=1.2,V*=1.2;break}a.push({nodeId:u,label:y,type:nr(y||u),description:null,position:ae,style:{width:de,height:V},metadata:{originalLabel:y,extractedFrom:"mermaid",diagramId:r,importance:G},diagramId:r,taskNodeId:P})}}return console.log(`📊 Extracted ${a.length} nodes from diagram ${r}, ${a.filter(d=>d.taskNodeId).length} mapped to Level tasks`),a},nr=t=>{const r=t.toLowerCase();return r.includes("controller")||r.includes("api")?"controller":r.includes("service")?"service":r.includes("database")||r.includes("db")||r.includes("table")?"database":r.includes("wallet")?"wallet":r.includes("blockchain")||r.includes("crypto")?"blockchain":r.includes("payment")||r.includes("gateway")?"payment":r.includes("client")||r.includes("user")?"client":r.includes("security")||r.includes("auth")?"security":"component"},or=(t,r)=>{const i=(t||"").toLowerCase(),a=(r||"").toLowerCase();return i.includes("controllers")||i.includes("services")||i.includes("database")||i.includes("everything")||i.includes("advanced")||i.includes("missing")||a.includes("controllers")||a.includes("services")||a.includes("database")||a.includes("everything")||a.includes("advanced")||a.includes("missing")?"high":i.includes("order")||i.includes("trade")||i.includes("wallet")||i.includes("customer")||i.includes("payment")||i.includes("blockchain")||i.includes("security")||i.includes("auth")?"medium":"low"},lr=(t,r)=>{let c=0;for(let u=0;u<t.length;u++)c=(c<<5)-c+t.charCodeAt(u),c=c&c;const o=r==="high"?400:r==="medium"?300:250,d=100+Math.abs(c)%10*o,s=100+Math.floor(Math.abs(c)/10)%10*o;return{x:d,y:s}},ct=t=>{const r=[],i=new Set,a=/(\w+)\s*(?:-->|-.->|---)\s*(?:\|([^|]+)\|)?\s*(\w+)/g;let c;for(;(c=a.exec(t))!==null;){const o=c[1],d=c[3],s=c[2]||null,u=c[0].includes("-.->")?"dashed":"directed",y=`${o}-->${d}`;i.has(y)||(i.add(y),r.push({source:o,target:d,label:s,type:u,metadata:{extractedFrom:"mermaid",originalEdge:c[0]}}))}return r},Lt=async(t,r)=>{var i;try{const{API_ENDPOINTS:a}=await fe(async()=>{const{API_ENDPOINTS:d}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:d}},[]),c=r.edges||ct(r.code||r.mermaidCode||""),o=await fetch(a.diagramByDiagramId(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r.title,description:r.description,mermaidCode:r.code||r.mermaidCode,customMermaidCode:r.customMermaidCode,nodes:r.nodes,edges:c,metadata:{...r.metadata,edgesCount:c.length,nodesCount:((i=r.nodes)==null?void 0:i.length)||0}})});if(!o.ok)throw new Error("Failed to save diagram");return await o.json()}catch(a){throw console.error("Failed to save diagram to backend:",a),a}},Nt=async(t,r)=>{try{const{API_ENDPOINTS:i}=await fe(async()=>{const{API_ENDPOINTS:a}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:a}},[]);if(await fetch(`${i.nodesByDiagram(t)}`,{method:"DELETE"}).catch(()=>{}),r.length>0){const a=await fetch(i.bulkCreateNodes,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Failed to save nodes");return await a.json()}return[]}catch(i){throw console.error("Failed to save nodes to backend:",i),i}},cr=async()=>{try{const{API_ENDPOINTS:t}=await fe(async()=>{const{API_ENDPOINTS:d}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:d}},[]),r=Object.values(pt).map(d=>({diagramId:d.id,title:d.title,description:d.description||d.subtitle||"",mermaidCode:d.code||"",customMermaidCode:null,nodes:null,edges:null,metadata:{type:d.type,icon:d.icon,children:d.children||[],parent:d.parent||null}}));console.log("🌱 Seeding diagrams to backend...");const i=await fetch(t.seedDiagrams,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!i.ok)throw new Error("Failed to seed diagrams");const a=await i.json();console.log(`✅ Seeded ${a.created} diagrams, skipped ${a.skipped}`),console.log("🌱 Extracting and seeding nodes and edges...");let c=0,o=0;for(const d of Object.values(pt)){const s=await Rt(d.code||"",d.id),u=ct(d.code||""),y=await fetch(t.diagramByDiagramId(d.id));if(y.ok){const P=await y.json();s.forEach(G=>{G.diagramId=P.id}),s.length>0&&(await Nt(P.id,s),c+=s.length,console.log(`  ✅ Seeded ${s.length} nodes for diagram: ${d.id}`)),u.length>0&&(await Lt(d.id,{title:d.title,description:d.description||d.subtitle||"",code:d.code,mermaidCode:d.code,edges:u}),o+=u.length,console.log(`  ✅ Seeded ${u.length} edges for diagram: ${d.id}`))}}return console.log(`✅ Total nodes seeded: ${c}, Total edges seeded: ${o}`),{diagrams:a,nodes:c,edges:o}}catch(t){throw console.error("Failed to seed diagrams and nodes:",t),t}},dr=async t=>{try{const{API_ENDPOINTS:r}=await fe(async()=>{const{API_ENDPOINTS:a}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:a}},[]),i=await fetch(r.diagramByDiagramId(t));if(i.ok){const a=await i.json();if(a.edgeEntities&&Array.isArray(a.edgeEntities)&&a.edgeEntities.length>0)return console.log(`✅ Loaded ${a.edgeEntities.length} edges from Edge entity table`),a.edgeEntities.map(o=>{var d,s,u,y;return{id:o.id,source:o.sourceNodeId,target:o.targetNodeId,sourceNodeId:o.sourceNodeId,targetNodeId:o.targetNodeId,label:o.label||null,type:o.type||"directed",style:o.style||{},metadata:{...o.metadata,path:((d=o.style)==null?void 0:d.path)||((s=o.metadata)==null?void 0:s.path)||null,waypoints:((u=o.style)==null?void 0:u.waypoints)||((y=o.metadata)==null?void 0:y.waypoints)||null},diagramId:o.diagramId}});const c=a.customMermaidCode||a.mermaidCode||"";if(c){const o=ct(c);if(o.length>0)return console.log(`✅ Extracted ${o.length} edges from Mermaid code`),o}return[]}return[]}catch(r){return console.error("Failed to load edges from backend:",r),[]}},Ot=async()=>{try{const{API_ENDPOINTS:t,isBackendAvailable:r}=await fe(async()=>{const{API_ENDPOINTS:o,isBackendAvailable:d}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:o,isBackendAvailable:d}},[]);if(!r()||!t.diagrams)throw console.error("❌ Backend not available - API_ENDPOINTS.diagrams is null"),new Error("Backend API not configured. Please ensure backend is running on http://localhost:3001");console.log("📡 Fetching diagrams from:",t.diagrams);let i;try{i=await fetch(t.diagrams,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"omit"})}catch(o){throw console.error("❌ Fetch error (network/CORS):",o),new Error(`Network error: ${o.message}. Check if backend is running and CORS is configured.`)}if(!i.ok){const o=await i.text().catch(()=>"Could not read error response");throw console.error(`❌ Failed to load diagrams: HTTP ${i.status}`,o),new Error(`Backend returned ${i.status}: ${o.substring(0,100)}`)}let a;try{a=await i.json()}catch(o){console.error("❌ Failed to parse JSON response:",o);const d=await i.text();throw console.error("Response text:",d.substring(0,200)),new Error(`Invalid JSON response from backend: ${o.message}`)}if(console.log(`✅ Received ${(a==null?void 0:a.length)||0} diagrams from backend`),!Array.isArray(a))throw console.error("❌ Invalid response format - expected array, got:",typeof a),new Error("Invalid response format from backend");const c=a.map(o=>{var d,s,u,y;return{id:o.diagramId,title:o.title,subtitle:o.description||"",icon:((d=o.metadata)==null?void 0:d.icon)||"📊",type:((s=o.metadata)==null?void 0:s.type)||"detail",description:o.description||"",code:o.mermaidCode||o.customMermaidCode||"",children:((u=o.metadata)==null?void 0:u.children)||[],parent:((y=o.metadata)==null?void 0:y.parent)||null,dbId:o.id,customMermaidCode:o.customMermaidCode,nodes:o.nodes,edges:o.edges,metadata:o.metadata}});return console.log(`✅ Transformed ${c.length} diagrams`),c}catch(t){throw console.error("❌ Failed to load diagrams from backend:",t),t.message?t:new Error(`Failed to connect to backend: ${t.message||t}`)}},pr=async t=>{var r,i,a,c;try{const{API_ENDPOINTS:o}=await fe(async()=>{const{API_ENDPOINTS:s}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:s}},[]),d=await fetch(o.diagramByDiagramId(t));if(d.ok){const s=await d.json(),u=s.customMermaidCode||s.mermaidCode||"";return!u||u.trim()===""?(console.log(`⚠️ Diagram ${t} in DB has no code, will use registry`),null):{id:s.diagramId,title:s.title,subtitle:s.description||"",icon:((r=s.metadata)==null?void 0:r.icon)||"📊",type:((i=s.metadata)==null?void 0:i.type)||"detail",description:s.description||"",code:u,children:((a=s.metadata)==null?void 0:a.children)||[],parent:((c=s.metadata)==null?void 0:c.parent)||null,dbId:s.id,customMermaidCode:s.customMermaidCode,mermaidCode:s.mermaidCode,nodes:s.nodes,edges:s.edges,metadata:s.metadata}}return null}catch(o){return console.error("Failed to load diagram from backend:",o),null}},ur=async t=>{try{const{API_ENDPOINTS:r}=await fe(async()=>{const{API_ENDPOINTS:a}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:a}},[]);let i=await fetch(`${r.nodes}?diagramId=${t}`);if(!i.ok){const a=await fetch(r.diagramByDiagramId(t));if(a.ok){const c=await a.json();i=await fetch(`${r.nodes}?diagramId=${c.id}`)}}return i.ok?await i.json():[]}catch(r){return console.error("Failed to load nodes from backend:",r),[]}},We=Object.freeze(Object.defineProperty({__proto__:null,extractEdgesFromMermaid:ct,extractNodesFromMermaid:Rt,loadAllDiagramsFromBackend:Ot,loadDiagramFromBackend:pr,loadEdgesFromBackend:dr,loadNodesFromBackend:ur,saveDiagramToBackend:Lt,saveNodesToBackend:Nt,seedDiagramsAndNodes:cr},Symbol.toStringTag,{value:"Module"})),wt=(t,r,i=[])=>{if(t.icon&&t.icon.trim()!==""&&!i.some((u,y)=>y!==r&&u.icon===t.icon))return t.icon;const a=(t.title||"").toLowerCase(),c=(t.type||"").toLowerCase(),o={everything:"🌐",overview:"🏗️",controllers:"🎛️",services:"⚙️",database:"💾",flows:"🔄",external:"🌍",advanced:"🚀",trading:"📈",wallet:"💰",payment:"💳",kyc:"👤",identity:"👤",notification:"📧",support:"🎫",content:"🎫",security:"🔐",blockchain:"⛓️",analytics:"📊",compliance:"✅",financial:"💵",operations:"🔧",market:"📊",coin:"🪙",order:"📋",trade:"💹",admin:"👑",promotional:"🎁",testing:"🧪",documentation:"📚",deployment:"🚢",monitoring:"📡",api:"🔌"};for(const[s,u]of Object.entries(o))if((a.includes(s)||c.includes(s))&&!i.some((P,G)=>G!==r&&P.icon===u))return u;const d=["🌐","🏗️","🎛️","⚙️","💾","🔄","🌍","🚀","📈","💰","💳","👤","📧","🎫","🔐","⛓️","📊","✅","💵","🔧","🎮","🎯","🔒","📱","💻","🖥️","🗄️","🔌","⚡","🎨","🪙","📋","💹","👑","🎁","🧪","📚","🚢","📡","🌐"];for(const s of d)if(!i.some((y,P)=>P!==r&&y.icon===s))return s;return d[r%d.length]||"📊"},mr=()=>{const{currentView:t,sidebarCollapsed:r,navigateToView:i,toggleSidebar:a}=$e(),[c,o]=k.useState([]),[d,s]=k.useState(!0),[u,y]=k.useState(null),[P,G]=k.useState(!1),ae=async()=>{s(!0),y(null);try{console.log("🔄 Loading diagrams from backend...");const A=await Ot();if(A&&Array.isArray(A)&&A.length>0){console.log(`✅ Loaded ${A.length} diagrams from database`);const de=A.map((V,be)=>({...V,icon:wt(V,be,A)}));o(de),y(null)}else console.warn("⚠️ No diagrams found in database (empty array or null)"),y('No diagrams available. Click "Seed database" below.'),o([])}catch(A){console.error("❌ Error loading diagrams from database:",A);const de=A.message||"Unknown error";de.includes("Backend not available")||de.includes("not configured")?y("Backend not available. Set VITE_API_URL to your Worker URL and rebuild."):de.includes("Failed to fetch")||de.includes("ECONNREFUSED")?y("Cannot reach API. Try with VPN or check network."):y(`Failed: ${de.substring(0,80)}`),o([])}finally{s(!1)}},Ce=async()=>{G(!0);try{const{seedDiagramsAndNodes:A}=await fe(async()=>{const{seedDiagramsAndNodes:de}=await Promise.resolve().then(()=>We);return{seedDiagramsAndNodes:de}},void 0);await A(),await ae(),window.dispatchEvent(new CustomEvent("diagram-saved"))}catch(A){console.error("Seed failed:",A),y(A.message||"Seed failed")}finally{G(!1)}};k.useEffect(()=>{ae()},[]);const X=c.filter(A=>A.type==="composite"||A.type==="detail");return e.jsxs("aside",{className:`sidebar ${r?"collapsed":""}`,children:[e.jsx("button",{className:"sidebar-toggle",onClick:a,title:r?"Expand sidebar":"Collapse sidebar",children:r?"▶":"◀"}),e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("span",{children:"💎"}),!r&&e.jsx("div",{children:"BitniTex"})]}),!r&&e.jsx("p",{className:"sidebar-subtitle",children:"Architecture Explorer"}),!r&&e.jsx("p",{className:"sidebar-credit",children:"by HessiKz · Hesam Kazemi"})]}),e.jsxs("nav",{className:"nav-section",children:[!r&&e.jsx("div",{className:"nav-section-title",children:"Views"}),d?e.jsxs("div",{className:"nav-item",style:{opacity:.5},children:[e.jsx("span",{className:"nav-item-icon",children:"⏳"}),!r&&e.jsx("span",{className:"nav-item-title",children:"Loading..."})]}):u?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nav-item",style:{opacity:.7,color:"#ef4444"},children:[e.jsx("span",{className:"nav-item-icon",children:"⚠️"}),!r&&e.jsx("span",{className:"nav-item-title",style:{fontSize:"12px"},children:u})]}),!r&&e.jsxs("button",{type:"button",className:"nav-item seed-db-btn",onClick:Ce,disabled:P,title:"Seed from this browser",children:[e.jsx("span",{className:"nav-item-icon",children:P?"⏳":"🌱"}),e.jsx("span",{className:"nav-item-title",children:P?"Seeding...":"Seed database"})]})]}):X.length===0?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"nav-item",style:{opacity:.7},children:[e.jsx("span",{className:"nav-item-icon",children:"📭"}),!r&&e.jsx("span",{className:"nav-item-title",children:"No diagrams available"})]}),!r&&e.jsxs("button",{type:"button",className:"nav-item seed-db-btn",onClick:Ce,disabled:P,title:"Seed VPN + exchange diagrams from this browser (no script needed)",children:[e.jsx("span",{className:"nav-item-icon",children:P?"⏳":"🌱"}),e.jsx("span",{className:"nav-item-title",children:P?"Seeding...":"Seed database (VPN + exchange)"})]})]}):X.map((A,de)=>e.jsxs("button",{className:`nav-item ${t===A.id?"active":""}`,onClick:()=>i(A.id),title:r?A.title:void 0,children:[e.jsx("span",{className:"nav-item-icon",children:A.icon||wt(A,de)}),!r&&e.jsx("span",{className:"nav-item-title",children:A.title})]},A.id))]}),!r&&e.jsx("div",{className:"stats-section",children:e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Controllers"}),e.jsxs("div",{className:"stat-value",children:["25",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Services"}),e.jsxs("div",{className:"stat-value",children:["140",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Tables"}),e.jsx("div",{className:"stat-value",children:"81"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Endpoints"}),e.jsxs("div",{className:"stat-value",children:["200",e.jsx("span",{className:"stat-unit",children:"+"})]})]})]})}),!r&&e.jsx("div",{className:"sidebar-credit-footer",children:e.jsx("span",{className:"sidebar-credit-footer-text",children:"© HessiKz · Hesam Kazemi"})})]})},gr=()=>{const{currentView:t,breadcrumbs:r,navigateToView:i,toggleMinimap:a,showMinimap:c,toggleSidebar:o,toggleFullscreen:d,showApiTester:s,setShowApiTester:u,selectedNode:y,isEditMode:P,setIsEditMode:G}=$e(),{setShowTodoPanel:ae,getProgress:Ce}=tt(),X=Ce(),A=()=>{d(),document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};return e.jsxs("div",{className:"toolbar",children:[e.jsx("button",{type:"button",className:"toolbar-menu-btn",onClick:o,title:"Open menu","aria-label":"Open menu",children:e.jsx("span",{className:"toolbar-btn-icon",children:"☰"})}),e.jsx("div",{className:"toolbar-title",children:e.jsx("div",{className:"breadcrumb",children:r.map((de,V)=>e.jsxs(qe.Fragment,{children:[V>0&&e.jsx("span",{className:"breadcrumb-separator",children:"/"}),e.jsx("span",{className:`breadcrumb-item ${V===r.length-1?"active":""}`,onClick:()=>V===0&&i("overview"),children:de})]},V))})}),e.jsxs("div",{className:"toolbar-actions",children:[e.jsxs("button",{className:"toolbar-btn",onClick:()=>ae(!0),style:{background:X.percentage>0?"linear-gradient(135deg, #10b981 0%, #059669 100%)":void 0,color:X.percentage>0?"#fff":void 0,fontWeight:X.percentage>0?"600":void 0},children:[e.jsx("span",{className:"toolbar-btn-icon",children:"✅"}),e.jsxs("span",{children:["Project Progress (",X.percentage,"%)"]})]}),e.jsxs("button",{className:`toolbar-btn ${s?"active":""}`,onClick:()=>u(!s),title:"API Endpoint Tester (Swagger-like)",children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🧪"}),e.jsx("span",{children:"API Tester"})]}),e.jsxs("button",{className:`toolbar-btn ${c?"active":""}`,onClick:a,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🗺️"}),e.jsx("span",{children:"Minimap"})]}),e.jsxs("button",{className:`toolbar-btn ${P?"active":""}`,onClick:()=>G(!P),title:"Enable edit mode to add nodes, connect them, and change colors",children:[e.jsx("span",{className:"toolbar-btn-icon",children:"✏️"}),e.jsx("span",{children:P?"Exit Edit":"Edit Diagram"})]}),e.jsxs("button",{className:"toolbar-btn",onClick:A,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"⛶"}),e.jsx("span",{children:"Fullscreen"})]})]})]})},hr={AdminController:{id:"AdminController",type:"controller",title:"Admin Controller",icon:"👨‍💼",description:"Manages admin user operations including authentication, CRUD, and role management.",endpoints:[{method:"POST",path:"/api/admins/login",description:"Admin authentication"},{method:"POST",path:"/api/admins/create",description:"Create new admin",auth:"CREATE_ADMINS"},{method:"GET",path:"/api/admins",description:"List all admins",auth:"LIST_ADMINS"},{method:"PUT",path:"/api/admins/:id",description:"Update admin",auth:"UPDATE_ADMINS"},{method:"DELETE",path:"/api/admins/:id",description:"Delete admin",auth:"DELETE_ADMINS"}],services:["AdminService","RoleService","AuthenticateService"],tags:["Admin","Authentication","RBAC"]},CustomerController:{id:"CustomerController",type:"controller",title:"Customer Controller",icon:"👤",description:"Comprehensive user management including registration, authentication, profile, KYC, 2FA, and notifications.",endpoints:[{method:"POST",path:"/api/users/register",description:"User registration"},{method:"POST",path:"/api/users/login",description:"User login with password"},{method:"POST",path:"/api/users/login-with-otp",description:"Login via OTP"},{method:"GET",path:"/api/users/google-sso",description:"Google SSO authentication"},{method:"GET",path:"/api/users/profile",description:"Get user profile",auth:"USER"},{method:"PUT",path:"/api/users/kyc",description:"Submit KYC documents",auth:"USER"},{method:"POST",path:"/api/users/2fa/enable",description:"Enable 2FA",auth:"USER"},{method:"GET",path:"/api/users/login-history",description:"Get login history",auth:"USER"}],services:["CustomerService","CustomerTokenService","EmailService","SMSService","FinoTechService","JibitService"],tags:["User","Authentication","KYC","2FA"]},OrderController:{id:"OrderController",type:"controller",title:"Order Controller",icon:"📊",description:"Handles order creation, cancellation, and queries for P2P trading.",endpoints:[{method:"POST",path:"/api/orders/buy",description:"Create buy order",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/orders/sell",description:"Create sell order",auth:"AUTHORIZED_USER"},{method:"DELETE",path:"/api/orders/:id",description:"Cancel order",auth:"USER"},{method:"GET",path:"/api/orders",description:"Get user orders",auth:"USER"},{method:"GET",path:"/api/orders/order-book",description:"Get order book for market"},{method:"GET",path:"/api/orders/market-buy-sell-whole",description:"Calculate order price",auth:"USER"}],services:["OrderService","CreateOrderService","MarketService","CustomerService"],tags:["Trading","Orders","P2P"]},WalletController:{id:"WalletController",type:"controller",title:"Wallet Controller",icon:"💰",description:"Manages cryptocurrency wallets, addresses, deposits, and withdrawals.",endpoints:[{method:"POST",path:"/api/wallets",description:"Create HD wallet",auth:"CREATE_WALLET"},{method:"POST",path:"/api/wallets/generate-address",description:"Generate new address",auth:"CREATE_WALLET_ADDRESS"},{method:"POST",path:"/api/wallets/withdrawal-request",description:"Create withdrawal",auth:"AUTHORIZED_USER"},{method:"GET",path:"/api/wallets/balance",description:"Get wallet balance",auth:"USER"},{method:"POST",path:"/api/wallets/change-password",description:"Change wallet password",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/wallets/toman-deposit",description:"Fiat deposit via gateway",auth:"USER"}],services:["WalletService","ApieService","DepositService","WithdrawalRequestService","PaymentGateway"],tags:["Wallet","Blockchain","Deposits","Withdrawals"]},GiftCodeController:{id:"GiftCodeController",type:"controller",title:"Gift Code Controller",icon:"🎁",description:"Manages promotional gift codes and referral rewards.",endpoints:[{method:"POST",path:"/api/gift-code",description:"Create new gift code",auth:"CREATE_GIFT_CODE"},{method:"PUT",path:"/api/gift-code/use",description:"Redeem gift code",auth:"USER"},{method:"POST",path:"/api/gift-code/register/:prefix",description:"Register with gift code prefix",auth:"PUBLIC"},{method:"GET",path:"/api/gift-code",description:"List gift codes",auth:"LIST_GIFT_CODE"},{method:"DELETE",path:"/api/gift-code/:id",description:"Delete gift code",auth:"DELETE_GIFT_CODE"}],services:["GiftCodeService","CustomerService","CustomerWalletService"],tags:["Promotions","Rewards","Marketing"]},TradeController:{id:"TradeController",type:"controller",title:"Trade Controller",icon:"💹",description:"Provides trade history and analytics for executed orders.",endpoints:[{method:"GET",path:"/api/trades",description:"Get user trade history",auth:"USER"},{method:"GET",path:"/api/trades/history",description:"Get market trade history",auth:"PUBLIC"},{method:"GET",path:"/api/trades/admin",description:"Get all trades (admin)",auth:"LIST_TRADES"},{method:"GET",path:"/api/trades/:id",description:"Get specific trade",auth:"USER"}],services:["TradeService","MarketService"],tags:["Trading","History","Analytics"]},MarketController:{id:"MarketController",type:"controller",title:"Market Controller",icon:"📈",description:"Manages trading markets and market information.",endpoints:[{method:"GET",path:"/api/markets",description:"List all markets",auth:"PUBLIC"},{method:"POST",path:"/api/markets",description:"Create market",auth:"CREATE_MARKET"},{method:"PUT",path:"/api/markets/activate",description:"Activate/deactivate market",auth:"UPDATE_MARKET"},{method:"GET",path:"/api/markets/:id",description:"Get market details",auth:"PUBLIC"},{method:"DELETE",path:"/api/markets/:id",description:"Delete market",auth:"DELETE_MARKET"}],services:["MarketService","CoinService"],tags:["Markets","Trading Pairs","Configuration"]},CoinController:{id:"CoinController",type:"controller",title:"Coin Controller",icon:"🪙",description:"Manages cryptocurrency information and pricing.",endpoints:[{method:"GET",path:"/api/coins",description:"List all coins",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/usd",description:"Get USD prices",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/from-to",description:"Get exchange rate",auth:"PUBLIC"},{method:"POST",path:"/api/coins/tether-price",description:"Update USDT price",auth:"UPDATE_COIN"},{method:"POST",path:"/api/coins",description:"Create coin",auth:"CREATE_COIN"}],services:["CoinService","MarketService"],tags:["Cryptocurrency","Pricing","Assets"]},ExchangeActionController:{id:"ExchangeActionController",type:"controller",title:"Exchange Action Controller",icon:"🔄",description:"Handles OTC (over-the-counter) exchange operations.",endpoints:[{method:"POST",path:"/api/exchange/buy",description:"OTC buy request",auth:"USER"},{method:"POST",path:"/api/exchange/sell",description:"OTC sell request",auth:"USER"},{method:"POST",path:"/api/exchange/approve-order",description:"Approve OTC order",auth:"APPROVE_EXCHANGE"},{method:"GET",path:"/api/exchange/orders",description:"List OTC orders",auth:"LIST_EXCHANGE"}],services:["ExchangeActionService","CustomerWalletService","CoinService"],tags:["OTC","Exchange","Trading"]},TicketController:{id:"TicketController",type:"controller",title:"Ticket Controller",icon:"🎫",description:"Customer support ticket system.",endpoints:[{method:"GET",path:"/api/tickets",description:"List user tickets",auth:"USER"},{method:"POST",path:"/api/tickets",description:"Create new ticket",auth:"USER"},{method:"POST",path:"/api/tickets/message/:id",description:"Add message to ticket",auth:"USER"},{method:"PUT",path:"/api/tickets/:id/close",description:"Close ticket",auth:"USER"},{method:"GET",path:"/api/tickets/admin",description:"List all tickets (admin)",auth:"LIST_TICKETS"}],services:["TicketService","MessageService","FileService"],tags:["Support","Customer Service","Communication"]},BlogController:{id:"BlogController",type:"controller",title:"Blog Controller",icon:"📝",description:"Blog and content management.",endpoints:[{method:"GET",path:"/api/blog",description:"List blog posts",auth:"PUBLIC"},{method:"POST",path:"/api/blog",description:"Create blog post",auth:"CREATE_BLOG"},{method:"PUT",path:"/api/blog/:id",description:"Update blog post",auth:"UPDATE_BLOG"},{method:"DELETE",path:"/api/blog/:id",description:"Delete blog post",auth:"DELETE_BLOG"},{method:"GET",path:"/api/blog/:id",description:"Get blog post",auth:"PUBLIC"}],services:["BlogService","FileService"],tags:["Content","Blog","CMS"]},ReferralCodeController:{id:"ReferralCodeController",type:"controller",title:"Referral Code Controller",icon:"🔗",description:"Manages referral program and rewards.",endpoints:[{method:"POST",path:"/api/referral/create",description:"Create referral code",auth:"USER"},{method:"GET",path:"/api/referral/stats",description:"Get referral statistics",auth:"USER"},{method:"POST",path:"/api/referral/use/:code",description:"Use referral code",auth:"PUBLIC"}],services:["ReferralService","CustomerService","CustomerWalletService"],tags:["Referral","Marketing","Rewards"]},RolesController:{id:"RolesController",type:"controller",title:"Roles Controller",icon:"🔐",description:"Role and privilege management for RBAC.",endpoints:[{method:"GET",path:"/api/roles",description:"List all roles",auth:"LIST_ROLES"},{method:"POST",path:"/api/roles",description:"Create role",auth:"CREATE_ROLE"},{method:"GET",path:"/api/roles/privileges",description:"List all privileges",auth:"LIST_PRIVILEGES"},{method:"PUT",path:"/api/roles/:id",description:"Update role",auth:"UPDATE_ROLE"}],services:["RoleService","PrivilegeService"],tags:["RBAC","Security","Authorization"]},OrderService:{id:"OrderService",type:"service",title:"Order Service",icon:"📈",description:"Core trading engine handling order creation, matching, cancellation, and order book management.",methods:["createOrder(orderDTO, customer, market, force): OrderFullDTO","deleteOrder(id, email): void","getOrders(...filters): PageDTO<OrderFullDTO>","getOrderBook(marketType, username): Map<String, List<OrderInOrderBookDTO>>","calculateOrderFullPrice(order): Double","repayBalance(order): void","orderQueueRemover(): void (scheduled)","deleteOrderFromTable(): void (scheduled)"],responsibilities:["Order validation (price, amount, min/max)","Fund locking in customer wallet","Order matching with existing orders","Trade execution and balance transfer","Order book queries (buy/sell sides)","Order expiration handling","Queue management for order processing"],tags:["Trading","Order Book","Matching Engine"]},WalletService:{id:"WalletService",type:"service",title:"Wallet Service",icon:"💼",description:"Manages HD and account-based wallets, address generation, and on-chain transactions.",methods:["createHDWallet(request): WalletResponseHalfDTO","generateAddressForWallet(request): PageDTO<BlockChainAddressHalfDTO>","createTransaction(request): TransactionResponseDTO","createWithdrawalRequest(request, customer): WithdrawalResponseDTO","getCustomerWalletAddress(customer, coin, tokenType): WalletAddressHalfDTO","getTotalBalance(username): TotalBalances","changePassword(passwordDTO): void","exportWalletPrivateKeys(mnemonicDTO, fileName, response): void"],responsibilities:["HD wallet creation via Apie","Address generation for deposits","Withdrawal request validation and OTP","Balance queries (custodial + P2P)","QR code generation for addresses","Wallet password management","Private key export (encrypted)"],tags:["Wallet","HD Wallet","Blockchain","Security"]},ApieService:{id:"ApieService",type:"service",title:"Apie Service",icon:"⛓️",description:"Blockchain provider integration for multi-chain wallet and transaction operations.",methods:["createHDWallet(request, cryptoNetwork): CreateWalletResponse","generateHDWalletAddress(network, walletName, index): String","getWalletBalance(request, network): BtcBaseWalletBalanceResponse","checkConfirmedTransactionRegularCoins(address, coin): ConfirmedAmountDTO","createRawTransaction(request, network): TransactionResponseDTO","freezeBalance(request, network): FreezeTronResponse"],responsibilities:["Multi-chain HD wallet creation (ETH, TRON, BTC, XRP, XLM, BSC, Dash)","Hierarchical deterministic address generation","Balance queries across chains","Raw transaction creation and signing","Transaction confirmation tracking","TRON-specific operations (freeze/unfreeze)"],supportedChains:["Ethereum","TRON","Bitcoin","Ripple","Stellar","BSC","Dash"],tags:["Blockchain","Multi-chain","HD Wallet","Transactions"]},CustomerService:{id:"CustomerService",type:"service",title:"Customer Service",icon:"👥",description:"User account management, authentication, profile, and KYC orchestration.",methods:["register(userDTO): RegisterResponseDto","authenticate(email, password): Customer","getCustomerByEmail(email): Customer","updateProfile(customerId, profileDTO): Customer","submitKYC(customerId, kycDTO): KYCStatus","enable2FA(customerId): TwoFactorSecret","verify2FA(customerId, code): boolean","getLoginHistory(customerId): List<LoginHistory>"],responsibilities:["User registration with email/password","Authentication and JWT token generation","Profile management (name, phone, country)","KYC document submission","2FA setup and verification","Login history tracking","Account level management (USER, AUTHORIZED_USER)","User notifications"],tags:["User Management","Authentication","KYC"]},TradeService:{id:"TradeService",type:"service",title:"Trade Service",icon:"💹",description:"Trade execution, history, and statistics.",methods:["executeTrade(buyOrder, sellOrder, amount, price): Trade","getTrades(filters): PageDTO<TradeFullDTO>","getLastTradesHistory(marketType): List<TradeHistoryInMarketDTO>","getTradeStatistics(marketType): TradeStatistics","exportTradesToExcel(filters): byte[]"],responsibilities:["Trade execution between matched orders","Balance transfer between buyer and seller","Trade history queries","Volume and statistics calculation","Excel export for admin","Market activity tracking"],tags:["Trading","Execution","History"]},PaymentGateway:{id:"PaymentGateway",type:"service",title:"Payment Gateway",icon:"💳",description:"Interface for fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).",implementations:["VandarService","JibitService","NextPayService","SadadService","ZarinpalService","RayanPayService"],methods:["deposit(request, customer): GatewayResponseDTO","withdraw(iban, amount, trackId, description): GatewayWithdrawResponseDTO","updateDepositRequest(depositRequest, updateDTO): TomanTransaction","getWithdrawalRequests(): List<GatewayWithdrawSettlement>","incomingDepositByIdTransactions(latestRecordDateTime): List<PaymentGatewayDepositByIdTransaction>"],responsibilities:["Gateway-agnostic deposit initiation","Redirect URL generation","Callback handling and verification","Withdrawal to bank account/IBAN","Transaction status updates","Settlement reconciliation"],tags:["Payment","Fiat","IRR","Gateway"]},"orders-table":{id:"orders-table",type:"database",title:"orders Table",icon:"🗃️",description:"Stores all P2P trading orders (buy/sell, limit/market, stop, OCO).",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"market_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"order_type",type:"VARCHAR(255)",description:"LIMITED_BUY, LIMITED_SELL, MARKET_BUY, STOP_LOSS_BUY, OCO_BUY, etc."},{name:"status",type:"VARCHAR(255)",description:"IS_OPEN, PARTIALLY_EXECUTED, COMPLETELY_EXECUTED, CANCELED, EXPIRED"},{name:"amount",type:"DOUBLE",description:"Order amount in base coin"},{name:"unit_price",type:"DOUBLE",description:"Price per unit in quote coin"},{name:"executed_amount",type:"DOUBLE",description:"Amount filled so far"},{name:"remaining_amount",type:"DOUBLE",description:"Amount still open"},{name:"executed_percent",type:"DOUBLE",description:"Percentage executed"},{name:"stop",type:"DOUBLE",description:"Stop price for stop-loss orders"},{name:"expires_at",type:"DATETIME",description:"Expiration timestamp"},{name:"is_triggerred",type:"TINYINT",description:"For stop-loss/OCO orders"},{name:"side_order_id",type:"BIGINT",description:"For OCO orders"}],indexes:["customer_id","market_id","status","order_type"],relationships:["customers.id → orders.customer_id","markets.id → orders.market_id","orders.id → trades.buyer_order_id / seller_order_id"],tags:["Trading","Orders","Core"]},"customer_wallet-table":{id:"customer_wallet-table",type:"database",title:"customer_wallet Table",icon:"💰",description:"User balance tracking for custodial and P2P trading.",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"currency_id",type:"BIGINT",key:"FOREIGN KEY (coin)"},{name:"custodial_credit",type:"DOUBLE",description:"Balance for OTC exchange"},{name:"p2p_credit",type:"DOUBLE",description:"Available balance for P2P trading"},{name:"p2p_blocked_credit",type:"DOUBLE",description:"Locked in open orders"},{name:"total_balance",type:"DOUBLE",description:"Sum of all credits"}],notes:["Separate balances for custodial (OTC) and P2P trading","p2p_blocked_credit is funds locked in open orders","All monetary values stored as DOUBLE (not recommended for production - use DECIMAL)"],relationships:["customers.id → customer_wallet.customer_id","COIN_ENTITY.id → customer_wallet.currency_id"],tags:["Balance","Wallet","Core"]},MarginTrading:{id:"MarginTrading",type:"service",title:"Margin Trading System",icon:"🚀",description:"Margin trading with leverage, margin calls, liquidation engine, and position management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/margin/accounts",description:"Create margin account",auth:"USER"},{method:"POST",path:"/api/margin/positions",description:"Open position",auth:"USER"},{method:"GET",path:"/api/margin/positions",description:"Get positions",auth:"USER"},{method:"POST",path:"/api/margin/close",description:"Close position",auth:"USER"}],services:["MarginService","LiquidationService"],tags:["Missing","Advanced Trading","Margin","Leverage"]},FuturesPerpetual:{id:"FuturesPerpetual",type:"service",title:"Futures & Perpetual Contracts",icon:"🚀",description:"Futures and perpetual swap contracts with funding rates and mark prices. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/futures/contracts",description:"List contracts"},{method:"POST",path:"/api/futures/positions",description:"Open futures position",auth:"USER"},{method:"GET",path:"/api/futures/funding-rate",description:"Get funding rate"}],services:["FuturesService","PerpetualService","FundingRateService"],tags:["Missing","Advanced Trading","Futures","Perpetual"]},OptionsTrading:{id:"OptionsTrading",type:"service",title:"Options Trading System",icon:"🚀",description:"Options trading with Black-Scholes pricing and Greeks calculation. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/options/chains",description:"Get options chain"},{method:"POST",path:"/api/options/positions",description:"Open options position",auth:"USER"},{method:"POST",path:"/api/options/exercise",description:"Exercise option",auth:"USER"}],services:["OptionsService","BlackScholesService","GreeksService"],tags:["Missing","Advanced Trading","Options","Derivatives"]},AMLMonitoring:{id:"AMLMonitoring",type:"service",title:"AML Transaction Monitoring",icon:"🚀",description:"Anti-Money Laundering transaction monitoring with pattern detection and SAR. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/aml/monitor",description:"Monitor transaction",auth:"ADMIN"},{method:"GET",path:"/api/aml/sar",description:"Get SAR reports",auth:"ADMIN"},{method:"POST",path:"/api/aml/risk-score",description:"Calculate risk score",auth:"ADMIN"}],services:["AMLService","TransactionMonitoringService","SARService"],tags:["Missing","Compliance","AML","Risk"]},SanctionsScreening:{id:"SanctionsScreening",type:"service",title:"Sanctions Screening System",icon:"🚀",description:"Sanctions screening against OFAC, EU, and UN lists. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/sanctions/screen",description:"Screen customer/address",auth:"ADMIN"},{method:"GET",path:"/api/sanctions/matches",description:"Get matches",auth:"ADMIN"}],services:["SanctionsService","WatchlistService"],tags:["Missing","Compliance","Sanctions","Screening"]},ColdWalletManagement:{id:"ColdWalletManagement",type:"service",title:"Cold Wallet Management",icon:"🚀",description:"Cold wallet management with HSM integration for secure key storage. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/cold-wallet/create",description:"Create cold wallet",auth:"ADMIN"},{method:"POST",path:"/api/cold-wallet/sweep",description:"Sweep to hot wallet",auth:"ADMIN"},{method:"GET",path:"/api/cold-wallet/balance",description:"Get balance",auth:"ADMIN"}],services:["ColdWalletService","HSMService"],tags:["Missing","Security","Cold Wallet","HSM"]},MultiSignatureWallets:{id:"MultiSignatureWallets",type:"service",title:"Multi-Signature Wallets",icon:"🚀",description:"Multi-signature wallet system with M-of-N threshold signatures. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/multisig/create",description:"Create multi-sig wallet",auth:"USER"},{method:"POST",path:"/api/multisig/sign",description:"Sign transaction",auth:"USER"},{method:"GET",path:"/api/multisig/pending",description:"Get pending signatures",auth:"USER"}],services:["MultiSigService","SignatureService"],tags:["Missing","Security","Multi-Sig","Wallet"]},StakingServices:{id:"StakingServices",type:"service",title:"Staking Services",icon:"🚀",description:"Staking services for earning rewards on cryptocurrencies. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/staking/stake",description:"Stake coins",auth:"USER"},{method:"POST",path:"/api/staking/unstake",description:"Unstake coins",auth:"USER"},{method:"GET",path:"/api/staking/rewards",description:"Get rewards",auth:"USER"}],services:["StakingService","RewardsService"],tags:["Missing","Financial Services","Staking","Rewards"]},LendingBorrowing:{id:"LendingBorrowing",type:"service",title:"Lending & Borrowing Platform",icon:"🚀",description:"Lending and borrowing platform with collateral management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/lending/borrow",description:"Borrow funds",auth:"USER"},{method:"POST",path:"/api/lending/lend",description:"Lend funds",auth:"USER"},{method:"GET",path:"/api/lending/positions",description:"Get positions",auth:"USER"}],services:["LendingService","BorrowingService","CollateralService"],tags:["Missing","Financial Services","Lending","Borrowing"]},TradingAnalytics:{id:"TradingAnalytics",type:"service",title:"Trading Analytics & Statistics",icon:"🚀",description:"Trading analytics with statistics, charts, and insights. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/analytics/trading/stats",description:"Get trading statistics",auth:"USER"},{method:"GET",path:"/api/analytics/trading/charts",description:"Get chart data",auth:"USER"}],services:["TradingAnalyticsService","StatisticsService"],tags:["Missing","Analytics","Trading","Statistics"]}},et=t=>hr[t]||null,vr=t=>{switch(t){case ne.COMPLETED:return"✅";case ne.IN_PROGRESS:return"🔄";case ne.BLOCKED:return"🚫";case ne.NOT_STARTED:return"⏸️";default:return"⏸️"}},yr=t=>{switch(t){case ne.COMPLETED:return"#10b981";case ne.IN_PROGRESS:return"#3b82f6";case ne.BLOCKED:return"#ef4444";case ne.NOT_STARTED:return"#6b7280";default:return"#6b7280"}},fr=(t,r,i=!1)=>{const a=yr(r);let c="#1e3a5f";if(i){switch(r){case ne.COMPLETED:c="#581c87";break;case ne.IN_PROGRESS:c="#7c2d12";break;case ne.BLOCKED:c="#7f1d1d";break;default:c="#4c1d95"}return`style ${t} fill:${c},stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5,color:#e1e8f0`}switch(r){case ne.COMPLETED:c="#064e3b";break;case ne.IN_PROGRESS:c="#1e3a8a";break;case ne.BLOCKED:c="#7f1d1d";break;default:c="#1e3a5f"}return`style ${t} fill:${c},stroke:${a},stroke-width:2px,color:#e1e8f0`},Sr=(t,r,i=null)=>{let a=t,c=`

  %% Project Status Styles
`,o=[];const d=new Set;return i!=null&&i.nodes&&Array.isArray(i.nodes)&&i.nodes.forEach(s=>{var u;s.locked&&[s.id,s.id.replace(/[^a-zA-Z0-9]/g,"_"),((u=s.label)==null?void 0:u.split(/\s+/)[0])||s.id].forEach(P=>d.add(P))}),Object.values(r).forEach(s=>{if(!s||!s.id)return;const u=vr(s.status),y=[s.id,s.id.replace("Controller","C"),s.id.replace("Service","S")];for(const P of y){const G=new RegExp(`(${P}\\[)([^\\]]+)(\\])`,"g"),ae=a.replace(G,(Ce,X,A,de)=>{if(A.includes("✅")||A.includes("🔄")||A.includes("🚫")||A.includes("⏸️"))return Ce;o.push(P);const V=d.has(P)?"🔒 ":"";return`${X}${V}${u} ${A}${de}`});if(ae!==a){a=ae;const Ce=s.isMissing===!0||s.isMissing==="true"||s.isMissing===1;let X=fr(P,s.status,Ce);d.has(P)&&(X=X.replace(/stroke-width:(\d+)px/,"stroke-width:$1px,stroke-dasharray:5,5"),X+=",opacity:0.85"),c+=`  ${X}
`;break}}}),d.forEach(s=>{o.includes(s)||(c+=`  style ${s} fill:#1e3a5f,stroke:#f59e0b,stroke-width:3px,stroke-dasharray:5,5,opacity:0.85
`)}),o.length>0||d.size>0?a+c:a};Tt.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0,curve:"basis",padding:20,nodeSpacing:50,rankSpacing:80,diagramPadding:20},themeVariables:{primaryColor:"#1e3a5f",primaryTextColor:"#e1e8f0",primaryBorderColor:"#60a5fa",lineColor:"#60a5fa",secondaryColor:"#151b26",tertiaryColor:"#0f1419",background:"#0f1419",mainBkg:"#0f1419",secondBkg:"#151b26",textColor:"#e1e8f0",border1:"#1c2433",border2:"#2a3441",fontSize:"18px",fontFamily:"Outfit, Inter, system-ui, sans-serif",nodeBorder:"#60a5fa",clusterBkg:"#0f1419",clusterBorder:"#2a3441",edgeLabelBackground:"#0f1419",nodeTextSize:"18px"}});const Cr=()=>{const{currentView:t,zoomLevel:r,setZoomLevel:i,setSelectedNode:a,navigateToView:c,showApiTester:o,isEditMode:d,setIsEditMode:s}=$e(),{tasks:u,setShowTodoPanel:y,setSelectedTask:P,getOrCreateTask:G,mapNodeToLevel:ae,nodeMappings:Ce}=tt(),X=k.useRef(null),A=k.useRef(null),[de,V]=k.useState(!0),[be,Te]=k.useState(!1),[Ie,Ee]=k.useState({x:0,y:0}),[Ne,ke]=k.useState({x:0,y:0}),[Oe,je]=k.useState({x:0,y:0}),[Me,ve]=k.useState({x:0,y:0}),[Ae,xe]=k.useState(!1),[pe,De]=k.useState({x:0,y:0}),[Be,rt]=k.useState(()=>{const p=localStorage.getItem("diagramLegendOpen");return p?JSON.parse(p):!1}),Ue=()=>{const p=!Be;rt(p),localStorage.setItem("diagramLegendOpen",JSON.stringify(p))},[he,f]=k.useState(null),[S,h]=k.useState(null),[I,E]=k.useState(null),[Z,te]=k.useState(!1),[R,W]=k.useState(!1),[n,v]=k.useState(null),[U,J]=k.useState(!1),[ge,ue]=k.useState(null),[Se,Pe]=k.useState({label:"",type:"default",color:"#60a5fa"});k.useEffect(()=>{const p=async()=>{V(!0),f(null),h(null);try{const{loadDiagramFromBackend:w,loadNodesFromBackend:q,loadEdgesFromBackend:Q}=await fe(async()=>{const{loadDiagramFromBackend:m,loadNodesFromBackend:B,loadEdgesFromBackend:Y}=await Promise.resolve().then(()=>We);return{loadDiagramFromBackend:m,loadNodesFromBackend:B,loadEdgesFromBackend:Y}},void 0),re=await w(t);if(re&&re.code){console.log("✅ Loaded diagram from database:",t);let m=[];try{m=await q(re.dbId||t),console.log(`✅ Loaded ${m.length} nodes with positions from database`)}catch(Y){console.warn("Could not load nodes from database:",Y)}let B=[];try{B=await Q(t),console.log(`✅ Loaded ${B.length} edges from database`)}catch(Y){console.warn("Could not load edges from database:",Y),B=re.edges||[]}f({...re,nodes:m,edges:B}),h({...re,nodes:m,edges:B,nodeEntities:m})}else{console.error("❌ Diagram not found in database:",t),console.error("   Backend must be connected and diagram must be seeded to database"),V(!1),f(null),h(null);return}}catch(w){console.error("❌ Error loading diagram from database:",w),console.error("   Backend must be connected and running"),f(null),h(null)}finally{V(!1)}};p();const x=()=>{console.log("💾 Diagram saved event received, reloading..."),p()};return window.addEventListener("diagram-saved",x),()=>{window.removeEventListener("diagram-saved",x)}},[t]);const _e=k.useRef({zoomLevel:r,setZoomLevel:i});_e.current={zoomLevel:r,setZoomLevel:i},k.useEffect(()=>{const p=A.current;if(!p)return;const x=w=>{w.preventDefault(),w.stopPropagation(),document.querySelectorAll(".diagram-tooltip").forEach(Q=>Q.remove());const q=w.deltaY>0?-.1:.1;_e.current.setZoomLevel(Q=>Math.max(.3,Math.min(3,Q+q)))};return p.addEventListener("wheel",x,{passive:!1}),()=>p.removeEventListener("wheel",x)},[]);const Ge=k.useRef(""),at=k.useRef("");k.useEffect(()=>{const p=(he==null?void 0:he.code)||"",x=t!==at.current,w=p!==Ge.current;return he&&(w||x)&&(Ge.current=p,at.current=t,Ve()),()=>{document.querySelectorAll(".diagram-tooltip").forEach(q=>q.remove())}},[t,he==null?void 0:he.code]),k.useEffect(()=>{window.__isEditMode=d,d||(te(!1),W(!1),v(null),E(null),ue(null),Te(!1))},[d]);const Ve=async()=>{if(!X.current||!he){V(!he);return}V(!0),document.querySelectorAll(".diagram-tooltip").forEach(p=>p.remove());try{const p=new Map;if(d&&X.current){const N=X.current.querySelector("svg");N&&N.querySelectorAll('g[id*="flowchart"], g[id*="graph"]').forEach(_=>{const oe=_.getAttribute("id")||"",z=(_.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(z){const T=parseFloat(z[1]),g=parseFloat(z[2]);let O="";if(oe.includes("_")){const b=oe.split("_"),C=b.findIndex(L=>/^[A-Z]/.test(L));C>=0?O=b[C]:b.length>=2&&(O=b[1])}O&&!isNaN(T)&&!isNaN(g)&&p.set(O,{x:T,y:g})}})}X.current.innerHTML="";const x=`diagram-${Date.now()}`;let w=(S==null?void 0:S.customMermaidCode)||(S==null?void 0:S.mermaidCode)||(he==null?void 0:he.code)||"";if(!w){console.error("❌ No diagram code available in database"),console.error("   Diagram must be seeded to database with mermaidCode or customMermaidCode"),V(!1);return}console.log("📋 Using diagram code:",t,"Length:",w.length),console.log("📋 Using diagram code from database:",t);const q=Sr(w,u,S),Q=document.createElement("div");Q.className="mermaid",Q.id=x,Q.textContent=q,X.current.appendChild(Q);const{svg:re}=await Tt.render(x+"-svg",q);console.log("✅ Mermaid rendered SVG, length:",re.length),Q.innerHTML=re;const m=Q.querySelector("svg");if(m){const N=m.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');console.log(`📊 SVG rendered with ${N.length} node groups`),N.length===0&&(console.warn("⚠️ WARNING: No node groups found in rendered SVG!"),console.warn("   SVG content preview:",re.substring(0,500))),m.style.width="100%",m.style.height="auto",m.style.display="block",m.querySelectorAll("text").forEach(g=>{var $,D;const O=(($=g.textContent)==null?void 0:$.trim())||"";if(O.match(/^flowchart_\w+_\d+$/i)||O.match(/^flowchart-\w+-\d+$/i)||O.match(/^flowchart\w+\d+$/i)||O.startsWith("flowchart")&&/\d+$/.test(O)||O.includes("flowchart")&&O.match(/_\d+$/)){g.remove();return}const b=g.closest("g");if(b){const M=b.getAttribute("id")||"";if((M.match(/^flowchart_\w+_\d+$/i)||M.match(/^flowchart-\w+-\d+$/i))&&(O===M||O===M.replace(/^flowchart[_-]/,""))){g.remove();return}}const C=g.closest("g");if(C&&(C.classList.contains("cluster")||((D=C.getAttribute("class"))==null?void 0:D.includes("cluster"))||C.querySelector('rect[class*="cluster"]')||C.querySelector('rect[fill*="cluster"]'))){const M=g.style.fontSize||"16px",ee=parseFloat(M);g.style.fontSize=`${ee*2.5}px`,g.style.fontWeight="800",g.style.fill="#ffffff",g.style.stroke="#60a5fa",g.style.strokeWidth="1px",g.style.paintOrder="stroke fill"}else{const M=g.style.fontSize||"16px",ee=parseFloat(M);g.style.fontSize=`${ee*1.4}px`,g.style.fontWeight="600"}});const _=m.querySelectorAll('g.cluster, g[class*="cluster"]');console.log(`🔍 Found ${_.length} cluster groups`),_.forEach((g,O)=>{const b=g.querySelector("rect");let C=0,L=0;b&&(C=parseFloat(b.getAttribute("width"))||0,L=parseFloat(b.getAttribute("height"))||0,console.log(`📦 Cluster ${O}: ${C}x${L}`),b.getAttribute("stroke-width")||b.setAttribute("stroke-width","3"),b.setAttribute("stroke","#60a5fa"),b.setAttribute("fill","#0f1419"),b.setAttribute("fill-opacity","0.15"),b.setAttribute("rx","8"),b.setAttribute("ry","8"));const $=g.querySelectorAll("text");console.log(`📝 Found ${$.length} text elements in cluster ${O}`),$.forEach(D=>{var H;const M=((H=D.textContent)==null?void 0:H.trim())||"";if(M.length<50&&!M.includes("<br/>")&&!M.includes(`
`)&&(M.includes("Services")||M.includes("Core")||M.includes("Wallet")||M.includes("Blockchain")||M.includes("Payment")||M.includes("KYC")||M.includes("Notification")||M.includes("Trading")||M.includes("Compliance")||M.includes("Security")||M.includes("Financial")||M.includes("Analytics"))||C>300){let le=40;if(C>0&&L>0){const me=C/200,Re=L/150,Le=Math.max(me,Re);le=Math.max(40,Math.min(Le*30,80)),C>1e3||L>800?le=70:C>700||L>600?le=55:(C>500||L>400)&&(le=45)}console.log(`✅ Enhancing label "${M}" to ${le}px (box: ${C}x${L})`),D.style.fontSize=`${le}px !important`,D.style.fontWeight="900",D.style.fill="#ffffff",D.style.stroke="#60a5fa",D.style.strokeWidth="2.5px",D.style.paintOrder="stroke fill",D.style.fontFamily="Outfit, Inter, system-ui, sans-serif",D.style.letterSpacing="0.5px",D.setAttribute("font-size",`${le}px`),D.setAttribute("font-weight","900"),D.setAttribute("fill","#ffffff");const ye=D.getAttribute("style")||"";D.setAttribute("style",ye.replace(/font-size[^;]*;?/gi,"")+`font-size: ${le}px !important;`)}})});const oe=["Core Services","Wallet Services","Blockchain","Payment Gateways","KYC Identity","Notifications","Advanced Trading","Compliance","Security","Financial Services","Analytics","External Clients","Security Layer","REST API Layer","Business Logic","Data Layer","Admin Management","User Management","Trading","Wallets","OTC Exchange","Support","Promotions","Compliance & Risk","Security Enhancements","Analytics & Reporting"];m.querySelectorAll("text").forEach(g=>{var $,D,M;const O=(($=g.textContent)==null?void 0:$.trim())||"",b=oe.some(ee=>O.includes(ee)||ee.includes(O));let C=g.parentElement,L=!1;for(;C&&C!==m;){if((D=C.classList)!=null&&D.contains("cluster")||(M=C.getAttribute("class"))!=null&&M.includes("cluster")||C.tagName==="g"&&C.querySelector('rect[class*="cluster"]')){L=!0;break}C=C.parentElement}if(!L&&!b){const ee=parseFloat(g.getAttribute("y"))||0,H=parseFloat(g.getAttribute("x"))||0;Array.from(m.querySelectorAll("rect")).filter(ye=>{const me=parseFloat(ye.getAttribute("x"))||0,Re=parseFloat(ye.getAttribute("y"))||0,Le=parseFloat(ye.getAttribute("width"))||0,He=parseFloat(ye.getAttribute("height"))||0;return Math.abs(H-me)<50&&Math.abs(ee-Re)<30&&Le>200&&He>100}).length>0&&(L=!0)}if(L||b){let ee=0,H=0,le=g.parentElement;for(;le&&le!==m;){const Le=le.querySelector("rect");if(Le){const He=parseFloat(Le.getAttribute("width"))||0,Xe=parseFloat(Le.getAttribute("height"))||0;if(He>300&&Xe>200){ee=He,H=Xe;break}}le=le.parentElement}const ye=24;let me;if(ee>0&&H>0){const Le=Math.max(1.5,Math.min(ee/150,H/100));me=Math.max(ye*Le*2.5,40),ee>1e3||H>800?me=Math.max(me*1.8,60):(ee>600||H>500)&&(me=Math.max(me*1.4,50))}else{const Le=parseFloat(g.style.fontSize||g.getAttribute("font-size")||"16px")||16;me=Math.max(Le*3.5,40)}g.style.fontSize=`${me}px`,g.style.fontWeight="900",g.style.fill="#ffffff",g.style.stroke="#60a5fa",g.style.strokeWidth="2.5px",g.style.paintOrder="stroke fill",g.style.fontFamily="Outfit, Inter, system-ui, sans-serif",g.style.letterSpacing="0.5px",g.setAttribute("font-weight","900"),g.setAttribute("font-size",`${me}px`),g.setAttribute("fill","#ffffff");const Re=g.closest("g");Re&&(Re.style.zIndex="1000",g.style.zIndex="1001"),console.log(`✅ Enhanced cluster label: "${O}" to ${me}px (box: ${ee}x${H})`)}}),m.querySelectorAll("g").forEach(g=>{const O=g.getAttribute("id")||"";if(O.match(/^flowchart_\w+_\d+$/i)||O.match(/^flowchart-\w+-\d+$/i)){const b=g.querySelectorAll("rect"),C=g.querySelectorAll("text");!Array.from(C).some($=>{var M;const D=((M=$.textContent)==null?void 0:M.trim())||"";return!D.match(/^flowchart/i)&&D.length>0})&&b.length===0&&g.remove()}}),m.querySelectorAll("rect").forEach(g=>{var D,M,ee;const O=parseFloat(g.getAttribute("width"))||0,b=parseFloat(g.getAttribute("height"))||0,C=O>400&&b>300,L=g.closest("g");if(L&&(((D=L.id)==null?void 0:D.includes("flowchart"))||((M=L.id)==null?void 0:M.includes("graph"))||L.classList.contains("node"))&&!C){g.removeAttribute("stroke-width");let H=g.getAttribute("style")||"";H?(H=H.replace(/stroke-width\s*:\s*[^;]+;?/gi,"").trim(),H=H.replace(/;+/g,";").replace(/^;|;$/g,""),!H.includes("stroke:")&&!g.getAttribute("stroke")&&(H=(H?H+"; ":"")+"stroke: #60a5fa"),H?g.setAttribute("style",H):g.setAttribute("style","stroke: #60a5fa")):g.setAttribute("style","stroke: #60a5fa"),!g.getAttribute("stroke")&&!((ee=g.getAttribute("style"))!=null&&ee.includes("stroke:"))&&g.setAttribute("stroke","#60a5fa");let le=O||200,ye=b||100;le<120&&(le=120),ye<70&&(ye=70),le>400&&(le=400),ye>250&&(ye=250),g.setAttribute("width",le),g.setAttribute("height",ye),g.setAttribute("rx","8"),g.setAttribute("ry","8")}else C&&(g.getAttribute("stroke-width")||g.setAttribute("stroke-width","3"),g.setAttribute("stroke","#60a5fa"),g.setAttribute("fill-opacity","0.15"),g.setAttribute("rx","8"),g.setAttribute("ry","8"))})}const B=async(N,F)=>{try{const{API_ENDPOINTS:_}=await fe(async()=>{const{API_ENDPOINTS:g}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:g}},[]),oe=await fetch(_.diagramByDiagramId(F));if(!oe.ok){console.warn("Could not load diagram for position saving");return}const ce=await oe.json(),z=N.querySelectorAll('g[id*="flowchart"], g[id*="graph"]'),T=[];if(z.forEach(g=>{const O=g.getAttribute("id")||"";let b=O;if(O.includes("_")){const me=O.split("_");me.length>=2&&(me[0]==="flowchart"||me[0]==="graph")&&(b=me.slice(1,-1).join("_")||me[1]||O)}const C=g.getAttribute("transform")||"",L=g.querySelector("rect");if(!L)return;let $=0,D=0;const M=C.match(/translate\(([^,]+),([^)]+)\)/);if(M)$=parseFloat(M[1])||0,D=parseFloat(M[2])||0;else try{const me=L.getBBox();$=me.x,D=me.y}catch{return}const ee=parseFloat(L.getAttribute("width"))||200,H=parseFloat(L.getAttribute("height"))||100,le=g.querySelector("text");let ye="";if(le){const me=le.querySelectorAll("tspan");me.length>0?ye=Array.from(me).map(Re=>Re.textContent||"").join(" "):ye=le.textContent||""}T.push({nodeId:b,position:{x:Math.round($),y:Math.round(D)},size:{width:Math.round(ee),height:Math.round(H)},label:ye.substring(0,255)})}),T.length>0){let g=0;for(const O of T)try{const b=await fetch(`${_.nodes}?diagramId=${ce.id}&nodeId=${O.nodeId}`);if(b.ok){const C=await b.json();if(C&&C.length>0){const L=C[0];(await fetch(_.nodeById(L.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:O.position,style:{...L.style||{},width:O.size.width,height:O.size.height}})})).ok&&g++}}}catch(b){console.warn("Could not update node position:",O.nodeId,b)}g>0&&console.log(`✅ Saved positions for ${g}/${T.length} nodes`)}}catch(_){console.warn("Could not save node positions:",_)}},Y=window.location.hash,K=N=>{if(window.__isEditMode||!1)return window.history.replaceState(null,"",Y||"#"),N.preventDefault(),N.stopPropagation(),!1;const _=window.location.hash.replace("#","");if(console.log("🔗 Hash change detected:",_),_.startsWith("Level")&&u[_])return N.preventDefault(),N.stopPropagation(),window.history.replaceState(null,"",Y||"#"),P(_),y(!0),!1;if(_==="database"||_==="services"||_==="controllers"||_==="flows"||_==="external"||_==="advanced")return N.preventDefault(),N.stopPropagation(),window.history.replaceState(null,"",Y||"#"),c(_),!1},j=()=>{window.removeEventListener("hashchange",K,!0),window.addEventListener("hashchange",K,!0)};window.__isEditMode=d,setTimeout(()=>{j(),it(),V(!1),p&&p.size>0&&setTimeout(()=>{var F;const N=(F=X.current)==null?void 0:F.querySelector("svg");if(N){let _=0;p.forEach((oe,ce)=>{const z=N.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const T of z)if((T.getAttribute("id")||"").includes(ce)){T.setAttribute("transform",`translate(${oe.x}, ${oe.y})`),_++;break}}),console.log(`📍 Restored ${_} node positions after edit mode toggle`),setTimeout(()=>{p.forEach((oe,ce)=>{const z=N.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const T of z)if((T.getAttribute("id")||"").includes(ce)){const O=T.querySelector("rect");if(O){const b=parseFloat(O.getAttribute("width"))||180,C=parseFloat(O.getAttribute("height"))||90,L=oe.x+b/2,$=oe.y+C/2;vt(N,ce,L,$)}break}})},200)}},300)},100)}catch(p){console.error("Mermaid rendering error:",p),V(!1),X.current.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <div class="empty-state-text">Failed to render diagram</div>
          <div style="font-size: 11px; margin-top: 8px; color: var(--text-muted); max-width: 500px;">
            ${p.message||"Check browser console (F12) for details"}
          </div>
        </div>
      `}},it=()=>{if(!X.current)return;const p=X.current.querySelector("svg");if(!p)return;p.querySelectorAll('.node, g[id*="flowchart"]').forEach(w=>{w.style.cursor="pointer";const q=async Q=>{var Re,Le,He,Xe,yt,ft;if(window.__isEditMode||!1){if(console.log("🚫 Edit mode active - blocking task panel"),R){Q.stopPropagation(),Q.preventDefault(),Q.stopImmediatePropagation();return}Q.stopPropagation(),Q.preventDefault(),Q.stopImmediatePropagation(),Ut(Q,w);return}Q.stopPropagation(),Q.preventDefault();let m=w.getAttribute("id")||((Re=w.closest("g"))==null?void 0:Re.getAttribute("id"))||"";if(m&&m.includes("_")){const ie=m.split("_");if(ie.length>=2&&(ie[0]==="flowchart"||ie[0]==="graph")){const se=ie.findIndex(we=>/^[A-Z]/.test(we));se>=0?m=ie[se]:ie.length>=2&&(m=ie[1])}}const B=w.closest("g");if(B&&!m&&(((Le=B.className)==null?void 0:Le.baseVal)||B.className||"").includes("node")){const se=B.querySelector("rect");if(se){const we=se.getAttribute("id")||"";we&&(m=we.replace(/^flowchart_|^graph_/,"").split("_")[0])}}const Y=w.querySelector("text, .nodeLabel");if(!Y)return;let K="";const j=Y.querySelectorAll("tspan");j.length>0?K=Array.from(j).map(ie=>{var se;return((se=ie.textContent)==null?void 0:se.trim())||""}).join(`
`):K=((He=Y.textContent)==null?void 0:He.trim())||"",K=K.replace(/[✅🔄⏸️🚫]/g,"").trim();const N=K.replace(/\s+/g," ").trim();let F=K.split(/\n|<br\/>|•/)[0].trim();F=F.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").trim();const _=F.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);_&&(F=_[1].trim()),console.log("🖱️ Clicked node:",F,"| Node ID:",m,"| Original text:",K.substring(0,50));const oe=w.closest("g");if(oe){const se=((yt=(((Xe=oe.querySelector("title"))==null?void 0:Xe.textContent)||"").match(/#(\w+)/))==null?void 0:yt[1])||oe.getAttribute("data-click")||"";if(se){if(window.__isEditMode)return;if(se.startsWith("Level")&&u[se]){console.log("✅ Found Level task from click handler:",se),P(se),y(!0);return}const we=se.replace(/^#/,"");if(we==="database"||we==="services"||we==="controllers"||we==="flows"||we==="external"||we==="advanced"){console.log("✅ Found diagram navigation from click handler:",we),c(we);return}}}if(!window.__isEditMode){const ie=N.match(/Level(\d+)_(\w+)/i);if(ie){const se=ie[0];if(u[se]){console.log("✅ Found Level task ID in node text:",se),P(se),y(!0);return}}}if(["legend","project status","click components","completed","in progress","not started","blocked"].some(ie=>F.toLowerCase().includes(ie)||K.toLowerCase().includes(ie)))return;const T=F.replace(/[✅🔄⏸️🚫🔒]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").trim();if([N.includes("[ADVANCED]"),N.includes("🚀"),T.toLowerCase().includes("advanced"),m&&(m.includes("Margin")||m.includes("Futures")||m.includes("Options")||m.includes("AML")||m.includes("Sanctions")||m.includes("Staking")||m.includes("Lending")||m.includes("ColdWallet")||m.includes("MultiSig")||m.includes("Analytics")||m.includes("TradingAnalytics")||m.includes("BusinessAnalytics")||m.includes("AdminDash")||m.includes("DataWarehouse")||m.includes("Fees")||m.includes("Support")||m.includes("Liquidity")||m.includes("MarketData")||m.includes("Infrastructure")||m.includes("AdvancedOrders")||m.includes("TradingBots")||m.includes("Regulatory")||m.includes("Tax")||m.includes("Risk")||m.includes("HSM")||m.includes("AdvancedSec")||m.includes("SecMonitoring")||m.includes("Yield")||m.includes("Airdrops")||m.includes("Listing"))].some(Boolean)){console.log("🚀 Detected advanced node - Node ID:",m,"Clean name:",T);const ie=[m,T,F,T.split(/\s+/)[0],T.replace(/\s+/g,""),T.replace(/Controller|Service|C|S$/i,"").trim(),(ft=T.match(/(?:Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|Analytics|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing)/i))==null?void 0:ft[0],T.replace(/^.*?(Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing).*$/i,"$1")].filter(Boolean).filter((se,we,Ze)=>Ze.indexOf(se)===we);if(console.log("🚀 Trying name variations:",ie),!window.__isEditMode)for(const se of ie){if(!se)continue;const we=ae(se);if(we&&u[we]){console.log("✅ Advanced node mapped to Level task:",se,"->",we),P(we),y(!0);return}}console.warn("⚠️ Advanced node clicked, no Level task found. Node ID:",m,"Name:",T,"Variations tried:",ie),c("advanced");return}const b=N.toLowerCase(),C=T.toLowerCase();if(b.includes("database")&&(b.includes("81")||b.includes("tables"))&&!b.includes("services")&&!b.includes("service")){console.log("Navigation node clicked: database"),c("database");return}if((b.includes("controllers")||C==="controllers")&&(b.includes("25+")||b.includes("25"))){console.log("Navigation node clicked: controllers"),c("controllers");return}if((b.includes("services")||C==="services")&&!b.includes("database")&&!b.includes("advanced")&&(b.includes("core services")||b.includes("wallet services")||b.includes("service layer")||C==="services")){console.log("Navigation node clicked: services"),c("services");return}if(b.includes("flows")||b.includes("key flows")){console.log("Navigation node clicked: flows"),c("flows");return}if(b.includes("external")||b.includes("integrations")){console.log("Navigation node clicked: external"),c("external");return}let L=null;const $=[T,T.split(/\s+/)[0],T.replace(/\s+/g,""),T+"Controller",T+"Service",T.replace(/Controller$/i,"").trim()+"Controller",T.replace(/Service$/i,"").trim()+"Service",T.replace(/C$/,"Controller"),T.replace(/S$/,"Service"),T.replace(/^Level\s*\d+[:\s]*/i,""),T.replace(/\s*\[ADVANCED\]/i,"")];for(const ie of $){const se=ae(ie);if(se&&u[se]){L=se,console.log("✅ Mapped via mapNodeToLevel:",ie,"->",se);break}}if(!L)for(const ie of $){if(ie.startsWith("Level")&&u[ie]){L=ie,console.log("✅ Found Level task directly:",ie);break}try{const se=await G(ie);if(se&&se.id&&se.id.startsWith("Level")){L=se.id,console.log("✅ Mapped via getOrCreateTask:",ie,"->",L);break}}catch(se){console.warn("Error mapping task:",ie,se)}}if(!L){const ie={admin:"Level13_AdminRBAC",customer:"Level3_CustomerIdentity",user:"Level3_CustomerIdentity",order:"Level7_TradingEngine",trade:"Level7_TradingEngine",wallet:"Level5_WalletServices",deposit:"Level5_WalletServices",withdraw:"Level5_WalletServices",payment:"Level11_PaymentGateways",gateway:"Level11_PaymentGateways",blockchain:"Level6_Blockchain",market:"Level8_MarketManagement",coin:"Level8_MarketManagement",email:"Level4_Notifications",sms:"Level4_Notifications",notification:"Level4_Notifications",ticket:"Level15_SupportContent",blog:"Level15_SupportContent",gift:"Level16_Promotional",referral:"Level16_Promotional",exchange:"Level14_OTCExchange",role:"Level13_AdminRBAC",security:"Level2_DatabaseAuth",auth:"Level2_DatabaseAuth",jwt:"Level2_DatabaseAuth",kyc:"Level12_KYCIdentity",identity:"Level12_KYCIdentity",finnotech:"Level12_KYCIdentity",jibit:"Level12_KYCIdentity"},se=T.toLowerCase();for(const[we,Ze]of Object.entries(ie))if(se.includes(we)&&u[Ze]){L=Ze,console.log("⚠️ Using fallback mapping:",T,"->",Ze,"(keyword:",we+")");break}!L&&u.Level1_ProjectSetup&&(L="Level1_ProjectSetup",console.warn("⚠️ Using ultimate fallback (Level1) for node:",T)),L||(console.error("❌ Could not map diagram node to any Level task:",{original:F,cleaned:T,variations:$,nodeId:m}),L="Level1_ProjectSetup")}(!L||!u[L])&&(console.error("❌ Invalid taskIdToUse, using Level1 as fallback:",L),L="Level1_ProjectSetup");let D=null;const M=[L,...$.map(ie=>ae(ie)).filter(Boolean)];console.log("🔍 Looking for node details:",{nodeName:F,nodeId:m,possibleTaskIds:M,taskIdToUse:L});const ee=F.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").replace(/\s+/g,"").trim(),H=[];m&&(H.push(m),m.endsWith("C")&&m.length>1&&H.push(m.slice(0,-1)+"Controller"),m.endsWith("S")&&m.length>1&&H.push(m.slice(0,-1)+"Service")),H.push(ee,ee+"Controller",ee+"Service",ee.replace(/C$/,"Controller"),ee.replace(/S$/,"Service"),ee.replace(/Controller$/,""),ee.replace(/Service$/,""),F.replace(/\s+/g,"")+"Controller",F.replace(/\s+/g,"")+"Service",F.replace(/\s+/g,""),F);const le=F.match(/(\w+)\s*Controller/i);le&&H.push(le[1]+"Controller");const ye=F.match(/(\w+)\s*Service/i);ye&&H.push(ye[1]+"Service");const me=[...new Set(H.filter(ie=>ie&&ie.length>0))];console.log("🔍 Trying variations:",me);for(const ie of me){const se=et(ie);if(se&&se.endpoints&&se.endpoints.length>0){D=ie,console.log("✅ Match found:",ie);break}}if(!D)for(const ie of M){const se=et(ie);if(se&&se.endpoints&&se.endpoints.length>0){D=ie,console.log("✅ Match found with taskId:",ie);break}}console.log("📌 Final nodeIdForApiTester:",D),D?(a(D),console.log("✅ Set selectedNode to:",D)):(a(null),console.log("⚠️ No matching nodeDetails found for API tester")),!o&&(window.__isEditMode||(P(L),y(!0)))};w._clickHandler=q,w.addEventListener("click",q,!0),w.addEventListener("mouseenter",Q=>{var g,O,b;document.querySelectorAll(".diagram-tooltip").forEach(C=>C.remove());const re=w.getBoundingClientRect(),m=w.querySelector("text, .nodeLabel");if(!m)return;let B="";const Y=m.querySelectorAll("tspan");Y.length>0?B=Array.from(Y).map(C=>{var L;return((L=C.textContent)==null?void 0:L.trim())||""}).join(`
`):B=((g=m.textContent)==null?void 0:g.trim())||"";const K=B;B=B.replace(/[✅🔄⏸️🚫]/g,"").trim();let j=K.split(/\n|<br\/>|•/)[0].trim();j=j.replace(/[✅🔄⏸️🚫]/g,"").trim();const N=j.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);N&&(j=N[1].trim());const F=j||"Component";if(console.log("=== HOVER DEBUG ==="),console.log("Full node text:",B.substring(0,200)),console.log("Extracted node name:",j),["legend","project status","click components","completed","in progress","not started","blocked"].some(C=>j.toLowerCase().includes(C)||B.toLowerCase().includes(C)))return;const ce=[j,j+"Controller",j+"Service",j.replace(/C$/,"Controller"),j.replace(/S$/,"Service"),j.replace(/Controller$/,"")+"Controller",j.replace(/Service$/,"")+"Service",j.replace(/\s+/g,""),j.split(/\s+/)[0],j.split(/\s+/)[0]+"Controller",j.split(/\s+/)[0]+"Service"];console.log("Trying to match with IDs:",ce);let z=null,T=null;for(const C of ce)if(z=et(C),z){console.log("✅ Found node details for ID:",C),console.log("   Endpoints count:",((O=z.endpoints)==null?void 0:O.length)||0);break}for(const C of ce)if(u[C]){T=u[C],console.log("Found task info for:",C);break}!z&&!T&&console.log("No details found for node:",j,"Tried IDs:",ce);{const C=document.createElement("div");C.className="diagram-tooltip",C.style.position="fixed",window.innerWidth-re.right>500?C.style.left=`${re.right+20}px`:C.style.right=`${window.innerWidth-re.left+20}px`;const $=re.top;C.style.top=`${Math.max(10,Math.min($,window.innerHeight-400))}px`,C.setAttribute("data-tooltip","true");let D="";if(!z){let M=B.split(/\n/).map(H=>H.trim()).filter(H=>H);const ee=[];if(console.log("Raw node text:",B),console.log("Lines after split:",M),M.length===1&&((b=M[0].match(/(GET|POST|PUT|DELETE|PATCH)/g))==null?void 0:b.length)>1){console.log("Detected concatenated endpoints, splitting...");const H=M[0],le=/(GET|POST|PUT|DELETE|PATCH)\s*(\/[^\s]+?)(?=(?:GET|POST|PUT|DELETE|PATCH)|$)/g,ye=H.matchAll(le);for(const me of ye){const Re=me[2].trim();ee.push({method:me[1],path:Re}),console.log("Found endpoint:",me[1],Re)}}else M.forEach(H=>{const le=H.match(/(GET|POST|PUT|DELETE|PATCH)\s+(\/[^\s]+)/);le&&(ee.push({method:le[1],path:le[2]}),console.log("Found endpoint:",le[1],le[2]))});console.log("Total endpoints extracted:",ee.length),(ee.length>0||M.length>1)&&(z={title:F,icon:j.includes("Controller")?"🎛️":j.includes("Service")?"⚙️":j.includes("Database")||j.includes("Table")?"💾":"📦",description:`Component with ${ee.length} endpoint${ee.length!==1?"s":""}`,endpoints:ee.length>0?ee:null})}if(z){const M=z.title||F;D+=`
              <div class="tooltip-header">
                <span class="tooltip-icon">${z.icon||"📦"}</span>
                <span class="tooltip-title">${M}</span>
              </div>
              <div class="tooltip-description">${z.description||"Component details"}</div>
            `,z.endpoints&&z.endpoints.length>0&&(console.log(`Rendering ${z.endpoints.length} endpoints for ${z.title}`),D+='<div class="tooltip-section"><strong>📡 Endpoints:</strong></div>',z.endpoints.slice(0,10).forEach((H,le)=>{const ye={GET:"#10b981",POST:"#3b82f6",PUT:"#f59e0b",DELETE:"#ef4444",PATCH:"#a855f7"}[H.method]||"#6b7280";console.log(`  Endpoint ${le+1}: ${H.method} ${H.path}`),D+=`
                  <div class="tooltip-endpoint">
                    <span class="endpoint-method" style="background: ${ye}">${H.method}</span>
                    <span class="endpoint-path">${H.path}</span>
                  </div>
                  ${H.description?`<div class="endpoint-desc">→ ${H.description}</div>`:""}
                `}),z.endpoints.length>10&&(D+=`<div class="endpoint-desc" style="text-align: center; margin-top: 8px; font-style: italic;">... and ${z.endpoints.length-10} more</div>`)),z.services&&z.services.length>0&&(D+=`<div class="tooltip-section"><strong>⚙️ Uses:</strong> ${z.services.slice(0,5).join(", ")}</div>`),z.tables&&z.tables.length>0&&(D+=`<div class="tooltip-section"><strong>💾 Tables:</strong> ${z.tables.slice(0,5).join(", ")}</div>`),z.schema&&(D+=`<div class="tooltip-section"><strong>📋 Columns:</strong> ${Object.keys(z.schema).slice(0,6).join(", ")}</div>`)}if(T){if(!z){const le=T.title||F;D=`
                <div class="tooltip-header">
                  <span class="tooltip-icon">${T.category==="Infrastructure"?"🏗️":T.category==="Core Services"?"⚙️":T.category==="Business Logic"?"💼":T.category==="Integration"?"🔗":T.category==="Security"?"🔐":T.category==="Documentation"?"📚":"📦"}</span>
                  <span class="tooltip-title">${le}</span>
                </div>
                <div class="tooltip-description">${T.description||"Task details"}</div>
              `+D}const ee={completed:"#10b981",in_progress:"#3b82f6",blocked:"#ef4444",not_started:"#6b7280"}[T.status]||"#6b7280",H={completed:"✅",in_progress:"🔄",blocked:"🚫",not_started:"⏸️"}[T.status]||"⏸️";D+=`
              <div class="tooltip-project">
                <div class="project-status" style="color: ${ee}">
                  ${H} <strong>Status:</strong> ${T.status.replace(/_/g," ").toUpperCase()}
                </div>
                <div class="project-progress">
                  ⏱️ ${T.actualHours}h / ${T.estimatedHours}h estimated
                </div>
                <div class="project-hint">💡 Click to manage task</div>
              </div>
            `}(!D||D.trim()==="")&&(D=`
              <div class="tooltip-header">
                <span class="tooltip-icon">📦</span>
                <span class="tooltip-title">${F}</span>
              </div>
              <div class="tooltip-description">Component from diagram</div>
              <div class="tooltip-project">
                <div class="project-hint">💡 Click to track progress</div>
              </div>
            `),C.innerHTML=D,document.body.appendChild(C),w._tooltip=C}}),w.addEventListener("mouseleave",Q=>{w._tooltip&&(w._tooltip.remove(),w._tooltip=null),document.querySelectorAll(".diagram-tooltip").forEach(re=>re.remove())})})},Dt=p=>{var w,q,Q,re,m;if(document.querySelectorAll(".diagram-tooltip").forEach(B=>B.remove()),d&&R){const B=p.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect');if(B){let Y=B.getAttribute("id")||"";const K=B.closest("g");if(K){const j=K.getAttribute("id")||"";if(j.includes("_")){const N=j.split("_");if(N.length>=2&&(N[0]==="flowchart"||N[0]==="graph")){const F=N.findIndex(_=>/^[A-Z]/.test(_));F>=0?Y=N[F]:N.length>=2&&(Y=N[1])}}}if(!Y){const j=B.querySelector("text")||(K==null?void 0:K.querySelector("text"));j&&(Y=(((w=j.textContent)==null?void 0:w.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(Y){console.log("🎯 Starting drag for node:",Y),E(Y),Te(!0);const j=(q=X.current)==null?void 0:q.querySelector("svg");if(j){const N=j.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const F of N){const _=F.getAttribute("id")||"";if(ze(_)===Y||_.includes(Y)){const ce=j.createSVGPoint();ce.x=p.clientX,ce.y=p.clientY;const z=j.getScreenCTM();if(z){const T=z.inverse(),g=ce.matrixTransform(T),b=(F.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(b){const C=parseFloat(b[1])||0,L=parseFloat(b[2])||0,$=g.x-C,D=g.y-L;Ee({x:$,y:D}),ke({x:p.clientX,y:p.clientY}),console.log("📍 Drag start - SVG coords:",g,"Node:",{nodeX:C,nodeY:L},"Offset:",{offsetX:$,offsetY:D})}}else{const T=(Q=A.current)==null?void 0:Q.getBoundingClientRect();if(T){const g=((re=A.current)==null?void 0:re.scrollLeft)||0,O=((m=A.current)==null?void 0:m.scrollTop)||0,b=(p.clientX-T.left+g)/r,C=(p.clientY-T.top+O)/r,$=(F.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if($){const D=parseFloat($[1])||0,M=parseFloat($[2])||0;Ee({x:b-D,y:C-M}),ke({x:p.clientX,y:p.clientY})}}}break}}}p.preventDefault(),p.stopPropagation();return}else console.warn("⚠️ Could not extract node ID for dragging")}}p.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect, path')&&(!d||!R)||p.button===0&&A.current&&(!d||!R)&&(xe(!0),ve({x:p.clientX,y:p.clientY}),De({x:A.current.scrollLeft,y:A.current.scrollTop}),p.preventDefault())},_t=p=>{if(d&&R&&I){Jt(p);return}if(Ae&&A.current&&(!d||!R)){const x=p.clientX-Me.x,w=p.clientY-Me.y;A.current.scrollLeft=pe.x-x,A.current.scrollTop=pe.y-w}},mt=()=>{var p;if(d&&R&&I){const x=(p=X.current)==null?void 0:p.querySelector("svg");if(x){const w=x.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const q of w){const Q=q.getAttribute("id")||"";if(ze(Q)===I||Q.includes(I)){const m=q.querySelector("rect");if(m){const B=q.getAttribute("transform")||"";let Y=0,K=0;const j=B.match(/translate\(([^,]+),\s*([^)]+)\)/);if(j)Y=parseFloat(j[1])||0,K=parseFloat(j[2])||0;else try{const _=m.getBBox();Y=_.x,K=_.y}catch{return}const N=parseFloat(m.getAttribute("width"))||180,F=parseFloat(m.getAttribute("height"))||90;console.log(`💾 Saving position for ${I}: (${Y}, ${K})`),gt(I,Y,K,N,F)}break}}}}Te(!1),xe(!1),d&&R&&E(null)},gt=async(p,x,w,q,Q)=>{var re;try{const{API_ENDPOINTS:m}=await fe(async()=>{const{API_ENDPOINTS:K}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:K}},[]),B=(re=S==null?void 0:S.nodeEntities)==null?void 0:re.find(K=>K.nodeId===p);if(!B){console.warn(`Node entity not found for ${p}`);return}if(!(await fetch(`${m.nodeById(B.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:{x,y:w},style:{width:q,height:Q,...B.style||{}}})})).ok)throw new Error("Failed to update node position");h(K=>({...K,nodeEntities:K.nodeEntities.map(j=>j.nodeId===p?{...j,position:{x,y:w},style:{...j.style,width:q,height:Q}}:j)})),console.log(`✅ Updated position for node ${p}`)}catch(m){console.error("Failed to update node position:",m)}},ht=async(p,x)=>{var w;try{const{API_ENDPOINTS:q}=await fe(async()=>{const{API_ENDPOINTS:m}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:m}},[]),Q=(w=S==null?void 0:S.nodeEntities)==null?void 0:w.find(m=>m.nodeId===p);if(!Q){console.warn(`Node entity not found for ${p}`);return}if(!(await fetch(`${q.nodeById(Q.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({style:{...Q.style||{},fill:x,stroke:x}})})).ok)throw new Error("Failed to update node color");h(m=>({...m,nodeEntities:m.nodeEntities.map(B=>B.nodeId===p?{...B,style:{...B.style,fill:x,stroke:x}}:B)})),he&&Ve(),console.log(`✅ Updated color for node ${p} to ${x}`)}catch(q){console.error("Failed to update node color:",q)}},Bt=async()=>{if(!Se.label.trim()){alert("Please enter a node label");return}try{const{API_ENDPOINTS:p,extractNodesFromMermaid:x}=await fe(async()=>{const{API_ENDPOINTS:B,extractNodesFromMermaid:Y}=await Promise.resolve().then(()=>We);return{API_ENDPOINTS:B,extractNodesFromMermaid:Y}},void 0),w=Se.label.replace(/[^a-zA-Z0-9]/g,"_")+"_"+Date.now(),q={nodeId:w,label:Se.label,type:Se.type||"default",position:{x:100,y:100},style:{width:180,height:90,fill:Se.color||"#60a5fa",stroke:Se.color||"#60a5fa"},diagramId:(S==null?void 0:S.dbId)||t,taskNodeId:"Level1_ProjectSetup"};if(!(await fetch(p.nodes,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(q)})).ok)throw new Error("Failed to create node");const re=he.code+`
  ${w}["${Se.label}"]`,{saveDiagramToBackend:m}=await fe(async()=>{const{saveDiagramToBackend:B}=await Promise.resolve().then(()=>We);return{saveDiagramToBackend:B}},void 0);await m(t,{mermaidCode:re,code:re}),window.dispatchEvent(new Event("diagram-saved")),J(!1),Pe({label:"",type:"default",color:"#60a5fa"}),console.log(`✅ Added new node: ${w}`)}catch(p){console.error("Failed to add node:",p),alert("Failed to add node: "+p.message)}},Gt=async()=>{if(confirm("⚠️ This will clear all saved node positions and reset to default layout. Continue?"))try{const{API_ENDPOINTS:p}=await fe(async()=>{const{API_ENDPOINTS:w}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:w}},[]);if(!(S!=null&&S.nodeEntities)){alert("No nodes to clear");return}let x=0;for(const w of S.nodeEntities)if(w.id&&w.position)try{(await fetch(`${p.nodeById(w.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:null})})).ok&&x++}catch(q){console.warn(`Failed to clear position for ${w.nodeId}:`,q)}window.dispatchEvent(new Event("diagram-saved")),alert(`✅ Cleared ${x} node positions. Diagram will use default layout.`)}catch(p){console.error("Failed to clear positions:",p),alert("❌ Failed to clear positions: "+p.message)}},Wt=async()=>{var p,x,w;try{if(!he||!S){console.warn("No diagram to save"),alert("❌ No diagram to save");return}const{saveDiagramToBackend:q,saveNodesToBackend:Q,extractEdgesFromMermaid:re}=await fe(async()=>{const{saveDiagramToBackend:N,saveNodesToBackend:F,extractEdgesFromMermaid:_}=await Promise.resolve().then(()=>We);return{saveDiagramToBackend:N,saveNodesToBackend:F,extractEdgesFromMermaid:_}},void 0),{API_ENDPOINTS:m}=await fe(async()=>{const{API_ENDPOINTS:N}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:N}},[]),B=(p=X.current)==null?void 0:p.querySelector("svg");B||console.warn("No SVG element found");const Y=B?B.querySelectorAll('g[id*="flowchart"], g[id*="graph"]'):[],K=[];if(B&&Y.length>0)for(const N of Y){const F=N.getAttribute("id")||"";let _=ze(F);if(!_){const M=N.querySelector("text");M&&(_=(((x=M.textContent)==null?void 0:x.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(!_)continue;let oe=(w=S==null?void 0:S.nodeEntities)==null?void 0:w.find(M=>M.nodeId===_);const ce=N.querySelector("rect");if(!ce)continue;const z=N.getAttribute("transform")||"";let T=0,g=0;const O=z.match(/translate\(([^,]+),\s*([^)]+)\)/);if(O)T=parseFloat(O[1])||0,g=parseFloat(O[2])||0;else try{const M=ce.getBBox();T=M.x,g=M.y}catch{continue}const b=parseFloat(ce.getAttribute("width"))||180,C=parseFloat(ce.getAttribute("height"))||90,L=ce.getAttribute("fill")||ce.style.fill||null,$=ce.getAttribute("stroke")||ce.style.stroke||null,D={...oe||{},nodeId:_,position:{x:Math.round(T),y:Math.round(g)},style:{...(oe==null?void 0:oe.style)||{},width:b,height:C,...L?{fill:L}:{},...$?{stroke:$}:{}}};if(oe!=null&&oe.id)try{const M=await fetch(`${m.nodeById(oe.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:D.position,style:D.style})});M.ok?(K.push(D),console.log(`✅ Saved position for ${_}: (${T}, ${g})`)):console.warn(`Failed to save node ${_}:`,M.statusText)}catch(M){console.warn(`Failed to update node ${_}:`,M)}else console.warn(`Node entity not found for ${_}, skipping save`)}const j=re(he.code||"");j.length>0&&(await q(t,{...he,edges:j}),console.log(`✅ Saved ${j.length} edges`)),await q(t,{title:he.title,description:he.description||"",mermaidCode:he.code,code:he.code}),window.__shouldApplyPositions=!0,window.dispatchEvent(new Event("diagram-saved")),console.log(`✅ All changes saved successfully! (${K.length} nodes updated)`),alert(`✅ All changes saved successfully! (${K.length} nodes updated)`)}catch(q){console.error("Failed to save changes:",q),alert("❌ Failed to save changes: "+q.message)}},Ft=async(p,x)=>{try{const{API_ENDPOINTS:w}=await fe(async()=>{const{API_ENDPOINTS:K}=await import("./api-Bi1WsTvu.js");return{API_ENDPOINTS:K}},[]);if(((S==null?void 0:S.edges)||[]).some(K=>(K.source===p||K.sourceNodeId===p)&&(K.target===x||K.targetNodeId===x))){console.log("Edge already exists");return}const re={sourceNodeId:p,targetNodeId:x,type:"directed",diagramId:(S==null?void 0:S.dbId)||t},m=[...(S==null?void 0:S.edges)||[],{source:p,target:x,sourceNodeId:p,targetNodeId:x,type:"directed"}],B=he.code+`
  ${p} --> ${x}`,{saveDiagramToBackend:Y}=await fe(async()=>{const{saveDiagramToBackend:K}=await Promise.resolve().then(()=>We);return{saveDiagramToBackend:K}},void 0);await Y(t,{mermaidCode:B,code:B,edges:m}),window.dispatchEvent(new Event("diagram-saved")),te(!1),v(null),console.log(`✅ Added edge: ${p} --> ${x}`)}catch(w){console.error("Failed to add edge:",w),alert("Failed to add edge: "+w.message)}},ze=p=>{if(!p)return null;let x=[];if(p.includes("_"))x=p.split("_");else if(p.includes("-"))x=p.split("-");else return p;if(x.length>=2&&(x[0]==="flowchart"||x[0]==="graph")){const w=x.findIndex(q=>/^[A-Z]/.test(q));if(w>=0)return x[w];if(x.length>=2)return x[1]}return null},Ut=(p,x)=>{var Q;if(!d)return;p.stopPropagation();let w=x.getAttribute("id")||"";const q=x.closest("g");if(q){const re=q.getAttribute("id")||"",m=ze(re);m&&(w=m)}if(!w||w.includes("flowchart")||w.includes("graph")){const re=x.querySelector("text")||(q==null?void 0:q.querySelector("text"));re&&(w=(((Q=re.textContent)==null?void 0:Q.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(!w){console.warn("Could not extract node ID for editing");return}Z?n?n!==w?Ft(n,w):(te(!1),v(null)):(v(w),console.log("🔗 Connection started from:",w)):R?(E(w),Te(!0)):(E(w),ue(w))},Jt=p=>{var ce,z;if(!d||!R||!I)return;p.stopPropagation(),p.preventDefault();const x=(ce=X.current)==null?void 0:ce.querySelector("svg");if(!x)return;const w=x.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');let q=null;for(const T of w){const g=T.getAttribute("id")||"";if(ze(g)===I||g.includes(I)){q=T;break}}if(!q){console.warn("⚠️ Node group not found for:",I);return}const Q=x.createSVGPoint();Q.x=p.clientX,Q.y=p.clientY;const re=x.getScreenCTM();let m,B;if(re){const T=re.inverse(),g=Q.matrixTransform(T);m=g.x,B=g.y}else{const T=(z=A.current)==null?void 0:z.getBoundingClientRect();if(!T)return;const g=A.current.scrollLeft||0,O=A.current.scrollTop||0;m=(p.clientX-T.left+g)/r,B=(p.clientY-T.top+O)/r}const Y=Ie.x||0,K=Ie.y||0,j=m-Y,N=B-K;q.setAttribute("transform",`translate(${j}, ${N})`);const F=q.querySelector("rect");if(!F)return;const _=parseFloat(F.getAttribute("width"))||180,oe=parseFloat(F.getAttribute("height"))||90;console.log(`🔄 Updating edges for node: ${I} at (${j+_/2}, ${N+oe/2})`),requestAnimationFrame(()=>{vt(x,I,j+_/2,N+oe/2)}),clearTimeout(window.nodePositionSaveTimeout),window.nodePositionSaveTimeout=setTimeout(()=>{console.log(`💾 Saving position for ${I}: (${j}, ${N})`),gt(I,j,N,_,oe)},500)},vt=(p,x,w,q)=>{const Q=p.querySelectorAll('g[id*="flowchart"]'),re=new Map;Q.forEach(Y=>{var N;const K=Y.getAttribute("id")||"",j=Y.querySelector("rect");if(j){const _=(Y.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(_){const oe=parseFloat(_[1])||0,ce=parseFloat(_[2])||0,z=parseFloat(j.getAttribute("width"))||180,T=parseFloat(j.getAttribute("height"))||90,g=oe+z/2,O=ce+T/2;let b="";if(K.includes("_")){const C=K.split("_"),L=C.findIndex($=>/^[A-Z]/.test($));L>=0?b=C[L]:C.length>=2&&(b=C[1])}if(!b){const C=Y.querySelector("text");C&&(b=(((N=C.textContent)==null?void 0:N.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}b&&re.set(b,{group:Y,x:oe,y:ce,width:z,height:T,centerX:g,centerY:O})}}});const m=(S==null?void 0:S.edges)||[];p.querySelectorAll('path[class*="flowchart"], path[class*="edge"], path').forEach((Y,K)=>{const j=Y.getAttribute("class")||"";if(j.includes("node")&&!j.includes("edge"))return;const N=Y.getAttribute("d")||"";if(!N||N.length<10)return;const F=N.match(/M\s*([\d.-]+)\s*([\d.-]+)/),_=N.match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)(?:\s|$)/g);if(!F)return;const oe={x:parseFloat(F[1]),y:parseFloat(F[2])};let ce=oe;if(_&&_.length>0){const b=_[_.length-1].match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)/);b&&(ce={x:parseFloat(b[1]),y:parseFloat(b[2])})}const z=Math.sqrt(Math.pow(oe.x-w,2)+Math.pow(oe.y-q,2)),T=Math.sqrt(Math.pow(ce.x-w,2)+Math.pow(ce.y-q,2)),g=250;if(z<g||T<g){let O=null,b=null;if(re.forEach((C,L)=>{const $=Math.sqrt(Math.pow(C.centerX-oe.x,2)+Math.pow(C.centerY-oe.y,2)),D=Math.sqrt(Math.pow(C.centerX-ce.x,2)+Math.pow(C.centerY-ce.y,2));$<g&&(!O||$<Math.sqrt(Math.pow(O.centerX-oe.x,2)+Math.pow(O.centerY-oe.y,2)))&&(O={name:L,...C}),D<g&&(!b||D<Math.sqrt(Math.pow(b.centerX-ce.x,2)+Math.pow(b.centerY-ce.y,2)))&&(b={name:L,...C})}),O&&b){const C=st(O.x,O.y,O.width,O.height,b.centerX,b.centerY),L=st(b.x,b.y,b.width,b.height,O.centerX,O.centerY),$=`M ${C.x} ${C.y} L ${L.x} ${L.y}`;Y.setAttribute("d",$),console.log(`🔗 Updated edge: ${O.name} -> ${b.name}`)}else if(z<g||T<g){const C=(z<T,re.get(x));if(C){const L=m.filter($=>$.source===x||$.sourceNodeId===x||$.target===x||$.targetNodeId===x);for(const $ of L){const D=$.source===x||$.sourceNodeId===x?$.target||$.targetNodeId:$.source||$.sourceNodeId,M=re.get(D);if(M){const ee=$.source===x||$.sourceNodeId===x?C:M,H=$.source===x||$.sourceNodeId===x?M:C,le=st(ee.x,ee.y,ee.width,ee.height,H.centerX,H.centerY),ye=st(H.x,H.y,H.width,H.height,ee.centerX,ee.centerY),me=`M ${le.x} ${le.y} L ${ye.x} ${ye.y}`;Y.setAttribute("d",me),console.log(`🔗 Updated edge from data: ${ee.name||x} -> ${H.name||D}`);break}}}}}})},st=(p,x,w,q,Q,re)=>{const m=p+w/2,B=x+q/2,Y=Q-m,K=re-B,j=Math.atan2(K,Y);let N,F;return Math.abs(Y)>Math.abs(K)?(N=Y>0?p+w:p,F=B+(N-m)*Math.tan(j),F<x&&(F=x),F>x+q&&(F=x+q)):(F=K>0?x+q:x,N=m+(F-B)/Math.tan(j),N<p&&(N=p),N>p+w&&(N=p+w)),{x:N,y:F}},{getProgress:Ht}=tt(),Je=Ht();return e.jsxs("div",{className:`diagram-canvas ${d?"edit-mode":""} ${Z?"is-connecting":""} ${R?"is-moving":""}`,children:[d&&e.jsxs("div",{className:"edit-toolbar",children:[e.jsxs("div",{className:"edit-toolbar-section",children:[e.jsxs("button",{className:`edit-toolbar-btn ${R?"active":""}`,onClick:()=>{W(!R),te(!1),v(null)},title:"Move nodes (click and drag nodes to reposition)",children:[e.jsx("span",{children:"↔️"}),e.jsx("span",{children:"Move"})]}),e.jsxs("button",{className:`edit-toolbar-btn ${Z?"active":""}`,onClick:()=>{te(!Z),W(!1),v(null)},title:"Connect nodes (click two nodes to create an edge)",children:[e.jsx("span",{children:"🔗"}),e.jsx("span",{children:"Connect"})]}),e.jsxs("button",{className:"edit-toolbar-btn",onClick:()=>J(!0),title:"Add new node",children:[e.jsx("span",{children:"➕"}),e.jsx("span",{children:"Add Node"})]})]}),e.jsxs("div",{className:"edit-toolbar-section",children:[e.jsxs("button",{className:"edit-toolbar-btn save-btn",onClick:Wt,title:"Save all changes to database",children:[e.jsx("span",{children:"💾"}),e.jsx("span",{children:"Save"})]}),e.jsxs("button",{className:"edit-toolbar-btn",onClick:Gt,title:"Clear all saved positions and reset to default layout",style:{background:"var(--bg-tertiary)",color:"var(--text-secondary)",fontSize:"12px"},children:[e.jsx("span",{children:"🔄"}),e.jsx("span",{children:"Reset Layout"})]})]})]}),U&&e.jsx("div",{className:"edit-dialog-overlay",onClick:()=>J(!1),children:e.jsxs("div",{className:"edit-dialog",onClick:p=>p.stopPropagation(),children:[e.jsx("h3",{children:"Add New Node"}),e.jsxs("div",{className:"edit-dialog-content",children:[e.jsxs("label",{children:["Node Label:",e.jsx("input",{type:"text",value:Se.label,onChange:p=>Pe({...Se,label:p.target.value}),placeholder:"Enter node name",autoFocus:!0})]}),e.jsxs("label",{children:["Type:",e.jsxs("select",{value:Se.type,onChange:p=>Pe({...Se,type:p.target.value}),children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"controller",children:"Controller"}),e.jsx("option",{value:"service",children:"Service"}),e.jsx("option",{value:"database",children:"Database"})]})]}),e.jsxs("label",{children:["Color:",e.jsx("input",{type:"color",value:Se.color,onChange:p=>Pe({...Se,color:p.target.value})})]})]}),e.jsxs("div",{className:"edit-dialog-actions",children:[e.jsx("button",{onClick:Bt,children:"Add"}),e.jsx("button",{onClick:()=>J(!1),children:"Cancel"})]})]})}),ge&&e.jsx("div",{className:"edit-dialog-overlay",onClick:()=>ue(null),children:e.jsxs("div",{className:"edit-dialog",onClick:p=>p.stopPropagation(),children:[e.jsx("h3",{children:"Change Node Color"}),e.jsxs("div",{className:"edit-dialog-content",children:[e.jsxs("label",{children:["Color:",e.jsx("input",{type:"color",defaultValue:"#60a5fa",onChange:p=>{ht(ge,p.target.value),ue(null)}})]}),e.jsx("div",{className:"color-presets",children:["#60a5fa","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"].map(p=>e.jsx("button",{className:"color-preset",style:{backgroundColor:p},onClick:()=>{ht(ge,p),ue(null)}},p))})]}),e.jsx("div",{className:"edit-dialog-actions",children:e.jsx("button",{onClick:()=>ue(null),children:"Close"})})]})}),e.jsxs("div",{className:`diagram-legend ${Be?"open":"closed"}`,children:[e.jsxs("button",{className:"legend-toggle",onClick:Ue,title:Be?"Close project status":"Open project status",children:[e.jsx("span",{className:"legend-toggle-icon",children:Be?"▼":"▶"}),e.jsx("span",{className:"legend-title",children:"Project Status"}),e.jsxs("span",{className:"legend-badge",children:[Je.percentage,"%"]})]}),Be&&e.jsxs("div",{className:"legend-content",children:[e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"✅"}),"Completed"]}),e.jsx("span",{style:{fontWeight:600,color:"#10b981"},children:Je.completed})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🔄"}),"In Progress"]}),e.jsx("span",{style:{fontWeight:600,color:"#3b82f6"},children:Je.inProgress})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"⏸️"}),"Not Started"]}),e.jsx("span",{style:{fontWeight:600,color:"#6b7280"},children:Je.notStarted})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🚫"}),"Blocked"]}),e.jsx("span",{style:{fontWeight:600,color:"#ef4444"},children:Je.blocked})]})]}),e.jsxs("div",{className:"legend-progress",children:[e.jsx("div",{className:"legend-progress-bar",children:e.jsx("div",{className:"legend-progress-fill",style:{width:`${Je.percentage}%`}})}),e.jsxs("span",{className:"legend-progress-text",children:[Je.percentage,"%"]})]}),e.jsx("div",{className:"legend-hint",children:"Click components to track"})]})]}),e.jsx("div",{ref:A,className:`canvas-viewport ${Ae?"panning":""} ${be?"dragging":""}`,onMouseDown:Dt,onMouseMove:_t,onMouseUp:mt,onMouseLeave:mt,onContextMenu:p=>p.preventDefault(),style:{cursor:Ae?"grabbing":"grab"},children:e.jsxs("div",{className:"canvas-content",style:{transform:`scale(${r})`,transformOrigin:"50% 50%",transition:Ae?"none":"transform 0.1s ease-out"},children:[de&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsxs("div",{className:"loading-text",children:["Rendering ",(he==null?void 0:he.title)||t,"..."]})]}),!he&&!de&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("div",{className:"loading-text",children:"Loading diagram..."})]}),e.jsx("div",{ref:X,className:"diagram-container interactive"})]})})]})},br=()=>{const{zoomLevel:t,zoomIn:r,zoomOut:i,resetZoom:a,isFullscreen:c,toggleFullscreen:o,currentView:d,navigateToView:s}=$e(),[u,y]=k.useState(!1),P=ir(),G=P.filter(X=>X.type==="composite"||X.type==="detail"),ae=P.find(X=>X.id===d),Ce=()=>{o(),document.fullscreenElement&&document.exitFullscreen()};return e.jsxs("div",{className:"zoom-controls",children:[c&&e.jsxs("div",{className:"fullscreen-tab-switcher",children:[e.jsx("button",{className:"tab-switcher-btn icon-only",onClick:()=>y(!u),title:(ae==null?void 0:ae.title)||"Switch diagram view",children:e.jsx("span",{className:"current-tab-icon",children:(ae==null?void 0:ae.icon)||"📊"})}),u&&e.jsx("div",{className:"tab-dropdown",children:G.map(X=>e.jsx("button",{className:`tab-option icon-only ${d===X.id?"active":""}`,onClick:()=>{s(X.id),y(!1)},title:X.title,children:e.jsx("span",{className:"tab-option-icon",children:X.icon})},X.id))})]}),c&&e.jsx("button",{className:"zoom-btn exit-fullscreen",onClick:Ce,title:"Exit Fullscreen",children:"✕"}),e.jsx("button",{className:"zoom-btn",onClick:r,title:"Zoom In",children:"+"}),e.jsxs("div",{className:"zoom-level",children:[Math.round(t*100),"%"]}),e.jsx("button",{className:"zoom-btn",onClick:i,title:"Zoom Out",children:"−"}),e.jsx("button",{className:"zoom-btn",onClick:a,title:"Reset Zoom",children:"⟲"})]})},wr=()=>{const{selectedNode:t,setSelectedNode:r}=$e(),i=et(t);if(!i)return null;const a=s=>!s||s.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Endpoints"}),s.map((u,y)=>e.jsxs("div",{className:"node-card",style:{marginBottom:"8px",padding:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"4px"},children:[e.jsx("span",{className:"node-tag",style:{background:u.method==="GET"?"#10b981":u.method==="POST"?"#3b82f6":u.method==="PUT"?"#f59e0b":u.method==="DELETE"?"#ef4444":"var(--bg-secondary)",color:"#fff"},children:u.method}),e.jsx("code",{style:{fontSize:"12px",color:"var(--accent-primary)"},children:u.path})]}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:u.description}),u.auth&&e.jsxs("div",{style:{fontSize:"10px",color:"var(--text-muted)",marginTop:"4px"},children:["🔒 Requires: ",u.auth]})]},y))]}),c=s=>!s||s.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Methods"}),s.map((u,y)=>e.jsx("div",{style:{padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"6px",marginBottom:"6px",fontSize:"11px",fontFamily:"'JetBrains Mono', 'Fira Code', monospace",color:"var(--text-secondary)",lineHeight:"1.6"},children:u},y))]}),o=s=>!s||s.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Responsibilities"}),e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:s.map((u,y)=>e.jsxs("li",{style:{padding:"8px 0",fontSize:"12px",color:"var(--text-secondary)",display:"flex",gap:"8px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)"},children:"•"}),e.jsx("span",{children:u})]},y))})]}),d=s=>!s||s.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Schema"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:s.map((u,y)=>e.jsxs("div",{style:{padding:"6px 0",borderBottom:y<s.length-1?"1px solid var(--border-primary)":"none"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"2px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)",fontWeight:600},children:u.name}),e.jsx("span",{style:{color:"var(--text-muted)"},children:u.type}),u.key&&e.jsx("span",{className:"node-tag",style:{fontSize:"9px",padding:"2px 6px"},children:u.key})]}),u.description&&e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"10px",marginLeft:"0"},children:u.description})]},y))})]});return e.jsxs("div",{className:"detail-panel",children:[e.jsxs("div",{className:"detail-panel-header",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"24px"},children:i.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-panel-title",children:i.title}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:i.type})]})]}),e.jsx("button",{className:"detail-panel-close",onClick:()=>r(null),children:"✕"})]}),e.jsxs("div",{className:"detail-panel-content",children:[e.jsx("p",{style:{fontSize:"13px",color:"var(--text-secondary)",lineHeight:"1.6",marginBottom:"16px"},children:i.description}),i.tags&&e.jsx("div",{className:"node-card-meta",style:{marginBottom:"20px"},children:i.tags.map(s=>e.jsx("span",{className:"node-tag",children:s},s))}),a(i.endpoints),c(i.methods),o(i.responsibilities),d(i.schema),i.services&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Services Used"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.services.map(s=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-secondary)",color:"#fff"},children:s},s))})]}),i.implementations&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Implementations"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.implementations.map(s=>e.jsx("span",{className:"node-tag",children:s},s))})]}),i.supportedChains&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Supported Chains"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.supportedChains.map(s=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-success)",color:"#fff"},children:s},s))})]}),i.relationships&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Relationships"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:i.relationships.map((s,u)=>e.jsx("div",{style:{padding:"6px 0",color:"var(--text-secondary)"},children:s},u))})]}),i.notes&&e.jsxs("div",{style:{marginTop:"20px",padding:"12px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontSize:"12px",fontWeight:600,color:"#f59e0b",marginBottom:"8px"},children:"⚠️ Notes"}),i.notes.map((s,u)=>e.jsx("p",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:u<i.notes.length-1?"8px":"0"},children:s},u))]})]})]})},Ye={Level1_ProjectSetup:{order:1,title:"🎮 Level 1: Project Foundation",description:"Start here! Set up your NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools.",steps:[{step:1,title:"Install Node.js and NestJS CLI",instructions:["Make sure you have Node.js 20+ installed (check with: `node --version`)","Install NestJS CLI globally: `npm install -g @nestjs/cli`","Verify installation: `nest --version`"],code:"npm install -g @nestjs/cli",expectedResult:"You should see the NestJS CLI version number",aiPrompt:"Help me install and set up NestJS CLI for a cryptocurrency exchange project. I need to install it globally and verify the installation works. Provide the commands and how to verify it's installed correctly."},{step:2,title:"Create New NestJS Project",instructions:["Navigate to your project directory","Create a new NestJS project: `nest new bitnitex-backend`","Choose npm as package manager when prompted","Wait for installation to complete"],code:`nest new bitnitex-backend
cd bitnitex-backend`,expectedResult:"A new folder 'bitnitex-backend' with NestJS project structure",aiPrompt:"Help me create a new NestJS project called 'bitnitex-backend' for a cryptocurrency exchange. I want to use npm as the package manager. Show me the command and what the project structure should look like after creation."},{step:3,title:"Install Core Dependencies",instructions:["Install TypeORM and database driver: `npm install @nestjs/typeorm typeorm mysql2`","Install class-validator and class-transformer: `npm install class-validator class-transformer`","Install JWT: `npm install @nestjs/jwt @nestjs/passport passport passport-jwt`","Install Swagger: `npm install @nestjs/swagger swagger-ui-express`"],code:"npm install @nestjs/typeorm typeorm mysql2 class-validator class-transformer @nestjs/jwt @nestjs/passport passport passport-jwt @nestjs/swagger swagger-ui-express",expectedResult:"All packages installed in node_modules",aiPrompt:"Help me install all the core dependencies for a NestJS cryptocurrency exchange project. I need TypeORM for database, JWT for authentication, class-validator for validation, and Swagger for API documentation. Provide a single npm install command with all required packages."},{step:4,title:"Set Up Project Structure",instructions:["Create folders: `src/modules`, `src/common`, `src/config`","Create `src/config/database.config.ts` for database configuration","Create `src/common/guards/` for authentication guards","Create `src/common/decorators/` for custom decorators"],code:"mkdir -p src/modules src/common/guards src/common/decorators src/config",expectedResult:"Project structure with organized folders",aiPrompt:"Help me set up the project folder structure for a NestJS cryptocurrency exchange. I need folders for modules, common utilities (guards, decorators), and configuration. Show me the commands to create these directories and explain what each folder is for."},{step:5,title:"Configure Environment Variables",instructions:["Create `.env` file in project root","Add: `DATABASE_HOST=localhost`, `DATABASE_PORT=3306`, `DATABASE_USER=root`, `DATABASE_PASSWORD=your_password`, `DATABASE_NAME=bitnitex`","Add: `JWT_SECRET=your-secret-key`, `JWT_EXPIRES_IN=24h`","Install dotenv: `npm install @nestjs/config`"],code:"npm install @nestjs/config",expectedResult:".env file with all required variables",aiPrompt:"Help me configure environment variables for a NestJS cryptocurrency exchange project. I need database connection settings (MySQL), JWT secret, and other configuration. Show me how to set up the .env file and configure NestJS to use @nestjs/config to load these variables."},{step:6,title:"Set Up Swagger Documentation",instructions:["In `main.ts`, import SwaggerModule","Add: `SwaggerModule.setup('api', app, document)`","Create Swagger config with title, description, version","Test: Run `npm run start:dev` and visit `http://localhost:3000/api`"],code:`import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('BitniTex API')
  .setDescription('BitniTex Exchange API Documentation')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);`,expectedResult:"Swagger UI accessible at /api endpoint",aiPrompt:"Help me set up Swagger/OpenAPI documentation for my NestJS cryptocurrency exchange API. I want it accessible at the '/api' endpoint with title 'BitniTex API'. Show me how to configure SwaggerModule in main.ts with proper setup."}],nextTask:"Level2_DatabaseAuth",unlockMessage:"🎉 Great! Your project is set up. Now let's build the database and authentication!"},Level2_DatabaseAuth:{order:2,title:"🎮 Level 2: Database & Authentication",description:"Set up TypeORM with all 81 entities, create database migrations, configure authentication with JWT, guards, RBAC, 2FA, and OTP support.",steps:[{step:1,title:"Configure TypeORM",instructions:["Install TypeORM: `npm install @nestjs/typeorm typeorm mysql2`","Create `src/config/database.config.ts`","Configure database connection with environment variables","Set up TypeORM module in `app.module.ts`"],code:`import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (config: ConfigService) => ({
    type: 'mysql',
    host: config.get('DATABASE_HOST'),
    port: config.get('DATABASE_PORT'),
    username: config.get('DATABASE_USER'),
    password: config.get('DATABASE_PASSWORD'),
    database: config.get('DATABASE_NAME'),
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: false, // Use migrations in production
    logging: true
  }),
  inject: [ConfigService]
})`,expectedResult:"TypeORM configured and connected to database",aiPrompt:"Help me configure TypeORM for a NestJS cryptocurrency exchange project. I need to connect to MySQL database using environment variables and set up the TypeORM module properly.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The database configuration is in src/main/resources/application.properties. Please help me configure TypeORM to match the Spring Boot database setup. Read the application.properties file to understand the database connection settings."},{step:2,title:"Create Identity Entities",instructions:["Create `Customer` entity with all fields (id, email, password_hash, phone, country, etc.)","Create `Admin` entity","Create `Role` and `Privilege` entities","Create `CustomerRole` junction entity","Add relationships (OneToMany, ManyToOne, ManyToMany)","Add indexes and constraints"],code:`@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ unique: true })
  email: string;
  
  @Column()
  password_hash: string;
  
  @Column({ nullable: true })
  phone: string;
  
  @Column()
  country: string;
  
  @ManyToMany(() => Role, role => role.customers)
  @JoinTable({ name: 'customer_roles' })
  roles: Role[];
}`,expectedResult:"Identity entities created with proper relationships",aiPrompt:"Help me create Customer, Admin, Role, and Privilege entities for a NestJS cryptocurrency exchange. I need proper relationships, indexes, and constraints matching the original Spring Boot entities.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java entities in src/main/java/ir/arnitex/backend/domain/ and help me create the corresponding TypeORM entities with the same fields, relationships, and constraints."},{step:3,title:"Create Trading Entities",instructions:["Create `Order` entity (id, customerId, marketId, type, side, price, amount, status, etc.)","Create `Trade` entity","Create `Market` entity","Create `Coin` and `Network` entities","Add all relationships and indexes"],code:`@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  customerId: number;
  
  @Column()
  marketId: number;
  
  @Column()
  type: string; // MARKET, LIMIT, STOP_LIMIT
  
  @Column()
  side: string; // BUY, SELL
  
  @Column('decimal', { precision: 18, scale: 8 })
  price: number;
  
  @Column('decimal', { precision: 18, scale: 8 })
  amount: number;
  
  @Column({ default: 'PENDING' })
  status: string;
  
  @ManyToOne(() => Customer)
  customer: Customer;
  
  @ManyToOne(() => Market)
  market: Market;
}`,expectedResult:"Trading entities created",aiPrompt:"Help me create Order, Trade, Market, and Coin entities for a NestJS cryptocurrency exchange with proper relationships and decimal precision for monetary values.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java entities for Order, Trade, Market, and Coin from src/main/java/ir/arnitex/backend/domain/ and help me create TypeORM equivalents."},{step:4,title:"Create Wallet Entities",instructions:["Create `HDWallet` entity","Create `CustomerWallet` entity","Create `WalletAddress` entity","Create `Transaction` entity","Add relationships and indexes"],code:`@Entity('hd_wallet')
export class HDWallet {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  customerId: number;
  
  @Column('text')
  mnemonic: string; // Encrypted
  
  @Column()
  network: string;
  
  @OneToMany(() => WalletAddress, address => address.wallet)
  addresses: WalletAddress[];
}`,expectedResult:"Wallet entities created",aiPrompt:"Help me create HD wallet and customer wallet entities for a NestJS cryptocurrency exchange with proper relationships and encryption for sensitive data.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java wallet entities and help me create TypeORM equivalents."},{step:5,title:"Create Database Migrations",instructions:["Generate migration: `npm run typeorm migration:generate -- -n InitialSchema`","Review generated migration file","Run migration: `npm run typeorm migration:run`","Verify tables created in database"],code:`npm run typeorm migration:generate -- -n InitialSchema
npm run typeorm migration:run`,expectedResult:"All 81 tables created in database",aiPrompt:"Help me generate and run TypeORM migrations for a cryptocurrency exchange database with 81 tables. I need to create the initial schema migration.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original database has 81 tables. Please help me create TypeORM migrations to match the existing schema."},{step:6,title:"Set Up JWT Authentication",instructions:["Create `JwtStrategy` implementing PassportStrategy","Create `JwtAuthGuard`","Configure JWT module in auth module","Set up token generation and validation"],code:`@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }
  
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}`,expectedResult:"JWT authentication working",aiPrompt:"Help me set up JWT authentication in NestJS with Passport. I need JWT strategy, guards, and token generation/validation.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java JWT configuration and help me implement the same in NestJS using Passport."},{step:7,title:"Implement RBAC Guards",instructions:["Create `RolesGuard` that checks user roles","Create `@Roles()` decorator","Create `@Privileges()` decorator","Implement privilege checking logic"],code:`@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true;
    
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}`,expectedResult:"RBAC guards working",aiPrompt:"Help me implement RBAC (Role-Based Access Control) guards in NestJS with decorators for roles and privileges.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java security configuration and help me implement RBAC guards."},{step:8,title:"Implement 2FA Support",instructions:["Install speakeasy: `npm install speakeasy qrcode`","Create 2FA service for TOTP generation","Implement QR code generation","Create 2FA verification logic"],code:`import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';

async generate2FASecret(userId: number): Promise<{ secret: string; qrCode: string }> {
  const secret = speakeasy.generateSecret({ name: \`BitniTex-\${userId}\` });
  const qrCode = await qrcode.toDataURL(secret.otpauth_url);
  return { secret: secret.base32, qrCode };
}`,expectedResult:"2FA can be enabled and verified",aiPrompt:"Help me implement 2FA (Two-Factor Authentication) in NestJS using TOTP with speakeasy and QR code generation.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java 2FA implementation and help me implement the same in NestJS."}],nextTask:"Level3_CustomerIdentity",unlockMessage:"🔐 Database and authentication ready! Now build customer management!"},Level3_CustomerIdentity:{order:3,title:"🎮 Level 3: Customer & Identity Management",description:"Build customer service with registration, authentication, KYC orchestration, profile management, and customer controller with all endpoints.",steps:[{step:1,title:"Create Customer Service",instructions:["Generate service: `nest g service customers`","Import Customer entity repository","Import EmailService and SMSService","Set up TypeORM repository"],code:"nest g service customers",expectedResult:"Customer service created",aiPrompt:"Help me create a CustomerService for a NestJS cryptocurrency exchange. I need to set up the service with TypeORM repository injection.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/CustomerService.java and help me create the NestJS equivalent."},{step:2,title:"Implement User Registration",instructions:["Create `register()` method","Validate email uniqueness","Hash password with bcrypt","Create customer entity","Send welcome email","Return RegisterResponseDto"],code:`async register(userDTO: RegisterDto): Promise<RegisterResponseDto> {
  const hashedPassword = await bcrypt.hash(userDTO.password, 10);
  const customer = this.customerRepository.create({
    ...userDTO,
    password_hash: hashedPassword
  });
  await this.emailService.sendWelcomeEmail(customer.email);
  return { customer, message: 'Registration successful' };
}`,expectedResult:"Users can register successfully",aiPrompt:"Help me implement user registration in NestJS with password hashing, email validation, and welcome email sending.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerService register method and help me implement the same in NestJS."},{step:3,title:"Implement Authentication",instructions:["Create `authenticate()` method","Find customer by email","Verify password with bcrypt","Check account status","Return customer entity","Log authentication attempt"],code:`async authenticate(email: string, password: string): Promise<Customer> {
  const customer = await this.customerRepository.findOne({ where: { email } });
  if (!customer) throw new UnauthorizedException('Invalid credentials');
  
  const isValid = await bcrypt.compare(password, customer.password_hash);
  if (!isValid) throw new UnauthorizedException('Invalid credentials');
  
  return customer;
}`,expectedResult:"User authentication works",aiPrompt:"Help me implement user authentication in NestJS with password verification and account status checking.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java authentication logic and help me implement the same."},{step:4,title:"Implement KYC Submission",instructions:["Create `submitKYC()` method","Accept KYC documents (ID, selfie, etc.)","Save files to storage","Update customer KYC status to 'PENDING'","Notify admins for review","Return KYC status"],code:`async submitKYC(customerId: number, kycDTO: KycDto, files: Express.Multer.File[]): Promise<KYCStatus> {
  // Save files
  // Update customer KYC status
  // Notify admins
  return kycStatus;
}`,expectedResult:"KYC documents can be submitted",aiPrompt:"Help me implement KYC document submission in NestJS with file handling and status management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java KYC submission logic and help me implement the same."},{step:5,title:"Create Customer Controller",instructions:["Generate controller: `nest g controller customers`","Create `POST /api/users/register` endpoint","Create `POST /api/users/login` endpoint","Create `GET /api/users/profile` endpoint","Create `PUT /api/users/kyc` endpoint","Add DTOs and validation"],code:`@Post('register')
async register(@Body() dto: RegisterDto) {
  return this.customerService.register(dto);
}

@Post('login')
async login(@Body() dto: LoginDto) {
  const customer = await this.customerService.authenticate(dto.email, dto.password);
  const token = this.jwtService.sign({ sub: customer.id, email: customer.email });
  return { token, customer };
}`,expectedResult:"Customer endpoints working",aiPrompt:"Help me create CustomerController endpoints for registration, login, profile, and KYC in NestJS.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/CustomerController.java and help me create the NestJS equivalent."}],nextTask:"Level4_Notifications",unlockMessage:"👥 Customer management ready! Now build notification services!"},Level4_Notifications:{order:4,title:"🎮 Level 4: Notification Services",description:"Build EmailService, SMSService, and NotificationService for user communications, OTP delivery, alerts, and in-app notifications.",steps:[{step:1,title:"Create Email Service",instructions:["Install nodemailer: `npm install nodemailer @types/nodemailer`","Create EmailService with SMTP configuration","Implement `sendEmail()` method","Create email templates (welcome, OTP, password reset)"],code:`import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  
  async sendEmail(to: string, subject: string, html: string) {
    await this.transporter.sendMail({ to, subject, html });
  }
}`,expectedResult:"Emails can be sent",aiPrompt:"Help me create an EmailService in NestJS using nodemailer for sending emails with SMTP configuration.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java EmailService and help me implement the same in NestJS."},{step:2,title:"Create SMS Service",instructions:["Create SMSService with SMS provider integration","Implement `sendSMS()` method","Implement `sendOTP()` method","Configure SMS provider credentials"],code:`@Injectable()
export class SMSService {
  async sendSMS(phone: string, message: string) {
    // Integrate with SMS provider API
    // Send SMS
  }
  
  async sendOTP(phone: string, code: string) {
    await this.sendSMS(phone, \`Your OTP code is: \${code}\`);
  }
}`,expectedResult:"SMS can be sent",aiPrompt:"Help me create an SMSService in NestJS for sending SMS messages and OTP codes.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java SMSService and help me implement the same."},{step:3,title:"Create Notification Service",instructions:["Create Notification entity","Create NotificationService","Implement `createNotification()` method","Implement `markAsRead()` method","Add notification repository"],code:`@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  userId: number;
  
  @Column()
  title: string;
  
  @Column('text')
  message: string;
  
  @Column({ default: false })
  read: boolean;
}

@Injectable()
export class NotificationService {
  async createNotification(userId: number, title: string, message: string) {
    const notification = this.notificationRepository.create({ userId, title, message });
    return await this.notificationRepository.save(notification);
  }
}`,expectedResult:"Notifications can be created and managed",aiPrompt:"Help me create a NotificationService in NestJS for in-app notifications with read/unread status.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java NotificationService and help me implement the same."}],nextTask:"Level5_WalletServices",unlockMessage:"📧 Notifications ready! Now build wallet services!"},Level5_WalletServices:{order:5,title:"🎮 Level 5: Wallet Services",description:"Build WalletService, CustomerWalletService, DepositService, and WithdrawalService for HD wallet management, balance operations, deposits, and withdrawals.",steps:[{step:1,title:"Create Wallet Service",instructions:["Generate service: `nest g service wallets`","Install HD wallet libraries: `npm install bip32 bip39 bitcoinjs-lib`","Create HD wallet creation logic with BIP32/BIP44","Implement mnemonic generation and storage"],code:`import * as bip39 from 'bip39';
import { HDKey } from 'ed25519-hd-key';

async createHDWallet(customerId: number, network: string): Promise<HDWallet> {
  const mnemonic = bip39.generateMnemonic();
  const seed = await bip39.mnemonicToSeed(mnemonic);
  // Encrypt mnemonic before storing
  const encryptedMnemonic = this.encrypt(mnemonic);
  
  const wallet = this.hdWalletRepository.create({
    customerId,
    mnemonic: encryptedMnemonic,
    network
  });
  
  return await this.hdWalletRepository.save(wallet);
}`,expectedResult:"HD wallets can be created",aiPrompt:"Help me create a WalletService in NestJS for HD wallet creation using BIP32/BIP44 with mnemonic generation and encryption.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/WalletService.java and help me implement HD wallet creation."},{step:2,title:"Implement Address Generation",instructions:["Create `generateAddress()` method","Support multiple chains (ETH, TRON, BTC, etc.)","Derive addresses from HD wallet","Store addresses in database"],code:`async generateAddress(walletId: number, network: string, index: number): Promise<WalletAddress> {
  const wallet = await this.hdWalletRepository.findOne({ where: { id: walletId } });
  const mnemonic = this.decrypt(wallet.mnemonic);
  
  let address: string;
  switch (network) {
    case 'ETH':
      address = this.generateEthereumAddress(mnemonic, index);
      break;
    case 'TRON':
      address = this.generateTronAddress(mnemonic, index);
      break;
    // ... other networks
  }
  
  const walletAddress = this.walletAddressRepository.create({
    walletId,
    address,
    network,
    index
  });
  
  return await this.walletAddressRepository.save(walletAddress);
}`,expectedResult:"Addresses can be generated for all networks",aiPrompt:"Help me implement multi-chain address generation in NestJS for ETH, TRON, BTC, and other networks.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java address generation logic and help me implement the same."},{step:3,title:"Create Customer Wallet Service",instructions:["Create CustomerWalletService","Implement `getBalance()` for all coins","Implement `updateBalance()` (credit/debit)","Implement `lockFunds()` and `unlockFunds()` for orders"],code:`@Injectable()
export class CustomerWalletService {
  async getBalance(customerId: number, coin: string): Promise<number> {
    const wallet = await this.customerWalletRepository.findOne({
      where: { customerId, coin }
    });
    return wallet?.balance || 0;
  }
  
  async creditBalance(customerId: number, amount: number, coin: string, reason: string) {
    // Update balance atomically
    // Create transaction record
  }
  
  async lockFunds(customerId: number, amount: number, coin: string) {
    // Lock funds for order
  }
}`,expectedResult:"Balance operations working",aiPrompt:"Help me create a CustomerWalletService in NestJS for balance management with credit, debit, and locking operations.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerWalletService and help me implement the same."},{step:4,title:"Create Deposit Service",instructions:["Create DepositService","Implement `trackDeposit()` method","Implement `confirmDeposit()` method","Handle deposit webhooks from payment gateways"],code:`@Injectable()
export class DepositService {
  async trackDeposit(customerId: number, amount: number, gateway: string) {
    const deposit = this.depositRepository.create({
      customerId,
      amount,
      gateway,
      status: 'PENDING'
    });
    return await this.depositRepository.save(deposit);
  }
  
  async confirmDeposit(depositId: number) {
    const deposit = await this.depositRepository.findOne({ where: { id: depositId } });
    deposit.status = 'CONFIRMED';
    await this.customerWalletService.creditBalance(deposit.customerId, deposit.amount, 'TOMAN', 'DEPOSIT');
    await this.depositRepository.save(deposit);
  }
}`,expectedResult:"Deposits can be tracked and confirmed",aiPrompt:"Help me create a DepositService in NestJS for tracking and confirming deposits from payment gateways.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java DepositService and help me implement the same."},{step:5,title:"Create Withdrawal Service",instructions:["Create WithdrawalService","Implement `createRequest()` method","Implement `approveWithdrawal()` method","Implement `rejectWithdrawal()` method","Process withdrawals (create blockchain transactions)"],code:`@Injectable()
export class WithdrawalService {
  async createRequest(customerId: number, amount: number, coin: string, address: string) {
    // Validate address
    // Check balance
    // Create withdrawal request
  }
  
  async approveWithdrawal(withdrawalId: number) {
    // Create blockchain transaction
    // Update status
    // Deduct balance
  }
}`,expectedResult:"Withdrawals can be created and processed",aiPrompt:"Help me create a WithdrawalService in NestJS for withdrawal request management and processing.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java WithdrawalService and help me implement the same."}],nextTask:"Level6_Blockchain",unlockMessage:"💰 Wallet services ready! Now integrate with blockchain!"},Level6_Blockchain:{order:6,title:"🎮 Level 6: Blockchain Integration",description:"Build ApieService for multi-chain blockchain integration supporting ETH, TRON, XRP, XLM, BTC, BSC, Dash, and Stellar networks.",steps:[{step:1,title:"Set Up Apie HTTP Client",instructions:["Create ApieService","Install axios: `npm install axios`","Configure HTTP client with retry logic","Set up base URL and authentication"],code:`import axios, { AxiosInstance } from 'axios';

@Injectable()
export class ApieService {
  private httpClient: AxiosInstance;
  
  constructor() {
    this.httpClient = axios.create({
      baseURL: process.env.APIE_API_URL,
      headers: {
        'Authorization': \`Bearer \${process.env.APIE_API_KEY}\`,
        'Content-Type': 'application/json'
      }
    });
  }
}`,expectedResult:"HTTP client configured",aiPrompt:"Help me set up an HTTP client in NestJS for the Apie blockchain service with authentication and retry logic.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService HTTP client setup and help me implement the same."},{step:2,title:"Implement Multi-Chain Configuration",instructions:["Create chain configuration interface","Configure supported chains (ETH, TRON, BTC, etc.)","Set up chain-specific endpoints","Create chain factory pattern"],code:`interface ChainConfig {
  name: string;
  network: string;
  apiEndpoint: string;
  explorerUrl: string;
}

const CHAIN_CONFIGS: Record<string, ChainConfig> = {
  ETH: { name: 'Ethereum', network: 'mainnet', apiEndpoint: '/eth', explorerUrl: 'https://etherscan.io' },
  TRON: { name: 'TRON', network: 'mainnet', apiEndpoint: '/tron', explorerUrl: 'https://tronscan.org' },
  // ... other chains
};`,expectedResult:"Multi-chain configuration ready",aiPrompt:"Help me set up multi-chain configuration in NestJS for supporting multiple blockchain networks.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java blockchain configuration and help me implement the same."},{step:3,title:"Implement Wallet Operations",instructions:["Create `createHDWallet()` method","Create `generateAddress()` method","Support all chains (ETH, TRON, BTC, XRP, XLM, BSC, Dash, Stellar)","Handle chain-specific address formats"],code:`async createHDWallet(network: string): Promise<{ walletId: string; address: string }> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.post(\`\${config.apiEndpoint}/wallet/create\`, {
    network: config.network
  });
  return { walletId: response.data.walletId, address: response.data.address };
}

async generateAddress(walletId: string, network: string, index: number): Promise<string> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.post(\`\${config.apiEndpoint}/wallet/address\`, {
    walletId,
    index
  });
  return response.data.address;
}`,expectedResult:"Wallet operations work for all chains",aiPrompt:"Help me implement wallet operations in NestJS for multiple blockchain networks using the Apie API.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService wallet operations and help me implement the same."},{step:4,title:"Implement Transaction Operations",instructions:["Create `createTransaction()` method","Create `signTransaction()` method","Create `broadcastTransaction()` method","Implement `getTransactionStatus()` method"],code:`async createTransaction(network: string, from: string, to: string, amount: string): Promise<any> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.post(\`\${config.apiEndpoint}/transaction/create\`, {
    from,
    to,
    amount
  });
  return response.data;
}

async broadcastTransaction(network: string, signedTx: string): Promise<string> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.post(\`\${config.apiEndpoint}/transaction/broadcast\`, {
    signedTx
  });
  return response.data.txHash;
}`,expectedResult:"Transactions can be created and broadcast",aiPrompt:"Help me implement transaction operations in NestJS for creating, signing, and broadcasting blockchain transactions.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService transaction operations and help me implement the same."},{step:5,title:"Implement Balance Queries",instructions:["Create `getBalance()` method for all chains","Implement `getTransactionHistory()` method","Add transaction confirmation checking","Handle webhook events from blockchain"],code:`async getBalance(network: string, address: string): Promise<string> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.get(\`\${config.apiEndpoint}/balance/\${address}\`);
  return response.data.balance;
}

async checkConfirmations(network: string, txHash: string): Promise<number> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.get(\`\${config.apiEndpoint}/transaction/\${txHash}/confirmations\`);
  return response.data.confirmations;
}`,expectedResult:"Balance queries and transaction tracking working",aiPrompt:"Help me implement balance queries and transaction confirmation checking in NestJS for all supported blockchain networks.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService balance and transaction methods and help me implement the same."}],nextTask:"Level7_TradingEngine",unlockMessage:"⛓️ Blockchain integration ready! Now build the trading engine!"},Level7_TradingEngine:{order:7,title:"🎮 Level 7: Trading Engine",description:"Build OrderService and TradeService - the core trading engine with order matching, trade execution, order book management, and trade history.",steps:[{step:1,title:"Create Order Service Structure",instructions:["Generate service: `nest g service orders`","Create Order entity repository","Set up in-memory order book data structure","Create order queue management"],code:`@Injectable()
export class OrderService {
  private orderBook = new Map<string, { bids: Order[], asks: Order[] }>();
  private pendingOrders = new Map<number, Order>();
  
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}
}`,expectedResult:"Order service structure created",aiPrompt:"Help me create an OrderService in NestJS for a cryptocurrency exchange with in-memory order book management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/OrderService.java and help me create the NestJS equivalent."},{step:2,title:"Implement Order Creation Logic",instructions:["Create `createOrder()` method","Validate order (price, amount, balance)","Lock funds in customer wallet","Add order to order book or execute immediately","Persist order to database"],code:`async createOrder(customerId: number, dto: CreateOrderDto): Promise<Order> {
  // Validate market is active
  // Check customer has sufficient balance
  // Lock funds
  const order = this.orderRepository.create({
    customerId,
    ...dto,
    status: 'PENDING'
  });
  
  // Try to match immediately
  const matched = await this.tryMatchOrder(order);
  if (matched) {
    order.status = 'FILLED';
  } else {
    // Add to order book
    this.addToOrderBook(order);
  }
  
  return await this.orderRepository.save(order);
}`,expectedResult:"Orders can be created and matched",aiPrompt:"Help me implement order creation logic in NestJS with validation, balance locking, and immediate matching.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OrderService createOrder method and help me implement the same."},{step:3,title:"Implement Order Matching Engine",instructions:["Create `matchOrders()` method","Implement price-time priority matching","Match buy orders with sell orders","Execute trades when orders match","Update order book after matching"],code:`async matchOrders(buyOrder: Order, sellOrder: Order): Promise<Trade | null> {
  if (buyOrder.price >= sellOrder.price) {
    const tradeAmount = Math.min(buyOrder.remainingAmount, sellOrder.remainingAmount);
    const tradePrice = sellOrder.price; // Price-time priority
    
    // Execute trade
    const trade = await this.executeTrade(buyOrder, sellOrder, tradeAmount, tradePrice);
    
    // Update orders
    buyOrder.remainingAmount -= tradeAmount;
    sellOrder.remainingAmount -= tradeAmount;
    
    if (buyOrder.remainingAmount === 0) buyOrder.status = 'FILLED';
    if (sellOrder.remainingAmount === 0) sellOrder.status = 'FILLED';
    
    return trade;
  }
  return null;
}`,expectedResult:"Orders can be matched and trades executed",aiPrompt:"Help me implement an order matching engine in NestJS with price-time priority matching algorithm.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OrderService matching logic and help me implement the same."},{step:4,title:"Implement Trade Service",instructions:["Create TradeService","Implement `executeTrade()` method","Update balances for buyer and seller","Create trade records","Calculate trade statistics"],code:`@Injectable()
export class TradeService {
  async executeTrade(buyOrder: Order, sellOrder: Order, amount: number, price: number): Promise<Trade> {
    // Transfer funds
    await this.customerWalletService.debitBalance(buyOrder.customerId, amount * price, buyOrder.quoteCoin);
    await this.customerWalletService.creditBalance(buyOrder.customerId, amount, buyOrder.baseCoin);
    
    await this.customerWalletService.debitBalance(sellOrder.customerId, amount, sellOrder.baseCoin);
    await this.customerWalletService.creditBalance(sellOrder.customerId, amount * price, sellOrder.quoteCoin);
    
    // Create trade record
    const trade = this.tradeRepository.create({
      buyOrderId: buyOrder.id,
      sellOrderId: sellOrder.id,
      amount,
      price,
      marketId: buyOrder.marketId
    });
    
    return await this.tradeRepository.save(trade);
  }
}`,expectedResult:"Trades can be executed and balances updated",aiPrompt:"Help me implement trade execution in NestJS with balance transfers and trade record creation.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/TradeService.java and help me implement the same."},{step:5,title:"Implement Scheduled Tasks",instructions:["Install @nestjs/schedule: `npm install @nestjs/schedule`","Create scheduled task for order expiration","Create scheduled task for stop-limit order triggers","Create scheduled task for order book cleanup"],code:`import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class OrderScheduler {
  @Cron(CronExpression.EVERY_MINUTE)
  async expireOrders() {
    // Find expired orders and cancel them
  }
  
  @Cron(CronExpression.EVERY_30_SECONDS)
  async checkStopLimitOrders() {
    // Check stop-limit orders and trigger if conditions met
  }
}`,expectedResult:"Scheduled tasks running",aiPrompt:"Help me implement scheduled tasks in NestJS for order expiration and stop-limit order checking.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java scheduled tasks and help me implement the same using @nestjs/schedule."}],nextTask:"Level8_MarketManagement",unlockMessage:"💹 Trading engine ready! Now manage markets and coins!"},Level8_MarketManagement:{order:8,title:"🎮 Level 8: Market & Coin Management",description:"Build MarketService, CoinService, MarketController, and CoinController for trading pair management, coin management, and price updates.",steps:[{step:1,title:"Create Market Service",instructions:["Generate service: `nest g service markets`","Create Market entity repository","Implement market CRUD operations","Implement market activation/deactivation"],code:`@Injectable()
export class MarketService {
  async createMarket(dto: CreateMarketDto): Promise<Market> {
    const market = this.marketRepository.create(dto);
    return await this.marketRepository.save(market);
  }
  
  async activateMarket(marketId: number) {
    const market = await this.marketRepository.findOne({ where: { id: marketId } });
    market.active = true;
    return await this.marketRepository.save(market);
  }
}`,expectedResult:"Markets can be created and managed",aiPrompt:"Help me create a MarketService in NestJS for trading pair management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/MarketService.java and help me implement the same."},{step:2,title:"Create Coin Service",instructions:["Generate service: `nest g service coins`","Create Coin and Network entities","Implement coin CRUD operations","Implement price update logic"],code:`@Injectable()
export class CoinService {
  async updatePrice(coinId: number, price: number) {
    const coin = await this.coinRepository.findOne({ where: { id: coinId } });
    coin.currentPrice = price;
    coin.lastPriceUpdate = new Date();
    return await this.coinRepository.save(coin);
  }
}`,expectedResult:"Coins can be managed and prices updated",aiPrompt:"Help me create a CoinService in NestJS for cryptocurrency management and price updates.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/CoinService.java and help me implement the same."},{step:3,title:"Create Market and Coin Controllers",instructions:["Generate controllers: `nest g controller markets` and `nest g controller coins`","Create market endpoints (list, create, activate)","Create coin endpoints (list, create, update price)","Add DTOs and validation"],code:`@Controller('markets')
export class MarketController {
  @Get()
  async getMarkets() {
    return this.marketService.findAll();
  }
  
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('CREATE_MARKET')
  async createMarket(@Body() dto: CreateMarketDto) {
    return this.marketService.createMarket(dto);
  }
}`,expectedResult:"Market and coin endpoints working",aiPrompt:"Help me create MarketController and CoinController in NestJS with proper endpoints and guards.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java MarketController and CoinController and help me implement the same."}],nextTask:"Level9_TradingControllers",unlockMessage:"📊 Markets ready! Now build trading controllers!"},Level9_TradingControllers:{order:9,title:"🎮 Level 9: Trading Controllers",description:"Build OrderController and TradeController with all trading endpoints, order book API, trade history, and real-time updates.",steps:[{step:1,title:"Create Order Controller",instructions:["Generate controller: `nest g controller orders`","Create `POST /api/orders/buy` endpoint","Create `POST /api/orders/sell` endpoint","Create `DELETE /api/orders/:id` endpoint","Create `GET /api/orders/order-book` endpoint"],code:`@Controller('orders')
export class OrderController {
  @Post('buy')
  @UseGuards(JwtAuthGuard)
  async createBuyOrder(@Request() req, @Body() dto: CreateOrderDto) {
    return this.orderService.createOrder(req.user.id, { ...dto, side: 'BUY' });
  }
  
  @Get('order-book')
  async getOrderBook(@Query('marketId') marketId: number) {
    return this.orderService.getOrderBook(marketId);
  }
}`,expectedResult:"Order endpoints working",aiPrompt:"Help me create OrderController in NestJS with buy, sell, cancel, and order book endpoints.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/OrderController.java and help me implement the same."},{step:2,title:"Create Trade Controller",instructions:["Generate controller: `nest g controller trades`","Create `GET /api/trades` endpoint (user history)","Create `GET /api/trades/history` endpoint (market history)","Create `GET /api/trades/admin` endpoint","Add pagination and filtering"],code:`@Controller('trades')
export class TradeController {
  @Get()
  @UseGuards(JwtAuthGuard)
  async getTrades(@Request() req, @Query() filters: TradeFiltersDto) {
    return this.tradeService.getUserTrades(req.user.id, filters);
  }
  
  @Get('history')
  async getMarketHistory(@Query('marketId') marketId: number) {
    return this.tradeService.getMarketHistory(marketId);
  }
}`,expectedResult:"Trade endpoints working",aiPrompt:"Help me create TradeController in NestJS with trade history endpoints and filtering.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/TradeController.java and help me implement the same."}],nextTask:"Level10_WalletController",unlockMessage:"💹 Trading controllers ready! Now build wallet controller!"},Level10_WalletController:{order:10,title:"🎮 Level 10: Wallet Controller",description:"Build WalletController with HD wallet creation, address generation, withdrawal requests, balance queries, and transaction history endpoints.",steps:[{step:1,title:"Create Wallet Controller",instructions:["Generate controller: `nest g controller wallets`","Create `POST /api/wallets` endpoint (create HD wallet)","Create `POST /api/wallets/generate-address` endpoint","Create `GET /api/wallets/balance` endpoint","Create `POST /api/wallets/withdrawal-request` endpoint"],code:`@Controller('wallets')
export class WalletController {
  @Post()
  @UseGuards(JwtAuthGuard)
  async createWallet(@Request() req, @Body() dto: { network: string }) {
    return this.walletService.createHDWallet(req.user.id, dto.network);
  }
  
  @Post('generate-address')
  @UseGuards(JwtAuthGuard)
  async generateAddress(@Request() req, @Body() dto: { network: string }) {
    return this.walletService.generateAddress(req.user.id, dto.network);
  }
  
  @Get('balance')
  @UseGuards(JwtAuthGuard)
  async getBalance(@Request() req) {
    return this.customerWalletService.getAllBalances(req.user.id);
  }
}`,expectedResult:"Wallet endpoints working",aiPrompt:"Help me create WalletController in NestJS with wallet creation, address generation, balance, and withdrawal endpoints.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/WalletController.java and help me implement the same."}],nextTask:"Level11_PaymentGateways",unlockMessage:"💰 Wallet controller ready! Now integrate payment gateways!"},Level11_PaymentGateways:{order:11,title:"🎮 Level 11: Payment Gateway Integration",description:"Build PaymentGateway service with integrations for Vandar, Jibit, NextPay, RayanPay, Sadad, and Zarinpal. Handle deposits, withdrawals, callbacks, and settlements.",steps:[{step:1,title:"Create Payment Gateway Interface",instructions:["Create `IPaymentGateway` interface","Define methods: `deposit()`, `withdraw()`, `verifyCallback()`","Create gateway factory pattern","Set up gateway configuration"],code:`export interface IPaymentGateway {
  deposit(request: GatewayDepositDto, customer: Customer): Promise<GatewayResponseDTO>;
  withdraw(request: GatewayWithdrawDto): Promise<GatewayWithdrawResponseDTO>;
  verifyCallback(data: any): Promise<boolean>;
}

@Injectable()
export class PaymentGatewayFactory {
  getService(gateway: string): IPaymentGateway {
    switch (gateway) {
      case 'VANDAR': return this.vandarService;
      case 'JIBIT': return this.jibitService;
      // ... other gateways
    }
  }
}`,expectedResult:"Payment gateway interface and factory created",aiPrompt:"Help me create a payment gateway interface and factory pattern in NestJS for multiple gateway integrations.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java payment gateway interfaces and help me implement the same."},{step:2,title:"Implement Vandar Gateway",instructions:["Create VandarService implementing IPaymentGateway","Implement deposit method calling Vandar API","Implement callback verification","Handle Vandar-specific response format"],code:`@Injectable()
export class VandarService implements IPaymentGateway {
  async deposit(request: GatewayDepositDto, customer: Customer): Promise<GatewayResponseDTO> {
    const response = await this.httpClient.post('https://ipg.vandar.io/api/v3/transaction', {
      api_key: process.env.VANDAR_API_KEY,
      amount: request.amount,
      callback_url: process.env.VANDAR_CALLBACK_URL,
      mobile_number: customer.phone
    });
    
    return {
      redirectUrl: \`https://ipg.vandar.io/v3/\${response.data.token}\`,
      transactionId: response.data.trans_token
    };
  }
}`,expectedResult:"Vandar integration working",aiPrompt:"Help me implement Vandar payment gateway integration in NestJS with deposit and callback handling.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java VandarService and help me implement the same."},{step:3,title:"Implement Other Gateways",instructions:["Implement JibitService","Implement NextPayService","Implement RayanPayService","Implement SadadService","Implement ZarinpalService"],code:`// Similar implementation for each gateway
@Injectable()
export class JibitService implements IPaymentGateway {
  async deposit(request: GatewayDepositDto, customer: Customer) {
    // Jibit-specific implementation
  }
}`,expectedResult:"All gateways integrated",aiPrompt:"Help me implement multiple payment gateway integrations (Jibit, NextPay, RayanPay, Sadad, Zarinpal) in NestJS.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java payment gateway services and help me implement the same."},{step:4,title:"Implement Callback Handler",instructions:["Create unified callback endpoint","Verify callback signature for each gateway","Update deposit/withdrawal status","Credit customer wallet on successful deposit"],code:`@Post('callback/:gateway')
async handleCallback(@Param('gateway') gateway: string, @Body() data: any) {
  const gatewayService = this.gatewayFactory.getService(gateway);
  const verified = await gatewayService.verifyCallback(data);
  
  if (verified && data.status === 'SUCCESS') {
    await this.depositService.confirmDeposit(data.transactionId);
  }
}`,expectedResult:"Callbacks processed correctly",aiPrompt:"Help me implement a unified callback handler in NestJS for all payment gateways with signature verification.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java callback handlers and help me implement the same."}],nextTask:"Level12_KYCIdentity",unlockMessage:"💳 Payment gateways ready! Now build KYC services!"},Level12_KYCIdentity:{order:12,title:"🎮 Level 12: KYC & Identity Services",description:"Build FinoTechService, JibitService (KYC), BankAccountService, and UserAccountLevelService for identity verification and KYC processing.",steps:[{step:1,title:"Create FinoTech Service",instructions:["Create FinoTechService","Implement `validateNationalID()` method","Implement `cardToIBAN()` method","Implement `verifyBankAccount()` method","Integrate with FinoTech API"],code:`@Injectable()
export class FinoTechService {
  async validateNationalID(nationalId: string, birthDate: string): Promise<boolean> {
    const response = await this.httpClient.post('https://api.finnotech.ir/...', {
      nationalId,
      birthDate
    });
    return response.data.valid;
  }
  
  async cardToIBAN(cardNumber: string): Promise<string> {
    // Call FinoTech API to convert card to IBAN
  }
}`,expectedResult:"FinoTech integration working",aiPrompt:"Help me create a FinoTechService in NestJS for National ID validation and bank account verification.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java FinoTechService and help me implement the same."},{step:2,title:"Create Jibit KYC Service",instructions:["Create JibitService for KYC operations","Implement `matchIBAN()` method","Implement `matchCard()` method","Implement `identitySimilarity()` method"],code:`@Injectable()
export class JibitService {
  async matchIBAN(iban: string, nationalId: string): Promise<boolean> {
    // Call Jibit API for IBAN matching
  }
  
  async identitySimilarity(nationalId: string, firstName: string, lastName: string): Promise<number> {
    // Call Jibit API for identity similarity check
  }
}`,expectedResult:"Jibit KYC integration working",aiPrompt:"Help me create a JibitService in NestJS for KYC operations including IBAN matching and identity verification.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java JibitService KYC methods and help me implement the same."},{step:3,title:"Create Bank Account Service",instructions:["Create BankAccountService","Implement bank account management","Implement IBAN validation","Link bank accounts to customers"],code:`@Injectable()
export class BankAccountService {
  async addBankAccount(customerId: number, iban: string, bankName: string) {
    // Validate IBAN
    // Create bank account record
  }
}`,expectedResult:"Bank account management working",aiPrompt:"Help me create a BankAccountService in NestJS for managing customer bank accounts with IBAN validation.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java BankAccountService and help me implement the same."}],nextTask:"Level13_AdminRBAC",unlockMessage:"🆔 KYC services ready! Now build admin and RBAC!"},Level13_AdminRBAC:{order:13,title:"🎮 Level 13: Admin & RBAC Management",description:"Build AdminService, RoleService, AdminController, and RolesController for admin user management, RBAC, system configuration, and administrative operations.",steps:[{step:1,title:"Create Admin Service",instructions:["Generate service: `nest g service admins`","Create Admin entity repository","Implement admin CRUD operations","Implement admin authentication"],code:`@Injectable()
export class AdminService {
  async createAdmin(dto: CreateAdminDto): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const admin = this.adminRepository.create({
      ...dto,
      password_hash: hashedPassword
    });
    return await this.adminRepository.save(admin);
  }
}`,expectedResult:"Admin service working",aiPrompt:"Help me create an AdminService in NestJS for admin user management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/AdminService.java and help me implement the same."},{step:2,title:"Create Role Service",instructions:["Generate service: `nest g service roles`","Create Role and Privilege entities","Implement role CRUD operations","Implement privilege management","Implement role assignment"],code:`@Injectable()
export class RoleService {
  async assignRole(userId: number, roleId: number) {
    // Assign role to user
  }
  
  async checkPrivilege(userId: number, privilege: string): Promise<boolean> {
    // Check if user has privilege
  }
}`,expectedResult:"Role service working",aiPrompt:"Help me create a RoleService in NestJS for RBAC with role and privilege management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/RoleService.java and help me implement the same."},{step:3,title:"Create Admin and Roles Controllers",instructions:["Generate controllers: `nest g controller admins` and `nest g controller roles`","Create admin endpoints (login, create, list)","Create role endpoints (list, create, assign)","Add proper guards and decorators"],code:`@Controller('admins')
export class AdminController {
  @Post('login')
  async login(@Body() dto: LoginDto) {
    // Admin login
  }
  
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('LIST_ADMINS')
  async getAdmins() {
    return this.adminService.findAll();
  }
}`,expectedResult:"Admin and role endpoints working",aiPrompt:"Help me create AdminController and RolesController in NestJS with proper RBAC guards.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java AdminController and RolesController and help me implement the same."}],nextTask:"Level14_OTCExchange",unlockMessage:"👨‍💼 Admin system ready! Now build OTC exchange!"},Level14_OTCExchange:{order:14,title:"🎮 Level 14: OTC Exchange",description:"Build ExchangeActionService and ExchangeActionController for over-the-counter exchange operations with buy/sell orders and admin approval workflow.",steps:[{step:1,title:"Create Exchange Action Service",instructions:["Generate service: `nest g service exchange`","Create ExchangeOrder entity","Implement OTC buy order creation","Implement OTC sell order creation"],code:`@Injectable()
export class ExchangeActionService {
  async createBuyOrder(customerId: number, dto: ExchangeBuyDto): Promise<ExchangeOrder> {
    // Validate balance
    // Lock funds
    // Create OTC buy order
  }
  
  async createSellOrder(customerId: number, dto: ExchangeSellDto): Promise<ExchangeOrder> {
    // Validate coins
    // Lock coins
    // Create OTC sell order
  }
}`,expectedResult:"OTC orders can be created",aiPrompt:"Help me create an ExchangeActionService in NestJS for OTC (over-the-counter) exchange operations.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ExchangeActionService and help me implement the same."},{step:2,title:"Implement Order Approval",instructions:["Implement `approveOrder()` method","Transfer funds between parties","Update order status","Notify users"],code:`async approveOrder(orderId: number): Promise<ExchangeOrder> {
  const order = await this.exchangeOrderRepository.findOne({ where: { id: orderId } });
  
  // Transfer funds
  if (order.side === 'BUY') {
    await this.customerWalletService.debitBalance(order.customerId, order.amount, 'TOMAN');
    await this.customerWalletService.creditBalance(order.customerId, order.coinAmount, order.coin);
  } else {
    await this.customerWalletService.debitBalance(order.customerId, order.coinAmount, order.coin);
    await this.customerWalletService.creditBalance(order.customerId, order.amount, 'TOMAN');
  }
  
  order.status = 'APPROVED';
  return await this.exchangeOrderRepository.save(order);
}`,expectedResult:"Orders can be approved and funds transferred",aiPrompt:"Help me implement OTC order approval logic in NestJS with fund transfers.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OTC approval logic and help me implement the same."},{step:3,title:"Create Exchange Controller",instructions:["Generate controller: `nest g controller exchange`","Create `POST /api/exchange/buy` endpoint","Create `POST /api/exchange/sell` endpoint","Create `POST /api/exchange/approve-order` endpoint (admin only)"],code:`@Controller('exchange')
export class ExchangeActionController {
  @Post('buy')
  @UseGuards(JwtAuthGuard)
  async createBuyOrder(@Request() req, @Body() dto: ExchangeBuyDto) {
    return this.exchangeService.createBuyOrder(req.user.id, dto);
  }
  
  @Post('approve-order')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('APPROVE_EXCHANGE')
  async approveOrder(@Body() dto: { orderId: number }) {
    return this.exchangeService.approveOrder(dto.orderId);
  }
}`,expectedResult:"Exchange endpoints working",aiPrompt:"Help me create ExchangeActionController in NestJS with OTC buy, sell, and approval endpoints.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java and help me implement the same."}],nextTask:"Level15_SupportContent",unlockMessage:"🔄 OTC exchange ready! Now build support and content!"},Level15_SupportContent:{order:15,title:"🎮 Level 15: Support & Content Management",description:"Build TicketService, BlogService, FileService, TicketController, and BlogController for customer support and content management.",steps:[{step:1,title:"Create Ticket Service",instructions:["Generate service: `nest g service tickets`","Create Ticket and TicketMessage entities","Implement ticket CRUD operations","Implement message handling with file attachments"],code:`@Injectable()
export class TicketService {
  async createTicket(customerId: number, dto: CreateTicketDto): Promise<Ticket> {
    const ticket = this.ticketRepository.create({
      customerId,
      ...dto,
      status: 'OPEN'
    });
    return await this.ticketRepository.save(ticket);
  }
  
  async addMessage(ticketId: number, customerId: number, message: string, file?: Express.Multer.File) {
    // Add message to ticket
    // Handle file upload if provided
  }
}`,expectedResult:"Ticket service working",aiPrompt:"Help me create a TicketService in NestJS for customer support ticket management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/TicketService.java and help me implement the same."},{step:2,title:"Create Blog Service",instructions:["Generate service: `nest g service blog`","Create BlogPost entity","Implement blog CRUD operations","Implement publishing workflow","Implement SEO and image handling"],code:`@Injectable()
export class BlogService {
  async createPost(dto: CreateBlogDto, authorId: number): Promise<BlogPost> {
    const slug = this.generateSlug(dto.title);
    const post = this.blogRepository.create({
      ...dto,
      slug,
      authorId,
      status: 'DRAFT'
    });
    return await this.blogRepository.save(post);
  }
  
  async publish(id: number): Promise<BlogPost> {
    const post = await this.blogRepository.findOne({ where: { id } });
    post.status = 'PUBLISHED';
    post.publishedAt = new Date();
    return await this.blogRepository.save(post);
  }
}`,expectedResult:"Blog service working",aiPrompt:"Help me create a BlogService in NestJS for content management with publishing workflow.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/BlogService.java and help me implement the same."},{step:3,title:"Create File Service",instructions:["Create FileService","Implement file upload handling","Implement file validation (type, size)","Implement file storage (local or cloud)"],code:`@Injectable()
export class FileService {
  async saveFile(file: Express.Multer.File, path: string): Promise<string> {
    // Validate file
    // Save to storage
    // Return file URL
  }
  
  async deleteFile(path: string): Promise<void> {
    // Delete file from storage
  }
}`,expectedResult:"File service working",aiPrompt:"Help me create a FileService in NestJS for file upload, storage, and management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java FileService and help me implement the same."},{step:4,title:"Create Ticket and Blog Controllers",instructions:["Generate controllers: `nest g controller tickets` and `nest g controller blog`","Create ticket endpoints (create, list, add message)","Create blog endpoints (list, create, update, publish)","Add file upload support"],code:`@Controller('tickets')
export class TicketController {
  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async createTicket(@Request() req, @Body() dto: CreateTicketDto, @UploadedFile() file?: Express.Multer.File) {
    return this.ticketService.createTicket(req.user.id, dto, file);
  }
}`,expectedResult:"Ticket and blog endpoints working",aiPrompt:"Help me create TicketController and BlogController in NestJS with file upload support.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java TicketController and BlogController and help me implement the same."}],nextTask:"Level16_Promotional",unlockMessage:"🎫 Support system ready! Now build promotional features!"},Level16_Promotional:{order:16,title:"🎮 Level 16: Promotional Features",description:"Build GiftCodeService, ReferralCodeService, GiftCodeController, and ReferralCodeController for gift codes, referral programs, and promotional campaigns.",steps:[{step:1,title:"Create Gift Code Service",instructions:["Generate service: `nest g service gift-codes`","Create GiftCode entity","Implement gift code generation","Implement gift code validation","Implement gift code redemption"],code:`@Injectable()
export class GiftCodeService {
  async generateCode(prefix?: string): Promise<string> {
    // Generate unique code
  }
  
  async validateCode(code: string): Promise<{ valid: boolean; message?: string }> {
    // Validate code
  }
  
  async redeemCode(code: string, customer: Customer): Promise<GiftCodeRedemptionResult> {
    // Validate and redeem
    // Credit wallet
  }
}`,expectedResult:"Gift code service working",aiPrompt:"Help me create a GiftCodeService in NestJS for promotional gift code management.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/GiftCodeService.java and help me implement the same."},{step:2,title:"Create Referral Code Service",instructions:["Generate service: `nest g service referrals`","Create ReferralCode and ReferralRelationship entities","Implement referral code generation","Implement referral tracking","Implement reward calculation and distribution"],code:`@Injectable()
export class ReferralCodeService {
  async generateCode(customer: Customer): Promise<ReferralCode> {
    // Generate unique referral code
  }
  
  async trackReferral(code: string, referredCustomer: Customer): Promise<ReferralRelationship> {
    // Create referral relationship
    // Credit initial reward
  }
  
  async calculateReward(referredCustomerId: number, activityType: string, amount: number): Promise<number> {
    // Calculate reward based on activity
  }
}`,expectedResult:"Referral service working",aiPrompt:"Help me create a ReferralCodeService in NestJS for referral program management with reward tracking.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/ReferralCodeService.java and help me implement the same."},{step:3,title:"Create Gift and Referral Controllers",instructions:["Generate controllers: `nest g controller gift-codes` and `nest g controller referrals`","Create gift code endpoints (create, redeem, list)","Create referral endpoints (create, use, stats)","Add proper guards"],code:`@Controller('gift-code')
export class GiftCodeController {
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('CREATE_GIFT_CODE')
  async createGiftCode(@Body() dto: CreateGiftCodeDto) {
    return this.giftCodeService.create(dto);
  }
  
  @Put('use')
  @UseGuards(JwtAuthGuard)
  async redeemGiftCode(@Request() req, @Body() dto: { code: string }) {
    return this.giftCodeService.redeem(dto.code, req.user);
  }
}`,expectedResult:"Gift and referral endpoints working",aiPrompt:"Help me create GiftCodeController and ReferralCodeController in NestJS with proper endpoints.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java GiftCodeController and ReferralCodeController and help me implement the same."}],nextTask:"Level17_AdditionalServices",unlockMessage:"🎁 Promotional features ready! Now add supporting services!"},Level17_AdditionalServices:{order:17,title:"🎮 Level 17: Additional Services",description:"Build ExchangeSettingService, CustomerTokenService, AlarmService, and other supporting services for system configuration and monitoring.",steps:[{step:1,title:"Create Exchange Setting Service",instructions:["Create ExchangeSettingService","Implement exchange configuration management","Store settings in database","Provide settings API"],code:`@Injectable()
export class ExchangeSettingService {
  async getSetting(key: string): Promise<any> {
    const setting = await this.settingRepository.findOne({ where: { key } });
    return setting?.value;
  }
  
  async updateSetting(key: string, value: any) {
    // Update or create setting
  }
}`,expectedResult:"Exchange settings can be managed",aiPrompt:"Help me create an ExchangeSettingService in NestJS for managing exchange configuration settings.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ExchangeSettingService and help me implement the same."},{step:2,title:"Create Customer Token Service",instructions:["Create CustomerTokenService","Implement token management for customers","Handle token generation and validation","Store tokens securely"],code:`@Injectable()
export class CustomerTokenService {
  async generateToken(customerId: number, purpose: string): Promise<string> {
    // Generate secure token
  }
  
  async validateToken(token: string): Promise<boolean> {
    // Validate token
  }
}`,expectedResult:"Token service working",aiPrompt:"Help me create a CustomerTokenService in NestJS for managing customer tokens.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerTokenService and help me implement the same."},{step:3,title:"Create Alarm Service",instructions:["Create AlarmService","Implement system alerts and monitoring","Create alarm triggers","Send notifications for alarms"],code:`@Injectable()
export class AlarmService {
  async createAlarm(type: string, message: string, severity: string) {
    // Create alarm
    // Send notifications
  }
  
  async checkSystemHealth() {
    // Check system health
    // Trigger alarms if needed
  }
}`,expectedResult:"Alarm service working",aiPrompt:"Help me create an AlarmService in NestJS for system monitoring and alerts.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java AlarmService and help me implement the same."}],nextTask:"Level18_TestingDocumentation",unlockMessage:"⚙️ Additional services ready! Now test and document everything!"},Level18_TestingDocumentation:{order:18,title:"🎮 Level 18: Testing & Documentation",description:"Write comprehensive unit tests, integration tests, API documentation, and deployment guides for the entire system.",steps:[{step:1,title:"Write Unit Tests",instructions:["Install testing dependencies: `npm install --save-dev @nestjs/testing`","Write unit tests for all services","Mock dependencies","Test edge cases and error handling"],code:`describe('OrderService', () => {
  let service: OrderService;
  
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        OrderService,
        { provide: getRepositoryToken(Order), useValue: mockRepository }
      ]
    }).compile();
    
    service = module.get<OrderService>(OrderService);
  });
  
  it('should create an order', async () => {
    // Test order creation
  });
});`,expectedResult:"Unit tests passing",aiPrompt:"Help me write comprehensive unit tests in NestJS for all services with proper mocking.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write unit tests equivalent to the Java JUnit tests."},{step:2,title:"Write Integration Tests",instructions:["Write integration tests for all controllers","Test API endpoints","Test database interactions","Test authentication and authorization"],code:`describe('OrderController (e2e)', () => {
  let app: INestApplication;
  
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();
    
    app = moduleFixture.createNestApplication();
    await app.init();
  });
  
  it('/orders/buy (POST)', () => {
    return request(app.getHttpServer())
      .post('/orders/buy')
      .set('Authorization', 'Bearer token')
      .send({ marketId: 1, amount: 100, price: 50000 })
      .expect(201);
  });
});`,expectedResult:"Integration tests passing",aiPrompt:"Help me write integration tests in NestJS for all API endpoints with proper test setup.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write integration tests equivalent to the Java Spring Boot tests."},{step:3,title:"Complete API Documentation",instructions:["Ensure all endpoints have Swagger decorators","Add detailed descriptions and examples","Document request/response DTOs","Add authentication requirements"],code:`@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  @ApiOperation({ summary: 'Create a buy order' })
  @ApiResponse({ status: 201, description: 'Order created successfully' })
  @ApiBearerAuth()
  @Post('buy')
  async createBuyOrder(@Body() dto: CreateOrderDto) {
    // ...
  }
}`,expectedResult:"Complete Swagger documentation",aiPrompt:"Help me complete Swagger/OpenAPI documentation in NestJS for all endpoints with proper decorators.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me document all endpoints similar to the Java Swagger annotations."},{step:4,title:"Create Deployment Guide",instructions:["Document environment variables","Create Docker configuration","Document database migration process","Create deployment checklist"],code:`# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["node", "dist/main"]`,expectedResult:"Deployment guide complete",aiPrompt:"Help me create a deployment guide for the NestJS cryptocurrency exchange with Docker and environment configuration.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create deployment documentation."}],nextTask:null,unlockMessage:"🎉 Congratulations! Your cryptocurrency exchange is complete! 🚀"},AuthModule:{order:2,title:"🎮 Level 2: Authentication Module",description:"Build JWT authentication and guards - Required for all protected routes.",steps:[{step:1,title:"Create Auth Module Structure",instructions:["Generate auth module: `nest g module auth`","Generate auth service: `nest g service auth`","Generate auth controller: `nest g controller auth`","Create `src/auth/strategies/jwt.strategy.ts`"],code:`nest g module auth
nest g service auth
nest g controller auth`,expectedResult:"Auth module, service, and controller files created",aiPrompt:"Help me create the authentication module structure for a NestJS cryptocurrency exchange. I need to generate the auth module, service, and controller using NestJS CLI, and create a JWT strategy file. Show me the commands and the file structure."},{step:2,title:"Implement JWT Strategy",instructions:["In `jwt.strategy.ts`, extend `PassportStrategy(Strategy)`","Add `validate()` method that returns user payload","Import `PassportModule` and `JwtModule` in auth module","Configure JWT secret from environment"],code:`import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}`,expectedResult:"JWT strategy validates tokens correctly",aiPrompt:"Help me implement a JWT authentication strategy for NestJS using Passport. I need to create a JwtStrategy class that validates JWT tokens from the Authorization header, extracts the payload, and returns user information. Show me the complete implementation with proper TypeScript types."},{step:3,title:"Create Auth Guards",instructions:["Create `src/auth/guards/jwt-auth.guard.ts`","Extend `AuthGuard('jwt')`","Create `src/auth/guards/roles.guard.ts` for RBAC","Create `src/common/decorators/roles.decorator.ts`"],code:`import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}`,expectedResult:"Guards protect routes from unauthorized access",aiPrompt:"Help me create authentication guards for NestJS. I need a JWT auth guard that extends AuthGuard('jwt'), a roles guard for RBAC (Role-Based Access Control), and a roles decorator. Show me how to implement these guards and how to use them to protect routes."},{step:4,title:"Implement Login Endpoint",instructions:["In `auth.service.ts`, create `validateUser()` method","Create `login()` method that returns JWT token","In `auth.controller.ts`, add `POST /auth/login` endpoint","Use `@UseGuards(LocalAuthGuard)` if using local strategy"],code:`@Post('login')
async login(@Body() loginDto: LoginDto) {
  return this.authService.login(loginDto);
}`,expectedResult:"Login endpoint returns JWT token",aiPrompt:"Help me implement a login endpoint for a NestJS cryptocurrency exchange. I need to validate user credentials, generate a JWT token, and return it. Show me how to implement the login method in the service and the POST /auth/login endpoint in the controller with proper DTOs."},{step:5,title:"Set Up 2FA Module",instructions:["Install: `npm install speakeasy qrcode`","Create `src/auth/two-factor/two-factor.service.ts`","Implement `generateSecret()` and `verifyToken()` methods","Add 2FA endpoints: `/auth/2fa/generate`, `/auth/2fa/verify`"],code:"npm install speakeasy qrcode",expectedResult:"2FA secret generation and verification working",aiPrompt:"Help me implement two-factor authentication (2FA) for a NestJS application using Google Authenticator. I need to generate a secret, create a QR code, and verify TOTP tokens. Show me how to use speakeasy and qrcode libraries to implement this."}],nextTask:"DatabaseSetup",unlockMessage:"🔐 Authentication ready! Now set up your database."},DatabaseSetup:{order:3,title:"🎮 Level 3: Database Setup",description:"Configure TypeORM and create all 81 entities from the original schema.",steps:[{step:1,title:"Configure TypeORM in App Module",aiPrompt:"Help me configure TypeORM in a NestJS application for a cryptocurrency exchange. I need to set up the database connection using MySQL, configure it in the AppModule with proper imports, and set up environment variables for database credentials.",instructions:["Import `TypeOrmModule.forRoot()` in `app.module.ts`","Add database connection config from environment","Set `synchronize: false` for production (use migrations)","Set `autoLoadEntities: true`"],code:`TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: false,
})`,expectedResult:"Database connection established"},{step:2,title:"Create Identity Entities (Customers, Admins, Roles)",instructions:["Create `src/entities/customer.entity.ts`","Create `src/entities/admin.entity.ts`","Create `src/entities/role.entity.ts`","Add relationships: Customer -> Role (Many-to-One)","Copy column definitions from original schema.sql"],code:`@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;
  
  // ... more columns
}`,expectedResult:"Identity entities created with proper relationships"},{step:3,title:"Create Trading Entities (Orders, Trades, Markets)",instructions:["Create `src/entities/order.entity.ts`","Create `src/entities/trade.entity.ts`","Create `src/entities/market.entity.ts`","Add relationships: Order -> Market, Trade -> Order"],code:`@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @Column({ type: 'decimal', precision: 20, scale: 8 })
  price: number;
  
  // ... more columns
}`,expectedResult:"Trading entities with relationships"},{step:4,title:"Create Wallet Entities",instructions:["Create `src/entities/hd-wallet.entity.ts`","Create `src/entities/customer-wallet.entity.ts`","Add relationships: CustomerWallet -> Customer, CustomerWallet -> Coin"],code:`@Entity('hd_wallet')
export class HdWallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  mnemonic: string;
  
  // ... more columns
}`,expectedResult:"Wallet entities created"},{step:5,title:"Create Database Migrations",instructions:["Install TypeORM CLI: `npm install -D typeorm`","Create migration: `typeorm migration:create -n InitialSchema`","Copy all CREATE TABLE statements from schema.sql","Run migration: `npm run typeorm migration:run`"],code:"npm run typeorm migration:run",expectedResult:"All tables created in database"}],nextTask:"CustomerController",unlockMessage:"💾 Database ready! Now build the Customer Controller."},CustomerController:{order:4,title:"🎮 Level 4: Customer Controller",description:"Build user registration, login, profile, KYC, and 2FA endpoints.",steps:[{step:1,title:"Create Customer Module",aiPrompt:"Help me create a Customer Controller for a NestJS cryptocurrency exchange. I need endpoints for user registration, login, profile management, KYC submission, and 2FA. Show me how to generate the module, service, and controller using NestJS CLI, and set up the basic structure.",instructions:["Generate module: `nest g module customers`","Generate service: `nest g service customers`","Generate controller: `nest g controller customers`","Import TypeOrmModule.forFeature([Customer])"],code:`nest g module customers
nest g service customers
nest g controller customers`,expectedResult:"Customer module structure created",aiPrompt:"Help me create a Customer Controller for a NestJS cryptocurrency exchange. I need endpoints for user registration, login, profile management, KYC submission, and 2FA. Show me how to generate the module, service, and controller using NestJS CLI, and set up the basic structure."},{step:2,title:"Implement Registration Endpoint",instructions:["Create `create-customer.dto.ts` with validation","In service, hash password using bcrypt","Create customer in database","Return customer data (without password)"],code:`@Post('register')
async register(@Body() createCustomerDto: CreateCustomerDto) {
  return this.customersService.create(createCustomerDto);
}`,expectedResult:"POST /customers/register creates new user"},{step:3,title:"Implement Login Endpoint",instructions:["Create `login.dto.ts` with email and password","Validate credentials in service","Return JWT token using AuthService","Add login history entry"],code:`@Post('login')
async login(@Body() loginDto: LoginDto) {
  return this.authService.login(loginDto);
}`,expectedResult:"POST /customers/login returns JWT token"},{step:4,title:"Implement Profile Endpoint",instructions:["Create `GET /customers/profile` endpoint","Use `@UseGuards(JwtAuthGuard)`","Get user from `@Request()` decorator","Return customer data"],code:`@Get('profile')
@UseGuards(JwtAuthGuard)
async getProfile(@Request() req) {
  return this.customersService.findOne(req.user.userId);
}`,expectedResult:"GET /customers/profile returns user data"},{step:5,title:"Implement KYC Endpoint",instructions:["Create `POST /customers/kyc` endpoint","Accept file uploads (use `@UseInterceptors(FileInterceptor())`)","Save files to storage","Update customer KYC status"],code:`@Post('kyc')
@UseGuards(JwtAuthGuard)
@UseInterceptors(FileInterceptor('document'))
async submitKyc(@Request() req, @UploadedFile() file) {
  return this.customersService.submitKyc(req.user.userId, file);
}`,expectedResult:"KYC documents can be uploaded"},{step:6,title:"Implement 2FA Endpoints",instructions:["Create `POST /customers/2fa/enable`","Create `POST /customers/2fa/verify`","Generate QR code for Google Authenticator","Store 2FA secret in customer record"],code:`@Post('2fa/enable')
@UseGuards(JwtAuthGuard)
async enable2FA(@Request() req) {
  return this.customersService.enable2FA(req.user.userId);
}`,expectedResult:"2FA can be enabled and verified"}],nextTask:"OrderController",unlockMessage:"👤 Customer management complete! Now build the trading engine."},OrderController:{order:5,title:"🎮 Level 5: Order Controller",description:"Build order creation, cancellation, and order book endpoints.",steps:[{step:1,title:"Create Order Module",aiPrompt:"Help me create an Order Controller for a NestJS cryptocurrency exchange. I need endpoints to create buy/sell orders, cancel orders, and get the order book. Show me how to structure the controller with proper DTOs, guards, and service integration.",instructions:["Generate module: `nest g module orders`","Generate service and controller","Import OrderService and MarketService"],code:`nest g module orders
nest g service orders
nest g controller orders`,expectedResult:"Order module created"},{step:2,title:"Implement Create Buy Order",instructions:["Create `create-buy-order.dto.ts`","Validate: market_id, price, amount","Check user balance","Lock balance for order","Create order in database"],code:`@Post('buy')
@UseGuards(JwtAuthGuard)
async createBuyOrder(@Request() req, @Body() dto: CreateBuyOrderDto) {
  return this.ordersService.createBuyOrder(req.user.userId, dto);
}`,expectedResult:"POST /orders/buy creates buy order"},{step:3,title:"Implement Create Sell Order",instructions:["Similar to buy order","Check user has enough coins","Lock coin balance","Create sell order"],code:`@Post('sell')
@UseGuards(JwtAuthGuard)
async createSellOrder(@Request() req, @Body() dto: CreateSellOrderDto) {
  return this.ordersService.createSellOrder(req.user.userId, dto);
}`,expectedResult:"POST /orders/sell creates sell order"},{step:4,title:"Implement Cancel Order",instructions:["Create `DELETE /orders/:id`","Verify order belongs to user","Unlock locked balance","Update order status to 'cancelled'"],code:`@Delete(':id')
@UseGuards(JwtAuthGuard)
async cancelOrder(@Request() req, @Param('id') id: number) {
  return this.ordersService.cancelOrder(req.user.userId, id);
}`,expectedResult:"Orders can be cancelled"},{step:5,title:"Implement Order Book Endpoint",instructions:["Create `GET /orders/book/:marketId`","Get all active buy orders (sorted by price DESC)","Get all active sell orders (sorted by price ASC)","Return formatted order book"],code:`@Get('book/:marketId')
async getOrderBook(@Param('marketId') marketId: number) {
  return this.ordersService.getOrderBook(marketId);
}`,expectedResult:"Order book displays buy/sell orders"}],nextTask:"OrderService",unlockMessage:"📊 Order endpoints ready! Now build the matching engine."},OrderService:{order:6,title:"🎮 Level 6: Order Matching Engine",description:"The heart of the exchange - match buy and sell orders automatically.",steps:[{step:1,title:"Implement Order Matching Logic",aiPrompt:"Help me implement an order matching engine for a NestJS cryptocurrency exchange. When a new order is created, I need to find matching orders (same market, opposite type, compatible price), prioritize by best price then time, and execute trades. This is the core trading engine functionality.",instructions:["When new order created, check for matching orders","Match by: same market, opposite type, price compatibility","Priority: price (best first), then time (first in, first out)","Execute trades when matched"],code:`async matchOrder(newOrder: Order): Promise<Trade[]> {
  const oppositeOrders = await this.findMatchingOrders(newOrder);
  const trades = [];
  
  for (const oppositeOrder of oppositeOrders) {
    const trade = await this.executeTrade(newOrder, oppositeOrder);
    trades.push(trade);
    
    if (newOrder.remaining_amount === 0) break;
  }
  
  return trades;
}`,expectedResult:"Orders match automatically when created"},{step:2,title:"Implement Trade Execution",instructions:["Calculate trade amount (min of both orders)","Calculate trade price (use maker order price)","Create Trade entity","Update order remaining amounts","Update user balances"],code:`async executeTrade(buyOrder: Order, sellOrder: Order): Promise<Trade> {
  const amount = Math.min(buyOrder.remaining_amount, sellOrder.remaining_amount);
  const price = sellOrder.price; // Maker price
  
  // Create trade
  // Update balances
  // Update orders
  
  return trade;
}`,expectedResult:"Trades execute and balances update"},{step:3,title:"Implement Balance Locking",instructions:["When order created, lock user balance","Store locked amount in order","When order filled/cancelled, unlock balance","Prevent double-spending"],code:`async lockBalance(userId: number, amount: number, currency: string) {
  const wallet = await this.walletService.getWallet(userId, currency);
  
  if (wallet.available_balance < amount) {
    throw new BadRequestException('Insufficient balance');
  }
  
  wallet.available_balance -= amount;
  wallet.locked_balance += amount;
  await this.walletService.save(wallet);
}`,expectedResult:"Balances lock correctly"},{step:4,title:"Implement Scheduled Tasks",instructions:["Install `@nestjs/schedule`: `npm install @nestjs/schedule`","Create `order-expiration.task.ts`","Use `@Cron('*/60 * * * * *')` to run every minute","Cancel expired orders"],code:`@Injectable()
export class OrderExpirationTask {
  @Cron('*/60 * * * * *')
  async handleExpiredOrders() {
    await this.orderService.cancelExpiredOrders();
  }
}`,expectedResult:"Expired orders cancel automatically"}],nextTask:"WalletService",unlockMessage:"⚡ Matching engine working! Now build wallet management."},WalletService:{order:7,title:"🎮 Level 7: Wallet Service",description:"Build HD wallet management, address generation, and blockchain integration.",steps:[{step:1,title:"Create Wallet Module",instructions:["Generate module: `nest g module wallets`","Generate service: `nest g service wallets`","Import ApieService for blockchain operations","Set up HTTP client for Apie API calls"],code:`nest g module wallets
nest g service wallets`,expectedResult:"Wallet module structure created"},{step:2,title:"Implement HD Wallet Creation",instructions:["Create `createHDWallet()` method","Call ApieService to create wallet on blockchain","Store mnemonic securely (encrypted)","Save wallet to database (hd_wallet table)","Return wallet response with encrypted mnemonic"],code:`async createHDWallet(request: CreateHDWalletRequest): Promise<WalletResponseHalfDTO> {
  const apieResponse = await this.apieService.createHDWallet(request, network);
  // Encrypt mnemonic
  // Save to database
  return walletResponse;
}`,expectedResult:"HD wallets can be created for users"},{step:3,title:"Implement Address Generation",instructions:["Create `generateAddressForWallet()` method","Call ApieService to generate new address","Store address in database","Generate QR code for address","Return address with QR code"],code:`async generateAddressForWallet(request): Promise<BlockChainAddressHalfDTO> {
  const address = await this.apieService.generateHDWalletAddress(...);
  // Save address
  // Generate QR code
  return addressDTO;
}`,expectedResult:"New addresses can be generated for deposits"},{step:4,title:"Implement Withdrawal Requests",instructions:["Create `createWithdrawalRequest()` method","Validate user has sufficient balance","Require 2FA/OTP verification","Create withdrawal request in database","Call ApieService to create transaction","Update wallet balance"],code:`async createWithdrawalRequest(request, customer): Promise<WithdrawalResponseDTO> {
  // Validate balance
  // Verify OTP
  // Create transaction via ApieService
  // Update balances
  return withdrawalResponse;
}`,expectedResult:"Users can request withdrawals with 2FA"},{step:5,title:"Implement Balance Queries",instructions:["Create methods for custodial and P2P balances","Query customer_wallet table","Calculate total balance (custodial + P2P)","Return formatted balance response"],code:`async getTotalBalance(username: string): Promise<TotalBalances> {
  const wallets = await this.customerWalletService.findByCustomer(customer);
  // Sum custodial_credit + p2p_credit
  return totalBalances;
}`,expectedResult:"Balance queries return accurate amounts"}],nextTask:"ApieService",unlockMessage:"💼 Wallet management ready! Now integrate with blockchain."},ApieService:{order:8,title:"🎮 Level 8: Apie Blockchain Service",description:"Multi-chain blockchain provider integration for wallet and transaction operations.",steps:[{step:1,title:"Set Up HTTP Client",instructions:["Install axios: `npm install axios`","Create `src/services/apie/apie-client.service.ts`","Configure base URL from environment","Add authentication headers","Implement error handling and retries"],code:"npm install axios",expectedResult:"HTTP client configured for Apie API"},{step:2,title:"Implement Multi-Chain Wallet Creation",instructions:["Create `createHDWallet()` method","Support networks: ETH, TRON, BTC, XRP, XLM, BSC, Dash","Make API call to Apie: `POST /wallet/create`","Handle network-specific parameters","Return wallet response with mnemonic"],code:`async createHDWallet(request, cryptoNetwork): Promise<CreateWalletResponse> {
  const response = await this.httpClient.post(\`/wallet/create\`, {
    network: cryptoNetwork,
    ...request
  });
  return response.data;
}`,expectedResult:"HD wallets created for all supported chains"},{step:3,title:"Implement Address Generation",instructions:["Create `generateHDWalletAddress()` method","Call Apie API: `POST /wallet/address/generate`","Pass wallet name and index","Return generated address"],code:`async generateHDWalletAddress(network, walletName, index): Promise<string> {
  const response = await this.httpClient.post(\`/wallet/address/generate\`, {
    network,
    walletName,
    index
  });
  return response.data.address;
}`,expectedResult:"Addresses generated for all chains"},{step:4,title:"Implement Balance Queries",instructions:["Create `getWalletBalance()` method","Call Apie API: `GET /wallet/balance`","Support all network types","Handle different response formats per chain","Return normalized balance response"],code:`async getWalletBalance(request, network): Promise<BtcBaseWalletBalanceResponse> {
  const response = await this.httpClient.get(\`/wallet/balance\`, {
    params: { network, ...request }
  });
  return this.normalizeBalance(response.data, network);
}`,expectedResult:"Balance queries work for all chains"},{step:5,title:"Implement Transaction Creation",instructions:["Create `createRawTransaction()` method","Call Apie API: `POST /transaction/create`","Handle network-specific transaction formats","Sign transaction (if required)","Return transaction hash"],code:`async createRawTransaction(request, network): Promise<TransactionResponseDTO> {
  const response = await this.httpClient.post(\`/transaction/create\`, {
    network,
    ...request
  });
  return response.data;
}`,expectedResult:"Transactions created and broadcasted"}],nextTask:"WalletController",unlockMessage:"⛓️ Blockchain integration complete! Now build wallet endpoints."},WalletController:{order:9,title:"🎮 Level 9: Wallet Controller",description:"Build wallet endpoints for HD wallet creation, addresses, and withdrawals.",steps:[{step:1,title:"Create Wallet Controller",instructions:["Generate controller: `nest g controller wallets`","Import WalletService","Add JWT auth guard to all endpoints","Set up Swagger documentation"],code:"nest g controller wallets",expectedResult:"Wallet controller created"},{step:2,title:"Implement Create HD Wallet Endpoint",instructions:["Create `POST /api/wallets` endpoint","Use `@UseGuards(JwtAuthGuard)`","Require privilege: `CREATE_WALLET`","Call WalletService.createHDWallet()","Return wallet response (without mnemonic)"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_WALLET')
async createHDWallet(@Request() req, @Body() dto: CreateHDWalletDto) {
  return this.walletService.createHDWallet(dto, req.user);
}`,expectedResult:"POST /api/wallets creates HD wallet"},{step:3,title:"Implement Generate Address Endpoint",instructions:["Create `POST /api/wallets/generate-address`","Require privilege: `CREATE_WALLET_ADDRESS`","Call WalletService.generateAddressForWallet()","Return address with QR code"],code:`@Post('generate-address')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_WALLET_ADDRESS')
async generateAddress(@Request() req, @Body() dto: GenerateAddressDto) {
  return this.walletService.generateAddressForWallet(dto, req.user);
}`,expectedResult:"New addresses can be generated via API"},{step:4,title:"Implement Withdrawal Request Endpoint",instructions:["Create `POST /api/wallets/withdrawal-request`","Require privilege: `AUTHORIZED_USER`","Validate OTP in request body","Call WalletService.createWithdrawalRequest()","Return withdrawal request details"],code:`@Post('withdrawal-request')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('AUTHORIZED_USER')
async createWithdrawal(@Request() req, @Body() dto: WithdrawalRequestDto) {
  return this.walletService.createWithdrawalRequest(dto, req.user);
}`,expectedResult:"Withdrawal requests can be created"},{step:5,title:"Implement Balance Endpoint",instructions:["Create `GET /api/wallets/balance`","Require privilege: `USER`","Call WalletService.getTotalBalance()","Return custodial and P2P balances"],code:`@Get('balance')
@UseGuards(JwtAuthGuard)
async getBalance(@Request() req) {
  return this.walletService.getTotalBalance(req.user.email);
}`,expectedResult:"Balance endpoint returns user balances"}],nextTask:"TradeService",unlockMessage:"💰 Wallet endpoints ready! Now build trade execution."},TradeService:{order:10,title:"🎮 Level 10: Trade Service",description:"Build trade execution, history, and statistics service.",steps:[{step:1,title:"Create Trade Module",instructions:["Generate module: `nest g module trades`","Generate service: `nest g service trades`","Import OrderService and WalletService","Set up TypeORM repository for Trade entity"],code:`nest g module trades
nest g service trades`,expectedResult:"Trade module created"},{step:2,title:"Implement Trade Execution",instructions:["Create `executeTrade()` method","Calculate trade amount (min of both orders)","Use maker order price","Create Trade entity","Update buyer and seller balances","Update order remaining amounts"],code:`async executeTrade(buyOrder: Order, sellOrder: Order, amount: number, price: number): Promise<Trade> {
  const trade = this.tradeRepository.create({
    buyerOrder: buyOrder,
    sellerOrder: sellOrder,
    amount,
    price,
    // ... more fields
  });
  
  // Update balances
  await this.updateBalances(buyOrder.customer, sellOrder.customer, amount, price);
  
  return await this.tradeRepository.save(trade);
}`,expectedResult:"Trades execute and balances update"},{step:3,title:"Implement Trade History Queries",instructions:["Create `getTrades()` method with filters","Support pagination","Filter by user, market, date range","Return formatted TradeFullDTO"],code:`async getTrades(filters: TradeFilters): Promise<PageDTO<TradeFullDTO>> {
  const query = this.tradeRepository.createQueryBuilder('trade')
    .where('1=1');
    
  // Apply filters
  if (filters.userId) query.andWhere('trade.buyerId = :userId OR trade.sellerId = :userId', { userId: filters.userId });
  if (filters.marketId) query.andWhere('trade.marketId = :marketId', { marketId: filters.marketId });
  
  return this.paginate(query, filters.page, filters.size);
}`,expectedResult:"Trade history queries work with filters"},{step:4,title:"Implement Market Trade History",instructions:["Create `getLastTradesHistory()` method","Get recent trades for a market","Limit to last N trades (e.g., 50)","Order by timestamp DESC","Return TradeHistoryInMarketDTO"],code:`async getLastTradesHistory(marketType: string): Promise<TradeHistoryInMarketDTO[]> {
  return this.tradeRepository.find({
    where: { market: { type: marketType } },
    order: { createdAt: 'DESC' },
    take: 50,
    relations: ['buyerOrder', 'sellerOrder']
  });
}`,expectedResult:"Market trade history displays correctly"},{step:5,title:"Implement Trade Statistics",instructions:["Create `getTradeStatistics()` method","Calculate 24h volume","Calculate high/low prices","Calculate last price","Return TradeStatistics DTO"],code:`async getTradeStatistics(marketType: string): Promise<TradeStatistics> {
  const trades = await this.getTradesInLast24h(marketType);
  
  return {
    volume24h: trades.reduce((sum, t) => sum + t.amount, 0),
    high24h: Math.max(...trades.map(t => t.price)),
    low24h: Math.min(...trades.map(t => t.price)),
    lastPrice: trades[0]?.price || 0
  };
}`,expectedResult:"Trade statistics calculated correctly"}],nextTask:"TradeController",unlockMessage:"💹 Trade execution ready! Now build trade endpoints."},TradeController:{order:11,title:"🎮 Level 11: Trade Controller",description:"Build trade history and analytics endpoints.",steps:[{step:1,title:"Create Trade Controller",instructions:["Generate controller: `nest g controller trades`","Import TradeService","Add Swagger documentation","Set up DTOs for requests"],code:"nest g controller trades",expectedResult:"Trade controller created"},{step:2,title:"Implement Get User Trades Endpoint",instructions:["Create `GET /api/trades` endpoint","Use `@UseGuards(JwtAuthGuard)`","Get user from request","Call TradeService.getTrades() with user filter","Return paginated trade list"],code:`@Get()
@UseGuards(JwtAuthGuard)
async getTrades(@Request() req, @Query() filters: TradeFiltersDto) {
  return this.tradeService.getTrades({
    ...filters,
    userId: req.user.userId
  });
}`,expectedResult:"GET /api/trades returns user's trade history"},{step:3,title:"Implement Market Trade History Endpoint",instructions:["Create `GET /api/trades/history` endpoint","Accept marketType as query parameter","Call TradeService.getLastTradesHistory()","Return recent trades for market"],code:`@Get('history')
async getTradeHistory(@Query('marketType') marketType: string) {
  return this.tradeService.getLastTradesHistory(marketType);
}`,expectedResult:"Market trade history accessible publicly"},{step:4,title:"Implement Admin Trades Endpoint",instructions:["Create `GET /api/trades/admin` endpoint","Require privilege: `LIST_TRADES`","Return all trades (no user filter)","Support advanced filtering"],code:`@Get('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_TRADES')
async getAdminTrades(@Query() filters: TradeFiltersDto) {
  return this.tradeService.getTrades(filters);
}`,expectedResult:"Admins can view all trades"},{step:5,title:"Implement Get Single Trade Endpoint",instructions:["Create `GET /api/trades/:id` endpoint","Verify trade belongs to user (or admin)","Return full trade details","Include order information"],code:`@Get(':id')
@UseGuards(JwtAuthGuard)
async getTrade(@Param('id') id: number, @Request() req) {
  return this.tradeService.getTradeById(id, req.user);
}`,expectedResult:"Single trade details accessible"}],nextTask:"MarketController",unlockMessage:"📊 Trade endpoints ready! Now build market management."},MarketController:{order:12,title:"🎮 Level 12: Market Controller",description:"Build market management endpoints for trading pairs.",steps:[{step:1,title:"Create Market Controller",instructions:["Generate controller: `nest g controller markets`","Import MarketService and CoinService","Set up DTOs for market operations"],code:"nest g controller markets",expectedResult:"Market controller created"},{step:2,title:"Implement List Markets Endpoint",instructions:["Create `GET /api/markets` endpoint","Make it public (no auth required)","Call MarketService.findAll()","Return active markets only","Include market statistics"],code:`@Get()
async getMarkets() {
  return this.marketService.findAllActive();
}`,expectedResult:"GET /api/markets returns all active markets"},{step:3,title:"Implement Create Market Endpoint",instructions:["Create `POST /api/markets` endpoint","Require privilege: `CREATE_MARKET`","Validate base and quote coins exist","Call MarketService.create()","Return created market"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_MARKET')
async createMarket(@Body() dto: CreateMarketDto) {
  return this.marketService.create(dto);
}`,expectedResult:"New markets can be created"},{step:4,title:"Implement Activate/Deactivate Market",instructions:["Create `PUT /api/markets/activate` endpoint","Require privilege: `UPDATE_MARKET`","Toggle market active status","Prevent deactivation if open orders exist"],code:`@Put('activate')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_MARKET')
async toggleMarket(@Body() dto: { marketId: number, active: boolean }) {
  return this.marketService.setActive(dto.marketId, dto.active);
}`,expectedResult:"Markets can be activated/deactivated"},{step:5,title:"Implement Get Market Details",instructions:["Create `GET /api/markets/:id` endpoint","Make it public","Include order book summary","Include 24h statistics","Return MarketFullDTO"],code:`@Get(':id')
async getMarket(@Param('id') id: number) {
  const market = await this.marketService.findOne(id);
  const stats = await this.tradeService.getTradeStatistics(market.type);
  return { ...market, statistics: stats };
}`,expectedResult:"Market details include statistics"}],nextTask:"CoinController",unlockMessage:"📈 Markets ready! Now build coin management."},CoinController:{order:13,title:"🎮 Level 13: Coin Controller",description:"Build cryptocurrency information and pricing endpoints.",steps:[{step:1,title:"Create Coin Controller",instructions:["Generate controller: `nest g controller coins`","Import CoinService","Set up DTOs for coin operations"],code:"nest g controller coins",expectedResult:"Coin controller created"},{step:2,title:"Implement List Coins Endpoint",instructions:["Create `GET /api/coins` endpoint","Make it public","Call CoinService.findAll()","Return all coins with current prices","Include network information"],code:`@Get()
async getCoins() {
  return this.coinService.findAll();
}`,expectedResult:"GET /api/coins returns all coins"},{step:3,title:"Implement Get USD Prices Endpoint",instructions:["Create `GET /api/coins/price/usd` endpoint","Return prices in USD for all coins","Cache prices for performance","Update prices periodically (scheduled task)"],code:`@Get('price/usd')
async getUsdPrices() {
  return this.coinService.getUsdPrices();
}`,expectedResult:"USD prices returned for all coins"},{step:4,title:"Implement Exchange Rate Endpoint",instructions:["Create `GET /api/coins/price/from-to` endpoint","Accept from and to coin symbols","Calculate exchange rate","Return rate and timestamp"],code:`@Get('price/from-to')
async getExchangeRate(@Query('from') from: string, @Query('to') to: string) {
  return this.coinService.getExchangeRate(from, to);
}`,expectedResult:"Exchange rates calculated correctly"},{step:5,title:"Implement Create Coin Endpoint",instructions:["Create `POST /api/coins` endpoint","Require privilege: `CREATE_COIN`","Validate coin data","Call CoinService.create()","Return created coin"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_COIN')
async createCoin(@Body() dto: CreateCoinDto) {
  return this.coinService.create(dto);
}`,expectedResult:"New coins can be added to system"}],nextTask:"AdminController",unlockMessage:"🪙 Coin management ready! Now build admin endpoints."},AdminController:{order:14,title:"🎮 Level 14: Admin Controller",description:"Build admin user management and RBAC endpoints.",steps:[{step:1,title:"Create Admin Controller",instructions:["Generate controller: `nest g controller admins`","Import AdminService and RoleService","Add RBAC guards to all endpoints"],code:"nest g controller admins",expectedResult:"Admin controller created"},{step:2,title:"Implement Admin Login Endpoint",instructions:["Create `POST /api/admins/login` endpoint","Accept email and password","Validate credentials","Return JWT token with admin privileges","Log login attempt"],code:`@Post('login')
async login(@Body() dto: LoginDto) {
  return this.authService.loginAdmin(dto);
}`,expectedResult:"Admins can log in and get JWT token"},{step:3,title:"Implement Create Admin Endpoint",instructions:["Create `POST /api/admins/create` endpoint","Require privilege: `CREATE_ADMINS`","Validate admin data","Hash password","Assign default role","Call AdminService.create()"],code:`@Post('create')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_ADMINS')
async createAdmin(@Body() dto: CreateAdminDto) {
  return this.adminService.create(dto);
}`,expectedResult:"New admins can be created"},{step:4,title:"Implement List Admins Endpoint",instructions:["Create `GET /api/admins` endpoint","Require privilege: `LIST_ADMINS`","Support pagination","Return admin list with roles","Exclude sensitive data (passwords)"],code:`@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_ADMINS')
async getAdmins(@Query() pagination: PaginationDto) {
  return this.adminService.findAll(pagination);
}`,expectedResult:"Admin list returned with pagination"},{step:5,title:"Implement Update/Delete Admin Endpoints",instructions:["Create `PUT /api/admins/:id` endpoint","Create `DELETE /api/admins/:id` endpoint","Require appropriate privileges","Prevent self-deletion","Validate role changes"],code:`@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_ADMINS')
async updateAdmin(@Param('id') id: number, @Body() dto: UpdateAdminDto) {
  return this.adminService.update(id, dto);
}`,expectedResult:"Admins can be updated and deleted"}],nextTask:"GiftCodeController",unlockMessage:"👨‍💼 Admin management ready! Now build promotional features."},GiftCodeController:{order:15,title:"🎮 Level 15: Gift Code Controller",description:"Build promotional gift codes and referral rewards system.",steps:[{step:1,title:"Create Gift Code Module",instructions:["Generate module: `nest g module gift-codes`","Generate service and controller","Import CustomerService and CustomerWalletService"],code:`nest g module gift-codes
nest g service gift-codes
nest g controller gift-codes`,expectedResult:"Gift code module created"},{step:2,title:"Implement Create Gift Code Endpoint",instructions:["Create `POST /api/gift-code` endpoint","Require privilege: `CREATE_GIFT_CODE`","Generate unique code","Set expiration date","Set reward amount","Save to database"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_GIFT_CODE')
async createGiftCode(@Body() dto: CreateGiftCodeDto) {
  return this.giftCodeService.create(dto);
}`,expectedResult:"Gift codes can be created"},{step:3,title:"Implement Redeem Gift Code Endpoint",instructions:["Create `PUT /api/gift-code/use` endpoint","Require privilege: `USER`","Validate code exists and not expired","Check if user already used it","Credit wallet with reward","Mark code as used"],code:`@Put('use')
@UseGuards(JwtAuthGuard)
async redeemGiftCode(@Request() req, @Body() dto: { code: string }) {
  return this.giftCodeService.redeem(dto.code, req.user);
}`,expectedResult:"Users can redeem gift codes"},{step:4,title:"Implement Register with Gift Code",instructions:["Create `POST /api/gift-code/register/:prefix` endpoint","Make it public (for registration)","Validate prefix exists","Credit new user on registration","Track referral"],code:`@Post('register/:prefix')
async registerWithGiftCode(@Param('prefix') prefix: string, @Body() registerDto: RegisterDto) {
  return this.giftCodeService.registerWithCode(prefix, registerDto);
}`,expectedResult:"New users can register with gift code"},{step:5,title:"Implement List Gift Codes Endpoint",instructions:["Create `GET /api/gift-code` endpoint","Require privilege: `LIST_GIFT_CODE`","Support filtering by status","Show usage statistics","Return paginated list"],code:`@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_GIFT_CODE')
async getGiftCodes(@Query() filters: GiftCodeFiltersDto) {
  return this.giftCodeService.findAll(filters);
}`,expectedResult:"Gift codes can be listed and managed"}],nextTask:"ReferralCodeController",unlockMessage:"🎁 Gift codes ready! Now build referral system."},ReferralCodeController:{order:16,title:"🎮 Level 16: Referral Code Controller",description:"Build referral program and rewards system.",steps:[{step:1,title:"Create Referral Module",instructions:["Generate module: `nest g module referrals`","Generate service and controller","Import CustomerService"],code:`nest g module referrals
nest g service referrals
nest g controller referrals`,expectedResult:"Referral module created"},{step:2,title:"Implement Create Referral Code Endpoint",instructions:["Create `POST /api/referral/create` endpoint","Require privilege: `USER`","Generate unique referral code for user","Save to database","Return referral code and link"],code:`@Post('create')
@UseGuards(JwtAuthGuard)
async createReferralCode(@Request() req) {
  return this.referralService.createCode(req.user);
}`,expectedResult:"Users can create their referral codes"},{step:3,title:"Implement Use Referral Code Endpoint",instructions:["Create `POST /api/referral/use/:code` endpoint","Make it public (for registration)","Validate code exists","Link referrer to new user","Credit rewards to both users"],code:`@Post('use/:code')
async useReferralCode(@Param('code') code: string, @Body() registerDto: RegisterDto) {
  return this.referralService.useCode(code, registerDto);
}`,expectedResult:"New users can use referral codes"},{step:4,title:"Implement Referral Statistics Endpoint",instructions:["Create `GET /api/referral/stats` endpoint","Require privilege: `USER`","Count total referrals","Calculate total rewards earned","Show active referrals","Return statistics DTO"],code:`@Get('stats')
@UseGuards(JwtAuthGuard)
async getReferralStats(@Request() req) {
  return this.referralService.getStatistics(req.user);
}`,expectedResult:"Referral statistics displayed"},{step:5,title:"Implement Referral Reward System",instructions:["Create scheduled task to process rewards","Calculate rewards based on referred user activity","Credit rewards to referrer wallet","Track reward history"],code:`@Cron('0 0 * * *') // Daily
async processReferralRewards() {
  await this.referralService.processDailyRewards();
}`,expectedResult:"Referral rewards processed automatically"}],nextTask:"TicketController",unlockMessage:"🔗 Referral system ready! Now build customer support."},TicketController:{order:17,title:"🎮 Level 17: Ticket Controller",description:"Build customer support ticket system.",steps:[{step:1,title:"Create Ticket Module",instructions:["Generate module: `nest g module tickets`","Generate service and controller","Import MessageService and FileService"],code:`nest g module tickets
nest g service tickets
nest g controller tickets`,expectedResult:"Ticket module created"},{step:2,title:"Implement Create Ticket Endpoint",instructions:["Create `POST /api/tickets` endpoint","Require privilege: `USER`","Accept title, description, and category","Create ticket with status 'OPEN'","Send notification to admins","Return created ticket"],code:`@Post()
@UseGuards(JwtAuthGuard)
async createTicket(@Request() req, @Body() dto: CreateTicketDto) {
  return this.ticketService.create(dto, req.user);
}`,expectedResult:"Users can create support tickets"},{step:3,title:"Implement List User Tickets Endpoint",instructions:["Create `GET /api/tickets` endpoint","Require privilege: `USER`","Filter tickets by current user","Support status filtering","Return paginated list"],code:`@Get()
@UseGuards(JwtAuthGuard)
async getTickets(@Request() req, @Query() filters: TicketFiltersDto) {
  return this.ticketService.findByUser(req.user, filters);
}`,expectedResult:"Users see their own tickets"},{step:4,title:"Implement Add Message to Ticket",instructions:["Create `POST /api/tickets/message/:id` endpoint","Require privilege: `USER`","Verify ticket belongs to user","Accept message text and optional file","Update ticket status if needed","Notify admins/user"],code:`@Post('message/:id')
@UseGuards(JwtAuthGuard)
@UseInterceptors(FileInterceptor('file'))
async addMessage(@Param('id') id: number, @Request() req, @Body() dto: AddMessageDto, @UploadedFile() file?: Express.Multer.File) {
  return this.ticketService.addMessage(id, dto, req.user, file);
}`,expectedResult:"Messages can be added to tickets"},{step:5,title:"Implement Admin Ticket Management",instructions:["Create `GET /api/tickets/admin` endpoint","Require privilege: `LIST_TICKETS`","Return all tickets","Support filtering and sorting","Include unread count"],code:`@Get('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_TICKETS')
async getAdminTickets(@Query() filters: TicketFiltersDto) {
  return this.ticketService.findAll(filters);
}`,expectedResult:"Admins can view all tickets"}],nextTask:"BlogController",unlockMessage:"🎫 Support system ready! Now build content management."},BlogController:{order:18,title:"🎮 Level 18: Blog Controller",description:"Build blog and content management endpoints.",steps:[{step:1,title:"Create Blog Module",instructions:["Generate module: `nest g module blog`","Generate service and controller","Import FileService for images"],code:`nest g module blog
nest g service blog
nest g controller blog`,expectedResult:"Blog module created"},{step:2,title:"Implement List Blog Posts Endpoint",instructions:["Create `GET /api/blog` endpoint","Make it public","Support pagination","Filter by category/tag","Return published posts only"],code:`@Get()
async getBlogPosts(@Query() filters: BlogFiltersDto) {
  return this.blogService.findAll(filters);
}`,expectedResult:"Blog posts listed publicly"},{step:3,title:"Implement Create Blog Post Endpoint",instructions:["Create `POST /api/blog` endpoint","Require privilege: `CREATE_BLOG`","Accept title, content, category, tags","Support image upload","Save as draft or publish","Return created post"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_BLOG')
@UseInterceptors(FileInterceptor('image'))
async createPost(@Body() dto: CreateBlogDto, @UploadedFile() image?: Express.Multer.File) {
  return this.blogService.create(dto, image);
}`,expectedResult:"Blog posts can be created"},{step:4,title:"Implement Update Blog Post Endpoint",instructions:["Create `PUT /api/blog/:id` endpoint","Require privilege: `UPDATE_BLOG`","Verify post exists","Update post data","Handle image replacement","Return updated post"],code:`@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_BLOG')
async updatePost(@Param('id') id: number, @Body() dto: UpdateBlogDto) {
  return this.blogService.update(id, dto);
}`,expectedResult:"Blog posts can be updated"},{step:5,title:"Implement Get Single Post Endpoint",instructions:["Create `GET /api/blog/:id` endpoint","Make it public","Return full post content","Increment view count","Include related posts"],code:`@Get(':id')
async getPost(@Param('id') id: number) {
  await this.blogService.incrementViews(id);
  return this.blogService.findOne(id);
}`,expectedResult:"Single blog post accessible"}],nextTask:"ExchangeActionController",unlockMessage:"📝 Blog ready! Now build OTC exchange."},ExchangeActionController:{order:19,title:"🎮 Level 19: Exchange Action Controller",description:"Build OTC (over-the-counter) exchange endpoints.",steps:[{step:1,title:"Create Exchange Module",instructions:["Generate module: `nest g module exchange`","Generate service and controller","Import ExchangeActionService and CustomerWalletService"],code:`nest g module exchange
nest g service exchange
nest g controller exchange`,expectedResult:"Exchange module created"},{step:2,title:"Implement OTC Buy Endpoint",instructions:["Create `POST /api/exchange/buy` endpoint","Require privilege: `USER`","Validate user has sufficient balance","Lock balance in custodial wallet","Create exchange order","Return order details"],code:`@Post('buy')
@UseGuards(JwtAuthGuard)
async createBuyOrder(@Request() req, @Body() dto: ExchangeBuyDto) {
  return this.exchangeService.createBuyOrder(dto, req.user);
}`,expectedResult:"OTC buy orders can be created"},{step:3,title:"Implement OTC Sell Endpoint",instructions:["Create `POST /api/exchange/sell` endpoint","Require privilege: `USER`","Validate user has coins","Lock coins in custodial wallet","Create exchange sell order","Return order details"],code:`@Post('sell')
@UseGuards(JwtAuthGuard)
async createSellOrder(@Request() req, @Body() dto: ExchangeSellDto) {
  return this.exchangeService.createSellOrder(dto, req.user);
}`,expectedResult:"OTC sell orders can be created"},{step:4,title:"Implement Approve Order Endpoint",instructions:["Create `POST /api/exchange/approve-order` endpoint","Require privilege: `APPROVE_EXCHANGE`","Verify order exists and is pending","Execute exchange (transfer funds)","Update order status to 'APPROVED'","Notify user"],code:`@Post('approve-order')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('APPROVE_EXCHANGE')
async approveOrder(@Body() dto: { orderId: number }) {
  return this.exchangeService.approveOrder(dto.orderId);
}`,expectedResult:"Exchange orders can be approved"},{step:5,title:"Implement List Exchange Orders Endpoint",instructions:["Create `GET /api/exchange/orders` endpoint","Require privilege: `LIST_EXCHANGE`","Support filtering by status","Return paginated list","Include user and amount details"],code:`@Get('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_EXCHANGE')
async getExchangeOrders(@Query() filters: ExchangeFiltersDto) {
  return this.exchangeService.findAll(filters);
}`,expectedResult:"Exchange orders can be listed"}],nextTask:"RolesController",unlockMessage:"🔄 OTC exchange ready! Now build RBAC system."},RolesController:{order:20,title:"🎮 Level 20: Roles Controller",description:"Build role and privilege management for RBAC.",steps:[{step:1,title:"Create Roles Module",instructions:["Generate module: `nest g module roles`","Generate service and controller","Import RoleService and PrivilegeService"],code:`nest g module roles
nest g service roles
nest g controller roles`,expectedResult:"Roles module created"},{step:2,title:"Implement List Roles Endpoint",instructions:["Create `GET /api/roles` endpoint","Require privilege: `LIST_ROLES`","Return all roles with their privileges","Include role usage count","Return formatted RoleDTO"],code:`@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_ROLES')
async getRoles() {
  return this.roleService.findAll();
}`,expectedResult:"All roles listed with privileges"},{step:3,title:"Implement Create Role Endpoint",instructions:["Create `POST /api/roles` endpoint","Require privilege: `CREATE_ROLE`","Accept role name and privileges array","Validate privileges exist","Create role in database","Return created role"],code:`@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_ROLE')
async createRole(@Body() dto: CreateRoleDto) {
  return this.roleService.create(dto);
}`,expectedResult:"New roles can be created"},{step:4,title:"Implement List Privileges Endpoint",instructions:["Create `GET /api/roles/privileges` endpoint","Require privilege: `LIST_PRIVILEGES`","Return all available privileges","Group by category","Show which roles use each privilege"],code:`@Get('privileges')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_PRIVILEGES')
async getPrivileges() {
  return this.privilegeService.findAll();
}`,expectedResult:"All privileges listed"},{step:5,title:"Implement Update Role Endpoint",instructions:["Create `PUT /api/roles/:id` endpoint","Require privilege: `UPDATE_ROLE`","Allow updating role name and privileges","Validate no users have role before deletion","Update role in database"],code:`@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_ROLE')
async updateRole(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
  return this.roleService.update(id, dto);
}`,expectedResult:"Roles can be updated"}],nextTask:"CustomerService",unlockMessage:"🔐 RBAC system ready! Now build customer service layer."},CustomerService:{order:21,title:"🎮 Level 21: Customer Service",description:"Build user account management, authentication, and KYC orchestration.",steps:[{step:1,title:"Create Customer Service",instructions:["Generate service: `nest g service customers`","Import Customer entity repository","Import EmailService and SMSService","Set up TypeORM repository"],code:"nest g service customers",expectedResult:"Customer service created"},{step:2,title:"Implement User Registration",instructions:["Create `register()` method","Validate email uniqueness","Hash password with bcrypt","Create customer entity","Send welcome email","Return RegisterResponseDto"],code:`async register(userDTO: RegisterDto): Promise<RegisterResponseDto> {
  const hashedPassword = await bcrypt.hash(userDTO.password, 10);
  const customer = this.customerRepository.create({
    ...userDTO,
    password_hash: hashedPassword
  });
  await this.emailService.sendWelcomeEmail(customer.email);
  return { customer, message: 'Registration successful' };
}`,expectedResult:"Users can register successfully"},{step:3,title:"Implement Authentication",instructions:["Create `authenticate()` method","Find customer by email","Verify password with bcrypt","Check account status","Return customer entity","Log authentication attempt"],code:`async authenticate(email: string, password: string): Promise<Customer> {
  const customer = await this.customerRepository.findOne({ where: { email } });
  if (!customer) throw new UnauthorizedException('Invalid credentials');
  
  const isValid = await bcrypt.compare(password, customer.password_hash);
  if (!isValid) throw new UnauthorizedException('Invalid credentials');
  
  return customer;
}`,expectedResult:"User authentication works"},{step:4,title:"Implement KYC Submission",instructions:["Create `submitKYC()` method","Accept KYC documents (ID, selfie, etc.)","Save files to storage","Update customer KYC status to 'PENDING'","Notify admins for review","Return KYC status"],code:`async submitKYC(customerId: number, kycDTO: KycDto, files: Express.Multer.File[]): Promise<KYCStatus> {
  // Save files
  // Update customer KYC status
  // Notify admins
  return kycStatus;
}`,expectedResult:"KYC documents can be submitted"},{step:5,title:"Implement 2FA Methods",instructions:["Create `enable2FA()` method","Generate secret using speakeasy","Generate QR code","Store secret (encrypted) in customer","Return QR code and secret","Create `verify2FA()` method for verification"],code:`async enable2FA(customerId: number): Promise<TwoFactorSecret> {
  const secret = speakeasy.generateSecret({ name: 'BitniTex' });
  const qrCode = await qrcode.toDataURL(secret.otpauth_url);
  
  // Store encrypted secret
  await this.updateCustomer(customerId, { twoFactorSecret: encrypt(secret.base32) });
  
  return { secret: secret.base32, qrCode };
}`,expectedResult:"2FA can be enabled and verified"}],nextTask:"PaymentGateway",unlockMessage:"👥 Customer service ready! Now build payment gateways."},GiftCodeService:{order:23,title:"🎮 Level 23: Gift Code Service",description:"Build promotional gift code management service with generation, validation, redemption, and tracking.",steps:[{step:1,title:"Create Gift Code Entity",instructions:["Create `GiftCode` entity with fields: id, code, prefix, rewardAmount, currency, expirationDate, usageLimit, usedCount, status, createdAt","Add indexes on code and prefix","Add validation decorators"],code:`@Entity('gift_code')
export class GiftCode {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ unique: true })
  code: string;
  
  @Column()
  prefix: string;
  
  @Column('decimal', { precision: 18, scale: 8 })
  rewardAmount: number;
  
  @Column()
  currency: string;
  
  @Column({ nullable: true })
  expirationDate: Date;
  
  @Column({ default: 1 })
  usageLimit: number;
  
  @Column({ default: 0 })
  usedCount: number;
  
  @Column({ default: 'ACTIVE' })
  status: string;
}`,expectedResult:"Gift code entity created",aiPrompt:"Help me create a GiftCode entity for a NestJS cryptocurrency exchange. I need fields for code, prefix, reward amount, expiration, usage limits, and status tracking.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the GiftCode entity based on the Java implementation at src/main/java/ir/arnitex/backend/service/GiftCodeService.java"},{step:2,title:"Implement Gift Code Generation",instructions:["Create `generateCode()` method","Generate unique alphanumeric code","Support prefix-based codes","Ensure uniqueness in database","Return generated code"],code:`async generateCode(prefix?: string): Promise<string> {
  let code: string;
  let exists = true;
  
  while (exists) {
    code = prefix 
      ? \`\${prefix}-\${this.generateRandomString(8)}\`
      : this.generateRandomString(12);
    exists = await this.giftCodeRepository.findOne({ where: { code } });
  }
  
  return code;
}`,expectedResult:"Unique gift codes can be generated",aiPrompt:"Help me implement gift code generation logic in NestJS. I need to generate unique alphanumeric codes, optionally with prefixes, and ensure they don't exist in the database.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code generation based on the Java implementation."},{step:3,title:"Implement Gift Code Validation",instructions:["Create `validateCode()` method","Check if code exists","Verify not expired","Check usage limit not exceeded","Verify status is ACTIVE","Return validation result"],code:`async validateCode(code: string): Promise<{ valid: boolean; message?: string }> {
  const giftCode = await this.giftCodeRepository.findOne({ where: { code } });
  
  if (!giftCode) {
    return { valid: false, message: 'Gift code not found' };
  }
  
  if (giftCode.status !== 'ACTIVE') {
    return { valid: false, message: 'Gift code is not active' };
  }
  
  if (giftCode.expirationDate && giftCode.expirationDate < new Date()) {
    return { valid: false, message: 'Gift code has expired' };
  }
  
  if (giftCode.usedCount >= giftCode.usageLimit) {
    return { valid: false, message: 'Gift code usage limit reached' };
  }
  
  return { valid: true };
}`,expectedResult:"Gift codes can be validated",aiPrompt:"Help me implement gift code validation logic in NestJS. I need to check if codes exist, are active, not expired, and haven't exceeded usage limits.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code validation based on the Java implementation."},{step:4,title:"Implement Gift Code Redemption",instructions:["Create `redeemCode()` method","Validate code first","Check if user already used it","Credit wallet with reward","Increment usedCount","Mark as used if limit reached","Return redemption result"],code:`async redeemCode(code: string, customer: Customer): Promise<GiftCodeRedemptionResult> {
  const validation = await this.validateCode(code);
  if (!validation.valid) {
    throw new BadRequestException(validation.message);
  }
  
  const giftCode = await this.giftCodeRepository.findOne({ where: { code } });
  
  // Check if user already used this code
  const existingUsage = await this.giftCodeUsageRepository.findOne({
    where: { giftCodeId: giftCode.id, customerId: customer.id }
  });
  
  if (existingUsage) {
    throw new BadRequestException('You have already used this gift code');
  }
  
  // Credit wallet
  await this.customerWalletService.creditBalance(
    customer.id,
    giftCode.rewardAmount,
    giftCode.currency,
    'GIFT_CODE_REDEMPTION'
  );
  
  // Track usage
  giftCode.usedCount++;
  if (giftCode.usedCount >= giftCode.usageLimit) {
    giftCode.status = 'EXHAUSTED';
  }
  await this.giftCodeRepository.save(giftCode);
  
  await this.giftCodeUsageRepository.save({
    giftCodeId: giftCode.id,
    customerId: customer.id,
    redeemedAt: new Date()
  });
  
  return { success: true, rewardAmount: giftCode.rewardAmount };
}`,expectedResult:"Gift codes can be redeemed and wallets credited",aiPrompt:"Help me implement gift code redemption logic in NestJS. I need to validate codes, check for duplicate usage, credit user wallets, and track usage statistics.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code redemption based on the Java implementation."},{step:5,title:"Implement Usage Tracking and Statistics",instructions:["Create `getStatistics()` method","Count total codes created","Count codes redeemed","Calculate total rewards distributed","Get most popular codes","Return statistics DTO"],code:`async getStatistics(): Promise<GiftCodeStatisticsDto> {
  const totalCodes = await this.giftCodeRepository.count();
  const redeemedCodes = await this.giftCodeRepository.count({ 
    where: { status: 'EXHAUSTED' } 
  });
  
  const totalRewards = await this.giftCodeUsageRepository
    .createQueryBuilder('usage')
    .leftJoin('usage.giftCode', 'code')
    .select('SUM(code.rewardAmount)', 'total')
    .getRawOne();
  
  return {
    totalCodes,
    redeemedCodes,
    totalRewards: totalRewards?.total || 0,
    redemptionRate: (redeemedCodes / totalCodes) * 100
  };
}`,expectedResult:"Gift code statistics available",aiPrompt:"Help me implement gift code statistics tracking in NestJS. I need to calculate total codes, redemption rates, rewards distributed, and usage analytics.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code statistics based on the Java implementation."}],nextTask:"ReferralCodeService",unlockMessage:"🎁 Gift code service ready! Now build referral system."},ReferralCodeService:{order:24,title:"🎮 Level 24: Referral Code Service",description:"Build referral program management service with code generation, tracking, rewards, and statistics.",steps:[{step:1,title:"Create Referral Code Entity",instructions:["Create `ReferralCode` entity with fields: id, customerId, code, createdAt, isActive","Create `ReferralRelationship` entity: id, referrerId, referredId, code, createdAt, rewardEarned","Add indexes on customerId and code","Add relationships"],code:`@Entity('referral_code')
export class ReferralCode {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  customerId: number;
  
  @Column({ unique: true })
  code: string;
  
  @Column({ default: true })
  isActive: boolean;
  
  @OneToMany(() => ReferralRelationship, rel => rel.referrer)
  relationships: ReferralRelationship[];
}`,expectedResult:"Referral code entities created",aiPrompt:"Help me create ReferralCode and ReferralRelationship entities for a NestJS cryptocurrency exchange. I need to track referral codes, relationships between referrers and referred users, and rewards earned.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the referral entities based on the Java implementation at src/main/java/ir/arnitex/backend/service/ReferralCodeService.java"},{step:2,title:"Implement Referral Code Generation",instructions:["Create `generateCode()` method","Generate unique code for customer","Use customer ID or username as base","Ensure uniqueness","Save to database","Return referral code"],code:`async generateCode(customer: Customer): Promise<ReferralCode> {
  let code: string;
  let exists = true;
  
  // Try username-based code first
  const baseCode = customer.username.toUpperCase().replace(/[^A-Z0-9]/g, '');
  
  while (exists) {
    code = \`\${baseCode}-\${this.generateRandomString(4)}\`;
    exists = await this.referralCodeRepository.findOne({ where: { code } });
  }
  
  const referralCode = this.referralCodeRepository.create({
    customerId: customer.id,
    code,
    isActive: true
  });
  
  return await this.referralCodeRepository.save(referralCode);
}`,expectedResult:"Unique referral codes can be generated for users",aiPrompt:"Help me implement referral code generation in NestJS. I need to create unique codes for each customer, optionally based on their username, and ensure uniqueness in the database.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral code generation based on the Java implementation."},{step:3,title:"Implement Referral Tracking",instructions:["Create `trackReferral()` method","Validate referral code exists","Create referral relationship","Link referrer to new user","Calculate initial reward","Credit referrer wallet","Return tracking result"],code:`async trackReferral(code: string, referredCustomer: Customer): Promise<ReferralRelationship> {
  const referralCode = await this.referralCodeRepository.findOne({ 
    where: { code, isActive: true } 
  });
  
  if (!referralCode) {
    throw new NotFoundException('Invalid referral code');
  }
  
  if (referralCode.customerId === referredCustomer.id) {
    throw new BadRequestException('Cannot refer yourself');
  }
  
  // Check if already referred
  const existing = await this.referralRelationshipRepository.findOne({
    where: { referredId: referredCustomer.id }
  });
  
  if (existing) {
    throw new BadRequestException('User already has a referrer');
  }
  
  // Create relationship
  const relationship = this.referralRelationshipRepository.create({
    referrerId: referralCode.customerId,
    referredId: referredCustomer.id,
    code,
    rewardEarned: 0
  });
  
  await this.referralRelationshipRepository.save(relationship);
  
  // Calculate and credit initial reward
  const initialReward = await this.calculateInitialReward();
  await this.creditReferrerReward(referralCode.customerId, initialReward);
  relationship.rewardEarned = initialReward;
  
  return relationship;
}`,expectedResult:"Referral relationships can be tracked and rewards credited",aiPrompt:"Help me implement referral tracking logic in NestJS. I need to validate codes, create relationships between referrers and referred users, prevent self-referrals, and credit initial rewards.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral tracking based on the Java implementation."},{step:4,title:"Implement Reward Calculation",instructions:["Create `calculateReward()` method","Calculate based on referred user activity","Support percentage-based rewards","Calculate from trades, deposits, etc.","Apply reward tiers if applicable","Return calculated reward amount"],code:`async calculateReward(referredCustomerId: number, activityType: string, amount: number): Promise<number> {
  const relationship = await this.referralRelationshipRepository.findOne({
    where: { referredId: referredCustomerId }
  });
  
  if (!relationship) {
    return 0;
  }
  
  let rewardPercentage = 0;
  
  switch (activityType) {
    case 'TRADE':
      rewardPercentage = 0.001; // 0.1% of trade volume
      break;
    case 'DEPOSIT':
      rewardPercentage = 0.01; // 1% of deposit
      break;
    default:
      rewardPercentage = 0;
  }
  
  return amount * rewardPercentage;
}`,expectedResult:"Referral rewards can be calculated based on activity",aiPrompt:"Help me implement referral reward calculation in NestJS. I need to calculate rewards based on referred user activity (trades, deposits), apply percentage-based rewards, and support different reward tiers.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral reward calculation based on the Java implementation."},{step:5,title:"Implement Referral Statistics",instructions:["Create `getStatistics()` method","Count total referrals","Calculate total rewards earned","Get active referrals count","Calculate conversion rate","Return statistics DTO"],code:`async getStatistics(customerId: number): Promise<ReferralStatisticsDto> {
  const referralCode = await this.referralCodeRepository.findOne({
    where: { customerId }
  });
  
  if (!referralCode) {
    return { totalReferrals: 0, totalRewards: 0, activeReferrals: 0 };
  }
  
  const relationships = await this.referralRelationshipRepository.find({
    where: { referrerId: customerId }
  });
  
  const totalRewards = relationships.reduce((sum, rel) => sum + rel.rewardEarned, 0);
  
  return {
    totalReferrals: relationships.length,
    totalRewards,
    activeReferrals: relationships.filter(r => r.rewardEarned > 0).length,
    conversionRate: (relationships.length / 100) * 100 // Example calculation
  };
}`,expectedResult:"Referral statistics available for users",aiPrompt:"Help me implement referral statistics in NestJS. I need to calculate total referrals, rewards earned, active referrals, conversion rates, and provide analytics for users.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral statistics based on the Java implementation."}],nextTask:"BlogService",unlockMessage:"🔗 Referral service ready! Now build content management."},BlogService:{order:25,title:"🎮 Level 25: Blog Service",description:"Build content management and blog post service with CRUD, publishing, SEO, and image handling.",steps:[{step:1,title:"Create Blog Post Entity",instructions:["Create `BlogPost` entity with fields: id, title, content, excerpt, slug, category, tags, authorId, status, publishedAt, views, imageUrl, seoTitle, seoDescription","Add indexes on slug, category, status","Add relationships to Customer (author)","Add validation decorators"],code:`@Entity('blog_post')
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  title: string;
  
  @Column('text')
  content: string;
  
  @Column('text', { nullable: true })
  excerpt: string;
  
  @Column({ unique: true })
  slug: string;
  
  @Column()
  category: string;
  
  @Column('simple-array', { nullable: true })
  tags: string[];
  
  @Column()
  authorId: number;
  
  @Column({ default: 'DRAFT' })
  status: string;
  
  @Column({ nullable: true })
  publishedAt: Date;
  
  @Column({ default: 0 })
  views: number;
  
  @Column({ nullable: true })
  imageUrl: string;
  
  @Column({ nullable: true })
  seoTitle: string;
  
  @Column('text', { nullable: true })
  seoDescription: string;
}`,expectedResult:"Blog post entity created",aiPrompt:"Help me create a BlogPost entity for a NestJS cryptocurrency exchange. I need fields for title, content, slug, category, tags, author, status, publishing dates, views, images, and SEO metadata.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the BlogPost entity based on the Java implementation at src/main/java/ir/arnitex/backend/service/BlogService.java"},{step:2,title:"Implement Blog Post CRUD Operations",instructions:["Create `create()` method","Generate slug from title","Set author from authenticated user","Save as DRAFT by default","Create `findAll()` with pagination and filters","Create `findOne()` by ID or slug","Create `update()` method","Create `delete()` method"],code:`async create(dto: CreateBlogDto, authorId: number): Promise<BlogPost> {
  const slug = this.generateSlug(dto.title);
  
  const blogPost = this.blogPostRepository.create({
    ...dto,
    slug,
    authorId,
    status: 'DRAFT'
  });
  
  return await this.blogPostRepository.save(blogPost);
}

async findAll(filters: BlogFiltersDto): Promise<PaginatedBlogPosts> {
  const query = this.blogPostRepository.createQueryBuilder('post');
  
  if (filters.status) {
    query.andWhere('post.status = :status', { status: filters.status });
  }
  
  if (filters.category) {
    query.andWhere('post.category = :category', { category: filters.category });
  }
  
  const [posts, total] = await query
    .skip((filters.page - 1) * filters.limit)
    .take(filters.limit)
    .orderBy('post.publishedAt', 'DESC')
    .getManyAndCount();
  
  return { posts, total, page: filters.page, limit: filters.limit };
}`,expectedResult:"Blog posts can be created, listed, and managed",aiPrompt:"Help me implement blog post CRUD operations in NestJS. I need to create posts with slug generation, list posts with pagination and filtering, update posts, and delete posts.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post CRUD operations based on the Java implementation."},{step:3,title:"Implement Publishing Workflow",instructions:["Create `publish()` method","Set status to PUBLISHED","Set publishedAt timestamp","Create `unpublish()` method","Set status back to DRAFT","Create `schedulePublish()` for future publishing","Add scheduled task to check scheduled posts"],code:`async publish(id: number): Promise<BlogPost> {
  const post = await this.blogPostRepository.findOne({ where: { id } });
  
  if (!post) {
    throw new NotFoundException('Blog post not found');
  }
  
  post.status = 'PUBLISHED';
  post.publishedAt = new Date();
  
  return await this.blogPostRepository.save(post);
}

async unpublish(id: number): Promise<BlogPost> {
  const post = await this.blogPostRepository.findOne({ where: { id } });
  
  if (!post) {
    throw new NotFoundException('Blog post not found');
  }
  
  post.status = 'DRAFT';
  
  return await this.blogPostRepository.save(post);
}

@Cron('0 * * * *') // Every hour
async checkScheduledPosts() {
  const scheduled = await this.blogPostRepository.find({
    where: { status: 'SCHEDULED' }
  });
  
  for (const post of scheduled) {
    if (post.publishedAt && post.publishedAt <= new Date()) {
      post.status = 'PUBLISHED';
      await this.blogPostRepository.save(post);
    }
  }
}`,expectedResult:"Blog posts can be published, unpublished, and scheduled",aiPrompt:"Help me implement blog post publishing workflow in NestJS. I need to publish/unpublish posts, schedule posts for future publishing, and create a cron job to check scheduled posts.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post publishing workflow based on the Java implementation."},{step:4,title:"Implement Image Upload and Management",instructions:["Create `uploadImage()` method","Use FileInterceptor for image upload","Validate image type and size","Save to storage (local or cloud)","Return image URL","Create `deleteImage()` method","Update blog post with imageUrl"],code:`async uploadImage(file: Express.Multer.File): Promise<string> {
  if (!file.mimetype.startsWith('image/')) {
    throw new BadRequestException('File must be an image');
  }
  
  if (file.size > 5 * 1024 * 1024) { // 5MB
    throw new BadRequestException('Image size must be less than 5MB');
  }
  
  const filename = \`blog-\${Date.now()}-\${file.originalname}\`;
  const path = \`uploads/blog/\${filename}\`;
  
  await this.fileService.saveFile(file.buffer, path);
  
  return \`/api/files/\${path}\`;
}

async updatePostImage(id: number, imageUrl: string): Promise<BlogPost> {
  const post = await this.blogPostRepository.findOne({ where: { id } });
  
  if (!post) {
    throw new NotFoundException('Blog post not found');
  }
  
  // Delete old image if exists
  if (post.imageUrl) {
    await this.fileService.deleteFile(post.imageUrl);
  }
  
  post.imageUrl = imageUrl;
  return await this.blogPostRepository.save(post);
}`,expectedResult:"Blog post images can be uploaded and managed",aiPrompt:"Help me implement image upload and management for blog posts in NestJS. I need to validate images, save them to storage, return URLs, and handle image deletion when posts are updated.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post image management based on the Java implementation."},{step:5,title:"Implement SEO and Search Functionality",instructions:["Create `updateSEO()` method","Set seoTitle and seoDescription","Auto-generate SEO fields from content if not provided","Create `search()` method","Search in title, content, tags","Return search results with relevance","Implement view counter increment"],code:`async updateSEO(id: number, seoData: SEODataDto): Promise<BlogPost> {
  const post = await this.blogPostRepository.findOne({ where: { id } });
  
  if (!post) {
    throw new NotFoundException('Blog post not found');
  }
  
  post.seoTitle = seoData.seoTitle || post.title;
  post.seoDescription = seoData.seoDescription || this.generateExcerpt(post.content, 160);
  
  return await this.blogPostRepository.save(post);
}

async search(query: string): Promise<BlogPost[]> {
  return await this.blogPostRepository
    .createQueryBuilder('post')
    .where('post.status = :status', { status: 'PUBLISHED' })
    .andWhere(
      '(post.title LIKE :query OR post.content LIKE :query OR post.tags LIKE :query)',
      { query: \`%\${query}%\` }
    )
    .orderBy('post.publishedAt', 'DESC')
    .getMany();
}

async incrementViews(id: number): Promise<void> {
  await this.blogPostRepository.increment({ id }, 'views', 1);
}`,expectedResult:"Blog posts have SEO support and search functionality",aiPrompt:"Help me implement SEO and search functionality for blog posts in NestJS. I need to manage SEO metadata, implement full-text search, and track view counts.",javaImportPrompt:"I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog SEO and search based on the Java implementation."}],nextTask:"PaymentGateway",unlockMessage:"📝 Blog service ready! Now build payment gateways."},PaymentGateway:{order:22,title:"🎮 Level 22: Payment Gateway Service",description:"Build fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).",steps:[{step:1,title:"Create Payment Gateway Module",instructions:["Generate module: `nest g module payment-gateways`","Create interface: `IPaymentGateway`","Create implementations for each gateway","Set up gateway factory pattern"],code:"nest g module payment-gateways",expectedResult:"Payment gateway module structure created"},{step:2,title:"Implement Vandar Gateway",instructions:["Create `VandarService` implementing `IPaymentGateway`","Implement `deposit()` method","Call Vandar API: `POST /api/v3/transaction`","Generate redirect URL","Store transaction in database","Return GatewayResponseDTO"],code:`async deposit(request: GatewayDepositDto, customer: Customer): Promise<GatewayResponseDTO> {
  const response = await this.httpClient.post('https://ipg.vandar.io/api/v3/transaction', {
    api_key: process.env.VANDAR_API_KEY,
    amount: request.amount,
    callback_url: process.env.VANDAR_CALLBACK_URL
  });
  
  return { redirectUrl: response.data.token, transactionId: response.data.trans_token };
}`,expectedResult:"Vandar deposits work"},{step:3,title:"Implement Gateway Callback Handler",instructions:["Create `handleCallback()` method","Verify callback signature","Check transaction status","Update deposit request status","Credit customer wallet","Send confirmation notification"],code:`async handleCallback(gateway: string, callbackData: any): Promise<void> {
  const gatewayService = this.gatewayFactory.getService(gateway);
  const verified = await gatewayService.verifyCallback(callbackData);
  
  if (verified.status === 'SUCCESS') {
    await this.creditCustomerWallet(verified.transactionId);
  }
}`,expectedResult:"Callbacks processed correctly"},{step:4,title:"Implement Withdrawal to Bank",instructions:["Create `withdraw()` method","Validate IBAN format","Call gateway withdrawal API","Create withdrawal request","Track settlement status","Return withdrawal response"],code:`async withdraw(iban: string, amount: number, trackId: string): Promise<GatewayWithdrawResponseDTO> {
  const response = await this.httpClient.post('/withdraw', {
    iban,
    amount,
    trackId
  });
  
  return { status: response.data.status, settlementId: response.data.id };
}`,expectedResult:"Withdrawals to bank work"},{step:5,title:"Implement Settlement Reconciliation",instructions:["Create scheduled task for settlement","Query gateway for pending settlements","Update withdrawal statuses","Reconcile with database records","Handle failed settlements"],code:`@Cron('0 */6 * * *') // Every 6 hours
async reconcileSettlements() {
  const settlements = await this.getPendingSettlements();
  for (const settlement of settlements) {
    await this.updateSettlementStatus(settlement);
  }
}`,expectedResult:"Settlements reconciled automatically"}],nextTask:null,unlockMessage:"💳 Payment gateways ready! Project is complete! 🎉"}},Mt=t=>{const r=Object.values(Ye).sort((a,c)=>a.order-c.order),i={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"};for(const a of r){const c=Object.keys(Ye).find(s=>Ye[s]===a),o=i[c];if(!o)continue;const d=t[o];if(!d)return{id:o,guide:a};if(d.status!=="completed")return{id:o,guide:a}}return null},jt=t=>{const i={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"}[t];return i&&Ye[i]?Ye[i]:null},kr=Object.freeze(Object.defineProperty({__proto__:null,getNextTask:Mt,getTaskGuide:jt,stepByStepGuides:Ye},Symbol.toStringTag,{value:"Module"})),Tr=t=>{if(!t||!t.id)return{order:999,title:"Task Guide",description:"No guide available for this task",steps:[]};const r=t.id,i=t.title||r,a=t.description||"",c=r&&(r.includes("Controller")||r.endsWith("C")),o=r&&(r.includes("Service")||r.endsWith("S"));let d=[];if(c){const s=r.toLowerCase().replace("controller","");d=[{step:1,title:`Create ${i} Module`,instructions:[`Generate module: \`nest g module ${s}\``,`Generate service: \`nest g service ${s}\``,`Generate controller: \`nest g controller ${s}\``,"Import TypeOrmModule.forFeature([Entity])"],code:`nest g module ${s}
nest g service ${s}
nest g controller ${s}`,expectedResult:`${i} module structure created`,aiPrompt:`Help me create a ${i} for a NestJS cryptocurrency exchange. I need to generate the module, service, and controller using NestJS CLI, and set up the basic structure with proper DTOs and guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${r}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript. Maintain the same functionality, endpoints, business logic, and data structures.`},{step:2,title:"Implement Core Endpoints",instructions:["Create DTOs for request/response","Implement main endpoints based on Java controller","Add proper validation pipes","Add JWT guards and RBAC decorators"],code:`@Get()
@UseGuards(JwtAuthGuard)
async findAll() {
  return this.service.findAll();
}`,expectedResult:"Core endpoints working with authentication",aiPrompt:`Help me implement the core endpoints for ${i} in NestJS. I need to create DTOs, add validation, implement the endpoints, and add proper authentication guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${r}.java. Please read the Java source file, understand its endpoints and implementation, and translate them to NestJS TypeScript with proper DTOs, validation, and guards.`},{step:3,title:"Add Service Logic",instructions:["Implement business logic in service","Add database operations with TypeORM","Handle errors and exceptions","Add logging"],code:`async findAll(): Promise<Entity[]> {
  return this.repository.find();
}`,expectedResult:"Service logic implemented and tested",aiPrompt:`Help me implement the service logic for ${i} in NestJS. I need to add business logic, database operations using TypeORM, error handling, and logging.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java service file for this component is located at: src/main/java/ir/arnitex/backend/service/${r.replace("Controller","Service")}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`},{step:4,title:"Write Tests",instructions:["Create unit tests for service","Create integration tests for controller","Test all endpoints","Test error cases"],code:`describe('${i}', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive tests for ${i} in NestJS. I need unit tests for the service and integration tests for the controller endpoints.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${i} based on the Java implementation.`}]}else if(o){const s=r.toLowerCase().replace("service","");d=[{step:1,title:`Create ${i} Service`,instructions:[`Generate service: \`nest g service ${s}\``,"Import required dependencies","Set up TypeORM repository if needed","Create service class with @Injectable()"],code:`nest g service ${s}`,expectedResult:`${i} service created`,aiPrompt:`Help me create a ${i} for a NestJS cryptocurrency exchange. I need to generate the service using NestJS CLI and set up the basic structure.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${r}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript.`},{step:2,title:"Implement Core Business Logic",instructions:["Implement main service methods","Add database operations with TypeORM","Handle business rules and validations","Add error handling"],code:`async create(data: CreateDto): Promise<Entity> {
  return this.repository.save(data);
}`,expectedResult:"Core business logic implemented",aiPrompt:`Help me implement the core business logic for ${i} in NestJS. I need to add service methods, database operations using TypeORM, business validations, and error handling.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${r}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`},{step:3,title:"Add Error Handling and Logging",instructions:["Add try-catch blocks","Create custom exceptions if needed","Add logging with NestJS Logger","Handle edge cases"],code:`try {
  return await this.repository.save(data);
} catch (error) {
  this.logger.error('Error creating entity', error);
  throw new BadRequestException('Failed to create');
}`,expectedResult:"Error handling and logging implemented",aiPrompt:`Help me add proper error handling and logging for ${i} in NestJS. I need try-catch blocks, custom exceptions, NestJS Logger, and edge case handling.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me add error handling and logging for ${i} based on the Java implementation.`},{step:4,title:"Write Tests",instructions:["Create unit tests for service methods","Mock dependencies","Test all business logic","Test error cases"],code:`describe('${i}', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive unit tests for ${i} in NestJS. I need to test all service methods with mocked dependencies.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${i} based on the Java implementation.`}]}else d=[{step:1,title:`Set Up ${i}`,instructions:["Create necessary files and structure","Install required dependencies","Configure module","Set up basic implementation"],code:`// Set up ${i}`,expectedResult:`${i} set up and ready`,aiPrompt:`Help me set up ${i} for a NestJS cryptocurrency exchange. ${a||"I need to implement this component."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. Please help me translate ${i} to NestJS TypeScript.`},{step:2,title:"Implement Core Functionality",instructions:["Implement main features","Add required logic","Test functionality","Handle edge cases"],code:`// Implement ${i}`,expectedResult:"Core functionality working",aiPrompt:`Help me implement the core functionality for ${i} in NestJS. ${a||"I need to add the main features."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement ${i} based on the Java implementation.`},{step:3,title:"Test and Refine",instructions:["Write tests","Fix any issues","Optimize performance","Update documentation"],code:`// Test ${i}`,expectedResult:`${i} tested and working`,aiPrompt:`Help me test and refine ${i} in NestJS. I need to write tests, fix issues, optimize, and document.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me test and refine ${i} based on the Java implementation.`}];return{order:100,title:`🎮 ${i}`,description:a||`Implement ${i} for BitniTex exchange`,steps:d,nextTask:null,unlockMessage:`✅ ${i} complete!`}},xr=["Level1_ProjectSetup","Level19_ScheduledTasks","Level20_WebSocketRealtime","Level21_ErrorHandlingLogging","Level22_PerformanceCaching","Level23_SecurityHardening","Level24_DataMigrationSeeding","Level25_UnitTesting","Level26_IntegrationTesting","Level27_DeploymentDevOps","Level28_MonitoringHealthChecks","Level29_APIDocumentation","Level30_FinalDocumentation"],Ke={CustomerController:"src/main/java/ir/arnitex/backend/controller/CustomerController.java",OrderController:"src/main/java/ir/arnitex/backend/controller/OrderController.java",WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",TradeController:"src/main/java/ir/arnitex/backend/controller/TradeController.java",MarketController:"src/main/java/ir/arnitex/backend/controller/MarketController.java",CoinController:"src/main/java/ir/arnitex/backend/controller/CoinController.java",AdminController:"src/main/java/ir/arnitex/backend/controller/AdminController.java",GiftCodeController:"src/main/java/ir/arnitex/backend/controller/GiftCodeController.java",ReferralCodeController:"src/main/java/ir/arnitex/backend/controller/ReferralCodeController.java",TicketController:"src/main/java/ir/arnitex/backend/controller/TicketController.java",BlogController:"src/main/java/ir/arnitex/backend/controller/BlogController.java",ExchangeActionController:"src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java",RolesController:"src/main/java/ir/arnitex/backend/controller/RolesController.java",OrderService:"src/main/java/ir/arnitex/backend/service/OrderService.java",WalletService:"src/main/java/ir/arnitex/backend/service/WalletService.java",ApieService:"src/main/java/ir/arnitex/backend/service/ApieService.java",TradeService:"src/main/java/ir/arnitex/backend/service/TradeService.java",CustomerService:"src/main/java/ir/arnitex/backend/service/CustomerService.java",MarketService:"src/main/java/ir/arnitex/backend/service/MarketService.java",CoinService:"src/main/java/ir/arnitex/backend/service/CoinService.java",AdminService:"src/main/java/ir/arnitex/backend/service/AdminService.java",GiftCodeService:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",ReferralCodeService:"src/main/java/ir/arnitex/backend/service/ReferralCodeService.java",TicketService:"src/main/java/ir/arnitex/backend/service/TicketService.java",BlogService:"src/main/java/ir/arnitex/backend/service/BlogService.java",RoleService:"src/main/java/ir/arnitex/backend/service/RoleService.java",Level2_DatabaseAuth:"src/main/java/ir/arnitex/backend/domain/",Level3_CustomerIdentity:"src/main/java/ir/arnitex/backend/service/CustomerService.java",Level4_Notifications:"src/main/java/ir/arnitex/backend/service/",Level5_WalletServices:"src/main/java/ir/arnitex/backend/service/WalletService.java",Level6_Blockchain:"src/main/java/ir/arnitex/backend/service/ApieService.java",Level7_TradingEngine:"src/main/java/ir/arnitex/backend/service/OrderService.java",Level8_MarketManagement:"src/main/java/ir/arnitex/backend/service/MarketService.java",Level9_TradingControllers:"src/main/java/ir/arnitex/backend/controller/OrderController.java",Level10_WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",Level11_PaymentGateways:"src/main/java/ir/arnitex/backend/service/paymentgateway/",Level12_KYCIdentity:"src/main/java/ir/arnitex/backend/service/FinoTechService.java",Level13_AdminRBAC:"src/main/java/ir/arnitex/backend/service/AdminService.java",Level14_OTCExchange:"src/main/java/ir/arnitex/backend/service/ExchangeActionService.java",Level15_SupportContent:"src/main/java/ir/arnitex/backend/service/TicketService.java",Level16_Promotional:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",Level17_AdditionalServices:"src/main/java/ir/arnitex/backend/service/ExchangeSettingService.java",Level18_TestingDocumentation:null},Ar=t=>xr.includes(t)?!1:Ke[t]!==void 0&&Ke[t]!==null,Ir=t=>Ke[t]||null,ut=(t,r)=>{const i="I'm building a NestJS cryptocurrency exchange platform called BitniTex. ",a=`This is part of: ${r}. `,c=`I need help with: ${t.title}. `,o=t.instructions.length>0?`Here's what I need to do: ${t.instructions.join(". ")}. `:"",d=t.code?`I have this code/command: ${t.code}. `:"",s=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"";return`${i}${a}${c}${o}${d}${s}Please provide clear instructions, code examples if needed, and explain any important concepts.`},kt=(t,r,i)=>{if(!Ar(i))return`I'm building a NestJS cryptocurrency exchange platform called BitniTex. This step involves: ${t.title}. ${t.instructions.join(". ")}. ${t.expectedResult?`The expected result should be: ${t.expectedResult}.`:""} Please help me implement this step with best practices for NestJS. Note: This is a new feature or infrastructure setup, so there is no existing Java code to reference.`;const a=Ir(i);if(!a)return ut(t,r);const c="I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. ",o=a.endsWith("/"),d=o?`The Java source files for this component are located in: ${a} `:`The Java source file for this component is located at: ${a} `,s=`This is part of: ${r}. `,u=`I need to translate and implement: ${t.title}. `,y=t.instructions.length>0?`The step involves: ${t.instructions.join(". ")}. `:"",P=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"",G=o?`Please read all Java source files in the directory ${a}, understand their implementations, and translate them to NestJS TypeScript.`:`Please read the Java source file at ${a}, understand its implementation, and translate it to NestJS TypeScript.`;return`${c}${d}${s}${u}${y}${P}${G} Maintain the same functionality, endpoints, business logic, and data structures. Adapt Spring Boot annotations to NestJS decorators, Spring Data JPA to TypeORM, and Java types to TypeScript types.`},Pr=({task:t,onCompleteStep:r,onNextTask:i})=>{const[a,c]=k.useState(0),[o,d]=k.useState(new Set),[s,u]=k.useState("classic");if(k.useEffect(()=>{t&&(c(0),d(new Set))},[t==null?void 0:t.id]),!t||!t.id)return e.jsx("div",{className:"step-guide-container",children:"No task selected"});let y=jt(t.id);if(y||(y=Tr(t)),!y||!y.steps||y.steps.length===0)return e.jsx("div",{className:"step-guide-container",children:"No guide available for this task"});const P=y.steps,G=P[a],ae=()=>{const A=new Set(o);A.add(a),d(A),a<P.length-1?c(a+1):r==null||r()};qe.useEffect(()=>{t&&y&&(c(0),d(new Set))},[t==null?void 0:t.id]);const Ce=()=>{a<P.length-1&&c(a+1)},X=(a+1)/P.length*100;return e.jsxs("div",{className:"step-guide-container",children:[e.jsxs("div",{className:"step-guide-header",children:[e.jsxs("div",{className:"step-guide-title-section",children:[e.jsx("h2",{className:"step-guide-title",children:y.title}),e.jsx("p",{className:"step-guide-description",children:y.description})]}),e.jsxs("div",{className:"step-guide-controls",children:[e.jsxs("div",{className:"step-guide-progress",children:[e.jsx("div",{className:"step-progress-bar",children:e.jsx("div",{className:"step-progress-fill",style:{width:`${X}%`}})}),e.jsxs("span",{className:"step-progress-text",children:["Step ",a+1," of ",P.length]})]}),e.jsxs("div",{className:"mode-toggle",children:[e.jsx("button",{className:`mode-toggle-btn ${s==="classic"?"active":""}`,onClick:()=>u("classic"),title:"Classic Step-by-Step Mode",children:"📋 Classic"}),e.jsx("button",{className:`mode-toggle-btn ${s==="ai"?"active":""}`,onClick:()=>u("ai"),title:"AI Mode - Get AI prompts",children:"🤖 AI Mode"}),e.jsx("button",{className:`mode-toggle-btn ${s==="java-import"?"active":""}`,onClick:()=>u("java-import"),title:"Java Import Mode - Translate from Java source",children:"☕ Java Import"})]})]})]}),e.jsxs("div",{className:"step-content",children:[e.jsx("div",{className:"step-number-badge",children:e.jsx("span",{className:"step-number",children:G.step})}),e.jsxs("div",{className:"step-main-content",children:[e.jsx("h3",{className:"step-title",children:G.title}),s==="ai"||s==="java-import"?e.jsxs("div",{className:"ai-mode-content",children:[e.jsxs("div",{className:"ai-prompt-section",children:[e.jsx("h4",{children:s==="java-import"?"☕ Java Import Prompt:":"🤖 AI Prompt:"}),e.jsxs("div",{className:`ai-prompt-box ${s==="java-import"?"java-import-box":""}`,children:[e.jsx("p",{className:"ai-prompt-text",children:s==="java-import"?G.javaImportPrompt||kt(G,y.title,t.id):G.aiPrompt||ut(G,y.title)}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{const A=s==="java-import"?G.javaImportPrompt||kt(G,y.title,t.id):G.aiPrompt||ut(G,y.title);navigator.clipboard.writeText(A),alert("Prompt copied to clipboard! Paste it into your AI assistant.")},children:"📋 Copy Prompt"})]}),e.jsx("div",{className:"ai-hint",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Tip:"})," ",s==="java-import"?"Copy this prompt and paste it into your AI assistant. The AI will read the Java source file from the project and translate it to NestJS TypeScript.":"Copy this prompt and paste it into your AI assistant (like ChatGPT, Claude, or Cursor AI) to get help with this step!"]})})]}),G.expectedResult&&e.jsxs("div",{className:"ai-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:G.expectedResult})]}),s==="java-import"&&e.jsxs("div",{className:"java-file-reference",children:[e.jsx("h4",{children:"📁 Java Source File:"}),Ke[t.id]?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"java-file-path",children:[e.jsx("code",{children:Ke[t.id]}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(Ke[t.id]),alert("File path copied to clipboard!")},children:"📋 Copy Path"})]}),e.jsx("p",{className:"java-file-hint",children:"The AI will read this file from the project codebase and translate it to NestJS."})]}):e.jsx("p",{className:"java-file-hint",style:{color:"var(--text-muted)",fontStyle:"italic"},children:"No specific Java file mapping for this task. The prompt will reference the general project structure."})]}),G.code&&e.jsxs("div",{className:"ai-code-reference",children:[e.jsx("h4",{children:"💡 Reference Code (if needed):"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:G.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(G.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-instructions",children:[e.jsx("h4",{children:"📋 Instructions:"}),e.jsx("ol",{className:"instructions-list",children:G.instructions.map((A,de)=>e.jsx("li",{children:A},de))})]}),G.code&&e.jsxs("div",{className:"step-code",children:[e.jsx("h4",{children:"💻 Code:"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:G.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(G.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]}),G.expectedResult&&e.jsxs("div",{className:"step-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:G.expectedResult})]})]})]})]}),e.jsxs("div",{className:"step-navigation",children:[a>0&&e.jsx("button",{className:"step-btn step-btn-secondary",onClick:()=>c(a-1),children:"← Previous Step"}),e.jsxs("div",{className:"step-actions",children:[e.jsx("button",{className:"step-btn step-btn-skip",onClick:Ce,disabled:a===P.length-1,children:"Skip Step"}),e.jsx("button",{className:"step-btn step-btn-primary",onClick:ae,children:a===P.length-1?"🎉 Complete Task":"✓ Complete Step →"})]})]}),a===P.length-1&&o.has(a)&&y.nextTask&&e.jsxs("div",{className:"step-unlock-message",children:[e.jsx("div",{className:"unlock-icon",children:"🎉"}),e.jsx("p",{className:"unlock-text",children:y.unlockMessage}),i&&e.jsx("button",{className:"step-btn step-btn-unlock",onClick:()=>i(y.nextTask),children:"Start Next Task →"})]}),e.jsxs("div",{className:"step-overview",children:[e.jsx("h4",{children:"Step Overview:"}),e.jsx("div",{className:"steps-list",children:P.map((A,de)=>e.jsxs("div",{className:`step-item ${de===a?"active":""} ${o.has(de)?"completed":""}`,onClick:()=>c(de),children:[e.jsx("span",{className:"step-item-number",children:A.step}),e.jsx("span",{className:"step-item-title",children:A.title}),o.has(de)&&e.jsx("span",{className:"step-check",children:"✓"})]},de))})]})]})},Er=({subtask:t,idx:r,taskId:i,isCompleted:a,toggleSubtask:c})=>{const[o,d]=k.useState(!1),[s,u]=k.useState("ai"),y=t.id||`subtask-${r}-${t.title}`,P=t.aiPrompt||null,G=t.javaImportPrompt||null;return e.jsxs("div",{className:"subtask-item",children:[e.jsxs("div",{className:"subtask-main",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:ae=>{ae.stopPropagation(),console.log("🔄 Toggling subtask:",y,"Current state:",a),c(i,y)},onClick:ae=>ae.stopPropagation(),className:"subtask-checkbox"}),e.jsx("span",{className:a?"completed":"",children:t.title||t.name||`Subtask ${r+1}`}),P&&e.jsx("button",{className:"subtask-ai-btn",onClick:ae=>{ae.stopPropagation(),d(!o),u("ai")},title:"Show AI Prompt",children:"🤖 AI"}),G&&e.jsx("button",{className:"subtask-ai-btn",style:{marginLeft:"8px",background:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"},onClick:ae=>{ae.stopPropagation(),d(!o),u("java")},title:"Show Java Import Prompt",children:"☕ Java"})]}),o&&e.jsxs("div",{className:"subtask-ai-prompt",children:[e.jsxs("div",{className:"ai-prompt-header",children:[e.jsx("span",{children:s==="java"?"☕ Java Import Prompt":"🤖 AI Assistant Prompt"}),G&&P&&e.jsx("button",{className:"ai-prompt-switch",onClick:ae=>{ae.stopPropagation(),u(s==="ai"?"java":"ai")},style:{marginRight:"8px",padding:"4px 8px",fontSize:"11px",background:"var(--bg-secondary)",border:"1px solid var(--border-primary)",borderRadius:"4px",cursor:"pointer"},children:s==="ai"?"☕ Switch to Java":"🤖 Switch to AI"}),e.jsx("button",{className:"ai-prompt-close",onClick:ae=>{ae.stopPropagation(),d(!1)},children:"✕"})]}),e.jsx("div",{className:"ai-prompt-content",children:s==="java"&&G?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:G}),e.jsx("button",{className:"ai-prompt-copy",onClick:ae=>{ae.stopPropagation(),navigator.clipboard.writeText(G),alert("Java import prompt copied to clipboard!")},children:"📋 Copy Java Prompt"})]}):P?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:P}),e.jsx("button",{className:"ai-prompt-copy",onClick:ae=>{ae.stopPropagation(),navigator.clipboard.writeText(P),alert("AI prompt copied to clipboard!")},children:"📋 Copy Prompt"})]}):e.jsx("p",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"AI prompt will be generated automatically. This feature helps you get professional implementation guidance for this subtask."})})]})]})},Rr=()=>{var te,R,W;const{tasks:t,showTodoPanel:r,setShowTodoPanel:i,selectedTask:a,setSelectedTask:c,filterStatus:o,filterCategory:d,setFilterStatus:s,setFilterCategory:u,updateTaskStatus:y,updateTaskPriority:P,addSubtask:G,toggleSubtask:ae,addNote:Ce,updateActualHours:X,getProgress:A,getCategoryProgress:de,getOrCreateTask:V}=tt(),[be,Te]=k.useState(""),[Ie,Ee]=k.useState(""),[Ne,ke]=k.useState(null),[Oe,je]=k.useState(!0),[Me,ve]=k.useState(!1),[Ae,xe]=k.useState(null);qe.useEffect(()=>{let n=!1;return(async()=>{if(!a){xe(null),ve(!1);return}if(console.log("🔄 useEffect: Loading task:",a,"Current task:",Ae==null?void 0:Ae.id),t[a]){console.log("✅ Task found in store:",a),n||(xe(t[a]),ve(!1));return}ve(!0);try{console.log("📦 Creating task:",a);const U=await V(a);if(!U){console.error("❌ Task is null:",a),n||ve(!1);return}console.log("✅ Task created:",U.id,U.title),n||(xe(U),ve(!1),setTimeout(()=>{!n&&t[a]&&(console.log("🔄 Syncing from store:",a),xe(t[a]))},200))}catch(U){if(console.error("❌ Error loading task:",U),!n){const J={id:a,nodeId:a,title:`${a} Development`,description:`Task for ${a}`,status:ne.NOT_STARTED,priority:l.MEDIUM,category:"Other",estimatedHours:4,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};xe(J),ve(!1)}}})(),()=>{n=!0}},[a]),qe.useEffect(()=>{if(a&&t[a]){const n=t[a];(!Ae||Ae.id!==n.id||Ae.status!==n.status)&&(console.log("🔄 Syncing task from store:",a,"Status:",n.status),xe(n))}},[t,a,Ae]),qe.useEffect(()=>{a&&t[a]&&xe(t[a])},[a,t]);const pe=a?t[a]:null;if(!r)return null;const De=A(),Be=Object.values(t).filter(n=>!(!n||!n.id||!n.id.startsWith("Level")||o&&n.status!==o||d&&n.category!==d)).sort((n,v)=>{const U=ue=>{const Se=ue.match(/^Level(\d+)_/);return Se?parseInt(Se[1],10):999},J=U(n.id),ge=U(v.id);return J-ge}),rt=[...new Set(Object.values(t).filter(n=>n&&n.id&&n.id.startsWith("Level")&&n.category).map(n=>n.category))],Ue=n=>{switch(n){case ne.COMPLETED:return"#10b981";case ne.IN_PROGRESS:return"#3b82f6";case ne.BLOCKED:return"#ef4444";default:return"#6b7280"}},he=n=>{switch(n){case l.CRITICAL:return"#ef4444";case l.HIGH:return"#f59e0b";case l.MEDIUM:return"#3b82f6";default:return"#6b7280"}},f=n=>{be.trim()&&(G(n,{id:`${n}-subtask-${Date.now()}`,title:be.trim()}),Te(""))},S=n=>{Ie.trim()&&(Ce(n,Ie.trim()),Ee(""))},h=pe?{...pe,notes:Array.isArray(pe.notes)?pe.notes:pe.notes&&typeof pe.notes=="string"&&pe.notes.trim()?pe.notes.split(`
`).filter(n=>n.trim()).map((n,v)=>({id:`note-${v}`,content:n.trim(),createdAt:new Date().toISOString()})):[],subtasks:(()=>{if(Array.isArray(pe.subtasks))return pe.subtasks.map((n,v)=>typeof n=="string"?{id:`subtask-${v}`,title:n,completed:!1,aiPrompt:null}:typeof n=="object"&&n!==null?{id:n.id||`subtask-${v}`,title:n.title||n.name||String(n),completed:n.completed===!0||n.completed==="true"||n.completed===1||!1,aiPrompt:n.aiPrompt||null}:{id:`subtask-${v}`,title:String(n),completed:!1,aiPrompt:null});if(pe.subtasks&&typeof pe.subtasks=="string")try{const n=JSON.parse(pe.subtasks);if(Array.isArray(n))return n.map((v,U)=>typeof v=="string"?{id:`subtask-${U}`,title:v,completed:!1,aiPrompt:null}:typeof v=="object"&&v!==null?{id:v.id||`subtask-${U}`,title:v.title||v.name||String(v),completed:v.completed===!0||v.completed==="true"||v.completed===1||!1,aiPrompt:v.aiPrompt||null}:{id:`subtask-${U}`,title:String(v),completed:!1,aiPrompt:null})}catch(n){console.warn("Failed to parse subtasks JSON:",n)}return[]})()}:null,I=Mt(t),E=Object.values(t).some(n=>n.status===ne.COMPLETED),Z=h!==null;return e.jsx("div",{className:"todo-panel-overlay",children:e.jsxs("div",{className:"todo-panel",children:[e.jsxs("div",{className:"todo-panel-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"🚀 BitniTex Project Tracker"}),e.jsx("p",{className:"todo-subtitle",children:"Track your project progress step by step"})]}),e.jsx("button",{className:"todo-close-btn",onClick:()=>i(!1),children:"✕"})]}),e.jsxs("div",{className:"todo-progress-section",children:[!a&&I&&e.jsxs("div",{className:"start-here-banner",children:[e.jsxs("div",{className:"start-here-content",children:[e.jsx("div",{className:"start-here-icon",children:"🎮"}),e.jsxs("div",{children:[e.jsx("h3",{children:E?"Ready to Continue?":"Ready to Start?"}),e.jsxs("p",{children:[E?"Continue with":"Begin with",": ",e.jsx("strong",{children:((te=I.guide)==null?void 0:te.title)||I.title||"Next Task"})]})]})]}),e.jsx("button",{className:"start-here-btn",onClick:async()=>{var v;const n=(I==null?void 0:I.id)||"ProjectSetup";console.log('🚀 Starting from "Start Here" button:',n,"Task status:",(v=t[n])==null?void 0:v.status),t[n]||await V(n),c(n),je(!0)},children:E?"▶️ Continue":"🚀 Start Here"})]}),e.jsxs("div",{className:"progress-bar-container",children:[e.jsx("div",{className:"progress-bar-fill",style:{width:`${De.percentage}%`}}),e.jsxs("span",{className:"progress-bar-text",children:[De.percentage,"% Complete"]})]}),e.jsxs("div",{className:"progress-stats",children:[e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.completed}),e.jsx("span",{className:"stat-label",children:"Completed"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.inProgress}),e.jsx("span",{className:"stat-label",children:"In Progress"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.notStarted}),e.jsx("span",{className:"stat-label",children:"Not Started"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[De.totalEstimated,"h"]}),e.jsx("span",{className:"stat-label",children:"Estimated"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[De.totalActual,"h"]}),e.jsx("span",{className:"stat-label",children:"Actual"})]})]})]}),e.jsxs("div",{className:"todo-content",children:[e.jsxs("div",{className:"todo-sidebar",children:[e.jsxs("div",{className:"todo-filters",children:[e.jsxs("select",{value:d||"",onChange:n=>u(n.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Categories"}),rt.map(n=>{const v=de(n);return e.jsxs("option",{value:n,children:[n," (",v.percentage,"%)"]},n)})]}),e.jsxs("select",{value:o||"",onChange:n=>s(n.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:ne.NOT_STARTED,children:"Not Started"}),e.jsx("option",{value:ne.IN_PROGRESS,children:"In Progress"}),e.jsx("option",{value:ne.COMPLETED,children:"Completed"}),e.jsx("option",{value:ne.BLOCKED,children:"Blocked"})]})]}),e.jsx("div",{className:"todo-task-list",children:Be.filter(n=>n&&n.id).map(n=>{var ge,ue;const v=((ge=n.subtasks)==null?void 0:ge.filter(Se=>Se.completed).length)||0,U=((ue=n.subtasks)==null?void 0:ue.length)||0,J=n.isMissing===!0||n.isMissing==="true"||n.isMissing===1;return e.jsx("div",{className:`todo-task-item ${a===n.id?"active":""} ${J?"missing-task":""}`,onClick:()=>c(n.id),style:J?{borderLeft:"4px solid #a855f7",backgroundColor:"rgba(168, 85, 247, 0.05)"}:{},children:e.jsxs("div",{className:"task-item-header",children:[e.jsx("div",{className:"task-status-indicator",style:{backgroundColor:J?"#a855f7":Ue(n.status),border:J?"2px dashed #a855f7":"none"}}),e.jsxs("div",{className:"task-item-content",children:[e.jsxs("h4",{children:[n.title,J&&e.jsx("span",{className:"missing-badge",title:"Advanced Component - Not in original Java codebase",children:"🚀 ADVANCED"})]}),e.jsxs("div",{className:"task-item-meta",children:[e.jsx("span",{className:"task-category",children:n.category}),e.jsx("span",{className:"task-priority",style:{color:he(n.priority)},children:n.priority})]}),U>0&&e.jsxs("div",{className:"task-subtasks-progress",children:[v,"/",U," subtasks"]})]})]})},n.id)})})]}),e.jsx("div",{className:"todo-main",children:Me&&!pe?e.jsxs("div",{className:"task-loading",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading task..."})]}):pe?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-detail-header",children:[e.jsxs("div",{children:[e.jsx("h3",{children:pe.title}),e.jsx("p",{className:"task-description",children:pe.description})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[Z&&e.jsx("button",{className:`guide-toggle-btn ${Oe?"active":""}`,onClick:()=>je(!Oe),title:Oe?"Hide Step-by-Step Guide":"Show Step-by-Step Guide",children:Oe?"📖 Guide":"📋 Details"}),e.jsx("div",{className:"task-priority-badge",style:{backgroundColor:he(pe.priority),color:"#fff"},children:pe.priority})]})]}),Oe&&Z&&pe&&pe.id&&e.jsx(Pr,{task:pe,onCompleteStep:()=>{pe&&y(pe.id,ne.COMPLETED)},onNextTask:async n=>{try{const v=t[a]||pe;console.log("🔄 Starting next task:",n),console.log("📊 Current task before transition:",v==null?void 0:v.id,"Status:",v==null?void 0:v.status),console.log("📊 Selected task ID:",a),window.location.hash&&window.history.replaceState(null,"",window.location.pathname+window.location.search),v&&v.status!==ne.COMPLETED&&(console.log("⚠️ Marking current task as completed:",v.id),y(v.id,ne.COMPLETED),await new Promise(J=>setTimeout(J,300))),console.log("📦 Creating/getting NEXT task:",n);const U=await V(n);console.log("✅ Next task created/loaded:",U.id,U.status),await new Promise(J=>setTimeout(J,200)),console.log("🎯 Setting NEW task:",n),xe(U),c(n),je(!0),await new Promise(J=>setTimeout(J,100)),setTimeout(async()=>{if(t[n])xe(t[n]);else{console.log("⚠️ Task not in store, reloading...");const ge=await V(n);xe(ge)}const J=document.querySelector(".todo-panel");J&&(J.scrollTop=0)},300)}catch(v){console.error("❌ Error:",v);const U={id:n,nodeId:n,title:`${n} Development`,description:`Task for ${n}`,status:ne.NOT_STARTED,priority:l.MEDIUM,category:"Infrastructure",estimatedHours:8,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};xe(U),c(n),je(!0),console.log("⚠️ Using fallback task:",U)}}}),(!Oe||!Z)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Status"}),e.jsx("div",{className:"status-buttons",children:Object.values(ne).map((n,v)=>e.jsx("button",{className:`status-btn ${(h==null?void 0:h.status)===n?"active":""}`,style:{backgroundColor:(h==null?void 0:h.status)===n?Ue(n):"transparent",borderColor:Ue(n),color:(h==null?void 0:h.status)===n?"#fff":Ue(n)},onClick:()=>y(pe.id,n),children:n.replace("_"," ")},n))})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Time Tracking"}),e.jsxs("div",{className:"time-tracking",children:[e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Estimated:"}),e.jsxs("strong",{children:[(h==null?void 0:h.estimatedHours)||0,"h"]})]}),e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Actual:"}),Ne===pe.id?e.jsx("input",{type:"number",value:(h==null?void 0:h.actualHours)||0,onChange:n=>X(pe.id,parseFloat(n.target.value)||0),onBlur:()=>ke(null),autoFocus:!0,className:"hours-input"}):e.jsxs("strong",{onClick:()=>ke(pe.id),style:{cursor:"pointer"},children:[(h==null?void 0:h.actualHours)||0,"h ✏️"]})]})]})]}),(h==null?void 0:h.dependencies)&&Array.isArray(h.dependencies)&&h.dependencies.length>0&&e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Dependencies"}),e.jsx("div",{className:"dependencies",children:h.dependencies.map(n=>e.jsx("span",{className:"dependency-tag",children:n},n))})]}),e.jsxs("div",{className:"task-section",children:[e.jsxs("label",{className:"section-label",children:["Subtasks (",((R=h==null?void 0:h.subtasks)==null?void 0:R.filter(n=>n.completed).length)||0,"/",((W=h==null?void 0:h.subtasks)==null?void 0:W.length)||0,")"]}),e.jsx("div",{className:"subtasks-list",children:(()=>{var n;return h&&console.log("🔍 Subtasks Debug:",{hasNormalizedTask:!!h,subtasksRaw:pe==null?void 0:pe.subtasks,subtasksNormalized:h.subtasks,subtasksLength:(n=h.subtasks)==null?void 0:n.length,subtasksType:typeof h.subtasks,isArray:Array.isArray(h.subtasks)}),h!=null&&h.subtasks&&Array.isArray(h.subtasks)&&h.subtasks.length>0?h.subtasks.map((v,U)=>{const J=v.id||`subtask-${U}-${v.title}`,ge=v.completed===!0||v.completed==="true"||v.completed===1;return e.jsx(Er,{subtask:v,idx:U,taskId:pe.id,isCompleted:ge,toggleSubtask:ae},J)}):e.jsx("div",{className:"no-subtasks",children:"No subtasks yet"})})()}),e.jsxs("div",{className:"add-subtask",children:[e.jsx("input",{type:"text",value:be,onChange:n=>Te(n.target.value),onKeyPress:n=>n.key==="Enter"&&f(pe.id),placeholder:"Add new subtask...",className:"subtask-input"}),e.jsx("button",{onClick:()=>f(pe.id),className:"add-btn",children:"+"})]})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Notes"}),e.jsx("div",{className:"notes-list",children:h!=null&&h.notes&&Array.isArray(h.notes)&&h.notes.length>0?h.notes.map((n,v)=>{const U=typeof n=="object"?n.id||`note-${v}`:`note-${v}`,J=typeof n=="object"?n.content:n,ge=typeof n=="object"&&n.createdAt?n.createdAt:new Date().toISOString();return e.jsxs("div",{className:"note-item",children:[e.jsx("p",{children:J}),e.jsx("span",{className:"note-date",children:new Date(ge).toLocaleString()})]},U)}):e.jsx("div",{className:"no-notes",children:"No notes yet"})}),e.jsxs("div",{className:"add-note",children:[e.jsx("textarea",{value:Ie,onChange:n=>Ee(n.target.value),placeholder:"Add a note...",className:"note-textarea"}),e.jsx("button",{onClick:()=>S(pe.id),className:"add-btn",children:"Add Note"})]})]})]})]}):e.jsxs("div",{className:"no-task-selected",children:[e.jsx("div",{className:"empty-state-icon",children:"📋"}),e.jsx("p",{children:"Select a task to view details"})]})})]})]})})},Lr=()=>{const{selectedNode:t,setSelectedNode:r,setShowApiTester:i}=$e(),[a,c]=k.useState(null),[o,d]=k.useState("{}"),[s,u]=k.useState(null),[y,P]=k.useState(!1),[G,ae]=k.useState("http://localhost:8080"),[Ce,X]=k.useState(`{
  "Content-Type": "application/json"
}`),A=t?et(t):null;k.useEffect(()=>{A&&A.endpoints&&A.endpoints.length>0&&!a&&(c(A.endpoints[0]),d("{}"),u(null))},[A,a]),k.useEffect(()=>{a&&(d("{}"),u(null))},[a==null?void 0:a.path]);const de=async V=>{c(V),P(!0),u(null);try{let be={};try{be=JSON.parse(Ce)}catch(ve){u({error:!0,message:`Invalid JSON in headers: ${ve.message}`,time:0}),P(!1);return}let Te=null;if(["POST","PUT","PATCH"].includes(V.method))try{Te=JSON.parse(o)}catch(ve){u({error:!0,message:`Invalid JSON in request body: ${ve.message}`,time:0}),P(!1);return}const Ie=`${G.replace(/\/$/,"")}${V.path}`,Ee={method:V.method,headers:{"Content-Type":"application/json",...be},mode:"cors"};Te!==null&&(Ee.body=JSON.stringify(Te));const Ne=Date.now();let ke;try{ke=await fetch(Ie,Ee)}catch(ve){throw new Error(`Network error: ${ve.message}. Make sure the server is running and CORS is enabled.`)}const Oe=Date.now(),je=ke.headers.get("content-type")||"";let Me;if(je.includes("application/json"))try{Me=await ke.json()}catch{Me=await ke.text()}else Me=await ke.text();u({status:ke.status,statusText:ke.statusText,headers:Object.fromEntries(ke.headers.entries()),data:Me,time:Oe-Ne,url:Ie})}catch(be){u({error:!0,message:be.message||"Unknown error occurred",time:0})}finally{P(!1)}};return k.useEffect(()=>{t&&(console.log("API Tester - Selected Node:",t),console.log("API Tester - Node Details:",A),A&&console.log("API Tester - Endpoints:",A.endpoints))},[t,A]),t?A?!A.endpoints||A.endpoints.length===0?e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"📭"}),e.jsx("div",{className:"empty-text",children:"No endpoints available"}),e.jsxs("div",{className:"empty-hint",children:["Component: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have any API endpoints defined. Endpoints are typically defined for Controllers."]})]}):e.jsxs("div",{className:"api-tester",children:[e.jsxs("div",{className:"api-tester-header",children:[e.jsxs("div",{className:"api-tester-title",children:[e.jsx("span",{className:"api-tester-icon",children:"🧪"}),e.jsx("span",{children:"API Endpoint Tester"})]}),e.jsx("button",{className:"api-tester-close",onClick:()=>i(!1),title:"Close",children:"✕"})]}),e.jsxs("div",{className:"api-tester-content",children:[e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Base URL"}),e.jsx("input",{type:"text",className:"api-tester-input",value:G,onChange:V=>ae(V.target.value),placeholder:"http://localhost:8080"})]}),e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Endpoints"}),e.jsx("div",{className:"endpoints-list",children:A.endpoints.map((V,be)=>e.jsxs("div",{className:`endpoint-item ${a===V?"active":""}`,onClick:()=>de(V),children:[e.jsx("span",{className:`method-badge method-${V.method.toLowerCase()}`,children:V.method}),e.jsx("span",{className:"endpoint-path",children:V.path}),V.description&&e.jsx("span",{className:"endpoint-desc",children:V.description})]},be))})]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"api-tester-section",children:e.jsxs("label",{className:"api-tester-label",children:["Request URL",e.jsxs("span",{className:"request-url",children:[G.replace(/\/$/,""),a.path]})]})}),e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Headers",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:Ce,onChange:V=>X(V.target.value),rows:4,placeholder:'{\\n  "Authorization": "Bearer your-token-here",\\n  "X-Custom-Header": "value"\\n}'})]}),["POST","PUT","PATCH"].includes(a.method)&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Request Body",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:o,onChange:V=>d(V.target.value),rows:10,placeholder:'{\\n  "key": "value",\\n  "number": 123\\n}'})]}),e.jsx("button",{className:"api-tester-send-btn",onClick:()=>de(a),disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Sending Request..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🚀"}),"Send Request"]})})]}),s&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("div",{className:"response-header",children:[e.jsxs("label",{className:"api-tester-label",children:["Response",s.time>0&&e.jsxs("span",{className:"response-time",children:["(",s.time,"ms)"]})]}),s.url&&e.jsxs("div",{className:"response-url",children:[e.jsx("span",{className:"url-label",children:"URL:"}),e.jsx("code",{className:"url-value",children:s.url}),e.jsx("button",{className:"copy-btn",onClick:()=>{navigator.clipboard.writeText(s.url)},title:"Copy URL",children:"📋"})]})]}),e.jsx("div",{className:`response-container ${s.error?"error":`status-${Math.floor(s.status/100)}xx`}`,children:s.error?e.jsxs("div",{className:"response-error",children:[e.jsx("div",{className:"error-title",children:"❌ Error"}),e.jsx("div",{className:"error-message",children:s.message}),e.jsxs("div",{className:"error-hint",children:[e.jsx("strong",{children:"Tips:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check if the server is running"}),e.jsx("li",{children:"Verify the base URL is correct"}),e.jsx("li",{children:"Ensure CORS is enabled on the server"}),e.jsx("li",{children:"Check browser console for more details"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"response-status",children:e.jsxs("span",{className:`status-badge status-${Math.floor(s.status/100)}xx`,children:[s.status," ",s.statusText]})}),e.jsxs("div",{className:"response-headers",children:[e.jsxs("div",{className:"response-headers-title",children:["Response Headers",e.jsx("button",{className:"copy-btn-small",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(s.headers,null,2))},title:"Copy headers",children:"📋"})]}),e.jsx("pre",{className:"response-headers-content",children:JSON.stringify(s.headers,null,2)})]}),e.jsxs("div",{className:"response-body",children:[e.jsxs("div",{className:"response-body-title",children:["Response Body",e.jsx("button",{className:"copy-btn-small",onClick:()=>{const V=typeof s.data=="string"?s.data:JSON.stringify(s.data,null,2);navigator.clipboard.writeText(V)},title:"Copy body",children:"📋"})]}),e.jsx("pre",{className:"response-body-content",children:typeof s.data=="string"?s.data:JSON.stringify(s.data,null,2)})]})]})})]})]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"❓"}),e.jsx("div",{className:"empty-text",children:"Component not found"}),e.jsxs("div",{className:"empty-hint",children:["Selected: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have endpoint definitions yet. Try clicking on a Controller or Service component."]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"🔌"}),e.jsx("div",{className:"empty-text",children:"No component selected"}),e.jsx("div",{className:"empty-hint",children:'Click on a component in the diagram (like "AdminController" or "CustomerController") to test its endpoints'})]})},Nr=()=>{const{sidebarCollapsed:t,selectedNode:r,isFullscreen:i,showApiTester:a,toggleSidebar:c}=$e();return e.jsxs("div",{className:`app-container ${i?"fullscreen-mode":""} ${t?"":"sidebar-open"}`,children:[!i&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"sidebar-backdrop",onClick:c,"aria-hidden":"true"}),e.jsx(mr,{})]}),e.jsxs("main",{className:"main-content",children:[!i&&e.jsx(gr,{}),e.jsx(Cr,{}),e.jsx(br,{}),r&&!i&&e.jsx(wr,{})]}),e.jsx(Rr,{}),a&&e.jsx(Lr,{})]})};class Or extends qe.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,i){console.error("React Error:",r,i)}render(){var r;return this.state.hasError?e.jsxs("div",{style:{padding:"20px",color:"white",background:"#0a0e1a"},children:[e.jsx("h1",{children:"Something went wrong"}),e.jsx("pre",{style:{color:"#ef4444"},children:(r=this.state.error)==null?void 0:r.toString()}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]}):this.props.children}}function Mr(){return e.jsx(Or,{children:e.jsx(Zt,{children:e.jsx(Pt,{children:e.jsx(Nr,{})})})})}dt.createRoot(document.getElementById("root")).render(e.jsx(qe.StrictMode,{children:e.jsx(Mr,{})}));
