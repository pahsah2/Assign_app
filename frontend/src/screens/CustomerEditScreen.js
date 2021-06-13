import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { getCustomerDetails, updateCustomer } from '../actions/customerActions'
import { CUSTOMER_UPDATE_RESET } from '../constants/customerConstants'
import { LinkContainer } from 'react-router-bootstrap'
const CustomEditScreen = ({ match, history }) => {
  const customerId = match.params.id

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [house, setHouse] = useState('')
  const [description, setDescription] = useState('')
  const [status1, setStatus1] = useState(false)
  const [status2, setStatus2] = useState(false)
  const [status3, setStatus3] = useState(false)
  const [status4, setStatus4] = useState(false)

  const dispatch = useDispatch()

  const customerDetails = useSelector((state) => state.customerDetails)
  const { customer } = customerDetails

  const customerUpdate = useSelector((state) => state.customerUpdate)
  const { success: successUpdate } = customerUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: CUSTOMER_UPDATE_RESET })
      history.push('/')
    } else {
      setName(customer.name)
      setEmail(customer.email)
      setPhone(customer.phone)
      setHouse(customer.house)
      setDescription(customer.description)
      setStatus1(customer.status1)
      setStatus2(customer.status2)
      setStatus3(customer.status3)
      setStatus4(customer.status4)
    }
    if (!customer.name || customer._id !== customerId) {
      dispatch(getCustomerDetails(customerId))
    } else {
      setName(customer.name)
      setEmail(customer.email)
      setPhone(customer.phone)
      setHouse(customer.house)
      setDescription(customer.description)
      setStatus1(customer.status1)
      setStatus2(customer.status2)
      setStatus3(customer.status3)
      setStatus4(customer.status4)
    }
  }, [dispatch, history, customerId, customer, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateCustomer({
        _id: customerId,
        name,
        email,
        phone,
        house,
        description,
        status1,
        status2,
        status3,
        status4,
      })
    )
  }

  return (
    <Container>
      <Row className="pt-4">
        <LinkContainer to={`/`} className="float-right">
          <button className="btn btn-light">Go Back</button>
        </LinkContainer>
        <FormContainer>
          <br></br>
          <h2>Edit Customer</h2>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="phone"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="house">
              <Form.Label>House</Form.Label>
              <Form.Control
                type="house"
                placeholder="Enter house"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="description"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            {userInfo && userInfo.isAdmin ? (
              <Form.Group controlId="status">
                <Form.Label>Status &nbsp;</Form.Label>
                <Form.Check
                  inline
                  type="checkbox"
                  label="ส่งเสร็จ"
                  name="group1"
                  id="checkbox1"
                  checked={status1}
                  onChange={(e) => setStatus1(e.target.checked)}
                ></Form.Check>
                <Form.Check
                  inline
                  type="checkbox"
                  label="พิจารณา"
                  name="group2"
                  id="checkbox2"
                  checked={status2}
                  onChange={(e) => setStatus2(e.target.checked)}
                ></Form.Check>
                <Form.Check
                  inline
                  type="checkbox"
                  label="อนุมัติ"
                  name="group3"
                  id="checkbox3"
                  checked={status3}
                  onChange={(e) => setStatus3(e.target.checked)}
                ></Form.Check>
                <Form.Check
                  inline
                  type="checkbox"
                  label="ปฏิเสธ"
                  name="group4"
                  id="checkbox4"
                  checked={status4}
                  onChange={(e) => setStatus4(e.target.checked)}
                ></Form.Check>
              </Form.Group>
            ) : null}

            <Button className="btn-lg btn-dark" type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </FormContainer>
      </Row>
    </Container>
  )
}
export default CustomEditScreen
