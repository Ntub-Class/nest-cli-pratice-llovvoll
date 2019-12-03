import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {

    getAllStudent(): string {
        return 'This API for getAllStudent';
    }

    getOneStudent(id): string {
        return `This API for getOneStudent\nID:${id}`;
    }

    postStudent(): string {
        return 'This API for postStudent';
    }

    putStudent(body, id): string {
        return `This API for putStudent\n Body:${body}\n ID:${id}`;
    }
    
    deleteStudent(id): string {
        return `This API for deleteStudent\n ID:${id}`
    }
}


