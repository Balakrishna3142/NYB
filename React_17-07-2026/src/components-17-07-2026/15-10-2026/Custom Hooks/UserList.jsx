
import useFetch from "./useFetch";

export default function UserList() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Users</h2>

      {data?.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
