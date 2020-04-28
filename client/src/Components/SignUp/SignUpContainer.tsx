import * as React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SignUp, { SignUpProps } from './SignUp';
import {
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
} from '../../redux/actions/index';
import {
  selectDisplayName,
  selectEmail,
  selectPassword,
  selectConfirmPassword,
} from '../../redux/selectors/signUpSelectors';
import { signUpStart } from '../../redux/actions/signUp';

type SignUpContainerProps = SignUpProps & {
  nameHandler: (e: string) => void;
  emailHandler: (e: string) => void;
  passwordHandler: (e: string) => void;
  confirmPasswordHandler: (e: string) => void;
  signUpStartAction: (a: any) => void;
};

const SignUpContainer: React.FC<SignUpContainerProps> = ({
  displayName,
  email,
  password,
  confirmPassword,
  nameHandler,
  emailHandler,
  passwordHandler,
  confirmPasswordHandler,
  signUpStartAction,
}) => {
  const onSignUpNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    nameHandler(event.target.value);
  };
  const onSignUpEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailHandler(event.target.value);
  };
  const onSignUpPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    passwordHandler(event.target.value);
  };
  const onSignUpConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    confirmPasswordHandler(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    signUpStartAction({ displayName, email, password });
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

const mapStateToProps = createStructuredSelector({
  displayName: selectDisplayName,
  email: selectEmail,
  password: selectPassword,
  confirmPassword: selectConfirmPassword,
});

const mapDispatchToProps = {
  nameHandler: signUpChangeName,
  emailHandler: signUpChangeEmail,
  passwordHandler: signUpChangePassword,
  confirmPasswordHandler: signUpChangeConfirmPassword,
  signUpStartAction: signUpStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
