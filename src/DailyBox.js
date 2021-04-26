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

function DailyBox({text,avat,username,name,date,url}) {
    const classes = useStyles();
    if (url == "")
    {
      return(
        <div className = "dailyBox">
                <div className = "avatar">
                    <Avatar src = {avat} className={classes.large}>
                    </Avatar>
                </div>
                <div className = "rightBoxElements">
                  <div className = "usernameTime">
                    <p>@{username} {date}</p>
                  </div>
                  <div className = "text">
                      <p>{text}</p>
                  </div>
                </div>
        </div>
    )
    }
    else{
      return(
          <div className = "dailyBox">
                  <div className = "avatar">
                      <Avatar src = {avat} className={classes.large}>
                      </Avatar>
                  </div>
                  <div className = "rightBoxElements">
                    <div className = "usernameTime">
                      <p>@{username} {date}</p>
                    </div>
                    <div className = "text">
                        <p>{text}</p>
                        <img className = "image"src={url} alt = "" />
                    </div>
                  </div>
          </div>
      )
    }
}

export default DailyBox;