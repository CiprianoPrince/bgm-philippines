import { BiEdit, BiTrash } from "react-icons/bi"
import BGMStack from "../../../components/ui/BGMStack"
import { Button } from "reactstrap"
import styled from "styled-components"

const ActionsButton = ({ id }) => {
  return (
    <>
      <BGMStack direction='horizontal' gap={2}>
        <EditButtonStyled
          color='primary'
          outline
          onClick={() => console.log(id)}
        >
          <BiEdit className='bgm-fs-0 fw-bold' />
        </EditButtonStyled>

        <DeleteButtonStyled color='dark' onClick={() => console.log(id)}>
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
