/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IOperatorFilterRegistry0817,
  IOperatorFilterRegistry0817Interface,
} from "../../IOperatorFilterRegistry.sol/IOperatorFilterRegistry0817";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "codeHashOf",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "registrantToCopy",
        type: "address",
      },
    ],
    name: "copyEntriesOf",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "filteredCodeHashAt",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "filteredCodeHashes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "filteredOperatorAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "filteredOperators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "codeHash",
        type: "bytes32",
      },
    ],
    name: "isCodeHashFiltered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "operatorWithCode",
        type: "address",
      },
    ],
    name: "isCodeHashOfFiltered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isOperatorAllowed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isOperatorFiltered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "isRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "registrantToCopy",
        type: "address",
      },
    ],
    name: "registerAndCopyEntries",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "subscription",
        type: "address",
      },
    ],
    name: "registerAndSubscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "registrantToSubscribe",
        type: "address",
      },
    ],
    name: "subscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "subscriberAt",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
    ],
    name: "subscribers",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "subscriptionOf",
    outputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
    ],
    name: "unregister",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "bool",
        name: "copyExistingEntries",
        type: "bool",
      },
    ],
    name: "unsubscribe",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "codehash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "filtered",
        type: "bool",
      },
    ],
    name: "updateCodeHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "bytes32[]",
        name: "codeHashes",
        type: "bytes32[]",
      },
      {
        internalType: "bool",
        name: "filtered",
        type: "bool",
      },
    ],
    name: "updateCodeHashes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "filtered",
        type: "bool",
      },
    ],
    name: "updateOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "registrant",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "operators",
        type: "address[]",
      },
      {
        internalType: "bool",
        name: "filtered",
        type: "bool",
      },
    ],
    name: "updateOperators",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IOperatorFilterRegistry0817__factory {
  static readonly abi = _abi;
  static createInterface(): IOperatorFilterRegistry0817Interface {
    return new utils.Interface(_abi) as IOperatorFilterRegistry0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IOperatorFilterRegistry0817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IOperatorFilterRegistry0817;
  }
}
