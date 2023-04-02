export interface PayoutAuthenticationParams {
	email: string;
	password: string;
}

export interface PayoutAuthenticationResult {
	token: string;
}

export interface GetBalanceResult {
	[currency: string]: {
		amount: number;
		pendingAmount: number;
	};
}

export interface GetPayoutStatusParams {
	payout_id: string;
}

// TODO
export interface GetPayoutStatusResult {}

export interface CreatePayoutParams {
	address: string;
	currency: string;
	amount: number;
	ipn_callback_url?: string;
}

// TODO
export interface CreatePayoutResult {
	ipn_callback_url: string;
	withdrawals: any;
}

export interface VerifyPayoutParams {
	payout_id: string;
	verification_code: string;
}

// TODO
export interface VerifyPayoutResult {}
