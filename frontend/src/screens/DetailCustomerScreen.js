import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Container, Button } from 'react-bootstrap'
import { getCustomerDetails } from '../actions/customerActions'
import { LinkContainer } from 'react-router-bootstrap'

export default function DetailCustomerScreen({ match }) {
  const customerId = match.params.id

  const dispatch = useDispatch()

  const customerDetails = useSelector((state) => state.customerDetails)
  const { customer } = customerDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    dispatch(getCustomerDetails(customerId))
  }, [dispatch, customerId, customer, userInfo])

  return (
    <>
      <Container className="mt-5 pt-3 border hovor">
        <Row>
          <Col>
            <h2>Mywork</h2>
          </Col>
          <Col>
            <h4>{customer._id} </h4>
            <p>วันที่สร้าง {customer.createdAt}</p>
            <p>ล่าสุด {customer.updatedAt}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>ชื่อ {customer.name}</h3>
            <h3>อีเมล {customer.email}</h3>
            <h3>บ้านที่อยู่ {customer.house}</h3>
            <h3>รายละเอียด {customer.description}</h3>
            <h3>รายละเอียด {customer.user && customer.user.name}</h3>
          </Col>
          <Col>
            <LinkContainer to={`/customer/${customer._id}/pdf`}>
              <Button className="btn btn-danger btn-lg"> PDF </Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </>
  )
}
