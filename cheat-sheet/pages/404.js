import Link from "next/link"
import Head from "next/head"

const Page404 = () => {

  return (
    <>
      <Head>
        <title>Страница 404</title>
      </Head>

      <p>
        Упс! Страница не найдена. Проверьте пожалуйста правильность введенного
          Вами URL или перейдите на{" "}
        <Link href="/">
          <a>главную</a>
        </Link>
      </p>
    </>
  )
}

export default Page404
