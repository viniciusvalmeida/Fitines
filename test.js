const { DataTypes } = require('sequelize')
const sequelize = require('./config/sequelize') 
const Clientes = require('./models/clientes')(sequelize,DataTypes)

const adiciona = async () => {
  const cliente = {
    nome: 'Maria',
    cpf: '99999999999',
    telefone: '988883333',
    enderecoId: 1
  }

  const res = await Clientes.create('joao', '88888888888', '955554444', 1)

  console.log(res)
}

adiciona()