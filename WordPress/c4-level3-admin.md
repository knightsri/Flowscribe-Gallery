---
layout: default
title: WordPress - Admin Layer (C4 Level 3)
---

# WordPress - Admin Layer (C4 Level 3)

**Generated:** 2025-10-15 04:21:28  
**Layer:** Admin  
**Components:** 191  
**Source:** Deptrac dependency analysis

---

## Component Diagram

<div class="mermaid">
flowchart TB
    subgraph "Admin Layer"
        subgraph "Components"
            about["about"]
            admin_ajax["admin-ajax"]
            admin_footer["admin-footer"]
            admin_functions["admin-functions"]
            admin_header["admin-header"]
            admin_post["admin-post"]
            admin["admin"]
            async_upload["async-upload"]
            authorize_application["authorize-application"]
            comment["comment"]
            contribute["contribute"]
            credits["credits"]
            custom_background["custom-background"]
            custom_header["custom-header"]
            customize["customize"]
            edit_comments["edit-comments"]
            edit_form_advanced["edit-form-advanced"]
            edit_form_blocks["edit-form-blocks"]
            edit_form_comment["edit-form-comment"]
            edit_link_form["edit-link-form"]
            edit_tag_form["edit-tag-form"]
            edit_tags["edit-tags"]
            edit["edit"]
            erase_personal_data["erase-personal-data"]
            export_personal_data["export-personal-data"]
            export["export"]
            freedoms["freedoms"]
            import["import"]
            index["index"]
            install_helper["install-helper"]
            install["install"]
            link_add["link-add"]
            link_manager["link-manager"]
            link_parse_opml["link-parse-opml"]
            link["link"]
            load_scripts["load-scripts"]
            load_styles["load-styles"]
            media_new["media-new"]
            media_upload["media-upload"]
            media["media"]
            menu_header["menu-header"]
            menu["menu"]
            moderation["moderation"]
            ms_admin["ms-admin"]
            ms_delete_site["ms-delete-site"]
            ms_edit["ms-edit"]
            ms_options["ms-options"]
            ms_sites["ms-sites"]
            ms_themes["ms-themes"]
            ms_upgrade_network["ms-upgrade-network"]
            ms_users["ms-users"]
            my_sites["my-sites"]
            nav_menus["nav-menus"]
            network["network"]
            options_discussion["options-discussion"]
            options_general["options-general"]
            options_head["options-head"]
            options_media["options-media"]
            options_permalink["options-permalink"]
            options_privacy["options-privacy"]
            options_reading["options-reading"]
            options_writing["options-writing"]
            options["options"]
            plugin_editor["plugin-editor"]
            plugin_install["plugin-install"]
            plugins["plugins"]
            post_new["post-new"]
            post["post"]
            press_this["press-this"]
            privacy_policy_guide["privacy-policy-guide"]
            privacy["privacy"]
            profile["profile"]
            revision["revision"]
            setup_config["setup-config"]
            site_editor["site-editor"]
            site_health_info["site-health-info"]
            site_health["site-health"]
            term["term"]
            theme_editor["theme-editor"]
            theme_install["theme-install"]
            themes["themes"]
            tools["tools"]
            update_core["update-core"]
            update["update"]
            upgrade_functions["upgrade-functions"]
            upgrade["upgrade"]
            upload["upload"]
            user_edit["user-edit"]
            user_new["user-new"]
            users["users"]
            widgets_form_blocks["widgets-form-blocks"]
            widgets_form["widgets-form"]
            widgets["widgets"]
            admin_filters["admin-filters"]
            ajax_actions["ajax-actions"]
            bookmark["bookmark"]
            class_automatic_upgrader_skin["class-automatic-upgrader-skin"]
            class_bulk_plugin_upgrader_skin["class-bulk-plugin-upgrader-skin"]
            class_bulk_theme_upgrader_skin["class-bulk-theme-upgrader-skin"]
            class_bulk_upgrader_skin["class-bulk-upgrader-skin"]
            class_core_upgrader["class-core-upgrader"]
            class_custom_background["class-custom-background"]
            class_custom_image_header["class-custom-image-header"]
            class_file_upload_upgrader["class-file-upload-upgrader"]
            class_ftp_pure["class-ftp-pure"]
            class_ftp_sockets["class-ftp-sockets"]
            class_ftp["class-ftp"]
            class_language_pack_upgrader_skin["class-language-pack-upgrader-skin"]
            class_language_pack_upgrader["class-language-pack-upgrader"]
            class_pclzip["class-pclzip"]
            class_plugin_installer_skin["class-plugin-installer-skin"]
            class_plugin_upgrader_skin["class-plugin-upgrader-skin"]
            class_plugin_upgrader["class-plugin-upgrader"]
            class_theme_installer_skin["class-theme-installer-skin"]
            class_theme_upgrader_skin["class-theme-upgrader-skin"]
            class_theme_upgrader["class-theme-upgrader"]
            class_walker_category_checklist["class-walker-category-checklist"]
            class_walker_nav_menu_checklist["class-walker-nav-menu-checklist"]
            class_walker_nav_menu_edit["class-walker-nav-menu-edit"]
            class_wp_ajax_upgrader_skin["class-wp-ajax-upgrader-skin"]
            class_wp_application_passwords_list_table["class-wp-application-passwords-list-table"]
            class_wp_automatic_updater["class-wp-automatic-updater"]
            class_wp_comments_list_table["class-wp-comments-list-table"]
            class_wp_community_events["class-wp-community-events"]
            class_wp_debug_data["class-wp-debug-data"]
            class_wp_filesystem_base["class-wp-filesystem-base"]
            class_wp_filesystem_direct["class-wp-filesystem-direct"]
            class_wp_filesystem_ftpext["class-wp-filesystem-ftpext"]
            class_wp_filesystem_ftpsockets["class-wp-filesystem-ftpsockets"]
            class_wp_filesystem_ssh2["class-wp-filesystem-ssh2"]
            class_wp_importer["class-wp-importer"]
            class_wp_internal_pointers["class-wp-internal-pointers"]
            class_wp_links_list_table["class-wp-links-list-table"]
            class_wp_list_table_compat["class-wp-list-table-compat"]
            class_wp_list_table["class-wp-list-table"]
            class_wp_media_list_table["class-wp-media-list-table"]
            class_wp_ms_sites_list_table["class-wp-ms-sites-list-table"]
            class_wp_ms_themes_list_table["class-wp-ms-themes-list-table"]
            class_wp_ms_users_list_table["class-wp-ms-users-list-table"]
            class_wp_plugin_install_list_table["class-wp-plugin-install-list-table"]
            class_wp_plugins_list_table["class-wp-plugins-list-table"]
            class_wp_post_comments_list_table["class-wp-post-comments-list-table"]
            class_wp_posts_list_table["class-wp-posts-list-table"]
            class_wp_privacy_data_export_requests_list_table["class-wp-privacy-data-export-requests-list-table"]
            class_wp_privacy_data_removal_requests_list_table["class-wp-privacy-data-removal-requests-list-table"]
            class_wp_privacy_policy_content["class-wp-privacy-policy-content"]
            class_wp_privacy_requests_table["class-wp-privacy-requests-table"]
            class_wp_screen["class-wp-screen"]
            class_wp_site_health_auto_updates["class-wp-site-health-auto-updates"]
            class_wp_site_health["class-wp-site-health"]
            class_wp_site_icon["class-wp-site-icon"]
            class_wp_terms_list_table["class-wp-terms-list-table"]
            class_wp_theme_install_list_table["class-wp-theme-install-list-table"]
            class_wp_themes_list_table["class-wp-themes-list-table"]
            class_wp_upgrader_skin["class-wp-upgrader-skin"]
            class_wp_upgrader_skins["class-wp-upgrader-skins"]
            class_wp_upgrader["class-wp-upgrader"]
            class_wp_users_list_table["class-wp-users-list-table"]
            continents_cities["continents-cities"]
            dashboard["dashboard"]
            deprecated["deprecated"]
            edit_tag_messages["edit-tag-messages"]
            file["file"]
            image_edit["image-edit"]
            image["image"]
            list_table["list-table"]
            meta_boxes["meta-boxes"]
            misc["misc"]
            ms_admin_filters["ms-admin-filters"]
            ms_deprecated["ms-deprecated"]
            ms["ms"]
            nav_menu["nav-menu"]
            noop["noop"]
            plugin["plugin"]
            privacy_tools["privacy-tools"]
            schema["schema"]
            screen["screen"]
            taxonomy["taxonomy"]
            template["template"]
            theme["theme"]
            translation_install["translation-install"]
            user["user"]
            repair["repair"]
            settings["settings"]
            setup["setup"]
            site_info["site-info"]
            site_new["site-new"]
            site_settings["site-settings"]
            site_themes["site-themes"]
            site_users["site-users"]
            sites["sites"]
        end
    end

    %% Component Dependencies

    %% External Layer Dependencies
