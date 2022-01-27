import { useState } from "react";
import Dialog from "../components/common/Dialog";
import MobileNavbar from "../components/navbar/MobileNavbar";
import Context from "../context/Context";
import Layout from "./Layout";

const App = () => {
  const [showDialog, setShowDialog] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Context.Provider
      value={{ showDialog, showMenu, setShowMenu, setShowDialog }}
    >
      <MobileNavbar />
      <Layout />
      <Dialog />
    </Context.Provider>
  );
};

export default App;
