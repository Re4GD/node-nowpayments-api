import { PaymentStatus, PayoutStatus } from "./";

export interface WebhookPaymentBody {
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

export interface WebhookPayoutBody {
	id: string;
	batch_withdrawal_id: string;
	status: PayoutStatus;
	error?: string;
	currency: string;
	amount: string;
	address: string;
	extra_id?: string;
	hash?: string;
	ipn_callback_url: string;
	created_at: string;
	requested_at?: string;
	updated_at?: string;
}

export type VerifyWebhookResult =
	| {
			isVerified: true;
			typedBody: WebhookPaymentBody | WebhookPayoutBody;
	  }
	| {
			isVerified: false;
			error: "NO_SIGNATURE" | "INVALID_SIGNATURE";
	  };
