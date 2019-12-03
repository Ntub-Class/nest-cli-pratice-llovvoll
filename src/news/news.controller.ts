import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    getAllNews() {
        return this.newsService.getAllNews()
    }

    @Get(':id')
    getOneNews(@Param('id') id) {
        return this.newsService.getOneNews(id)
    }

    @Post()
    postNews() {
        return this.newsService.postNews()
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id) {
        return this.newsService.putNews(body, id)
    }

    @Delete(':id')
    deleteNews(@Param('id') id) {
        return this.newsService.deleteNews(id)
    }
}
