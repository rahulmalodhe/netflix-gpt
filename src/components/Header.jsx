import {LOGO} from "../utils/constants";
import {USER_LOGO} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../utils/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {addUserInfo, removeUser} from "../utils/userSlice";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(
          addUserInfo({uid: uid, email: email, displayName: displayName})
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  const data = useSelector((store) => store.user);
  return (
    <div className="absolute z-10 bg-gradient-to-b from-black px-8 py-6 w-screen flex justify-between align-middle">
      <img className="w-44" src={LOGO} alt="logo" />
      {data?.uid && (
        <div className="mt-4">
          {/* <span className="text-sm text-white mr-2"> </span> */}
          <img src={USER_LOGO} className=" w-10 inline-block mr-6" />
          <button
            className=" inline-block bg-red-600 rounded-md text-white font-bold px-4 py-2 text-sm"
            onClick={handleSignOut}
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
