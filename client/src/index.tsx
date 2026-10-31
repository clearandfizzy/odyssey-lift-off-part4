import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles";
import Pages from "./pages";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://lifeless-owl-pj6vggvq4gc7jv6-4000.app.github.dev" }),
  cache: new InMemoryCache(),
});

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <Pages />
    </ApolloProvider>
  </React.StrictMode>,
);
