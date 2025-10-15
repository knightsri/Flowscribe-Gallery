# CodeIgniter 4 - C4 Level 4: CLI

**Generated:** 2025-10-15 05:10:37  
**Type:** Service  
**File:** `system/CLI/CLI.php`

---

## Component Overview

### Purpose
Provides a set of static methods for handling command-line interface operations in CodeIgniter 4, enabling interactive input, output formatting, color support, and CLI argument parsing.

### Responsibility
To facilitate and standardize command-line interactions, including user prompts, colored output, progress bars, and command parsing, serving as the core utility for CLI-based tasks like migrations and custom commands.

### Design Patterns
- Static Utility
- Facade

---

## Public Interface

```php
public init()
public input(?string $prefix = null)
public prompt(string $field, $options = null, $validation = null)
public promptByKey($text, array $options, $validation = null)
public promptByMultipleKeys(string $text, array $options)
public print(string $text = '', ?string $foreground = null, ?string $background = null)
public write(string $text = '', ?string $foreground = null, ?string $background = null)
public error(string $text, string $foreground = 'light_red', ?string $background = null)
public beep(int $num = 1)
public wait(int $seconds, bool $countdown = false)
public isWindows()
public newLine(int $num = 1)
public clearScreen()
public color(string $text, string $foreground, ?string $background = null, ?string $format = null)
public strlen(?string $string)
public streamSupports(string $function, $resource)
public hasColorSupport($resource)
public getWidth(int $default = 80)
public getHeight(int $default = 32)
public generateDimensions()
public showProgress($thisStep = 1, int $totalSteps = 10)
public wrap(?string $string = null, int $max = 0, int $padLeft = 0)
public getURI()
public getSegment(int $index)
public getSegments()
public getOption(string $name)
public getOptions()
```

---

## Key Methods

### `init()`

**Purpose:** Initializes the CLI class, detecting CLI context, setting up readline support, color capabilities, and parsing command-line arguments.

**Parameters:** `none`

**Returns:** `void`

**Complexity:** Moderate

### `input()`

**Purpose:** Retrieves user input from the standard input stream, optionally with a prefix prompt.

**Parameters:** `string|null $prefix`

**Returns:** `string`

**Complexity:** Simple

### `prompt()`

**Purpose:** Prompts the user for input with optional default values, validation, and options, reusing input until validation passes.

**Parameters:** `string $field, list<int|string>|string $options, array|string|null $validation`

**Returns:** `string`

**Complexity:** Complex

### `write()`

**Purpose:** Outputs text to the CLI on its own line, with optional color formatting.

**Parameters:** `string $text, string|null $foreground, string|null $background`

**Returns:** `void`

**Complexity:** Simple

### `color()`

**Purpose:** Applies ANSI color codes to text for foreground, background, and optional formatting like underline.

**Parameters:** `string $text, string $foreground, string|null $background, string|null $format`

**Returns:** `string`

**Complexity:** Moderate

### `parseCommandLine()`

**Purpose:** Parses command-line arguments into segments and options, ignoring program invocation.

**Parameters:** `none`

**Returns:** `void`

**Complexity:** Moderate

### `getURI()`

**Purpose:** Constructs a URI string from parsed command-line segments.

**Parameters:** `none`

**Returns:** `string`

**Complexity:** Simple

### `showProgress()`

**Purpose:** Displays an ASCII progress bar and completion percentage, updating or erasing as needed.

**Parameters:** `bool|int $thisStep, int $totalSteps`

**Returns:** `void`

**Complexity:** Moderate

### `wrap()`

**Purpose:** Wraps a string to a specified width or terminal width, with optional left padding.

**Parameters:** `string|null $string, int $max, int $padLeft`

**Returns:** `string`

**Complexity:** Moderate

---

## Dependencies

```mermaid
classDiagram
    class CLI
    CLI ..> CodeIgniter\CLI\Exceptions\CLIException
    CLI ..> CodeIgniter\Exceptions\InvalidArgumentException
    CLI ..> Throwable
    CLI ..> CodeIgniter\CLI\InputOutput
    CLI ..> validation
```

**Dependency Details:**

- **CodeIgniter\CLI\Exceptions\CLIException** (class) - uses
- **CodeIgniter\Exceptions\InvalidArgumentException** (class) - uses
- **Throwable** (interface) - uses
- **CodeIgniter\CLI\InputOutput** (class) - injects
- **validation** (service) - uses

---

## Internal State

- `$readline_support: bool - Indicates if readline extension is available (deprecated).`
- `$wait_msg: string - Message displayed when waiting for user input (deprecated).`
- `$initialized: bool - Flag indicating if the class has been initialized.`
- `$foreground_colors: array<string, string> - Mapping of color names to ANSI foreground codes.`
- `$background_colors: array<string, string> - Mapping of color names to ANSI background codes.`
- `$segments: list<string> - Array of parsed command-line segments.`
- `$options: array<string, string|null> - Array of parsed command-line options.`
- `$lastWrite: string|null - Tracks if last output was 'write' or 'print' for clean output.`
- `$height: int|null - Height of the CLI window.`
- `$width: int|null - Width of the CLI window.`
- `$isColored: bool - Whether the current stream supports color output.`
- `$io: CodeIgniter\CLI\InputOutput|null - Handles input/output operations.`

---

## Key Algorithms

### Command Line Parsing

In parseCommandLine(), it iterates through $_SERVER['argv'], distinguishing between options (prefixed with '-') and segments, handling option values to build $segments and $options arrays, crucial for routing CLI commands.

### ANSI Color Encoding

In color() and getColoredText(), it applies ANSI escape sequences for foreground, background, and formatting based on predefined color maps, supporting nested colors and ensuring compatibility across terminals.

### Text Wrapping with Padding

In wrap(), it uses PHP's wordwrap() to break text at max width, then splits and pads additional lines, adapting to terminal width and left padding for aligned output.


---

## Integration Points

- PHP readline extension for interactive input (if available).
- Shell commands ('tput', 'stty', 'mode CON') for determining terminal dimensions across Unix and Windows.
- Environment variables and $_SERVER for detecting color support, terminal type, and CLI context.
- CodeIgniter's Validation service for user input validation in prompts.

---

## Architectural Notes

This static utility class encapsulates CLI-specific functionality, using a facade pattern to simplify command-line operations for developers. It handles OS-specific differences (e.g., Windows VT100 support vs Unix terminals) and integrates with external shell utilities for dynamic screen sizing. Deprecation flags indicate a shift toward better encapsulation in future major versions, avoiding public static properties.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
