import * as React from 'react';
import { connect } from 'react-redux';
import SignUp from './SignUp';
import {
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
} from '../../actions/index';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignUpContainer = ({
  displayName,
  email,
  password,
  confirmPassword,
  nameHandler,
  emailHandler,
  passwordHandler,
  confirmPasswordHandler,
}: any) => {
  const onSignUpNameChange = (event: any) => {
    nameHandler(event.target.value);
  };
  const onSignUpEmailChange = (event: any) => {
    emailHandler(event.target.value);
  };
  const onSignUpPasswordChange = (event: any) => {
    passwordHandler(event.target.value);
  };
  const onSignUpConfirmPasswordChange = (event: any) => {
    confirmPasswordHandler(event.target.value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      );

      await createUserProfileDocument(user, { displayName });

      nameHandler('');
      emailHandler('');
      passwordHandler('');
      confirmPasswordHandler('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignUp
      displayName={displayName}
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      signUpChangeName={onSignUpNameChange}
      signUpChangeEmail={onSignUpEmailChange}
      signUpChangePassword={onSignUpPasswordChange}
      signUpChangeConfirmPassword={onSignUpConfirmPasswordChange}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = ({
  signUp: { displayName, email, password, confirmPassword },
}: any) => {
  return {
    displayName,
    email,
    password,
    confirmPassword,
  };
};

const mapDispatchToProps = {
  nameHandler: signUpChangeName,
  emailHandler: signUpChangeEmail,
  passwordHandler: signUpChangePassword,
  confirmPasswordHandler: signUpChangeConfirmPassword,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
