var recipes = {item1:'something'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})

}

function destructivelypdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
