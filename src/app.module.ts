import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { AppController } from './app.controller';

@Module({
  imports: [EmployeesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
