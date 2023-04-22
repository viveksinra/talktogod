import {RESET, DRAWER, SETSELECTED} from "./types";

const MainReducer = (state, action)=>{
    switch(action.type){
        case RESET:
            // setAuthToken(action.payload.token);
            return {...action.payload};

        case DRAWER:
            return{
                ...state,
                mobileDrawer:!state.mobileDrawer
            };
        case SETSELECTED:
            return {
                ...state,
                selectedItem:action.payload
            }
        default:
            return state;
    
    }

}
export default MainReducer;