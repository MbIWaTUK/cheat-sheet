import { BasketContext } from "../lib/basketContext"
import BasketItem from "../components/BasketItem"

export default function IndexPage() {
  const { basket, setBasket } = useContext(BasketContext)

  const handleCount = (product, delta) => {
    const productsInBasket = basket.filter((b) => b.id === product.id)
    const productsInBasketAll = basket.filter((b) => b.id !== product.id)

    if (productsInBasket[0].count === 1 && delta === -1) {
      setBasket(productsInBasketAll)
    } else {
      const f = basket.map((b) => {
        if (b.id === product.id) {
          return {
            ...b,
            count: b.count + delta,
            price:
              (b.count + delta) * (b.gift.price)
          }
        } else {
          return b
        }
      })
      setBasket(f)
    }
  }
  return (
    <div>
      {basket &&
        basket.map((b) => (
          <BasketItem
            product={b}
            handleCount={(product, delta) => handleCount(product, delta)}
          />
        ))}
    </div>
  )
}