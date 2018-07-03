import Web3 from 'web3'
import { address, abi } from './contract.js'

export default class Blockchain {
    constructor() {
        this.web3 = new Web3(new Web3.providers.HttpProvider("http://54.246.178.196:8545"));
        this.coinbase = this.web3.eth.coinbase;
        this.web3.eth.defaultAccount = this.coinbase
        this.web3.personal.unlockAccount(this.coinbase, "test")
        this.contract = this.web3.eth.contract(abi);
        console.log(this.coinbase)
        console.log(address)
        this.instance = this.contract.at(address)
    }

    createDataholder(dataholderId, password, privateKey) {
        return this.instance.createDataholder(dataholderId, password, privateKey, { gas: 1000000 })
    }

    changeDataholderSharing(dataholderId, password, shares) {
        return this.instance.changeDataholderSharing(dataholderId, password, shares)
    }

    getKeyFromDataholder(dataholderId) {
        return this.instance.getKeyFromDataholder(dataholderId)
    }
}
