import { createReducer } from "@reduxjs/toolkit"


const initState: any = {};

export const dashboardReducer = createReducer(initState, (builder) => {
  builder.addDefaultCase((state) => state);
});
