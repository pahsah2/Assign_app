import asyncHandler from 'express-async-handler'
import Customer from '../models/customerModel.js'

//@desc Fetch all Customers
// 2routes GET /api/customers
// @access Public
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find({})
  res.json(customers)
})

// @desc Fetch ById customer
// @route GET /api/customers/:id
// @access Public
const getCustomerById = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id)
  
// มีอาการ ใส่แล้วทำให้เเสดงหน้า Detail กับ Pdf ไม่ได้ 
.populate(
    'user',
    'name email'
  )
////////ซึ่งมันควรจะสามารถแสดง  user ใน collection ของ customers Database ได้ ////////
  
  if (customer) {
    res.json(customer)
  } else {
    res.status(404)
    throw new Error('Customer not found')
  }
})

// @desc Delete customer
// @route DELETE /api/customer
// @access Public
const deleteCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.params.id)

  if (customer) {
    await customer.remove()
    res.json({ message: 'Customer remove' })
  } else {
    res.status(404)
    throw new Error('Customer not found')
  }
})

// @desc Create customer
// @route POST /api/customer
// @access Public
const createCustomer = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    house,
    description,
    status1,
    status2,
    status3,
    status4,
  } = req.body

  const customer = await Customer.create({
    user: req.user._id,
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

  const createdCustomer = await customer.save()

  res.status(201).json(createdCustomer)
})

// @desc Update a Customer
// @route PUT /api/customers/:id
// @access Public
const updateCustomer = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    phone,
    house,
    description,
    status1,
    status2,
    status3,
    status4,
  } = req.body
  const customer = await Customer.findById(req.params.id)

  if (customer) {
    customer.name = name
    customer.email = email
    customer.phone = phone
    customer.house = house
    customer.description = description
    customer.status1 = status1
    customer.status2 = status2
    customer.status3 = status3
    customer.status4 = status4

    const updatedCustomer = await customer.save()
    res.json(updatedCustomer)
  } else {
    res.status(404)
    throw new Error('Customer not found')
  }
})

export {
  getCustomers,
  getCustomerById,
  deleteCustomer,
  createCustomer,
  updateCustomer,
}
