import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {LinkFromApi} from "../../type";
import {shortenUrl} from "./linksThunks";

interface LinksSlice {
  link: LinkFromApi | null,
  lauding: boolean,
}

const initialState: LinksSlice = {
  link: null,
  lauding: false,
};

const linksSlice = createSlice({
  name: "links",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(shortenUrl.pending, (state) => {
      state.lauding = true;
    }).addCase(shortenUrl.fulfilled, (state, {payload: linkApi}: PayloadAction<LinkFromApi | null>) => {
      state.link = linkApi;
      state.lauding = false;
    }).addCase(shortenUrl.rejected, (state) => {
      state.lauding = false;
    });
  },
});

export const linksReducer = linksSlice.reducer;

export const selectLink = (state: RootState) => state.links.link;
export const selectLauding = (state: RootState) => state.links.lauding;
