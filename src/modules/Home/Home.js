import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Paper, Typography, withStyles } from '@material-ui/core';

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
    textAlign: 'left'
  },
  paper: {
    width: 375,
    padding: 16
  }
});


class Home extends React.Component {
  render() {
    const { authUser, classes } = this.props;

    return (

      <div className={classes.container}>
        <Paper className={classes.paper}>

          <Typography
            className={classes.typography}
            variant="headline" component="h4">{authUser.first_name} {authUser.last_name}</Typography>

          <Typography
            className={classes.typography}
            component="p">{authUser.email}</Typography>

          

        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authUser: state.global.authUser
  }
}
export default withRouter(connect(mapStateToProps)(withStyles(styles)(Home)));