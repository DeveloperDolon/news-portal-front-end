import { useEffect, useState } from "react";


const useTheme = () => {
    const [theme, setTheme] = useState("light");
    const mainParent = document.documentElement;
    mainParent.setAttribute("data-theme", theme);

    const handleThemeChange = () => {
        if(theme === "light") {
            mainParent.setAttribute("data-theme","dark");
            localStorage.setItem("mood", "dark");
            setTheme("dark");
        } else {
            mainParent.setAttribute("data-theme","light");
            localStorage.setItem("mood", "light");
            setTheme("light");
        }
    }
    

    useEffect(() => {
        if(localStorage.getItem("mood")) {
            setTheme(localStorage.getItem("mood"));
        }
    }, []);

    return handleThemeChange;
};

export default useTheme;