import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { AuthenticateController } from './controllers/authenticate.controller'

@Module({
  controllers: [AuthenticateController],
  providers: [PrismaService],
})
export class HttpModule {}
