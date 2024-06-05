export default function List({ users, handleUser }) {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index} onClick={handleUser}>
          {user}
        </li>
      ))}
    </ul>
  );
}
