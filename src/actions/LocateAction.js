import {
  LOCATE_SUCCESSFUL,
  LOCATE_FAILED,
  LOCATE_RUNNING,
  LOCATE_COMPLETE
} from './'

export const LocateAction = () => {
  return (dispatch) => {
    dispatch(somethingHappens(LOCATE_SUCCESSFUL))
  }
}

const somethingHappens = (payload) => {
  switch (payload) {
    case LOCATE_SUCCESSFUL:
      return {
        type: payload,
        data: { ip: 'Action Success :)' }
      }
    default:
      return {
        type: payload,
        data: { ip: 'Action Failed :(' }
      }
  }
}
