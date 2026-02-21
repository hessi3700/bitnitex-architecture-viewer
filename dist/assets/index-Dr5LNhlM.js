import{r as k,a as Jt,R as He}from"./react-vendor-KfUPlHYY.js";import{_ as Se,m as wt}from"./mermaid-CKqTDO4C.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))a(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function i(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(c){if(c.ep)return;c.ep=!0;const o=i(c);fetch(c.href,o)}})();var kt={exports:{}},ot={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ut=k,Ht=Symbol.for("react.element"),qt=Symbol.for("react.fragment"),$t=Object.prototype.hasOwnProperty,Vt=Ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Yt={key:!0,ref:!0,__self:!0,__source:!0};function Tt(t,r,i){var a,c={},o=null,d=null;i!==void 0&&(o=""+i),r.key!==void 0&&(o=""+r.key),r.ref!==void 0&&(d=r.ref);for(a in r)$t.call(r,a)&&!Yt.hasOwnProperty(a)&&(c[a]=r[a]);if(t&&t.defaultProps)for(a in r=t.defaultProps,r)c[a]===void 0&&(c[a]=r[a]);return{$$typeof:Ht,type:t,key:o,ref:d,props:c,_owner:Vt.current}}ot.Fragment=qt;ot.jsx=Tt;ot.jsxs=Tt;kt.exports=ot;var e=kt.exports,ct={},ft=Jt;ct.createRoot=ft.createRoot,ct.hydrateRoot=ft.hydrateRoot;const xt=k.createContext(),qe=()=>{const t=k.useContext(xt);if(!t)throw new Error("useAppStore must be used within AppProvider");return t},Kt=({children:t})=>{const[r,i]=k.useState("everything"),[a,c]=k.useState(null),[o,d]=k.useState(["Overview"]),[n,u]=k.useState(1),[y,P]=k.useState(!0),[N,G]=k.useState(!1),[me,Z]=k.useState(!1),[q,ye]=k.useState(!1),[z,be]=k.useState(!1),xe=k.useCallback((ge,Ie=null)=>{i(ge),c(Ie);const Te=["Overview"];ge!=="overview"&&Te.push(ge),Ie&&Te.push(Ie),d(Te)},[]),Pe=k.useCallback(()=>{u(ge=>Math.min(ge+.2,3))},[]),ke=k.useCallback(()=>{u(ge=>Math.max(ge-.2,.3))},[]),Me=k.useCallback(()=>{u(1)},[]),Ae=k.useCallback(()=>{P(ge=>!ge)},[]),Le=k.useCallback(()=>{G(ge=>!ge)},[]),je=k.useCallback(()=>{Z(ge=>!ge)},[]),Ne={currentView:r,selectedNode:a,breadcrumbs:o,zoomLevel:n,setZoomLevel:u,showMinimap:y,sidebarCollapsed:N,isFullscreen:me,showApiTester:q,isEditMode:z,navigateToView:xe,zoomIn:Pe,zoomOut:ke,resetZoom:Me,toggleMinimap:Ae,toggleSidebar:Le,toggleFullscreen:je,setSelectedNode:c,setShowApiTester:ye,setIsEditMode:be};return e.jsx(xt.Provider,{value:Ne,children:t})},se={NOT_STARTED:"not_started",IN_PROGRESS:"in_progress",COMPLETED:"completed",BLOCKED:"blocked"},l={LOW:"low",MEDIUM:"medium",HIGH:"high",CRITICAL:"critical"},st=(t,r={})=>{if(!t)return null;const i=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").replace(/Controller|Service|C|S$/i,"").trim();if(!r||Object.keys(r).length===0)return console.warn(`⚠️ No database mappings available for node "${t}". Mappings must be seeded to the database first.`),null;if(r[i])return r[i];if(r[t])return r[t];const a=i.toLowerCase();for(const[y,P]of Object.entries(r))if(y.toLowerCase()===a)return P;const c=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").trim();if(r[c])return r[c];const o=i.replace(/\s+/g,"");if(r[o])return r[o];const d=i+"Service",n=i+"Controller";if(r[d])return r[d];if(r[n])return r[n];const u=[];for(const[y,P]of Object.entries(r)){const N=y.toLowerCase();(a.includes(N)||N.includes(a))&&u.push({key:y,level:P,length:y.length})}return u.length>0?(u.sort((y,P)=>P.length-y.length),u[0].level):(console.warn(`⚠️ Could not map node "${t}" to any Level task. Ensure mappings are seeded in the database.`),null)},We={AdminController:{title:"Admin Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:l.HIGH},CustomerController:{title:"Customer Controller",category:"Controllers",level:"Level3_CustomerIdentity",priority:l.CRITICAL},OrderController:{title:"Order Controller",category:"Controllers",level:"Level9_TradingControllers",priority:l.CRITICAL},WalletController:{title:"Wallet Controller",category:"Controllers",level:"Level10_WalletController",priority:l.CRITICAL},TradeController:{title:"Trade Controller",category:"Controllers",level:"Level9_TradingControllers",priority:l.CRITICAL},MarketController:{title:"Market Controller",category:"Controllers",level:"Level8_MarketManagement",priority:l.HIGH},CoinController:{title:"Coin Controller",category:"Controllers",level:"Level8_MarketManagement",priority:l.HIGH},ExchangeActionController:{title:"Exchange Action Controller",category:"Controllers",level:"Level14_OTCExchange",priority:l.HIGH},TicketController:{title:"Ticket Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},BlogController:{title:"Blog Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},GiftCodeController:{title:"Gift Code Controller",category:"Controllers",level:"Level16_Promotional",priority:l.MEDIUM},ReferralCodeController:{title:"Referral Code Controller",category:"Controllers",level:"Level16_Promotional",priority:l.MEDIUM},RolesController:{title:"Roles Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:l.HIGH},FinoTechController:{title:"FinoTech Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:l.HIGH},JibitController:{title:"Jibit Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:l.HIGH},AlarmController:{title:"Alarm Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},FileController:{title:"File Controller",category:"Controllers",level:"Level15_SupportContent",priority:l.MEDIUM},LanguageController:{title:"Language Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},CountryController:{title:"Country Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},ExchangeController:{title:"Exchange Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},ExchangeSettingController:{title:"Exchange Setting Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},HealthController:{title:"Health Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.LOW},VandarWebhookController:{title:"Vandar Webhook Controller",category:"Controllers",level:"Level11_PaymentGateways",priority:l.HIGH},AtmController:{title:"ATM Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},CreditCardController:{title:"Credit Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},SaminCardController:{title:"Samin Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},SocketController:{title:"Socket Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:l.MEDIUM},AdminService:{title:"Admin Service",category:"Services",level:"Level13_AdminRBAC",priority:l.HIGH},CustomerService:{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:l.CRITICAL},OrderService:{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},WalletService:{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},TradeService:{title:"Trade Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},MarketService:{title:"Market Service",category:"Services",level:"Level8_MarketManagement",priority:l.HIGH},CoinService:{title:"Coin Service",category:"Services",level:"Level8_MarketManagement",priority:l.HIGH},ApieService:{title:"Apie Service (Blockchain)",category:"Services",level:"Level6_Blockchain",priority:l.CRITICAL},GiftCodeService:{title:"Gift Code Service",category:"Services",level:"Level16_Promotional",priority:l.MEDIUM},ReferralCodeService:{title:"Referral Code Service",category:"Services",level:"Level16_Promotional",priority:l.MEDIUM},TicketService:{title:"Ticket Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},BlogService:{title:"Blog Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},FileService:{title:"File Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},EmailService:{title:"Email Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},SMSService:{title:"SMS Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},NotificationService:{title:"Notification Service",category:"Services",level:"Level4_Notifications",priority:l.HIGH},CustomerWalletService:{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},DepositService:{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},WithdrawalRequestService:{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},FinoTechService:{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},JibitService:{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},BankAccountService:{title:"Bank Account Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},UserAccountLevelService:{title:"User Account Level Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},RoleService:{title:"Role Service",category:"Services",level:"Level13_AdminRBAC",priority:l.HIGH},ExchangeActionService:{title:"Exchange Action Service",category:"Services",level:"Level14_OTCExchange",priority:l.HIGH},ExchangeSettingService:{title:"Exchange Setting Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},CustomerTokenService:{title:"Customer Token Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},AlarmService:{title:"Alarm Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},MessageService:{title:"Message Service",category:"Services",level:"Level15_SupportContent",priority:l.MEDIUM},FAQService:{title:"FAQ Service",category:"Services",level:"Level15_SupportContent",priority:l.LOW},CountryService:{title:"Country Service",category:"Services",level:"Level17_AdditionalServices",priority:l.LOW},LanguageService:{title:"Language Service",category:"Services",level:"Level17_AdditionalServices",priority:l.LOW},AtmService:{title:"ATM Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},CreditCardService:{title:"Credit Card Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},SaminCardService:{title:"Samin Card Service",category:"Services",level:"Level17_AdditionalServices",priority:l.MEDIUM},TomanTransactionService:{title:"Toman Transaction Service",category:"Services",level:"Level5_WalletServices",priority:l.MEDIUM},CashDepositService:{title:"Cash Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.MEDIUM},"Order ServiceervicecreateOrder deleteOrdergetOrder Book validateDTO":{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:l.CRITICAL},"Jibit ServiceervicematchIBAN matchCardidentitySimilarity":{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},"Vandar Serviceervice":{title:"Vandar Payment Gateway",category:"Services",level:"Level11_PaymentGateways",priority:l.HIGH},"Deposit ServiceervicetrackDeposit confirmDeposit":{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Customer Wallet ServiceervicegetBalance updateBalancelockFunds unlockFunds":{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Withdrawal ServiceervicecreateRequestapproveWithdrawalr":{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"Wallet ServiceervicecreateHDWalletgenerate Addresscr":{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:l.CRITICAL},"FinoTech Serviceervicevalidate NationallDcard TolBAN sendSMSverifyBankAccount":{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:l.HIGH},"Controllerustomer Serviceregister authenticateupdateProfile manageKYC":{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:l.CRITICAL}},zt=t=>{let r=t.replace(/Development/g,"").replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").trim();const i=[];let a="";const c=/([a-z])([A-Z])/g;r=r.replace(c,"$1 $2");const o=r.split(/\s+/).filter(d=>d.length>0);for(let d=0;d<o.length;d++){const n=o[d];n.endsWith("Service")||n.endsWith("Controller")?(a&&(i.push(a.trim()),a=""),i.push(n)):/^[a-z]/.test(n)||/^[a-z][A-Z]/.test(n)?a&&!a.endsWith("Service")&&!a.endsWith("Controller")?a+=" "+n:(a&&i.push(a.trim()),a=n):a+=(a?" ":"")+n}return a&&i.push(a.trim()),i.filter(d=>d.length>0)},Xt=(t,r)=>{if(We[t])return We[t].title;const i=r.find(a=>a.endsWith("Service")||a.endsWith("Controller"));return i?We[i]?We[i].title:i.replace(/([A-Z])/g," $1").trim():r.length>0?r[0].replace(/([A-Z])/g," $1").trim():t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ")[0]},Zt=t=>{if(We[t])return We[t];const r=zt(t),i=Xt(t,r),a=r.find(n=>n.endsWith("Service")||n.endsWith("Controller"));let c=null;a&&We[a]&&(c=We[a]);let o="Other";a&&(a.endsWith("Controller")?o="Controllers":a.endsWith("Service")&&(o="Services"));let d=l.MEDIUM;if(a){const n=["OrderService","TradeService","WalletService","CustomerService","ApieService"],u=["AdminService","MarketService","CoinService","DepositService","WithdrawalRequestService"];n.some(y=>a.includes(y))?d=l.CRITICAL:u.some(y=>a.includes(y))&&(d=l.HIGH)}return{title:i,category:(c==null?void 0:c.category)||o,level:(c==null?void 0:c.level)||null,priority:(c==null?void 0:c.priority)||d,extractedNames:r,originalId:t}},Ze=t=>{let r=l.MEDIUM;if(t.priority){const o=t.priority.toLowerCase().trim();o==="low"?r=l.LOW:o==="medium"?r=l.MEDIUM:o==="high"?r=l.HIGH:o==="critical"?r=l.CRITICAL:r=l[t.priority.toUpperCase()]||l.MEDIUM}let i=t.category||"Other",a=[];Array.isArray(t.subtasks)&&(a=t.subtasks.map((o,d)=>typeof o=="string"?{id:`subtask-${d}`,title:o,completed:!1,aiPrompt:null}:typeof o=="object"?{id:o.id||`subtask-${d}`,title:o.title||o.name||String(o),completed:o.completed||!1,aiPrompt:o.aiPrompt||null}:{id:`subtask-${d}`,title:String(o),completed:!1,aiPrompt:null}));let c=[];return t.notes&&(typeof t.notes=="string"?c=t.notes.split(`
`).filter(o=>o.trim()).map(o=>({content:o.trim(),createdAt:new Date().toISOString()})):Array.isArray(t.notes)&&(c=t.notes.map(o=>({content:typeof o=="string"?o:o.content||String(o),createdAt:o.createdAt||new Date().toISOString()})))),{id:t.nodeId||t.id,nodeId:t.nodeId||t.id,title:t.title||"",description:t.description||"",status:t.status||se.NOT_STARTED,priority:r,category:i,estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:a,notes:c,dependencies:Array.isArray(t.dependencies)?t.dependencies:[],isMissing:t.isMissing||!1,createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||new Date().toISOString(),backendId:t.id||t.backendId}},Qt=t=>{let r="medium";return t.priority&&(t.priority===l.LOW?r="low":t.priority===l.MEDIUM?r="medium":t.priority===l.HIGH?r="high":t.priority===l.CRITICAL?r="critical":typeof t.priority=="string"&&(r=t.priority.toLowerCase().trim()||"medium")),(!r||r==="")&&(r="medium"),{nodeId:t.nodeId||t.id,title:t.title,description:t.description||"",status:t.status||se.NOT_STARTED,notes:Array.isArray(t.notes)?t.notes.map(i=>typeof i=="string"?i:i.content).join(`
`):t.notes||"",estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:t.subtasks||[],dependencies:t.dependencies||[],priority:r,category:t.category||"Other",isMissing:t.isMissing||!1}},er=(t,r)=>{const i=t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").trim(),a=i.match(/(\w+Service)/i),c=i.match(/(\w+Controller)/i);return a?a[1]:c?c[1]:null},At=({children:t})=>{const[r,i]=k.useState({}),[a,c]=k.useState(!1),[o,d]=k.useState(null),[n,u]=k.useState(null),[y,P]=k.useState(null),[N,G]=k.useState(!1),[me,Z]=k.useState(!0),[q,ye]=k.useState(null),[z,be]=k.useState({});k.useEffect(()=>{xe(),Pe(),(async()=>{try{const{seedDiagramsAndNodes:_}=await Se(async()=>{const{seedDiagramsAndNodes:x}=await Promise.resolve().then(()=>Ue);return{seedDiagramsAndNodes:x}},void 0),{API_ENDPOINTS:b}=await Se(async()=>{const{API_ENDPOINTS:x}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:x}},[]),v=await fetch(b.diagrams);if(v.ok){const x=await v.json();if(!x||x.length===0)console.log("🌱 No diagrams found, seeding all diagrams and nodes..."),await _();else{console.log(`✅ Found ${x.length} existing diagrams, skipping seed`);for(const Y of x){const ee=await fetch(`${b.nodes}?diagramId=${Y.id}`);if(ee.ok){const W=await ee.json();if(!W||W.length===0){console.log(`⚠️ Diagram ${Y.diagramId} has no nodes, extracting and saving...`);const{extractNodesFromMermaid:j,saveNodesToBackend:fe}=await Se(async()=>{const{extractNodesFromMermaid:A,saveNodesToBackend:$}=await Promise.resolve().then(()=>Ue);return{extractNodesFromMermaid:A,saveNodesToBackend:$}},void 0),s=await j(Y.mermaidCode||"",Y.id);s.length>0&&(s.forEach(A=>{A.diagramId=Y.id}),await fe(Y.id,s))}}}}}}catch(_){console.warn("Could not seed diagrams on startup:",_)}})()},[]);const xe=async()=>{try{G(!0),ye(null);const{API_ENDPOINTS:m}=await Se(async()=>{const{API_ENDPOINTS:j}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:j}},[]),_=await fetch(m.tasks);if(!_.ok)throw new Error("Failed to load tasks");const b=await _.json(),v=new Map;b.forEach(j=>{const fe=v.get(j.nodeId);(!fe||new Date(j.updatedAt||j.createdAt)>new Date(fe.updatedAt||fe.createdAt))&&v.set(j.nodeId,j)});const x=Array.from(v.values());x.length<b.length&&console.warn(`⚠️ Found ${b.length-x.length} duplicate tasks. Using most recent version of each.`);const Y={},ee=[],W={Level1_ProjectSetup:l.CRITICAL,Level2_DatabaseAuth:l.CRITICAL,Level3_CustomerIdentity:l.CRITICAL,Level5_WalletServices:l.CRITICAL,Level6_Blockchain:l.CRITICAL,Level7_TradingEngine:l.CRITICAL,Level11_PaymentGateways:l.CRITICAL,Level4_Notifications:l.HIGH,Level8_MarketManagement:l.HIGH,Level9_TradingControllers:l.HIGH,Level10_WalletController:l.HIGH,Level12_KYCIdentity:l.HIGH,Level13_AdminRBAC:l.HIGH,Level14_OTCExchange:l.HIGH,Level15_SupportContent:l.MEDIUM,Level16_Promotional:l.MEDIUM,Level17_AdditionalServices:l.MEDIUM,Level18:l.MEDIUM,Level19:l.MEDIUM,Level20:l.MEDIUM,Level21:l.MEDIUM,Level22:l.MEDIUM,Level23:l.MEDIUM,Level24:l.MEDIUM,Level25:l.MEDIUM,Level26:l.MEDIUM,Level27:l.MEDIUM,Level28:l.MEDIUM,Level29:l.MEDIUM,Level30:l.MEDIUM,Level31_AdvancedTrading:l.HIGH,Level32_ComplianceRisk:l.HIGH,Level33_SecurityEnhancements:l.HIGH,Level34_FinancialServices:l.HIGH,Level35_AnalyticsReporting:l.MEDIUM,Level36:l.MEDIUM,Level37:l.MEDIUM,Level38:l.MEDIUM,Level39:l.MEDIUM,Level40:l.MEDIUM,Level41:l.MEDIUM,Level42:l.MEDIUM,Level43:l.MEDIUM,Level44:l.MEDIUM,Level45:l.MEDIUM,Level46:l.MEDIUM,Level47:l.MEDIUM,Level48:l.MEDIUM,Level49:l.MEDIUM,Level50:l.MEDIUM,Level51:l.LOW,Level52:l.LOW,Level53:l.LOW,Level54:l.LOW,Level55:l.LOW,Level56:l.LOW,Level57:l.LOW,Level58:l.LOW,Level59:l.LOW,Level60:l.LOW};if(x.forEach(j=>{const fe=Ze(j);let s=W[j.nodeId];if(!s&&j.nodeId&&j.nodeId.startsWith("Level")){const $=j.nodeId.match(/Level(\d+)/);if($){const ne=parseInt($[1]);ne<=7||ne===11?s=l.CRITICAL:ne<=14?s=l.HIGH:ne<=30||ne<=50?s=l.MEDIUM:s=l.LOW}}s||(s=l.MEDIUM),(!j.priority||j.priority===null||j.priority===""||fe.priority!==s)&&(fe.priority=s,ee.push({nodeId:j.nodeId,backendId:j.id,priority:s})),Y[j.nodeId]=fe}),ee.length>0){console.log(`🔄 Updating priorities for ${ee.length} tasks in database...`);const j=ee.map(async({nodeId:$,backendId:ne,priority:ce})=>{try{const{API_ENDPOINTS:we}=await Se(async()=>{const{API_ENDPOINTS:Ge}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:Ge}},[]),he=ce===l.LOW?"low":ce===l.MEDIUM?"medium":ce===l.HIGH?"high":ce===l.CRITICAL?"critical":"medium",Oe=await fetch(we.task(ne),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({priority:he})});return Oe.ok?(console.log(`✅ Updated priority for ${$} to ${he}`),{success:!0,nodeId:$,priorityValue:he}):(console.warn(`⚠️ Failed to update priority for ${$}: ${Oe.status} ${Oe.statusText}`),{success:!1,nodeId:$})}catch(we){return console.warn(`⚠️ Failed to update priority for ${$}:`,we),{success:!1,nodeId:$,error:we.message}}}),fe=await Promise.all(j),s=fe.filter($=>$.success).length,A=fe.filter($=>!$.success).length;s>0&&console.log(`✅ Successfully updated priorities for ${s} tasks`),A>0&&console.warn(`⚠️ Failed to update priorities for ${A} tasks`)}else console.log("✅ All tasks already have priorities set in database");i(Y)}catch(m){console.error("Failed to load tasks from backend:",m),ye(m.message),console.warn("⚠️ Backend unavailable - no tasks available. Please ensure backend is running and database is seeded."),i({})}finally{G(!1)}},Pe=async()=>{try{const{API_ENDPOINTS:m}=await Se(async()=>{const{API_ENDPOINTS:v}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:v}},[]);if(!m.nodeMappings){console.error("❌ Backend not available - node mappings API endpoint not configured");return}const _=await fetch(m.nodeMappings);if(!_.ok){console.error(`❌ Failed to load node mappings from database (HTTP ${_.status}). Please seed mappings using: node seed_node_mappings.js`);return}const b=await _.json();console.log(`✅ Loaded ${Object.keys(b).length} node-to-task mappings from database`),be(b)}catch(m){console.error("❌ Error loading node mappings from database:",m),console.error("   Please ensure backend is running and mappings are seeded: node seed_node_mappings.js")}},ke=async m=>{try{const{API_ENDPOINTS:_}=await Se(async()=>{const{API_ENDPOINTS:W}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:W}},[]),b=Qt(m);let v,x;if(m.backendId)v=_.task(m.backendId),x="PATCH";else try{const W=await fetch(_.taskByNode(m.nodeId||m.id));if(W.ok){const j=await W.json();j&&j.id?(v=_.task(j.id),x="PATCH"):(v=_.tasks,x="POST")}else v=_.tasks,x="POST"}catch{v=_.tasks,x="POST"}const Y=await fetch(v,{method:x,headers:{"Content-Type":"application/json"},body:JSON.stringify(b)});if(!Y.ok){const W=await Y.text();throw new Error(`Failed to save task: ${Y.status} ${Y.statusText} - ${W}`)}const ee=Y.headers.get("content-type");if(ee&&ee.includes("application/json")){const W=await Y.text();if(W&&W.trim())try{const j=JSON.parse(W);return Ze(j)}catch(j){return console.error("Failed to parse response JSON:",j,"Response text:",W),Ze({...b,id:m.backendId||m.id})}else return Ze({...b,id:m.backendId||m.id})}else return Ze({...b,id:m.backendId||m.id})}catch(_){throw console.error("Failed to save task to backend:",_),_}},Me=async(m,_)=>{i(b=>{const v=b[m];if(!v)return b;const x={...b,[m]:{...v,..._,updatedAt:new Date().toISOString()}};return x[m]&&ke(x[m]).then(Y=>{i(ee=>{const W=ee[m];return W?{...ee,[m]:{...W,...Y,subtasks:Y.subtasks||W.subtasks,backendId:Y.backendId||Y.id||(W==null?void 0:W.backendId)}}:ee})}).catch(Y=>{console.error("Backend save failed:",Y)}),x})},Be={tasks:r,updateTask:Me,updateSubtask:(m,_,b)=>{i(v=>{const x=v[m];if(!x)return v;const Y=x.subtasks.map(W=>W.id===_?{...W,...b}:W),ee={...x,subtasks:Y,updatedAt:new Date().toISOString()};return ke(ee).then(W=>{i(j=>{var fe;return{...j,[m]:{...j[m],...W,backendId:W.id||W.backendId||((fe=j[m])==null?void 0:fe.backendId)}}})}).catch(W=>console.error("Backend save failed:",W)),{...v,[m]:ee}})},addSubtask:(m,_)=>{i(b=>{const v=b[m];if(!v)return b;const x={id:_.id||`subtask-${Date.now()}`,title:_.title||_,completed:!1,...typeof _=="object"?_:{}},Y={...v,subtasks:[...v.subtasks||[],x],updatedAt:new Date().toISOString()};return ke(Y).then(ee=>{i(W=>{var j;return{...W,[m]:{...W[m],...ee,backendId:ee.id||ee.backendId||((j=W[m])==null?void 0:j.backendId)}}})}).catch(ee=>console.error("Backend save failed:",ee)),{...b,[m]:Y}})},toggleSubtask:(m,_)=>{i(b=>{const v=b[m];if(!v)return b;const x=(v.subtasks||[]).find(ce=>ce.id===_),Y=(x==null?void 0:x.completed)===!0||(x==null?void 0:x.completed)==="true"||(x==null?void 0:x.completed)===1,ee=(v.subtasks||[]).map(ce=>ce.id===_?{...ce,completed:!Y}:ce),W=ee.filter(ce=>ce.completed===!0||ce.completed==="true"||ce.completed===1).length,j=ee.length,fe=j>0&&W===j,s=W>0&&W<j;let A=v.status;fe&&v.status!==se.COMPLETED?(A=se.COMPLETED,console.log(`✅ All subtasks completed for ${m}, auto-updating status to COMPLETED`)):s&&v.status===se.NOT_STARTED?(A=se.IN_PROGRESS,console.log(`🔄 Some subtasks completed for ${m}, auto-updating status to IN_PROGRESS`)):!s&&(v.status,se.IN_PROGRESS);const $={...v,subtasks:ee,status:A,updatedAt:new Date().toISOString()},ne={...b,[m]:$};return ke($).then(ce=>{i(we=>{const he=we[m];if(!he)return we;const Oe=(ce.subtasks||ee).map((Ge,at)=>{var Ye;const $e=(Ye=he.subtasks)==null?void 0:Ye[at];return{...Ge,completed:Ge.completed!==void 0?Ge.completed:($e==null?void 0:$e.completed)||!1}});return{...we,[m]:{...he,...ce,subtasks:Oe.length>0?Oe:ee,status:ce.status||A,backendId:ce.backendId||ce.id||(he==null?void 0:he.backendId)}}})}).catch(ce=>{console.error("Backend save failed for subtask toggle:",ce)}),ne})},addNote:(m,_)=>{i(b=>{const v=b[m];if(!v)return b;const x={...v,notes:[...v.notes||[],{content:_,createdAt:new Date().toISOString()}],updatedAt:new Date().toISOString()};return ke(x).then(Y=>{i(ee=>{var W;return{...ee,[m]:{...ee[m],...Y,backendId:Y.id||Y.backendId||((W=ee[m])==null?void 0:W.backendId)}}})}).catch(Y=>console.error("Backend save failed:",Y)),{...b,[m]:x}})},updateActualHours:(m,_)=>{i(b=>{const v=b[m];if(!v)return b;const x={...v,actualHours:_,updatedAt:new Date().toISOString()};return ke(x).then(Y=>{i(ee=>{var W;return{...ee,[m]:{...ee[m],...Y,backendId:Y.id||Y.backendId||((W=ee[m])==null?void 0:W.backendId)}}})}).catch(Y=>console.error("Backend save failed:",Y)),{...b,[m]:x}})},updateTaskStatus:(m,_)=>{Me(m,{status:_})},updateTaskPriority:(m,_)=>{Me(m,{priority:_})},getProgress:()=>{const m=Object.values(r).filter(s=>s&&s.id&&s.id.startsWith("Level")),_=m.length,b=m.filter(s=>s.status===se.COMPLETED).length,v=m.filter(s=>s.status===se.IN_PROGRESS).length,x=m.filter(s=>s.status===se.NOT_STARTED).length,Y=m.filter(s=>s.status===se.BLOCKED).length,ee=m.reduce((s,A)=>{var $;return s+((($=A.subtasks)==null?void 0:$.length)||0)},0),W=m.reduce((s,A)=>{var $;return s+((($=A.subtasks)==null?void 0:$.filter(ne=>ne.completed===!0||ne.completed==="true"||ne.completed===1).length)||0)},0);let j=0;m.forEach(s=>{if(s.status===se.COMPLETED)j+=100;else if(s.status===se.BLOCKED)j+=0;else{const A=s.subtasks||[];if(A.length>0){const ne=A.filter(ce=>ce.completed===!0||ce.completed==="true"||ce.completed===1).length/A.length*100;j+=ne}else s.status===se.IN_PROGRESS?j+=50:j+=0}});const fe=_>0?Math.round(j/_):0;return{total:_,completed:b,inProgress:v,notStarted:x,blocked:Y,percentage:fe,subtasks:{total:ee,completed:W,percentage:ee>0?Math.round(W/ee*100):0}}},getCategoryProgress:m=>{const _=Object.values(r).filter(x=>x&&x.id&&x.id.startsWith("Level")&&x.category===m);if(_.length===0)return{total:0,completed:0,percentage:0};const b=_.length,v=_.filter(x=>x.status===se.COMPLETED).length;return{total:b,completed:v,percentage:b>0?Math.round(v/b*100):0}},getOrCreateTask:async m=>{if(!m)return null;if(r[m])return r[m];if(m.startsWith("Level"))return r[m]||null;const _=st(m,z);if(_&&r[_])return console.log(`Mapped diagram node "${m}" to Level task: ${_}`),r[_];const b=er(m);if(b&&r[b])return r[b];if(b){const x=st(b,z);if(x&&r[x])return console.log(`Mapped base name "${b}" to Level task: ${x}`),r[x]}const v=Zt(m);return v.level&&r[v.level]?(console.log(`Mapped via metadata "${m}" to Level task: ${v.level}`),r[v.level]):(console.warn(`Could not map diagram node "${m}" to any Level task. Returning null.`),null)},mapNodeToLevel:m=>st(m,z),nodeMappings:z,cleanupOldTasks:()=>{console.log("🧹 Cleanup handled by backend - only Level tasks are stored")},showTodoPanel:a,setShowTodoPanel:c,selectedTask:o,setSelectedTask:d,filterStatus:n,setFilterStatus:u,filterCategory:y,setFilterCategory:P,loading:N,useBackend:me,setUseBackend:Z,backendError:q,loadTasksFromBackend:xe};return e.jsx(It.Provider,{value:Be,children:t})},It=k.createContext(),tt=()=>{const t=k.useContext(It);if(!t)throw new Error("useTodoStore must be used within TodoProvider");return t},tr=Object.freeze(Object.defineProperty({__proto__:null,TaskPriority:l,TaskStatus:se,TodoProvider:At,mapNodeToLevel:st,useTodoStore:tt},Symbol.toStringTag,{value:"Module"})),dt={everything:{id:"everything",title:"EVERYTHING - Complete System",subtitle:"Every component, service, table, flow - ALL IN ONE",icon:"🌐",type:"composite",description:"The complete Arnitex backend system - every single component from our entire conversation",children:["overview","controllers","services","database","flows","external","advanced"],code:`
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
`}},rr=()=>Object.values(dt);let nt=null;const ar=async()=>{if(!nt)try{const t=await Se(()=>Promise.resolve().then(()=>tr),void 0);t.mapNodeToLevel&&(nt=t.mapNodeToLevel)}catch(t){console.warn("Could not import mapping from TodoStore:",t)}},St=async(t,r={})=>t?(await ar(),nt?nt(t,r):(console.warn(`⚠️ mapNodeToLevel function not available. Node "${t}" cannot be mapped.`),null)):null,Pt=async(t,r,i={})=>{const a=[],c=new Set;if(!t)return a;const o=[/(\w+)\[["']?([^"'\]]+)["']?\]/g,/(\w+)\[\(([^)]+)\)\]/g];for(const d of o){let n;for(;(n=d.exec(t))!==null;){const u=n[1];let y=n[2]||n[3]||"";if(c.has(u)||(c.add(u),y=y.replace(/<br\s*\/?>/gi," ").trim(),!y||y.match(/^flowchart[_-]/i)))continue;let P=await St(y||u,i);if(P||(P=await St(u,i)),!P){const be=(y||u).toLowerCase(),xe={admin:"Level13_AdminRBAC",customer:"Level3_CustomerIdentity",order:"Level7_TradingEngine",trade:"Level7_TradingEngine",wallet:"Level5_WalletServices",payment:"Level11_PaymentGateways",blockchain:"Level6_Blockchain",market:"Level8_MarketManagement",coin:"Level8_MarketManagement",email:"Level4_Notifications",sms:"Level4_Notifications",notification:"Level4_Notifications",ticket:"Level15_SupportContent",database:"Level2_DatabaseAuth",security:"Level2_DatabaseAuth",auth:"Level2_DatabaseAuth"};for(const[Pe,ke]of Object.entries(xe))if(be.includes(Pe)){P=ke;break}}P||(P="Level1_ProjectSetup",console.warn(`⚠️ Node "${y||u}" could not be mapped, using Level1 as fallback`));const N=sr(u,y),G=nr(u,N),me=y.split(/\n|<br\s*\/?>/).filter(be=>be.trim()),Z=Math.max(...me.map(be=>be.length),10),q=me.length||1;let ye=Math.max(180,Z*7+40),z=Math.max(90,q*24+50);switch(N){case"high":ye*=1.5,z*=1.5;break;case"medium":ye*=1.2,z*=1.2;break}a.push({nodeId:u,label:y,type:ir(y||u),description:null,position:G,style:{width:ye,height:z},metadata:{originalLabel:y,extractedFrom:"mermaid",diagramId:r,importance:N},diagramId:r,taskNodeId:P})}}return console.log(`📊 Extracted ${a.length} nodes from diagram ${r}, ${a.filter(d=>d.taskNodeId).length} mapped to Level tasks`),a},ir=t=>{const r=t.toLowerCase();return r.includes("controller")||r.includes("api")?"controller":r.includes("service")?"service":r.includes("database")||r.includes("db")||r.includes("table")?"database":r.includes("wallet")?"wallet":r.includes("blockchain")||r.includes("crypto")?"blockchain":r.includes("payment")||r.includes("gateway")?"payment":r.includes("client")||r.includes("user")?"client":r.includes("security")||r.includes("auth")?"security":"component"},sr=(t,r)=>{const i=(t||"").toLowerCase(),a=(r||"").toLowerCase();return i.includes("controllers")||i.includes("services")||i.includes("database")||i.includes("everything")||i.includes("advanced")||i.includes("missing")||a.includes("controllers")||a.includes("services")||a.includes("database")||a.includes("everything")||a.includes("advanced")||a.includes("missing")?"high":i.includes("order")||i.includes("trade")||i.includes("wallet")||i.includes("customer")||i.includes("payment")||i.includes("blockchain")||i.includes("security")||i.includes("auth")?"medium":"low"},nr=(t,r)=>{let c=0;for(let u=0;u<t.length;u++)c=(c<<5)-c+t.charCodeAt(u),c=c&c;const o=r==="high"?400:r==="medium"?300:250,d=100+Math.abs(c)%10*o,n=100+Math.floor(Math.abs(c)/10)%10*o;return{x:d,y:n}},lt=t=>{const r=[],i=new Set,a=/(\w+)\s*(?:-->|-.->|---)\s*(?:\|([^|]+)\|)?\s*(\w+)/g;let c;for(;(c=a.exec(t))!==null;){const o=c[1],d=c[3],n=c[2]||null,u=c[0].includes("-.->")?"dashed":"directed",y=`${o}-->${d}`;i.has(y)||(i.add(y),r.push({source:o,target:d,label:n,type:u,metadata:{extractedFrom:"mermaid",originalEdge:c[0]}}))}return r},Et=async(t,r)=>{var i;try{const{API_ENDPOINTS:a}=await Se(async()=>{const{API_ENDPOINTS:d}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:d}},[]),c=r.edges||lt(r.code||r.mermaidCode||""),o=await fetch(a.diagramByDiagramId(t),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r.title,description:r.description,mermaidCode:r.code||r.mermaidCode,customMermaidCode:r.customMermaidCode,nodes:r.nodes,edges:c,metadata:{...r.metadata,edgesCount:c.length,nodesCount:((i=r.nodes)==null?void 0:i.length)||0}})});if(!o.ok)throw new Error("Failed to save diagram");return await o.json()}catch(a){throw console.error("Failed to save diagram to backend:",a),a}},Rt=async(t,r)=>{try{const{API_ENDPOINTS:i}=await Se(async()=>{const{API_ENDPOINTS:a}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:a}},[]);if(await fetch(`${i.nodesByDiagram(t)}`,{method:"DELETE"}).catch(()=>{}),r.length>0){const a=await fetch(i.bulkCreateNodes,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!a.ok)throw new Error("Failed to save nodes");return await a.json()}return[]}catch(i){throw console.error("Failed to save nodes to backend:",i),i}},or=async()=>{try{const{API_ENDPOINTS:t}=await Se(async()=>{const{API_ENDPOINTS:d}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:d}},[]),r=Object.values(dt).map(d=>({diagramId:d.id,title:d.title,description:d.description||d.subtitle||"",mermaidCode:d.code||"",customMermaidCode:null,nodes:null,edges:null,metadata:{type:d.type,icon:d.icon,children:d.children||[],parent:d.parent||null}}));console.log("🌱 Seeding diagrams to backend...");const i=await fetch(t.seedDiagrams,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!i.ok)throw new Error("Failed to seed diagrams");const a=await i.json();console.log(`✅ Seeded ${a.created} diagrams, skipped ${a.skipped}`),console.log("🌱 Extracting and seeding nodes and edges...");let c=0,o=0;for(const d of Object.values(dt)){const n=await Pt(d.code||"",d.id),u=lt(d.code||""),y=await fetch(t.diagramByDiagramId(d.id));if(y.ok){const P=await y.json();n.forEach(N=>{N.diagramId=P.id}),n.length>0&&(await Rt(P.id,n),c+=n.length,console.log(`  ✅ Seeded ${n.length} nodes for diagram: ${d.id}`)),u.length>0&&(await Et(d.id,{title:d.title,description:d.description||d.subtitle||"",code:d.code,mermaidCode:d.code,edges:u}),o+=u.length,console.log(`  ✅ Seeded ${u.length} edges for diagram: ${d.id}`))}}return console.log(`✅ Total nodes seeded: ${c}, Total edges seeded: ${o}`),{diagrams:a,nodes:c,edges:o}}catch(t){throw console.error("Failed to seed diagrams and nodes:",t),t}},lr=async t=>{try{const{API_ENDPOINTS:r}=await Se(async()=>{const{API_ENDPOINTS:a}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:a}},[]),i=await fetch(r.diagramByDiagramId(t));if(i.ok){const a=await i.json();if(a.edgeEntities&&Array.isArray(a.edgeEntities)&&a.edgeEntities.length>0)return console.log(`✅ Loaded ${a.edgeEntities.length} edges from Edge entity table`),a.edgeEntities.map(o=>{var d,n,u,y;return{id:o.id,source:o.sourceNodeId,target:o.targetNodeId,sourceNodeId:o.sourceNodeId,targetNodeId:o.targetNodeId,label:o.label||null,type:o.type||"directed",style:o.style||{},metadata:{...o.metadata,path:((d=o.style)==null?void 0:d.path)||((n=o.metadata)==null?void 0:n.path)||null,waypoints:((u=o.style)==null?void 0:u.waypoints)||((y=o.metadata)==null?void 0:y.waypoints)||null},diagramId:o.diagramId}});const c=a.customMermaidCode||a.mermaidCode||"";if(c){const o=lt(c);if(o.length>0)return console.log(`✅ Extracted ${o.length} edges from Mermaid code`),o}return[]}return[]}catch(r){return console.error("Failed to load edges from backend:",r),[]}},Lt=async()=>{try{const{API_ENDPOINTS:t,isBackendAvailable:r}=await Se(async()=>{const{API_ENDPOINTS:o,isBackendAvailable:d}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:o,isBackendAvailable:d}},[]);if(!r()||!t.diagrams)throw console.error("❌ Backend not available - API_ENDPOINTS.diagrams is null"),new Error("Backend API not configured. Please ensure backend is running on http://localhost:3001");console.log("📡 Fetching diagrams from:",t.diagrams);let i;try{i=await fetch(t.diagrams,{method:"GET",headers:{"Content-Type":"application/json"},mode:"cors",credentials:"omit"})}catch(o){throw console.error("❌ Fetch error (network/CORS):",o),new Error(`Network error: ${o.message}. Check if backend is running and CORS is configured.`)}if(!i.ok){const o=await i.text().catch(()=>"Could not read error response");throw console.error(`❌ Failed to load diagrams: HTTP ${i.status}`,o),new Error(`Backend returned ${i.status}: ${o.substring(0,100)}`)}let a;try{a=await i.json()}catch(o){console.error("❌ Failed to parse JSON response:",o);const d=await i.text();throw console.error("Response text:",d.substring(0,200)),new Error(`Invalid JSON response from backend: ${o.message}`)}if(console.log(`✅ Received ${(a==null?void 0:a.length)||0} diagrams from backend`),!Array.isArray(a))throw console.error("❌ Invalid response format - expected array, got:",typeof a),new Error("Invalid response format from backend");const c=a.map(o=>{var d,n,u,y;return{id:o.diagramId,title:o.title,subtitle:o.description||"",icon:((d=o.metadata)==null?void 0:d.icon)||"📊",type:((n=o.metadata)==null?void 0:n.type)||"detail",description:o.description||"",code:o.mermaidCode||o.customMermaidCode||"",children:((u=o.metadata)==null?void 0:u.children)||[],parent:((y=o.metadata)==null?void 0:y.parent)||null,dbId:o.id,customMermaidCode:o.customMermaidCode,nodes:o.nodes,edges:o.edges,metadata:o.metadata}});return console.log(`✅ Transformed ${c.length} diagrams`),c}catch(t){throw console.error("❌ Failed to load diagrams from backend:",t),t.message?t:new Error(`Failed to connect to backend: ${t.message||t}`)}},cr=async t=>{var r,i,a,c;try{const{API_ENDPOINTS:o}=await Se(async()=>{const{API_ENDPOINTS:n}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:n}},[]),d=await fetch(o.diagramByDiagramId(t));if(d.ok){const n=await d.json(),u=n.customMermaidCode||n.mermaidCode||"";return!u||u.trim()===""?(console.log(`⚠️ Diagram ${t} in DB has no code, will use registry`),null):{id:n.diagramId,title:n.title,subtitle:n.description||"",icon:((r=n.metadata)==null?void 0:r.icon)||"📊",type:((i=n.metadata)==null?void 0:i.type)||"detail",description:n.description||"",code:u,children:((a=n.metadata)==null?void 0:a.children)||[],parent:((c=n.metadata)==null?void 0:c.parent)||null,dbId:n.id,customMermaidCode:n.customMermaidCode,mermaidCode:n.mermaidCode,nodes:n.nodes,edges:n.edges,metadata:n.metadata}}return null}catch(o){return console.error("Failed to load diagram from backend:",o),null}},dr=async t=>{try{const{API_ENDPOINTS:r}=await Se(async()=>{const{API_ENDPOINTS:a}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:a}},[]);let i=await fetch(`${r.nodes}?diagramId=${t}`);if(!i.ok){const a=await fetch(r.diagramByDiagramId(t));if(a.ok){const c=await a.json();i=await fetch(`${r.nodes}?diagramId=${c.id}`)}}return i.ok?await i.json():[]}catch(r){return console.error("Failed to load nodes from backend:",r),[]}},Ue=Object.freeze(Object.defineProperty({__proto__:null,extractEdgesFromMermaid:lt,extractNodesFromMermaid:Pt,loadAllDiagramsFromBackend:Lt,loadDiagramFromBackend:cr,loadEdgesFromBackend:lr,loadNodesFromBackend:dr,saveDiagramToBackend:Et,saveNodesToBackend:Rt,seedDiagramsAndNodes:or},Symbol.toStringTag,{value:"Module"})),Ct=(t,r,i=[])=>{if(t.icon&&t.icon.trim()!==""&&!i.some((u,y)=>y!==r&&u.icon===t.icon))return t.icon;const a=(t.title||"").toLowerCase(),c=(t.type||"").toLowerCase(),o={everything:"🌐",overview:"🏗️",controllers:"🎛️",services:"⚙️",database:"💾",flows:"🔄",external:"🌍",advanced:"🚀",trading:"📈",wallet:"💰",payment:"💳",kyc:"👤",identity:"👤",notification:"📧",support:"🎫",content:"🎫",security:"🔐",blockchain:"⛓️",analytics:"📊",compliance:"✅",financial:"💵",operations:"🔧",market:"📊",coin:"🪙",order:"📋",trade:"💹",admin:"👑",promotional:"🎁",testing:"🧪",documentation:"📚",deployment:"🚢",monitoring:"📡",api:"🔌"};for(const[n,u]of Object.entries(o))if((a.includes(n)||c.includes(n))&&!i.some((P,N)=>N!==r&&P.icon===u))return u;const d=["🌐","🏗️","🎛️","⚙️","💾","🔄","🌍","🚀","📈","💰","💳","👤","📧","🎫","🔐","⛓️","📊","✅","💵","🔧","🎮","🎯","🔒","📱","💻","🖥️","🗄️","🔌","⚡","🎨","🪙","📋","💹","👑","🎁","🧪","📚","🚢","📡","🌐"];for(const n of d)if(!i.some((y,P)=>P!==r&&y.icon===n))return n;return d[r%d.length]||"📊"},pr=()=>{const{currentView:t,sidebarCollapsed:r,navigateToView:i,toggleSidebar:a}=qe(),[c,o]=k.useState([]),[d,n]=k.useState(!0),[u,y]=k.useState(null);k.useEffect(()=>{(async()=>{n(!0),y(null);try{console.log("🔄 Loading diagrams from backend...");const G=await Lt();if(console.log("📊 Received diagrams:",(G==null?void 0:G.length)||0,"Type:",typeof G,"IsArray:",Array.isArray(G)),G&&Array.isArray(G)&&G.length>0){console.log(`✅ Loaded ${G.length} diagrams from database`);const me=G.map((Z,q)=>({...Z,icon:Ct(Z,q,G)}));o(me),y(null)}else console.warn("⚠️ No diagrams found in database (empty array or null)"),y("No diagrams available in database. Diagrams need to be seeded."),o([])}catch(G){console.error("❌ Error loading diagrams from database:",G);const me=G.message||"Unknown error";me.includes("Backend not available")||me.includes("not configured")?y("Backend not available. Please start the backend server on http://localhost:3001"):me.includes("Failed to fetch")||me.includes("ECONNREFUSED")?y("Cannot connect to backend. Is the server running on http://localhost:3001?"):y(`Failed to load diagrams: ${me.substring(0,80)}`),o([])}finally{n(!1)}})()},[]);const P=c.filter(N=>N.type==="composite"||N.type==="detail");return e.jsxs("aside",{className:`sidebar ${r?"collapsed":""}`,children:[e.jsx("button",{className:"sidebar-toggle",onClick:a,title:r?"Expand sidebar":"Collapse sidebar",children:r?"▶":"◀"}),e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("span",{children:"💎"}),!r&&e.jsx("div",{children:"BitniTex"})]}),!r&&e.jsx("p",{className:"sidebar-subtitle",children:"Architecture Explorer"})]}),e.jsxs("nav",{className:"nav-section",children:[!r&&e.jsx("div",{className:"nav-section-title",children:"Views"}),d?e.jsxs("div",{className:"nav-item",style:{opacity:.5},children:[e.jsx("span",{className:"nav-item-icon",children:"⏳"}),!r&&e.jsx("span",{className:"nav-item-title",children:"Loading..."})]}):u?e.jsxs("div",{className:"nav-item",style:{opacity:.7,color:"#ef4444"},children:[e.jsx("span",{className:"nav-item-icon",children:"⚠️"}),!r&&e.jsx("span",{className:"nav-item-title",style:{fontSize:"12px"},children:u})]}):P.length===0?e.jsxs("div",{className:"nav-item",style:{opacity:.7},children:[e.jsx("span",{className:"nav-item-icon",children:"📭"}),!r&&e.jsx("span",{className:"nav-item-title",children:"No diagrams available"})]}):P.map((N,G)=>e.jsxs("button",{className:`nav-item ${t===N.id?"active":""}`,onClick:()=>i(N.id),title:r?N.title:void 0,children:[e.jsx("span",{className:"nav-item-icon",children:N.icon||Ct(N,G)}),!r&&e.jsx("span",{className:"nav-item-title",children:N.title})]},N.id))]}),!r&&e.jsx("div",{className:"stats-section",children:e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Controllers"}),e.jsxs("div",{className:"stat-value",children:["25",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Services"}),e.jsxs("div",{className:"stat-value",children:["140",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Tables"}),e.jsx("div",{className:"stat-value",children:"81"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Endpoints"}),e.jsxs("div",{className:"stat-value",children:["200",e.jsx("span",{className:"stat-unit",children:"+"})]})]})]})})]})},ur=()=>{const{currentView:t,breadcrumbs:r,navigateToView:i,toggleMinimap:a,showMinimap:c,toggleSidebar:o,toggleFullscreen:d,showApiTester:n,setShowApiTester:u,selectedNode:y,isEditMode:P,setIsEditMode:N}=qe(),{setShowTodoPanel:G,getProgress:me}=tt(),Z=me(),q=()=>{d(),document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};return e.jsxs("div",{className:"toolbar",children:[e.jsx("div",{className:"toolbar-title",children:e.jsx("div",{className:"breadcrumb",children:r.map((ye,z)=>e.jsxs(He.Fragment,{children:[z>0&&e.jsx("span",{className:"breadcrumb-separator",children:"/"}),e.jsx("span",{className:`breadcrumb-item ${z===r.length-1?"active":""}`,onClick:()=>z===0&&i("overview"),children:ye})]},z))})}),e.jsxs("div",{className:"toolbar-actions",children:[e.jsxs("button",{className:"toolbar-btn",onClick:()=>G(!0),style:{background:Z.percentage>0?"linear-gradient(135deg, #10b981 0%, #059669 100%)":void 0,color:Z.percentage>0?"#fff":void 0,fontWeight:Z.percentage>0?"600":void 0},children:[e.jsx("span",{className:"toolbar-btn-icon",children:"✅"}),e.jsxs("span",{children:["Project Progress (",Z.percentage,"%)"]})]}),e.jsxs("button",{className:`toolbar-btn ${n?"active":""}`,onClick:()=>u(!n),title:"API Endpoint Tester (Swagger-like)",children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🧪"}),e.jsx("span",{children:"API Tester"})]}),e.jsxs("button",{className:`toolbar-btn ${c?"active":""}`,onClick:a,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🗺️"}),e.jsx("span",{children:"Minimap"})]}),e.jsxs("button",{className:`toolbar-btn ${P?"active":""}`,onClick:()=>N(!P),title:"Enable edit mode to add nodes, connect them, and change colors",children:[e.jsx("span",{className:"toolbar-btn-icon",children:"✏️"}),e.jsx("span",{children:P?"Exit Edit":"Edit Diagram"})]}),e.jsxs("button",{className:"toolbar-btn",onClick:q,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"⛶"}),e.jsx("span",{children:"Fullscreen"})]})]})]})},mr={AdminController:{id:"AdminController",type:"controller",title:"Admin Controller",icon:"👨‍💼",description:"Manages admin user operations including authentication, CRUD, and role management.",endpoints:[{method:"POST",path:"/api/admins/login",description:"Admin authentication"},{method:"POST",path:"/api/admins/create",description:"Create new admin",auth:"CREATE_ADMINS"},{method:"GET",path:"/api/admins",description:"List all admins",auth:"LIST_ADMINS"},{method:"PUT",path:"/api/admins/:id",description:"Update admin",auth:"UPDATE_ADMINS"},{method:"DELETE",path:"/api/admins/:id",description:"Delete admin",auth:"DELETE_ADMINS"}],services:["AdminService","RoleService","AuthenticateService"],tags:["Admin","Authentication","RBAC"]},CustomerController:{id:"CustomerController",type:"controller",title:"Customer Controller",icon:"👤",description:"Comprehensive user management including registration, authentication, profile, KYC, 2FA, and notifications.",endpoints:[{method:"POST",path:"/api/users/register",description:"User registration"},{method:"POST",path:"/api/users/login",description:"User login with password"},{method:"POST",path:"/api/users/login-with-otp",description:"Login via OTP"},{method:"GET",path:"/api/users/google-sso",description:"Google SSO authentication"},{method:"GET",path:"/api/users/profile",description:"Get user profile",auth:"USER"},{method:"PUT",path:"/api/users/kyc",description:"Submit KYC documents",auth:"USER"},{method:"POST",path:"/api/users/2fa/enable",description:"Enable 2FA",auth:"USER"},{method:"GET",path:"/api/users/login-history",description:"Get login history",auth:"USER"}],services:["CustomerService","CustomerTokenService","EmailService","SMSService","FinoTechService","JibitService"],tags:["User","Authentication","KYC","2FA"]},OrderController:{id:"OrderController",type:"controller",title:"Order Controller",icon:"📊",description:"Handles order creation, cancellation, and queries for P2P trading.",endpoints:[{method:"POST",path:"/api/orders/buy",description:"Create buy order",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/orders/sell",description:"Create sell order",auth:"AUTHORIZED_USER"},{method:"DELETE",path:"/api/orders/:id",description:"Cancel order",auth:"USER"},{method:"GET",path:"/api/orders",description:"Get user orders",auth:"USER"},{method:"GET",path:"/api/orders/order-book",description:"Get order book for market"},{method:"GET",path:"/api/orders/market-buy-sell-whole",description:"Calculate order price",auth:"USER"}],services:["OrderService","CreateOrderService","MarketService","CustomerService"],tags:["Trading","Orders","P2P"]},WalletController:{id:"WalletController",type:"controller",title:"Wallet Controller",icon:"💰",description:"Manages cryptocurrency wallets, addresses, deposits, and withdrawals.",endpoints:[{method:"POST",path:"/api/wallets",description:"Create HD wallet",auth:"CREATE_WALLET"},{method:"POST",path:"/api/wallets/generate-address",description:"Generate new address",auth:"CREATE_WALLET_ADDRESS"},{method:"POST",path:"/api/wallets/withdrawal-request",description:"Create withdrawal",auth:"AUTHORIZED_USER"},{method:"GET",path:"/api/wallets/balance",description:"Get wallet balance",auth:"USER"},{method:"POST",path:"/api/wallets/change-password",description:"Change wallet password",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/wallets/toman-deposit",description:"Fiat deposit via gateway",auth:"USER"}],services:["WalletService","ApieService","DepositService","WithdrawalRequestService","PaymentGateway"],tags:["Wallet","Blockchain","Deposits","Withdrawals"]},GiftCodeController:{id:"GiftCodeController",type:"controller",title:"Gift Code Controller",icon:"🎁",description:"Manages promotional gift codes and referral rewards.",endpoints:[{method:"POST",path:"/api/gift-code",description:"Create new gift code",auth:"CREATE_GIFT_CODE"},{method:"PUT",path:"/api/gift-code/use",description:"Redeem gift code",auth:"USER"},{method:"POST",path:"/api/gift-code/register/:prefix",description:"Register with gift code prefix",auth:"PUBLIC"},{method:"GET",path:"/api/gift-code",description:"List gift codes",auth:"LIST_GIFT_CODE"},{method:"DELETE",path:"/api/gift-code/:id",description:"Delete gift code",auth:"DELETE_GIFT_CODE"}],services:["GiftCodeService","CustomerService","CustomerWalletService"],tags:["Promotions","Rewards","Marketing"]},TradeController:{id:"TradeController",type:"controller",title:"Trade Controller",icon:"💹",description:"Provides trade history and analytics for executed orders.",endpoints:[{method:"GET",path:"/api/trades",description:"Get user trade history",auth:"USER"},{method:"GET",path:"/api/trades/history",description:"Get market trade history",auth:"PUBLIC"},{method:"GET",path:"/api/trades/admin",description:"Get all trades (admin)",auth:"LIST_TRADES"},{method:"GET",path:"/api/trades/:id",description:"Get specific trade",auth:"USER"}],services:["TradeService","MarketService"],tags:["Trading","History","Analytics"]},MarketController:{id:"MarketController",type:"controller",title:"Market Controller",icon:"📈",description:"Manages trading markets and market information.",endpoints:[{method:"GET",path:"/api/markets",description:"List all markets",auth:"PUBLIC"},{method:"POST",path:"/api/markets",description:"Create market",auth:"CREATE_MARKET"},{method:"PUT",path:"/api/markets/activate",description:"Activate/deactivate market",auth:"UPDATE_MARKET"},{method:"GET",path:"/api/markets/:id",description:"Get market details",auth:"PUBLIC"},{method:"DELETE",path:"/api/markets/:id",description:"Delete market",auth:"DELETE_MARKET"}],services:["MarketService","CoinService"],tags:["Markets","Trading Pairs","Configuration"]},CoinController:{id:"CoinController",type:"controller",title:"Coin Controller",icon:"🪙",description:"Manages cryptocurrency information and pricing.",endpoints:[{method:"GET",path:"/api/coins",description:"List all coins",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/usd",description:"Get USD prices",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/from-to",description:"Get exchange rate",auth:"PUBLIC"},{method:"POST",path:"/api/coins/tether-price",description:"Update USDT price",auth:"UPDATE_COIN"},{method:"POST",path:"/api/coins",description:"Create coin",auth:"CREATE_COIN"}],services:["CoinService","MarketService"],tags:["Cryptocurrency","Pricing","Assets"]},ExchangeActionController:{id:"ExchangeActionController",type:"controller",title:"Exchange Action Controller",icon:"🔄",description:"Handles OTC (over-the-counter) exchange operations.",endpoints:[{method:"POST",path:"/api/exchange/buy",description:"OTC buy request",auth:"USER"},{method:"POST",path:"/api/exchange/sell",description:"OTC sell request",auth:"USER"},{method:"POST",path:"/api/exchange/approve-order",description:"Approve OTC order",auth:"APPROVE_EXCHANGE"},{method:"GET",path:"/api/exchange/orders",description:"List OTC orders",auth:"LIST_EXCHANGE"}],services:["ExchangeActionService","CustomerWalletService","CoinService"],tags:["OTC","Exchange","Trading"]},TicketController:{id:"TicketController",type:"controller",title:"Ticket Controller",icon:"🎫",description:"Customer support ticket system.",endpoints:[{method:"GET",path:"/api/tickets",description:"List user tickets",auth:"USER"},{method:"POST",path:"/api/tickets",description:"Create new ticket",auth:"USER"},{method:"POST",path:"/api/tickets/message/:id",description:"Add message to ticket",auth:"USER"},{method:"PUT",path:"/api/tickets/:id/close",description:"Close ticket",auth:"USER"},{method:"GET",path:"/api/tickets/admin",description:"List all tickets (admin)",auth:"LIST_TICKETS"}],services:["TicketService","MessageService","FileService"],tags:["Support","Customer Service","Communication"]},BlogController:{id:"BlogController",type:"controller",title:"Blog Controller",icon:"📝",description:"Blog and content management.",endpoints:[{method:"GET",path:"/api/blog",description:"List blog posts",auth:"PUBLIC"},{method:"POST",path:"/api/blog",description:"Create blog post",auth:"CREATE_BLOG"},{method:"PUT",path:"/api/blog/:id",description:"Update blog post",auth:"UPDATE_BLOG"},{method:"DELETE",path:"/api/blog/:id",description:"Delete blog post",auth:"DELETE_BLOG"},{method:"GET",path:"/api/blog/:id",description:"Get blog post",auth:"PUBLIC"}],services:["BlogService","FileService"],tags:["Content","Blog","CMS"]},ReferralCodeController:{id:"ReferralCodeController",type:"controller",title:"Referral Code Controller",icon:"🔗",description:"Manages referral program and rewards.",endpoints:[{method:"POST",path:"/api/referral/create",description:"Create referral code",auth:"USER"},{method:"GET",path:"/api/referral/stats",description:"Get referral statistics",auth:"USER"},{method:"POST",path:"/api/referral/use/:code",description:"Use referral code",auth:"PUBLIC"}],services:["ReferralService","CustomerService","CustomerWalletService"],tags:["Referral","Marketing","Rewards"]},RolesController:{id:"RolesController",type:"controller",title:"Roles Controller",icon:"🔐",description:"Role and privilege management for RBAC.",endpoints:[{method:"GET",path:"/api/roles",description:"List all roles",auth:"LIST_ROLES"},{method:"POST",path:"/api/roles",description:"Create role",auth:"CREATE_ROLE"},{method:"GET",path:"/api/roles/privileges",description:"List all privileges",auth:"LIST_PRIVILEGES"},{method:"PUT",path:"/api/roles/:id",description:"Update role",auth:"UPDATE_ROLE"}],services:["RoleService","PrivilegeService"],tags:["RBAC","Security","Authorization"]},OrderService:{id:"OrderService",type:"service",title:"Order Service",icon:"📈",description:"Core trading engine handling order creation, matching, cancellation, and order book management.",methods:["createOrder(orderDTO, customer, market, force): OrderFullDTO","deleteOrder(id, email): void","getOrders(...filters): PageDTO<OrderFullDTO>","getOrderBook(marketType, username): Map<String, List<OrderInOrderBookDTO>>","calculateOrderFullPrice(order): Double","repayBalance(order): void","orderQueueRemover(): void (scheduled)","deleteOrderFromTable(): void (scheduled)"],responsibilities:["Order validation (price, amount, min/max)","Fund locking in customer wallet","Order matching with existing orders","Trade execution and balance transfer","Order book queries (buy/sell sides)","Order expiration handling","Queue management for order processing"],tags:["Trading","Order Book","Matching Engine"]},WalletService:{id:"WalletService",type:"service",title:"Wallet Service",icon:"💼",description:"Manages HD and account-based wallets, address generation, and on-chain transactions.",methods:["createHDWallet(request): WalletResponseHalfDTO","generateAddressForWallet(request): PageDTO<BlockChainAddressHalfDTO>","createTransaction(request): TransactionResponseDTO","createWithdrawalRequest(request, customer): WithdrawalResponseDTO","getCustomerWalletAddress(customer, coin, tokenType): WalletAddressHalfDTO","getTotalBalance(username): TotalBalances","changePassword(passwordDTO): void","exportWalletPrivateKeys(mnemonicDTO, fileName, response): void"],responsibilities:["HD wallet creation via Apie","Address generation for deposits","Withdrawal request validation and OTP","Balance queries (custodial + P2P)","QR code generation for addresses","Wallet password management","Private key export (encrypted)"],tags:["Wallet","HD Wallet","Blockchain","Security"]},ApieService:{id:"ApieService",type:"service",title:"Apie Service",icon:"⛓️",description:"Blockchain provider integration for multi-chain wallet and transaction operations.",methods:["createHDWallet(request, cryptoNetwork): CreateWalletResponse","generateHDWalletAddress(network, walletName, index): String","getWalletBalance(request, network): BtcBaseWalletBalanceResponse","checkConfirmedTransactionRegularCoins(address, coin): ConfirmedAmountDTO","createRawTransaction(request, network): TransactionResponseDTO","freezeBalance(request, network): FreezeTronResponse"],responsibilities:["Multi-chain HD wallet creation (ETH, TRON, BTC, XRP, XLM, BSC, Dash)","Hierarchical deterministic address generation","Balance queries across chains","Raw transaction creation and signing","Transaction confirmation tracking","TRON-specific operations (freeze/unfreeze)"],supportedChains:["Ethereum","TRON","Bitcoin","Ripple","Stellar","BSC","Dash"],tags:["Blockchain","Multi-chain","HD Wallet","Transactions"]},CustomerService:{id:"CustomerService",type:"service",title:"Customer Service",icon:"👥",description:"User account management, authentication, profile, and KYC orchestration.",methods:["register(userDTO): RegisterResponseDto","authenticate(email, password): Customer","getCustomerByEmail(email): Customer","updateProfile(customerId, profileDTO): Customer","submitKYC(customerId, kycDTO): KYCStatus","enable2FA(customerId): TwoFactorSecret","verify2FA(customerId, code): boolean","getLoginHistory(customerId): List<LoginHistory>"],responsibilities:["User registration with email/password","Authentication and JWT token generation","Profile management (name, phone, country)","KYC document submission","2FA setup and verification","Login history tracking","Account level management (USER, AUTHORIZED_USER)","User notifications"],tags:["User Management","Authentication","KYC"]},TradeService:{id:"TradeService",type:"service",title:"Trade Service",icon:"💹",description:"Trade execution, history, and statistics.",methods:["executeTrade(buyOrder, sellOrder, amount, price): Trade","getTrades(filters): PageDTO<TradeFullDTO>","getLastTradesHistory(marketType): List<TradeHistoryInMarketDTO>","getTradeStatistics(marketType): TradeStatistics","exportTradesToExcel(filters): byte[]"],responsibilities:["Trade execution between matched orders","Balance transfer between buyer and seller","Trade history queries","Volume and statistics calculation","Excel export for admin","Market activity tracking"],tags:["Trading","Execution","History"]},PaymentGateway:{id:"PaymentGateway",type:"service",title:"Payment Gateway",icon:"💳",description:"Interface for fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).",implementations:["VandarService","JibitService","NextPayService","SadadService","ZarinpalService","RayanPayService"],methods:["deposit(request, customer): GatewayResponseDTO","withdraw(iban, amount, trackId, description): GatewayWithdrawResponseDTO","updateDepositRequest(depositRequest, updateDTO): TomanTransaction","getWithdrawalRequests(): List<GatewayWithdrawSettlement>","incomingDepositByIdTransactions(latestRecordDateTime): List<PaymentGatewayDepositByIdTransaction>"],responsibilities:["Gateway-agnostic deposit initiation","Redirect URL generation","Callback handling and verification","Withdrawal to bank account/IBAN","Transaction status updates","Settlement reconciliation"],tags:["Payment","Fiat","IRR","Gateway"]},"orders-table":{id:"orders-table",type:"database",title:"orders Table",icon:"🗃️",description:"Stores all P2P trading orders (buy/sell, limit/market, stop, OCO).",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"market_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"order_type",type:"VARCHAR(255)",description:"LIMITED_BUY, LIMITED_SELL, MARKET_BUY, STOP_LOSS_BUY, OCO_BUY, etc."},{name:"status",type:"VARCHAR(255)",description:"IS_OPEN, PARTIALLY_EXECUTED, COMPLETELY_EXECUTED, CANCELED, EXPIRED"},{name:"amount",type:"DOUBLE",description:"Order amount in base coin"},{name:"unit_price",type:"DOUBLE",description:"Price per unit in quote coin"},{name:"executed_amount",type:"DOUBLE",description:"Amount filled so far"},{name:"remaining_amount",type:"DOUBLE",description:"Amount still open"},{name:"executed_percent",type:"DOUBLE",description:"Percentage executed"},{name:"stop",type:"DOUBLE",description:"Stop price for stop-loss orders"},{name:"expires_at",type:"DATETIME",description:"Expiration timestamp"},{name:"is_triggerred",type:"TINYINT",description:"For stop-loss/OCO orders"},{name:"side_order_id",type:"BIGINT",description:"For OCO orders"}],indexes:["customer_id","market_id","status","order_type"],relationships:["customers.id → orders.customer_id","markets.id → orders.market_id","orders.id → trades.buyer_order_id / seller_order_id"],tags:["Trading","Orders","Core"]},"customer_wallet-table":{id:"customer_wallet-table",type:"database",title:"customer_wallet Table",icon:"💰",description:"User balance tracking for custodial and P2P trading.",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"currency_id",type:"BIGINT",key:"FOREIGN KEY (coin)"},{name:"custodial_credit",type:"DOUBLE",description:"Balance for OTC exchange"},{name:"p2p_credit",type:"DOUBLE",description:"Available balance for P2P trading"},{name:"p2p_blocked_credit",type:"DOUBLE",description:"Locked in open orders"},{name:"total_balance",type:"DOUBLE",description:"Sum of all credits"}],notes:["Separate balances for custodial (OTC) and P2P trading","p2p_blocked_credit is funds locked in open orders","All monetary values stored as DOUBLE (not recommended for production - use DECIMAL)"],relationships:["customers.id → customer_wallet.customer_id","COIN_ENTITY.id → customer_wallet.currency_id"],tags:["Balance","Wallet","Core"]},MarginTrading:{id:"MarginTrading",type:"service",title:"Margin Trading System",icon:"🚀",description:"Margin trading with leverage, margin calls, liquidation engine, and position management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/margin/accounts",description:"Create margin account",auth:"USER"},{method:"POST",path:"/api/margin/positions",description:"Open position",auth:"USER"},{method:"GET",path:"/api/margin/positions",description:"Get positions",auth:"USER"},{method:"POST",path:"/api/margin/close",description:"Close position",auth:"USER"}],services:["MarginService","LiquidationService"],tags:["Missing","Advanced Trading","Margin","Leverage"]},FuturesPerpetual:{id:"FuturesPerpetual",type:"service",title:"Futures & Perpetual Contracts",icon:"🚀",description:"Futures and perpetual swap contracts with funding rates and mark prices. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/futures/contracts",description:"List contracts"},{method:"POST",path:"/api/futures/positions",description:"Open futures position",auth:"USER"},{method:"GET",path:"/api/futures/funding-rate",description:"Get funding rate"}],services:["FuturesService","PerpetualService","FundingRateService"],tags:["Missing","Advanced Trading","Futures","Perpetual"]},OptionsTrading:{id:"OptionsTrading",type:"service",title:"Options Trading System",icon:"🚀",description:"Options trading with Black-Scholes pricing and Greeks calculation. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/options/chains",description:"Get options chain"},{method:"POST",path:"/api/options/positions",description:"Open options position",auth:"USER"},{method:"POST",path:"/api/options/exercise",description:"Exercise option",auth:"USER"}],services:["OptionsService","BlackScholesService","GreeksService"],tags:["Missing","Advanced Trading","Options","Derivatives"]},AMLMonitoring:{id:"AMLMonitoring",type:"service",title:"AML Transaction Monitoring",icon:"🚀",description:"Anti-Money Laundering transaction monitoring with pattern detection and SAR. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/aml/monitor",description:"Monitor transaction",auth:"ADMIN"},{method:"GET",path:"/api/aml/sar",description:"Get SAR reports",auth:"ADMIN"},{method:"POST",path:"/api/aml/risk-score",description:"Calculate risk score",auth:"ADMIN"}],services:["AMLService","TransactionMonitoringService","SARService"],tags:["Missing","Compliance","AML","Risk"]},SanctionsScreening:{id:"SanctionsScreening",type:"service",title:"Sanctions Screening System",icon:"🚀",description:"Sanctions screening against OFAC, EU, and UN lists. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/sanctions/screen",description:"Screen customer/address",auth:"ADMIN"},{method:"GET",path:"/api/sanctions/matches",description:"Get matches",auth:"ADMIN"}],services:["SanctionsService","WatchlistService"],tags:["Missing","Compliance","Sanctions","Screening"]},ColdWalletManagement:{id:"ColdWalletManagement",type:"service",title:"Cold Wallet Management",icon:"🚀",description:"Cold wallet management with HSM integration for secure key storage. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/cold-wallet/create",description:"Create cold wallet",auth:"ADMIN"},{method:"POST",path:"/api/cold-wallet/sweep",description:"Sweep to hot wallet",auth:"ADMIN"},{method:"GET",path:"/api/cold-wallet/balance",description:"Get balance",auth:"ADMIN"}],services:["ColdWalletService","HSMService"],tags:["Missing","Security","Cold Wallet","HSM"]},MultiSignatureWallets:{id:"MultiSignatureWallets",type:"service",title:"Multi-Signature Wallets",icon:"🚀",description:"Multi-signature wallet system with M-of-N threshold signatures. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/multisig/create",description:"Create multi-sig wallet",auth:"USER"},{method:"POST",path:"/api/multisig/sign",description:"Sign transaction",auth:"USER"},{method:"GET",path:"/api/multisig/pending",description:"Get pending signatures",auth:"USER"}],services:["MultiSigService","SignatureService"],tags:["Missing","Security","Multi-Sig","Wallet"]},StakingServices:{id:"StakingServices",type:"service",title:"Staking Services",icon:"🚀",description:"Staking services for earning rewards on cryptocurrencies. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/staking/stake",description:"Stake coins",auth:"USER"},{method:"POST",path:"/api/staking/unstake",description:"Unstake coins",auth:"USER"},{method:"GET",path:"/api/staking/rewards",description:"Get rewards",auth:"USER"}],services:["StakingService","RewardsService"],tags:["Missing","Financial Services","Staking","Rewards"]},LendingBorrowing:{id:"LendingBorrowing",type:"service",title:"Lending & Borrowing Platform",icon:"🚀",description:"Lending and borrowing platform with collateral management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/lending/borrow",description:"Borrow funds",auth:"USER"},{method:"POST",path:"/api/lending/lend",description:"Lend funds",auth:"USER"},{method:"GET",path:"/api/lending/positions",description:"Get positions",auth:"USER"}],services:["LendingService","BorrowingService","CollateralService"],tags:["Missing","Financial Services","Lending","Borrowing"]},TradingAnalytics:{id:"TradingAnalytics",type:"service",title:"Trading Analytics & Statistics",icon:"🚀",description:"Trading analytics with statistics, charts, and insights. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/analytics/trading/stats",description:"Get trading statistics",auth:"USER"},{method:"GET",path:"/api/analytics/trading/charts",description:"Get chart data",auth:"USER"}],services:["TradingAnalyticsService","StatisticsService"],tags:["Missing","Analytics","Trading","Statistics"]}},Qe=t=>mr[t]||null,gr=t=>{switch(t){case se.COMPLETED:return"✅";case se.IN_PROGRESS:return"🔄";case se.BLOCKED:return"🚫";case se.NOT_STARTED:return"⏸️";default:return"⏸️"}},hr=t=>{switch(t){case se.COMPLETED:return"#10b981";case se.IN_PROGRESS:return"#3b82f6";case se.BLOCKED:return"#ef4444";case se.NOT_STARTED:return"#6b7280";default:return"#6b7280"}},vr=(t,r,i=!1)=>{const a=hr(r);let c="#1e3a5f";if(i){switch(r){case se.COMPLETED:c="#581c87";break;case se.IN_PROGRESS:c="#7c2d12";break;case se.BLOCKED:c="#7f1d1d";break;default:c="#4c1d95"}return`style ${t} fill:${c},stroke:#a855f7,stroke-width:2px,stroke-dasharray: 5 5,color:#e1e8f0`}switch(r){case se.COMPLETED:c="#064e3b";break;case se.IN_PROGRESS:c="#1e3a8a";break;case se.BLOCKED:c="#7f1d1d";break;default:c="#1e3a5f"}return`style ${t} fill:${c},stroke:${a},stroke-width:2px,color:#e1e8f0`},yr=(t,r,i=null)=>{let a=t,c=`

  %% Project Status Styles
`,o=[];const d=new Set;return i!=null&&i.nodes&&Array.isArray(i.nodes)&&i.nodes.forEach(n=>{var u;n.locked&&[n.id,n.id.replace(/[^a-zA-Z0-9]/g,"_"),((u=n.label)==null?void 0:u.split(/\s+/)[0])||n.id].forEach(P=>d.add(P))}),Object.values(r).forEach(n=>{if(!n||!n.id)return;const u=gr(n.status),y=[n.id,n.id.replace("Controller","C"),n.id.replace("Service","S")];for(const P of y){const N=new RegExp(`(${P}\\[)([^\\]]+)(\\])`,"g"),G=a.replace(N,(me,Z,q,ye)=>{if(q.includes("✅")||q.includes("🔄")||q.includes("🚫")||q.includes("⏸️"))return me;o.push(P);const z=d.has(P)?"🔒 ":"";return`${Z}${z}${u} ${q}${ye}`});if(G!==a){a=G;const me=n.isMissing===!0||n.isMissing==="true"||n.isMissing===1;let Z=vr(P,n.status,me);d.has(P)&&(Z=Z.replace(/stroke-width:(\d+)px/,"stroke-width:$1px,stroke-dasharray:5,5"),Z+=",opacity:0.85"),c+=`  ${Z}
`;break}}}),d.forEach(n=>{o.includes(n)||(c+=`  style ${n} fill:#1e3a5f,stroke:#f59e0b,stroke-width:3px,stroke-dasharray:5,5,opacity:0.85
`)}),o.length>0||d.size>0?a+c:a};wt.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0,curve:"basis",padding:20,nodeSpacing:50,rankSpacing:80,diagramPadding:20},themeVariables:{primaryColor:"#1e3a5f",primaryTextColor:"#e1e8f0",primaryBorderColor:"#60a5fa",lineColor:"#60a5fa",secondaryColor:"#151b26",tertiaryColor:"#0f1419",background:"#0f1419",mainBkg:"#0f1419",secondBkg:"#151b26",textColor:"#e1e8f0",border1:"#1c2433",border2:"#2a3441",fontSize:"18px",fontFamily:"Outfit, Inter, system-ui, sans-serif",nodeBorder:"#60a5fa",clusterBkg:"#0f1419",clusterBorder:"#2a3441",edgeLabelBackground:"#0f1419",nodeTextSize:"18px"}});const fr=()=>{const{currentView:t,zoomLevel:r,setZoomLevel:i,setSelectedNode:a,navigateToView:c,showApiTester:o,isEditMode:d,setIsEditMode:n}=qe(),{tasks:u,setShowTodoPanel:y,setSelectedTask:P,getOrCreateTask:N,mapNodeToLevel:G,nodeMappings:me}=tt(),Z=k.useRef(null),q=k.useRef(null),[ye,z]=k.useState(!0),[be,xe]=k.useState(!1),[Pe,ke]=k.useState({x:0,y:0}),[Me,Ae]=k.useState({x:0,y:0}),[Le,je]=k.useState({x:0,y:0}),[Ne,ge]=k.useState({x:0,y:0}),[Ie,Te]=k.useState(!1),[pe,De]=k.useState({x:0,y:0}),[_e,rt]=k.useState(()=>{const p=localStorage.getItem("diagramLegendOpen");return p?JSON.parse(p):!1}),Be=()=>{const p=!_e;rt(p),localStorage.setItem("diagramLegendOpen",JSON.stringify(p))},[m,_]=k.useState(null),[b,v]=k.useState(null),[x,Y]=k.useState(null),[ee,W]=k.useState(!1),[j,fe]=k.useState(!1),[s,A]=k.useState(null),[$,ne]=k.useState(!1),[ce,we]=k.useState(null),[he,Oe]=k.useState({label:"",type:"default",color:"#60a5fa"});k.useEffect(()=>{const p=async()=>{z(!0),_(null),v(null);try{const{loadDiagramFromBackend:C,loadNodesFromBackend:U,loadEdgesFromBackend:Q}=await Se(async()=>{const{loadDiagramFromBackend:g,loadNodesFromBackend:B,loadEdgesFromBackend:V}=await Promise.resolve().then(()=>Ue);return{loadDiagramFromBackend:g,loadNodesFromBackend:B,loadEdgesFromBackend:V}},void 0),re=await C(t);if(re&&re.code){console.log("✅ Loaded diagram from database:",t);let g=[];try{g=await U(re.dbId||t),console.log(`✅ Loaded ${g.length} nodes with positions from database`)}catch(V){console.warn("Could not load nodes from database:",V)}let B=[];try{B=await Q(t),console.log(`✅ Loaded ${B.length} edges from database`)}catch(V){console.warn("Could not load edges from database:",V),B=re.edges||[]}_({...re,nodes:g,edges:B}),v({...re,nodes:g,edges:B,nodeEntities:g})}else{console.error("❌ Diagram not found in database:",t),console.error("   Backend must be connected and diagram must be seeded to database"),z(!1),_(null),v(null);return}}catch(C){console.error("❌ Error loading diagram from database:",C),console.error("   Backend must be connected and running"),_(null),v(null)}finally{z(!1)}};p();const T=()=>{console.log("💾 Diagram saved event received, reloading..."),p()};return window.addEventListener("diagram-saved",T),()=>{window.removeEventListener("diagram-saved",T)}},[t]);const Ge=k.useRef({zoomLevel:r,setZoomLevel:i});Ge.current={zoomLevel:r,setZoomLevel:i},k.useEffect(()=>{const p=q.current;if(!p)return;const T=C=>{C.preventDefault(),C.stopPropagation(),document.querySelectorAll(".diagram-tooltip").forEach(Q=>Q.remove());const U=C.deltaY>0?-.1:.1;Ge.current.setZoomLevel(Q=>Math.max(.3,Math.min(3,Q+U)))};return p.addEventListener("wheel",T,{passive:!1}),()=>p.removeEventListener("wheel",T)},[]);const at=k.useRef(""),$e=k.useRef("");k.useEffect(()=>{const p=(m==null?void 0:m.code)||"",T=t!==$e.current,C=p!==at.current;return m&&(C||T)&&(at.current=p,$e.current=t,Ye()),()=>{document.querySelectorAll(".diagram-tooltip").forEach(U=>U.remove())}},[t,m==null?void 0:m.code]),k.useEffect(()=>{window.__isEditMode=d,d||(W(!1),fe(!1),A(null),Y(null),we(null),xe(!1))},[d]);const Ye=async()=>{if(!Z.current||!m){z(!m);return}z(!0),document.querySelectorAll(".diagram-tooltip").forEach(p=>p.remove());try{const p=new Map;if(d&&Z.current){const E=Z.current.querySelector("svg");E&&E.querySelectorAll('g[id*="flowchart"], g[id*="graph"]').forEach(D=>{const oe=D.getAttribute("id")||"",X=(D.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(X){const w=parseFloat(X[1]),h=parseFloat(X[2]);let R="";if(oe.includes("_")){const S=oe.split("_"),f=S.findIndex(I=>/^[A-Z]/.test(I));f>=0?R=S[f]:S.length>=2&&(R=S[1])}R&&!isNaN(w)&&!isNaN(h)&&p.set(R,{x:w,y:h})}})}Z.current.innerHTML="";const T=`diagram-${Date.now()}`;let C=(b==null?void 0:b.customMermaidCode)||(b==null?void 0:b.mermaidCode)||(m==null?void 0:m.code)||"";if(!C){console.error("❌ No diagram code available in database"),console.error("   Diagram must be seeded to database with mermaidCode or customMermaidCode"),z(!1);return}console.log("📋 Using diagram code:",t,"Length:",C.length),console.log("📋 Using diagram code from database:",t);const U=yr(C,u,b),Q=document.createElement("div");Q.className="mermaid",Q.id=T,Q.textContent=U,Z.current.appendChild(Q);const{svg:re}=await wt.render(T+"-svg",U);console.log("✅ Mermaid rendered SVG, length:",re.length),Q.innerHTML=re;const g=Q.querySelector("svg");if(g){const E=g.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');console.log(`📊 SVG rendered with ${E.length} node groups`),E.length===0&&(console.warn("⚠️ WARNING: No node groups found in rendered SVG!"),console.warn("   SVG content preview:",re.substring(0,500))),g.style.width="100%",g.style.height="auto",g.style.display="block",g.querySelectorAll("text").forEach(h=>{var H,M;const R=((H=h.textContent)==null?void 0:H.trim())||"";if(R.match(/^flowchart_\w+_\d+$/i)||R.match(/^flowchart-\w+-\d+$/i)||R.match(/^flowchart\w+\d+$/i)||R.startsWith("flowchart")&&/\d+$/.test(R)||R.includes("flowchart")&&R.match(/_\d+$/)){h.remove();return}const S=h.closest("g");if(S){const L=S.getAttribute("id")||"";if((L.match(/^flowchart_\w+_\d+$/i)||L.match(/^flowchart-\w+-\d+$/i))&&(R===L||R===L.replace(/^flowchart[_-]/,""))){h.remove();return}}const f=h.closest("g");if(f&&(f.classList.contains("cluster")||((M=f.getAttribute("class"))==null?void 0:M.includes("cluster"))||f.querySelector('rect[class*="cluster"]')||f.querySelector('rect[fill*="cluster"]'))){const L=h.style.fontSize||"16px",te=parseFloat(L);h.style.fontSize=`${te*2.5}px`,h.style.fontWeight="800",h.style.fill="#ffffff",h.style.stroke="#60a5fa",h.style.strokeWidth="1px",h.style.paintOrder="stroke fill"}else{const L=h.style.fontSize||"16px",te=parseFloat(L);h.style.fontSize=`${te*1.4}px`,h.style.fontWeight="600"}});const D=g.querySelectorAll('g.cluster, g[class*="cluster"]');console.log(`🔍 Found ${D.length} cluster groups`),D.forEach((h,R)=>{const S=h.querySelector("rect");let f=0,I=0;S&&(f=parseFloat(S.getAttribute("width"))||0,I=parseFloat(S.getAttribute("height"))||0,console.log(`📦 Cluster ${R}: ${f}x${I}`),S.getAttribute("stroke-width")||S.setAttribute("stroke-width","3"),S.setAttribute("stroke","#60a5fa"),S.setAttribute("fill","#0f1419"),S.setAttribute("fill-opacity","0.15"),S.setAttribute("rx","8"),S.setAttribute("ry","8"));const H=h.querySelectorAll("text");console.log(`📝 Found ${H.length} text elements in cluster ${R}`),H.forEach(M=>{var J;const L=((J=M.textContent)==null?void 0:J.trim())||"";if(L.length<50&&!L.includes("<br/>")&&!L.includes(`
`)&&(L.includes("Services")||L.includes("Core")||L.includes("Wallet")||L.includes("Blockchain")||L.includes("Payment")||L.includes("KYC")||L.includes("Notification")||L.includes("Trading")||L.includes("Compliance")||L.includes("Security")||L.includes("Financial")||L.includes("Analytics"))||f>300){let le=40;if(f>0&&I>0){const ue=f/200,Ee=I/150,Re=Math.max(ue,Ee);le=Math.max(40,Math.min(Re*30,80)),f>1e3||I>800?le=70:f>700||I>600?le=55:(f>500||I>400)&&(le=45)}console.log(`✅ Enhancing label "${L}" to ${le}px (box: ${f}x${I})`),M.style.fontSize=`${le}px !important`,M.style.fontWeight="900",M.style.fill="#ffffff",M.style.stroke="#60a5fa",M.style.strokeWidth="2.5px",M.style.paintOrder="stroke fill",M.style.fontFamily="Outfit, Inter, system-ui, sans-serif",M.style.letterSpacing="0.5px",M.setAttribute("font-size",`${le}px`),M.setAttribute("font-weight","900"),M.setAttribute("fill","#ffffff");const ve=M.getAttribute("style")||"";M.setAttribute("style",ve.replace(/font-size[^;]*;?/gi,"")+`font-size: ${le}px !important;`)}})});const oe=["Core Services","Wallet Services","Blockchain","Payment Gateways","KYC Identity","Notifications","Advanced Trading","Compliance","Security","Financial Services","Analytics","External Clients","Security Layer","REST API Layer","Business Logic","Data Layer","Admin Management","User Management","Trading","Wallets","OTC Exchange","Support","Promotions","Compliance & Risk","Security Enhancements","Analytics & Reporting"];g.querySelectorAll("text").forEach(h=>{var H,M,L;const R=((H=h.textContent)==null?void 0:H.trim())||"",S=oe.some(te=>R.includes(te)||te.includes(R));let f=h.parentElement,I=!1;for(;f&&f!==g;){if((M=f.classList)!=null&&M.contains("cluster")||(L=f.getAttribute("class"))!=null&&L.includes("cluster")||f.tagName==="g"&&f.querySelector('rect[class*="cluster"]')){I=!0;break}f=f.parentElement}if(!I&&!S){const te=parseFloat(h.getAttribute("y"))||0,J=parseFloat(h.getAttribute("x"))||0;Array.from(g.querySelectorAll("rect")).filter(ve=>{const ue=parseFloat(ve.getAttribute("x"))||0,Ee=parseFloat(ve.getAttribute("y"))||0,Re=parseFloat(ve.getAttribute("width"))||0,Je=parseFloat(ve.getAttribute("height"))||0;return Math.abs(J-ue)<50&&Math.abs(te-Ee)<30&&Re>200&&Je>100}).length>0&&(I=!0)}if(I||S){let te=0,J=0,le=h.parentElement;for(;le&&le!==g;){const Re=le.querySelector("rect");if(Re){const Je=parseFloat(Re.getAttribute("width"))||0,ze=parseFloat(Re.getAttribute("height"))||0;if(Je>300&&ze>200){te=Je,J=ze;break}}le=le.parentElement}const ve=24;let ue;if(te>0&&J>0){const Re=Math.max(1.5,Math.min(te/150,J/100));ue=Math.max(ve*Re*2.5,40),te>1e3||J>800?ue=Math.max(ue*1.8,60):(te>600||J>500)&&(ue=Math.max(ue*1.4,50))}else{const Re=parseFloat(h.style.fontSize||h.getAttribute("font-size")||"16px")||16;ue=Math.max(Re*3.5,40)}h.style.fontSize=`${ue}px`,h.style.fontWeight="900",h.style.fill="#ffffff",h.style.stroke="#60a5fa",h.style.strokeWidth="2.5px",h.style.paintOrder="stroke fill",h.style.fontFamily="Outfit, Inter, system-ui, sans-serif",h.style.letterSpacing="0.5px",h.setAttribute("font-weight","900"),h.setAttribute("font-size",`${ue}px`),h.setAttribute("fill","#ffffff");const Ee=h.closest("g");Ee&&(Ee.style.zIndex="1000",h.style.zIndex="1001"),console.log(`✅ Enhanced cluster label: "${R}" to ${ue}px (box: ${te}x${J})`)}}),g.querySelectorAll("g").forEach(h=>{const R=h.getAttribute("id")||"";if(R.match(/^flowchart_\w+_\d+$/i)||R.match(/^flowchart-\w+-\d+$/i)){const S=h.querySelectorAll("rect"),f=h.querySelectorAll("text");!Array.from(f).some(H=>{var L;const M=((L=H.textContent)==null?void 0:L.trim())||"";return!M.match(/^flowchart/i)&&M.length>0})&&S.length===0&&h.remove()}}),g.querySelectorAll("rect").forEach(h=>{var M,L,te;const R=parseFloat(h.getAttribute("width"))||0,S=parseFloat(h.getAttribute("height"))||0,f=R>400&&S>300,I=h.closest("g");if(I&&(((M=I.id)==null?void 0:M.includes("flowchart"))||((L=I.id)==null?void 0:L.includes("graph"))||I.classList.contains("node"))&&!f){h.removeAttribute("stroke-width");let J=h.getAttribute("style")||"";J?(J=J.replace(/stroke-width\s*:\s*[^;]+;?/gi,"").trim(),J=J.replace(/;+/g,";").replace(/^;|;$/g,""),!J.includes("stroke:")&&!h.getAttribute("stroke")&&(J=(J?J+"; ":"")+"stroke: #60a5fa"),J?h.setAttribute("style",J):h.setAttribute("style","stroke: #60a5fa")):h.setAttribute("style","stroke: #60a5fa"),!h.getAttribute("stroke")&&!((te=h.getAttribute("style"))!=null&&te.includes("stroke:"))&&h.setAttribute("stroke","#60a5fa");let le=R||200,ve=S||100;le<120&&(le=120),ve<70&&(ve=70),le>400&&(le=400),ve>250&&(ve=250),h.setAttribute("width",le),h.setAttribute("height",ve),h.setAttribute("rx","8"),h.setAttribute("ry","8")}else f&&(h.getAttribute("stroke-width")||h.setAttribute("stroke-width","3"),h.setAttribute("stroke","#60a5fa"),h.setAttribute("fill-opacity","0.15"),h.setAttribute("rx","8"),h.setAttribute("ry","8"))})}const B=async(E,F)=>{try{const{API_ENDPOINTS:D}=await Se(async()=>{const{API_ENDPOINTS:h}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:h}},[]),oe=await fetch(D.diagramByDiagramId(F));if(!oe.ok){console.warn("Could not load diagram for position saving");return}const de=await oe.json(),X=E.querySelectorAll('g[id*="flowchart"], g[id*="graph"]'),w=[];if(X.forEach(h=>{const R=h.getAttribute("id")||"";let S=R;if(R.includes("_")){const ue=R.split("_");ue.length>=2&&(ue[0]==="flowchart"||ue[0]==="graph")&&(S=ue.slice(1,-1).join("_")||ue[1]||R)}const f=h.getAttribute("transform")||"",I=h.querySelector("rect");if(!I)return;let H=0,M=0;const L=f.match(/translate\(([^,]+),([^)]+)\)/);if(L)H=parseFloat(L[1])||0,M=parseFloat(L[2])||0;else try{const ue=I.getBBox();H=ue.x,M=ue.y}catch{return}const te=parseFloat(I.getAttribute("width"))||200,J=parseFloat(I.getAttribute("height"))||100,le=h.querySelector("text");let ve="";if(le){const ue=le.querySelectorAll("tspan");ue.length>0?ve=Array.from(ue).map(Ee=>Ee.textContent||"").join(" "):ve=le.textContent||""}w.push({nodeId:S,position:{x:Math.round(H),y:Math.round(M)},size:{width:Math.round(te),height:Math.round(J)},label:ve.substring(0,255)})}),w.length>0){let h=0;for(const R of w)try{const S=await fetch(`${D.nodes}?diagramId=${de.id}&nodeId=${R.nodeId}`);if(S.ok){const f=await S.json();if(f&&f.length>0){const I=f[0];(await fetch(D.nodeById(I.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:R.position,style:{...I.style||{},width:R.size.width,height:R.size.height}})})).ok&&h++}}}catch(S){console.warn("Could not update node position:",R.nodeId,S)}h>0&&console.log(`✅ Saved positions for ${h}/${w.length} nodes`)}}catch(D){console.warn("Could not save node positions:",D)}},V=window.location.hash,K=E=>{if(window.__isEditMode||!1)return window.history.replaceState(null,"",V||"#"),E.preventDefault(),E.stopPropagation(),!1;const D=window.location.hash.replace("#","");if(console.log("🔗 Hash change detected:",D),D.startsWith("Level")&&u[D])return E.preventDefault(),E.stopPropagation(),window.history.replaceState(null,"",V||"#"),P(D),y(!0),!1;if(D==="database"||D==="services"||D==="controllers"||D==="flows"||D==="external"||D==="advanced")return E.preventDefault(),E.stopPropagation(),window.history.replaceState(null,"",V||"#"),c(D),!1},O=()=>{window.removeEventListener("hashchange",K,!0),window.addEventListener("hashchange",K,!0)};window.__isEditMode=d,setTimeout(()=>{O(),Nt(),z(!1),p&&p.size>0&&setTimeout(()=>{var F;const E=(F=Z.current)==null?void 0:F.querySelector("svg");if(E){let D=0;p.forEach((oe,de)=>{const X=E.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const w of X)if((w.getAttribute("id")||"").includes(de)){w.setAttribute("transform",`translate(${oe.x}, ${oe.y})`),D++;break}}),console.log(`📍 Restored ${D} node positions after edit mode toggle`),setTimeout(()=>{p.forEach((oe,de)=>{const X=E.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const w of X)if((w.getAttribute("id")||"").includes(de)){const R=w.querySelector("rect");if(R){const S=parseFloat(R.getAttribute("width"))||180,f=parseFloat(R.getAttribute("height"))||90,I=oe.x+S/2,H=oe.y+f/2;ht(E,de,I,H)}break}})},200)}},300)},100)}catch(p){console.error("Mermaid rendering error:",p),z(!1),Z.current.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <div class="empty-state-text">Failed to render diagram</div>
          <div style="font-size: 11px; margin-top: 8px; color: var(--text-muted); max-width: 500px;">
            ${p.message||"Check browser console (F12) for details"}
          </div>
        </div>
      `}},Nt=()=>{if(!Z.current)return;const p=Z.current.querySelector("svg");if(!p)return;p.querySelectorAll('.node, g[id*="flowchart"]').forEach(C=>{C.style.cursor="pointer";const U=async Q=>{var Ee,Re,Je,ze,vt,yt;if(window.__isEditMode||!1){if(console.log("🚫 Edit mode active - blocking task panel"),j){Q.stopPropagation(),Q.preventDefault(),Q.stopImmediatePropagation();return}Q.stopPropagation(),Q.preventDefault(),Q.stopImmediatePropagation(),Gt(Q,C);return}Q.stopPropagation(),Q.preventDefault();let g=C.getAttribute("id")||((Ee=C.closest("g"))==null?void 0:Ee.getAttribute("id"))||"";if(g&&g.includes("_")){const ae=g.split("_");if(ae.length>=2&&(ae[0]==="flowchart"||ae[0]==="graph")){const ie=ae.findIndex(Ce=>/^[A-Z]/.test(Ce));ie>=0?g=ae[ie]:ae.length>=2&&(g=ae[1])}}const B=C.closest("g");if(B&&!g&&(((Re=B.className)==null?void 0:Re.baseVal)||B.className||"").includes("node")){const ie=B.querySelector("rect");if(ie){const Ce=ie.getAttribute("id")||"";Ce&&(g=Ce.replace(/^flowchart_|^graph_/,"").split("_")[0])}}const V=C.querySelector("text, .nodeLabel");if(!V)return;let K="";const O=V.querySelectorAll("tspan");O.length>0?K=Array.from(O).map(ae=>{var ie;return((ie=ae.textContent)==null?void 0:ie.trim())||""}).join(`
`):K=((Je=V.textContent)==null?void 0:Je.trim())||"",K=K.replace(/[✅🔄⏸️🚫]/g,"").trim();const E=K.replace(/\s+/g," ").trim();let F=K.split(/\n|<br\/>|•/)[0].trim();F=F.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").trim();const D=F.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);D&&(F=D[1].trim()),console.log("🖱️ Clicked node:",F,"| Node ID:",g,"| Original text:",K.substring(0,50));const oe=C.closest("g");if(oe){const ie=((vt=(((ze=oe.querySelector("title"))==null?void 0:ze.textContent)||"").match(/#(\w+)/))==null?void 0:vt[1])||oe.getAttribute("data-click")||"";if(ie){if(window.__isEditMode)return;if(ie.startsWith("Level")&&u[ie]){console.log("✅ Found Level task from click handler:",ie),P(ie),y(!0);return}const Ce=ie.replace(/^#/,"");if(Ce==="database"||Ce==="services"||Ce==="controllers"||Ce==="flows"||Ce==="external"||Ce==="advanced"){console.log("✅ Found diagram navigation from click handler:",Ce),c(Ce);return}}}if(!window.__isEditMode){const ae=E.match(/Level(\d+)_(\w+)/i);if(ae){const ie=ae[0];if(u[ie]){console.log("✅ Found Level task ID in node text:",ie),P(ie),y(!0);return}}}if(["legend","project status","click components","completed","in progress","not started","blocked"].some(ae=>F.toLowerCase().includes(ae)||K.toLowerCase().includes(ae)))return;const w=F.replace(/[✅🔄⏸️🚫🔒]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").trim();if([E.includes("[ADVANCED]"),E.includes("🚀"),w.toLowerCase().includes("advanced"),g&&(g.includes("Margin")||g.includes("Futures")||g.includes("Options")||g.includes("AML")||g.includes("Sanctions")||g.includes("Staking")||g.includes("Lending")||g.includes("ColdWallet")||g.includes("MultiSig")||g.includes("Analytics")||g.includes("TradingAnalytics")||g.includes("BusinessAnalytics")||g.includes("AdminDash")||g.includes("DataWarehouse")||g.includes("Fees")||g.includes("Support")||g.includes("Liquidity")||g.includes("MarketData")||g.includes("Infrastructure")||g.includes("AdvancedOrders")||g.includes("TradingBots")||g.includes("Regulatory")||g.includes("Tax")||g.includes("Risk")||g.includes("HSM")||g.includes("AdvancedSec")||g.includes("SecMonitoring")||g.includes("Yield")||g.includes("Airdrops")||g.includes("Listing"))].some(Boolean)){console.log("🚀 Detected advanced node - Node ID:",g,"Clean name:",w);const ae=[g,w,F,w.split(/\s+/)[0],w.replace(/\s+/g,""),w.replace(/Controller|Service|C|S$/i,"").trim(),(yt=w.match(/(?:Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|Analytics|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing)/i))==null?void 0:yt[0],w.replace(/^.*?(Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing).*$/i,"$1")].filter(Boolean).filter((ie,Ce,Xe)=>Xe.indexOf(ie)===Ce);if(console.log("🚀 Trying name variations:",ae),!window.__isEditMode)for(const ie of ae){if(!ie)continue;const Ce=G(ie);if(Ce&&u[Ce]){console.log("✅ Advanced node mapped to Level task:",ie,"->",Ce),P(Ce),y(!0);return}}console.warn("⚠️ Advanced node clicked, no Level task found. Node ID:",g,"Name:",w,"Variations tried:",ae),c("advanced");return}const S=E.toLowerCase(),f=w.toLowerCase();if(S.includes("database")&&(S.includes("81")||S.includes("tables"))&&!S.includes("services")&&!S.includes("service")){console.log("Navigation node clicked: database"),c("database");return}if((S.includes("controllers")||f==="controllers")&&(S.includes("25+")||S.includes("25"))){console.log("Navigation node clicked: controllers"),c("controllers");return}if((S.includes("services")||f==="services")&&!S.includes("database")&&!S.includes("advanced")&&(S.includes("core services")||S.includes("wallet services")||S.includes("service layer")||f==="services")){console.log("Navigation node clicked: services"),c("services");return}if(S.includes("flows")||S.includes("key flows")){console.log("Navigation node clicked: flows"),c("flows");return}if(S.includes("external")||S.includes("integrations")){console.log("Navigation node clicked: external"),c("external");return}let I=null;const H=[w,w.split(/\s+/)[0],w.replace(/\s+/g,""),w+"Controller",w+"Service",w.replace(/Controller$/i,"").trim()+"Controller",w.replace(/Service$/i,"").trim()+"Service",w.replace(/C$/,"Controller"),w.replace(/S$/,"Service"),w.replace(/^Level\s*\d+[:\s]*/i,""),w.replace(/\s*\[ADVANCED\]/i,"")];for(const ae of H){const ie=G(ae);if(ie&&u[ie]){I=ie,console.log("✅ Mapped via mapNodeToLevel:",ae,"->",ie);break}}if(!I)for(const ae of H){if(ae.startsWith("Level")&&u[ae]){I=ae,console.log("✅ Found Level task directly:",ae);break}try{const ie=await N(ae);if(ie&&ie.id&&ie.id.startsWith("Level")){I=ie.id,console.log("✅ Mapped via getOrCreateTask:",ae,"->",I);break}}catch(ie){console.warn("Error mapping task:",ae,ie)}}if(!I){const ae={admin:"Level13_AdminRBAC",customer:"Level3_CustomerIdentity",user:"Level3_CustomerIdentity",order:"Level7_TradingEngine",trade:"Level7_TradingEngine",wallet:"Level5_WalletServices",deposit:"Level5_WalletServices",withdraw:"Level5_WalletServices",payment:"Level11_PaymentGateways",gateway:"Level11_PaymentGateways",blockchain:"Level6_Blockchain",market:"Level8_MarketManagement",coin:"Level8_MarketManagement",email:"Level4_Notifications",sms:"Level4_Notifications",notification:"Level4_Notifications",ticket:"Level15_SupportContent",blog:"Level15_SupportContent",gift:"Level16_Promotional",referral:"Level16_Promotional",exchange:"Level14_OTCExchange",role:"Level13_AdminRBAC",security:"Level2_DatabaseAuth",auth:"Level2_DatabaseAuth",jwt:"Level2_DatabaseAuth",kyc:"Level12_KYCIdentity",identity:"Level12_KYCIdentity",finnotech:"Level12_KYCIdentity",jibit:"Level12_KYCIdentity"},ie=w.toLowerCase();for(const[Ce,Xe]of Object.entries(ae))if(ie.includes(Ce)&&u[Xe]){I=Xe,console.log("⚠️ Using fallback mapping:",w,"->",Xe,"(keyword:",Ce+")");break}!I&&u.Level1_ProjectSetup&&(I="Level1_ProjectSetup",console.warn("⚠️ Using ultimate fallback (Level1) for node:",w)),I||(console.error("❌ Could not map diagram node to any Level task:",{original:F,cleaned:w,variations:H,nodeId:g}),I="Level1_ProjectSetup")}(!I||!u[I])&&(console.error("❌ Invalid taskIdToUse, using Level1 as fallback:",I),I="Level1_ProjectSetup");let M=null;const L=[I,...H.map(ae=>G(ae)).filter(Boolean)];console.log("🔍 Looking for node details:",{nodeName:F,nodeId:g,possibleTaskIds:L,taskIdToUse:I});const te=F.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").replace(/\s+/g,"").trim(),J=[];g&&(J.push(g),g.endsWith("C")&&g.length>1&&J.push(g.slice(0,-1)+"Controller"),g.endsWith("S")&&g.length>1&&J.push(g.slice(0,-1)+"Service")),J.push(te,te+"Controller",te+"Service",te.replace(/C$/,"Controller"),te.replace(/S$/,"Service"),te.replace(/Controller$/,""),te.replace(/Service$/,""),F.replace(/\s+/g,"")+"Controller",F.replace(/\s+/g,"")+"Service",F.replace(/\s+/g,""),F);const le=F.match(/(\w+)\s*Controller/i);le&&J.push(le[1]+"Controller");const ve=F.match(/(\w+)\s*Service/i);ve&&J.push(ve[1]+"Service");const ue=[...new Set(J.filter(ae=>ae&&ae.length>0))];console.log("🔍 Trying variations:",ue);for(const ae of ue){const ie=Qe(ae);if(ie&&ie.endpoints&&ie.endpoints.length>0){M=ae,console.log("✅ Match found:",ae);break}}if(!M)for(const ae of L){const ie=Qe(ae);if(ie&&ie.endpoints&&ie.endpoints.length>0){M=ae,console.log("✅ Match found with taskId:",ae);break}}console.log("📌 Final nodeIdForApiTester:",M),M?(a(M),console.log("✅ Set selectedNode to:",M)):(a(null),console.log("⚠️ No matching nodeDetails found for API tester")),!o&&(window.__isEditMode||(P(I),y(!0)))};C._clickHandler=U,C.addEventListener("click",U,!0),C.addEventListener("mouseenter",Q=>{var h,R,S;document.querySelectorAll(".diagram-tooltip").forEach(f=>f.remove());const re=C.getBoundingClientRect(),g=C.querySelector("text, .nodeLabel");if(!g)return;let B="";const V=g.querySelectorAll("tspan");V.length>0?B=Array.from(V).map(f=>{var I;return((I=f.textContent)==null?void 0:I.trim())||""}).join(`
`):B=((h=g.textContent)==null?void 0:h.trim())||"";const K=B;B=B.replace(/[✅🔄⏸️🚫]/g,"").trim();let O=K.split(/\n|<br\/>|•/)[0].trim();O=O.replace(/[✅🔄⏸️🚫]/g,"").trim();const E=O.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);E&&(O=E[1].trim());const F=O||"Component";if(console.log("=== HOVER DEBUG ==="),console.log("Full node text:",B.substring(0,200)),console.log("Extracted node name:",O),["legend","project status","click components","completed","in progress","not started","blocked"].some(f=>O.toLowerCase().includes(f)||B.toLowerCase().includes(f)))return;const de=[O,O+"Controller",O+"Service",O.replace(/C$/,"Controller"),O.replace(/S$/,"Service"),O.replace(/Controller$/,"")+"Controller",O.replace(/Service$/,"")+"Service",O.replace(/\s+/g,""),O.split(/\s+/)[0],O.split(/\s+/)[0]+"Controller",O.split(/\s+/)[0]+"Service"];console.log("Trying to match with IDs:",de);let X=null,w=null;for(const f of de)if(X=Qe(f),X){console.log("✅ Found node details for ID:",f),console.log("   Endpoints count:",((R=X.endpoints)==null?void 0:R.length)||0);break}for(const f of de)if(u[f]){w=u[f],console.log("Found task info for:",f);break}!X&&!w&&console.log("No details found for node:",O,"Tried IDs:",de);{const f=document.createElement("div");f.className="diagram-tooltip",f.style.position="fixed",window.innerWidth-re.right>500?f.style.left=`${re.right+20}px`:f.style.right=`${window.innerWidth-re.left+20}px`;const H=re.top;f.style.top=`${Math.max(10,Math.min(H,window.innerHeight-400))}px`,f.setAttribute("data-tooltip","true");let M="";if(!X){let L=B.split(/\n/).map(J=>J.trim()).filter(J=>J);const te=[];if(console.log("Raw node text:",B),console.log("Lines after split:",L),L.length===1&&((S=L[0].match(/(GET|POST|PUT|DELETE|PATCH)/g))==null?void 0:S.length)>1){console.log("Detected concatenated endpoints, splitting...");const J=L[0],le=/(GET|POST|PUT|DELETE|PATCH)\s*(\/[^\s]+?)(?=(?:GET|POST|PUT|DELETE|PATCH)|$)/g,ve=J.matchAll(le);for(const ue of ve){const Ee=ue[2].trim();te.push({method:ue[1],path:Ee}),console.log("Found endpoint:",ue[1],Ee)}}else L.forEach(J=>{const le=J.match(/(GET|POST|PUT|DELETE|PATCH)\s+(\/[^\s]+)/);le&&(te.push({method:le[1],path:le[2]}),console.log("Found endpoint:",le[1],le[2]))});console.log("Total endpoints extracted:",te.length),(te.length>0||L.length>1)&&(X={title:F,icon:O.includes("Controller")?"🎛️":O.includes("Service")?"⚙️":O.includes("Database")||O.includes("Table")?"💾":"📦",description:`Component with ${te.length} endpoint${te.length!==1?"s":""}`,endpoints:te.length>0?te:null})}if(X){const L=X.title||F;M+=`
              <div class="tooltip-header">
                <span class="tooltip-icon">${X.icon||"📦"}</span>
                <span class="tooltip-title">${L}</span>
              </div>
              <div class="tooltip-description">${X.description||"Component details"}</div>
            `,X.endpoints&&X.endpoints.length>0&&(console.log(`Rendering ${X.endpoints.length} endpoints for ${X.title}`),M+='<div class="tooltip-section"><strong>📡 Endpoints:</strong></div>',X.endpoints.slice(0,10).forEach((J,le)=>{const ve={GET:"#10b981",POST:"#3b82f6",PUT:"#f59e0b",DELETE:"#ef4444",PATCH:"#a855f7"}[J.method]||"#6b7280";console.log(`  Endpoint ${le+1}: ${J.method} ${J.path}`),M+=`
                  <div class="tooltip-endpoint">
                    <span class="endpoint-method" style="background: ${ve}">${J.method}</span>
                    <span class="endpoint-path">${J.path}</span>
                  </div>
                  ${J.description?`<div class="endpoint-desc">→ ${J.description}</div>`:""}
                `}),X.endpoints.length>10&&(M+=`<div class="endpoint-desc" style="text-align: center; margin-top: 8px; font-style: italic;">... and ${X.endpoints.length-10} more</div>`)),X.services&&X.services.length>0&&(M+=`<div class="tooltip-section"><strong>⚙️ Uses:</strong> ${X.services.slice(0,5).join(", ")}</div>`),X.tables&&X.tables.length>0&&(M+=`<div class="tooltip-section"><strong>💾 Tables:</strong> ${X.tables.slice(0,5).join(", ")}</div>`),X.schema&&(M+=`<div class="tooltip-section"><strong>📋 Columns:</strong> ${Object.keys(X.schema).slice(0,6).join(", ")}</div>`)}if(w){if(!X){const le=w.title||F;M=`
                <div class="tooltip-header">
                  <span class="tooltip-icon">${w.category==="Infrastructure"?"🏗️":w.category==="Core Services"?"⚙️":w.category==="Business Logic"?"💼":w.category==="Integration"?"🔗":w.category==="Security"?"🔐":w.category==="Documentation"?"📚":"📦"}</span>
                  <span class="tooltip-title">${le}</span>
                </div>
                <div class="tooltip-description">${w.description||"Task details"}</div>
              `+M}const te={completed:"#10b981",in_progress:"#3b82f6",blocked:"#ef4444",not_started:"#6b7280"}[w.status]||"#6b7280",J={completed:"✅",in_progress:"🔄",blocked:"🚫",not_started:"⏸️"}[w.status]||"⏸️";M+=`
              <div class="tooltip-project">
                <div class="project-status" style="color: ${te}">
                  ${J} <strong>Status:</strong> ${w.status.replace(/_/g," ").toUpperCase()}
                </div>
                <div class="project-progress">
                  ⏱️ ${w.actualHours}h / ${w.estimatedHours}h estimated
                </div>
                <div class="project-hint">💡 Click to manage task</div>
              </div>
            `}(!M||M.trim()==="")&&(M=`
              <div class="tooltip-header">
                <span class="tooltip-icon">📦</span>
                <span class="tooltip-title">${F}</span>
              </div>
              <div class="tooltip-description">Component from diagram</div>
              <div class="tooltip-project">
                <div class="project-hint">💡 Click to track progress</div>
              </div>
            `),f.innerHTML=M,document.body.appendChild(f),C._tooltip=f}}),C.addEventListener("mouseleave",Q=>{C._tooltip&&(C._tooltip.remove(),C._tooltip=null),document.querySelectorAll(".diagram-tooltip").forEach(re=>re.remove())})})},Ot=p=>{var C,U,Q,re,g;if(document.querySelectorAll(".diagram-tooltip").forEach(B=>B.remove()),d&&j){const B=p.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect');if(B){let V=B.getAttribute("id")||"";const K=B.closest("g");if(K){const O=K.getAttribute("id")||"";if(O.includes("_")){const E=O.split("_");if(E.length>=2&&(E[0]==="flowchart"||E[0]==="graph")){const F=E.findIndex(D=>/^[A-Z]/.test(D));F>=0?V=E[F]:E.length>=2&&(V=E[1])}}}if(!V){const O=B.querySelector("text")||(K==null?void 0:K.querySelector("text"));O&&(V=(((C=O.textContent)==null?void 0:C.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(V){console.log("🎯 Starting drag for node:",V),Y(V),xe(!0);const O=(U=Z.current)==null?void 0:U.querySelector("svg");if(O){const E=O.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const F of E){const D=F.getAttribute("id")||"";if(Ke(D)===V||D.includes(V)){const de=O.createSVGPoint();de.x=p.clientX,de.y=p.clientY;const X=O.getScreenCTM();if(X){const w=X.inverse(),h=de.matrixTransform(w),S=(F.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(S){const f=parseFloat(S[1])||0,I=parseFloat(S[2])||0,H=h.x-f,M=h.y-I;ke({x:H,y:M}),Ae({x:p.clientX,y:p.clientY}),console.log("📍 Drag start - SVG coords:",h,"Node:",{nodeX:f,nodeY:I},"Offset:",{offsetX:H,offsetY:M})}}else{const w=(Q=q.current)==null?void 0:Q.getBoundingClientRect();if(w){const h=((re=q.current)==null?void 0:re.scrollLeft)||0,R=((g=q.current)==null?void 0:g.scrollTop)||0,S=(p.clientX-w.left+h)/r,f=(p.clientY-w.top+R)/r,H=(F.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(H){const M=parseFloat(H[1])||0,L=parseFloat(H[2])||0;ke({x:S-M,y:f-L}),Ae({x:p.clientX,y:p.clientY})}}}break}}}p.preventDefault(),p.stopPropagation();return}else console.warn("⚠️ Could not extract node ID for dragging")}}p.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect, path')&&(!d||!j)||p.button===0&&q.current&&(!d||!j)&&(Te(!0),ge({x:p.clientX,y:p.clientY}),De({x:q.current.scrollLeft,y:q.current.scrollTop}),p.preventDefault())},Mt=p=>{if(d&&j&&x){Wt(p);return}if(Ie&&q.current&&(!d||!j)){const T=p.clientX-Ne.x,C=p.clientY-Ne.y;q.current.scrollLeft=pe.x-T,q.current.scrollTop=pe.y-C}},ut=()=>{var p;if(d&&j&&x){const T=(p=Z.current)==null?void 0:p.querySelector("svg");if(T){const C=T.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');for(const U of C){const Q=U.getAttribute("id")||"";if(Ke(Q)===x||Q.includes(x)){const g=U.querySelector("rect");if(g){const B=U.getAttribute("transform")||"";let V=0,K=0;const O=B.match(/translate\(([^,]+),\s*([^)]+)\)/);if(O)V=parseFloat(O[1])||0,K=parseFloat(O[2])||0;else try{const D=g.getBBox();V=D.x,K=D.y}catch{return}const E=parseFloat(g.getAttribute("width"))||180,F=parseFloat(g.getAttribute("height"))||90;console.log(`💾 Saving position for ${x}: (${V}, ${K})`),mt(x,V,K,E,F)}break}}}}xe(!1),Te(!1),d&&j&&Y(null)},mt=async(p,T,C,U,Q)=>{var re;try{const{API_ENDPOINTS:g}=await Se(async()=>{const{API_ENDPOINTS:K}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:K}},[]),B=(re=b==null?void 0:b.nodeEntities)==null?void 0:re.find(K=>K.nodeId===p);if(!B){console.warn(`Node entity not found for ${p}`);return}if(!(await fetch(`${g.nodeById(B.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:{x:T,y:C},style:{width:U,height:Q,...B.style||{}}})})).ok)throw new Error("Failed to update node position");v(K=>({...K,nodeEntities:K.nodeEntities.map(O=>O.nodeId===p?{...O,position:{x:T,y:C},style:{...O.style,width:U,height:Q}}:O)})),console.log(`✅ Updated position for node ${p}`)}catch(g){console.error("Failed to update node position:",g)}},gt=async(p,T)=>{var C;try{const{API_ENDPOINTS:U}=await Se(async()=>{const{API_ENDPOINTS:g}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:g}},[]),Q=(C=b==null?void 0:b.nodeEntities)==null?void 0:C.find(g=>g.nodeId===p);if(!Q){console.warn(`Node entity not found for ${p}`);return}if(!(await fetch(`${U.nodeById(Q.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({style:{...Q.style||{},fill:T,stroke:T}})})).ok)throw new Error("Failed to update node color");v(g=>({...g,nodeEntities:g.nodeEntities.map(B=>B.nodeId===p?{...B,style:{...B.style,fill:T,stroke:T}}:B)})),m&&Ye(),console.log(`✅ Updated color for node ${p} to ${T}`)}catch(U){console.error("Failed to update node color:",U)}},jt=async()=>{if(!he.label.trim()){alert("Please enter a node label");return}try{const{API_ENDPOINTS:p,extractNodesFromMermaid:T}=await Se(async()=>{const{API_ENDPOINTS:B,extractNodesFromMermaid:V}=await Promise.resolve().then(()=>Ue);return{API_ENDPOINTS:B,extractNodesFromMermaid:V}},void 0),C=he.label.replace(/[^a-zA-Z0-9]/g,"_")+"_"+Date.now(),U={nodeId:C,label:he.label,type:he.type||"default",position:{x:100,y:100},style:{width:180,height:90,fill:he.color||"#60a5fa",stroke:he.color||"#60a5fa"},diagramId:(b==null?void 0:b.dbId)||t,taskNodeId:"Level1_ProjectSetup"};if(!(await fetch(p.nodes,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)})).ok)throw new Error("Failed to create node");const re=m.code+`
  ${C}["${he.label}"]`,{saveDiagramToBackend:g}=await Se(async()=>{const{saveDiagramToBackend:B}=await Promise.resolve().then(()=>Ue);return{saveDiagramToBackend:B}},void 0);await g(t,{mermaidCode:re,code:re}),window.dispatchEvent(new Event("diagram-saved")),ne(!1),Oe({label:"",type:"default",color:"#60a5fa"}),console.log(`✅ Added new node: ${C}`)}catch(p){console.error("Failed to add node:",p),alert("Failed to add node: "+p.message)}},Dt=async()=>{if(confirm("⚠️ This will clear all saved node positions and reset to default layout. Continue?"))try{const{API_ENDPOINTS:p}=await Se(async()=>{const{API_ENDPOINTS:C}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:C}},[]);if(!(b!=null&&b.nodeEntities)){alert("No nodes to clear");return}let T=0;for(const C of b.nodeEntities)if(C.id&&C.position)try{(await fetch(`${p.nodeById(C.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:null})})).ok&&T++}catch(U){console.warn(`Failed to clear position for ${C.nodeId}:`,U)}window.dispatchEvent(new Event("diagram-saved")),alert(`✅ Cleared ${T} node positions. Diagram will use default layout.`)}catch(p){console.error("Failed to clear positions:",p),alert("❌ Failed to clear positions: "+p.message)}},_t=async()=>{var p,T,C;try{if(!m||!b){console.warn("No diagram to save"),alert("❌ No diagram to save");return}const{saveDiagramToBackend:U,saveNodesToBackend:Q,extractEdgesFromMermaid:re}=await Se(async()=>{const{saveDiagramToBackend:E,saveNodesToBackend:F,extractEdgesFromMermaid:D}=await Promise.resolve().then(()=>Ue);return{saveDiagramToBackend:E,saveNodesToBackend:F,extractEdgesFromMermaid:D}},void 0),{API_ENDPOINTS:g}=await Se(async()=>{const{API_ENDPOINTS:E}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:E}},[]),B=(p=Z.current)==null?void 0:p.querySelector("svg");B||console.warn("No SVG element found");const V=B?B.querySelectorAll('g[id*="flowchart"], g[id*="graph"]'):[],K=[];if(B&&V.length>0)for(const E of V){const F=E.getAttribute("id")||"";let D=Ke(F);if(!D){const L=E.querySelector("text");L&&(D=(((T=L.textContent)==null?void 0:T.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(!D)continue;let oe=(C=b==null?void 0:b.nodeEntities)==null?void 0:C.find(L=>L.nodeId===D);const de=E.querySelector("rect");if(!de)continue;const X=E.getAttribute("transform")||"";let w=0,h=0;const R=X.match(/translate\(([^,]+),\s*([^)]+)\)/);if(R)w=parseFloat(R[1])||0,h=parseFloat(R[2])||0;else try{const L=de.getBBox();w=L.x,h=L.y}catch{continue}const S=parseFloat(de.getAttribute("width"))||180,f=parseFloat(de.getAttribute("height"))||90,I=de.getAttribute("fill")||de.style.fill||null,H=de.getAttribute("stroke")||de.style.stroke||null,M={...oe||{},nodeId:D,position:{x:Math.round(w),y:Math.round(h)},style:{...(oe==null?void 0:oe.style)||{},width:S,height:f,...I?{fill:I}:{},...H?{stroke:H}:{}}};if(oe!=null&&oe.id)try{const L=await fetch(`${g.nodeById(oe.id)}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:M.position,style:M.style})});L.ok?(K.push(M),console.log(`✅ Saved position for ${D}: (${w}, ${h})`)):console.warn(`Failed to save node ${D}:`,L.statusText)}catch(L){console.warn(`Failed to update node ${D}:`,L)}else console.warn(`Node entity not found for ${D}, skipping save`)}const O=re(m.code||"");O.length>0&&(await U(t,{...m,edges:O}),console.log(`✅ Saved ${O.length} edges`)),await U(t,{title:m.title,description:m.description||"",mermaidCode:m.code,code:m.code}),window.__shouldApplyPositions=!0,window.dispatchEvent(new Event("diagram-saved")),console.log(`✅ All changes saved successfully! (${K.length} nodes updated)`),alert(`✅ All changes saved successfully! (${K.length} nodes updated)`)}catch(U){console.error("Failed to save changes:",U),alert("❌ Failed to save changes: "+U.message)}},Bt=async(p,T)=>{try{const{API_ENDPOINTS:C}=await Se(async()=>{const{API_ENDPOINTS:K}=await import("./api-DoOXbIPf.js");return{API_ENDPOINTS:K}},[]);if(((b==null?void 0:b.edges)||[]).some(K=>(K.source===p||K.sourceNodeId===p)&&(K.target===T||K.targetNodeId===T))){console.log("Edge already exists");return}const re={sourceNodeId:p,targetNodeId:T,type:"directed",diagramId:(b==null?void 0:b.dbId)||t},g=[...(b==null?void 0:b.edges)||[],{source:p,target:T,sourceNodeId:p,targetNodeId:T,type:"directed"}],B=m.code+`
  ${p} --> ${T}`,{saveDiagramToBackend:V}=await Se(async()=>{const{saveDiagramToBackend:K}=await Promise.resolve().then(()=>Ue);return{saveDiagramToBackend:K}},void 0);await V(t,{mermaidCode:B,code:B,edges:g}),window.dispatchEvent(new Event("diagram-saved")),W(!1),A(null),console.log(`✅ Added edge: ${p} --> ${T}`)}catch(C){console.error("Failed to add edge:",C),alert("Failed to add edge: "+C.message)}},Ke=p=>{if(!p)return null;let T=[];if(p.includes("_"))T=p.split("_");else if(p.includes("-"))T=p.split("-");else return p;if(T.length>=2&&(T[0]==="flowchart"||T[0]==="graph")){const C=T.findIndex(U=>/^[A-Z]/.test(U));if(C>=0)return T[C];if(T.length>=2)return T[1]}return null},Gt=(p,T)=>{var Q;if(!d)return;p.stopPropagation();let C=T.getAttribute("id")||"";const U=T.closest("g");if(U){const re=U.getAttribute("id")||"",g=Ke(re);g&&(C=g)}if(!C||C.includes("flowchart")||C.includes("graph")){const re=T.querySelector("text")||(U==null?void 0:U.querySelector("text"));re&&(C=(((Q=re.textContent)==null?void 0:Q.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}if(!C){console.warn("Could not extract node ID for editing");return}ee?s?s!==C?Bt(s,C):(W(!1),A(null)):(A(C),console.log("🔗 Connection started from:",C)):j?(Y(C),xe(!0)):(Y(C),we(C))},Wt=p=>{var de,X;if(!d||!j||!x)return;p.stopPropagation(),p.preventDefault();const T=(de=Z.current)==null?void 0:de.querySelector("svg");if(!T)return;const C=T.querySelectorAll('g[id*="flowchart"], g[id*="graph"]');let U=null;for(const w of C){const h=w.getAttribute("id")||"";if(Ke(h)===x||h.includes(x)){U=w;break}}if(!U){console.warn("⚠️ Node group not found for:",x);return}const Q=T.createSVGPoint();Q.x=p.clientX,Q.y=p.clientY;const re=T.getScreenCTM();let g,B;if(re){const w=re.inverse(),h=Q.matrixTransform(w);g=h.x,B=h.y}else{const w=(X=q.current)==null?void 0:X.getBoundingClientRect();if(!w)return;const h=q.current.scrollLeft||0,R=q.current.scrollTop||0;g=(p.clientX-w.left+h)/r,B=(p.clientY-w.top+R)/r}const V=Pe.x||0,K=Pe.y||0,O=g-V,E=B-K;U.setAttribute("transform",`translate(${O}, ${E})`);const F=U.querySelector("rect");if(!F)return;const D=parseFloat(F.getAttribute("width"))||180,oe=parseFloat(F.getAttribute("height"))||90;console.log(`🔄 Updating edges for node: ${x} at (${O+D/2}, ${E+oe/2})`),requestAnimationFrame(()=>{ht(T,x,O+D/2,E+oe/2)}),clearTimeout(window.nodePositionSaveTimeout),window.nodePositionSaveTimeout=setTimeout(()=>{console.log(`💾 Saving position for ${x}: (${O}, ${E})`),mt(x,O,E,D,oe)},500)},ht=(p,T,C,U)=>{const Q=p.querySelectorAll('g[id*="flowchart"]'),re=new Map;Q.forEach(V=>{var E;const K=V.getAttribute("id")||"",O=V.querySelector("rect");if(O){const D=(V.getAttribute("transform")||"").match(/translate\(([^,]+),\s*([^)]+)\)/);if(D){const oe=parseFloat(D[1])||0,de=parseFloat(D[2])||0,X=parseFloat(O.getAttribute("width"))||180,w=parseFloat(O.getAttribute("height"))||90,h=oe+X/2,R=de+w/2;let S="";if(K.includes("_")){const f=K.split("_"),I=f.findIndex(H=>/^[A-Z]/.test(H));I>=0?S=f[I]:f.length>=2&&(S=f[1])}if(!S){const f=V.querySelector("text");f&&(S=(((E=f.textContent)==null?void 0:E.trim())||"").split(/\n|<br\/>/)[0].replace(/[^a-zA-Z0-9]/g,""))}S&&re.set(S,{group:V,x:oe,y:de,width:X,height:w,centerX:h,centerY:R})}}});const g=(b==null?void 0:b.edges)||[];p.querySelectorAll('path[class*="flowchart"], path[class*="edge"], path').forEach((V,K)=>{const O=V.getAttribute("class")||"";if(O.includes("node")&&!O.includes("edge"))return;const E=V.getAttribute("d")||"";if(!E||E.length<10)return;const F=E.match(/M\s*([\d.-]+)\s*([\d.-]+)/),D=E.match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)(?:\s|$)/g);if(!F)return;const oe={x:parseFloat(F[1]),y:parseFloat(F[2])};let de=oe;if(D&&D.length>0){const S=D[D.length-1].match(/(?:L|M)\s*([\d.-]+)\s*([\d.-]+)/);S&&(de={x:parseFloat(S[1]),y:parseFloat(S[2])})}const X=Math.sqrt(Math.pow(oe.x-C,2)+Math.pow(oe.y-U,2)),w=Math.sqrt(Math.pow(de.x-C,2)+Math.pow(de.y-U,2)),h=250;if(X<h||w<h){let R=null,S=null;if(re.forEach((f,I)=>{const H=Math.sqrt(Math.pow(f.centerX-oe.x,2)+Math.pow(f.centerY-oe.y,2)),M=Math.sqrt(Math.pow(f.centerX-de.x,2)+Math.pow(f.centerY-de.y,2));H<h&&(!R||H<Math.sqrt(Math.pow(R.centerX-oe.x,2)+Math.pow(R.centerY-oe.y,2)))&&(R={name:I,...f}),M<h&&(!S||M<Math.sqrt(Math.pow(S.centerX-de.x,2)+Math.pow(S.centerY-de.y,2)))&&(S={name:I,...f})}),R&&S){const f=it(R.x,R.y,R.width,R.height,S.centerX,S.centerY),I=it(S.x,S.y,S.width,S.height,R.centerX,R.centerY),H=`M ${f.x} ${f.y} L ${I.x} ${I.y}`;V.setAttribute("d",H),console.log(`🔗 Updated edge: ${R.name} -> ${S.name}`)}else if(X<h||w<h){const f=(X<w,re.get(T));if(f){const I=g.filter(H=>H.source===T||H.sourceNodeId===T||H.target===T||H.targetNodeId===T);for(const H of I){const M=H.source===T||H.sourceNodeId===T?H.target||H.targetNodeId:H.source||H.sourceNodeId,L=re.get(M);if(L){const te=H.source===T||H.sourceNodeId===T?f:L,J=H.source===T||H.sourceNodeId===T?L:f,le=it(te.x,te.y,te.width,te.height,J.centerX,J.centerY),ve=it(J.x,J.y,J.width,J.height,te.centerX,te.centerY),ue=`M ${le.x} ${le.y} L ${ve.x} ${ve.y}`;V.setAttribute("d",ue),console.log(`🔗 Updated edge from data: ${te.name||T} -> ${J.name||M}`);break}}}}}})},it=(p,T,C,U,Q,re)=>{const g=p+C/2,B=T+U/2,V=Q-g,K=re-B,O=Math.atan2(K,V);let E,F;return Math.abs(V)>Math.abs(K)?(E=V>0?p+C:p,F=B+(E-g)*Math.tan(O),F<T&&(F=T),F>T+U&&(F=T+U)):(F=K>0?T+U:T,E=g+(F-B)/Math.tan(O),E<p&&(E=p),E>p+C&&(E=p+C)),{x:E,y:F}},{getProgress:Ft}=tt(),Fe=Ft();return e.jsxs("div",{className:`diagram-canvas ${d?"edit-mode":""} ${ee?"is-connecting":""} ${j?"is-moving":""}`,children:[d&&e.jsxs("div",{className:"edit-toolbar",children:[e.jsxs("div",{className:"edit-toolbar-section",children:[e.jsxs("button",{className:`edit-toolbar-btn ${j?"active":""}`,onClick:()=>{fe(!j),W(!1),A(null)},title:"Move nodes (click and drag nodes to reposition)",children:[e.jsx("span",{children:"↔️"}),e.jsx("span",{children:"Move"})]}),e.jsxs("button",{className:`edit-toolbar-btn ${ee?"active":""}`,onClick:()=>{W(!ee),fe(!1),A(null)},title:"Connect nodes (click two nodes to create an edge)",children:[e.jsx("span",{children:"🔗"}),e.jsx("span",{children:"Connect"})]}),e.jsxs("button",{className:"edit-toolbar-btn",onClick:()=>ne(!0),title:"Add new node",children:[e.jsx("span",{children:"➕"}),e.jsx("span",{children:"Add Node"})]})]}),e.jsxs("div",{className:"edit-toolbar-section",children:[e.jsxs("button",{className:"edit-toolbar-btn save-btn",onClick:_t,title:"Save all changes to database",children:[e.jsx("span",{children:"💾"}),e.jsx("span",{children:"Save"})]}),e.jsxs("button",{className:"edit-toolbar-btn",onClick:Dt,title:"Clear all saved positions and reset to default layout",style:{background:"var(--bg-tertiary)",color:"var(--text-secondary)",fontSize:"12px"},children:[e.jsx("span",{children:"🔄"}),e.jsx("span",{children:"Reset Layout"})]})]})]}),$&&e.jsx("div",{className:"edit-dialog-overlay",onClick:()=>ne(!1),children:e.jsxs("div",{className:"edit-dialog",onClick:p=>p.stopPropagation(),children:[e.jsx("h3",{children:"Add New Node"}),e.jsxs("div",{className:"edit-dialog-content",children:[e.jsxs("label",{children:["Node Label:",e.jsx("input",{type:"text",value:he.label,onChange:p=>Oe({...he,label:p.target.value}),placeholder:"Enter node name",autoFocus:!0})]}),e.jsxs("label",{children:["Type:",e.jsxs("select",{value:he.type,onChange:p=>Oe({...he,type:p.target.value}),children:[e.jsx("option",{value:"default",children:"Default"}),e.jsx("option",{value:"controller",children:"Controller"}),e.jsx("option",{value:"service",children:"Service"}),e.jsx("option",{value:"database",children:"Database"})]})]}),e.jsxs("label",{children:["Color:",e.jsx("input",{type:"color",value:he.color,onChange:p=>Oe({...he,color:p.target.value})})]})]}),e.jsxs("div",{className:"edit-dialog-actions",children:[e.jsx("button",{onClick:jt,children:"Add"}),e.jsx("button",{onClick:()=>ne(!1),children:"Cancel"})]})]})}),ce&&e.jsx("div",{className:"edit-dialog-overlay",onClick:()=>we(null),children:e.jsxs("div",{className:"edit-dialog",onClick:p=>p.stopPropagation(),children:[e.jsx("h3",{children:"Change Node Color"}),e.jsxs("div",{className:"edit-dialog-content",children:[e.jsxs("label",{children:["Color:",e.jsx("input",{type:"color",defaultValue:"#60a5fa",onChange:p=>{gt(ce,p.target.value),we(null)}})]}),e.jsx("div",{className:"color-presets",children:["#60a5fa","#10b981","#f59e0b","#ef4444","#8b5cf6","#ec4899"].map(p=>e.jsx("button",{className:"color-preset",style:{backgroundColor:p},onClick:()=>{gt(ce,p),we(null)}},p))})]}),e.jsx("div",{className:"edit-dialog-actions",children:e.jsx("button",{onClick:()=>we(null),children:"Close"})})]})}),e.jsxs("div",{className:`diagram-legend ${_e?"open":"closed"}`,children:[e.jsxs("button",{className:"legend-toggle",onClick:Be,title:_e?"Close project status":"Open project status",children:[e.jsx("span",{className:"legend-toggle-icon",children:_e?"▼":"▶"}),e.jsx("span",{className:"legend-title",children:"Project Status"}),e.jsxs("span",{className:"legend-badge",children:[Fe.percentage,"%"]})]}),_e&&e.jsxs("div",{className:"legend-content",children:[e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"✅"}),"Completed"]}),e.jsx("span",{style:{fontWeight:600,color:"#10b981"},children:Fe.completed})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🔄"}),"In Progress"]}),e.jsx("span",{style:{fontWeight:600,color:"#3b82f6"},children:Fe.inProgress})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"⏸️"}),"Not Started"]}),e.jsx("span",{style:{fontWeight:600,color:"#6b7280"},children:Fe.notStarted})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🚫"}),"Blocked"]}),e.jsx("span",{style:{fontWeight:600,color:"#ef4444"},children:Fe.blocked})]})]}),e.jsxs("div",{className:"legend-progress",children:[e.jsx("div",{className:"legend-progress-bar",children:e.jsx("div",{className:"legend-progress-fill",style:{width:`${Fe.percentage}%`}})}),e.jsxs("span",{className:"legend-progress-text",children:[Fe.percentage,"%"]})]}),e.jsx("div",{className:"legend-hint",children:"Click components to track"})]})]}),e.jsx("div",{ref:q,className:`canvas-viewport ${Ie?"panning":""} ${be?"dragging":""}`,onMouseDown:Ot,onMouseMove:Mt,onMouseUp:ut,onMouseLeave:ut,onContextMenu:p=>p.preventDefault(),style:{cursor:Ie?"grabbing":"grab"},children:e.jsxs("div",{className:"canvas-content",style:{transform:`scale(${r})`,transformOrigin:"50% 50%",transition:Ie?"none":"transform 0.1s ease-out"},children:[ye&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsxs("div",{className:"loading-text",children:["Rendering ",(m==null?void 0:m.title)||t,"..."]})]}),!m&&!ye&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("div",{className:"loading-text",children:"Loading diagram..."})]}),e.jsx("div",{ref:Z,className:"diagram-container interactive"})]})})]})},Sr=()=>{const{zoomLevel:t,zoomIn:r,zoomOut:i,resetZoom:a,isFullscreen:c,toggleFullscreen:o,currentView:d,navigateToView:n}=qe(),[u,y]=k.useState(!1),P=rr(),N=P.filter(Z=>Z.type==="composite"||Z.type==="detail"),G=P.find(Z=>Z.id===d),me=()=>{o(),document.fullscreenElement&&document.exitFullscreen()};return e.jsxs("div",{className:"zoom-controls",children:[c&&e.jsxs("div",{className:"fullscreen-tab-switcher",children:[e.jsx("button",{className:"tab-switcher-btn icon-only",onClick:()=>y(!u),title:(G==null?void 0:G.title)||"Switch diagram view",children:e.jsx("span",{className:"current-tab-icon",children:(G==null?void 0:G.icon)||"📊"})}),u&&e.jsx("div",{className:"tab-dropdown",children:N.map(Z=>e.jsx("button",{className:`tab-option icon-only ${d===Z.id?"active":""}`,onClick:()=>{n(Z.id),y(!1)},title:Z.title,children:e.jsx("span",{className:"tab-option-icon",children:Z.icon})},Z.id))})]}),c&&e.jsx("button",{className:"zoom-btn exit-fullscreen",onClick:me,title:"Exit Fullscreen",children:"✕"}),e.jsx("button",{className:"zoom-btn",onClick:r,title:"Zoom In",children:"+"}),e.jsxs("div",{className:"zoom-level",children:[Math.round(t*100),"%"]}),e.jsx("button",{className:"zoom-btn",onClick:i,title:"Zoom Out",children:"−"}),e.jsx("button",{className:"zoom-btn",onClick:a,title:"Reset Zoom",children:"⟲"})]})},Cr=()=>{const{selectedNode:t,setSelectedNode:r}=qe(),i=Qe(t);if(!i)return null;const a=n=>!n||n.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Endpoints"}),n.map((u,y)=>e.jsxs("div",{className:"node-card",style:{marginBottom:"8px",padding:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"4px"},children:[e.jsx("span",{className:"node-tag",style:{background:u.method==="GET"?"#10b981":u.method==="POST"?"#3b82f6":u.method==="PUT"?"#f59e0b":u.method==="DELETE"?"#ef4444":"var(--bg-secondary)",color:"#fff"},children:u.method}),e.jsx("code",{style:{fontSize:"12px",color:"var(--accent-primary)"},children:u.path})]}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:u.description}),u.auth&&e.jsxs("div",{style:{fontSize:"10px",color:"var(--text-muted)",marginTop:"4px"},children:["🔒 Requires: ",u.auth]})]},y))]}),c=n=>!n||n.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Methods"}),n.map((u,y)=>e.jsx("div",{style:{padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"6px",marginBottom:"6px",fontSize:"11px",fontFamily:"'JetBrains Mono', 'Fira Code', monospace",color:"var(--text-secondary)",lineHeight:"1.6"},children:u},y))]}),o=n=>!n||n.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Responsibilities"}),e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:n.map((u,y)=>e.jsxs("li",{style:{padding:"8px 0",fontSize:"12px",color:"var(--text-secondary)",display:"flex",gap:"8px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)"},children:"•"}),e.jsx("span",{children:u})]},y))})]}),d=n=>!n||n.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Schema"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:n.map((u,y)=>e.jsxs("div",{style:{padding:"6px 0",borderBottom:y<n.length-1?"1px solid var(--border-primary)":"none"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"2px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)",fontWeight:600},children:u.name}),e.jsx("span",{style:{color:"var(--text-muted)"},children:u.type}),u.key&&e.jsx("span",{className:"node-tag",style:{fontSize:"9px",padding:"2px 6px"},children:u.key})]}),u.description&&e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"10px",marginLeft:"0"},children:u.description})]},y))})]});return e.jsxs("div",{className:"detail-panel",children:[e.jsxs("div",{className:"detail-panel-header",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"24px"},children:i.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-panel-title",children:i.title}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:i.type})]})]}),e.jsx("button",{className:"detail-panel-close",onClick:()=>r(null),children:"✕"})]}),e.jsxs("div",{className:"detail-panel-content",children:[e.jsx("p",{style:{fontSize:"13px",color:"var(--text-secondary)",lineHeight:"1.6",marginBottom:"16px"},children:i.description}),i.tags&&e.jsx("div",{className:"node-card-meta",style:{marginBottom:"20px"},children:i.tags.map(n=>e.jsx("span",{className:"node-tag",children:n},n))}),a(i.endpoints),c(i.methods),o(i.responsibilities),d(i.schema),i.services&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Services Used"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.services.map(n=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-secondary)",color:"#fff"},children:n},n))})]}),i.implementations&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Implementations"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.implementations.map(n=>e.jsx("span",{className:"node-tag",children:n},n))})]}),i.supportedChains&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Supported Chains"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:i.supportedChains.map(n=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-success)",color:"#fff"},children:n},n))})]}),i.relationships&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Relationships"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:i.relationships.map((n,u)=>e.jsx("div",{style:{padding:"6px 0",color:"var(--text-secondary)"},children:n},u))})]}),i.notes&&e.jsxs("div",{style:{marginTop:"20px",padding:"12px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontSize:"12px",fontWeight:600,color:"#f59e0b",marginBottom:"8px"},children:"⚠️ Notes"}),i.notes.map((n,u)=>e.jsx("p",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:u<i.notes.length-1?"8px":"0"},children:n},u))]})]})]})},et={Level1_ProjectSetup:{order:1,title:"🎮 Level 1: Project Foundation",description:"Start here! Set up your NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools.",steps:[{step:1,title:"Install Node.js and NestJS CLI",instructions:["Make sure you have Node.js 20+ installed (check with: `node --version`)","Install NestJS CLI globally: `npm install -g @nestjs/cli`","Verify installation: `nest --version`"],code:"npm install -g @nestjs/cli",expectedResult:"You should see the NestJS CLI version number",aiPrompt:"Help me install and set up NestJS CLI for a cryptocurrency exchange project. I need to install it globally and verify the installation works. Provide the commands and how to verify it's installed correctly."},{step:2,title:"Create New NestJS Project",instructions:["Navigate to your project directory","Create a new NestJS project: `nest new bitnitex-backend`","Choose npm as package manager when prompted","Wait for installation to complete"],code:`nest new bitnitex-backend
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
}`,expectedResult:"Settlements reconciled automatically"}],nextTask:null,unlockMessage:"💳 Payment gateways ready! Project is complete! 🎉"}},br=t=>{const r=Object.values(et).sort((a,c)=>a.order-c.order),i={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"};for(const a of r){const c=Object.keys(et).find(n=>et[n]===a),o=i[c];if(!o)continue;const d=t[o];if(!d)return{id:o,guide:a};if(d.status!=="completed")return{id:o,guide:a}}return null},wr=t=>{const i={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"}[t];return i&&et[i]?et[i]:null},kr=t=>{if(!t||!t.id)return{order:999,title:"Task Guide",description:"No guide available for this task",steps:[]};const r=t.id,i=t.title||r,a=t.description||"",c=r&&(r.includes("Controller")||r.endsWith("C")),o=r&&(r.includes("Service")||r.endsWith("S"));let d=[];if(c){const n=r.toLowerCase().replace("controller","");d=[{step:1,title:`Create ${i} Module`,instructions:[`Generate module: \`nest g module ${n}\``,`Generate service: \`nest g service ${n}\``,`Generate controller: \`nest g controller ${n}\``,"Import TypeOrmModule.forFeature([Entity])"],code:`nest g module ${n}
nest g service ${n}
nest g controller ${n}`,expectedResult:`${i} module structure created`,aiPrompt:`Help me create a ${i} for a NestJS cryptocurrency exchange. I need to generate the module, service, and controller using NestJS CLI, and set up the basic structure with proper DTOs and guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${r}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript. Maintain the same functionality, endpoints, business logic, and data structures.`},{step:2,title:"Implement Core Endpoints",instructions:["Create DTOs for request/response","Implement main endpoints based on Java controller","Add proper validation pipes","Add JWT guards and RBAC decorators"],code:`@Get()
@UseGuards(JwtAuthGuard)
async findAll() {
  return this.service.findAll();
}`,expectedResult:"Core endpoints working with authentication",aiPrompt:`Help me implement the core endpoints for ${i} in NestJS. I need to create DTOs, add validation, implement the endpoints, and add proper authentication guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${r}.java. Please read the Java source file, understand its endpoints and implementation, and translate them to NestJS TypeScript with proper DTOs, validation, and guards.`},{step:3,title:"Add Service Logic",instructions:["Implement business logic in service","Add database operations with TypeORM","Handle errors and exceptions","Add logging"],code:`async findAll(): Promise<Entity[]> {
  return this.repository.find();
}`,expectedResult:"Service logic implemented and tested",aiPrompt:`Help me implement the service logic for ${i} in NestJS. I need to add business logic, database operations using TypeORM, error handling, and logging.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java service file for this component is located at: src/main/java/ir/arnitex/backend/service/${r.replace("Controller","Service")}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`},{step:4,title:"Write Tests",instructions:["Create unit tests for service","Create integration tests for controller","Test all endpoints","Test error cases"],code:`describe('${i}', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive tests for ${i} in NestJS. I need unit tests for the service and integration tests for the controller endpoints.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${i} based on the Java implementation.`}]}else if(o){const n=r.toLowerCase().replace("service","");d=[{step:1,title:`Create ${i} Service`,instructions:[`Generate service: \`nest g service ${n}\``,"Import required dependencies","Set up TypeORM repository if needed","Create service class with @Injectable()"],code:`nest g service ${n}`,expectedResult:`${i} service created`,aiPrompt:`Help me create a ${i} for a NestJS cryptocurrency exchange. I need to generate the service using NestJS CLI and set up the basic structure.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${r}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript.`},{step:2,title:"Implement Core Business Logic",instructions:["Implement main service methods","Add database operations with TypeORM","Handle business rules and validations","Add error handling"],code:`async create(data: CreateDto): Promise<Entity> {
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
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive unit tests for ${i} in NestJS. I need to test all service methods with mocked dependencies.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${i} based on the Java implementation.`}]}else d=[{step:1,title:`Set Up ${i}`,instructions:["Create necessary files and structure","Install required dependencies","Configure module","Set up basic implementation"],code:`// Set up ${i}`,expectedResult:`${i} set up and ready`,aiPrompt:`Help me set up ${i} for a NestJS cryptocurrency exchange. ${a||"I need to implement this component."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. Please help me translate ${i} to NestJS TypeScript.`},{step:2,title:"Implement Core Functionality",instructions:["Implement main features","Add required logic","Test functionality","Handle edge cases"],code:`// Implement ${i}`,expectedResult:"Core functionality working",aiPrompt:`Help me implement the core functionality for ${i} in NestJS. ${a||"I need to add the main features."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement ${i} based on the Java implementation.`},{step:3,title:"Test and Refine",instructions:["Write tests","Fix any issues","Optimize performance","Update documentation"],code:`// Test ${i}`,expectedResult:`${i} tested and working`,aiPrompt:`Help me test and refine ${i} in NestJS. I need to write tests, fix issues, optimize, and document.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me test and refine ${i} based on the Java implementation.`}];return{order:100,title:`🎮 ${i}`,description:a||`Implement ${i} for BitniTex exchange`,steps:d,nextTask:null,unlockMessage:`✅ ${i} complete!`}},Tr=["Level1_ProjectSetup","Level19_ScheduledTasks","Level20_WebSocketRealtime","Level21_ErrorHandlingLogging","Level22_PerformanceCaching","Level23_SecurityHardening","Level24_DataMigrationSeeding","Level25_UnitTesting","Level26_IntegrationTesting","Level27_DeploymentDevOps","Level28_MonitoringHealthChecks","Level29_APIDocumentation","Level30_FinalDocumentation"],Ve={CustomerController:"src/main/java/ir/arnitex/backend/controller/CustomerController.java",OrderController:"src/main/java/ir/arnitex/backend/controller/OrderController.java",WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",TradeController:"src/main/java/ir/arnitex/backend/controller/TradeController.java",MarketController:"src/main/java/ir/arnitex/backend/controller/MarketController.java",CoinController:"src/main/java/ir/arnitex/backend/controller/CoinController.java",AdminController:"src/main/java/ir/arnitex/backend/controller/AdminController.java",GiftCodeController:"src/main/java/ir/arnitex/backend/controller/GiftCodeController.java",ReferralCodeController:"src/main/java/ir/arnitex/backend/controller/ReferralCodeController.java",TicketController:"src/main/java/ir/arnitex/backend/controller/TicketController.java",BlogController:"src/main/java/ir/arnitex/backend/controller/BlogController.java",ExchangeActionController:"src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java",RolesController:"src/main/java/ir/arnitex/backend/controller/RolesController.java",OrderService:"src/main/java/ir/arnitex/backend/service/OrderService.java",WalletService:"src/main/java/ir/arnitex/backend/service/WalletService.java",ApieService:"src/main/java/ir/arnitex/backend/service/ApieService.java",TradeService:"src/main/java/ir/arnitex/backend/service/TradeService.java",CustomerService:"src/main/java/ir/arnitex/backend/service/CustomerService.java",MarketService:"src/main/java/ir/arnitex/backend/service/MarketService.java",CoinService:"src/main/java/ir/arnitex/backend/service/CoinService.java",AdminService:"src/main/java/ir/arnitex/backend/service/AdminService.java",GiftCodeService:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",ReferralCodeService:"src/main/java/ir/arnitex/backend/service/ReferralCodeService.java",TicketService:"src/main/java/ir/arnitex/backend/service/TicketService.java",BlogService:"src/main/java/ir/arnitex/backend/service/BlogService.java",RoleService:"src/main/java/ir/arnitex/backend/service/RoleService.java",Level2_DatabaseAuth:"src/main/java/ir/arnitex/backend/domain/",Level3_CustomerIdentity:"src/main/java/ir/arnitex/backend/service/CustomerService.java",Level4_Notifications:"src/main/java/ir/arnitex/backend/service/",Level5_WalletServices:"src/main/java/ir/arnitex/backend/service/WalletService.java",Level6_Blockchain:"src/main/java/ir/arnitex/backend/service/ApieService.java",Level7_TradingEngine:"src/main/java/ir/arnitex/backend/service/OrderService.java",Level8_MarketManagement:"src/main/java/ir/arnitex/backend/service/MarketService.java",Level9_TradingControllers:"src/main/java/ir/arnitex/backend/controller/OrderController.java",Level10_WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",Level11_PaymentGateways:"src/main/java/ir/arnitex/backend/service/paymentgateway/",Level12_KYCIdentity:"src/main/java/ir/arnitex/backend/service/FinoTechService.java",Level13_AdminRBAC:"src/main/java/ir/arnitex/backend/service/AdminService.java",Level14_OTCExchange:"src/main/java/ir/arnitex/backend/service/ExchangeActionService.java",Level15_SupportContent:"src/main/java/ir/arnitex/backend/service/TicketService.java",Level16_Promotional:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",Level17_AdditionalServices:"src/main/java/ir/arnitex/backend/service/ExchangeSettingService.java",Level18_TestingDocumentation:null},xr=t=>Tr.includes(t)?!1:Ve[t]!==void 0&&Ve[t]!==null,Ar=t=>Ve[t]||null,pt=(t,r)=>{const i="I'm building a NestJS cryptocurrency exchange platform called BitniTex. ",a=`This is part of: ${r}. `,c=`I need help with: ${t.title}. `,o=t.instructions.length>0?`Here's what I need to do: ${t.instructions.join(". ")}. `:"",d=t.code?`I have this code/command: ${t.code}. `:"",n=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"";return`${i}${a}${c}${o}${d}${n}Please provide clear instructions, code examples if needed, and explain any important concepts.`},bt=(t,r,i)=>{if(!xr(i))return`I'm building a NestJS cryptocurrency exchange platform called BitniTex. This step involves: ${t.title}. ${t.instructions.join(". ")}. ${t.expectedResult?`The expected result should be: ${t.expectedResult}.`:""} Please help me implement this step with best practices for NestJS. Note: This is a new feature or infrastructure setup, so there is no existing Java code to reference.`;const a=Ar(i);if(!a)return pt(t,r);const c="I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. ",o=a.endsWith("/"),d=o?`The Java source files for this component are located in: ${a} `:`The Java source file for this component is located at: ${a} `,n=`This is part of: ${r}. `,u=`I need to translate and implement: ${t.title}. `,y=t.instructions.length>0?`The step involves: ${t.instructions.join(". ")}. `:"",P=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"",N=o?`Please read all Java source files in the directory ${a}, understand their implementations, and translate them to NestJS TypeScript.`:`Please read the Java source file at ${a}, understand its implementation, and translate it to NestJS TypeScript.`;return`${c}${d}${n}${u}${y}${P}${N} Maintain the same functionality, endpoints, business logic, and data structures. Adapt Spring Boot annotations to NestJS decorators, Spring Data JPA to TypeORM, and Java types to TypeScript types.`},Ir=({task:t,onCompleteStep:r,onNextTask:i})=>{const[a,c]=k.useState(0),[o,d]=k.useState(new Set),[n,u]=k.useState("classic");if(k.useEffect(()=>{t&&(c(0),d(new Set))},[t==null?void 0:t.id]),!t||!t.id)return e.jsx("div",{className:"step-guide-container",children:"No task selected"});let y=wr(t.id);if(y||(y=kr(t)),!y||!y.steps||y.steps.length===0)return e.jsx("div",{className:"step-guide-container",children:"No guide available for this task"});const P=y.steps,N=P[a],G=()=>{const q=new Set(o);q.add(a),d(q),a<P.length-1?c(a+1):r==null||r()};He.useEffect(()=>{t&&y&&(c(0),d(new Set))},[t==null?void 0:t.id]);const me=()=>{a<P.length-1&&c(a+1)},Z=(a+1)/P.length*100;return e.jsxs("div",{className:"step-guide-container",children:[e.jsxs("div",{className:"step-guide-header",children:[e.jsxs("div",{className:"step-guide-title-section",children:[e.jsx("h2",{className:"step-guide-title",children:y.title}),e.jsx("p",{className:"step-guide-description",children:y.description})]}),e.jsxs("div",{className:"step-guide-controls",children:[e.jsxs("div",{className:"step-guide-progress",children:[e.jsx("div",{className:"step-progress-bar",children:e.jsx("div",{className:"step-progress-fill",style:{width:`${Z}%`}})}),e.jsxs("span",{className:"step-progress-text",children:["Step ",a+1," of ",P.length]})]}),e.jsxs("div",{className:"mode-toggle",children:[e.jsx("button",{className:`mode-toggle-btn ${n==="classic"?"active":""}`,onClick:()=>u("classic"),title:"Classic Step-by-Step Mode",children:"📋 Classic"}),e.jsx("button",{className:`mode-toggle-btn ${n==="ai"?"active":""}`,onClick:()=>u("ai"),title:"AI Mode - Get AI prompts",children:"🤖 AI Mode"}),e.jsx("button",{className:`mode-toggle-btn ${n==="java-import"?"active":""}`,onClick:()=>u("java-import"),title:"Java Import Mode - Translate from Java source",children:"☕ Java Import"})]})]})]}),e.jsxs("div",{className:"step-content",children:[e.jsx("div",{className:"step-number-badge",children:e.jsx("span",{className:"step-number",children:N.step})}),e.jsxs("div",{className:"step-main-content",children:[e.jsx("h3",{className:"step-title",children:N.title}),n==="ai"||n==="java-import"?e.jsxs("div",{className:"ai-mode-content",children:[e.jsxs("div",{className:"ai-prompt-section",children:[e.jsx("h4",{children:n==="java-import"?"☕ Java Import Prompt:":"🤖 AI Prompt:"}),e.jsxs("div",{className:`ai-prompt-box ${n==="java-import"?"java-import-box":""}`,children:[e.jsx("p",{className:"ai-prompt-text",children:n==="java-import"?N.javaImportPrompt||bt(N,y.title,t.id):N.aiPrompt||pt(N,y.title)}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{const q=n==="java-import"?N.javaImportPrompt||bt(N,y.title,t.id):N.aiPrompt||pt(N,y.title);navigator.clipboard.writeText(q),alert("Prompt copied to clipboard! Paste it into your AI assistant.")},children:"📋 Copy Prompt"})]}),e.jsx("div",{className:"ai-hint",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Tip:"})," ",n==="java-import"?"Copy this prompt and paste it into your AI assistant. The AI will read the Java source file from the project and translate it to NestJS TypeScript.":"Copy this prompt and paste it into your AI assistant (like ChatGPT, Claude, or Cursor AI) to get help with this step!"]})})]}),N.expectedResult&&e.jsxs("div",{className:"ai-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:N.expectedResult})]}),n==="java-import"&&e.jsxs("div",{className:"java-file-reference",children:[e.jsx("h4",{children:"📁 Java Source File:"}),Ve[t.id]?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"java-file-path",children:[e.jsx("code",{children:Ve[t.id]}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(Ve[t.id]),alert("File path copied to clipboard!")},children:"📋 Copy Path"})]}),e.jsx("p",{className:"java-file-hint",children:"The AI will read this file from the project codebase and translate it to NestJS."})]}):e.jsx("p",{className:"java-file-hint",style:{color:"var(--text-muted)",fontStyle:"italic"},children:"No specific Java file mapping for this task. The prompt will reference the general project structure."})]}),N.code&&e.jsxs("div",{className:"ai-code-reference",children:[e.jsx("h4",{children:"💡 Reference Code (if needed):"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:N.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(N.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-instructions",children:[e.jsx("h4",{children:"📋 Instructions:"}),e.jsx("ol",{className:"instructions-list",children:N.instructions.map((q,ye)=>e.jsx("li",{children:q},ye))})]}),N.code&&e.jsxs("div",{className:"step-code",children:[e.jsx("h4",{children:"💻 Code:"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:N.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(N.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]}),N.expectedResult&&e.jsxs("div",{className:"step-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:N.expectedResult})]})]})]})]}),e.jsxs("div",{className:"step-navigation",children:[a>0&&e.jsx("button",{className:"step-btn step-btn-secondary",onClick:()=>c(a-1),children:"← Previous Step"}),e.jsxs("div",{className:"step-actions",children:[e.jsx("button",{className:"step-btn step-btn-skip",onClick:me,disabled:a===P.length-1,children:"Skip Step"}),e.jsx("button",{className:"step-btn step-btn-primary",onClick:G,children:a===P.length-1?"🎉 Complete Task":"✓ Complete Step →"})]})]}),a===P.length-1&&o.has(a)&&y.nextTask&&e.jsxs("div",{className:"step-unlock-message",children:[e.jsx("div",{className:"unlock-icon",children:"🎉"}),e.jsx("p",{className:"unlock-text",children:y.unlockMessage}),i&&e.jsx("button",{className:"step-btn step-btn-unlock",onClick:()=>i(y.nextTask),children:"Start Next Task →"})]}),e.jsxs("div",{className:"step-overview",children:[e.jsx("h4",{children:"Step Overview:"}),e.jsx("div",{className:"steps-list",children:P.map((q,ye)=>e.jsxs("div",{className:`step-item ${ye===a?"active":""} ${o.has(ye)?"completed":""}`,onClick:()=>c(ye),children:[e.jsx("span",{className:"step-item-number",children:q.step}),e.jsx("span",{className:"step-item-title",children:q.title}),o.has(ye)&&e.jsx("span",{className:"step-check",children:"✓"})]},ye))})]})]})},Pr=({subtask:t,idx:r,taskId:i,isCompleted:a,toggleSubtask:c})=>{const[o,d]=k.useState(!1),[n,u]=k.useState("ai"),y=t.id||`subtask-${r}-${t.title}`,P=t.aiPrompt||null,N=t.javaImportPrompt||null;return e.jsxs("div",{className:"subtask-item",children:[e.jsxs("div",{className:"subtask-main",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:G=>{G.stopPropagation(),console.log("🔄 Toggling subtask:",y,"Current state:",a),c(i,y)},onClick:G=>G.stopPropagation(),className:"subtask-checkbox"}),e.jsx("span",{className:a?"completed":"",children:t.title||t.name||`Subtask ${r+1}`}),P&&e.jsx("button",{className:"subtask-ai-btn",onClick:G=>{G.stopPropagation(),d(!o),u("ai")},title:"Show AI Prompt",children:"🤖 AI"}),N&&e.jsx("button",{className:"subtask-ai-btn",style:{marginLeft:"8px",background:"linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"},onClick:G=>{G.stopPropagation(),d(!o),u("java")},title:"Show Java Import Prompt",children:"☕ Java"})]}),o&&e.jsxs("div",{className:"subtask-ai-prompt",children:[e.jsxs("div",{className:"ai-prompt-header",children:[e.jsx("span",{children:n==="java"?"☕ Java Import Prompt":"🤖 AI Assistant Prompt"}),N&&P&&e.jsx("button",{className:"ai-prompt-switch",onClick:G=>{G.stopPropagation(),u(n==="ai"?"java":"ai")},style:{marginRight:"8px",padding:"4px 8px",fontSize:"11px",background:"var(--bg-secondary)",border:"1px solid var(--border-primary)",borderRadius:"4px",cursor:"pointer"},children:n==="ai"?"☕ Switch to Java":"🤖 Switch to AI"}),e.jsx("button",{className:"ai-prompt-close",onClick:G=>{G.stopPropagation(),d(!1)},children:"✕"})]}),e.jsx("div",{className:"ai-prompt-content",children:n==="java"&&N?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:N}),e.jsx("button",{className:"ai-prompt-copy",onClick:G=>{G.stopPropagation(),navigator.clipboard.writeText(N),alert("Java import prompt copied to clipboard!")},children:"📋 Copy Java Prompt"})]}):P?e.jsxs(e.Fragment,{children:[e.jsx("p",{children:P}),e.jsx("button",{className:"ai-prompt-copy",onClick:G=>{G.stopPropagation(),navigator.clipboard.writeText(P),alert("AI prompt copied to clipboard!")},children:"📋 Copy Prompt"})]}):e.jsx("p",{style:{color:"var(--text-muted)",fontStyle:"italic"},children:"AI prompt will be generated automatically. This feature helps you get professional implementation guidance for this subtask."})})]})]})},Er=()=>{var W,j,fe;const{tasks:t,showTodoPanel:r,setShowTodoPanel:i,selectedTask:a,setSelectedTask:c,filterStatus:o,filterCategory:d,setFilterStatus:n,setFilterCategory:u,updateTaskStatus:y,updateTaskPriority:P,addSubtask:N,toggleSubtask:G,addNote:me,updateActualHours:Z,getProgress:q,getCategoryProgress:ye,getOrCreateTask:z}=tt(),[be,xe]=k.useState(""),[Pe,ke]=k.useState(""),[Me,Ae]=k.useState(null),[Le,je]=k.useState(!0),[Ne,ge]=k.useState(!1),[Ie,Te]=k.useState(null);He.useEffect(()=>{let s=!1;return(async()=>{if(!a){Te(null),ge(!1);return}if(console.log("🔄 useEffect: Loading task:",a,"Current task:",Ie==null?void 0:Ie.id),t[a]){console.log("✅ Task found in store:",a),s||(Te(t[a]),ge(!1));return}ge(!0);try{console.log("📦 Creating task:",a);const $=await z(a);if(!$){console.error("❌ Task is null:",a),s||ge(!1);return}console.log("✅ Task created:",$.id,$.title),s||(Te($),ge(!1),setTimeout(()=>{!s&&t[a]&&(console.log("🔄 Syncing from store:",a),Te(t[a]))},200))}catch($){if(console.error("❌ Error loading task:",$),!s){const ne={id:a,nodeId:a,title:`${a} Development`,description:`Task for ${a}`,status:se.NOT_STARTED,priority:l.MEDIUM,category:"Other",estimatedHours:4,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};Te(ne),ge(!1)}}})(),()=>{s=!0}},[a]),He.useEffect(()=>{if(a&&t[a]){const s=t[a];(!Ie||Ie.id!==s.id||Ie.status!==s.status)&&(console.log("🔄 Syncing task from store:",a,"Status:",s.status),Te(s))}},[t,a,Ie]),He.useEffect(()=>{a&&t[a]&&Te(t[a])},[a,t]);const pe=a?t[a]:null;if(!r)return null;const De=q(),_e=Object.values(t).filter(s=>!(!s||!s.id||!s.id.startsWith("Level")||o&&s.status!==o||d&&s.category!==d)).sort((s,A)=>{const $=we=>{const he=we.match(/^Level(\d+)_/);return he?parseInt(he[1],10):999},ne=$(s.id),ce=$(A.id);return ne-ce}),rt=[...new Set(Object.values(t).filter(s=>s&&s.id&&s.id.startsWith("Level")&&s.category).map(s=>s.category))],Be=s=>{switch(s){case se.COMPLETED:return"#10b981";case se.IN_PROGRESS:return"#3b82f6";case se.BLOCKED:return"#ef4444";default:return"#6b7280"}},m=s=>{switch(s){case l.CRITICAL:return"#ef4444";case l.HIGH:return"#f59e0b";case l.MEDIUM:return"#3b82f6";default:return"#6b7280"}},_=s=>{be.trim()&&(N(s,{id:`${s}-subtask-${Date.now()}`,title:be.trim()}),xe(""))},b=s=>{Pe.trim()&&(me(s,Pe.trim()),ke(""))},v=pe?{...pe,notes:Array.isArray(pe.notes)?pe.notes:pe.notes&&typeof pe.notes=="string"&&pe.notes.trim()?pe.notes.split(`
`).filter(s=>s.trim()).map((s,A)=>({id:`note-${A}`,content:s.trim(),createdAt:new Date().toISOString()})):[],subtasks:(()=>{if(Array.isArray(pe.subtasks))return pe.subtasks.map((s,A)=>typeof s=="string"?{id:`subtask-${A}`,title:s,completed:!1,aiPrompt:null}:typeof s=="object"&&s!==null?{id:s.id||`subtask-${A}`,title:s.title||s.name||String(s),completed:s.completed===!0||s.completed==="true"||s.completed===1||!1,aiPrompt:s.aiPrompt||null}:{id:`subtask-${A}`,title:String(s),completed:!1,aiPrompt:null});if(pe.subtasks&&typeof pe.subtasks=="string")try{const s=JSON.parse(pe.subtasks);if(Array.isArray(s))return s.map((A,$)=>typeof A=="string"?{id:`subtask-${$}`,title:A,completed:!1,aiPrompt:null}:typeof A=="object"&&A!==null?{id:A.id||`subtask-${$}`,title:A.title||A.name||String(A),completed:A.completed===!0||A.completed==="true"||A.completed===1||!1,aiPrompt:A.aiPrompt||null}:{id:`subtask-${$}`,title:String(A),completed:!1,aiPrompt:null})}catch(s){console.warn("Failed to parse subtasks JSON:",s)}return[]})()}:null,x=br(t),Y=Object.values(t).some(s=>s.status===se.COMPLETED),ee=v!==null;return e.jsx("div",{className:"todo-panel-overlay",children:e.jsxs("div",{className:"todo-panel",children:[e.jsxs("div",{className:"todo-panel-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"🚀 BitniTex Project Tracker"}),e.jsx("p",{className:"todo-subtitle",children:"Track your project progress step by step"})]}),e.jsx("button",{className:"todo-close-btn",onClick:()=>i(!1),children:"✕"})]}),e.jsxs("div",{className:"todo-progress-section",children:[!a&&x&&e.jsxs("div",{className:"start-here-banner",children:[e.jsxs("div",{className:"start-here-content",children:[e.jsx("div",{className:"start-here-icon",children:"🎮"}),e.jsxs("div",{children:[e.jsx("h3",{children:Y?"Ready to Continue?":"Ready to Start?"}),e.jsxs("p",{children:[Y?"Continue with":"Begin with",": ",e.jsx("strong",{children:((W=x.guide)==null?void 0:W.title)||x.title||"Next Task"})]})]})]}),e.jsx("button",{className:"start-here-btn",onClick:async()=>{var A;const s=(x==null?void 0:x.id)||"ProjectSetup";console.log('🚀 Starting from "Start Here" button:',s,"Task status:",(A=t[s])==null?void 0:A.status),t[s]||await z(s),c(s),je(!0)},children:Y?"▶️ Continue":"🚀 Start Here"})]}),e.jsxs("div",{className:"progress-bar-container",children:[e.jsx("div",{className:"progress-bar-fill",style:{width:`${De.percentage}%`}}),e.jsxs("span",{className:"progress-bar-text",children:[De.percentage,"% Complete"]})]}),e.jsxs("div",{className:"progress-stats",children:[e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.completed}),e.jsx("span",{className:"stat-label",children:"Completed"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.inProgress}),e.jsx("span",{className:"stat-label",children:"In Progress"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:De.notStarted}),e.jsx("span",{className:"stat-label",children:"Not Started"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[De.totalEstimated,"h"]}),e.jsx("span",{className:"stat-label",children:"Estimated"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[De.totalActual,"h"]}),e.jsx("span",{className:"stat-label",children:"Actual"})]})]})]}),e.jsxs("div",{className:"todo-content",children:[e.jsxs("div",{className:"todo-sidebar",children:[e.jsxs("div",{className:"todo-filters",children:[e.jsxs("select",{value:d||"",onChange:s=>u(s.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Categories"}),rt.map(s=>{const A=ye(s);return e.jsxs("option",{value:s,children:[s," (",A.percentage,"%)"]},s)})]}),e.jsxs("select",{value:o||"",onChange:s=>n(s.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:se.NOT_STARTED,children:"Not Started"}),e.jsx("option",{value:se.IN_PROGRESS,children:"In Progress"}),e.jsx("option",{value:se.COMPLETED,children:"Completed"}),e.jsx("option",{value:se.BLOCKED,children:"Blocked"})]})]}),e.jsx("div",{className:"todo-task-list",children:_e.filter(s=>s&&s.id).map(s=>{var ce,we;const A=((ce=s.subtasks)==null?void 0:ce.filter(he=>he.completed).length)||0,$=((we=s.subtasks)==null?void 0:we.length)||0,ne=s.isMissing===!0||s.isMissing==="true"||s.isMissing===1;return e.jsx("div",{className:`todo-task-item ${a===s.id?"active":""} ${ne?"missing-task":""}`,onClick:()=>c(s.id),style:ne?{borderLeft:"4px solid #a855f7",backgroundColor:"rgba(168, 85, 247, 0.05)"}:{},children:e.jsxs("div",{className:"task-item-header",children:[e.jsx("div",{className:"task-status-indicator",style:{backgroundColor:ne?"#a855f7":Be(s.status),border:ne?"2px dashed #a855f7":"none"}}),e.jsxs("div",{className:"task-item-content",children:[e.jsxs("h4",{children:[s.title,ne&&e.jsx("span",{className:"missing-badge",title:"Advanced Component - Not in original Java codebase",children:"🚀 ADVANCED"})]}),e.jsxs("div",{className:"task-item-meta",children:[e.jsx("span",{className:"task-category",children:s.category}),e.jsx("span",{className:"task-priority",style:{color:m(s.priority)},children:s.priority})]}),$>0&&e.jsxs("div",{className:"task-subtasks-progress",children:[A,"/",$," subtasks"]})]})]})},s.id)})})]}),e.jsx("div",{className:"todo-main",children:Ne&&!pe?e.jsxs("div",{className:"task-loading",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading task..."})]}):pe?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-detail-header",children:[e.jsxs("div",{children:[e.jsx("h3",{children:pe.title}),e.jsx("p",{className:"task-description",children:pe.description})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[ee&&e.jsx("button",{className:`guide-toggle-btn ${Le?"active":""}`,onClick:()=>je(!Le),title:Le?"Hide Step-by-Step Guide":"Show Step-by-Step Guide",children:Le?"📖 Guide":"📋 Details"}),e.jsx("div",{className:"task-priority-badge",style:{backgroundColor:m(pe.priority),color:"#fff"},children:pe.priority})]})]}),Le&&ee&&pe&&pe.id&&e.jsx(Ir,{task:pe,onCompleteStep:()=>{pe&&y(pe.id,se.COMPLETED)},onNextTask:async s=>{try{const A=t[a]||pe;console.log("🔄 Starting next task:",s),console.log("📊 Current task before transition:",A==null?void 0:A.id,"Status:",A==null?void 0:A.status),console.log("📊 Selected task ID:",a),window.location.hash&&window.history.replaceState(null,"",window.location.pathname+window.location.search),A&&A.status!==se.COMPLETED&&(console.log("⚠️ Marking current task as completed:",A.id),y(A.id,se.COMPLETED),await new Promise(ne=>setTimeout(ne,300))),console.log("📦 Creating/getting NEXT task:",s);const $=await z(s);console.log("✅ Next task created/loaded:",$.id,$.status),await new Promise(ne=>setTimeout(ne,200)),console.log("🎯 Setting NEW task:",s),Te($),c(s),je(!0),await new Promise(ne=>setTimeout(ne,100)),setTimeout(async()=>{if(t[s])Te(t[s]);else{console.log("⚠️ Task not in store, reloading...");const ce=await z(s);Te(ce)}const ne=document.querySelector(".todo-panel");ne&&(ne.scrollTop=0)},300)}catch(A){console.error("❌ Error:",A);const $={id:s,nodeId:s,title:`${s} Development`,description:`Task for ${s}`,status:se.NOT_STARTED,priority:l.MEDIUM,category:"Infrastructure",estimatedHours:8,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};Te($),c(s),je(!0),console.log("⚠️ Using fallback task:",$)}}}),(!Le||!ee)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Status"}),e.jsx("div",{className:"status-buttons",children:Object.values(se).map((s,A)=>e.jsx("button",{className:`status-btn ${(v==null?void 0:v.status)===s?"active":""}`,style:{backgroundColor:(v==null?void 0:v.status)===s?Be(s):"transparent",borderColor:Be(s),color:(v==null?void 0:v.status)===s?"#fff":Be(s)},onClick:()=>y(pe.id,s),children:s.replace("_"," ")},s))})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Time Tracking"}),e.jsxs("div",{className:"time-tracking",children:[e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Estimated:"}),e.jsxs("strong",{children:[(v==null?void 0:v.estimatedHours)||0,"h"]})]}),e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Actual:"}),Me===pe.id?e.jsx("input",{type:"number",value:(v==null?void 0:v.actualHours)||0,onChange:s=>Z(pe.id,parseFloat(s.target.value)||0),onBlur:()=>Ae(null),autoFocus:!0,className:"hours-input"}):e.jsxs("strong",{onClick:()=>Ae(pe.id),style:{cursor:"pointer"},children:[(v==null?void 0:v.actualHours)||0,"h ✏️"]})]})]})]}),(v==null?void 0:v.dependencies)&&Array.isArray(v.dependencies)&&v.dependencies.length>0&&e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Dependencies"}),e.jsx("div",{className:"dependencies",children:v.dependencies.map(s=>e.jsx("span",{className:"dependency-tag",children:s},s))})]}),e.jsxs("div",{className:"task-section",children:[e.jsxs("label",{className:"section-label",children:["Subtasks (",((j=v==null?void 0:v.subtasks)==null?void 0:j.filter(s=>s.completed).length)||0,"/",((fe=v==null?void 0:v.subtasks)==null?void 0:fe.length)||0,")"]}),e.jsx("div",{className:"subtasks-list",children:(()=>{var s;return v&&console.log("🔍 Subtasks Debug:",{hasNormalizedTask:!!v,subtasksRaw:pe==null?void 0:pe.subtasks,subtasksNormalized:v.subtasks,subtasksLength:(s=v.subtasks)==null?void 0:s.length,subtasksType:typeof v.subtasks,isArray:Array.isArray(v.subtasks)}),v!=null&&v.subtasks&&Array.isArray(v.subtasks)&&v.subtasks.length>0?v.subtasks.map((A,$)=>{const ne=A.id||`subtask-${$}-${A.title}`,ce=A.completed===!0||A.completed==="true"||A.completed===1;return e.jsx(Pr,{subtask:A,idx:$,taskId:pe.id,isCompleted:ce,toggleSubtask:G},ne)}):e.jsx("div",{className:"no-subtasks",children:"No subtasks yet"})})()}),e.jsxs("div",{className:"add-subtask",children:[e.jsx("input",{type:"text",value:be,onChange:s=>xe(s.target.value),onKeyPress:s=>s.key==="Enter"&&_(pe.id),placeholder:"Add new subtask...",className:"subtask-input"}),e.jsx("button",{onClick:()=>_(pe.id),className:"add-btn",children:"+"})]})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Notes"}),e.jsx("div",{className:"notes-list",children:v!=null&&v.notes&&Array.isArray(v.notes)&&v.notes.length>0?v.notes.map((s,A)=>{const $=typeof s=="object"?s.id||`note-${A}`:`note-${A}`,ne=typeof s=="object"?s.content:s,ce=typeof s=="object"&&s.createdAt?s.createdAt:new Date().toISOString();return e.jsxs("div",{className:"note-item",children:[e.jsx("p",{children:ne}),e.jsx("span",{className:"note-date",children:new Date(ce).toLocaleString()})]},$)}):e.jsx("div",{className:"no-notes",children:"No notes yet"})}),e.jsxs("div",{className:"add-note",children:[e.jsx("textarea",{value:Pe,onChange:s=>ke(s.target.value),placeholder:"Add a note...",className:"note-textarea"}),e.jsx("button",{onClick:()=>b(pe.id),className:"add-btn",children:"Add Note"})]})]})]})]}):e.jsxs("div",{className:"no-task-selected",children:[e.jsx("div",{className:"empty-state-icon",children:"📋"}),e.jsx("p",{children:"Select a task to view details"})]})})]})]})})},Rr=()=>{const{selectedNode:t,setSelectedNode:r,setShowApiTester:i}=qe(),[a,c]=k.useState(null),[o,d]=k.useState("{}"),[n,u]=k.useState(null),[y,P]=k.useState(!1),[N,G]=k.useState("http://localhost:8080"),[me,Z]=k.useState(`{
  "Content-Type": "application/json"
}`),q=t?Qe(t):null;k.useEffect(()=>{q&&q.endpoints&&q.endpoints.length>0&&!a&&(c(q.endpoints[0]),d("{}"),u(null))},[q,a]),k.useEffect(()=>{a&&(d("{}"),u(null))},[a==null?void 0:a.path]);const ye=async z=>{c(z),P(!0),u(null);try{let be={};try{be=JSON.parse(me)}catch(ge){u({error:!0,message:`Invalid JSON in headers: ${ge.message}`,time:0}),P(!1);return}let xe=null;if(["POST","PUT","PATCH"].includes(z.method))try{xe=JSON.parse(o)}catch(ge){u({error:!0,message:`Invalid JSON in request body: ${ge.message}`,time:0}),P(!1);return}const Pe=`${N.replace(/\/$/,"")}${z.path}`,ke={method:z.method,headers:{"Content-Type":"application/json",...be},mode:"cors"};xe!==null&&(ke.body=JSON.stringify(xe));const Me=Date.now();let Ae;try{Ae=await fetch(Pe,ke)}catch(ge){throw new Error(`Network error: ${ge.message}. Make sure the server is running and CORS is enabled.`)}const Le=Date.now(),je=Ae.headers.get("content-type")||"";let Ne;if(je.includes("application/json"))try{Ne=await Ae.json()}catch{Ne=await Ae.text()}else Ne=await Ae.text();u({status:Ae.status,statusText:Ae.statusText,headers:Object.fromEntries(Ae.headers.entries()),data:Ne,time:Le-Me,url:Pe})}catch(be){u({error:!0,message:be.message||"Unknown error occurred",time:0})}finally{P(!1)}};return k.useEffect(()=>{t&&(console.log("API Tester - Selected Node:",t),console.log("API Tester - Node Details:",q),q&&console.log("API Tester - Endpoints:",q.endpoints))},[t,q]),t?q?!q.endpoints||q.endpoints.length===0?e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"📭"}),e.jsx("div",{className:"empty-text",children:"No endpoints available"}),e.jsxs("div",{className:"empty-hint",children:["Component: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have any API endpoints defined. Endpoints are typically defined for Controllers."]})]}):e.jsxs("div",{className:"api-tester",children:[e.jsxs("div",{className:"api-tester-header",children:[e.jsxs("div",{className:"api-tester-title",children:[e.jsx("span",{className:"api-tester-icon",children:"🧪"}),e.jsx("span",{children:"API Endpoint Tester"})]}),e.jsx("button",{className:"api-tester-close",onClick:()=>i(!1),title:"Close",children:"✕"})]}),e.jsxs("div",{className:"api-tester-content",children:[e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Base URL"}),e.jsx("input",{type:"text",className:"api-tester-input",value:N,onChange:z=>G(z.target.value),placeholder:"http://localhost:8080"})]}),e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Endpoints"}),e.jsx("div",{className:"endpoints-list",children:q.endpoints.map((z,be)=>e.jsxs("div",{className:`endpoint-item ${a===z?"active":""}`,onClick:()=>ye(z),children:[e.jsx("span",{className:`method-badge method-${z.method.toLowerCase()}`,children:z.method}),e.jsx("span",{className:"endpoint-path",children:z.path}),z.description&&e.jsx("span",{className:"endpoint-desc",children:z.description})]},be))})]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"api-tester-section",children:e.jsxs("label",{className:"api-tester-label",children:["Request URL",e.jsxs("span",{className:"request-url",children:[N.replace(/\/$/,""),a.path]})]})}),e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Headers",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:me,onChange:z=>Z(z.target.value),rows:4,placeholder:'{\\n  "Authorization": "Bearer your-token-here",\\n  "X-Custom-Header": "value"\\n}'})]}),["POST","PUT","PATCH"].includes(a.method)&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Request Body",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:o,onChange:z=>d(z.target.value),rows:10,placeholder:'{\\n  "key": "value",\\n  "number": 123\\n}'})]}),e.jsx("button",{className:"api-tester-send-btn",onClick:()=>ye(a),disabled:y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Sending Request..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🚀"}),"Send Request"]})})]}),n&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("div",{className:"response-header",children:[e.jsxs("label",{className:"api-tester-label",children:["Response",n.time>0&&e.jsxs("span",{className:"response-time",children:["(",n.time,"ms)"]})]}),n.url&&e.jsxs("div",{className:"response-url",children:[e.jsx("span",{className:"url-label",children:"URL:"}),e.jsx("code",{className:"url-value",children:n.url}),e.jsx("button",{className:"copy-btn",onClick:()=>{navigator.clipboard.writeText(n.url)},title:"Copy URL",children:"📋"})]})]}),e.jsx("div",{className:`response-container ${n.error?"error":`status-${Math.floor(n.status/100)}xx`}`,children:n.error?e.jsxs("div",{className:"response-error",children:[e.jsx("div",{className:"error-title",children:"❌ Error"}),e.jsx("div",{className:"error-message",children:n.message}),e.jsxs("div",{className:"error-hint",children:[e.jsx("strong",{children:"Tips:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check if the server is running"}),e.jsx("li",{children:"Verify the base URL is correct"}),e.jsx("li",{children:"Ensure CORS is enabled on the server"}),e.jsx("li",{children:"Check browser console for more details"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"response-status",children:e.jsxs("span",{className:`status-badge status-${Math.floor(n.status/100)}xx`,children:[n.status," ",n.statusText]})}),e.jsxs("div",{className:"response-headers",children:[e.jsxs("div",{className:"response-headers-title",children:["Response Headers",e.jsx("button",{className:"copy-btn-small",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(n.headers,null,2))},title:"Copy headers",children:"📋"})]}),e.jsx("pre",{className:"response-headers-content",children:JSON.stringify(n.headers,null,2)})]}),e.jsxs("div",{className:"response-body",children:[e.jsxs("div",{className:"response-body-title",children:["Response Body",e.jsx("button",{className:"copy-btn-small",onClick:()=>{const z=typeof n.data=="string"?n.data:JSON.stringify(n.data,null,2);navigator.clipboard.writeText(z)},title:"Copy body",children:"📋"})]}),e.jsx("pre",{className:"response-body-content",children:typeof n.data=="string"?n.data:JSON.stringify(n.data,null,2)})]})]})})]})]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"❓"}),e.jsx("div",{className:"empty-text",children:"Component not found"}),e.jsxs("div",{className:"empty-hint",children:["Selected: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have endpoint definitions yet. Try clicking on a Controller or Service component."]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"🔌"}),e.jsx("div",{className:"empty-text",children:"No component selected"}),e.jsx("div",{className:"empty-hint",children:'Click on a component in the diagram (like "AdminController" or "CustomerController") to test its endpoints'})]})},Lr=()=>{const{sidebarCollapsed:t,selectedNode:r,isFullscreen:i,showApiTester:a}=qe();return e.jsxs("div",{className:`app-container ${i?"fullscreen-mode":""}`,children:[!i&&e.jsx(pr,{}),e.jsxs("main",{className:"main-content",children:[!i&&e.jsx(ur,{}),e.jsx(fr,{}),e.jsx(Sr,{}),r&&!i&&e.jsx(Cr,{})]}),e.jsx(Er,{}),a&&e.jsx(Rr,{})]})};class Nr extends He.Component{constructor(r){super(r),this.state={hasError:!1,error:null}}static getDerivedStateFromError(r){return{hasError:!0,error:r}}componentDidCatch(r,i){console.error("React Error:",r,i)}render(){var r;return this.state.hasError?e.jsxs("div",{style:{padding:"20px",color:"white",background:"#0a0e1a"},children:[e.jsx("h1",{children:"Something went wrong"}),e.jsx("pre",{style:{color:"#ef4444"},children:(r=this.state.error)==null?void 0:r.toString()}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]}):this.props.children}}function Or(){return e.jsx(Nr,{children:e.jsx(Kt,{children:e.jsx(At,{children:e.jsx(Lr,{})})})})}ct.createRoot(document.getElementById("root")).render(e.jsx(He.StrictMode,{children:e.jsx(Or,{})}));
