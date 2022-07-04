import React from "react";
import { Avatar, Button, Card, CardMedia, Grid, Typography } from "@material-ui/core/";
import { deletePost, likePost } from "../../../actions/posts";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./styles";
import { useDispatch } from "react-redux";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <Grid container spacing={3}>
          <Grid item xs={6} className={classes.flex}>
            <Avatar
              alt="Remy Sharp"
              src={
                post.Avatar ||
                "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
              }
              className={classes.avatar}
            />
            <Typography className={classes.name} variant="body1" component="h2">
              {post.Name}
            </Typography>
          </Grid>
          <Grid item xs={6} className={classes.flex}>
            <Button onClick={() => setCurrentId(post._id)} style={{ color: "white" }} size="small">
              <EditIcon size="small" color="primary" />
            </Button>
            <Button size="small" color="secondary">
              <DeleteIcon fontSize="small" onClick={() => dispatch(deletePost(post._id))} />
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.Description}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.description}>
          <CardMedia className={classes.media} image={post.Image} title="Contemplative Reptile" />
        </Grid>
        <Grid item xs={6} className={classes.description}>
          <Button size="small" color="secondary" onClick={() => dispatch(likePost(post._id))}>
            <FavoriteIcon fontSize="small" style={{ marginRight: "5px" }} />
            {post.likeCount}{" "}
          </Button>
        </Grid>
      </Card>
    </div>
  );
};

export default Post;
