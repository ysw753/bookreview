import { createContext, useContext, useEffect, useState } from "react";
import { login, logout, onUserStateChanged } from "../api/firebase";

export type AuthContextType = {
  login: () => void;
  logout: () => void;
  user: User | undefined;
};
export type User = {
  displayName: string;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    onUserStateChanged((user: User) => {
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuthContext must be used within an AuthContextProvider"
    );
  }
  return context;
}
