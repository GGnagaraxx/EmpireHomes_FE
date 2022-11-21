import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const applicationApiSlice = createApi({
    reducerPath: 'applicationApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7096/',
    }),

    endpoints: (builder) => ({
        postApplication: builder.mutation({
            query: (body) => ({
                url: `api/application/`,
                method: 'POST',
                body
            })
        }),
    })
})


export const { usePostApplicationMutation } = applicationApiSlice;
export default applicationApiSlice;
