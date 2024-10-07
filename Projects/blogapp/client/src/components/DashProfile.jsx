import { Button, TextInput } from "flowbite-react";
import React from "react";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((store) => store.user);
  return (
    <div className="w-full flex flex-col items-center mx-2">
      <h1 className="text-3xl my-6 font-semibold">Profile</h1>
      <form className="flex flex-col items-center w-[100%] md:w-[450px]">
        <input type="file" accept="image/*" />
        <div className="w-32 h-32 flex justify-center items-center">
          <img
            src={currentUser.profilePicture}
            className="rounded-full h-full w-full object-cover border-8 border-gray-400"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          className="w-full mt-4 md:mx-0"
        />
        <TextInput
          type="text"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          className="w-full mt-4 md:mx-0"
        />
        <TextInput
          type="text"
          id="password"
          placeholder="password"
          defaultValue={currentUser.password}
          className="w-full mt-4 md:mx-0"
        />
        <Button type="submit" outline className="w-full mt-4 md:mx-0">
          Update
        </Button>
      </form>
      <div className="md:w-[450px] w-full flex justify-between text-red-600 mt-3 cursor-pointer">
        <span>Delete Account</span>
        <span>Sign Out</span>
      </div>
    </div>
  );
};

export default DashProfile;
