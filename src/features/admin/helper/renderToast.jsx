import RawSwal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import { Form } from "../../../components/Form"

const Swal = withReactContent(RawSwal)

export const addOne = async (
  ResourceName,
  fields,
  schema,
  handleValidData,
  className,
  Button
) => {
  return await Swal.fire({
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Add {ResourceName}</h1>,
    html: (
      <Form
        fields={fields}
        schema={schema}
        defaultValues={{
          firstName: "Prince",
          lastName: "Cipriano",
          email: "prince@example.com",
          phone: "9155419569",
          role: "Web developer",
        }}
        handleValidData={handleValidData}
        className={className}
        Buttons={Button}
      />
    ),
    showConfirmButton: false,
    showCancelButton: false,
    showDenyButton: false,
  })
}

export const updateOne = async (
  ResourceName,
  fields,
  schema,
  defaultValues,
  handleValidData,
  className,
  Button
) => {
  return await Swal.fire({
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Update {ResourceName}</h1>,
    html: (
      <Form
        fields={fields}
        schema={schema}
        defaultValues={defaultValues}
        handleValidData={handleValidData}
        className={className}
        Buttons={Button}
      />
    ),
    showConfirmButton: false,
    showCancelButton: false,
    showDenyButton: false,
  })
}

export const deleteOne = async (name) => {
  return await Swal.fire({
    icon: "warning",
    iconColor: "var(--bs-dark)",
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Delete </h1>,
    html: <p>{`are you sure you want to delete ${name}?`}</p>,
    showConfirmButton: true,
    confirmButtonText: "Delete",
    confirmButtonColor: "var(--bs-danger)",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    cancelButtonColor: "var(--bs-secondary)",
    customClass: {
      container: `color: black`,
    },
  })
}

export const successAdd = async () => {
  return await Swal.fire({
    icon: "success",
    iconColor: "var(--bs-dark)",
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Added successfully!</h1>,
    showConfirmButton: false,
    showCancelButton: false,
    showDenyButton: false,
    timer: 1000,
  })
}

export const successUpdate = async () => {
  return await Swal.fire({
    icon: "success",
    iconColor: "var(--bs-dark)",
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Updated successfully!</h1>,
    showConfirmButton: false,
    showCancelButton: false,
    showDenyButton: false,
    timer: 1000,
  })
}

export const successDelete = async () => {
  return await Swal.fire({
    icon: "success",
    iconColor: "var(--bs-dark)",
    color: "var(--bs-dark)",
    background: "var(--bs-light)",
    title: <h1>Deleted successfully!</h1>,
    showConfirmButton: false,
    showCancelButton: false,
    showDenyButton: false,
    timer: 1000,
  })
}

export const handleCancel = () => {
  Swal.close({
    isConfirmed: false,
    isDenied: false,
    isDismissed: true,
  })
}

export const handleSave = (formValues) => {
  Swal.close({
    isConfirmed: true,
    isDenied: false,
    isDismissed: false,
    value: formValues,
  })
}
