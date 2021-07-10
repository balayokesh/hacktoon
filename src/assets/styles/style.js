import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles (() => ({
    Logo: {
        width: '55px',
        marginRight: '2%',
    },
    NavBar: {
        marginBottom: '2%',
        backgroundColor: '#090b13',
        padding: '2%',
    },
    Grid: {
        display: 'flex',
    },
    Image: {
        height: '400px',
    }
}));

export default useStyles;