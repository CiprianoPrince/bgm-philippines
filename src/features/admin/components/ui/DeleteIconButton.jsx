import React from "react"
import styled from "styled-components"
import ButtonStyled from "../../../../components/ui/ButtonStyled"
import { BiTrash } from "react-icons/bi"

const DeleteIconButton = ({ handleDelete }) => {
  return (
    <>
      <DeleteButtonStyled color='dark' onClick={handleDelete}>
        <BiTrash className='bgm-fs-0 fw-bold' />
      </DeleteButtonStyled>
    </>
  )
}

export default DeleteIconButton

const DeleteButtonStyled = styled(ButtonStyled)`
  padding: 0.5rem;
`
