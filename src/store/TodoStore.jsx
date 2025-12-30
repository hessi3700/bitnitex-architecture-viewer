import React, { createContext, useContext, useState, useEffect } from 'react'

// Task status enum
export const TaskStatus = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  BLOCKED: 'blocked'
}

// Task priority enum
export const TaskPriority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  CRITICAL: 'critical'
}

// All tasks are loaded from the database - no hardcoded tasks
// Tasks are seeded via backend API endpoint /api/tasks/seed
// If database is empty, tasks need to be seeded via the backend seed endpoint

const NODE_TO_LEVEL_MAPPING = {
  // Level 1: Project Foundation
  'ProjectSetup': 'Level1_ProjectSetup',
  'Project Foundation': 'Level1_ProjectSetup',
  'NestJS Setup': 'Level1_ProjectSetup',
  'Project Setup': 'Level1_ProjectSetup',
  
  // Level 2: Database & Authentication
  'Database': 'Level2_DatabaseAuth',
  'DATABASE': 'Level2_DatabaseAuth',
  'Database 81': 'Level2_DatabaseAuth',
  'Authentication': 'Level2_DatabaseAuth',
  'Auth': 'Level2_DatabaseAuth',
  'JWT': 'Level2_DatabaseAuth',
  '2FA': 'Level2_DatabaseAuth',
  'OTP': 'Level2_DatabaseAuth',
  'RBAC': 'Level2_DatabaseAuth',
  'Security': 'Level2_DatabaseAuth',
  'SECURITY': 'Level2_DatabaseAuth',
  
  // Level 3: Customer & Identity
  'Customer': 'Level3_CustomerIdentity',
  'CustomerController': 'Level3_CustomerIdentity',
  'CustomerService': 'Level3_CustomerIdentity',
  'Identity': 'Level3_CustomerIdentity',
  'IDENTITY KYC': 'Level3_CustomerIdentity',
  'Services3': 'Level3_CustomerIdentity', // From diagram
  
  // Level 4: Notifications
  'Email': 'Level4_Notifications',
  'EmailService': 'Level4_Notifications',
  'SMS': 'Level4_Notifications',
  'SMSService': 'Level4_Notifications',
  'Notification': 'Level4_Notifications',
  'NotificationService': 'Level4_Notifications',
  'NOTIFICATIONS': 'Level4_Notifications',
  'Services4': 'Level4_Notifications', // From diagram
  
  // Level 5: Wallet Services
  'Wallet': 'Level5_WalletServices',
  'WalletService': 'Level5_WalletServices',
  'CustomerWallet': 'Level5_WalletServices',
  'CustomerWalletService': 'Level5_WalletServices',
  'Deposit': 'Level5_WalletServices',
  'DepositService': 'Level5_WalletServices',
  'Withdrawal': 'Level5_WalletServices',
  'WithdrawalService': 'Level5_WalletServices',
  'WALLET SERVICES': 'Level5_WalletServices',
  'Services2': 'Level5_WalletServices', // From diagram
  
  // Level 6: Blockchain
  'ApieService': 'Level6_Blockchain',
  'Apie': 'Level6_Blockchain',
  'Blockchain': 'Level6_Blockchain',
  'BLOCKCHAIN': 'Level6_Blockchain',
  'ETH': 'Level6_Blockchain',
  'TRON': 'Level6_Blockchain',
  'BTC': 'Level6_Blockchain',
  'XRP': 'Level6_Blockchain',
  'XLM': 'Level6_Blockchain',
  'BSC': 'Level6_Blockchain',
  
  // Level 7: Trading Engine
  'Order': 'Level7_TradingEngine',
  'OrderService': 'Level7_TradingEngine',
  'Trade': 'Level7_TradingEngine',
  'TradeService': 'Level7_TradingEngine',
  'OrderBook': 'Level7_TradingEngine',
  'Trading Engine': 'Level7_TradingEngine',
  'Services1': 'Level7_TradingEngine', // From diagram
  
  // Level 8: Market & Coin Management
  'Market': 'Level8_MarketManagement',
  'MarketService': 'Level8_MarketManagement',
  'Coin': 'Level8_MarketManagement',
  'CoinService': 'Level8_MarketManagement',
  'MarketController': 'Level8_MarketManagement',
  'CoinController': 'Level8_MarketManagement',
  
  // Level 9: Trading Controllers
  'OrderController': 'Level9_TradingControllers',
  'TradeController': 'Level9_TradingControllers',
  
  // Level 10: Wallet Controller
  'WalletController': 'Level10_WalletController',
  
  // Level 11: Payment Gateways
  'Payment': 'Level11_PaymentGateways',
  'PAYMENT GATEWAYS': 'Level11_PaymentGateways',
  'Vandar': 'Level11_PaymentGateways',
  'Jibit': 'Level11_PaymentGateways',
  'NextPay': 'Level11_PaymentGateways',
  'RayanPay': 'Level11_PaymentGateways',
  'Sadad': 'Level11_PaymentGateways',
  'Zarinpal': 'Level11_PaymentGateways',
  'PaymentGateway': 'Level11_PaymentGateways',
  
  // Level 12: KYC & Identity
  'FinoTech': 'Level12_KYCIdentity',
  'FinoTechService': 'Level12_KYCIdentity',
  'JibitService': 'Level12_KYCIdentity',
  'BankAccount': 'Level12_KYCIdentity',
  'BankAccountService': 'Level12_KYCIdentity',
  'UserAccountLevel': 'Level12_KYCIdentity',
  'UserAccountLevelService': 'Level12_KYCIdentity',
  'KYC': 'Level12_KYCIdentity',
  
  // Level 13: Admin & RBAC
  'Admin': 'Level13_AdminRBAC',
  'AdminController': 'Level13_AdminRBAC',
  'AdminService': 'Level13_AdminRBAC',
  'Role': 'Level13_AdminRBAC',
  'RoleService': 'Level13_AdminRBAC',
  'RolesController': 'Level13_AdminRBAC',
  'Privilege': 'Level13_AdminRBAC',
  
  // Level 14: OTC Exchange
  'Exchange': 'Level14_OTCExchange',
  'ExchangeAction': 'Level14_OTCExchange',
  'ExchangeActionController': 'Level14_OTCExchange',
  'ExchangeActionService': 'Level14_OTCExchange',
  'OTC': 'Level14_OTCExchange',
  
  // Level 15: Support & Content
  'Ticket': 'Level15_SupportContent',
  'TicketController': 'Level15_SupportContent',
  'TicketService': 'Level15_SupportContent',
  'Blog': 'Level15_SupportContent',
  'BlogController': 'Level15_SupportContent',
  'BlogService': 'Level15_SupportContent',
  'File': 'Level15_SupportContent',
  'FileService': 'Level15_SupportContent',
  'Message': 'Level15_SupportContent',
  'MessageService': 'Level15_SupportContent',
  'FAQ': 'Level15_SupportContent',
  'FAQService': 'Level15_SupportContent',
  'CONTENT SUPPORT': 'Level15_SupportContent',
  'Services5': 'Level15_SupportContent', // From diagram
  
  // Level 16: Promotional
  'GiftCode': 'Level16_Promotional',
  'GiftCodeController': 'Level16_Promotional',
  'GiftCodeService': 'Level16_Promotional',
  'ReferralCode': 'Level16_Promotional',
  'ReferralCodeController': 'Level16_Promotional',
  'ReferralCodeService': 'Level16_Promotional',
  
  // Level 17: Additional Services
  'ExchangeSetting': 'Level17_AdditionalServices',
  'ExchangeSettingService': 'Level17_AdditionalServices',
  'CustomerToken': 'Level17_AdditionalServices',
  'CustomerTokenService': 'Level17_AdditionalServices',
  'Alarm': 'Level17_AdditionalServices',
  'AlarmService': 'Level17_AdditionalServices',
  'Country': 'Level17_AdditionalServices',
  'CountryService': 'Level17_AdditionalServices',
  'Language': 'Level17_AdditionalServices',
  'LanguageService': 'Level17_AdditionalServices',
  'ATM': 'Level17_AdditionalServices',
  'AtmService': 'Level17_AdditionalServices',
  'CreditCard': 'Level17_AdditionalServices',
  'CreditCardService': 'Level17_AdditionalServices',
  'SaminCard': 'Level17_AdditionalServices',
  'SaminCardService': 'Level17_AdditionalServices',
  
  // Level 18: Testing & Documentation
  'Testing': 'Level18_TestingDocumentation',
  'Documentation': 'Level18_TestingDocumentation',
  'Tests': 'Level18_TestingDocumentation',
  
  // Level 19: Scheduled Tasks
  'Scheduled': 'Level19_ScheduledTasks',
  'ScheduledTasks': 'Level19_ScheduledTasks',
  'Background Jobs': 'Level19_ScheduledTasks',
  'Cron': 'Level19_ScheduledTasks',
  
  // Level 20: WebSocket & Real-time
  'WebSocket': 'Level20_WebSocketRealtime',
  'Websocket': 'Level20_WebSocketRealtime',
  'Real-time': 'Level20_WebSocketRealtime',
  'Realtime': 'Level20_WebSocketRealtime',
  'Socket': 'Level20_WebSocketRealtime',
  
  // Level 21: Error Handling & Logging
  'Error': 'Level21_ErrorHandlingLogging',
  'ErrorHandling': 'Level21_ErrorHandlingLogging',
  'Logging': 'Level21_ErrorHandlingLogging',
  'Exception': 'Level21_ErrorHandlingLogging',
  
  // Level 22: Performance & Caching
  'Performance': 'Level22_PerformanceCaching',
  'Caching': 'Level22_PerformanceCaching',
  'Cache': 'Level22_PerformanceCaching',
  'Redis': 'Level22_PerformanceCaching',
  
  // Level 23: Security Hardening
  'Security Hardening': 'Level23_SecurityHardening',
  'Rate Limiting': 'Level23_SecurityHardening',
  'CORS': 'Level23_SecurityHardening',
  'Helmet': 'Level23_SecurityHardening',
  
  // Level 24: Data Migration & Seeding
  'Migration': 'Level24_DataMigrationSeeding',
  'Seeding': 'Level24_DataMigrationSeeding',
  'Seed': 'Level24_DataMigrationSeeding',
  'Data Migration': 'Level24_DataMigrationSeeding',
  
  // Level 25: Unit Testing
  'Unit Test': 'Level25_UnitTesting',
  'Unit Testing': 'Level25_UnitTesting',
  
  // Level 26: Integration Testing
  'Integration Test': 'Level26_IntegrationTesting',
  'Integration Testing': 'Level26_IntegrationTesting',
  'E2E': 'Level26_IntegrationTesting',
  
  // Level 27: Deployment & DevOps
  'Deployment': 'Level27_DeploymentDevOps',
  'DevOps': 'Level27_DeploymentDevOps',
  'Docker': 'Level27_DeploymentDevOps',
  'CI/CD': 'Level27_DeploymentDevOps',
  
  // Level 28: Monitoring & Health Checks
  'Monitoring': 'Level28_MonitoringHealthChecks',
  'Health': 'Level28_MonitoringHealthChecks',
  'Health Check': 'Level28_MonitoringHealthChecks',
  'Metrics': 'Level28_MonitoringHealthChecks',
  
  // Level 29: API Documentation
  'Swagger': 'Level29_APIDocumentation',
  'API Documentation': 'Level29_APIDocumentation',
  'OpenAPI': 'Level29_APIDocumentation',
  
  // Level 30: Final Documentation
  'Final Documentation': 'Level30_FinalDocumentation',
  'Handoff': 'Level30_FinalDocumentation',
  
  // ========== MISSING COMPONENTS (Levels 31-60) ==========
  
  // Level 31: Margin Trading
  'Margin': 'Level31_MarginTrading',
  'MarginTrading': 'Level31_MarginTrading',
  'MarginAccount': 'Level31_MarginTrading',
  'Leverage': 'Level31_MarginTrading',
  'Liquidation': 'Level31_MarginTrading',
  
  // Level 32: Futures & Perpetual
  'Futures': 'Level32_FuturesPerpetual',
  'Perpetual': 'Level32_FuturesPerpetual',
  'PerpetualContract': 'Level32_FuturesPerpetual',
  'FundingRate': 'Level32_FuturesPerpetual',
  'MarkPrice': 'Level32_FuturesPerpetual',
  
  // Level 33: Options Trading
  'Options': 'Level33_OptionsTrading',
  'OptionsTrading': 'Level33_OptionsTrading',
  'BlackScholes': 'Level33_OptionsTrading',
  'Greeks': 'Level33_OptionsTrading',
  
  // Level 34: Advanced Order Types
  'Iceberg': 'Level34_AdvancedOrderTypes',
  'TWAP': 'Level34_AdvancedOrderTypes',
  'VWAP': 'Level34_AdvancedOrderTypes',
  'TrailingStop': 'Level34_AdvancedOrderTypes',
  'BracketOrder': 'Level34_AdvancedOrderTypes',
  
  // Level 35: Trading Bots & API
  'TradingBot': 'Level35_TradingBotsAPI',
  'TradingBots': 'Level35_TradingBotsAPI',
  'ApiKey': 'Level35_TradingBotsAPI',
  'CopyTrading': 'Level35_TradingBotsAPI',
  'SocialTrading': 'Level35_TradingBotsAPI',
  
  // Level 36: AML Monitoring
  'AML': 'Level36_AMLMonitoring',
  'AMLMonitoring': 'Level36_AMLMonitoring',
  'TransactionMonitoring': 'Level36_AMLMonitoring',
  'SAR': 'Level36_AMLMonitoring',
  'SuspiciousActivity': 'Level36_AMLMonitoring',
  
  // Level 37: Sanctions Screening
  'Sanctions': 'Level37_SanctionsScreening',
  'SanctionsScreening': 'Level37_SanctionsScreening',
  'OFAC': 'Level37_SanctionsScreening',
  'Watchlist': 'Level37_SanctionsScreening',
  
  // Level 38: Regulatory Reporting
  'Regulatory': 'Level38_RegulatoryReporting',
  'RegulatoryReporting': 'Level38_RegulatoryReporting',
  'CDD': 'Level38_RegulatoryReporting',
  'EDD': 'Level38_RegulatoryReporting',
  'Compliance': 'Level38_RegulatoryReporting',
  
  // Level 39: Tax Reporting
  'Tax': 'Level39_TaxReporting',
  'TaxReporting': 'Level39_TaxReporting',
  '1099B': 'Level39_TaxReporting',
  'TaxCalculation': 'Level39_TaxReporting',
  
  // Level 40: Advanced Risk Management
  'RiskManagement': 'Level40_RiskManagement',
  'RiskScoring': 'Level40_RiskManagement',
  'BehavioralAnalytics': 'Level40_RiskManagement',
  'DeviceFingerprinting': 'Level40_RiskManagement',
  
  // Level 41: Cold Wallet Management
  'ColdWallet': 'Level41_ColdWalletManagement',
  'ColdWalletManagement': 'Level41_ColdWalletManagement',
  'HSM': 'Level41_ColdWalletManagement',
  
  // Level 42: Multi-Signature Wallets
  'MultiSig': 'Level42_MultiSignatureWallets',
  'MultiSignature': 'Level42_MultiSignatureWallets',
  'MultiSigWallet': 'Level42_MultiSignatureWallets',
  
  // Level 43: HSM Integration
  'HSMIntegration': 'Level43_HSMIntegration',
  'HardwareSecurityModule': 'Level43_HSMIntegration',
  
  // Level 44: Advanced Security
  'AdvancedSecurity': 'Level44_AdvancedSecurity',
  'SecurityFeatures': 'Level44_AdvancedSecurity',
  'PenetrationTesting': 'Level44_AdvancedSecurity',
  
  // Level 45: Security Monitoring
  'SecurityMonitoring': 'Level45_SecurityMonitoring',
  'ThreatDetection': 'Level45_SecurityMonitoring',
  'SIEM': 'Level45_SecurityMonitoring',
  
  // Level 46: Staking Services
  'Staking': 'Level46_StakingServices',
  'StakingService': 'Level46_StakingServices',
  'StakingRewards': 'Level46_StakingServices',
  
  // Level 47: Lending & Borrowing
  'Lending': 'Level47_LendingBorrowing',
  'Borrowing': 'Level47_LendingBorrowing',
  'LendingPlatform': 'Level47_LendingBorrowing',
  
  // Level 48: Yield Farming
  'YieldFarming': 'Level48_YieldFarming',
  'LiquidityPool': 'Level48_YieldFarming',
  'DeFi': 'Level48_YieldFarming',
  
  // Level 49: Airdrops & Distribution
  'Airdrop': 'Level49_AirdropsDistribution',
  'Airdrops': 'Level49_AirdropsDistribution',
  'TokenDistribution': 'Level49_AirdropsDistribution',
  
  // Level 50: Token Listing
  'TokenListing': 'Level50_TokenListing',
  'ListingManagement': 'Level50_TokenListing',
  
  // Level 51: Trading Analytics
  'TradingAnalytics': 'Level51_TradingAnalytics',
  'TradingStatistics': 'Level51_TradingAnalytics',
  'TradingCharts': 'Level51_TradingAnalytics',
  
  // Level 52: Business Analytics
  'BusinessAnalytics': 'Level52_BusinessAnalytics',
  'BusinessMetrics': 'Level52_BusinessAnalytics',
  'BusinessReporting': 'Level52_BusinessAnalytics',
  
  // Level 53: Admin Dashboards
  'AdminDashboard': 'Level53_AdminDashboards',
  'AdminDashboards': 'Level53_AdminDashboards',
  'AdminMonitoring': 'Level53_AdminDashboards',
  
  // Level 54: Performance Optimization
  'PerformanceOptimization': 'Level54_PerformanceOptimization',
  'PerformanceProfiling': 'Level54_PerformanceOptimization',
  
  // Level 55: Data Warehouse & BI
  'DataWarehouse': 'Level55_DataWarehouse',
  'DataWarehouseBI': 'Level55_DataWarehouse',
  'ETL': 'Level55_DataWarehouse',
  'BusinessIntelligence': 'Level55_DataWarehouse',
  
  // Level 56: Fee Management
  'FeeManagement': 'Level56_FeeManagement',
  'DynamicFee': 'Level56_FeeManagement',
  'FeeTiers': 'Level56_FeeManagement',
  
  // Level 57: Enhanced Customer Support
  'CustomerSupport': 'Level57_CustomerSupport',
  'LiveChat': 'Level57_CustomerSupport',
  'SupportAutomation': 'Level57_CustomerSupport',
  
  // Level 58: Liquidity Management
  'LiquidityManagement': 'Level58_LiquidityManagement',
  'LiquidityOptimization': 'Level58_LiquidityManagement',
  
  // Level 59: Advanced Market Data
  'MarketData': 'Level59_MarketData',
  'AdvancedMarketData': 'Level59_MarketData',
  'MarketDataAggregation': 'Level59_MarketData',
  
  // Level 60: Infrastructure Enhancements
  'Infrastructure': 'Level60_Infrastructure',
  'InfrastructureEnhancements': 'Level60_Infrastructure',
  'AutoScaling': 'Level60_Infrastructure',
  'BackupRecovery': 'Level60_Infrastructure',
  
  // Controllers (map to their respective levels)
  'Controllers': 'Level9_TradingControllers', // Default to trading controllers, but will be refined
  'CONTROLLERS': 'Level9_TradingControllers',
  'CONTROLLERS 25+': 'Level9_TradingControllers',
  
  // Services groups from diagrams
  'Services1': 'Level7_TradingEngine',
  'CORE SERVICES': 'Level7_TradingEngine',
  'Core Services': 'Level7_TradingEngine',
  'Services2': 'Level5_WalletServices',
  'WALLET SERVICES': 'Level5_WalletServices',
  'Wallet Services': 'Level5_WalletServices',
  'Services3': 'Level3_CustomerIdentity',
  'IDENTITY KYC': 'Level3_CustomerIdentity',
  'Identity KYC': 'Level3_CustomerIdentity',
  'Services4': 'Level4_Notifications',
  'NOTIFICATIONS': 'Level4_Notifications',
  'Notifications': 'Level4_Notifications',
  'Services5': 'Level15_SupportContent',
  'CONTENT SUPPORT': 'Level15_SupportContent',
  'Content Support': 'Level15_SupportContent',
  
  // External services
  'External': 'Level6_Blockchain', // Default to blockchain, but will be refined
  'EXTERNAL': 'Level6_Blockchain',
  
  // Clients
  'Clients': 'Level1_ProjectSetup', // Project setup includes client integration
  'CLIENTS': 'Level1_ProjectSetup',
  'CLIENTS Web • Mobile • ATM': 'Level1_ProjectSetup',
  
  // Database
  'DATABASE 81 TABLES': 'Level2_DatabaseAuth',
  'Database 81': 'Level2_DatabaseAuth',
  'DATABASE': 'Level2_DatabaseAuth',
  
  // Common abbreviations and variations
  'Admin': 'Level13_AdminRBAC',
  'Customer': 'Level3_CustomerIdentity',
  'Order': 'Level7_TradingEngine',
  'Trade': 'Level7_TradingEngine',
  'Wallet': 'Level5_WalletServices',
  'Market': 'Level8_MarketManagement',
  'Coin': 'Level8_MarketManagement',
  'Email': 'Level4_Notifications',
  'SMS': 'Level4_Notifications',
  'Notification': 'Level4_Notifications',
  
  // Node IDs from diagrams (exact matches)
  'OrderS': 'Level7_TradingEngine',
  'TradeS': 'Level7_TradingEngine',
  'CustomerS': 'Level3_CustomerIdentity',
  'WalletS': 'Level5_WalletServices',
  'BalanceS': 'Level5_WalletServices',
  'DepositS': 'Level5_WalletServices',
  'WithdrawS': 'Level5_WalletServices',
  'ApieS': 'Level6_Blockchain',
  'NetworkS': 'Level6_Blockchain',
  'PGW': 'Level11_PaymentGateways',
  'Vandar': 'Level11_PaymentGateways',
  'Jibit': 'Level11_PaymentGateways',
  'NextPay': 'Level11_PaymentGateways',
  'Sadad': 'Level11_PaymentGateways',
  'Zarinpal': 'Level11_PaymentGateways',
  'FinoTech': 'Level12_KYCIdentity',
  'JibitKYC': 'Level12_KYCIdentity',
  'EmailS': 'Level4_Notifications',
  'SMSS': 'Level4_Notifications',
  'NotifS': 'Level4_Notifications',
  
  // Controller node IDs
  'AdminC': 'Level13_AdminRBAC',
  'RolesC': 'Level13_AdminRBAC',
  'UserC': 'Level3_CustomerIdentity',
  'AuthC': 'Level2_DatabaseAuth',
  'OrderC': 'Level9_TradingControllers',
  'TradeC': 'Level9_TradingControllers',
  'MarketC': 'Level8_MarketManagement',
  'WalletC': 'Level10_WalletController',
  'DepositC': 'Level5_WalletServices',
  'ExchangeC': 'Level14_OTCExchange',
  'CoinC': 'Level8_MarketManagement',
  'TicketC': 'Level15_SupportContent',
  'BlogC': 'Level15_SupportContent',
  'GiftC': 'Level16_Promotional',
  'RefC': 'Level16_Promotional',
  
  // Missing component node IDs (Services)
  'MarginS': 'Level31_MarginTrading',
  'FuturesS': 'Level32_FuturesPerpetual',
  'OptionsS': 'Level33_OptionsTrading',
  'AdvancedOrders': 'Level34_AdvancedOrderTypes',
  'TradingBots': 'Level35_TradingBotsAPI',
  'AML': 'Level36_AMLMonitoring',
  'Sanctions': 'Level37_SanctionsScreening',
  'Regulatory': 'Level38_RegulatoryReporting',
  'Tax': 'Level39_TaxReporting',
  'Risk': 'Level40_AdvancedRiskManagement',
  'ColdWallet': 'Level41_ColdWalletManagement',
  'MultiSig': 'Level42_MultiSignatureWallets',
  'HSM': 'Level43_HSMIntegration',
  'AdvancedSec': 'Level44_AdvancedSecurity',
  'SecMonitoring': 'Level45_SecurityMonitoring',
  'Staking': 'Level46_StakingServices',
  'Lending': 'Level47_LendingBorrowing',
  'Yield': 'Level48_YieldFarming',
  'Airdrops': 'Level49_AirdropsDistribution',
  'Listing': 'Level50_TokenListing',
  'TradingAnalytics': 'Level51_TradingAnalytics',
  'BusinessAnalytics': 'Level52_BusinessAnalytics',
  'AdminDash': 'Level53_AdminDashboards',
  'DataWarehouse': 'Level55_DataWarehouse',
  'Fees': 'Level56_FeeManagement',
  'Support': 'Level57_CustomerSupport',
  'Liquidity': 'Level58_LiquidityManagement',
  'MarketData': 'Level59_AdvancedMarketData',
  'Infrastructure': 'Level60_Infrastructure',
  
  // Missing component node IDs (Controllers)
  'MarginC': 'Level31_MarginTrading',
  'FuturesC': 'Level32_FuturesPerpetual',
  'OptionsC': 'Level33_OptionsTrading',
  'TradingBotsC': 'Level35_TradingBotsAPI',
  'AMLController': 'Level36_AMLMonitoring',
  'SanctionsC': 'Level37_SanctionsScreening',
  'RegulatoryC': 'Level38_RegulatoryReporting',
  'TaxC': 'Level39_TaxReporting',
  'StakingC': 'Level46_StakingServices',
  'LendingC': 'Level47_LendingBorrowing',
  'YieldC': 'Level48_YieldFarming',
  'ListingC': 'Level50_TokenListing',
  'AnalyticsC': 'Level51_TradingAnalytics',
  'DashboardC': 'Level53_AdminDashboards',
  
  // Overview diagram nodes
  'UI': 'Level1_ProjectSetup',
  'ATM': 'Level17_AdditionalServices',
  'Gateway': 'Level11_PaymentGateways',
  'Webhook': 'Level11_PaymentGateways',
  'JWT': 'Level2_DatabaseAuth',
  'AuthMgr': 'Level2_DatabaseAuth',
  'TwoFA': 'Level2_DatabaseAuth',
  'Blockchain': 'Level6_Blockchain',
  'PaymentAPI': 'Level11_PaymentGateways',
  'KYCAPI': 'Level12_KYCIdentity',
  
  // Additional common patterns
  'VandarService': 'Level11_PaymentGateways',
  'JibitService': 'Level11_PaymentGateways',
  'NextPayService': 'Level11_PaymentGateways',
  'SadadService': 'Level11_PaymentGateways',
  'ZarinpalService': 'Level11_PaymentGateways',
  'PaymentGateway': 'Level11_PaymentGateways',
  'PaymentGateway Interface': 'Level11_PaymentGateways',
  'FinoTechService': 'Level12_KYCIdentity',
  'CustomerWalletService': 'Level5_WalletServices',
  'WithdrawalService': 'Level5_WalletServices',
  'Multi-Chain Support': 'Level6_Blockchain',
  'Multi-Chain': 'Level6_Blockchain',
  'Blockchain': 'Level6_Blockchain',
  'Payment': 'Level11_PaymentGateways',
  'KYC': 'Level12_KYCIdentity',
  'Ticket': 'Level15_SupportContent',
  'Blog': 'Level15_SupportContent',
  'File': 'Level15_SupportContent',
  'GiftCode': 'Level16_Promotional',
  'ReferralCode': 'Level16_Promotional',
  'Exchange': 'Level14_OTCExchange',
  'Role': 'Level13_AdminRBAC',
  'Privilege': 'Level13_AdminRBAC'
}

