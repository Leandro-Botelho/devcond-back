import { Module } from '@nestjs/common';
import { ServiceUserService } from './service-user.service';
import { ServiceUserController } from './service-user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceUser } from './entities/service-user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceUser])],
  controllers: [ServiceUserController],
  providers: [ServiceUserService],
  exports: [ServiceUserService],
})
export class ServiceUserModule {}
