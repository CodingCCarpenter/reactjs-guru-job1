import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
// import Table from "./table"; // original tubular table
import MaterialTable from "./material_table";
import { StoreContext } from "../App"
import { logout } from "../auth";

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

const ProtectedApp = () => {

	const classes = useStyles();
	const context = useContext(StoreContext);
	const history = useHistory();

	const HandleLogout = () => {
		if(logout()) {
			history.push('/');
		}
	}

	return(
		<div className={classes.root}>
	    <AppBar position="static">
			<Toolbar>
			    <Typography variant="h6" className={classes.title}>
				    Home
			    </Typography>
			    <Button color="inherit" href="/">{context.get('user') && context.get('user').name}</Button>
			    <Button color="inherit" onClick={HandleLogout}>Logout</Button>
			</Toolbar>
		</AppBar>
			<MaterialTable />
	</div>
	);

}

export default ProtectedApp;