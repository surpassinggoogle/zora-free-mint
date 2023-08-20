/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFactoryUpgradeGate,
  IFactoryUpgradeGateInterface,
} from "../../IFactoryUpgradeGate.sol/IFactoryUpgradeGate";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currentImpl",
        type: "address",
      },
    ],
    name: "isValidUpgradePath",
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
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_supportedPrevImpls",
        type: "address[]",
      },
    ],
    name: "registerNewUpgradePath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newImpl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_prevImpl",
        type: "address",
      },
    ],
    name: "unregisterUpgradePath",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IFactoryUpgradeGate__factory {
  static readonly abi = _abi;
  static createInterface(): IFactoryUpgradeGateInterface {
    return new utils.Interface(_abi) as IFactoryUpgradeGateInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFactoryUpgradeGate {
    return new Contract(address, _abi, signerOrProvider) as IFactoryUpgradeGate;
  }
}
