import { User } from '../../models';
import bcrypt from 'bcryptjs';

const login = async (req, res) => {
    const user = await User.findOne({
        where: { username: req.body.username },
    });
    if (user == null) {
        return res.status(400).send('User does not exist');
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.json({
                id: user.id,
                username: user.username,
                isError: false,
            });
        } else {
            res.json({ isError: true });
        }
    } catch {
        res.status(500).send();
    }
};

module.exports = {
    login,
};
