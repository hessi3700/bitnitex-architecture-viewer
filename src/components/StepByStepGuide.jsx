import React, { useState, useEffect } from 'react'
import { getTaskGuide } from '../data/stepByStepGuides'
import './StepByStepGuide.css'

// Generate a basic guide for tasks that don't have one
const generateBasicGuide = (task) => {
  if (!task || !task.id) {
    return {
      order: 999,
      title: "Task Guide",
      description: "No guide available for this task",
      steps: []
    }
  }
  
  const taskId = task.id
  const taskTitle = task.title || taskId
  const taskDescription = task.description || ''
  const isController = taskId && (taskId.includes('Controller') || taskId.endsWith('C'))
  const isService = taskId && (taskId.includes('Service') || taskId.endsWith('S'))
  
  let steps = []
  
  if (isController) {
    const moduleName = taskId.toLowerCase().replace('controller', '')
    steps = [
      {
        step: 1,
        title: `Create ${taskTitle} Module`,
        instructions: [
          `Generate module: \`nest g module ${moduleName}\``,
          `Generate service: \`nest g service ${moduleName}\``,
          `Generate controller: \`nest g controller ${moduleName}\``,
          `Import TypeOrmModule.forFeature([Entity])`
        ],
        code: `nest g module ${moduleName}\nnest g service ${moduleName}\nnest g controller ${moduleName}`,
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
        code: `describe('${taskTitle}', () => {\n  it('should be defined', () => {\n    expect(service).toBeDefined();\n  });\n});`,
        expectedResult: `All tests passing`,
        aiPrompt: `Help me write comprehensive tests for ${taskTitle} in NestJS. I need unit tests for the service and integration tests for the controller endpoints.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me write tests for ${taskTitle} based on the Java implementation.`
      }
    ]
  } else if (isService) {
    const serviceName = taskId.toLowerCase().replace('service', '')
    steps = [
      {
        step: 1,
        title: `Create ${taskTitle} Service`,
        instructions: [
          `Generate service: \`nest g service ${serviceName}\``,
          `Import required dependencies`,
          `Set up TypeORM repository if needed`,
          `Create service class with @Injectable()`
        ],
        code: `nest g service ${serviceName}`,
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
        code: `describe('${taskTitle}', () => {\n  it('should be defined', () => {\n    expect(service).toBeDefined();\n  });\n});`,
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
        code: `// Set up ${taskTitle}`,
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
        code: `// Implement ${taskTitle}`,
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
        code: `// Test ${taskTitle}`,
        expectedResult: `${taskTitle} tested and working`,
        aiPrompt: `Help me test and refine ${taskTitle} in NestJS. I need to write tests, fix issues, optimize, and document.`,
        javaImportPrompt: `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. Please help me test and refine ${taskTitle} based on the Java implementation.`
      }
    ]
  }
  
  return {
    order: 100,
    title: `🎮 ${taskTitle}`,
    description: taskDescription || `Implement ${taskTitle} for BitniTex exchange`,
    steps,
    nextTask: null,
    unlockMessage: `✅ ${taskTitle} complete!`
  }
}

// Mapping of task IDs to Java source file paths
// Note: Tasks that don't have Java files (setup, infrastructure, new features)
const tasksWithoutJavaFiles = [
  'Level1_ProjectSetup',
  'Level19_ScheduledTasks',
  'Level20_WebSocketRealtime',
  'Level21_ErrorHandlingLogging',
  'Level22_PerformanceCaching',
  'Level23_SecurityHardening',
  'Level24_DataMigrationSeeding',
  'Level25_UnitTesting',
  'Level26_IntegrationTesting',
  'Level27_DeploymentDevOps',
  'Level28_MonitoringHealthChecks',
  'Level29_APIDocumentation',
  'Level30_FinalDocumentation'
]

