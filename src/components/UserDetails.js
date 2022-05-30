import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams();
  return (
    <div>
      <h2>Details of user {userId}</h2>
    </div>
  );
}

export default UserDetails;
