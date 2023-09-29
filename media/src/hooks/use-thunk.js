import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

export default function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setloadingError] = useState(null);
  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoading(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((error) => {
          setloadingError(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [dispatch, thunk]
  );

  return [runThunk, isLoading, loadingError];
}
