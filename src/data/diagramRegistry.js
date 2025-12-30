// Central registry for all diagrams - easily extensible
export const diagramRegistry = {
  everything: {
    id: 'everything',
    title: 'EVERYTHING - Complete System',
    subtitle: 'Every component, service, table, flow - ALL IN ONE',
    icon: '🌐',
    type: 'composite',
    description: 'The complete Arnitex backend system - every single component from our entire conversation',
    children: ['overview', 'controllers', 'services', 'database', 'flows', 'external'],
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
  
  Services2 --> Blockchain
  Services2 --> Payment
  Services3 --> External
  Services4 --> External
  
  Blockchain --> External
  Payment --> External
  
  style Clients fill:#1e3a5f,stroke:#60a5fa,stroke-width:3px
  style Security fill:#2d4a6f,stroke:#60a5fa,stroke-width:3px
  style Controllers fill:#1e3a5f,stroke:#60a5fa,stroke-width:3px
  style Services1 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px
  style Services2 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px
  style Services3 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px
  style Services4 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px
  style Services5 fill:#2d4a6f,stroke:#60a5fa,stroke-width:2px
  style Blockchain fill:#1e3a5f,stroke:#10b981,stroke-width:2px
  style Payment fill:#1e3a5f,stroke:#f59e0b,stroke-width:2px
  style Database fill:#1e3a5f,stroke:#ef4444,stroke-width:3px
  style External fill:#1e3a5f,stroke:#8b5cf6,stroke-width:3px
  
  click Controllers "#controllers" "View All Controllers"
  click Services1 "#services" "View All Services"
  click Database "#database" "View Database Schema"
  click External "#external" "View Integrations"
`
  },

  overview: {
    id: 'overview',
    title: 'System Overview',
    subtitle: 'Complete architecture at a glance',
    icon: '🏗️',
    type: 'composite',
    description: 'High-level view of the entire Arnitex backend system',
    children: ['controllers', 'services', 'database', 'flows', 'external'],
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
    Database[(81 Tables)]
  end

  subgraph Integration["External"]
    Blockchain[Blockchain APIs]
    PaymentAPI[Payment APIs]
    KYCAPI[KYC APIs]
  end

  Clients --> Security
  Security --> API
  API --> Business
  Business --> Data
  Business --> Integration

  click Controllers "#controllers" "View Controllers"
  click Services "#services" "View Services"
  click Database "#database" "View Database"
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

  click AdminC "#AdminController" "View Details"
  click UserC "#CustomerController" "View Details"
  click OrderC "#OrderController" "View Details"
  click WalletC "#WalletController" "View Details"
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
flowchart LR
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

  OrderS --> WalletS
  OrderS --> TradeS
  WalletS --> ApieS
  WalletS --> BalanceS
  WalletS --> DepositS
  DepositS --> PGW
  PGW --> Vandar
  PGW --> Jibit
  PGW --> NextPay
  WithdrawS --> ApieS
  CustomerS --> FinoTech
  CustomerS --> JibitKYC
  CustomerS --> NotifS

  click OrderS "#OrderService" "View Details"
  click WalletS "#WalletService" "View Details"
  click ApieS "#ApieService" "View Details"
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
    O1[User submits order]
    O2[Validate DTO]
    O3{Market active?}
    O4[Check unit price]
    O5[Lock funds]
    O6[Create order]
    O7[Matching engine]
    O8{Match found?}
    O9[Execute trade]
    O10[Order in book]

    O1 --> O2
    O2 --> O3
    O3 -->|Yes| O4
    O4 --> O5
    O5 --> O6
    O6 --> O7
    O7 --> O8
    O8 -->|Yes| O9
    O8 -->|No| O10
  end

  subgraph WithdrawFlow["Withdrawal Flow"]
    W1[Create request]
    W2[Check limits]
    W3[Send OTP]
    W4[Confirm OTP]
    W5{Auto approve?}
    W6[Admin review]
    W7[Create on-chain tx]
    W8[Update status]
    W9[Deduct balance]

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
    D1[Initiate deposit]
    D2[Select gateway]
    D3[Get redirect URL]
    D4[User pays]
    D5[Gateway callback]
    D6[Verify payment]
    D7{Successful?}
    D8[Credit balance]
    D9[Send notification]

    D1 --> D2
    D2 --> D3
    D3 --> D4
    D4 --> D5
    D5 --> D6
    D6 --> D7
    D7 -->|Yes| D8
    D8 --> D9
  end

  subgraph KYCFlow["KYC Verification"]
    K1[Submit profile]
    K2{Country Iran?}
    K3[Select KYC provider]
    K4[Validate NID]
    K5[Match IBAN]
    K6[Admin review]
    K7{Approved?}
    K8[Update to AUTHORIZED]

    K1 --> K2
    K2 -->|Yes| K3
    K3 --> K4
    K4 --> K5
    K5 --> K6
    K6 --> K7
    K7 -->|Yes| K8
  end
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
