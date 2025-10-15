# CodeIgniter 4 - C4 Level 4: Common

**Generated:** 2025-10-15 05:10:55  
**Type:** Other  
**File:** `system/Common.php`

---

## Component Overview

### Purpose
The Common component provides a suite of global utility functions that offer convenient access to core CodeIgniter 4 services and perform common tasks such as string manipulation, caching, database connections, security helpers, and logging. It promotes code reusability and simplifies development by abstracting complex operations into simple function calls.

### Responsibility
Serving as the central hub for global utility functions that provide abstracted access to framework services and handle common infrastructural tasks like path cleaning, environment variable retrieval, and CSRF token management.

### Design Patterns
- Facade
- Utility

---

## Public Interface

```php
public app_timezone()
public cache(?string $key = null)
public clean_path(string $path)
public command(string $command)
public config(string $name, bool $getShared = true)
public cookie(string $name, string $value = '', array $options = [])
public cookies(array $cookies = [], bool $getGlobal = true)
public csrf_token()
public csrf_header()
public csrf_hash()
public csrf_field(?string $id = null)
public csrf_meta(?string $id = null)
public csp_style_nonce()
public csp_script_nonce()
public db_connect($db = null, bool $getShared = true)
public env(string $key, $default = null)
public esc($data, string $context = 'html', ?string $encoding = null)
public force_https(int $duration = 31536000, ?RequestInterface $request = null, ?ResponseInterface $response = null)
public function_usable(string $functionName)
public helper($filenames)
public is_cli()
public is_really_writable(string $file)
public is_windows(?bool $mock = null)
public lang(string $line, array $args = [], ?string $locale = null)
public log_message(string $level, string $message, array $context = [])
public model(string $name, bool $getShared = true, ?ConnectionInterface &$conn = null)
public old(string $key, $default = null, $escape = 'html')
public redirect(?string $route = null)
public _solidus(?DocTypes $docTypesConfig = null)
public remove_invisible_characters(string $str, bool $urlEncoded = true)
public request()
public response()
public route_to()
public route_to()
public service(string $key)
public session()
public single_service(string $key, ...$params)
public stringify_attributes(array $attributes, bool $js = false)
public timer(?string $name = null)
public trace()
public trace_file(string $file, int $lineNumber = 0)
public trace_message(string $message, ?int $limit = null)
public uri(string $uri = null)
public url_is(string $uri)
public url_to(string $controller, ...$args)
public user_agent(?string $userAgentString = null)
public view(string $name, array $data = [], ?array $options = null)
public view_cell(string $library, ?string $params = null, int $ttl = 0, ?string $cacheName = null)
```

---

## Key Methods

### `cache()`

**Purpose:** Provides access to the Cache service, allowing retrieval of cached values or the cache object itself for operations like saving and getting data.

**Parameters:** `string $key = null`

**Returns:** `CacheInterface if $key is null, mixed otherwise`

**Complexity:** Simple

### `clean_path()`

**Purpose:** Normalizes file paths by resolving relative paths and replacing them with framework constants like APPPATH for cleaner error outputs.

**Parameters:** `string $path`

**Returns:** `string`

**Complexity:** Moderate

### `command()`

**Purpose:** Parses and executes a command-line command string, tokenizing arguments and options, then runs it via the Commands service.

**Parameters:** `string $command`

**Returns:** `false|string`

**Complexity:** Complex

### `db_connect()`

**Purpose:** Establishes and returns a database connection using provided configuration or group name.

**Parameters:** `array|ConnectionInterface|string|null $db, bool $getShared = true`

**Returns:** `BaseConnection`

**Complexity:** Simple

### `esc()`

**Purpose:** Escapes data for security in various contexts like HTML, JS, or CSS using an Escaper instance.

**Parameters:** `array|string $data, string $context = 'html', string|null $encoding = null`

**Returns:** `array|string`

**Complexity:** Moderate

### `lang()`

**Purpose:** Translates and formats language strings, optionally switching locales temporarily.

**Parameters:** `string $line, array $args = [], string|null $locale = null`

**Returns:** `list<string>|string`

**Complexity:** Simple

### `log_message()`

**Purpose:** Logs messages at specified levels through the Logger service, with special handling for testing.

**Parameters:** `string $level, string $message, array $context = []`

**Returns:** `void`

**Complexity:** Simple

---

## Dependencies

```mermaid
classDiagram
    class Common
    Common ..> CodeIgniter\Cache\CacheInterface
    Common ..> CodeIgniter\Config\BaseConfig
    Common ..> CodeIgniter\Config\Factories
    Common ..> CodeIgniter\Cookie\Cookie
    Common ..> CodeIgniter\Cookie\CookieStore
    Common ..> CodeIgniter\Database\BaseConnection
    Common ..> CodeIgniter\Database\ConnectionInterface
    Common ..> CodeIgniter\Debug\Timer
    Common ..> CodeIgniter\HTTP\CLIRequest
    Common ..> CodeIgniter\HTTP\IncomingRequest
```

**Dependency Details:**

- **CodeIgniter\Cache\CacheInterface** (class) - uses
- **CodeIgniter\Config\BaseConfig** (class) - uses
- **CodeIgniter\Config\Factories** (class) - uses
- **CodeIgniter\Cookie\Cookie** (class) - uses
- **CodeIgniter\Cookie\CookieStore** (class) - uses
- **CodeIgniter\Database\BaseConnection** (class) - uses
- **CodeIgniter\Database\ConnectionInterface** (class) - uses
- **CodeIgniter\Debug\Timer** (class) - uses
- **CodeIgniter\HTTP\CLIRequest** (class) - uses
- **CodeIgniter\HTTP\IncomingRequest** (class) - uses
- **CodeIgniter\HTTP\RedirectResponse** (class) - uses
- **CodeIgniter\HTTP\RequestInterface** (class) - uses
- **CodeIgniter\HTTP\ResponseInterface** (class) - uses
- **CodeIgniter\Language\Language** (class) - uses
- **CodeIgniter\Model** (class) - uses
- **CodeIgniter\Session\Session** (class) - uses
- **CodeIgniter\Test\TestLogger** (class) - uses
- **Config\App** (class) - uses
- **Config\Database** (class) - uses
- **Config\DocTypes** (class) - uses
- **Config\Logger** (class) - uses
- **Config\Services** (class) - uses
- **Config\View** (class) - uses
- **Laminas\Escaper\Escaper** (class) - uses

---

## Internal State

- `This component consists of global functions and has no class-based internal state or properties.`

---

## Key Algorithms

### Path Normalization in clean_path

Uses match expressions and string prefix checks to convert absolute paths to framework-relative constants, improving readability in logs and errors.

### Command Tokenization in command

Employs regular expressions to parse command strings into arguments and options, adapting from Symfony's tokenization for flexible CLI command execution.

### Data Escaping in esc

Applies context-aware escaping (e.g., HTML, JS) using a shared Escaper instance, recursively handling arrays to prevent XSS and similar vulnerabilities.


---

## Integration Points

- Cache service for data caching operations
- Database configuration and connection management
- HTTP request and response handling
- Security services for CSRF and CSP nonce generation
- Session management for old input retrieval
- Logger service for message logging
- Language service for internationalization
- Filesystem locator for helper loading
- Router for URL generation and redirects

---

## Architectural Notes

This component acts as a facade, simplifying access to complex framework internals while maintaining loose coupling to services. Functions are conditionally defined to avoid redefine errors, and static variables are used for efficiency in operations like escaping and helper loading. It prioritizes convenience over strict encapsulation, making it a critical yet simplistic infrastructure layer in CodeIgniter 4.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
