# clerk-rs: Official Community Rust SDK for Clerk

## Overview

**clerk-rs** is the official community-maintained Rust SDK for [Clerk](https://clerk.com), a comprehensive authentication and user management platform. This library provides Rust developers with a complete toolkit for integrating Clerk's authentication services into their applications, supporting both backend API operations and middleware-based route protection across popular Rust web frameworks.

## Key Features

### 🔌 **Full Clerk API Integration**
- Complete coverage of Clerk's Backend API endpoints
- Support for all CRUD operations (GET, POST, PUT, DELETE, PATCH)
- Type-safe API interactions with auto-generated models
- Comprehensive user, organization, and session management

### 🛡️ **Authentication Middleware**
- JWT token validation and verification
- Session cookie authentication support
- Framework-specific middleware implementations:
  - **Actix Web**: `ClerkMiddleware` with request guards
  - **Axum**: `ClerkLayer` for tower-based middleware 
  - **Rocket**: `ClerkGuard` request guards
  - **Poem**: `ClerkPoemMiddleware` for endpoint protection

### 🔑 **Security Features**
- JWKS (JSON Web Key Set) caching with `MemoryCacheJwksProvider`
- Configurable token validation
- Support for both Bearer tokens and session cookies
- Route exclusion capabilities for public endpoints

### ⚙️ **Flexible Configuration**
- Environment-based configuration
- Custom HTTP client support (built on reqwest)
- TLS options (native-tls or rustls-tls)
- Development and production ready

## Architecture

The SDK is structured around several core components:

1. **Core Client** (`Clerk`): Main interface for API interactions
2. **Configuration** (`ClerkConfiguration`): Settings and credentials management  
3. **Models**: Type-safe representations of Clerk API objects
4. **Validators**: Framework-specific authentication middleware
5. **Endpoints**: Strongly-typed API endpoint definitions

## Use Cases

- **Backend API Integration**: Direct integration with Clerk's REST API for user management
- **Web Application Security**: Protecting routes and endpoints with JWT validation
- **Microservices Authentication**: Validating tokens across distributed Rust services
- **Multi-tenant Applications**: Organization and membership management
- **Session Management**: Handling user sessions and authentication state

## Production Usage

clerk-rs is actively used in production by several companies including:
- [Tembo](https://tembo.io) - PostgreSQL platform
- [Rezon](https://rezon.ai) - AI platform
- [Gitar](https://gitar.co) - Development tools
- [Have I Been Squatted](https://haveibeensquatted.com) - Security service

## Technical Details

- **Language**: Rust (2021 edition)
- **Version**: 0.4.1
- **HTTP Client**: reqwest with async support
- **Serialization**: serde with JSON support
- **JWT Handling**: jsonwebtoken crate
- **Async Runtime**: Compatible with tokio and async-std

## Framework Support

The library provides native integrations for popular Rust web frameworks:

- **Actix Web 4.x**: Middleware and request extractors
- **Axum 0.8.x**: Tower layers and extractors  
- **Rocket 0.5.x**: Request guards and fairings
- **Poem 3.x**: Middleware and extractors

This makes clerk-rs one of the most comprehensive authentication solutions available for the Rust ecosystem, providing both low-level API access and high-level framework integrations in a single, well-maintained package.