export interface KinSdkError extends Error {
	readonly errorCode?: number;
}

export class AccountNotFoundError extends Error implements KinSdkError {

	readonly errorCode: number;

	constructor(readonly accountId: string) {
		super(`Account '${accountId}' was not found in the network.`);
		this.errorCode = 404;
	}
}

export class NetworkError extends Error implements KinSdkError {
}

export class ServerError extends Error implements KinSdkError {

	constructor(readonly errorCode: number) {
		super(`Server error, error code: ${errorCode}`);
		this.errorCode = errorCode;
	}
}

export class FriendbotError extends Error implements KinSdkError {

	constructor(readonly errorCode?: number, readonly extra?: any, readonly msg?: string) {
		super(`Friendbot error, ` + (errorCode ? `error code: ${errorCode} ` : "") + (msg ? `msg: ${msg}` : ""));
		this.errorCode = errorCode;
		this.extra = extra;
	}
}

export class InvalidAddress extends Error {
	constructor() {
		super('invalid wallet address.');
	}
}