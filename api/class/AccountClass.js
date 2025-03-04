//Obtener cuenta
//Obtener cuentas
//Agregar balance
//Restar balance
//Crear una cuenta

import AccountModel from "../models/AccountModel.js"
class ManagerAccount{
    constructor(userID, accountNumber, accountType, balance){
        this.userID = userID;
        this.accountNumber = accountNumber;
        this.accountType = accountType;
        this.balance = balance;
    }

    async getAcounts(){
        try {
            const accounts = await AccountModel.find();  
            return accounts;
        } catch (error) {
            throw new Error(`Error al obtener cuentas: ${error}`);
            
        }
        

    }

    async getAcount(id){
        try {
            const account = await AccountModel.findById(id);
            return account;
        } catch (error) {
            throw new Error(`Error al obtener cuenta: ${error}`);     
        }
    }
    async addBalance(id, amount){
        try {
            this.balance += amount;
            await AccountModel.findByIdAndUpdate(id,{
                $set:{
                    balance:this.balance
                }
            });
            return "Ok";
        } catch (error) {
            throw new Error(`Error al agregar monto: ${error}`);
            
        }
    }

        async restBalance(id, amount){
            try {
                this.balance -= amount;
                await AccountModel.findByIdAndUpdate(id,{
                    $set:{
                        balance:this.balance
                    }
                });
                return "Ok";
            } catch (error) {
                throw new Error(`Error al agregar monto: ${error}`);
             
            }

    }
    async createAccount(){
        try {
        const account = await AccountModel.create({
                userId:this.userID,
                accountNumber:this.accountNumber,
                accountType:this.accountType,
                balance:this.balance
            });
            return account;
        } catch (error) {
            throw new Error(`Error al crear cuenta: ${error}`);
            
        }
    }

}

export default ManagerAccount;