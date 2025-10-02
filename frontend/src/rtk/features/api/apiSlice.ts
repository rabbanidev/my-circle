import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypeList } from "../../tagTypes";
import envConfig from "../../../helper/config/envConfig";
import axiosBaseQuery from "../../../helper/axios/axiosBaseQuery";

export const apiSlice = createApi({
  reducerPath: "My-circle",
  baseQuery: axiosBaseQuery({
    baseUrl: envConfig.base_url,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypeList,
});

export default apiSlice;
