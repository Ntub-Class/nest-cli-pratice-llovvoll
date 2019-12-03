import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {

    getAllNews(): string {
        return 'This API for getAllNews';
    }

    getOneNews(id): string {
        return `This API for getOneNews\nID:${id}`;
    }

    postNews(): string {
        return 'This API for postNews';
    }

    putNews(body, id): string {
        return `This API for putNews\n Body:${body}\n ID:${id}`;
    }
    
    deleteNews(id): string {
        return `This API for deleteNews\n ID:${id}`
    }
}

