import { Injectable } from "@nestjs/common";
import { UsersService } from '../users/users.service.js';
import { AppConfigService } from '../../config/app-config.service.js';
import { log } from "console";

@Injectable()
export class OrdersService {
    constructor(private readonly usersService: UsersService,
                private readonly config: AppConfigService) {}

    findOne(id: number) {
        log(`Finding order for user with id: ${id}`);
        const user = this.usersService.findOne(id);
        return {id, item: 'Mechanical Keyboard',
                shop: this.config.shopName,
                currency: this.config.currency,
                customer: user
            };
    }
}