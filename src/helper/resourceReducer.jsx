import { v4 } from "uuid"
import updateResource from "../features/admin/services/updateResource"

const ACTION = {
  addOne: "addOne",
  addMany: "addMany",
  findOne: "findOne",
  findMany: "findMany",
  updateOne: "updateOne",
  updateMany: "updateMany",
  deleteOne: "deleteOne",
  deleteMany: "deleteMany",
}

const resourceReducer = (state, action) => {
  switch (action.type) {
    case ACTION.addOne:
      return updateResource(action.payload.key, [...state, action.payload.data])
    case ACTION.updateOne:
      return updateResource(action.payload.key, [
        ...state.filter((stateData) => stateData.id !== action.payload.id),
        action.payload.data,
      ])
    case ACTION.deleteOne:
      return updateResource(action.payload.key, [
        ...state.filter((stateData) => stateData.id !== action.payload.id),
      ])
    case ACTION.deleteMany:
      return updateResource(action.payload.key, [
        ...state.filter((stateData) =>
          action.payload.data.includes(stateData.id)
        ),
      ])
    default:
      return state
  }
}

export const handleAddOne = ({ key, data }) => {
  return { type: ACTION.addOne, payload: { key, data } }
}

export const handleUpdateOne = ({ key, id, data }) => {
  return { type: ACTION.updateOne, payload: { key, id, data } }
}

export const handleDeleteOne = ({ key, id }) => {
  return { type: ACTION.deleteOne, payload: { key, id } }
}

export const handleDeleteMany = (id) => {
  return { type: ACTION.deleteMany, payload: { id } }
}

export default resourceReducer
