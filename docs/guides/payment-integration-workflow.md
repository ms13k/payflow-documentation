---
title: Payment Integration Workflow
sidebar_position: 1
---

# Payment Integration Workflow

## Introduction

This guide explains how to use the Payflow APIs together to create an order, create a payment, authorize the payment, capture it, and request a refund when needed.

Payflow is a fictional payment gateway created for a documentation capstone. The endpoints, authentication scheme, request fields, and response examples in this guide are proposed examples. They do not connect to a live payment service.

## Before You Begin

Make sure you have:

- Reviewed the [Prerequisites](../getting-started/prerequisites.md).
- Read [Authentication](../getting-started/authentication.md).
- Completed the [First API Request](../getting-started/first-api-request.md).
- A placeholder access token (`YOUR_ACCESS_TOKEN`) for documentation examples.

Use the following base URL in the examples:

`https://api.payflow.example/v1`

The `.example` domain is reserved for documentation. It is not a live API endpoint.

## Payment Integration Steps

The proposed Payflow workflow contains the following steps:

1. Create an order.
2. Create a payment for the order.
3. Authorize the payment.
4. Capture the authorized payment.
5. Create a refund if a refund is required.

## Step 1: Create an Order

Create an order before creating a payment. Use the Create an Order API to provide the amount and currency for the transaction.

- **Method:** `POST`
- **Endpoint:** `/orders`

See [Create an Order](../api-reference/create-order.md) for the request parameters and response example.

For example, an order amount of `5000` with currency `INR` represents ₹50.00 because amounts are expressed in the smallest currency unit.

A successful request returns an order identifier, such as `order_7f8a9b2c`. Use this identifier when creating the payment.

## Step 2: Create a Payment

Create a payment using the order identifier returned in the previous step.

- **Method:** `POST`
- **Endpoint:** `/payments`

Include the `order_id`, `amount`, `currency`, and `payment_method` fields in the proposed request body.

See [Create a Payment](../api-reference/create-payment.md) for the complete request and response examples.

The proposed response initially returns the payment with a `pending` status.

## Step 3: Authorize the Payment

Authorize the payment before capturing it.

- **Method:** `POST`
- **Endpoint:** `/payments/{payment_id}/authorize`

Replace `{payment_id}` with the payment identifier returned when the payment was created. This proposed endpoint does not require a request body.

See [Authorize a Payment](../api-reference/authorize-payment.md) for details.

A successful authorization returns the payment with an `authorized` status.

## Step 4: Capture the Payment

Capture an authorized payment to complete the capture step in this proposed workflow.

- **Method:** `POST`
- **Endpoint:** `/payments/{payment_id}/capture`

You can provide an optional `amount` in the request body. If you omit it, the full authorized amount is captured. The amount must not exceed the authorized amount.

See [Capture a Payment](../api-reference/capture-payment.md) for the request parameters and response example.

A successful full capture returns a `captured` status. For this capstone, the documented response example demonstrates a full capture.

## Step 5: Create a Refund

If you need to refund a captured payment, use the Create a Refund API.

- **Method:** `POST`
- **Endpoint:** `/payments/{payment_id}/refunds`

Provide the refund amount in the smallest currency unit. The amount must be greater than zero and must not exceed the amount available for refund.

See [Create a Refund](../api-reference/create-refund.md) for the request and response examples.

A successful refund request initially returns a `pending` status. This means the refund request has been created; it does not mean the refund has completed.

## Retrieve Order Details

You can retrieve an order to review its amount, amount paid, amount due, and current order status.

- **Method:** `GET`
- **Endpoint:** `/orders/{order_id}`

See [Retrieve an Order](../api-reference/retrieve-order.md).

## Important Notes

- Send the access token in the `Authorization` header using the Bearer scheme.
- Use HTTPS for API requests.
- Send and receive JSON where required by the endpoint.
- Provide monetary amounts in the smallest currency unit. For INR, `5000` represents ₹50.00.
- Use the identifiers returned by earlier API calls in subsequent requests.
- The examples in this capstone are illustrative. The `.example` domain cannot be used to make live requests.

## Related Documentation

- [Authentication](../getting-started/authentication.md)
- [First API Request](../getting-started/first-api-request.md)
- [API Reference](../api-reference/)
- [Handling Payment Errors](./handling-payment-errors.md)
- [Understanding Payment Statuses](./understanding-payment-statuses.md)
