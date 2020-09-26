import { useMutation, gql } from "@apollo/client"

const CHANGE_USER = gql`
  mutation UpdatePerson($input: updatePersonInput) {
    updatePerson(input: $input) {
      person {
        id
      }
    }
  }
`

const MutationBtn = () => {
  const [name, setName] = useState("")

  const [handleUpdateUser] = useMutation(CHANGE_USER, {
    onCompleted: (data) => {
      if (data.updatePerson.person) {
        console.log("Сохранено успешно")
      }
    },
    onError: (err) => console.log(err),
  })

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() =>
          handleUpdateUser({
            variables: {
              input: {
                name
              },
            },
          })
        }
      >
        Сохранить
      </button>
    </div>
  )
}

export default MutationBtn