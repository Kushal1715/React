import { Alert, Button, Modal, TextInput } from "flowbite-react";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { userActions } from "../redux/user/userSlice";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const DashProfile = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const imageRef = useRef();
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateProfileSuccess, setUpdateProfileSuccess] = useState(null);
  const [formData, setFormData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { error, loading, currentUser } = useSelector((store) => store.user);
  console.log(currentUser.profilePicture);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageURL(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
  }, [imageFile]);

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Cound not upload image (file must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageURL(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploading(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    setUpdateProfileSuccess(null);

    e.preventDefault();
    if (Object.keys(formData).length === 0) {
      return;
    }

    if (imageFileUploading) {
      return dispatch(userActions.updateFailure("failed to upload image"));
    }
    try {
      dispatch(userActions.updateStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(userActions.updateFailure(data.message));
      } else {
        dispatch(userActions.updateSuccess(data));
        setUpdateProfileSuccess("profile updated successfully");
      }
    } catch (e) {
      dispatch(userActions.updateFailure(e.message));
    }
  };

  const handleDeleteUser = async () => {
    setShowModal(false);
    try {
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        dispatch(userActions.deleteUserFailure(data.message));
      } else {
        dispatch(userActions.deleteUserSuccess(data));
      }
    } catch (e) {
      dispatch(userActions.deleteUserFailure(e.message));
    }
  };

  const handleSignOut = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(userActions.signoutSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mx-2">
      <h1 className="text-3xl my-6 font-semibold">Profile</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[100%] md:w-[450px]"
      >
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={imageRef}
          hidden
        />
        <div
          className="relative w-32 h-32 flex justify-center items-center cursor-pointer"
          onClick={() => imageRef.current.click()}
        >
          {imageFileUploadProgress && (
            <CircularProgressbar
              value={imageFileUploadProgress}
              text={`${imageFileUploadProgress}%`}
              strokeWidth={5}
              styles={{
                root: {
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                path: {
                  stroke: `rgba(62,152,199, ${imageFileUploadProgress / 100})`,
                },
              }}
            />
          )}

          <img
            src={imageURL || currentUser.profilePicture}
            className={`rounded-full h-full w-full object-cover border-8 border-gray-400 ${
              imageFileUploadProgress &&
              imageFileUploadProgress < 100 &&
              "opacity-60"
            }`}
            alt={currentUser.username}
          />
        </div>
        {imageFileUploadError && (
          <Alert color="failure">{imageFileUploadError}</Alert>
        )}
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          className="w-full mt-4 md:mx-0"
          onChange={handleChange}
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          className="w-full mt-4 md:mx-0"
          onChange={handleChange}
        />
        <TextInput
          type="text"
          id="password"
          placeholder="password"
          defaultValue={currentUser.password}
          className="w-full mt-4 md:mx-0"
          onChange={handleChange}
        />
        <Button
          type="submit"
          outline
          className="w-full mt-4 md:mx-0"
          disabled={imageFileUploading}
        >
          Update
        </Button>
        {currentUser.isAdmin && (
          <Link to="/create-post" className="w-full">
            <Button
              gradientDuoTone="purpleToBlue"
              type="submit"
              className="w-full mt-4 md:mx-0"
            >
              Create a Post
            </Button>
          </Link>
        )}
      </form>
      <div className="md:w-[450px] w-full flex justify-between text-red-600 mt-3 cursor-pointer">
        <span onClick={() => setShowModal(true)}>Delete Account</span>
        <span onClick={handleSignOut}>Sign Out</span>
      </div>
      {updateProfileSuccess && (
        <Alert color="success">{updateProfileSuccess}</Alert>
      )}
      {error && <Alert color="failure">{error}</Alert>}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body className="text-center">
          <HiOutlineExclamationCircle
            size={50}
            className="mx-auto text-gray-400"
          />
          <div className="mt-3">
            <p className="text-lg text-gray-600">
              Are you sure you want to delete your account?
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                className="bg-red-500 text-white px-3 py-2 border-2 rounded-lg"
                onClick={handleDeleteUser}
              >
                Yes, I'm sure
              </button>
              <button
                className=" px-3 py-2 border-2 rounded-lg"
                onClick={() => setShowModal(false)}
              >
                No, cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default DashProfile;
