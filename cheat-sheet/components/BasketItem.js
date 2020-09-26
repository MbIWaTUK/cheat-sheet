const BasketItem = ({ product, handleCount }) => {
  return (
    <div className="basketitem">
      <div
        className="basketitem__img"
        style={{
          backgroundImage: `url(${process.env.NEXT_PUBLIC_URL}${product.egg && product.egg.image ? product.egg.image.url : ""})`,
        }}
      ></div>
      <div className="basketitem__content">
        <span className="basketitem__content__name">{product.egg && product.egg.title ? product.egg.title : ""}</span>
        <div className="basketitem__content__size">
          <span className="basketitem__content__size__left">размер:</span>
          <span className="basketitem__content__size__right">
            {product && product.sizeEgg
              ? product.sizeEgg.name
              : product.size.name}
          </span>
        </div>
        <div className="basketitem__content__size">
          <span className="basketitem__content__size__left">шоколад:</span>
          <span className="basketitem__content__size__right">
            {product && product.activeChokolate
              ? product.activeChokolate.name
              : product.chocolate.name}
          </span>
        </div>
        <div className="basketitem__content__size">
          <span className="basketitem__content__size__left">подарок:</span>
          <span className="basketitem__content__size__right">
            {product.gift && product.gift.title
              ? product.gift.title
              : "Свой подарок"}
          </span>
        </div>
        <div className="basketitem__content__price">
          <span className="basketitem__content__price__left">
            {`${product.price ? `${product.price} ₽` : ""}`}
          </span>
          <span className="basketitem__content__price__right">
            {product.price && (
              <i
                className="fas fa-minus"
                onClick={() => handleCount(product, -1)}
              ></i>
            )}
            <span className="basketitem__content__price__right__count">
              {product.count}
            </span>
            {product.price && (
              <i
                className="fas fa-plus"
                onClick={() => handleCount(product, 1)}
              ></i>
            )}
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .basketitem {
            display: flex;
            width: 100%;
            padding: 30px 0 60px 0;
            border-bottom: 1px solid #000;
          }
          .basketitem__img {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            height: 270px;
            width: 162px;
            flex-grow: 1;
          }
          .basketitem__content {
            display: flex;
            flex-direction: column;
            padding-left: 1rem;
            flex-grow: 4;
          }
          .basketitem__content__name {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 30px;
            border-bottom: 1px solid #000;
            width: 100%;
            padding-bottom: 12px;
          }
          .basketitem__content__size {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
            border-bottom: 1px solid #000;
          }
          .basketitem__content__size__left {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 15px;
            opacity: 0.5;
            text-transform: uppercase;
          }
          .basketitem__content__size__right {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 20px;
          }
          .basketitem__content__price {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 0;
          }
          .basketitem__content__price__left {
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 35px;
            color: #1b64ad;
          }
          .basketitem__content__price__right {
            display: flex;
            align-items: center;
          }
          .basketitem__content__price__right i {
            font-size: 25px;
            color: #dc3224;
            cursor: pointer;
          }
          .basketitem__content__price__right__count {
            display: flex;
            justify-content: center;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 900;
            font-size: 32px;
            color: #1b64ad;
            width: 50px;
          }
          @media (max-width: 640px) {
            .basketitem {
              flex-direction: column;
              padding: 30px 0;
            }
            .basketitem__img {
              width: 100%;
              max-width: 330px;
              height: 200px;
              margin: 0 auto;
            }
            .basketitem__content {
              margin-top: 20px;
            }
            .basketitem__content__name {
              font-size: 20px;
              text-align: center;
            }
            .basketitem__content__size {
              flex-direction: column;
            }
            .basketitem__content__size__left {
              margin-bottom: 10px;
            }
            .basketitem__content__size__left,
            .basketitem__content__size__right {
              font-size: 14px;
            }
            .basketitem__content__price__left {
              font-size: 30px;
            }
            .basketitem__content__price__right__count {
              font-size: 25px;
            }
            .basketitem__content__price__right i {
              font-size: 20px;
            }
          }
          @media (max-width: 426px) {
            .basketitem__content {
              padding-left: 0px;
            }
          }
        `}
      </style>
    </div>
  )
}

export default BasketItem