</div>

---

## Component List

### Components

#### about

**Purpose:** about component

**File:** `about.php`

**Architectural Issues:** 3 violations detected

---

#### admin

**Purpose:** admin component

**File:** `admin.php`

**Architectural Issues:** 4 violations detected

---

#### admin-ajax

**Purpose:** admin-ajax component

**File:** `admin-ajax.php`

**Architectural Issues:** 1 violations detected

---

#### admin-filters

**Purpose:** admin-filters component

**File:** `admin-filters.php`

**Architectural Issues:** 1 violations detected

---

#### admin-footer

**Purpose:** admin-footer component

**File:** `admin-footer.php`

**Architectural Issues:** 1 violations detected

---

#### admin-functions

**Purpose:** admin-functions component

**File:** `admin-functions.php`

**Architectural Issues:** 1 violations detected

---

#### admin-header

**Purpose:** admin-header component

**File:** `admin-header.php`

**Architectural Issues:** 1 violations detected

---

#### admin-post

**Purpose:** admin-post component

**File:** `admin-post.php`

**Architectural Issues:** 1 violations detected

---

#### ajax-actions

**Purpose:** ajax-actions component

**File:** `ajax-actions.php`

**Architectural Issues:** 1 violations detected

---

#### async-upload

**Purpose:** async-upload component

