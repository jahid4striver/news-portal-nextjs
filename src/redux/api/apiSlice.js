import { createApi } from "@reduxjs/toolkit/query/react"
import { fetchBaseQuery } from "@reduxjs/toolkit/query"


export const apiSlice= createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder)=>({
        getNewses:builder.query({
            query:()=>"/news"
        })
    })
})

export const {useGetNewsesQuery}=apiSlice;