import React, { useContext } from 'react';
import ThemeContext from './contexts/ThemeContext';

export default function ThemeSetter() {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
            {themeOptions.map((option, idx) => (
                <option value={option.value} key={idx}></option>
            ))}
        </select>
    );
}

const themeOptions = [{ value: 'light' }, { value: 'dark' }];