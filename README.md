# Node.js Typescript NowPayments API

![npm version](https://img.shields.io/npm/v/node-nowpayments-api)
![npm downloads](https://img.shields.io/npm/dt/node-nowpayments-api)
![last commit](https://img.shields.io/github/last-commit/re4gd/node-nowpayments-api)

Node.js connector for the NowPayments API with Typescript.

- Simple and unopiniated connector.
- Actively maintained with a modern, promise-driven interface.
- Strongly typed on all requests and responses.
- Lightweight package and snappy DX.
- Proxy support via axios integration.
- Client samples, webhook samples and code snippet examples

# Installation

`npm install node-nowpayments-api`

# Examples

Refer to the [examples](./examples) folder for implementation demos.

# Usage

# Webhooks

## Verify a webhook

```typescript
const { isVerified, error, typedBody } = verifyWebhook(
	req.body,
	req.headers["x-nowpayments-sig"],
	IPN_SECRET_KEY,
);
```
