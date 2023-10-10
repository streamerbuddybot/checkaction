/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 3.12.4
 * source: proto/spotify.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
 import * as pb_1 from "google-protobuf";
 import * as grpc_1 from "@grpc/grpc-js";
 export class spotifyRequest extends pb_1.Message {
     #one_of_decls: number[][] = [];
     constructor(data?: any[] | {
         channelID?: number;
         userID?: number;
         userinput?: string;
         message?: string;
         action?: string;
     }) {
         super();
         pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
         if (!Array.isArray(data) && typeof data == "object") {
             if ("channelID" in data && data.channelID != undefined) {
                 this.channelID = data.channelID;
             }
             if ("userID" in data && data.userID != undefined) {
                 this.userID = data.userID;
             }
             if ("userinput" in data && data.userinput != undefined) {
                 this.userinput = data.userinput;
             }
             if ("message" in data && data.message != undefined) {
                 this.message = data.message;
             }
             if ("action" in data && data.action != undefined) {
                 this.action = data.action;
             }
         }
     }
     get channelID() {
         return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
     }
     set channelID(value: number) {
         pb_1.Message.setField(this, 1, value);
     }
     get userID() {
         return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
     }
     set userID(value: number) {
         pb_1.Message.setField(this, 2, value);
     }
     get userinput() {
         return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
     }
     set userinput(value: string) {
         pb_1.Message.setField(this, 3, value);
     }
     get message() {
         return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
     }
     set message(value: string) {
         pb_1.Message.setField(this, 4, value);
     }
     get action() {
         return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
     }
     set action(value: string) {
         pb_1.Message.setField(this, 5, value);
     }
     static fromObject(data: {
         channelID?: number;
         userID?: number;
         userinput?: string;
         message?: string;
         action?: string;
     }): spotifyRequest {
         const message = new spotifyRequest({});
         if (data.channelID != null) {
             message.channelID = data.channelID;
         }
         if (data.userID != null) {
             message.userID = data.userID;
         }
         if (data.userinput != null) {
             message.userinput = data.userinput;
         }
         if (data.message != null) {
             message.message = data.message;
         }
         if (data.action != null) {
             message.action = data.action;
         }
         return message;
     }
     toObject() {
         const data: {
             channelID?: number;
             userID?: number;
             userinput?: string;
             message?: string;
             action?: string;
         } = {};
         if (this.channelID != null) {
             data.channelID = this.channelID;
         }
         if (this.userID != null) {
             data.userID = this.userID;
         }
         if (this.userinput != null) {
             data.userinput = this.userinput;
         }
         if (this.message != null) {
             data.message = this.message;
         }
         if (this.action != null) {
             data.action = this.action;
         }
         return data;
     }
     serialize(): Uint8Array;
     serialize(w: pb_1.BinaryWriter): void;
     serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
         const writer = w || new pb_1.BinaryWriter();
         if (this.channelID != 0)
             writer.writeInt32(1, this.channelID);
         if (this.userID != 0)
             writer.writeInt32(2, this.userID);
         if (this.userinput.length)
             writer.writeString(3, this.userinput);
         if (this.message.length)
             writer.writeString(4, this.message);
         if (this.action.length)
             writer.writeString(5, this.action);
         if (!w)
             return writer.getResultBuffer();
     }
     static deserialize(bytes: Uint8Array | pb_1.BinaryReader): spotifyRequest {
         const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new spotifyRequest();
         while (reader.nextField()) {
             if (reader.isEndGroup())
                 break;
             switch (reader.getFieldNumber()) {
                 case 1:
                     message.channelID = reader.readInt32();
                     break;
                 case 2:
                     message.userID = reader.readInt32();
                     break;
                 case 3:
                     message.userinput = reader.readString();
                     break;
                 case 4:
                     message.message = reader.readString();
                     break;
                 case 5:
                     message.action = reader.readString();
                     break;
                 default: reader.skipField();
             }
         }
         return message;
     }
     serializeBinary(): Uint8Array {
         return this.serialize();
     }
     static deserializeBinary(bytes: Uint8Array): spotifyRequest {
         return spotifyRequest.deserialize(bytes);
     }
 }
 export class spotifyResponse extends pb_1.Message {
     #one_of_decls: number[][] = [];
     constructor(data?: any[] | {
         status?: number;
         responseMessage?: string;
     }) {
         super();
         pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
         if (!Array.isArray(data) && typeof data == "object") {
             if ("status" in data && data.status != undefined) {
                 this.status = data.status;
             }
             if ("responseMessage" in data && data.responseMessage != undefined) {
                 this.responseMessage = data.responseMessage;
             }
         }
     }
     get status() {
         return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
     }
     set status(value: number) {
         pb_1.Message.setField(this, 1, value);
     }
     get responseMessage() {
         return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
     }
     set responseMessage(value: string) {
         pb_1.Message.setField(this, 2, value);
     }
     static fromObject(data: {
         status?: number;
         responseMessage?: string;
     }): spotifyResponse {
         const message = new spotifyResponse({});
         if (data.status != null) {
             message.status = data.status;
         }
         if (data.responseMessage != null) {
             message.responseMessage = data.responseMessage;
         }
         return message;
     }
     toObject() {
         const data: {
             status?: number;
             responseMessage?: string;
         } = {};
         if (this.status != null) {
             data.status = this.status;
         }
         if (this.responseMessage != null) {
             data.responseMessage = this.responseMessage;
         }
         return data;
     }
     serialize(): Uint8Array;
     serialize(w: pb_1.BinaryWriter): void;
     serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
         const writer = w || new pb_1.BinaryWriter();
         if (this.status != 0)
             writer.writeUint32(1, this.status);
         if (this.responseMessage.length)
             writer.writeString(2, this.responseMessage);
         if (!w)
             return writer.getResultBuffer();
     }
     static deserialize(bytes: Uint8Array | pb_1.BinaryReader): spotifyResponse {
         const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new spotifyResponse();
         while (reader.nextField()) {
             if (reader.isEndGroup())
                 break;
             switch (reader.getFieldNumber()) {
                 case 1:
                     message.status = reader.readUint32();
                     break;
                 case 2:
                     message.responseMessage = reader.readString();
                     break;
                 default: reader.skipField();
             }
         }
         return message;
     }
     serializeBinary(): Uint8Array {
         return this.serialize();
     }
     static deserializeBinary(bytes: Uint8Array): spotifyResponse {
         return spotifyResponse.deserialize(bytes);
     }
 }
 interface GrpcUnaryServiceInterface<P, R> {
     (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
     (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
     (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
     (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
 }
 interface GrpcStreamServiceInterface<P, R> {
     (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
     (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
 }
 interface GrpWritableServiceInterface<P, R> {
     (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
     (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
     (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
     (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
 }
 interface GrpcChunkServiceInterface<P, R> {
     (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
     (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
 }
 interface GrpcPromiseServiceInterface<P, R> {
     (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
     (message: P, options?: grpc_1.CallOptions): Promise<R>;
 }
 export abstract class UnimplementedSpotifyServiceService {
     static definition = {
         SendEvent: {
             path: "/SpotifyService/SendEvent",
             requestStream: false,
             responseStream: false,
             requestSerialize: (message: spotifyRequest) => Buffer.from(message.serialize()),
             requestDeserialize: (bytes: Buffer) => spotifyRequest.deserialize(new Uint8Array(bytes)),
             responseSerialize: (message: spotifyResponse) => Buffer.from(message.serialize()),
             responseDeserialize: (bytes: Buffer) => spotifyResponse.deserialize(new Uint8Array(bytes))
         }
     };
     [method: string]: grpc_1.UntypedHandleCall;
     abstract SendEvent(call: grpc_1.ServerUnaryCall<spotifyRequest, spotifyResponse>, callback: grpc_1.sendUnaryData<spotifyResponse>): void;
 }
 export class SpotifyServiceClient extends grpc_1.makeGenericClientConstructor(UnimplementedSpotifyServiceService.definition, "SpotifyService", {}) {
     constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
         super(address, credentials, options);
     }
     SendEvent: GrpcUnaryServiceInterface<spotifyRequest, spotifyResponse> = (message: spotifyRequest, metadata: grpc_1.Metadata | grpc_1.CallOptions | grpc_1.requestCallback<spotifyResponse>, options?: grpc_1.CallOptions | grpc_1.requestCallback<spotifyResponse>, callback?: grpc_1.requestCallback<spotifyResponse>): grpc_1.ClientUnaryCall => {
         return super.SendEvent(message, metadata, options, callback);
     };
 }
 