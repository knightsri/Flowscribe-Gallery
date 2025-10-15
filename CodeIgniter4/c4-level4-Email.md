# CodeIgniter 4 - C4 Level 4: Email

**Generated:** 2025-10-15 05:10:07  
**Type:** Service  
**File:** `system/Email/Email.php`

---

## Component Overview

### Purpose
This component facilitates sending emails using protocols such as Mail, Sendmail, or SMTP, supporting HTML content, attachments, and serving as an integration point for outbound email communications in the framework.

### Responsibility
Manages email composition, configuration, validation, encoding, and delivery through various protocols, ensuring proper formatting and transmission.

### Design Patterns
- Builder
- Strategy
- Fluent Interface

---

## Public Interface

```php
public __construct()
public initialize()
public clear()
public setFrom()
public setReplyTo()
public setTo()
public setCC()
public setBCC()
public setSubject()
public setMessage()
public attach()
public setAttachmentCID()
public setAltMessage()
public setMailType()
public setWordWrap()
public setProtocol()
public setPriority()
public setNewline()
public setCRLF()
public wordWrap()
public validateEmail()
public isValidEmail()
public cleanEmail()
public send()
```

---

## Key Methods

### `__construct()`

**Purpose:** Initializes the Email instance with configuration options.

**Parameters:** `$config: array|\Config\Email|null`

**Returns:** `void`

**Complexity:** Simple

### `initialize()`

**Purpose:** Sets preferences and initializes the Email object based on configuration.

**Parameters:** `$config: array|\Config\Email|null`

**Returns:** `$this`

**Complexity:** Moderate

### `clear()`

**Purpose:** Resets the Email object's state, clearing recipients, subjects, and bodies.

**Parameters:** `$clearAttachments: bool`

**Returns:** `$this`

**Complexity:** Simple

### `setFrom()`

**Purpose:** Sets the sender's email address and name.

**Parameters:** `$from: string, $name: string, $returnPath: string|null`

**Returns:** `$this`

**Complexity:** Moderate

### `setTo()`

**Purpose:** Sets the primary recipients of the email.

**Parameters:** `$to: array|string`

**Returns:** `$this`

**Complexity:** Simple

### `setSubject()`

**Purpose:** Sets the email subject line with Q-encoding if needed.

**Parameters:** `$subject: string`

**Returns:** `$this`

**Complexity:** Simple

### `setMessage()`

**Purpose:** Sets the email body content.

**Parameters:** `$body: string`

**Returns:** `$this`

**Complexity:** Simple

### `attach()`

**Purpose:** Attaches a file or content to the email.

**Parameters:** `$file: string, $disposition: string, $newname: string|null, $mime: string`

**Returns:** `bool|Email`

**Complexity:** Moderate

### `wordWrap()`

**Purpose:** Wraps text to a specified character limit for proper email formatting.

**Parameters:** `$str: string, $charlim: int|null`

**Returns:** `string`

**Complexity:** Moderate

### `send()`

**Purpose:** Builds and sends the email using the configured protocol.

**Parameters:** `$autoClear: bool`

**Returns:** `bool`

**Complexity:** Complex

### `validateEmail()`

**Purpose:** Validates email addresses in an array.

**Parameters:** `$email: array|string`

**Returns:** `bool`

**Complexity:** Simple

---

## Dependencies

```mermaid
classDiagram
    class Email
Email ..> Config\Email
Email ..> Config\Mimes
Email ..> CodeIgniter\Events\Events
Email ..> CodeIgniter\I18n\Time
```

**Dependency Details:**

- **Config\Email** (class) - injects
- **Config\Mimes** (class) - uses
- **CodeIgniter\Events\Events** (class) - uses
- **CodeIgniter\I18n\Time** (class) - uses

---

## Internal State

- `protocol: 'mail'|'sendmail'|'smtp' - The method used for sending emails`
- `SMTPHost: string - SMTP server hostname`
- `SMTPUser: string - SMTP username`
- `SMTPPass: string - SMTP password`
- `SMTPPort: int - SMTP server port`
- `mailType: 'html'|'text' - Format of the email message`
- `charset: string - Character set for the email`
- `recipients: array|string - List of email recipients`
- `headers: array - Custom headers for the email`
- `attachments: array - List of attached files and their metadata`
- `debugMessage: array - Debug messages from the sending process`

---

## Key Algorithms

### MIME Message Building

Constructs multipart MIME messages for HTML/text alternatives, plain text, and attachments, ensuring compatibility with email clients by generating boundaries, encodings, and content types.

### Email Validation

Uses PHP's filter_var with FILTER_VALIDATE_EMAIL to validate email addresses, supporting international domains via IDNA conversion for robust input checking.

### Word Wrapping

Applies intelligent word wrapping to email bodies, handling long words and URLs to prevent line breaks within them, ensuring readable formatting within email standards.


---

## Integration Points

- SMTP servers for protocol-based email sending
- Sendmail binary on the server for local mail delivery
- PHP's mail() function for basic email sending
- CodeIgniter's Events system for triggering email-related events (e.g., pre-send, post-send)
- External MIME type configurations (via Config\Mimes)

---

## Architectural Notes

The Email class employs a Strategy pattern for protocol abstraction, allowing seamless switching between mail, Sendmail, and SMTP without changing client code. It follows a Builder pattern for email composition via fluent setters, promoting readability and reducing errors. As a core service in CodeIgniter 4, it integrates tightly with configuration, localization, and events systems, but relies on external state like file handles and network connections, introducing potential concurrency constraints for SMTP keep-alive modes.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
