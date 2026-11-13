---
title: Authorize a Payment
sidebar_position: 3
---

# Authorize a Payment

Use this API to authorize a payment created for an existing Payflow order. Authorization confirms that the payment can proceed for processing. In this proposed Payflow workflow, a payment must be authorized before it can be captured.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, request fields, and response examples on this page are proposed examples. They do not connect to a live payment service.
:::

## Method

`POST`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/payments/{payment_id}/authorize`

## Request URL

`https://api.payflow.example/v1/payments/pay_3a6b8c1d/authorize`

Replace `{payment_id}` with the identifier of the payment you want to authorize.

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
| `payment_id` | string | Required | Unique identifier of the payment to authorize. |

## Request Parameters

This proposed endpoint does not require a request body. Send the payment identifier in the request URL.

## Example Request

```bash
curl -X POST "https://api.payflow.example/v1/payments/pay_3a6b8c1d/authorize" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json"
```

## Response

A successful request is proposed to return the updated payment details with an `authorized` status.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique identifier assigned to the payment. |
| `order_id` | string | Identifier of the order associated with the payment. |
| `amount` | integer | Payment amount in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code. |
| `payment_method` | string | Payment method selected for the payment. |
| `status` | string | Current payment status. The status is `authorized` after a successful authorization. |
| `authorized_at` | integer | Time when the payment was authorized, represented as a Unix timestamp. |

### Response Example JSON

The following example shows the payment details returned after successful authorization.

```json
{
  "id": "pay_3a6b8c1d",
  "order_id": "order_7f8a9b2c",
  "amount": 5000,
  "currency": "INR",
  "payment_method": "upi",
  "status": "authorized",
  "authorized_at": 1794500150
}
```

:::note
The payment ID and timestamp are sample values created for this fictional Payflow example.
:::

## HTTP Status Codes

The following status codes are proposed for this Payflow endpoint.

| Status code | Description |
|---|---|
| `200 OK` | The payment was authorized successfully. |
| `400 Bad Request` | The payment cannot be authorized because the request or payment state is invalid. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The authenticated application does not have permission to authorize the payment. |
| `404 Not Found` | The specified payment does not exist. |
| `409 Conflict` | The payment is already authorized, captured, or in a state that does not allow authorization. |
| `500 Internal Server Error` | An unexpected error occurred while processing the request. |

## Error Response Example

```json
{
  "error": {
    "code": "PAYMENT_NOT_AUTHORIZABLE",
    "message": "The payment cannot be authorized in its current state.",
    "field": "payment_id"
  }
}
```

## Test the API Using Postman

1. Open Postman and create a new HTTP request.
2. Select `POST` as the request method.
3. Enter `https://api.payflow.example/v1/payments/pay_3a6b8c1d/authorize` as the request URL.
4. Open the **Authorization** tab and select **Bearer Token**.
5. Enter `YOUR_ACCESS_TOKEN` in the token field as a placeholder.
6. Add `Content-Type: application/json` and `Accept: application/json` in the **Headers** tab.
7. Do not add a request body for this proposed endpoint.
8. Select **Send** to review the illustrative response format.

:::warning
The `.example` domain is reserved for documentation examples. This request will not reach a live Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Related APIs

- [Create a Payment](./create-payment.md)
- [Capture a Payment](./capture-payment.md)
- [Create a Refund](./create-refund.md)
