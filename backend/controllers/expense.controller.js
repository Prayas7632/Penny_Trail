import { Expense } from "../models/expense.model.js";

export const addExpense = async (req, res) => {
    try {
        const {description, amount, category} = req.body;
        const userId = req.id;
        if(!description || !amount || !category){
            return res.status(400).json({
                message:"All fields are required",
                success:false
            })
        };

        const expense = await Expense.create({
            description,
            amount,
            category,
            userId
        })
        return res.status(201).json({
            message:"New expense added",
            expense,
            success:true,
        })
    } catch (error) {
        console.log(error);
    }
}

export const getAllExpense = async (req, res) => {
    try {
        const userId = req.id;
        let category = req.query.category || "";
        const done = req.query.category || "";

        const query = {
            userId
        }
        if(category.toLowercase() ==="all"){

        }else{
            query.category = {$regex:category, $options:'i'};
        }

        if(done.toLowercase() === "done"){
            query.done = true
        }else if(done.toLowercase() === "undone"){
            query.done = false
        };

        const expense = await Expense.find(query);

        if(!expense || expense.length === 0){
            return res.status(404).json({
                message:"NO expense found.",
                success:false,
            })
        };
        return res.status(200).json({
            expense,
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}
