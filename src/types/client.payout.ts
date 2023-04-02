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

export interface PayoutStatusWithdrawal {
	id?: string;
	batch_withdrawal_id: string;
	status: string;
	error?: string;
	currency: string;
	amount: string;
	address: string;
	extra_id?: string;
	hash: string;
	ipn_callback_url?: string;
	payout_description?: string;
	is_request_payouts?: boolean;
	unique_external_id?: string;
	created_at?: string;
	updated_at: string;
	requested_at: string;
}

export interface GetPayoutStatusResult {
	id: string;
	createdAt: string;
	withdrawals: PayoutStatusWithdrawal[];
}

export interface PayoutWithdrawal {
	address: string;
	currency: string;
	amount: number;
	ipn_callback_url?: string;
}

export interface CreatePayoutParams {
	ipn_callback_url?: string;
	withdrawals: PayoutWithdrawal[];
}

export interface CreatePayoutWithdrawal {
	is_request_payouts: boolean;
	id: string;
	address: string;
	currency: string;
	amount: string;
	ipn_callback_url: string;
	batch_withdrawal_id: string;
	status: string;
	error?: string;
	extra_id?: string;
	hash?: string;
	payout_description?: string;
	unique_external_id?: string;
	created_at: string;
	requested_at?: string;
	updated_at?: string;
}

export interface CreatePayoutResult {
	id: string;
	withdrawals: CreatePayoutWithdrawal[];
}

export interface VerifyPayoutParams {
	payout_id: string;
	verification_code: string;
}
