---
title: Create a Refund
sidebar_position: 5
---

# Create a Refund

## Introduction

Use this API to create a full or partial refund for a captured payment.

The `amount` parameter specifies the refund amount in the smallest currency unit. For a full refund, provide the entire amount available for refund. For a partial refund, provide an amount lower than the available refund amount.

A successful refund request initially returns a `pending` status. This indicates that the refund has been created but has not yet reached a completed status.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, request fields, and response examples are proposed and do not connect to a live payment service.
:::

## Method

`POST`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/payments/{payment_id}/refunds`

## Request URL

`https://api.payflow.example/v1/payments/pay_3a6b8c1d/refunds`

Replace `{payment_id}` with the identifier of the captured payment.

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Accept: application/json
```

## Path Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `payment_id` | string | Required | Identifier of the captured payment to refund. |

## Request Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `amount` | integer | Required | Refund amount in the smallest currency unit. It must be greater than zero and cannot exceed the amount available for refund. |
| `reason` | string | Optional | Reason for the refund, such as `customer_request` or `duplicate_payment`. |
| `reference_id` | string | Optional | Merchant-provided reference for the refund request. |

## Request Example JSON

The following example creates a partial refund of ₹20.00.

```json
{
  "amount": 2000,
  "reason": "customer_request",
  "reference_id": "refund_ref_1001"
}
```

## Example Request

```bash
curl -X POST "https://api.payflow.example/v1/payments/pay_3a6b8c1d/refunds" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "amount": 2000,
    "reason": "customer_request",
    "reference_id": "refund_ref_1001"
  }'
```

## Response

A successful request returns a refund resource with an initial `pending` status.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique refund identifier. |
| `payment_id` | string | Identifier of the payment being refunded. |
| `amount` | integer | Refund amount in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code. |
| `status` | string | Refund status. The initial status in this example is `pending`. |
| `reason` | string | Refund reason, if supplied. |
| `reference_id` | string | Merchant-provided reference, if supplied. |
| `created_at` | integer | Creation time represented as a Unix timestamp. |

### Response Example JSON

```json
{
  "id": "rfnd_5d7e9f2a",
  "payment_id": "pay_3a6b8c1d",
  "amount": 2000,
  "currency": "INR",
  "status": "pending",
  "reason": "customer_request",
  "reference_id": "refund_ref_1001",
  "created_at": 1794500300
}
```

## HTTP Status Codes

| Status code | Description |
|---|---|
| `201 Created` | The refund request was created successfully. |
| `400 Bad Request` | The refund amount or another request value is invalid. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The application does not have permission to create a refund. |
| `404 Not Found` | The specified payment does not exist. |
| `409 Conflict` | The payment is not captured or the amount exceeds the amount available for refund. |
| `500 Internal Server Error` | An unexpected error occurred. |

## Error Response Example

```json
{
  "error": {
    "code": "REFUND_AMOUNT_EXCEEDED",
    "message": "The refund amount exceeds the amount available for refund.",
    "field": "amount"
  }
}
```

## Test the API Using Postman

1. Create a new request in Postman and select `POST`.
2. Enter `https://api.payflow.example/v1/payments/pay_3a6b8c1d/refunds`.
3. In **Authorization**, select **Bearer Token** and enter your sample access token.
4. Add `Content-Type: application/json` and `Accept: application/json` in **Headers**.
5. In **Body**, select **raw** and choose **JSON**.
6. Enter the request body shown above.
7. Select **Send** to submit the request. Because Payflow is a fictional API, the request will not return a live response. Refer to the Response Example JSON section for the expected response format.

:::warning
The `.example` domain is reserved for documentation examples. This request cannot reach a live Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Related APIs

- [Create a Payment](./create-payment.md)
- [Authorize a Payment](./authorize-payment.md)
- [Capture a Payment](./capture-payment.md)
