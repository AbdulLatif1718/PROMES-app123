import { User } from "../types/User";

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (credentials: {
  email: string;
  password: string;
}): Promise<LoginResponse> => {
  // Simulate an API call with a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Mock users
      const mockUsers: User[] = [
        {
          id: "1",
          email: "admin@example.com",
          role: "admin",
        },
        {
          id: "2",
          email: "superadmin@example.com",
          role: "super_admin",
        },
      ];

      // Find the user by email
      const user = mockUsers.find((u) => u.email === credentials.email);

      // Check if the user exists and the password is correct
      if (user) {
        // Mock password validation
        const validPasswords: { [key: string]: string } = {
          "admin@example.com": "admin123",
          "superadmin@example.com": "super123",
        };

        if (credentials.password === validPasswords[user.email]) {
          resolve({
            token: "mock-token", // Simulate a token
            user,
          });
        } else {
          reject(new Error("Invalid email or password"));
        }
      } else {
        reject(new Error("Invalid email or password"));
      }
    }, 1000); // Simulate a 1-second delay
  });
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};






// import api from "./api";
// import { User } from "../types/User";

// interface LoginResponse {
//   token: string;
//   user: User;
// }

// export const login = async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
//   const response = await api.post<LoginResponse>("/auth/login", credentials);
//   return response.data;
// };

// export const logout = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
// };