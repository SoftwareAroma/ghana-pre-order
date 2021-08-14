import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {SearchBarStyles} from './SearchBarStyles';

const SearchBar = () => {
    const styles = SearchBarStyles();

    return (
        <div className="">
            <div className={styles.search}>
                <div className={styles.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    autoFocus={false}
                    placeholder="Search"
                    classes={{
                        root: styles.inputRoot,
                        input: styles.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
        </div>
    );
}

export default SearchBar;
