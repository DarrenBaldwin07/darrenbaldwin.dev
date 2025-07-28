# clerk-rs - Official Community Rust SDK for Clerk

**clerk-rs** is the official community-maintained Rust SDK for the [Clerk](https://clerk.com) authentication and user management platform. This library provides a comprehensive interface to interact with Clerk's Backend API from Rust applications.

## What is clerk-rs?

clerk-rs is a powerful authentication SDK that enables Rust developers to integrate Clerk's authentication services into their applications. It offers both low-level API access and high-level middleware integrations for popular Rust web frameworks.

## Key Features

### 🔐 Complete API Coverage
- Full support for Clerk's Backend API endpoints
- User management (create, update, delete users)
- Organization management and memberships
- Session handling and validation
- Email and SMS messaging
- JWT template management
- Webhook handling

### 🚀 Framework Integration
The SDK provides seamless middleware integration for popular Rust web frameworks:
- **Actix Web** - Middleware for protecting routes with JWT validation
- **Axum** - Layer-based authentication with cookie and JWT support
- **Rocket** - Guard-based authentication system
- **Poem** - Middleware support for authentication

### 🛡️ Security Features
- JWT validation and verification
- JWKS (JSON Web Key Set) caching with memory-based provider
- Session cookie validation for same-origin requests
- Secure token handling and validation

### ⚡ Developer Experience
- Async/await support throughout
- Type-safe API with comprehensive error handling
- Extensive documentation and examples
- Built on reliable dependencies (reqwest, serde, jsonwebtoken)

## How It Works

### 1. Basic API Usage
```rust
let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);
let client = Clerk::new(config);
let users = client.get(ClerkGetEndpoint::GetUserList).await?;
```

### 2. Framework Middleware
```rust
// Axum example
let app = Router::new()
    .route("/protected", get(handler))
    .layer(ClerkLayer::new(MemoryCacheJwksProvider::new(clerk), None, true));
```

### 3. User Authentication
The middleware automatically validates JWTs from:
- Authorization headers (`Bearer token`)
- Session cookies for same-origin requests
- Provides access to user data in route handlers

## Architecture

The SDK is structured around several key components:

- **Clerk Client**: Core HTTP client for API communication
- **Validators**: Framework-specific middleware for authentication
- **Models**: Type-safe representations of Clerk API objects
- **Endpoints**: Strongly-typed API endpoint definitions
- **JWKS Provider**: Secure key management for JWT validation

## Production Ready

clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - Cloud Postgres platform
- [Rezon](https://rezon.ai) - AI platform
- [Gitar](https://gitar.co) - Development tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security service

The SDK is regularly updated to maintain compatibility with Clerk's evolving API and follows Rust best practices for security and performance.

## Why Use clerk-rs?

1. **Rust-Native**: Built specifically for Rust with idiomatic APIs
2. **Framework Agnostic**: Works with multiple web frameworks
3. **Type Safety**: Leverages Rust's type system for safer authentication code
4. **Community Maintained**: Actively developed and supported by the Rust community
5. **Production Tested**: Used by real applications in production environments
6. **Comprehensive**: Covers the full spectrum of Clerk's authentication features

clerk-rs bridges the gap between Clerk's powerful authentication platform and the Rust ecosystem, making it easy for Rust developers to implement secure, scalable authentication in their applications.