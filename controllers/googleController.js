const { authorize, listMajors } = require("../index");

const readData = async (req, res) => {
    try {
        const rows = await authorize().then(listMajors).catch(console.error);
        res.status(200).send({ success: true, data: rows });
    } catch (err) {
        res.status(400).send({ success: false, message: err.message });
    }
};

module.exports = { readData };
