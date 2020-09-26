import cookie from "cookie"
import { useEffect, useState } from "react"


const useCookie = () => {
  const [isCookieExist, setIsCookieExist] = useState(false)

  useEffect(() => {
    const c = document.cookie
    const { surprise } = cookie.parse(c)
    if (surprise && surprise === "eggs") {
      setIsCookieExist(true)
    }
  }, [])

  const updateCookieState = (newState) => {
    setIsCookieExist(newState)
  }

  return [isCookieExist, updateCookieState]
}

const CookiesModal = () => {
  const MAX_AGE = 60 * 60 * 24 * 30

  const [isCookieExist, updateCookieState] = useCookie()

  const handle = () => {
    const surpise = cookie.serialize("surprise", "eggs", {
      maxAge: MAX_AGE,
      expires: new Date(Date.now() + MAX_AGE),
      secure: process.env.NODE_ENV === "production",
      //   httpOnly: ,
      path: "/",
      sameSite: "lax",
    })

    document.cookie = surpise
    updateCookieState(surpise)
  }
  return (
    <>
      {!isCookieExist && (
        <div className="cookiesmodal">
          <div className="cookiesmodal__close" onClick={() => handle()}></div>
          <div className="cookiesmodal__container">
            <p className="cookiesmodal__title">
              Разрешить использовать файлы cookies?
            </p>
            <p className="cookiesmodal__text">
              Для улучшения работы сайта и его взаимодействия с пользователями
              мы используем файлы cookie. Продолжая работу с сайтом, Вы
              разрешаете использование cookie-файлов. Вы всегда можете отключить
              файлы cookie в настройках Вашего браузера.
            </p>
            <div className="cookiesmodal__btn">
              <button onClick={() => handle()}>Соглашаюсь</button>
            </div>
          </div>
          <style jsx>
            {`
              .cookiesmodal {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                display: flex;
                box-shadow: 0px 0px 40px rgba(5, 61, 146, 0.4);
                flex-direction: column;
                background-color: #fff;
                z-index: 20000;
                max-width: 500px;
                height: 320px;
              }
              .cookiesmodal:before {
                content: "";
                position: absolute;
                width: 120px;
                height: 120px;
                top: 80px;
                right: 30px;
                background-image: url("/static/img/Group.png");
                background-size: cover;
              }
              .cookiesmodal__container {
                padding: 20px 20px;
                position: relative;
              }
              .cookiesmodal__close {
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;
                top: -24px;
                right: -24px;
                width: 46px;
                height: 46px;
                background: #ffffff;
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                border-radius: 50%;
                cursor: pointer;
                z-index: 1;
              }
              .cookiesmodal__close:before {
                content: "";
                width: 20px;
                height: 20px;
                background-image: url("/static/img/close.svg");
                background-size: cover;
              }
              .cookiesmodal__title {
                font-family: "Montserrat", sans-serif;
                font-style: normal;
                font-weight: 900;
                font-size: 16px;
                line-height: 28px;
                color: #000000;
              }
              .cookiesmodal__text {
                font-family: Montserrat;
                font-style: normal;
                font-weight: normal;
                font-size: 14px;
                line-height: 24px;
                margin-top: 23px;
                color: #000000;
                margin-right: 85px;
              }
              .cookiesmodal__btn {
                margin-top: 30px;
                display: flex;
                justify-content: flex-start;
              }
              @media (max-width: 960px) {
                .cookiesmodal {
                  position: fixed;
                  bottom: 2rem;
                  right: 2rem;
                  display: flex;

                  flex-direction: column;
                  background-color: #fff;
                  z-index: 100;
                  max-width: 500px;
                  height: 360px;
                }
                .cookiesmodal:before {
                  display: none;
                }
                .cookiesmodal__container {
                  padding: 20px;
                }
                .cookiesmodal__close {
                  top: 10px;
                  right: 10px;
                  width: 36px;
                  height: 36px;
                }
                .cookiesmodal__title {
                  font-size: 20px;
                  line-height: 26px;
                }
                .cookiesmodal__text {
                  font-size: 14px;
                  line-height: 20px;
                  margin-top: 15px;
                  margin-right: 0;
                }
                .cookiesmodal__btn {
                  flex-direction: column;
                }
              }
              @media (max-width: 426px) {
                .cookiesmodal {
                  height: 440px;
                  bottom: 0rem;
                  right: 0rem;
                }
                .cookiesmodal__title {
                  font-size: 17px;
                  line-height: 26px;
                }
                .cookiesmodal__close {
                  z-index: 1;
                }
              }
            `}
          </style>
          <style global>{`
                .cookiesmodal__btn button {
                    font-size: 18px;
                    padding: 13px 28px;
                }
                @media (max-width: 960px) {
                    .cookiesmodal__btn button {
                        margin-bottom: 20px;
                        font-size: 16px;
                        padding: 10px 25px;
                    }
                }
            `}</style>
        </div>
      )}
    </>
  )
}

export default CookiesModal
