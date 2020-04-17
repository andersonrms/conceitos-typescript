import { Request, Response } from 'express';

export function hello(request: Request, response: Response){
  return response.json({ message: 'Hello typescript' });
}