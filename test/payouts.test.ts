import { NowPaymentsClient } from "../src";

const API_KEY = process.env.API_KEY;
const PAYOUT_EMAIL = process.env.PAYOUT_EMAIL;
const PAYOUT_PASSWORD = process.env.PAYOUT_PASSWORD;

describe("nowpayments payments", () => {
	if (!API_KEY) {
		throw new Error("Invalid API key!");
	}
	const client = new NowPaymentsClient(API_KEY);

	test("authentication", async () => {
		if (!PAYOUT_EMAIL || !PAYOUT_PASSWORD) {
			throw new Error("Invalid payout credentials!");
		}
		const { result, error } = await client.payoutAuthentication({
			email: PAYOUT_EMAIL,
			password: PAYOUT_PASSWORD,
		});
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	test("get balance", async () => {
		const { result, error } = await client.getBalance();
		expect(error).toBeUndefined();
		expect(result).toBeDefined();
	});

	// test("get payout status", async () => {
	// 	const { result, error } = await client.getPayoutStatus();
	// 	expect(error).toBeUndefined();
	// 	expect(result).toBeDefined();
	// });
});
