import * as React from 'react';
import { connect } from 'react-redux';
import SignIn, { SignInProps } from './SignIn';
import { signInEmailChange, signInPasswordChange } from '../../redux/actions';
import { googleSignInStart } from '../../redux/actions/googleSignIn';
import { emailSignInStart } from '../../redux/actions/emailSignIn';

type SignInContainerProps = SignInProps & {
  emailHandler: (e: string) => void;
  passwordHandler: (e: string) => void;
  emailSignIn: (data: any) => void;
};

const SignInContainer: React.FC<SignInContainerProps> = ({
  email,
  password,
  emailHandler,
  passwordHandler,
  googleSignIn,
  emailSignIn,
}) => {
  const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailHandler(event.target.value);
  };
  const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordHandler(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailSignIn({ email, password });
  };
  return (
    <SignIn
      email={email}
      password={password}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      handleSubmit={handleSubmit}
      googleSignIn={googleSignIn}
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
  googleSignIn: googleSignInStart,
  emailSignIn: emailSignInStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
