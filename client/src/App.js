import React, { useEffect, useState } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getPosts } from "../src/actions/posts";
import Form from "../src/components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Typography style={{ color: "#000", fontWeight: "bold", textAlign: "center", marginTop: "10px" }}>
              LIST SOCIAL CARD
            </Typography>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default App;
