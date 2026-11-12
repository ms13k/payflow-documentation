---
title: Overview
sidebar_position: 2
---

# Payflow Platform Overview

## What Is Payflow?

Payflow is a payment gateway designed to help businesses accept and manage online payments through REST APIs.

The platform provides a structured way to initiate payment transactions, authorize payments, capture authorized payments, process refunds, and track transaction statuses.

Developers can integrate Payflow APIs into their applications to support payment-related operations without building the entire payment processing workflow from scratch.

:::note
Payflow is a fictional payment gateway created for a documentation capstone. All features, workflows, and API behaviours described here are proposed examples and are not connected to a live payment service.
:::

## Key Features

Payflow's proposed capabilities include:

### 1. Payment Creation

Allows businesses to initiate payment transactions by submitting payment details through an API request.

### 2. Payment Retrieval

Enables applications to retrieve payment information using a unique payment identifier.

### 3. Payment Authorization

Allows businesses to authorize a payment before capturing the authorized amount.

### 4. Payment Capture

Enables businesses to capture previously authorized payments and complete the payment process.

### 5. Refund Management

Supports full and partial refunds for eligible payment transactions.

### 6. Payment Status Tracking

Provides transaction status information so applications can monitor the progress of payments.

### 7. Webhook Notifications

The proposed platform design includes webhook notifications for payment-related events. A dedicated webhook endpoint, event catalogue, and delivery workflow are not defined in this capstone yet.

## How Payflow Works

A typical proposed Payflow payment workflow involves the following steps:

1. The customer initiates a payment through a business application.
2. The business application sends a payment request to the Payflow API.
3. Payflow validates the request and processes the payment operation.
4. Payflow returns an API response containing the payment details and transaction status.
5. The business application uses the response to update the payment information.

Webhook notifications are a proposed additional communication channel. Their implementation and event details are not defined in the current capstone documentation.

## High-Level Payment Workflow

The following sequence represents the basic interaction between a business application and the Payflow API:

**Business Application → Payflow API → Payment Processing → API Response → Business Application**

## API Architecture

Payflow follows a REST-based API architecture that allows applications to communicate with the platform through standard HTTP requests and responses.

The proposed API design follows these principles:

- **HTTP Methods:** Uses standard HTTP methods such as GET, POST, and DELETE to perform API operations.
- **JSON Data Format:** Uses JSON for sending API requests and receiving responses.
- **Resource-Based Endpoints:** Organizes API endpoints around payment-related resources.
- **HTTP Status Codes:** Uses standard HTTP status codes to indicate the outcome of API requests.
- **API Authentication:** Uses bearer token authentication to verify API requests.

## Security and Authentication

The proposed Payflow API uses bearer token authentication through the HTTP `Authorization` header.

Applications must include an access token in API requests to access protected resources. In this capstone, `YOUR_ACCESS_TOKEN` is a placeholder used in documentation examples; it is not a working credential.

API credentials should be stored securely and must not be exposed in client-side code or shared publicly.

For details, see [Authentication](../getting-started/authentication.md).

## Payment Lifecycle

A payment transaction can have different statuses depending on its processing stage. The proposed payment statuses are:

- **`pending`:** The payment has been created and is awaiting the next processing step.
- **`authorized`:** The payment has been authorized and can proceed to capture.
- **`captured`:** The full authorized amount has been captured.
- **`failed`:** The payment attempt was not successful.

Refunds are separate resources associated with captured payments. The proposed Create a Refund API initially returns a `pending` status. See [Understanding Payment Statuses](../guides/understanding-payment-statuses.md) for details.

## What's Next?

Now that you understand the Payflow platform and its capabilities, explore the following documentation:

- **[Introduction](./introduction.md):** Understand the purpose and structure of the Payflow documentation.
- **[Getting Started](../getting-started/prerequisites.md):** Learn about the prerequisites and authentication requirements.
- **[API Reference](../api-reference/create-order.md):** Explore the proposed API endpoints, request parameters, and response formats.
- **[Payment Integration Workflow](../guides/payment-integration-workflow.md):** Understand the payment process.
- **[Handling Payment Errors](../guides/handling-payment-errors.md):** Learn how to understand and troubleshoot API errors.
- **[Understanding Payment Statuses](../guides/understanding-payment-statuses.md):** Learn about order, payment, and refund statuses.

These sections provide the proposed technical information developers need to understand and work with the Payflow APIs.
