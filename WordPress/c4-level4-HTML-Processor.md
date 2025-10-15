---
layout: default
title: WordPress - C4 Level 4: HTML Processor
---

# WordPress - C4 Level 4: HTML Processor

**Generated:** 2025-10-15 04:23:18  
**Type:** Handler  
**File:** `wp-includes/html-api/class-wp-html-processor.php`

---

## Component Overview

### Purpose
Safely parses and modifies HTML5 documents, ensuring compliance with a subset of the HTML5 specification and preventing unintended document breakage, particularly for querying nested structures and performing modifications in the WordPress Block Editor.

### Responsibility
Handles parsing and processing of HTML content using non-trivial algorithms for validation and manipulation, ensuring safe and accurate representation of HTML structures in modern WordPress layouts.

### Design Patterns
- Factory
- State Machine
- Stack-based Processing

---

## Public Interface

```php
public create_fragment($html, $context, $encoding)
public create_full_parser($html, $known_definite_encoding)
public next_tag($query)
public next_token()
public get_last_error()
public get_unsupported_exception()
public get_breadcrumbs()
public expects_closer($node)
public get_attribute_names_with_prefix($prefix)
```

---

## Key Methods

### `create_fragment()`

**Purpose:** Creates an HTML processor for parsing HTML fragments within a specific context, ensuring fragment parsing adheres to contextual rules without breaking document integrity.

**Parameters:** `string $html, string $context = '<body>', string $encoding = 'UTF-8'`

**Returns:** `static|null`

**Complexity:** Moderate

### `create_full_parser()`

**Purpose:** Creates an HTML processor for parsing entire HTML documents, enforcing UTF-8 encoding and maintaining state for full document traversal.

**Parameters:** `string $html, string|null $known_definite_encoding = 'UTF-8'`

**Returns:** `static|null`

**Complexity:** Moderate

### `next_tag()`

**Purpose:** Advances to the next tag matching a given query, supporting features like breadcrumbs for nested structure matching, class name checking, and optional visiting of tag closers.

**Parameters:** `array|string|null $query`

**Returns:** `bool`

**Complexity:** Complex

### `get_last_error()`

**Purpose:** Retrieves the last error encountered during parsing, such as unsupported markup or exceeded bookmarks, for debugging purposes.

**Parameters:** `none`

**Returns:** `string|null`

**Complexity:** Simple

### `get_unsupported_exception()`

**Purpose:** Provides detailed context for why parsing was aborted due to unsupported HTML, including token details and stack states.

**Parameters:** `none`

**Returns:** `WP_HTML_Unsupported_Exception|null`

**Complexity:** Simple

---

## Dependencies

<div class="mermaid">
classDiagram
    class HTML Processor
    WP_HTML_Tag_Processor <|-- HTML Processor
    HTML Processor ..> WP_HTML_Processor_State
    HTML Processor ..> WP_HTML_Unsupported_Exception
    HTML Processor ..> WP_HTML_Stack_Event
    HTML Processor ..> WP_HTML_Token
</div>

**Dependency Details:**

- **WP_HTML_Tag_Processor** (class) - extends
- **WP_HTML_Processor_State** (class) - uses
- **WP_HTML_Unsupported_Exception** (class) - uses
- **WP_HTML_Stack_Event** (class) - uses
- **WP_HTML_Token** (class) - uses

---

## Internal State

- `$state: WP_HTML_Processor_State - Holds the working state including stacks of open elements and active formatting elements`
- `$bookmark_counter: int - Counter for generating unique bookmark names for internal use`
- `$last_error: string|null - Stores the last error message if parsing fails`
- `$unsupported_exception: WP_HTML_Unsupported_Exception|null - Stores context for unsupported HTML abortions`
- `$release_internal_bookmark_on_destruct: Closure|null - Callback to release bookmarks on token destruction`
- `$element_queue: WP_HTML_Stack_Event[] - Queue of stack events for 'match' events during parsing`
- `$breadcrumbs: string[] - Current stack of breadcrumbs representing nested HTML structure`
- `$current_element: WP_HTML_Stack_Event|null - Current stack event for the matched token`
- `$context_node: WP_HTML_Token|null - Context node for fragment parsing`

---

## Key Algorithms

### HTML Fragment and Full Document Parsing

Implements a subset of the HTML5 parsing algorithm using stacks for open elements and active formatting, appending events to a queue for sequential processing, and bailing early on unsupported markup to ensure document safety and compliance.

### Breadcrumb Matching

Supports querying nested HTML structures by matching element names in a breadcrumb array, allowing partial and wildcard matches for efficient navigation and selection within parsed documents.


---

## Integration Points

- WordPress Block Editor for parsing and modifying block-rendered HTML
- WP_HTML_Tag_Processor for underlying tokenization and attribute handling
- Content manipulation utilities in WordPress core for safe HTML processing

---

## Architectural Notes

The class employs a conservative approach by aborting parsing on unsupported HTML elements to prevent document breakage, utilizing factory methods for controlled instantiation to enforce UTF-8 encoding and context. It maintains separate stacks and queues for stateful processing, promoting reusability and extension through protected methods, while prioritizing safety over exhaustive HTML support.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
