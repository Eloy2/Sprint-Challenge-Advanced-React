import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";


const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage("darkMode", false);

    useEffect(() => {
        if (someValue === true) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [someValue]);

    return [someValue, setSomeValue];
}

export default useDarkMode;
