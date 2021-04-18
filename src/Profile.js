import React from "react";
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Sidebar from "./Sidebar";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },

    veryLarge: {
        width: theme.spacing(14),
        height: theme.spacing(14),
    }
  }));

function Profile(){
    const classes = useStyles();
    return(
        <div className = "profile">
            {/*Sidebar */}
            <Sidebar/>
            <div className = "info">
                <Avatar src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HykeemCarterSittingDown.jpg/330px-HykeemCarterSittingDown.jpg" className={classes.veryLarge}></Avatar>
                <h1>@ThomasT123</h1>
            </div>
        </div>
    )
}

export default Profile;