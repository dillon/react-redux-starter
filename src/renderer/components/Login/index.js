import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';


const LoginContainer = (props) => <Login className="App" {...props} />

const mapStateToProps = ({ loginReducer: { account } }) => ({ account })

export default connect(mapStateToProps)(LoginContainer)
