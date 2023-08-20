/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface EditionMetadataRenderer0817Interface extends utils.Interface {
  functions: {
    "contractURI()": FunctionFragment;
    "initializeWithData(bytes)": FunctionFragment;
    "tokenInfos(address)": FunctionFragment;
    "tokenURI(uint256)": FunctionFragment;
    "updateDescription(address,string)": FunctionFragment;
    "updateMediaURIs(address,string,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "contractURI"
      | "initializeWithData"
      | "tokenInfos"
      | "tokenURI"
      | "updateDescription"
      | "updateMediaURIs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initializeWithData",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "tokenInfos", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tokenURI",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDescription",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateMediaURIs",
    values: [string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initializeWithData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenInfos", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "updateDescription",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateMediaURIs",
    data: BytesLike
  ): Result;

  events: {
    "DescriptionUpdated(address,address,string)": EventFragment;
    "EditionInitialized(address,string,string,string)": EventFragment;
    "MediaURIsUpdated(address,address,string,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DescriptionUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EditionInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MediaURIsUpdated"): EventFragment;
}

export interface DescriptionUpdatedEventObject {
  target: string;
  sender: string;
  newDescription: string;
}
export type DescriptionUpdatedEvent = TypedEvent<
  [string, string, string],
  DescriptionUpdatedEventObject
>;

export type DescriptionUpdatedEventFilter =
  TypedEventFilter<DescriptionUpdatedEvent>;

export interface EditionInitializedEventObject {
  target: string;
  description: string;
  imageURI: string;
  animationURI: string;
}
export type EditionInitializedEvent = TypedEvent<
  [string, string, string, string],
  EditionInitializedEventObject
>;

export type EditionInitializedEventFilter =
  TypedEventFilter<EditionInitializedEvent>;

export interface MediaURIsUpdatedEventObject {
  target: string;
  sender: string;
  imageURI: string;
  animationURI: string;
}
export type MediaURIsUpdatedEvent = TypedEvent<
  [string, string, string, string],
  MediaURIsUpdatedEventObject
>;

export type MediaURIsUpdatedEventFilter =
  TypedEventFilter<MediaURIsUpdatedEvent>;

export interface EditionMetadataRenderer0817 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EditionMetadataRenderer0817Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    contractURI(overrides?: CallOverrides): Promise<[string]>;

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        description: string;
        imageURI: string;
        animationURI: string;
      }
    >;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    updateDescription(
      target: string,
      newDescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateMediaURIs(
      target: string,
      imageURI: string,
      animationURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  contractURI(overrides?: CallOverrides): Promise<string>;

  initializeWithData(
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenInfos(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      description: string;
      imageURI: string;
      animationURI: string;
    }
  >;

  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  updateDescription(
    target: string,
    newDescription: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateMediaURIs(
    target: string,
    imageURI: string,
    animationURI: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    contractURI(overrides?: CallOverrides): Promise<string>;

    initializeWithData(
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        description: string;
        imageURI: string;
        animationURI: string;
      }
    >;

    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    updateDescription(
      target: string,
      newDescription: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateMediaURIs(
      target: string,
      imageURI: string,
      animationURI: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "DescriptionUpdated(address,address,string)"(
      target?: string | null,
      sender?: null,
      newDescription?: null
    ): DescriptionUpdatedEventFilter;
    DescriptionUpdated(
      target?: string | null,
      sender?: null,
      newDescription?: null
    ): DescriptionUpdatedEventFilter;

    "EditionInitialized(address,string,string,string)"(
      target?: string | null,
      description?: null,
      imageURI?: null,
      animationURI?: null
    ): EditionInitializedEventFilter;
    EditionInitialized(
      target?: string | null,
      description?: null,
      imageURI?: null,
      animationURI?: null
    ): EditionInitializedEventFilter;

    "MediaURIsUpdated(address,address,string,string)"(
      target?: string | null,
      sender?: null,
      imageURI?: null,
      animationURI?: null
    ): MediaURIsUpdatedEventFilter;
    MediaURIsUpdated(
      target?: string | null,
      sender?: null,
      imageURI?: null,
      animationURI?: null
    ): MediaURIsUpdatedEventFilter;
  };

  estimateGas: {
    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenInfos(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateDescription(
      target: string,
      newDescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateMediaURIs(
      target: string,
      imageURI: string,
      animationURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initializeWithData(
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenInfos(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateDescription(
      target: string,
      newDescription: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateMediaURIs(
      target: string,
      imageURI: string,
      animationURI: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}