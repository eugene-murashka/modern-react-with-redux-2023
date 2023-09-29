import AlbumItem from "./AlbumItem";
import Button from "./Button";
import useThunk from "../hooks/use-thunk";
import { fetchAlbumsByUser, createAlbum } from "../store";
import Skeleton from "./Skeleton";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function AlbumList({ user }) {
  const [doFetchAlbumsThunk, isFetchingAlbums, fetchAlbumsError] =
    useThunk(fetchAlbumsByUser);
  const [doCreateAlbumThunk, isCreatinAlbum, createAlbumError] =
    useThunk(createAlbum);
  const { entities: albums } = useSelector((state) => state.albums);

  console.log("user", user);

  useEffect(() => {
    doFetchAlbumsThunk(user);
  }, [doFetchAlbumsThunk, user]);

  const handleClick = () => {
    doCreateAlbumThunk();
  };

  let content = null;
  if (isFetchingAlbums) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (fetchAlbumsError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = albums.map((album) => <AlbumItem key={album.id} album={album} />);
  }

  return (
    <div>
      <div className="flex flex-row justify-between items-center m-3">
        <h2 className="m-2 text-ml">Albums</h2>
        <Button isLoading={isCreatinAlbum} onClick={handleClick}>
          + Add Album
        </Button>
        {createAlbumError && "Error creating user..."}
      </div>
      {content}
    </div>
  );
}

export default AlbumList;
