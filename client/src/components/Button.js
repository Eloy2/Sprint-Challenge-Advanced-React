import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const Button = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };

    return (
        <button data-testid="button" onClick={toggleMode}>Dark mode</button>
    );
}

export default Button;
