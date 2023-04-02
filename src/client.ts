import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
	CreatePaymentParams,
	CreatePaymentResult,
	CreatePayoutParams,
	CreatePayoutResult,
	GetApiStatusResult,
	GetAvailableCheckedCoins,
	GetAvailableCheckedCoinsParams,
	GetAvailableCurrencies,
	GetAvailableCurrenciesParams,
	GetAvailableFullCurrencies,
	GetBalanceResult,
	GetEstimatedPriceParams,
	GetEstimatedPriceResult,
	GetPayoutStatusParams,
	GetPayoutStatusResult,
	PayoutAuthenticationParams,
	PayoutAuthenticationResult,
	Result,
	VerifyPayoutParams,
	VerifyPayoutResult,
} from "./types";

export class NowPaymentsClient {
	private axiosInstance: AxiosInstance;
	private globalRequestOptions: AxiosRequestConfig;

	constructor(apiKey: string, requestOptions: AxiosRequestConfig = {}) {
		this.globalRequestOptions = {
			baseURL: "https://api.nowpayments.io",
			headers: {
				accept: "application/json",
				"x-api-key": apiKey,
				"content-type": "application/json",
			},
			...requestOptions,
		};
		this.axiosInstance = axios.create(this.globalRequestOptions);
	}

	public async getApiStatus(): Promise<Result<GetApiStatusResult>> {
		try {
			const { data } = await this.axiosInstance.get("/v1/status");
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getAvailableCurrencies(
		params: GetAvailableCurrenciesParams,
	): Promise<Result<GetAvailableCurrencies>> {
		try {
			const { data } = await this.axiosInstance.get("/v1/currencies", {
				params: {
					fixed_rate: params.fixed_rate,
				},
			});
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getAvailableFullCurrencies(): Promise<
		Result<GetAvailableFullCurrencies>
	> {
		try {
			const { data } = await this.axiosInstance.get("/v1/full-currencies");
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getAvailableCheckedCoins(
		params: GetAvailableCheckedCoinsParams,
	): Promise<Result<GetAvailableCheckedCoins>> {
		try {
			const { data } = await this.axiosInstance.get("/v1/merchant/coins", {
				params: {
					fixed_rate: params.fixed_rate,
				},
			});
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getEstimatedPrice(
		params: GetEstimatedPriceParams,
	): Promise<Result<GetEstimatedPriceResult>> {
		try {
			const { data } = await this.axiosInstance.get("/v1/estimate", {
				params: {
					amount: params.amount,
					currency_from: params.currency_from,
					currency_to: params.currency_to,
				},
			});
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async createPayment(
		params: CreatePaymentParams,
	): Promise<Result<CreatePaymentResult>> {
		try {
			const { data } = await this.axiosInstance.post("/v1/payment", params);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async payoutAuthentication(
		params: PayoutAuthenticationParams,
	): Promise<Result<PayoutAuthenticationResult>> {
		try {
			const { data } = await this.axiosInstance.post("/v1/auth", params);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getBalance(): Promise<Result<GetBalanceResult>> {
		try {
			const { data } = await this.axiosInstance.get("/v1/balance");
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async getPayoutStatus(
		params: GetPayoutStatusParams,
	): Promise<Result<GetPayoutStatusResult>> {
		try {
			const { data } = await this.axiosInstance.get(
				`/v1/payout/${params.payout_id}`,
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async createPayout(
		params: CreatePayoutParams,
		authorization: string,
	): Promise<Result<CreatePayoutResult>> {
		const jwtToken = "Bearer " + authorization.replace("Bearer ", "");
		try {
			const { data } = await this.axiosInstance.post("/v1/payout", params, {
				headers: {
					Authorization: jwtToken,
				},
			});
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}

	public async verifyPayout(
		params: VerifyPayoutParams,
		authorization: string,
	): Promise<Result<VerifyPayoutResult>> {
		const jwtToken = "Bearer " + authorization.replace("Bearer ", "");
		try {
			const { data } = await this.axiosInstance.post(
				`/v1/payout/${params.payout_id}/verify`,
				{
					verification_code: params.verification_code,
				},
				{
					headers: {
						Authorization: jwtToken,
					},
				},
			);
			return { result: data };
		} catch (error) {
			return { error: error };
		}
	}
}
