const openUrl = require('open')

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
    const pointerCompare = {__type: 'Pointer', className: upperCaseClassName(field), objectId: compareTo}
    return encodeFilter({field, constraint, compareTo: pointerCompare})
  }

  return encodeFilter({field, constraint, compareTo})
}

const main = (BASE_URL, _className, _field, constraint, _compareTo) => {
  if (_field && _field.length === 10 && constraint === undefined && _compareTo === undefined) {
    _compareTo = _field
    _field = 'id'
    constraint = 'eq'
  }
  
  const className = upperCaseClassName(_className)
  if (!_field) return openUrl(`${BASE_URL}/${className}`)
  
  validateConstraint(constraint)
  
  const field = idIntoObjId(_field)
  const compareTo = handleDateIfDate(_compareTo)

  if (!field) return openUrl(`${BASE_URL}/${upperCaseClassName(className)}`)
  return openUrl(`${BASE_URL}/${className}?filters=${buildFilters({field, constraint, compareTo})}`)
}


module.exports = {
    main
}