import React,{useState} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import TextInput from './TextInoput'

const FormDialog = (props)=>{
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [description, setDescription] = useState()

    const submitForm = () =>{
        const payload ={
            text:`お問い合わせがありました\n\n`+
            `お名前: ${name}\n`　+
            `メールアドレス: ${email} \n`　+
            `お名前: ${description}\n`
        }

        const url = "https://hooks.slack.com/services/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"

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(()=>{
            alert('送信が完了しました')

            setName('')
            setEmail('')
            setDescription('')
            return props.handleToogle()
        })

    }

    return(
        <Dialog
          open={props.open}
          onClose={props.handleToogle}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">お問い合わせフォーム</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                <TextInput 
                    label={"お名前"} multiline={false} rows={1}
                    value={name} onChange={(e)=>setName(e.target.value)}
                />
                <TextInput 
                    label={"メールアドレス"} multiline={false} rows={1}
                    value={email} onChange={(e)=>setEmail(e.target.value)}                
                />
                <TextInput 
                    label={"お問い合わせ内容"} multiline={true} rows={5}
                    value={description} onChange={(e)=>setDescription(e.target.value)}                
                />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleToogle} color="primary">
              キャンセル
            </Button>
            <Button onClick={submitForm} color="primary" autoFocus>
              送信
            </Button>
          </DialogActions>
        </Dialog>
    )
}

export default FormDialog