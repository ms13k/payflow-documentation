---
title: Capture a Payment
sidebar_position: 4
---

# Capture a Payment

Use this API to capture an authorized payment. In this proposed Payflow workflow, a payment must have an `authorized` status before it can be captured.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, request fields, and response examples are proposed and do not connect to a live payment service.
:::

## Method

`POST`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/payments/{payment_id}/capture`

## Request URL

`https://api.payflow.example/v1/payments/pay_3a6b8c1d/capture`

Replace `{payment_id}` with the identifier of the payment to capture.

## Authentication

Include the placeholder access token in the `Authorization` header for documentation examples.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Accept: application/json
```

## Path Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `payment_id` | string | Required | Identifier of the authorized payment to capture. |

## Request Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `amount` | integer | Optional | Amount to capture in the smallest currency unit. If omitted, the full authorized amount is captured. It cannot exceed the authorized amount. |

This example demonstrates a full capture. The behavior and resulting payment status for a partial capture are not defined in this documentation.

## Request Example JSON

```json
{
  "amount": 5000
}
```

## Example Request

```bash
curl -X POST "https://api.payflow.example/v1/payments/pay_3a6b8c1d/capture" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{"amount": 5000}'
```

## Response

A successful request is proposed to return the updated payment with a `captured` status.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique payment identifier. |
| `order_id` | string | Identifier of the associated order. |
| `amount` | integer | Original payment amount in the smallest currency unit. |
| `amount_captured` | integer | Amount captured in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code. |
| `status` | string | Payment status. The status is `captured` after a successful full capture. |
| `captured_at` | integer | Capture time represented as a Unix timestamp. |

### Response Example JSON

```json
{
  "id": "pay_3a6b8c1d",
  "order_id": "order_7f8a9b2c",
  "amount": 5000,
  "amount_captured": 5000,
  "currency": "INR",
  "status": "captured",
  "captured_at": 1794500200
}
```

## HTTP Status Codes

| Status code | Description |
|---|---|
| `200 OK` | The payment was captured successfully. |
| `400 Bad Request` | The capture amount is invalid or exceeds the authorized amount. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The application does not have permission to capture the payment. |
| `404 Not Found` | The specified payment does not exist. |
| `409 Conflict` | The payment is not authorized or has already been captured. |
| `500 Internal Server Error` | An unexpected error occurred. |

## Error Response Example

```json
{
  "error": {
    "code": "PAYMENT_NOT_AUTHORIZED",
    "message": "Only authorized payments can be captured.",
    "field": "payment_id"
  }
}
```

## Test the API Using Postman

1. Create a new request in Postman and select `POST`.
2. Enter `https://api.payflow.example/v1/payments/pay_3a6b8c1d/capture`.
3. In **Authorization**, select **Bearer Token** and enter `YOUR_ACCESS_TOKEN` in the token field as a placeholder.
4. Add `Content-Type: application/json` and `Accept: application/json` in **Headers**.
5. In **Body**, select **raw** and choose **JSON**.
6. Enter the request body shown above.
7. Select **Send** to review the illustrative response format.

:::warning
The `.example` domain is reserved for documentation examples. This request cannot reach a live Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Related APIs

- [Create a Payment](./create-payment.md)
- [Authorize a Payment](./authorize-payment.md)
- [Create a Refund](./create-refund.md)
