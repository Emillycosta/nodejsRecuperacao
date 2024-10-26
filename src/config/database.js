// a conf do banco mysql ultilizando sequelize


const{Sequelize}=require('sequelize')


class Database{
    constructor(){







      this.init()
    }

    init (){
 //só muda o database para mudar o banco de dados
this.db = new Sequelize({
    database: 'exemplo',
    host: 'localhost',
    username:'root',
    dialect:'mysql',
    password:''

 })

    }
}
module.exports=new Database();