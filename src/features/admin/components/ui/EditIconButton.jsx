import React from "react"
import styled from "styled-components"
import ButtonStyled from "../../../../components/ui/ButtonStyled"
import { BiEdit } from "react-icons/bi"

const EditIconButton = ({ handleUpdate }) => {
  return (
    <>
      <EditButtonStyled color='primary' outline onClick={handleUpdate}>
        <BiEdit className='bgm-fs-0 fw-bold' />
      </EditButtonStyled>
    </>
  )
}

export default EditIconButton

const EditButtonStyled = styled(ButtonStyled)`
  padding: 0.5rem;
`
