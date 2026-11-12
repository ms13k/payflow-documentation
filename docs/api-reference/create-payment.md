---
title: Create a Payment
sidebar_position: 2
---

# Create a Payment

Use this API to create a payment attempt for an existing Payflow order.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, request fields, and response examples are proposed and do not connect to a live payment service.
:::

## Method

`POST`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/payments`

## Request URL

`https://api.payflow.example/v1/payments`

## Authentication

Include your Payflow test access token in the `Authorization` header.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Accept: application/json
```

## Request Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `order_id` | string | Required | Identifier of the order associated with the payment. |
| `amount` | integer | Required | Payment amount in the smallest currency unit. For INR, the amount is in paise. |
| `currency` | string | Required | Three-letter ISO currency code, such as `INR`. It must match the order currency. |
| `payment_method` | string | Required | Payment method. Proposed values are `card`, `netbanking`, and `upi`. |
| `reference_id` | string | Optional | Merchant-provided reference for the payment attempt. |

## Request Example JSON

```json
{
  "order_id": "order_7f8a9b2c",
  "amount": 5000,
  "currency": "INR",
  "payment_method": "upi",
  "reference_id": "payment_ref_1001"
}
```

## Example Request

```bash
curl -X POST "https://api.payflow.example/v1/payments" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "order_id": "order_7f8a9b2c",
    "amount": 5000,
    "currency": "INR",
    "payment_method": "upi",
    "reference_id": "payment_ref_1001"
  }'
```

## Response

A successful request is proposed to return a payment attempt with an initial `pending` status.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique payment identifier. |
| `order_id` | string | Identifier of the associated order. |
| `amount` | integer | Payment amount in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code. |
| `payment_method` | string | Payment method selected for the attempt. |
| `reference_id` | string | Merchant-provided reference, if supplied. |
| `status` | string | Payment status. The initial status in this example is `pending`. |
| `created_at` | integer | Creation time represented as a Unix timestamp. |

### Response Example JSON

```json
{
  "id": "pay_3a6b8c1d",
  "order_id": "order_7f8a9b2c",
  "amount": 5000,
  "currency": "INR",
  "payment_method": "upi",
  "reference_id": "payment_ref_1001",
  "status": "pending",
  "created_at": 1794500100
}
```

## HTTP Status Codes

| Status code | Description |
|---|---|
| `201 Created` | The payment attempt was created successfully. |
| `400 Bad Request` | A required parameter is missing or invalid. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The application does not have permission to create a payment. |
| `404 Not Found` | The specified order does not exist. |
| `409 Conflict` | The request conflicts with the current order state or amount. |
| `500 Internal Server Error` | An unexpected error occurred. |

## Error Response Example

```json
{
  "error": {
    "code": "INVALID_ORDER",
    "message": "The specified order could not be found.",
    "field": "order_id"
  }
}
```

## Test the API Using Postman

1. Create a new request in Postman and select `POST`.
2. Enter `https://api.payflow.example/v1/payments`.
3. In **Authorization**, select **Bearer Token** and enter your sample access token.
4. Add `Content-Type: application/json` and `Accept: application/json` in **Headers**.
5. In **Body**, select **raw** and choose **JSON**.
6. Enter the request body shown above.
7. Select **Send** to review the illustrative response format.

:::warning
The `.example` domain is reserved for documentation examples. This request cannot reach a live Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Related APIs

- [Create an Order](./create-order.md)
- [Capture a Payment](./capture-payment.md)
- [Create a Refund](./create-refund.md)
