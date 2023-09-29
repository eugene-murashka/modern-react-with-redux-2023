import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hooks/use-thunk";
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import AlbumList from "./AlbumList";
import ExpandablePanel from "./ExpandablePanel";

function UserListItem({ user, isLoading }) {
  const [doRemoveUserThunk, isRemovingUser, removingUserError] =
    useThunk(removeUser);

  const removeHandle = (id) => {
    doRemoveUserThunk(id);
  };

  const header = (
    <>
      <Button
        className="mr-3"
        isLoading={isRemovingUser}
        onClick={() => removeHandle(user)}
      >
        <GoTrash />
      </Button>
      {removingUserError && "Error removing user..."}
      <div className="flex p-2 justify-between items-center cursor-pointer">
        {user.name}
      </div>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumList user={user} />
    </ExpandablePanel>
  );
}

export default UserListItem;
