---
title: Your First API Request
sidebar_position: 3
---

# Your First API Request

This guide walks you through the steps to send your first request to the Payflow API using Postman. You will use the Create an Order endpoint to submit an order request and review an illustrative response.

>Payflow is a fictional payment gateway created for a documentation capstone. The endpoint, access token, request, and response examples on this page are illustrative. They do not connect to a live payment service.

## Before You Begin

Before you start, make sure you have:

- Installed [Postman](https://www.postman.com/).
- Reviewed the [Prerequisites](./prerequisites.md).
- Read [Authentication](./authentication.md).
- A sample Payflow access token for use in documentation examples.

## API Endpoint

Use the following endpoint to create an order:

| Item | Value |
|---|---|
| HTTP method | `POST` |
| Endpoint | `/v1/orders` |
| Request URL | `https://api.payflow.example/v1/orders` |
| Content type | `application/json` |

For details about the endpoint and its parameters, see [Create an Order](../reference/create-an-order.md).

## Request Headers

Include the following headers in your request:

| Header | Value | Description |
|---|---|---|
| `Authorization` | `Bearer YOUR_ACCESS_TOKEN` | Authenticates your request using your Payflow access token. |
| `Content-Type` | `application/json` | Indicates that the request body is in JSON format. |
| `Accept` | `application/json` | Indicates that you expect a JSON response. |

Replace `YOUR_ACCESS_TOKEN` with the sample token used for this fictional capstone. Do not use real credentials.

## Request Body

The following example creates an order for ₹50.00. The `amount` value is expressed in paise, so `5000` represents ₹50.00.

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

For descriptions of each request field, see the Request Parameters section in [Create an Order](../reference/create-an-order.md).

## Send the Request Using Postman

Follow these steps to prepare the request in Postman:

1. Open Postman and create a new HTTP request.
2. Select `POST` as the request method.
3. Enter `https://api.payflow.example/v1/orders` in the request URL field.
4. Open the **Authorization** tab.
5. Select **Bearer Token** as the authentication type.
6. Enter your sample Payflow access token in the token field.
7. Open the **Headers** tab and add the following headers:
   - `Content-Type`: `application/json`
   - `Accept`: `application/json`
8. Open the **Body** tab, select **raw**, and choose **JSON**.
9. Paste the request body shown above.
10. Select **Send** to submit the request.

:::warning
The `api.payflow.example` address uses the reserved `.example` domain. It is not a live API endpoint, so Postman cannot connect to a real Payflow service. The response below is an illustrative example, not the result of an actual API call.
:::

## Expected Response

A successful order-creation request is proposed to return an HTTP `201 Created` status and a JSON response similar to the following:

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

### Understand the Response

- `id`: Unique identifier assigned to the order.
- `amount`: Total order amount in paise.
- `amount_paid`: Amount paid against the order. It is `0` when no payment has been made.
- `amount_due`: Amount remaining to be paid.
- `currency`: Currency used for the order.
- `status`: Initial order status. In this example, it is `created`.

See [Create an Order](../reference/create-an-order.md) for the complete response parameter table.

## Common Errors

The following are proposed error cases for the fictional Payflow API.

| HTTP status | Possible reason | What to check |
|---|---|---|
| `400 Bad Request` | A required field is missing or a field value is invalid. | Check the request body and required parameters. |
| `401 Unauthorized` | The access token is missing or invalid. | Check the Bearer token in the Authorization header. |
| `403 Forbidden` | The application is not permitted to create an order. | Check the permissions associated with the token. |

## Next Steps

You have reviewed the steps for preparing an order request and the structure of an illustrative response.

Continue to [Create an Order](../reference/create-an-order.md) for detailed endpoint information, request parameters, response fields, and error examples.
