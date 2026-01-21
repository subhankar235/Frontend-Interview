import { useState } from "react";
import Landing from "./pages/Landing";
import MainApp from "./pages/MainApp";

export default function App() {
  const [started, setStarted] = useState(false);

  return started ? (
    <MainApp />
  ) : (
    <Landing onStart={() => setStarted(true)} />
  );
}