// Helper to map node name to Level task
const mapNodeToLevel = (nodeName) => {
  if (!nodeName) return null
  
  // Clean the node name more thoroughly
  const cleanName = nodeName
    .replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g, '') // Remove all emojis
    .replace(/<br\s*\/?>/gi, ' ') // Replace <br> with space
    .replace(/\s+/g, ' ') // Normalize spaces
    .replace(/^Level\s*\d+[:\s]*/i, '') // Remove "Level 1:" prefix
    .replace(/\s*\[MISSING\]/i, '') // Remove [MISSING] tag
    .replace(/Controller|Service|C|S$/i, '') // Remove common suffixes for matching
    .trim()
  
  // Try exact match first
  if (NODE_TO_LEVEL_MAPPING[cleanName]) {
    return NODE_TO_LEVEL_MAPPING[cleanName]
  }
  
  // Try with original name (before suffix removal)
  const originalName = nodeName
    .replace(/[✅🔄⏸️🚫🔒🚀🌐🔐🎛️⚙️💰👤📧🎫⛓️💳💾]/g, '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .replace(/^Level\s*\d+[:\s]*/i, '')
    .replace(/\s*\[MISSING\]/i, '')
    .trim()
  if (NODE_TO_LEVEL_MAPPING[originalName]) {
    return NODE_TO_LEVEL_MAPPING[originalName]
  }
  
  // Try case-insensitive match
  const lowerName = cleanName.toLowerCase()
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    if (key.toLowerCase() === lowerName) {
      return level
    }
  }
  
  // Try removing spaces and matching
  const noSpaces = cleanName.replace(/\s+/g, '')
  if (NODE_TO_LEVEL_MAPPING[noSpaces]) {
    return NODE_TO_LEVEL_MAPPING[noSpaces]
  }
  
  // Try with common suffixes added
  const withService = cleanName + 'Service'
  const withController = cleanName + 'Controller'
  if (NODE_TO_LEVEL_MAPPING[withService]) return NODE_TO_LEVEL_MAPPING[withService]
  if (NODE_TO_LEVEL_MAPPING[withController]) return NODE_TO_LEVEL_MAPPING[withController]
  
  // Try partial match (contains) - but prioritize longer matches
  const matchingEntries = []
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    const keyLower = key.toLowerCase()
    if (lowerName.includes(keyLower) || keyLower.includes(lowerName)) {
      matchingEntries.push({ key, level, length: key.length })
    }
  }
  // Sort by length (longer matches first) and return the best match
  if (matchingEntries.length > 0) {
    matchingEntries.sort((a, b) => b.length - a.length)
    return matchingEntries[0].level
  }
  
  // Try matching controller/service patterns
  if (cleanName.includes('Controller') || cleanName.endsWith('C')) {
    const baseName = cleanName.replace(/Controller|C$/i, '').trim()
    // Try direct mapping of base name in NODE_TO_LEVEL_MAPPING
    if (NODE_TO_LEVEL_MAPPING[baseName]) {
      return NODE_TO_LEVEL_MAPPING[baseName]
    }
    // Try case-insensitive match
    const baseLower = baseName.toLowerCase()
    for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
      if (key.toLowerCase() === baseLower) {
        return level
      }
    }
    // Map common controllers
    if (baseName === 'Admin') return 'Level13_AdminRBAC'
    if (baseName === 'Customer') return 'Level3_CustomerIdentity'
    if (baseName === 'Order') return 'Level9_TradingControllers'
    if (baseName === 'Trade') return 'Level9_TradingControllers'
    if (baseName === 'Wallet') return 'Level10_WalletController'
    if (baseName === 'Market' || baseName === 'Coin') return 'Level8_MarketManagement'
    if (baseName === 'Ticket' || baseName === 'Blog') return 'Level15_SupportContent'
    if (baseName === 'GiftCode' || baseName === 'ReferralCode') return 'Level16_Promotional'
    if (baseName === 'ExchangeAction') return 'Level14_OTCExchange'
    if (baseName === 'Roles') return 'Level13_AdminRBAC'
  }
  
  if (cleanName.includes('Service') || cleanName.endsWith('S')) {
    const baseName = cleanName.replace(/Service|S$/i, '').trim()
    // Try direct mapping of base name in NODE_TO_LEVEL_MAPPING
    if (NODE_TO_LEVEL_MAPPING[baseName]) {
      return NODE_TO_LEVEL_MAPPING[baseName]
    }
    // Try case-insensitive match
    const baseLower = baseName.toLowerCase()
    for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
      if (key.toLowerCase() === baseLower) {
        return level
      }
    }
    // Map common services
    if (baseName === 'Customer') return 'Level3_CustomerIdentity'
    if (baseName === 'Order' || baseName === 'Trade') return 'Level7_TradingEngine'
    if (baseName === 'Wallet' || baseName === 'CustomerWallet' || baseName === 'Deposit' || baseName === 'Withdrawal') return 'Level5_WalletServices'
    if (baseName === 'Market' || baseName === 'Coin') return 'Level8_MarketManagement'
    if (baseName === 'Email' || baseName === 'SMS' || baseName === 'Notification') return 'Level4_Notifications'
    if (baseName === 'Apie') return 'Level6_Blockchain'
    if (baseName === 'Ticket' || baseName === 'Blog' || baseName === 'File') return 'Level15_SupportContent'
    if (baseName === 'GiftCode' || baseName === 'ReferralCode') return 'Level16_Promotional'
    if (baseName === 'FinoTech' || baseName === 'Jibit' || baseName === 'BankAccount') return 'Level12_KYCIdentity'
    if (baseName === 'Admin' || baseName === 'Role') return 'Level13_AdminRBAC'
    if (baseName === 'ExchangeAction') return 'Level14_OTCExchange'
  }
  
  return null
}

