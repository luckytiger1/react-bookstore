import * as React from 'react';

import { signInWithGoogle } from '../../firebase/firebase.utils';

export type SignInProps = {
  email: string;
  password: string;
  onEmailChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SignIn: React.FC<SignInProps> = ({
  email,
  password,
  onEmailChange,
  onPasswordChange,
  handleSubmit,
}) => {
  return (
    <form
      className="text-center border border-light p-5 w-100"
      action="#!"
      onSubmit={handleSubmit}
    >
      <p className="h4 mb-4">Sign in</p>

      <input
        type="email"
        id="defaultSignInFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
        value={email}
        onChange={onEmailChange}
        required
      />

      <input
        type="password"
        id="defaultSignInFormPassword"
        className="form-control mb-4"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <button className="btn btn-info btn-block my-4" type="submit">
        SIGN IN
      </button>
      <button
        className="btn btn-primary btn-block my-4"
        onClick={signInWithGoogle}
        type="button"
      >
        SIGN IN WITH GOOGLE
      </button>
    </form>
  );
};

export default SignIn;
