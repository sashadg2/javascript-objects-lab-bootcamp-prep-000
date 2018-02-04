var recipes = {item1:'something'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey (object,key) {
  var obj2 = delete object[key]
  return Object.assign({}, obj2)
}
