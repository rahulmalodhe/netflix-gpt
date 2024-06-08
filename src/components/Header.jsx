import {LOGO} from "../utils/constants";
import {USER_LOGO} from "../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../utils/firebase";
import {onAuthStateChanged, signOut} from "firebase/auth";
import {addUserInfo, removeUser} from "../utils/userSlice";
import {useNavigate} from "react-router-dom";
import {toggleShowGpt} from "../utils/gptSearchSlice";
import {SUPPORTED_LANG} from "../utils/constants";
import {chooseLanguage} from "../utils/configSlice";
import languageConfig from "../utils/languageConfig";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((store) => store.user);

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
        console.log(error);
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleShowGpt());
  };

  const handleLangChange = (e) => {
    dispatch(chooseLanguage(e.target.value));
  };

  const isShowGpt = useSelector((store)=>store.gpt.toggleShowGpt)
  const lanConfig = useSelector((store) => store.config.lang);
  return (
    <>
    <div className="hidden md:block absolute w-screen h-screen bg-black/50 z-10"></div>
    <div className="absolute z-10 px-8 md:py-2 py-6 w-screen flex flex-col justify-between md:flex-row bg-black md:bg-transparent">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {data && (
        <div className="mt-4 flex justify-evenly md:block">
         { isShowGpt && <select
            className="mr-4 px-2 py-[8px] cursor-pointer bg-slate-800 text-white rounded-md md:text-md text-sm"
            onChange={(e) => handleLangChange(e)}
          >
            {SUPPORTED_LANG.map((value, index) => (
              <option key={index} value={value.identifier}>
                {value.name}
              </option>
            ))}
          </select>}
          <button
            className="rounded px-2 py-[6px] text-white bg-green-700 mr-4 cursor-pointer text-sm"
            onClick={handleGptSearch}
          >
            {languageConfig[lanConfig].gptSearch}
          </button>

          <img src={USER_LOGO} className="hidden md:w-10 md:inline-block md:mr-6" />
          <button
            className=" inline-block bg-red-600 rounded-md text-white font-bold px-4 py-2 text-sm"
            onClick={handleSignOut}
          >
            {languageConfig[lanConfig].logOut}
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default Header;
