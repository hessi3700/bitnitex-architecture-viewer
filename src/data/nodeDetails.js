// Detailed information for specific nodes/components
export const nodeDetails = {
  // Controllers
  AdminController: {
    id: 'AdminController',
    type: 'controller',
    title: 'Admin Controller',
    icon: '👨‍💼',
    description: 'Manages admin user operations including authentication, CRUD, and role management.',
    endpoints: [
      { method: 'POST', path: '/api/admins/login', description: 'Admin authentication' },
      { method: 'POST', path: '/api/admins/create', description: 'Create new admin', auth: 'CREATE_ADMINS' },
      { method: 'GET', path: '/api/admins', description: 'List all admins', auth: 'LIST_ADMINS' },
      { method: 'PUT', path: '/api/admins/:id', description: 'Update admin', auth: 'UPDATE_ADMINS' },
      { method: 'DELETE', path: '/api/admins/:id', description: 'Delete admin', auth: 'DELETE_ADMINS' }
    ],
    services: ['AdminService', 'RoleService', 'AuthenticateService'],
    tags: ['Admin', 'Authentication', 'RBAC']
  },

  CustomerController: {
    id: 'CustomerController',
    type: 'controller',
    title: 'Customer Controller',
    icon: '👤',
    description: 'Comprehensive user management including registration, authentication, profile, KYC, 2FA, and notifications.',
    endpoints: [
      { method: 'POST', path: '/api/users/register', description: 'User registration' },
      { method: 'POST', path: '/api/users/login', description: 'User login with password' },
      { method: 'POST', path: '/api/users/login-with-otp', description: 'Login via OTP' },
      { method: 'GET', path: '/api/users/google-sso', description: 'Google SSO authentication' },
      { method: 'GET', path: '/api/users/profile', description: 'Get user profile', auth: 'USER' },
      { method: 'PUT', path: '/api/users/kyc', description: 'Submit KYC documents', auth: 'USER' },
      { method: 'POST', path: '/api/users/2fa/enable', description: 'Enable 2FA', auth: 'USER' },
      { method: 'GET', path: '/api/users/login-history', description: 'Get login history', auth: 'USER' }
    ],
    services: ['CustomerService', 'CustomerTokenService', 'EmailService', 'SMSService', 'FinoTechService', 'JibitService'],
    tags: ['User', 'Authentication', 'KYC', '2FA']
  },

  OrderController: {
    id: 'OrderController',
    type: 'controller',
    title: 'Order Controller',
    icon: '📊',
    description: 'Handles order creation, cancellation, and queries for P2P trading.',
    endpoints: [
      { method: 'POST', path: '/api/orders/buy', description: 'Create buy order', auth: 'AUTHORIZED_USER' },
      { method: 'POST', path: '/api/orders/sell', description: 'Create sell order', auth: 'AUTHORIZED_USER' },
      { method: 'DELETE', path: '/api/orders/:id', description: 'Cancel order', auth: 'USER' },
      { method: 'GET', path: '/api/orders', description: 'Get user orders', auth: 'USER' },
      { method: 'GET', path: '/api/orders/order-book', description: 'Get order book for market' },
      { method: 'GET', path: '/api/orders/market-buy-sell-whole', description: 'Calculate order price', auth: 'USER' }
    ],
    services: ['OrderService', 'CreateOrderService', 'MarketService', 'CustomerService'],
    tags: ['Trading', 'Orders', 'P2P']
  },

  WalletController: {
    id: 'WalletController',
    type: 'controller',
    title: 'Wallet Controller',
    icon: '💰',
    description: 'Manages cryptocurrency wallets, addresses, deposits, and withdrawals.',
    endpoints: [
      { method: 'POST', path: '/api/wallets', description: 'Create HD wallet', auth: 'CREATE_WALLET' },
      { method: 'POST', path: '/api/wallets/generate-address', description: 'Generate new address', auth: 'CREATE_WALLET_ADDRESS' },
      { method: 'POST', path: '/api/wallets/withdrawal-request', description: 'Create withdrawal', auth: 'AUTHORIZED_USER' },
      { method: 'GET', path: '/api/wallets/balance', description: 'Get wallet balance', auth: 'USER' },
      { method: 'POST', path: '/api/wallets/change-password', description: 'Change wallet password', auth: 'AUTHORIZED_USER' },
      { method: 'POST', path: '/api/wallets/toman-deposit', description: 'Fiat deposit via gateway', auth: 'USER' }
    ],
    services: ['WalletService', 'ApieService', 'DepositService', 'WithdrawalRequestService', 'PaymentGateway'],
    tags: ['Wallet', 'Blockchain', 'Deposits', 'Withdrawals']
  },

  GiftCodeController: {
    id: 'GiftCodeController',
    type: 'controller',
    title: 'Gift Code Controller',
    icon: '🎁',
    description: 'Manages promotional gift codes and referral rewards.',
    endpoints: [
      { method: 'POST', path: '/api/gift-code', description: 'Create new gift code', auth: 'CREATE_GIFT_CODE' },
      { method: 'PUT', path: '/api/gift-code/use', description: 'Redeem gift code', auth: 'USER' },
      { method: 'POST', path: '/api/gift-code/register/:prefix', description: 'Register with gift code prefix', auth: 'PUBLIC' },
      { method: 'GET', path: '/api/gift-code', description: 'List gift codes', auth: 'LIST_GIFT_CODE' },
      { method: 'DELETE', path: '/api/gift-code/:id', description: 'Delete gift code', auth: 'DELETE_GIFT_CODE' }
    ],
    services: ['GiftCodeService', 'CustomerService', 'CustomerWalletService'],
    tags: ['Promotions', 'Rewards', 'Marketing']
  },

  TradeController: {
    id: 'TradeController',
    type: 'controller',
    title: 'Trade Controller',
    icon: '💹',
    description: 'Provides trade history and analytics for executed orders.',
    endpoints: [
      { method: 'GET', path: '/api/trades', description: 'Get user trade history', auth: 'USER' },
      { method: 'GET', path: '/api/trades/history', description: 'Get market trade history', auth: 'PUBLIC' },
      { method: 'GET', path: '/api/trades/admin', description: 'Get all trades (admin)', auth: 'LIST_TRADES' },
      { method: 'GET', path: '/api/trades/:id', description: 'Get specific trade', auth: 'USER' }
    ],
    services: ['TradeService', 'MarketService'],
    tags: ['Trading', 'History', 'Analytics']
  },

  MarketController: {
    id: 'MarketController',
    type: 'controller',
    title: 'Market Controller',
    icon: '📈',
    description: 'Manages trading markets and market information.',
    endpoints: [
      { method: 'GET', path: '/api/markets', description: 'List all markets', auth: 'PUBLIC' },
      { method: 'POST', path: '/api/markets', description: 'Create market', auth: 'CREATE_MARKET' },
      { method: 'PUT', path: '/api/markets/activate', description: 'Activate/deactivate market', auth: 'UPDATE_MARKET' },
      { method: 'GET', path: '/api/markets/:id', description: 'Get market details', auth: 'PUBLIC' },
      { method: 'DELETE', path: '/api/markets/:id', description: 'Delete market', auth: 'DELETE_MARKET' }
    ],
    services: ['MarketService', 'CoinService'],
    tags: ['Markets', 'Trading Pairs', 'Configuration']
  },

  CoinController: {
    id: 'CoinController',
    type: 'controller',
    title: 'Coin Controller',
    icon: '🪙',
    description: 'Manages cryptocurrency information and pricing.',
    endpoints: [
      { method: 'GET', path: '/api/coins', description: 'List all coins', auth: 'PUBLIC' },
      { method: 'GET', path: '/api/coins/price/usd', description: 'Get USD prices', auth: 'PUBLIC' },
      { method: 'GET', path: '/api/coins/price/from-to', description: 'Get exchange rate', auth: 'PUBLIC' },
      { method: 'POST', path: '/api/coins/tether-price', description: 'Update USDT price', auth: 'UPDATE_COIN' },
      { method: 'POST', path: '/api/coins', description: 'Create coin', auth: 'CREATE_COIN' }
    ],
    services: ['CoinService', 'MarketService'],
    tags: ['Cryptocurrency', 'Pricing', 'Assets']
  },

  ExchangeActionController: {
    id: 'ExchangeActionController',
    type: 'controller',
    title: 'Exchange Action Controller',
    icon: '🔄',
    description: 'Handles OTC (over-the-counter) exchange operations.',
    endpoints: [
      { method: 'POST', path: '/api/exchange/buy', description: 'OTC buy request', auth: 'USER' },
      { method: 'POST', path: '/api/exchange/sell', description: 'OTC sell request', auth: 'USER' },
      { method: 'POST', path: '/api/exchange/approve-order', description: 'Approve OTC order', auth: 'APPROVE_EXCHANGE' },
      { method: 'GET', path: '/api/exchange/orders', description: 'List OTC orders', auth: 'LIST_EXCHANGE' }
    ],
    services: ['ExchangeActionService', 'CustomerWalletService', 'CoinService'],
    tags: ['OTC', 'Exchange', 'Trading']
  },

  TicketController: {
    id: 'TicketController',
    type: 'controller',
    title: 'Ticket Controller',
    icon: '🎫',
    description: 'Customer support ticket system.',
    endpoints: [
      { method: 'GET', path: '/api/tickets', description: 'List user tickets', auth: 'USER' },
      { method: 'POST', path: '/api/tickets', description: 'Create new ticket', auth: 'USER' },
      { method: 'POST', path: '/api/tickets/message/:id', description: 'Add message to ticket', auth: 'USER' },
      { method: 'PUT', path: '/api/tickets/:id/close', description: 'Close ticket', auth: 'USER' },
      { method: 'GET', path: '/api/tickets/admin', description: 'List all tickets (admin)', auth: 'LIST_TICKETS' }
    ],
    services: ['TicketService', 'MessageService', 'FileService'],
    tags: ['Support', 'Customer Service', 'Communication']
  },

  BlogController: {
    id: 'BlogController',
    type: 'controller',
    title: 'Blog Controller',
    icon: '📝',
    description: 'Blog and content management.',
    endpoints: [
      { method: 'GET', path: '/api/blog', description: 'List blog posts', auth: 'PUBLIC' },
      { method: 'POST', path: '/api/blog', description: 'Create blog post', auth: 'CREATE_BLOG' },
      { method: 'PUT', path: '/api/blog/:id', description: 'Update blog post', auth: 'UPDATE_BLOG' },
      { method: 'DELETE', path: '/api/blog/:id', description: 'Delete blog post', auth: 'DELETE_BLOG' },
      { method: 'GET', path: '/api/blog/:id', description: 'Get blog post', auth: 'PUBLIC' }
    ],
    services: ['BlogService', 'FileService'],
    tags: ['Content', 'Blog', 'CMS']
  },

  ReferralCodeController: {
    id: 'ReferralCodeController',
    type: 'controller',
    title: 'Referral Code Controller',
    icon: '🔗',
    description: 'Manages referral program and rewards.',
    endpoints: [
      { method: 'POST', path: '/api/referral/create', description: 'Create referral code', auth: 'USER' },
      { method: 'GET', path: '/api/referral/stats', description: 'Get referral statistics', auth: 'USER' },
      { method: 'POST', path: '/api/referral/use/:code', description: 'Use referral code', auth: 'PUBLIC' }
    ],
    services: ['ReferralService', 'CustomerService', 'CustomerWalletService'],
    tags: ['Referral', 'Marketing', 'Rewards']
  },

  RolesController: {
    id: 'RolesController',
    type: 'controller',
    title: 'Roles Controller',
    icon: '🔐',
    description: 'Role and privilege management for RBAC.',
    endpoints: [
      { method: 'GET', path: '/api/roles', description: 'List all roles', auth: 'LIST_ROLES' },
      { method: 'POST', path: '/api/roles', description: 'Create role', auth: 'CREATE_ROLE' },
      { method: 'GET', path: '/api/roles/privileges', description: 'List all privileges', auth: 'LIST_PRIVILEGES' },
      { method: 'PUT', path: '/api/roles/:id', description: 'Update role', auth: 'UPDATE_ROLE' }
    ],
    services: ['RoleService', 'PrivilegeService'],
    tags: ['RBAC', 'Security', 'Authorization']
  },

  // Services
  OrderService: {
    id: 'OrderService',
    type: 'service',
    title: 'Order Service',
    icon: '📈',
    description: 'Core trading engine handling order creation, matching, cancellation, and order book management.',
    methods: [
      'createOrder(orderDTO, customer, market, force): OrderFullDTO',
      'deleteOrder(id, email): void',
      'getOrders(...filters): PageDTO<OrderFullDTO>',
      'getOrderBook(marketType, username): Map<String, List<OrderInOrderBookDTO>>',
      'calculateOrderFullPrice(order): Double',
      'repayBalance(order): void',
      'orderQueueRemover(): void (scheduled)',
      'deleteOrderFromTable(): void (scheduled)'
    ],
    responsibilities: [
      'Order validation (price, amount, min/max)',
      'Fund locking in customer wallet',
      'Order matching with existing orders',
      'Trade execution and balance transfer',
      'Order book queries (buy/sell sides)',
      'Order expiration handling',
      'Queue management for order processing'
    ],
    tags: ['Trading', 'Order Book', 'Matching Engine']
  },

  WalletService: {
    id: 'WalletService',
    type: 'service',
    title: 'Wallet Service',
    icon: '💼',
    description: 'Manages HD and account-based wallets, address generation, and on-chain transactions.',
    methods: [
      'createHDWallet(request): WalletResponseHalfDTO',
      'generateAddressForWallet(request): PageDTO<BlockChainAddressHalfDTO>',
      'createTransaction(request): TransactionResponseDTO',
      'createWithdrawalRequest(request, customer): WithdrawalResponseDTO',
      'getCustomerWalletAddress(customer, coin, tokenType): WalletAddressHalfDTO',
      'getTotalBalance(username): TotalBalances',
      'changePassword(passwordDTO): void',
      'exportWalletPrivateKeys(mnemonicDTO, fileName, response): void'
    ],
    responsibilities: [
      'HD wallet creation via Apie',
      'Address generation for deposits',
      'Withdrawal request validation and OTP',
      'Balance queries (custodial + P2P)',
      'QR code generation for addresses',
      'Wallet password management',
      'Private key export (encrypted)'
    ],
    tags: ['Wallet', 'HD Wallet', 'Blockchain', 'Security']
  },

  ApieService: {
    id: 'ApieService',
    type: 'service',
    title: 'Apie Service',
    icon: '⛓️',
    description: 'Blockchain provider integration for multi-chain wallet and transaction operations.',
    methods: [
      'createHDWallet(request, cryptoNetwork): CreateWalletResponse',
      'generateHDWalletAddress(network, walletName, index): String',
      'getWalletBalance(request, network): BtcBaseWalletBalanceResponse',
      'checkConfirmedTransactionRegularCoins(address, coin): ConfirmedAmountDTO',
      'createRawTransaction(request, network): TransactionResponseDTO',
      'freezeBalance(request, network): FreezeTronResponse'
    ],
    responsibilities: [
      'Multi-chain HD wallet creation (ETH, TRON, BTC, XRP, XLM, BSC, Dash)',
      'Hierarchical deterministic address generation',
      'Balance queries across chains',
      'Raw transaction creation and signing',
      'Transaction confirmation tracking',
      'TRON-specific operations (freeze/unfreeze)'
    ],
    supportedChains: ['Ethereum', 'TRON', 'Bitcoin', 'Ripple', 'Stellar', 'BSC', 'Dash'],
    tags: ['Blockchain', 'Multi-chain', 'HD Wallet', 'Transactions']
  },

  CustomerService: {
    id: 'CustomerService',
    type: 'service',
    title: 'Customer Service',
    icon: '👥',
    description: 'User account management, authentication, profile, and KYC orchestration.',
    methods: [
      'register(userDTO): RegisterResponseDto',
      'authenticate(email, password): Customer',
      'getCustomerByEmail(email): Customer',
      'updateProfile(customerId, profileDTO): Customer',
      'submitKYC(customerId, kycDTO): KYCStatus',
      'enable2FA(customerId): TwoFactorSecret',
      'verify2FA(customerId, code): boolean',
      'getLoginHistory(customerId): List<LoginHistory>'
    ],
    responsibilities: [
      'User registration with email/password',
      'Authentication and JWT token generation',
      'Profile management (name, phone, country)',
      'KYC document submission',
      '2FA setup and verification',
      'Login history tracking',
      'Account level management (USER, AUTHORIZED_USER)',
      'User notifications'
    ],
    tags: ['User Management', 'Authentication', 'KYC']
  },

  TradeService: {
    id: 'TradeService',
    type: 'service',
    title: 'Trade Service',
    icon: '💹',
    description: 'Trade execution, history, and statistics.',
    methods: [
      'executeTrade(buyOrder, sellOrder, amount, price): Trade',
      'getTrades(filters): PageDTO<TradeFullDTO>',
      'getLastTradesHistory(marketType): List<TradeHistoryInMarketDTO>',
      'getTradeStatistics(marketType): TradeStatistics',
      'exportTradesToExcel(filters): byte[]'
    ],
    responsibilities: [
      'Trade execution between matched orders',
      'Balance transfer between buyer and seller',
      'Trade history queries',
      'Volume and statistics calculation',
      'Excel export for admin',
      'Market activity tracking'
    ],
    tags: ['Trading', 'Execution', 'History']
  },

  PaymentGateway: {
    id: 'PaymentGateway',
    type: 'service',
    title: 'Payment Gateway',
    icon: '💳',
    description: 'Interface for fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).',
    implementations: ['VandarService', 'JibitService', 'NextPayService', 'SadadService', 'ZarinpalService', 'RayanPayService'],
    methods: [
      'deposit(request, customer): GatewayResponseDTO',
      'withdraw(iban, amount, trackId, description): GatewayWithdrawResponseDTO',
      'updateDepositRequest(depositRequest, updateDTO): TomanTransaction',
      'getWithdrawalRequests(): List<GatewayWithdrawSettlement>',
      'incomingDepositByIdTransactions(latestRecordDateTime): List<PaymentGatewayDepositByIdTransaction>'
    ],
    responsibilities: [
      'Gateway-agnostic deposit initiation',
      'Redirect URL generation',
      'Callback handling and verification',
      'Withdrawal to bank account/IBAN',
      'Transaction status updates',
      'Settlement reconciliation'
    ],
    tags: ['Payment', 'Fiat', 'IRR', 'Gateway']
  },

  // Database Tables
  'orders-table': {
    id: 'orders-table',
    type: 'database',
    title: 'orders Table',
    icon: '🗃️',
    description: 'Stores all P2P trading orders (buy/sell, limit/market, stop, OCO).',
    schema: [
      { name: 'id', type: 'BIGINT', key: 'PRIMARY KEY' },
      { name: 'customer_id', type: 'BIGINT', key: 'FOREIGN KEY' },
      { name: 'market_id', type: 'BIGINT', key: 'FOREIGN KEY' },
      { name: 'order_type', type: 'VARCHAR(255)', description: 'LIMITED_BUY, LIMITED_SELL, MARKET_BUY, STOP_LOSS_BUY, OCO_BUY, etc.' },
      { name: 'status', type: 'VARCHAR(255)', description: 'IS_OPEN, PARTIALLY_EXECUTED, COMPLETELY_EXECUTED, CANCELED, EXPIRED' },
      { name: 'amount', type: 'DOUBLE', description: 'Order amount in base coin' },
      { name: 'unit_price', type: 'DOUBLE', description: 'Price per unit in quote coin' },
      { name: 'executed_amount', type: 'DOUBLE', description: 'Amount filled so far' },
      { name: 'remaining_amount', type: 'DOUBLE', description: 'Amount still open' },
      { name: 'executed_percent', type: 'DOUBLE', description: 'Percentage executed' },
      { name: 'stop', type: 'DOUBLE', description: 'Stop price for stop-loss orders' },
      { name: 'expires_at', type: 'DATETIME', description: 'Expiration timestamp' },
      { name: 'is_triggerred', type: 'TINYINT', description: 'For stop-loss/OCO orders' },
      { name: 'side_order_id', type: 'BIGINT', description: 'For OCO orders' }
    ],
    indexes: ['customer_id', 'market_id', 'status', 'order_type'],
    relationships: [
      'customers.id → orders.customer_id',
      'markets.id → orders.market_id',
      'orders.id → trades.buyer_order_id / seller_order_id'
    ],
    tags: ['Trading', 'Orders', 'Core']
  },

  'customer_wallet-table': {
    id: 'customer_wallet-table',
    type: 'database',
    title: 'customer_wallet Table',
    icon: '💰',
    description: 'User balance tracking for custodial and P2P trading.',
    schema: [
      { name: 'id', type: 'BIGINT', key: 'PRIMARY KEY' },
      { name: 'customer_id', type: 'BIGINT', key: 'FOREIGN KEY' },
      { name: 'currency_id', type: 'BIGINT', key: 'FOREIGN KEY (coin)' },
      { name: 'custodial_credit', type: 'DOUBLE', description: 'Balance for OTC exchange' },
      { name: 'p2p_credit', type: 'DOUBLE', description: 'Available balance for P2P trading' },
      { name: 'p2p_blocked_credit', type: 'DOUBLE', description: 'Locked in open orders' },
      { name: 'total_balance', type: 'DOUBLE', description: 'Sum of all credits' }
    ],
    notes: [
      'Separate balances for custodial (OTC) and P2P trading',
      'p2p_blocked_credit is funds locked in open orders',
      'All monetary values stored as DOUBLE (not recommended for production - use DECIMAL)'
    ],
    relationships: [
      'customers.id → customer_wallet.customer_id',
      'COIN_ENTITY.id → customer_wallet.currency_id'
    ],
    tags: ['Balance', 'Wallet', 'Core']
  },

  // ========== MISSING COMPONENTS (Levels 31-60) ==========
  
  // Level 31: Margin Trading
  MarginTrading: {
    id: 'MarginTrading',
    type: 'service',
    title: 'Margin Trading System',
    icon: '🚀',
    description: 'Margin trading with leverage, margin calls, liquidation engine, and position management. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/margin/accounts', description: 'Create margin account', auth: 'USER' },
      { method: 'POST', path: '/api/margin/positions', description: 'Open position', auth: 'USER' },
      { method: 'GET', path: '/api/margin/positions', description: 'Get positions', auth: 'USER' },
      { method: 'POST', path: '/api/margin/close', description: 'Close position', auth: 'USER' }
    ],
    services: ['MarginService', 'LiquidationService'],
    tags: ['Missing', 'Advanced Trading', 'Margin', 'Leverage']
  },

  // Level 32: Futures & Perpetual
  FuturesPerpetual: {
    id: 'FuturesPerpetual',
    type: 'service',
    title: 'Futures & Perpetual Contracts',
    icon: '🚀',
    description: 'Futures and perpetual swap contracts with funding rates and mark prices. NOT in original Java codebase.',
    endpoints: [
      { method: 'GET', path: '/api/futures/contracts', description: 'List contracts' },
      { method: 'POST', path: '/api/futures/positions', description: 'Open futures position', auth: 'USER' },
      { method: 'GET', path: '/api/futures/funding-rate', description: 'Get funding rate' }
    ],
    services: ['FuturesService', 'PerpetualService', 'FundingRateService'],
    tags: ['Missing', 'Advanced Trading', 'Futures', 'Perpetual']
  },

  // Level 33: Options Trading
  OptionsTrading: {
    id: 'OptionsTrading',
    type: 'service',
    title: 'Options Trading System',
    icon: '🚀',
    description: 'Options trading with Black-Scholes pricing and Greeks calculation. NOT in original Java codebase.',
    endpoints: [
      { method: 'GET', path: '/api/options/chains', description: 'Get options chain' },
      { method: 'POST', path: '/api/options/positions', description: 'Open options position', auth: 'USER' },
      { method: 'POST', path: '/api/options/exercise', description: 'Exercise option', auth: 'USER' }
    ],
    services: ['OptionsService', 'BlackScholesService', 'GreeksService'],
    tags: ['Missing', 'Advanced Trading', 'Options', 'Derivatives']
  },

  // Level 36: AML Monitoring
  AMLMonitoring: {
    id: 'AMLMonitoring',
    type: 'service',
    title: 'AML Transaction Monitoring',
    icon: '🚀',
    description: 'Anti-Money Laundering transaction monitoring with pattern detection and SAR. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/aml/monitor', description: 'Monitor transaction', auth: 'ADMIN' },
      { method: 'GET', path: '/api/aml/sar', description: 'Get SAR reports', auth: 'ADMIN' },
      { method: 'POST', path: '/api/aml/risk-score', description: 'Calculate risk score', auth: 'ADMIN' }
    ],
    services: ['AMLService', 'TransactionMonitoringService', 'SARService'],
    tags: ['Missing', 'Compliance', 'AML', 'Risk']
  },

  // Level 37: Sanctions Screening
  SanctionsScreening: {
    id: 'SanctionsScreening',
    type: 'service',
    title: 'Sanctions Screening System',
    icon: '🚀',
    description: 'Sanctions screening against OFAC, EU, and UN lists. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/sanctions/screen', description: 'Screen customer/address', auth: 'ADMIN' },
      { method: 'GET', path: '/api/sanctions/matches', description: 'Get matches', auth: 'ADMIN' }
    ],
    services: ['SanctionsService', 'WatchlistService'],
    tags: ['Missing', 'Compliance', 'Sanctions', 'Screening']
  },

  // Level 41: Cold Wallet Management
  ColdWalletManagement: {
    id: 'ColdWalletManagement',
    type: 'service',
    title: 'Cold Wallet Management',
    icon: '🚀',
    description: 'Cold wallet management with HSM integration for secure key storage. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/cold-wallet/create', description: 'Create cold wallet', auth: 'ADMIN' },
      { method: 'POST', path: '/api/cold-wallet/sweep', description: 'Sweep to hot wallet', auth: 'ADMIN' },
      { method: 'GET', path: '/api/cold-wallet/balance', description: 'Get balance', auth: 'ADMIN' }
    ],
    services: ['ColdWalletService', 'HSMService'],
    tags: ['Missing', 'Security', 'Cold Wallet', 'HSM']
  },

  // Level 42: Multi-Signature Wallets
  MultiSignatureWallets: {
    id: 'MultiSignatureWallets',
    type: 'service',
    title: 'Multi-Signature Wallets',
    icon: '🚀',
    description: 'Multi-signature wallet system with M-of-N threshold signatures. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/multisig/create', description: 'Create multi-sig wallet', auth: 'USER' },
      { method: 'POST', path: '/api/multisig/sign', description: 'Sign transaction', auth: 'USER' },
      { method: 'GET', path: '/api/multisig/pending', description: 'Get pending signatures', auth: 'USER' }
    ],
    services: ['MultiSigService', 'SignatureService'],
    tags: ['Missing', 'Security', 'Multi-Sig', 'Wallet']
  },

  // Level 46: Staking Services
  StakingServices: {
    id: 'StakingServices',
    type: 'service',
    title: 'Staking Services',
    icon: '🚀',
    description: 'Staking services for earning rewards on cryptocurrencies. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/staking/stake', description: 'Stake coins', auth: 'USER' },
      { method: 'POST', path: '/api/staking/unstake', description: 'Unstake coins', auth: 'USER' },
      { method: 'GET', path: '/api/staking/rewards', description: 'Get rewards', auth: 'USER' }
    ],
    services: ['StakingService', 'RewardsService'],
    tags: ['Missing', 'Financial Services', 'Staking', 'Rewards']
  },

  // Level 47: Lending & Borrowing
  LendingBorrowing: {
    id: 'LendingBorrowing',
    type: 'service',
    title: 'Lending & Borrowing Platform',
    icon: '🚀',
    description: 'Lending and borrowing platform with collateral management. NOT in original Java codebase.',
    endpoints: [
      { method: 'POST', path: '/api/lending/borrow', description: 'Borrow funds', auth: 'USER' },
      { method: 'POST', path: '/api/lending/lend', description: 'Lend funds', auth: 'USER' },
      { method: 'GET', path: '/api/lending/positions', description: 'Get positions', auth: 'USER' }
    ],
    services: ['LendingService', 'BorrowingService', 'CollateralService'],
    tags: ['Missing', 'Financial Services', 'Lending', 'Borrowing']
  },

  // Level 51: Trading Analytics
  TradingAnalytics: {
    id: 'TradingAnalytics',
    type: 'service',
    title: 'Trading Analytics & Statistics',
    icon: '🚀',
    description: 'Trading analytics with statistics, charts, and insights. NOT in original Java codebase.',
    endpoints: [
      { method: 'GET', path: '/api/analytics/trading/stats', description: 'Get trading statistics', auth: 'USER' },
      { method: 'GET', path: '/api/analytics/trading/charts', description: 'Get chart data', auth: 'USER' }
    ],
    services: ['TradingAnalyticsService', 'StatisticsService'],
    tags: ['Missing', 'Analytics', 'Trading', 'Statistics']
  }
}

// Helper to get node details
export const getNodeDetails = (nodeId) => {
  return nodeDetails[nodeId] || null
}

