import React from "react";
import Post from "./Post/Post";
import {Grid, CircularProgress} from '@material-ui/core';
import useStyles from './styles';
import posts from "../../reducers/posts";

const Posts = () => {

  const classes = useStyles();
  console.log(posts.length);
  return (
    !posts.length ? <CircularProgress/> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post}/>
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
