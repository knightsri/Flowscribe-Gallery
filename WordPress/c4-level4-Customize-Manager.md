---
layout: default
title: WordPress - C4 Level 4: WP_Customize_Manager
---

# WordPress - C4 Level 4: WP_Customize_Manager

**Generated:** 2025-10-15 04:23:04  
**Type:** Controller  
**File:** `wp-includes/class-wp-customize-manager.php`

---

## Component Overview

### Purpose
Manages the WordPress Theme Customizer by bootstrapping the server-side experience, enabling real-time preview of themes and content adjustments. It serves as a central coordinator for setting up customize sessions, handling theme switching, and facilitating changesets for persistent customizations.

### Responsibility
To orchestrate the entire customizer workflow, including initializing settings, controls, sections, and panels, managing theme previews, and handling user interactions via Ajax while enforcing permissions and security checks.

### Design Patterns
- Factory
- Observer (via WordPress hooks and actions)
- Composite (composes panels, sections, controls, and settings)

---

## Public Interface

```php
public __construct($args = array())
public doing_ajax($action = null)
public wp_die($ajax_message, $message = null)
public wp_die_handler()
public setup_theme()
public establish_loaded_changeset()
public after_setup_theme()
public start_previewing_theme()
public stop_previewing_theme()
public settings_previewed()
public autosaved()
public branching()
public changeset_uuid()
public theme()
public settings()
public controls()
public containers()
public sections()
public panels()
public is_theme_active()
public wp_loaded()
```

---

## Key Methods

### `__construct()`

**Purpose:** Initializes the customize manager with arguments, sets up properties, loads required classes, and hooks into WordPress actions for customize functionality.

**Parameters:** `array $args (optional args like changeset_uuid, theme, messenger_channel, settings_previewed, autosaved, branching)`

**Returns:** `void`

**Complexity:** Complex

### `setup_theme()`

**Purpose:** Checks permissions, validates themes, establishes changesets, and starts the theme previewing process during Customizer initialization.

**Parameters:** `void`

**Returns:** `void`

**Complexity:** Complex

### `start_previewing_theme()`

**Purpose:** Enables theme preview by adding filters to override active theme with the previewed one if not the active theme.

**Parameters:** `void`

**Returns:** `void`

**Complexity:** Moderate

### `establish_loaded_changeset()`

**Purpose:** Determines or generates the changeset UUID based on branching rules and loads the appropriate changeset data.

**Parameters:** `void`

**Returns:** `void`

**Complexity:** Moderate

### `wp_loaded()`

**Purpose:** Registers core panel, section, and control types unconditionally and performs additional initialization tasks.

**Parameters:** `void`

**Returns:** `void`

**Complexity:** Simple

### `changeset_uuid()`

**Purpose:** Retrieves or establishes the current changeset UUID.

**Parameters:** `void`

**Returns:** `string`

**Complexity:** Simple

### `theme()`

**Purpose:** Gets the WP_Theme instance for the theme being customized.

**Parameters:** `void`

**Returns:** `WP_Theme`

**Complexity:** Simple

---

## Dependencies

<div class="mermaid">
classDiagram
    class WP_Customize_Manager
WP_Customize_Manager ..> WP_Customize_Setting
WP_Customize_Manager ..> WP_Customize_Panel
WP_Customize_Manager ..> WP_Customize_Section
WP_Customize_Manager ..> WP_Customize_Control
WP_Customize_Manager ..> WP_Customize_Widgets
WP_Customize_Manager ..> WP_Customize_Nav_Menus
WP_Customize_Manager ..> WP_Customize_Selective_Refresh
WP_Customize_Manager ..> WordPress hooks (e.g., apply_filters, do_action)
WP_Customize_Manager ..> WP_Theme
</div>

**Dependency Details:**

- **WP_Customize_Setting** (class) - injects or composes
- **WP_Customize_Panel** (class) - injects or composes
- **WP_Customize_Section** (class) - injects or composes
- **WP_Customize_Control** (class) - injects or composes
- **WP_Customize_Widgets** (class) - injects or composes
- **WP_Customize_Nav_Menus** (class) - injects or composes
- **WP_Customize_Selective_Refresh** (class) - injects or composes
- **WordPress hooks (e.g., apply_filters, do_action)** (interface) - uses
- **WP_Theme** (interface) - uses

---

## Internal State

- `$theme: WP_Theme - Instance of the theme being previewed/customized.`
- `$original_stylesheet: string - Directory name of the active theme.`
- `$previewing: bool - Whether currently previewing a theme.`
- `$widgets: WP_Customize_Widgets|null - Handles widget management in Customizer.`
- `$nav_menus: WP_Customize_Nav_Menus|null - Handles nav menu management in Customizer.`
- `$selective_refresh: WP_Customize_Selective_Refresh - Manages selective refresh in preview.`
- `$settings: array - Registered instances of WP_Customize_Setting.`
- `$containers: array - Sorted instances of panels and sections.`
- `$panels: array - Registered instances of WP_Customize_Panel.`
- `$sections: array - Registered instances of WP_Customize_Section.`
- `$controls: array - Registered instances of WP_Customize_Control.`
- `$registered_panel_types: array - Panel types for JS rendering.`
- `$registered_section_types: array - Section types for JS rendering.`
- `$registered_control_types: array - Control types for JS rendering.`
- `$preview_url: string - Initial URL being previewed.`
- `$return_url: string - URL to return to on Customizer exit.`
- `$autofocus: array - Mapping for focusing specific IDs.`
- `$messenger_channel: string - Channel for iframe communication.`
- `$autosaved: bool - Whether to load autosaved changeset revision.`
- `$branching: bool - Whether changeset branching is allowed.`
- `$settings_previewed: bool - Whether settings should be previewed.`
- `$saved_starter_content_changeset: bool - If starter content changeset was saved.`
- `$_post_values: array - Unsanitized post values from customized data.`
- `$_changeset_uuid: string - Current changeset UUID.`
- `$_changeset_post_id: int|false - Post ID of changeset.`
- `$_changeset_data: array|null - Loaded changeset data.`
- `$components: array - List of core components to load.`

---

## Key Algorithms

### Changeset UUID Establishment

Algorithm to generate or retrieve a changeset UUID based on branching rules and existing unpublished changesets, ensuring seamless handling of concurrent or linear customizations for users.

### Theme Previewing Logic

Process of overriding WordPress theme functions via filters (template, stylesheet, etc.) to enable live preview of inactive themes without altering the active site state.


---

## Integration Points

- WordPress theme system (WP_Theme, theme activation/switching)
- WordPress user permissions (current_user_can checks)
- WordPress Ajax handlers (wp_ajax_* actions)
- WordPress hooks and actions (e.g., customize_register, after_setup_theme)
- WordPress JavaScript customization API (for client-side reflection)
- WordPress admin screens (customize.php)
- WordPress widgets and navigation menus subsystems

---

## Architectural Notes

This class is designed as a central controller in the WordPress customizer architecture, employing factory patterns to instantiate customizable elements dynamically. It enforces separation of concerns by composing specialized sub-managers (e.g., widgets, nav_menus) while heavily relying on WordPress hooks for extensibility, ensuring that themes and plugins can integrate without modifying core code. Performance is balanced by loading components conditionally and avoiding resource-intensive operations during previews.

---

*Generated by Flowscribe - Automated C4 Architecture Documentation*
