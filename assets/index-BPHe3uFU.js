const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/diagramBackend-Bp3qNCYq.js","assets/mermaid-CKqTDO4C.js","assets/react-vendor-KfUPlHYY.js"])))=>i.map(i=>d[i]);
import{r as T,a as ot,R as Ee}from"./react-vendor-KfUPlHYY.js";import{_ as Ae,m as Qe}from"./mermaid-CKqTDO4C.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))a(m);new MutationObserver(m=>{for(const p of m)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&a(v)}).observe(document,{childList:!0,subtree:!0});function n(m){const p={};return m.integrity&&(p.integrity=m.integrity),m.referrerPolicy&&(p.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?p.credentials="include":m.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function a(m){if(m.ep)return;m.ep=!0;const p=n(m);fetch(m.href,p)}})();var Ze={exports:{}},$e={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lt=T,ct=Symbol.for("react.element"),dt=Symbol.for("react.fragment"),pt=Object.prototype.hasOwnProperty,ut=lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mt={key:!0,ref:!0,__self:!0,__source:!0};function et(t,o,n){var a,m={},p=null,v=null;n!==void 0&&(p=""+n),o.key!==void 0&&(p=""+o.key),o.ref!==void 0&&(v=o.ref);for(a in o)pt.call(o,a)&&!mt.hasOwnProperty(a)&&(m[a]=o[a]);if(t&&t.defaultProps)for(a in o=t.defaultProps,o)m[a]===void 0&&(m[a]=o[a]);return{$$typeof:ct,type:t,key:p,ref:v,props:m,_owner:ut.current}}$e.Fragment=dt;$e.jsx=et;$e.jsxs=et;Ze.exports=$e;var e=Ze.exports,Ve={},ze=ot;Ve.createRoot=ze.createRoot,Ve.hydrateRoot=ze.hydrateRoot;const tt=T.createContext(),_e=()=>{const t=T.useContext(tt);if(!t)throw new Error("useAppStore must be used within AppProvider");return t},gt=({children:t})=>{const[o,n]=T.useState("everything"),[a,m]=T.useState(null),[p,v]=T.useState(["Overview"]),[l,c]=T.useState(1),[f,E]=T.useState(!0),[w,re]=T.useState(!1),[ae,ee]=T.useState(!1),[H,de]=T.useState(!1),X=T.useCallback((oe,ye=null)=>{n(oe),m(ye);const ue=["Overview"];oe!=="overview"&&ue.push(oe),ye&&ue.push(ye),v(ue)},[]),pe=T.useCallback(()=>{c(oe=>Math.min(oe+.2,3))},[]),Ce=T.useCallback(()=>{c(oe=>Math.max(oe-.2,.3))},[]),Te=T.useCallback(()=>{c(1)},[]),xe=T.useCallback(()=>{E(oe=>!oe)},[]),ke=T.useCallback(()=>{re(oe=>!oe)},[]),ve=T.useCallback(()=>{ee(oe=>!oe)},[]),Se={currentView:o,selectedNode:a,breadcrumbs:p,zoomLevel:l,showMinimap:f,sidebarCollapsed:w,isFullscreen:ae,showApiTester:H,navigateToView:X,zoomIn:pe,zoomOut:Ce,resetZoom:Te,toggleMinimap:xe,toggleSidebar:ke,toggleFullscreen:ve,setSelectedNode:m,setShowApiTester:de};return e.jsx(tt.Provider,{value:Se,children:t})},F={NOT_STARTED:"not_started",IN_PROGRESS:"in_progress",COMPLETED:"completed",BLOCKED:"blocked"},i={LOW:"low",MEDIUM:"medium",HIGH:"high",CRITICAL:"critical"},ge={ProjectSetup:"Level1_ProjectSetup","Project Foundation":"Level1_ProjectSetup","NestJS Setup":"Level1_ProjectSetup","Project Setup":"Level1_ProjectSetup",Database:"Level2_DatabaseAuth",DATABASE:"Level2_DatabaseAuth","Database 81":"Level2_DatabaseAuth",Authentication:"Level2_DatabaseAuth",Auth:"Level2_DatabaseAuth",JWT:"Level2_DatabaseAuth","2FA":"Level2_DatabaseAuth",OTP:"Level2_DatabaseAuth",RBAC:"Level2_DatabaseAuth",Security:"Level2_DatabaseAuth",SECURITY:"Level2_DatabaseAuth",Customer:"Level3_CustomerIdentity",CustomerController:"Level3_CustomerIdentity",CustomerService:"Level3_CustomerIdentity",Identity:"Level3_CustomerIdentity","IDENTITY KYC":"Level3_CustomerIdentity",Services3:"Level3_CustomerIdentity",Email:"Level4_Notifications",EmailService:"Level4_Notifications",SMS:"Level4_Notifications",SMSService:"Level4_Notifications",Notification:"Level4_Notifications",NotificationService:"Level4_Notifications",NOTIFICATIONS:"Level4_Notifications",Services4:"Level4_Notifications",Wallet:"Level5_WalletServices",WalletService:"Level5_WalletServices",CustomerWallet:"Level5_WalletServices",CustomerWalletService:"Level5_WalletServices",Deposit:"Level5_WalletServices",DepositService:"Level5_WalletServices",Withdrawal:"Level5_WalletServices",WithdrawalService:"Level5_WalletServices","WALLET SERVICES":"Level5_WalletServices",Services2:"Level5_WalletServices",ApieService:"Level6_Blockchain",Apie:"Level6_Blockchain",Blockchain:"Level6_Blockchain",BLOCKCHAIN:"Level6_Blockchain",ETH:"Level6_Blockchain",TRON:"Level6_Blockchain",BTC:"Level6_Blockchain",XRP:"Level6_Blockchain",XLM:"Level6_Blockchain",BSC:"Level6_Blockchain",Order:"Level7_TradingEngine",OrderService:"Level7_TradingEngine",Trade:"Level7_TradingEngine",TradeService:"Level7_TradingEngine",OrderBook:"Level7_TradingEngine","Trading Engine":"Level7_TradingEngine",Services1:"Level7_TradingEngine",Market:"Level8_MarketManagement",MarketService:"Level8_MarketManagement",Coin:"Level8_MarketManagement",CoinService:"Level8_MarketManagement",MarketController:"Level8_MarketManagement",CoinController:"Level8_MarketManagement",OrderController:"Level9_TradingControllers",TradeController:"Level9_TradingControllers",WalletController:"Level10_WalletController",Payment:"Level11_PaymentGateways","PAYMENT GATEWAYS":"Level11_PaymentGateways",Vandar:"Level11_PaymentGateways",Jibit:"Level11_PaymentGateways",NextPay:"Level11_PaymentGateways",RayanPay:"Level11_PaymentGateways",Sadad:"Level11_PaymentGateways",Zarinpal:"Level11_PaymentGateways",PaymentGateway:"Level11_PaymentGateways",FinoTech:"Level12_KYCIdentity",FinoTechService:"Level12_KYCIdentity",JibitService:"Level12_KYCIdentity",BankAccount:"Level12_KYCIdentity",BankAccountService:"Level12_KYCIdentity",UserAccountLevel:"Level12_KYCIdentity",UserAccountLevelService:"Level12_KYCIdentity",KYC:"Level12_KYCIdentity",Admin:"Level13_AdminRBAC",AdminController:"Level13_AdminRBAC",AdminService:"Level13_AdminRBAC",Role:"Level13_AdminRBAC",RoleService:"Level13_AdminRBAC",RolesController:"Level13_AdminRBAC",Privilege:"Level13_AdminRBAC",Exchange:"Level14_OTCExchange",ExchangeAction:"Level14_OTCExchange",ExchangeActionController:"Level14_OTCExchange",ExchangeActionService:"Level14_OTCExchange",OTC:"Level14_OTCExchange",Ticket:"Level15_SupportContent",TicketController:"Level15_SupportContent",TicketService:"Level15_SupportContent",Blog:"Level15_SupportContent",BlogController:"Level15_SupportContent",BlogService:"Level15_SupportContent",File:"Level15_SupportContent",FileService:"Level15_SupportContent",Message:"Level15_SupportContent",MessageService:"Level15_SupportContent",FAQ:"Level15_SupportContent",FAQService:"Level15_SupportContent","CONTENT SUPPORT":"Level15_SupportContent",Services5:"Level15_SupportContent",GiftCode:"Level16_Promotional",GiftCodeController:"Level16_Promotional",GiftCodeService:"Level16_Promotional",ReferralCode:"Level16_Promotional",ReferralCodeController:"Level16_Promotional",ReferralCodeService:"Level16_Promotional",ExchangeSetting:"Level17_AdditionalServices",ExchangeSettingService:"Level17_AdditionalServices",CustomerToken:"Level17_AdditionalServices",CustomerTokenService:"Level17_AdditionalServices",Alarm:"Level17_AdditionalServices",AlarmService:"Level17_AdditionalServices",Country:"Level17_AdditionalServices",CountryService:"Level17_AdditionalServices",Language:"Level17_AdditionalServices",LanguageService:"Level17_AdditionalServices",ATM:"Level17_AdditionalServices",AtmService:"Level17_AdditionalServices",CreditCard:"Level17_AdditionalServices",CreditCardService:"Level17_AdditionalServices",SaminCard:"Level17_AdditionalServices",SaminCardService:"Level17_AdditionalServices",Testing:"Level18_TestingDocumentation",Documentation:"Level18_TestingDocumentation",Tests:"Level18_TestingDocumentation",Scheduled:"Level19_ScheduledTasks",ScheduledTasks:"Level19_ScheduledTasks","Background Jobs":"Level19_ScheduledTasks",Cron:"Level19_ScheduledTasks",WebSocket:"Level20_WebSocketRealtime",Websocket:"Level20_WebSocketRealtime","Real-time":"Level20_WebSocketRealtime",Realtime:"Level20_WebSocketRealtime",Socket:"Level20_WebSocketRealtime",Error:"Level21_ErrorHandlingLogging",ErrorHandling:"Level21_ErrorHandlingLogging",Logging:"Level21_ErrorHandlingLogging",Exception:"Level21_ErrorHandlingLogging",Performance:"Level22_PerformanceCaching",Caching:"Level22_PerformanceCaching",Cache:"Level22_PerformanceCaching",Redis:"Level22_PerformanceCaching","Security Hardening":"Level23_SecurityHardening","Rate Limiting":"Level23_SecurityHardening",CORS:"Level23_SecurityHardening",Helmet:"Level23_SecurityHardening",Migration:"Level24_DataMigrationSeeding",Seeding:"Level24_DataMigrationSeeding",Seed:"Level24_DataMigrationSeeding","Data Migration":"Level24_DataMigrationSeeding","Unit Test":"Level25_UnitTesting","Unit Testing":"Level25_UnitTesting","Integration Test":"Level26_IntegrationTesting","Integration Testing":"Level26_IntegrationTesting",E2E:"Level26_IntegrationTesting",Deployment:"Level27_DeploymentDevOps",DevOps:"Level27_DeploymentDevOps",Docker:"Level27_DeploymentDevOps","CI/CD":"Level27_DeploymentDevOps",Monitoring:"Level28_MonitoringHealthChecks",Health:"Level28_MonitoringHealthChecks","Health Check":"Level28_MonitoringHealthChecks",Metrics:"Level28_MonitoringHealthChecks",Swagger:"Level29_APIDocumentation","API Documentation":"Level29_APIDocumentation",OpenAPI:"Level29_APIDocumentation","Final Documentation":"Level30_FinalDocumentation",Handoff:"Level30_FinalDocumentation",Margin:"Level31_MarginTrading",MarginTrading:"Level31_MarginTrading",MarginAccount:"Level31_MarginTrading",Leverage:"Level31_MarginTrading",Liquidation:"Level31_MarginTrading",Futures:"Level32_FuturesPerpetual",Perpetual:"Level32_FuturesPerpetual",PerpetualContract:"Level32_FuturesPerpetual",FundingRate:"Level32_FuturesPerpetual",MarkPrice:"Level32_FuturesPerpetual",Options:"Level33_OptionsTrading",OptionsTrading:"Level33_OptionsTrading",BlackScholes:"Level33_OptionsTrading",Greeks:"Level33_OptionsTrading",Iceberg:"Level34_AdvancedOrderTypes",TWAP:"Level34_AdvancedOrderTypes",VWAP:"Level34_AdvancedOrderTypes",TrailingStop:"Level34_AdvancedOrderTypes",BracketOrder:"Level34_AdvancedOrderTypes",TradingBot:"Level35_TradingBotsAPI",TradingBots:"Level35_TradingBotsAPI",ApiKey:"Level35_TradingBotsAPI",CopyTrading:"Level35_TradingBotsAPI",SocialTrading:"Level35_TradingBotsAPI",AML:"Level36_AMLMonitoring",AMLMonitoring:"Level36_AMLMonitoring",TransactionMonitoring:"Level36_AMLMonitoring",SAR:"Level36_AMLMonitoring",SuspiciousActivity:"Level36_AMLMonitoring",Sanctions:"Level37_SanctionsScreening",SanctionsScreening:"Level37_SanctionsScreening",OFAC:"Level37_SanctionsScreening",Watchlist:"Level37_SanctionsScreening",Regulatory:"Level38_RegulatoryReporting",RegulatoryReporting:"Level38_RegulatoryReporting",CDD:"Level38_RegulatoryReporting",EDD:"Level38_RegulatoryReporting",Compliance:"Level38_RegulatoryReporting",Tax:"Level39_TaxReporting",TaxReporting:"Level39_TaxReporting","1099B":"Level39_TaxReporting",TaxCalculation:"Level39_TaxReporting",RiskManagement:"Level40_RiskManagement",RiskScoring:"Level40_RiskManagement",BehavioralAnalytics:"Level40_RiskManagement",DeviceFingerprinting:"Level40_RiskManagement",ColdWallet:"Level41_ColdWalletManagement",ColdWalletManagement:"Level41_ColdWalletManagement",HSM:"Level41_ColdWalletManagement",MultiSig:"Level42_MultiSignatureWallets",MultiSignature:"Level42_MultiSignatureWallets",MultiSigWallet:"Level42_MultiSignatureWallets",HSMIntegration:"Level43_HSMIntegration",HardwareSecurityModule:"Level43_HSMIntegration",AdvancedSecurity:"Level44_AdvancedSecurity",SecurityFeatures:"Level44_AdvancedSecurity",PenetrationTesting:"Level44_AdvancedSecurity",SecurityMonitoring:"Level45_SecurityMonitoring",ThreatDetection:"Level45_SecurityMonitoring",SIEM:"Level45_SecurityMonitoring",Staking:"Level46_StakingServices",StakingService:"Level46_StakingServices",StakingRewards:"Level46_StakingServices",Lending:"Level47_LendingBorrowing",Borrowing:"Level47_LendingBorrowing",LendingPlatform:"Level47_LendingBorrowing",YieldFarming:"Level48_YieldFarming",LiquidityPool:"Level48_YieldFarming",DeFi:"Level48_YieldFarming",Airdrop:"Level49_AirdropsDistribution",Airdrops:"Level49_AirdropsDistribution",TokenDistribution:"Level49_AirdropsDistribution",TokenListing:"Level50_TokenListing",ListingManagement:"Level50_TokenListing",TradingAnalytics:"Level51_TradingAnalytics",TradingStatistics:"Level51_TradingAnalytics",TradingCharts:"Level51_TradingAnalytics",BusinessAnalytics:"Level52_BusinessAnalytics",BusinessMetrics:"Level52_BusinessAnalytics",BusinessReporting:"Level52_BusinessAnalytics",AdminDashboard:"Level53_AdminDashboards",AdminDashboards:"Level53_AdminDashboards",AdminMonitoring:"Level53_AdminDashboards",PerformanceOptimization:"Level54_PerformanceOptimization",PerformanceProfiling:"Level54_PerformanceOptimization",DataWarehouse:"Level55_DataWarehouse",DataWarehouseBI:"Level55_DataWarehouse",ETL:"Level55_DataWarehouse",BusinessIntelligence:"Level55_DataWarehouse",FeeManagement:"Level56_FeeManagement",DynamicFee:"Level56_FeeManagement",FeeTiers:"Level56_FeeManagement",CustomerSupport:"Level57_CustomerSupport",LiveChat:"Level57_CustomerSupport",SupportAutomation:"Level57_CustomerSupport",LiquidityManagement:"Level58_LiquidityManagement",LiquidityOptimization:"Level58_LiquidityManagement",MarketData:"Level59_MarketData",AdvancedMarketData:"Level59_MarketData",MarketDataAggregation:"Level59_MarketData",Infrastructure:"Level60_Infrastructure",InfrastructureEnhancements:"Level60_Infrastructure",AutoScaling:"Level60_Infrastructure",BackupRecovery:"Level60_Infrastructure",Controllers:"Level9_TradingControllers",CONTROLLERS:"Level9_TradingControllers","CONTROLLERS 25+":"Level9_TradingControllers",Services1:"Level7_TradingEngine","CORE SERVICES":"Level7_TradingEngine","Core Services":"Level7_TradingEngine",Services2:"Level5_WalletServices","WALLET SERVICES":"Level5_WalletServices","Wallet Services":"Level5_WalletServices",Services3:"Level3_CustomerIdentity","IDENTITY KYC":"Level3_CustomerIdentity","Identity KYC":"Level3_CustomerIdentity",Services4:"Level4_Notifications",NOTIFICATIONS:"Level4_Notifications",Notifications:"Level4_Notifications",Services5:"Level15_SupportContent","CONTENT SUPPORT":"Level15_SupportContent","Content Support":"Level15_SupportContent",External:"Level6_Blockchain",EXTERNAL:"Level6_Blockchain",Clients:"Level1_ProjectSetup",CLIENTS:"Level1_ProjectSetup","CLIENTS Web • Mobile • ATM":"Level1_ProjectSetup","DATABASE 81 TABLES":"Level2_DatabaseAuth","Database 81":"Level2_DatabaseAuth",DATABASE:"Level2_DatabaseAuth",Admin:"Level13_AdminRBAC",Customer:"Level3_CustomerIdentity",Order:"Level7_TradingEngine",Trade:"Level7_TradingEngine",Wallet:"Level5_WalletServices",Market:"Level8_MarketManagement",Coin:"Level8_MarketManagement",Email:"Level4_Notifications",SMS:"Level4_Notifications",Notification:"Level4_Notifications",OrderS:"Level7_TradingEngine",TradeS:"Level7_TradingEngine",CustomerS:"Level3_CustomerIdentity",WalletS:"Level5_WalletServices",BalanceS:"Level5_WalletServices",DepositS:"Level5_WalletServices",WithdrawS:"Level5_WalletServices",ApieS:"Level6_Blockchain",NetworkS:"Level6_Blockchain",PGW:"Level11_PaymentGateways",Vandar:"Level11_PaymentGateways",Jibit:"Level11_PaymentGateways",NextPay:"Level11_PaymentGateways",Sadad:"Level11_PaymentGateways",Zarinpal:"Level11_PaymentGateways",FinoTech:"Level12_KYCIdentity",JibitKYC:"Level12_KYCIdentity",EmailS:"Level4_Notifications",SMSS:"Level4_Notifications",NotifS:"Level4_Notifications",AdminC:"Level13_AdminRBAC",RolesC:"Level13_AdminRBAC",UserC:"Level3_CustomerIdentity",AuthC:"Level2_DatabaseAuth",OrderC:"Level9_TradingControllers",TradeC:"Level9_TradingControllers",MarketC:"Level8_MarketManagement",WalletC:"Level10_WalletController",DepositC:"Level5_WalletServices",ExchangeC:"Level14_OTCExchange",CoinC:"Level8_MarketManagement",TicketC:"Level15_SupportContent",BlogC:"Level15_SupportContent",GiftC:"Level16_Promotional",RefC:"Level16_Promotional",MarginS:"Level31_MarginTrading",FuturesS:"Level32_FuturesPerpetual",OptionsS:"Level33_OptionsTrading",AdvancedOrders:"Level34_AdvancedOrderTypes",TradingBots:"Level35_TradingBotsAPI",AML:"Level36_AMLMonitoring",Sanctions:"Level37_SanctionsScreening",Regulatory:"Level38_RegulatoryReporting",Tax:"Level39_TaxReporting",Risk:"Level40_AdvancedRiskManagement",ColdWallet:"Level41_ColdWalletManagement",MultiSig:"Level42_MultiSignatureWallets",HSM:"Level43_HSMIntegration",AdvancedSec:"Level44_AdvancedSecurity",SecMonitoring:"Level45_SecurityMonitoring",Staking:"Level46_StakingServices",Lending:"Level47_LendingBorrowing",Yield:"Level48_YieldFarming",Airdrops:"Level49_AirdropsDistribution",Listing:"Level50_TokenListing",TradingAnalytics:"Level51_TradingAnalytics",BusinessAnalytics:"Level52_BusinessAnalytics",AdminDash:"Level53_AdminDashboards",DataWarehouse:"Level55_DataWarehouse",Fees:"Level56_FeeManagement",Support:"Level57_CustomerSupport",Liquidity:"Level58_LiquidityManagement",MarketData:"Level59_AdvancedMarketData",Infrastructure:"Level60_Infrastructure",MarginC:"Level31_MarginTrading",FuturesC:"Level32_FuturesPerpetual",OptionsC:"Level33_OptionsTrading",TradingBotsC:"Level35_TradingBotsAPI",AMLController:"Level36_AMLMonitoring",SanctionsC:"Level37_SanctionsScreening",RegulatoryC:"Level38_RegulatoryReporting",TaxC:"Level39_TaxReporting",StakingC:"Level46_StakingServices",LendingC:"Level47_LendingBorrowing",YieldC:"Level48_YieldFarming",ListingC:"Level50_TokenListing",AnalyticsC:"Level51_TradingAnalytics",DashboardC:"Level53_AdminDashboards",UI:"Level1_ProjectSetup",ATM:"Level17_AdditionalServices",Gateway:"Level11_PaymentGateways",Webhook:"Level11_PaymentGateways",JWT:"Level2_DatabaseAuth",AuthMgr:"Level2_DatabaseAuth",TwoFA:"Level2_DatabaseAuth",Blockchain:"Level6_Blockchain",PaymentAPI:"Level11_PaymentGateways",KYCAPI:"Level12_KYCIdentity",VandarService:"Level11_PaymentGateways",JibitService:"Level11_PaymentGateways",NextPayService:"Level11_PaymentGateways",SadadService:"Level11_PaymentGateways",ZarinpalService:"Level11_PaymentGateways",PaymentGateway:"Level11_PaymentGateways","PaymentGateway Interface":"Level11_PaymentGateways",FinoTechService:"Level12_KYCIdentity",CustomerWalletService:"Level5_WalletServices",WithdrawalService:"Level5_WalletServices","Multi-Chain Support":"Level6_Blockchain","Multi-Chain":"Level6_Blockchain",Blockchain:"Level6_Blockchain",Payment:"Level11_PaymentGateways",KYC:"Level12_KYCIdentity",Ticket:"Level15_SupportContent",Blog:"Level15_SupportContent",File:"Level15_SupportContent",GiftCode:"Level16_Promotional",ReferralCode:"Level16_Promotional",Exchange:"Level14_OTCExchange",Role:"Level13_AdminRBAC",Privilege:"Level13_AdminRBAC"},He=t=>{if(!t)return null;const o=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").replace(/Controller|Service|C|S$/i,"").trim();if(ge[o])return ge[o];const n=t.replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[MISSING\]/i,"").trim();if(ge[n])return ge[n];const a=o.toLowerCase();for(const[c,f]of Object.entries(ge))if(c.toLowerCase()===a)return f;const m=o.replace(/\s+/g,"");if(ge[m])return ge[m];const p=o+"Service",v=o+"Controller";if(ge[p])return ge[p];if(ge[v])return ge[v];const l=[];for(const[c,f]of Object.entries(ge)){const E=c.toLowerCase();(a.includes(E)||E.includes(a))&&l.push({key:c,level:f,length:c.length})}if(l.length>0)return l.sort((c,f)=>f.length-c.length),l[0].level;if(o.includes("Controller")||o.endsWith("C")){const c=o.replace(/Controller|C$/i,"").trim();if(ge[c])return ge[c];const f=c.toLowerCase();for(const[E,w]of Object.entries(ge))if(E.toLowerCase()===f)return w;if(c==="Admin")return"Level13_AdminRBAC";if(c==="Customer")return"Level3_CustomerIdentity";if(c==="Order"||c==="Trade")return"Level9_TradingControllers";if(c==="Wallet")return"Level10_WalletController";if(c==="Market"||c==="Coin")return"Level8_MarketManagement";if(c==="Ticket"||c==="Blog")return"Level15_SupportContent";if(c==="GiftCode"||c==="ReferralCode")return"Level16_Promotional";if(c==="ExchangeAction")return"Level14_OTCExchange";if(c==="Roles")return"Level13_AdminRBAC"}if(o.includes("Service")||o.endsWith("S")){const c=o.replace(/Service|S$/i,"").trim();if(ge[c])return ge[c];const f=c.toLowerCase();for(const[E,w]of Object.entries(ge))if(E.toLowerCase()===f)return w;if(c==="Customer")return"Level3_CustomerIdentity";if(c==="Order"||c==="Trade")return"Level7_TradingEngine";if(c==="Wallet"||c==="CustomerWallet"||c==="Deposit"||c==="Withdrawal")return"Level5_WalletServices";if(c==="Market"||c==="Coin")return"Level8_MarketManagement";if(c==="Email"||c==="SMS"||c==="Notification")return"Level4_Notifications";if(c==="Apie")return"Level6_Blockchain";if(c==="Ticket"||c==="Blog"||c==="File")return"Level15_SupportContent";if(c==="GiftCode"||c==="ReferralCode")return"Level16_Promotional";if(c==="FinoTech"||c==="Jibit"||c==="BankAccount")return"Level12_KYCIdentity";if(c==="Admin"||c==="Role")return"Level13_AdminRBAC";if(c==="ExchangeAction")return"Level14_OTCExchange"}return null},Re={AdminController:{title:"Admin Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:i.HIGH},CustomerController:{title:"Customer Controller",category:"Controllers",level:"Level3_CustomerIdentity",priority:i.CRITICAL},OrderController:{title:"Order Controller",category:"Controllers",level:"Level9_TradingControllers",priority:i.CRITICAL},WalletController:{title:"Wallet Controller",category:"Controllers",level:"Level10_WalletController",priority:i.CRITICAL},TradeController:{title:"Trade Controller",category:"Controllers",level:"Level9_TradingControllers",priority:i.CRITICAL},MarketController:{title:"Market Controller",category:"Controllers",level:"Level8_MarketManagement",priority:i.HIGH},CoinController:{title:"Coin Controller",category:"Controllers",level:"Level8_MarketManagement",priority:i.HIGH},ExchangeActionController:{title:"Exchange Action Controller",category:"Controllers",level:"Level14_OTCExchange",priority:i.HIGH},TicketController:{title:"Ticket Controller",category:"Controllers",level:"Level15_SupportContent",priority:i.MEDIUM},BlogController:{title:"Blog Controller",category:"Controllers",level:"Level15_SupportContent",priority:i.MEDIUM},GiftCodeController:{title:"Gift Code Controller",category:"Controllers",level:"Level16_Promotional",priority:i.MEDIUM},ReferralCodeController:{title:"Referral Code Controller",category:"Controllers",level:"Level16_Promotional",priority:i.MEDIUM},RolesController:{title:"Roles Controller",category:"Controllers",level:"Level13_AdminRBAC",priority:i.HIGH},FinoTechController:{title:"FinoTech Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:i.HIGH},JibitController:{title:"Jibit Controller",category:"Controllers",level:"Level12_KYCIdentity",priority:i.HIGH},AlarmController:{title:"Alarm Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},FileController:{title:"File Controller",category:"Controllers",level:"Level15_SupportContent",priority:i.MEDIUM},LanguageController:{title:"Language Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.LOW},CountryController:{title:"Country Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.LOW},ExchangeController:{title:"Exchange Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},ExchangeSettingController:{title:"Exchange Setting Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},HealthController:{title:"Health Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.LOW},VandarWebhookController:{title:"Vandar Webhook Controller",category:"Controllers",level:"Level11_PaymentGateways",priority:i.HIGH},AtmController:{title:"ATM Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},CreditCardController:{title:"Credit Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},SaminCardController:{title:"Samin Card Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},SocketController:{title:"Socket Controller",category:"Controllers",level:"Level17_AdditionalServices",priority:i.MEDIUM},AdminService:{title:"Admin Service",category:"Services",level:"Level13_AdminRBAC",priority:i.HIGH},CustomerService:{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:i.CRITICAL},OrderService:{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:i.CRITICAL},WalletService:{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},TradeService:{title:"Trade Service",category:"Services",level:"Level7_TradingEngine",priority:i.CRITICAL},MarketService:{title:"Market Service",category:"Services",level:"Level8_MarketManagement",priority:i.HIGH},CoinService:{title:"Coin Service",category:"Services",level:"Level8_MarketManagement",priority:i.HIGH},ApieService:{title:"Apie Service (Blockchain)",category:"Services",level:"Level6_Blockchain",priority:i.CRITICAL},GiftCodeService:{title:"Gift Code Service",category:"Services",level:"Level16_Promotional",priority:i.MEDIUM},ReferralCodeService:{title:"Referral Code Service",category:"Services",level:"Level16_Promotional",priority:i.MEDIUM},TicketService:{title:"Ticket Service",category:"Services",level:"Level15_SupportContent",priority:i.MEDIUM},BlogService:{title:"Blog Service",category:"Services",level:"Level15_SupportContent",priority:i.MEDIUM},FileService:{title:"File Service",category:"Services",level:"Level15_SupportContent",priority:i.MEDIUM},EmailService:{title:"Email Service",category:"Services",level:"Level4_Notifications",priority:i.HIGH},SMSService:{title:"SMS Service",category:"Services",level:"Level4_Notifications",priority:i.HIGH},NotificationService:{title:"Notification Service",category:"Services",level:"Level4_Notifications",priority:i.HIGH},CustomerWalletService:{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},DepositService:{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},WithdrawalRequestService:{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},FinoTechService:{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},JibitService:{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},BankAccountService:{title:"Bank Account Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},UserAccountLevelService:{title:"User Account Level Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},RoleService:{title:"Role Service",category:"Services",level:"Level13_AdminRBAC",priority:i.HIGH},ExchangeActionService:{title:"Exchange Action Service",category:"Services",level:"Level14_OTCExchange",priority:i.HIGH},ExchangeSettingService:{title:"Exchange Setting Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},CustomerTokenService:{title:"Customer Token Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},AlarmService:{title:"Alarm Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},MessageService:{title:"Message Service",category:"Services",level:"Level15_SupportContent",priority:i.MEDIUM},FAQService:{title:"FAQ Service",category:"Services",level:"Level15_SupportContent",priority:i.LOW},CountryService:{title:"Country Service",category:"Services",level:"Level17_AdditionalServices",priority:i.LOW},LanguageService:{title:"Language Service",category:"Services",level:"Level17_AdditionalServices",priority:i.LOW},AtmService:{title:"ATM Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},CreditCardService:{title:"Credit Card Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},SaminCardService:{title:"Samin Card Service",category:"Services",level:"Level17_AdditionalServices",priority:i.MEDIUM},TomanTransactionService:{title:"Toman Transaction Service",category:"Services",level:"Level5_WalletServices",priority:i.MEDIUM},CashDepositService:{title:"Cash Deposit Service",category:"Services",level:"Level5_WalletServices",priority:i.MEDIUM},"Order ServiceervicecreateOrder deleteOrdergetOrder Book validateDTO":{title:"Order Service",category:"Services",level:"Level7_TradingEngine",priority:i.CRITICAL},"Jibit ServiceervicematchIBAN matchCardidentitySimilarity":{title:"Jibit Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},"Vandar Serviceervice":{title:"Vandar Payment Gateway",category:"Services",level:"Level11_PaymentGateways",priority:i.HIGH},"Deposit ServiceervicetrackDeposit confirmDeposit":{title:"Deposit Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},"Customer Wallet ServiceervicegetBalance updateBalancelockFunds unlockFunds":{title:"Customer Wallet Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},"Withdrawal ServiceervicecreateRequestapproveWithdrawalr":{title:"Withdrawal Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},"Wallet ServiceervicecreateHDWalletgenerate Addresscr":{title:"Wallet Service",category:"Services",level:"Level5_WalletServices",priority:i.CRITICAL},"FinoTech Serviceervicevalidate NationallDcard TolBAN sendSMSverifyBankAccount":{title:"FinoTech Service",category:"Services",level:"Level12_KYCIdentity",priority:i.HIGH},"Controllerustomer Serviceregister authenticateupdateProfile manageKYC":{title:"Customer Service",category:"Services",level:"Level3_CustomerIdentity",priority:i.CRITICAL}},ht=t=>{let o=t.replace(/Development/g,"").replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").trim();const n=[];let a="";const m=/([a-z])([A-Z])/g;o=o.replace(m,"$1 $2");const p=o.split(/\s+/).filter(v=>v.length>0);for(let v=0;v<p.length;v++){const l=p[v];l.endsWith("Service")||l.endsWith("Controller")?(a&&(n.push(a.trim()),a=""),n.push(l)):/^[a-z]/.test(l)||/^[a-z][A-Z]/.test(l)?a&&!a.endsWith("Service")&&!a.endsWith("Controller")?a+=" "+l:(a&&n.push(a.trim()),a=l):a+=(a?" ":"")+l}return a&&n.push(a.trim()),n.filter(v=>v.length>0)},vt=(t,o)=>{if(Re[t])return Re[t].title;const n=o.find(a=>a.endsWith("Service")||a.endsWith("Controller"));return n?Re[n]?Re[n].title:n.replace(/([A-Z])/g," $1").trim():o.length>0?o[0].replace(/([A-Z])/g," $1").trim():t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\s+/g," ").trim().split(" ")[0]},yt=t=>{if(Re[t])return Re[t];const o=ht(t),n=vt(t,o),a=o.find(l=>l.endsWith("Service")||l.endsWith("Controller"));let m=null;a&&Re[a]&&(m=Re[a]);let p="Other";a&&(a.endsWith("Controller")?p="Controllers":a.endsWith("Service")&&(p="Services"));let v=i.MEDIUM;if(a){const l=["OrderService","TradeService","WalletService","CustomerService","ApieService"],c=["AdminService","MarketService","CoinService","DepositService","WithdrawalRequestService"];l.some(f=>a.includes(f))?v=i.CRITICAL:c.some(f=>a.includes(f))&&(v=i.HIGH)}return{title:n,category:(m==null?void 0:m.category)||p,level:(m==null?void 0:m.level)||null,priority:(m==null?void 0:m.priority)||v,extractedNames:o,originalId:t}},De=t=>{let o=i.MEDIUM;if(t.priority){const p=t.priority.toLowerCase().trim();p==="low"?o=i.LOW:p==="medium"?o=i.MEDIUM:p==="high"?o=i.HIGH:p==="critical"?o=i.CRITICAL:o=i[t.priority.toUpperCase()]||i.MEDIUM}let n=t.category||"Other",a=[];Array.isArray(t.subtasks)&&(a=t.subtasks.map((p,v)=>typeof p=="string"?{id:`subtask-${v}`,title:p,completed:!1,aiPrompt:null}:typeof p=="object"?{id:p.id||`subtask-${v}`,title:p.title||p.name||String(p),completed:p.completed||!1,aiPrompt:p.aiPrompt||null}:{id:`subtask-${v}`,title:String(p),completed:!1,aiPrompt:null}));let m=[];return t.notes&&(typeof t.notes=="string"?m=t.notes.split(`
`).filter(p=>p.trim()).map(p=>({content:p.trim(),createdAt:new Date().toISOString()})):Array.isArray(t.notes)&&(m=t.notes.map(p=>({content:typeof p=="string"?p:p.content||String(p),createdAt:p.createdAt||new Date().toISOString()})))),{id:t.nodeId||t.id,nodeId:t.nodeId||t.id,title:t.title||"",description:t.description||"",status:t.status||F.NOT_STARTED,priority:o,category:n,estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:a,notes:m,dependencies:Array.isArray(t.dependencies)?t.dependencies:[],isMissing:t.isMissing||!1,createdAt:t.createdAt||new Date().toISOString(),updatedAt:t.updatedAt||new Date().toISOString(),backendId:t.id||t.backendId}},St=t=>{let o="medium";return t.priority&&(t.priority===i.LOW?o="low":t.priority===i.MEDIUM?o="medium":t.priority===i.HIGH?o="high":t.priority===i.CRITICAL?o="critical":typeof t.priority=="string"&&(o=t.priority.toLowerCase().trim()||"medium")),(!o||o==="")&&(o="medium"),{nodeId:t.nodeId||t.id,title:t.title,description:t.description||"",status:t.status||F.NOT_STARTED,notes:Array.isArray(t.notes)?t.notes.map(n=>typeof n=="string"?n:n.content).join(`
`):t.notes||"",estimatedHours:t.estimatedHours||0,actualHours:t.actualHours||0,subtasks:t.subtasks||[],dependencies:t.dependencies||[],priority:o,category:t.category||"Other",isMissing:t.isMissing||!1}},ft=(t,o)=>{const n=t.replace(/Serviceervice/g,"Service").replace(/Controllerustomer/g,"Controller").replace(/Development/g,"").trim(),a=n.match(/(\w+Service)/i),m=n.match(/(\w+Controller)/i);return a?a[1]:m?m[1]:null},rt=({children:t})=>{const[o,n]=T.useState({}),[a,m]=T.useState(!1),[p,v]=T.useState(null),[l,c]=T.useState(null),[f,E]=T.useState(null),[w,re]=T.useState(!1),[ae,ee]=T.useState(!0),[H,de]=T.useState(null);T.useEffect(()=>{X(),(async()=>{try{const{seedDiagramsAndNodes:A}=await Ae(async()=>{const{seedDiagramsAndNodes:b}=await import("./diagramBackend-Bp3qNCYq.js");return{seedDiagramsAndNodes:b}},__vite__mapDeps([0,1,2])),{API_ENDPOINTS:_}=await Ae(async()=>{const{API_ENDPOINTS:b}=await Promise.resolve().then(()=>je);return{API_ENDPOINTS:b}},void 0),I=await fetch(_.diagrams);if(I.ok){const b=await I.json();if(!b||b.length===0)console.log("🌱 No diagrams found, seeding all diagrams and nodes..."),await A();else{console.log(`✅ Found ${b.length} existing diagrams, skipping seed`);for(const G of b){const u=await fetch(`${_.nodes}?diagramId=${G.id}`);if(u.ok){const C=await u.json();if(!C||C.length===0){console.log(`⚠️ Diagram ${G.diagramId} has no nodes, extracting and saving...`);const{extractNodesFromMermaid:M,saveNodesToBackend:ne}=await Ae(async()=>{const{extractNodesFromMermaid:D,saveNodesToBackend:R}=await import("./diagramBackend-Bp3qNCYq.js");return{extractNodesFromMermaid:D,saveNodesToBackend:R}},__vite__mapDeps([0,1,2])),g=await M(G.mermaidCode||"",G.id);g.length>0&&(g.forEach(D=>{D.diagramId=G.id}),await ne(G.id,g))}}}}}}catch(A){console.warn("Could not seed diagrams on startup:",A)}})()},[]);const X=async()=>{try{re(!0),de(null);const{API_ENDPOINTS:h}=await Ae(async()=>{const{API_ENDPOINTS:u}=await Promise.resolve().then(()=>je);return{API_ENDPOINTS:u}},void 0),A=await fetch(h.tasks);if(!A.ok)throw new Error("Failed to load tasks");const _=await A.json(),I={},b=[],G={Level1_ProjectSetup:i.CRITICAL,Level2_DatabaseAuth:i.CRITICAL,Level3_CustomerIdentity:i.CRITICAL,Level5_WalletServices:i.CRITICAL,Level6_Blockchain:i.CRITICAL,Level7_TradingEngine:i.CRITICAL,Level11_PaymentGateways:i.CRITICAL,Level4_Notifications:i.HIGH,Level8_MarketManagement:i.HIGH,Level9_TradingControllers:i.HIGH,Level10_WalletController:i.HIGH,Level12_KYCIdentity:i.HIGH,Level13_AdminRBAC:i.HIGH,Level14_OTCExchange:i.HIGH,Level15_SupportContent:i.MEDIUM,Level16_Promotional:i.MEDIUM,Level17_AdditionalServices:i.MEDIUM,Level18:i.MEDIUM,Level19:i.MEDIUM,Level20:i.MEDIUM,Level21:i.MEDIUM,Level22:i.MEDIUM,Level23:i.MEDIUM,Level24:i.MEDIUM,Level25:i.MEDIUM,Level26:i.MEDIUM,Level27:i.MEDIUM,Level28:i.MEDIUM,Level29:i.MEDIUM,Level30:i.MEDIUM,Level31_AdvancedTrading:i.HIGH,Level32_ComplianceRisk:i.HIGH,Level33_SecurityEnhancements:i.HIGH,Level34_FinancialServices:i.HIGH,Level35_AnalyticsReporting:i.MEDIUM,Level36:i.MEDIUM,Level37:i.MEDIUM,Level38:i.MEDIUM,Level39:i.MEDIUM,Level40:i.MEDIUM,Level41:i.MEDIUM,Level42:i.MEDIUM,Level43:i.MEDIUM,Level44:i.MEDIUM,Level45:i.MEDIUM,Level46:i.MEDIUM,Level47:i.MEDIUM,Level48:i.MEDIUM,Level49:i.MEDIUM,Level50:i.MEDIUM,Level51:i.LOW,Level52:i.LOW,Level53:i.LOW,Level54:i.LOW,Level55:i.LOW,Level56:i.LOW,Level57:i.LOW,Level58:i.LOW,Level59:i.LOW,Level60:i.LOW};if(_.forEach(u=>{const C=De(u);let M=G[u.nodeId];if(!M&&u.nodeId&&u.nodeId.startsWith("Level")){const g=u.nodeId.match(/Level(\d+)/);if(g){const D=parseInt(g[1]);D<=7||D===11?M=i.CRITICAL:D<=14?M=i.HIGH:D<=30||D<=50?M=i.MEDIUM:M=i.LOW}}M||(M=i.MEDIUM),(!u.priority||u.priority===null||u.priority===""||C.priority!==M)&&(C.priority=M,b.push({nodeId:u.nodeId,backendId:u.id,priority:M})),I[u.nodeId]=C}),b.length>0){console.log(`🔄 Updating priorities for ${b.length} tasks in database...`);const u=b.map(async({nodeId:g,backendId:D,priority:R})=>{try{const{API_ENDPOINTS:r}=await Ae(async()=>{const{API_ENDPOINTS:x}=await Promise.resolve().then(()=>je);return{API_ENDPOINTS:x}},void 0),s=R===i.LOW?"low":R===i.MEDIUM?"medium":R===i.HIGH?"high":R===i.CRITICAL?"critical":"medium",y=await fetch(r.task(D),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({priority:s})});return y.ok?(console.log(`✅ Updated priority for ${g} to ${s}`),{success:!0,nodeId:g,priorityValue:s}):(console.warn(`⚠️ Failed to update priority for ${g}: ${y.status} ${y.statusText}`),{success:!1,nodeId:g})}catch(r){return console.warn(`⚠️ Failed to update priority for ${g}:`,r),{success:!1,nodeId:g,error:r.message}}}),C=await Promise.all(u),M=C.filter(g=>g.success).length,ne=C.filter(g=>!g.success).length;M>0&&console.log(`✅ Successfully updated priorities for ${M} tasks`),ne>0&&console.warn(`⚠️ Failed to update priorities for ${ne} tasks`)}else console.log("✅ All tasks already have priorities set in database");n(I)}catch(h){console.error("Failed to load tasks from backend:",h),de(h.message),console.warn("⚠️ Backend unavailable - no tasks available. Please ensure backend is running and database is seeded."),n({})}finally{re(!1)}},pe=async h=>{try{const{API_ENDPOINTS:A}=await Ae(async()=>{const{API_ENDPOINTS:C}=await Promise.resolve().then(()=>je);return{API_ENDPOINTS:C}},void 0),_=St(h);let I,b;if(h.backendId)I=A.task(h.backendId),b="PATCH";else try{const C=await fetch(A.taskByNode(h.nodeId||h.id));if(C.ok){const M=await C.json();M&&M.id?(I=A.task(M.id),b="PATCH"):(I=A.tasks,b="POST")}else I=A.tasks,b="POST"}catch{I=A.tasks,b="POST"}const G=await fetch(I,{method:b,headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!G.ok){const C=await G.text();throw new Error(`Failed to save task: ${G.status} ${G.statusText} - ${C}`)}const u=G.headers.get("content-type");if(u&&u.includes("application/json")){const C=await G.text();if(C&&C.trim())try{const M=JSON.parse(C);return De(M)}catch(M){return console.error("Failed to parse response JSON:",M,"Response text:",C),De({..._,id:h.backendId||h.id})}else return De({..._,id:h.backendId||h.id})}else return De({..._,id:h.backendId||h.id})}catch(A){throw console.error("Failed to save task to backend:",A),A}},Ce=async(h,A)=>{n(_=>{const I=_[h];if(!I)return _;const b={..._,[h]:{...I,...A,updatedAt:new Date().toISOString()}};return b[h]&&pe(b[h]).then(G=>{n(u=>{const C=u[h];return C?{...u,[h]:{...C,...G,subtasks:G.subtasks||C.subtasks,backendId:G.backendId||G.id||(C==null?void 0:C.backendId)}}:u})}).catch(G=>{console.error("Backend save failed:",G)}),b})},he={tasks:o,updateTask:Ce,updateSubtask:(h,A,_)=>{n(I=>{const b=I[h];if(!b)return I;const G=b.subtasks.map(C=>C.id===A?{...C,..._}:C),u={...b,subtasks:G,updatedAt:new Date().toISOString()};return pe(u).then(C=>{n(M=>{var ne;return{...M,[h]:{...M[h],...C,backendId:C.id||C.backendId||((ne=M[h])==null?void 0:ne.backendId)}}})}).catch(C=>console.error("Backend save failed:",C)),{...I,[h]:u}})},addSubtask:(h,A)=>{n(_=>{const I=_[h];if(!I)return _;const b={id:A.id||`subtask-${Date.now()}`,title:A.title||A,completed:!1,...typeof A=="object"?A:{}},G={...I,subtasks:[...I.subtasks||[],b],updatedAt:new Date().toISOString()};return pe(G).then(u=>{n(C=>{var M;return{...C,[h]:{...C[h],...u,backendId:u.id||u.backendId||((M=C[h])==null?void 0:M.backendId)}}})}).catch(u=>console.error("Backend save failed:",u)),{..._,[h]:G}})},toggleSubtask:(h,A)=>{n(_=>{const I=_[h];if(!I)return _;const b=(I.subtasks||[]).find(s=>s.id===A),G=(b==null?void 0:b.completed)===!0||(b==null?void 0:b.completed)==="true"||(b==null?void 0:b.completed)===1,u=(I.subtasks||[]).map(s=>s.id===A?{...s,completed:!G}:s),C=u.filter(s=>s.completed===!0||s.completed==="true"||s.completed===1).length,M=u.length,ne=M>0&&C===M,g=C>0&&C<M;let D=I.status;ne&&I.status!==F.COMPLETED?(D=F.COMPLETED,console.log(`✅ All subtasks completed for ${h}, auto-updating status to COMPLETED`)):g&&I.status===F.NOT_STARTED?(D=F.IN_PROGRESS,console.log(`🔄 Some subtasks completed for ${h}, auto-updating status to IN_PROGRESS`)):!g&&(I.status,F.IN_PROGRESS);const R={...I,subtasks:u,status:D,updatedAt:new Date().toISOString()},r={..._,[h]:R};return pe(R).then(s=>{n(y=>{const x=y[h];if(!x)return y;const J=(s.subtasks||u).map((ie,O)=>{var te;const z=(te=x.subtasks)==null?void 0:te[O];return{...ie,completed:ie.completed!==void 0?ie.completed:(z==null?void 0:z.completed)||!1}});return{...y,[h]:{...x,...s,subtasks:J.length>0?J:u,status:s.status||D,backendId:s.backendId||s.id||(x==null?void 0:x.backendId)}}})}).catch(s=>{console.error("Backend save failed for subtask toggle:",s)}),r})},addNote:(h,A)=>{n(_=>{const I=_[h];if(!I)return _;const b={...I,notes:[...I.notes||[],{content:A,createdAt:new Date().toISOString()}],updatedAt:new Date().toISOString()};return pe(b).then(G=>{n(u=>{var C;return{...u,[h]:{...u[h],...G,backendId:G.id||G.backendId||((C=u[h])==null?void 0:C.backendId)}}})}).catch(G=>console.error("Backend save failed:",G)),{..._,[h]:b}})},updateActualHours:(h,A)=>{n(_=>{const I=_[h];if(!I)return _;const b={...I,actualHours:A,updatedAt:new Date().toISOString()};return pe(b).then(G=>{n(u=>{var C;return{...u,[h]:{...u[h],...G,backendId:G.id||G.backendId||((C=u[h])==null?void 0:C.backendId)}}})}).catch(G=>console.error("Backend save failed:",G)),{..._,[h]:b}})},updateTaskStatus:(h,A)=>{Ce(h,{status:A})},updateTaskPriority:(h,A)=>{Ce(h,{priority:A})},getProgress:()=>{const h=Object.values(o).filter(g=>g&&g.id&&g.id.startsWith("Level")),A=h.length,_=h.filter(g=>g.status===F.COMPLETED).length,I=h.filter(g=>g.status===F.IN_PROGRESS).length,b=h.filter(g=>g.status===F.NOT_STARTED).length,G=h.filter(g=>g.status===F.BLOCKED).length,u=h.reduce((g,D)=>{var R;return g+(((R=D.subtasks)==null?void 0:R.length)||0)},0),C=h.reduce((g,D)=>{var R;return g+(((R=D.subtasks)==null?void 0:R.filter(r=>r.completed===!0||r.completed==="true"||r.completed===1).length)||0)},0);let M=0;h.forEach(g=>{if(g.status===F.COMPLETED)M+=100;else if(g.status===F.BLOCKED)M+=0;else{const D=g.subtasks||[];if(D.length>0){const r=D.filter(s=>s.completed===!0||s.completed==="true"||s.completed===1).length/D.length*100;M+=r}else g.status===F.IN_PROGRESS?M+=50:M+=0}});const ne=A>0?Math.round(M/A):0;return{total:A,completed:_,inProgress:I,notStarted:b,blocked:G,percentage:ne,subtasks:{total:u,completed:C,percentage:u>0?Math.round(C/u*100):0}}},getCategoryProgress:h=>{const A=Object.values(o).filter(b=>b&&b.id&&b.id.startsWith("Level")&&b.category===h);if(A.length===0)return{total:0,completed:0,percentage:0};const _=A.length,I=A.filter(b=>b.status===F.COMPLETED).length;return{total:_,completed:I,percentage:_>0?Math.round(I/_*100):0}},getOrCreateTask:async h=>{if(!h)return null;if(o[h])return o[h];if(h.startsWith("Level"))return o[h]||null;const A=He(h);if(A&&o[A])return console.log(`Mapped diagram node "${h}" to Level task: ${A}`),o[A];const _=ft(h);if(_&&o[_])return o[_];if(_){const b=He(_);if(b&&o[b])return console.log(`Mapped base name "${_}" to Level task: ${b}`),o[b]}const I=yt(h);return I.level&&o[I.level]?(console.log(`Mapped via metadata "${h}" to Level task: ${I.level}`),o[I.level]):(console.warn(`Could not map diagram node "${h}" to any Level task. Returning null.`),null)},mapNodeToLevel:He,cleanupOldTasks:()=>{console.log("🧹 Cleanup handled by backend - only Level tasks are stored")},showTodoPanel:a,setShowTodoPanel:m,selectedTask:p,setSelectedTask:v,filterStatus:l,setFilterStatus:c,filterCategory:f,setFilterCategory:E,loading:w,useBackend:ae,setUseBackend:ee,backendError:H,loadTasksFromBackend:X};return e.jsx(at.Provider,{value:he,children:t})},at=T.createContext(),We=()=>{const t=T.useContext(at);if(!t)throw new Error("useTodoStore must be used within TodoProvider");return t},$t=Object.freeze(Object.defineProperty({__proto__:null,NODE_TO_LEVEL_MAPPING:ge,TaskPriority:i,TaskStatus:F,TodoProvider:rt,mapNodeToLevel:He,useTodoStore:We},Symbol.toStringTag,{value:"Module"})),Ye={everything:{id:"everything",title:"EVERYTHING - Complete System",subtitle:"Every component, service, table, flow - ALL IN ONE",icon:"🌐",type:"composite",description:"The complete Arnitex backend system - every single component from our entire conversation",children:["overview","controllers","services","database","flows","external","advanced"],code:`
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
`}},Ue=t=>Ye[t]||Ye.everything,it=()=>Object.values(Ye),Ct=()=>null,qe=Ct(),st=()=>qe!==null&&qe!=="",fe=t=>st()?`${qe}${t}`:null,nt={tasks:fe("/api/tasks"),progress:fe("/api/tasks/progress"),taskByNode:t=>fe(`/api/tasks/node/${t}`),task:t=>fe(`/api/tasks/${t}`),seedTasks:fe("/api/tasks/seed"),diagrams:fe("/api/diagrams"),diagramById:t=>fe(`/api/diagrams/${t}`),diagramByDiagramId:t=>fe(`/api/diagrams/diagram-id/${t}`),seedDiagrams:fe("/api/diagrams/seed"),nodes:fe("/api/nodes"),nodeById:t=>fe(`/api/nodes/${t}`),nodesByDiagram:t=>fe(`/api/nodes/diagram/${t}`),nodesByNodeId:t=>fe(`/api/nodes/node/${t}`),bulkCreateNodes:fe("/api/nodes/bulk")},je=Object.freeze(Object.defineProperty({__proto__:null,API_BASE_URL:qe,API_ENDPOINTS:nt,isBackendAvailable:st},Symbol.toStringTag,{value:"Module"})),bt=()=>{const{currentView:t,sidebarCollapsed:o,navigateToView:n,toggleSidebar:a}=_e(),p=it().filter(v=>v.type==="composite"||v.type==="detail");return T.useEffect(()=>{(async()=>{try{const{loadAllDiagramsFromBackend:l,seedDiagramsAndNodes:c}=await Ae(async()=>{const{loadAllDiagramsFromBackend:E,seedDiagramsAndNodes:w}=await import("./diagramBackend-Bp3qNCYq.js");return{loadAllDiagramsFromBackend:E,seedDiagramsAndNodes:w}},__vite__mapDeps([0,1,2])),f=await l();(!f||f.length===0)&&(console.log("🌱 Seeding diagrams to database in background..."),await c())}catch(l){console.warn("Could not seed diagrams:",l)}})()},[]),e.jsxs("aside",{className:`sidebar ${o?"collapsed":""}`,children:[e.jsx("button",{className:"sidebar-toggle",onClick:a,title:o?"Expand sidebar":"Collapse sidebar",children:o?"▶":"◀"}),e.jsxs("div",{className:"sidebar-header",children:[e.jsxs("div",{className:"sidebar-title",children:[e.jsx("span",{children:"💎"}),!o&&e.jsx("div",{children:"BitniTex"})]}),!o&&e.jsx("p",{className:"sidebar-subtitle",children:"Architecture Explorer"})]}),e.jsxs("nav",{className:"nav-section",children:[!o&&e.jsx("div",{className:"nav-section-title",children:"Views"}),p.map(v=>e.jsxs("button",{className:`nav-item ${t===v.id?"active":""}`,onClick:()=>n(v.id),title:o?v.title:void 0,children:[e.jsx("span",{className:"nav-item-icon",children:v.icon}),!o&&e.jsx("span",{className:"nav-item-title",children:v.title})]},v.id))]}),!o&&e.jsx("div",{className:"stats-section",children:e.jsxs("div",{className:"stats-grid",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Controllers"}),e.jsxs("div",{className:"stat-value",children:["25",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Services"}),e.jsxs("div",{className:"stat-value",children:["140",e.jsx("span",{className:"stat-unit",children:"+"})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Tables"}),e.jsx("div",{className:"stat-value",children:"81"})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx("div",{className:"stat-label",children:"Endpoints"}),e.jsxs("div",{className:"stat-value",children:["200",e.jsx("span",{className:"stat-unit",children:"+"})]})]})]})})]})},Tt=()=>{const{currentView:t,breadcrumbs:o,navigateToView:n,toggleMinimap:a,showMinimap:m,toggleSidebar:p,toggleFullscreen:v,showApiTester:l,setShowApiTester:c,selectedNode:f}=_e(),{setShowTodoPanel:E,getProgress:w}=We(),re=w(),ae=()=>{v(),document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()};return e.jsxs("div",{className:"toolbar",children:[e.jsx("div",{className:"toolbar-title",children:e.jsx("div",{className:"breadcrumb",children:o.map((ee,H)=>e.jsxs(Ee.Fragment,{children:[H>0&&e.jsx("span",{className:"breadcrumb-separator",children:"/"}),e.jsx("span",{className:`breadcrumb-item ${H===o.length-1?"active":""}`,onClick:()=>H===0&&n("overview"),children:ee})]},H))})}),e.jsxs("div",{className:"toolbar-actions",children:[e.jsxs("button",{className:"toolbar-btn",onClick:()=>E(!0),style:{background:re.percentage>0?"linear-gradient(135deg, #10b981 0%, #059669 100%)":void 0,color:re.percentage>0?"#fff":void 0,fontWeight:re.percentage>0?"600":void 0},children:[e.jsx("span",{className:"toolbar-btn-icon",children:"✅"}),e.jsxs("span",{children:["Project Progress (",re.percentage,"%)"]})]}),e.jsxs("button",{className:`toolbar-btn ${l?"active":""}`,onClick:()=>c(!l),title:"API Endpoint Tester (Swagger-like)",children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🧪"}),e.jsx("span",{children:"API Tester"})]}),e.jsxs("button",{className:`toolbar-btn ${m?"active":""}`,onClick:a,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"🗺️"}),e.jsx("span",{children:"Minimap"})]}),e.jsxs("button",{className:"toolbar-btn",onClick:ae,children:[e.jsx("span",{className:"toolbar-btn-icon",children:"⛶"}),e.jsx("span",{children:"Fullscreen"})]})]})]})},kt={AdminController:{id:"AdminController",type:"controller",title:"Admin Controller",icon:"👨‍💼",description:"Manages admin user operations including authentication, CRUD, and role management.",endpoints:[{method:"POST",path:"/api/admins/login",description:"Admin authentication"},{method:"POST",path:"/api/admins/create",description:"Create new admin",auth:"CREATE_ADMINS"},{method:"GET",path:"/api/admins",description:"List all admins",auth:"LIST_ADMINS"},{method:"PUT",path:"/api/admins/:id",description:"Update admin",auth:"UPDATE_ADMINS"},{method:"DELETE",path:"/api/admins/:id",description:"Delete admin",auth:"DELETE_ADMINS"}],services:["AdminService","RoleService","AuthenticateService"],tags:["Admin","Authentication","RBAC"]},CustomerController:{id:"CustomerController",type:"controller",title:"Customer Controller",icon:"👤",description:"Comprehensive user management including registration, authentication, profile, KYC, 2FA, and notifications.",endpoints:[{method:"POST",path:"/api/users/register",description:"User registration"},{method:"POST",path:"/api/users/login",description:"User login with password"},{method:"POST",path:"/api/users/login-with-otp",description:"Login via OTP"},{method:"GET",path:"/api/users/google-sso",description:"Google SSO authentication"},{method:"GET",path:"/api/users/profile",description:"Get user profile",auth:"USER"},{method:"PUT",path:"/api/users/kyc",description:"Submit KYC documents",auth:"USER"},{method:"POST",path:"/api/users/2fa/enable",description:"Enable 2FA",auth:"USER"},{method:"GET",path:"/api/users/login-history",description:"Get login history",auth:"USER"}],services:["CustomerService","CustomerTokenService","EmailService","SMSService","FinoTechService","JibitService"],tags:["User","Authentication","KYC","2FA"]},OrderController:{id:"OrderController",type:"controller",title:"Order Controller",icon:"📊",description:"Handles order creation, cancellation, and queries for P2P trading.",endpoints:[{method:"POST",path:"/api/orders/buy",description:"Create buy order",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/orders/sell",description:"Create sell order",auth:"AUTHORIZED_USER"},{method:"DELETE",path:"/api/orders/:id",description:"Cancel order",auth:"USER"},{method:"GET",path:"/api/orders",description:"Get user orders",auth:"USER"},{method:"GET",path:"/api/orders/order-book",description:"Get order book for market"},{method:"GET",path:"/api/orders/market-buy-sell-whole",description:"Calculate order price",auth:"USER"}],services:["OrderService","CreateOrderService","MarketService","CustomerService"],tags:["Trading","Orders","P2P"]},WalletController:{id:"WalletController",type:"controller",title:"Wallet Controller",icon:"💰",description:"Manages cryptocurrency wallets, addresses, deposits, and withdrawals.",endpoints:[{method:"POST",path:"/api/wallets",description:"Create HD wallet",auth:"CREATE_WALLET"},{method:"POST",path:"/api/wallets/generate-address",description:"Generate new address",auth:"CREATE_WALLET_ADDRESS"},{method:"POST",path:"/api/wallets/withdrawal-request",description:"Create withdrawal",auth:"AUTHORIZED_USER"},{method:"GET",path:"/api/wallets/balance",description:"Get wallet balance",auth:"USER"},{method:"POST",path:"/api/wallets/change-password",description:"Change wallet password",auth:"AUTHORIZED_USER"},{method:"POST",path:"/api/wallets/toman-deposit",description:"Fiat deposit via gateway",auth:"USER"}],services:["WalletService","ApieService","DepositService","WithdrawalRequestService","PaymentGateway"],tags:["Wallet","Blockchain","Deposits","Withdrawals"]},GiftCodeController:{id:"GiftCodeController",type:"controller",title:"Gift Code Controller",icon:"🎁",description:"Manages promotional gift codes and referral rewards.",endpoints:[{method:"POST",path:"/api/gift-code",description:"Create new gift code",auth:"CREATE_GIFT_CODE"},{method:"PUT",path:"/api/gift-code/use",description:"Redeem gift code",auth:"USER"},{method:"POST",path:"/api/gift-code/register/:prefix",description:"Register with gift code prefix",auth:"PUBLIC"},{method:"GET",path:"/api/gift-code",description:"List gift codes",auth:"LIST_GIFT_CODE"},{method:"DELETE",path:"/api/gift-code/:id",description:"Delete gift code",auth:"DELETE_GIFT_CODE"}],services:["GiftCodeService","CustomerService","CustomerWalletService"],tags:["Promotions","Rewards","Marketing"]},TradeController:{id:"TradeController",type:"controller",title:"Trade Controller",icon:"💹",description:"Provides trade history and analytics for executed orders.",endpoints:[{method:"GET",path:"/api/trades",description:"Get user trade history",auth:"USER"},{method:"GET",path:"/api/trades/history",description:"Get market trade history",auth:"PUBLIC"},{method:"GET",path:"/api/trades/admin",description:"Get all trades (admin)",auth:"LIST_TRADES"},{method:"GET",path:"/api/trades/:id",description:"Get specific trade",auth:"USER"}],services:["TradeService","MarketService"],tags:["Trading","History","Analytics"]},MarketController:{id:"MarketController",type:"controller",title:"Market Controller",icon:"📈",description:"Manages trading markets and market information.",endpoints:[{method:"GET",path:"/api/markets",description:"List all markets",auth:"PUBLIC"},{method:"POST",path:"/api/markets",description:"Create market",auth:"CREATE_MARKET"},{method:"PUT",path:"/api/markets/activate",description:"Activate/deactivate market",auth:"UPDATE_MARKET"},{method:"GET",path:"/api/markets/:id",description:"Get market details",auth:"PUBLIC"},{method:"DELETE",path:"/api/markets/:id",description:"Delete market",auth:"DELETE_MARKET"}],services:["MarketService","CoinService"],tags:["Markets","Trading Pairs","Configuration"]},CoinController:{id:"CoinController",type:"controller",title:"Coin Controller",icon:"🪙",description:"Manages cryptocurrency information and pricing.",endpoints:[{method:"GET",path:"/api/coins",description:"List all coins",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/usd",description:"Get USD prices",auth:"PUBLIC"},{method:"GET",path:"/api/coins/price/from-to",description:"Get exchange rate",auth:"PUBLIC"},{method:"POST",path:"/api/coins/tether-price",description:"Update USDT price",auth:"UPDATE_COIN"},{method:"POST",path:"/api/coins",description:"Create coin",auth:"CREATE_COIN"}],services:["CoinService","MarketService"],tags:["Cryptocurrency","Pricing","Assets"]},ExchangeActionController:{id:"ExchangeActionController",type:"controller",title:"Exchange Action Controller",icon:"🔄",description:"Handles OTC (over-the-counter) exchange operations.",endpoints:[{method:"POST",path:"/api/exchange/buy",description:"OTC buy request",auth:"USER"},{method:"POST",path:"/api/exchange/sell",description:"OTC sell request",auth:"USER"},{method:"POST",path:"/api/exchange/approve-order",description:"Approve OTC order",auth:"APPROVE_EXCHANGE"},{method:"GET",path:"/api/exchange/orders",description:"List OTC orders",auth:"LIST_EXCHANGE"}],services:["ExchangeActionService","CustomerWalletService","CoinService"],tags:["OTC","Exchange","Trading"]},TicketController:{id:"TicketController",type:"controller",title:"Ticket Controller",icon:"🎫",description:"Customer support ticket system.",endpoints:[{method:"GET",path:"/api/tickets",description:"List user tickets",auth:"USER"},{method:"POST",path:"/api/tickets",description:"Create new ticket",auth:"USER"},{method:"POST",path:"/api/tickets/message/:id",description:"Add message to ticket",auth:"USER"},{method:"PUT",path:"/api/tickets/:id/close",description:"Close ticket",auth:"USER"},{method:"GET",path:"/api/tickets/admin",description:"List all tickets (admin)",auth:"LIST_TICKETS"}],services:["TicketService","MessageService","FileService"],tags:["Support","Customer Service","Communication"]},BlogController:{id:"BlogController",type:"controller",title:"Blog Controller",icon:"📝",description:"Blog and content management.",endpoints:[{method:"GET",path:"/api/blog",description:"List blog posts",auth:"PUBLIC"},{method:"POST",path:"/api/blog",description:"Create blog post",auth:"CREATE_BLOG"},{method:"PUT",path:"/api/blog/:id",description:"Update blog post",auth:"UPDATE_BLOG"},{method:"DELETE",path:"/api/blog/:id",description:"Delete blog post",auth:"DELETE_BLOG"},{method:"GET",path:"/api/blog/:id",description:"Get blog post",auth:"PUBLIC"}],services:["BlogService","FileService"],tags:["Content","Blog","CMS"]},ReferralCodeController:{id:"ReferralCodeController",type:"controller",title:"Referral Code Controller",icon:"🔗",description:"Manages referral program and rewards.",endpoints:[{method:"POST",path:"/api/referral/create",description:"Create referral code",auth:"USER"},{method:"GET",path:"/api/referral/stats",description:"Get referral statistics",auth:"USER"},{method:"POST",path:"/api/referral/use/:code",description:"Use referral code",auth:"PUBLIC"}],services:["ReferralService","CustomerService","CustomerWalletService"],tags:["Referral","Marketing","Rewards"]},RolesController:{id:"RolesController",type:"controller",title:"Roles Controller",icon:"🔐",description:"Role and privilege management for RBAC.",endpoints:[{method:"GET",path:"/api/roles",description:"List all roles",auth:"LIST_ROLES"},{method:"POST",path:"/api/roles",description:"Create role",auth:"CREATE_ROLE"},{method:"GET",path:"/api/roles/privileges",description:"List all privileges",auth:"LIST_PRIVILEGES"},{method:"PUT",path:"/api/roles/:id",description:"Update role",auth:"UPDATE_ROLE"}],services:["RoleService","PrivilegeService"],tags:["RBAC","Security","Authorization"]},OrderService:{id:"OrderService",type:"service",title:"Order Service",icon:"📈",description:"Core trading engine handling order creation, matching, cancellation, and order book management.",methods:["createOrder(orderDTO, customer, market, force): OrderFullDTO","deleteOrder(id, email): void","getOrders(...filters): PageDTO<OrderFullDTO>","getOrderBook(marketType, username): Map<String, List<OrderInOrderBookDTO>>","calculateOrderFullPrice(order): Double","repayBalance(order): void","orderQueueRemover(): void (scheduled)","deleteOrderFromTable(): void (scheduled)"],responsibilities:["Order validation (price, amount, min/max)","Fund locking in customer wallet","Order matching with existing orders","Trade execution and balance transfer","Order book queries (buy/sell sides)","Order expiration handling","Queue management for order processing"],tags:["Trading","Order Book","Matching Engine"]},WalletService:{id:"WalletService",type:"service",title:"Wallet Service",icon:"💼",description:"Manages HD and account-based wallets, address generation, and on-chain transactions.",methods:["createHDWallet(request): WalletResponseHalfDTO","generateAddressForWallet(request): PageDTO<BlockChainAddressHalfDTO>","createTransaction(request): TransactionResponseDTO","createWithdrawalRequest(request, customer): WithdrawalResponseDTO","getCustomerWalletAddress(customer, coin, tokenType): WalletAddressHalfDTO","getTotalBalance(username): TotalBalances","changePassword(passwordDTO): void","exportWalletPrivateKeys(mnemonicDTO, fileName, response): void"],responsibilities:["HD wallet creation via Apie","Address generation for deposits","Withdrawal request validation and OTP","Balance queries (custodial + P2P)","QR code generation for addresses","Wallet password management","Private key export (encrypted)"],tags:["Wallet","HD Wallet","Blockchain","Security"]},ApieService:{id:"ApieService",type:"service",title:"Apie Service",icon:"⛓️",description:"Blockchain provider integration for multi-chain wallet and transaction operations.",methods:["createHDWallet(request, cryptoNetwork): CreateWalletResponse","generateHDWalletAddress(network, walletName, index): String","getWalletBalance(request, network): BtcBaseWalletBalanceResponse","checkConfirmedTransactionRegularCoins(address, coin): ConfirmedAmountDTO","createRawTransaction(request, network): TransactionResponseDTO","freezeBalance(request, network): FreezeTronResponse"],responsibilities:["Multi-chain HD wallet creation (ETH, TRON, BTC, XRP, XLM, BSC, Dash)","Hierarchical deterministic address generation","Balance queries across chains","Raw transaction creation and signing","Transaction confirmation tracking","TRON-specific operations (freeze/unfreeze)"],supportedChains:["Ethereum","TRON","Bitcoin","Ripple","Stellar","BSC","Dash"],tags:["Blockchain","Multi-chain","HD Wallet","Transactions"]},CustomerService:{id:"CustomerService",type:"service",title:"Customer Service",icon:"👥",description:"User account management, authentication, profile, and KYC orchestration.",methods:["register(userDTO): RegisterResponseDto","authenticate(email, password): Customer","getCustomerByEmail(email): Customer","updateProfile(customerId, profileDTO): Customer","submitKYC(customerId, kycDTO): KYCStatus","enable2FA(customerId): TwoFactorSecret","verify2FA(customerId, code): boolean","getLoginHistory(customerId): List<LoginHistory>"],responsibilities:["User registration with email/password","Authentication and JWT token generation","Profile management (name, phone, country)","KYC document submission","2FA setup and verification","Login history tracking","Account level management (USER, AUTHORIZED_USER)","User notifications"],tags:["User Management","Authentication","KYC"]},TradeService:{id:"TradeService",type:"service",title:"Trade Service",icon:"💹",description:"Trade execution, history, and statistics.",methods:["executeTrade(buyOrder, sellOrder, amount, price): Trade","getTrades(filters): PageDTO<TradeFullDTO>","getLastTradesHistory(marketType): List<TradeHistoryInMarketDTO>","getTradeStatistics(marketType): TradeStatistics","exportTradesToExcel(filters): byte[]"],responsibilities:["Trade execution between matched orders","Balance transfer between buyer and seller","Trade history queries","Volume and statistics calculation","Excel export for admin","Market activity tracking"],tags:["Trading","Execution","History"]},PaymentGateway:{id:"PaymentGateway",type:"service",title:"Payment Gateway",icon:"💳",description:"Interface for fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).",implementations:["VandarService","JibitService","NextPayService","SadadService","ZarinpalService","RayanPayService"],methods:["deposit(request, customer): GatewayResponseDTO","withdraw(iban, amount, trackId, description): GatewayWithdrawResponseDTO","updateDepositRequest(depositRequest, updateDTO): TomanTransaction","getWithdrawalRequests(): List<GatewayWithdrawSettlement>","incomingDepositByIdTransactions(latestRecordDateTime): List<PaymentGatewayDepositByIdTransaction>"],responsibilities:["Gateway-agnostic deposit initiation","Redirect URL generation","Callback handling and verification","Withdrawal to bank account/IBAN","Transaction status updates","Settlement reconciliation"],tags:["Payment","Fiat","IRR","Gateway"]},"orders-table":{id:"orders-table",type:"database",title:"orders Table",icon:"🗃️",description:"Stores all P2P trading orders (buy/sell, limit/market, stop, OCO).",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"market_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"order_type",type:"VARCHAR(255)",description:"LIMITED_BUY, LIMITED_SELL, MARKET_BUY, STOP_LOSS_BUY, OCO_BUY, etc."},{name:"status",type:"VARCHAR(255)",description:"IS_OPEN, PARTIALLY_EXECUTED, COMPLETELY_EXECUTED, CANCELED, EXPIRED"},{name:"amount",type:"DOUBLE",description:"Order amount in base coin"},{name:"unit_price",type:"DOUBLE",description:"Price per unit in quote coin"},{name:"executed_amount",type:"DOUBLE",description:"Amount filled so far"},{name:"remaining_amount",type:"DOUBLE",description:"Amount still open"},{name:"executed_percent",type:"DOUBLE",description:"Percentage executed"},{name:"stop",type:"DOUBLE",description:"Stop price for stop-loss orders"},{name:"expires_at",type:"DATETIME",description:"Expiration timestamp"},{name:"is_triggerred",type:"TINYINT",description:"For stop-loss/OCO orders"},{name:"side_order_id",type:"BIGINT",description:"For OCO orders"}],indexes:["customer_id","market_id","status","order_type"],relationships:["customers.id → orders.customer_id","markets.id → orders.market_id","orders.id → trades.buyer_order_id / seller_order_id"],tags:["Trading","Orders","Core"]},"customer_wallet-table":{id:"customer_wallet-table",type:"database",title:"customer_wallet Table",icon:"💰",description:"User balance tracking for custodial and P2P trading.",schema:[{name:"id",type:"BIGINT",key:"PRIMARY KEY"},{name:"customer_id",type:"BIGINT",key:"FOREIGN KEY"},{name:"currency_id",type:"BIGINT",key:"FOREIGN KEY (coin)"},{name:"custodial_credit",type:"DOUBLE",description:"Balance for OTC exchange"},{name:"p2p_credit",type:"DOUBLE",description:"Available balance for P2P trading"},{name:"p2p_blocked_credit",type:"DOUBLE",description:"Locked in open orders"},{name:"total_balance",type:"DOUBLE",description:"Sum of all credits"}],notes:["Separate balances for custodial (OTC) and P2P trading","p2p_blocked_credit is funds locked in open orders","All monetary values stored as DOUBLE (not recommended for production - use DECIMAL)"],relationships:["customers.id → customer_wallet.customer_id","COIN_ENTITY.id → customer_wallet.currency_id"],tags:["Balance","Wallet","Core"]},MarginTrading:{id:"MarginTrading",type:"service",title:"Margin Trading System",icon:"🚀",description:"Margin trading with leverage, margin calls, liquidation engine, and position management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/margin/accounts",description:"Create margin account",auth:"USER"},{method:"POST",path:"/api/margin/positions",description:"Open position",auth:"USER"},{method:"GET",path:"/api/margin/positions",description:"Get positions",auth:"USER"},{method:"POST",path:"/api/margin/close",description:"Close position",auth:"USER"}],services:["MarginService","LiquidationService"],tags:["Missing","Advanced Trading","Margin","Leverage"]},FuturesPerpetual:{id:"FuturesPerpetual",type:"service",title:"Futures & Perpetual Contracts",icon:"🚀",description:"Futures and perpetual swap contracts with funding rates and mark prices. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/futures/contracts",description:"List contracts"},{method:"POST",path:"/api/futures/positions",description:"Open futures position",auth:"USER"},{method:"GET",path:"/api/futures/funding-rate",description:"Get funding rate"}],services:["FuturesService","PerpetualService","FundingRateService"],tags:["Missing","Advanced Trading","Futures","Perpetual"]},OptionsTrading:{id:"OptionsTrading",type:"service",title:"Options Trading System",icon:"🚀",description:"Options trading with Black-Scholes pricing and Greeks calculation. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/options/chains",description:"Get options chain"},{method:"POST",path:"/api/options/positions",description:"Open options position",auth:"USER"},{method:"POST",path:"/api/options/exercise",description:"Exercise option",auth:"USER"}],services:["OptionsService","BlackScholesService","GreeksService"],tags:["Missing","Advanced Trading","Options","Derivatives"]},AMLMonitoring:{id:"AMLMonitoring",type:"service",title:"AML Transaction Monitoring",icon:"🚀",description:"Anti-Money Laundering transaction monitoring with pattern detection and SAR. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/aml/monitor",description:"Monitor transaction",auth:"ADMIN"},{method:"GET",path:"/api/aml/sar",description:"Get SAR reports",auth:"ADMIN"},{method:"POST",path:"/api/aml/risk-score",description:"Calculate risk score",auth:"ADMIN"}],services:["AMLService","TransactionMonitoringService","SARService"],tags:["Missing","Compliance","AML","Risk"]},SanctionsScreening:{id:"SanctionsScreening",type:"service",title:"Sanctions Screening System",icon:"🚀",description:"Sanctions screening against OFAC, EU, and UN lists. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/sanctions/screen",description:"Screen customer/address",auth:"ADMIN"},{method:"GET",path:"/api/sanctions/matches",description:"Get matches",auth:"ADMIN"}],services:["SanctionsService","WatchlistService"],tags:["Missing","Compliance","Sanctions","Screening"]},ColdWalletManagement:{id:"ColdWalletManagement",type:"service",title:"Cold Wallet Management",icon:"🚀",description:"Cold wallet management with HSM integration for secure key storage. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/cold-wallet/create",description:"Create cold wallet",auth:"ADMIN"},{method:"POST",path:"/api/cold-wallet/sweep",description:"Sweep to hot wallet",auth:"ADMIN"},{method:"GET",path:"/api/cold-wallet/balance",description:"Get balance",auth:"ADMIN"}],services:["ColdWalletService","HSMService"],tags:["Missing","Security","Cold Wallet","HSM"]},MultiSignatureWallets:{id:"MultiSignatureWallets",type:"service",title:"Multi-Signature Wallets",icon:"🚀",description:"Multi-signature wallet system with M-of-N threshold signatures. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/multisig/create",description:"Create multi-sig wallet",auth:"USER"},{method:"POST",path:"/api/multisig/sign",description:"Sign transaction",auth:"USER"},{method:"GET",path:"/api/multisig/pending",description:"Get pending signatures",auth:"USER"}],services:["MultiSigService","SignatureService"],tags:["Missing","Security","Multi-Sig","Wallet"]},StakingServices:{id:"StakingServices",type:"service",title:"Staking Services",icon:"🚀",description:"Staking services for earning rewards on cryptocurrencies. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/staking/stake",description:"Stake coins",auth:"USER"},{method:"POST",path:"/api/staking/unstake",description:"Unstake coins",auth:"USER"},{method:"GET",path:"/api/staking/rewards",description:"Get rewards",auth:"USER"}],services:["StakingService","RewardsService"],tags:["Missing","Financial Services","Staking","Rewards"]},LendingBorrowing:{id:"LendingBorrowing",type:"service",title:"Lending & Borrowing Platform",icon:"🚀",description:"Lending and borrowing platform with collateral management. NOT in original Java codebase.",endpoints:[{method:"POST",path:"/api/lending/borrow",description:"Borrow funds",auth:"USER"},{method:"POST",path:"/api/lending/lend",description:"Lend funds",auth:"USER"},{method:"GET",path:"/api/lending/positions",description:"Get positions",auth:"USER"}],services:["LendingService","BorrowingService","CollateralService"],tags:["Missing","Financial Services","Lending","Borrowing"]},TradingAnalytics:{id:"TradingAnalytics",type:"service",title:"Trading Analytics & Statistics",icon:"🚀",description:"Trading analytics with statistics, charts, and insights. NOT in original Java codebase.",endpoints:[{method:"GET",path:"/api/analytics/trading/stats",description:"Get trading statistics",auth:"USER"},{method:"GET",path:"/api/analytics/trading/charts",description:"Get chart data",auth:"USER"}],services:["TradingAnalyticsService","StatisticsService"],tags:["Missing","Analytics","Trading","Statistics"]}},Be=t=>kt[t]||null,wt=t=>{switch(t){case F.COMPLETED:return"✅";case F.IN_PROGRESS:return"🔄";case F.BLOCKED:return"🚫";case F.NOT_STARTED:return"⏸️";default:return"⏸️"}},xt=t=>{switch(t){case F.COMPLETED:return"#10b981";case F.IN_PROGRESS:return"#3b82f6";case F.BLOCKED:return"#ef4444";case F.NOT_STARTED:return"#6b7280";default:return"#6b7280"}},Lt=(t,o,n=!1)=>{const a=xt(o);let m="#1e3a5f";if(n){switch(o){case F.COMPLETED:m="#581c87";break;case F.IN_PROGRESS:m="#7c2d12";break;case F.BLOCKED:m="#7f1d1d";break;default:m="#4c1d95"}return`style ${t} fill:${m},stroke:#a855f7,stroke-width:4px,stroke-dasharray: 5 5,color:#e1e8f0`}switch(o){case F.COMPLETED:m="#064e3b";break;case F.IN_PROGRESS:m="#1e3a8a";break;case F.BLOCKED:m="#7f1d1d";break;default:m="#1e3a5f"}return`style ${t} fill:${m},stroke:${a},stroke-width:4px,color:#e1e8f0`},At=(t,o,n=null)=>{let a=t,m=`

  %% Project Status Styles
`,p=[];const v=new Set;return n!=null&&n.nodes&&Array.isArray(n.nodes)&&n.nodes.forEach(l=>{var c;l.locked&&[l.id,l.id.replace(/[^a-zA-Z0-9]/g,"_"),((c=l.label)==null?void 0:c.split(/\s+/)[0])||l.id].forEach(E=>v.add(E))}),Object.values(o).forEach(l=>{if(!l||!l.id)return;const c=wt(l.status),f=[l.id,l.id.replace("Controller","C"),l.id.replace("Service","S")];for(const E of f){const w=new RegExp(`(${E}\\[)([^\\]]+)(\\])`,"g"),re=a.replace(w,(ae,ee,H,de)=>{if(H.includes("✅")||H.includes("🔄")||H.includes("🚫")||H.includes("⏸️"))return ae;p.push(E);const X=v.has(E)?"🔒 ":"";return`${ee}${X}${c} ${H}${de}`});if(re!==a){a=re;const ae=l.isMissing===!0||l.isMissing==="true"||l.isMissing===1;let ee=Lt(E,l.status,ae);v.has(E)&&(ee=ee.replace(/stroke-width:(\d+)px/,"stroke-width:$1px,stroke-dasharray:5,5"),ee+=",opacity:0.85"),m+=`  ${ee}
`;break}}}),v.forEach(l=>{p.includes(l)||(m+=`  style ${l} fill:#1e3a5f,stroke:#f59e0b,stroke-width:3px,stroke-dasharray:5,5,opacity:0.85
`)}),p.length>0||v.size>0?a+m:a};Qe.initialize({startOnLoad:!1,theme:"dark",securityLevel:"loose",flowchart:{useMaxWidth:!0,htmlLabels:!0,curve:"basis",padding:20,nodeSpacing:50,rankSpacing:80,diagramPadding:20},themeVariables:{primaryColor:"#1e3a5f",primaryTextColor:"#e1e8f0",primaryBorderColor:"#60a5fa",lineColor:"#60a5fa",secondaryColor:"#151b26",tertiaryColor:"#0f1419",background:"#0f1419",mainBkg:"#0f1419",secondBkg:"#151b26",textColor:"#e1e8f0",border1:"#1c2433",border2:"#2a3441",fontSize:"18px",fontFamily:"Outfit, Inter, system-ui, sans-serif",nodeBorder:"#60a5fa",clusterBkg:"#0f1419",clusterBorder:"#2a3441",edgeLabelBackground:"#0f1419",nodeTextSize:"18px"}});const It=()=>{const{currentView:t,zoomLevel:o,setSelectedNode:n,navigateToView:a,showApiTester:m}=_e(),{tasks:p,setShowTodoPanel:v,setSelectedTask:l,getOrCreateTask:c,mapNodeToLevel:f}=We(),E=T.useRef(null),w=T.useRef(null),[re,ae]=T.useState(!0),[ee,H]=T.useState(!1),[de,X]=T.useState({x:0,y:0}),[pe,Ce]=T.useState({x:0,y:0}),[Te,xe]=T.useState({x:0,y:0}),[ke,ve]=T.useState(!1),[Se,oe]=T.useState({x:0,y:0}),[ye,ue]=T.useState(()=>{const g=localStorage.getItem("diagramLegendOpen");return g?JSON.parse(g):!1}),Le=()=>{const g=!ye;ue(g),localStorage.setItem("diagramLegendOpen",JSON.stringify(g))},[se,q]=T.useState(null),[he,h]=T.useState(null);T.useEffect(()=>{const g=async()=>{ae(!0),q(null),h(null);try{const R=Ue(t);if(!R){console.error("❌ Diagram not found in registry:",t),ae(!1);return}console.log("✅ Using diagram from registry:",t),q(R);try{const{loadNodesFromBackend:r,loadEdgesFromBackend:s}=await Ae(async()=>{const{loadNodesFromBackend:x,loadEdgesFromBackend:J}=await import("./diagramBackend-Bp3qNCYq.js");return{loadNodesFromBackend:x,loadEdgesFromBackend:J}},__vite__mapDeps([0,1,2])),y=await fetch(nt.diagramByDiagramId(t));if(y.ok){const x=await y.json();let J=[];try{J=await r(x.id||t)}catch{}let ie=[];try{ie=await s(t)}catch{ie=x.edges||[]}(J.length>0||ie.length>0)&&h({...x,nodes:J.length>0?J:x.nodes||[],edges:ie,nodeEntities:J}),J.length===0&&R.code&&setTimeout(()=>{A(t).catch(()=>{})},1e3)}}catch(r){console.warn("Could not load from DB, using registry only:",r)}}catch(R){console.error("❌ Error loading diagram from database:",R);const r=Ue(t);r&&(q(r),h(null))}finally{ae(!1)}};g();const D=()=>{console.log("💾 Diagram saved event received, reloading..."),g()};return window.addEventListener("diagram-saved",D),()=>{window.removeEventListener("diagram-saved",D)}},[t]);const A=async g=>{try{const{saveDiagramToBackend:D,extractNodesFromMermaid:R,saveNodesToBackend:r,loadDiagramFromBackend:s}=await Ae(async()=>{const{saveDiagramToBackend:O,extractNodesFromMermaid:z,saveNodesToBackend:te,loadDiagramFromBackend:we}=await import("./diagramBackend-Bp3qNCYq.js");return{saveDiagramToBackend:O,extractNodesFromMermaid:z,saveNodesToBackend:te,loadDiagramFromBackend:we}},__vite__mapDeps([0,1,2]));let y=await s(g);if(!y){const O=Ue(g);if(!O){console.error("❌ Diagram not found in DB or registry:",g);return}y=O}if(!y||!y.code)return;const x=await D(g,{title:y.title,description:y.description||y.subtitle||"",code:y.code,mermaidCode:y.code}),J=await R(y.code||"",x.id),ie=extractEdgesFromMermaid(y.code||"");J.length>0&&(await r(x.id,J),console.log(`✅ Auto-saved ${J.length} nodes for diagram: ${g}`)),ie.length>0&&(await D(g,{title:y.title,description:y.description||y.subtitle||"",code:y.code,mermaidCode:y.code,edges:ie}),console.log(`✅ Auto-saved ${ie.length} edges for diagram: ${g}`))}catch(D){console.error("Failed to auto-save diagram:",D)}};T.useEffect(()=>(se&&_(),()=>{document.querySelectorAll(".diagram-tooltip").forEach(g=>g.remove())}),[t,p,he,se]);const _=async()=>{if(!E.current||!se){ae(!se);return}ae(!0),document.querySelectorAll(".diagram-tooltip").forEach(g=>g.remove());try{E.current.innerHTML="";const g=`diagram-${Date.now()}`;let D=(he==null?void 0:he.customMermaidCode)||(he==null?void 0:he.mermaidCode)||(se==null?void 0:se.code)||"";if(!D){console.error("❌ No diagram code available, trying registry fallback");const O=Ue(t);if(O&&O.code)D=O.code,console.log("✅ Using registry code as fallback");else{console.error("❌ No diagram code available anywhere"),ae(!1);return}}console.log("📋 Using diagram code:",t,"Length:",D.length),console.log("📋 Using diagram code from database:",t);const R=At(D,p,he),r=document.createElement("div");r.className="mermaid",r.id=g,r.textContent=R,E.current.appendChild(r);const{svg:s}=await Qe.render(g+"-svg",R);r.innerHTML=s;const y=r.querySelector("svg");if(y){y.style.width="100%",y.style.height="auto",y.style.display="block",y.querySelectorAll("text").forEach(d=>{var W,K;const $=((W=d.textContent)==null?void 0:W.trim())||"";if($.match(/^flowchart_\w+_\d+$/i)||$.match(/^flowchart-\w+-\d+$/i)||$.match(/^flowchart\w+\d+$/i)||$.startsWith("flowchart")&&/\d+$/.test($)||$.includes("flowchart")&&$.match(/_\d+$/)){d.remove();return}const P=d.closest("g");if(P){const S=P.getAttribute("id")||"";if((S.match(/^flowchart_\w+_\d+$/i)||S.match(/^flowchart-\w+-\d+$/i))&&($===S||$===S.replace(/^flowchart[_-]/,""))){d.remove();return}}const k=d.closest("g");if(k&&(k.classList.contains("cluster")||((K=k.getAttribute("class"))==null?void 0:K.includes("cluster"))||k.querySelector('rect[class*="cluster"]')||k.querySelector('rect[fill*="cluster"]'))){const S=d.style.fontSize||"16px",j=parseFloat(S);d.style.fontSize=`${j*2.5}px`,d.style.fontWeight="800",d.style.fill="#ffffff",d.style.stroke="#60a5fa",d.style.strokeWidth="1px",d.style.paintOrder="stroke fill"}else{const S=d.style.fontSize||"16px",j=parseFloat(S);d.style.fontSize=`${j*1.4}px`,d.style.fontWeight="600"}});const z=y.querySelectorAll('g.cluster, g[class*="cluster"]');console.log(`🔍 Found ${z.length} cluster groups`),z.forEach((d,$)=>{const P=d.querySelector("rect");let k=0,L=0;P&&(k=parseFloat(P.getAttribute("width"))||0,L=parseFloat(P.getAttribute("height"))||0,console.log(`📦 Cluster ${$}: ${k}x${L}`),P.setAttribute("stroke-width","3"),P.setAttribute("stroke","#60a5fa"),P.setAttribute("fill","#0f1419"),P.setAttribute("fill-opacity","0.15"),P.setAttribute("rx","8"),P.setAttribute("ry","8"));const W=d.querySelectorAll("text");console.log(`📝 Found ${W.length} text elements in cluster ${$}`),W.forEach(K=>{var V;const S=((V=K.textContent)==null?void 0:V.trim())||"";if(S.length<50&&!S.includes("<br/>")&&!S.includes(`
`)&&(S.includes("Services")||S.includes("Core")||S.includes("Wallet")||S.includes("Blockchain")||S.includes("Payment")||S.includes("KYC")||S.includes("Notification")||S.includes("Trading")||S.includes("Compliance")||S.includes("Security")||S.includes("Financial")||S.includes("Analytics"))||k>300){let B=40;if(k>0&&L>0){const Y=k/200,me=L/150,le=Math.max(Y,me);B=Math.max(40,Math.min(le*30,80)),k>1e3||L>800?B=70:k>700||L>600?B=55:(k>500||L>400)&&(B=45)}console.log(`✅ Enhancing label "${S}" to ${B}px (box: ${k}x${L})`),K.style.fontSize=`${B}px !important`,K.style.fontWeight="900",K.style.fill="#ffffff",K.style.stroke="#60a5fa",K.style.strokeWidth="2.5px",K.style.paintOrder="stroke fill",K.style.fontFamily="Outfit, Inter, system-ui, sans-serif",K.style.letterSpacing="0.5px",K.setAttribute("font-size",`${B}px`),K.setAttribute("font-weight","900"),K.setAttribute("fill","#ffffff");const Z=K.getAttribute("style")||"";K.setAttribute("style",Z.replace(/font-size[^;]*;?/gi,"")+`font-size: ${B}px !important;`)}})}),y.querySelectorAll("rect").forEach(d=>{var W,K,S,j;const $=parseFloat(d.getAttribute("width"))||0,P=parseFloat(d.getAttribute("height"))||0,k=d.closest("g"),L=k&&(((W=k.id)==null?void 0:W.includes("flowchart"))||((K=k.id)==null?void 0:K.includes("graph"))||((j=(S=k.querySelector("text"))==null?void 0:S.textContent)==null?void 0:j.includes("<br/>")));$>400&&P>300&&!L&&(d.setAttribute("stroke-width","3"),d.setAttribute("stroke","#60a5fa"),d.setAttribute("fill-opacity","0.15"),d.setAttribute("rx","8"),d.setAttribute("ry","8"))});const we=["Core Services","Wallet Services","Blockchain","Payment Gateways","KYC Identity","Notifications","Advanced Trading","Compliance","Security","Financial Services","Analytics","External Clients","Security Layer","REST API Layer","Business Logic","Data Layer","Admin Management","User Management","Trading","Wallets","OTC Exchange","Support","Promotions","Compliance & Risk","Security Enhancements","Analytics & Reporting"];y.querySelectorAll("text").forEach(d=>{var W,K,S;const $=((W=d.textContent)==null?void 0:W.trim())||"",P=we.some(j=>$.includes(j)||j.includes($));let k=d.parentElement,L=!1;for(;k&&k!==y;){if((K=k.classList)!=null&&K.contains("cluster")||(S=k.getAttribute("class"))!=null&&S.includes("cluster")||k.tagName==="g"&&k.querySelector('rect[class*="cluster"]')){L=!0;break}k=k.parentElement}if(!L&&!P){const j=parseFloat(d.getAttribute("y"))||0,V=parseFloat(d.getAttribute("x"))||0;Array.from(y.querySelectorAll("rect")).filter(Z=>{const Y=parseFloat(Z.getAttribute("x"))||0,me=parseFloat(Z.getAttribute("y"))||0,le=parseFloat(Z.getAttribute("width"))||0,be=parseFloat(Z.getAttribute("height"))||0;return Math.abs(V-Y)<50&&Math.abs(j-me)<30&&le>200&&be>100}).length>0&&(L=!0)}if(L||P){let j=0,V=0,B=d.parentElement;for(;B&&B!==y;){const le=B.querySelector("rect");if(le){const be=parseFloat(le.getAttribute("width"))||0,Pe=parseFloat(le.getAttribute("height"))||0;if(be>300&&Pe>200){j=be,V=Pe;break}}B=B.parentElement}const Z=24;let Y;if(j>0&&V>0){const le=Math.max(1.5,Math.min(j/150,V/100));Y=Math.max(Z*le*2.5,40),j>1e3||V>800?Y=Math.max(Y*1.8,60):(j>600||V>500)&&(Y=Math.max(Y*1.4,50))}else{const le=parseFloat(d.style.fontSize||d.getAttribute("font-size")||"16px")||16;Y=Math.max(le*3.5,40)}d.style.fontSize=`${Y}px`,d.style.fontWeight="900",d.style.fill="#ffffff",d.style.stroke="#60a5fa",d.style.strokeWidth="2.5px",d.style.paintOrder="stroke fill",d.style.fontFamily="Outfit, Inter, system-ui, sans-serif",d.style.letterSpacing="0.5px",d.setAttribute("font-weight","900"),d.setAttribute("font-size",`${Y}px`),d.setAttribute("fill","#ffffff");const me=d.closest("g");me&&(me.style.zIndex="1000",d.style.zIndex="1001"),console.log(`✅ Enhanced cluster label: "${$}" to ${Y}px (box: ${j}x${V})`)}}),y.querySelectorAll("g").forEach(d=>{const $=d.getAttribute("id")||"";if($.match(/^flowchart_\w+_\d+$/i)||$.match(/^flowchart-\w+-\d+$/i)){const P=d.querySelectorAll("rect"),k=d.querySelectorAll("text");!Array.from(k).some(W=>{var S;const K=((S=W.textContent)==null?void 0:S.trim())||"";return!K.match(/^flowchart/i)&&K.length>0})&&P.length===0&&d.remove()}}),y.querySelectorAll('g[id*="flowchart"], g[id*="graph"]').forEach(d=>{const $=d.querySelectorAll("rect");let P=null,k=0;if($.forEach(S=>{var le,be;const j=S.closest("g");if(j&&((le=j.classList)!=null&&le.contains("cluster")||(be=j.getAttribute("class"))!=null&&be.includes("cluster")))return;const V=parseFloat(S.getAttribute("width"))||0,B=parseFloat(S.getAttribute("height"))||0,Z=V*B,Y=S.getAttribute("fill"),me=parseFloat(S.getAttribute("fill-opacity")||"1");Z>k&&Y&&Y!=="none"&&me>.1&&(k=Z,P=S)}),!P&&$.length>0&&$.forEach(S=>{const j=parseFloat(S.getAttribute("width"))||0,V=parseFloat(S.getAttribute("height"))||0,B=j*V;B>k&&(k=B,P=S)}),!P)return;$.forEach(S=>{if(S!==P){const j=parseFloat(S.getAttribute("x"))||0,V=parseFloat(S.getAttribute("y"))||0,B=parseFloat(S.getAttribute("width"))||0,Z=parseFloat(S.getAttribute("height"))||0,Y=parseFloat(P.getAttribute("x"))||0,me=parseFloat(P.getAttribute("y"))||0,le=parseFloat(P.getAttribute("width"))||0,be=parseFloat(P.getAttribute("height"))||0,Pe=Math.max(0,Math.min(j+B,Y+le)-Math.max(j,Y)),Fe=Math.max(0,Math.min(V+Z,me+be)-Math.max(V,me)),Je=Pe*Fe,N=B*Z;Je>N*.8&&N<le*be&&S.remove()}});let L=parseFloat(P.getAttribute("width"))||200,W=parseFloat(P.getAttribute("height"))||100;L<120&&(L=120),W<70&&(W=70),L>400&&(L=400),W>250&&(W=250),P.setAttribute("width",L),P.setAttribute("height",W),P.getAttribute("rx")||P.setAttribute("rx","8"),P.getAttribute("ry")||P.setAttribute("ry","8");const K=P.getAttribute("stroke");(!K||K==="none")&&P.setAttribute("stroke","#60a5fa"),P.getAttribute("stroke-width")||P.setAttribute("stroke-width","2")}),setTimeout(async()=>{await x(y,t)},1e3)}const x=async(O,z)=>{try{const{API_ENDPOINTS:te}=await Ae(async()=>{const{API_ENDPOINTS:d}=await Promise.resolve().then(()=>je);return{API_ENDPOINTS:d}},void 0),we=await fetch(te.diagramByDiagramId(z));if(!we.ok){console.warn("Could not load diagram for position saving");return}const Oe=await we.json(),Ie=O.querySelectorAll('g[id*="flowchart"], g[id*="graph"]'),Q=[];if(Ie.forEach(d=>{const $=d.getAttribute("id")||"";let P=$;if($.includes("_")){const Y=$.split("_");Y.length>=2&&(Y[0]==="flowchart"||Y[0]==="graph")&&(P=Y.slice(1,-1).join("_")||Y[1]||$)}const k=d.getAttribute("transform")||"",L=d.querySelector("rect");if(!L)return;let W=0,K=0;const S=k.match(/translate\(([^,]+),([^)]+)\)/);if(S)W=parseFloat(S[1])||0,K=parseFloat(S[2])||0;else try{const Y=L.getBBox();W=Y.x,K=Y.y}catch{return}const j=parseFloat(L.getAttribute("width"))||200,V=parseFloat(L.getAttribute("height"))||100,B=d.querySelector("text");let Z="";if(B){const Y=B.querySelectorAll("tspan");Y.length>0?Z=Array.from(Y).map(me=>me.textContent||"").join(" "):Z=B.textContent||""}Q.push({nodeId:P,position:{x:Math.round(W),y:Math.round(K)},size:{width:Math.round(j),height:Math.round(V)},label:Z.substring(0,255)})}),Q.length>0){let d=0;for(const $ of Q)try{const P=await fetch(`${te.nodes}?diagramId=${Oe.id}&nodeId=${$.nodeId}`);if(P.ok){const k=await P.json();if(k&&k.length>0){const L=k[0];(await fetch(te.nodeById(L.id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({position:$.position,style:{...L.style||{},width:$.size.width,height:$.size.height}})})).ok&&d++}}}catch(P){console.warn("Could not update node position:",$.nodeId,P)}d>0&&console.log(`✅ Saved positions for ${d}/${Q.length} nodes`)}}catch(te){console.warn("Could not save node positions:",te)}},J=window.location.hash,ie=()=>{const O=window.onhashchange;window.addEventListener("hashchange",z=>{const te=window.location.hash.replace("#","");if(console.log("🔗 Hash change detected:",te),te.startsWith("Level")&&p[te])return z.preventDefault(),z.stopPropagation(),window.history.replaceState(null,"",J||"#"),l(te),v(!0),!1;if(te==="database"||te==="services"||te==="controllers"||te==="flows"||te==="external"||te==="advanced")return z.preventDefault(),z.stopPropagation(),window.history.replaceState(null,"",J||"#"),a(te),!1},!0)};setTimeout(()=>{ie(),I(),ae(!1)},100)}catch(g){console.error("Mermaid rendering error:",g),ae(!1),E.current.innerHTML=`
        <div class="empty-state">
          <div class="empty-state-icon">⚠️</div>
          <div class="empty-state-text">Failed to render diagram</div>
          <div style="font-size: 11px; margin-top: 8px; color: var(--text-muted); max-width: 500px;">
            ${g.message||"Check browser console (F12) for details"}
          </div>
        </div>
      `}},I=()=>{if(!E.current)return;const g=E.current.querySelector("svg");if(!g)return;g.querySelectorAll('.node, g[id*="flowchart"]').forEach(R=>{R.style.cursor="pointer",R.addEventListener("click",async r=>{var me,le,be,Pe,Fe,Je;r.stopPropagation(),r.preventDefault();let s=R.getAttribute("id")||((me=R.closest("g"))==null?void 0:me.getAttribute("id"))||"";if(s&&s.includes("_")){const N=s.split("_");if(N.length>=2&&(N[0]==="flowchart"||N[0]==="graph")){const U=N.findIndex(ce=>/^[A-Z]/.test(ce));U>=0?s=N[U]:N.length>=2&&(s=N[1])}}const y=R.closest("g");if(y&&!s&&(((le=y.className)==null?void 0:le.baseVal)||y.className||"").includes("node")){const U=y.querySelector("rect");if(U){const ce=U.getAttribute("id")||"";ce&&(s=ce.replace(/^flowchart_|^graph_/,"").split("_")[0])}}const x=R.querySelector("text, .nodeLabel");if(!x)return;let J="";const ie=x.querySelectorAll("tspan");ie.length>0?J=Array.from(ie).map(N=>{var U;return((U=N.textContent)==null?void 0:U.trim())||""}).join(`
