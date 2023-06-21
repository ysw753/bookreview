import { createContext, useContext, useEffect, useState } from "react";
import { login, onUserStateChanged } from "../api/firebase";

type AuthContextType = {
  login: () => void;
  user: User | undefined;
};
type User = {
  name: string;
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
    <AuthContext.Provider value={{ login, user }}>
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
