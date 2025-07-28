# Clerk-rs: Official Community Rust SDK for Clerk

## Overview

**Clerk-rs** is the official community-maintained Rust SDK for [Clerk](https://clerk.com), a complete authentication and user management solution. This SDK provides comprehensive Rust bindings for the Clerk Backend API, enabling developers to integrate Clerk's authentication services seamlessly into their Rust applications.

## What is Clerk-rs?

Clerk-rs is a full-featured authentication SDK that bridges the gap between Rust applications and Clerk's powerful authentication platform. It offers both low-level API access and high-level middleware integrations for popular Rust web frameworks.

### Key Features

- **Complete API Coverage**: Full Rust bindings for the entire Clerk Backend API
- **Framework Integration**: Built-in middleware support for major Rust web frameworks:
  - **Actix Web**: ClerkMiddleware for request authentication
  - **Axum**: ClerkLayer for tower-based authentication 
  - **Rocket**: ClerkGuard for request guards
  - **Poem**: ClerkPoemMiddleware for poem framework
- **JWT Validation**: Comprehensive JWT token validation and verification
- **Session Management**: Handle user sessions and authentication state
- **Organization Support**: Full support for Clerk's organization features
- **User Management**: Complete user CRUD operations and profile management
- **Email & SMS**: Send transactional emails and SMS messages
- **Webhook Support**: Handle Clerk webhook events
- **Memory-efficient**: Built-in JWKS caching with MemoryCacheJwksProvider

### Core Functionality

#### 1. **API Client**
The core `Clerk` struct provides methods for all HTTP operations:
- GET, POST, PUT, DELETE, PATCH requests
- Parameter-based dynamic endpoints
- Comprehensive error handling
- Async/await support throughout

#### 2. **Authentication Middleware**
Framework-specific middleware that automatically:
- Validates JWT tokens from Authorization headers
- Verifies session cookies for same-origin requests
- Provides authenticated user context to route handlers
- Handles JWKS (JSON Web Key Set) fetching and caching

#### 3. **User & Organization Management**
Complete APIs for managing:
- User creation, updates, and deletion
- Email addresses and phone numbers
- User metadata and profiles
- Organizations and memberships
- Invitations and role management

#### 4. **Communication Services**
- Email API for transactional emails
- SMS API for phone verification
- Template management for customized messages

## Architecture

Clerk-rs is built with a modular architecture:

```
src/
├── apis/           # API endpoint implementations
├── models/         # Data models and structures  
├── validators/     # Framework-specific middleware
├── clerk.rs        # Core client implementation
├── endpoints.rs    # Endpoint definitions
└── lib.rs         # Public API exports
```

### Framework Support

Each supported framework gets its own validator module with idiomatic integration:

- **Actix**: Middleware that wraps routes with authentication
- **Axum**: Tower layer for the axum ecosystem  
- **Rocket**: Request guard for route protection
- **Poem**: Endpoint middleware for poem applications

## Production Ready

Clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - Postgres cloud platform
- [Rezon](https://rezon.ai) - AI platform
- [Gitar](https://gitar.co) - Git analytics
- [Have I Been Squatted](https://haveibeensquatted.com) - Domain security

## Why Clerk-rs?

### For Rust Developers
- **Type Safety**: Leverages Rust's type system for compile-time API correctness
- **Performance**: Efficient async HTTP client with connection pooling
- **Memory Safety**: Zero-cost abstractions with Rust's ownership model
- **Ecosystem Integration**: Works seamlessly with the Rust web ecosystem

### For Authentication
- **Comprehensive**: Covers all aspects of modern authentication
- **Secure**: Built-in JWT validation and session management
- **Scalable**: Designed for high-traffic production applications
- **Developer Experience**: Clean APIs and extensive documentation

## Getting Started

Add clerk-rs to your `Cargo.toml`:

```toml
[dependencies]
clerk-rs = { version = "0.4", features = ["axum"] }
```

Basic usage:

```rust
use clerk_rs::{clerk::Clerk, ClerkConfiguration};

let config = ClerkConfiguration::new(
    None, None, 
    Some("sk_test_your_secret_key".to_string()), 
    None
);
let client = Clerk::new(config);

// Get user list
let users = client.get(ClerkGetEndpoint::GetUserList).await?;
```

## Development Status

Clerk-rs is actively maintained and frequently updated to stay in sync with the official Clerk API. The project welcomes contributions and maintains compatibility with the latest Rust stable releases.

The SDK provides a robust foundation for any Rust application requiring modern authentication and user management capabilities.