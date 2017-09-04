import faker from "faker";

interface IUser {
  name: string;
  email: string;
}

const getUser = (): Promise<IUser> => {
  return new Promise(resolve => {
    setTimeout(() => {
      const user: IUser = {
        name: faker.name.findName(),
        email: faker.internet.email()
      };
      resolve(user);
    }, 1000);
  });
};

async function fn(): Promise<IUser> {
  const user = await getUser();
  return user;
}

fn().then((user: IUser) => console.log(user));
