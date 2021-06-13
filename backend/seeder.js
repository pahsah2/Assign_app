import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/userModel.js'
import customers from './data/customers.js'
import Customer from './models/customerModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await User.deleteMany()
    await Customer.deleteMany()

    const createdUsers = await User.insertMany(users)
    const adminUser = createdUsers[0]._id

    const sampleCustomers = customers.map((customer) => {
      return { ...customer, user: adminUser }
    })

    await Customer.insertMany(sampleCustomers)

    console.log(
      'Data Imported // ทดลองใส่ข้อมูล mongo + เทส การเชื่อมต่อ'.green.inverse
    )
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
  }
}
const destroyData = async () => {
  try {
    await User.deleteMany()
    await Customer.deleteMany()

    console.log('Data Destroyed // ทดลองลบข้อมูล'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
