// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/v1" }),
  tagTypes: ["banner"],
  endpoints: (builder) => ({
    uploadBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (data) => ({
        url: `/banner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),
    getAllBanner: builder.query({
      query: () => `/banner`,
      providesTags: ["banner"],
    }),
    updateBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (data) => {
        //for postman form-data we have to follow this process
        const formdata = new FormData();
        formdata.append("title", data.title);
        formdata.append("image", data.image);
        return {
          url: `/banner/${data.id}`,
          method: "PUT",
          body: formdata,
        };
      },
      invalidatesTags: ["banner"],
    }),
    deleteBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: (id) => ({
        url: `/banner/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["banner"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUploadBannerMutation,
  useGetAllBannerQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = exclusiveApi;
