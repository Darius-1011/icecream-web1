/* Format money */
function formatMoney(input) {
  let value = input.value.replace(/\D/, '');
  input.value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
