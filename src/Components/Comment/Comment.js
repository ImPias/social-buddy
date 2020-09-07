import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ShowComment from '../ShowComment/ShowComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      width: 670,
    },
  });

const Comment = () => {
    const { postId } = useParams();

    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    const [comments, setComments] = useState([])
    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])

    const postStyle = {
        border: '1px solid lightgray',
        width: '397px',
        margin: '10px auto',
        padding: '10px 15px',
        borderRadius: '5px'
    }
    const classes = useStyles();
    return (
        <Card className={classes.root} style={{ margin: '0 auto'}}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{post.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{post.body}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {
                            comments.map(comment => <ShowComment comment={comment} key={comment.id}></ShowComment>)
                        }    
                    </Typography>
                </CardContent>
            </CardActions>
        </Card>
    );
};

export default Comment;