#! /usr/bin/env node
const openUrl = require('open')

const [_, __, className, field, constraint, compareTo] = process.argv
const BASE_URL = 'https://dashboard.sellpy.net/apps/Sellpy%20Prod%20-%20Read%20Only/browser'

if (!constraint) console.log(`${BASE_URL}/${className}`)
const capitalizeFirstLetter = ([a, ...str]) => a.toUpperCase() + str.join('')

const idIntoObjId = field => (field) === 'id' ? 'objectId' : field

const upperCaseClassName = (className) => {
  className = capitalizeFirstLetter(className)
  return className === 'User'
    ? `_${className}`
    : className
}

const handleDateIfDate = (compareTo) => {
  try {
    const date = new Date(compareTo)
    if (date.toString() === 'Invalid Date') {
      throw new Error('no date')
    }
    return {__type: 'Date', iso: date}
  } catch (err) {
    return compareTo
  }
}

const validConstraints = [
  'exists',
  'dne',
  'eq',
  'neq',
  'starts',
  'ends',
  'stringContainsString',
  'unique',
  'before',
  'after'
]

const validateConstraint = (constraint) => {
  if (!validConstraints.includes(constraint)) {
    throw new Error(`Constraint not allowed, must be any of [${validConstraints.join(' ')}]`)
  }
}

const encodeFilter = ({field, constraint, compareTo}) => encodeURIComponent(JSON.stringify([{field, constraint, compareTo}]))
const buildFilters = ({field, constraint, compareTo}) => {
  if (field.includes('p_')) {
    field = field.split('p_')[1]
    console.log({field})
    const pointerCompare = {__type: 'Pointer', className: upperCaseClassName(field), objectId: compareTo}
    return encodeFilter({field, constraint, compareTo: pointerCompare})
  }

  return encodeFilter({field, constraint, compareTo})
}

const main = (_className, _field, constraint, _compareTo) => {
  const className = upperCaseClassName(_className)
  if (!_field) return openUrl(`${BASE_URL}/${className}`)
  
  validateConstraint(constraint)
  
  const field = idIntoObjId(_field)
  const compareTo = handleDateIfDate(_compareTo)

  return openUrl(`${BASE_URL}/${className}?filters=${buildFilters({field, constraint, compareTo})}`)
}

main(className, field, constraint, compareTo)