import { mutate } from "swr"

const Mutation = () => {
  const [name, setName] = useState("")

  const changeProfileInfo = async (e) => {
    e.preventDefault()
    try {
      await mutate(
        process.env.API_URL + "/users/" + id,

        await fetch(process.env.API_URL + "/users/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            name
          }),
        })
      )
      console.log("Имя сохранено")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => changeProfileInfo()}>Save</button>
    </div>
  )
}

export default Mutation