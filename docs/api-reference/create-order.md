---
title: Create an Order
sidebar_position: 1
---

# Create an Order

Use this API to create an order in Payflow. An order records the amount and currency for which a customer is expected to make a payment.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, authentication scheme, request fields, and response examples in this page are proposed examples. They do not connect to a live payment service.
:::

## Method

`POST`

## Base URL

`https://api.payflow.example/v1`

## Endpoint

`/orders`

## Request URL

`https://api.payflow.example/v1/orders`

## Authentication

Payflow uses bearer token authentication. Include the placeholder access token in the `Authorization` header for documentation examples.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Accept: application/json
```

Do not share your access token or include real credentials in your documentation or source code.

## Request Parameters

Send the request parameters in a JSON request body.

| Parameter | Data type | Required/Optional | Description |
|---|---|---|---|
| `amount` | integer | Required | Order amount in the smallest currency unit. For INR, the amount is specified in paise. For example, `5000` represents ₹50.00. |
| `currency` | string | Required | Three-letter ISO currency code for the order, such as `INR`. |
| `receipt` | string | Optional | Your internal receipt or reference number for the order. It must be unique and can contain up to 40 characters. |
| `notes` | object | Optional | Key-value pairs for storing additional information about the order. The proposed limit is 15 pairs, with a maximum of 256 characters per value. |

## Request Example JSON

The following example creates an order for ₹50.00.

```json
{
  "amount": 5000,
  "currency": "INR",
  "receipt": "receipt_1001",
  "notes": {
    "customer_reference": "customer_123",
    "order_description": "Purchase of office supplies"
  }
}
```

## Example Request

```bash
curl -X POST "https://api.payflow.example/v1/orders" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -H "Accept: application/json" \
  -d '{
    "amount": 5000,
    "currency": "INR",
    "receipt": "receipt_1001",
    "notes": {
      "customer_reference": "customer_123",
      "order_description": "Purchase of office supplies"
    }
  }'
```

## Response

A successful request returns the details of the newly created order.

### Response Parameter Table

| Parameter | Data type | Description |
|---|---|---|
| `id` | string | Unique identifier assigned to the order. |
| `entity` | string | Type of resource returned. The value is `order`. |
| `amount` | integer | Total order amount in the smallest currency unit. |
| `amount_paid` | integer | Amount already paid against the order, in the smallest currency unit. |
| `amount_due` | integer | Amount remaining to be paid, in the smallest currency unit. |
| `currency` | string | Three-letter ISO currency code for the order. |
| `receipt` | string | Receipt or reference number supplied in the request. |
| `status` | string | Current order status. The initial status for a newly created order is `created`. |
| `attempts` | integer | Number of payment attempts made against the order. |
| `notes` | object | Additional key-value information supplied with the request. |
| `created_at` | integer | Time when the order was created, represented as a Unix timestamp. |

### Response Example JSON

The following example shows the response returned after an order is created successfully.

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

:::note
The order ID and timestamp above are sample values created for this fictional Payflow example.
:::

## HTTP Status Codes

The following status codes are proposed for this Payflow endpoint.

| Status code | Description |
|---|---|
| `201 Created` | The order was created successfully. |
| `400 Bad Request` | The request contains missing or invalid parameters. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. |
| `403 Forbidden` | The authenticated application does not have permission to create an order. |
| `500 Internal Server Error` | An unexpected error occurred while processing the request. |

## Error Response Example

```json
{
  "error": {
    "code": "INVALID_REQUEST",
    "message": "The amount must be greater than zero.",
    "field": "amount"
  }
}
```

## Test the API Using Postman

1. Open Postman and create a new HTTP request.
2. Select `POST` as the request method.
3. Enter `https://api.payflow.example/v1/orders` as the request URL.
4. Open the **Authorization** tab and select **Bearer Token**.
5. Enter `YOUR_ACCESS_TOKEN` in the token field as a placeholder.
6. Open the **Headers** tab and add `Content-Type` with the value `application/json`.
7. Open the **Body** tab, select **raw**, and choose **JSON**.
8. Enter the request JSON shown in the Request Example JSON section.
9. Select **Send** to review the illustrative response format.

:::warning
The `.example` domain is reserved for documentation examples. This request will not reach a real Payflow service. Do not enter real payment credentials or customer payment details.
:::

## Reference

The request and response structure was informed by the [Razorpay Create an Order API documentation](https://razorpay.com/docs/api/orders/create/). Payflow's endpoint, bearer-token authentication, examples, and proposed response behaviour are original illustrative content for this capstone.
