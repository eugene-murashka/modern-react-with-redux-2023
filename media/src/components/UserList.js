import { useEffect } from "react";
import { useSelector } from "react-redux";
import useThunk from "../hooks/use-thunk";
import { fetchUsers, createUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import UserListItem from "./UserListItem";

function UserList() {
  const [doFetchThunk, isLoadingUsers, loadingUsersError] =
    useThunk(fetchUsers);
  const [doCreateUserThunk, isCreatingUser, creatingUserError] =
    useThunk(createUser);
  const { entities: users } = useSelector((state) => state.users);

  useEffect(() => {
    doFetchThunk();
  }, [doFetchThunk]);

  const handleUserAdd = () => {
    doCreateUserThunk();
  };

  let content = null;
  if (isLoadingUsers) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingUsersError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = users.map((user) => <UserListItem key={user.id} user={user} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h1 className="m-2 text-xl">Users</h1>
        <Button isLoading={isCreatingUser} onClick={handleUserAdd}>
          + Add User
        </Button>
        {creatingUserError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UserList;
