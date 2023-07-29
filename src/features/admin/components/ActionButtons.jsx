import { BiEdit, BiTrash } from "react-icons/bi"
import BGMStack from "../../../components/ui/BGMStack"
import { Button } from "reactstrap"
import styled from "styled-components"

import {
  USER_TOAST,
  handleDeleteOneUser,
  handleUpdateOneUser,
  useUserDispatchContext,
} from "../context/UserContext"
import { useCallback } from "react"

const ActionsButton = ({ user }) => {
  const dispatch = useUserDispatchContext()

  const handleUpdate = useCallback(async () => {
    const { isConfirmed, value } = await USER_TOAST.updateOne(user)
    if (isConfirmed) dispatch(handleUpdateOneUser(value))
  }, [dispatch, user])

  const handleDelete = useCallback(async () => {
    const { isConfirmed } = await USER_TOAST.deleteOne(user.name)
    if (isConfirmed) dispatch(handleDeleteOneUser(user.id))
  }, [dispatch, user.name, user.id])

  return (
    <>
      <BGMStack direction='horizontal' gap={2}>
        <EditButtonStyled color='primary' outline onClick={handleUpdate}>
          <BiEdit className='bgm-fs-0 fw-bold' />
        </EditButtonStyled>

        <DeleteButtonStyled color='dark' onClick={handleDelete}>
          <BiTrash className='bgm-fs-0 fw-bold' />
        </DeleteButtonStyled>
      </BGMStack>
    </>
  )
}

export default ActionsButton

const EditButtonStyled = styled(Button)`
  padding: 0.5rem;
  &:hover {
    color: var(--bs-white);
  }

  &:active:focus {
    color: var(--bs-white);
  }
`
const DeleteButtonStyled = styled(Button)`
  padding: 0.5rem;
  &:hover {
    background-color: var(--bs-white);
    color: var(--bs-dark);
  }
  &:active:focus {
    background-color: var(--bs-white);
    color: var(--bs-dark);
  }
`
