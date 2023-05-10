const router = require("express").Router();
const User = require("../Models/User");

// REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });

    try {
        const user = await newUser.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json("Wrong password or username1");
        } else {
            const password = user.password;
            if (password !== req.body.password) {
                res.status(401).json("Wrong password or username2");
            } else {
                // send user info without password.
                const { password, ...info } = user._doc;
                res.status(200).json({...info});
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;