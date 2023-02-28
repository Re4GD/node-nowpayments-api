export type GetAvailableCurrenciesParams = {
	fixed_rate: boolean;
};

export type GetAvailableCheckedCoinsParams = {
	fixed_rate: boolean;
};

export type GetAvailableCurrencies =
	| GetAvailableCurrenciesNotFixed
	| GetAvailableCurrenciesFixed;

export interface GetAvailableCurrenciesNotFixed {
	currencies: string[];
}

export interface GetAvailableCurrenciesFixed {
	currencies: FixedRateCurrency[];
}

export interface FixedRateCurrency {
	min_amount: number;
	max_amount: number;
	currency: string;
}

// TODO
export interface FullCurrency {
	id: number;
	code: string;
	name: string;
	enable: boolean;
	wallet_regex: string;
	priority: number;
	extra_id_exists: boolean;
	extra_id_regex?: any;
	logo_url: string;
	track: boolean;
	cg_id: string;
	is_maxlimit: boolean;
	network: string;
	smart_contract?: any;
	network_precision?: any;
}

export interface GetAvailableFullCurrencies {
	currencies: FullCurrency[];
}

export interface GetAvailableCheckedCoins {
	selectedCurrencies: string[];
}

// TODO
export interface CreatePaymentParams {
	price_amount: number;
	price_currency: string;
	pay_currency: string;
	ipn_callback_url: string;
	order_id: string;
	order_description: string;
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