`):J=((be=x.textContent)==null?void 0:be.trim())||"",J=J.replace(/[✅🔄⏸️🚫]/g,"").trim();const O=J.replace(/\s+/g," ").trim();let z=J.split(/\n|<br\/>|•/)[0].trim();z=z.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").trim();const te=z.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);te&&(z=te[1].trim()),console.log("🖱️ Clicked node:",z,"| Node ID:",s,"| Original text:",J.substring(0,50));const we=R.closest("g");if(we){const U=((Fe=(((Pe=we.querySelector("title"))==null?void 0:Pe.textContent)||"").match(/#(\w+)/))==null?void 0:Fe[1])||we.getAttribute("data-click")||"";if(U){if(U.startsWith("Level")&&p[U]){console.log("✅ Found Level task from click handler:",U),l(U),v(!0);return}const ce=U.replace(/^#/,"");if(ce==="database"||ce==="services"||ce==="controllers"||ce==="flows"||ce==="external"||ce==="advanced"){console.log("✅ Found diagram navigation from click handler:",ce),a(ce);return}}}const Oe=O.match(/Level(\d+)_(\w+)/i);if(Oe){const N=Oe[0];if(p[N]){console.log("✅ Found Level task ID in node text:",N),l(N),v(!0);return}}if(["legend","project status","click components","completed","in progress","not started","blocked"].some(N=>z.toLowerCase().includes(N)||J.toLowerCase().includes(N)))return;const d=z.replace(/[✅🔄⏸️🚫🔒]/g,"").replace(/<br\s*\/?>/gi," ").replace(/\s+/g," ").trim();if([O.includes("[ADVANCED]"),O.includes("🚀"),d.toLowerCase().includes("advanced"),s&&(s.includes("Margin")||s.includes("Futures")||s.includes("Options")||s.includes("AML")||s.includes("Sanctions")||s.includes("Staking")||s.includes("Lending")||s.includes("ColdWallet")||s.includes("MultiSig")||s.includes("Analytics")||s.includes("TradingAnalytics")||s.includes("BusinessAnalytics")||s.includes("AdminDash")||s.includes("DataWarehouse")||s.includes("Fees")||s.includes("Support")||s.includes("Liquidity")||s.includes("MarketData")||s.includes("Infrastructure")||s.includes("AdvancedOrders")||s.includes("TradingBots")||s.includes("Regulatory")||s.includes("Tax")||s.includes("Risk")||s.includes("HSM")||s.includes("AdvancedSec")||s.includes("SecMonitoring")||s.includes("Yield")||s.includes("Airdrops")||s.includes("Listing"))].some(Boolean)){console.log("🚀 Detected advanced node - Node ID:",s,"Clean name:",d);const N=[s,d,z,d.split(/\s+/)[0],d.replace(/\s+/g,""),d.replace(/Controller|Service|C|S$/i,"").trim(),(Je=d.match(/(?:Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|Analytics|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing)/i))==null?void 0:Je[0],d.replace(/^.*?(Margin|Futures|Options|AML|Sanctions|Staking|Lending|ColdWallet|MultiSig|TradingAnalytics|BusinessAnalytics|AdminDash|DataWarehouse|Fees|Support|Liquidity|MarketData|Infrastructure|AdvancedOrders|TradingBots|Regulatory|Tax|Risk|HSM|AdvancedSec|SecMonitoring|Yield|Airdrops|Listing).*$/i,"$1")].filter(Boolean).filter((U,ce,Me)=>Me.indexOf(U)===ce);console.log("🚀 Trying name variations:",N);for(const U of N){if(!U)continue;const ce=f(U);if(ce&&p[ce]){console.log("✅ Advanced node mapped to Level task:",U,"->",ce),l(ce),v(!0);return}}console.warn("⚠️ Advanced node clicked, no Level task found. Node ID:",s,"Name:",d,"Variations tried:",N),a("advanced");return}const k=O.toLowerCase(),L=d.toLowerCase();if(k.includes("database")&&(k.includes("81")||k.includes("tables"))&&!k.includes("services")&&!k.includes("service")){console.log("Navigation node clicked: database"),a("database");return}if((k.includes("controllers")||L==="controllers")&&(k.includes("25+")||k.includes("25"))){console.log("Navigation node clicked: controllers"),a("controllers");return}if((k.includes("services")||L==="services")&&!k.includes("database")&&!k.includes("advanced")&&(k.includes("core services")||k.includes("wallet services")||k.includes("service layer")||L==="services")){console.log("Navigation node clicked: services"),a("services");return}if(k.includes("flows")||k.includes("key flows")){console.log("Navigation node clicked: flows"),a("flows");return}if(k.includes("external")||k.includes("integrations")){console.log("Navigation node clicked: external"),a("external");return}let W=null;const K=[d,d.split(/\s+/)[0],d.replace(/\s+/g,""),d+"Controller",d+"Service",d.replace(/Controller$/i,"").trim()+"Controller",d.replace(/Service$/i,"").trim()+"Service",d.replace(/C$/,"Controller"),d.replace(/S$/,"Service"),d.replace(/^Level\s*\d+[:\s]*/i,""),d.replace(/\s*\[ADVANCED\]/i,"")];for(const N of K){const U=f(N);if(U&&p[U]){W=U,console.log("✅ Mapped via mapNodeToLevel:",N,"->",U);break}}if(!W)for(const N of K){if(N.startsWith("Level")&&p[N]){W=N,console.log("✅ Found Level task directly:",N);break}try{const U=await c(N);if(U&&U.id&&U.id.startsWith("Level")){W=U.id,console.log("✅ Mapped via getOrCreateTask:",N,"->",W);break}}catch(U){console.warn("Error mapping task:",N,U)}}if(!W){const N={admin:"Level13_AdminRBAC",customer:"Level3_CustomerIdentity",user:"Level3_CustomerIdentity",order:"Level7_TradingEngine",trade:"Level7_TradingEngine",wallet:"Level5_WalletServices",deposit:"Level5_WalletServices",withdraw:"Level5_WalletServices",payment:"Level11_PaymentGateways",gateway:"Level11_PaymentGateways",blockchain:"Level6_Blockchain",market:"Level8_MarketManagement",coin:"Level8_MarketManagement",email:"Level4_Notifications",sms:"Level4_Notifications",notification:"Level4_Notifications",ticket:"Level15_SupportContent",blog:"Level15_SupportContent",gift:"Level16_Promotional",referral:"Level16_Promotional",exchange:"Level14_OTCExchange",role:"Level13_AdminRBAC",security:"Level2_DatabaseAuth",auth:"Level2_DatabaseAuth",jwt:"Level2_DatabaseAuth",kyc:"Level12_KYCIdentity",identity:"Level12_KYCIdentity",finnotech:"Level12_KYCIdentity",jibit:"Level12_KYCIdentity"},U=d.toLowerCase();for(const[ce,Me]of Object.entries(N))if(U.includes(ce)&&p[Me]){W=Me,console.log("⚠️ Using fallback mapping:",d,"->",Me,"(keyword:",ce+")");break}!W&&p.Level1_ProjectSetup&&(W="Level1_ProjectSetup",console.warn("⚠️ Using ultimate fallback (Level1) for node:",d)),W||(console.error("❌ Could not map diagram node to any Level task:",{original:z,cleaned:d,variations:K,nodeId:s}),W="Level1_ProjectSetup")}(!W||!p[W])&&(console.error("❌ Invalid taskIdToUse, using Level1 as fallback:",W),W="Level1_ProjectSetup");let S=null;console.log("🔍 Looking for node details:",{nodeName:z,nodeId:s,possibleTaskIds,taskIdToUse:W});const j=z.replace(/^Level\s*\d+[:\s]*/i,"").replace(/\s*\[ADVANCED\]/i,"").replace(/🚀\s*/g,"").replace(/\s+/g,"").trim(),V=[];s&&(V.push(s),s.endsWith("C")&&s.length>1&&V.push(s.slice(0,-1)+"Controller"),s.endsWith("S")&&s.length>1&&V.push(s.slice(0,-1)+"Service")),V.push(j,j+"Controller",j+"Service",j.replace(/C$/,"Controller"),j.replace(/S$/,"Service"),j.replace(/Controller$/,""),j.replace(/Service$/,""),z.replace(/\s+/g,"")+"Controller",z.replace(/\s+/g,"")+"Service",z.replace(/\s+/g,""),z);const B=z.match(/(\w+)\s*Controller/i);B&&V.push(B[1]+"Controller");const Z=z.match(/(\w+)\s*Service/i);Z&&V.push(Z[1]+"Service");const Y=[...new Set(V.filter(N=>N&&N.length>0))];console.log("🔍 Trying variations:",Y);for(const N of Y){const U=Be(N);if(U&&U.endpoints&&U.endpoints.length>0){S=N,console.log("✅ Match found:",N);break}}if(!S)for(const N of possibleTaskIds){const U=Be(N);if(U&&U.endpoints&&U.endpoints.length>0){S=N,console.log("✅ Match found with taskId:",N);break}}console.log("📌 Final nodeIdForApiTester:",S),S?(n(S),console.log("✅ Set selectedNode to:",S)):(n(null),console.log("⚠️ No matching nodeDetails found for API tester")),!m&&(l(W),v(!0))}),R.addEventListener("mouseenter",r=>{var $,P,k;document.querySelectorAll(".diagram-tooltip").forEach(L=>L.remove());const s=R.getBoundingClientRect(),y=R.querySelector("text, .nodeLabel");if(!y)return;let x="";const J=y.querySelectorAll("tspan");J.length>0?x=Array.from(J).map(L=>{var W;return((W=L.textContent)==null?void 0:W.trim())||""}).join(`
`):x=(($=y.textContent)==null?void 0:$.trim())||"";const ie=x;x=x.replace(/[✅🔄⏸️🚫]/g,"").trim();let O=ie.split(/\n|<br\/>|•/)[0].trim();O=O.replace(/[✅🔄⏸️🚫]/g,"").trim();const z=O.match(/^(.+?)(GET|POST|PUT|DELETE|PATCH)/);z&&(O=z[1].trim());const te=O||"Component";if(console.log("=== HOVER DEBUG ==="),console.log("Full node text:",x.substring(0,200)),console.log("Extracted node name:",O),["legend","project status","click components","completed","in progress","not started","blocked"].some(L=>O.toLowerCase().includes(L)||x.toLowerCase().includes(L)))return;const Ie=[O,O+"Controller",O+"Service",O.replace(/C$/,"Controller"),O.replace(/S$/,"Service"),O.replace(/Controller$/,"")+"Controller",O.replace(/Service$/,"")+"Service",O.replace(/\s+/g,""),O.split(/\s+/)[0],O.split(/\s+/)[0]+"Controller",O.split(/\s+/)[0]+"Service"];console.log("Trying to match with IDs:",Ie);let Q=null,d=null;for(const L of Ie)if(Q=Be(L),Q){console.log("✅ Found node details for ID:",L),console.log("   Endpoints count:",((P=Q.endpoints)==null?void 0:P.length)||0);break}for(const L of Ie)if(p[L]){d=p[L],console.log("Found task info for:",L);break}!Q&&!d&&console.log("No details found for node:",O,"Tried IDs:",Ie);{const L=document.createElement("div");L.className="diagram-tooltip",L.style.position="fixed",window.innerWidth-s.right>500?L.style.left=`${s.right+20}px`:L.style.right=`${window.innerWidth-s.left+20}px`;const K=s.top;L.style.top=`${Math.max(10,Math.min(K,window.innerHeight-400))}px`,L.setAttribute("data-tooltip","true");let S="";if(!Q){let j=x.split(/\n/).map(B=>B.trim()).filter(B=>B);const V=[];if(console.log("Raw node text:",x),console.log("Lines after split:",j),j.length===1&&((k=j[0].match(/(GET|POST|PUT|DELETE|PATCH)/g))==null?void 0:k.length)>1){console.log("Detected concatenated endpoints, splitting...");const B=j[0],Z=/(GET|POST|PUT|DELETE|PATCH)\s*(\/[^\s]+?)(?=(?:GET|POST|PUT|DELETE|PATCH)|$)/g,Y=B.matchAll(Z);for(const me of Y){const le=me[2].trim();V.push({method:me[1],path:le}),console.log("Found endpoint:",me[1],le)}}else j.forEach(B=>{const Z=B.match(/(GET|POST|PUT|DELETE|PATCH)\s+(\/[^\s]+)/);Z&&(V.push({method:Z[1],path:Z[2]}),console.log("Found endpoint:",Z[1],Z[2]))});console.log("Total endpoints extracted:",V.length),(V.length>0||j.length>1)&&(Q={title:te,icon:O.includes("Controller")?"🎛️":O.includes("Service")?"⚙️":O.includes("Database")||O.includes("Table")?"💾":"📦",description:`Component with ${V.length} endpoint${V.length!==1?"s":""}`,endpoints:V.length>0?V:null})}if(Q){const j=Q.title||te;S+=`
              <div class="tooltip-header">
                <span class="tooltip-icon">${Q.icon||"📦"}</span>
                <span class="tooltip-title">${j}</span>
              </div>
              <div class="tooltip-description">${Q.description||"Component details"}</div>
            `,Q.endpoints&&Q.endpoints.length>0&&(console.log(`Rendering ${Q.endpoints.length} endpoints for ${Q.title}`),S+='<div class="tooltip-section"><strong>📡 Endpoints:</strong></div>',Q.endpoints.slice(0,10).forEach((B,Z)=>{const Y={GET:"#10b981",POST:"#3b82f6",PUT:"#f59e0b",DELETE:"#ef4444",PATCH:"#a855f7"}[B.method]||"#6b7280";console.log(`  Endpoint ${Z+1}: ${B.method} ${B.path}`),S+=`
                  <div class="tooltip-endpoint">
                    <span class="endpoint-method" style="background: ${Y}">${B.method}</span>
                    <span class="endpoint-path">${B.path}</span>
                  </div>
                  ${B.description?`<div class="endpoint-desc">→ ${B.description}</div>`:""}
                `}),Q.endpoints.length>10&&(S+=`<div class="endpoint-desc" style="text-align: center; margin-top: 8px; font-style: italic;">... and ${Q.endpoints.length-10} more</div>`)),Q.services&&Q.services.length>0&&(S+=`<div class="tooltip-section"><strong>⚙️ Uses:</strong> ${Q.services.slice(0,5).join(", ")}</div>`),Q.tables&&Q.tables.length>0&&(S+=`<div class="tooltip-section"><strong>💾 Tables:</strong> ${Q.tables.slice(0,5).join(", ")}</div>`),Q.schema&&(S+=`<div class="tooltip-section"><strong>📋 Columns:</strong> ${Object.keys(Q.schema).slice(0,6).join(", ")}</div>`)}if(d){if(!Q){const Z=d.title||te;S=`
                <div class="tooltip-header">
                  <span class="tooltip-icon">${d.category==="Infrastructure"?"🏗️":d.category==="Core Services"?"⚙️":d.category==="Business Logic"?"💼":d.category==="Integration"?"🔗":d.category==="Security"?"🔐":d.category==="Documentation"?"📚":"📦"}</span>
                  <span class="tooltip-title">${Z}</span>
                </div>
                <div class="tooltip-description">${d.description||"Task details"}</div>
              `+S}const V={completed:"#10b981",in_progress:"#3b82f6",blocked:"#ef4444",not_started:"#6b7280"}[d.status]||"#6b7280",B={completed:"✅",in_progress:"🔄",blocked:"🚫",not_started:"⏸️"}[d.status]||"⏸️";S+=`
              <div class="tooltip-project">
                <div class="project-status" style="color: ${V}">
                  ${B} <strong>Status:</strong> ${d.status.replace(/_/g," ").toUpperCase()}
                </div>
                <div class="project-progress">
                  ⏱️ ${d.actualHours}h / ${d.estimatedHours}h estimated
                </div>
                <div class="project-hint">💡 Click to manage task</div>
              </div>
            `}(!S||S.trim()==="")&&(S=`
              <div class="tooltip-header">
                <span class="tooltip-icon">📦</span>
                <span class="tooltip-title">${te}</span>
              </div>
              <div class="tooltip-description">Component from diagram</div>
              <div class="tooltip-project">
                <div class="project-hint">💡 Click to track progress</div>
              </div>
            `),L.innerHTML=S,document.body.appendChild(L),R._tooltip=L}}),R.addEventListener("mouseleave",r=>{R._tooltip&&(R._tooltip.remove(),R._tooltip=null),document.querySelectorAll(".diagram-tooltip").forEach(s=>s.remove())})})},b=g=>{document.querySelectorAll(".diagram-tooltip").forEach(R=>R.remove()),!g.target.closest('g[id*="flowchart"], g[id*="graph"], .node, rect, path')&&g.button===0&&w.current&&(ve(!0),xe({x:g.clientX,y:g.clientY}),oe({x:w.current.scrollLeft,y:w.current.scrollTop}),g.preventDefault())},G=g=>{if(ke&&w.current){const D=g.clientX-Te.x,R=g.clientY-Te.y;w.current.scrollLeft=Se.x-D,w.current.scrollTop=Se.y-R}},u=()=>{H(!1),ve(!1)},C=g=>{if(document.querySelectorAll(".diagram-tooltip").forEach(D=>D.remove()),g.ctrlKey||g.metaKey||!g.target.closest('g[id*="flowchart"], g[id*="graph"]')){g.preventDefault();const D=g.deltaY>0?-.1:.1,R=Math.max(.3,Math.min(3,o+D));if(w.current&&E.current){const r=w.current.getBoundingClientRect(),s=g.clientX-r.left,y=g.clientY-r.top,x=R/o,J=(s-w.current.scrollLeft)*(1-x),ie=(y-w.current.scrollTop)*(1-x);setZoomLevel(R),setTimeout(()=>{w.current&&(w.current.scrollLeft+=J,w.current.scrollTop+=ie)},0)}else setZoomLevel(R)}},{getProgress:M}=We(),ne=M();return e.jsxs("div",{className:"diagram-canvas",onWheel:C,children:[e.jsxs("div",{className:`diagram-legend ${ye?"open":"closed"}`,children:[e.jsxs("button",{className:"legend-toggle",onClick:Le,title:ye?"Close project status":"Open project status",children:[e.jsx("span",{className:"legend-toggle-icon",children:ye?"▼":"▶"}),e.jsx("span",{className:"legend-title",children:"Project Status"}),e.jsxs("span",{className:"legend-badge",children:[ne.percentage,"%"]})]}),ye&&e.jsxs("div",{className:"legend-content",children:[e.jsxs("div",{className:"legend-items",children:[e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"✅"}),"Completed"]}),e.jsx("span",{style:{fontWeight:600,color:"#10b981"},children:ne.completed})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🔄"}),"In Progress"]}),e.jsx("span",{style:{fontWeight:600,color:"#3b82f6"},children:ne.inProgress})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"⏸️"}),"Not Started"]}),e.jsx("span",{style:{fontWeight:600,color:"#6b7280"},children:ne.notStarted})]}),e.jsxs("div",{className:"legend-item",children:[e.jsxs("span",{children:[e.jsx("span",{className:"legend-emoji",children:"🚫"}),"Blocked"]}),e.jsx("span",{style:{fontWeight:600,color:"#ef4444"},children:ne.blocked})]})]}),e.jsxs("div",{className:"legend-progress",children:[e.jsx("div",{className:"legend-progress-bar",children:e.jsx("div",{className:"legend-progress-fill",style:{width:`${ne.percentage}%`}})}),e.jsxs("span",{className:"legend-progress-text",children:[ne.percentage,"%"]})]}),e.jsx("div",{className:"legend-hint",children:"Click components to track"})]})]}),e.jsx("div",{ref:w,className:`canvas-viewport ${ke?"panning":""} ${ee?"dragging":""}`,onMouseDown:b,onMouseMove:G,onMouseUp:u,onMouseLeave:u,onWheel:C,onContextMenu:g=>g.preventDefault(),style:{cursor:ke?"grabbing":"grab"},children:e.jsxs("div",{className:"canvas-content",style:{transform:`scale(${o})`,transformOrigin:"0 0",transition:ke?"none":"transform 0.1s ease-out"},children:[re&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsxs("div",{className:"loading-text",children:["Rendering ",(se==null?void 0:se.title)||t,"..."]})]}),!se&&!re&&e.jsxs("div",{className:"loading-container",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("div",{className:"loading-text",children:"Loading diagram..."})]}),e.jsx("div",{ref:E,className:"diagram-container interactive"})]})})]})},Rt=()=>{const{zoomLevel:t,zoomIn:o,zoomOut:n,resetZoom:a,isFullscreen:m,toggleFullscreen:p,currentView:v,navigateToView:l}=_e(),[c,f]=T.useState(!1),E=it(),w=E.filter(ee=>ee.type==="composite"||ee.type==="detail"),re=E.find(ee=>ee.id===v),ae=()=>{p(),document.fullscreenElement&&document.exitFullscreen()};return e.jsxs("div",{className:"zoom-controls",children:[m&&e.jsxs("div",{className:"fullscreen-tab-switcher",children:[e.jsx("button",{className:"tab-switcher-btn icon-only",onClick:()=>f(!c),title:(re==null?void 0:re.title)||"Switch diagram view",children:e.jsx("span",{className:"current-tab-icon",children:(re==null?void 0:re.icon)||"📊"})}),c&&e.jsx("div",{className:"tab-dropdown",children:w.map(ee=>e.jsx("button",{className:`tab-option icon-only ${v===ee.id?"active":""}`,onClick:()=>{l(ee.id),f(!1)},title:ee.title,children:e.jsx("span",{className:"tab-option-icon",children:ee.icon})},ee.id))})]}),m&&e.jsx("button",{className:"zoom-btn exit-fullscreen",onClick:ae,title:"Exit Fullscreen",children:"✕"}),e.jsx("button",{className:"zoom-btn",onClick:o,title:"Zoom In",children:"+"}),e.jsxs("div",{className:"zoom-level",children:[Math.round(t*100),"%"]}),e.jsx("button",{className:"zoom-btn",onClick:n,title:"Zoom Out",children:"−"}),e.jsx("button",{className:"zoom-btn",onClick:a,title:"Reset Zoom",children:"⟲"})]})},Pt=()=>{const{selectedNode:t,setSelectedNode:o}=_e(),n=Be(t);if(!n)return null;const a=l=>!l||l.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Endpoints"}),l.map((c,f)=>e.jsxs("div",{className:"node-card",style:{marginBottom:"8px",padding:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"4px"},children:[e.jsx("span",{className:"node-tag",style:{background:c.method==="GET"?"#10b981":c.method==="POST"?"#3b82f6":c.method==="PUT"?"#f59e0b":c.method==="DELETE"?"#ef4444":"var(--bg-secondary)",color:"#fff"},children:c.method}),e.jsx("code",{style:{fontSize:"12px",color:"var(--accent-primary)"},children:c.path})]}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:c.description}),c.auth&&e.jsxs("div",{style:{fontSize:"10px",color:"var(--text-muted)",marginTop:"4px"},children:["🔒 Requires: ",c.auth]})]},f))]}),m=l=>!l||l.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Methods"}),l.map((c,f)=>e.jsx("div",{style:{padding:"8px 12px",background:"var(--bg-tertiary)",borderRadius:"6px",marginBottom:"6px",fontSize:"11px",fontFamily:"'JetBrains Mono', 'Fira Code', monospace",color:"var(--text-secondary)",lineHeight:"1.6"},children:c},f))]}),p=l=>!l||l.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Responsibilities"}),e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:l.map((c,f)=>e.jsxs("li",{style:{padding:"8px 0",fontSize:"12px",color:"var(--text-secondary)",display:"flex",gap:"8px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)"},children:"•"}),e.jsx("span",{children:c})]},f))})]}),v=l=>!l||l.length===0?null:e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Schema"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:l.map((c,f)=>e.jsxs("div",{style:{padding:"6px 0",borderBottom:f<l.length-1?"1px solid var(--border-primary)":"none"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"2px"},children:[e.jsx("span",{style:{color:"var(--accent-primary)",fontWeight:600},children:c.name}),e.jsx("span",{style:{color:"var(--text-muted)"},children:c.type}),c.key&&e.jsx("span",{className:"node-tag",style:{fontSize:"9px",padding:"2px 6px"},children:c.key})]}),c.description&&e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"10px",marginLeft:"0"},children:c.description})]},f))})]});return e.jsxs("div",{className:"detail-panel",children:[e.jsxs("div",{className:"detail-panel-header",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsx("span",{style:{fontSize:"24px"},children:n.icon}),e.jsxs("div",{children:[e.jsx("div",{className:"detail-panel-title",children:n.title}),e.jsx("div",{style:{fontSize:"11px",color:"var(--text-muted)"},children:n.type})]})]}),e.jsx("button",{className:"detail-panel-close",onClick:()=>o(null),children:"✕"})]}),e.jsxs("div",{className:"detail-panel-content",children:[e.jsx("p",{style:{fontSize:"13px",color:"var(--text-secondary)",lineHeight:"1.6",marginBottom:"16px"},children:n.description}),n.tags&&e.jsx("div",{className:"node-card-meta",style:{marginBottom:"20px"},children:n.tags.map(l=>e.jsx("span",{className:"node-tag",children:l},l))}),a(n.endpoints),m(n.methods),p(n.responsibilities),v(n.schema),n.services&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Services Used"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:n.services.map(l=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-secondary)",color:"#fff"},children:l},l))})]}),n.implementations&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Implementations"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:n.implementations.map(l=>e.jsx("span",{className:"node-tag",children:l},l))})]}),n.supportedChains&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Supported Chains"}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px"},children:n.supportedChains.map(l=>e.jsx("span",{className:"node-tag",style:{background:"var(--accent-success)",color:"#fff"},children:l},l))})]}),n.relationships&&e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("h4",{style:{fontSize:"13px",fontWeight:600,color:"var(--text-primary)",marginBottom:"12px"},children:"Relationships"}),e.jsx("div",{style:{background:"var(--bg-tertiary)",borderRadius:"8px",padding:"12px",fontSize:"11px",fontFamily:"monospace"},children:n.relationships.map((l,c)=>e.jsx("div",{style:{padding:"6px 0",color:"var(--text-secondary)"},children:l},c))})]}),n.notes&&e.jsxs("div",{style:{marginTop:"20px",padding:"12px",background:"rgba(245, 158, 11, 0.1)",border:"1px solid rgba(245, 158, 11, 0.3)",borderRadius:"8px"},children:[e.jsx("h4",{style:{fontSize:"12px",fontWeight:600,color:"#f59e0b",marginBottom:"8px"},children:"⚠️ Notes"}),n.notes.map((l,c)=>e.jsx("p",{style:{fontSize:"11px",color:"var(--text-secondary)",marginBottom:c<n.notes.length-1?"8px":"0"},children:l},c))]})]})]})},Ge={Level1_ProjectSetup:{order:1,title:"🎮 Level 1: Project Foundation",description:"Start here! Set up your NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools.",steps:[{step:1,title:"Install Node.js and NestJS CLI",instructions:["Make sure you have Node.js 20+ installed (check with: `node --version`)","Install NestJS CLI globally: `npm install -g @nestjs/cli`","Verify installation: `nest --version`"],code:"npm install -g @nestjs/cli",expectedResult:"You should see the NestJS CLI version number",aiPrompt:"Help me install and set up NestJS CLI for a cryptocurrency exchange project. I need to install it globally and verify the installation works. Provide the commands and how to verify it's installed correctly."},{step:2,title:"Create New NestJS Project",instructions:["Navigate to your project directory","Create a new NestJS project: `nest new bitnitex-backend`","Choose npm as package manager when prompted","Wait for installation to complete"],code:`nest new bitnitex-backend
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
}`,expectedResult:"Settlements reconciled automatically"}],nextTask:null,unlockMessage:"💳 Payment gateways ready! Project is complete! 🎉"}},Et=t=>{const o=Object.values(Ge).sort((a,m)=>a.order-m.order),n={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"};for(const a of o){const m=Object.keys(Ge).find(l=>Ge[l]===a),p=n[m];if(!p)continue;const v=t[p];if(!v)return{id:p,guide:a};if(v.status!=="completed")return{id:p,guide:a}}return null},_t=t=>{const n={Level1_ProjectSetup:"Level1_ProjectSetup",Level2_DatabaseAuth:"Level2_DatabaseAuth",Level3_CustomerIdentity:"Level3_CustomerIdentity",Level4_Notifications:"Level4_Notifications",Level5_WalletServices:"Level5_WalletServices",Level6_Blockchain:"Level6_Blockchain",Level7_TradingEngine:"Level7_TradingEngine",Level8_MarketManagement:"Level8_MarketManagement",Level9_TradingControllers:"Level9_TradingControllers",Level10_WalletController:"Level10_WalletController",Level11_PaymentGateways:"Level11_PaymentGateways",Level12_KYCIdentity:"Level12_KYCIdentity",Level13_AdminRBAC:"Level13_AdminRBAC",Level14_OTCExchange:"Level14_OTCExchange",Level15_SupportContent:"Level15_SupportContent",Level16_Promotional:"Level16_Promotional",Level17_AdditionalServices:"Level17_AdditionalServices",Level18_TestingDocumentation:"Level18_TestingDocumentation",Level19_ScheduledTasks:"Level19_ScheduledTasks",Level20_WebSocketRealtime:"Level20_WebSocketRealtime",Level21_ErrorHandlingLogging:"Level21_ErrorHandlingLogging",Level22_PerformanceCaching:"Level22_PerformanceCaching",Level23_SecurityHardening:"Level23_SecurityHardening",Level24_DataMigrationSeeding:"Level24_DataMigrationSeeding",Level25_UnitTesting:"Level25_UnitTesting",Level26_IntegrationTesting:"Level26_IntegrationTesting",Level27_DeploymentDevOps:"Level27_DeploymentDevOps",Level28_MonitoringHealthChecks:"Level28_MonitoringHealthChecks",Level29_APIDocumentation:"Level29_APIDocumentation",Level30_FinalDocumentation:"Level30_FinalDocumentation"}[t];return n&&Ge[n]?Ge[n]:null},Ot=t=>{if(!t||!t.id)return{order:999,title:"Task Guide",description:"No guide available for this task",steps:[]};const o=t.id,n=t.title||o,a=t.description||"",m=o&&(o.includes("Controller")||o.endsWith("C")),p=o&&(o.includes("Service")||o.endsWith("S"));let v=[];if(m){const l=o.toLowerCase().replace("controller","");v=[{step:1,title:`Create ${n} Module`,instructions:[`Generate module: \`nest g module ${l}\``,`Generate service: \`nest g service ${l}\``,`Generate controller: \`nest g controller ${l}\``,"Import TypeOrmModule.forFeature([Entity])"],code:`nest g module ${l}
nest g service ${l}
nest g controller ${l}`,expectedResult:`${n} module structure created`,aiPrompt:`Help me create a ${n} for a NestJS cryptocurrency exchange. I need to generate the module, service, and controller using NestJS CLI, and set up the basic structure with proper DTOs and guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${o}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript. Maintain the same functionality, endpoints, business logic, and data structures.`},{step:2,title:"Implement Core Endpoints",instructions:["Create DTOs for request/response","Implement main endpoints based on Java controller","Add proper validation pipes","Add JWT guards and RBAC decorators"],code:`@Get()
@UseGuards(JwtAuthGuard)
async findAll() {
  return this.service.findAll();
}`,expectedResult:"Core endpoints working with authentication",aiPrompt:`Help me implement the core endpoints for ${n} in NestJS. I need to create DTOs, add validation, implement the endpoints, and add proper authentication guards.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${o}.java. Please read the Java source file, understand its endpoints and implementation, and translate them to NestJS TypeScript with proper DTOs, validation, and guards.`},{step:3,title:"Add Service Logic",instructions:["Implement business logic in service","Add database operations with TypeORM","Handle errors and exceptions","Add logging"],code:`async findAll(): Promise<Entity[]> {
  return this.repository.find();
}`,expectedResult:"Service logic implemented and tested",aiPrompt:`Help me implement the service logic for ${n} in NestJS. I need to add business logic, database operations using TypeORM, error handling, and logging.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java service file for this component is located at: src/main/java/ir/arnitex/backend/service/${o.replace("Controller","Service")}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`},{step:4,title:"Write Tests",instructions:["Create unit tests for service","Create integration tests for controller","Test all endpoints","Test error cases"],code:`describe('${n}', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive tests for ${n} in NestJS. I need unit tests for the service and integration tests for the controller endpoints.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${n} based on the Java implementation.`}]}else if(p){const l=o.toLowerCase().replace("service","");v=[{step:1,title:`Create ${n} Service`,instructions:[`Generate service: \`nest g service ${l}\``,"Import required dependencies","Set up TypeORM repository if needed","Create service class with @Injectable()"],code:`nest g service ${l}`,expectedResult:`${n} service created`,aiPrompt:`Help me create a ${n} for a NestJS cryptocurrency exchange. I need to generate the service using NestJS CLI and set up the basic structure.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${o}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript.`},{step:2,title:"Implement Core Business Logic",instructions:["Implement main service methods","Add database operations with TypeORM","Handle business rules and validations","Add error handling"],code:`async create(data: CreateDto): Promise<Entity> {
  return this.repository.save(data);
}`,expectedResult:"Core business logic implemented",aiPrompt:`Help me implement the core business logic for ${n} in NestJS. I need to add service methods, database operations using TypeORM, business validations, and error handling.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${o}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`},{step:3,title:"Add Error Handling and Logging",instructions:["Add try-catch blocks","Create custom exceptions if needed","Add logging with NestJS Logger","Handle edge cases"],code:`try {
  return await this.repository.save(data);
} catch (error) {
  this.logger.error('Error creating entity', error);
  throw new BadRequestException('Failed to create');
}`,expectedResult:"Error handling and logging implemented",aiPrompt:`Help me add proper error handling and logging for ${n} in NestJS. I need try-catch blocks, custom exceptions, NestJS Logger, and edge case handling.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me add error handling and logging for ${n} based on the Java implementation.`},{step:4,title:"Write Tests",instructions:["Create unit tests for service methods","Mock dependencies","Test all business logic","Test error cases"],code:`describe('${n}', () => {
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});`,expectedResult:"All tests passing",aiPrompt:`Help me write comprehensive unit tests for ${n} in NestJS. I need to test all service methods with mocked dependencies.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${n} based on the Java implementation.`}]}else v=[{step:1,title:`Set Up ${n}`,instructions:["Create necessary files and structure","Install required dependencies","Configure module","Set up basic implementation"],code:`// Set up ${n}`,expectedResult:`${n} set up and ready`,aiPrompt:`Help me set up ${n} for a NestJS cryptocurrency exchange. ${a||"I need to implement this component."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. Please help me translate ${n} to NestJS TypeScript.`},{step:2,title:"Implement Core Functionality",instructions:["Implement main features","Add required logic","Test functionality","Handle edge cases"],code:`// Implement ${n}`,expectedResult:"Core functionality working",aiPrompt:`Help me implement the core functionality for ${n} in NestJS. ${a||"I need to add the main features."}`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement ${n} based on the Java implementation.`},{step:3,title:"Test and Refine",instructions:["Write tests","Fix any issues","Optimize performance","Update documentation"],code:`// Test ${n}`,expectedResult:`${n} tested and working`,aiPrompt:`Help me test and refine ${n} in NestJS. I need to write tests, fix issues, optimize, and document.`,javaImportPrompt:`I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me test and refine ${n} based on the Java implementation.`}];return{order:100,title:`🎮 ${n}`,description:a||`Implement ${n} for BitniTex exchange`,steps:v,nextTask:null,unlockMessage:`✅ ${n} complete!`}},Nt=["Level1_ProjectSetup","Level19_ScheduledTasks","Level20_WebSocketRealtime","Level21_ErrorHandlingLogging","Level22_PerformanceCaching","Level23_SecurityHardening","Level24_DataMigrationSeeding","Level25_UnitTesting","Level26_IntegrationTesting","Level27_DeploymentDevOps","Level28_MonitoringHealthChecks","Level29_APIDocumentation","Level30_FinalDocumentation"],Ne={CustomerController:"src/main/java/ir/arnitex/backend/controller/CustomerController.java",OrderController:"src/main/java/ir/arnitex/backend/controller/OrderController.java",WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",TradeController:"src/main/java/ir/arnitex/backend/controller/TradeController.java",MarketController:"src/main/java/ir/arnitex/backend/controller/MarketController.java",CoinController:"src/main/java/ir/arnitex/backend/controller/CoinController.java",AdminController:"src/main/java/ir/arnitex/backend/controller/AdminController.java",GiftCodeController:"src/main/java/ir/arnitex/backend/controller/GiftCodeController.java",ReferralCodeController:"src/main/java/ir/arnitex/backend/controller/ReferralCodeController.java",TicketController:"src/main/java/ir/arnitex/backend/controller/TicketController.java",BlogController:"src/main/java/ir/arnitex/backend/controller/BlogController.java",ExchangeActionController:"src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java",RolesController:"src/main/java/ir/arnitex/backend/controller/RolesController.java",OrderService:"src/main/java/ir/arnitex/backend/service/OrderService.java",WalletService:"src/main/java/ir/arnitex/backend/service/WalletService.java",ApieService:"src/main/java/ir/arnitex/backend/service/ApieService.java",TradeService:"src/main/java/ir/arnitex/backend/service/TradeService.java",CustomerService:"src/main/java/ir/arnitex/backend/service/CustomerService.java",MarketService:"src/main/java/ir/arnitex/backend/service/MarketService.java",CoinService:"src/main/java/ir/arnitex/backend/service/CoinService.java",AdminService:"src/main/java/ir/arnitex/backend/service/AdminService.java",GiftCodeService:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",ReferralCodeService:"src/main/java/ir/arnitex/backend/service/ReferralCodeService.java",TicketService:"src/main/java/ir/arnitex/backend/service/TicketService.java",BlogService:"src/main/java/ir/arnitex/backend/service/BlogService.java",RoleService:"src/main/java/ir/arnitex/backend/service/RoleService.java",Level2_DatabaseAuth:"src/main/java/ir/arnitex/backend/domain/",Level3_CustomerIdentity:"src/main/java/ir/arnitex/backend/service/CustomerService.java",Level4_Notifications:"src/main/java/ir/arnitex/backend/service/",Level5_WalletServices:"src/main/java/ir/arnitex/backend/service/WalletService.java",Level6_Blockchain:"src/main/java/ir/arnitex/backend/service/ApieService.java",Level7_TradingEngine:"src/main/java/ir/arnitex/backend/service/OrderService.java",Level8_MarketManagement:"src/main/java/ir/arnitex/backend/service/MarketService.java",Level9_TradingControllers:"src/main/java/ir/arnitex/backend/controller/OrderController.java",Level10_WalletController:"src/main/java/ir/arnitex/backend/controller/WalletController.java",Level11_PaymentGateways:"src/main/java/ir/arnitex/backend/service/paymentgateway/",Level12_KYCIdentity:"src/main/java/ir/arnitex/backend/service/FinoTechService.java",Level13_AdminRBAC:"src/main/java/ir/arnitex/backend/service/AdminService.java",Level14_OTCExchange:"src/main/java/ir/arnitex/backend/service/ExchangeActionService.java",Level15_SupportContent:"src/main/java/ir/arnitex/backend/service/TicketService.java",Level16_Promotional:"src/main/java/ir/arnitex/backend/service/GiftCodeService.java",Level17_AdditionalServices:"src/main/java/ir/arnitex/backend/service/ExchangeSettingService.java",Level18_TestingDocumentation:null},Mt=t=>Nt.includes(t)?!1:Ne[t]!==void 0&&Ne[t]!==null,Dt=t=>Ne[t]||null,Ke=(t,o)=>{const n="I'm building a NestJS cryptocurrency exchange platform called BitniTex. ",a=`This is part of: ${o}. `,m=`I need help with: ${t.title}. `,p=t.instructions.length>0?`Here's what I need to do: ${t.instructions.join(". ")}. `:"",v=t.code?`I have this code/command: ${t.code}. `:"",l=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"";return`${n}${a}${m}${p}${v}${l}Please provide clear instructions, code examples if needed, and explain any important concepts.`},Xe=(t,o,n)=>{if(!Mt(n))return`I'm building a NestJS cryptocurrency exchange platform called BitniTex. This step involves: ${t.title}. ${t.instructions.join(". ")}. ${t.expectedResult?`The expected result should be: ${t.expectedResult}.`:""} Please help me implement this step with best practices for NestJS. Note: This is a new feature or infrastructure setup, so there is no existing Java code to reference.`;const a=Dt(n);if(!a)return Ke(t,o);const m="I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. ",p=a.endsWith("/"),v=p?`The Java source files for this component are located in: ${a} `:`The Java source file for this component is located at: ${a} `,l=`This is part of: ${o}. `,c=`I need to translate and implement: ${t.title}. `,f=t.instructions.length>0?`The step involves: ${t.instructions.join(". ")}. `:"",E=t.expectedResult?`The expected result should be: ${t.expectedResult}. `:"",w=p?`Please read all Java source files in the directory ${a}, understand their implementations, and translate them to NestJS TypeScript.`:`Please read the Java source file at ${a}, understand its implementation, and translate it to NestJS TypeScript.`;return`${m}${v}${l}${c}${f}${E}${w} Maintain the same functionality, endpoints, business logic, and data structures. Adapt Spring Boot annotations to NestJS decorators, Spring Data JPA to TypeORM, and Java types to TypeScript types.`},jt=({task:t,onCompleteStep:o,onNextTask:n})=>{const[a,m]=T.useState(0),[p,v]=T.useState(new Set),[l,c]=T.useState("classic");if(T.useEffect(()=>{t&&(m(0),v(new Set))},[t==null?void 0:t.id]),!t||!t.id)return e.jsx("div",{className:"step-guide-container",children:"No task selected"});let f=_t(t.id);if(f||(f=Ot(t)),!f||!f.steps||f.steps.length===0)return e.jsx("div",{className:"step-guide-container",children:"No guide available for this task"});const E=f.steps,w=E[a],re=()=>{const H=new Set(p);H.add(a),v(H),a<E.length-1?m(a+1):o==null||o()};Ee.useEffect(()=>{t&&f&&(m(0),v(new Set))},[t==null?void 0:t.id]);const ae=()=>{a<E.length-1&&m(a+1)},ee=(a+1)/E.length*100;return e.jsxs("div",{className:"step-guide-container",children:[e.jsxs("div",{className:"step-guide-header",children:[e.jsxs("div",{className:"step-guide-title-section",children:[e.jsx("h2",{className:"step-guide-title",children:f.title}),e.jsx("p",{className:"step-guide-description",children:f.description})]}),e.jsxs("div",{className:"step-guide-controls",children:[e.jsxs("div",{className:"step-guide-progress",children:[e.jsx("div",{className:"step-progress-bar",children:e.jsx("div",{className:"step-progress-fill",style:{width:`${ee}%`}})}),e.jsxs("span",{className:"step-progress-text",children:["Step ",a+1," of ",E.length]})]}),e.jsxs("div",{className:"mode-toggle",children:[e.jsx("button",{className:`mode-toggle-btn ${l==="classic"?"active":""}`,onClick:()=>c("classic"),title:"Classic Step-by-Step Mode",children:"📋 Classic"}),e.jsx("button",{className:`mode-toggle-btn ${l==="ai"?"active":""}`,onClick:()=>c("ai"),title:"AI Mode - Get AI prompts",children:"🤖 AI Mode"}),e.jsx("button",{className:`mode-toggle-btn ${l==="java-import"?"active":""}`,onClick:()=>c("java-import"),title:"Java Import Mode - Translate from Java source",children:"☕ Java Import"})]})]})]}),e.jsxs("div",{className:"step-content",children:[e.jsx("div",{className:"step-number-badge",children:e.jsx("span",{className:"step-number",children:w.step})}),e.jsxs("div",{className:"step-main-content",children:[e.jsx("h3",{className:"step-title",children:w.title}),l==="ai"||l==="java-import"?e.jsxs("div",{className:"ai-mode-content",children:[e.jsxs("div",{className:"ai-prompt-section",children:[e.jsx("h4",{children:l==="java-import"?"☕ Java Import Prompt:":"🤖 AI Prompt:"}),e.jsxs("div",{className:`ai-prompt-box ${l==="java-import"?"java-import-box":""}`,children:[e.jsx("p",{className:"ai-prompt-text",children:l==="java-import"?w.javaImportPrompt||Xe(w,f.title,t.id):w.aiPrompt||Ke(w,f.title)}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{const H=l==="java-import"?w.javaImportPrompt||Xe(w,f.title,t.id):w.aiPrompt||Ke(w,f.title);navigator.clipboard.writeText(H),alert("Prompt copied to clipboard! Paste it into your AI assistant.")},children:"📋 Copy Prompt"})]}),e.jsx("div",{className:"ai-hint",children:e.jsxs("p",{children:["💡 ",e.jsx("strong",{children:"Tip:"})," ",l==="java-import"?"Copy this prompt and paste it into your AI assistant. The AI will read the Java source file from the project and translate it to NestJS TypeScript.":"Copy this prompt and paste it into your AI assistant (like ChatGPT, Claude, or Cursor AI) to get help with this step!"]})})]}),w.expectedResult&&e.jsxs("div",{className:"ai-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:w.expectedResult})]}),l==="java-import"&&e.jsxs("div",{className:"java-file-reference",children:[e.jsx("h4",{children:"📁 Java Source File:"}),Ne[t.id]?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"java-file-path",children:[e.jsx("code",{children:Ne[t.id]}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(Ne[t.id]),alert("File path copied to clipboard!")},children:"📋 Copy Path"})]}),e.jsx("p",{className:"java-file-hint",children:"The AI will read this file from the project codebase and translate it to NestJS."})]}):e.jsx("p",{className:"java-file-hint",style:{color:"var(--text-muted)",fontStyle:"italic"},children:"No specific Java file mapping for this task. The prompt will reference the general project structure."})]}),w.code&&e.jsxs("div",{className:"ai-code-reference",children:[e.jsx("h4",{children:"💡 Reference Code (if needed):"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:w.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(w.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"step-instructions",children:[e.jsx("h4",{children:"📋 Instructions:"}),e.jsx("ol",{className:"instructions-list",children:w.instructions.map((H,de)=>e.jsx("li",{children:H},de))})]}),w.code&&e.jsxs("div",{className:"step-code",children:[e.jsx("h4",{children:"💻 Code:"}),e.jsx("pre",{className:"code-block",children:e.jsx("code",{children:w.code})}),e.jsx("button",{className:"copy-code-btn",onClick:()=>{navigator.clipboard.writeText(w.code),alert("Code copied to clipboard!")},children:"📋 Copy Code"})]}),w.expectedResult&&e.jsxs("div",{className:"step-expected-result",children:[e.jsx("h4",{children:"✅ Expected Result:"}),e.jsx("p",{children:w.expectedResult})]})]})]})]}),e.jsxs("div",{className:"step-navigation",children:[a>0&&e.jsx("button",{className:"step-btn step-btn-secondary",onClick:()=>m(a-1),children:"← Previous Step"}),e.jsxs("div",{className:"step-actions",children:[e.jsx("button",{className:"step-btn step-btn-skip",onClick:ae,disabled:a===E.length-1,children:"Skip Step"}),e.jsx("button",{className:"step-btn step-btn-primary",onClick:re,children:a===E.length-1?"🎉 Complete Task":"✓ Complete Step →"})]})]}),a===E.length-1&&p.has(a)&&f.nextTask&&e.jsxs("div",{className:"step-unlock-message",children:[e.jsx("div",{className:"unlock-icon",children:"🎉"}),e.jsx("p",{className:"unlock-text",children:f.unlockMessage}),n&&e.jsx("button",{className:"step-btn step-btn-unlock",onClick:()=>n(f.nextTask),children:"Start Next Task →"})]}),e.jsxs("div",{className:"step-overview",children:[e.jsx("h4",{children:"Step Overview:"}),e.jsx("div",{className:"steps-list",children:E.map((H,de)=>e.jsxs("div",{className:`step-item ${de===a?"active":""} ${p.has(de)?"completed":""}`,onClick:()=>m(de),children:[e.jsx("span",{className:"step-item-number",children:H.step}),e.jsx("span",{className:"step-item-title",children:H.title}),p.has(de)&&e.jsx("span",{className:"step-check",children:"✓"})]},de))})]})]})},Bt=({subtask:t,idx:o,taskId:n,isCompleted:a,toggleSubtask:m})=>{const[p,v]=T.useState(!1),l=t.id||`subtask-${o}-${t.title}`,c=t.aiPrompt||null;return e.jsxs("div",{className:"subtask-item",children:[e.jsxs("div",{className:"subtask-main",children:[e.jsx("input",{type:"checkbox",checked:a,onChange:f=>{f.stopPropagation(),console.log("🔄 Toggling subtask:",l,"Current state:",a),m(n,l)},onClick:f=>f.stopPropagation(),className:"subtask-checkbox"}),e.jsx("span",{className:a?"completed":"",children:t.title||t.name||`Subtask ${o+1}`}),c&&e.jsx("button",{className:"subtask-ai-btn",onClick:f=>{f.stopPropagation(),v(!p)},title:"Show AI Prompt",children:"🤖 AI"})]}),p&&c&&e.jsxs("div",{className:"subtask-ai-prompt",children:[e.jsxs("div",{className:"ai-prompt-header",children:[e.jsx("span",{children:"🤖 AI Assistant Prompt"}),e.jsx("button",{className:"ai-prompt-close",onClick:f=>{f.stopPropagation(),v(!1)},children:"✕"})]}),e.jsxs("div",{className:"ai-prompt-content",children:[e.jsx("p",{children:c}),e.jsx("button",{className:"ai-prompt-copy",onClick:f=>{f.stopPropagation(),navigator.clipboard.writeText(c),alert("AI prompt copied to clipboard!")},children:"📋 Copy Prompt"})]})]})]})},Gt=()=>{var g,D,R;const{tasks:t,showTodoPanel:o,setShowTodoPanel:n,selectedTask:a,setSelectedTask:m,filterStatus:p,filterCategory:v,setFilterStatus:l,setFilterCategory:c,updateTaskStatus:f,updateTaskPriority:E,addSubtask:w,toggleSubtask:re,addNote:ae,updateActualHours:ee,getProgress:H,getCategoryProgress:de,getOrCreateTask:X}=We(),[pe,Ce]=T.useState(""),[Te,xe]=T.useState(""),[ke,ve]=T.useState(null),[Se,oe]=T.useState(!0),[ye,ue]=T.useState(!1),[Le,se]=T.useState(null);Ee.useEffect(()=>{let r=!1;return(async()=>{if(!a){se(null),ue(!1);return}if(console.log("🔄 useEffect: Loading task:",a,"Current task:",Le==null?void 0:Le.id),t[a]){console.log("✅ Task found in store:",a),r||(se(t[a]),ue(!1));return}ue(!0);try{console.log("📦 Creating task:",a);const y=await X(a);if(!y){console.error("❌ Task is null:",a),r||ue(!1);return}console.log("✅ Task created:",y.id,y.title),r||(se(y),ue(!1),setTimeout(()=>{!r&&t[a]&&(console.log("🔄 Syncing from store:",a),se(t[a]))},200))}catch(y){if(console.error("❌ Error loading task:",y),!r){const x={id:a,nodeId:a,title:`${a} Development`,description:`Task for ${a}`,status:F.NOT_STARTED,priority:i.MEDIUM,category:"Other",estimatedHours:4,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};se(x),ue(!1)}}})(),()=>{r=!0}},[a]),Ee.useEffect(()=>{if(a&&t[a]){const r=t[a];(!Le||Le.id!==r.id||Le.status!==r.status)&&(console.log("🔄 Syncing task from store:",a,"Status:",r.status),se(r))}},[t,a,Le]),Ee.useEffect(()=>{a&&t[a]&&se(t[a])},[a,t]);const q=a?t[a]:null;if(!o)return null;const he=H(),h=Object.values(t).filter(r=>!(!r||!r.id||!r.id.startsWith("Level")||p&&r.status!==p||v&&r.category!==v)).sort((r,s)=>{const y=ie=>{const O=ie.match(/^Level(\d+)_/);return O?parseInt(O[1],10):999},x=y(r.id),J=y(s.id);return x-J}),A=[...new Set(Object.values(t).filter(r=>r&&r.id&&r.id.startsWith("Level")&&r.category).map(r=>r.category))],_=r=>{switch(r){case F.COMPLETED:return"#10b981";case F.IN_PROGRESS:return"#3b82f6";case F.BLOCKED:return"#ef4444";default:return"#6b7280"}},I=r=>{switch(r){case i.CRITICAL:return"#ef4444";case i.HIGH:return"#f59e0b";case i.MEDIUM:return"#3b82f6";default:return"#6b7280"}},b=r=>{pe.trim()&&(w(r,{id:`${r}-subtask-${Date.now()}`,title:pe.trim()}),Ce(""))},G=r=>{Te.trim()&&(ae(r,Te.trim()),xe(""))},u=q?{...q,notes:Array.isArray(q.notes)?q.notes:q.notes&&typeof q.notes=="string"&&q.notes.trim()?q.notes.split(`
`).filter(r=>r.trim()).map((r,s)=>({id:`note-${s}`,content:r.trim(),createdAt:new Date().toISOString()})):[],subtasks:(()=>{if(Array.isArray(q.subtasks))return q.subtasks.map((r,s)=>typeof r=="string"?{id:`subtask-${s}`,title:r,completed:!1,aiPrompt:null}:typeof r=="object"&&r!==null?{id:r.id||`subtask-${s}`,title:r.title||r.name||String(r),completed:r.completed===!0||r.completed==="true"||r.completed===1||!1,aiPrompt:r.aiPrompt||null}:{id:`subtask-${s}`,title:String(r),completed:!1,aiPrompt:null});if(q.subtasks&&typeof q.subtasks=="string")try{const r=JSON.parse(q.subtasks);if(Array.isArray(r))return r.map((s,y)=>typeof s=="string"?{id:`subtask-${y}`,title:s,completed:!1,aiPrompt:null}:typeof s=="object"&&s!==null?{id:s.id||`subtask-${y}`,title:s.title||s.name||String(s),completed:s.completed===!0||s.completed==="true"||s.completed===1||!1,aiPrompt:s.aiPrompt||null}:{id:`subtask-${y}`,title:String(s),completed:!1,aiPrompt:null})}catch(r){console.warn("Failed to parse subtasks JSON:",r)}return[]})()}:null,C=Et(t),M=Object.values(t).some(r=>r.status===F.COMPLETED),ne=u!==null;return e.jsx("div",{className:"todo-panel-overlay",children:e.jsxs("div",{className:"todo-panel",children:[e.jsxs("div",{className:"todo-panel-header",children:[e.jsxs("div",{children:[e.jsx("h2",{children:"🚀 BitniTex Project Tracker"}),e.jsx("p",{className:"todo-subtitle",children:"Track your project progress step by step"})]}),e.jsx("button",{className:"todo-close-btn",onClick:()=>n(!1),children:"✕"})]}),e.jsxs("div",{className:"todo-progress-section",children:[!a&&C&&e.jsxs("div",{className:"start-here-banner",children:[e.jsxs("div",{className:"start-here-content",children:[e.jsx("div",{className:"start-here-icon",children:"🎮"}),e.jsxs("div",{children:[e.jsx("h3",{children:M?"Ready to Continue?":"Ready to Start?"}),e.jsxs("p",{children:[M?"Continue with":"Begin with",": ",e.jsx("strong",{children:((g=C.guide)==null?void 0:g.title)||C.title||"Next Task"})]})]})]}),e.jsx("button",{className:"start-here-btn",onClick:async()=>{var s;const r=(C==null?void 0:C.id)||"ProjectSetup";console.log('🚀 Starting from "Start Here" button:',r,"Task status:",(s=t[r])==null?void 0:s.status),t[r]||await X(r),m(r),oe(!0)},children:M?"▶️ Continue":"🚀 Start Here"})]}),e.jsxs("div",{className:"progress-bar-container",children:[e.jsx("div",{className:"progress-bar-fill",style:{width:`${he.percentage}%`}}),e.jsxs("span",{className:"progress-bar-text",children:[he.percentage,"% Complete"]})]}),e.jsxs("div",{className:"progress-stats",children:[e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:he.completed}),e.jsx("span",{className:"stat-label",children:"Completed"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:he.inProgress}),e.jsx("span",{className:"stat-label",children:"In Progress"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsx("span",{className:"stat-value",children:he.notStarted}),e.jsx("span",{className:"stat-label",children:"Not Started"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[he.totalEstimated,"h"]}),e.jsx("span",{className:"stat-label",children:"Estimated"})]}),e.jsxs("div",{className:"progress-stat",children:[e.jsxs("span",{className:"stat-value",children:[he.totalActual,"h"]}),e.jsx("span",{className:"stat-label",children:"Actual"})]})]})]}),e.jsxs("div",{className:"todo-content",children:[e.jsxs("div",{className:"todo-sidebar",children:[e.jsxs("div",{className:"todo-filters",children:[e.jsxs("select",{value:v||"",onChange:r=>c(r.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Categories"}),A.map(r=>{const s=de(r);return e.jsxs("option",{value:r,children:[r," (",s.percentage,"%)"]},r)})]}),e.jsxs("select",{value:p||"",onChange:r=>l(r.target.value||null),className:"todo-filter-select",children:[e.jsx("option",{value:"",children:"All Status"}),e.jsx("option",{value:F.NOT_STARTED,children:"Not Started"}),e.jsx("option",{value:F.IN_PROGRESS,children:"In Progress"}),e.jsx("option",{value:F.COMPLETED,children:"Completed"}),e.jsx("option",{value:F.BLOCKED,children:"Blocked"})]})]}),e.jsx("div",{className:"todo-task-list",children:h.filter(r=>r&&r.id).map(r=>{var J,ie;const s=((J=r.subtasks)==null?void 0:J.filter(O=>O.completed).length)||0,y=((ie=r.subtasks)==null?void 0:ie.length)||0,x=r.isMissing===!0||r.isMissing==="true"||r.isMissing===1;return e.jsx("div",{className:`todo-task-item ${a===r.id?"active":""} ${x?"missing-task":""}`,onClick:()=>m(r.id),style:x?{borderLeft:"4px solid #a855f7",backgroundColor:"rgba(168, 85, 247, 0.05)"}:{},children:e.jsxs("div",{className:"task-item-header",children:[e.jsx("div",{className:"task-status-indicator",style:{backgroundColor:x?"#a855f7":_(r.status),border:x?"2px dashed #a855f7":"none"}}),e.jsxs("div",{className:"task-item-content",children:[e.jsxs("h4",{children:[r.title,x&&e.jsx("span",{className:"missing-badge",title:"Advanced Component - Not in original Java codebase",children:"🚀 ADVANCED"})]}),e.jsxs("div",{className:"task-item-meta",children:[e.jsx("span",{className:"task-category",children:r.category}),e.jsx("span",{className:"task-priority",style:{color:I(r.priority)},children:r.priority})]}),y>0&&e.jsxs("div",{className:"task-subtasks-progress",children:[s,"/",y," subtasks"]})]})]})},r.id)})})]}),e.jsx("div",{className:"todo-main",children:ye&&!q?e.jsxs("div",{className:"task-loading",children:[e.jsx("div",{className:"loading-spinner"}),e.jsx("p",{children:"Loading task..."})]}):q?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-detail-header",children:[e.jsxs("div",{children:[e.jsx("h3",{children:q.title}),e.jsx("p",{className:"task-description",children:q.description})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[ne&&e.jsx("button",{className:`guide-toggle-btn ${Se?"active":""}`,onClick:()=>oe(!Se),title:Se?"Hide Step-by-Step Guide":"Show Step-by-Step Guide",children:Se?"📖 Guide":"📋 Details"}),e.jsx("div",{className:"task-priority-badge",style:{backgroundColor:I(q.priority),color:"#fff"},children:q.priority})]})]}),Se&&ne&&q&&q.id&&e.jsx(jt,{task:q,onCompleteStep:()=>{q&&f(q.id,F.COMPLETED)},onNextTask:async r=>{try{const s=t[a]||q;console.log("🔄 Starting next task:",r),console.log("📊 Current task before transition:",s==null?void 0:s.id,"Status:",s==null?void 0:s.status),console.log("📊 Selected task ID:",a),window.location.hash&&window.history.replaceState(null,"",window.location.pathname+window.location.search),s&&s.status!==F.COMPLETED&&(console.log("⚠️ Marking current task as completed:",s.id),f(s.id,F.COMPLETED),await new Promise(x=>setTimeout(x,300))),console.log("📦 Creating/getting NEXT task:",r);const y=await X(r);console.log("✅ Next task created/loaded:",y.id,y.status),await new Promise(x=>setTimeout(x,200)),console.log("🎯 Setting NEW task:",r),se(y),m(r),oe(!0),await new Promise(x=>setTimeout(x,100)),setTimeout(async()=>{if(t[r])se(t[r]);else{console.log("⚠️ Task not in store, reloading...");const J=await X(r);se(J)}const x=document.querySelector(".todo-panel");x&&(x.scrollTop=0)},300)}catch(s){console.error("❌ Error:",s);const y={id:r,nodeId:r,title:`${r} Development`,description:`Task for ${r}`,status:F.NOT_STARTED,priority:i.MEDIUM,category:"Infrastructure",estimatedHours:8,actualHours:0,subtasks:[],notes:[],dependencies:[],createdAt:new Date().toISOString(),updatedAt:new Date().toISOString()};se(y),m(r),oe(!0),console.log("⚠️ Using fallback task:",y)}}}),(!Se||!ne)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Status"}),e.jsx("div",{className:"status-buttons",children:Object.values(F).map((r,s)=>e.jsx("button",{className:`status-btn ${(u==null?void 0:u.status)===r?"active":""}`,style:{backgroundColor:(u==null?void 0:u.status)===r?_(r):"transparent",borderColor:_(r),color:(u==null?void 0:u.status)===r?"#fff":_(r)},onClick:()=>f(q.id,r),children:r.replace("_"," ")},r))})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Time Tracking"}),e.jsxs("div",{className:"time-tracking",children:[e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Estimated:"}),e.jsxs("strong",{children:[(u==null?void 0:u.estimatedHours)||0,"h"]})]}),e.jsxs("div",{className:"time-item",children:[e.jsx("span",{children:"Actual:"}),ke===q.id?e.jsx("input",{type:"number",value:(u==null?void 0:u.actualHours)||0,onChange:r=>ee(q.id,parseFloat(r.target.value)||0),onBlur:()=>ve(null),autoFocus:!0,className:"hours-input"}):e.jsxs("strong",{onClick:()=>ve(q.id),style:{cursor:"pointer"},children:[(u==null?void 0:u.actualHours)||0,"h ✏️"]})]})]})]}),(u==null?void 0:u.dependencies)&&Array.isArray(u.dependencies)&&u.dependencies.length>0&&e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Dependencies"}),e.jsx("div",{className:"dependencies",children:u.dependencies.map(r=>e.jsx("span",{className:"dependency-tag",children:r},r))})]}),e.jsxs("div",{className:"task-section",children:[e.jsxs("label",{className:"section-label",children:["Subtasks (",((D=u==null?void 0:u.subtasks)==null?void 0:D.filter(r=>r.completed).length)||0,"/",((R=u==null?void 0:u.subtasks)==null?void 0:R.length)||0,")"]}),e.jsx("div",{className:"subtasks-list",children:(()=>{var r;return u&&console.log("🔍 Subtasks Debug:",{hasNormalizedTask:!!u,subtasksRaw:q==null?void 0:q.subtasks,subtasksNormalized:u.subtasks,subtasksLength:(r=u.subtasks)==null?void 0:r.length,subtasksType:typeof u.subtasks,isArray:Array.isArray(u.subtasks)}),u!=null&&u.subtasks&&Array.isArray(u.subtasks)&&u.subtasks.length>0?u.subtasks.map((s,y)=>{const x=s.id||`subtask-${y}-${s.title}`,J=s.completed===!0||s.completed==="true"||s.completed===1;return e.jsx(Bt,{subtask:s,idx:y,taskId:q.id,isCompleted:J,toggleSubtask:re},x)}):e.jsx("div",{className:"no-subtasks",children:"No subtasks yet"})})()}),e.jsxs("div",{className:"add-subtask",children:[e.jsx("input",{type:"text",value:pe,onChange:r=>Ce(r.target.value),onKeyPress:r=>r.key==="Enter"&&b(q.id),placeholder:"Add new subtask...",className:"subtask-input"}),e.jsx("button",{onClick:()=>b(q.id),className:"add-btn",children:"+"})]})]}),e.jsxs("div",{className:"task-section",children:[e.jsx("label",{className:"section-label",children:"Notes"}),e.jsx("div",{className:"notes-list",children:u!=null&&u.notes&&Array.isArray(u.notes)&&u.notes.length>0?u.notes.map((r,s)=>{const y=typeof r=="object"?r.id||`note-${s}`:`note-${s}`,x=typeof r=="object"?r.content:r,J=typeof r=="object"&&r.createdAt?r.createdAt:new Date().toISOString();return e.jsxs("div",{className:"note-item",children:[e.jsx("p",{children:x}),e.jsx("span",{className:"note-date",children:new Date(J).toLocaleString()})]},y)}):e.jsx("div",{className:"no-notes",children:"No notes yet"})}),e.jsxs("div",{className:"add-note",children:[e.jsx("textarea",{value:Te,onChange:r=>xe(r.target.value),placeholder:"Add a note...",className:"note-textarea"}),e.jsx("button",{onClick:()=>G(q.id),className:"add-btn",children:"Add Note"})]})]})]})]}):e.jsxs("div",{className:"no-task-selected",children:[e.jsx("div",{className:"empty-state-icon",children:"📋"}),e.jsx("p",{children:"Select a task to view details"})]})})]})]})})},Wt=()=>{const{selectedNode:t,setSelectedNode:o,setShowApiTester:n}=_e(),[a,m]=T.useState(null),[p,v]=T.useState("{}"),[l,c]=T.useState(null),[f,E]=T.useState(!1),[w,re]=T.useState("http://localhost:8080"),[ae,ee]=T.useState(`{
  "Content-Type": "application/json"
}`),H=t?Be(t):null;T.useEffect(()=>{H&&H.endpoints&&H.endpoints.length>0&&!a&&(m(H.endpoints[0]),v("{}"),c(null))},[H,a]),T.useEffect(()=>{a&&(v("{}"),c(null))},[a==null?void 0:a.path]);const de=async X=>{m(X),E(!0),c(null);try{let pe={};try{pe=JSON.parse(ae)}catch(ue){c({error:!0,message:`Invalid JSON in headers: ${ue.message}`,time:0}),E(!1);return}let Ce=null;if(["POST","PUT","PATCH"].includes(X.method))try{Ce=JSON.parse(p)}catch(ue){c({error:!0,message:`Invalid JSON in request body: ${ue.message}`,time:0}),E(!1);return}const Te=`${w.replace(/\/$/,"")}${X.path}`,xe={method:X.method,headers:{"Content-Type":"application/json",...pe},mode:"cors"};Ce!==null&&(xe.body=JSON.stringify(Ce));const ke=Date.now();let ve;try{ve=await fetch(Te,xe)}catch(ue){throw new Error(`Network error: ${ue.message}. Make sure the server is running and CORS is enabled.`)}const Se=Date.now(),oe=ve.headers.get("content-type")||"";let ye;if(oe.includes("application/json"))try{ye=await ve.json()}catch{ye=await ve.text()}else ye=await ve.text();c({status:ve.status,statusText:ve.statusText,headers:Object.fromEntries(ve.headers.entries()),data:ye,time:Se-ke,url:Te})}catch(pe){c({error:!0,message:pe.message||"Unknown error occurred",time:0})}finally{E(!1)}};return T.useEffect(()=>{t&&(console.log("API Tester - Selected Node:",t),console.log("API Tester - Node Details:",H),H&&console.log("API Tester - Endpoints:",H.endpoints))},[t,H]),t?H?!H.endpoints||H.endpoints.length===0?e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"📭"}),e.jsx("div",{className:"empty-text",children:"No endpoints available"}),e.jsxs("div",{className:"empty-hint",children:["Component: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have any API endpoints defined. Endpoints are typically defined for Controllers."]})]}):e.jsxs("div",{className:"api-tester",children:[e.jsxs("div",{className:"api-tester-header",children:[e.jsxs("div",{className:"api-tester-title",children:[e.jsx("span",{className:"api-tester-icon",children:"🧪"}),e.jsx("span",{children:"API Endpoint Tester"})]}),e.jsx("button",{className:"api-tester-close",onClick:()=>n(!1),title:"Close",children:"✕"})]}),e.jsxs("div",{className:"api-tester-content",children:[e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Base URL"}),e.jsx("input",{type:"text",className:"api-tester-input",value:w,onChange:X=>re(X.target.value),placeholder:"http://localhost:8080"})]}),e.jsxs("div",{className:"api-tester-section",children:[e.jsx("label",{className:"api-tester-label",children:"Endpoints"}),e.jsx("div",{className:"endpoints-list",children:H.endpoints.map((X,pe)=>e.jsxs("div",{className:`endpoint-item ${a===X?"active":""}`,onClick:()=>de(X),children:[e.jsx("span",{className:`method-badge method-${X.method.toLowerCase()}`,children:X.method}),e.jsx("span",{className:"endpoint-path",children:X.path}),X.description&&e.jsx("span",{className:"endpoint-desc",children:X.description})]},pe))})]}),a&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"api-tester-section",children:e.jsxs("label",{className:"api-tester-label",children:["Request URL",e.jsxs("span",{className:"request-url",children:[w.replace(/\/$/,""),a.path]})]})}),e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Headers",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:ae,onChange:X=>ee(X.target.value),rows:4,placeholder:'{\\n  "Authorization": "Bearer your-token-here",\\n  "X-Custom-Header": "value"\\n}'})]}),["POST","PUT","PATCH"].includes(a.method)&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("label",{className:"api-tester-label",children:["Request Body",e.jsx("span",{className:"label-hint",children:"(JSON format)"})]}),e.jsx("textarea",{className:"api-tester-textarea",value:p,onChange:X=>v(X.target.value),rows:10,placeholder:'{\\n  "key": "value",\\n  "number": 123\\n}'})]}),e.jsx("button",{className:"api-tester-send-btn",onClick:()=>de(a),disabled:f,children:f?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner"}),"Sending Request..."]}):e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"🚀"}),"Send Request"]})})]}),l&&e.jsxs("div",{className:"api-tester-section",children:[e.jsxs("div",{className:"response-header",children:[e.jsxs("label",{className:"api-tester-label",children:["Response",l.time>0&&e.jsxs("span",{className:"response-time",children:["(",l.time,"ms)"]})]}),l.url&&e.jsxs("div",{className:"response-url",children:[e.jsx("span",{className:"url-label",children:"URL:"}),e.jsx("code",{className:"url-value",children:l.url}),e.jsx("button",{className:"copy-btn",onClick:()=>{navigator.clipboard.writeText(l.url)},title:"Copy URL",children:"📋"})]})]}),e.jsx("div",{className:`response-container ${l.error?"error":`status-${Math.floor(l.status/100)}xx`}`,children:l.error?e.jsxs("div",{className:"response-error",children:[e.jsx("div",{className:"error-title",children:"❌ Error"}),e.jsx("div",{className:"error-message",children:l.message}),e.jsxs("div",{className:"error-hint",children:[e.jsx("strong",{children:"Tips:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Check if the server is running"}),e.jsx("li",{children:"Verify the base URL is correct"}),e.jsx("li",{children:"Ensure CORS is enabled on the server"}),e.jsx("li",{children:"Check browser console for more details"})]})]})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"response-status",children:e.jsxs("span",{className:`status-badge status-${Math.floor(l.status/100)}xx`,children:[l.status," ",l.statusText]})}),e.jsxs("div",{className:"response-headers",children:[e.jsxs("div",{className:"response-headers-title",children:["Response Headers",e.jsx("button",{className:"copy-btn-small",onClick:()=>{navigator.clipboard.writeText(JSON.stringify(l.headers,null,2))},title:"Copy headers",children:"📋"})]}),e.jsx("pre",{className:"response-headers-content",children:JSON.stringify(l.headers,null,2)})]}),e.jsxs("div",{className:"response-body",children:[e.jsxs("div",{className:"response-body-title",children:["Response Body",e.jsx("button",{className:"copy-btn-small",onClick:()=>{const X=typeof l.data=="string"?l.data:JSON.stringify(l.data,null,2);navigator.clipboard.writeText(X)},title:"Copy body",children:"📋"})]}),e.jsx("pre",{className:"response-body-content",children:typeof l.data=="string"?l.data:JSON.stringify(l.data,null,2)})]})]})})]})]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"❓"}),e.jsx("div",{className:"empty-text",children:"Component not found"}),e.jsxs("div",{className:"empty-hint",children:["Selected: ",e.jsx("code",{children:t}),e.jsx("br",{}),"This component doesn't have endpoint definitions yet. Try clicking on a Controller or Service component."]})]}):e.jsxs("div",{className:"api-tester-empty",children:[e.jsx("div",{className:"empty-icon",children:"🔌"}),e.jsx("div",{className:"empty-text",children:"No component selected"}),e.jsx("div",{className:"empty-hint",children:'Click on a component in the diagram (like "AdminController" or "CustomerController") to test its endpoints'})]})},Ft=()=>{const{sidebarCollapsed:t,selectedNode:o,isFullscreen:n,showApiTester:a}=_e();return e.jsxs("div",{className:`app-container ${n?"fullscreen-mode":""}`,children:[!n&&e.jsx(bt,{}),e.jsxs("main",{className:"main-content",children:[!n&&e.jsx(Tt,{}),e.jsx(It,{}),e.jsx(Rt,{}),o&&!n&&e.jsx(Pt,{})]}),e.jsx(Gt,{}),a&&e.jsx(Wt,{})]})};class Jt extends Ee.Component{constructor(o){super(o),this.state={hasError:!1,error:null}}static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,n){console.error("React Error:",o,n)}render(){var o;return this.state.hasError?e.jsxs("div",{style:{padding:"20px",color:"white",background:"#0a0e1a"},children:[e.jsx("h1",{children:"Something went wrong"}),e.jsx("pre",{style:{color:"#ef4444"},children:(o=this.state.error)==null?void 0:o.toString()}),e.jsx("button",{onClick:()=>window.location.reload(),children:"Reload Page"})]}):this.props.children}}function Ut(){return e.jsx(Jt,{children:e.jsx(gt,{children:e.jsx(rt,{children:e.jsx(Ft,{})})})})}Ve.createRoot(document.getElementById("root")).render(e.jsx(Ee.StrictMode,{children:e.jsx(Ut,{})}));export{$t as T,je as a,Ye as d};
