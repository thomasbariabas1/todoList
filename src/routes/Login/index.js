import React, {Component} from 'react'
import Paper from '../../components/Paper'
import TextField from "@material-ui/core/es/TextField/TextField";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from "@material-ui/core/es/Divider/Divider";
import Button from "@material-ui/core/es/Button/Button";
import {push} from "../../lib/history";

const storage = window.sessionStorage

const styles = theme => ({
    root: {
        height:'100%',
      display:'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    loginForm:{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center'
    },
    margin:{
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    }
});
class Login extends Component{

    handleClick = () =>{
        storage.setItem('user', this.state.username)
        push('/app')
    }
    handleChange = ({target}) =>{
        const {name, value} = target
        this.setState({[name]:value})
    }
    render(){
        const {classes} = this.props
        return(
            <div className={classes.root}>
           <Paper>
               <div className={classes.loginForm}>
                   <Typography variant={'h5'}>
                       Welcome to ToDoList
                   </Typography>
                   <Divider/>

                   <Typography variant={'h7'}>
                       Please login to continue
                   </Typography>

               <TextField className={classes.margin}
                          name={'username'}
                          variant={'outlined'}
                          label={'Username'}
                          onBlur={this.handleChange}
               />

               <TextField className={classes.margin}
                          name={'password'}
                          type={'password'}
                          variant={'outlined'}
                          label={'Password'}
                          onBlur={this.handleChange}
               />
                   <Button onClick={this.handleClick}>
                       Sign In
                   </Button>
               </div>
           </Paper>
            </div>
        )
    }
}

export default  withStyles(styles)(Login)