// Java file mapping - only for tasks that have corresponding Java files
const javaFileMapping = {
  // Controllers
  'CustomerController': 'src/main/java/ir/arnitex/backend/controller/CustomerController.java',
  'OrderController': 'src/main/java/ir/arnitex/backend/controller/OrderController.java',
  'WalletController': 'src/main/java/ir/arnitex/backend/controller/WalletController.java',
  'TradeController': 'src/main/java/ir/arnitex/backend/controller/TradeController.java',
  'MarketController': 'src/main/java/ir/arnitex/backend/controller/MarketController.java',
  'CoinController': 'src/main/java/ir/arnitex/backend/controller/CoinController.java',
  'AdminController': 'src/main/java/ir/arnitex/backend/controller/AdminController.java',
  'GiftCodeController': 'src/main/java/ir/arnitex/backend/controller/GiftCodeController.java',
  'ReferralCodeController': 'src/main/java/ir/arnitex/backend/controller/ReferralCodeController.java',
  'TicketController': 'src/main/java/ir/arnitex/backend/controller/TicketController.java',
  'BlogController': 'src/main/java/ir/arnitex/backend/controller/BlogController.java',
  'ExchangeActionController': 'src/main/java/ir/arnitex/backend/controller/ExchangeActionController.java',
  'RolesController': 'src/main/java/ir/arnitex/backend/controller/RolesController.java',
  
  // Services
  'OrderService': 'src/main/java/ir/arnitex/backend/service/OrderService.java',
  'WalletService': 'src/main/java/ir/arnitex/backend/service/WalletService.java',
  'ApieService': 'src/main/java/ir/arnitex/backend/service/ApieService.java',
  'TradeService': 'src/main/java/ir/arnitex/backend/service/TradeService.java',
  'CustomerService': 'src/main/java/ir/arnitex/backend/service/CustomerService.java',
  'MarketService': 'src/main/java/ir/arnitex/backend/service/MarketService.java',
  'CoinService': 'src/main/java/ir/arnitex/backend/service/CoinService.java',
  'AdminService': 'src/main/java/ir/arnitex/backend/service/AdminService.java',
  'GiftCodeService': 'src/main/java/ir/arnitex/backend/service/GiftCodeService.java',
  'ReferralCodeService': 'src/main/java/ir/arnitex/backend/service/ReferralCodeService.java',
  'TicketService': 'src/main/java/ir/arnitex/backend/service/TicketService.java',
  'BlogService': 'src/main/java/ir/arnitex/backend/service/BlogService.java',
  'RoleService': 'src/main/java/ir/arnitex/backend/service/RoleService.java',
  
  // Level mappings
  'Level2_DatabaseAuth': 'src/main/java/ir/arnitex/backend/domain/', // Entities directory
  'Level3_CustomerIdentity': 'src/main/java/ir/arnitex/backend/service/CustomerService.java',
  'Level4_Notifications': 'src/main/java/ir/arnitex/backend/service/', // EmailService, SMSService, NotificationService
  'Level5_WalletServices': 'src/main/java/ir/arnitex/backend/service/WalletService.java',
  'Level6_Blockchain': 'src/main/java/ir/arnitex/backend/service/ApieService.java',
  'Level7_TradingEngine': 'src/main/java/ir/arnitex/backend/service/OrderService.java',
  'Level8_MarketManagement': 'src/main/java/ir/arnitex/backend/service/MarketService.java',
  'Level9_TradingControllers': 'src/main/java/ir/arnitex/backend/controller/OrderController.java',
  'Level10_WalletController': 'src/main/java/ir/arnitex/backend/controller/WalletController.java',
  'Level11_PaymentGateways': 'src/main/java/ir/arnitex/backend/service/paymentgateway/',
  'Level12_KYCIdentity': 'src/main/java/ir/arnitex/backend/service/FinoTechService.java',
  'Level13_AdminRBAC': 'src/main/java/ir/arnitex/backend/service/AdminService.java',
  'Level14_OTCExchange': 'src/main/java/ir/arnitex/backend/service/ExchangeActionService.java',
  'Level15_SupportContent': 'src/main/java/ir/arnitex/backend/service/TicketService.java',
  'Level16_Promotional': 'src/main/java/ir/arnitex/backend/service/GiftCodeService.java',
  'Level17_AdditionalServices': 'src/main/java/ir/arnitex/backend/service/ExchangeSettingService.java',
  'Level18_TestingDocumentation': null // No Java file - testing and documentation
}

