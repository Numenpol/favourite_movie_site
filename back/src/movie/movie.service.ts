import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Movie } from './schemas/movie.schema';
import mongoose from 'mongoose';

@Injectable()
export class MovieService {
    constructor(
        @InjectModel(Movie.name)
        private movieModel: mongoose.Model<Movie>,
    ) {}

    async findAll(): Promise<Movie[]> {
        const movie = await this.movieModel.find();
        return movie;
    }

    async create(movie: Movie): Promise<Movie> {
        const res = await this.movieModel.create(movie);
        return res;
    }

    async findById(id: string): Promise<Movie> {

        const isValidId = mongoose.isValidObjectId(id);

        if (!isValidId) {
            throw new NotFoundException("Enter a valid id.");
        }

        const movie = await this.movieModel.findById(id);
        
        if (!movie) {
            throw new NotFoundException("Movie not found.");
        }
        return movie;
    }

    async updateById(id: string, movie: Movie): Promise<Movie> {
        return await this.movieModel.findByIdAndUpdate(id, movie, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Movie> {
        return await this.movieModel.findByIdAndDelete(id);
    }
}
