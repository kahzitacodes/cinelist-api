import { Schema, model } from "mongoose";

const listSchema = new Schema({
    author: { type: String, required: true },
    list_title: { type: String, required: true },
    list_description: { type: String, required: true },
    list_movies: [{ type: Object, required: true }]
});

export const ListModel = model("List", listSchema);