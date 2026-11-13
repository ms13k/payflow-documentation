# Common Integration Issues

This page explains common issues you may encounter while integrating with the fictional Payflow API and provides steps to help you troubleshoot them.

> **Note:** Payflow is a fictional payment gateway created for documentation and learning purposes. The API URLs, request examples, responses, and error details on this website are illustrative. They do not connect to a live payment service.

## 1. Incorrect API URL

**Issue:** The API request returns an error because the request URL is incorrect.

**Possible causes:**
- The base URL is misspelled.
- The API version is missing from the URL.
- The endpoint path or resource ID is incorrect.

**How to resolve it:**
1. Check that you are using the documented base URL: `https://api.payflow.example/v1`.
2. Confirm that the endpoint path matches the API reference.
3. Check that the resource ID is included where the endpoint requires it.

For example, to retrieve an order, use:

```http
GET https://api.payflow.example/v1/orders/order_7f8a9b2c
```

See [Retrieve an Order](../api-reference/retrieve-order.md) for details.

## 2. Missing or Incorrect HTTP Method

**Issue:** The API request does not perform the expected operation.

**Possible causes:**
- The request uses the wrong HTTP method.
- The method does not match the endpoint documentation.

**How to resolve it:**
1. Check the HTTP method for the endpoint.
2. Use the method specified in the API reference.
3. Send the request again with the correct method.

For example:

| Operation | HTTP method | Endpoint |
|---|---|---|
| Create an order | `POST` | `/orders` |
| Retrieve an order | `GET` | `/orders/{order_id}` |
| Create a payment | `POST` | `/payments` |
| Authorize a payment | `POST` | `/payments/{payment_id}/authorize` |
| Capture a payment | `POST` | `/payments/{payment_id}/capture` |
| Create a refund | `POST` | `/payments/{payment_id}/refunds` |

## 3. Missing or Incorrect Authorization Header

**Issue:** The API returns an authentication error.

**Possible causes:**
- The `Authorization` header is missing.
- The Bearer token is missing.
- The header uses an incorrect format.
- The example placeholder has not been replaced with an appropriate token.

**How to resolve it:**
1. Add an `Authorization` header to the request.
2. Use the Bearer token format shown below.
3. Replace `YOUR_ACCESS_TOKEN` with the token value used in your test environment.

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

For more information, see [Authentication](../getting-started/authentication.md).

## 4. Incorrect Content-Type Header

**Issue:** The API cannot process the request body as expected.

**Possible cause:** The request sends JSON data without specifying the correct content type.

**How to resolve it:**

For requests that include a JSON body, add this header:

```http
Content-Type: application/json
```

Also check that the request body contains valid JSON.

## 5. Invalid Request Body or Missing Fields

**Issue:** The API returns a validation error.

**Possible causes:**
- A required field is missing.
- A field name is misspelled.
- A value uses an unsupported format.
- The request body is not valid JSON.

**How to resolve it:**
1. Open the relevant API reference page.
2. Compare your request body with the documented example.
3. Check all required fields and their expected data types.
4. Check the spelling and format of each field.
5. Send the corrected request.

For example, a create-order request must include the required order amount and currency fields as described in [Create an Order](../api-reference/create-order.md).

## 6. Incorrect Amount or Currency

**Issue:** A payment or refund request is rejected because the amount or currency is invalid.

**Possible causes:**
- The amount is zero or negative where a positive amount is required.
- The amount is not expressed in the smallest currency unit.
- The currency value does not match the documented format.
- A refund amount is greater than the amount available to refund.

**How to resolve it:**
1. Check the amount requirements on the relevant API reference page.
2. Send amounts in the smallest currency unit.
3. For INR, express the amount in paise. For example, `5000` represents ₹50.00.
4. For a refund, ensure that the requested amount does not exceed the available amount.

See [Create a Payment](../api-reference/create-payment.md) and [Create a Refund](../api-reference/create-refund.md).

## 7. Incorrect or Missing Resource ID

**Issue:** The API cannot find the order or payment you are trying to access.

**Possible causes:**
- The order ID or payment ID is missing.
- The ID contains a typing error.
- The ID belongs to a different example or test request.

**How to resolve it:**
1. Copy the resource ID from the response returned when the resource was created.
2. Check that you are using the correct ID type.
3. Include the ID in the endpoint path.
4. Retry the request.

For example, use an order ID with the retrieve-order endpoint and a payment ID with payment endpoints.

## 8. Payment Operation Is Performed in the Wrong Sequence

**Issue:** An authorization or capture request cannot be completed.

**Possible cause:** The payment operation is being performed before the payment reaches the required status.

**How to resolve it:**
1. Create an order.
2. Create a payment for that order.
3. Authorize the payment.
4. Capture the authorized payment.
5. Create a refund if a refund is required.

The documented capture operation requires the payment to be authorized first. See [Payment Integration Workflow](../guides/payment-integration-workflow.md).

## 9. General HTTP Error Checks

When a request fails, check the HTTP status code and the error response.

| HTTP status | What it may indicate | What to check |
|---|---|---|
| `400 Bad Request` | Invalid request data | Required fields, data types, amount, and JSON format |
| `401 Unauthorized` | Missing or invalid authentication | Bearer token and Authorization header |
| `403 Forbidden` | The request is not permitted | Access permissions for the requested operation |
| `404 Not Found` | The requested resource was not found | Endpoint path and resource ID |
| `409 Conflict` | The operation conflicts with the resource's current state | Payment status and operation sequence |
| `500 Internal Server Error` | An unexpected server-side error | Review the response and try again later if appropriate |

Do not repeatedly retry a payment operation without checking its current status. The fictional Payflow API documentation does not define an idempotency-key mechanism, so safe retry behavior is not specified.

For more information, see [Handling Payment Errors](../guides/handling-payment-errors.md).

## Troubleshooting Checklist

Before sending an API request, check the following:

- [ ] The base URL and endpoint path are correct.
- [ ] The HTTP method matches the API reference.
- [ ] The Authorization header contains a Bearer token.
- [ ] The `Content-Type` header is set to `application/json` when sending a JSON body.
- [ ] The request body contains valid JSON and all required fields.
- [ ] Amounts use the smallest currency unit.
- [ ] The correct order ID or payment ID is used.
- [ ] Payment operations follow the documented workflow.

If the issue continues, review the relevant API reference and guide pages to confirm that your request matches the documented examples.