// Helper to check if task has Java file
const hasJavaFile = (taskId) => {
  if (tasksWithoutJavaFiles.includes(taskId)) return false
  return javaFileMapping[taskId] !== undefined && javaFileMapping[taskId] !== null
}

// Helper to get Java file path for task
const getJavaFilePath = (taskId) => {
  return javaFileMapping[taskId] || null
}

// Helper function to generate AI prompt if not provided
const generateAiPrompt = (stepData, taskTitle) => {
  const context = `I'm building a NestJS cryptocurrency exchange platform called BitniTex. `
  const taskContext = `This is part of: ${taskTitle}. `
  const stepGoal = `I need help with: ${stepData.title}. `
  const instructions = stepData.instructions.length > 0 
    ? `Here's what I need to do: ${stepData.instructions.join('. ')}. `
    : ''
  const codeHint = stepData.code 
    ? `I have this code/command: ${stepData.code}. `
    : ''
  const expected = stepData.expectedResult 
    ? `The expected result should be: ${stepData.expectedResult}. `
    : ''
  
  return `${context}${taskContext}${stepGoal}${instructions}${codeHint}${expected}Please provide clear instructions, code examples if needed, and explain any important concepts.`
}

// Helper function to generate Java Import Mode prompt
const generateJavaImportPrompt = (stepData, taskTitle, taskId) => {
  // Check if task has a Java file
  if (!hasJavaFile(taskId)) {
    // For tasks without Java files, provide a generic prompt without referencing Java files
    return `I'm building a NestJS cryptocurrency exchange platform called BitniTex. This step involves: ${stepData.title}. ${stepData.instructions.join('. ')}. ${stepData.expectedResult ? `The expected result should be: ${stepData.expectedResult}.` : ''} Please help me implement this step with best practices for NestJS. Note: This is a new feature or infrastructure setup, so there is no existing Java code to reference.`
  }
  
  const javaFilePath = getJavaFilePath(taskId)
  if (!javaFilePath) {
    return generateAiPrompt(stepData, taskTitle)
  }
  
  const context = `I'm migrating a Spring Boot cryptocurrency exchange to NestJS. The original Java Spring Boot project is available in this codebase. `
  const isDirectory = javaFilePath.endsWith('/')
  const fileReference = isDirectory 
    ? `The Java source files for this component are located in: ${javaFilePath} `
    : `The Java source file for this component is located at: ${javaFilePath} `
  const taskContext = `This is part of: ${taskTitle}. `
  const stepGoal = `I need to translate and implement: ${stepData.title}. `
  const instructions = stepData.instructions.length > 0 
    ? `The step involves: ${stepData.instructions.join('. ')}. `
    : ''
  const expected = stepData.expectedResult 
    ? `The expected result should be: ${stepData.expectedResult}. `
    : ''
  
  const readInstruction = isDirectory
    ? `Please read all Java source files in the directory ${javaFilePath}, understand their implementations, and translate them to NestJS TypeScript.`
    : `Please read the Java source file at ${javaFilePath}, understand its implementation, and translate it to NestJS TypeScript.`
  
  return `${context}${fileReference}${taskContext}${stepGoal}${instructions}${expected}${readInstruction} Maintain the same functionality, endpoints, business logic, and data structures. Adapt Spring Boot annotations to NestJS decorators, Spring Data JPA to TypeORM, and Java types to TypeScript types.`
}

