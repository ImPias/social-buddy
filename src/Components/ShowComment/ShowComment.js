import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
      width: 600,
      margin: 8,
    },
});

const ShowComment = (props) => {
    const { email, name, body } = props.comment;
    const [image, setImage] = useState([]);
    useEffect( () => {
        fetch('https://randomuser.me/api/?results=1')
        .then(res => res.json())
        .then(data => setImage(data.results[0].picture))
    }, [])
    // console.log(image);
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <div style={{display: 'flex'}}>
                        <Avatar style={{marginRight: '10px'}} alt="Remy Sharp" src={image.medium} />
                        <Typography gutterBottom variant="h4" component="h2">{email}</Typography>
                    </div>
                    <Typography gutterBottom variant="h6" component="h6">{name}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{body}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ShowComment;