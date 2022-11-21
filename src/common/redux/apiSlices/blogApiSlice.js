import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const blogApiSlice = createApi({
    reducerPath: 'blogApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7096/',
    }),

    endpoints: (builder) => ({
        getBlogList: builder.query({
            query: () => 'api/blog/'
        }),
    })
})


export const { useGetBlogListQuery } = blogApiSlice;
export default blogApiSlice;
