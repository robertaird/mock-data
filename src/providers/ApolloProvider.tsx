import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

type ApolloProviderProps = {
  children: React.ReactNode;
};

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
  uri: `${process.env.REACT_APP_GQL_URI}`,
});

export function AppApolloProvider({ children }: ApolloProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
