import React from "react";
import './DailyBox.css';
import { makeStyles } from '@material-ui/core/styles';
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
  }));

function DailyBox({text}) {
    const classes = useStyles();

    return(
        <div className = "dailyBox">
                <div className = "avatar">
                    <Avatar src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HykeemCarterSittingDown.jpg/330px-HykeemCarterSittingDown.jpg" className={classes.large}>
                    </Avatar>
                </div>
                <div className = "rightBoxElements">
                  <div className = "usernameTime">
                    <p>@ThomasT123 4/19/2021</p>
                  </div>
                  <div className = "text">
                      <p1>{text}</p1>
                  </div>
                </div>
        </div>
    )
}

export default DailyBox;