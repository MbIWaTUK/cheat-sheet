const QUERY = gql`
  query GetEventInfoForTab1($id: ID!) {
    getEventInfoForTab1(id: $id) {
      info
    }
  }
`
const CHANGE_USER = gql`
  mutation UpdatePerson($input: updatePersonInput) {
    updatePerson(input: $input) {
      person {
        id
      }
    }
  }
`
const Mutation = ({ id }) => {
  const [name, setName] = useState("")
  const [changeName] = useMutation(CHANGE_USER)

  const [info, setInfo] = useState(null)

  useQuery(QUERY, {
    skip: id ? false : true,
    variables: { id },
    onCompleted: (data) => {
      if (data) {
        setInfo(
          data.getEventInfoForTab1.info
            ? data.getEventInfoForTab1.info
            : "not info"
        )
      }
    },
    onError: (err) => console.log(err),
  })

  const handleClick = async () => {

    try {
      await changeName({
        variables: {
          input: {
            name
          },
        },
        refetchQueries: [
          { query: QUERY, variables: { id } },
        ],
      })
      console.log("Сохранено")
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
      {info}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={async () => {
          await handleClick()
          console.log("Click")
        }}
      >
        Сохранить
      </button>
    </div>
  )
}

export default Mutation