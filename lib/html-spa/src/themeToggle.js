const React = require('react');

module.exports = function ThemeToggle({ theme, setTheme }) {
    return (
        <div className="toggle">
            <div className="toggle__label">Theme:</div>
            <div className="toggle__options">
                <button
                    className={'toggle__option ' + (theme === 'light' ? 'is-toggled' : '')}
                    onClick={() => setTheme('light')}
                >
                    Light
                </button>
                <button
                    className={'toggle__option ' + (theme === 'system' ? 'is-toggled' : '')}
                    onClick={() => setTheme('system')}
                >
                    Auto
                </button>
                <button
                    className={'toggle__option ' + (theme === 'dark' ? 'is-toggled' : '')}
                    onClick={() => setTheme('dark')}
                >
                    Dark
                </button>
            </div>
        </div>
    );
};