**File:** `async-upload.php`

**Architectural Issues:** 1 violations detected

---

#### authorize-application

**Purpose:** authorize-application component

**File:** `authorize-application.php`

**Architectural Issues:** 1 violations detected

---

#### bookmark

**Purpose:** bookmark component

**File:** `bookmark.php`

**Architectural Issues:** 1 violations detected

---

#### class-automatic-upgrader-skin

**Purpose:** class-automatic-upgrader-skin component

**File:** `class-automatic-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-bulk-plugin-upgrader-skin

**Purpose:** class-bulk-plugin-upgrader-skin component

**File:** `class-bulk-plugin-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-bulk-theme-upgrader-skin

**Purpose:** class-bulk-theme-upgrader-skin component

**File:** `class-bulk-theme-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-bulk-upgrader-skin

**Purpose:** class-bulk-upgrader-skin component

**File:** `class-bulk-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-core-upgrader

**Purpose:** class-core-upgrader component

**File:** `class-core-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-custom-background

**Purpose:** class-custom-background component

**File:** `class-custom-background.php`

**Architectural Issues:** 1 violations detected

---

#### class-custom-image-header

**Purpose:** class-custom-image-header component

**File:** `class-custom-image-header.php`

**Architectural Issues:** 1 violations detected

---

#### class-file-upload-upgrader

**Purpose:** class-file-upload-upgrader component

**File:** `class-file-upload-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-ftp

**Purpose:** class-ftp component

**File:** `class-ftp.php`

**Architectural Issues:** 1 violations detected

---

#### class-ftp-pure

**Purpose:** class-ftp-pure component

**File:** `class-ftp-pure.php`

**Architectural Issues:** 1 violations detected

---

#### class-ftp-sockets

**Purpose:** class-ftp-sockets component

**File:** `class-ftp-sockets.php`

**Architectural Issues:** 1 violations detected

---

#### class-language-pack-upgrader

**Purpose:** class-language-pack-upgrader component

**File:** `class-language-pack-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-language-pack-upgrader-skin

**Purpose:** class-language-pack-upgrader-skin component

**File:** `class-language-pack-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-pclzip

**Purpose:** class-pclzip component

**File:** `class-pclzip.php`

**Architectural Issues:** 1 violations detected

---

#### class-plugin-installer-skin

**Purpose:** class-plugin-installer-skin component

**File:** `class-plugin-installer-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-plugin-upgrader

**Purpose:** class-plugin-upgrader component

**File:** `class-plugin-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-plugin-upgrader-skin

