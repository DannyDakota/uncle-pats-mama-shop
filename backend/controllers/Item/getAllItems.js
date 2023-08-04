import { Item } from '../../models';

const getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        return res.status(200).json({ items });
    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = {
    getAllItems,
};
