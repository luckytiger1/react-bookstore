import * as React from 'react';
import { connect } from 'react-redux';
import SignUp, { SignUpProps } from './SignUp';
import {
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
} from '../../redux/actions/index';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

type SignUpContainerProps = SignUpProps & {
  nameHandler: (e: string) => void;
  emailHandler: (e: string) => void;
  passwordHandler: (e: string) => void;
  confirmPasswordHandler: (e: string) => void;
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
