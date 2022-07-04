import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper, Dialog, DialogContent, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { Close } from "@material-ui/icons";

import { createPost, updatePost } from "../../actions/posts";
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ Name: "", Description: "", Image: "", Avatar: "" });
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    clear();
    handleClose();
  };

  const clear = () => {
    setCurrentId(0);
    setPostData({ Name: "", Description: "", Image: "", Avatar: "" });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* <Button variant="contained" color="primary" onClick={handleClickOpen}>
        {currentId ? "EDITING" : "ADD NEW"}
      </Button> */}
      <Paper className={classes.paper}>
        {/* <IconButton className={classes.closeButton} onClick={handleClose}>
          <Close />
        </IconButton> */}
        <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
          <Typography variant="h6">{currentId ? "EDITING" : "ADDING A NEW CARD"}</Typography>
          <div className={classes.fileInput}>
            <FileBase
              type="file"
              hidden
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, Avatar: base64 })}
            />
          </div>
          <TextField
            name="name"
            variant="outlined"
            label="Name"
            fullWidth
            value={postData.Name}
            onChange={(e) => setPostData({ ...postData, Name: e.target.value })}
          />
          <TextField
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            multiline
            minRows={4}
            value={postData.Description}
            onChange={(e) => setPostData({ ...postData, Description: e.target.value })}
          />

          <div className={classes.fileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, Image: base64 })}
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Save
          </Button>
          <Button variant="contained" color="secondary" size="small" fullWidth onClick={() => clear()}>
            Cancel
          </Button>
        </form>
      </Paper>
      {/* <Dialog disableEscapeKeyDown aria-labelledby="form-dialog-title" open={open} onClose={handleClose}>
        <DialogContent>
          <div className={classes.paper}>
            <IconButton className={classes.closeButton} onClick={handleClose}>
              <Close />
            </IconButton>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <Typography variant="h6">{currentId ? "EDITING" : "ADDING A NEW CARD"}</Typography>
              <div className={classes.fileInput}>
                <FileBase
                  type="file"
                  hidden
                  multiple={false}
                  onDone={({ base64 }) => setPostData({ ...postData, Avatar: base64 })}
                />
              </div>
              <TextField
                name="name"
                variant="outlined"
                label="Name"
                fullWidth
                value={postData.Name}
                onChange={(e) => setPostData({ ...postData, Name: e.target.value })}
              />
              <TextField
                name="description"
                variant="outlined"
                label="Description"
                fullWidth
                multiline
                minRows={4}
                value={postData.Description}
                onChange={(e) => setPostData({ ...postData, Description: e.target.value })}
              />

              <div className={classes.fileInput}>
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setPostData({ ...postData, Image: base64 })}
                />
              </div>
              <Button
                className={classes.buttonSubmit}
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                fullWidth
              >
                Save
              </Button>
              <Button variant="contained" color="secondary" size="small" fullWidth onClick={() => clear()}>
                Cancel
              </Button>
            </form>
          </div>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default Form;
