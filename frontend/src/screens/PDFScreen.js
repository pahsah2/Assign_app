import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'
import { getCustomerDetails } from '../actions/customerActions'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Printer, { print } from 'react-pdf-print'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
})
const ids = ['1']

// Create Document Component
const PDFScreen = ({ match }) => {
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
    <Container>
      <Row>
        <Printer>
          <Col id={ids[0]} style={{ width: '210mm', height: '297mm' }}>
            <Button
              type="button"
              style={{ position: 'relative', float: 'right' }}
              onClick={() => print(ids)}
              value={customer.name}
            >
              Download
            </Button>
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>{customer._id}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.createdAt}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.updatedAt}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.name}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.email}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.phone}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.house}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.description}</Text>
                </View>
                <View style={styles.section}>
                  <Text>{customer.user}</Text>
                </View>
              </Page>
            </Document>
          </Col>
        </Printer>
      </Row>
    </Container>
  )
}

export default PDFScreen
