import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: string | number; output: number }
  Float: { input: string | number; output: number }
}

export type Continent = {
  readonly code: Scalars['ID']['output']
  readonly countries: ReadonlyArray<Country>
  readonly name: Scalars['String']['output']
}

export type ContinentFilterInput = {
  readonly code?: InputMaybe<StringQueryOperatorInput>
}

export type Country = {
  readonly awsRegion: Scalars['String']['output']
  readonly capital?: Maybe<Scalars['String']['output']>
  readonly code: Scalars['ID']['output']
  readonly continent: Continent
  readonly currencies: ReadonlyArray<Scalars['String']['output']>
  readonly currency?: Maybe<Scalars['String']['output']>
  readonly emoji: Scalars['String']['output']
  readonly emojiU: Scalars['String']['output']
  readonly languages: ReadonlyArray<Language>
  readonly name: Scalars['String']['output']
  readonly native: Scalars['String']['output']
  readonly phone: Scalars['String']['output']
  readonly phones: ReadonlyArray<Scalars['String']['output']>
  readonly states: ReadonlyArray<State>
  readonly subdivisions: ReadonlyArray<Subdivision>
}

export type CountryNameArgs = {
  lang?: InputMaybe<Scalars['String']['input']>
}

export type CountryFilterInput = {
  readonly code?: InputMaybe<StringQueryOperatorInput>
  readonly continent?: InputMaybe<StringQueryOperatorInput>
  readonly currency?: InputMaybe<StringQueryOperatorInput>
  readonly name?: InputMaybe<StringQueryOperatorInput>
}

export type Language = {
  readonly code: Scalars['ID']['output']
  readonly name: Scalars['String']['output']
  readonly native: Scalars['String']['output']
  readonly rtl: Scalars['Boolean']['output']
}

export type LanguageFilterInput = {
  readonly code?: InputMaybe<StringQueryOperatorInput>
}

export type Query = {
  readonly continent?: Maybe<Continent>
  readonly continents: ReadonlyArray<Continent>
  readonly countries: ReadonlyArray<Country>
  readonly country?: Maybe<Country>
  readonly language?: Maybe<Language>
  readonly languages: ReadonlyArray<Language>
}

export type QueryContinentArgs = {
  code: Scalars['ID']['input']
}

export type QueryContinentsArgs = {
  filter?: InputMaybe<ContinentFilterInput>
}

export type QueryCountriesArgs = {
  filter?: InputMaybe<CountryFilterInput>
}

export type QueryCountryArgs = {
  code: Scalars['ID']['input']
}

export type QueryLanguageArgs = {
  code: Scalars['ID']['input']
}

export type QueryLanguagesArgs = {
  filter?: InputMaybe<LanguageFilterInput>
}

export type State = {
  readonly code?: Maybe<Scalars['String']['output']>
  readonly country: Country
  readonly name: Scalars['String']['output']
}

export type StringQueryOperatorInput = {
  readonly eq?: InputMaybe<Scalars['String']['input']>
  readonly in?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>
  readonly ne?: InputMaybe<Scalars['String']['input']>
  readonly nin?: InputMaybe<ReadonlyArray<Scalars['String']['input']>>
  readonly regex?: InputMaybe<Scalars['String']['input']>
}

export type Subdivision = {
  readonly code: Scalars['ID']['output']
  readonly emoji?: Maybe<Scalars['String']['output']>
  readonly name: Scalars['String']['output']
}

export type CountryByIdQueryVariables = Exact<{
  code: Scalars['ID']['input']
}>

export type CountryByIdQuery = {
  readonly country?: {
    readonly name: string
    readonly native: string
    readonly emoji: string
    readonly currency?: string | null
    readonly languages: ReadonlyArray<{ readonly code: string; readonly name: string }>
  } | null
}

export const CountryByIdDocument = gql`
  query CountryById($code: ID!) {
    country(code: $code) {
      name
      native
      emoji
      currency
      languages {
        code
        name
      }
    }
  }
`
export type CountryByIdQueryResult = Apollo.QueryResult<CountryByIdQuery, CountryByIdQueryVariables>
