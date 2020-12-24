import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    button:{
        color:'#ffb549',
        fontWeight:600,
        borderColor:'#ffb549',
        marginBottom:'8px',
        '&:hover':{
            backgroundColor:'#ffb549',
            color:'#fff'
        }
    }
})

const Answer = (props) =>{
    const classes = useStyles()
    return(
    <Button variant="outlined" className={classes.button}>{props.content}</Button>
    )
}

export default Answer