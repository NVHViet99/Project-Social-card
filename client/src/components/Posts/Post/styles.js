import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    display: "flex",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "9px",
    height: "100%",
    position: "relative",
    padding: "20px",
  },
  description: {
    marginTop: "20px",
  },
  avatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
    marginRight: "10px",
  },
  media: {
    height: 200,
  },
}));
