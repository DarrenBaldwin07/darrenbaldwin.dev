# clerk-rs: Official Community Rust SDK for Clerk

## Overview

clerk-rs is the official community-maintained Rust SDK for [Clerk](https://clerk.com), a modern authentication and user management service. This comprehensive SDK provides Rust developers with type-safe, async-first access to Clerk's authentication APIs and seamless integration with popular Rust web frameworks.

## What is clerk-rs?

clerk-rs is a full-featured Rust client library that enables developers to:

- **Authenticate users** in Rust web applications using Clerk's authentication service
- **Manage users, organizations, and sessions** through Clerk's Backend API
- **Protect routes and endpoints** with JWT-based authentication middleware
- **Integrate seamlessly** with major Rust web frameworks like Actix Web, Axum, Rocket, and Poem

The SDK is built on top of Clerk's official OpenAPI specification and provides both low-level API access and high-level framework integrations.

## Key Features

### 🔐 **Complete Authentication Support**
- JWT token validation and verification
- Session management and validation
- Cookie-based authentication support
- User management (create, update, delete users)
- Organization and membership management
- Email and SMS messaging capabilities

### 🚀 **Framework Integrations**
The SDK provides native middleware and guards for popular Rust web frameworks:

- **Actix Web**: Middleware-based authentication (`ClerkMiddleware`)
- **Axum**: Layer-based route protection (`ClerkLayer`) 
- **Rocket**: Request guard system (`ClerkGuard`)
- **Poem**: Middleware integration (`ClerkPoemMiddleware`)

### 🛠️ **Developer Experience**
- **Type-safe API**: Full Rust type safety with auto-generated models
- **Async/await support**: Built on modern async Rust patterns
- **Comprehensive examples**: Ready-to-use examples for each framework
- **Memory-cached JWKS**: Efficient JWT key caching with `MemoryCacheJwksProvider`
- **Flexible configuration**: Support for various authentication flows

### 📡 **API Coverage**
Complete coverage of Clerk's Backend API including:
- User management and authentication
- Organization and membership management
- Email and phone number verification
- JWT template management
- Webhook handling
- Admin and instance management

## How It Works

### Basic Setup
```rust
use clerk_rs::{clerk::Clerk, ClerkConfiguration};

let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);
let client = Clerk::new(config);
```

### Framework Integration Example (Axum)
```rust
use axum::{routing::get, Router};
use clerk_rs::{
    clerk::Clerk,
    validators::{axum::ClerkLayer, jwks::MemoryCacheJwksProvider},
    ClerkConfiguration,
};

let app = Router::new()
    .route("/protected", get(protected_handler))
    .layer(ClerkLayer::new(MemoryCacheJwksProvider::new(clerk), None, true));
```

## Use Cases

- **Web Applications**: Secure Rust web apps with user authentication
- **API Services**: Protect REST APIs and microservices
- **SaaS Platforms**: Multi-tenant applications with organization support
- **Enterprise Applications**: Complex authentication requirements with custom JWT templates

## Production Ready

clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - Postgres platform
- [Rezon](https://rezon.ai) - AI platform
- [Gitar](https://gitar.co) - Developer tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security service

## Why Choose clerk-rs?

1. **Official Community Support**: Maintained with direct input from the Rust community
2. **Framework Agnostic**: Works with any Rust web framework, with specialized support for major ones
3. **Production Tested**: Used by real companies in production environments
4. **Active Development**: Regularly updated to match Clerk API changes
5. **Rust-First Design**: Built specifically for Rust developers with idiomatic patterns

clerk-rs bridges the gap between Clerk's powerful authentication service and Rust's performance and safety, making it the ideal choice for Rust developers who want enterprise-grade authentication without compromising on performance or type safety.