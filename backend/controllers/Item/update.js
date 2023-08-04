import { Item } from '../../models';

const updateItem = async (req, res) => {
    try {
        await Item.update({
            productName: req.body.productName,
            price: req.body.price,
            totalQuantity: req.body.totalQuantity,
            description: req.body.description,
        },
            {
                where: { id: req.body.id },
            });
        return res.status(200).send(`Successfully updated Item ${req.body.id}`);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    updateItem,
};