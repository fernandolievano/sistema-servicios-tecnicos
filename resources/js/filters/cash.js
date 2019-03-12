export default value => {
  let price = value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')

  price = `${price} ARS`
  return price
}
