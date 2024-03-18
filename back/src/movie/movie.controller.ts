import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { MovieService } from './movie.service';
import { Movie } from './schemas/movie.schema';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('movies')
export class MovieController {
    constructor(private movieService: MovieService) {}

    @Get()
    @UseGuards(AuthGuard())
    async getAllMovies(): Promise<Movie[]> {
    return this.movieService.findAll(); 
    }

    @Post()
    @UseGuards(AuthGuard())
    async createMovie(
        @Body()
        movie: CreateMovieDto,
    ): Promise<Movie> {
    return this.movieService.create(movie);
    }

    @Get(':id')
    @UseGuards(AuthGuard())
    async getOneMovie(
        @Param('id')
        id: string,
    ): Promise<Movie> {
    return this.movieService.findById(id); 
    }

    @Patch(':id')
    @UseGuards(AuthGuard())
    async UpdateMovie(
        @Param('id')
        id: string,
        @Body()
        movie: UpdateMovieDto,
    ): Promise<Movie> {
    return this.movieService.updateById(id, movie);
    }

    @Delete(':id')
    @UseGuards(AuthGuard())
    async deleteMovie(
        @Param('id')
        id: string,
    ): Promise<Movie> {
    return this.movieService.deleteById(id); 
    }
}

