import { Item } from '../../models';

const deleteItem = async (req, res) => {
    try {
        const deleted = await Item.destroy({
            where: {
                id: req.body.id,
            },
        });
        if (deleted > 0) {
            return res.status(200).json('Item successfully deleted!');
        }
        throw new Error("Post not found");
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
module.exports = {
    deleteItem,
};