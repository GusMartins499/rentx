import { AppError } from "../../erros/AppError";
import { ICreateUserDTO } from "../../modules/accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "../../modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AuthenticateUserUseCase } from "../../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase";
import { CreateUserUseCase } from "../../modules/accounts/useCases/createUser/CreateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      driver_license: "00123",
      email: "email@example.com",
      name: "Test User",
      password: "1234",
    };

    await createUserUseCase.execute(user);

    const responseToken = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(responseToken).toHaveProperty("token");
  });

  it("Should not be able to authenticate a non-existent user", async () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "non-existent@example.com",
        password: "1234",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
