import '@/styles/globals.css';
// import '@/styles/tailwind.css';
import 'tailwindcss/tailwind.css';
// import 'tailwindcss/';

import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
// import HomePage from './Home';
import Home from '.';

const client = new ApolloClient({
  // Create ApolloClient
  uri: 'http://localhost:8000/graphql', // Replace with your GraphQL server endpoint
  cache: new InMemoryCache(), // Add cache
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
