import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#000000",
    width: "100vw",
    height: "100%",
    margin: -8,
    padding: -8,
    alignItems: "center",
  },
  title: {
    marginRight: 720,
    color: "white",
    fontSize: 40,
    fontWeight: "bolder"
  },
}));