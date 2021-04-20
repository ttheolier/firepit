import React from "react";
import './Profile.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Sidebar from "./Sidebar";
import Avatar from '@material-ui/core/Avatar';
import DailyBox from './DailyBox';

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
            <div className = "profileSide">
              <div className = "topBox">
                <div className = "info">
                    <Avatar src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HykeemCarterSittingDown.jpg/330px-HykeemCarterSittingDown.jpg" className={classes.veryLarge}></Avatar>
                    <div className = "rightside">
                      <h1>@ThomasT123</h1>
                      <h2>Thomas Theolier</h2>
                      <p>This is the bio for this profile, this needs
                        to display as empty unless the user has specified a bio,
                        and should be limited to some certain number of chars
                      </p>
                    </div>
                </div>
                <div className = "sparkFeed">
                  <h1>Your Sparks</h1>
                  <DailyBox text = "some stuff that people said this one is longer to make sure the container still flexes in this context, can never be too careful jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"/>
                  <DailyBox text = "some stuff that people said"/>
                  <DailyBox text = "some stuff that people said"/>
                  <DailyBox text = "some stuff that people said"/>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Profile;