import { Request, Response } from "express";
import { users } from "../data/data";

export default function(
    req: Request,
    res: Response
){
    res.send(users)
}