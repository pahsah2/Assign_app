import axios from 'axios'
import {
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_FAIL,
  CUSTOMER_DELETE_REQUEST,
  CUSTOMER_DELETE_SUCCESS,
  CUSTOMER_DELETE_FAIL,
  CUSTOMER_CREATE_REQUEST,
  CUSTOMER_CREATE_SUCCESS,
  CUSTOMER_CREATE_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_UPDATE_REQUEST,
  CUSTOMER_UPDATE_SUCCESS,
  CUSTOMER_UPDATE_FAIL,
} from '../constants/customerConstants'

export const listCustomers = () => async (dispatch) => {
  try {
    dispatch({ type: CUSTOMER_LIST_REQUEST })

    const { data } = await axios.get('/api/customers')

    dispatch({
      type: CUSTOMER_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === `"CAN'T SHOW CUSTOMER IN DATABASE "`)
      dispatch({
        type: CUSTOMER_LIST_FAIL,
        payload: message,
      })
  }
}

export const deleteCustomer = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Pah ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/customers/${id}`, config)
    dispatch({
      type: CUSTOMER_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorizated , token failed')
      dispatch({
        type: CUSTOMER_DELETE_FAIL,
        payload: message,
      })
  }
}

export const createCustomer =
  (
    name,
    email,
    phone,
    house,
    description,
    status1,
    status2,
    status3,
    status4
  ) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        type: CUSTOMER_CREATE_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Pah ${userInfo.token}`,
        },
      }

      const { data } = await axios.post(
        `/api/customers`,
        {
          name,
          email,
          phone,
          house,
          description,
          status1,
          status2,
          status3,
          status4,
        },
        config
      )

      dispatch({
        type: CUSTOMER_CREATE_SUCCESS,
        payload: data,
      })

      localStorage.setItem('customerInfo', JSON.stringify(data))
    } catch (error) {
      dispatch({
        type: CUSTOMER_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }

export const getCustomerDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_DETAILS_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Pah ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/customers/${id}`, config)

    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorizated, token fail')
      dispatch({
        type: CUSTOMER_DETAILS_FAIL,
        payload: message,
      })
  }
}

export const updateCustomer = (customer) => async (dispatch, getState) => {
  try {
    dispatch({
      type: CUSTOMER_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Pah ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/customers/${customer._id}`,
      customer,
      config
    )

    dispatch({
      type: CUSTOMER_UPDATE_SUCCESS,
    })

    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorizated, token fail')
      dispatch({
        type: CUSTOMER_UPDATE_FAIL,
        payload: message,
      })
  }
}
