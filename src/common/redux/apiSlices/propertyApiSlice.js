import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const propertyApiSlice = createApi({
    reducerPath: 'propertyApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://localhost:7096/',
    }),

    endpoints: (builder) => ({
        getPropertyList: builder.query({
            query: () => 'api/property/'
        }),
        getProperty: builder.query({
            query: (id) => {
                console.log(id);
                return `api/property/${id}/`
            }
        }),

    })
})


export const { useGetPropertyListQuery, useGetPropertyQuery } = propertyApiSlice;
export default propertyApiSlice;
