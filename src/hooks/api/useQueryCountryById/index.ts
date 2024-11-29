// import * as Types from '../../../graphql'

// import { gql } from '@apollo/client'
// import * as Apollo from '@apollo/client'
// const defaultOptions = {} as const
// export type CountryByIdQueryVariables = Types.Exact<{
//   code: Types.Scalars['ID']['input']
// }>

// export type CountryByIdQuery = {
//   __typename?: 'Query'
//   country?: {
//     __typename?: 'Country'
//     name: string
//     native: string
//     emoji: string
//     currency?: string | null
//     languages: Array<{ __typename?: 'Language'; code: string; name: string }>
//   } | null
// }

// export const CountryByIdDocument = gql`
//   query CountryById($code: ID!) {
//     country(code: $code) {
//       name
//       native
//       emoji
//       currency
//       languages {
//         code
//         name
//       }
//     }
//   }
// `

// /**
//  * __useCountryByIdQuery__
//  *
//  * To run a query within a React component, call `useCountryByIdQuery` and pass it any options that fit your needs.
//  * When your component renders, `useCountryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
//  * you can use to render your UI.
//  *
//  * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
//  *
//  * @example
//  * const { data, loading, error } = useCountryByIdQuery({
//  *   variables: {
//  *      code: // value for 'code'
//  *   },
//  * });
//  */
// export function useCountryByIdQuery(
//   baseOptions: Apollo.QueryHookOptions<CountryByIdQuery, CountryByIdQueryVariables> &
//     ({ variables: CountryByIdQueryVariables; skip?: boolean } | { skip: boolean })
// ) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useQuery<CountryByIdQuery, CountryByIdQueryVariables>(CountryByIdDocument, options)
// }
// export function useCountryByIdLazyQuery(
//   baseOptions?: Apollo.LazyQueryHookOptions<CountryByIdQuery, CountryByIdQueryVariables>
// ) {
//   const options = { ...defaultOptions, ...baseOptions }
//   return Apollo.useLazyQuery<CountryByIdQuery, CountryByIdQueryVariables>(CountryByIdDocument, options)
// }
// export function useCountryByIdSuspenseQuery(
//   baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CountryByIdQuery, CountryByIdQueryVariables>
// ) {
//   const options = baseOptions === Apollo.skipToken ? baseOptions : { ...defaultOptions, ...baseOptions }
//   return Apollo.useSuspenseQuery<CountryByIdQuery, CountryByIdQueryVariables>(CountryByIdDocument, options)
// }
// export type CountryByIdQueryHookResult = ReturnType<typeof useCountryByIdQuery>
// export type CountryByIdLazyQueryHookResult = ReturnType<typeof useCountryByIdLazyQuery>
// export type CountryByIdSuspenseQueryHookResult = ReturnType<typeof useCountryByIdSuspenseQuery>
// export type CountryByIdQueryResult = Apollo.QueryResult<CountryByIdQuery, CountryByIdQueryVariables>
