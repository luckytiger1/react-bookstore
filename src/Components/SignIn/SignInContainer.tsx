import * as React from 'react';
import { connect } from 'react-redux';
import SignIn, { SignInProps } from './SignIn';
import { signInEmailChange, signInPasswordChange } from '../../redux/actions';
import { auth } from '../../firebase/firebase.utils';

type SignInContainerProps = SignInProps & {
  emailHandler: (e: string) => void;
  passwordHandler: (e: string) => void;
};

const SignInContainer: React.FC<SignInContainerProps> = ({
  email,
  password,
  emailHandler,
  passwordHandler,
}) => {
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailHandler(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordHandler(event.target.value);
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
