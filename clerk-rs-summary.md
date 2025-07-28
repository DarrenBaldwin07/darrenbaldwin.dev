# Clerk-rs: Official Community Rust SDK for Clerk Authentication

## Overview

**clerk-rs** is the official community-maintained Rust SDK for [Clerk](https://clerk.com), a modern authentication and user management platform. This SDK provides Rust developers with a comprehensive toolkit to integrate Clerk's powerful authentication services into their applications, supporting both API interactions and middleware-based route protection across popular Rust web frameworks.

## What is Clerk-rs?

clerk-rs serves as a bridge between Rust applications and Clerk's authentication infrastructure, offering:

- **Complete API Coverage**: Full access to Clerk's Backend API for user management, organization handling, session control, and more
- **Framework Integration**: Built-in middleware support for popular Rust web frameworks including Actix Web, Axum, Rocket, and Poem
- **JWT Validation**: Robust JWT token validation with JWKS (JSON Web Key Set) support for secure authentication
- **Session Management**: Support for both Bearer token and session cookie-based authentication
- **Type Safety**: Comprehensive Rust types for all Clerk API models and responses

## Core Features

### 1. **HTTP Client Integration**
- Direct HTTP requests to Clerk API endpoints with proper authentication
- Support for GET, POST, PUT, PATCH, and DELETE operations
- Automatic request/response serialization using serde

### 2. **Authentication Middleware**
- **Actix Web**: `ClerkMiddleware` for protecting routes
- **Axum**: `ClerkLayer` for route-level authentication
- **Rocket**: `ClerkGuard` for request guards
- **Poem**: `ClerkPoemMiddleware` for endpoint protection

### 3. **JWT Security**
- RS256 algorithm support (Clerk's default)
- Automatic JWKS key fetching and caching
- Token validation with expiration and signature verification
- Custom JWT template support

### 4. **Organization Support**
- Multi-tenant organization management
- Role-based access control (RBAC)
- Permission-based authorization
- Organization membership management

### 5. **User Management**
- Complete user lifecycle management (create, read, update, delete)
- Email and phone number verification
- Multi-factor authentication (MFA) support
- User metadata and profile management

## Key Components

### ClerkConfiguration
Central configuration object that manages:
- API credentials (secret keys)
- Base URL configuration
- HTTP client settings
- Authentication parameters

### ClerkAuthorizer
Core authorization engine that:
- Validates JWT tokens from Authorization headers or session cookies
- Fetches and caches JWKS keys
- Provides role and permission checking capabilities
- Handles authentication errors gracefully

### Framework Validators
Specialized middleware components for each supported framework:
- Extract authentication tokens from requests
- Validate tokens against Clerk's JWKS
- Inject user claims into request context
- Provide declarative route protection

## API Coverage

The SDK provides comprehensive coverage of Clerk's Backend API including:

- **Users API**: User creation, updates, deletion, and queries
- **Sessions API**: Session management and validation
- **Organizations API**: Organization CRUD operations and settings
- **Invitations API**: Organization invitation management
- **JWT Templates API**: Custom JWT template configuration
- **Webhooks API**: Webhook signature verification
- **Instance Settings**: Clerk instance configuration management

## Usage Patterns

### 1. **Direct API Calls**
```rust
let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);
let client = Clerk::new(config);
let users = client.get(ClerkGetEndpoint::GetUserList).await?;
```

### 2. **Route Protection with Middleware**
```rust
// Actix Web example
App::new()
    .wrap(ClerkMiddleware::new(MemoryCacheJwksProvider::new(clerk), None, true))
    .route("/protected", web::get().to(protected_handler))
```

### 3. **Permission-Based Authorization**
```rust
fn protected_handler(jwt: ClerkGuard<MemoryCacheJwksProvider>) -> &'static str {
    if jwt.org.as_ref().unwrap().has_permission("admin:read") {
        "Admin access granted"
    } else {
        "Access denied"
    }
}
```

## Production Ready

clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - Postgres cloud platform
- [Rezon](https://rezon.ai) - AI-powered applications
- [Gitar](https://gitar.co) - Developer tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security services

The SDK is regularly updated to maintain compatibility with Clerk's evolving API and includes comprehensive test coverage for all major functionality.

## Why Choose Clerk-rs?

- **Type Safety**: Leverages Rust's type system for compile-time safety
- **Performance**: Efficient async/await support with minimal overhead
- **Security**: Built-in JWT validation and secure key management
- **Flexibility**: Works with multiple web frameworks and authentication patterns
- **Community Driven**: Actively maintained with regular updates and community contributions
- **Production Tested**: Used by real-world applications in production environments

clerk-rs makes it easy for Rust developers to integrate modern authentication into their applications while maintaining the performance and safety characteristics that make Rust an excellent choice for backend development.