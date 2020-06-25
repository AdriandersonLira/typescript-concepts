import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Adrianderson',
    email: 'adrianderson@gmail.com', 
    password: '123456',
    techs: [
      'node.js', 
      'react.js', 
      'react-native',
      {title: 'JavaScript', experience: 100 },
    ]
  });

  return response.json({ message: 'Hello World' });
};