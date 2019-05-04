import React, {Component} from 'react'
import Paper from '../../components/Paper'
import TextField from "@material-ui/core/es/TextField/TextField";
import {withStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/es/Typography/Typography";
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/es/Button/Button";
import {push} from "../../lib/history";
import green from "@material-ui/core/es/colors/green";
import SweetAlert from 'react-bootstrap-sweetalert';


const storage = window.sessionStorage

const styles = theme => ({
    root: {
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(https://picsum.photos/1000/1000?random=1)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: ' 100% 100%'
    },
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    margin: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },

});

class Login extends Component {
    state = {
        username: '',
        password: '',
        error: false
    }
    handleClick = () => {
        if (this.state.username === '')
            this.setState({error: true})
        else {
            storage.setItem('user', this.state.username)
            push('/app')
        }
    }
    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value, error: false})
    }

    render() {
        const {classes} = this.props
        return (
            <div className={classes.root}>
                <SweetAlert
                    warning
                    show={this.state.error}
                    title="Warning"
                    onConfirm={() => this.setState({ error: false })}
                >Username cannot be empty</SweetAlert>
                <Paper>
                    <div className={classes.loginForm}>
                        <Paper style={{
                            position: 'relative',
                            right: '14%',
                            width: '110%',
                            bottom: '10px',
                            backgroundColor: green[500]
                        }}>
                            <Typography variant={'h5'} align={'center'}>
                                Welcome to ToDoList
                            </Typography>
                            <Typography align={'center'}>
                                Please login to continue
                            </Typography>
                        </Paper>
                        <Divider/>

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
                        <Button variant={'contained'} onClick={this.handleClick}>
                            Sign In
                        </Button>
                    </div>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Login)