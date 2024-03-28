const validate_price_calculation = require('../validators/priceBodyValidation');
const calculatePrice = require('../services/pricingService');


const getPrice = async(req, res) => {
  const postData = req.body;

  try {
    const validation = await validate_price_calculation(post_data)

    if(validation.error){
        throw new Error(validation.error.details[0].message)
    }
    const { organizationId, zone, totalDistance, itemType } = postData;
    const price = await calculatePrice(organizationId, zone, totalDistance, itemType);
    res.json({ total_price: price });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getPrice };