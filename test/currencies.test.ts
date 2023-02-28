import { NowPaymentsClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("nowpayments currencies", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new NowPaymentsClient(API_KEY);

	test("get available currencies", async () => {
		const { result, error } = await client.getAvailableCurrencies({
			fixed_rate: false,
		});
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("get available full currencies", async () => {
		const { result, error } = await client.getAvailableFullCurrencies();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("get available checked coins", async () => {
		const { result, error } = await client.getAvailableCheckedCoins({
			fixed_rate: false,
		});
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});
});
