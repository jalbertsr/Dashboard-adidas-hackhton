export const address = '0xdd8e48756ab62215b21ff118f70ebe5f91c053f5'
export const adidasiumAddress = '0xbce7f803a5368050cc89976558b79c9980d947df'
export const abi =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "_dataScientistId",
				"type": "string"
			},
			{
				"name": "_dataholderId",
				"type": "string"
			}
		],
		"name": "addDataScientistToDataholder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_shares",
				"type": "bool"
			}
		],
		"name": "changeDataholderSharing",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			},
			{
				"name": "_password",
				"type": "string"
			},
			{
				"name": "_privateKey",
				"type": "string"
			}
		],
		"name": "createDataholder",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			},
			{
				"name": "_dataScientistId",
				"type": "string"
			},
			{
				"name": "_buyerId",
				"type": "string"
			}
		],
		"name": "queryData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_from",
				"type": "string"
			},
			{
				"name": "_to",
				"type": "string"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "coinbase",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "user",
				"type": "string"
			}
		],
		"name": "getBalanceOf",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			}
		],
		"name": "getDataholder",
		"outputs": [
			{
				"name": "",
				"type": "string"
			},
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			},
			{
				"name": "_dataScientistId",
				"type": "string"
			}
		],
		"name": "getKey",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_dataholderId",
				"type": "string"
			}
		],
		"name": "getKeyFromDataholder",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
] ; 