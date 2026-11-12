---
title: Handling Payment Errors
sidebar_position: 2
---

# Handling Payment Errors

## Introduction

This guide explains the HTTP status codes and error responses used in the proposed Payflow API examples. Use it to understand why a request may fail and what to check before trying again.

Payflow is a fictional payment gateway created for a documentation capstone. The error codes, messages, and behaviours in this guide are proposed examples and do not describe a live payment service.

## Error Response Format

The proposed Payflow APIs use a JSON object to describe an error.

Example:

```json
{
  "error": {
    "code": "ORDER_NOT_FOUND",
    "message": "The specified order could not be found.",
    "field": "order_id"
  }
}
```

The `code` identifies the error, `message` explains the problem, and `field` identifies the related request field when applicable.

## Common HTTP Status Codes

| Status code | Meaning | What to check |
|---|---|---|
| `400 Bad Request` | The request contains an invalid value or cannot be processed in its current form. | Check required fields, data types, amount values, and the request body format. |
| `401 Unauthorized` | The access token is missing, invalid, or expired. | Check the Bearer token in the `Authorization` header. |
| `403 Forbidden` | The authenticated application does not have permission to perform the operation. | Check whether the application is permitted to access the requested resource or operation. |
| `404 Not Found` | The specified order or payment does not exist. | Check the resource identifier in the request URL. |
| `409 Conflict` | The requested operation conflicts with the current resource state or available amount. | Check the current payment status and the amount available for the operation. |
| `500 Internal Server Error` | An unexpected server-side error occurred. | Review the request details and try again later if the service is available. |

The exact status codes supported by each endpoint are listed in its API Reference page.

## Common Payflow Error Examples

### Invalid or Missing Access Token

**Possible status code:** `401 Unauthorized`

Check that the request includes the following header:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Make sure the token is present and valid. Replace `YOUR_ACCESS_TOKEN` with a valid access token before sending the request.

### Resource Not Found

**Possible status code:** `404 Not Found`

Example error code:

`ORDER_NOT_FOUND`

Check that the `order_id` or `payment_id` in the request URL matches the identifier returned by the relevant create operation.

### Invalid Amount

**Possible status code:** `400 Bad Request`

For payment and refund operations, check that:

- The amount is a positive integer where required.
- The amount is expressed in the smallest currency unit.
- The amount does not exceed the amount available for the operation.

For INR, `2000` represents ₹20.00.

### Payment Cannot Be Captured

**Possible status code:** `409 Conflict`

The proposed Payflow workflow requires a payment to have an `authorized` status before it can be captured.

Before calling the Capture a Payment API, check that the payment was successfully authorized.

### Refund Cannot Be Created

**Possible status code:** `409 Conflict`

The proposed Create a Refund API accepts captured payments. Check that:

- The payment has been captured.
- The payment has an available amount to refund.
- The refund amount is greater than zero.
- The refund amount does not exceed the amount available for refund.

## Troubleshooting Checklist

Before submitting a request, check the following:

- [ ] The request uses the correct HTTP method.
- [ ] The request URL contains the correct order or payment identifier.
- [ ] The `Authorization` header contains a Bearer token.
- [ ] The `Content-Type` header is `application/json` when sending a JSON request body.
- [ ] Required parameters are included.
- [ ] Parameter names and data types match the API Reference.
- [ ] Monetary amounts use the smallest currency unit.
- [ ] The payment is in a state that allows the requested operation.

## Important Note About Retrying Requests

Do not assume that every failed request can be safely repeated. First review the error response and the current resource state. This is particularly important for operations that create payments, capture payments, or create refunds.

The Payflow capstone does not define an idempotency-key mechanism. Do not assume that repeated requests will be treated as a single operation.

## Related Documentation

- [Authentication](../getting-started/authentication.md)
- [Payment Integration Workflow](./payment-integration-workflow.md)
- [Create a Payment](../api-reference/create-payment.md)
- [Authorize a Payment](../api-reference/authorize-payment.md)
- [Capture a Payment](../api-reference/capture-payment.md)
- [Create a Refund](../api-reference/create-refund.md)
