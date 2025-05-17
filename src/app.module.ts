import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Task } from './tasks/task.entity';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', // o tu usuario
      password: 'Colita2010',       // o tu contraseña
      database: 'apicurso',  // nombre de tu base de datos
      entities: [User, Task],
      synchronize: true,     // crea tablas automáticamente
    }),
    UsersModule,
    TasksModule,
  ],
})
export class AppModule {}
