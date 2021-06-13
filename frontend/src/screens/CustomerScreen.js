import React, { useEffect } from 'react'
import { Button, Table, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { listCustomers, deleteCustomer } from '../actions/customerActions'
import 'font-awesome/css/font-awesome.min.css'
import { Link } from 'react-router-dom'
const CustomerScreen = ({ history }) => {
  const dispatch = useDispatch()

  const customerList = useSelector((state) => state.customerList)
  const { customers } = customerList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const customerDelete = useSelector((state) => state.customerDelete)
  const { success: successDelete } = customerDelete

  useEffect(() => {
    dispatch(listCustomers())
  }, [dispatch, history, userInfo, successDelete])

  const deleteHandler = (id) => {
    if (window.confirm('ต้องการลบหรือไม่')) {
      dispatch(deleteCustomer(id))
    }
  }

  return (
    <>
      <br></br>
      <Row>
        <Col className="md-4 ">
          <h1>ข้อมูลลูกค้า</h1>
        </Col>
        <Col className="md-4 text-right">
          <LinkContainer to={`/customer/add`}>
            <Button className="my-3">
              <i className="fa fa-plus"></i> Create Product
            </Button>
          </LinkContainer>
        </Col>
      </Row>
      <br></br>
      {userInfo && userInfo.isAdmin ? (
        <Row>
          <Col>
            <Table bordered responsive hover className="table-lg">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>House</th>
                  <th>Description</th>
                  <th>User</th>
                  <th>Date</th>
                  <th>Update time</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  <th>PDF</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td>
                      <Link to={`/customer/${customer._id}`}>
                        {customer._id}
                      </Link>
                    </td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.house}</td>
                    <td>{customer.description}</td>
                    <td>{customer.user.name}</td>
                    <td>{customer.createdAt.substring(0, 10)}</td>
                    <td>{customer.updatedAt.substring(0, 10)}</td>
                    <td>
                      <LinkContainer to={`/customer/${customer._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fa fa-edit"></i>
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      {
                        <Button
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(customer._id)}
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      }
                    </td>
                    <td>
                      <LinkContainer to={`/customer/${customer._id}/pdf`}>
                        <Button variant="dark" className="btn-sm">
                          <i className="fa fa-file-pdf-o"></i>
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      {customer.status1 ? (
                        <i className="fa fa-check" style={{ color: 'yellow' }}>
                          ส่งเสร็จ
                        </i>
                      ) : null}
                      {customer.status2 ? (
                        <i className="fa fa-check" style={{ color: 'orange' }}>
                          พิจารณา
                        </i>
                      ) : null}
                      {customer.status3 ? (
                        <i className="fa fa-check" style={{ color: 'green' }}>
                          อนุมัติ
                        </i>
                      ) : null}
                      {customer.status4 ? (
                        <i className="fa fa-times" style={{ color: 'red' }}>
                          ปฏิเสธ
                        </i>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col>
            <Table bordered responsive hover className="table-lg">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>House</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Update Time</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer) => (
                  <tr key={customer._id}>
                    <td>{customer._id}</td>
                    <td>{customer.name}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.house}</td>
                    <td>{customer.description}</td>
                    <td>{customer.createdAt.substring(0, 10)}</td>
                    <td>{customer.updatedAt.substring(0, 10)}</td>
                    <td>
                      <LinkContainer to={`/customer/${customer._id}/edit`}>
                        <Button variant="light" className="btn-sm">
                          <i className="fa fa-edit"></i>
                        </Button>
                      </LinkContainer>
                    </td>
                    <td>
                      {
                        <Button
                          type="button"
                          variant="danger"
                          className="btn-sm"
                          onClick={() => deleteHandler(customer._id)}
                        >
                          <i className="fa fa-trash"></i>
                        </Button>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </>
  )
}

export default CustomerScreen
