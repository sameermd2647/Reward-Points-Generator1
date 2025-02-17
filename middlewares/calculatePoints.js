function calculatePoints(receipt) {
    let totalPoints = 0;
   
    // Calculate points for the retailer name
    const retailerName = receipt.retailer.replace(/[^0-9a-zA-Z]/g, ''); // Remove non-alphanumeric characters
    totalPoints += retailerName.length;
   
    // Check if the total is a round dollar amount with no cents
    const totalFloat = parseFloat(receipt.total);
    if (Number.isInteger(totalFloat)) {
      totalPoints += 50;
    }
   
    // Check if the total is a multiple of 0.25
    if (totalFloat % 0.25 === 0) {
      totalPoints += 25;
    }
   
    // Check if the time of purchase is between 2:00pm and 4:00pm
    const purchaseTimeParts = receipt.purchaseTime.split(':');
    const hour = parseInt(purchaseTimeParts[0]);
    const minute = parseInt(purchaseTimeParts[1]);
    if (hour >= 14 && hour < 16) {
      totalPoints += 10;
    }
   
    // Check if the day in the purchase date is odd
    const purchaseDateParts = receipt.purchaseDate.split('-');
    const day = parseInt(purchaseDateParts[2]);
    if (day % 2 === 1) {
      totalPoints += 6;
    }
   
    // Calculate points for items
    const numItems = receipt.items.length;
    totalPoints += Math.floor(numItems / 2) * 5;
   
    // Calculate points based on item descriptions
    receipt.items.forEach((item) => {
      const shortDescriptionLength = item.shortDescription.trim().length;
      if (shortDescriptionLength % 3 === 0) {
        const price = parseFloat(item.price);
        totalPoints += Math.ceil(price * 0.2);
      }
    });
   
    return totalPoints;
  }
  module.exports = calculatePoints;
  