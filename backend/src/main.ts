import { NestFactory } from '@nestjs/core'
import { ValidationPipe } from '@nestjs/common'
import { AppModule } from './app.module'
import { json, urlencoded } from 'express'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  
  // Increase body size limit to 10MB (for large diagram/node data)
  app.use(json({ limit: '10mb' }))
  app.use(urlencoded({ limit: '10mb', extended: true }))
  
  // CORS: use FRONTEND_URL in production; else allow all origins (dev)
  const frontendUrl = process.env.FRONTEND_URL || process.env.CORS_ORIGIN
  const corsOrigin = frontendUrl ? frontendUrl.split(',').map((s) => s.trim()) : '*'
  app.enableCors({
    origin: corsOrigin,
    credentials: corsOrigin !== '*',
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Requested-With'],
    exposedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
  
  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  )
  
  const port = process.env.PORT || 3001
  // Listen on all network interfaces (0.0.0.0) to allow access from local network
  await app.listen(port, '0.0.0.0')
  console.log(`🚀 BitniTex Backend running on http://0.0.0.0:${port}`)
  console.log(`   Accessible from local network at http://<your-ip>:${port}`)
}

bootstrap()

