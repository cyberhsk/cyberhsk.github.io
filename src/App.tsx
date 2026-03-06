import "./App.css";
import { SnackProvider, ThemeProvider } from "./provider";
import { AppRouter } from "./router";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SnackProvider>
        <AppRouter />
      </SnackProvider>
    </ThemeProvider>
  );
}

export default App;
