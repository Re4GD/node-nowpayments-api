import { NowPaymentsClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("nowpayments payments", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new NowPaymentsClient(API_KEY);

	test("get estimated price", async () => {
		const { result, error } = await client.getEstimatedPrice({
			amount: 4000,
			currency_from: "usd",
			currency_to: "btc",
		});
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});
});
