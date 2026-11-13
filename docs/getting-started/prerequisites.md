---
sidebar_position: 1
title: Prerequisites
---

# Prerequisites

Before integrating Payflow APIs into an application, make sure you have the required tools, access, and basic technical knowledge.

## Technical Requirements

You should have:

-   Basic knowledge of REST APIs and HTTP methods.
-   Familiarity with JSON data formats.
-   An understanding of HTTP headers, request bodies, and response
    codes.
-   Basic knowledge of how client applications communicate with servers.

## Required Tools

You need the following tools to work with the Payflow API.

### API Testing Tool

Install [Postman](https://www.postman.com/) to create and send HTTP
requests, inspect API responses, and test API behaviour.

You can use another API client if you prefer. The examples in this
documentation use Postman.

### Development Environment

You need an application or development environment from which you can
send HTTPS requests to an API.

## Payflow API Access

For this fictional capstone, assume that a developer receives the
following information during the Payflow account setup process:

-   **API base URL:** `https://api.payflow.example/v1`
- **Access token:** `YOUR_ACCESS_TOKEN` (a placeholder used in documentation examples).

The `.example` domain is reserved for documentation examples. It is not
a live Payflow service.

Do not use real payment details or real credentials in sample requests.

## Before You Begin

Before sending your first API request, make sure that you:

1.  Have an API testing tool installed.
2.  Understand how to create an HTTP request.
3.  Can add request headers and a JSON request body.
4. Understand that the Payflow API base URL and access token shown in this capstone are illustrative examples, not live credentials.

After completing these prerequisites, continue to
[Authentication](./authentication.md) to learn how to authenticate API
requests.
