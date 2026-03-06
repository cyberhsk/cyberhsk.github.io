export const Role = {
  ADMIN: "admin",
  AGENCY: "agency",
  COLLABORATOR: "collaborator",
} as const;

export type Role = (typeof Role)[keyof typeof Role];
