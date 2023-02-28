import { PaymentStatus } from "./";

export interface WebhookBody {
	payment_id: number;
	invoice_id?: number;
	payment_status: PaymentStatus;
	pay_address: string;
	price_amount: number;
	price_currency: string;
	pay_amount: number;
	actually_paid: number;
	actually_paid_at_fiat: number;
	pay_currency: string;
	order_id: string;
	order_description: string;
	purchase_id: string;
	created_at: string;
	updated_at: string;
	outcome_amount: number;
	outcome_currency: string;
}

export type VerifyWebhookResult =
	| {
			isVerified: true;
			typedBody: WebhookBody;
	  }
	| {
			isVerified: false;
			error: "NO_SIGNATURE" | "INVALID_SIGNATURE";
	  };
