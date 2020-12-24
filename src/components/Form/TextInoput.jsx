import React from 'react'
import TextField from '@material-ui/core/TextField'

const textInput = (props)=>{
    return(
        <TextField
            fullWidth={true}
            label={props.label}
            multiline={props.multiline}
            rows={props.rows}
            margin="dense"
            value={props.value}
            onChange={props.onChange}
         />
    )
}

export default textInput