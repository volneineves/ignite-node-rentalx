import { IMailProvider } from "../IMailProvider";
import { IMailProviderSendMailDTO } from "../IMailProviderSendMailDTO";

class InMemoryMailProvider implements IMailProvider {
  private message: any[] = [];
  async sendMail({
    to,
    subject,
    variables,
    path,
  }: IMailProviderSendMailDTO): Promise<void> {
    this.message.push({
      to,
      subject,
      variables,
      path,
    });
  }
}

export { InMemoryMailProvider };
