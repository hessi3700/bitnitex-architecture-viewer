// Central registry for all diagrams - easily extensible
export const diagramRegistry = {
  everything: {
    id: 'everything',
    title: 'EVERYTHING - Complete System',
    subtitle: 'Every component, service, table, flow - ALL IN ONE',
    icon: '🌐',
    type: 'composite',
    description: 'The complete Arnitex backend system - every single component from our entire conversation',
    children: ['overview', 'controllers', 'services', 'database', 'flows', 'external', 'advanced'],
    code: `
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
`
  },

  overview: {
    id: 'overview',
    title: 'System Overview',
    subtitle: 'Complete architecture at a glance',
    icon: '🏗️',
    type: 'composite',
    description: 'High-level view of the entire Arnitex backend system',
    children: ['controllers', 'services', 'database', 'flows', 'external', 'advanced'],
    code: `
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
`
  },

  controllers: {
    id: 'controllers',
    title: 'Controllers Layer',
    subtitle: '25+ REST API Controllers',
    icon: '🎛️',
    type: 'detail',
    description: 'HTTP endpoints and request handlers',
    parent: 'overview',
    children: [
      'AdminController',
      'CustomerController', 
      'OrderController',
      'WalletController',
      'TradeController',
      'MarketController',
      'CoinController',
      'ExchangeActionController',
      'TicketController',
      'GiftCodeController'
    ],
    code: `
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
`
  },

  services: {
    id: 'services',
    title: 'Services Layer',
    subtitle: '140+ Business Services',
    icon: '⚙️',
    type: 'detail',
    description: 'Core business logic and orchestration',
    parent: 'overview',
    children: [
      'OrderService',
      'WalletService',
      'CustomerService',
      'TradeService',
      'PaymentGateway'
    ],
    code: `
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
`
  },

  database: {
    id: 'database',
    title: 'Database Schema',
    subtitle: '81 Tables',
    icon: '💾',
    type: 'detail',
    description: 'MySQL database structure and relationships',
    parent: 'overview',
    code: `
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
`
  },

  flows: {
    id: 'flows',
    title: 'Key System Flows',
    subtitle: 'Critical business processes',
    icon: '🔄',
    type: 'detail',
    description: 'Step-by-step process flows',
    parent: 'overview',
    children: ['OrderFlow', 'WithdrawalFlow', 'DepositFlow', 'KYCFlow'],
    code: `
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
`
  },

  external: {
    id: 'external',
    title: 'External Integrations',
    subtitle: 'Third-party services',
    icon: '🌐',
    type: 'detail',
    description: 'External APIs and service providers',
    parent: 'overview',
    code: `
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
`
  },

  // Advanced Components Diagram - Levels 31-60
  advanced: {
    id: 'advanced',
    title: 'Advanced Components',
    subtitle: 'Advanced features not in original Java codebase (Levels 31-60)',
    icon: '\u{1F680}',
    type: 'composite',
    description: 'Advanced features and components that need to be implemented - not present in the original Java codebase',
    code: `
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
`
  }
}

// Helper function to get diagram by ID
export const getDiagram = (id) => {
  return diagramRegistry[id] || diagramRegistry.everything
}

// Helper function to get all diagrams
export const getAllDiagrams = () => {
  return Object.values(diagramRegistry)
}

// Helper function to get children diagrams
export const getChildDiagrams = (parentId) => {
  return getAllDiagrams().filter(d => d.parent === parentId)
}
