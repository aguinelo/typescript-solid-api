import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private readonly creaateUserUseCase: CreateUserUseCase
    ) {}
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        try {
            await this.creaateUserUseCase.execute({
                name, email, password
            })

            return response.status(201).send();
        } catch(err) {
            return response.status(400).json({
                messge: err.message || 'Unexpected error.'
            })
        }
    }
}