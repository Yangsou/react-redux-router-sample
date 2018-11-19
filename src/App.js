import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import './App.css';
import Home from './modules/Home/Home';
import Login from './modules/Login/Login';
import CustomizedSnackbars from './components/CustomizedSnackbars';

function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  componentWillReceiveProps(nextProps) {
    const { isAuthenticated } = this.props;
    if (isAuthenticated !== nextProps.isAuthenticated) {
      console.log('componentWillReceiveProps', this.props.isAuthenticated, isAuthenticated);
      // history.push('/');
      // this.props.hi.push('/');
    }
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <main>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <PrivateRoute
            path="/"
            isAuthenticated={isAuthenticated}
            component={Home}></PrivateRoute>
        </Switch>

        <CustomizedSnackbars />
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.global.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(App));