**Purpose:** class-plugin-upgrader-skin component

**File:** `class-plugin-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-theme-installer-skin

**Purpose:** class-theme-installer-skin component

**File:** `class-theme-installer-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-theme-upgrader

**Purpose:** class-theme-upgrader component

**File:** `class-theme-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-theme-upgrader-skin

**Purpose:** class-theme-upgrader-skin component

**File:** `class-theme-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-category-checklist

**Purpose:** class-walker-category-checklist component

**File:** `class-walker-category-checklist.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-nav-menu-checklist

**Purpose:** class-walker-nav-menu-checklist component

**File:** `class-walker-nav-menu-checklist.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-nav-menu-edit

**Purpose:** class-walker-nav-menu-edit component

**File:** `class-walker-nav-menu-edit.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-ajax-upgrader-skin

**Purpose:** class-wp-ajax-upgrader-skin component

**File:** `class-wp-ajax-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-application-passwords-list-table

**Purpose:** class-wp-application-passwords-list-table component

**File:** `class-wp-application-passwords-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-automatic-updater

**Purpose:** class-wp-automatic-updater component

**File:** `class-wp-automatic-updater.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-comments-list-table

**Purpose:** class-wp-comments-list-table component

**File:** `class-wp-comments-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-community-events

**Purpose:** class-wp-community-events component

**File:** `class-wp-community-events.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-debug-data

**Purpose:** class-wp-debug-data component

**File:** `class-wp-debug-data.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-filesystem-base

**Purpose:** class-wp-filesystem-base component

**File:** `class-wp-filesystem-base.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-filesystem-direct

**Purpose:** class-wp-filesystem-direct component

**File:** `class-wp-filesystem-direct.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-filesystem-ftpext

**Purpose:** class-wp-filesystem-ftpext component

**File:** `class-wp-filesystem-ftpext.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-filesystem-ftpsockets

**Purpose:** class-wp-filesystem-ftpsockets component

**File:** `class-wp-filesystem-ftpsockets.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-filesystem-ssh2

**Purpose:** class-wp-filesystem-ssh2 component

**File:** `class-wp-filesystem-ssh2.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-importer

**Purpose:** class-wp-importer component

**File:** `class-wp-importer.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-internal-pointers

**Purpose:** class-wp-internal-pointers component

**File:** `class-wp-internal-pointers.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-links-list-table

**Purpose:** class-wp-links-list-table component

**File:** `class-wp-links-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-list-table

**Purpose:** class-wp-list-table component

**File:** `class-wp-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-list-table-compat

**Purpose:** class-wp-list-table-compat component

**File:** `class-wp-list-table-compat.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-media-list-table

**Purpose:** class-wp-media-list-table component

**File:** `class-wp-media-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-ms-sites-list-table

**Purpose:** class-wp-ms-sites-list-table component

**File:** `class-wp-ms-sites-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-ms-themes-list-table

**Purpose:** class-wp-ms-themes-list-table component

**File:** `class-wp-ms-themes-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-ms-users-list-table

**Purpose:** class-wp-ms-users-list-table component

**File:** `class-wp-ms-users-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-plugin-install-list-table

**Purpose:** class-wp-plugin-install-list-table component

**File:** `class-wp-plugin-install-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-plugins-list-table

**Purpose:** class-wp-plugins-list-table component

**File:** `class-wp-plugins-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-post-comments-list-table

**Purpose:** class-wp-post-comments-list-table component

**File:** `class-wp-post-comments-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-posts-list-table

**Purpose:** class-wp-posts-list-table component

**File:** `class-wp-posts-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-privacy-data-export-requests-list-table

**Purpose:** class-wp-privacy-data-export-requests-list-table component

**File:** `class-wp-privacy-data-export-requests-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-privacy-data-removal-requests-list-table

**Purpose:** class-wp-privacy-data-removal-requests-list-table component

**File:** `class-wp-privacy-data-removal-requests-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-privacy-policy-content

**Purpose:** class-wp-privacy-policy-content component

**File:** `class-wp-privacy-policy-content.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-privacy-requests-table

**Purpose:** class-wp-privacy-requests-table component

**File:** `class-wp-privacy-requests-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-screen

**Purpose:** class-wp-screen component

**File:** `class-wp-screen.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-site-health

