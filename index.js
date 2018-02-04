var recipes = {item1:'something'}

function updateObjectWithKeyAndValue(object, key, value) {
  return object[key] = value
}

updateObjectWithKeyAndValue(recipes, prop1, 1)