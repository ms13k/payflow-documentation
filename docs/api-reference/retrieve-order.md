---
title: Retrieve an Order
sidebar_position: 6
---

# Retrieve an Order

## Introduction

Use this API to retrieve the details of an existing Payflow order. The response provides information about the order amount, currency, payment progress, and current status.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, response fields, and examples are proposed and do not connect to a live payment service.
:::

## Method

`GET`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/orders/{order_id}`

## Request URL

`https://api.payflow.example/v1/orders/order_7f8a9b2c`

Replace `{order_id}` with the identifier of the order you want to retrieve.

## Authentication

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Accept: application/json
```

## Path Parameters

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `order_id` | string | Required | Unique identifier of the order to retrieve. |

## Example Request

```bash
curl -X GET "https://api.payflow.example/v1/orders/order_7f8a9b2c" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Accept: application/json"
```

## Response

A successful request is proposed to return the current details of the specified order.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique order identifier. |
| `entity` | string | Resource type. The value is `order`. |
| `amount` | integer | Total order amount in the smallest currency unit. |
| `amount_paid` | integer | Amount paid against the order, in the smallest currency unit. |
| `amount_due` | integer | Amount remaining to be paid, in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code. |
| `receipt` | string | Receipt or reference number supplied when the order was created. |
| `status` | string | Order status. Proposed values include `created`, `attempted`, and `paid`. |
| `attempts` | integer | Number of payment attempts made against the order. |
| `notes` | object | Additional key-value information supplied when the order was created. |
| `created_at` | integer | Creation time represented as a Unix timestamp. |

### Response Example JSON

```json
{
  "id": "order_7f8a9b2c",
  "entity": "order",
  "amount": 5000,
  "amount_paid": 0,
  "amount_due": 5000,
  "currency": "INR",
  "receipt": "receipt_1001",
  "status": "created",
  "attempts": 0,
  "notes": {
    "customer_reference": "customer_123",
    "order_description": "Purchase of office supplies"
  },
  "created_at": 1794500000
}
```

## HTTP Status Codes

| Status code | Description |
|---|---|
| `200 OK` | The order details were retrieved successfully. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The application does not have permission to retrieve the order. |
| `404 Not Found` | The specified order does not exist. |
| `500 Internal Server Error` | An unexpected error occurred. |

## Error Response Example

```json
{
  "error": {
    "code": "ORDER_NOT_FOUND",
    "message": "The specified order could not be found.",
    "field": "order_id"
  }
}
```

## Test the API Using Postman

1. Create a new request in Postman and select `GET`.
2. Enter `https://api.payflow.example/v1/orders/order_7f8a9b2c`.
3. In **Authorization**, select **Bearer Token** and enter your sample access token.
4. Add `Accept: application/json` in **Headers**.
5. Select **Send** to submit the request. Because Payflow is a fictional API, the request will not return a live response. Refer to the Response Example JSON section for the expected response format.

:::warning
The `.example` domain is reserved for documentation examples. This request cannot reach a live Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Related APIs

- [Create an Order](./create-order.md)
- [Create a Payment](./create-payment.md)
- [Authorize a Payment](./authorize-payment.md)
- [Capture a Payment](./capture-payment.md)
- [Create a Refund](./create-refund.md)
