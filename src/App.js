import React from "react";

import Navbar from "./components/Navbar";
import { toast } from "react-toastify";
function App() {
  const toastTest = () => {
    console.log(" testing toast");
    toast.warn("This is a toast message");
  };
  return (
    <div className="App">
      <Navbar />
      <button
        className="btn btn-accent btn-outline bg-slate-800 rounded-full w-128"
        onClick={toastTest}
      >
        Three
      </button>
    </div>
  );
}

export default App;
