import "./App.css";
import { SnackProvider, ThemeProvider } from "./provider";
import { AppRouter } from "./router";

import { useExamLocationStore, useHskPricingStore } from "@shared/store";
import { useEffect } from "react";

export function AppInitializer() {
  const loadLocations = useExamLocationStore((s) => s.loadLocations);
  const loadPricings = useHskPricingStore((s) => s.loadPricings);
  useEffect(() => {
    loadLocations();
    loadPricings();
  }, []);

  return null;
}

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SnackProvider>
        <AppInitializer />
        <AppRouter />
      </SnackProvider>
    </ThemeProvider>
  );
}

export default App;
