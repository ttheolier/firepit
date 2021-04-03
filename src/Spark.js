import React from 'react';
import "./Spark.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
//import imge from "https://miro.medium.com/max/1050/1*w0VoRKGkrDx8BQt_kY_CbQ.jpeg";

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

function Spark(){
    const classes = useStyles();

    return(
        <div className = "spark">
            <form>
                <div className = "sparkInput">
                    <Avatar src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/HykeemCarterSittingDown.jpg/330px-HykeemCarterSittingDown.jpg" className={classes.large}>
                    </Avatar>
                    {/*<input placeholder = "Create your spark..." type></input>*/}
                    <textarea placeholder = "Create your spark..." type name="text" rows="3" cols="10" wrap="soft"></textarea>
                </div>
                <Button>Post</Button>
            </form>

        </div>
    );
}

export default Spark;