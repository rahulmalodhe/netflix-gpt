import {useState, useRef} from "react";
import {BACKGROUND_IMG} from "../utils/constants";
import {Validations} from "./Validations";
import Header from "./Header";
import {auth} from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isNotValid = Validations(email.current.value, password.current.value);
    setError(isNotValid);
    if (isNotValid) return;
    if (isSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BACKGROUND_IMG} alt="logo" />
      </div>
      <form className="w-1/3 absolute bg-black/70  px-8 py-12 mx-auto my-36 right-0 left-0 rounded-lg h-auto text-white">
        <div className="w-3/4 mx-auto">
          <h1 className="text-[32px] font-bold text-white mb-2">
            {isSignUp ? "Sign up" : "Sign In"}
          </h1>
          <div>
            {isSignUp && (
              <input
                ref={name}
                className="my-4 px-3 py-4 bg-transparent border border-slate-300 w-full rounded-md"
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                required
              />
            )}

            <input
              ref={email}
              className="my-4 px-3 py-4 bg-transparent border border-slate-300 w-full rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div>
            <input
              ref={password}
              className="my-4 px-3 py-4 bg-transparent border border-slate-300 w-full rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && (
            <p className=" text-red-500 font-semibold text-sm">{error}</p>
          )}
          <button
            className="bg-red-600 rounded-md font-bond text-white px-4 py-2 w-full my-4"
            onClick={(e) => handleSubmit(e)}
          >
            {!isSignUp ? " Sign In" : "Sign up"}
          </button>
          <p
            className="mt-2 cursor-pointer"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {!isSignUp
              ? "New to Netflix ? Sign up now."
              : "Already a user? Please sign in"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
