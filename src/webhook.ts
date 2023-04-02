import crypto from "crypto";
import {
	VerifyWebhookResult,
	WebhookPaymentBody,
	WebhookPayoutBody,
} from "./types/webhook";

export const verifyWebhook = (
	rawBody: any,
	signature: string | string[] | undefined,
	ipnSecret: string,
): VerifyWebhookResult => {
	if (!signature) {
		return { isVerified: false, error: "NO_SIGNATURE" };
	}
	const npSignature = crypto
		.createHmac("sha512", ipnSecret)
		.update(JSON.stringify(rawBody, Object.keys(rawBody).sort()))
		.digest("hex");
	if (signature !== npSignature) {
		return { isVerified: false, error: "INVALID_SIGNATURE" };
	}
	return {
		isVerified: true,
		typedBody: rawBody as WebhookPaymentBody | WebhookPayoutBody,
	};
};
