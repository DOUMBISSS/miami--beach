
export function getHomes(homes) {
    return {
        type: 'GET-HOMES',
        payload: homes
    }
}
export function getHome(home) {
    return {
        type: 'GET-HOME',
        payload: home
    }
}
export function getNew(products) {
  return {
      type: 'GET-NEW-ARRIVAGES',
      payload: products
  }
}



