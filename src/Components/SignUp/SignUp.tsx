import * as React from 'react';

const SignUp = ({
  displayName,
  email,
  password,
  confirmPassword,
  signUpChangeName,
  signUpChangeEmail,
  signUpChangePassword,
  signUpChangeConfirmPassword,
  handleSubmit,
}: any) => {
  return (
    <form
      className="text-center border border-light p-5 w-100"
      action="#!"
      onSubmit={handleSubmit}
    >
      <p className="h4 mb-4">Sign Up</p>

      <input
        type="login"
        id="defaultSignUpFormLogin"
        className="form-control mb-4"
        placeholder="Display Name"
        value={displayName}
        onChange={signUpChangeName}
      />

      <input
        type="email"
        id="defaultSignUpFormEmail"
        className="form-control mb-4"
        placeholder="E-mail"
        value={email}
        onChange={signUpChangeEmail}
      />

      <input
        type="password"
        id="defaultSignUpFormPassword"
        className="form-control mb-4"
        placeholder="Password"
        value={password}
        onChange={signUpChangePassword}
        required
      />

      <input
        type="password"
        id="defaultSignUpFormConfirmPassword"
        className="form-control mb-4"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={signUpChangeConfirmPassword}
        required
      />

      <button className="btn btn-info btn-block my-4" type="submit">
        SIGN UP
      </button>
    </form>
  );
};

export default SignUp;
