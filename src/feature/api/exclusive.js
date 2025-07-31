// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: 'exclusive',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_DOMAIN_URL}` }),
  tagTypes: ['banner', 'category', 'sub-category', 'product'],
  endpoints: builder => ({
    //BANNER PART
    uploadBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: data => ({
        url: `/banner`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['banner'],
    }),
    getAllBanner: builder.query({
      query: () => `/banner`,
      providesTags: ['banner'],
    }),
    updateBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: data => {
        //for postman form-data, we have to follow this process
        const formdata = new FormData();
        formdata.append('title', data.title);
        formdata.append('image', data.image);
        return {
          url: `/banner/${data.id}`,
          method: 'PUT',
          body: formdata,
        };
      },
      invalidatesTags: ['banner'],
    }),
    deleteBanner: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: id => ({
        url: `/banner/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['banner'],
    }),
    //BANNER PART END

    //CATEGORY PART START
    uploadCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: data => ({
        url: `/category`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['category'],
    }),
    getAllCategory: builder.query({
      query: () => `/category`,
      providesTags: ['category'],
    }),
    getSingleCategory: builder.query({
      query: id => `/category/${id}`,
    }),
    updateCategory: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: data => {
        const formdata = new FormData();
        formdata.append('name', data.name);
        formdata.append('image', data.image);
        return {
          url: `/category/${data.id}`,
          method: 'PUT',
          body: formdata,
        };
      },
      invalidatesTags: ['category'],
    }),
    deleteCategory: builder.mutation({
      query: id => ({
        url: `/category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['category'],
    }),
    //CATEGORY PART END

    //SUBCATEGORY PART START
    getAllSubCategory: builder.query({
      query: () => `/sub-category`,
      providesTags: ['sub-category'],
    }),
    uploadSubCategory: builder.mutation({
      query: data => ({
        url: `/sub-category`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['sub-category'],
    }),
    updateSubCategory: builder.mutation({
      query: data => ({
        url: `/sub-category/${data.id}`,
        method: 'PUT',
        body: {
          name: data.name,
          category: data.category,
        },
      }),
      invalidatesTags: ['sub-category'],
    }),
    deleteSubCategory: builder.mutation({
      query: id => ({
        url: `/sub-category/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['sub-category'],
    }),
    //SUBCATEGORY PART END

    //PRODUCT PART START
    getAllProducts: builder.query({
      query: () => `/product`,
      providesTags: ['product'],
    }),
    //PRODUCT PART END
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUploadBannerMutation,
  useGetAllBannerQuery,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
  useUploadCategoryMutation,
  useGetAllCategoryQuery,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllSubCategoryQuery,
  useUploadSubCategoryMutation,
  useUpdateSubCategoryMutation,
  useDeleteSubCategoryMutation,
  useGetAllProductsQuery,
} = exclusiveApi;
