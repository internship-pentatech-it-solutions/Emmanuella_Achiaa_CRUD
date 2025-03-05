const express = require("express");
const TODO = require("../model/todoModel");
const mongoose = require("mongoose");

const createTodo = async (req, res) => {
    const dbTodo = req.body;
    try {
        const creatingTodo = await TODO.create(dbTodo);
        res.status(201).send(creatingTodo);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getTodo = async (req, res) => {
    try {
        const getallTodo = await TODO.find().sort({ createdAt: -1 });
        res.status(200).send(getallTodo)
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { completed } = req.body;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("invalid id format");
        }
        const update = { completed }
        const updatedTodo = await TODO.findByIdAndUpdate(id, update, { new: true });
        
        if (!updatedTodo) {
            return res.status(404).send("No todo found with this id")
        }
        res.status(200).json(updatedTodo)
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    
    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("inavalid id format");
        }
        
        const deletedTodo = await TODO.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return res.status(404).send("No todo found with this id")
        }
        res.status(200).json(deletedTodo)
    } catch (error) {
        res.status(500).send(error.message)
    }
};


module.exports = { getTodo, createTodo, updateTodo, deleteTodo };