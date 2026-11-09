import { Controller, Get, Injectable, Logger } from '@nestjs/common';
import { log } from 'console';

@Injectable()
export class UsersService {

    private static count = 0

    private users = [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }, { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' }];

    constructor() {
        UsersService.count++;
        new Logger('UsersService').log(`Instance count: ${UsersService.count}`);
    }

    findOne(id: number) {
        return this.users.find(user => Number(user.id) === Number(id));
    }

}