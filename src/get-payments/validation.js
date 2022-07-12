import { yup } from 'src/deps'

const schema = () => yup.object({
  first: yup.number().positive().nullable(),
  after: yup.string().identifier().nullable(),
})

const execute = input => schema()
  .validate(input, { abortEarly: false })
  .then(value => value)
  .catch(error => error)

export const validation = { execute }
