import React from "react"
import useAddHandler from "../hooks/useAddHandler"
import { BiPlus } from "react-icons/bi"
import BGMStack from "../../../components/ui/BGMStack"
import styled from "styled-components"
import ButtonStyled from "../../../components/ui/ButtonStyled"
import formatSentenceCase from "../utils/formatSentenceCase"

const SubHeaderAddButton = ({ resource, dispatch }) => {
  const handleAdd = useAddHandler(resource, dispatch)

  return (
    <>
      <BGMStack direction='horizontal' gap={2}>
        <AddButtonStyled color='primary' outline onClick={handleAdd}>
          <BiPlus className='fw-bold' />
        </AddButtonStyled>
        <h1 className='d-inline-block m-0'>{formatSentenceCase(resource)}</h1>
      </BGMStack>
    </>
  )
}

export default SubHeaderAddButton

const AddButtonStyled = styled(ButtonStyled)`
  width: 45px;
  height: 45px;
  border-radius: 50%;
`
