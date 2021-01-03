import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

// import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";
import {
  googleSignInStart,
  emailSignInStart
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer
} from './sign-in.styles';

// class SignIn extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     email: '',
  //     password: ''
  //   };
  // };
  // const { emailSignInStart } = this.props;
  // const { email, password } = this.state;
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ 
    email: '', 
    password: '' 
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const {value, name} = e.target;

    // this.setState({ [name]: value})
    setCredentials({...userCredentials, [name]: value})
  };

  // render() {
    // debugger
    // const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            type='email' 
            name='email' 
            value={email} 
            handleChange={handleChange}
            label='email'
            required />
          <FormInput 
            type='password' 
            name='password' 
            value={password} 
            handleChange={handleChange}
            label='password'
            required />
          <ButtonsBarContainer>
            <CustomButton type="submit"> SIGN IN </CustomButton>
            <CustomButton 
              type="button" 
              onClick={googleSignInStart} 
              isGoogleSignIn
            > 
              Sign in with Google
            </CustomButton>
            </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  // };
};

const mapDTP = (dispatch) => {
  // debugger
  return ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
  })
};

export default connect(
  null, 
  mapDTP
)(SignIn);