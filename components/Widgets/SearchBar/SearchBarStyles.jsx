import {alpha, makeStyles} from "@material-ui/core/styles";

export const SearchBarStyles = makeStyles((theme) => ({
    // root: {
    //     flexGrow: 1,
    // },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${alpha(theme.palette.common.black, 0.45)}`,
        backgroundColor: alpha(theme.palette.common.white, 0.65),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.85),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.black,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '55ch',
            '&:focus': {
                width: '65ch',
            },
        },
    },
}));
