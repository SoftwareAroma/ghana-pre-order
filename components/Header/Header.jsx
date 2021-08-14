import React from 'react';
import NavBar from './NavBar/NavBar';

const Header = (props) => {
    const { handleOpenDrawer } = props;
    return (
        <div className="px-4 bg-black dark:bg-gray-900">
            <NavBar handleOpenDrawer={handleOpenDrawer} />
        </div>
    );
}

export default Header;