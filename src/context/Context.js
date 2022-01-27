import { createContext } from "react";

const Context = createContext({
    showDialog : false,
    setShowDialog : (value) => {},
    showMenu : false,
    setShowMenu : (value) => {}
});

export default Context;