# Authentication Issues

This page explains common authentication issues you may encounter when sending requests to the fictional Payflow API. It also describes how to check your authentication settings and resolve common problems.

> **Note:** Payflow is a fictional payment gateway created for documentation and learning purposes. The API URLs, request examples, responses, and error details on this website are illustrative. They do not connect to a live payment service.

## 1. Missing Authorization Header

**Issue:** The API returns an authentication error because the request does not include an `Authorization` header.

**Possible causes:**
- The `Authorization` header was not added to the request.
- The header was removed while configuring the request in Postman.
- The header was added to a different request instead of the current one.

**How to resolve it:**
1. Open the request in Postman.
2. Select the **Headers** tab.
3. Add a header named `Authorization`.
4. Set its value to `Bearer YOUR_ACCESS_TOKEN`.
5. Send the request again.

Example:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## 2. Incorrect Bearer Token Format

**Issue:** The API does not accept the authentication header.

**Possible causes:**
- The `Bearer` prefix is missing.
- The token and `Bearer` prefix are not separated by a space.
- The header name or value contains a typing error.

**How to resolve it:**
1. Check that the header name is `Authorization`.
2. Use the format `Bearer YOUR_ACCESS_TOKEN`.
3. Make sure there is one space between `Bearer` and the token value.
4. Remove any extra quotation marks or unintended spaces.
5. Send the request again.

Correct format:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## 3. Placeholder Token Used in the Request

**Issue:** The request uses the example text `YOUR_ACCESS_TOKEN` instead of an actual token value.

**Possible cause:** The placeholder in the documentation was copied into Postman without being replaced.

**How to resolve it:**
1. Check the Authorization header in Postman.
2. Replace `YOUR_ACCESS_TOKEN` with the token value provided by your test environment.
3. Do not include the placeholder text as the token.
4. Send the request again.

**Important:** This capstone uses illustrative examples only. It does not provide real Payflow credentials or a live service from which to obtain an access token.

## 4. Invalid or Expired Token

**Issue:** The API returns `401 Unauthorized` even though an Authorization header is present.

**Possible causes:**
- The token value is incorrect.
- The token has expired.
- The token has been revoked or is no longer valid.

**How to resolve it:**
1. Check that the token was copied correctly.
2. Confirm that the token is valid in the environment where you are testing.
3. If the token has expired or been revoked, obtain a valid token from the relevant service or test environment.
4. Update the Authorization header and send the request again.

The fictional Payflow API examples do not define a token-generation or token-refresh endpoint.

## 5. Understanding 401 and 403 Responses

Authentication and permission errors can have different meanings.

- `401`: Authentication is missing or invalid.
- `403`: The request is not permitted.

| HTTP status | Meaning | What to check |
|---|---|---|
| `401 Unauthorized` | Authentication is missing or invalid. | Authorization header, Bearer format, and token validity. |
| `403 Forbidden` | The request is not permitted. | Whether the authenticated identity has permission to perform the requested operation. |

Adding or changing a token may not resolve a `403 Forbidden` response if the required permission is not available.

## 6. Authorization Header in Postman

Use the following steps to configure Bearer token authentication in Postman:

1. Open your API request.
2. Select the **Authorization** tab.
3. From the **Auth Type** list, select **Bearer Token**.
4. Enter your test token in the **Token** field.
5. Send the request.

Alternatively, you can add the header manually in the **Headers** tab:

| Key | Value |
|---|---|
| `Authorization` | `Bearer YOUR_ACCESS_TOKEN` |

Use one method to configure the Authorization header. Avoid adding conflicting Authorization values in multiple places.

For more information, see [Authentication](../getting-started/authentication.md).

## Troubleshooting Checklist

Before sending an authenticated API request, check the following:

- [ ] The request includes an `Authorization` header.
- [ ] The header value uses the `Bearer` format.
- [ ] There is a space between `Bearer` and the token.
- [ ] The placeholder has been replaced with a valid test token.
- [ ] The token is valid for the environment being used.
- [ ] The request is not being blocked by a permission restriction.
- [ ] No conflicting Authorization values are configured in Postman.

If the issue continues, review the [Authentication](../getting-started/authentication.md) page and the relevant API reference page.
