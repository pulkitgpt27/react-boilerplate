import React, { createContext, ReactNode } from "react";
import useAuthProvider, { IUseAuthProvider } from "./useAuthProvider";

export const AuthContext = createContext<IUseAuthProvider | null>(null);
type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
