const CHANGE_USER = gql`
  mutation UpdatePerson($input: updatePersonInput) {
    updatePerson(input: $input) {
      person {
        id
      }
    }
  }
`
const Mutation = () => {
  const [name, setName] = useState("")
  const [changeName] = useMutation(CHANGE_USER)

  const handleClick = async () => {

    const { data, error } = await changeName({
      variables: {
        input: {
          name
        },
      },
    })

    if (error) {
      console.log("Ошибка")
    }
    if (data.updatePerson.person) {
      console.log("Сохранено успешно")
    }
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => handleClick()}
      >
        Сохранить
      </button>
    </div>
  )
}

export default Mutation