import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
	const classes = useStyles();
	return (
	<div className={classes.root}>
	    <AppBar position="static">
			<Toolbar>
			    <Typography variant="h6" className={classes.title}>
				    Home
			    </Typography>
			    <Button color="inherit" href="/login">Login</Button>
			</Toolbar>
		</AppBar>
	    <Container component="main" maxWidth="xs">
			<div className={classes.paper}>
				Home
			</div>
		</Container>
	</div>
	);
}

export default Home;