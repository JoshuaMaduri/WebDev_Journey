

export const signup = (req, res) => {
    const {name, username, email, password} = req.body;
    res.status(200).json({name: name, username: username, email: email, password: password})
};

