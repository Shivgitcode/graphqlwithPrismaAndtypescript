export interface User {
  username: string;
  email: string;
  password: string;
}

export interface AllUser {
  user: User;
}

export interface Post {
  title: string;
  description: string;
  userId: string;
}
