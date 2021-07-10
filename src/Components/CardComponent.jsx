// Import Material-UI components
import { Card, CardMedia, CardContent, CardActions, Button, Typography } from '@material-ui/core';

const CardComponent = (props) => {
    return (
        <Card>
            <CardMedia 
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
    );
}

export default CardComponent;