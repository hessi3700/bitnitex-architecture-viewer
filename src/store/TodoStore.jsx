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

// 30 SUPER DETAILED TASKS - Consolidated from 80+ tasks into comprehensive game progression
// Each task has 15-25 detailed subtasks covering all aspects of implementation
const DEFAULT_TASKS = {
  // Level 1: Foundation
  Level1_ProjectSetup: {
    id: 'Level1_ProjectSetup',
    title: '🎮 Level 1: Project Foundation',
    description: 'Set up NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools. This is the foundation for the entire BitniTex cryptocurrency exchange platform.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Infrastructure',
    estimatedHours: 16,
    actualHours: 0,
    subtasks: [
      { 
        id: 'nest-node-check', 
        title: 'Verify Node.js 20+ installation and npm version', 
        completed: false,
        aiPrompt: 'Help me verify that Node.js 20+ and npm are correctly installed on my system. I need to check the versions and ensure they meet the requirements for a NestJS cryptocurrency exchange project. Show me the commands to check versions and what the expected output should be.'
      },
      { 
        id: 'nest-cli', 
        title: 'Install NestJS CLI globally: npm install -g @nestjs/cli', 
        completed: false,
        aiPrompt: 'Help me install NestJS CLI globally on my system. I need step-by-step instructions for installing @nestjs/cli using npm, including any potential permission issues on Linux/Mac and how to resolve them. Also show me how to verify the installation was successful.'
      },
      { 
        id: 'nest-cli-verify', 
        title: 'Verify NestJS CLI installation: nest --version', 
        completed: false,
        aiPrompt: 'Help me verify that NestJS CLI is properly installed and accessible. Show me the command to check the version and what the expected output should look like. Also help me troubleshoot if the command is not found.'
      },
      { 
        id: 'nest-init', 
        title: 'Initialize new NestJS project: nest new bitnitex-backend', 
        completed: false,
        aiPrompt: 'Help me create a new NestJS project called "bitnitex-backend" for a cryptocurrency exchange platform. I need instructions on using the nest CLI to create the project, choosing the package manager (npm), and understanding the initial project structure that gets generated.'
      },
      { 
        id: 'nest-packages-core', 
        title: 'Install core packages: @nestjs/common, @nestjs/core, @nestjs/platform-express', 
        completed: false,
        aiPrompt: 'Help me install the core NestJS packages (@nestjs/common, @nestjs/core, @nestjs/platform-express) for my cryptocurrency exchange project. Explain what each package does and provide the npm install command. Also explain why these are essential for a NestJS application.'
      },
      { 
        id: 'nest-packages-db', 
        title: 'Install database packages: @nestjs/typeorm, typeorm, mysql2', 
        completed: false,
        aiPrompt: 'Help me install TypeORM and MySQL driver packages for my NestJS cryptocurrency exchange. I need @nestjs/typeorm, typeorm, and mysql2. Explain what each package does, provide the installation command, and explain how TypeORM will help me manage the database schema for the exchange platform.'
      },
      { 
        id: 'nest-packages-auth', 
        title: 'Install authentication packages: @nestjs/jwt, @nestjs/passport, passport, passport-jwt, bcrypt', 
        completed: false,
        aiPrompt: 'Help me install authentication and security packages for my NestJS cryptocurrency exchange. I need JWT authentication (@nestjs/jwt, @nestjs/passport, passport, passport-jwt) and password hashing (bcrypt). Explain the purpose of each package and provide the installation command. Also explain how these will be used for user authentication in the exchange.'
      },
      { 
        id: 'nest-packages-validation', 
        title: 'Install validation packages: class-validator, class-transformer', 
        completed: false,
        aiPrompt: 'Help me install validation packages (class-validator, class-transformer) for my NestJS cryptocurrency exchange. Explain how these packages work together to validate incoming request data, provide the installation command, and give examples of how they will be used to validate API requests in the exchange platform.'
      },
      { 
        id: 'nest-packages-swagger', 
        title: 'Install Swagger packages: @nestjs/swagger, swagger-ui-express', 
        completed: false,
        aiPrompt: 'Help me install Swagger/OpenAPI packages for API documentation in my NestJS cryptocurrency exchange. I need @nestjs/swagger and swagger-ui-express. Explain how Swagger will help document the exchange APIs, provide the installation command, and explain the benefits of having interactive API documentation.'
      },
      { 
        id: 'nest-packages-config', 
        title: 'Install configuration package: @nestjs/config', 
        completed: false,
        aiPrompt: 'Help me install @nestjs/config for managing environment variables and configuration in my NestJS cryptocurrency exchange. Explain how this package helps manage different environments (development, production), provide the installation command, and explain best practices for storing sensitive configuration like API keys and database credentials.'
      },
      { 
        id: 'nest-packages-utils', 
        title: 'Install utility packages: @nestjs/schedule, @nestjs/websockets, @nestjs/platform-socket.io', 
        completed: false,
        aiPrompt: 'Help me install utility packages for scheduled tasks and WebSocket support in my NestJS cryptocurrency exchange. I need @nestjs/schedule for cron jobs, @nestjs/websockets and @nestjs/platform-socket.io for real-time price updates. Explain what each package does, provide the installation command, and explain how they will be used in the exchange (e.g., scheduled order expiration, real-time market data).'
      },
      { 
        id: 'nest-structure-modules', 
        title: 'Create src/modules directory for feature modules', 
        completed: false,
        aiPrompt: 'Help me set up the modules directory structure for my NestJS cryptocurrency exchange. I need to create src/modules directory to organize feature modules (customers, orders, wallets, etc.). Explain the NestJS module structure, show me how to create the directory, and explain how modules will be organized for the exchange platform.'
      },
      { 
        id: 'nest-structure-common', 
        title: 'Create src/common directory (guards, decorators, filters, interceptors)', 
        completed: false,
        aiPrompt: 'Help me create the common directory structure for shared components in my NestJS cryptocurrency exchange. I need src/common with subdirectories for guards (authentication/authorization), decorators (custom decorators), filters (exception handling), and interceptors (request/response transformation). Explain the purpose of each and show me the directory structure.'
      },
      { 
        id: 'nest-structure-config', 
        title: 'Create src/config directory for configuration files', 
        completed: false,
        aiPrompt: 'Help me create the config directory for configuration files in my NestJS cryptocurrency exchange. I need src/config to store configuration modules for database, JWT, payment gateways, blockchain APIs, etc. Show me how to structure this directory and explain how configuration will be organized for different services in the exchange.'
      },
      { 
        id: 'nest-structure-dto', 
        title: 'Create src/common/dto directory for shared DTOs', 
        completed: false,
        aiPrompt: 'Help me create the DTO (Data Transfer Object) directory structure for my NestJS cryptocurrency exchange. I need src/common/dto for shared DTOs that will be used across multiple modules. Explain what DTOs are, show me the directory structure, and explain how DTOs will be used for request/response validation in the exchange APIs.'
      },
      { 
        id: 'nest-config-env', 
        title: 'Create .env file with database, JWT, and API keys', 
        completed: false,
        aiPrompt: 'Help me create a .env file for my NestJS cryptocurrency exchange with all necessary environment variables. I need database connection strings, JWT secrets, payment gateway API keys, blockchain API keys, etc. Show me a template .env file with all required variables, explain what each variable is for, and explain security best practices for managing these secrets.'
      },
      { 
        id: 'nest-config-module', 
        title: 'Configure ConfigModule in app.module.ts', 
        completed: false,
        aiPrompt: 'Help me configure the ConfigModule in app.module.ts for my NestJS cryptocurrency exchange. I need to set up @nestjs/config to load environment variables from .env file, configure validation schema, and make configuration available throughout the application. Show me the code and explain how to access config values in services.'
      },
      { 
        id: 'nest-swagger-setup', 
        title: 'Set up SwaggerModule in main.ts with DocumentBuilder', 
        completed: false,
        aiPrompt: 'Help me set up Swagger/OpenAPI documentation in main.ts for my NestJS cryptocurrency exchange. I need to configure SwaggerModule with DocumentBuilder to create comprehensive API documentation. Show me the code to add to main.ts, explain the configuration options (title, description, version, tags), and explain how to add authentication to Swagger UI.'
      },
      { 
        id: 'nest-swagger-auth', 
        title: 'Configure Swagger JWT authentication', 
        completed: false,
        aiPrompt: 'Help me configure JWT authentication in Swagger UI for my NestJS cryptocurrency exchange. I need to add a security scheme for Bearer token authentication so developers can test authenticated endpoints in Swagger. Show me how to add the security scheme to Swagger configuration and how to apply it to protected endpoints.'
      },
      { 
        id: 'nest-validation-pipe', 
        title: 'Set up global ValidationPipe in main.ts', 
        completed: false,
        aiPrompt: 'Help me set up a global ValidationPipe in main.ts for my NestJS cryptocurrency exchange. I need to enable automatic validation of all incoming requests using class-validator. Show me how to configure the ValidationPipe globally, explain the validation options (whitelist, forbidNonWhitelisted, transform), and explain how validation errors will be handled.'
      },
      { 
        id: 'nest-exception-filter', 
        title: 'Create global exception filter in src/common/filters', 
        completed: false,
        aiPrompt: 'Help me create a global exception filter for my NestJS cryptocurrency exchange. I need to handle all exceptions consistently, format error responses, and log errors properly. Show me how to create the filter in src/common/filters, explain how to register it globally, and show examples of how different exception types will be handled (validation errors, not found, unauthorized, etc.).'
      },
      { 
        id: 'nest-logging-setup', 
        title: 'Configure logging with Winston or built-in logger', 
        completed: false,
        aiPrompt: 'Help me set up logging for my NestJS cryptocurrency exchange. I can use the built-in NestJS logger or Winston. Explain the differences, show me how to configure logging (log levels, format, file output), and explain best practices for logging in a production cryptocurrency exchange (what to log, what not to log for security, log rotation, etc.).'
      },
      { 
        id: 'nest-testing-setup', 
        title: 'Configure Jest for testing in package.json', 
        completed: false,
        aiPrompt: 'Help me configure Jest for testing in my NestJS cryptocurrency exchange project. I need to set up Jest in package.json with proper configuration for NestJS, including test environment, coverage settings, and test file patterns. Show me the Jest configuration and explain how to write unit tests and integration tests for NestJS services and controllers.'
      },
      { 
        id: 'nest-gitignore', 
        title: 'Update .gitignore for Node.js and NestJS', 
        completed: false,
        aiPrompt: 'Help me create a comprehensive .gitignore file for my NestJS cryptocurrency exchange project. I need to exclude node_modules, build files, environment files (.env), logs, IDE files, and other sensitive or generated files. Show me a complete .gitignore template and explain why each entry is important for security and project management.'
      },
      { 
        id: 'nest-readme', 
        title: 'Create README.md with project setup instructions', 
        completed: false,
        aiPrompt: 'Help me create a comprehensive README.md file for my NestJS cryptocurrency exchange project. I need to include project description, setup instructions, environment variables, how to run the project, API documentation links, testing instructions, and contribution guidelines. Show me a professional README template and explain what information is essential for developers working on the exchange platform.'
      }
    ],
    notes: [],
    dependencies: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 2: Database & Authentication
  Level2_DatabaseAuth: {
    id: 'Level2_DatabaseAuth',
    title: '🎮 Level 2: Database & Authentication',
    description: 'Set up TypeORM with all 81 entities, create database migrations, configure authentication with JWT, guards, RBAC, 2FA, and OTP support. This includes the complete database schema and all authentication mechanisms.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Infrastructure',
    estimatedHours: 120,
    actualHours: 0,
    subtasks: [
      // Database Setup
      { id: 'db-mysql-setup', title: 'Set up MySQL database and create bitnitex database', completed: false, aiPrompt: 'Help me set up a MySQL database for my NestJS cryptocurrency exchange. I need to create a database named "bitnitex" and configure it with appropriate character set (utf8mb4) and collation. Show me the SQL commands to create the database and explain best practices for database configuration in a production cryptocurrency exchange environment.' },
      { id: 'db-config', title: 'TypeORM configuration in app.module.ts with connection options', completed: false, aiPrompt: 'Help me configure TypeORM in app.module.ts for my NestJS cryptocurrency exchange. I need to set up the database connection with proper options (host, port, username, password, database, synchronize, logging). Show me how to import TypeOrmModule.forRoot() with all necessary configuration options and explain what each option does for a production exchange.' },
      { id: 'db-config-env', title: 'Configure database connection from environment variables', completed: false, aiPrompt: 'Help me configure the database connection to use environment variables in my NestJS cryptocurrency exchange. I need to load database credentials from .env file using @nestjs/config. Show me how to create a database configuration module and access the values in TypeORM configuration, including validation of required environment variables.' },
      { id: 'db-entities-identity-customer', title: 'Create Customer entity with all fields (id, email, phone, password, status, etc.)', completed: false, aiPrompt: 'Help me create a Customer entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id (UUID), email (unique), phone (unique), password (hashed), firstName, lastName, nationalId, status (enum), accountLevel, emailVerified, phoneVerified, createdAt, updatedAt. Show me the entity decorators, column types, and explain how to handle sensitive fields like password.' },
      { id: 'db-entities-identity-admin', title: 'Create Admin entity with all fields', completed: false, aiPrompt: 'Help me create an Admin entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, email (unique), password (hashed), firstName, lastName, roles, privileges, status, lastLogin, createdAt, updatedAt. Show me how to structure this entity and explain the relationship between Admin and Role/Privilege entities for RBAC.' },
      { id: 'db-entities-identity-role', title: 'Create Role entity with name, description, and relationships', completed: false, aiPrompt: 'Help me create a Role entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, name (unique), description, privileges (many-to-many with Privilege), customers (many-to-many with Customer), createdAt, updatedAt. Show me how to define the many-to-many relationships and explain how roles will be used for access control in the exchange.' },
      { id: 'db-entities-identity-privilege', title: 'Create Privilege entity with name, description, and resource', completed: false, aiPrompt: 'Help me create a Privilege entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, name (unique), description, resource (e.g., "order:create", "wallet:withdraw"), roles (many-to-many with Role), createdAt, updatedAt. Show me the entity structure and explain how privileges provide fine-grained access control for exchange operations.' },
      { id: 'db-entities-identity-customer-role', title: 'Create CustomerRole junction entity for many-to-many relationship', completed: false, aiPrompt: 'Help me create a CustomerRole junction entity in TypeORM for my NestJS cryptocurrency exchange. This entity will manage the many-to-many relationship between Customer and Role. Show me how to create a junction entity with customerId and roleId foreign keys, and explain when to use a junction entity vs. letting TypeORM handle the relationship automatically.' },
      { id: 'db-entities-assets-coin', title: 'Create Coin entity with symbol, name, network, decimals, etc.', completed: false, aiPrompt: 'Help me create a Coin entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, symbol (unique), name, network, decimals, contractAddress, status, iconUrl, createdAt, updatedAt. Show me the entity structure and explain how coins represent different cryptocurrencies in the exchange.' },
      { id: 'db-entities-assets-network', title: 'Create Network entity for blockchain networks', completed: false, aiPrompt: 'Help me create a Network entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-assets-market', title: 'Create Market entity with baseCoin, quoteCoin, status, etc.', completed: false, aiPrompt: 'Help me create a Market entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, baseCoinId, quoteCoinId, symbol (e.g., \'BTC/USDT\'), status, minOrderAmount, maxOrderAmount, pricePrecision, amountPrecision, feeRate, createdAt, updatedAt. Show me how to define relationships with Coin entities and explain market configuration for trading pairs.' },
      { id: 'db-entities-assets-market-price', title: 'Create MarketPrice entity for price history', completed: false, aiPrompt: 'Help me create a Market entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, baseCoinId, quoteCoinId, symbol (e.g., \'BTC/USDT\'), status, minOrderAmount, maxOrderAmount, pricePrecision, amountPrecision, feeRate, createdAt, updatedAt. Show me how to define relationships with Coin entities and explain market configuration for trading pairs.' },
      { id: 'db-entities-trading-order', title: 'Create Order entity with type, side, price, amount, status, etc.', completed: false, aiPrompt: 'Help me create an Order entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, customerId, marketId, type (LIMIT, MARKET), side (BUY, SELL), price, amount, filledAmount, status, createdAt, updatedAt. Show me the entity structure with proper enums and explain how orders are stored and tracked in the exchange.' },
      { id: 'db-entities-trading-trade', title: 'Create Trade entity with price, amount, fee, buyer, seller, etc.', completed: false, aiPrompt: 'Help me create a Trade entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-trading-orderbook', title: 'Create OrderBook entity for order book snapshots', completed: false, aiPrompt: 'Help me create an Order entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id, customerId, marketId, type (LIMIT, MARKET), side (BUY, SELL), price, amount, filledAmount, status, createdAt, updatedAt. Show me the entity structure with proper enums and explain how orders are stored and tracked in the exchange.' },
      { id: 'db-entities-trading-trade-history', title: 'Create TradeHistory entity for historical trade data', completed: false, aiPrompt: 'Help me create a TradeHistory entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-wallet-hd', title: 'Create HDWallet entity with mnemonic, derivation path, etc.', completed: false, aiPrompt: 'Help me create wallet-related entities in TypeORM for my NestJS cryptocurrency exchange. Show me how to structure CustomerWallet, HDWallet, and WalletAddress entities with proper relationships, and explain how wallet balances and addresses are managed securely in the exchange.' },
      { id: 'db-entities-wallet-customer', title: 'Create CustomerWallet entity with customerId, coinId, balance, lockedBalance', completed: false, aiPrompt: 'Help me create a Customer entity in TypeORM for my NestJS cryptocurrency exchange. I need fields for id (UUID), email (unique), phone (unique), password (hashed), firstName, lastName, nationalId, status (enum), accountLevel, emailVerified, phoneVerified, createdAt, updatedAt. Show me the entity decorators, column types, and explain how to handle sensitive fields like password.' },
      { id: 'db-entities-wallet-address', title: 'Create WalletAddress entity with address, network, derivation index', completed: false, aiPrompt: 'Help me create wallet-related entities in TypeORM for my NestJS cryptocurrency exchange. Show me how to structure CustomerWallet, HDWallet, and WalletAddress entities with proper relationships, and explain how wallet balances and addresses are managed securely in the exchange.' },
      { id: 'db-entities-wallet-transaction', title: 'Create Transaction entity for blockchain transactions', completed: false, aiPrompt: 'Help me create wallet-related entities in TypeORM for my NestJS cryptocurrency exchange. Show me how to structure CustomerWallet, HDWallet, and WalletAddress entities with proper relationships, and explain how wallet balances and addresses are managed securely in the exchange.' },
      { id: 'db-entities-finance-deposit', title: 'Create DepositRequest entity with amount, status, confirmation count', completed: false, aiPrompt: 'Help me create a DepositRequest entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-finance-withdrawal', title: 'Create WithdrawalRequest entity with amount, address, status, etc.', completed: false, aiPrompt: 'Help me create a WithdrawalRequest entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-finance-balance', title: 'Create Balance entity for balance tracking', completed: false, aiPrompt: 'Help me create a Balance entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-payment-gateway', title: 'Create PaymentGatewayTransaction entity', completed: false, aiPrompt: 'Help me create a PaymentGatewayTransaction entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-payment-settlement', title: 'Create Settlement entity for payment settlements', completed: false, aiPrompt: 'Help me create a Settlement entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-kyc-submission', title: 'Create KYCSubmission entity with status, documents, etc.', completed: false, aiPrompt: 'Help me create a KYCSubmission entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-kyc-document', title: 'Create KYCDocument entity for uploaded documents', completed: false, aiPrompt: 'Help me create a KYCDocument entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-kyc-status', title: 'Create KYCStatus entity for status tracking', completed: false, aiPrompt: 'Help me create a KYCStatus entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-other-gift', title: 'Create GiftCode entity with code, amount, expiration, usage count', completed: false, aiPrompt: 'Help me create a GiftCode entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-other-referral', title: 'Create ReferralCode and ReferralRelationship entities', completed: false, aiPrompt: 'Help me create a Create ReferralCode and ReferralRelationship entities entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-other-ticket', title: 'Create Ticket and TicketMessage entities', completed: false, aiPrompt: 'Help me create a Create Ticket and TicketMessage entities entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-other-blog', title: 'Create BlogPost entity with content, author, published status', completed: false, aiPrompt: 'Help me create a BlogPost entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-entities-other-notification', title: 'Create Notification entity with type, message, read status', completed: false, aiPrompt: 'Help me create a Notification entity in TypeORM for my NestJS cryptocurrency exchange. Show me the entity structure with all necessary fields, decorators, column types, relationships, and explain how this entity will be used in the exchange platform.' },
      { id: 'db-relationships-one-to-many', title: 'Define OneToMany relationships (Customer -> Orders, Customer -> Wallets)', completed: false, aiPrompt: 'Help me define OneToMany relationships in TypeORM for my NestJS cryptocurrency exchange. Show me how to use @OneToMany and @ManyToOne decorators for relationships like Customer -> Orders and Customer -> Wallets, and explain how these relationships affect queries and data loading strategies.' },
      { id: 'db-relationships-many-to-one', title: 'Define ManyToOne relationships (Order -> Customer, Trade -> Market)', completed: false, aiPrompt: 'Help me define entity relationships in TypeORM for my NestJS cryptocurrency exchange. Show me how to use @OneToMany, @ManyToOne, and @ManyToMany decorators, and explain how relationships affect database queries and data integrity.' },
      { id: 'db-relationships-many-to-many', title: 'Define ManyToMany relationships (Role -> Privilege, Customer -> Role)', completed: false, aiPrompt: 'Help me define ManyToMany relationships in TypeORM for my NestJS cryptocurrency exchange. Show me how to use @ManyToMany decorators for relationships like Role -> Privilege and Customer -> Role, including junction tables and how to query related data efficiently.' },
      { id: 'db-indexes-primary', title: 'Create primary key indexes for all entities', completed: false, aiPrompt: 'Help me create database indexes in TypeORM for my NestJS cryptocurrency exchange. Show me how to add indexes for performance optimization using @Index decorator, explain which fields should be indexed (foreign keys, searchable fields), and discuss the trade-offs between index count and write performance.' },
      { id: 'db-indexes-foreign', title: 'Create foreign key indexes for performance', completed: false, aiPrompt: 'Help me create database indexes in TypeORM for my NestJS cryptocurrency exchange. Show me how to add indexes for performance optimization using @Index decorator, explain which fields should be indexed (foreign keys, searchable fields), and discuss the trade-offs between index count and write performance.' },
      { id: 'db-indexes-search', title: 'Create indexes on searchable fields (email, phone, address)', completed: false, aiPrompt: 'Help me create database indexes in TypeORM for my NestJS cryptocurrency exchange. Show me how to add indexes for performance optimization using @Index decorator, explain which fields should be indexed (foreign keys, searchable fields), and discuss the trade-offs between index count and write performance.' },
      { id: 'db-constraints-unique', title: 'Add unique constraints (email, phone, referral code)', completed: false, aiPrompt: 'Help me add database constraints in TypeORM for my NestJS cryptocurrency exchange. Show me how to add unique, check, and foreign key constraints using decorators, and explain how constraints ensure data integrity in a production exchange environment.' },
      { id: 'db-constraints-check', title: 'Add check constraints (positive amounts, valid statuses)', completed: false, aiPrompt: 'Help me add database constraints in TypeORM for my NestJS cryptocurrency exchange. Show me how to add unique, check, and foreign key constraints using decorators, and explain how constraints ensure data integrity in a production exchange environment.' },
      { id: 'db-constraints-foreign', title: 'Add foreign key constraints with CASCADE rules', completed: false, aiPrompt: 'Help me add database constraints in TypeORM for my NestJS cryptocurrency exchange. Show me how to add unique, check, and foreign key constraints using decorators, and explain how constraints ensure data integrity in a production exchange environment.' },
      { id: 'db-migrations-generate', title: 'Generate initial migration: npm run typeorm migration:generate', completed: false, aiPrompt: 'Help me generate TypeORM migrations for my NestJS cryptocurrency exchange. Show me how to use \'npm run typeorm migration:generate\' to create migration files from entity changes, and explain best practices for migration naming and structure.' },
      { id: 'db-migrations-run', title: 'Run migrations: npm run typeorm migration:run', completed: false, aiPrompt: 'Help me run TypeORM migrations for my NestJS cryptocurrency exchange. Show me how to use \'npm run typeorm migration:run\' to apply migrations to the database, and explain how to handle migration failures and rollbacks in production.' },
      { id: 'db-migrations-test', title: 'Test migration rollback: npm run typeorm migration:revert', completed: false, aiPrompt: 'Help me work with TypeORM migrations for my NestJS cryptocurrency exchange. Show me how to generate, run, and test migrations, including rollback procedures, and explain best practices for database schema versioning in a production exchange environment.' },
      { id: 'db-seeding-roles', title: 'Create seed script for roles (SUPER_ADMIN, ADMIN, USER)', completed: false, aiPrompt: 'Help me create a seed script for roles in my NestJS cryptocurrency exchange. I need to seed initial roles like SUPER_ADMIN, ADMIN, and USER with their descriptions. Show me how to use TypeORM seeding to populate this data and explain the role hierarchy in the exchange.' },
      { id: 'db-seeding-privileges', title: 'Create seed script for all system privileges', completed: false, aiPrompt: 'Help me create a seed script for system privileges in my NestJS cryptocurrency exchange. I need to seed all privileges that control access to exchange features (order:create, wallet:withdraw, etc.). Show me how to structure the seed data and explain how privileges map to exchange operations.' },
      { id: 'db-seeding-countries', title: 'Create seed script for country data', completed: false, aiPrompt: 'Help me create seed data scripts for my NestJS cryptocurrency exchange. Show me how to use TypeORM seeding to populate initial data and explain how to structure seed files for maintainability.' },
      { id: 'db-seeding-coins', title: 'Create seed script for initial coins (BTC, ETH, TRON, etc.)', completed: false, aiPrompt: 'Help me create a seed script for initial coins in my NestJS cryptocurrency exchange. I need to seed coins like BTC, ETH, TRON, XRP, XLM, BSC, Dash, and Stellar with their network information, decimals, and contract addresses. Show me how to structure the seed data.' },
      { id: 'db-seeding-markets', title: 'Create seed script for trading markets', completed: false, aiPrompt: 'Help me create a seed script for trading markets in my NestJS cryptocurrency exchange. I need to seed initial trading pairs (e.g., BTC/USDT, ETH/USDT) with their configuration (min/max order amounts, fee rates, precision). Show me how to structure the seed data.' },
      // Auth Module
      { id: 'auth-module', title: 'Create auth module: nest g module auth', completed: false, aiPrompt: 'Help me implement \'Create auth module: nest g module auth\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'auth-service', title: 'Create auth service: nest g service auth', completed: false, aiPrompt: 'Help me implement \'Create auth service: nest g service auth\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'auth-jwt-strategy', title: 'Create JWT strategy with Passport', completed: false, aiPrompt: 'Help me create a JWT strategy with Passport for my NestJS cryptocurrency exchange. Show me how to implement JwtStrategy that validates tokens, extracts user information, and integrates with the authentication system. Explain how Passport strategies work in NestJS.' },
      { id: 'auth-jwt-generate', title: 'Implement JWT token generation with payload (userId, email, roles)', completed: false, aiPrompt: 'Help me implement JWT token generation in my NestJS cryptocurrency exchange. I need to generate tokens with payload containing userId, email, and roles. Show me how to use @nestjs/jwt to sign tokens, set expiration times, and include necessary claims for the exchange.' },
      { id: 'auth-jwt-validate', title: 'Implement JWT token validation in strategy', completed: false, aiPrompt: 'Help me implement JWT token validation in my NestJS cryptocurrency exchange. Show me how to validate tokens in the JWT strategy, extract user information, and handle invalid or expired tokens. Explain security considerations for token validation.' },
      { id: 'auth-jwt-refresh', title: 'Implement JWT refresh token mechanism', completed: false, aiPrompt: 'Help me implement JWT refresh token mechanism in my NestJS cryptocurrency exchange. Show me how to generate refresh tokens, store them securely, validate refresh requests, and issue new access tokens. Explain the security benefits of refresh tokens.' },
      { id: 'auth-guards-jwt', title: 'Create JwtAuthGuard for protecting routes', completed: false, aiPrompt: 'Help me create a JwtAuthGuard for my NestJS cryptocurrency exchange. Show me how to extend AuthGuard(\'jwt\') to protect routes, handle authentication failures, and integrate with the JWT strategy. Explain how guards work in NestJS request lifecycle.' },
      { id: 'auth-guards-optional', title: 'Create OptionalJwtAuthGuard for optional authentication', completed: false, aiPrompt: 'Help me create an OptionalJwtAuthGuard for my NestJS cryptocurrency exchange. This guard should allow optional authentication - if a token is present, validate it, but don\'t fail if no token is provided. Show me how to implement this for public endpoints that can optionally use authentication.' },
      { id: 'auth-rbac-decorator-roles', title: 'Create @Roles() decorator for role-based access', completed: false, aiPrompt: 'Help me create a @Roles() decorator for my NestJS cryptocurrency exchange. This decorator should accept an array of role names and be used to specify which roles can access a route. Show me how to create custom parameter decorators in NestJS and how to use them with guards.' },
      { id: 'auth-rbac-decorator-privileges', title: 'Create @Privileges() decorator for privilege-based access', completed: false, aiPrompt: 'Help me create a @Privileges() decorator for my NestJS cryptocurrency exchange. This decorator should accept an array of privilege names and be used to specify which privileges are required to access a route. Show me how to create custom parameter decorators in NestJS.' },
      { id: 'auth-rbac-guard', title: 'Create RolesGuard and PrivilegesGuard implementation', completed: false, aiPrompt: 'Help me create RolesGuard and PrivilegesGuard for my NestJS cryptocurrency exchange. These guards should check if the authenticated user has the required roles or privileges. Show me how to implement the guards, extract decorator metadata, and handle authorization failures.' },
      { id: 'auth-2fa-module', title: 'Create 2FA module with TOTP support', completed: false, aiPrompt: 'Help me create a 2FA module with TOTP support for my NestJS cryptocurrency exchange. Show me how to structure the module, install necessary packages (like speakeasy or otplib), and set up the module in the application.' },
      { id: 'auth-2fa-generate', title: 'Implement 2FA secret generation (Google Authenticator compatible)', completed: false, aiPrompt: 'Help me implement 2FA secret generation for my NestJS cryptocurrency exchange. I need to generate TOTP secrets that are compatible with Google Authenticator. Show me how to generate secrets, create QR codes for users, and store secrets securely in the database.' },
      { id: 'auth-2fa-verify', title: 'Implement 2FA code verification', completed: false, aiPrompt: 'Help me implement 2FA code verification for my NestJS cryptocurrency exchange. Show me how to verify TOTP codes entered by users against their stored secret, handle time windows, and provide appropriate error messages for invalid codes.' },
      { id: 'auth-2fa-enable', title: 'Implement 2FA enable/disable functionality', completed: false, aiPrompt: 'Help me implement 2FA enable/disable functionality for my NestJS cryptocurrency exchange. Show me how to allow users to enable 2FA after verifying a code, disable 2FA with password confirmation, and update the user\'s 2FA status in the database.' },
      { id: 'auth-otp-generate', title: 'Implement OTP generation (6-digit numeric code)', completed: false, aiPrompt: 'Help me implement OTP generation for my NestJS cryptocurrency exchange. I need to generate 6-digit numeric codes for email/SMS verification. Show me how to generate secure random codes and explain best practices for OTP generation.' },
      { id: 'auth-otp-verify', title: 'Implement OTP verification with expiration (5 minutes)', completed: false, aiPrompt: 'Help me implement OTP verification for my NestJS cryptocurrency exchange. I need to verify codes with a 5-minute expiration window. Show me how to check codes against stored values, validate expiration, and handle verification attempts securely.' },
      { id: 'auth-otp-storage', title: 'Store OTP codes in database with expiration timestamp', completed: false, aiPrompt: 'Help me store OTP codes in the database for my NestJS cryptocurrency exchange. I need to store codes with expiration timestamps. Show me how to create an OTP entity, store hashed codes, and implement cleanup for expired codes.' },
      { id: 'auth-password-hash', title: 'Implement password hashing with bcrypt (10 rounds)', completed: false, aiPrompt: 'Help me implement password hashing with bcrypt for my NestJS cryptocurrency exchange. I need to hash passwords with 10 rounds before storing them. Show me how to use bcrypt in NestJS, configure salt rounds, and explain why bcrypt is suitable for password hashing.' },
      { id: 'auth-password-compare', title: 'Implement password comparison for login', completed: false, aiPrompt: 'Help me implement password comparison for login in my NestJS cryptocurrency exchange. Show me how to compare a plain text password with a hashed password using bcrypt, and explain how to handle comparison failures securely.' },
      { id: 'auth-password-reset', title: 'Implement password reset flow with token', completed: false, aiPrompt: 'Help me implement password reset flow for my NestJS cryptocurrency exchange. I need to generate secure reset tokens, send reset emails, validate tokens, and allow users to set new passwords. Show me the complete flow and security considerations.' },
      { id: 'auth-session-entity', title: 'Create Session entity for tracking active sessions', completed: false, aiPrompt: 'Help me create a Session entity for tracking active sessions in my NestJS cryptocurrency exchange. I need fields for id, userId, token, deviceInfo, ipAddress, createdAt, expiresAt. Show me the entity structure and explain how sessions will be used for security.' },
      { id: 'auth-session-track', title: 'Track user sessions on login', completed: false, aiPrompt: 'Help me track user sessions on login in my NestJS cryptocurrency exchange. Show me how to create session records when users log in, store device information, and link sessions to JWT tokens for logout functionality.' },
      { id: 'auth-session-cleanup', title: 'Implement session cleanup on logout', completed: false, aiPrompt: 'Help me implement session cleanup on logout in my NestJS cryptocurrency exchange. Show me how to invalidate sessions, remove session records from the database, and handle cleanup of expired sessions.' },
      { id: 'auth-logout', title: 'Implement logout endpoint with token invalidation', completed: false, aiPrompt: 'Help me implement logout endpoint with token invalidation in my NestJS cryptocurrency exchange. Show me how to invalidate JWT tokens, clean up sessions, and handle logout requests securely.' },
      { id: 'auth-logout-all', title: 'Implement logout from all devices functionality', completed: false, aiPrompt: 'Help me implement logout from all devices functionality in my NestJS cryptocurrency exchange. Show me how to invalidate all sessions for a user, handle token blacklisting, and provide a secure way for users to log out from all their devices.' }
    ],
    notes: [],
    dependencies: ['Level1_ProjectSetup'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 3: Core Services - Customer & Identity
  Level3_CustomerIdentity: {
    id: 'Level3_CustomerIdentity',
    title: '🎮 Level 3: Customer & Identity Management',
    description: 'Build CustomerService and CustomerController with complete user registration, authentication, KYC orchestration, profile management, 2FA, OTP, Google SSO, and all customer-related endpoints. This is the core identity management system for the exchange.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Services',
    estimatedHours: 72,
    actualHours: 0,
    subtasks: [
      // CustomerService - Entity & Repository
      { id: 'customer-entity', title: 'Create Customer entity with all fields (id, email, phone, password, firstName, lastName, nationalId, status, accountLevel, etc.)', completed: false, aiPrompt: 'Help me implement \'Create Customer entity with all fields (id, email, phone, password, firstName, lastName, nationalId, status, accountLevel, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-repository', title: 'Create CustomerRepository with custom query methods', completed: false, aiPrompt: 'Help me implement \'Create CustomerRepository with custom query methods\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-dto-register', title: 'Create RegisterDto with validation (email, phone, password, firstName, lastName)', completed: false, aiPrompt: 'Help me implement \'Create RegisterDto with validation (email, phone, password, firstName, lastName)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-dto-login', title: 'Create LoginDto (email/phone, password)', completed: false, aiPrompt: 'Help me implement \'Create LoginDto (email/phone, password)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-dto-profile', title: 'Create UpdateProfileDto and ProfileResponseDto', completed: false, aiPrompt: 'Help me implement \'Create UpdateProfileDto and ProfileResponseDto\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - Registration
      { id: 'customer-register-validation', title: 'User registration validation (email uniqueness, phone format, password strength)', completed: false, aiPrompt: 'Help me implement \'User registration validation (email uniqueness, phone format, password strength)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-register-hash', title: 'Hash password with bcrypt before saving', completed: false, aiPrompt: 'Help me implement \'Hash password with bcrypt before saving\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-register-email-verify', title: 'Send email verification code on registration', completed: false, aiPrompt: 'Help me implement \'Send email verification code on registration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-register-sms-verify', title: 'Send SMS verification code on registration', completed: false, aiPrompt: 'Help me implement \'Send SMS verification code on registration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-register-status', title: 'Set initial account status (PENDING_VERIFICATION)', completed: false, aiPrompt: 'Help me implement \'Set initial account status (PENDING_VERIFICATION)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-register-level', title: 'Set initial account level (USER)', completed: false, aiPrompt: 'Help me implement \'Set initial account level (USER)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - Authentication
      { id: 'customer-auth-find', title: 'Find user by email or phone for login', completed: false, aiPrompt: 'Help me implement \'Find user by email or phone for login\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-auth-validate', title: 'Validate password on login', completed: false, aiPrompt: 'Help me implement \'Validate password on login\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-auth-status-check', title: 'Check account status before allowing login', completed: false, aiPrompt: 'Help me implement \'Check account status before allowing login\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-auth-token', title: 'Generate JWT token with user payload', completed: false, aiPrompt: 'Help me implement \'Generate JWT token with user payload\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-auth-refresh', title: 'Implement refresh token generation and validation', completed: false, aiPrompt: 'Help me implement \'Implement refresh token generation and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - Password Management
      { id: 'customer-password-reset-request', title: 'Password reset request (send reset token via email/SMS)', completed: false, aiPrompt: 'Help me implement \'Password reset request (send reset token via email/SMS)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-password-reset-validate', title: 'Validate reset token and expiration', completed: false, aiPrompt: 'Help me implement \'Validate reset token and expiration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-password-reset-update', title: 'Update password with new hashed password', completed: false, aiPrompt: 'Help me implement \'Update password with new hashed password\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-password-change', title: 'Password change (requires current password)', completed: false, aiPrompt: 'Help me implement \'Password change (requires current password)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - KYC
      { id: 'customer-kyc-submit', title: 'KYC submission logic with document upload', completed: false, aiPrompt: 'Help me implement \'KYC submission logic with document upload\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-kyc-validate', title: 'Validate KYC documents (format, size, type)', completed: false, aiPrompt: 'Help me implement \'Validate KYC documents (format, size, type)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-kyc-finnotech', title: 'Integrate with FinoTech API for National ID validation', completed: false, aiPrompt: 'Help me implement \'Integrate with FinoTech API for National ID validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-kyc-jibit', title: 'Integrate with Jibit API for IBAN matching and identity verification', completed: false, aiPrompt: 'Help me implement \'Integrate with Jibit API for IBAN matching and identity verification\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-kyc-status', title: 'Update KYC status based on provider responses', completed: false, aiPrompt: 'Help me implement \'Update KYC status based on provider responses\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-kyc-admin-review', title: 'Admin review workflow for KYC submissions', completed: false, aiPrompt: 'Help me implement \'Admin review workflow for KYC submissions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - 2FA
      { id: 'customer-2fa-generate-secret', title: 'Generate 2FA secret for user', completed: false, aiPrompt: 'Help me implement \'Generate 2FA secret for user\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-2fa-enable', title: 'Enable 2FA after verification', completed: false, aiPrompt: 'Help me implement \'Enable 2FA after verification\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-2fa-disable', title: 'Disable 2FA with password confirmation', completed: false, aiPrompt: 'Help me implement \'Disable 2FA with password confirmation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-2fa-verify-login', title: 'Verify 2FA code during login', completed: false, aiPrompt: 'Help me implement \'Verify 2FA code during login\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - Profile & Status
      { id: 'customer-profile-get', title: 'Get user profile with all details', completed: false, aiPrompt: 'Help me implement \'Get user profile with all details\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-profile-update', title: 'Update user profile (firstName, lastName, avatar, etc.)', completed: false, aiPrompt: 'Help me implement \'Update user profile (firstName, lastName, avatar, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-status-suspend', title: 'Suspend user account (admin only)', completed: false, aiPrompt: 'Help me implement \'Suspend user account (admin only)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-status-activate', title: 'Activate user account', completed: false, aiPrompt: 'Help me implement \'Activate user account\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-status-deactivate', title: 'Deactivate user account', completed: false, aiPrompt: 'Help me implement \'Deactivate user account\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - OTP
      { id: 'customer-otp-generate', title: 'Generate OTP code (6 digits, 5 min expiration)', completed: false, aiPrompt: 'Help me implement \'Generate OTP code (6 digits, 5 min expiration)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-otp-send-sms', title: 'Send OTP via SMS using SMSService', completed: false, aiPrompt: 'Help me implement \'Send OTP via SMS using SMSService\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-otp-send-email', title: 'Send OTP via email using EmailService', completed: false, aiPrompt: 'Help me implement \'Send OTP via email using EmailService\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-otp-verify', title: 'Verify OTP code and mark as used', completed: false, aiPrompt: 'Help me implement \'Verify OTP code and mark as used\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerService - Email & Notifications
      { id: 'customer-email-verify', title: 'Email verification logic', completed: false, aiPrompt: 'Help me implement \'Email verification logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-email-resend', title: 'Resend email verification code', completed: false, aiPrompt: 'Help me implement \'Resend email verification code\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-notification-create', title: 'Create notification for user actions', completed: false, aiPrompt: 'Help me implement \'Create notification for user actions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerController
      { id: 'cust-module', title: 'Create customer module: nest g module customers', completed: false, aiPrompt: 'Help me implement \'Create customer module: nest g module customers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-service', title: 'Create customer service: nest g service customers', completed: false, aiPrompt: 'Help me implement \'Create customer service: nest g service customers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-controller', title: 'Create customer controller: nest g controller customers', completed: false, aiPrompt: 'Help me implement \'Create customer controller: nest g controller customers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-register-endpoint', title: 'POST /api/customers/register - User registration endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/register - User registration endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-login-endpoint', title: 'POST /api/customers/login - Login endpoint with JWT', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/login - Login endpoint with JWT\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-refresh-endpoint', title: 'POST /api/customers/refresh - Refresh token endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/refresh - Refresh token endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-otp-request-endpoint', title: 'POST /api/customers/otp/request - Request OTP endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/otp/request - Request OTP endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-otp-verify-endpoint', title: 'POST /api/customers/otp/verify - Verify OTP endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/otp/verify - Verify OTP endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-google-sso-endpoint', title: 'POST /api/customers/google-sso - Google SSO login endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/google-sso - Google SSO login endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-kyc-submit-endpoint', title: 'POST /api/customers/kyc/submit - KYC document submission endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/kyc/submit - KYC document submission endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-kyc-status-endpoint', title: 'GET /api/customers/kyc/status - Get KYC status endpoint', completed: false, aiPrompt: 'Help me implement \'GET /api/customers/kyc/status - Get KYC status endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-2fa-generate-endpoint', title: 'POST /api/customers/2fa/generate - Generate 2FA secret endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/2fa/generate - Generate 2FA secret endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-2fa-enable-endpoint', title: 'POST /api/customers/2fa/enable - Enable 2FA endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/2fa/enable - Enable 2FA endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-2fa-verify-endpoint', title: 'POST /api/customers/2fa/verify - Verify 2FA code endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/2fa/verify - Verify 2FA code endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-profile-get-endpoint', title: 'GET /api/customers/profile - Get user profile endpoint', completed: false, aiPrompt: 'Help me implement \'GET /api/customers/profile - Get user profile endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-profile-update-endpoint', title: 'PUT /api/customers/profile - Update profile endpoint', completed: false, aiPrompt: 'Help me implement \'PUT /api/customers/profile - Update profile endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-password-reset-request-endpoint', title: 'POST /api/customers/password/reset-request - Password reset request endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/password/reset-request - Password reset request endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-password-reset-endpoint', title: 'POST /api/customers/password/reset - Password reset endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/password/reset - Password reset endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-password-change-endpoint', title: 'POST /api/customers/password/change - Change password endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/password/change - Change password endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-email-verify-endpoint', title: 'POST /api/customers/email/verify - Email verification endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/email/verify - Email verification endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-email-resend-endpoint', title: 'POST /api/customers/email/resend - Resend verification email endpoint', completed: false, aiPrompt: 'Help me implement \'POST /api/customers/email/resend - Resend verification email endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-dto-validation', title: 'Add validation pipes to all endpoints', completed: false, aiPrompt: 'Help me implement \'Add validation pipes to all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-guards', title: 'Add JwtAuthGuard to protected endpoints', completed: false, aiPrompt: 'Help me implement \'Add JwtAuthGuard to protected endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-swagger', title: 'Add Swagger decorators to all endpoints', completed: false, aiPrompt: 'Help me implement \'Add Swagger decorators to all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 4: Notification Services
  Level4_Notifications: {
    id: 'Level4_Notifications',
    title: '🎮 Level 4: Notification Services',
    description: 'Build EmailService, SMSService, and NotificationService for user communications, OTP delivery, alerts, and in-app notifications.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 24,
    actualHours: 0,
    subtasks: [
      { id: 'email-service', title: 'EmailService - SMTP integration and email templates', completed: false, aiPrompt: 'Help me implement \'EmailService - SMTP integration and email templates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'email-templates', title: 'Email templates (welcome, OTP, password reset, etc.)', completed: false, aiPrompt: 'Help me implement \'Email templates (welcome, OTP, password reset, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'sms-service', title: 'SMSService - SMS provider integration', completed: false, aiPrompt: 'Help me implement \'SMSService - SMS provider integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'sms-otp', title: 'SMS OTP delivery functionality', completed: false, aiPrompt: 'Help me implement \'SMS OTP delivery functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-service', title: 'NotificationService - in-app notification management', completed: false, aiPrompt: 'Help me implement \'NotificationService - in-app notification management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-entity', title: 'Notification entity and repository', completed: false, aiPrompt: 'Help me implement \'Notification entity and repository\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-create', title: 'Create notification logic', completed: false, aiPrompt: 'Help me implement \'Create notification logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-read', title: 'Mark as read functionality', completed: false, aiPrompt: 'Help me implement \'Mark as read functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-push', title: 'Push notification support (optional)', completed: false, aiPrompt: 'Help me implement \'Push notification support (optional)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'notification-tests', title: 'Write tests for notification services', completed: false, aiPrompt: 'Help me implement \'Write tests for notification services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 5: Wallet Services
  Level5_WalletServices: {
    id: 'Level5_WalletServices',
    title: '🎮 Level 5: Wallet Services',
    description: 'Build WalletService, CustomerWalletService, DepositService, and WithdrawalService for HD wallet management, balance operations, deposits, and withdrawals.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Services',
    estimatedHours: 64,
    actualHours: 0,
    subtasks: [
      // WalletService
      { id: 'wallet-entity', title: 'Create HD wallet and address entities', completed: false, aiPrompt: 'Help me implement \'Create HD wallet and address entities\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-hd-create', title: 'HD wallet creation with BIP32/BIP44', completed: false, aiPrompt: 'Help me implement \'HD wallet creation with BIP32/BIP44\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-mnemonic', title: 'Mnemonic phrase generation and storage', completed: false, aiPrompt: 'Help me implement \'Mnemonic phrase generation and storage\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-address-gen', title: 'Multi-chain address generation (ETH, TRON, BTC, etc.)', completed: false, aiPrompt: 'Help me implement \'Multi-chain address generation (ETH, TRON, BTC, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-tx-create', title: 'Transaction creation and signing', completed: false, aiPrompt: 'Help me implement \'Transaction creation and signing\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-tx-broadcast', title: 'Transaction broadcasting to blockchain', completed: false, aiPrompt: 'Help me implement \'Transaction broadcasting to blockchain\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-withdrawal', title: 'Withdrawal request processing and validation', completed: false, aiPrompt: 'Help me implement \'Withdrawal request processing and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-balance', title: 'Balance queries (on-chain and custodial)', completed: false, aiPrompt: 'Help me implement \'Balance queries (on-chain and custodial)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-security', title: 'Password encryption and key management', completed: false, aiPrompt: 'Help me implement \'Password encryption and key management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-sweep', title: 'Wallet sweep functionality for hot wallets', completed: false, aiPrompt: 'Help me implement \'Wallet sweep functionality for hot wallets\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-multichain', title: 'Multi-chain support implementation', completed: false, aiPrompt: 'Help me implement \'Multi-chain support implementation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CustomerWalletService
      { id: 'cust-wallet-entity', title: 'CustomerWallet entity and repository', completed: false, aiPrompt: 'Help me implement \'CustomerWallet entity and repository\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-wallet-balance', title: 'Get balance logic for all coins', completed: false, aiPrompt: 'Help me implement \'Get balance logic for all coins\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-wallet-update', title: 'Update balance logic (credit/debit)', completed: false, aiPrompt: 'Help me implement \'Update balance logic (credit/debit)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-wallet-lock', title: 'Lock/unlock funds for orders', completed: false, aiPrompt: 'Help me implement \'Lock/unlock funds for orders\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cust-wallet-transfer', title: 'Internal transfer logic', completed: false, aiPrompt: 'Help me implement \'Internal transfer logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // DepositService
      { id: 'deposit-entity', title: 'DepositRequest entity', completed: false, aiPrompt: 'Help me implement \'DepositRequest entity\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deposit-track', title: 'Track deposit logic', completed: false, aiPrompt: 'Help me implement \'Track deposit logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deposit-confirm', title: 'Confirm deposit and credit balance', completed: false, aiPrompt: 'Help me implement \'Confirm deposit and credit balance\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deposit-webhook', title: 'Deposit webhook handling', completed: false, aiPrompt: 'Help me implement \'Deposit webhook handling\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // WithdrawalService
      { id: 'withdraw-entity', title: 'WithdrawalRequest entity', completed: false, aiPrompt: 'Help me implement \'WithdrawalRequest entity\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'withdraw-create', title: 'Create withdrawal request logic', completed: false, aiPrompt: 'Help me implement \'Create withdrawal request logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'withdraw-approve', title: 'Approve withdrawal logic', completed: false, aiPrompt: 'Help me implement \'Approve withdrawal logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'withdraw-reject', title: 'Reject withdrawal logic', completed: false, aiPrompt: 'Help me implement \'Reject withdrawal logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'withdraw-process', title: 'Process withdrawal (create blockchain tx)', completed: false, aiPrompt: 'Help me implement \'Process withdrawal (create blockchain tx)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth', 'Level6_Blockchain'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 6: Blockchain Integration
  Level6_Blockchain: {
    id: 'Level6_Blockchain',
    title: '🎮 Level 6: Blockchain Integration',
    description: 'Build ApieService for multi-chain blockchain integration supporting ETH, TRON, XRP, XLM, BTC, BSC, Dash, and Stellar networks.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Services',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'apie-http-client', title: 'HTTP client setup with retry logic', completed: false, aiPrompt: 'Help me implement \'HTTP client setup with retry logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-config', title: 'Multi-chain configuration management', completed: false, aiPrompt: 'Help me implement \'Multi-chain configuration management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-wallet', title: 'Wallet operations (create, import, export)', completed: false, aiPrompt: 'Help me implement \'Wallet operations (create, import, export)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-tx', title: 'Transaction operations (create, sign, broadcast)', completed: false, aiPrompt: 'Help me implement \'Transaction operations (create, sign, broadcast)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-balance', title: 'Balance queries for all supported chains', completed: false, aiPrompt: 'Help me implement \'Balance queries for all supported chains\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-tx-status', title: 'Transaction status tracking', completed: false, aiPrompt: 'Help me implement \'Transaction status tracking\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-eth', title: 'Ethereum (ETH) chain integration', completed: false, aiPrompt: 'Help me implement \'Ethereum (ETH) chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-tron', title: 'TRON (TRX) chain integration', completed: false, aiPrompt: 'Help me implement \'TRON (TRX) chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-btc', title: 'Bitcoin (BTC) chain integration', completed: false, aiPrompt: 'Help me implement \'Bitcoin (BTC) chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-bsc', title: 'Binance Smart Chain (BSC) integration', completed: false, aiPrompt: 'Help me implement \'Binance Smart Chain (BSC) integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-xrp', title: 'XRP chain integration', completed: false, aiPrompt: 'Help me implement \'XRP chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-xlm', title: 'Stellar (XLM) chain integration', completed: false, aiPrompt: 'Help me implement \'Stellar (XLM) chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-dash', title: 'Dash chain integration', completed: false, aiPrompt: 'Help me implement \'Dash chain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-webhook', title: 'Webhook handling for blockchain events', completed: false, aiPrompt: 'Help me implement \'Webhook handling for blockchain events\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'apie-error', title: 'Error handling and retry mechanisms', completed: false, aiPrompt: 'Help me implement \'Error handling and retry mechanisms\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 7: Trading Engine
  Level7_TradingEngine: {
    id: 'Level7_TradingEngine',
    title: '🎮 Level 7: Trading Engine',
    description: 'Build OrderService and TradeService - the core trading engine with order matching, trade execution, order book management, and trade history.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Services',
    estimatedHours: 68,
    actualHours: 0,
    subtasks: [
      // OrderService
      { id: 'order-entity', title: 'Create Order entity with all fields', completed: false, aiPrompt: 'Help me implement \'Create Order entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-create-logic', title: 'Order creation and validation logic', completed: false, aiPrompt: 'Help me implement \'Order creation and validation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-matching', title: 'In-memory order matching engine (price-time priority)', completed: false, aiPrompt: 'Help me implement \'In-memory order matching engine (price-time priority)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-book', title: 'Order book data structure (bids/asks)', completed: false, aiPrompt: 'Help me implement \'Order book data structure (bids/asks)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-validation', title: 'Price, amount, and balance validation', completed: false, aiPrompt: 'Help me implement \'Price, amount, and balance validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-balance', title: 'Balance locking/unlocking mechanism', completed: false, aiPrompt: 'Help me implement \'Balance locking/unlocking mechanism\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-queue', title: 'Order queue management (pending orders)', completed: false, aiPrompt: 'Help me implement \'Order queue management (pending orders)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-stop-limit', title: 'Stop-limit order trigger logic', completed: false, aiPrompt: 'Help me implement \'Stop-limit order trigger logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-expiration', title: 'Order expiration and cleanup logic', completed: false, aiPrompt: 'Help me implement \'Order expiration and cleanup logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-persistence', title: 'Order persistence to database', completed: false, aiPrompt: 'Help me implement \'Order persistence to database\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-scheduled', title: 'Scheduled tasks (expiration, cleanup, triggers)', completed: false, aiPrompt: 'Help me implement \'Scheduled tasks (expiration, cleanup, triggers)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-trade-coord', title: 'Trade execution coordination', completed: false, aiPrompt: 'Help me implement \'Trade execution coordination\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // TradeService
      { id: 'trade-entity', title: 'Create Trade entity with all fields', completed: false, aiPrompt: 'Help me implement \'Create Trade entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-execute', title: 'Trade execution logic and coordination', completed: false, aiPrompt: 'Help me implement \'Trade execution logic and coordination\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-settlement', title: 'Trade settlement and balance updates', completed: false, aiPrompt: 'Help me implement \'Trade settlement and balance updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-history', title: 'Trade history queries with filtering', completed: false, aiPrompt: 'Help me implement \'Trade history queries with filtering\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-pagination', title: 'Pagination and sorting for trade history', completed: false, aiPrompt: 'Help me implement \'Pagination and sorting for trade history\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-stats', title: 'Trade statistics calculation (volume, P/L, win rate)', completed: false, aiPrompt: 'Help me implement \'Trade statistics calculation (volume, P/L, win rate)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-aggregation', title: 'Trade data aggregation (daily, weekly, monthly)', completed: false, aiPrompt: 'Help me implement \'Trade data aggregation (daily, weekly, monthly)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-export', title: 'Trade history export functionality', completed: false, aiPrompt: 'Help me implement \'Trade history export functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-notification', title: 'Trade execution notifications', completed: false, aiPrompt: 'Help me implement \'Trade execution notifications\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level5_WalletServices', 'Level8_MarketManagement'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 8: Market & Coin Management
  Level8_MarketManagement: {
    id: 'Level8_MarketManagement',
    title: '🎮 Level 8: Market & Coin Management',
    description: 'Build MarketService, CoinService, MarketController, and CoinController for trading pair management, coin management, and price updates.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 36,
    actualHours: 0,
    subtasks: [
      // MarketService
      { id: 'market-entity', title: 'Create Market entity with all fields', completed: false, aiPrompt: 'Help me implement \'Create Market entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-crud', title: 'Market CRUD operations', completed: false, aiPrompt: 'Help me implement \'Market CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-activation', title: 'Market activation/deactivation logic', completed: false, aiPrompt: 'Help me implement \'Market activation/deactivation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-stats', title: 'Market statistics calculation (24h volume, price change)', completed: false, aiPrompt: 'Help me implement \'Market statistics calculation (24h volume, price change)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-price', title: 'Price update and management logic', completed: false, aiPrompt: 'Help me implement \'Price update and management logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-pair', title: 'Trading pair configuration and validation', completed: false, aiPrompt: 'Help me implement \'Trading pair configuration and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-status', title: 'Market status management', completed: false, aiPrompt: 'Help me implement \'Market status management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-scheduled', title: 'Scheduled tasks for price updates', completed: false, aiPrompt: 'Help me implement \'Scheduled tasks for price updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'market-cache', title: 'Market data caching for performance', completed: false, aiPrompt: 'Help me implement \'Market data caching for performance\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // CoinService
      { id: 'coin-entity', title: 'Create Coin and Network entities', completed: false, aiPrompt: 'Help me implement \'Create Coin and Network entities\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-crud', title: 'Coin CRUD operations', completed: false, aiPrompt: 'Help me implement \'Coin CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-pricing', title: 'Price management and updates from external APIs', completed: false, aiPrompt: 'Help me implement \'Price management and updates from external APIs\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-price-scheduled', title: 'Scheduled tasks for price updates', completed: false, aiPrompt: 'Help me implement \'Scheduled tasks for price updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-networks', title: 'Network and blockchain integration', completed: false, aiPrompt: 'Help me implement \'Network and blockchain integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-activation', title: 'Coin activation/deactivation logic', completed: false, aiPrompt: 'Help me implement \'Coin activation/deactivation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-config', title: 'Coin configuration management', completed: false, aiPrompt: 'Help me implement \'Coin configuration management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-validation', title: 'Coin data validation', completed: false, aiPrompt: 'Help me implement \'Coin data validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-cache', title: 'Coin price caching', completed: false, aiPrompt: 'Help me implement \'Coin price caching\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // Controllers
      { id: 'market-controller', title: 'MarketController with all endpoints', completed: false, aiPrompt: 'Help me implement \'MarketController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'coin-controller', title: 'CoinController with all endpoints', completed: false, aiPrompt: 'Help me implement \'CoinController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 9: Trading Controllers
  Level9_TradingControllers: {
    id: 'Level9_TradingControllers',
    title: '🎮 Level 9: Trading Controllers',
    description: 'Build OrderController and TradeController with all trading endpoints, order book API, trade history, and real-time updates.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Controllers',
    estimatedHours: 36,
    actualHours: 0,
    subtasks: [
      // OrderController
      { id: 'order-module', title: 'Create order module structure', completed: false, aiPrompt: 'Help me implement \'Create order module structure\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-create-buy', title: 'Create buy order endpoint (market & limit)', completed: false, aiPrompt: 'Help me implement \'Create buy order endpoint (market & limit)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-create-sell', title: 'Create sell order endpoint (market & limit)', completed: false, aiPrompt: 'Help me implement \'Create sell order endpoint (market & limit)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-stop-limit', title: 'Stop-limit order endpoints', completed: false, aiPrompt: 'Help me implement \'Stop-limit order endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-cancel', title: 'Cancel order endpoint with validation', completed: false, aiPrompt: 'Help me implement \'Cancel order endpoint with validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-book', title: 'Get order book endpoint (bids/asks)', completed: false, aiPrompt: 'Help me implement \'Get order book endpoint (bids/asks)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-history', title: 'Get user order history endpoint', completed: false, aiPrompt: 'Help me implement \'Get user order history endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-status', title: 'Get order status endpoint', completed: false, aiPrompt: 'Help me implement \'Get order status endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-validation', title: 'DTO validation pipes and guards', completed: false, aiPrompt: 'Help me implement \'DTO validation pipes and guards\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-websocket', title: 'WebSocket for real-time order updates', completed: false, aiPrompt: 'Help me implement \'WebSocket for real-time order updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'order-dto', title: 'Create comprehensive DTOs', completed: false, aiPrompt: 'Help me implement \'Create comprehensive DTOs\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // TradeController
      { id: 'trade-module', title: 'Create trade module structure', completed: false, aiPrompt: 'Help me implement \'Create trade module structure\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-history', title: 'Get user trade history endpoint with pagination', completed: false, aiPrompt: 'Help me implement \'Get user trade history endpoint with pagination\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-market', title: 'Market trade history endpoint (public)', completed: false, aiPrompt: 'Help me implement \'Market trade history endpoint (public)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-details', title: 'Get trade details endpoint', completed: false, aiPrompt: 'Help me implement \'Get trade details endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-stats', title: 'Get trade statistics endpoint (user)', completed: false, aiPrompt: 'Help me implement \'Get trade statistics endpoint (user)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-admin', title: 'Admin trade list endpoint with filters', completed: false, aiPrompt: 'Help me implement \'Admin trade list endpoint with filters\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-export', title: 'Export trade history to Excel endpoint', completed: false, aiPrompt: 'Help me implement \'Export trade history to Excel endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-websocket', title: 'WebSocket for real-time trade updates', completed: false, aiPrompt: 'Help me implement \'WebSocket for real-time trade updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'trade-dto', title: 'Create DTOs for trade operations', completed: false, aiPrompt: 'Help me implement \'Create DTOs for trade operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level7_TradingEngine'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 10: Wallet Controller
  Level10_WalletController: {
    id: 'Level10_WalletController',
    title: '🎮 Level 10: Wallet Controller',
    description: 'Build WalletController with HD wallet creation, address generation, withdrawal requests, balance queries, and transaction history endpoints.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Controllers',
    estimatedHours: 16,
    actualHours: 0,
    subtasks: [
      { id: 'wallet-module', title: 'Create wallet module structure', completed: false, aiPrompt: 'Help me implement \'Create wallet module structure\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-create', title: 'Create HD wallet endpoint with mnemonic generation', completed: false, aiPrompt: 'Help me implement \'Create HD wallet endpoint with mnemonic generation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-address', title: 'Generate address endpoint (multi-chain support)', completed: false, aiPrompt: 'Help me implement \'Generate address endpoint (multi-chain support)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-address-list', title: 'List user addresses endpoint', completed: false, aiPrompt: 'Help me implement \'List user addresses endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-withdrawal', title: 'Withdrawal request endpoint with validation', completed: false, aiPrompt: 'Help me implement \'Withdrawal request endpoint with validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-withdrawal-list', title: 'List withdrawal history endpoint', completed: false, aiPrompt: 'Help me implement \'List withdrawal history endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-balance', title: 'Balance query endpoint (all coins)', completed: false, aiPrompt: 'Help me implement \'Balance query endpoint (all coins)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-transactions', title: 'Transaction history endpoint', completed: false, aiPrompt: 'Help me implement \'Transaction history endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-deposit', title: 'Deposit address management endpoint', completed: false, aiPrompt: 'Help me implement \'Deposit address management endpoint\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-security', title: 'Wallet security operations (password change, etc.)', completed: false, aiPrompt: 'Help me implement \'Wallet security operations (password change, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'wallet-dto', title: 'Create comprehensive DTOs', completed: false, aiPrompt: 'Help me implement \'Create comprehensive DTOs\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level5_WalletServices'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 11: Payment Gateways
  Level11_PaymentGateways: {
    id: 'Level11_PaymentGateways',
    title: '🎮 Level 11: Payment Gateway Integration',
    description: 'Build PaymentGateway service with integrations for Vandar, Jibit, NextPay, RayanPay, Sadad, and Zarinpal. Handle deposits, withdrawals, callbacks, and settlements.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 40,
    actualHours: 0,
    subtasks: [
      { id: 'gateway-interface', title: 'Create IPaymentGateway interface', completed: false, aiPrompt: 'Help me implement \'Create IPaymentGateway interface\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-factory', title: 'Gateway factory pattern implementation', completed: false, aiPrompt: 'Help me implement \'Gateway factory pattern implementation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-vandar', title: 'Vandar integration (deposit, withdrawal, callback)', completed: false, aiPrompt: 'Help me implement \'Vandar integration (deposit, withdrawal, callback)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-jibit', title: 'Jibit integration (deposit, withdrawal, callback)', completed: false, aiPrompt: 'Help me implement \'Jibit integration (deposit, withdrawal, callback)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-nextpay', title: 'NextPay integration (deposit, withdrawal, callback)', completed: false, aiPrompt: 'Help me implement \'NextPay integration (deposit, withdrawal, callback)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-rayanpay', title: 'RayanPay integration', completed: false, aiPrompt: 'Help me implement \'RayanPay integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-sadad', title: 'Sadad integration', completed: false, aiPrompt: 'Help me implement \'Sadad integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-zarinpal', title: 'Zarinpal integration', completed: false, aiPrompt: 'Help me implement \'Zarinpal integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-callback', title: 'Unified callback handler for all gateways', completed: false, aiPrompt: 'Help me implement \'Unified callback handler for all gateways\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-verification', title: 'Callback signature verification', completed: false, aiPrompt: 'Help me implement \'Callback signature verification\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-withdrawal', title: 'Withdrawal to bank account processing', completed: false, aiPrompt: 'Help me implement \'Withdrawal to bank account processing\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-settlement', title: 'Settlement reconciliation logic', completed: false, aiPrompt: 'Help me implement \'Settlement reconciliation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-tracking', title: 'Transaction tracking and status management', completed: false, aiPrompt: 'Help me implement \'Transaction tracking and status management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gateway-error', title: 'Error handling and retry mechanisms', completed: false, aiPrompt: 'Help me implement \'Error handling and retry mechanisms\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level5_WalletServices'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 12: KYC & Identity Services
  Level12_KYCIdentity: {
    id: 'Level12_KYCIdentity',
    title: '🎮 Level 12: KYC & Identity Services',
    description: 'Build FinoTechService, JibitService (KYC), BankAccountService, and UserAccountLevelService for identity verification and KYC processing.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'finnotech-service', title: 'FinoTechService - National ID validation, card to IBAN, bank account verification', completed: false, aiPrompt: 'Help me implement \'FinoTechService - National ID validation, card to IBAN, bank account verification\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'jibit-kyc', title: 'JibitService KYC - IBAN matching, card matching, identity similarity', completed: false, aiPrompt: 'Help me implement \'JibitService KYC - IBAN matching, card matching, identity similarity\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'bank-account-service', title: 'BankAccountService - Bank account management and validation', completed: false, aiPrompt: 'Help me implement \'BankAccountService - Bank account management and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'account-level-service', title: 'UserAccountLevelService - Account level management (USER, AUTHORIZED_USER)', completed: false, aiPrompt: 'Help me implement \'UserAccountLevelService - Account level management (USER, AUTHORIZED_USER)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'kyc-entity', title: 'KYC entity structures and repositories', completed: false, aiPrompt: 'Help me implement \'KYC entity structures and repositories\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'kyc-workflow', title: 'KYC workflow orchestration', completed: false, aiPrompt: 'Help me implement \'KYC workflow orchestration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'kyc-admin-review', title: 'Admin review interface integration', completed: false, aiPrompt: 'Help me implement \'Admin review interface integration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'kyc-status-tracking', title: 'KYC status tracking and updates', completed: false, aiPrompt: 'Help me implement \'KYC status tracking and updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level3_CustomerIdentity'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 13: Admin & RBAC
  Level13_AdminRBAC: {
    id: 'Level13_AdminRBAC',
    title: '🎮 Level 13: Admin & RBAC Management',
    description: 'Build AdminService, RoleService, AdminController, and RolesController for admin user management, RBAC, system configuration, and administrative operations.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 28,
    actualHours: 0,
    subtasks: [
      // AdminService
      { id: 'admin-entity', title: 'Create Admin entity with all fields', completed: false, aiPrompt: 'Help me implement \'Create Admin entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-crud', title: 'Admin CRUD operations', completed: false, aiPrompt: 'Help me implement \'Admin CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-auth', title: 'Admin authentication logic', completed: false, aiPrompt: 'Help me implement \'Admin authentication logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-rbac', title: 'RBAC integration and privilege checking', completed: false, aiPrompt: 'Help me implement \'RBAC integration and privilege checking\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-user-mgmt', title: 'User management operations (suspend, activate, etc.)', completed: false, aiPrompt: 'Help me implement \'User management operations (suspend, activate, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-config', title: 'System configuration management', completed: false, aiPrompt: 'Help me implement \'System configuration management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-monitoring', title: 'System monitoring and statistics', completed: false, aiPrompt: 'Help me implement \'System monitoring and statistics\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-reporting', title: 'Administrative reporting functionality', completed: false, aiPrompt: 'Help me implement \'Administrative reporting functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'admin-audit', title: 'Admin action audit logging', completed: false, aiPrompt: 'Help me implement \'Admin action audit logging\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // RoleService
      { id: 'role-entity', title: 'Create Role, Privilege, and RolePrivilege entities', completed: false, aiPrompt: 'Help me implement \'Create Role, Privilege, and RolePrivilege entities\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-crud', title: 'Role CRUD operations', completed: false, aiPrompt: 'Help me implement \'Role CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-privileges', title: 'Privilege management (CRUD, assignment)', completed: false, aiPrompt: 'Help me implement \'Privilege management (CRUD, assignment)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-assignment', title: 'Role assignment logic (users, admins)', completed: false, aiPrompt: 'Help me implement \'Role assignment logic (users, admins)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-checking', title: 'Privilege checking logic', completed: false, aiPrompt: 'Help me implement \'Privilege checking logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-hierarchy', title: 'Role hierarchy support (optional)', completed: false, aiPrompt: 'Help me implement \'Role hierarchy support (optional)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-validation', title: 'Permission validation for access control', completed: false, aiPrompt: 'Help me implement \'Permission validation for access control\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'role-seeding', title: 'Initial roles and privileges seeding', completed: false, aiPrompt: 'Help me implement \'Initial roles and privileges seeding\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // Controllers
      { id: 'admin-controller', title: 'AdminController with all endpoints', completed: false, aiPrompt: 'Help me implement \'AdminController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'roles-controller', title: 'RolesController with all endpoints', completed: false, aiPrompt: 'Help me implement \'RolesController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 14: OTC Exchange
  Level14_OTCExchange: {
    id: 'Level14_OTCExchange',
    title: '🎮 Level 14: OTC Exchange',
    description: 'Build ExchangeActionService and ExchangeActionController for over-the-counter exchange operations with buy/sell orders and admin approval workflow.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Services',
    estimatedHours: 24,
    actualHours: 0,
    subtasks: [
      { id: 'exchange-service', title: 'ExchangeActionService - OTC order processing logic', completed: false, aiPrompt: 'Help me implement \'ExchangeActionService - OTC order processing logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-entity', title: 'Exchange order entity and repository', completed: false, aiPrompt: 'Help me implement \'Exchange order entity and repository\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-buy', title: 'OTC buy order creation and validation', completed: false, aiPrompt: 'Help me implement \'OTC buy order creation and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-sell', title: 'OTC sell order creation and validation', completed: false, aiPrompt: 'Help me implement \'OTC sell order creation and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-approve', title: 'Order approval logic and fund transfer', completed: false, aiPrompt: 'Help me implement \'Order approval logic and fund transfer\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-cancel', title: 'Order cancellation logic', completed: false, aiPrompt: 'Help me implement \'Order cancellation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-controller', title: 'ExchangeActionController with all endpoints', completed: false, aiPrompt: 'Help me implement \'ExchangeActionController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'exchange-dto', title: 'DTOs for OTC operations', completed: false, aiPrompt: 'Help me implement \'DTOs for OTC operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level5_WalletServices'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 15: Support & Content
  Level15_SupportContent: {
    id: 'Level15_SupportContent',
    title: '🎮 Level 15: Support & Content Management',
    description: 'Build TicketService, BlogService, FileService, MessageService, FAQService, TicketController, and BlogController for customer support and content management.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.MEDIUM,
    category: 'Services',
    estimatedHours: 40,
    actualHours: 0,
    subtasks: [
      // TicketService
      { id: 'ticket-entity', title: 'Create Ticket and TicketMessage entities', completed: false, aiPrompt: 'Help me implement \'Create Ticket and TicketMessage entities\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-crud', title: 'Ticket CRUD operations', completed: false, aiPrompt: 'Help me implement \'Ticket CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-messages', title: 'Ticket message handling with file attachments', completed: false, aiPrompt: 'Help me implement \'Ticket message handling with file attachments\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-status', title: 'Ticket status management (OPEN, IN_PROGRESS, RESOLVED, CLOSED)', completed: false, aiPrompt: 'Help me implement \'Ticket status management (OPEN, IN_PROGRESS, RESOLVED, CLOSED)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-assignment', title: 'Ticket assignment to admins', completed: false, aiPrompt: 'Help me implement \'Ticket assignment to admins\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-priority', title: 'Ticket priority management', completed: false, aiPrompt: 'Help me implement \'Ticket priority management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-categories', title: 'Ticket category management', completed: false, aiPrompt: 'Help me implement \'Ticket category management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-notification', title: 'Notification system for ticket updates', completed: false, aiPrompt: 'Help me implement \'Notification system for ticket updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'ticket-search', title: 'Ticket search and filtering', completed: false, aiPrompt: 'Help me implement \'Ticket search and filtering\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // BlogService
      { id: 'blog-entity', title: 'BlogPost entity with all fields', completed: false, aiPrompt: 'Help me implement \'BlogPost entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-crud', title: 'Blog post CRUD operations', completed: false, aiPrompt: 'Help me implement \'Blog post CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-content', title: 'Content management and formatting', completed: false, aiPrompt: 'Help me implement \'Content management and formatting\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-publishing', title: 'Publishing and visibility control', completed: false, aiPrompt: 'Help me implement \'Publishing and visibility control\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-categories', title: 'Category management', completed: false, aiPrompt: 'Help me implement \'Category management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-seo', title: 'SEO metadata management', completed: false, aiPrompt: 'Help me implement \'SEO metadata management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-images', title: 'Image upload and management', completed: false, aiPrompt: 'Help me implement \'Image upload and management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-search', title: 'Blog post search functionality', completed: false, aiPrompt: 'Help me implement \'Blog post search functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // FileService
      { id: 'file-service', title: 'FileService - file upload, storage, and management', completed: false, aiPrompt: 'Help me implement \'FileService - file upload, storage, and management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'file-validation', title: 'File validation (type, size)', completed: false, aiPrompt: 'Help me implement \'File validation (type, size)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'file-storage', title: 'File storage (local or cloud)', completed: false, aiPrompt: 'Help me implement \'File storage (local or cloud)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // Controllers
      { id: 'ticket-controller', title: 'TicketController with all endpoints', completed: false, aiPrompt: 'Help me implement \'TicketController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'blog-controller', title: 'BlogController with all endpoints', completed: false, aiPrompt: 'Help me implement \'BlogController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth', 'Level4_Notifications'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 16: Promotional Features
  Level16_Promotional: {
    id: 'Level16_Promotional',
    title: '🎮 Level 16: Promotional Features',
    description: 'Build GiftCodeService, ReferralCodeService, GiftCodeController, and ReferralCodeController for gift codes, referral programs, and promotional campaigns.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.MEDIUM,
    category: 'Services',
    estimatedHours: 28,
    actualHours: 0,
    subtasks: [
      // GiftCodeService
      { id: 'gift-entity', title: 'GiftCode entity with all fields', completed: false, aiPrompt: 'Help me implement \'GiftCode entity with all fields\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-generate', title: 'Gift code generation algorithm', completed: false, aiPrompt: 'Help me implement \'Gift code generation algorithm\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-validate', title: 'Gift code validation logic', completed: false, aiPrompt: 'Help me implement \'Gift code validation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-redeem', title: 'Gift code redemption logic', completed: false, aiPrompt: 'Help me implement \'Gift code redemption logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-expiration', title: 'Expiration date management', completed: false, aiPrompt: 'Help me implement \'Expiration date management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-limits', title: 'Usage limits and restrictions', completed: false, aiPrompt: 'Help me implement \'Usage limits and restrictions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-tracking', title: 'Usage tracking and statistics', completed: false, aiPrompt: 'Help me implement \'Usage tracking and statistics\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'gift-rewards', title: 'Reward distribution logic', completed: false, aiPrompt: 'Help me implement \'Reward distribution logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // ReferralCodeService
      { id: 'referral-entity', title: 'ReferralCode and ReferralRelationship entities', completed: false, aiPrompt: 'Help me implement \'ReferralCode and ReferralRelationship entities\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-generate', title: 'Referral code generation logic', completed: false, aiPrompt: 'Help me implement \'Referral code generation logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-tracking', title: 'Referral relationship tracking', completed: false, aiPrompt: 'Help me implement \'Referral relationship tracking\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-rewards', title: 'Referral reward calculation', completed: false, aiPrompt: 'Help me implement \'Referral reward calculation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-distribution', title: 'Reward distribution logic', completed: false, aiPrompt: 'Help me implement \'Reward distribution logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-stats', title: 'Referral statistics and analytics', completed: false, aiPrompt: 'Help me implement \'Referral statistics and analytics\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-validation', title: 'Referral code validation', completed: false, aiPrompt: 'Help me implement \'Referral code validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      // Controllers
      { id: 'gift-controller', title: 'GiftCodeController with all endpoints', completed: false, aiPrompt: 'Help me implement \'GiftCodeController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'referral-controller', title: 'ReferralCodeController with all endpoints', completed: false, aiPrompt: 'Help me implement \'ReferralCodeController with all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level3_CustomerIdentity', 'Level5_WalletServices'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 17: Additional Services
  Level17_AdditionalServices: {
    id: 'Level17_AdditionalServices',
    title: '🎮 Level 17: Additional Services',
    description: 'Build ExchangeSettingService, CustomerTokenService, AlarmService, and other supporting services for system configuration and monitoring.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.MEDIUM,
    category: 'Services',
    estimatedHours: 20,
    actualHours: 0,
    subtasks: [
      { id: 'exchange-setting-service', title: 'ExchangeSettingService - exchange configuration management', completed: false, aiPrompt: 'Help me implement \'ExchangeSettingService - exchange configuration management\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'customer-token-service', title: 'CustomerTokenService - token management for customers', completed: false, aiPrompt: 'Help me implement \'CustomerTokenService - token management for customers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'alarm-service', title: 'AlarmService - system alerts and monitoring', completed: false, aiPrompt: 'Help me implement \'AlarmService - system alerts and monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'faq-service', title: 'FAQService - FAQ management (if needed)', completed: false, aiPrompt: 'Help me implement \'FAQService - FAQ management (if needed)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'message-service', title: 'MessageService - internal messaging (if needed)', completed: false, aiPrompt: 'Help me implement \'MessageService - internal messaging (if needed)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-tasks', title: 'Scheduled tasks setup and configuration', completed: false, aiPrompt: 'Help me implement \'Scheduled tasks setup and configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'health-checks', title: 'Health check endpoints and monitoring', completed: false, aiPrompt: 'Help me implement \'Health check endpoints and monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 18: Testing & Documentation
  Level18_TestingDocumentation: {
    id: 'Level18_TestingDocumentation',
    title: '🎮 Level 18: Testing & Documentation',
    description: 'Write comprehensive unit tests, integration tests, API documentation, and deployment guides for the entire system.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 40,
    actualHours: 0,
    subtasks: [
      { id: 'unit-tests', title: 'Write unit tests for all services', completed: false, aiPrompt: 'Help me implement \'Write unit tests for all services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'integration-tests', title: 'Write integration tests for all controllers', completed: false, aiPrompt: 'Help me implement \'Write integration tests for all controllers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'e2e-tests', title: 'Write end-to-end tests for critical flows', completed: false, aiPrompt: 'Help me implement \'Write end-to-end tests for critical flows\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'api-docs', title: 'Complete Swagger/OpenAPI documentation', completed: false, aiPrompt: 'Help me implement \'Complete Swagger/OpenAPI documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'code-docs', title: 'Code documentation and comments', completed: false, aiPrompt: 'Help me implement \'Code documentation and comments\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deployment-guide', title: 'Deployment guide and configuration', completed: false, aiPrompt: 'Help me implement \'Deployment guide and configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'api-testing', title: 'API testing with Postman/Insomnia collections', completed: false, aiPrompt: 'Help me implement \'API testing with Postman/Insomnia collections\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level1_ProjectSetup', 'Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 19: Scheduled Tasks & Background Jobs
  Level19_ScheduledTasks: {
    id: 'Level19_ScheduledTasks',
    title: '🎮 Level 19: Scheduled Tasks & Background Jobs',
    description: 'Implement all scheduled tasks and background jobs for order expiration, price updates, wallet sweeps, market statistics, stop-limit triggers, and system maintenance.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 24,
    actualHours: 0,
    subtasks: [
      { id: 'scheduled-module', title: 'Create scheduled tasks module with @nestjs/schedule', completed: false, aiPrompt: 'Help me implement \'Create scheduled tasks module with @nestjs/schedule\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-order-expire', title: 'Order expiration cleanup job (runs every minute)', completed: false, aiPrompt: 'Help me implement \'Order expiration cleanup job (runs every minute)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-price-update', title: 'Market and coin price update job (runs every 30 seconds)', completed: false, aiPrompt: 'Help me implement \'Market and coin price update job (runs every 30 seconds)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-wallet-sweep', title: 'Hot wallet sweep job for security (runs hourly)', completed: false, aiPrompt: 'Help me implement \'Hot wallet sweep job for security (runs hourly)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-market-stats', title: 'Market statistics calculation job (runs every 5 minutes)', completed: false, aiPrompt: 'Help me implement \'Market statistics calculation job (runs every 5 minutes)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-stop-limit', title: 'Stop-limit order trigger check job (runs every 10 seconds)', completed: false, aiPrompt: 'Help me implement \'Stop-limit order trigger check job (runs every 10 seconds)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-trade-aggregation', title: 'Trade data aggregation job (runs daily)', completed: false, aiPrompt: 'Help me implement \'Trade data aggregation job (runs daily)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-kyc-cleanup', title: 'KYC document cleanup job for expired submissions', completed: false, aiPrompt: 'Help me implement \'KYC document cleanup job for expired submissions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-notification-cleanup', title: 'Old notification cleanup job', completed: false, aiPrompt: 'Help me implement \'Old notification cleanup job\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-backup', title: 'Database backup job (runs daily)', completed: false, aiPrompt: 'Help me implement \'Database backup job (runs daily)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-log-cleanup', title: 'Log file cleanup and rotation job', completed: false, aiPrompt: 'Help me implement \'Log file cleanup and rotation job\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-health-check', title: 'System health check job', completed: false, aiPrompt: 'Help me implement \'System health check job\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-reporting', title: 'Daily/weekly reporting job generation', completed: false, aiPrompt: 'Help me implement \'Daily/weekly reporting job generation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-cache-warmup', title: 'Cache warmup job for frequently accessed data', completed: false, aiPrompt: 'Help me implement \'Cache warmup job for frequently accessed data\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-error-monitoring', title: 'Error monitoring and alerting job', completed: false, aiPrompt: 'Help me implement \'Error monitoring and alerting job\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'scheduled-testing', title: 'Write tests for all scheduled tasks', completed: false, aiPrompt: 'Help me implement \'Write tests for all scheduled tasks\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level7_TradingEngine', 'Level8_MarketManagement'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 20: WebSocket & Real-time Updates
  Level20_WebSocketRealtime: {
    id: 'Level20_WebSocketRealtime',
    title: '🎮 Level 20: WebSocket & Real-time Updates',
    description: 'Implement WebSocket gateway for real-time price updates, order book updates, trade notifications, order status changes, and live market data streaming.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'websocket-module', title: 'Install @nestjs/websockets and create gateway module', completed: false, aiPrompt: 'Help me implement \'Install @nestjs/websockets and create gateway module\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-gateway', title: 'Create main WebSocket gateway class', completed: false, aiPrompt: 'Help me implement \'Create main WebSocket gateway class\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-auth', title: 'WebSocket authentication and connection validation', completed: false, aiPrompt: 'Help me implement \'WebSocket authentication and connection validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-price-updates', title: 'Real-time price update broadcasting (all markets)', completed: false, aiPrompt: 'Help me implement \'Real-time price update broadcasting (all markets)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-orderbook', title: 'Order book update broadcasting (bids/asks changes)', completed: false, aiPrompt: 'Help me implement \'Order book update broadcasting (bids/asks changes)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-trades', title: 'Trade execution broadcasting (public trade feed)', completed: false, aiPrompt: 'Help me implement \'Trade execution broadcasting (public trade feed)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-user-orders', title: 'User-specific order status updates', completed: false, aiPrompt: 'Help me implement \'User-specific order status updates\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-user-trades', title: 'User-specific trade notifications', completed: false, aiPrompt: 'Help me implement \'User-specific trade notifications\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-balance', title: 'Balance update notifications for users', completed: false, aiPrompt: 'Help me implement \'Balance update notifications for users\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-notifications', title: 'In-app notification delivery via WebSocket', completed: false, aiPrompt: 'Help me implement \'In-app notification delivery via WebSocket\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-rooms', title: 'Room-based subscriptions (market-specific channels)', completed: false, aiPrompt: 'Help me implement \'Room-based subscriptions (market-specific channels)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-reconnection', title: 'Connection reconnection and state recovery', completed: false, aiPrompt: 'Help me implement \'Connection reconnection and state recovery\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-rate-limiting', title: 'Rate limiting for WebSocket connections', completed: false, aiPrompt: 'Help me implement \'Rate limiting for WebSocket connections\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-error-handling', title: 'Error handling and connection cleanup', completed: false, aiPrompt: 'Help me implement \'Error handling and connection cleanup\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'websocket-testing', title: 'Write tests for WebSocket functionality', completed: false, aiPrompt: 'Help me implement \'Write tests for WebSocket functionality\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level7_TradingEngine', 'Level8_MarketManagement'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 21: Error Handling & Logging
  Level21_ErrorHandlingLogging: {
    id: 'Level21_ErrorHandlingLogging',
    title: '🎮 Level 21: Error Handling & Logging',
    description: 'Implement comprehensive error handling, global exception filters, structured logging, error tracking, and monitoring for production readiness.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 20,
    actualHours: 0,
    subtasks: [
      { id: 'error-global-filter', title: 'Create global exception filter for all errors', completed: false, aiPrompt: 'Help me implement \'Create global exception filter for all errors\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-custom-exceptions', title: 'Create custom exception classes (BusinessException, ValidationException, etc.)', completed: false, aiPrompt: 'Help me implement \'Create custom exception classes (BusinessException, ValidationException, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-http-exceptions', title: 'Map exceptions to proper HTTP status codes', completed: false, aiPrompt: 'Help me implement \'Map exceptions to proper HTTP status codes\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-validation', title: 'Validation error formatting and response', completed: false, aiPrompt: 'Help me implement \'Validation error formatting and response\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-logging', title: 'Structured logging with Winston or Pino', completed: false, aiPrompt: 'Help me implement \'Structured logging with Winston or Pino\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-log-levels', title: 'Configure log levels (error, warn, info, debug)', completed: false, aiPrompt: 'Help me implement \'Configure log levels (error, warn, info, debug)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-log-formatting', title: 'Log formatting with timestamps, context, and stack traces', completed: false, aiPrompt: 'Help me implement \'Log formatting with timestamps, context, and stack traces\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-log-storage', title: 'Log file storage and rotation', completed: false, aiPrompt: 'Help me implement \'Log file storage and rotation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-tracking', title: 'Error tracking integration (Sentry, Rollbar, etc.)', completed: false, aiPrompt: 'Help me implement \'Error tracking integration (Sentry, Rollbar, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-monitoring', title: 'Error monitoring and alerting setup', completed: false, aiPrompt: 'Help me implement \'Error monitoring and alerting setup\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-recovery', title: 'Error recovery mechanisms and retry logic', completed: false, aiPrompt: 'Help me implement \'Error recovery mechanisms and retry logic\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-user-messages', title: 'User-friendly error messages for API responses', completed: false, aiPrompt: 'Help me implement \'User-friendly error messages for API responses\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-audit', title: 'Error audit logging for security events', completed: false, aiPrompt: 'Help me implement \'Error audit logging for security events\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'error-testing', title: 'Write tests for error handling scenarios', completed: false, aiPrompt: 'Help me implement \'Write tests for error handling scenarios\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level1_ProjectSetup'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 22: Performance & Caching
  Level22_PerformanceCaching: {
    id: 'Level22_PerformanceCaching',
    title: '🎮 Level 22: Performance & Caching',
    description: 'Implement Redis caching, query optimization, database indexing, response compression, and performance monitoring for optimal system performance.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 28,
    actualHours: 0,
    subtasks: [
      { id: 'cache-redis-setup', title: 'Install and configure Redis for caching', completed: false, aiPrompt: 'Help me implement \'Install and configure Redis for caching\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-market-data', title: 'Cache market data and price information', completed: false, aiPrompt: 'Help me implement \'Cache market data and price information\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-coin-data', title: 'Cache coin information and network data', completed: false, aiPrompt: 'Help me implement \'Cache coin information and network data\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-orderbook', title: 'Cache order book data with TTL', completed: false, aiPrompt: 'Help me implement \'Cache order book data with TTL\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-user-data', title: 'Cache user profile and balance data', completed: false, aiPrompt: 'Help me implement \'Cache user profile and balance data\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-invalidation', title: 'Cache invalidation strategies and patterns', completed: false, aiPrompt: 'Help me implement \'Cache invalidation strategies and patterns\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'cache-decorator', title: 'Create @Cacheable decorator for services', completed: false, aiPrompt: 'Help me implement \'Create @Cacheable decorator for services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-query-optimization', title: 'Optimize database queries with proper indexes', completed: false, aiPrompt: 'Help me implement \'Optimize database queries with proper indexes\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-pagination', title: 'Implement efficient pagination for large datasets', completed: false, aiPrompt: 'Help me implement \'Implement efficient pagination for large datasets\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-compression', title: 'Response compression middleware (gzip)', completed: false, aiPrompt: 'Help me implement \'Response compression middleware (gzip)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-connection-pooling', title: 'Database connection pooling optimization', completed: false, aiPrompt: 'Help me implement \'Database connection pooling optimization\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-lazy-loading', title: 'Implement lazy loading for entity relationships', completed: false, aiPrompt: 'Help me implement \'Implement lazy loading for entity relationships\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-monitoring', title: 'Performance monitoring and metrics collection', completed: false, aiPrompt: 'Help me implement \'Performance monitoring and metrics collection\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-load-testing', title: 'Load testing and performance benchmarking', completed: false, aiPrompt: 'Help me implement \'Load testing and performance benchmarking\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'perf-optimization', title: 'Identify and fix performance bottlenecks', completed: false, aiPrompt: 'Help me implement \'Identify and fix performance bottlenecks\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth', 'Level7_TradingEngine'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 23: Security Hardening
  Level23_SecurityHardening: {
    id: 'Level23_SecurityHardening',
    title: '🎮 Level 23: Security Hardening',
    description: 'Implement security best practices including rate limiting, CORS configuration, input sanitization, SQL injection prevention, XSS protection, and security headers.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.CRITICAL,
    category: 'Infrastructure',
    estimatedHours: 24,
    actualHours: 0,
    subtasks: [
      { id: 'security-rate-limiting', title: 'Implement rate limiting for all endpoints', completed: false, aiPrompt: 'Help me implement \'Implement rate limiting for all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-cors', title: 'Configure CORS properly for production', completed: false, aiPrompt: 'Help me implement \'Configure CORS properly for production\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-helmet', title: 'Install and configure Helmet for security headers', completed: false, aiPrompt: 'Help me implement \'Install and configure Helmet for security headers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-input-sanitization', title: 'Input sanitization and validation', completed: false, aiPrompt: 'Help me implement \'Input sanitization and validation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-sql-injection', title: 'Prevent SQL injection with parameterized queries', completed: false, aiPrompt: 'Help me implement \'Prevent SQL injection with parameterized queries\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-xss', title: 'XSS protection and content security policy', completed: false, aiPrompt: 'Help me implement \'XSS protection and content security policy\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-csrf', title: 'CSRF protection for state-changing operations', completed: false, aiPrompt: 'Help me implement \'CSRF protection for state-changing operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-password-policy', title: 'Enforce strong password policies', completed: false, aiPrompt: 'Help me implement \'Enforce strong password policies\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-session-security', title: 'Secure session management and token storage', completed: false, aiPrompt: 'Help me implement \'Secure session management and token storage\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-api-keys', title: 'API key management and rotation', completed: false, aiPrompt: 'Help me implement \'API key management and rotation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-audit-logging', title: 'Security audit logging for sensitive operations', completed: false, aiPrompt: 'Help me implement \'Security audit logging for sensitive operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-ip-whitelisting', title: 'IP whitelisting for admin endpoints', completed: false, aiPrompt: 'Help me implement \'IP whitelisting for admin endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-encryption', title: 'Encryption for sensitive data at rest', completed: false, aiPrompt: 'Help me implement \'Encryption for sensitive data at rest\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'security-penetration-testing', title: 'Security testing and vulnerability scanning', completed: false, aiPrompt: 'Help me implement \'Security testing and vulnerability scanning\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 24: Data Migration & Seeding
  Level24_DataMigrationSeeding: {
    id: 'Level24_DataMigrationSeeding',
    title: '🎮 Level 24: Data Migration & Seeding',
    description: 'Create comprehensive database seeding scripts for initial data (roles, privileges, countries, coins, markets, exchange settings) and migration scripts from existing Java database.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'seed-roles', title: 'Seed initial roles (SUPER_ADMIN, ADMIN, USER, etc.)', completed: false, aiPrompt: 'Help me implement \'Seed initial roles (SUPER_ADMIN, ADMIN, USER, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-privileges', title: 'Seed all system privileges with descriptions', completed: false, aiPrompt: 'Help me implement \'Seed all system privileges with descriptions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-role-privileges', title: 'Assign privileges to roles (role-privilege mapping)', completed: false, aiPrompt: 'Help me implement \'Assign privileges to roles (role-privilege mapping)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-countries', title: 'Seed country data with codes and names', completed: false, aiPrompt: 'Help me implement \'Seed country data with codes and names\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-coins', title: 'Seed initial cryptocurrency coins (BTC, ETH, TRON, etc.)', completed: false, aiPrompt: 'Help me implement \'Seed initial cryptocurrency coins (BTC, ETH, TRON, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-networks', title: 'Seed blockchain networks for each coin', completed: false, aiPrompt: 'Help me implement \'Seed blockchain networks for each coin\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-markets', title: 'Seed trading markets (BTC/USDT, ETH/USDT, etc.)', completed: false, aiPrompt: 'Help me implement \'Seed trading markets (BTC/USDT, ETH/USDT, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-exchange-settings', title: 'Seed exchange configuration settings', completed: false, aiPrompt: 'Help me implement \'Seed exchange configuration settings\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-admin-users', title: 'Create initial admin users with default credentials', completed: false, aiPrompt: 'Help me implement \'Create initial admin users with default credentials\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'migration-script', title: 'Create data migration script from Java database', completed: false, aiPrompt: 'Help me implement \'Create data migration script from Java database\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'migration-entities', title: 'Map Java entities to TypeORM entities for migration', completed: false, aiPrompt: 'Help me implement \'Map Java entities to TypeORM entities for migration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'migration-data-validation', title: 'Data validation and integrity checks after migration', completed: false, aiPrompt: 'Help me implement \'Data validation and integrity checks after migration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'migration-rollback', title: 'Create rollback script for migration', completed: false, aiPrompt: 'Help me implement \'Create rollback script for migration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'seed-testing', title: 'Test all seeding scripts and verify data integrity', completed: false, aiPrompt: 'Help me implement \'Test all seeding scripts and verify data integrity\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level2_DatabaseAuth'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 25: Unit Testing
  Level25_UnitTesting: {
    id: 'Level25_UnitTesting',
    title: '🎮 Level 25: Unit Testing',
    description: 'Write comprehensive unit tests for all services, repositories, and utility functions with high code coverage, mocking dependencies, and testing edge cases.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 60,
    actualHours: 0,
    subtasks: [
      { id: 'test-customer-service', title: 'Unit tests for CustomerService (registration, auth, KYC)', completed: false, aiPrompt: 'Help me implement \'Unit tests for CustomerService (registration, auth, KYC)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-wallet-service', title: 'Unit tests for WalletService (HD wallet, address generation)', completed: false, aiPrompt: 'Help me implement \'Unit tests for WalletService (HD wallet, address generation)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-order-service', title: 'Unit tests for OrderService (order creation, matching)', completed: false, aiPrompt: 'Help me implement \'Unit tests for OrderService (order creation, matching)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-trade-service', title: 'Unit tests for TradeService (trade execution, settlement)', completed: false, aiPrompt: 'Help me implement \'Unit tests for TradeService (trade execution, settlement)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-market-service', title: 'Unit tests for MarketService (market CRUD, price updates)', completed: false, aiPrompt: 'Help me implement \'Unit tests for MarketService (market CRUD, price updates)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-coin-service', title: 'Unit tests for CoinService (coin management, pricing)', completed: false, aiPrompt: 'Help me implement \'Unit tests for CoinService (coin management, pricing)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-payment-gateway', title: 'Unit tests for PaymentGateway services', completed: false, aiPrompt: 'Help me implement \'Unit tests for PaymentGateway services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-kyc-services', title: 'Unit tests for KYC services (FinoTech, Jibit)', completed: false, aiPrompt: 'Help me implement \'Unit tests for KYC services (FinoTech, Jibit)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-admin-service', title: 'Unit tests for AdminService and RoleService', completed: false, aiPrompt: 'Help me implement \'Unit tests for AdminService and RoleService\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-notification-services', title: 'Unit tests for EmailService, SMSService, NotificationService', completed: false, aiPrompt: 'Help me implement \'Unit tests for EmailService, SMSService, NotificationService\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-repositories', title: 'Unit tests for all repository methods', completed: false, aiPrompt: 'Help me implement \'Unit tests for all repository methods\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-utilities', title: 'Unit tests for utility functions and helpers', completed: false, aiPrompt: 'Help me implement \'Unit tests for utility functions and helpers\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-coverage', title: 'Achieve 80%+ code coverage for all services', completed: false, aiPrompt: 'Help me implement \'Achieve 80%+ code coverage for all services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-edge-cases', title: 'Test edge cases and error scenarios', completed: false, aiPrompt: 'Help me implement \'Test edge cases and error scenarios\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-performance', title: 'Performance tests for critical services', completed: false, aiPrompt: 'Help me implement \'Performance tests for critical services\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level3_CustomerIdentity', 'Level5_WalletServices', 'Level7_TradingEngine'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 26: Integration Testing
  Level26_IntegrationTesting: {
    id: 'Level26_IntegrationTesting',
    title: '🎮 Level 26: Integration Testing',
    description: 'Write integration tests for all controllers, API endpoints, database operations, external service integrations, and end-to-end user flows.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 48,
    actualHours: 0,
    subtasks: [
      { id: 'test-customer-controller', title: 'Integration tests for CustomerController endpoints', completed: false, aiPrompt: 'Help me implement \'Integration tests for CustomerController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-order-controller', title: 'Integration tests for OrderController endpoints', completed: false, aiPrompt: 'Help me implement \'Integration tests for OrderController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-trade-controller', title: 'Integration tests for TradeController endpoints', completed: false, aiPrompt: 'Help me implement \'Integration tests for TradeController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-wallet-controller', title: 'Integration tests for WalletController endpoints', completed: false, aiPrompt: 'Help me implement \'Integration tests for WalletController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-market-controller', title: 'Integration tests for MarketController and CoinController', completed: false, aiPrompt: 'Help me implement \'Integration tests for MarketController and CoinController\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-admin-controller', title: 'Integration tests for AdminController and RolesController', completed: false, aiPrompt: 'Help me implement \'Integration tests for AdminController and RolesController\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-payment-endpoints', title: 'Integration tests for payment gateway endpoints', completed: false, aiPrompt: 'Help me implement \'Integration tests for payment gateway endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-auth-flow', title: 'Integration tests for authentication flow (register, login, JWT)', completed: false, aiPrompt: 'Help me implement \'Integration tests for authentication flow (register, login, JWT)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-kyc-flow', title: 'Integration tests for KYC submission and approval flow', completed: false, aiPrompt: 'Help me implement \'Integration tests for KYC submission and approval flow\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-trading-flow', title: 'Integration tests for complete trading flow (order, match, trade)', completed: false, aiPrompt: 'Help me implement \'Integration tests for complete trading flow (order, match, trade)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-deposit-flow', title: 'Integration tests for deposit flow (request, confirmation)', completed: false, aiPrompt: 'Help me implement \'Integration tests for deposit flow (request, confirmation)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-withdrawal-flow', title: 'Integration tests for withdrawal flow (request, approval, processing)', completed: false, aiPrompt: 'Help me implement \'Integration tests for withdrawal flow (request, approval, processing)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-database-operations', title: 'Integration tests for database CRUD operations', completed: false, aiPrompt: 'Help me implement \'Integration tests for database CRUD operations\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-external-apis', title: 'Integration tests for external API integrations (blockchain, payment gateways)', completed: false, aiPrompt: 'Help me implement \'Integration tests for external API integrations (blockchain, payment gateways)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'test-error-handling', title: 'Integration tests for error handling and edge cases', completed: false, aiPrompt: 'Help me implement \'Integration tests for error handling and edge cases\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level9_TradingControllers', 'Level10_WalletController'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 27: Deployment & DevOps
  Level27_DeploymentDevOps: {
    id: 'Level27_DeploymentDevOps',
    title: '🎮 Level 27: Deployment & DevOps',
    description: 'Set up production deployment configuration, Docker containerization, CI/CD pipelines, environment management, and infrastructure as code.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'deploy-dockerfile', title: 'Create Dockerfile for NestJS application', completed: false, aiPrompt: 'Help me implement \'Create Dockerfile for NestJS application\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-docker-compose', title: 'Create docker-compose.yml for local development', completed: false, aiPrompt: 'Help me implement \'Create docker-compose.yml for local development\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-production-config', title: 'Production environment configuration', completed: false, aiPrompt: 'Help me implement \'Production environment configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-ci-cd', title: 'Set up CI/CD pipeline (GitHub Actions, GitLab CI, etc.)', completed: false, aiPrompt: 'Help me implement \'Set up CI/CD pipeline (GitHub Actions, GitLab CI, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-build-script', title: 'Create production build scripts', completed: false, aiPrompt: 'Help me implement \'Create production build scripts\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-health-checks', title: 'Health check endpoints for deployment monitoring', completed: false, aiPrompt: 'Help me implement \'Health check endpoints for deployment monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-nginx', title: 'Nginx reverse proxy configuration', completed: false, aiPrompt: 'Help me implement \'Nginx reverse proxy configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-ssl', title: 'SSL/TLS certificate configuration', completed: false, aiPrompt: 'Help me implement \'SSL/TLS certificate configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-database-migration', title: 'Database migration strategy for production', completed: false, aiPrompt: 'Help me implement \'Database migration strategy for production\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-backup-strategy', title: 'Database backup and recovery strategy', completed: false, aiPrompt: 'Help me implement \'Database backup and recovery strategy\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-monitoring', title: 'Application monitoring setup (PM2, New Relic, etc.)', completed: false, aiPrompt: 'Help me implement \'Application monitoring setup (PM2, New Relic, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-logging', title: 'Centralized logging setup (ELK stack, CloudWatch, etc.)', completed: false, aiPrompt: 'Help me implement \'Centralized logging setup (ELK stack, CloudWatch, etc.)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-scaling', title: 'Horizontal scaling configuration', completed: false, aiPrompt: 'Help me implement \'Horizontal scaling configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'deploy-documentation', title: 'Deployment documentation and runbooks', completed: false, aiPrompt: 'Help me implement \'Deployment documentation and runbooks\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level1_ProjectSetup', 'Level18_TestingDocumentation'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 28: Monitoring & Health Checks
  Level28_MonitoringHealthChecks: {
    id: 'Level28_MonitoringHealthChecks',
    title: '🎮 Level 28: Monitoring & Health Checks',
    description: 'Implement comprehensive system monitoring, health check endpoints, metrics collection, alerting, and dashboard setup for production operations.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 24,
    actualHours: 0,
    subtasks: [
      { id: 'monitor-health-endpoint', title: 'Create /health endpoint with system status', completed: false, aiPrompt: 'Help me implement \'Create /health endpoint with system status\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-db-health', title: 'Database connection health check', completed: false, aiPrompt: 'Help me implement \'Database connection health check\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-redis-health', title: 'Redis connection health check', completed: false, aiPrompt: 'Help me implement \'Redis connection health check\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-external-apis', title: 'External API health checks (blockchain, payment gateways)', completed: false, aiPrompt: 'Help me implement \'External API health checks (blockchain, payment gateways)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-metrics', title: 'Application metrics collection (response times, error rates)', completed: false, aiPrompt: 'Help me implement \'Application metrics collection (response times, error rates)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-prometheus', title: 'Prometheus metrics export setup', completed: false, aiPrompt: 'Help me implement \'Prometheus metrics export setup\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-grafana', title: 'Grafana dashboard configuration', completed: false, aiPrompt: 'Help me implement \'Grafana dashboard configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-alerting', title: 'Alerting rules for critical system failures', completed: false, aiPrompt: 'Help me implement \'Alerting rules for critical system failures\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-uptime', title: 'System uptime monitoring', completed: false, aiPrompt: 'Help me implement \'System uptime monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-resource-usage', title: 'CPU, memory, and disk usage monitoring', completed: false, aiPrompt: 'Help me implement \'CPU, memory, and disk usage monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-api-performance', title: 'API endpoint performance monitoring', completed: false, aiPrompt: 'Help me implement \'API endpoint performance monitoring\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-error-tracking', title: 'Error rate tracking and alerting', completed: false, aiPrompt: 'Help me implement \'Error rate tracking and alerting\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-business-metrics', title: 'Business metrics (trades, deposits, withdrawals)', completed: false, aiPrompt: 'Help me implement \'Business metrics (trades, deposits, withdrawals)\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'monitor-documentation', title: 'Monitoring documentation and runbooks', completed: false, aiPrompt: 'Help me implement \'Monitoring documentation and runbooks\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level21_ErrorHandlingLogging', 'Level22_PerformanceCaching'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 29: API Documentation & Swagger
  Level29_APIDocumentation: {
    id: 'Level29_APIDocumentation',
    title: '🎮 Level 29: API Documentation & Swagger',
    description: 'Complete Swagger/OpenAPI documentation for all endpoints, request/response schemas, authentication, examples, and interactive API testing interface.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.MEDIUM,
    category: 'Infrastructure',
    estimatedHours: 32,
    actualHours: 0,
    subtasks: [
      { id: 'docs-swagger-setup', title: 'Complete Swagger configuration with authentication', completed: false, aiPrompt: 'Help me implement \'Complete Swagger configuration with authentication\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-customer-endpoints', title: 'Document all CustomerController endpoints', completed: false, aiPrompt: 'Help me implement \'Document all CustomerController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-trading-endpoints', title: 'Document all OrderController and TradeController endpoints', completed: false, aiPrompt: 'Help me implement \'Document all OrderController and TradeController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-wallet-endpoints', title: 'Document all WalletController endpoints', completed: false, aiPrompt: 'Help me implement \'Document all WalletController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-market-endpoints', title: 'Document MarketController and CoinController endpoints', completed: false, aiPrompt: 'Help me implement \'Document MarketController and CoinController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-admin-endpoints', title: 'Document AdminController and RolesController endpoints', completed: false, aiPrompt: 'Help me implement \'Document AdminController and RolesController endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-payment-endpoints', title: 'Document payment gateway endpoints', completed: false, aiPrompt: 'Help me implement \'Document payment gateway endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-request-schemas', title: 'Document all request DTOs and schemas', completed: false, aiPrompt: 'Help me implement \'Document all request DTOs and schemas\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-response-schemas', title: 'Document all response DTOs and schemas', completed: false, aiPrompt: 'Help me implement \'Document all response DTOs and schemas\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-error-responses', title: 'Document error response formats', completed: false, aiPrompt: 'Help me implement \'Document error response formats\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-examples', title: 'Add request/response examples for all endpoints', completed: false, aiPrompt: 'Help me implement \'Add request/response examples for all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-authentication', title: 'Document authentication flow and JWT usage', completed: false, aiPrompt: 'Help me implement \'Document authentication flow and JWT usage\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-tags', title: 'Organize endpoints with proper tags and categories', completed: false, aiPrompt: 'Help me implement \'Organize endpoints with proper tags and categories\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-descriptions', title: 'Add detailed descriptions for all endpoints', completed: false, aiPrompt: 'Help me implement \'Add detailed descriptions for all endpoints\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'docs-testing', title: 'Test Swagger UI and interactive API testing', completed: false, aiPrompt: 'Help me implement \'Test Swagger UI and interactive API testing\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level9_TradingControllers', 'Level10_WalletController'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },

  // Level 30: Final Documentation & Handoff
  Level30_FinalDocumentation: {
    id: 'Level30_FinalDocumentation',
    title: '🎮 Level 30: Final Documentation & Handoff',
    description: 'Create comprehensive project documentation including architecture overview, API reference, deployment guides, developer onboarding, and production handoff documentation.',
    status: TaskStatus.NOT_STARTED,
    priority: TaskPriority.HIGH,
    category: 'Infrastructure',
    estimatedHours: 40,
    actualHours: 0,
    subtasks: [
      { id: 'doc-architecture', title: 'Write architecture overview and system design document', completed: false, aiPrompt: 'Help me implement \'Write architecture overview and system design document\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-api-reference', title: 'Complete API reference documentation', completed: false, aiPrompt: 'Help me implement \'Complete API reference documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-deployment', title: 'Write deployment guide with step-by-step instructions', completed: false, aiPrompt: 'Help me implement \'Write deployment guide with step-by-step instructions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-developer-onboarding', title: 'Developer onboarding guide and setup instructions', completed: false, aiPrompt: 'Help me implement \'Developer onboarding guide and setup instructions\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-database-schema', title: 'Document database schema and entity relationships', completed: false, aiPrompt: 'Help me implement \'Document database schema and entity relationships\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-environment-variables', title: 'Document all environment variables and configuration', completed: false, aiPrompt: 'Help me implement \'Document all environment variables and configuration\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-authentication', title: 'Authentication and authorization documentation', completed: false, aiPrompt: 'Help me implement \'Authentication and authorization documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-payment-gateways', title: 'Payment gateway integration documentation', completed: false, aiPrompt: 'Help me implement \'Payment gateway integration documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-blockchain-integration', title: 'Blockchain integration and ApieService documentation', completed: false, aiPrompt: 'Help me implement \'Blockchain integration and ApieService documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-trading-engine', title: 'Trading engine architecture and order matching documentation', completed: false, aiPrompt: 'Help me implement \'Trading engine architecture and order matching documentation\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-troubleshooting', title: 'Troubleshooting guide and common issues', completed: false, aiPrompt: 'Help me implement \'Troubleshooting guide and common issues\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-production-runbook', title: 'Production runbook for operations team', completed: false, aiPrompt: 'Help me implement \'Production runbook for operations team\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-security', title: 'Security documentation and best practices', completed: false, aiPrompt: 'Help me implement \'Security documentation and best practices\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-performance', title: 'Performance optimization guide', completed: false, aiPrompt: 'Help me implement \'Performance optimization guide\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' },
      { id: 'doc-handoff', title: 'Final handoff documentation for production deployment', completed: false, aiPrompt: 'Help me implement \'Final handoff documentation for production deployment\' for my NestJS cryptocurrency exchange. Provide step-by-step instructions, code examples, and explain how this feature fits into the overall exchange architecture.' }
    ],
    notes: [],
    dependencies: ['Level18_TestingDocumentation', 'Level27_DeploymentDevOps', 'Level29_APIDocumentation'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
}

// Node to Level Task Mapping - maps diagram node names to the 30 Level tasks
// This ensures clicking on diagram nodes opens the correct Level task instead of creating new tasks
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
  
  // Controllers (map to their respective levels)
  'Controllers': 'Level9_TradingControllers', // Default to trading controllers, but will be refined
  'CONTROLLERS': 'Level9_TradingControllers',
  
  // External services
  'External': 'Level6_Blockchain', // Default to blockchain, but will be refined
  'EXTERNAL': 'Level6_Blockchain',
  
  // Clients
  'Clients': 'Level1_ProjectSetup', // Project setup includes client integration
  'CLIENTS': 'Level1_ProjectSetup'
}

// Helper to map node name to Level task
const mapNodeToLevel = (nodeName) => {
  if (!nodeName) return null
  
  // Clean the node name
  const cleanName = nodeName
    .replace(/[✅🔄⏸️🚫]/g, '') // Remove status emojis
    .replace(/\s+/g, ' ') // Normalize spaces
    .trim()
  
  // Try exact match first
  if (NODE_TO_LEVEL_MAPPING[cleanName]) {
    return NODE_TO_LEVEL_MAPPING[cleanName]
  }
  
  // Try case-insensitive match
  const lowerName = cleanName.toLowerCase()
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    if (key.toLowerCase() === lowerName) {
      return level
    }
  }
  
  // Try partial match (contains)
  for (const [key, level] of Object.entries(NODE_TO_LEVEL_MAPPING)) {
    if (lowerName.includes(key.toLowerCase()) || key.toLowerCase().includes(lowerName)) {
      return level
    }
  }
  
  // Try matching controller/service patterns
  if (cleanName.includes('Controller') || cleanName.endsWith('C')) {
    const baseName = cleanName.replace(/Controller|C$/i, '').trim()
    // Map common controllers
    if (baseName === 'Admin' || baseName === 'Admin') return 'Level13_AdminRBAC'
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
  // Get priority from DEFAULT_TASKS if this is a Level task, otherwise use MEDIUM
  let priority = TaskPriority.MEDIUM
  let category = 'Other'
  
  if (backendTask.nodeId && backendTask.nodeId.startsWith('Level')) {
    const defaultTask = DEFAULT_TASKS[backendTask.nodeId]
    if (defaultTask) {
      priority = defaultTask.priority || TaskPriority.MEDIUM
      category = defaultTask.category || 'Other'
    }
  }
  
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
    createdAt: backendTask.createdAt || new Date().toISOString(),
    updatedAt: backendTask.updatedAt || new Date().toISOString(),
    backendId: backendTask.id || backendTask.backendId
  }
}

// Helper to transform frontend task to backend format
const transformFrontendTask = (frontendTask) => {
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
    dependencies: frontendTask.dependencies || []
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
      
      // Transform backend tasks
      const transformedTasks = {}
      backendTasks.forEach(bt => {
        transformedTasks[bt.nodeId] = transformBackendTask(bt)
      })
      
      // Check if we have all 30 Level tasks
      const levelTaskIds = Object.keys(DEFAULT_TASKS).filter(id => id.startsWith('Level'))
      const missingTasks = levelTaskIds.filter(id => !transformedTasks[id])
      
      // If tasks are missing, seed them
      if (missingTasks.length > 0) {
        console.log(`🌱 Seeding ${missingTasks.length} missing Level tasks to database...`)
        await seedTasksToBackend(missingTasks.map(id => DEFAULT_TASKS[id]))
        
        // Reload tasks after seeding
        const reloadResponse = await fetch(API_ENDPOINTS.tasks)
        if (reloadResponse.ok) {
          const reloadedTasks = await reloadResponse.json()
          reloadedTasks.forEach(bt => {
            transformedTasks[bt.nodeId] = transformBackendTask(bt)
          })
        }
      }
      
      // Merge with DEFAULT_TASKS to ensure all 30 tasks are present with correct priorities
      // Backend tasks take precedence for status/progress, but DEFAULT_TASKS provides structure
      const mergedTasks = {}
      
      levelTaskIds.forEach(levelId => {
        if (transformedTasks[levelId]) {
          // Use backend task but merge priority and category from DEFAULT_TASKS
          const defaultTask = DEFAULT_TASKS[levelId]
          mergedTasks[levelId] = {
            ...transformedTasks[levelId],
            priority: defaultTask.priority || transformedTasks[levelId].priority,
            category: defaultTask.category || transformedTasks[levelId].category,
            // Preserve backend data for status, actualHours, completed subtasks
            status: transformedTasks[levelId].status,
            actualHours: transformedTasks[levelId].actualHours,
            subtasks: transformedTasks[levelId].subtasks.map((st, idx) => {
              const defaultSubtask = defaultTask.subtasks?.[idx]
              return defaultSubtask 
                ? { ...defaultSubtask, completed: st.completed || false }
                : st
            }),
            notes: transformedTasks[levelId].notes
          }
        } else {
          // Use default task if not in backend
          mergedTasks[levelId] = DEFAULT_TASKS[levelId]
        }
      })
      
      // Use merged tasks (ensures all 30 are present with correct priorities)
      setTasks(mergedTasks)
    } catch (error) {
      console.error('Failed to load tasks from backend:', error)
      setBackendError(error.message)
      // Fallback to DEFAULT_TASKS if backend fails (but don't save to localStorage)
      console.warn('⚠️ Backend unavailable, using default tasks (not persisted)')
      setTasks(DEFAULT_TASKS)
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
