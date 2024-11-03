import { createContext,useState } from "react";
import App from "./App";
export const AppContext = createContext({mode: "dark",setMode: (mode: string) => {}});
export default function ThemedApp() {
    const [mode, setMode] = useState("dark");
  return (
    <AppContext.Provider value={{ mode,setMode }}>
      <App />
    </AppContext.Provider>
  );
}
