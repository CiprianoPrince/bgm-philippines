import RawSwal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import fetchResource from "../../../services/fetchResource"

const Swal = withReactContent(RawSwal)

const addMessage = (newData, e) => {
  const messages = fetchResource("messages")
  if (messages != null) {
    const newMessages = [...messages, newData]
    window.localStorage.setItem("messages", JSON.stringify(newMessages))
    Swal.fire({
      icon: "success",
      iconColor: "var(--bs-dark)",
      color: "var(--bs-dark)",
      background: "var(--bs-light)",
      title: <h1>Sent successfully!</h1>,
      showConfirmButton: false,
      showCancelButton: false,
      showDenyButton: false,
      timer: 1000,
    })
    e.target.reset()
    return newData
  }
}

export default addMessage
