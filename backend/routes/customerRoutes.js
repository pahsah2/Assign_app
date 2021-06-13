import express from 'express'
const router = express.Router()
import {
  getCustomers,
  getCustomerById,
  deleteCustomer,
  createCustomer,
  updateCustomer,
} from '../controllers/customerController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getCustomers).post(protect, createCustomer)
router
  .route('/:id')
  .get(getCustomerById)
  .delete(protect, deleteCustomer)
  .put(protect, updateCustomer)
export default router
