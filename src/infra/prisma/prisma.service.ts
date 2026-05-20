import { OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      log: ['query', 'info', 'warn', 'error'],
    })
  }
  onModuleDestroy() {
    return this.$disconnect()
  }
  onModuleInit() {
    return this.$connect()
  }
}
