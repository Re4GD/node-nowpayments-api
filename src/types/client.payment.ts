export interface CreatePaymentParams {
	price_amount: number;
	price_currency: string;
	pay_amount?: number;
	pay_currency: string;
	ipn_callback_url?: string;
	order_id?: string;
	order_description?: string;
	purchase_id?: string;
	payout_address?: string;
	payout_currency?: string;
	payout_extra_id?: string;
	fixed_rate?: boolean;
	is_fee_paid_by_user?: boolean;
}

// TODO
export interface CreatePaymentResult {
	payment_id: string;
	payment_status: string;
	pay_address: string;
	price_amount: number;
	price_currency: string;
	pay_amount: number;
	amount_received: number;
	pay_currency: string;
	order_id: string;
	order_description: string;
	ipn_callback_url: string;
	created_at: string;
	updated_at: string;
	purchase_id: string;
	smart_contract?: any;
	network: string;
	network_precision?: any;
	time_limit?: any;
	burning_percent?: any;
	expiration_estimate_date: string;
	is_fixed_rate: boolean;
	is_fee_paid_by_user: boolean;
	valid_until: string;
	type: string;
}
