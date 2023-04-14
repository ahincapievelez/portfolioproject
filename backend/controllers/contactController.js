const Contacts = require('../models/contactModel')

module.exports.create = async (req, res) => {
    try {
        const contact = await Contacts.create(req.body)
        res.status(200).json(contact)
    } catch(err) {
        res.status(400).json({ error: err.message })
    }
}