const StepByStepGuide = ({ task, onCompleteStep, onNextTask }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())
  const [mode, setMode] = useState('classic') // 'classic', 'ai', or 'java-import'
  
  // Reset step when task changes
  useEffect(() => {
    if (task) {
      setCurrentStep(0)
      setCompletedSteps(new Set())
    }
  }, [task?.id])
  
  if (!task || !task.id) {
    return <div className="step-guide-container">No task selected</div>
  }
  
  let guide = getTaskGuide(task.id)
  
  // If no predefined guide exists, generate a basic one
  if (!guide) {
    guide = generateBasicGuide(task)
  }
  
  if (!guide || !guide.steps || guide.steps.length === 0) {
    return <div className="step-guide-container">No guide available for this task</div>
  }

  const steps = guide.steps
  const currentStepData = steps[currentStep]

  const handleStepComplete = () => {
    const newCompleted = new Set(completedSteps)
    newCompleted.add(currentStep)
    setCompletedSteps(newCompleted)
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // All steps complete
      onCompleteStep?.()
    }
  }

  // Reset step when task changes
  React.useEffect(() => {
    if (task && guide) {
      setCurrentStep(0)
      setCompletedSteps(new Set())
    }
  }, [task?.id])

  const handleStepSkip = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="step-guide-container">
      <div className="step-guide-header">
        <div className="step-guide-title-section">
          <h2 className="step-guide-title">{guide.title}</h2>
          <p className="step-guide-description">{guide.description}</p>
        </div>
        <div className="step-guide-controls">
          <div className="step-guide-progress">
            <div className="step-progress-bar">
              <div 
                className="step-progress-fill" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="step-progress-text">
              Step {currentStep + 1} of {steps.length}
            </span>
          </div>
          <div className="mode-toggle">
            <button
              className={`mode-toggle-btn ${mode === 'classic' ? 'active' : ''}`}
              onClick={() => setMode('classic')}
              title="Classic Step-by-Step Mode"
            >
              📋 Classic
            </button>
            <button
              className={`mode-toggle-btn ${mode === 'ai' ? 'active' : ''}`}
              onClick={() => setMode('ai')}
              title="AI Mode - Get AI prompts"
            >
              🤖 AI Mode
            </button>
            <button
              className={`mode-toggle-btn ${mode === 'java-import' ? 'active' : ''}`}
              onClick={() => setMode('java-import')}
              title="Java Import Mode - Translate from Java source"
            >
              ☕ Java Import
            </button>
          </div>
        </div>
      </div>

      <div className="step-content">
        <div className="step-number-badge">
          <span className="step-number">{currentStepData.step}</span>
        </div>
        
        <div className="step-main-content">
          <h3 className="step-title">{currentStepData.title}</h3>
          
          {mode === 'ai' || mode === 'java-import' ? (
            // AI Mode or Java Import Mode View
            <div className="ai-mode-content">
              <div className="ai-prompt-section">
                <h4>{mode === 'java-import' ? '☕ Java Import Prompt:' : '🤖 AI Prompt:'}</h4>
                <div className={`ai-prompt-box ${mode === 'java-import' ? 'java-import-box' : ''}`}>
                  <p className="ai-prompt-text">
                    {mode === 'java-import' 
                      ? (currentStepData.javaImportPrompt || generateJavaImportPrompt(currentStepData, guide.title, task.id))
                      : (currentStepData.aiPrompt || generateAiPrompt(currentStepData, guide.title))
                    }
                  </p>
                  <button 
                    className="copy-code-btn"
                    onClick={() => {
                      const prompt = mode === 'java-import'
                        ? (currentStepData.javaImportPrompt || generateJavaImportPrompt(currentStepData, guide.title, task.id))
                        : (currentStepData.aiPrompt || generateAiPrompt(currentStepData, guide.title))
                      navigator.clipboard.writeText(prompt)
                      alert('Prompt copied to clipboard! Paste it into your AI assistant.')
                    }}
                  >
                    📋 Copy Prompt
                  </button>
                </div>
                <div className="ai-hint">
                  <p>
                    💡 <strong>Tip:</strong> {
                      mode === 'java-import' 
                        ? 'Copy this prompt and paste it into your AI assistant. The AI will read the Java source file from the project and translate it to NestJS TypeScript.'
                        : 'Copy this prompt and paste it into your AI assistant (like ChatGPT, Claude, or Cursor AI) to get help with this step!'
                    }
                  </p>
                </div>
              </div>

              {currentStepData.expectedResult && (
                <div className="ai-expected-result">
                  <h4>✅ Expected Result:</h4>
                  <p>{currentStepData.expectedResult}</p>
                </div>
              )}

              {mode === 'java-import' && (
                <div className="java-file-reference">
                  <h4>📁 Java Source File:</h4>
                  {javaFileMapping[task.id] ? (
                    <>
                      <div className="java-file-path">
                        <code>{javaFileMapping[task.id]}</code>
                        <button 
                          className="copy-code-btn"
                          onClick={() => {
                            navigator.clipboard.writeText(javaFileMapping[task.id])
                            alert('File path copied to clipboard!')
                          }}
                        >
                          📋 Copy Path
                        </button>
                      </div>
                      <p className="java-file-hint">The AI will read this file from the project codebase and translate it to NestJS.</p>
                    </>
                  ) : (
                    <p className="java-file-hint" style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      No specific Java file mapping for this task. The prompt will reference the general project structure.
                    </p>
                  )}
                </div>
              )}

              {currentStepData.code && (
                <div className="ai-code-reference">
                  <h4>💡 Reference Code (if needed):</h4>
                  <pre className="code-block">
                    <code>{currentStepData.code}</code>
                  </pre>
                  <button 
                    className="copy-code-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(currentStepData.code)
                      alert('Code copied to clipboard!')
                    }}
                  >
                    📋 Copy Code
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Classic Mode View
            <>
              <div className="step-instructions">
                <h4>📋 Instructions:</h4>
                <ol className="instructions-list">
                  {currentStepData.instructions.map((instruction, idx) => (
                    <li key={idx}>{instruction}</li>
                  ))}
                </ol>
              </div>

              {currentStepData.code && (
                <div className="step-code">
                  <h4>💻 Code:</h4>
                  <pre className="code-block">
                    <code>{currentStepData.code}</code>
                  </pre>
                  <button 
                    className="copy-code-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(currentStepData.code)
                      alert('Code copied to clipboard!')
                    }}
                  >
                    📋 Copy Code
                  </button>
                </div>
              )}

              {currentStepData.expectedResult && (
                <div className="step-expected-result">
                  <h4>✅ Expected Result:</h4>
                  <p>{currentStepData.expectedResult}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <div className="step-navigation">
        {currentStep > 0 && (
          <button 
            className="step-btn step-btn-secondary"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            ← Previous Step
          </button>
        )}
        
        <div className="step-actions">
          <button 
            className="step-btn step-btn-skip"
            onClick={handleStepSkip}
            disabled={currentStep === steps.length - 1}
          >
            Skip Step
          </button>
          <button 
            className="step-btn step-btn-primary"
            onClick={handleStepComplete}
          >
            {currentStep === steps.length - 1 ? '🎉 Complete Task' : '✓ Complete Step →'}
          </button>
        </div>
      </div>

      {currentStep === steps.length - 1 && completedSteps.has(currentStep) && guide.nextTask && (
        <div className="step-unlock-message">
          <div className="unlock-icon">🎉</div>
          <p className="unlock-text">{guide.unlockMessage}</p>
          {onNextTask && (
            <button 
              className="step-btn step-btn-unlock"
              onClick={() => onNextTask(guide.nextTask)}
            >
              Start Next Task →
            </button>
          )}
        </div>
      )}

      <div className="step-overview">
        <h4>Step Overview:</h4>
        <div className="steps-list">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className={`step-item ${idx === currentStep ? 'active' : ''} ${completedSteps.has(idx) ? 'completed' : ''}`}
              onClick={() => setCurrentStep(idx)}
            >
              <span className="step-item-number">{step.step}</span>
              <span className="step-item-title">{step.title}</span>
              {completedSteps.has(idx) && <span className="step-check">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StepByStepGuide

