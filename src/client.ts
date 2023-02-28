import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import {
	GetAvailableCheckedCoins,
	GetAvailableCheckedCoinsParams,
	GetAvailableCurrencies,
	GetAvailableCurrenciesParams,
	GetAvailableFullCurrencies,
	Result,
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
}
