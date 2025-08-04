exports.getUser = (req, res, next) => {
    const user1 = {
        nama: "Mirzam",
        asal: "Karanganyar",
        pekerjaan: "Software Developer"
    }

    res.send(user1);
};

exports.createUser = (req, res, next) => {
    const data = req.body
    
    data.umur = 35

    res.send(data)
}