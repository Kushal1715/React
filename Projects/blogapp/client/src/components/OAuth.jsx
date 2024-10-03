import { Button } from "flowbite-react";
import React from "react";
import { ImGoogle3 } from "react-icons/im";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const auth = getAuth(app);

  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch("/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          photoURL: resultsFromGoogle.user.photoURL,
        }),
      });
      console.log(resultsFromGoogle.user.photoURL);

      const data = await res.json();
      if (res.ok) {
        dispatch(userActions.signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Button
      type="button"
      gradientDuoTone="pinkToOrange"
      className="w-full mt-3 flex items-center"
      outline
      onClick={handleGoogle}
    >
      <ImGoogle3 size={20} className="mr-2" />
      Continue with Google
    </Button>
  );
};

export default OAuth;
