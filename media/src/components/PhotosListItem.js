import { GoTrash } from "react-icons/go";
import Button from "./Button";
import { useRemovePhotoMutation } from "../store";

function PhotosListItem({ photo }) {
  const [removePhoto, result] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };
  return (
    <div className="relative m-2">
      <img className="h-20 w-20" src={photo.url} alt="random pic" />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <Button loading={result.isLoading} onClick={handleRemovePhoto}>
          <GoTrash className="text-2xl" />
        </Button>
      </div>
    </div>
  );
}

export default PhotosListItem;
