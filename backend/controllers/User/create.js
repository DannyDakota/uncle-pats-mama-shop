import { User } from '../../models';
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const [user, created] = await User.findOrCreate({
            where: {
                username: req.body.username,
                password: req.body.password,
            },
            defaults: {
                username: req.body.username,
                password: hashedPassword,
                isAdmin: req.body.isAdmin
            },
        });
        let name;
        if (created) {
            name = user.username;
            return res.status(201).json({ name });
        }
        name = user.username;
        return res.status(201).json({
            name,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
module.exports = {
    createUser,
};
