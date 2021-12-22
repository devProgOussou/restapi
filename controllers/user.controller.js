const User = require('../models/user.model');

module.exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            message: 'Liste des utilisateurs',
            users
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Erreur lors de la récupération des utilisateurs',
            error: err
        });
    }
}

module.exports.addNewUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    
    try {
        const user = await User.create({
            firstname,
            lastname,
            email,
            password
        });
        res.status(201).json({
            message: 'Utilisateur créé',
            user
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Erreur lors de la création de l\'utilisateur',
            error: err
        });
    }
}

module.exports.updateUser = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    const { id } = req.params;

    try {
        const user = await User.findByIdAndUpdate(id, {
            firstname,
            lastname,
            email,
            password
        });
        res.status(200).json({
            message: 'Utilisateur modifié',
            user
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Erreur lors de la modification de l\'utilisateur',
            error: err
        });
    }
}

module.exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await User.findByIdAndDelete(id);
        res.status(200).json({
            message: 'Utilisateur supprimé'
        });
    }
    catch (err) {
        res.status(500).json({
            message: 'Erreur lors de la suppression de l\'utilisateur',
            error: err
        });
    }
}