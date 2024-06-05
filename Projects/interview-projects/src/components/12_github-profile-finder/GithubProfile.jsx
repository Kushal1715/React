import { useEffect, useState } from "react";
import "./github.css";
import Profile from "./Profile";

export default function GithubProfile() {
  const [username, setUsername] = useState("kushal77");
  const [search, setSearch] = useState(false);
  const [profileData, setProfileData] = useState(null);

  const searchProfile = () => {
    setSearch(true);
    fetchProfile();
  };

  async function fetchProfile() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      if (data) {
        setProfileData(data);
        console.log(data);
      }
    } catch (e) {
      console.log(e.message);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);
  return (
    <div className="githubContainer">
      <div className="inputProfile">
        <input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={searchProfile}>Search Profile</button>
      </div>
      <div>{search && <Profile />}</div>
    </div>
  );
}
