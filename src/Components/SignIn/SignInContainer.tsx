import * as React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import {
  signInEmailChange,
  signInPasswordChange,
  signInWithGoogle,
} from '../../redux/actions';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

const SignInContainer = ({
  email,
  password,
  emailHandler,
  passwordHandler,
  googleSignIn,
}: any) => {
  React.useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, null);

        userRef.onSnapshot((snapShot: any) => {
          googleSignIn({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [googleSignIn]);

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
  googleSignIn: signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
