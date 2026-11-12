---
title: Understanding Payment Statuses
sidebar_position: 3
---

# Understanding Payment Statuses

## Introduction

This guide explains the proposed order, payment, and refund statuses used in the Payflow documentation. Understanding these statuses helps developers interpret API responses and follow the payment workflow.

Payflow is a fictional payment gateway created for a documentation capstone. The statuses and workflow described here are proposed examples, not live payment-service behaviour.

## Order Statuses

An order represents the amount a customer is expected to pay. The proposed Payflow order statuses are:

| Status | Description |
|---|---|
| `created` | The order has been created. |
| `attempted` | At least one payment attempt has been made against the order. |
| `paid` | The order amount has been paid. |

The Retrieve an Order API returns the current order status along with fields such as `amount`, `amount_paid`, and `amount_due`.

See [Retrieve an Order](../api-reference/retrieve-order.md).

## Payment Statuses

A payment represents an attempt to pay an order. The proposed Payflow payment workflow uses these statuses:

| Status | Description |
|---|---|
| `pending` | The payment has been created and is awaiting the next processing step. |
| `authorized` | The payment has been authorized and can proceed to capture. |
| `captured` | The full authorized amount has been captured. |
| `failed` | The payment attempt was not successful. |

The API Reference pages describe the statuses returned by their example operations:

- [Create a Payment](../api-reference/create-payment.md)
- [Authorize a Payment](../api-reference/authorize-payment.md)
- [Capture a Payment](../api-reference/capture-payment.md)

The exact lifecycle and any additional transitions are not implemented by a live service in this capstone.

## Refund Statuses

A refund is a separate resource associated with a captured payment. The proposed Create a Refund API initially returns:

| Status | Description |
|---|---|
| `pending` | The refund request has been created but has not yet reached a completed status. |

The current Payflow API Reference defines the initial `pending` refund status only. It does not define additional completed or failed refund statuses or an endpoint for retrieving refund status. Do not assume those behaviours from this example.

See [Create a Refund](../api-reference/create-refund.md).

## How the Statuses Fit Together

The proposed high-level workflow is:

1. Create an order. Its initial status is `created`.
2. Create a payment for the order. Its initial status is `pending`.
3. Authorize the payment. Its status becomes `authorized`.
4. Capture the authorized payment. Its status becomes `captured` after a successful full capture.
5. If required, create a refund for a captured payment. The refund initially has a `pending` status.

Order, payment, and refund statuses describe different resources. For example, a refund's `pending` status does not mean that the original payment is pending.

## Amount Fields and Statuses

The order response includes these amount fields:

| Field | Description |
|---|---|
| `amount` | Total order amount in the smallest currency unit. |
| `amount_paid` | Amount paid against the order in the smallest currency unit. |
| `amount_due` | Amount remaining to be paid in the smallest currency unit. |

For INR, an amount of `5000` represents ₹50.00.

## Important Notes

- Do not treat order, payment, and refund statuses as interchangeable.
- A payment must be authorized before it can be captured in the proposed workflow.
- A refund can be created only for a captured payment in the proposed workflow.
- A `pending` refund response confirms that a refund request was created; it does not confirm completion.
- The statuses in this guide are illustrative and are not connected to a live payment service.

## Related Documentation

- [Payment Integration Workflow](./payment-integration-workflow.md)
- [Handling Payment Errors](./handling-payment-errors.md)
- [Create an Order](../api-reference/create-order.md)
- [Retrieve an Order](../api-reference/retrieve-order.md)
- [Create a Payment](../api-reference/create-payment.md)
- [Capture a Payment](../api-reference/capture-payment.md)
- [Create a Refund](../api-reference/create-refund.md)
