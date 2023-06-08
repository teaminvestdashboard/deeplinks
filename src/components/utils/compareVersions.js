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