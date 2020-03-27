import * as React from 'react';
import SignInContainer from '../SignIn/SignInContainer';
import SignUpContainer from '../SignUp/SignUpContainer';

const SignInAndSignUp: React.FC = () => {
  return (
    <div className="d-flex">
      <SignInContainer />
      <SignUpContainer />
    </div>
  );
};

export default SignInAndSignUp;
