const { body } = require('express-validator');

const validacaoRegistroUsuario = [
    body("nome")
        .notEmpty().withMessage("Deve preencher o nome").bail()
        .isLength({min: 3, max: 200}).withMessage("O nome deve ter no minimo 3 caracteres"),
    body("email")
        .notEmpty().withMessage("Deve preencher o email").bail()
        .isEmail().withMessage("Deve ser um email válido"),
    body("senha")
        .notEmpty().withMessage("Deve preencher a senha").bail(),
        
]

module.exports = validacaoRegistroUsuario;