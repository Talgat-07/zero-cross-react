import React from "react";
import { MantineProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Board from "./components/Board";

function App() {
  const [isTheme, setTheme] = useLocalStorage({
    key: "myTheme",
    defaultValue: "light",
  });
  const changeTheme = () => {
    setTheme((e) => (e === "light" ? "dark" : "light"));
  };
  return (
    <MantineProvider
      theme={{ colorScheme: isTheme, defaultRadius: "auto" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Board changeTheme={changeTheme} theme={isTheme} />
    </MantineProvider>
  );
}

export default App;
