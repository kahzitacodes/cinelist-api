import { Schema, model } from "mongoose";

const listSchema = new Schema(
    {
        author: { type: String, required: true },
        listTitle: { type: String, required: true },
        listDescription: { type: String, required: true },
        listMovies: [{ type: Object, required: true }]
    },
    { timestamps: true });

export const ListModel = model("List", listSchema);