import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userListReducer,
} from './reducers/userReducer'

import {
  customerListReducer,
  customerDeleteReducer,
  customerCreateReducer,
  customerDetailsReducer,
  customerUpdateReducer,
} from './reducers/customerReducer'

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userList: userListReducer,
  customerList: customerListReducer,
  customerDelete: customerDeleteReducer,
  customerCreate: customerCreateReducer,
  customerDetails: customerDetailsReducer,
  customerUpdate: customerUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
