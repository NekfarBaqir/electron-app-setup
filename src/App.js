import React from "react";
import Footer from "./containers/Footer";
import Main from "./containers/Main";
import Sidebar from "./containers/Sidebar";

function App() {
  return (
    <div className="w-full h-full min-h-screen text-[#BDDBED] bg-[#022A4F] box-border mx-auto relative flex">
      <Sidebar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
