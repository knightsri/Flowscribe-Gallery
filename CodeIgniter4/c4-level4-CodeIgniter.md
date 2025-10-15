# CodeIgniter 4 - C4 Level 4: CodeIgniter

**Generated:** 2025-10-15 05:08:54  
**Type:** Handler  
**File:** `system/CodeIgniter.php`

---

## Component Overview

### Purpose
This is the core application class in the CodeIgniter framework that initializes the application environment, handles the request lifecycle, routes requests to appropriate controllers, applies filters, and sends responses, serving as the main entry point for both web and CLI interactions.

### Responsibility
Orchestrate the entire application lifecycle, including request processing, routing, controller execution, response preparation, and filter application, ensuring a structured flow for web applications.

### Design Patterns
- Front Controller
- Dependency Injection
- Observer (Events)
- Factory (via Services)

---

## Public Interface

```php
public __construct(App $config)
public run(RouteCollectionInterface|null $routes = null, bool $returnResponse = false): ResponseInterface|null
public disableFilters(): void
public setRequest(CLIRequest|IncomingRequest $request): $this
public getPerformanceStats(): array
```

---

## Key Methods

### `__construct()`

**Purpose:** Initializes the CodeIgniter instance with configuration, start time, and page cache setup.

**Parameters:** `App $config`

**Returns:** `void`

**Complexity:** Simple

### `run()`

**Purpose:** Executes the main application loop, handling system events, filters, request routing, and response sending.

**Parameters:** `RouteCollectionInterface|null $routes = null, bool $returnResponse = false`

**Returns:** `ResponseInterface|null`

**Complexity:** Complex

### `handleRequest()`

**Purpose:** Manages the core request logic, including routing, filter execution, controller instantiation, and response gathering.

**Parameters:** `RouteCollectionInterface|null $routes, Cache $cacheConfig, bool $returnResponse = false`

**Returns:** `ResponseInterface`

**Complexity:** Complex

### `tryToRouteIt()`

**Purpose:** Attempts to route the request using the router, handling redirects and locale settings.

**Parameters:** `RouteCollectionInterface|null $routes = null`

**Returns:** `list<string>|string|null`

**Complexity:** Moderate

### `sendResponse()`

**Purpose:** Outputs the response to the client, including headers and body.

**Parameters:** `void`

**Returns:** `void`

**Complexity:** Moderate

---

## Dependencies

```mermaid
classDiagram
    class CodeIgniter
CodeIgniter ..> Config\App
CodeIgniter ..> CodeIgniter\Services
CodeIgniter ..> CodeIgniter\Events\Events
CodeIgniter ..> CodeIgniter\Filters\Filters
CodeIgniter ..> CodeIgniter\Router\Router
    CodeIgniter\HTTP\ResponseInterface <|.. CodeIgniter
CodeIgniter ..> CodeIgniter\Cache\ResponseCache
CodeIgniter ..> CodeIgniter\Debug\Timer
```

**Dependency Details:**

- **Config\App** (class) - uses
- **CodeIgniter\Services** (class) - uses
- **CodeIgniter\Events\Events** (class) - uses
- **CodeIgniter\Filters\Filters** (class) - injects
- **CodeIgniter\Router\Router** (class) - injects
- **CodeIgniter\HTTP\ResponseInterface** (interface) - implements
- **CodeIgniter\Cache\ResponseCache** (class) - injects
- **CodeIgniter\Debug\Timer** (class) - injects

---

## Internal State

- `startTime: float|null - Records the app startup time for benchmarking`
- `totalTime: float - Tracks total execution time`
- `config: App - Main application configuration object`
- `benchmark: Timer - Timer instance for performance measurement`
- `request: CLIRequest|IncomingRequest|null - Current request object`
- `response: ResponseInterface - Current response object`
- `router: Router - Router instance for handling URIs`
- `controller: Closure|string|null - Resolved controller for the request`
- `method: string - Controller method to invoke`
- `context: 'php-cli'|'web'|null - Indicates execution context`
- `enableFilters: bool - Toggles filter usage`
- `pageCache: ResponseCache - Handles web page caching`

---

## Key Algorithms

### Request-Response Lifecycle

The core algorithm processes incoming requests by initializing components, applying before filters, routing to controllers or closures, executing the controller, applying after filters, and sending the response; this ensures modular and extensible handling of web and CLI requests.

### Routing and Filter Application

Routes the URI to a controller or closure, enables route-specific filters, and runs before/after filters, handling responses or request modifications to control access and processing flow.


---

## Integration Points

- CodeIgniter Router for URI matching and parameter extraction
- Filters system for pre- and post-processing requests
- Services container for dependency injection
- Events system for triggering pre/post system hooks
- Controllers and Closures for handling business logic
- CLIRequest and IncomingRequest for request abstraction
- ResponseInterface for output generation

---

## Architectural Notes

This class follows the Front Controller pattern to centralize request handling, promoting single entry point for better security and structure. It heavily relies on dependency injection via the Services class to decouple components, enabling flexibility and testability. Deprecated methods indicate ongoing refactoring to move responsibilities like caching and environment detection to dedicated filters and bootstrap files, reducing the class's complexity.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
