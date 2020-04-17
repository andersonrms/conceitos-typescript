import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function hello(request: Request, response: Response){
  const user = createUser({
    email: 'anderson.ramos@zoom.com.br',
    password: '11120242',
    techs: [
      'Javascript', 
      'NodeJS', 
      'Typescript',
      { title:  'Javascript', experience: 2},
      { title: 'NodeJS', experience: 1}
    ],
  })

  console.log(user);

  return response.json({ message: 'Hello typescript' });
}