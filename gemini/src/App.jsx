import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Central from "./components/main/Central";

function App() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar></Sidebar>
        <Central></Central>
      </div>
    </>
  );
}

export default App;
