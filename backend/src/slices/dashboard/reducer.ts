import { createSlice } from "@reduxjs/toolkit";
import { getChartData } from './thunk';

export const initialState = {
  chartData: [],
  error: {}
};

const dashboardslice = createSlice({
  name: 'Dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChartData.fulfilled, (state:any, action:any) => {
      state.chartData = action.payload;
    });
    builder.addCase(getChartData.rejected, (state:any, action:any) => {
      state.error = action.payload.error || null;
    });
  }
});

export default dashboardslice.reducer;