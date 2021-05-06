import { MESSAGE_LIST_REQUEST, MESSAGE_LIST_SUCCESS, MESSAGE_LIST_FAIL } from '../constants/messageConstants'

export const listMessages = () => async (dispatch) => {
    try {
        dispatch({ type: MESSAGE_LIST_REQUEST })

        // const { data } = await 
    } catch (error) {
        
    }
}
