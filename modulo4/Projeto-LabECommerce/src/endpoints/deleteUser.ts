import {Request, Response} from "express"
import {users} from "../data/data"

export default function deleteUser(
    req: Request,
    res: Response
): void{

    const {id} = req.params

    const index:number = users.findIndex(
        user => user.id === Number(id)
    )
    
    if (index > -1) users.splice(index, 1)

    res.status(200).end()
}