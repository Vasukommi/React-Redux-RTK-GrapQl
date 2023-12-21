import { createApi} from "@reduxjs/toolkit/query/react";
import {graphqlRequestBaseQuery} from "@rtk-query/graphql-request-base-query";
import { gql } from 'graphql-request'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi-graphql.netlify.app/.netlify/functions/index' }),
    endpoints: (builder: any) => ({
        getProducts: builder.query({
            query: () => `
              query {
                allFilms {
                  films {
                    title
                    director
                    releaseDate
                    speciesConnection {
                      species {
                        name
                        classification
                        homeworld {
                          name
                        }
                      }
                    }
                  }
                }
              }
            `
        })
    })
});

export const { useGetProductsQuery } = apiSlice;