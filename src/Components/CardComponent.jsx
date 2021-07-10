// Import Material-UI components
import { Grid, Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';

// Import assets
import useStyles from '../assets/styles/style';

const CardComponent = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm={6} md={4}>
        <Card>
            <CardMedia 
                className={classes.Image}
                image={props.image}
                title='Cartoon title'
            />
            <CardContent>
                <Typography>
                    {props.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' color='primary'>
                    Know more
                </Button>
            </CardActions>
        </Card>
        </Grid>
    );
}

export default CardComponent;