import { useEffect, useMemo, useState } from "react";

type FrontendUser = {
  id: string;
  name: string;
  role: "admin" | "user";
  email?: string;
};

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

const STORAGE_KEY = "manus-runtime-user-info";

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false, redirectPath = "/" } = options ?? {};

  const [user, setUser] = useState<FrontendUser | null>(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;

    if (!stored) return null;

    try {
      return JSON.parse(stored) as FrontendUser;
    } catch (error) {
      console.warn("Stored user verisi okunamadı", error);
      return null;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!user) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    if (!redirectOnUnauthenticated) return;
    if (user) return;
    if (typeof window === "undefined") return;
    if (window.location.pathname === redirectPath) return;

    window.location.href = redirectPath;
  }, [redirectOnUnauthenticated, redirectPath, user]);

  const state = useMemo(
    () => ({
      user,
      loading: false,
      error: null,
      isAuthenticated: Boolean(user),
    }),
    [user]
  );

  return {
    ...state,
    refresh: () => Promise.resolve(state),
    logout: () => setUser(null),
    setUser,
  };
}
