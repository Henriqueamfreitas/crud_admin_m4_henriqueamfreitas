import { Request, Response } from "express"
import { UserCreateInterface, iToken } from "../interfaces/users.interfaces"
import { loginService } from "../services/session.service"

const loginController = async (req: Request, res: Response): Promise<Response> => {
    const token: iToken = await loginService(req.body) 
    
    return res.status(200).json({ token })
}

export { loginController }