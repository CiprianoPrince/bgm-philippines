import React from "react"
import BGMMain from "../layouts/BGMMain"
import { useForm } from "react-hook-form"

const Login = () => {
  document.title = "BGM Phillipines Inc. | Login"
  // TODO create a form in features authentication page
  const { register, control, handleSubmit } = useForm()
  return (
    <>
      <BGMMain></BGMMain>
    </>
  )
}

export default Login
