export * from "./client";
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
