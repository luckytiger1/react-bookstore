import * as React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signInEmailChange, signInPasswordChange } from '../../redux/actions';
import { auth } from '../../firebase/firebase.utils';

const SignInContainer = ({
  email,
  password,
  emailHandler,
  passwordHandler,
}: any) => {
  const onEmailChange = (event: any) => {
    emailHandler(event.target.value);
  };
  const onPasswordChange = (event: any) => {
    passwordHandler(event.target.value);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      emailHandler('');
      passwordHandler('');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SignIn
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      handleSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = ({ auth: { email, password } }: any) => {
  return {
    email,
    password,
  };
};

const mapDispatchToProps = {
  emailHandler: signInEmailChange,
  passwordHandler: signInPasswordChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
