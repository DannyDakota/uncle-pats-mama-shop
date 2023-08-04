import { Item } from '../../models';

const createItem = async (req, res) => {
    try {
        const item = await Item.create({
            productName: req.body.productName,
            price: req.body.price,
            totalQuantity: req.body.totalQuantity,
            description: req.body.description
        });
        return res.status(201).json({
            item,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
module.exports = {
    createItem,
};
