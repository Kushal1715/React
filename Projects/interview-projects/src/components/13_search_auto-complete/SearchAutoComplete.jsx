import { useEffect, useState } from "react";
import List from "./List";

export default function SearchAutoComplete() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [filterUser, setFilterUser] = useState([]);
  const [dropDown, setDropDown] = useState(false);

  async function fetchUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users.map((user) => user.firstName));
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOnChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchKey(searchValue);

    if (searchValue.length > 1) {
      const filterValue = users.filter(
        (user) => user.toLowerCase().indexOf(searchValue) > -1
      );
      setFilterUser(filterValue);
      setDropDown(true);
    }
  };

  const handleUser = (event) => {
    setSearchKey(event.target.innerText);
    setDropDown(false);
    setFilterUser([]);
  };

  console.log(searchKey, filterUser);
  return (
    <div
      className="autoCompleteContainer"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <input
        placeholder="Search Users"
        value={searchKey}
        onChange={handleOnChange}
      />
      {loading && <p>Loading!!! please wait</p>}
      {error && error}
      {dropDown && <List users={filterUser} handleUser={handleUser} />}
    </div>
  );
}
