# clerk-rs: The Official Community Rust SDK for Clerk

**clerk-rs** is a comprehensive, community-maintained Rust SDK that provides seamless integration with [Clerk](https://clerk.com), a popular authentication and user management service. This SDK enables Rust developers to easily implement authentication, user management, and session validation in their applications.

## 🚀 What is clerk-rs?

clerk-rs is an unofficial but actively maintained Rust SDK that wraps the [Clerk Backend API](https://clerk.com/docs/reference/backend-api). It provides both low-level HTTP client functionality and high-level framework integrations for popular Rust web frameworks.

## ✨ Key Features

### Core Functionality
- **Complete API Coverage**: Full support for Clerk's Backend API endpoints including users, sessions, organizations, invitations, and more
- **HTTP Client**: Direct HTTP client for making requests to Clerk API endpoints
- **JWT Validation**: Built-in JWT token validation and verification
- **Session Management**: Comprehensive session handling and validation
- **JWKS Provider**: Memory-cached JWKS (JSON Web Key Set) provider for efficient token verification

### Framework Integrations
clerk-rs provides first-class middleware and integration support for major Rust web frameworks:

- **Actix Web**: Middleware for protecting routes with Clerk authentication
- **Axum**: Layer-based authentication middleware 
- **Rocket**: Guard-based route protection
- **Poem**: Middleware support for Poem v3

### Authentication Methods
- **Bearer Token**: Standard JWT bearer token authentication
- **Session Cookies**: Support for `__session` cookie validation for same-origin requests
- **Custom JWT Templates**: Support for custom JWT template validation

## 🛠 Architecture

The SDK is organized into several key modules:

- **`apis/`**: Auto-generated API bindings for all Clerk endpoints
- **`models/`**: Data structures representing Clerk API responses
- **`validators/`**: Framework-specific authentication middleware
- **`clerk.rs`**: Core HTTP client for API interactions
- **`endpoints.rs`**: Endpoint definitions and routing

## 🔧 Usage Examples

### Basic API Usage
```rust
use clerk_rs::{clerk::Clerk, ClerkConfiguration, endpoints::ClerkGetEndpoint};

let config = ClerkConfiguration::new(None, None, Some("sk_test_key".to_string()), None);
let client = Clerk::new(config);
let users = client.get(ClerkGetEndpoint::GetUserList).await?;
```

### Framework Integration (Axum)
```rust
use axum::{routing::get, Router};
use clerk_rs::validators::{axum::ClerkLayer, jwks::MemoryCacheJwksProvider};

let app = Router::new()
    .route("/protected", get(protected_handler))
    .layer(ClerkLayer::new(
        MemoryCacheJwksProvider::new(clerk), 
        Some(vec!["/protected".to_string()]), 
        true
    ));
```

## 📦 Technical Details

- **Language**: Rust (2021 edition)
- **Version**: 0.4.1 (actively maintained)
- **Dependencies**: Built on `reqwest` for HTTP, `jsonwebtoken` for JWT handling, `serde` for serialization
- **Features**: Modular feature flags for framework-specific functionality
- **Documentation**: Comprehensive API documentation and examples

## 🌟 Production Usage

clerk-rs is trusted by several production applications including:
- [Tembo](https://tembo.io) - Postgres cloud platform
- [Rezon](https://rezon.ai) - AI platform
- [Gitar](https://gitar.co) - Development tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security service

## 🎯 Why Choose clerk-rs?

1. **Community Driven**: Actively maintained by the Rust community with frequent updates
2. **Framework Agnostic**: Works with all major Rust web frameworks
3. **Type Safe**: Leverages Rust's type system for safe API interactions
4. **Performance**: Memory-efficient JWKS caching and async-first design
5. **Complete**: Covers the entire Clerk API surface area
6. **Battle Tested**: Used in production by multiple companies

## 📈 Roadmap

The project maintains an active roadmap including:
- Support for additional HTTP clients beyond reqwest
- Multiple async runtime support (tokio, async-std)
- Optional blocking client support
- Expanded framework integrations

clerk-rs represents a robust, production-ready solution for integrating Clerk authentication into Rust applications, combining the power of Rust's type system with Clerk's comprehensive authentication platform.