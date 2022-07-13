import { InMemoryUsersRepository } from "@modules/accounts/repositories/in-memory/InMemoryUsersRepository";
import { InMemoryUsersTokensRepository } from "@modules/accounts/repositories/in-memory/InMemoryUsersTokensRepository";
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DaysjsDateProvider";
import { InMemoryMailProvider } from "@shared/container/providers/MailProvider/in-memory/InMemoryMailProvider";
import { AppError } from "@shared/errors/AppError";

import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";

let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase;
let inMemoryUsersRepository: InMemoryUsersRepository;
let dateProvider: DayjsDateProvider;
let inMemoryUsersTokensRepository: InMemoryUsersTokensRepository;
let mailProvider: InMemoryMailProvider;

describe("SendForgotPasswordMailUseCase", () => {
  beforeEach(async () => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryUsersTokensRepository = new InMemoryUsersTokensRepository();
    dateProvider = new DayjsDateProvider();
    mailProvider = new InMemoryMailProvider();

    sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
      inMemoryUsersRepository,
      inMemoryUsersTokensRepository,
      dateProvider,
      mailProvider
    );
  });

  it("Should be able to send a email for a user to reset his password", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");

    await inMemoryUsersRepository.create({
      driver_license: "3510929605",
      email: "tokvuzdwdwder@mail.gn",
      name: "Bob Stuck",
      password: "test",
    });
    await sendForgotPasswordMailUseCase.execute("tokvuzdwdwder@mail.gn");

    expect(sendMail).toHaveBeenCalled();
  });

  it("Should not be able to send a email for an inexistent user", async () => {
    const sendMail = jest.spyOn(mailProvider, "sendMail");
    await expect(
      sendForgotPasswordMailUseCase.execute("cucok@soson.au")
    ).rejects.toBeInstanceOf(AppError);

    expect(sendMail).not.toBeCalled();
  });

  it("Should be able to create a new token to reset password", async () => {
    const generatedToken = jest.spyOn(inMemoryUsersTokensRepository, "create");

    await inMemoryUsersRepository.create({
      driver_license: "3510929605",
      email: "tokvuzdwdwder@mail.gn",
      name: "Bob Stuck",
      password: "test",
    });
    await sendForgotPasswordMailUseCase.execute("tokvuzdwdwder@mail.gn");

    expect(generatedToken).toHaveBeenCalled();
  });
});
