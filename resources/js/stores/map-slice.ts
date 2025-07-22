import { createSlice } from "@reduxjs/toolkit";
import exp from "constants";

type MapState = {
    markers: number[];
    center: number[];
    info: object | null;
}

const initialState: MapState = {
    markers: [],
    center: [51.39649054482044, 24.80757667892894],
    info: null
}

export const mapSlice = createSlice({
   name: 'map',
   initialState,
   reducers: {
       addMarker: (state, action) => {

          const { lat, lng, info } = action.payload;
          const dataMarker = [lat, lng];

         state.markers = dataMarker;
         state.info = info; // Store the info of the last added marker

       },
       removeMarker: (state, action) => {},
   }
});


export const { addMarker, removeMarker } = mapSlice.actions;
