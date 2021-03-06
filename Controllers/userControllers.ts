import {User} from "../types/User";
import {LoginRequest} from "../types/LoginRequest";
import {Request, Response} from "express";

export const getUsers =  (req: Request, res: Response) => {
    let user: User = {
        id: 1,
        username: "Test",
        password: "0000"
    }
    res.send(user)
}
export const login = (req: Request, res:Response) => {
    const loginRequest: LoginRequest = req.query;
    if (!loginRequest.username || !loginRequest.password) {
        res.send({
            status: 400,
            message: "Username or Password has not been provided"
        })
    }

    res.send( {
        status:200,
        message: "Logged in successfully"
    })
}