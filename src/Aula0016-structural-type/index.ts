type User = { username: string; password: string };
type VerifyUserFN = (user: User, sentValue: User) => boolean;

const verifyUser: VerifyUserFN = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const dbUser = {
  username: "Jao",
  password: "1234",
};

const sentUser = {
  username: "Jao",
  password: "1234",
};

const loggedIn = verifyUser(dbUser, sentUser);
console.log(loggedIn);
