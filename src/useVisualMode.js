import { useState } from "react";

export default function useVisualMode(init) {
  const [mode, setMode] = useState(init);

  function transition(newMode) {
    setMode(newMode)
  }

  return { mode, transition }
}