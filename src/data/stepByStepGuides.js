// Step-by-step guides for each level - Game-like progression system
// 30 SUPER DETAILED TASKS - Consolidated from 80+ tasks into comprehensive game progression
// Each guide has detailed steps, code examples, AI prompts, and Java import prompts (only for tasks with Java files)
export const stepByStepGuides = {
  Level1_ProjectSetup: {
    order: 1,
    title: "🎮 Level 1: Project Foundation",
    description: "Start here! Set up your NestJS project from scratch with all core dependencies, project structure, environment configuration, Swagger documentation, and development tools.",
    steps: [
      {
        step: 1,
        title: "Install Node.js and NestJS CLI",
        instructions: [
          "Make sure you have Node.js 20+ installed (check with: `node --version`)",
          "Install NestJS CLI globally: `npm install -g @nestjs/cli`",
          "Verify installation: `nest --version`"
        ],
        code: "npm install -g @nestjs/cli",
        expectedResult: "You should see the NestJS CLI version number",
        aiPrompt: "Help me install and set up NestJS CLI for a cryptocurrency exchange project. I need to install it globally and verify the installation works. Provide the commands and how to verify it's installed correctly."
      },
      {
        step: 2,
        title: "Create New NestJS Project",
        instructions: [
          "Navigate to your project directory",
          "Create a new NestJS project: `nest new bitnitex-backend`",
          "Choose npm as package manager when prompted",
          "Wait for installation to complete"
        ],
        code: "nest new bitnitex-backend\ncd bitnitex-backend",
        expectedResult: "A new folder 'bitnitex-backend' with NestJS project structure",
        aiPrompt: "Help me create a new NestJS project called 'bitnitex-backend' for a cryptocurrency exchange. I want to use npm as the package manager. Show me the command and what the project structure should look like after creation."
      },
      {
        step: 3,
        title: "Install Core Dependencies",
        instructions: [
          "Install TypeORM and database driver: `npm install @nestjs/typeorm typeorm mysql2`",
          "Install class-validator and class-transformer: `npm install class-validator class-transformer`",
          "Install JWT: `npm install @nestjs/jwt @nestjs/passport passport passport-jwt`",
          "Install Swagger: `npm install @nestjs/swagger swagger-ui-express`"
        ],
        code: "npm install @nestjs/typeorm typeorm mysql2 class-validator class-transformer @nestjs/jwt @nestjs/passport passport passport-jwt @nestjs/swagger swagger-ui-express",
        expectedResult: "All packages installed in node_modules",
        aiPrompt: "Help me install all the core dependencies for a NestJS cryptocurrency exchange project. I need TypeORM for database, JWT for authentication, class-validator for validation, and Swagger for API documentation. Provide a single npm install command with all required packages."
      },
      {
        step: 4,
        title: "Set Up Project Structure",
        instructions: [
          "Create folders: `src/modules`, `src/common`, `src/config`",
          "Create `src/config/database.config.ts` for database configuration",
          "Create `src/common/guards/` for authentication guards",
          "Create `src/common/decorators/` for custom decorators"
        ],
        code: "mkdir -p src/modules src/common/guards src/common/decorators src/config",
        expectedResult: "Project structure with organized folders",
        aiPrompt: "Help me set up the project folder structure for a NestJS cryptocurrency exchange. I need folders for modules, common utilities (guards, decorators), and configuration. Show me the commands to create these directories and explain what each folder is for."
      },
      {
        step: 5,
        title: "Configure Environment Variables",
        instructions: [
          "Create `.env` file in project root",
          "Add: `DATABASE_HOST=localhost`, `DATABASE_PORT=3306`, `DATABASE_USER=root`, `DATABASE_PASSWORD=your_password`, `DATABASE_NAME=bitnitex`",
          "Add: `JWT_SECRET=your-secret-key`, `JWT_EXPIRES_IN=24h`",
          "Install dotenv: `npm install @nestjs/config`"
        ],
        code: "npm install @nestjs/config",
        expectedResult: ".env file with all required variables",
        aiPrompt: "Help me configure environment variables for a NestJS cryptocurrency exchange project. I need database connection settings (MySQL), JWT secret, and other configuration. Show me how to set up the .env file and configure NestJS to use @nestjs/config to load these variables."
      },
      {
        step: 6,
        title: "Set Up Swagger Documentation",
        instructions: [
          "In `main.ts`, import SwaggerModule",
          "Add: `SwaggerModule.setup('api', app, document)`",
          "Create Swagger config with title, description, version",
          "Test: Run `npm run start:dev` and visit `http://localhost:3000/api`"
        ],
        code: `import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const config = new DocumentBuilder()
  .setTitle('BitniTex API')
  .setDescription('BitniTex Exchange API Documentation')
  .setVersion('1.0')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);`,
        expectedResult: "Swagger UI accessible at /api endpoint",
        aiPrompt: "Help me set up Swagger/OpenAPI documentation for my NestJS cryptocurrency exchange API. I want it accessible at the '/api' endpoint with title 'BitniTex API'. Show me how to configure SwaggerModule in main.ts with proper setup."
      }
    ],
    nextTask: "Level2_DatabaseAuth",
    unlockMessage: "🎉 Great! Your project is set up. Now let's build the database and authentication!"
  },

  Level2_DatabaseAuth: {
    order: 2,
    title: "🎮 Level 2: Database & Authentication",
    description: "Set up TypeORM with all 81 entities, create database migrations, configure authentication with JWT, guards, RBAC, 2FA, and OTP support.",
    steps: [
      {
        step: 1,
        title: "Configure TypeORM",
        instructions: [
          "Install TypeORM: `npm install @nestjs/typeorm typeorm mysql2`",
          "Create `src/config/database.config.ts`",
          "Configure database connection with environment variables",
          "Set up TypeORM module in `app.module.ts`"
        ],
        code: `import { TypeOrmModule } from '@nestjs/typeorm';
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
})`,
        expectedResult: "TypeORM configured and connected to database",
        aiPrompt: "Help me configure TypeORM for a NestJS cryptocurrency exchange project. I need to connect to MySQL database using environment variables and set up the TypeORM module properly.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The database configuration is in src/main/resources/application.properties. Please help me configure TypeORM to match the Spring Boot database setup. Read the application.properties file to understand the database connection settings."
      },
      {
        step: 2,
        title: "Create Identity Entities",
        instructions: [
          "Create `Customer` entity with all fields (id, email, password_hash, phone, country, etc.)",
          "Create `Admin` entity",
          "Create `Role` and `Privilege` entities",
          "Create `CustomerRole` junction entity",
          "Add relationships (OneToMany, ManyToOne, ManyToMany)",
          "Add indexes and constraints"
        ],
        code: `@Entity('customers')
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
}`,
        expectedResult: "Identity entities created with proper relationships",
        aiPrompt: "Help me create Customer, Admin, Role, and Privilege entities for a NestJS cryptocurrency exchange. I need proper relationships, indexes, and constraints matching the original Spring Boot entities.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java entities in src/main/java/ir/arnitex/backend/domain/ and help me create the corresponding TypeORM entities with the same fields, relationships, and constraints."
      },
      {
        step: 3,
        title: "Create Trading Entities",
        instructions: [
          "Create `Order` entity (id, customerId, marketId, type, side, price, amount, status, etc.)",
          "Create `Trade` entity",
          "Create `Market` entity",
          "Create `Coin` and `Network` entities",
          "Add all relationships and indexes"
        ],
        code: `@Entity('orders')
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
}`,
        expectedResult: "Trading entities created",
        aiPrompt: "Help me create Order, Trade, Market, and Coin entities for a NestJS cryptocurrency exchange with proper relationships and decimal precision for monetary values.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java entities for Order, Trade, Market, and Coin from src/main/java/ir/arnitex/backend/domain/ and help me create TypeORM equivalents."
      },
      {
        step: 4,
        title: "Create Wallet Entities",
        instructions: [
          "Create `HDWallet` entity",
          "Create `CustomerWallet` entity",
          "Create `WalletAddress` entity",
          "Create `Transaction` entity",
          "Add relationships and indexes"
        ],
        code: `@Entity('hd_wallet')
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
}`,
        expectedResult: "Wallet entities created",
        aiPrompt: "Help me create HD wallet and customer wallet entities for a NestJS cryptocurrency exchange with proper relationships and encryption for sensitive data.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java wallet entities and help me create TypeORM equivalents."
      },
      {
        step: 5,
        title: "Create Database Migrations",
        instructions: [
          "Generate migration: `npm run typeorm migration:generate -- -n InitialSchema`",
          "Review generated migration file",
          "Run migration: `npm run typeorm migration:run`",
          "Verify tables created in database"
        ],
        code: `npm run typeorm migration:generate -- -n InitialSchema
npm run typeorm migration:run`,
        expectedResult: "All 81 tables created in database",
        aiPrompt: "Help me generate and run TypeORM migrations for a cryptocurrency exchange database with 81 tables. I need to create the initial schema migration.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original database has 81 tables. Please help me create TypeORM migrations to match the existing schema."
      },
      {
        step: 6,
        title: "Set Up JWT Authentication",
        instructions: [
          "Create `JwtStrategy` implementing PassportStrategy",
          "Create `JwtAuthGuard`",
          "Configure JWT module in auth module",
          "Set up token generation and validation"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "JWT authentication working",
        aiPrompt: "Help me set up JWT authentication in NestJS with Passport. I need JWT strategy, guards, and token generation/validation.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java JWT configuration and help me implement the same in NestJS using Passport."
      },
      {
        step: 7,
        title: "Implement RBAC Guards",
        instructions: [
          "Create `RolesGuard` that checks user roles",
          "Create `@Roles()` decorator",
          "Create `@Privileges()` decorator",
          "Implement privilege checking logic"
        ],
        code: `@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  
  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) return true;
    
    const { user } = context.switchToHttp().getRequest();
    return requiredRoles.some(role => user.roles?.includes(role));
  }
}`,
        expectedResult: "RBAC guards working",
        aiPrompt: "Help me implement RBAC (Role-Based Access Control) guards in NestJS with decorators for roles and privileges.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java security configuration and help me implement RBAC guards."
      },
      {
        step: 8,
        title: "Implement 2FA Support",
        instructions: [
          "Install speakeasy: `npm install speakeasy qrcode`",
          "Create 2FA service for TOTP generation",
          "Implement QR code generation",
          "Create 2FA verification logic"
        ],
        code: `import * as speakeasy from 'speakeasy';
import * as qrcode from 'qrcode';

async generate2FASecret(userId: number): Promise<{ secret: string; qrCode: string }> {
  const secret = speakeasy.generateSecret({ name: \`BitniTex-\${userId}\` });
  const qrCode = await qrcode.toDataURL(secret.otpauth_url);
  return { secret: secret.base32, qrCode };
}`,
        expectedResult: "2FA can be enabled and verified",
        aiPrompt: "Help me implement 2FA (Two-Factor Authentication) in NestJS using TOTP with speakeasy and QR code generation.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java 2FA implementation and help me implement the same in NestJS."
      }
    ],
    nextTask: "Level3_CustomerIdentity",
    unlockMessage: "🔐 Database and authentication ready! Now build customer management!"
  },

  Level3_CustomerIdentity: {
    order: 3,
    title: "🎮 Level 3: Customer & Identity Management",
    description: "Build customer service with registration, authentication, KYC orchestration, profile management, and customer controller with all endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Customer Service",
        instructions: [
          "Generate service: `nest g service customers`",
          "Import Customer entity repository",
          "Import EmailService and SMSService",
          "Set up TypeORM repository"
        ],
        code: "nest g service customers",
        expectedResult: "Customer service created",
        aiPrompt: "Help me create a CustomerService for a NestJS cryptocurrency exchange. I need to set up the service with TypeORM repository injection.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/CustomerService.java and help me create the NestJS equivalent."
      },
      {
        step: 2,
        title: "Implement User Registration",
        instructions: [
          "Create `register()` method",
          "Validate email uniqueness",
          "Hash password with bcrypt",
          "Create customer entity",
          "Send welcome email",
          "Return RegisterResponseDto"
        ],
        code: `async register(userDTO: RegisterDto): Promise<RegisterResponseDto> {
  const hashedPassword = await bcrypt.hash(userDTO.password, 10);
  const customer = this.customerRepository.create({
    ...userDTO,
    password_hash: hashedPassword
  });
  await this.emailService.sendWelcomeEmail(customer.email);
  return { customer, message: 'Registration successful' };
}`,
        expectedResult: "Users can register successfully",
        aiPrompt: "Help me implement user registration in NestJS with password hashing, email validation, and welcome email sending.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerService register method and help me implement the same in NestJS."
      },
      {
        step: 3,
        title: "Implement Authentication",
        instructions: [
          "Create `authenticate()` method",
          "Find customer by email",
          "Verify password with bcrypt",
          "Check account status",
          "Return customer entity",
          "Log authentication attempt"
        ],
        code: `async authenticate(email: string, password: string): Promise<Customer> {
  const customer = await this.customerRepository.findOne({ where: { email } });
  if (!customer) throw new UnauthorizedException('Invalid credentials');
  
  const isValid = await bcrypt.compare(password, customer.password_hash);
  if (!isValid) throw new UnauthorizedException('Invalid credentials');
  
  return customer;
}`,
        expectedResult: "User authentication works",
        aiPrompt: "Help me implement user authentication in NestJS with password verification and account status checking.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java authentication logic and help me implement the same."
      },
      {
        step: 4,
        title: "Implement KYC Submission",
        instructions: [
          "Create `submitKYC()` method",
          "Accept KYC documents (ID, selfie, etc.)",
          "Save files to storage",
          "Update customer KYC status to 'PENDING'",
          "Notify admins for review",
          "Return KYC status"
        ],
        code: `async submitKYC(customerId: number, kycDTO: KycDto, files: Express.Multer.File[]): Promise<KYCStatus> {
  // Save files
  // Update customer KYC status
  // Notify admins
  return kycStatus;
}`,
        expectedResult: "KYC documents can be submitted",
        aiPrompt: "Help me implement KYC document submission in NestJS with file handling and status management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java KYC submission logic and help me implement the same."
      },
      {
        step: 5,
        title: "Create Customer Controller",
        instructions: [
          "Generate controller: `nest g controller customers`",
          "Create `POST /api/users/register` endpoint",
          "Create `POST /api/users/login` endpoint",
          "Create `GET /api/users/profile` endpoint",
          "Create `PUT /api/users/kyc` endpoint",
          "Add DTOs and validation"
        ],
        code: `@Post('register')
async register(@Body() dto: RegisterDto) {
  return this.customerService.register(dto);
}

@Post('login')
async login(@Body() dto: LoginDto) {
  const customer = await this.customerService.authenticate(dto.email, dto.password);
  const token = this.jwtService.sign({ sub: customer.id, email: customer.email });
  return { token, customer };
}`,
        expectedResult: "Customer endpoints working",
        aiPrompt: "Help me create CustomerController endpoints for registration, login, profile, and KYC in NestJS.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/CustomerController.java and help me create the NestJS equivalent."
      }
    ],
    nextTask: "Level4_Notifications",
    unlockMessage: "👥 Customer management ready! Now build notification services!"
  },

  Level4_Notifications: {
    order: 4,
    title: "🎮 Level 4: Notification Services",
    description: "Build EmailService, SMSService, and NotificationService for user communications, OTP delivery, alerts, and in-app notifications.",
    steps: [
      {
        step: 1,
        title: "Create Email Service",
        instructions: [
          "Install nodemailer: `npm install nodemailer @types/nodemailer`",
          "Create EmailService with SMTP configuration",
          "Implement `sendEmail()` method",
          "Create email templates (welcome, OTP, password reset)"
        ],
        code: `import * as nodemailer from 'nodemailer';

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
}`,
        expectedResult: "Emails can be sent",
        aiPrompt: "Help me create an EmailService in NestJS using nodemailer for sending emails with SMTP configuration.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java EmailService and help me implement the same in NestJS."
      },
      {
        step: 2,
        title: "Create SMS Service",
        instructions: [
          "Create SMSService with SMS provider integration",
          "Implement `sendSMS()` method",
          "Implement `sendOTP()` method",
          "Configure SMS provider credentials"
        ],
        code: `@Injectable()
export class SMSService {
  async sendSMS(phone: string, message: string) {
    // Integrate with SMS provider API
    // Send SMS
  }
  
  async sendOTP(phone: string, code: string) {
    await this.sendSMS(phone, \`Your OTP code is: \${code}\`);
  }
}`,
        expectedResult: "SMS can be sent",
        aiPrompt: "Help me create an SMSService in NestJS for sending SMS messages and OTP codes.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java SMSService and help me implement the same."
      },
      {
        step: 3,
        title: "Create Notification Service",
        instructions: [
          "Create Notification entity",
          "Create NotificationService",
          "Implement `createNotification()` method",
          "Implement `markAsRead()` method",
          "Add notification repository"
        ],
        code: `@Entity('notifications')
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
}`,
        expectedResult: "Notifications can be created and managed",
        aiPrompt: "Help me create a NotificationService in NestJS for in-app notifications with read/unread status.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java NotificationService and help me implement the same."
      }
    ],
    nextTask: "Level5_WalletServices",
    unlockMessage: "📧 Notifications ready! Now build wallet services!"
  },

  Level5_WalletServices: {
    order: 5,
    title: "🎮 Level 5: Wallet Services",
    description: "Build WalletService, CustomerWalletService, DepositService, and WithdrawalService for HD wallet management, balance operations, deposits, and withdrawals.",
    steps: [
      {
        step: 1,
        title: "Create Wallet Service",
        instructions: [
          "Generate service: `nest g service wallets`",
          "Install HD wallet libraries: `npm install bip32 bip39 bitcoinjs-lib`",
          "Create HD wallet creation logic with BIP32/BIP44",
          "Implement mnemonic generation and storage"
        ],
        code: `import * as bip39 from 'bip39';
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
}`,
        expectedResult: "HD wallets can be created",
        aiPrompt: "Help me create a WalletService in NestJS for HD wallet creation using BIP32/BIP44 with mnemonic generation and encryption.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/WalletService.java and help me implement HD wallet creation."
      },
      {
        step: 2,
        title: "Implement Address Generation",
        instructions: [
          "Create `generateAddress()` method",
          "Support multiple chains (ETH, TRON, BTC, etc.)",
          "Derive addresses from HD wallet",
          "Store addresses in database"
        ],
        code: `async generateAddress(walletId: number, network: string, index: number): Promise<WalletAddress> {
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
}`,
        expectedResult: "Addresses can be generated for all networks",
        aiPrompt: "Help me implement multi-chain address generation in NestJS for ETH, TRON, BTC, and other networks.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java address generation logic and help me implement the same."
      },
      {
        step: 3,
        title: "Create Customer Wallet Service",
        instructions: [
          "Create CustomerWalletService",
          "Implement `getBalance()` for all coins",
          "Implement `updateBalance()` (credit/debit)",
          "Implement `lockFunds()` and `unlockFunds()` for orders"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Balance operations working",
        aiPrompt: "Help me create a CustomerWalletService in NestJS for balance management with credit, debit, and locking operations.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerWalletService and help me implement the same."
      },
      {
        step: 4,
        title: "Create Deposit Service",
        instructions: [
          "Create DepositService",
          "Implement `trackDeposit()` method",
          "Implement `confirmDeposit()` method",
          "Handle deposit webhooks from payment gateways"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Deposits can be tracked and confirmed",
        aiPrompt: "Help me create a DepositService in NestJS for tracking and confirming deposits from payment gateways.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java DepositService and help me implement the same."
      },
      {
        step: 5,
        title: "Create Withdrawal Service",
        instructions: [
          "Create WithdrawalService",
          "Implement `createRequest()` method",
          "Implement `approveWithdrawal()` method",
          "Implement `rejectWithdrawal()` method",
          "Process withdrawals (create blockchain transactions)"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Withdrawals can be created and processed",
        aiPrompt: "Help me create a WithdrawalService in NestJS for withdrawal request management and processing.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java WithdrawalService and help me implement the same."
      }
    ],
    nextTask: "Level6_Blockchain",
    unlockMessage: "💰 Wallet services ready! Now integrate with blockchain!"
  },

  Level6_Blockchain: {
    order: 6,
    title: "🎮 Level 6: Blockchain Integration",
    description: "Build ApieService for multi-chain blockchain integration supporting ETH, TRON, XRP, XLM, BTC, BSC, Dash, and Stellar networks.",
    steps: [
      {
        step: 1,
        title: "Set Up Apie HTTP Client",
        instructions: [
          "Create ApieService",
          "Install axios: `npm install axios`",
          "Configure HTTP client with retry logic",
          "Set up base URL and authentication"
        ],
        code: `import axios, { AxiosInstance } from 'axios';

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
}`,
        expectedResult: "HTTP client configured",
        aiPrompt: "Help me set up an HTTP client in NestJS for the Apie blockchain service with authentication and retry logic.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService HTTP client setup and help me implement the same."
      },
      {
        step: 2,
        title: "Implement Multi-Chain Configuration",
        instructions: [
          "Create chain configuration interface",
          "Configure supported chains (ETH, TRON, BTC, etc.)",
          "Set up chain-specific endpoints",
          "Create chain factory pattern"
        ],
        code: `interface ChainConfig {
  name: string;
  network: string;
  apiEndpoint: string;
  explorerUrl: string;
}

const CHAIN_CONFIGS: Record<string, ChainConfig> = {
  ETH: { name: 'Ethereum', network: 'mainnet', apiEndpoint: '/eth', explorerUrl: 'https://etherscan.io' },
  TRON: { name: 'TRON', network: 'mainnet', apiEndpoint: '/tron', explorerUrl: 'https://tronscan.org' },
  // ... other chains
};`,
        expectedResult: "Multi-chain configuration ready",
        aiPrompt: "Help me set up multi-chain configuration in NestJS for supporting multiple blockchain networks.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java blockchain configuration and help me implement the same."
      },
      {
        step: 3,
        title: "Implement Wallet Operations",
        instructions: [
          "Create `createHDWallet()` method",
          "Create `generateAddress()` method",
          "Support all chains (ETH, TRON, BTC, XRP, XLM, BSC, Dash, Stellar)",
          "Handle chain-specific address formats"
        ],
        code: `async createHDWallet(network: string): Promise<{ walletId: string; address: string }> {
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
}`,
        expectedResult: "Wallet operations work for all chains",
        aiPrompt: "Help me implement wallet operations in NestJS for multiple blockchain networks using the Apie API.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService wallet operations and help me implement the same."
      },
      {
        step: 4,
        title: "Implement Transaction Operations",
        instructions: [
          "Create `createTransaction()` method",
          "Create `signTransaction()` method",
          "Create `broadcastTransaction()` method",
          "Implement `getTransactionStatus()` method"
        ],
        code: `async createTransaction(network: string, from: string, to: string, amount: string): Promise<any> {
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
}`,
        expectedResult: "Transactions can be created and broadcast",
        aiPrompt: "Help me implement transaction operations in NestJS for creating, signing, and broadcasting blockchain transactions.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService transaction operations and help me implement the same."
      },
      {
        step: 5,
        title: "Implement Balance Queries",
        instructions: [
          "Create `getBalance()` method for all chains",
          "Implement `getTransactionHistory()` method",
          "Add transaction confirmation checking",
          "Handle webhook events from blockchain"
        ],
        code: `async getBalance(network: string, address: string): Promise<string> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.get(\`\${config.apiEndpoint}/balance/\${address}\`);
  return response.data.balance;
}

async checkConfirmations(network: string, txHash: string): Promise<number> {
  const config = CHAIN_CONFIGS[network];
  const response = await this.httpClient.get(\`\${config.apiEndpoint}/transaction/\${txHash}/confirmations\`);
  return response.data.confirmations;
}`,
        expectedResult: "Balance queries and transaction tracking working",
        aiPrompt: "Help me implement balance queries and transaction confirmation checking in NestJS for all supported blockchain networks.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ApieService balance and transaction methods and help me implement the same."
      }
    ],
    nextTask: "Level7_TradingEngine",
    unlockMessage: "⛓️ Blockchain integration ready! Now build the trading engine!"
  },

  Level7_TradingEngine: {
    order: 7,
    title: "🎮 Level 7: Trading Engine",
    description: "Build OrderService and TradeService - the core trading engine with order matching, trade execution, order book management, and trade history.",
    steps: [
      {
        step: 1,
        title: "Create Order Service Structure",
        instructions: [
          "Generate service: `nest g service orders`",
          "Create Order entity repository",
          "Set up in-memory order book data structure",
          "Create order queue management"
        ],
        code: `@Injectable()
export class OrderService {
  private orderBook = new Map<string, { bids: Order[], asks: Order[] }>();
  private pendingOrders = new Map<number, Order>();
  
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>
  ) {}
}`,
        expectedResult: "Order service structure created",
        aiPrompt: "Help me create an OrderService in NestJS for a cryptocurrency exchange with in-memory order book management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/OrderService.java and help me create the NestJS equivalent."
      },
      {
        step: 2,
        title: "Implement Order Creation Logic",
        instructions: [
          "Create `createOrder()` method",
          "Validate order (price, amount, balance)",
          "Lock funds in customer wallet",
          "Add order to order book or execute immediately",
          "Persist order to database"
        ],
        code: `async createOrder(customerId: number, dto: CreateOrderDto): Promise<Order> {
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
}`,
        expectedResult: "Orders can be created and matched",
        aiPrompt: "Help me implement order creation logic in NestJS with validation, balance locking, and immediate matching.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OrderService createOrder method and help me implement the same."
      },
      {
        step: 3,
        title: "Implement Order Matching Engine",
        instructions: [
          "Create `matchOrders()` method",
          "Implement price-time priority matching",
          "Match buy orders with sell orders",
          "Execute trades when orders match",
          "Update order book after matching"
        ],
        code: `async matchOrders(buyOrder: Order, sellOrder: Order): Promise<Trade | null> {
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
}`,
        expectedResult: "Orders can be matched and trades executed",
        aiPrompt: "Help me implement an order matching engine in NestJS with price-time priority matching algorithm.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OrderService matching logic and help me implement the same."
      },
      {
        step: 4,
        title: "Implement Trade Service",
        instructions: [
          "Create TradeService",
          "Implement `executeTrade()` method",
          "Update balances for buyer and seller",
          "Create trade records",
          "Calculate trade statistics"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Trades can be executed and balances updated",
        aiPrompt: "Help me implement trade execution in NestJS with balance transfers and trade record creation.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/TradeService.java and help me implement the same."
      },
      {
        step: 5,
        title: "Implement Scheduled Tasks",
        instructions: [
          "Install @nestjs/schedule: `npm install @nestjs/schedule`",
          "Create scheduled task for order expiration",
          "Create scheduled task for stop-limit order triggers",
          "Create scheduled task for order book cleanup"
        ],
        code: `import { Injectable } from '@nestjs/common';
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
}`,
        expectedResult: "Scheduled tasks running",
        aiPrompt: "Help me implement scheduled tasks in NestJS for order expiration and stop-limit order checking.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java scheduled tasks and help me implement the same using @nestjs/schedule."
      }
    ],
    nextTask: "Level8_MarketManagement",
    unlockMessage: "💹 Trading engine ready! Now manage markets and coins!"
  },

  Level8_MarketManagement: {
    order: 8,
    title: "🎮 Level 8: Market & Coin Management",
    description: "Build MarketService, CoinService, MarketController, and CoinController for trading pair management, coin management, and price updates.",
    steps: [
      {
        step: 1,
        title: "Create Market Service",
        instructions: [
          "Generate service: `nest g service markets`",
          "Create Market entity repository",
          "Implement market CRUD operations",
          "Implement market activation/deactivation"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Markets can be created and managed",
        aiPrompt: "Help me create a MarketService in NestJS for trading pair management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/MarketService.java and help me implement the same."
      },
      {
        step: 2,
        title: "Create Coin Service",
        instructions: [
          "Generate service: `nest g service coins`",
          "Create Coin and Network entities",
          "Implement coin CRUD operations",
          "Implement price update logic"
        ],
        code: `@Injectable()
export class CoinService {
  async updatePrice(coinId: number, price: number) {
    const coin = await this.coinRepository.findOne({ where: { id: coinId } });
    coin.currentPrice = price;
    coin.lastPriceUpdate = new Date();
    return await this.coinRepository.save(coin);
  }
}`,
        expectedResult: "Coins can be managed and prices updated",
        aiPrompt: "Help me create a CoinService in NestJS for cryptocurrency management and price updates.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/CoinService.java and help me implement the same."
      },
      {
        step: 3,
        title: "Create Market and Coin Controllers",
        instructions: [
          "Generate controllers: `nest g controller markets` and `nest g controller coins`",
          "Create market endpoints (list, create, activate)",
          "Create coin endpoints (list, create, update price)",
          "Add DTOs and validation"
        ],
        code: `@Controller('markets')
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
}`,
        expectedResult: "Market and coin endpoints working",
        aiPrompt: "Help me create MarketController and CoinController in NestJS with proper endpoints and guards.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java MarketController and CoinController and help me implement the same."
      }
    ],
    nextTask: "Level9_TradingControllers",
    unlockMessage: "📊 Markets ready! Now build trading controllers!"
  },

  Level9_TradingControllers: {
    order: 9,
    title: "🎮 Level 9: Trading Controllers",
    description: "Build OrderController and TradeController with all trading endpoints, order book API, trade history, and real-time updates.",
    steps: [
      {
        step: 1,
        title: "Create Order Controller",
        instructions: [
          "Generate controller: `nest g controller orders`",
          "Create `POST /api/orders/buy` endpoint",
          "Create `POST /api/orders/sell` endpoint",
          "Create `DELETE /api/orders/:id` endpoint",
          "Create `GET /api/orders/order-book` endpoint"
        ],
        code: `@Controller('orders')
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
}`,
        expectedResult: "Order endpoints working",
        aiPrompt: "Help me create OrderController in NestJS with buy, sell, cancel, and order book endpoints.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/OrderController.java and help me implement the same."
      },
      {
        step: 2,
        title: "Create Trade Controller",
        instructions: [
          "Generate controller: `nest g controller trades`",
          "Create `GET /api/trades` endpoint (user history)",
          "Create `GET /api/trades/history` endpoint (market history)",
          "Create `GET /api/trades/admin` endpoint",
          "Add pagination and filtering"
        ],
        code: `@Controller('trades')
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
}`,
        expectedResult: "Trade endpoints working",
        aiPrompt: "Help me create TradeController in NestJS with trade history endpoints and filtering.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/TradeController.java and help me implement the same."
      }
    ],
    nextTask: "Level10_WalletController",
    unlockMessage: "💹 Trading controllers ready! Now build wallet controller!"
  },

  Level10_WalletController: {
    order: 10,
    title: "🎮 Level 10: Wallet Controller",
    description: "Build WalletController with HD wallet creation, address generation, withdrawal requests, balance queries, and transaction history endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Wallet Controller",
        instructions: [
          "Generate controller: `nest g controller wallets`",
          "Create `POST /api/wallets` endpoint (create HD wallet)",
          "Create `POST /api/wallets/generate-address` endpoint",
          "Create `GET /api/wallets/balance` endpoint",
          "Create `POST /api/wallets/withdrawal-request` endpoint"
        ],
        code: `@Controller('wallets')
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
}`,
        expectedResult: "Wallet endpoints working",
        aiPrompt: "Help me create WalletController in NestJS with wallet creation, address generation, balance, and withdrawal endpoints.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/WalletController.java and help me implement the same."
      }
    ],
    nextTask: "Level11_PaymentGateways",
    unlockMessage: "💰 Wallet controller ready! Now integrate payment gateways!"
  },

  Level11_PaymentGateways: {
    order: 11,
    title: "🎮 Level 11: Payment Gateway Integration",
    description: "Build PaymentGateway service with integrations for Vandar, Jibit, NextPay, RayanPay, Sadad, and Zarinpal. Handle deposits, withdrawals, callbacks, and settlements.",
    steps: [
      {
        step: 1,
        title: "Create Payment Gateway Interface",
        instructions: [
          "Create `IPaymentGateway` interface",
          "Define methods: `deposit()`, `withdraw()`, `verifyCallback()`",
          "Create gateway factory pattern",
          "Set up gateway configuration"
        ],
        code: `export interface IPaymentGateway {
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
}`,
        expectedResult: "Payment gateway interface and factory created",
        aiPrompt: "Help me create a payment gateway interface and factory pattern in NestJS for multiple gateway integrations.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java payment gateway interfaces and help me implement the same."
      },
      {
        step: 2,
        title: "Implement Vandar Gateway",
        instructions: [
          "Create VandarService implementing IPaymentGateway",
          "Implement deposit method calling Vandar API",
          "Implement callback verification",
          "Handle Vandar-specific response format"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Vandar integration working",
        aiPrompt: "Help me implement Vandar payment gateway integration in NestJS with deposit and callback handling.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java VandarService and help me implement the same."
      },
      {
        step: 3,
        title: "Implement Other Gateways",
        instructions: [
          "Implement JibitService",
          "Implement NextPayService",
          "Implement RayanPayService",
          "Implement SadadService",
          "Implement ZarinpalService"
        ],
        code: `// Similar implementation for each gateway
@Injectable()
export class JibitService implements IPaymentGateway {
  async deposit(request: GatewayDepositDto, customer: Customer) {
    // Jibit-specific implementation
  }
}`,
        expectedResult: "All gateways integrated",
        aiPrompt: "Help me implement multiple payment gateway integrations (Jibit, NextPay, RayanPay, Sadad, Zarinpal) in NestJS.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java payment gateway services and help me implement the same."
      },
      {
        step: 4,
        title: "Implement Callback Handler",
        instructions: [
          "Create unified callback endpoint",
          "Verify callback signature for each gateway",
          "Update deposit/withdrawal status",
          "Credit customer wallet on successful deposit"
        ],
        code: `@Post('callback/:gateway')
async handleCallback(@Param('gateway') gateway: string, @Body() data: any) {
  const gatewayService = this.gatewayFactory.getService(gateway);
  const verified = await gatewayService.verifyCallback(data);
  
  if (verified && data.status === 'SUCCESS') {
    await this.depositService.confirmDeposit(data.transactionId);
  }
}`,
        expectedResult: "Callbacks processed correctly",
        aiPrompt: "Help me implement a unified callback handler in NestJS for all payment gateways with signature verification.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java callback handlers and help me implement the same."
      }
    ],
    nextTask: "Level12_KYCIdentity",
    unlockMessage: "💳 Payment gateways ready! Now build KYC services!"
  },

  Level12_KYCIdentity: {
    order: 12,
    title: "🎮 Level 12: KYC & Identity Services",
    description: "Build FinoTechService, JibitService (KYC), BankAccountService, and UserAccountLevelService for identity verification and KYC processing.",
    steps: [
      {
        step: 1,
        title: "Create FinoTech Service",
        instructions: [
          "Create FinoTechService",
          "Implement `validateNationalID()` method",
          "Implement `cardToIBAN()` method",
          "Implement `verifyBankAccount()` method",
          "Integrate with FinoTech API"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "FinoTech integration working",
        aiPrompt: "Help me create a FinoTechService in NestJS for National ID validation and bank account verification.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java FinoTechService and help me implement the same."
      },
      {
        step: 2,
        title: "Create Jibit KYC Service",
        instructions: [
          "Create JibitService for KYC operations",
          "Implement `matchIBAN()` method",
          "Implement `matchCard()` method",
          "Implement `identitySimilarity()` method"
        ],
        code: `@Injectable()
export class JibitService {
  async matchIBAN(iban: string, nationalId: string): Promise<boolean> {
    // Call Jibit API for IBAN matching
  }
  
  async identitySimilarity(nationalId: string, firstName: string, lastName: string): Promise<number> {
    // Call Jibit API for identity similarity check
  }
}`,
        expectedResult: "Jibit KYC integration working",
        aiPrompt: "Help me create a JibitService in NestJS for KYC operations including IBAN matching and identity verification.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java JibitService KYC methods and help me implement the same."
      },
      {
        step: 3,
        title: "Create Bank Account Service",
        instructions: [
          "Create BankAccountService",
          "Implement bank account management",
          "Implement IBAN validation",
          "Link bank accounts to customers"
        ],
        code: `@Injectable()
export class BankAccountService {
  async addBankAccount(customerId: number, iban: string, bankName: string) {
    // Validate IBAN
    // Create bank account record
  }
}`,
        expectedResult: "Bank account management working",
        aiPrompt: "Help me create a BankAccountService in NestJS for managing customer bank accounts with IBAN validation.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java BankAccountService and help me implement the same."
      }
    ],
    nextTask: "Level13_AdminRBAC",
    unlockMessage: "🆔 KYC services ready! Now build admin and RBAC!"
  },

  Level13_AdminRBAC: {
    order: 13,
    title: "🎮 Level 13: Admin & RBAC Management",
    description: "Build AdminService, RoleService, AdminController, and RolesController for admin user management, RBAC, system configuration, and administrative operations.",
    steps: [
      {
        step: 1,
        title: "Create Admin Service",
        instructions: [
          "Generate service: `nest g service admins`",
          "Create Admin entity repository",
          "Implement admin CRUD operations",
          "Implement admin authentication"
        ],
        code: `@Injectable()
export class AdminService {
  async createAdmin(dto: CreateAdminDto): Promise<Admin> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const admin = this.adminRepository.create({
      ...dto,
      password_hash: hashedPassword
    });
    return await this.adminRepository.save(admin);
  }
}`,
        expectedResult: "Admin service working",
        aiPrompt: "Help me create an AdminService in NestJS for admin user management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/AdminService.java and help me implement the same."
      },
      {
        step: 2,
        title: "Create Role Service",
        instructions: [
          "Generate service: `nest g service roles`",
          "Create Role and Privilege entities",
          "Implement role CRUD operations",
          "Implement privilege management",
          "Implement role assignment"
        ],
        code: `@Injectable()
export class RoleService {
  async assignRole(userId: number, roleId: number) {
    // Assign role to user
  }
  
  async checkPrivilege(userId: number, privilege: string): Promise<boolean> {
    // Check if user has privilege
  }
}`,
        expectedResult: "Role service working",
        aiPrompt: "Help me create a RoleService in NestJS for RBAC with role and privilege management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/RoleService.java and help me implement the same."
      },
      {
        step: 3,
        title: "Create Admin and Roles Controllers",
        instructions: [
          "Generate controllers: `nest g controller admins` and `nest g controller roles`",
          "Create admin endpoints (login, create, list)",
          "Create role endpoints (list, create, assign)",
          "Add proper guards and decorators"
        ],
        code: `@Controller('admins')
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
}`,
        expectedResult: "Admin and role endpoints working",
        aiPrompt: "Help me create AdminController and RolesController in NestJS with proper RBAC guards.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java AdminController and RolesController and help me implement the same."
      }
    ],
    nextTask: "Level14_OTCExchange",
    unlockMessage: "👨‍💼 Admin system ready! Now build OTC exchange!"
  },

  Level14_OTCExchange: {
    order: 14,
    title: "🎮 Level 14: OTC Exchange",
    description: "Build ExchangeActionService and ExchangeActionController for over-the-counter exchange operations with buy/sell orders and admin approval workflow.",
    steps: [
      {
        step: 1,
        title: "Create Exchange Action Service",
        instructions: [
          "Generate service: `nest g service exchange`",
          "Create ExchangeOrder entity",
          "Implement OTC buy order creation",
          "Implement OTC sell order creation"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "OTC orders can be created",
        aiPrompt: "Help me create an ExchangeActionService in NestJS for OTC (over-the-counter) exchange operations.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ExchangeActionService and help me implement the same."
      },
      {
        step: 2,
        title: "Implement Order Approval",
        instructions: [
          "Implement `approveOrder()` method",
          "Transfer funds between parties",
          "Update order status",
          "Notify users"
        ],
        code: `async approveOrder(orderId: number): Promise<ExchangeOrder> {
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
}`,
        expectedResult: "Orders can be approved and funds transferred",
        aiPrompt: "Help me implement OTC order approval logic in NestJS with fund transfers.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java OTC approval logic and help me implement the same."
      },
      {
        step: 3,
        title: "Create Exchange Controller",
        instructions: [
          "Generate controller: `nest g controller exchange`",
          "Create `POST /api/exchange/buy` endpoint",
          "Create `POST /api/exchange/sell` endpoint",
          "Create `POST /api/exchange/approve-order` endpoint (admin only)"
        ],
        code: `@Controller('exchange')
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
}`,
        expectedResult: "Exchange endpoints working",
        aiPrompt: "Help me create ExchangeActionController in NestJS with OTC buy, sell, and approval endpoints.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java and help me implement the same."
      }
    ],
    nextTask: "Level15_SupportContent",
    unlockMessage: "🔄 OTC exchange ready! Now build support and content!"
  },

  Level15_SupportContent: {
    order: 15,
    title: "🎮 Level 15: Support & Content Management",
    description: "Build TicketService, BlogService, FileService, TicketController, and BlogController for customer support and content management.",
    steps: [
      {
        step: 1,
        title: "Create Ticket Service",
        instructions: [
          "Generate service: `nest g service tickets`",
          "Create Ticket and TicketMessage entities",
          "Implement ticket CRUD operations",
          "Implement message handling with file attachments"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Ticket service working",
        aiPrompt: "Help me create a TicketService in NestJS for customer support ticket management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/TicketService.java and help me implement the same."
      },
      {
        step: 2,
        title: "Create Blog Service",
        instructions: [
          "Generate service: `nest g service blog`",
          "Create BlogPost entity",
          "Implement blog CRUD operations",
          "Implement publishing workflow",
          "Implement SEO and image handling"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Blog service working",
        aiPrompt: "Help me create a BlogService in NestJS for content management with publishing workflow.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/BlogService.java and help me implement the same."
      },
      {
        step: 3,
        title: "Create File Service",
        instructions: [
          "Create FileService",
          "Implement file upload handling",
          "Implement file validation (type, size)",
          "Implement file storage (local or cloud)"
        ],
        code: `@Injectable()
export class FileService {
  async saveFile(file: Express.Multer.File, path: string): Promise<string> {
    // Validate file
    // Save to storage
    // Return file URL
  }
  
  async deleteFile(path: string): Promise<void> {
    // Delete file from storage
  }
}`,
        expectedResult: "File service working",
        aiPrompt: "Help me create a FileService in NestJS for file upload, storage, and management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java FileService and help me implement the same."
      },
      {
        step: 4,
        title: "Create Ticket and Blog Controllers",
        instructions: [
          "Generate controllers: `nest g controller tickets` and `nest g controller blog`",
          "Create ticket endpoints (create, list, add message)",
          "Create blog endpoints (list, create, update, publish)",
          "Add file upload support"
        ],
        code: `@Controller('tickets')
export class TicketController {
  @Post()
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async createTicket(@Request() req, @Body() dto: CreateTicketDto, @UploadedFile() file?: Express.Multer.File) {
    return this.ticketService.createTicket(req.user.id, dto, file);
  }
}`,
        expectedResult: "Ticket and blog endpoints working",
        aiPrompt: "Help me create TicketController and BlogController in NestJS with file upload support.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java TicketController and BlogController and help me implement the same."
      }
    ],
    nextTask: "Level16_Promotional",
    unlockMessage: "🎫 Support system ready! Now build promotional features!"
  },

  Level16_Promotional: {
    order: 16,
    title: "🎮 Level 16: Promotional Features",
    description: "Build GiftCodeService, ReferralCodeService, GiftCodeController, and ReferralCodeController for gift codes, referral programs, and promotional campaigns.",
    steps: [
      {
        step: 1,
        title: "Create Gift Code Service",
        instructions: [
          "Generate service: `nest g service gift-codes`",
          "Create GiftCode entity",
          "Implement gift code generation",
          "Implement gift code validation",
          "Implement gift code redemption"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Gift code service working",
        aiPrompt: "Help me create a GiftCodeService in NestJS for promotional gift code management.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/GiftCodeService.java and help me implement the same."
      },
      {
        step: 2,
        title: "Create Referral Code Service",
        instructions: [
          "Generate service: `nest g service referrals`",
          "Create ReferralCode and ReferralRelationship entities",
          "Implement referral code generation",
          "Implement referral tracking",
          "Implement reward calculation and distribution"
        ],
        code: `@Injectable()
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
}`,
        expectedResult: "Referral service working",
        aiPrompt: "Help me create a ReferralCodeService in NestJS for referral program management with reward tracking.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read src/main/java/ir/arnitex/backend/service/ReferralCodeService.java and help me implement the same."
      },
      {
        step: 3,
        title: "Create Gift and Referral Controllers",
        instructions: [
          "Generate controllers: `nest g controller gift-codes` and `nest g controller referrals`",
          "Create gift code endpoints (create, redeem, list)",
          "Create referral endpoints (create, use, stats)",
          "Add proper guards"
        ],
        code: `@Controller('gift-code')
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
}`,
        expectedResult: "Gift and referral endpoints working",
        aiPrompt: "Help me create GiftCodeController and ReferralCodeController in NestJS with proper endpoints.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java GiftCodeController and ReferralCodeController and help me implement the same."
      }
    ],
    nextTask: "Level17_AdditionalServices",
    unlockMessage: "🎁 Promotional features ready! Now add supporting services!"
  },

  Level17_AdditionalServices: {
    order: 17,
    title: "🎮 Level 17: Additional Services",
    description: "Build ExchangeSettingService, CustomerTokenService, AlarmService, and other supporting services for system configuration and monitoring.",
    steps: [
      {
        step: 1,
        title: "Create Exchange Setting Service",
        instructions: [
          "Create ExchangeSettingService",
          "Implement exchange configuration management",
          "Store settings in database",
          "Provide settings API"
        ],
        code: `@Injectable()
export class ExchangeSettingService {
  async getSetting(key: string): Promise<any> {
    const setting = await this.settingRepository.findOne({ where: { key } });
    return setting?.value;
  }
  
  async updateSetting(key: string, value: any) {
    // Update or create setting
  }
}`,
        expectedResult: "Exchange settings can be managed",
        aiPrompt: "Help me create an ExchangeSettingService in NestJS for managing exchange configuration settings.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java ExchangeSettingService and help me implement the same."
      },
      {
        step: 2,
        title: "Create Customer Token Service",
        instructions: [
          "Create CustomerTokenService",
          "Implement token management for customers",
          "Handle token generation and validation",
          "Store tokens securely"
        ],
        code: `@Injectable()
export class CustomerTokenService {
  async generateToken(customerId: number, purpose: string): Promise<string> {
    // Generate secure token
  }
  
  async validateToken(token: string): Promise<boolean> {
    // Validate token
  }
}`,
        expectedResult: "Token service working",
        aiPrompt: "Help me create a CustomerTokenService in NestJS for managing customer tokens.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java CustomerTokenService and help me implement the same."
      },
      {
        step: 3,
        title: "Create Alarm Service",
        instructions: [
          "Create AlarmService",
          "Implement system alerts and monitoring",
          "Create alarm triggers",
          "Send notifications for alarms"
        ],
        code: `@Injectable()
export class AlarmService {
  async createAlarm(type: string, message: string, severity: string) {
    // Create alarm
    // Send notifications
  }
  
  async checkSystemHealth() {
    // Check system health
    // Trigger alarms if needed
  }
}`,
        expectedResult: "Alarm service working",
        aiPrompt: "Help me create an AlarmService in NestJS for system monitoring and alerts.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please read the Java AlarmService and help me implement the same."
      }
    ],
    nextTask: "Level18_TestingDocumentation",
    unlockMessage: "⚙️ Additional services ready! Now test and document everything!"
  },

  Level18_TestingDocumentation: {
    order: 18,
    title: "🎮 Level 18: Testing & Documentation",
    description: "Write comprehensive unit tests, integration tests, API documentation, and deployment guides for the entire system.",
    steps: [
      {
        step: 1,
        title: "Write Unit Tests",
        instructions: [
          "Install testing dependencies: `npm install --save-dev @nestjs/testing`",
          "Write unit tests for all services",
          "Mock dependencies",
          "Test edge cases and error handling"
        ],
        code: `describe('OrderService', () => {
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
});`,
        expectedResult: "Unit tests passing",
        aiPrompt: "Help me write comprehensive unit tests in NestJS for all services with proper mocking.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write unit tests equivalent to the Java JUnit tests."
      },
      {
        step: 2,
        title: "Write Integration Tests",
        instructions: [
          "Write integration tests for all controllers",
          "Test API endpoints",
          "Test database interactions",
          "Test authentication and authorization"
        ],
        code: `describe('OrderController (e2e)', () => {
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
});`,
        expectedResult: "Integration tests passing",
        aiPrompt: "Help me write integration tests in NestJS for all API endpoints with proper test setup.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write integration tests equivalent to the Java Spring Boot tests."
      },
      {
        step: 3,
        title: "Complete API Documentation",
        instructions: [
          "Ensure all endpoints have Swagger decorators",
          "Add detailed descriptions and examples",
          "Document request/response DTOs",
          "Add authentication requirements"
        ],
        code: `@ApiTags('Orders')
@Controller('orders')
export class OrderController {
  @ApiOperation({ summary: 'Create a buy order' })
  @ApiResponse({ status: 201, description: 'Order created successfully' })
  @ApiBearerAuth()
  @Post('buy')
  async createBuyOrder(@Body() dto: CreateOrderDto) {
    // ...
  }
}`,
        expectedResult: "Complete Swagger documentation",
        aiPrompt: "Help me complete Swagger/OpenAPI documentation in NestJS for all endpoints with proper decorators.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me document all endpoints similar to the Java Swagger annotations."
      },
      {
        step: 4,
        title: "Create Deployment Guide",
        instructions: [
          "Document environment variables",
          "Create Docker configuration",
          "Document database migration process",
          "Create deployment checklist"
        ],
        code: `# Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
CMD ["node", "dist/main"]`,
        expectedResult: "Deployment guide complete",
        aiPrompt: "Help me create a deployment guide for the NestJS cryptocurrency exchange with Docker and environment configuration.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create deployment documentation."
      }
    ],
    nextTask: null,
    unlockMessage: "🎉 Congratulations! Your cryptocurrency exchange is complete! 🚀"
  },

  AuthModule: {
    order: 2,
    title: "🎮 Level 2: Authentication Module",
    description: "Build JWT authentication and guards - Required for all protected routes.",
    steps: [
      {
        step: 1,
        title: "Create Auth Module Structure",
        instructions: [
          "Generate auth module: `nest g module auth`",
          "Generate auth service: `nest g service auth`",
          "Generate auth controller: `nest g controller auth`",
          "Create `src/auth/strategies/jwt.strategy.ts`"
        ],
        code: "nest g module auth\nnest g service auth\nnest g controller auth",
        expectedResult: "Auth module, service, and controller files created",
        aiPrompt: "Help me create the authentication module structure for a NestJS cryptocurrency exchange. I need to generate the auth module, service, and controller using NestJS CLI, and create a JWT strategy file. Show me the commands and the file structure."
      },
      {
        step: 2,
        title: "Implement JWT Strategy",
        instructions: [
          "In `jwt.strategy.ts`, extend `PassportStrategy(Strategy)`",
          "Add `validate()` method that returns user payload",
          "Import `PassportModule` and `JwtModule` in auth module",
          "Configure JWT secret from environment"
        ],
        code: `import { Injectable } from '@nestjs/common';
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
}`,
        expectedResult: "JWT strategy validates tokens correctly",
        aiPrompt: "Help me implement a JWT authentication strategy for NestJS using Passport. I need to create a JwtStrategy class that validates JWT tokens from the Authorization header, extracts the payload, and returns user information. Show me the complete implementation with proper TypeScript types."
      },
      {
        step: 3,
        title: "Create Auth Guards",
        instructions: [
          "Create `src/auth/guards/jwt-auth.guard.ts`",
          "Extend `AuthGuard('jwt')`",
          "Create `src/auth/guards/roles.guard.ts` for RBAC",
          "Create `src/common/decorators/roles.decorator.ts`"
        ],
        code: `import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}`,
        expectedResult: "Guards protect routes from unauthorized access",
        aiPrompt: "Help me create authentication guards for NestJS. I need a JWT auth guard that extends AuthGuard('jwt'), a roles guard for RBAC (Role-Based Access Control), and a roles decorator. Show me how to implement these guards and how to use them to protect routes."
      },
      {
        step: 4,
        title: "Implement Login Endpoint",
        instructions: [
          "In `auth.service.ts`, create `validateUser()` method",
          "Create `login()` method that returns JWT token",
          "In `auth.controller.ts`, add `POST /auth/login` endpoint",
          "Use `@UseGuards(LocalAuthGuard)` if using local strategy"
        ],
        code: `@Post('login')
async login(@Body() loginDto: LoginDto) {
  return this.authService.login(loginDto);
}`,
        expectedResult: "Login endpoint returns JWT token",
        aiPrompt: "Help me implement a login endpoint for a NestJS cryptocurrency exchange. I need to validate user credentials, generate a JWT token, and return it. Show me how to implement the login method in the service and the POST /auth/login endpoint in the controller with proper DTOs."
      },
      {
        step: 5,
        title: "Set Up 2FA Module",
        instructions: [
          "Install: `npm install speakeasy qrcode`",
          "Create `src/auth/two-factor/two-factor.service.ts`",
          "Implement `generateSecret()` and `verifyToken()` methods",
          "Add 2FA endpoints: `/auth/2fa/generate`, `/auth/2fa/verify`"
        ],
        code: "npm install speakeasy qrcode",
        expectedResult: "2FA secret generation and verification working",
        aiPrompt: "Help me implement two-factor authentication (2FA) for a NestJS application using Google Authenticator. I need to generate a secret, create a QR code, and verify TOTP tokens. Show me how to use speakeasy and qrcode libraries to implement this."
      }
    ],
    nextTask: "DatabaseSetup",
    unlockMessage: "🔐 Authentication ready! Now set up your database."
  },

  DatabaseSetup: {
    order: 3,
    title: "🎮 Level 3: Database Setup",
    description: "Configure TypeORM and create all 81 entities from the original schema.",
    steps: [
      {
        step: 1,
        title: "Configure TypeORM in App Module",
        aiPrompt: "Help me configure TypeORM in a NestJS application for a cryptocurrency exchange. I need to set up the database connection using MySQL, configure it in the AppModule with proper imports, and set up environment variables for database credentials.",
        instructions: [
          "Import `TypeOrmModule.forRoot()` in `app.module.ts`",
          "Add database connection config from environment",
          "Set `synchronize: false` for production (use migrations)",
          "Set `autoLoadEntities: true`"
        ],
        code: `TypeOrmModule.forRoot({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  autoLoadEntities: true,
  synchronize: false,
})`,
        expectedResult: "Database connection established"
      },
      {
        step: 2,
        title: "Create Identity Entities (Customers, Admins, Roles)",
        instructions: [
          "Create `src/entities/customer.entity.ts`",
          "Create `src/entities/admin.entity.ts`",
          "Create `src/entities/role.entity.ts`",
          "Add relationships: Customer -> Role (Many-to-One)",
          "Copy column definitions from original schema.sql"
        ],
        code: `@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password_hash: string;
  
  // ... more columns
}`,
        expectedResult: "Identity entities created with proper relationships"
      },
      {
        step: 3,
        title: "Create Trading Entities (Orders, Trades, Markets)",
        instructions: [
          "Create `src/entities/order.entity.ts`",
          "Create `src/entities/trade.entity.ts`",
          "Create `src/entities/market.entity.ts`",
          "Add relationships: Order -> Market, Trade -> Order"
        ],
        code: `@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Market)
  market: Market;

  @Column({ type: 'decimal', precision: 20, scale: 8 })
  price: number;
  
  // ... more columns
}`,
        expectedResult: "Trading entities with relationships"
      },
      {
        step: 4,
        title: "Create Wallet Entities",
        instructions: [
          "Create `src/entities/hd-wallet.entity.ts`",
          "Create `src/entities/customer-wallet.entity.ts`",
          "Add relationships: CustomerWallet -> Customer, CustomerWallet -> Coin"
        ],
        code: `@Entity('hd_wallet')
export class HdWallet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  mnemonic: string;
  
  // ... more columns
}`,
        expectedResult: "Wallet entities created"
      },
      {
        step: 5,
        title: "Create Database Migrations",
        instructions: [
          "Install TypeORM CLI: `npm install -D typeorm`",
          "Create migration: `typeorm migration:create -n InitialSchema`",
          "Copy all CREATE TABLE statements from schema.sql",
          "Run migration: `npm run typeorm migration:run`"
        ],
        code: "npm run typeorm migration:run",
        expectedResult: "All tables created in database"
      }
    ],
    nextTask: "CustomerController",
    unlockMessage: "💾 Database ready! Now build the Customer Controller."
  },

  CustomerController: {
    order: 4,
    title: "🎮 Level 4: Customer Controller",
    description: "Build user registration, login, profile, KYC, and 2FA endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Customer Module",
        aiPrompt: "Help me create a Customer Controller for a NestJS cryptocurrency exchange. I need endpoints for user registration, login, profile management, KYC submission, and 2FA. Show me how to generate the module, service, and controller using NestJS CLI, and set up the basic structure.",
        instructions: [
          "Generate module: `nest g module customers`",
          "Generate service: `nest g service customers`",
          "Generate controller: `nest g controller customers`",
          "Import TypeOrmModule.forFeature([Customer])"
        ],
        code: "nest g module customers\nnest g service customers\nnest g controller customers",
        expectedResult: "Customer module structure created",
        aiPrompt: "Help me create a Customer Controller for a NestJS cryptocurrency exchange. I need endpoints for user registration, login, profile management, KYC submission, and 2FA. Show me how to generate the module, service, and controller using NestJS CLI, and set up the basic structure."
      },
      {
        step: 2,
        title: "Implement Registration Endpoint",
        instructions: [
          "Create `create-customer.dto.ts` with validation",
          "In service, hash password using bcrypt",
          "Create customer in database",
          "Return customer data (without password)"
        ],
        code: `@Post('register')
async register(@Body() createCustomerDto: CreateCustomerDto) {
  return this.customersService.create(createCustomerDto);
}`,
        expectedResult: "POST /customers/register creates new user"
      },
      {
        step: 3,
        title: "Implement Login Endpoint",
        instructions: [
          "Create `login.dto.ts` with email and password",
          "Validate credentials in service",
          "Return JWT token using AuthService",
          "Add login history entry"
        ],
        code: `@Post('login')
async login(@Body() loginDto: LoginDto) {
  return this.authService.login(loginDto);
}`,
        expectedResult: "POST /customers/login returns JWT token"
      },
      {
        step: 4,
        title: "Implement Profile Endpoint",
        instructions: [
          "Create `GET /customers/profile` endpoint",
          "Use `@UseGuards(JwtAuthGuard)`",
          "Get user from `@Request()` decorator",
          "Return customer data"
        ],
        code: `@Get('profile')
@UseGuards(JwtAuthGuard)
async getProfile(@Request() req) {
  return this.customersService.findOne(req.user.userId);
}`,
        expectedResult: "GET /customers/profile returns user data"
      },
      {
        step: 5,
        title: "Implement KYC Endpoint",
        instructions: [
          "Create `POST /customers/kyc` endpoint",
          "Accept file uploads (use `@UseInterceptors(FileInterceptor())`)",
          "Save files to storage",
          "Update customer KYC status"
        ],
        code: `@Post('kyc')
@UseGuards(JwtAuthGuard)
@UseInterceptors(FileInterceptor('document'))
async submitKyc(@Request() req, @UploadedFile() file) {
  return this.customersService.submitKyc(req.user.userId, file);
}`,
        expectedResult: "KYC documents can be uploaded"
      },
      {
        step: 6,
        title: "Implement 2FA Endpoints",
        instructions: [
          "Create `POST /customers/2fa/enable`",
          "Create `POST /customers/2fa/verify`",
          "Generate QR code for Google Authenticator",
          "Store 2FA secret in customer record"
        ],
        code: `@Post('2fa/enable')
@UseGuards(JwtAuthGuard)
async enable2FA(@Request() req) {
  return this.customersService.enable2FA(req.user.userId);
}`,
        expectedResult: "2FA can be enabled and verified"
      }
    ],
    nextTask: "OrderController",
    unlockMessage: "👤 Customer management complete! Now build the trading engine."
  },

  OrderController: {
    order: 5,
    title: "🎮 Level 5: Order Controller",
    description: "Build order creation, cancellation, and order book endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Order Module",
        aiPrompt: "Help me create an Order Controller for a NestJS cryptocurrency exchange. I need endpoints to create buy/sell orders, cancel orders, and get the order book. Show me how to structure the controller with proper DTOs, guards, and service integration.",
        instructions: [
          "Generate module: `nest g module orders`",
          "Generate service and controller",
          "Import OrderService and MarketService"
        ],
        code: "nest g module orders\nnest g service orders\nnest g controller orders",
        expectedResult: "Order module created"
      },
      {
        step: 2,
        title: "Implement Create Buy Order",
        instructions: [
          "Create `create-buy-order.dto.ts`",
          "Validate: market_id, price, amount",
          "Check user balance",
          "Lock balance for order",
          "Create order in database"
        ],
        code: `@Post('buy')
@UseGuards(JwtAuthGuard)
async createBuyOrder(@Request() req, @Body() dto: CreateBuyOrderDto) {
  return this.ordersService.createBuyOrder(req.user.userId, dto);
}`,
        expectedResult: "POST /orders/buy creates buy order"
      },
      {
        step: 3,
        title: "Implement Create Sell Order",
        instructions: [
          "Similar to buy order",
          "Check user has enough coins",
          "Lock coin balance",
          "Create sell order"
        ],
        code: `@Post('sell')
@UseGuards(JwtAuthGuard)
async createSellOrder(@Request() req, @Body() dto: CreateSellOrderDto) {
  return this.ordersService.createSellOrder(req.user.userId, dto);
}`,
        expectedResult: "POST /orders/sell creates sell order"
      },
      {
        step: 4,
        title: "Implement Cancel Order",
        instructions: [
          "Create `DELETE /orders/:id`",
          "Verify order belongs to user",
          "Unlock locked balance",
          "Update order status to 'cancelled'"
        ],
        code: `@Delete(':id')
@UseGuards(JwtAuthGuard)
async cancelOrder(@Request() req, @Param('id') id: number) {
  return this.ordersService.cancelOrder(req.user.userId, id);
}`,
        expectedResult: "Orders can be cancelled"
      },
      {
        step: 5,
        title: "Implement Order Book Endpoint",
        instructions: [
          "Create `GET /orders/book/:marketId`",
          "Get all active buy orders (sorted by price DESC)",
          "Get all active sell orders (sorted by price ASC)",
          "Return formatted order book"
        ],
        code: `@Get('book/:marketId')
async getOrderBook(@Param('marketId') marketId: number) {
  return this.ordersService.getOrderBook(marketId);
}`,
        expectedResult: "Order book displays buy/sell orders"
      }
    ],
    nextTask: "OrderService",
    unlockMessage: "📊 Order endpoints ready! Now build the matching engine."
  },

  OrderService: {
    order: 6,
    title: "🎮 Level 6: Order Matching Engine",
    description: "The heart of the exchange - match buy and sell orders automatically.",
    steps: [
      {
        step: 1,
        title: "Implement Order Matching Logic",
        aiPrompt: "Help me implement an order matching engine for a NestJS cryptocurrency exchange. When a new order is created, I need to find matching orders (same market, opposite type, compatible price), prioritize by best price then time, and execute trades. This is the core trading engine functionality.",
        instructions: [
          "When new order created, check for matching orders",
          "Match by: same market, opposite type, price compatibility",
          "Priority: price (best first), then time (first in, first out)",
          "Execute trades when matched"
        ],
        code: `async matchOrder(newOrder: Order): Promise<Trade[]> {
  const oppositeOrders = await this.findMatchingOrders(newOrder);
  const trades = [];
  
  for (const oppositeOrder of oppositeOrders) {
    const trade = await this.executeTrade(newOrder, oppositeOrder);
    trades.push(trade);
    
    if (newOrder.remaining_amount === 0) break;
  }
  
  return trades;
}`,
        expectedResult: "Orders match automatically when created"
      },
      {
        step: 2,
        title: "Implement Trade Execution",
        instructions: [
          "Calculate trade amount (min of both orders)",
          "Calculate trade price (use maker order price)",
          "Create Trade entity",
          "Update order remaining amounts",
          "Update user balances"
        ],
        code: `async executeTrade(buyOrder: Order, sellOrder: Order): Promise<Trade> {
  const amount = Math.min(buyOrder.remaining_amount, sellOrder.remaining_amount);
  const price = sellOrder.price; // Maker price
  
  // Create trade
  // Update balances
  // Update orders
  
  return trade;
}`,
        expectedResult: "Trades execute and balances update"
      },
      {
        step: 3,
        title: "Implement Balance Locking",
        instructions: [
          "When order created, lock user balance",
          "Store locked amount in order",
          "When order filled/cancelled, unlock balance",
          "Prevent double-spending"
        ],
        code: `async lockBalance(userId: number, amount: number, currency: string) {
  const wallet = await this.walletService.getWallet(userId, currency);
  
  if (wallet.available_balance < amount) {
    throw new BadRequestException('Insufficient balance');
  }
  
  wallet.available_balance -= amount;
  wallet.locked_balance += amount;
  await this.walletService.save(wallet);
}`,
        expectedResult: "Balances lock correctly"
      },
      {
        step: 4,
        title: "Implement Scheduled Tasks",
        instructions: [
          "Install `@nestjs/schedule`: `npm install @nestjs/schedule`",
          "Create `order-expiration.task.ts`",
          "Use `@Cron('*/60 * * * * *')` to run every minute",
          "Cancel expired orders"
        ],
        code: `@Injectable()
export class OrderExpirationTask {
  @Cron('*/60 * * * * *')
  async handleExpiredOrders() {
    await this.orderService.cancelExpiredOrders();
  }
}`,
        expectedResult: "Expired orders cancel automatically"
      }
    ],
    nextTask: "WalletService",
    unlockMessage: "⚡ Matching engine working! Now build wallet management."
  },

  WalletService: {
    order: 7,
    title: "🎮 Level 7: Wallet Service",
    description: "Build HD wallet management, address generation, and blockchain integration.",
    steps: [
      {
        step: 1,
        title: "Create Wallet Module",
        instructions: [
          "Generate module: `nest g module wallets`",
          "Generate service: `nest g service wallets`",
          "Import ApieService for blockchain operations",
          "Set up HTTP client for Apie API calls"
        ],
        code: "nest g module wallets\nnest g service wallets",
        expectedResult: "Wallet module structure created"
      },
      {
        step: 2,
        title: "Implement HD Wallet Creation",
        instructions: [
          "Create `createHDWallet()` method",
          "Call ApieService to create wallet on blockchain",
          "Store mnemonic securely (encrypted)",
          "Save wallet to database (hd_wallet table)",
          "Return wallet response with encrypted mnemonic"
        ],
        code: `async createHDWallet(request: CreateHDWalletRequest): Promise<WalletResponseHalfDTO> {
  const apieResponse = await this.apieService.createHDWallet(request, network);
  // Encrypt mnemonic
  // Save to database
  return walletResponse;
}`,
        expectedResult: "HD wallets can be created for users"
      },
      {
        step: 3,
        title: "Implement Address Generation",
        instructions: [
          "Create `generateAddressForWallet()` method",
          "Call ApieService to generate new address",
          "Store address in database",
          "Generate QR code for address",
          "Return address with QR code"
        ],
        code: `async generateAddressForWallet(request): Promise<BlockChainAddressHalfDTO> {
  const address = await this.apieService.generateHDWalletAddress(...);
  // Save address
  // Generate QR code
  return addressDTO;
}`,
        expectedResult: "New addresses can be generated for deposits"
      },
      {
        step: 4,
        title: "Implement Withdrawal Requests",
        instructions: [
          "Create `createWithdrawalRequest()` method",
          "Validate user has sufficient balance",
          "Require 2FA/OTP verification",
          "Create withdrawal request in database",
          "Call ApieService to create transaction",
          "Update wallet balance"
        ],
        code: `async createWithdrawalRequest(request, customer): Promise<WithdrawalResponseDTO> {
  // Validate balance
  // Verify OTP
  // Create transaction via ApieService
  // Update balances
  return withdrawalResponse;
}`,
        expectedResult: "Users can request withdrawals with 2FA"
      },
      {
        step: 5,
        title: "Implement Balance Queries",
        instructions: [
          "Create methods for custodial and P2P balances",
          "Query customer_wallet table",
          "Calculate total balance (custodial + P2P)",
          "Return formatted balance response"
        ],
        code: `async getTotalBalance(username: string): Promise<TotalBalances> {
  const wallets = await this.customerWalletService.findByCustomer(customer);
  // Sum custodial_credit + p2p_credit
  return totalBalances;
}`,
        expectedResult: "Balance queries return accurate amounts"
      }
    ],
    nextTask: "ApieService",
    unlockMessage: "💼 Wallet management ready! Now integrate with blockchain."
  },

  ApieService: {
    order: 8,
    title: "🎮 Level 8: Apie Blockchain Service",
    description: "Multi-chain blockchain provider integration for wallet and transaction operations.",
    steps: [
      {
        step: 1,
        title: "Set Up HTTP Client",
        instructions: [
          "Install axios: `npm install axios`",
          "Create `src/services/apie/apie-client.service.ts`",
          "Configure base URL from environment",
          "Add authentication headers",
          "Implement error handling and retries"
        ],
        code: "npm install axios",
        expectedResult: "HTTP client configured for Apie API"
      },
      {
        step: 2,
        title: "Implement Multi-Chain Wallet Creation",
        instructions: [
          "Create `createHDWallet()` method",
          "Support networks: ETH, TRON, BTC, XRP, XLM, BSC, Dash",
          "Make API call to Apie: `POST /wallet/create`",
          "Handle network-specific parameters",
          "Return wallet response with mnemonic"
        ],
        code: `async createHDWallet(request, cryptoNetwork): Promise<CreateWalletResponse> {
  const response = await this.httpClient.post(\`/wallet/create\`, {
    network: cryptoNetwork,
    ...request
  });
  return response.data;
}`,
        expectedResult: "HD wallets created for all supported chains"
      },
      {
        step: 3,
        title: "Implement Address Generation",
        instructions: [
          "Create `generateHDWalletAddress()` method",
          "Call Apie API: `POST /wallet/address/generate`",
          "Pass wallet name and index",
          "Return generated address"
        ],
        code: `async generateHDWalletAddress(network, walletName, index): Promise<string> {
  const response = await this.httpClient.post(\`/wallet/address/generate\`, {
    network,
    walletName,
    index
  });
  return response.data.address;
}`,
        expectedResult: "Addresses generated for all chains"
      },
      {
        step: 4,
        title: "Implement Balance Queries",
        instructions: [
          "Create `getWalletBalance()` method",
          "Call Apie API: `GET /wallet/balance`",
          "Support all network types",
          "Handle different response formats per chain",
          "Return normalized balance response"
        ],
        code: `async getWalletBalance(request, network): Promise<BtcBaseWalletBalanceResponse> {
  const response = await this.httpClient.get(\`/wallet/balance\`, {
    params: { network, ...request }
  });
  return this.normalizeBalance(response.data, network);
}`,
        expectedResult: "Balance queries work for all chains"
      },
      {
        step: 5,
        title: "Implement Transaction Creation",
        instructions: [
          "Create `createRawTransaction()` method",
          "Call Apie API: `POST /transaction/create`",
          "Handle network-specific transaction formats",
          "Sign transaction (if required)",
          "Return transaction hash"
        ],
        code: `async createRawTransaction(request, network): Promise<TransactionResponseDTO> {
  const response = await this.httpClient.post(\`/transaction/create\`, {
    network,
    ...request
  });
  return response.data;
}`,
        expectedResult: "Transactions created and broadcasted"
      }
    ],
    nextTask: "WalletController",
    unlockMessage: "⛓️ Blockchain integration complete! Now build wallet endpoints."
  },

  WalletController: {
    order: 9,
    title: "🎮 Level 9: Wallet Controller",
    description: "Build wallet endpoints for HD wallet creation, addresses, and withdrawals.",
    steps: [
      {
        step: 1,
        title: "Create Wallet Controller",
        instructions: [
          "Generate controller: `nest g controller wallets`",
          "Import WalletService",
          "Add JWT auth guard to all endpoints",
          "Set up Swagger documentation"
        ],
        code: "nest g controller wallets",
        expectedResult: "Wallet controller created"
      },
      {
        step: 2,
        title: "Implement Create HD Wallet Endpoint",
        instructions: [
          "Create `POST /api/wallets` endpoint",
          "Use `@UseGuards(JwtAuthGuard)`",
          "Require privilege: `CREATE_WALLET`",
          "Call WalletService.createHDWallet()",
          "Return wallet response (without mnemonic)"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_WALLET')
async createHDWallet(@Request() req, @Body() dto: CreateHDWalletDto) {
  return this.walletService.createHDWallet(dto, req.user);
}`,
        expectedResult: "POST /api/wallets creates HD wallet"
      },
      {
        step: 3,
        title: "Implement Generate Address Endpoint",
        instructions: [
          "Create `POST /api/wallets/generate-address`",
          "Require privilege: `CREATE_WALLET_ADDRESS`",
          "Call WalletService.generateAddressForWallet()",
          "Return address with QR code"
        ],
        code: `@Post('generate-address')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_WALLET_ADDRESS')
async generateAddress(@Request() req, @Body() dto: GenerateAddressDto) {
  return this.walletService.generateAddressForWallet(dto, req.user);
}`,
        expectedResult: "New addresses can be generated via API"
      },
      {
        step: 4,
        title: "Implement Withdrawal Request Endpoint",
        instructions: [
          "Create `POST /api/wallets/withdrawal-request`",
          "Require privilege: `AUTHORIZED_USER`",
          "Validate OTP in request body",
          "Call WalletService.createWithdrawalRequest()",
          "Return withdrawal request details"
        ],
        code: `@Post('withdrawal-request')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('AUTHORIZED_USER')
async createWithdrawal(@Request() req, @Body() dto: WithdrawalRequestDto) {
  return this.walletService.createWithdrawalRequest(dto, req.user);
}`,
        expectedResult: "Withdrawal requests can be created"
      },
      {
        step: 5,
        title: "Implement Balance Endpoint",
        instructions: [
          "Create `GET /api/wallets/balance`",
          "Require privilege: `USER`",
          "Call WalletService.getTotalBalance()",
          "Return custodial and P2P balances"
        ],
        code: `@Get('balance')
@UseGuards(JwtAuthGuard)
async getBalance(@Request() req) {
  return this.walletService.getTotalBalance(req.user.email);
}`,
        expectedResult: "Balance endpoint returns user balances"
      }
    ],
    nextTask: "TradeService",
    unlockMessage: "💰 Wallet endpoints ready! Now build trade execution."
  },

  TradeService: {
    order: 10,
    title: "🎮 Level 10: Trade Service",
    description: "Build trade execution, history, and statistics service.",
    steps: [
      {
        step: 1,
        title: "Create Trade Module",
        instructions: [
          "Generate module: `nest g module trades`",
          "Generate service: `nest g service trades`",
          "Import OrderService and WalletService",
          "Set up TypeORM repository for Trade entity"
        ],
        code: "nest g module trades\nnest g service trades",
        expectedResult: "Trade module created"
      },
      {
        step: 2,
        title: "Implement Trade Execution",
        instructions: [
          "Create `executeTrade()` method",
          "Calculate trade amount (min of both orders)",
          "Use maker order price",
          "Create Trade entity",
          "Update buyer and seller balances",
          "Update order remaining amounts"
        ],
        code: `async executeTrade(buyOrder: Order, sellOrder: Order, amount: number, price: number): Promise<Trade> {
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
}`,
        expectedResult: "Trades execute and balances update"
      },
      {
        step: 3,
        title: "Implement Trade History Queries",
        instructions: [
          "Create `getTrades()` method with filters",
          "Support pagination",
          "Filter by user, market, date range",
          "Return formatted TradeFullDTO"
        ],
        code: `async getTrades(filters: TradeFilters): Promise<PageDTO<TradeFullDTO>> {
  const query = this.tradeRepository.createQueryBuilder('trade')
    .where('1=1');
    
  // Apply filters
  if (filters.userId) query.andWhere('trade.buyerId = :userId OR trade.sellerId = :userId', { userId: filters.userId });
  if (filters.marketId) query.andWhere('trade.marketId = :marketId', { marketId: filters.marketId });
  
  return this.paginate(query, filters.page, filters.size);
}`,
        expectedResult: "Trade history queries work with filters"
      },
      {
        step: 4,
        title: "Implement Market Trade History",
        instructions: [
          "Create `getLastTradesHistory()` method",
          "Get recent trades for a market",
          "Limit to last N trades (e.g., 50)",
          "Order by timestamp DESC",
          "Return TradeHistoryInMarketDTO"
        ],
        code: `async getLastTradesHistory(marketType: string): Promise<TradeHistoryInMarketDTO[]> {
  return this.tradeRepository.find({
    where: { market: { type: marketType } },
    order: { createdAt: 'DESC' },
    take: 50,
    relations: ['buyerOrder', 'sellerOrder']
  });
}`,
        expectedResult: "Market trade history displays correctly"
      },
      {
        step: 5,
        title: "Implement Trade Statistics",
        instructions: [
          "Create `getTradeStatistics()` method",
          "Calculate 24h volume",
          "Calculate high/low prices",
          "Calculate last price",
          "Return TradeStatistics DTO"
        ],
        code: `async getTradeStatistics(marketType: string): Promise<TradeStatistics> {
  const trades = await this.getTradesInLast24h(marketType);
  
  return {
    volume24h: trades.reduce((sum, t) => sum + t.amount, 0),
    high24h: Math.max(...trades.map(t => t.price)),
    low24h: Math.min(...trades.map(t => t.price)),
    lastPrice: trades[0]?.price || 0
  };
}`,
        expectedResult: "Trade statistics calculated correctly"
      }
    ],
    nextTask: "TradeController",
    unlockMessage: "💹 Trade execution ready! Now build trade endpoints."
  },

  TradeController: {
    order: 11,
    title: "🎮 Level 11: Trade Controller",
    description: "Build trade history and analytics endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Trade Controller",
        instructions: [
          "Generate controller: `nest g controller trades`",
          "Import TradeService",
          "Add Swagger documentation",
          "Set up DTOs for requests"
        ],
        code: "nest g controller trades",
        expectedResult: "Trade controller created"
      },
      {
        step: 2,
        title: "Implement Get User Trades Endpoint",
        instructions: [
          "Create `GET /api/trades` endpoint",
          "Use `@UseGuards(JwtAuthGuard)`",
          "Get user from request",
          "Call TradeService.getTrades() with user filter",
          "Return paginated trade list"
        ],
        code: `@Get()
@UseGuards(JwtAuthGuard)
async getTrades(@Request() req, @Query() filters: TradeFiltersDto) {
  return this.tradeService.getTrades({
    ...filters,
    userId: req.user.userId
  });
}`,
        expectedResult: "GET /api/trades returns user's trade history"
      },
      {
        step: 3,
        title: "Implement Market Trade History Endpoint",
        instructions: [
          "Create `GET /api/trades/history` endpoint",
          "Accept marketType as query parameter",
          "Call TradeService.getLastTradesHistory()",
          "Return recent trades for market"
        ],
        code: `@Get('history')
async getTradeHistory(@Query('marketType') marketType: string) {
  return this.tradeService.getLastTradesHistory(marketType);
}`,
        expectedResult: "Market trade history accessible publicly"
      },
      {
        step: 4,
        title: "Implement Admin Trades Endpoint",
        instructions: [
          "Create `GET /api/trades/admin` endpoint",
          "Require privilege: `LIST_TRADES`",
          "Return all trades (no user filter)",
          "Support advanced filtering"
        ],
        code: `@Get('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_TRADES')
async getAdminTrades(@Query() filters: TradeFiltersDto) {
  return this.tradeService.getTrades(filters);
}`,
        expectedResult: "Admins can view all trades"
      },
      {
        step: 5,
        title: "Implement Get Single Trade Endpoint",
        instructions: [
          "Create `GET /api/trades/:id` endpoint",
          "Verify trade belongs to user (or admin)",
          "Return full trade details",
          "Include order information"
        ],
        code: `@Get(':id')
@UseGuards(JwtAuthGuard)
async getTrade(@Param('id') id: number, @Request() req) {
  return this.tradeService.getTradeById(id, req.user);
}`,
        expectedResult: "Single trade details accessible"
      }
    ],
    nextTask: "MarketController",
    unlockMessage: "📊 Trade endpoints ready! Now build market management."
  },

  MarketController: {
    order: 12,
    title: "🎮 Level 12: Market Controller",
    description: "Build market management endpoints for trading pairs.",
    steps: [
      {
        step: 1,
        title: "Create Market Controller",
        instructions: [
          "Generate controller: `nest g controller markets`",
          "Import MarketService and CoinService",
          "Set up DTOs for market operations"
        ],
        code: "nest g controller markets",
        expectedResult: "Market controller created"
      },
      {
        step: 2,
        title: "Implement List Markets Endpoint",
        instructions: [
          "Create `GET /api/markets` endpoint",
          "Make it public (no auth required)",
          "Call MarketService.findAll()",
          "Return active markets only",
          "Include market statistics"
        ],
        code: `@Get()
async getMarkets() {
  return this.marketService.findAllActive();
}`,
        expectedResult: "GET /api/markets returns all active markets"
      },
      {
        step: 3,
        title: "Implement Create Market Endpoint",
        instructions: [
          "Create `POST /api/markets` endpoint",
          "Require privilege: `CREATE_MARKET`",
          "Validate base and quote coins exist",
          "Call MarketService.create()",
          "Return created market"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_MARKET')
async createMarket(@Body() dto: CreateMarketDto) {
  return this.marketService.create(dto);
}`,
        expectedResult: "New markets can be created"
      },
      {
        step: 4,
        title: "Implement Activate/Deactivate Market",
        instructions: [
          "Create `PUT /api/markets/activate` endpoint",
          "Require privilege: `UPDATE_MARKET`",
          "Toggle market active status",
          "Prevent deactivation if open orders exist"
        ],
        code: `@Put('activate')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_MARKET')
async toggleMarket(@Body() dto: { marketId: number, active: boolean }) {
  return this.marketService.setActive(dto.marketId, dto.active);
}`,
        expectedResult: "Markets can be activated/deactivated"
      },
      {
        step: 5,
        title: "Implement Get Market Details",
        instructions: [
          "Create `GET /api/markets/:id` endpoint",
          "Make it public",
          "Include order book summary",
          "Include 24h statistics",
          "Return MarketFullDTO"
        ],
        code: `@Get(':id')
async getMarket(@Param('id') id: number) {
  const market = await this.marketService.findOne(id);
  const stats = await this.tradeService.getTradeStatistics(market.type);
  return { ...market, statistics: stats };
}`,
        expectedResult: "Market details include statistics"
      }
    ],
    nextTask: "CoinController",
    unlockMessage: "📈 Markets ready! Now build coin management."
  },

  CoinController: {
    order: 13,
    title: "🎮 Level 13: Coin Controller",
    description: "Build cryptocurrency information and pricing endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Coin Controller",
        instructions: [
          "Generate controller: `nest g controller coins`",
          "Import CoinService",
          "Set up DTOs for coin operations"
        ],
        code: "nest g controller coins",
        expectedResult: "Coin controller created"
      },
      {
        step: 2,
        title: "Implement List Coins Endpoint",
        instructions: [
          "Create `GET /api/coins` endpoint",
          "Make it public",
          "Call CoinService.findAll()",
          "Return all coins with current prices",
          "Include network information"
        ],
        code: `@Get()
async getCoins() {
  return this.coinService.findAll();
}`,
        expectedResult: "GET /api/coins returns all coins"
      },
      {
        step: 3,
        title: "Implement Get USD Prices Endpoint",
        instructions: [
          "Create `GET /api/coins/price/usd` endpoint",
          "Return prices in USD for all coins",
          "Cache prices for performance",
          "Update prices periodically (scheduled task)"
        ],
        code: `@Get('price/usd')
async getUsdPrices() {
  return this.coinService.getUsdPrices();
}`,
        expectedResult: "USD prices returned for all coins"
      },
      {
        step: 4,
        title: "Implement Exchange Rate Endpoint",
        instructions: [
          "Create `GET /api/coins/price/from-to` endpoint",
          "Accept from and to coin symbols",
          "Calculate exchange rate",
          "Return rate and timestamp"
        ],
        code: `@Get('price/from-to')
async getExchangeRate(@Query('from') from: string, @Query('to') to: string) {
  return this.coinService.getExchangeRate(from, to);
}`,
        expectedResult: "Exchange rates calculated correctly"
      },
      {
        step: 5,
        title: "Implement Create Coin Endpoint",
        instructions: [
          "Create `POST /api/coins` endpoint",
          "Require privilege: `CREATE_COIN`",
          "Validate coin data",
          "Call CoinService.create()",
          "Return created coin"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_COIN')
async createCoin(@Body() dto: CreateCoinDto) {
  return this.coinService.create(dto);
}`,
        expectedResult: "New coins can be added to system"
      }
    ],
    nextTask: "AdminController",
    unlockMessage: "🪙 Coin management ready! Now build admin endpoints."
  },

  AdminController: {
    order: 14,
    title: "🎮 Level 14: Admin Controller",
    description: "Build admin user management and RBAC endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Admin Controller",
        instructions: [
          "Generate controller: `nest g controller admins`",
          "Import AdminService and RoleService",
          "Add RBAC guards to all endpoints"
        ],
        code: "nest g controller admins",
        expectedResult: "Admin controller created"
      },
      {
        step: 2,
        title: "Implement Admin Login Endpoint",
        instructions: [
          "Create `POST /api/admins/login` endpoint",
          "Accept email and password",
          "Validate credentials",
          "Return JWT token with admin privileges",
          "Log login attempt"
        ],
        code: `@Post('login')
async login(@Body() dto: LoginDto) {
  return this.authService.loginAdmin(dto);
}`,
        expectedResult: "Admins can log in and get JWT token"
      },
      {
        step: 3,
        title: "Implement Create Admin Endpoint",
        instructions: [
          "Create `POST /api/admins/create` endpoint",
          "Require privilege: `CREATE_ADMINS`",
          "Validate admin data",
          "Hash password",
          "Assign default role",
          "Call AdminService.create()"
        ],
        code: `@Post('create')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_ADMINS')
async createAdmin(@Body() dto: CreateAdminDto) {
  return this.adminService.create(dto);
}`,
        expectedResult: "New admins can be created"
      },
      {
        step: 4,
        title: "Implement List Admins Endpoint",
        instructions: [
          "Create `GET /api/admins` endpoint",
          "Require privilege: `LIST_ADMINS`",
          "Support pagination",
          "Return admin list with roles",
          "Exclude sensitive data (passwords)"
        ],
        code: `@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_ADMINS')
async getAdmins(@Query() pagination: PaginationDto) {
  return this.adminService.findAll(pagination);
}`,
        expectedResult: "Admin list returned with pagination"
      },
      {
        step: 5,
        title: "Implement Update/Delete Admin Endpoints",
        instructions: [
          "Create `PUT /api/admins/:id` endpoint",
          "Create `DELETE /api/admins/:id` endpoint",
          "Require appropriate privileges",
          "Prevent self-deletion",
          "Validate role changes"
        ],
        code: `@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_ADMINS')
async updateAdmin(@Param('id') id: number, @Body() dto: UpdateAdminDto) {
  return this.adminService.update(id, dto);
}`,
        expectedResult: "Admins can be updated and deleted"
      }
    ],
    nextTask: "GiftCodeController",
    unlockMessage: "👨‍💼 Admin management ready! Now build promotional features."
  },

  GiftCodeController: {
    order: 15,
    title: "🎮 Level 15: Gift Code Controller",
    description: "Build promotional gift codes and referral rewards system.",
    steps: [
      {
        step: 1,
        title: "Create Gift Code Module",
        instructions: [
          "Generate module: `nest g module gift-codes`",
          "Generate service and controller",
          "Import CustomerService and CustomerWalletService"
        ],
        code: "nest g module gift-codes\nnest g service gift-codes\nnest g controller gift-codes",
        expectedResult: "Gift code module created"
      },
      {
        step: 2,
        title: "Implement Create Gift Code Endpoint",
        instructions: [
          "Create `POST /api/gift-code` endpoint",
          "Require privilege: `CREATE_GIFT_CODE`",
          "Generate unique code",
          "Set expiration date",
          "Set reward amount",
          "Save to database"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_GIFT_CODE')
async createGiftCode(@Body() dto: CreateGiftCodeDto) {
  return this.giftCodeService.create(dto);
}`,
        expectedResult: "Gift codes can be created"
      },
      {
        step: 3,
        title: "Implement Redeem Gift Code Endpoint",
        instructions: [
          "Create `PUT /api/gift-code/use` endpoint",
          "Require privilege: `USER`",
          "Validate code exists and not expired",
          "Check if user already used it",
          "Credit wallet with reward",
          "Mark code as used"
        ],
        code: `@Put('use')
@UseGuards(JwtAuthGuard)
async redeemGiftCode(@Request() req, @Body() dto: { code: string }) {
  return this.giftCodeService.redeem(dto.code, req.user);
}`,
        expectedResult: "Users can redeem gift codes"
      },
      {
        step: 4,
        title: "Implement Register with Gift Code",
        instructions: [
          "Create `POST /api/gift-code/register/:prefix` endpoint",
          "Make it public (for registration)",
          "Validate prefix exists",
          "Credit new user on registration",
          "Track referral"
        ],
        code: `@Post('register/:prefix')
async registerWithGiftCode(@Param('prefix') prefix: string, @Body() registerDto: RegisterDto) {
  return this.giftCodeService.registerWithCode(prefix, registerDto);
}`,
        expectedResult: "New users can register with gift code"
      },
      {
        step: 5,
        title: "Implement List Gift Codes Endpoint",
        instructions: [
          "Create `GET /api/gift-code` endpoint",
          "Require privilege: `LIST_GIFT_CODE`",
          "Support filtering by status",
          "Show usage statistics",
          "Return paginated list"
        ],
        code: `@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_GIFT_CODE')
async getGiftCodes(@Query() filters: GiftCodeFiltersDto) {
  return this.giftCodeService.findAll(filters);
}`,
        expectedResult: "Gift codes can be listed and managed"
      }
    ],
    nextTask: "ReferralCodeController",
    unlockMessage: "🎁 Gift codes ready! Now build referral system."
  },

  ReferralCodeController: {
    order: 16,
    title: "🎮 Level 16: Referral Code Controller",
    description: "Build referral program and rewards system.",
    steps: [
      {
        step: 1,
        title: "Create Referral Module",
        instructions: [
          "Generate module: `nest g module referrals`",
          "Generate service and controller",
          "Import CustomerService"
        ],
        code: "nest g module referrals\nnest g service referrals\nnest g controller referrals",
        expectedResult: "Referral module created"
      },
      {
        step: 2,
        title: "Implement Create Referral Code Endpoint",
        instructions: [
          "Create `POST /api/referral/create` endpoint",
          "Require privilege: `USER`",
          "Generate unique referral code for user",
          "Save to database",
          "Return referral code and link"
        ],
        code: `@Post('create')
@UseGuards(JwtAuthGuard)
async createReferralCode(@Request() req) {
  return this.referralService.createCode(req.user);
}`,
        expectedResult: "Users can create their referral codes"
      },
      {
        step: 3,
        title: "Implement Use Referral Code Endpoint",
        instructions: [
          "Create `POST /api/referral/use/:code` endpoint",
          "Make it public (for registration)",
          "Validate code exists",
          "Link referrer to new user",
          "Credit rewards to both users"
        ],
        code: `@Post('use/:code')
async useReferralCode(@Param('code') code: string, @Body() registerDto: RegisterDto) {
  return this.referralService.useCode(code, registerDto);
}`,
        expectedResult: "New users can use referral codes"
      },
      {
        step: 4,
        title: "Implement Referral Statistics Endpoint",
        instructions: [
          "Create `GET /api/referral/stats` endpoint",
          "Require privilege: `USER`",
          "Count total referrals",
          "Calculate total rewards earned",
          "Show active referrals",
          "Return statistics DTO"
        ],
        code: `@Get('stats')
@UseGuards(JwtAuthGuard)
async getReferralStats(@Request() req) {
  return this.referralService.getStatistics(req.user);
}`,
        expectedResult: "Referral statistics displayed"
      },
      {
        step: 5,
        title: "Implement Referral Reward System",
        instructions: [
          "Create scheduled task to process rewards",
          "Calculate rewards based on referred user activity",
          "Credit rewards to referrer wallet",
          "Track reward history"
        ],
        code: `@Cron('0 0 * * *') // Daily
async processReferralRewards() {
  await this.referralService.processDailyRewards();
}`,
        expectedResult: "Referral rewards processed automatically"
      }
    ],
    nextTask: "TicketController",
    unlockMessage: "🔗 Referral system ready! Now build customer support."
  },

  TicketController: {
    order: 17,
    title: "🎮 Level 17: Ticket Controller",
    description: "Build customer support ticket system.",
    steps: [
      {
        step: 1,
        title: "Create Ticket Module",
        instructions: [
          "Generate module: `nest g module tickets`",
          "Generate service and controller",
          "Import MessageService and FileService"
        ],
        code: "nest g module tickets\nnest g service tickets\nnest g controller tickets",
        expectedResult: "Ticket module created"
      },
      {
        step: 2,
        title: "Implement Create Ticket Endpoint",
        instructions: [
          "Create `POST /api/tickets` endpoint",
          "Require privilege: `USER`",
          "Accept title, description, and category",
          "Create ticket with status 'OPEN'",
          "Send notification to admins",
          "Return created ticket"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard)
async createTicket(@Request() req, @Body() dto: CreateTicketDto) {
  return this.ticketService.create(dto, req.user);
}`,
        expectedResult: "Users can create support tickets"
      },
      {
        step: 3,
        title: "Implement List User Tickets Endpoint",
        instructions: [
          "Create `GET /api/tickets` endpoint",
          "Require privilege: `USER`",
          "Filter tickets by current user",
          "Support status filtering",
          "Return paginated list"
        ],
        code: `@Get()
@UseGuards(JwtAuthGuard)
async getTickets(@Request() req, @Query() filters: TicketFiltersDto) {
  return this.ticketService.findByUser(req.user, filters);
}`,
        expectedResult: "Users see their own tickets"
      },
      {
        step: 4,
        title: "Implement Add Message to Ticket",
        instructions: [
          "Create `POST /api/tickets/message/:id` endpoint",
          "Require privilege: `USER`",
          "Verify ticket belongs to user",
          "Accept message text and optional file",
          "Update ticket status if needed",
          "Notify admins/user"
        ],
        code: `@Post('message/:id')
@UseGuards(JwtAuthGuard)
@UseInterceptors(FileInterceptor('file'))
async addMessage(@Param('id') id: number, @Request() req, @Body() dto: AddMessageDto, @UploadedFile() file?: Express.Multer.File) {
  return this.ticketService.addMessage(id, dto, req.user, file);
}`,
        expectedResult: "Messages can be added to tickets"
      },
      {
        step: 5,
        title: "Implement Admin Ticket Management",
        instructions: [
          "Create `GET /api/tickets/admin` endpoint",
          "Require privilege: `LIST_TICKETS`",
          "Return all tickets",
          "Support filtering and sorting",
          "Include unread count"
        ],
        code: `@Get('admin')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_TICKETS')
async getAdminTickets(@Query() filters: TicketFiltersDto) {
  return this.ticketService.findAll(filters);
}`,
        expectedResult: "Admins can view all tickets"
      }
    ],
    nextTask: "BlogController",
    unlockMessage: "🎫 Support system ready! Now build content management."
  },

  BlogController: {
    order: 18,
    title: "🎮 Level 18: Blog Controller",
    description: "Build blog and content management endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Blog Module",
        instructions: [
          "Generate module: `nest g module blog`",
          "Generate service and controller",
          "Import FileService for images"
        ],
        code: "nest g module blog\nnest g service blog\nnest g controller blog",
        expectedResult: "Blog module created"
      },
      {
        step: 2,
        title: "Implement List Blog Posts Endpoint",
        instructions: [
          "Create `GET /api/blog` endpoint",
          "Make it public",
          "Support pagination",
          "Filter by category/tag",
          "Return published posts only"
        ],
        code: `@Get()
async getBlogPosts(@Query() filters: BlogFiltersDto) {
  return this.blogService.findAll(filters);
}`,
        expectedResult: "Blog posts listed publicly"
      },
      {
        step: 3,
        title: "Implement Create Blog Post Endpoint",
        instructions: [
          "Create `POST /api/blog` endpoint",
          "Require privilege: `CREATE_BLOG`",
          "Accept title, content, category, tags",
          "Support image upload",
          "Save as draft or publish",
          "Return created post"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_BLOG')
@UseInterceptors(FileInterceptor('image'))
async createPost(@Body() dto: CreateBlogDto, @UploadedFile() image?: Express.Multer.File) {
  return this.blogService.create(dto, image);
}`,
        expectedResult: "Blog posts can be created"
      },
      {
        step: 4,
        title: "Implement Update Blog Post Endpoint",
        instructions: [
          "Create `PUT /api/blog/:id` endpoint",
          "Require privilege: `UPDATE_BLOG`",
          "Verify post exists",
          "Update post data",
          "Handle image replacement",
          "Return updated post"
        ],
        code: `@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_BLOG')
async updatePost(@Param('id') id: number, @Body() dto: UpdateBlogDto) {
  return this.blogService.update(id, dto);
}`,
        expectedResult: "Blog posts can be updated"
      },
      {
        step: 5,
        title: "Implement Get Single Post Endpoint",
        instructions: [
          "Create `GET /api/blog/:id` endpoint",
          "Make it public",
          "Return full post content",
          "Increment view count",
          "Include related posts"
        ],
        code: `@Get(':id')
async getPost(@Param('id') id: number) {
  await this.blogService.incrementViews(id);
  return this.blogService.findOne(id);
}`,
        expectedResult: "Single blog post accessible"
      }
    ],
    nextTask: "ExchangeActionController",
    unlockMessage: "📝 Blog ready! Now build OTC exchange."
  },

  ExchangeActionController: {
    order: 19,
    title: "🎮 Level 19: Exchange Action Controller",
    description: "Build OTC (over-the-counter) exchange endpoints.",
    steps: [
      {
        step: 1,
        title: "Create Exchange Module",
        instructions: [
          "Generate module: `nest g module exchange`",
          "Generate service and controller",
          "Import ExchangeActionService and CustomerWalletService"
        ],
        code: "nest g module exchange\nnest g service exchange\nnest g controller exchange",
        expectedResult: "Exchange module created"
      },
      {
        step: 2,
        title: "Implement OTC Buy Endpoint",
        instructions: [
          "Create `POST /api/exchange/buy` endpoint",
          "Require privilege: `USER`",
          "Validate user has sufficient balance",
          "Lock balance in custodial wallet",
          "Create exchange order",
          "Return order details"
        ],
        code: `@Post('buy')
@UseGuards(JwtAuthGuard)
async createBuyOrder(@Request() req, @Body() dto: ExchangeBuyDto) {
  return this.exchangeService.createBuyOrder(dto, req.user);
}`,
        expectedResult: "OTC buy orders can be created"
      },
      {
        step: 3,
        title: "Implement OTC Sell Endpoint",
        instructions: [
          "Create `POST /api/exchange/sell` endpoint",
          "Require privilege: `USER`",
          "Validate user has coins",
          "Lock coins in custodial wallet",
          "Create exchange sell order",
          "Return order details"
        ],
        code: `@Post('sell')
@UseGuards(JwtAuthGuard)
async createSellOrder(@Request() req, @Body() dto: ExchangeSellDto) {
  return this.exchangeService.createSellOrder(dto, req.user);
}`,
        expectedResult: "OTC sell orders can be created"
      },
      {
        step: 4,
        title: "Implement Approve Order Endpoint",
        instructions: [
          "Create `POST /api/exchange/approve-order` endpoint",
          "Require privilege: `APPROVE_EXCHANGE`",
          "Verify order exists and is pending",
          "Execute exchange (transfer funds)",
          "Update order status to 'APPROVED'",
          "Notify user"
        ],
        code: `@Post('approve-order')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('APPROVE_EXCHANGE')
async approveOrder(@Body() dto: { orderId: number }) {
  return this.exchangeService.approveOrder(dto.orderId);
}`,
        expectedResult: "Exchange orders can be approved"
      },
      {
        step: 5,
        title: "Implement List Exchange Orders Endpoint",
        instructions: [
          "Create `GET /api/exchange/orders` endpoint",
          "Require privilege: `LIST_EXCHANGE`",
          "Support filtering by status",
          "Return paginated list",
          "Include user and amount details"
        ],
        code: `@Get('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_EXCHANGE')
async getExchangeOrders(@Query() filters: ExchangeFiltersDto) {
  return this.exchangeService.findAll(filters);
}`,
        expectedResult: "Exchange orders can be listed"
      }
    ],
    nextTask: "RolesController",
    unlockMessage: "🔄 OTC exchange ready! Now build RBAC system."
  },

  RolesController: {
    order: 20,
    title: "🎮 Level 20: Roles Controller",
    description: "Build role and privilege management for RBAC.",
    steps: [
      {
        step: 1,
        title: "Create Roles Module",
        instructions: [
          "Generate module: `nest g module roles`",
          "Generate service and controller",
          "Import RoleService and PrivilegeService"
        ],
        code: "nest g module roles\nnest g service roles\nnest g controller roles",
        expectedResult: "Roles module created"
      },
      {
        step: 2,
        title: "Implement List Roles Endpoint",
        instructions: [
          "Create `GET /api/roles` endpoint",
          "Require privilege: `LIST_ROLES`",
          "Return all roles with their privileges",
          "Include role usage count",
          "Return formatted RoleDTO"
        ],
        code: `@Get()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_ROLES')
async getRoles() {
  return this.roleService.findAll();
}`,
        expectedResult: "All roles listed with privileges"
      },
      {
        step: 3,
        title: "Implement Create Role Endpoint",
        instructions: [
          "Create `POST /api/roles` endpoint",
          "Require privilege: `CREATE_ROLE`",
          "Accept role name and privileges array",
          "Validate privileges exist",
          "Create role in database",
          "Return created role"
        ],
        code: `@Post()
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('CREATE_ROLE')
async createRole(@Body() dto: CreateRoleDto) {
  return this.roleService.create(dto);
}`,
        expectedResult: "New roles can be created"
      },
      {
        step: 4,
        title: "Implement List Privileges Endpoint",
        instructions: [
          "Create `GET /api/roles/privileges` endpoint",
          "Require privilege: `LIST_PRIVILEGES`",
          "Return all available privileges",
          "Group by category",
          "Show which roles use each privilege"
        ],
        code: `@Get('privileges')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('LIST_PRIVILEGES')
async getPrivileges() {
  return this.privilegeService.findAll();
}`,
        expectedResult: "All privileges listed"
      },
      {
        step: 5,
        title: "Implement Update Role Endpoint",
        instructions: [
          "Create `PUT /api/roles/:id` endpoint",
          "Require privilege: `UPDATE_ROLE`",
          "Allow updating role name and privileges",
          "Validate no users have role before deletion",
          "Update role in database"
        ],
        code: `@Put(':id')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('UPDATE_ROLE')
async updateRole(@Param('id') id: number, @Body() dto: UpdateRoleDto) {
  return this.roleService.update(id, dto);
}`,
        expectedResult: "Roles can be updated"
      }
    ],
    nextTask: "CustomerService",
    unlockMessage: "🔐 RBAC system ready! Now build customer service layer."
  },

  CustomerService: {
    order: 21,
    title: "🎮 Level 21: Customer Service",
    description: "Build user account management, authentication, and KYC orchestration.",
    steps: [
      {
        step: 1,
        title: "Create Customer Service",
        instructions: [
          "Generate service: `nest g service customers`",
          "Import Customer entity repository",
          "Import EmailService and SMSService",
          "Set up TypeORM repository"
        ],
        code: "nest g service customers",
        expectedResult: "Customer service created"
      },
      {
        step: 2,
        title: "Implement User Registration",
        instructions: [
          "Create `register()` method",
          "Validate email uniqueness",
          "Hash password with bcrypt",
          "Create customer entity",
          "Send welcome email",
          "Return RegisterResponseDto"
        ],
        code: `async register(userDTO: RegisterDto): Promise<RegisterResponseDto> {
  const hashedPassword = await bcrypt.hash(userDTO.password, 10);
  const customer = this.customerRepository.create({
    ...userDTO,
    password_hash: hashedPassword
  });
  await this.emailService.sendWelcomeEmail(customer.email);
  return { customer, message: 'Registration successful' };
}`,
        expectedResult: "Users can register successfully"
      },
      {
        step: 3,
        title: "Implement Authentication",
        instructions: [
          "Create `authenticate()` method",
          "Find customer by email",
          "Verify password with bcrypt",
          "Check account status",
          "Return customer entity",
          "Log authentication attempt"
        ],
        code: `async authenticate(email: string, password: string): Promise<Customer> {
  const customer = await this.customerRepository.findOne({ where: { email } });
  if (!customer) throw new UnauthorizedException('Invalid credentials');
  
  const isValid = await bcrypt.compare(password, customer.password_hash);
  if (!isValid) throw new UnauthorizedException('Invalid credentials');
  
  return customer;
}`,
        expectedResult: "User authentication works"
      },
      {
        step: 4,
        title: "Implement KYC Submission",
        instructions: [
          "Create `submitKYC()` method",
          "Accept KYC documents (ID, selfie, etc.)",
          "Save files to storage",
          "Update customer KYC status to 'PENDING'",
          "Notify admins for review",
          "Return KYC status"
        ],
        code: `async submitKYC(customerId: number, kycDTO: KycDto, files: Express.Multer.File[]): Promise<KYCStatus> {
  // Save files
  // Update customer KYC status
  // Notify admins
  return kycStatus;
}`,
        expectedResult: "KYC documents can be submitted"
      },
      {
        step: 5,
        title: "Implement 2FA Methods",
        instructions: [
          "Create `enable2FA()` method",
          "Generate secret using speakeasy",
          "Generate QR code",
          "Store secret (encrypted) in customer",
          "Return QR code and secret",
          "Create `verify2FA()` method for verification"
        ],
        code: `async enable2FA(customerId: number): Promise<TwoFactorSecret> {
  const secret = speakeasy.generateSecret({ name: 'BitniTex' });
  const qrCode = await qrcode.toDataURL(secret.otpauth_url);
  
  // Store encrypted secret
  await this.updateCustomer(customerId, { twoFactorSecret: encrypt(secret.base32) });
  
  return { secret: secret.base32, qrCode };
}`,
        expectedResult: "2FA can be enabled and verified"
      }
    ],
    nextTask: "PaymentGateway",
    unlockMessage: "👥 Customer service ready! Now build payment gateways."
  },

  GiftCodeService: {
    order: 23,
    title: "🎮 Level 23: Gift Code Service",
    description: "Build promotional gift code management service with generation, validation, redemption, and tracking.",
    steps: [
      {
        step: 1,
        title: "Create Gift Code Entity",
        instructions: [
          "Create `GiftCode` entity with fields: id, code, prefix, rewardAmount, currency, expirationDate, usageLimit, usedCount, status, createdAt",
          "Add indexes on code and prefix",
          "Add validation decorators"
        ],
        code: `@Entity('gift_code')
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
}`,
        expectedResult: "Gift code entity created",
        aiPrompt: "Help me create a GiftCode entity for a NestJS cryptocurrency exchange. I need fields for code, prefix, reward amount, expiration, usage limits, and status tracking.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the GiftCode entity based on the Java implementation at src/main/java/ir/arnitex/backend/service/GiftCodeService.java"
      },
      {
        step: 2,
        title: "Implement Gift Code Generation",
        instructions: [
          "Create `generateCode()` method",
          "Generate unique alphanumeric code",
          "Support prefix-based codes",
          "Ensure uniqueness in database",
          "Return generated code"
        ],
        code: `async generateCode(prefix?: string): Promise<string> {
  let code: string;
  let exists = true;
  
  while (exists) {
    code = prefix 
      ? \`\${prefix}-\${this.generateRandomString(8)}\`
      : this.generateRandomString(12);
    exists = await this.giftCodeRepository.findOne({ where: { code } });
  }
  
  return code;
}`,
        expectedResult: "Unique gift codes can be generated",
        aiPrompt: "Help me implement gift code generation logic in NestJS. I need to generate unique alphanumeric codes, optionally with prefixes, and ensure they don't exist in the database.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code generation based on the Java implementation."
      },
      {
        step: 3,
        title: "Implement Gift Code Validation",
        instructions: [
          "Create `validateCode()` method",
          "Check if code exists",
          "Verify not expired",
          "Check usage limit not exceeded",
          "Verify status is ACTIVE",
          "Return validation result"
        ],
        code: `async validateCode(code: string): Promise<{ valid: boolean; message?: string }> {
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
}`,
        expectedResult: "Gift codes can be validated",
        aiPrompt: "Help me implement gift code validation logic in NestJS. I need to check if codes exist, are active, not expired, and haven't exceeded usage limits.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code validation based on the Java implementation."
      },
      {
        step: 4,
        title: "Implement Gift Code Redemption",
        instructions: [
          "Create `redeemCode()` method",
          "Validate code first",
          "Check if user already used it",
          "Credit wallet with reward",
          "Increment usedCount",
          "Mark as used if limit reached",
          "Return redemption result"
        ],
        code: `async redeemCode(code: string, customer: Customer): Promise<GiftCodeRedemptionResult> {
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
}`,
        expectedResult: "Gift codes can be redeemed and wallets credited",
        aiPrompt: "Help me implement gift code redemption logic in NestJS. I need to validate codes, check for duplicate usage, credit user wallets, and track usage statistics.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code redemption based on the Java implementation."
      },
      {
        step: 5,
        title: "Implement Usage Tracking and Statistics",
        instructions: [
          "Create `getStatistics()` method",
          "Count total codes created",
          "Count codes redeemed",
          "Calculate total rewards distributed",
          "Get most popular codes",
          "Return statistics DTO"
        ],
        code: `async getStatistics(): Promise<GiftCodeStatisticsDto> {
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
}`,
        expectedResult: "Gift code statistics available",
        aiPrompt: "Help me implement gift code statistics tracking in NestJS. I need to calculate total codes, redemption rates, rewards distributed, and usage analytics.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement gift code statistics based on the Java implementation."
      }
    ],
    nextTask: "ReferralCodeService",
    unlockMessage: "🎁 Gift code service ready! Now build referral system."
  },

  ReferralCodeService: {
    order: 24,
    title: "🎮 Level 24: Referral Code Service",
    description: "Build referral program management service with code generation, tracking, rewards, and statistics.",
    steps: [
      {
        step: 1,
        title: "Create Referral Code Entity",
        instructions: [
          "Create `ReferralCode` entity with fields: id, customerId, code, createdAt, isActive",
          "Create `ReferralRelationship` entity: id, referrerId, referredId, code, createdAt, rewardEarned",
          "Add indexes on customerId and code",
          "Add relationships"
        ],
        code: `@Entity('referral_code')
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
}`,
        expectedResult: "Referral code entities created",
        aiPrompt: "Help me create ReferralCode and ReferralRelationship entities for a NestJS cryptocurrency exchange. I need to track referral codes, relationships between referrers and referred users, and rewards earned.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the referral entities based on the Java implementation at src/main/java/ir/arnitex/backend/service/ReferralCodeService.java"
      },
      {
        step: 2,
        title: "Implement Referral Code Generation",
        instructions: [
          "Create `generateCode()` method",
          "Generate unique code for customer",
          "Use customer ID or username as base",
          "Ensure uniqueness",
          "Save to database",
          "Return referral code"
        ],
        code: `async generateCode(customer: Customer): Promise<ReferralCode> {
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
}`,
        expectedResult: "Unique referral codes can be generated for users",
        aiPrompt: "Help me implement referral code generation in NestJS. I need to create unique codes for each customer, optionally based on their username, and ensure uniqueness in the database.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral code generation based on the Java implementation."
      },
      {
        step: 3,
        title: "Implement Referral Tracking",
        instructions: [
          "Create `trackReferral()` method",
          "Validate referral code exists",
          "Create referral relationship",
          "Link referrer to new user",
          "Calculate initial reward",
          "Credit referrer wallet",
          "Return tracking result"
        ],
        code: `async trackReferral(code: string, referredCustomer: Customer): Promise<ReferralRelationship> {
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
}`,
        expectedResult: "Referral relationships can be tracked and rewards credited",
        aiPrompt: "Help me implement referral tracking logic in NestJS. I need to validate codes, create relationships between referrers and referred users, prevent self-referrals, and credit initial rewards.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral tracking based on the Java implementation."
      },
      {
        step: 4,
        title: "Implement Reward Calculation",
        instructions: [
          "Create `calculateReward()` method",
          "Calculate based on referred user activity",
          "Support percentage-based rewards",
          "Calculate from trades, deposits, etc.",
          "Apply reward tiers if applicable",
          "Return calculated reward amount"
        ],
        code: `async calculateReward(referredCustomerId: number, activityType: string, amount: number): Promise<number> {
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
}`,
        expectedResult: "Referral rewards can be calculated based on activity",
        aiPrompt: "Help me implement referral reward calculation in NestJS. I need to calculate rewards based on referred user activity (trades, deposits), apply percentage-based rewards, and support different reward tiers.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral reward calculation based on the Java implementation."
      },
      {
        step: 5,
        title: "Implement Referral Statistics",
        instructions: [
          "Create `getStatistics()` method",
          "Count total referrals",
          "Calculate total rewards earned",
          "Get active referrals count",
          "Calculate conversion rate",
          "Return statistics DTO"
        ],
        code: `async getStatistics(customerId: number): Promise<ReferralStatisticsDto> {
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
}`,
        expectedResult: "Referral statistics available for users",
        aiPrompt: "Help me implement referral statistics in NestJS. I need to calculate total referrals, rewards earned, active referrals, conversion rates, and provide analytics for users.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement referral statistics based on the Java implementation."
      }
    ],
    nextTask: "BlogService",
    unlockMessage: "🔗 Referral service ready! Now build content management."
  },

  BlogService: {
    order: 25,
    title: "🎮 Level 25: Blog Service",
    description: "Build content management and blog post service with CRUD, publishing, SEO, and image handling.",
    steps: [
      {
        step: 1,
        title: "Create Blog Post Entity",
        instructions: [
          "Create `BlogPost` entity with fields: id, title, content, excerpt, slug, category, tags, authorId, status, publishedAt, views, imageUrl, seoTitle, seoDescription",
          "Add indexes on slug, category, status",
          "Add relationships to Customer (author)",
          "Add validation decorators"
        ],
        code: `@Entity('blog_post')
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
}`,
        expectedResult: "Blog post entity created",
        aiPrompt: "Help me create a BlogPost entity for a NestJS cryptocurrency exchange. I need fields for title, content, slug, category, tags, author, status, publishing dates, views, images, and SEO metadata.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me create the BlogPost entity based on the Java implementation at src/main/java/ir/arnitex/backend/service/BlogService.java"
      },
      {
        step: 2,
        title: "Implement Blog Post CRUD Operations",
        instructions: [
          "Create `create()` method",
          "Generate slug from title",
          "Set author from authenticated user",
          "Save as DRAFT by default",
          "Create `findAll()` with pagination and filters",
          "Create `findOne()` by ID or slug",
          "Create `update()` method",
          "Create `delete()` method"
        ],
        code: `async create(dto: CreateBlogDto, authorId: number): Promise<BlogPost> {
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
}`,
        expectedResult: "Blog posts can be created, listed, and managed",
        aiPrompt: "Help me implement blog post CRUD operations in NestJS. I need to create posts with slug generation, list posts with pagination and filtering, update posts, and delete posts.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post CRUD operations based on the Java implementation."
      },
      {
        step: 3,
        title: "Implement Publishing Workflow",
        instructions: [
          "Create `publish()` method",
          "Set status to PUBLISHED",
          "Set publishedAt timestamp",
          "Create `unpublish()` method",
          "Set status back to DRAFT",
          "Create `schedulePublish()` for future publishing",
          "Add scheduled task to check scheduled posts"
        ],
        code: `async publish(id: number): Promise<BlogPost> {
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
}`,
        expectedResult: "Blog posts can be published, unpublished, and scheduled",
        aiPrompt: "Help me implement blog post publishing workflow in NestJS. I need to publish/unpublish posts, schedule posts for future publishing, and create a cron job to check scheduled posts.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post publishing workflow based on the Java implementation."
      },
      {
        step: 4,
        title: "Implement Image Upload and Management",
        instructions: [
          "Create `uploadImage()` method",
          "Use FileInterceptor for image upload",
          "Validate image type and size",
          "Save to storage (local or cloud)",
          "Return image URL",
          "Create `deleteImage()` method",
          "Update blog post with imageUrl"
        ],
        code: `async uploadImage(file: Express.Multer.File): Promise<string> {
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
}`,
        expectedResult: "Blog post images can be uploaded and managed",
        aiPrompt: "Help me implement image upload and management for blog posts in NestJS. I need to validate images, save them to storage, return URLs, and handle image deletion when posts are updated.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog post image management based on the Java implementation."
      },
      {
        step: 5,
        title: "Implement SEO and Search Functionality",
        instructions: [
          "Create `updateSEO()` method",
          "Set seoTitle and seoDescription",
          "Auto-generate SEO fields from content if not provided",
          "Create `search()` method",
          "Search in title, content, tags",
          "Return search results with relevance",
          "Implement view counter increment"
        ],
        code: `async updateSEO(id: number, seoData: SEODataDto): Promise<BlogPost> {
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
}`,
        expectedResult: "Blog posts have SEO support and search functionality",
        aiPrompt: "Help me implement SEO and search functionality for blog posts in NestJS. I need to manage SEO metadata, implement full-text search, and track view counts.",
        javaImportPrompt: "I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement blog SEO and search based on the Java implementation."
      }
    ],
    nextTask: "PaymentGateway",
    unlockMessage: "📝 Blog service ready! Now build payment gateways."
  },

  PaymentGateway: {
    order: 22,
    title: "🎮 Level 22: Payment Gateway Service",
    description: "Build fiat payment gateway integrations (Vandar, Jibit, NextPay, etc.).",
    steps: [
      {
        step: 1,
        title: "Create Payment Gateway Module",
        instructions: [
          "Generate module: `nest g module payment-gateways`",
          "Create interface: `IPaymentGateway`",
          "Create implementations for each gateway",
          "Set up gateway factory pattern"
        ],
        code: "nest g module payment-gateways",
        expectedResult: "Payment gateway module structure created"
      },
      {
        step: 2,
        title: "Implement Vandar Gateway",
        instructions: [
          "Create `VandarService` implementing `IPaymentGateway`",
          "Implement `deposit()` method",
          "Call Vandar API: `POST /api/v3/transaction`",
          "Generate redirect URL",
          "Store transaction in database",
          "Return GatewayResponseDTO"
        ],
        code: `async deposit(request: GatewayDepositDto, customer: Customer): Promise<GatewayResponseDTO> {
  const response = await this.httpClient.post('https://ipg.vandar.io/api/v3/transaction', {
    api_key: process.env.VANDAR_API_KEY,
    amount: request.amount,
    callback_url: process.env.VANDAR_CALLBACK_URL
  });
  
  return { redirectUrl: response.data.token, transactionId: response.data.trans_token };
}`,
        expectedResult: "Vandar deposits work"
      },
      {
        step: 3,
        title: "Implement Gateway Callback Handler",
        instructions: [
          "Create `handleCallback()` method",
          "Verify callback signature",
          "Check transaction status",
          "Update deposit request status",
          "Credit customer wallet",
          "Send confirmation notification"
        ],
        code: `async handleCallback(gateway: string, callbackData: any): Promise<void> {
  const gatewayService = this.gatewayFactory.getService(gateway);
  const verified = await gatewayService.verifyCallback(callbackData);
  
  if (verified.status === 'SUCCESS') {
    await this.creditCustomerWallet(verified.transactionId);
  }
}`,
        expectedResult: "Callbacks processed correctly"
      },
      {
        step: 4,
        title: "Implement Withdrawal to Bank",
        instructions: [
          "Create `withdraw()` method",
          "Validate IBAN format",
          "Call gateway withdrawal API",
          "Create withdrawal request",
          "Track settlement status",
          "Return withdrawal response"
        ],
        code: `async withdraw(iban: string, amount: number, trackId: string): Promise<GatewayWithdrawResponseDTO> {
  const response = await this.httpClient.post('/withdraw', {
    iban,
    amount,
    trackId
  });
  
  return { status: response.data.status, settlementId: response.data.id };
}`,
        expectedResult: "Withdrawals to bank work"
      },
      {
        step: 5,
        title: "Implement Settlement Reconciliation",
        instructions: [
          "Create scheduled task for settlement",
          "Query gateway for pending settlements",
          "Update withdrawal statuses",
          "Reconcile with database records",
          "Handle failed settlements"
        ],
        code: `@Cron('0 */6 * * *') // Every 6 hours
async reconcileSettlements() {
  const settlements = await this.getPendingSettlements();
  for (const settlement of settlements) {
    await this.updateSettlementStatus(settlement);
  }
}`,
        expectedResult: "Settlements reconciled automatically"
      }
    ],
    nextTask: null,
    unlockMessage: "💳 Payment gateways ready! Project is complete! 🎉"
  }
}

// Get next available task based on completion
export const getNextTask = (tasks) => {
  const guides = Object.values(stepByStepGuides).sort((a, b) => a.order - b.order)
  
  // Map guide keys to task IDs - 30 SUPER DETAILED TASKS
  const guideToTaskId = {
    'Level1_ProjectSetup': 'Level1_ProjectSetup',
    'Level2_DatabaseAuth': 'Level2_DatabaseAuth',
    'Level3_CustomerIdentity': 'Level3_CustomerIdentity',
    'Level4_Notifications': 'Level4_Notifications',
    'Level5_WalletServices': 'Level5_WalletServices',
    'Level6_Blockchain': 'Level6_Blockchain',
    'Level7_TradingEngine': 'Level7_TradingEngine',
    'Level8_MarketManagement': 'Level8_MarketManagement',
    'Level9_TradingControllers': 'Level9_TradingControllers',
    'Level10_WalletController': 'Level10_WalletController',
    'Level11_PaymentGateways': 'Level11_PaymentGateways',
    'Level12_KYCIdentity': 'Level12_KYCIdentity',
    'Level13_AdminRBAC': 'Level13_AdminRBAC',
    'Level14_OTCExchange': 'Level14_OTCExchange',
    'Level15_SupportContent': 'Level15_SupportContent',
    'Level16_Promotional': 'Level16_Promotional',
    'Level17_AdditionalServices': 'Level17_AdditionalServices',
    'Level18_TestingDocumentation': 'Level18_TestingDocumentation',
    'Level19_ScheduledTasks': 'Level19_ScheduledTasks',
    'Level20_WebSocketRealtime': 'Level20_WebSocketRealtime',
    'Level21_ErrorHandlingLogging': 'Level21_ErrorHandlingLogging',
    'Level22_PerformanceCaching': 'Level22_PerformanceCaching',
    'Level23_SecurityHardening': 'Level23_SecurityHardening',
    'Level24_DataMigrationSeeding': 'Level24_DataMigrationSeeding',
    'Level25_UnitTesting': 'Level25_UnitTesting',
    'Level26_IntegrationTesting': 'Level26_IntegrationTesting',
    'Level27_DeploymentDevOps': 'Level27_DeploymentDevOps',
    'Level28_MonitoringHealthChecks': 'Level28_MonitoringHealthChecks',
    'Level29_APIDocumentation': 'Level29_APIDocumentation',
    'Level30_FinalDocumentation': 'Level30_FinalDocumentation'
  }
  
  for (const guide of guides) {
    const guideKey = Object.keys(stepByStepGuides).find(key => stepByStepGuides[key] === guide)
    const taskId = guideToTaskId[guideKey]
    if (!taskId) continue
    
    const task = tasks[taskId]
    
    // Return the first task that is NOT completed
    // If task doesn't exist, it's not started, so return it
    // If task exists but is not completed, return it
    if (!task) {
      return { id: taskId, guide: guide }
    }
    
    if (task.status !== 'completed') {
      return { id: taskId, guide: guide }
    }
    
    // If task is completed, continue to next task
  }
  
  return null // All tasks completed
}

// Generate a basic guide for tasks that don't have one
const generateBasicGuide = (taskId, taskTitle, taskDescription, taskCategory) => {
  const isController = taskId.includes('Controller') || taskId.endsWith('C')
  const isService = taskId.includes('Service') || taskId.endsWith('S')
  
  let steps = []
  let order = 100 // Default order for dynamically created tasks
  
  if (isController) {
    steps = [
      {
        step: 1,
        title: `Create ${taskTitle} Module`,
        instructions: [
          `Generate module: \`nest g module ${taskId.toLowerCase().replace('controller', '')}\``,
          `Generate service: \`nest g service ${taskId.toLowerCase().replace('controller', '')}\``,
          `Generate controller: \`nest g controller ${taskId.toLowerCase().replace('controller', '')}\``,
          `Import TypeOrmModule.forFeature([Entity])`
        ],
        code: `nest g module \${taskId.toLowerCase().replace('controller', '')}\nnest g service \${taskId.toLowerCase().replace('controller', '')}\nnest g controller \${taskId.toLowerCase().replace('controller', '')}`,
        expectedResult: `${taskTitle} module structure created`,
        aiPrompt: `Help me create a ${taskTitle} for a NestJS cryptocurrency exchange. I need to generate the module, service, and controller using NestJS CLI, and set up the basic structure with proper DTOs and guards.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${taskId}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript. Maintain the same functionality, endpoints, business logic, and data structures.`
      },
      {
        step: 2,
        title: `Implement Core Endpoints`,
        instructions: [
          `Create DTOs for request/response`,
          `Implement main endpoints based on Java controller`,
          `Add proper validation pipes`,
          `Add JWT guards and RBAC decorators`
        ],
        code: `@Get()\n@UseGuards(JwtAuthGuard)\nasync findAll() {\n  return this.service.findAll();\n}`,
        expectedResult: `Core endpoints working with authentication`,
        aiPrompt: `Help me implement the core endpoints for ${taskTitle} in NestJS. I need to create DTOs, add validation, implement the endpoints, and add proper authentication guards.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/controller/${taskId}.java. Please read the Java source file, understand its endpoints and implementation, and translate them to NestJS TypeScript with proper DTOs, validation, and guards.`
      },
      {
        step: 3,
        title: `Add Service Logic`,
        instructions: [
          `Implement business logic in service`,
          `Add database operations with TypeORM`,
          `Handle errors and exceptions`,
          `Add logging`
        ],
        code: `async findAll(): Promise<Entity[]> {\n  return this.repository.find();\n}`,
        expectedResult: `Service logic implemented and tested`,
        aiPrompt: `Help me implement the service logic for ${taskTitle} in NestJS. I need to add business logic, database operations using TypeORM, error handling, and logging.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java service file for this component is located at: src/main/java/ir/arnitex/backend/service/${taskId.replace('Controller', 'Service')}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`
      },
      {
        step: 4,
        title: `Write Tests`,
        instructions: [
          `Create unit tests for service`,
          `Create integration tests for controller`,
          `Test all endpoints`,
          `Test error cases`
        ],
        code: `describe('\${taskTitle}', () => {\n  it('should be defined', () => {\n    expect(service).toBeDefined();\n  });\n});`,
        expectedResult: `All tests passing`,
        aiPrompt: `Help me write comprehensive tests for ${taskTitle} in NestJS. I need unit tests for the service and integration tests for the controller endpoints.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${taskTitle} based on the Java implementation.`
      }
    ]
  } else if (isService) {
    steps = [
      {
        step: 1,
        title: `Create ${taskTitle} Service`,
        instructions: [
          `Generate service: \`nest g service ${taskId.toLowerCase().replace('service', '')}\``,
          `Import required dependencies`,
          `Set up TypeORM repository if needed`,
          `Create service class with @Injectable()`
        ],
        code: `nest g service \${taskId.toLowerCase().replace('service', '')}`,
        expectedResult: `${taskTitle} service created`,
        aiPrompt: `Help me create a ${taskTitle} for a NestJS cryptocurrency exchange. I need to generate the service using NestJS CLI and set up the basic structure.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${taskId}.java. Please read the Java source file, understand its implementation, and translate it to NestJS TypeScript.`
      },
      {
        step: 2,
        title: `Implement Core Business Logic`,
        instructions: [
          `Implement main service methods`,
          `Add database operations with TypeORM`,
          `Handle business rules and validations`,
          `Add error handling`
        ],
        code: `async create(data: CreateDto): Promise<Entity> {\n  return this.repository.save(data);\n}`,
        expectedResult: `Core business logic implemented`,
        aiPrompt: `Help me implement the core business logic for ${taskTitle} in NestJS. I need to add service methods, database operations using TypeORM, business validations, and error handling.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. The Java source file for this component is located at: src/main/java/ir/arnitex/backend/service/${taskId}.java. Please read the Java service file, understand its business logic, and translate it to NestJS TypeScript with TypeORM.`
      },
      {
        step: 3,
        title: `Add Error Handling and Logging`,
        instructions: [
          `Add try-catch blocks`,
          `Create custom exceptions if needed`,
          `Add logging with NestJS Logger`,
          `Handle edge cases`
        ],
        code: `try {\n  return await this.repository.save(data);\n} catch (error) {\n  this.logger.error('Error creating entity', error);\n  throw new BadRequestException('Failed to create');\n}`,
        expectedResult: `Error handling and logging implemented`,
        aiPrompt: `Help me add proper error handling and logging for ${taskTitle} in NestJS. I need try-catch blocks, custom exceptions, NestJS Logger, and edge case handling.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me add error handling and logging for ${taskTitle} based on the Java implementation.`
      },
      {
        step: 4,
        title: `Write Tests`,
        instructions: [
          `Create unit tests for service methods`,
          `Mock dependencies`,
          `Test all business logic`,
          `Test error cases`
        ],
        code: `describe('\${taskTitle}', () => {\n  it('should be defined', () => {\n    expect(service).toBeDefined();\n  });\n});`,
        expectedResult: `All tests passing`,
        aiPrompt: `Help me write comprehensive unit tests for ${taskTitle} in NestJS. I need to test all service methods with mocked dependencies.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${taskTitle} based on the Java implementation.`
      }
    ]
  } else {
    // Generic task guide
    steps = [
      {
        step: 1,
        title: `Set Up ${taskTitle}`,
        instructions: [
          `Create necessary files and structure`,
          `Install required dependencies`,
          `Configure module`,
          `Set up basic implementation`
        ],
        code: `// Set up \${taskTitle}`,
        expectedResult: `${taskTitle} set up and ready`,
        aiPrompt: `Help me set up ${taskTitle} for a NestJS cryptocurrency exchange. ${taskDescription || 'I need to implement this component.'}`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. Please help me translate ${taskTitle} to NestJS TypeScript.`
      },
      {
        step: 2,
        title: `Implement Core Functionality`,
        instructions: [
          `Implement main features`,
          `Add required logic`,
          `Test functionality`,
          `Handle edge cases`
        ],
        code: `// Implement \${taskTitle}`,
        expectedResult: `Core functionality working`,
        aiPrompt: `Help me implement the core functionality for ${taskTitle} in NestJS. ${taskDescription || 'I need to add the main features.'}`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me implement ${taskTitle} based on the Java implementation.`
      },
      {
        step: 3,
        title: `Test and Refine`,
        instructions: [
          `Write tests`,
          `Fix any issues`,
          `Optimize performance`,
          `Update documentation`
        ],
        code: `// Test \${taskTitle}`,
        expectedResult: `${taskTitle} tested and working`,
        aiPrompt: `Help me test and refine ${taskTitle} in NestJS. I need to write tests, fix issues, optimize, and document.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me test and refine ${taskTitle} based on the Java implementation.`
      }
    ]
  }
  
  return {
    order,
    title: `🎮 ${taskTitle}`,
    description: taskDescription || `Implement ${taskTitle} for BitniTex exchange`,
    steps,
    nextTask: null,
    unlockMessage: `✅ ${taskTitle} complete!`
  }
}

// Get task guide by task ID
export const getTaskGuide = (taskId) => {
  // Map task IDs to guide keys - 30 SUPER DETAILED TASKS
  const taskIdToGuide = {
    'Level1_ProjectSetup': 'Level1_ProjectSetup',
    'Level2_DatabaseAuth': 'Level2_DatabaseAuth',
    'Level3_CustomerIdentity': 'Level3_CustomerIdentity',
    'Level4_Notifications': 'Level4_Notifications',
    'Level5_WalletServices': 'Level5_WalletServices',
    'Level6_Blockchain': 'Level6_Blockchain',
    'Level7_TradingEngine': 'Level7_TradingEngine',
    'Level8_MarketManagement': 'Level8_MarketManagement',
    'Level9_TradingControllers': 'Level9_TradingControllers',
    'Level10_WalletController': 'Level10_WalletController',
    'Level11_PaymentGateways': 'Level11_PaymentGateways',
    'Level12_KYCIdentity': 'Level12_KYCIdentity',
    'Level13_AdminRBAC': 'Level13_AdminRBAC',
    'Level14_OTCExchange': 'Level14_OTCExchange',
    'Level15_SupportContent': 'Level15_SupportContent',
    'Level16_Promotional': 'Level16_Promotional',
    'Level17_AdditionalServices': 'Level17_AdditionalServices',
    'Level18_TestingDocumentation': 'Level18_TestingDocumentation',
    'Level19_ScheduledTasks': 'Level19_ScheduledTasks',
    'Level20_WebSocketRealtime': 'Level20_WebSocketRealtime',
    'Level21_ErrorHandlingLogging': 'Level21_ErrorHandlingLogging',
    'Level22_PerformanceCaching': 'Level22_PerformanceCaching',
    'Level23_SecurityHardening': 'Level23_SecurityHardening',
    'Level24_DataMigrationSeeding': 'Level24_DataMigrationSeeding',
    'Level25_UnitTesting': 'Level25_UnitTesting',
    'Level26_IntegrationTesting': 'Level26_IntegrationTesting',
    'Level27_DeploymentDevOps': 'Level27_DeploymentDevOps',
    'Level28_MonitoringHealthChecks': 'Level28_MonitoringHealthChecks',
    'Level29_APIDocumentation': 'Level29_APIDocumentation',
    'Level30_FinalDocumentation': 'Level30_FinalDocumentation'
  }
  
  // Check if we have a predefined guide
  const guideKey = taskIdToGuide[taskId]
  if (guideKey && stepByStepGuides[guideKey]) {
    return stepByStepGuides[guideKey]
  }
  
  // Generate a basic guide for tasks without one
  // This will be called with task info from the component
  return null // Return null to trigger basic guide generation in component
}

