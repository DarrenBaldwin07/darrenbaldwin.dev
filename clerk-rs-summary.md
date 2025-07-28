# Clerk-rs SDK Summary

**Clerk-rs** is the official community-maintained Rust SDK for the [Clerk](https://clerk.com) authentication platform. This comprehensive SDK provides developers with a robust, type-safe way to integrate Clerk's powerful authentication and user management features into Rust applications.

## What is Clerk-rs?

Clerk-rs is a complete Rust binding for the Clerk Backend API that enables developers to:

- **Authenticate Users**: Seamlessly integrate authentication flows into Rust web applications
- **Manage Users**: Create, update, delete, and query user accounts programmatically
- **Handle Sessions**: Validate and manage user sessions with JWT token verification
- **Organization Management**: Support for multi-tenant applications with organization and membership management
- **Email & SMS**: Send transactional emails and SMS messages through Clerk's infrastructure
- **Web Framework Integration**: Built-in middleware and guards for popular Rust web frameworks

## Key Features

### 🔐 **Complete API Coverage**
- Full implementation of the Clerk Backend API
- Support for all major Clerk features including users, sessions, organizations, invitations, and more
- Type-safe request/response models generated from Clerk's OpenAPI specification

### 🚀 **Framework Integration**
Built-in support for popular Rust web frameworks:
- **Actix Web**: Middleware for request authentication
- **Axum**: Layer-based authentication guards
- **Rocket**: Request guards for protected routes
- **Poem**: Middleware integration for v3

### 🛡️ **JWT Validation**
- Automatic JWT token verification using Clerk's JWKS
- Memory-cached JWKS provider for optimal performance
- Support for session cookie validation on same-origin requests

### ⚡ **Async/Await Support**
- Fully asynchronous API built on `tokio`
- Non-blocking HTTP requests using `reqwest`
- Efficient concurrent request handling

## Architecture

The SDK is structured around several core modules:

- **`clerk`**: Main client for making authenticated requests to Clerk's API
- **`apis`**: Generated API endpoints for all Clerk services (users, sessions, organizations, etc.)
- **`models`**: Type-safe data structures for all API requests and responses
- **`validators`**: Framework-specific middleware and guards for authentication
- **`endpoints`**: Predefined endpoint configurations for common operations

## Use Cases

### Authentication Middleware
Protect your Rust web application routes with automatic JWT validation:

```rust
// Actix Web example
app.wrap(ClerkMiddleware::new(MemoryCacheJwksProvider::new(clerk), None, true))

// Axum example  
app.layer(ClerkLayer::new(MemoryCacheJwksProvider::new(clerk), None, true))
```

### User Management
Programmatically manage users and their data:

```rust
let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);
let client = Clerk::new(config);
let users = client.get(ClerkGetEndpoint::GetUserList).await?;
```

### Organization Support
Build multi-tenant applications with organization management:

```rust
// Create organizations, manage memberships, handle invitations
let org = client.post(ClerkPostEndpoint::CreateOrganization, create_org_request).await?;
```

## Production Ready

Clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - Postgres platform
- [Rezon](https://rezon.ai) - AI platform  
- [Gitar](https://gitar.co) - Developer tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security service

The SDK is regularly updated to stay in sync with Clerk's official API changes and includes comprehensive documentation, examples, and community support.

## Getting Started

Add clerk-rs to your Cargo.toml:

```toml
[dependencies]
clerk-rs = "0.4.1"
```

Enable framework-specific features as needed:

```toml
clerk-rs = { version = "0.4.1", features = ["actix"] }  # For Actix Web
clerk-rs = { version = "0.4.1", features = ["axum"] }   # For Axum
clerk-rs = { version = "0.4.1", features = ["rocket"] } # For Rocket
```

The SDK provides both high-level API methods and low-level HTTP request builders, making it suitable for everything from simple authentication checks to complex user management workflows.