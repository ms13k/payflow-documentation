---
title: Authentication
sidebar_position: 2
---

# Authentication

Payflow uses bearer token authentication to verify API requests from authorized applications.

A bearer token is sent in the `Authorization` HTTP header. The API uses this token to identify and authenticate the application making the request.

:::warning
Never share your access token or commit real credentials to a public GitHub repository. Use only sample credentials in this fictional capstone project.
:::


## Authorization Header

Include the access token in the `Authorization` header using the following format:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

Replace `YOUR_ACCESS_TOKEN` with the test access token assigned for your Payflow integration.

## Example Request Header

The following example shows the headers sent with a Payflow API request:

```http
POST /v1/payments HTTP/1.1
Host: api.payflow.example
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json
Accept: application/json
```

## Authentication in Postman

To configure bearer token authentication in Postman:

1. Open Postman and create a new HTTP request.
2. Select the **Authorization** tab.
3. From the **Auth Type** list, select **Bearer Token**.
4. Enter your test access token in the **Token** field.
5. Add `Content-Type: application/json` under the **Headers** tab when sending a JSON request.
6. Send the request.

Postman adds the bearer token to the request's `Authorization` header.

## Authentication Errors

If a request cannot be authenticated, the API may return one of the following responses:

| HTTP status code | Meaning | What to check |
|---|---|---|
| `401 Unauthorized` | The request does not contain valid authentication credentials. | Check that the token is present, correctly copied, and valid. |
| `403 Forbidden` | The request is authenticated, but the application is not permitted to perform the operation. | Check the access permissions associated with the token. |

These are proposed response behaviours for the fictional Payflow API. The final API specification should define the exact error response format.

## Security Recommendations

Follow these recommendations when handling API credentials:

- Keep access tokens confidential.
- Do not include tokens in publicly accessible source code.
- Do not commit real credentials to GitHub.
- Store credentials in an appropriate secret-management solution or environment variable.
- Use HTTPS when sending API requests.
- Replace or revoke a token if it is exposed.

After configuring authentication, continue to [Your First API Request](./first-api-request.md).

---
