import { createAsyncThunk } from "@reduxjs/toolkit";
//Include Both Helper File with needed methods
import {
  getChartData as getAllDataApi,
  getHalfYearlyData as getHalfYearlyDataApi,
  getMonthlyData as getMonthlyDataApi,
  getYearlyData as getYearlyDataApi
} from "../../helpers/fakebackend_helper";

export const getChartData = createAsyncThunk("dashboard/getChartData", async (data: any) => {
  try {
    var response;

    if (data === "all") {
      response = getAllDataApi(data);
    }
    if (data === "monthly") {
      response = getMonthlyDataApi(data);
    }
    if (data === "halfyearly") {
      response = getHalfYearlyDataApi(data);
    }
    if (data === "yearly") {
      response = getYearlyDataApi(data);
    }

    return response;
  } catch (error) {
    return error;
  }
});