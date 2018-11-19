import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper, TextField, Typography, withStyles, Button } from '@material-ui/core';
import { loginAction } from '../../actions/globalAction';

const styles = () => ({
  container: {
    background: '#3f51b5',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    minHeight: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typography: {
    textAlign: 'center'
  },
  paper: {
    width: 375,
    padding: 16
  },
  textField: {
    display: 'block',
    width: '100%'
  },
  button: {
    margin: '32px auto',
    display: 'block'
  }
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      errorEmail: false,
      errorPassword: false
    }
  }
  handleChangeEmail = (e) => {
    this.setState({email: e.target.value});
  }
  handleChangePassword = (e) => {
    this.setState({password: e.target.value});
  }
  handleSubmit = () => {
    const { email, password } = this.state;
    if (email.trim() === '') {
      this.setState({errorEmail: true});
      return;
    }
    else if (password.trim() === '') {
      this.setState({errorPassword: true});
      return;
    }
    this.setState({ loading: true });
    this.props.dispatch(loginAction(email, password))
      .then(() => {
        this.setState({loading: false});
        this.props.history.push('/');
      });
  }
  render() {
    const { classes } = this.props,
      { loading, errorEmail, errorPassword } = this.state;

    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
  
          <Typography className={classes.typography} variant="headline" component="h3">Every Fit</Typography>

          <TextField
            id="email"
            label="Email"
            fullWidth={true}
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChangeEmail}
            margin="normal"
            required
            error={errorEmail}
          />

          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth={true}
            className={classes.textField}
            value={this.state.password}
            onChange={this.handleChangePassword}
            margin="normal"
            required
            error={errorPassword}
          />

          <Button
            disabled={loading}
            variant="contained"
            color="primary" className={classes.button}
            onClick={this.handleSubmit}>
            Login
          </Button>

        </Paper>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    openSnackbar: state.global.openSnackbar
  };
}

// const mapFunctionToProps = () => {
//   return {
    
//   }
// }

export default withRouter(connect(mapStateToProps)(withStyles(styles)(Login)));
