import { Outlet, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();
  const showUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <h2>User 1 </h2>
        <h2>User 2 </h2>
        <h2>User 3 </h2>
        <Outlet />
      </div>
      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Add Param
        </button>
        <button onClick={() => setSearchParams({})}>Reset param</button>
      </div>
      {showUsers ? <h2>Showing active users</h2> : <h2>Showing all users</h2>}
    </>
  );
}

export default Users;
