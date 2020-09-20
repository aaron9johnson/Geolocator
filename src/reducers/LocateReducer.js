import {
  LOCATE_SUCCESSFUL,
  LOCATE_FAILED,
  LOCATE_RUNNING,
  LOCATE_COMPLETE
} from '../actions'

const initialState = {
  ip: '',
  location: '',
  flag: ''
}

export default function logReducer(state = initialState, action) {
    switch (action.type) {
        case LOCATE_SUCCESSFUL:
        case LOCATE_FAILED:
        case LOCATE_RUNNING:
        case LOCATE_COMPLETE:
            return {
                ...state,...action.data
            };
        default:
            return state;
    }
}
