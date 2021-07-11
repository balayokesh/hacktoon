import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles (() => ({
    Logo: {
        width: '65px',
        marginRight: '2%',
    },
    NavBar: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#090b13',
        padding: '2%',
        minHeight: '14vh',
    },
    Div: {
        minHeight: '88vh',
        padding: '2%',
    },
    Grid: {
        display: 'flex',
    },
    Image: {
        height: '300px',
        width: '100%',
        backgroundColor: '#fff',
    },
    Section2: {
        minWidth: '50%',
        maxWidth: '500px',
        margin: '4%',
        padding: '3%',
        alignSelf: 'center'
    },
}));

export default useStyles;