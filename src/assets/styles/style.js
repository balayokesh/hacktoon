import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles (() => ({
    Logo: {
        width: '65px',
        marginRight: '2%',
    },
    NavBar: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#090b13',
        padding: '2%',
        height: '14vh',
    },
    Div: {
        height: '88vh',
        // border: '2px solid red',
    },
    Grid: {
        display: 'flex',
    },
    Image: {
        height: '300px',
        backgroundColor: '#fff',
    }
}));

export default useStyles;