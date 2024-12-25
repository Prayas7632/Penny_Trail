import { Expense } from "../models/expense.model";

export const addExpense = async (req, res) => {
    try {
        const {description, amount, category} = req.body;
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
    } catch (error) {
        console.log(error);
        
    }
}
