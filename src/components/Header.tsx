import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
    searchQuery: string;
    setSearchQuery: Dispatch<SetStateAction<string>>;
    handleSearch: () => void;
}

const Header = ({ searchQuery, setSearchQuery, handleSearch }: HeaderProps) => {
    return (
        <header className="header">
            <h1>Movie Browser</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;
