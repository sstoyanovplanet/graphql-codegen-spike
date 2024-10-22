declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_REACT_GRAPHQL_ENDPOINT: string
    }
  }
  interface ImportMetaEnv {
    VITE_REACT_GRAPHQL_ENDPOINT: string
  }
}

export {}
