import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { User } from './user/entity/user.entity';
import { BlockModule } from './block/block.module';
import { SchedulingModule } from './scheduling/scheduling.module';

config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('TYPEORM_HOST'),
        port: configService.get('TYPEORM_PORT'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        database: configService.get('TYPEORM_DATABASE'),
        entities: [User],
        synchronize: false,
        autoLoadEntities: true,
        extra:
          process.env.NODE_ENV && process.env.NODE_ENV != 'local'
            ? {
                ssl: {
                  rejectUnauthorized: false,
                },
              }
            : null,
      }),
    }),
    AuthModule,
    UserModule,
    BlockModule,
    SchedulingModule,
  ],
})
export class AppModule {}
