import * as React from 'react';
import SignInContainer from '../SignIn/SignInContainer';
import SignUpContainer from '../SignUp/SignUpContainer';

const SignInAndSignUp = () => {
  return (
    <div className="d-flex">
      <SignInContainer />
      <SignUpContainer />
    </div>
  );
};

export default SignInAndSignUp;
