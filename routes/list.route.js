import express from "express";
import { ListModel } from "../models/list.model.js";

const listRouter = express.Router();

listRouter.post('/', async (req, res) => {
    try {

        const newList = await ListModel.create(req.body);
        return res.status(201).json(newList);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

listRouter.get('/', async (req, res) => {
    try {

        const allLists = await ListModel.find({});
        return res.status(201).json(allLists);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

listRouter.get('/:listId', async (req, res) => {
    try {

        const list = await ListModel.find({
            _id: req.params.listId
        });
        return res.status(201).json(list);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

listRouter.put('/:listId', async (req, res) => {
    try {

        const listToUpdate = await ListModel.findOneAndUpdate(
            { _id: req.params.listId },
            { ...req.body },
            { new: true, runValidators: true }
        );
        return res.status(201).json(listToUpdate);

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

listRouter.delete("/:listId", async (req, res) => {
    try {

        await ListModel.findByIdAndDelete({ _id: req.params.listId });

        res.status(200).json({ mesage: "lista deletada com sucesso!" });

    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});

export { listRouter };