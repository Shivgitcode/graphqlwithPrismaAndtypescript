export interface User {
  username: string;
  email: string;
  password: string;
}

export interface AllUser extends User {
  id: string;
}

export interface AllUser {
  user: User;
}

export interface Post {
  title: string;
  description: string;
  userId: string;
}

export interface AllPost extends Post {
  id: string;
}
