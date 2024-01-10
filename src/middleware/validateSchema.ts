import {AnyZodObject} from "zod";
import {Request, Response, NextFunction} from "express";

const validateSchema = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await schema.parseAsync(req.body);
            next();
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

export default validateSchema;