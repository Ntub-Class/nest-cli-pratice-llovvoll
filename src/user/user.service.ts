import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getAllUser(): string {
        return 'This API for getAllUser';
    }

    getOneUser(id): string {
        return `This API for getOneUser\nID:${id}`;
    }

    postUser(): string {
        return 'This API for postUser';
    }

    putUser(body, id): string {
        return `This API for putUser\n Body:${body}\n ID:${id}`;
    }
    
    deleteUser(id): string {
        return `This API for deleteUser\n ID:${id}`
    }
}
