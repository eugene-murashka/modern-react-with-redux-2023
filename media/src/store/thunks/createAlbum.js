import { createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import axios from "axios";

const createAlbum = createAsyncThunk("albums/add", async (user) => {
  console.log("albums/add_user", user);
  const response = await axios.get("http://localhost:3005/albums", {
    name: faker.music.songName(),
    userId: user.id,
  });
  console.log("response", response);

  return response.data;
});

export { createAlbum };
