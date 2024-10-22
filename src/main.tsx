import { ApolloClient,ApolloProvider,createHttpLink,InMemoryCache } from '@apollo/client'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'


const client = new ApolloClient({
link:createHttpLink({
  uri: 'https://countries.trevorblades.com/graphql',
}),
  cache: new InMemoryCache(),
})
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <App />
    </ApolloProvider>
  </StrictMode>,
)
