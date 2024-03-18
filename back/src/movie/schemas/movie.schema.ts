import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps: true
})

export class Movie {

    @Prop()
    title: string;

    @Prop()
    director: string;

    @Prop()
    date: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);