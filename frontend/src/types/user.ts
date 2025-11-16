import type { LoginResponse } from "@/types/auth";

export type User = Omit<LoginResponse, "accessToken" | "refreshToken">