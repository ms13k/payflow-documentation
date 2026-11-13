# Payment Failures

This page explains common payment issues you may encounter when working with the fictional Payflow API. It describes how to review payment status, check request details, and troubleshoot common payment operation errors.

> **Note:** Payflow is a fictional payment gateway created for documentation and learning purposes. The API URLs, request examples, responses, and error details on this website are illustrative. They do not connect to a live payment service.

## 1. Payment Creation Fails

**Issue:** The API does not create a payment successfully.

**Possible causes:**
- The request body is missing a required field.
- The `order_id` does not identify the intended order.
- The amount is invalid.
- The currency value does not match the documented format.
- The request body contains invalid JSON.

**How to resolve it:**
1. Check that the request uses `POST /payments`.
2. Confirm that the request includes the required `order_id`, `amount`, `currency`, and `payment_method` fields.
3. Check that the amount is a valid positive value expressed in the smallest currency unit.
4. Confirm that the payment method uses one of the documented example values: `card`, `netbanking`, or `upi`.
5. Compare your request with the example in [Create a Payment](../api-reference/create-payment.md).

## 2. Payment Remains Pending

**Issue:** The payment status is `pending` and has not moved to the next documented status.

**What to check:**
- Confirm that the payment was created successfully.
- Check the payment ID returned in the create-payment response.
- Review the payment status before attempting another operation.
- Confirm that you are following the documented payment workflow.

**How to resolve it:**
1. Review the response from the create-payment request.
2. Confirm that you are using the correct payment ID.
3. Follow the documented authorization step before attempting to capture the payment.
4. Do not assume that a pending payment has been authorized or captured.

See [Understanding Payment Statuses](../guides/understanding-payment-statuses.md) for the documented payment status values.

## 3. Payment Authorization Fails

**Issue:** The authorization request does not complete successfully.

**Possible causes:**
- The payment ID is missing or incorrect.
- The payment resource cannot be found.
- The request uses an incorrect endpoint or HTTP method.
- The payment is not in a state that allows the requested operation.

**How to resolve it:**
1. Confirm that the payment was created successfully.
2. Copy the payment ID from the create-payment response.
3. Check that the request uses `POST /payments/{payment_id}/authorize`.
4. Confirm that the request includes the required authentication header.
5. Review the HTTP status code and error response.

See [Authorize a Payment](../api-reference/authorize-payment.md) for endpoint details.

## 4. Payment Capture Fails

**Issue:** The API does not capture the payment.

**Possible causes:**
- The payment has not been authorized.
- The payment ID is incorrect.
- The capture amount is invalid.
- The payment is not in a state that allows capture.

**How to resolve it:**
1. Confirm that the payment status is `authorized`.
2. Check that the payment ID in the endpoint path is correct.
3. Confirm that the request uses `POST /payments/{payment_id}/capture`.
4. If you include an amount, check that it is valid and does not exceed the available amount.
5. Review the response and HTTP status code before taking further action.

The documented capture workflow requires an authorized payment. A successful full capture returns the payment status `captured`.

See [Capture a Payment](../api-reference/capture-payment.md) for details.

## 5. Refund Request Fails

**Issue:** The API does not create a refund successfully.

**Possible causes:**
- The payment ID is missing or incorrect.
- The refund amount is invalid or not positive.
- The requested refund amount exceeds the amount available to refund.
- The request body is missing a required field.

**How to resolve it:**
1. Confirm that the payment ID is correct.
2. Check that the refund amount is positive and expressed in the smallest currency unit.
3. Confirm that the requested amount does not exceed the available amount.
4. Check the request body against the documented refund example.
5. Review the HTTP status code and error response.

A successfully created refund has an initial status of `pending` in the Payflow examples. The examples do not define later refund statuses.

See [Create a Refund](../api-reference/create-refund.md) for details.

## 6. Understanding Payment Error Responses

Review the HTTP status code and response body when a payment operation fails.

| HTTP status | What it may indicate | What to check |
|---|---|---|
| `400 Bad Request` | The request contains invalid data. | Required fields, amount, currency, and JSON format. |
| `401 Unauthorized` | Authentication is missing or invalid. | Authorization header and Bearer token. |
| `403 Forbidden` | The request is not permitted. | Whether the request has permission to perform the operation. |
| `404 Not Found` | The requested resource was not found. | Payment ID, order ID, and endpoint path. |
| `409 Conflict` | The operation conflicts with the resource's current state. | Payment status and operation sequence. |
| `500 Internal Server Error` | An unexpected server-side error occurred. | Review the response and try again later if appropriate. |

For more information, see [Handling Payment Errors](../guides/handling-payment-errors.md).

## 7. Check the Payment Workflow

Payment operations must follow the documented sequence:

1. Create an order.
2. Create a payment for the order.
3. Authorize the payment.
4. Capture the authorized payment.
5. Create a refund if a refund is required.

Before moving to the next step, review the response and confirm the current payment status.

See [Payment Integration Workflow](../guides/payment-integration-workflow.md) for the complete workflow.

## Important: Avoid Unverified Retries

Do not repeatedly retry a payment operation without checking its current status. The fictional Payflow API documentation does not define an idempotency-key mechanism, so safe retry behavior is not specified.

Before retrying a failed request:
1. Review the response and HTTP status code.
2. Review the latest response from the payment request. When applicable, use the documented Retrieve an Order endpoint to check order details.
3. Correct the request if it contains invalid data.
4. Avoid assuming that a previous request did not take effect unless the response confirms the result.

## Payment Failure Troubleshooting Checklist

Before reporting or retrying a payment issue, check the following:

- [ ] The API endpoint and HTTP method are correct.
- [ ] The Authorization header contains a valid Bearer token for the test environment.
- [ ] The request body contains all required fields.
- [ ] The amount is valid and expressed in the smallest currency unit.
- [ ] The correct order ID or payment ID is used.
- [ ] The payment status supports the operation being requested.
- [ ] The HTTP status code and error response have been reviewed.
- [ ] The latest available response has been reviewed before retrying an operation.

If the issue continues, review the relevant API reference and guide pages to confirm that the request follows the documented Payflow workflow.
