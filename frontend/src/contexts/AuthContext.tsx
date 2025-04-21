import React, { createContext, useContext, useState, ReactNode } from "react";
import { User, CreateUserDto } from "../types/User";
import { getUsers, createUser } from "../services/mockDb";

interface AuthContextType {
  user: User | null;
  users: User[];
  login: (email: string, role: "admin" | "super_admin") => void;
  logout: () => void;
  createAdmin: (userData: CreateUserDto) => User;
  deleteAdmin: (userId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>(getUsers());

  const login = (email: string, role: "admin" | "super_admin") => {
    const foundUser = users.find(u => u.email === email && u.role === role) || {
      id: Date.now().toString(),
      email,
      role,
      createdAt: new Date()
    };
    setUser(foundUser);
    localStorage.setItem("user", JSON.stringify(foundUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const createAdmin = (userData: CreateUserDto) => {
    if (user?.role !== "super_admin") {
      throw new Error("Unauthorized: Only super admins can create admins");
    }
    const newAdmin = createUser(userData);
    setUsers([...users, newAdmin]);
    return newAdmin;
  };

  const deleteAdmin = (userId: string) => {
    if (user?.role !== "super_admin") {
      throw new Error("Unauthorized: Only super admins can delete admins");
    }
    const success = deleteUser(userId);
    if (success) {
      setUsers(users.filter(u => u.id !== userId));
    }
    return success;
  };

  return (
    <AuthContext.Provider 
      value={{ user, users, login, logout, createAdmin, deleteAdmin }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};