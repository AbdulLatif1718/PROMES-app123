import { User, CreateUserDto } from "../types/User";

// Initial mock data
let mockUsers: User[] = [
  {
    id: "1",
    email: "superadmin@example.com",
    role: "super_admin",
    createdAt: new Date()
  },
  {
    id: "2",
    email: "admin@example.com",
    role: "admin",
    createdAt: new Date()
  }
];

export const getUsers = (): User[] => mockUsers;

export const createUser = (userData: CreateUserDto): User => {
  const newUser: User = {
    ...userData,
    id: Date.now().toString(),
    createdAt: new Date()
  };
  mockUsers.push(newUser);
  return newUser;
};

export const deleteUser = (userId: string): boolean => {
  const initialLength = mockUsers.length;
  mockUsers = mockUsers.filter(user => user.id !== userId);
  return mockUsers.length !== initialLength;
};