import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPFModule } from './userpf/userpf.module';
import { UserPJModule } from './userpj/userpj.module';
import { AuthModule } from './auth/auth.module';  
import { UserPF } from './userpf/userpf.entity';
import { UserPJ } from './userpj/userpj.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'postgres',
      entities: [UserPF, UserPJ],
      synchronize: true,
    }),
    JwtModule.register({
      secret: "XU2U9Fxq7QdfXG+uL5yPz4DkMvZQkXr8Ml79pWQcM1os2dNw/txEaDp2k6iG9+uh" , 
      signOptions: { expiresIn: '60m' },  
    }),
    UserPFModule,
    UserPJModule,
    AuthModule,
  ],
})
export class AppModule {}
