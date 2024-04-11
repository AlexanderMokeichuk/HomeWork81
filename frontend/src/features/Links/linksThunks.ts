import {createAsyncThunk} from "@reduxjs/toolkit";
import {LinkFromApi, LinkFrontend} from "../../type";
import axiosApi from "../../axiosApi";

export const shortenUrl = createAsyncThunk<LinkFromApi | null, LinkFrontend>(
  "links/shorten",
  async (url) => {
    try {
      const {data: response} = await axiosApi.post<LinkFromApi>("/links", url);
      if (!response) {
        return  null;
      }
      return response;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
);