import { Injectable } from '@nestjs/common';

@Injectable()
export class AppConfigService {
    readonly shopName = 'My Shop';
    readonly currency = 'EUR';

}

