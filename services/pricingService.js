const Pricing = require('../models/pricing');

const calculatePrice = async(organizationId, zone, totalDistance, itemType) => {
  try {
    const pricing = await Pricing.findOne({
      where: {
        organization_id: organizationId,
        zone,
      },
    });

    if (!pricing) {
      throw new Error('Pricing not found');
    }

    let totalPrice = pricing.fix_price;
    const additionalDistance = Math.max(totalDistance - pricing.base_distance_in_km, 0);
    totalPrice += additionalDistance * pricing.km_price;

    if (itemType === 'perishable') {
      totalPrice *= 1.5; // Perishable items have 1.5x price
    }

    return Math.round(totalPrice * 100); // Convert to cents
  } catch (error) {
    throw new Error(`Failed to calculate price: ${error.message}`);
  }
}

module.exports = { calculatePrice };