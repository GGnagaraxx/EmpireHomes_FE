import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const sampleApi = createApi({
    reducerPath: 'sampleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'api url here',
    }),

    endpoints: (builder) => ({
        getAllPosts: builder.query({        //query is for GET
            url: '/post',
            method: 'GET'
        })
    })
})


export const { useGetAllPostQuery } = sampleApi;