// Task name mapping - maps messy node IDs to proper task names and metadata
const TASK_NAME_MAPPING = {
  // Controllers
  'AdminController': { title: 'Admin Controller', category: 'Controllers', level: 'Level13_AdminRBAC', priority: TaskPriority.HIGH },
  'CustomerController': { title: 'Customer Controller', category: 'Controllers', level: 'Level3_CustomerIdentity', priority: TaskPriority.CRITICAL },
  'OrderController': { title: 'Order Controller', category: 'Controllers', level: 'Level9_TradingControllers', priority: TaskPriority.CRITICAL },
  'WalletController': { title: 'Wallet Controller', category: 'Controllers', level: 'Level10_WalletController', priority: TaskPriority.CRITICAL },
  'TradeController': { title: 'Trade Controller', category: 'Controllers', level: 'Level9_TradingControllers', priority: TaskPriority.CRITICAL },
  'MarketController': { title: 'Market Controller', category: 'Controllers', level: 'Level8_MarketManagement', priority: TaskPriority.HIGH },
  'CoinController': { title: 'Coin Controller', category: 'Controllers', level: 'Level8_MarketManagement', priority: TaskPriority.HIGH },
  'ExchangeActionController': { title: 'Exchange Action Controller', category: 'Controllers', level: 'Level14_OTCExchange', priority: TaskPriority.HIGH },
  'TicketController': { title: 'Ticket Controller', category: 'Controllers', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'BlogController': { title: 'Blog Controller', category: 'Controllers', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'GiftCodeController': { title: 'Gift Code Controller', category: 'Controllers', level: 'Level16_Promotional', priority: TaskPriority.MEDIUM },
  'ReferralCodeController': { title: 'Referral Code Controller', category: 'Controllers', level: 'Level16_Promotional', priority: TaskPriority.MEDIUM },
  'RolesController': { title: 'Roles Controller', category: 'Controllers', level: 'Level13_AdminRBAC', priority: TaskPriority.HIGH },
  'FinoTechController': { title: 'FinoTech Controller', category: 'Controllers', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'JibitController': { title: 'Jibit Controller', category: 'Controllers', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'AlarmController': { title: 'Alarm Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'FileController': { title: 'File Controller', category: 'Controllers', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'LanguageController': { title: 'Language Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.LOW },
  'CountryController': { title: 'Country Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.LOW },
  'ExchangeController': { title: 'Exchange Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'ExchangeSettingController': { title: 'Exchange Setting Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'HealthController': { title: 'Health Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.LOW },
  'VandarWebhookController': { title: 'Vandar Webhook Controller', category: 'Controllers', level: 'Level11_PaymentGateways', priority: TaskPriority.HIGH },
  'AtmController': { title: 'ATM Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'CreditCardController': { title: 'Credit Card Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'SaminCardController': { title: 'Samin Card Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'SocketController': { title: 'Socket Controller', category: 'Controllers', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  
  // Services
  'AdminService': { title: 'Admin Service', category: 'Services', level: 'Level13_AdminRBAC', priority: TaskPriority.HIGH },
  'CustomerService': { title: 'Customer Service', category: 'Services', level: 'Level3_CustomerIdentity', priority: TaskPriority.CRITICAL },
  'OrderService': { title: 'Order Service', category: 'Services', level: 'Level7_TradingEngine', priority: TaskPriority.CRITICAL },
  'WalletService': { title: 'Wallet Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'TradeService': { title: 'Trade Service', category: 'Services', level: 'Level7_TradingEngine', priority: TaskPriority.CRITICAL },
  'MarketService': { title: 'Market Service', category: 'Services', level: 'Level8_MarketManagement', priority: TaskPriority.HIGH },
  'CoinService': { title: 'Coin Service', category: 'Services', level: 'Level8_MarketManagement', priority: TaskPriority.HIGH },
  'ApieService': { title: 'Apie Service (Blockchain)', category: 'Services', level: 'Level6_Blockchain', priority: TaskPriority.CRITICAL },
  'GiftCodeService': { title: 'Gift Code Service', category: 'Services', level: 'Level16_Promotional', priority: TaskPriority.MEDIUM },
  'ReferralCodeService': { title: 'Referral Code Service', category: 'Services', level: 'Level16_Promotional', priority: TaskPriority.MEDIUM },
  'TicketService': { title: 'Ticket Service', category: 'Services', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'BlogService': { title: 'Blog Service', category: 'Services', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'FileService': { title: 'File Service', category: 'Services', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'EmailService': { title: 'Email Service', category: 'Services', level: 'Level4_Notifications', priority: TaskPriority.HIGH },
  'SMSService': { title: 'SMS Service', category: 'Services', level: 'Level4_Notifications', priority: TaskPriority.HIGH },
  'NotificationService': { title: 'Notification Service', category: 'Services', level: 'Level4_Notifications', priority: TaskPriority.HIGH },
  'CustomerWalletService': { title: 'Customer Wallet Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'DepositService': { title: 'Deposit Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'WithdrawalRequestService': { title: 'Withdrawal Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'FinoTechService': { title: 'FinoTech Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'JibitService': { title: 'Jibit Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'BankAccountService': { title: 'Bank Account Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'UserAccountLevelService': { title: 'User Account Level Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'RoleService': { title: 'Role Service', category: 'Services', level: 'Level13_AdminRBAC', priority: TaskPriority.HIGH },
  'ExchangeActionService': { title: 'Exchange Action Service', category: 'Services', level: 'Level14_OTCExchange', priority: TaskPriority.HIGH },
  'ExchangeSettingService': { title: 'Exchange Setting Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'CustomerTokenService': { title: 'Customer Token Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'AlarmService': { title: 'Alarm Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'MessageService': { title: 'Message Service', category: 'Services', level: 'Level15_SupportContent', priority: TaskPriority.MEDIUM },
  'FAQService': { title: 'FAQ Service', category: 'Services', level: 'Level15_SupportContent', priority: TaskPriority.LOW },
  'CountryService': { title: 'Country Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.LOW },
  'LanguageService': { title: 'Language Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.LOW },
  'AtmService': { title: 'ATM Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'CreditCardService': { title: 'Credit Card Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'SaminCardService': { title: 'Samin Card Service', category: 'Services', level: 'Level17_AdditionalServices', priority: TaskPriority.MEDIUM },
  'TomanTransactionService': { title: 'Toman Transaction Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.MEDIUM },
  'CashDepositService': { title: 'Cash Deposit Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.MEDIUM },
  
  // Clean up common messy patterns
  'Order ServiceervicecreateOrder deleteOrdergetOrder Book validateDTO': { title: 'Order Service', category: 'Services', level: 'Level7_TradingEngine', priority: TaskPriority.CRITICAL },
  'Jibit ServiceervicematchIBAN matchCardidentitySimilarity': { title: 'Jibit Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'Vandar Serviceervice': { title: 'Vandar Payment Gateway', category: 'Services', level: 'Level11_PaymentGateways', priority: TaskPriority.HIGH },
  'Deposit ServiceervicetrackDeposit confirmDeposit': { title: 'Deposit Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'Customer Wallet ServiceervicegetBalance updateBalancelockFunds unlockFunds': { title: 'Customer Wallet Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'Withdrawal ServiceervicecreateRequestapproveWithdrawalr': { title: 'Withdrawal Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'Wallet ServiceervicecreateHDWalletgenerate Addresscr': { title: 'Wallet Service', category: 'Services', level: 'Level5_WalletServices', priority: TaskPriority.CRITICAL },
  'FinoTech Serviceervicevalidate NationallDcard TolBAN sendSMSverifyBankAccount': { title: 'FinoTech Service', category: 'Services', level: 'Level12_KYCIdentity', priority: TaskPriority.HIGH },
  'Controllerustomer Serviceregister authenticateupdateProfile manageKYC': { title: 'Customer Service', category: 'Services', level: 'Level3_CustomerIdentity', priority: TaskPriority.CRITICAL },
}

// Helper to extract individual names from messy concatenated strings
const extractNamesFromMessyId = (taskId) => {
  // Remove common patterns
  let cleaned = taskId
    .replace(/Development/g, '')
    .replace(/Serviceervice/g, 'Service')
    .replace(/Controllerustomer/g, 'Controller')
    .trim()
  
  // Split by common patterns: camelCase boundaries, spaces, and common words
  const names = []
  let current = ''
  
  // Pattern to detect camelCase boundaries and method names
  const camelCasePattern = /([a-z])([A-Z])/g
  cleaned = cleaned.replace(camelCasePattern, '$1 $2')
  
  // Split by spaces and filter empty
  const parts = cleaned.split(/\s+/).filter(p => p.length > 0)
  
  // Group parts into logical names
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i]
    
    // If it's a service/controller name, start a new group
    if (part.endsWith('Service') || part.endsWith('Controller')) {
      if (current) {
        names.push(current.trim())
        current = ''
      }
      names.push(part)
    }
    // If it's a method name (starts with lowercase or is camelCase), add to current
    else if (/^[a-z]/.test(part) || /^[a-z][A-Z]/.test(part)) {
      if (current && !current.endsWith('Service') && !current.endsWith('Controller')) {
        current += ' ' + part
      } else {
        if (current) names.push(current.trim())
        current = part
      }
    }
    // Otherwise, it's probably part of the current name
    else {
      current += (current ? ' ' : '') + part
    }
  }
  
  if (current) {
    names.push(current.trim())
  }
  
  return names.filter(n => n.length > 0)
}

// Helper to get a short, clean title from messy ID
const getShortTitle = (taskId, extractedNames) => {
  // Try exact match first
  if (TASK_NAME_MAPPING[taskId]) {
    return TASK_NAME_MAPPING[taskId].title
  }
  
  // Find the main service/controller name
  const mainName = extractedNames.find(n => 
    n.endsWith('Service') || n.endsWith('Controller')
  )
  
  if (mainName) {
    // Try to match it in our mapping
    if (TASK_NAME_MAPPING[mainName]) {
      return TASK_NAME_MAPPING[mainName].title
    }
    // Otherwise format it nicely
    return mainName.replace(/([A-Z])/g, ' $1').trim()
  }
  
  // If no main name found, use the first extracted name
  if (extractedNames.length > 0) {
    return extractedNames[0].replace(/([A-Z])/g, ' $1').trim()
  }
  
  // Last resort: format the original ID
  return taskId
    .replace(/Serviceervice/g, 'Service')
    .replace(/Controllerustomer/g, 'Controller')
    .replace(/Development/g, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')[0] // Take first word only
}

// Helper to create subtasks from extracted names
const createSubtasksFromNames = (taskId, extractedNames, mainTitle) => {
  const subtasks = []
  
  // Find the main service/controller
  const mainName = extractedNames.find(n => 
    n.endsWith('Service') || n.endsWith('Controller')
  )
  
  // Get method/function names (everything except the main name)
  const methodNames = extractedNames.filter(n => 
    n !== mainName && 
    !n.endsWith('Service') && 
    !n.endsWith('Controller') &&
    n.length > 0
  )
  
  // Always add standard subtasks
  subtasks.push(
    { id: `${taskId}-entity`, title: `Create entity and repository`, completed: false },
    { id: `${taskId}-service`, title: `Implement service logic`, completed: false },
    { id: `${taskId}-controller`, title: `Create controller with endpoints`, completed: false },
    { id: `${taskId}-dto`, title: `Create DTOs`, completed: false },
    { id: `${taskId}-validation`, title: `Add validation and error handling`, completed: false }
  )
  
  // Add subtasks for each method/function found
  methodNames.forEach((methodName, idx) => {
    const cleanMethod = methodName
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .trim()
    subtasks.push({
      id: `${taskId}-method-${idx}`,
      title: `Implement ${cleanMethod} functionality`,
      completed: false
    })
  })
  
  // Add test subtask at the end
  subtasks.push({ id: `${taskId}-tests`, title: `Write tests`, completed: false })
  
  return subtasks
}

// Helper to clean up messy task IDs and get proper metadata
const getTaskMetadata = (taskId) => {
  // Try exact match first
  if (TASK_NAME_MAPPING[taskId]) {
    return TASK_NAME_MAPPING[taskId]
  }
  
  // Extract individual names from messy ID
  const extractedNames = extractNamesFromMessyId(taskId)
  
  // Get short title
  const shortTitle = getShortTitle(taskId, extractedNames)
  
  // Try to find matching service/controller in mapping
  const mainName = extractedNames.find(n => 
    n.endsWith('Service') || n.endsWith('Controller')
  )
  
  let metadata = null
  if (mainName && TASK_NAME_MAPPING[mainName]) {
    metadata = TASK_NAME_MAPPING[mainName]
  }
  
  // Determine category
  let category = 'Other'
  if (mainName) {
    if (mainName.endsWith('Controller')) category = 'Controllers'
    else if (mainName.endsWith('Service')) category = 'Services'
  }
  
  // Determine priority based on name
  let priority = TaskPriority.MEDIUM
  if (mainName) {
    const criticalServices = ['OrderService', 'TradeService', 'WalletService', 'CustomerService', 'ApieService']
    const highServices = ['AdminService', 'MarketService', 'CoinService', 'DepositService', 'WithdrawalRequestService']
    if (criticalServices.some(s => mainName.includes(s))) priority = TaskPriority.CRITICAL
    else if (highServices.some(s => mainName.includes(s))) priority = TaskPriority.HIGH
  }
  
  return {
    title: shortTitle,
    category: metadata?.category || category,
    level: metadata?.level || null,
    priority: metadata?.priority || priority,
    extractedNames,
    originalId: taskId
  }
}

// Helper to transform backend task to frontend format
const transformBackendTask = (backendTask) => {
  // Get priority and category from database - all data comes from database
  // Priority should be saved as lowercase in DB: 'low', 'medium', 'high', 'critical'
  // EVERY task MUST have a priority - default to MEDIUM if missing
  let priority = TaskPriority.MEDIUM // Default fallback
  if (backendTask.priority) {
    const priorityLower = backendTask.priority.toLowerCase().trim()
    // Map database values to enum
    if (priorityLower === 'low') {
      priority = TaskPriority.LOW
    } else if (priorityLower === 'medium') {
      priority = TaskPriority.MEDIUM
    } else if (priorityLower === 'high') {
      priority = TaskPriority.HIGH
    } else if (priorityLower === 'critical') {
      priority = TaskPriority.CRITICAL
    } else {
      // Try uppercase enum lookup as fallback
      priority = TaskPriority[backendTask.priority.toUpperCase()] || TaskPriority.MEDIUM
    }
  }
  // If priority is still MEDIUM (default) and task has no priority in DB, it will be updated later
  let category = backendTask.category || 'Other'
  
  // Transform subtasks
  let subtasks = []
  if (Array.isArray(backendTask.subtasks)) {
    subtasks = backendTask.subtasks.map((st, idx) => {
      if (typeof st === 'string') {
        return { id: `subtask-${idx}`, title: st, completed: false, aiPrompt: null }
      }
      if (typeof st === 'object') {
        return {
          id: st.id || `subtask-${idx}`,
          title: st.title || st.name || String(st),
          completed: st.completed || false,
          aiPrompt: st.aiPrompt || null
        }
      }
      return { id: `subtask-${idx}`, title: String(st), completed: false, aiPrompt: null }
    })
  }
  
  // Transform notes
  let notes = []
  if (backendTask.notes) {
    if (typeof backendTask.notes === 'string') {
      notes = backendTask.notes.split('\n').filter(n => n.trim()).map(n => ({
        content: n.trim(),
        createdAt: new Date().toISOString()
      }))
    } else if (Array.isArray(backendTask.notes)) {
      notes = backendTask.notes.map(n => ({
        content: typeof n === 'string' ? n : (n.content || String(n)),
        createdAt: n.createdAt || new Date().toISOString()
      }))
    }
  }
  
  return {
    id: backendTask.nodeId || backendTask.id,
    nodeId: backendTask.nodeId || backendTask.id,
    title: backendTask.title || '',
    description: backendTask.description || '',
    status: backendTask.status || TaskStatus.NOT_STARTED,
    priority: priority,
    category: category,
    estimatedHours: backendTask.estimatedHours || 0,
    actualHours: backendTask.actualHours || 0,
    subtasks: subtasks,
    notes: notes,
    dependencies: Array.isArray(backendTask.dependencies) ? backendTask.dependencies : [],
    isMissing: backendTask.isMissing || false,
    createdAt: backendTask.createdAt || new Date().toISOString(),
    updatedAt: backendTask.updatedAt || new Date().toISOString(),
    backendId: backendTask.id || backendTask.backendId
  }
}

// Helper to transform frontend task to backend format
const transformFrontendTask = (frontendTask) => {
  // Ensure priority is saved as lowercase string for database
  // EVERY task MUST have a priority - default to MEDIUM if missing
  let priorityValue = 'medium' // Default to medium
  if (frontendTask.priority) {
    // Convert enum value to lowercase string for database
    if (frontendTask.priority === TaskPriority.LOW) {
      priorityValue = 'low'
    } else if (frontendTask.priority === TaskPriority.MEDIUM) {
      priorityValue = 'medium'
    } else if (frontendTask.priority === TaskPriority.HIGH) {
      priorityValue = 'high'
    } else if (frontendTask.priority === TaskPriority.CRITICAL) {
      priorityValue = 'critical'
    } else if (typeof frontendTask.priority === 'string') {
      // Already a string, use it (should be lowercase)
      priorityValue = frontendTask.priority.toLowerCase().trim() || 'medium'
    }
  }
  // Always ensure priority is set (never null or empty)
  if (!priorityValue || priorityValue === '') {
    priorityValue = 'medium'
  }
  
  return {
    nodeId: frontendTask.nodeId || frontendTask.id,
    title: frontendTask.title,
    description: frontendTask.description || '',
    status: frontendTask.status || TaskStatus.NOT_STARTED,
    notes: Array.isArray(frontendTask.notes) 
      ? frontendTask.notes.map(n => typeof n === 'string' ? n : n.content).join('\n')
      : frontendTask.notes || '',
    estimatedHours: frontendTask.estimatedHours || 0,
    actualHours: frontendTask.actualHours || 0,
    subtasks: frontendTask.subtasks || [],
    dependencies: frontendTask.dependencies || [],
    priority: priorityValue, // Save as lowercase string
    category: frontendTask.category || 'Other',
    isMissing: frontendTask.isMissing || false
  }
}

// Helper to extract base service/controller name from task
const getBaseName = (taskId, title) => {
  // Try to extract clean service/controller name
  const cleanId = taskId
    .replace(/Serviceervice/g, 'Service')
    .replace(/Controllerustomer/g, 'Controller')
    .replace(/Development/g, '')
    .trim()
  
  // Match common patterns
  const serviceMatch = cleanId.match(/(\w+Service)/i)
  const controllerMatch = cleanId.match(/(\w+Controller)/i)
  
  if (serviceMatch) return serviceMatch[1]
  if (controllerMatch) return controllerMatch[1]
  
  // Try from title
  if (title) {
    const titleService = title.match(/(\w+)\s+Service/i)
    const titleController = title.match(/(\w+)\s+Controller/i)
    if (titleService) return titleService[1] + 'Service'
    if (titleController) return titleController[1] + 'Controller'
  }
  
  return null
}

// Helper to merge duplicate tasks
const mergeDuplicateTasks = (tasks) => {
  const merged = {}
  const taskGroups = {} // Groups tasks by base name
  const tasksToRemove = new Set()
  
  // First pass: group tasks by base name
  Object.keys(tasks).forEach(taskId => {
    // Skip level tasks
    if (taskId.startsWith('Level')) {
      merged[taskId] = tasks[taskId]
      return
    }
    
    const task = tasks[taskId]
    if (!task) return
    
    const baseName = getBaseName(taskId, task.title)
    
    if (!baseName) {
      // Keep tasks without clear base name (might be unique)
      merged[taskId] = task
      return
    }
    
    if (!taskGroups[baseName]) {
      taskGroups[baseName] = []
    }
    taskGroups[baseName].push({ taskId, task })
  })
  
  // Second pass: merge groups
  Object.keys(taskGroups).forEach(baseName => {
    const group = taskGroups[baseName]
    
    if (group.length === 1) {
      // Single task, keep as is
      merged[group[0].taskId] = group[0].task
      return
    }
    
    // Multiple tasks - merge them
    // Find the best task to keep (prefer clean names, higher priority)
    group.sort((a, b) => {
      const aClean = !a.taskId.includes('Serviceervice') && !a.taskId.includes('Controllerustomer')
      const bClean = !b.taskId.includes('Serviceervice') && !b.taskId.includes('Controllerustomer')
      if (aClean !== bClean) return aClean ? -1 : 1
      
      const aPriority = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].indexOf(a.task.priority?.toUpperCase() || 'MEDIUM')
      const bPriority = ['CRITICAL', 'HIGH', 'MEDIUM', 'LOW'].indexOf(b.task.priority?.toUpperCase() || 'MEDIUM')
      return aPriority - bPriority
    })
    
    const primaryTask = group[0]
    const otherTasks = group.slice(1)
    
    // Determine if we should merge Controller + Service
    const hasController = group.some(t => t.task.category === 'Controllers' || t.taskId.includes('Controller'))
    const hasService = group.some(t => t.task.category === 'Services' || t.taskId.includes('Service'))
    
    if (hasController && hasService) {
      // Merge Controller + Service into one task
      const controllerTask = group.find(t => t.task.category === 'Controllers' || t.taskId.includes('Controller'))
      const serviceTask = group.find(t => t.task.category === 'Services' || t.taskId.includes('Service'))
      
      const mergedTask = {
        ...(controllerTask || serviceTask || primaryTask).task,
        id: baseName,
        nodeId: baseName,
        title: baseName.replace(/([A-Z])/g, ' $1').trim(),
        description: `Migrate ${baseName} (both Service and Controller) to NestJS architecture. This includes the service layer with business logic and the controller layer with REST endpoints.`,
        category: 'Services', // Services are more fundamental
        priority: primaryTask.task.priority || TaskPriority.MEDIUM,
        subtasks: [
          // Service subtasks
          { id: `${baseName}-service-entity`, title: `Create ${baseName} entity and repository`, completed: false },
          { id: `${baseName}-service-logic`, title: `Implement ${baseName} service logic`, completed: false },
          { id: `${baseName}-service-methods`, title: `Implement all service methods`, completed: false },
          // Controller subtasks
          { id: `${baseName}-controller-module`, title: `Create ${baseName} controller module`, completed: false },
          { id: `${baseName}-controller-endpoints`, title: `Implement all controller endpoints`, completed: false },
          { id: `${baseName}-controller-dto`, title: `Create DTOs for ${baseName}`, completed: false },
          { id: `${baseName}-controller-validation`, title: `Add validation and error handling`, completed: false },
          { id: `${baseName}-tests`, title: `Write tests for ${baseName}`, completed: false }
        ],
        notes: [
          ...(controllerTask?.task.notes || []),
          ...(serviceTask?.task.notes || []),
          ...otherTasks.flatMap(t => t.task.notes || [])
        ],
        updatedAt: new Date().toISOString()
      }
      
      // Add subtasks from other tasks
      otherTasks.forEach(({ task }) => {
        if (task.subtasks && task.subtasks.length > 0) {
          task.subtasks.forEach(subtask => {
            if (!mergedTask.subtasks.find(st => st.title === subtask.title)) {
              mergedTask.subtasks.push({
                ...subtask,
                id: `${baseName}-${subtask.id}`
              })
            }
          })
        }
      })
      
      merged[baseName] = mergedTask
      
      // Mark other tasks for removal
      group.forEach(({ taskId }) => {
        if (taskId !== baseName) {
          tasksToRemove.add(taskId)
        }
      })
    } else {
      // Same type (all controllers or all services) - merge into one
      const mergedTask = {
        ...primaryTask.task,
        id: baseName,
        nodeId: baseName,
        title: baseName.replace(/([A-Z])/g, ' $1').trim(),
        description: `Migrate ${baseName} to NestJS architecture. This involves translating the Java Spring Boot implementation to NestJS TypeScript, maintaining all functionality, endpoints, and business logic.`,
        subtasks: [...(primaryTask.task.subtasks || [])],
        notes: [...(primaryTask.task.notes || [])],
        updatedAt: new Date().toISOString()
      }
      
      // Merge subtasks from other tasks
      otherTasks.forEach(({ task }) => {
        if (task.subtasks && task.subtasks.length > 0) {
          task.subtasks.forEach(subtask => {
            if (!mergedTask.subtasks.find(st => st.title === subtask.title)) {
              mergedTask.subtasks.push({
                ...subtask,
                id: `${baseName}-${subtask.id}`
              })
            }
          })
        }
        if (task.notes && task.notes.length > 0) {
          mergedTask.notes.push(...task.notes)
        }
      })
      
      merged[baseName] = mergedTask
      
      // Mark other tasks for removal
      otherTasks.forEach(({ taskId }) => {
        tasksToRemove.add(taskId)
      })
    }
  })
  
  return { merged, tasksToRemove }
}

// Helper to remove useless tasks
const removeUselessTasks = (tasks) => {
  const cleaned = { ...tasks }
  const uselessPatterns = [
    /^test/i,
    /^debug/i,
    /^sample/i,
    /^example/i,
    /Development$/i,
    /^ff$/i,
    /^CLIENTSWeb$/i,
    /^account_wallets$/i,
    /^customer_wallet$/i,
    /^customers admins login_histories$/i,
    /^ROLE PRIVILEGE roles_privileges$/i,
    /^finno_tech_validation bank_accounts credit_card$/i,
    /^Web Mobile UI$/i,
    /^internal_transaction$/i,
    /^tron_transactions$/i,
    /^deposit_requests$/i,
    /^toman_transactions$/i,
    /^withdrawal_requests$/i,
    /^hd_wallet$/i,
    /^hd_wallet_address$/i,
    /^2FA OTP$/i,
    /^Auth Manager$/i,
    /^JWT Auth$/i,
    /^Webhooks$/i,
    /^Payment Gateways$/i,
    /^ATM Devices$/i,
    /^blog faq user_manual$/i,
    /^ethereum_transaction$/i,
    /^Multi-Chain SupportETH ERC20TRON TRC20BTC XRP XLM BSC BEP20$/i,
    /^Authentication$/i,
    /^Deposit Handling Webhook callbacks Gateway updates$/i,
    /^KYC APIs$/i,
    /^Payment APIs$/i,
    /^Blockchain APIs$/i,
    /^Select KYC provider$/i,
    /^Validate NID$/i,
    /^Match IBAN$/i,
    /^Admin review$/i,
    /^Approved\?$/i,
    /^Update to AUTHORIZED$/i
  ]
  
  Object.keys(cleaned).forEach(taskId => {
    // Skip level tasks
    if (taskId.startsWith('Level')) return
    
    const task = cleaned[taskId]
    if (!task) return
    
    // Check if task matches useless patterns
    const isUseless = uselessPatterns.some(pattern => 
      pattern.test(taskId) || (task.title && pattern.test(task.title))
    )
    
    // Also check for very low priority tasks that are likely duplicates
    const isLowPriorityDuplicate = task.priority === TaskPriority.LOW && 
                                   (taskId.length > 50 || task.title?.length > 50)
    
    if (isUseless || isLowPriorityDuplicate) {
      delete cleaned[taskId]
    }
  })
  
  return cleaned
}

// Helper to clean up existing tasks with messy names
const cleanupTaskNames = (tasks) => {
  // Step 1: Clean up messy names
  let cleaned = { ...tasks }
  
  Object.keys(cleaned).forEach(taskId => {
    // Skip level tasks
    if (taskId.startsWith('Level')) return
    
    const task = cleaned[taskId]
    if (!task) return
    
    // Check if task has a messy name (contains "Serviceervice" or similar patterns)
    const hasMessyName = taskId.includes('Serviceervice') || 
                         taskId.includes('Controllerustomer') ||
                         task.title?.includes('Serviceervice') ||
                         (task.title && task.title.length > 50 && !task.title.startsWith('🎮'))
    
    if (hasMessyName) {
      // Get proper metadata
      const metadata = getTaskMetadata(taskId)
      
      // Update task with clean name and proper structure
      cleaned[taskId] = {
        ...task,
        title: metadata.title,
        description: task.description || `Migrate ${metadata.title} to NestJS architecture. This involves translating the Java Spring Boot implementation to NestJS TypeScript, maintaining all functionality, endpoints, and business logic.\n\nOriginal identifier: ${taskId}`,
        category: metadata.category || task.category,
        priority: metadata.priority || task.priority,
        subtasks: task.subtasks && task.subtasks.length > 0 
          ? task.subtasks 
          : createSubtasksFromNames(taskId, metadata.extractedNames || [], metadata.title),
        updatedAt: new Date().toISOString()
      }
    }
  })
  
  // Step 2: Remove useless tasks
  cleaned = removeUselessTasks(cleaned)
  
  // Step 3: Merge duplicate tasks
  const { merged, tasksToRemove } = mergeDuplicateTasks(cleaned)
  
  // Remove merged tasks
  tasksToRemove.forEach(taskId => {
    delete merged[taskId]
  })
  
  return merged
}

export const TodoProvider = ({ children }) => {
  // Initialize tasks - start with empty, will be loaded from backend
  // Tasks are now stored in database only, not localStorage
  const [tasks, setTasks] = useState({})

  const [showTodoPanel, setShowTodoPanel] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)
  const [filterStatus, setFilterStatus] = useState(null)
  const [filterCategory, setFilterCategory] = useState(null)
  const [loading, setLoading] = useState(false)
  const [useBackend, setUseBackend] = useState(true) // Always use backend - tasks stored in database only
  const [backendError, setBackendError] = useState(null)

  // Load tasks from backend on mount
  useEffect(() => {
    loadTasksFromBackend()
    
    // Also seed all diagrams and nodes on startup if needed
    const seedDiagramsOnStartup = async () => {
      try {
        const { seedDiagramsAndNodes } = await import('../utils/diagramBackend')
        const { API_ENDPOINTS } = await import('../config/api')
        
        // Check if any diagrams exist
        const diagramsResponse = await fetch(API_ENDPOINTS.diagrams)
        if (diagramsResponse.ok) {
          const diagrams = await diagramsResponse.json()
          // Only seed if no diagrams exist
          if (!diagrams || diagrams.length === 0) {
            console.log('🌱 No diagrams found, seeding all diagrams and nodes...')
            await seedDiagramsAndNodes()
          } else {
            console.log(`✅ Found ${diagrams.length} existing diagrams, skipping seed`)
            // Check if nodes exist for each diagram
            for (const diagram of diagrams) {
              const nodesResponse = await fetch(`${API_ENDPOINTS.nodes}?diagramId=${diagram.id}`)
              if (nodesResponse.ok) {
                const nodes = await nodesResponse.json()
                if (!nodes || nodes.length === 0) {
                  console.log(`⚠️ Diagram ${diagram.diagramId} has no nodes, extracting and saving...`)
                  const { extractNodesFromMermaid, saveNodesToBackend } = await import('../utils/diagramBackend')
                  const nodes = await extractNodesFromMermaid(diagram.mermaidCode || '', diagram.id)
                  if (nodes.length > 0) {
                    nodes.forEach(node => { node.diagramId = diagram.id })
                    await saveNodesToBackend(diagram.id, nodes)
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        console.warn('Could not seed diagrams on startup:', error)
      }
    }
    
    seedDiagramsOnStartup()
  }, []) // Only run once on mount

  const loadTasksFromBackend = async () => {
    try {
      setLoading(true)
      setBackendError(null)
      const { API_ENDPOINTS } = await import('../config/api')
      
      // Load tasks from backend
      const response = await fetch(API_ENDPOINTS.tasks)
      if (!response.ok) throw new Error('Failed to load tasks')
      const backendTasks = await response.json()
      
      // Transform backend tasks and check for missing priorities
      const transformedTasks = {}
      const tasksNeedingPriorityUpdate = []
      
      // Priority mapping for ALL 60 levels - every task MUST have a priority
      const priorityMapping = {
        // Critical tasks (Foundation & Core)
        'Level1_ProjectSetup': TaskPriority.CRITICAL,
        'Level2_DatabaseAuth': TaskPriority.CRITICAL,
        'Level3_CustomerIdentity': TaskPriority.CRITICAL,
        'Level5_WalletServices': TaskPriority.CRITICAL,
        'Level6_Blockchain': TaskPriority.CRITICAL,
        'Level7_TradingEngine': TaskPriority.CRITICAL,
        'Level11_PaymentGateways': TaskPriority.CRITICAL,
        // High priority tasks (Important Features)
        'Level4_Notifications': TaskPriority.HIGH,
        'Level8_MarketManagement': TaskPriority.HIGH,
        'Level9_TradingControllers': TaskPriority.HIGH,
        'Level10_WalletController': TaskPriority.HIGH,
        'Level12_KYCIdentity': TaskPriority.HIGH,
        'Level13_AdminRBAC': TaskPriority.HIGH,
        'Level14_OTCExchange': TaskPriority.HIGH,
        // Medium priority tasks (Support & Additional)
        'Level15_SupportContent': TaskPriority.MEDIUM,
        'Level16_Promotional': TaskPriority.MEDIUM,
        'Level17_AdditionalServices': TaskPriority.MEDIUM,
        // Levels 18-30 (if they exist)
        'Level18': TaskPriority.MEDIUM,
        'Level19': TaskPriority.MEDIUM,
        'Level20': TaskPriority.MEDIUM,
        'Level21': TaskPriority.MEDIUM,
        'Level22': TaskPriority.MEDIUM,
        'Level23': TaskPriority.MEDIUM,
        'Level24': TaskPriority.MEDIUM,
        'Level25': TaskPriority.MEDIUM,
        'Level26': TaskPriority.MEDIUM,
        'Level27': TaskPriority.MEDIUM,
        'Level28': TaskPriority.MEDIUM,
        'Level29': TaskPriority.MEDIUM,
        'Level30': TaskPriority.MEDIUM,
        // Advanced/Missing tasks (Levels 31-60) - mostly medium, some high
        'Level31_AdvancedTrading': TaskPriority.HIGH,
        'Level32_ComplianceRisk': TaskPriority.HIGH,
        'Level33_SecurityEnhancements': TaskPriority.HIGH,
        'Level34_FinancialServices': TaskPriority.HIGH,
        'Level35_AnalyticsReporting': TaskPriority.MEDIUM,
        'Level36': TaskPriority.MEDIUM,
        'Level37': TaskPriority.MEDIUM,
        'Level38': TaskPriority.MEDIUM,
        'Level39': TaskPriority.MEDIUM,
        'Level40': TaskPriority.MEDIUM,
        'Level41': TaskPriority.MEDIUM,
        'Level42': TaskPriority.MEDIUM,
        'Level43': TaskPriority.MEDIUM,
        'Level44': TaskPriority.MEDIUM,
        'Level45': TaskPriority.MEDIUM,
        'Level46': TaskPriority.MEDIUM,
        'Level47': TaskPriority.MEDIUM,
        'Level48': TaskPriority.MEDIUM,
        'Level49': TaskPriority.MEDIUM,
        'Level50': TaskPriority.MEDIUM,
        'Level51': TaskPriority.LOW,
        'Level52': TaskPriority.LOW,
        'Level53': TaskPriority.LOW,
        'Level54': TaskPriority.LOW,
        'Level55': TaskPriority.LOW,
        'Level56': TaskPriority.LOW,
        'Level57': TaskPriority.LOW,
        'Level58': TaskPriority.LOW,
        'Level59': TaskPriority.LOW,
        'Level60': TaskPriority.LOW,
      }
      
      backendTasks.forEach(bt => {
        const transformed = transformBackendTask(bt)
        
        // EVERY task MUST have a priority - set it if missing or incorrect
        let correctPriority = priorityMapping[bt.nodeId]
        
        // If not in mapping, try to infer from level number
        if (!correctPriority && bt.nodeId && bt.nodeId.startsWith('Level')) {
          const levelMatch = bt.nodeId.match(/Level(\d+)/)
          if (levelMatch) {
            const levelNum = parseInt(levelMatch[1])
            // Infer priority based on level number
            if (levelNum <= 7 || levelNum === 11) {
              correctPriority = TaskPriority.CRITICAL
            } else if (levelNum <= 14) {
              correctPriority = TaskPriority.HIGH
            } else if (levelNum <= 30) {
              correctPriority = TaskPriority.MEDIUM
            } else if (levelNum <= 50) {
              correctPriority = TaskPriority.MEDIUM
            } else {
              correctPriority = TaskPriority.LOW
            }
          }
        }
        
        // Default to MEDIUM if still no priority found
        if (!correctPriority) {
          correctPriority = TaskPriority.MEDIUM
        }
        
        // Update priority if it's missing, null, or different from correct priority
        const needsUpdate = !bt.priority || 
                           bt.priority === null || 
                           bt.priority === '' || 
                           transformed.priority !== correctPriority
        
        if (needsUpdate) {
          transformed.priority = correctPriority
          tasksNeedingPriorityUpdate.push({
            nodeId: bt.nodeId,
            backendId: bt.id,
            priority: correctPriority
          })
        }
        
        transformedTasks[bt.nodeId] = transformed
      })
      
      // Update priorities in database for tasks that need it
      // EVERY task must have a priority saved in the database
      if (tasksNeedingPriorityUpdate.length > 0) {
        console.log(`🔄 Updating priorities for ${tasksNeedingPriorityUpdate.length} tasks in database...`)
        
        // Update all tasks in parallel
        const updatePromises = tasksNeedingPriorityUpdate.map(async ({ nodeId, backendId, priority }) => {
          try {
            const { API_ENDPOINTS } = await import('../config/api')
            // Convert priority enum to lowercase string for database
            const priorityValue = priority === TaskPriority.LOW ? 'low' :
                                 priority === TaskPriority.MEDIUM ? 'medium' :
                                 priority === TaskPriority.HIGH ? 'high' :
                                 priority === TaskPriority.CRITICAL ? 'critical' : 'medium'
            
            const response = await fetch(API_ENDPOINTS.task(backendId), {
              method: 'PATCH',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ priority: priorityValue })
            })
            
            if (response.ok) {
              console.log(`✅ Updated priority for ${nodeId} to ${priorityValue}`)
              return { success: true, nodeId, priorityValue }
            } else {
              console.warn(`⚠️ Failed to update priority for ${nodeId}: ${response.status} ${response.statusText}`)
              return { success: false, nodeId }
            }
          } catch (error) {
            console.warn(`⚠️ Failed to update priority for ${nodeId}:`, error)
            return { success: false, nodeId, error: error.message }
          }
        })
        
        // Wait for all updates to complete
        const results = await Promise.all(updatePromises)
        const successful = results.filter(r => r.success).length
        const failed = results.filter(r => !r.success).length
        
        if (successful > 0) {
          console.log(`✅ Successfully updated priorities for ${successful} tasks`)
        }
        if (failed > 0) {
          console.warn(`⚠️ Failed to update priorities for ${failed} tasks`)
        }
      } else {
        console.log('✅ All tasks already have priorities set in database')
      }
      
      // All tasks come from database - no hardcoded tasks
      // If database is empty, tasks need to be seeded via backend seed endpoint
      setTasks(transformedTasks)
    } catch (error) {
      console.error('Failed to load tasks from backend:', error)
      setBackendError(error.message)
      // No fallback - all tasks must come from database
      console.warn('⚠️ Backend unavailable - no tasks available. Please ensure backend is running and database is seeded.')
      setTasks({})
    } finally {
      setLoading(false)
    }
  }
  
  const seedTasksToBackend = async (tasksToSeed) => {
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      
      // Transform tasks to backend format
      const backendTasks = tasksToSeed.map(task => transformFrontendTask(task))
      
      const response = await fetch(API_ENDPOINTS.seedTasks, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backendTasks)
      })
      
      if (!response.ok) throw new Error('Failed to seed tasks')
      const result = await response.json()
      console.log(`✅ Seeded ${result.created} tasks, skipped ${result.skipped} existing tasks`)
    } catch (error) {
      console.error('Failed to seed tasks to backend:', error)
      throw error
    }
  }

  const saveTaskToBackend = async (task) => {
    try {
      const { API_ENDPOINTS } = await import('../config/api')
      const backendTask = transformFrontendTask(task)
      
      // Use nodeId to find existing task, or create new one
      let url, method
      if (task.backendId) {
        // Update existing task by UUID
        url = API_ENDPOINTS.task(task.backendId)
        method = 'PATCH'
      } else {
        // Try to find by nodeId first
        try {
          const findResponse = await fetch(API_ENDPOINTS.taskByNode(task.nodeId || task.id))
          if (findResponse.ok) {
            const existing = await findResponse.json()
            // Check if existing is an object with an id property
            if (existing && existing.id) {
              url = API_ENDPOINTS.task(existing.id)
              method = 'PATCH'
            } else {
              url = API_ENDPOINTS.tasks
              method = 'POST'
            }
          } else {
            url = API_ENDPOINTS.tasks
            method = 'POST'
          }
        } catch (findError) {
          // If find fails, just create new
          url = API_ENDPOINTS.tasks
          method = 'POST'
        }
      }
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(backendTask)
      })
      
      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`Failed to save task: ${response.status} ${response.statusText} - ${errorText}`)
      }
      
      // Check if response has content before parsing
      const contentType = response.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const text = await response.text()
        if (text && text.trim()) {
          try {
            const saved = JSON.parse(text)
            // Transform back to frontend format
            return transformBackendTask(saved)
          } catch (parseError) {
            console.error('Failed to parse response JSON:', parseError, 'Response text:', text)
            // Return task we sent if parsing fails
            return transformBackendTask({ ...backendTask, id: task.backendId || task.id })
          }
        } else {
          // Empty response - return the task we sent (for 204 No Content)
          return transformBackendTask({ ...backendTask, id: task.backendId || task.id })
        }
      } else {
        // No JSON response - return the task we sent
        return transformBackendTask({ ...backendTask, id: task.backendId || task.id })
      }
    } catch (error) {
      console.error('Failed to save task to backend:', error)
      throw error
    }
  }

  const updateTask = async (taskId, updates) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      const updated = {
        ...prev,
        [taskId]: {
          ...task,
          ...updates,
          updatedAt: new Date().toISOString()
        }
      }
      
      // Save to backend (always - no localStorage)
      if (updated[taskId]) {
        saveTaskToBackend(updated[taskId])
          .then(saved => {
            // Update task with backend response
            setTasks(current => {
              const currentTask = current[taskId]
              if (!currentTask) return current
              
              return {
                ...current,
                [taskId]: {
                  ...currentTask,
                  ...saved,
                  // Preserve subtasks structure if backend doesn't return them properly
                  subtasks: saved.subtasks || currentTask.subtasks,
                  backendId: saved.backendId || saved.id || currentTask?.backendId
                }
              }
            })
          })
          .catch(err => {
            console.error('Backend save failed:', err)
            // Task is still updated in state, but not persisted
            // You might want to show a toast/notification here
          })
      }
      
      return updated
    })
  }
  
  // Function to clean up old tasks (remove non-Level tasks) - now handled by backend
  const cleanupOldTasks = () => {
    // No-op: cleanup is handled by backend filtering
    console.log('🧹 Cleanup handled by backend - only Level tasks are stored')
  }

  const updateSubtask = (taskId, subtaskId, updates) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      const updatedSubtasks = task.subtasks.map(st =>
        st.id === subtaskId ? { ...st, ...updates } : st
      )
      
      const updatedTask = {
        ...task,
        subtasks: updatedSubtasks,
        updatedAt: new Date().toISOString()
      }
      
      // Save to backend
      saveTaskToBackend(updatedTask)
        .then(saved => {
          setTasks(current => ({
            ...current,
            [taskId]: {
              ...current[taskId],
              ...saved,
              backendId: saved.id || saved.backendId || current[taskId]?.backendId
            }
          }))
        })
        .catch(err => console.error('Backend save failed:', err))
      
      return {
        ...prev,
        [taskId]: updatedTask
      }
    })
  }

  const addSubtask = (taskId, subtask) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      const newSubtask = {
        id: subtask.id || `subtask-${Date.now()}`,
        title: subtask.title || subtask,
        completed: false,
        ...(typeof subtask === 'object' ? subtask : {})
      }
      
      const updatedTask = {
        ...task,
        subtasks: [...(task.subtasks || []), newSubtask],
        updatedAt: new Date().toISOString()
      }
      
      // Save to backend
      saveTaskToBackend(updatedTask)
        .then(saved => {
          setTasks(current => ({
            ...current,
            [taskId]: {
              ...current[taskId],
              ...saved,
              backendId: saved.id || saved.backendId || current[taskId]?.backendId
            }
          }))
        })
        .catch(err => console.error('Backend save failed:', err))
      
      return {
        ...prev,
        [taskId]: updatedTask
      }
    })
  }

  const toggleSubtask = (taskId, subtaskId) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      // Get current completed state - handle both boolean and string/number
      const currentSubtask = (task.subtasks || []).find(st => st.id === subtaskId)
      const currentCompleted = currentSubtask?.completed === true || currentSubtask?.completed === 'true' || currentSubtask?.completed === 1
      
      const updatedSubtasks = (task.subtasks || []).map(st => {
        if (st.id === subtaskId) {
          return { ...st, completed: !currentCompleted }
        }
        return st
      })
      
      // Calculate subtask completion to auto-update task status
      const completedCount = updatedSubtasks.filter(st => 
        st.completed === true || st.completed === 'true' || st.completed === 1
      ).length
      const totalCount = updatedSubtasks.length
      const allCompleted = totalCount > 0 && completedCount === totalCount
      const someCompleted = completedCount > 0 && completedCount < totalCount
      
      // Auto-update task status based on subtask completion
      let newStatus = task.status
      if (allCompleted && task.status !== TaskStatus.COMPLETED) {
        newStatus = TaskStatus.COMPLETED
        console.log(`✅ All subtasks completed for ${taskId}, auto-updating status to COMPLETED`)
      } else if (someCompleted && task.status === TaskStatus.NOT_STARTED) {
        newStatus = TaskStatus.IN_PROGRESS
        console.log(`🔄 Some subtasks completed for ${taskId}, auto-updating status to IN_PROGRESS`)
      } else if (!someCompleted && task.status === TaskStatus.IN_PROGRESS && completedCount === 0) {
        // If all subtasks unchecked and was in progress, could revert to not started
        // But we'll keep it as in_progress since user was working on it
      }
      
      const updatedTask = {
        ...task,
        subtasks: updatedSubtasks,
        status: newStatus,
        updatedAt: new Date().toISOString()
      }
      
      // Optimistically update UI
      const optimisticUpdate = {
        ...prev,
        [taskId]: updatedTask
      }
      
      // Save to backend (async, don't block UI)
      saveTaskToBackend(updatedTask)
        .then(saved => {
          setTasks(current => {
            const currentTask = current[taskId]
            if (!currentTask) return current
            
            // Merge saved task with current, preserving subtasks structure
            const mergedSubtasks = (saved.subtasks || updatedSubtasks).map((savedSt, idx) => {
              const currentSt = currentTask.subtasks?.[idx]
              return {
                ...savedSt,
                completed: savedSt.completed !== undefined ? savedSt.completed : (currentSt?.completed || false)
              }
            })
            
            return {
              ...current,
              [taskId]: {
                ...currentTask,
                ...saved,
                subtasks: mergedSubtasks.length > 0 ? mergedSubtasks : updatedSubtasks,
                status: saved.status || newStatus, // Use saved status or new status
                backendId: saved.backendId || saved.id || currentTask?.backendId
              }
            }
          })
        })
        .catch(err => {
          console.error('Backend save failed for subtask toggle:', err)
          // Keep optimistic update - user sees the change even if save fails
        })
      
      return optimisticUpdate
    })
  }

  const updateActualHours = (taskId, hours) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      const updatedTask = {
        ...task,
        actualHours: hours,
        updatedAt: new Date().toISOString()
      }
      
      // Save to backend
      saveTaskToBackend(updatedTask)
        .then(saved => {
          setTasks(current => ({
            ...current,
            [taskId]: {
              ...current[taskId],
              ...saved,
              backendId: saved.id || saved.backendId || current[taskId]?.backendId
            }
          }))
        })
        .catch(err => console.error('Backend save failed:', err))
      
      return {
        ...prev,
        [taskId]: updatedTask
      }
    })
  }
  

  const updateTaskStatus = (taskId, status) => {
    updateTask(taskId, { status })
  }

  const updateTaskPriority = (taskId, priority) => {
    updateTask(taskId, { priority })
  }

  const getOrCreateTask = async (taskId) => {
    if (!taskId) return null
    
    // Check if task exists
    if (tasks[taskId]) {
      return tasks[taskId]
    }
    
    // Check if it's a level task
    if (taskId.startsWith('Level')) {
      return tasks[taskId] || null
    }
    
    // IMPORTANT: Map diagram nodes to Level tasks instead of creating new tasks
    const mappedLevel = mapNodeToLevel(taskId)
    if (mappedLevel && tasks[mappedLevel]) {
      console.log(`Mapped diagram node "${taskId}" to Level task: ${mappedLevel}`)
      return tasks[mappedLevel]
    }
    
    // Check if a merged task exists for this base name
    const baseName = getBaseName(taskId, null)
    if (baseName && tasks[baseName]) {
      return tasks[baseName]
    }
    
    // Try mapping the base name to a Level task
    if (baseName) {
      const baseMappedLevel = mapNodeToLevel(baseName)
      if (baseMappedLevel && tasks[baseMappedLevel]) {
        console.log(`Mapped base name "${baseName}" to Level task: ${baseMappedLevel}`)
        return tasks[baseMappedLevel]
      }
    }
    
    // If we still can't find a Level task, try to find one from TASK_NAME_MAPPING
    const metadata = getTaskMetadata(taskId)
    if (metadata.level && tasks[metadata.level]) {
      console.log(`Mapped via metadata "${taskId}" to Level task: ${metadata.level}`)
      return tasks[metadata.level]
    }
    
    // LAST RESORT: Don't create new tasks - return null or the closest Level task
    // This prevents creating tasks that aren't part of the 30 Level structure
    console.warn(`Could not map diagram node "${taskId}" to any Level task. Returning null.`)
    return null
  }

  const addNote = (taskId, note) => {
    setTasks(prev => {
      const task = prev[taskId]
      if (!task) return prev
      
      const updatedTask = {
        ...task,
        notes: [...(task.notes || []), { content: note, createdAt: new Date().toISOString() }],
        updatedAt: new Date().toISOString()
      }
      
      // Save to backend
      saveTaskToBackend(updatedTask)
        .then(saved => {
          setTasks(current => ({
            ...current,
            [taskId]: {
              ...current[taskId],
              ...saved,
              backendId: saved.id || saved.backendId || current[taskId]?.backendId
            }
          }))
        })
        .catch(err => console.error('Backend save failed:', err))
      
      return {
        ...prev,
        [taskId]: updatedTask
      }
    })
  }

  const getProgress = () => {
    // Only count Level tasks (the 30 main tasks) - filter out old hidden tasks
    const allTasks = Object.values(tasks).filter(t => t && t.id && t.id.startsWith('Level'))
    const total = allTasks.length
    const completed = allTasks.filter(t => t.status === TaskStatus.COMPLETED).length
    const inProgress = allTasks.filter(t => t.status === TaskStatus.IN_PROGRESS).length
    const notStarted = allTasks.filter(t => t.status === TaskStatus.NOT_STARTED).length
    const blocked = allTasks.filter(t => t.status === TaskStatus.BLOCKED).length
    
    const totalSubtasks = allTasks.reduce((sum, t) => sum + (t.subtasks?.length || 0), 0)
    const completedSubtasks = allTasks.reduce((sum, t) => 
      sum + (t.subtasks?.filter(st => st.completed === true || st.completed === 'true' || st.completed === 1).length || 0), 0
    )
    
    // Calculate progress based on both task status AND subtask completion
    // For each task, calculate its contribution:
    // - If task is COMPLETED: counts as 100%
    // - If task has subtasks: use subtask completion percentage
    // - Otherwise: use task status (0% for NOT_STARTED, 50% for IN_PROGRESS, etc.)
    let totalProgress = 0
    allTasks.forEach(task => {
      if (task.status === TaskStatus.COMPLETED) {
        totalProgress += 100
      } else if (task.status === TaskStatus.BLOCKED) {
        totalProgress += 0 // Blocked tasks don't contribute
      } else {
        // Check if task has subtasks
        const taskSubtasks = task.subtasks || []
        if (taskSubtasks.length > 0) {
          const taskCompletedSubtasks = taskSubtasks.filter(st => 
            st.completed === true || st.completed === 'true' || st.completed === 1
          ).length
          const taskSubtaskProgress = (taskCompletedSubtasks / taskSubtasks.length) * 100
          totalProgress += taskSubtaskProgress
        } else {
          // No subtasks - use status-based progress
          if (task.status === TaskStatus.IN_PROGRESS) {
            totalProgress += 50 // In progress = 50%
          } else {
            totalProgress += 0 // Not started = 0%
          }
        }
      }
    })
    
    const overallPercentage = total > 0 ? Math.round(totalProgress / total) : 0
    
    return {
      total,
      completed,
      inProgress,
      notStarted,
      blocked,
      percentage: overallPercentage, // Now includes subtask completion
      subtasks: {
        total: totalSubtasks,
        completed: completedSubtasks,
        percentage: totalSubtasks > 0 ? Math.round((completedSubtasks / totalSubtasks) * 100) : 0
      }
    }
  }

  const getCategoryProgress = (category) => {
    // Only count Level tasks (the 30 main tasks) - filter out old hidden tasks
    const categoryTasks = Object.values(tasks).filter(t => 
      t && t.id && t.id.startsWith('Level') && t.category === category
    )
    if (categoryTasks.length === 0) {
      return { total: 0, completed: 0, percentage: 0 }
    }
    
    const total = categoryTasks.length
    const completed = categoryTasks.filter(t => t.status === TaskStatus.COMPLETED).length
    
    return {
      total,
      completed,
      percentage: total > 0 ? Math.round((completed / total) * 100) : 0
    }
  }

  // Auto-cleanup old tasks on mount (one time) - now handled by backend
  // Backend only stores Level tasks, so no cleanup needed

  const value = {
    tasks,
    updateTask,
    updateSubtask,
    addSubtask,
    toggleSubtask,
    addNote,
    updateActualHours,
    updateTaskStatus,
    updateTaskPriority,
    getProgress,
    getCategoryProgress,
    getOrCreateTask,
    mapNodeToLevel,
    cleanupOldTasks,
    showTodoPanel,
    setShowTodoPanel,
    selectedTask,
    setSelectedTask,
    filterStatus,
    setFilterStatus,
    filterCategory,
    setFilterCategory,
    loading,
    useBackend,
    setUseBackend,
    backendError,
    loadTasksFromBackend
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

const TodoContext = createContext()

export const useTodoStore = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoStore must be used within TodoProvider')
  }
  return context
}

// Export mapNodeToLevel and NODE_TO_LEVEL_MAPPING for use in other modules
export { mapNodeToLevel, NODE_TO_LEVEL_MAPPING }
