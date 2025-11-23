interface User {
  id: number;
  name: string;
  email?: string;
  readonly isAdmin: boolean;
}

const user1: User = {
  id: 12,
  name: "hamma",
  email: "houcinemohamed966@gmail.com",
  isAdmin: false,
};

interface Admin extends User {
  permissions: string[];
}
