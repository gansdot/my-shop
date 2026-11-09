import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('test/:message')
    test(@Param('message') message: string) {
        return `Hello Mr ${message}`;
    }
}