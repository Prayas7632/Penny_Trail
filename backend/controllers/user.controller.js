import { User } from "../models/user.model";
import bcrypt from "bcryptjs"

export const register = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password){
            return res.status(400).json({
                message:"All fields are required",
                success:false
            })
        };
        const user = await User.findOne({email});
        if(user) {
            return res.status(400).json({
                message:"User already exists with this mail.",
                success:false
            })
        };

        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            password:hashedPassword,
        });
        return res.status(201).json({
            message:"Account creatd successfully,.",
            success:true
        })
    } catch (error) {
        console.log(error);
        
    }
}