**Purpose:** class-wp-site-health component

**File:** `class-wp-site-health.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-site-health-auto-updates

**Purpose:** class-wp-site-health-auto-updates component

**File:** `class-wp-site-health-auto-updates.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-site-icon

**Purpose:** class-wp-site-icon component

**File:** `class-wp-site-icon.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-terms-list-table

**Purpose:** class-wp-terms-list-table component

**File:** `class-wp-terms-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme-install-list-table

**Purpose:** class-wp-theme-install-list-table component

**File:** `class-wp-theme-install-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-themes-list-table

**Purpose:** class-wp-themes-list-table component

**File:** `class-wp-themes-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-upgrader

**Purpose:** class-wp-upgrader component

**File:** `class-wp-upgrader.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-upgrader-skin

**Purpose:** class-wp-upgrader-skin component

**File:** `class-wp-upgrader-skin.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-upgrader-skins

**Purpose:** class-wp-upgrader-skins component

**File:** `class-wp-upgrader-skins.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-users-list-table

**Purpose:** class-wp-users-list-table component

**File:** `class-wp-users-list-table.php`

**Architectural Issues:** 1 violations detected

---

#### comment

**Purpose:** comment component

**File:** `comment.php`

**Architectural Issues:** 2 violations detected

---

#### continents-cities

**Purpose:** continents-cities component

**File:** `continents-cities.php`

**Architectural Issues:** 1 violations detected

---

#### contribute

**Purpose:** contribute component

**File:** `contribute.php`

**Architectural Issues:** 3 violations detected

---

#### credits

**Purpose:** credits component

**File:** `credits.php`

**Architectural Issues:** 4 violations detected

---

#### custom-background

**Purpose:** custom-background component

**File:** `custom-background.php`

**Architectural Issues:** 1 violations detected

---

#### custom-header

**Purpose:** custom-header component

**File:** `custom-header.php`

**Architectural Issues:** 1 violations detected

---

#### customize

**Purpose:** customize component

**File:** `customize.php`

**Architectural Issues:** 1 violations detected

---

#### dashboard

**Purpose:** dashboard component

**File:** `dashboard.php`

**Architectural Issues:** 1 violations detected

---

#### deprecated

**Purpose:** deprecated component

**File:** `deprecated.php`

**Architectural Issues:** 1 violations detected

---

#### edit

**Purpose:** edit component

**File:** `edit.php`

**Architectural Issues:** 2 violations detected

---

#### edit-comments

**Purpose:** edit-comments component

**File:** `edit-comments.php`

**Architectural Issues:** 1 violations detected

---

#### edit-form-advanced

**Purpose:** edit-form-advanced component

**File:** `edit-form-advanced.php`

**Architectural Issues:** 1 violations detected

---

#### edit-form-blocks

**Purpose:** edit-form-blocks component

**File:** `edit-form-blocks.php`

**Architectural Issues:** 1 violations detected

---

#### edit-form-comment

**Purpose:** edit-form-comment component

**File:** `edit-form-comment.php`

**Architectural Issues:** 1 violations detected

---

#### edit-link-form

**Purpose:** edit-link-form component

**File:** `edit-link-form.php`

**Architectural Issues:** 1 violations detected

---

#### edit-tag-form

**Purpose:** edit-tag-form component

**File:** `edit-tag-form.php`

**Architectural Issues:** 1 violations detected

---

#### edit-tag-messages

**Purpose:** edit-tag-messages component

**File:** `edit-tag-messages.php`

**Architectural Issues:** 1 violations detected

---

#### edit-tags

**Purpose:** edit-tags component

**File:** `edit-tags.php`

**Architectural Issues:** 1 violations detected

---

#### erase-personal-data

**Purpose:** erase-personal-data component

**File:** `erase-personal-data.php`

**Architectural Issues:** 1 violations detected

---

#### export

**Purpose:** export component

**File:** `export.php`

**Architectural Issues:** 2 violations detected

---

#### export-personal-data

**Purpose:** export-personal-data component

**File:** `export-personal-data.php`

**Architectural Issues:** 1 violations detected

---

#### file

**Purpose:** file component

**File:** `file.php`

**Architectural Issues:** 1 violations detected

---

#### freedoms

**Purpose:** freedoms component

**File:** `freedoms.php`

**Architectural Issues:** 3 violations detected

---

#### image

**Purpose:** image component

**File:** `image.php`

**Architectural Issues:** 1 violations detected

---

#### image-edit

**Purpose:** image-edit component

**File:** `image-edit.php`

**Architectural Issues:** 1 violations detected

---

#### import

**Purpose:** import component

**File:** `import.php`

**Architectural Issues:** 2 violations detected

---

#### index

**Purpose:** index component

**File:** `index.php`

**Architectural Issues:** 3 violations detected

---

#### install

**Purpose:** install component

**File:** `install.php`

**Architectural Issues:** 1 violations detected

---

#### install-helper

**Purpose:** install-helper component

**File:** `install-helper.php`

**Architectural Issues:** 1 violations detected

---

#### link

**Purpose:** link component

**File:** `link.php`

**Architectural Issues:** 1 violations detected

---

#### link-add

**Purpose:** link-add component

**File:** `link-add.php`

**Architectural Issues:** 1 violations detected

---

#### link-manager

**Purpose:** link-manager component

**File:** `link-manager.php`

**Architectural Issues:** 1 violations detected

---

#### link-parse-opml

**Purpose:** link-parse-opml component

**File:** `link-parse-opml.php`

**Architectural Issues:** 1 violations detected

---

#### list-table

**Purpose:** list-table component

**File:** `list-table.php`

**Architectural Issues:** 1 violations detected

---

#### load-scripts

**Purpose:** load-scripts component

**File:** `load-scripts.php`

**Architectural Issues:** 1 violations detected

---

#### load-styles

**Purpose:** load-styles component

**File:** `load-styles.php`

**Architectural Issues:** 1 violations detected

---

#### media

**Purpose:** media component

**File:** `media.php`

**Architectural Issues:** 2 violations detected

---

#### media-new

**Purpose:** media-new component

**File:** `media-new.php`

**Architectural Issues:** 1 violations detected

---

#### media-upload

**Purpose:** media-upload component

**File:** `media-upload.php`

**Architectural Issues:** 1 violations detected

---

#### menu

**Purpose:** menu component

**File:** `menu.php`

**Architectural Issues:** 4 violations detected

---

#### menu-header

**Purpose:** menu-header component

**File:** `menu-header.php`

**Architectural Issues:** 1 violations detected

---

#### meta-boxes

**Purpose:** meta-boxes component

**File:** `meta-boxes.php`

**Architectural Issues:** 1 violations detected

---

#### misc

**Purpose:** misc component

**File:** `misc.php`

**Architectural Issues:** 1 violations detected

---

#### moderation

**Purpose:** moderation component

**File:** `moderation.php`

**Architectural Issues:** 1 violations detected

---

#### ms

**Purpose:** ms component

**File:** `ms.php`

**Architectural Issues:** 1 violations detected

---

#### ms-admin

**Purpose:** ms-admin component

**File:** `ms-admin.php`

**Architectural Issues:** 1 violations detected

---

#### ms-admin-filters

**Purpose:** ms-admin-filters component

**File:** `ms-admin-filters.php`

**Architectural Issues:** 1 violations detected

---

#### ms-delete-site

**Purpose:** ms-delete-site component

**File:** `ms-delete-site.php`

**Architectural Issues:** 1 violations detected

---

#### ms-deprecated

**Purpose:** ms-deprecated component

**File:** `ms-deprecated.php`

**Architectural Issues:** 1 violations detected

---

#### ms-edit

**Purpose:** ms-edit component

**File:** `ms-edit.php`

**Architectural Issues:** 1 violations detected

---

#### ms-options

**Purpose:** ms-options component

**File:** `ms-options.php`

**Architectural Issues:** 1 violations detected

---

#### ms-sites

**Purpose:** ms-sites component

**File:** `ms-sites.php`

**Architectural Issues:** 1 violations detected

---

#### ms-themes

**Purpose:** ms-themes component

**File:** `ms-themes.php`

**Architectural Issues:** 1 violations detected

---

#### ms-upgrade-network

**Purpose:** ms-upgrade-network component

**File:** `ms-upgrade-network.php`

**Architectural Issues:** 1 violations detected

---

#### ms-users

**Purpose:** ms-users component

**File:** `ms-users.php`

**Architectural Issues:** 1 violations detected

---

#### my-sites

**Purpose:** my-sites component

**File:** `my-sites.php`

**Architectural Issues:** 1 violations detected

---

#### nav-menu

**Purpose:** nav-menu component

**File:** `nav-menu.php`

**Architectural Issues:** 1 violations detected

---

#### nav-menus

**Purpose:** nav-menus component

**File:** `nav-menus.php`

**Architectural Issues:** 1 violations detected

---

#### network

**Purpose:** network component

**File:** `network.php`

**Architectural Issues:** 2 violations detected

---

#### noop

**Purpose:** noop component

**File:** `noop.php`

**Architectural Issues:** 1 violations detected

---

#### options

**Purpose:** options component

**File:** `options.php`

**Architectural Issues:** 2 violations detected

---

#### options-discussion

**Purpose:** options-discussion component

**File:** `options-discussion.php`

**Architectural Issues:** 1 violations detected

---

#### options-general

**Purpose:** options-general component

**File:** `options-general.php`

**Architectural Issues:** 1 violations detected

---

#### options-head

**Purpose:** options-head component

**File:** `options-head.php`

**Architectural Issues:** 1 violations detected

---

#### options-media

**Purpose:** options-media component

**File:** `options-media.php`

**Architectural Issues:** 1 violations detected

---

#### options-permalink

**Purpose:** options-permalink component

**File:** `options-permalink.php`

**Architectural Issues:** 1 violations detected

---

#### options-privacy

**Purpose:** options-privacy component

**File:** `options-privacy.php`

**Architectural Issues:** 1 violations detected

---

#### options-reading

**Purpose:** options-reading component

**File:** `options-reading.php`

**Architectural Issues:** 1 violations detected

---

#### options-writing

**Purpose:** options-writing component

**File:** `options-writing.php`

**Architectural Issues:** 1 violations detected

---

#### plugin

**Purpose:** plugin component

**File:** `plugin.php`

**Architectural Issues:** 1 violations detected

---

#### plugin-editor

**Purpose:** plugin-editor component

**File:** `plugin-editor.php`

**Architectural Issues:** 2 violations detected

---

#### plugin-install

**Purpose:** plugin-install component

**File:** `plugin-install.php`

**Architectural Issues:** 3 violations detected

---

#### plugins

**Purpose:** plugins component

**File:** `plugins.php`

**Architectural Issues:** 2 violations detected

---

#### post

**Purpose:** post component

**File:** `post.php`

**Architectural Issues:** 2 violations detected

---

#### post-new

**Purpose:** post-new component

**File:** `post-new.php`

**Architectural Issues:** 1 violations detected

---

#### press-this

**Purpose:** press-this component

**File:** `press-this.php`

**Architectural Issues:** 1 violations detected

---

#### privacy

**Purpose:** privacy component

**File:** `privacy.php`

**Architectural Issues:** 3 violations detected

---

#### privacy-policy-guide

**Purpose:** privacy-policy-guide component

**File:** `privacy-policy-guide.php`

**Architectural Issues:** 1 violations detected

---

#### privacy-tools

**Purpose:** privacy-tools component

**File:** `privacy-tools.php`

**Architectural Issues:** 1 violations detected

---

#### profile

**Purpose:** profile component

**File:** `profile.php`

**Architectural Issues:** 3 violations detected

---

#### repair

**Purpose:** repair component

**File:** `repair.php`

**Architectural Issues:** 1 violations detected

---

#### revision

**Purpose:** revision component

**File:** `revision.php`

**Architectural Issues:** 2 violations detected

---

#### schema

**Purpose:** schema component

**File:** `schema.php`

**Architectural Issues:** 1 violations detected

---

#### screen

**Purpose:** screen component

**File:** `screen.php`

**Architectural Issues:** 1 violations detected

---

#### settings

**Purpose:** settings component

**File:** `settings.php`

**Architectural Issues:** 1 violations detected

---

#### setup

**Purpose:** setup component

**File:** `setup.php`

**Architectural Issues:** 1 violations detected

---

#### setup-config

**Purpose:** setup-config component

**File:** `setup-config.php`

**Architectural Issues:** 1 violations detected

---

#### site-editor

**Purpose:** site-editor component

**File:** `site-editor.php`

**Architectural Issues:** 1 violations detected

---

#### site-health

**Purpose:** site-health component

**File:** `site-health.php`

**Architectural Issues:** 1 violations detected

---

#### site-health-info

**Purpose:** site-health-info component

**File:** `site-health-info.php`

**Architectural Issues:** 1 violations detected

---

#### site-info

**Purpose:** site-info component

**File:** `site-info.php`

**Architectural Issues:** 1 violations detected

---

#### site-new

**Purpose:** site-new component

**File:** `site-new.php`

**Architectural Issues:** 1 violations detected

---

#### site-settings

**Purpose:** site-settings component

**File:** `site-settings.php`

**Architectural Issues:** 1 violations detected

---

#### site-themes

**Purpose:** site-themes component

**File:** `site-themes.php`

**Architectural Issues:** 1 violations detected

---

#### site-users

**Purpose:** site-users component

**File:** `site-users.php`

**Architectural Issues:** 1 violations detected

---

#### sites

**Purpose:** sites component

**File:** `sites.php`

**Architectural Issues:** 1 violations detected

---

#### taxonomy

**Purpose:** taxonomy component

**File:** `taxonomy.php`

**Architectural Issues:** 1 violations detected

---

#### template

**Purpose:** template component

**File:** `template.php`

**Architectural Issues:** 1 violations detected

---

#### term

**Purpose:** term component

**File:** `term.php`

**Architectural Issues:** 1 violations detected

---

#### theme

**Purpose:** theme component

**File:** `theme.php`

**Architectural Issues:** 1 violations detected

---

#### theme-editor

**Purpose:** theme-editor component

**File:** `theme-editor.php`

**Architectural Issues:** 2 violations detected

---

#### theme-install

**Purpose:** theme-install component

**File:** `theme-install.php`

**Architectural Issues:** 3 violations detected

---

#### themes

**Purpose:** themes component

**File:** `themes.php`

**Architectural Issues:** 2 violations detected

---

#### tools

**Purpose:** tools component

**File:** `tools.php`

**Architectural Issues:** 1 violations detected

---

#### translation-install

**Purpose:** translation-install component

**File:** `translation-install.php`

**Architectural Issues:** 1 violations detected

---

#### update

**Purpose:** update component

**File:** `update.php`

**Architectural Issues:** 3 violations detected

---

#### update-core

**Purpose:** update-core component

**File:** `update-core.php`

**Architectural Issues:** 3 violations detected

---

#### upgrade

**Purpose:** upgrade component

**File:** `upgrade.php`

**Architectural Issues:** 3 violations detected

---

#### upgrade-functions

**Purpose:** upgrade-functions component

**File:** `upgrade-functions.php`

**Architectural Issues:** 1 violations detected

---

#### upload

**Purpose:** upload component

**File:** `upload.php`

**Architectural Issues:** 1 violations detected

---

#### user

**Purpose:** user component

**File:** `user.php`

**Architectural Issues:** 1 violations detected

---

#### user-edit

**Purpose:** user-edit component

**File:** `user-edit.php`

**Architectural Issues:** 3 violations detected

---

#### user-new

**Purpose:** user-new component

**File:** `user-new.php`

**Architectural Issues:** 2 violations detected

---

#### users

**Purpose:** users component

**File:** `users.php`

**Architectural Issues:** 2 violations detected

---

#### widgets

**Purpose:** widgets component

**File:** `widgets.php`

**Architectural Issues:** 2 violations detected

---

#### widgets-form

**Purpose:** widgets-form component

**File:** `widgets-form.php`

**Architectural Issues:** 1 violations detected

---

#### widgets-form-blocks

**Purpose:** widgets-form-blocks component

**File:** `widgets-form-blocks.php`

**Architectural Issues:** 1 violations detected

---


## Statistics

- **Total Components:** 191
- **Component Categories:** 1
- **Internal Dependencies:** 0
- **External Dependencies:** 0

---

## Analysis Notes

⚠️ **Basic Component Analysis**

This is a basic component-level analysis extracted from Deptrac violations. For enhanced analysis with:
- Better component descriptions
- Intelligent grouping
- Architectural pattern detection
- Business context
- Refactoring recommendations

Use the LLM-enhanced version: `llm-enhancer.py --enhance-components`

---

*Component diagram generated from Deptrac dependency analysis*
