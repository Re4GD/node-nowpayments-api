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

export interface FullCurrency {
	id: number;
	code: string;
	name: string;
	enable: boolean;
	wallet_regex: string;
	priority: number;
	extra_id_exists: boolean;
	extra_id_regex?: string;
	logo_url: string;
	track: boolean;
	cg_id: string;
	is_maxlimit: boolean;
	network: string;
	smart_contract?: string;
	network_precision?: string;
	explorer_link_hash?: string;
	precision: string;
	is_defi: boolean;
	is_popular: boolean;
	is_stable: boolean;
	available_for_to_conversion: boolean;
}

export interface GetAvailableFullCurrencies {
	currencies: FullCurrency[];
}

export interface GetAvailableCheckedCoins {
	selectedCurrencies: string[];
}

export interface GetEstimatedPriceParams {
	amount: number;
	currency_from: string;
	currency_to: string;
}

export interface GetEstimatedPriceResult {
	currency_from: string;
	amount_from: number;
	currency_to: string;
	estimated_amount: number;
}
