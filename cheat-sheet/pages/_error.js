const Error = ({ statusCode }) => {
  return (
    <>
      <h2 className="error-title">Ошибка!</h2>
      <p>
        {statusCode
          ? `Упс! На сервере возникла ошибка ${statusCode}`
          : "An error occured on client"}
      </p>
    </>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
