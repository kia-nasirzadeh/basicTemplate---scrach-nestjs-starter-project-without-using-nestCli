import { Get, Controller, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {

    @Get()
    getRootRoute () {
        return 'hi anywhere!';
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {

}

async function bootstrap () {
    const app = await NestFactory.create(AppModule);
    await app.listen(3000);
}
bootstrap();