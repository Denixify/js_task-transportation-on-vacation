/**
 * @param {number} days
 *
 * @return {number}
 *
 **/
function calculateRentalCost(days) {
  const rentCost = 40;

  if (days >= 7) {
    return days * rentCost - 50;
  } else if (days > 2) {
    return days * rentCost - 20;
  }

  return days * rentCost;
}

module.exports = calculateRentalCost;
