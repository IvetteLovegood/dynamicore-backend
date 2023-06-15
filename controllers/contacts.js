const Contact = require('../models/Contact');

exports.getContacts = async (req, res) => {
    const contacts = await Contact.findAll();
    res.json(contacts);
};

exports.getContact = async (req, res) => {
    const contact = await Contact.findByPk(req.params.id);
    res.json(contact);
};

exports.createContact = async (req, res) => {
    const newContact = await Contact.create(req.body);
    res.json(newContact);
};

exports.updateContact = async (req, res) => {
    await Contact.update(req.body, {
        where: { id: req.params.id }
    });
    res.json({ success: 'Contact updated successfully' });
};

exports.deleteContact = async (req, res) => {
    await Contact.destroy({
        where: { id: req.params.id }
    });
    res.json({ success: 'Contact deleted successfully' });
};
