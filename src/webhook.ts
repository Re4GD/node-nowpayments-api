import crypto from "crypto";
import { VerifyWebhookResult, WebhookBody } from "./types/webhook";

export const verifyWebhook = (
	rawBody: object,
	signature: string | string[] | undefined,
	ipnSecret: string,
): VerifyWebhookResult => {
	if (!signature) {
		return { isVerified: false, rawBody: rawBody, error: "NO_SIGNATURE" };
	}
	const coinBaseSignature = crypto
		.createHmac("sha512", ipnSecret)
		.update(JSON.stringify(rawBody, Object.keys(rawBody).sort()))
		.digest("hex");
	if (signature !== coinBaseSignature) {
		return { isVerified: false, rawBody: rawBody, error: "INVALID_SIGNATURE" };
	}
	return {
		isVerified: true,
		rawBody: rawBody,
		typedBody: rawBody as WebhookBody,
	};
};
