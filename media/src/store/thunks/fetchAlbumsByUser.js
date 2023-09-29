import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchAlbumsByUser = createAsyncThunk("albums/fetch", async (user) => {
  const response = await axios.get(
    `http://localhost:3005/albums?userId=${user.id}`
  );

  return response.data;
});

export { fetchAlbumsByUser };
