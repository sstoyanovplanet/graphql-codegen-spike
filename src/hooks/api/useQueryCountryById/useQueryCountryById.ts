import { useQuery } from '@apollo/client'

import {type CountryByIdQuery,type CountryByIdQueryVariables, CountryByIdDocument } from '../../../graphql/graphql'

function useGetCountry(variables?: CountryByIdQueryVariables) {
  return useQuery<CountryByIdQuery['country'], CountryByIdQueryVariables>(CountryByIdDocument, { variables })
}

export default useGetCountry
