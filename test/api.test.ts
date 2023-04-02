import { NowPaymentsClient } from "../src";

const API_KEY = process.env.API_KEY;

describe("nowpayments payments", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new NowPaymentsClient(API_KEY);

	test("get api status", async () => {
		const { result, error } = await client.getApiStatus();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});
});
