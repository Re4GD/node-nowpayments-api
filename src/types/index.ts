export * from "./client";
export * from "./client.currencies";
export * from "./client.payment";
export * from "./client.payout";
export * from "./webhook";

export type Result<T> = {
	result?: T;
	error?: unknown;
};

export type PaymentStatus =
	| "waiting"
	| "confirming"
	| "confirmed"
	| "sending"
	| "partially_paid"
	| "finished"
	| "failed"
	| "refunded"
	| "expired";

export type PayoutStatus =
	| "CREATING"
	| "WAITING"
	| "PROCESSING"
	| "SENDING"
	| "FINISHED"
	| "FAILED"
	| "REJECTED";
