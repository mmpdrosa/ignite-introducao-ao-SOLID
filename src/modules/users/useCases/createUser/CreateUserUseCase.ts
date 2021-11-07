import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const user = this.usersRepository.findByEmail(email);

    if (user) {
      throw new Error('This email is already in use.');
    }

    const newUser = this.usersRepository.create({ name, email });

    return newUser;
  }
}

export { CreateUserUseCase };
