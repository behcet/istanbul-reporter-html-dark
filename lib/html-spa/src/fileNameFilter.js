const React = require('react');
const { useState, useEffect, useRef } = React;

module.exports = function FileNameFilter({ filterText, setFilterText }) {
    const [inputValue, setInputValue] = useState(filterText);
    const debounceRef = useRef(null);

    useEffect(() => {
        setInputValue(filterText);
    }, [filterText]);

    const handleChange = e => {
        const value = e.target.value;
        setInputValue(value);

        // Debounce the actual filter update
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            setFilterText(value);
        }, 150);
    };

    const handleClear = () => {
        setInputValue('');
        setFilterText('');
    };

    return (
        <div className="file-filter">
            <label className="file-filter__label" htmlFor="fileFilterInput">
                Search:
            </label>
            <input
                id="fileFilterInput"
                type="text"
                className="file-filter__input"
                placeholder="Filter files..."
                value={inputValue}
                onChange={handleChange}
            />
            {inputValue && (
                <button
                    type="button"
                    className="file-filter__clear"
                    onClick={handleClear}
                    aria-label="Clear filter"
                >
                </button>
            )}
        </div>
    );
};
