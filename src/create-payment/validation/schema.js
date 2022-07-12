import { nephele, yup } from 'src/deps'
import { orderExists } from 'src/create-payment/validation/order-exists'

const orderId = () => yup.string().required()
  .identifier()
  .test('orderId-existence', 'order does not exist', nephele.setupValidation.safe(orderExists))

const make = () => yup.object().shape({
  payment: yup.object().shape({
    orderId: orderId(),
    cardNumber: yup.string().required().length(16),
    cardCvv: yup.string().required().length(3),
    cardExpiryYear: yup.number().required().min(new Date().getFullYear() + 1).max(2099),
    cardExpiryMonth: yup.number().required().min(1).max(12)
  }).required()
}).required()

export const schema = { make }
