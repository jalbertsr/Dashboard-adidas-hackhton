export const address = '0xdd8e48756ab62215b21ff118f70ebe5f91c053f5'
export const abi = [
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
				"name": "dataholderId",
				"type": "string"
			},
			{
				"name": "password",
				"type": "string"
			},
			{
				"name": "secretKey",
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
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
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
]; 