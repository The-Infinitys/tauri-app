import React, { useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import "./App.css";

function App() {
  return (
    <main className="container">
      <p>Test</p>
      <button onClick={() => invoke("test")}>Test Tauri API</button>
    </main>
  );
}

export default App;
