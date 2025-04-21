export const hasRole = (user: { role: string } | null, requiredRole: string): boolean => {
  if (!user) return false;
  return user.role === requiredRole;
};

export const ROLES = {
  ADMIN: "admin",
  SUPER_ADMIN: "super_admin",
} as const;