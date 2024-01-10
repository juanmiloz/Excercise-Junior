import mongoose from "mongoose";
import {UUID} from "crypto";
import * as crypto from "crypto";

export interface LocationInput {
    // ID: UUID,
    lat: number,
    long: number,
    time: Date,
}

export interface LocationDocument extends LocationInput, mongoose.Document{
    createdAt: Date;
    updatedAt: Date;
    deleteAt?: Date;
}

const locationSchema = new mongoose.Schema({
    // ID: {type: mongoose.Schema.Types.UUID, require: true, unique: true, index: true},
    lat: {type: mongoose.Schema.Types.Number, require: true},
    long: {type: mongoose.Schema.Types.Number, require: true},
    time: {type: mongoose.Schema.Types.Date, require: true}
})

// locationSchema.pre("save", function (next){
//     // this.ID = Buffer.from(crypto.randomUUID(), 'utf-8')
//     next();
// })

const Location = mongoose.model<LocationDocument>("Location", locationSchema)

export default Location