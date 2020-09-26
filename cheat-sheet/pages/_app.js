import "react-multi-carousel/lib/styles.css"
import "react-fancybox/lib/fancybox.css"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../lib/apolloClient"
import { BasketContext } from "../lib/basketContext"
import useLocalState from "../lib/useLocalState"


function MyApp({ Component, pageProps }) {
  const [basket, setBasket] = useLocalState("basket")
  const apolloClient = useApollo(pageProps.initialApolloState)
  return (
    <ApolloProvider client={apolloClient}>
      <BasketContext.Provider value={{ basket, setBasket }}>
        <Component {...pageProps} />
      </BasketContext.Provider>
    </ApolloProvider>
  )
}

export default MyApp