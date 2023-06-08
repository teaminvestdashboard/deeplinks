export const compareVersions = (availableVersion, itemsVersion) => {
  const availableArray = availableVersion.split('.')
  const itemsArray = itemsVersion.split('.')

  if (availableArray.length === 2) {
    availableArray.push("0")
  }

  if (itemsArray.length === 2) {
    itemsArray.push("0")
  }

  if(Number(availableArray[0]) === Number(itemsArray[0]) && Number(availableArray[1]) === Number(itemsArray[1]) && Number(availableArray[2]) === Number(itemsArray[2])) {
    return true
  }

  for (let i = 0; i <= availableArray.length; i++) {
    if (Number(availableArray[i]) === Number(itemsArray[i])) {
      continue
    } else if (Number(availableArray[i]) < Number(itemsArray[i])) {
      return true
    }
    else {
      return false
    }
  }

  return 0

}


export const compareVersionsFromAndTo = (availableVersionFrom, availableVersionTo, selectedVersion) => {
  const availableFromArray = availableVersionFrom.split('.')
  const availableToArray = availableVersionTo.split('.')
  const selectedArray = selectedVersion.split('.')

  if (availableFromArray.length === 2) {
    availableFromArray.push("0")
  }

  if (availableToArray.length === 2) {
    availableToArray.push("0")
  }

  if (selectedArray.length === 2) {
    selectedArray.push("0")
  }

  if (Number(availableFromArray[0]) === Number(selectedArray[0]) &&
    Number(availableFromArray[1]) === Number(selectedArray[1]) &&
    Number(availableFromArray[2]) === Number(selectedArray[2])) {
    return true
  }

  if (Number(availableToArray[0]) === Number(selectedArray[0]) &&
    Number(availableToArray[1]) === Number(selectedArray[1]) &&
    Number(availableToArray[2]) === Number(selectedArray[2])) {
    return true
  }


  for (let i = 0; i <= availableFromArray.length; i++) {
    if (Number(availableFromArray[i]) === Number(selectedArray[i]) || Number(availableToArray[i]) === Number(selectedArray[i])) {
      continue
    } else if (Number(availableFromArray[i]) < Number(selectedArray[i]) && Number(availableToArray[i]) > Number(selectedArray[i])) {
      return true
    }
    else {
      return false
    }
  }

  return 0
}