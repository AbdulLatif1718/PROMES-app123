// src/types/User.ts
export interface User {
  id: string;
  email: string;
  role: "admin" | "super_admin";
  createdAt?: Date;
  // Add other fields as needed
}

export interface CreateUserDto {
  email: string;
  role: "admin"; // Super admin can only create admins
  password?: string; // Optional for mock, required in production
}