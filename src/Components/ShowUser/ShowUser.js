import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 320,
      margin: 8,
    },
  });

const ShowUser = (props) => {
    const { id, name, email, phone } = props.user;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{email}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{phone}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to={`/timeline/${id}`}><Button variant="contained" color="primary">Visit Timeline</Button></Link>
            </CardActions>
        </Card>
        
    );
};

export default ShowUser;