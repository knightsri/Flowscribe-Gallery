# WordPress - Core Layer (C4 Level 3)

**Generated:** 2025-10-15 04:21:14  
**Layer:** Core  
**Components:** 713  
**Source:** Deptrac dependency analysis

---

## Component Diagram

```mermaid
graph TB
    subgraph "Core Layer"
        subgraph "Components"
            admin_bar[admin-bar]
            atomlib[atomlib]
            author_template[author-template]
            block_bindings[block-bindings]
            block_editor[block-editor]
            block_patterns[block-patterns]
            block_template_utils[block-template-utils]
            block_template[block-template]
            blocks[blocks]
            bookmark_template[bookmark-template]
            bookmark[bookmark]
            cache_compat[cache-compat]
            cache[cache]
            canonical[canonical]
            capabilities[capabilities]
            category_template[category-template]
            category[category]
            class_avif_info[class-avif-info]
            class_feed[class-feed]
            class_http[class-http]
            class_IXR[class-IXR]
            class_json[class-json]
            class_oembed[class-oembed]
            class_phpass[class-phpass]
            class_phpmailer[class-phpmailer]
            class_pop3[class-pop3]
            class_requests[class-requests]
            class_simplepie[class-simplepie]
            class_smtp[class-smtp]
            class_snoopy[class-snoopy]
            class_walker_category_dropdown[class-walker-category-dropdown]
            class_walker_category[class-walker-category]
            class_walker_comment[class-walker-comment]
            class_walker_nav_menu[class-walker-nav-menu]
            class_walker_page_dropdown[class-walker-page-dropdown]
            class_walker_page[class-walker-page]
            class_wp_admin_bar[class-wp-admin-bar]
            class_wp_ajax_response[class-wp-ajax-response]
            class_wp_application_passwords[class-wp-application-passwords]
            class_wp_block_bindings_registry[class-wp-block-bindings-registry]
            class_wp_block_bindings_source[class-wp-block-bindings-source]
            class_wp_block_editor_context[class-wp-block-editor-context]
            class_wp_block_list[class-wp-block-list]
            class_wp_block_metadata_registry[class-wp-block-metadata-registry]
            class_wp_block_parser_block[class-wp-block-parser-block]
            class_wp_block_parser_frame[class-wp-block-parser-frame]
            class_wp_block_parser[class-wp-block-parser]
            class_wp_block_pattern_categories_registry[class-wp-block-pattern-categories-registry]
            class_wp_block_patterns_registry[class-wp-block-patterns-registry]
            class_wp_block_styles_registry[class-wp-block-styles-registry]
            class_wp_block_supports[class-wp-block-supports]
            class_wp_block_template[class-wp-block-template]
            class_wp_block_templates_registry[class-wp-block-templates-registry]
            class_wp_block_type_registry[class-wp-block-type-registry]
            class_wp_block_type[class-wp-block-type]
            class_wp_block[class-wp-block]
            class_wp_classic_to_block_menu_converter[class-wp-classic-to-block-menu-converter]
            class_wp_comment_query[class-wp-comment-query]
            class_wp_comment[class-wp-comment]
            class_wp_customize_control[class-wp-customize-control]
            class_wp_customize_manager[class-wp-customize-manager]
            class_wp_customize_nav_menus[class-wp-customize-nav-menus]
            class_wp_customize_panel[class-wp-customize-panel]
            class_wp_customize_section[class-wp-customize-section]
            class_wp_customize_setting[class-wp-customize-setting]
            class_wp_customize_widgets[class-wp-customize-widgets]
            class_wp_date_query[class-wp-date-query]
            class_wp_dependencies[class-wp-dependencies]
            class_wp_dependency[class-wp-dependency]
            class_wp_duotone[class-wp-duotone]
            class_wp_editor[class-wp-editor]
            class_wp_embed[class-wp-embed]
            class_wp_error[class-wp-error]
            class_wp_exception[class-wp-exception]
            class_wp_fatal_error_handler[class-wp-fatal-error-handler]
            class_wp_feed_cache_transient[class-wp-feed-cache-transient]
            class_wp_feed_cache[class-wp-feed-cache]
            class_wp_hook[class-wp-hook]
            class_wp_http_cookie[class-wp-http-cookie]
            class_wp_http_curl[class-wp-http-curl]
            class_wp_http_encoding[class-wp-http-encoding]
            class_wp_http_ixr_client[class-wp-http-ixr-client]
            class_wp_http_proxy[class-wp-http-proxy]
            class_wp_http_requests_hooks[class-wp-http-requests-hooks]
            class_wp_http_requests_response[class-wp-http-requests-response]
            class_wp_http_response[class-wp-http-response]
            class_wp_http_streams[class-wp-http-streams]
            class_wp_http[class-wp-http]
            class_wp_image_editor_gd[class-wp-image-editor-gd]
            class_wp_image_editor_imagick[class-wp-image-editor-imagick]
            class_wp_image_editor[class-wp-image-editor]
            class_wp_list_util[class-wp-list-util]
            class_wp_locale_switcher[class-wp-locale-switcher]
            class_wp_locale[class-wp-locale]
            class_wp_matchesmapregex[class-wp-matchesmapregex]
            class_wp_meta_query[class-wp-meta-query]
            class_wp_metadata_lazyloader[class-wp-metadata-lazyloader]
            class_wp_navigation_fallback[class-wp-navigation-fallback]
            class_wp_network_query[class-wp-network-query]
            class_wp_network[class-wp-network]
            class_wp_object_cache[class-wp-object-cache]
            class_wp_oembed_controller[class-wp-oembed-controller]
            class_wp_oembed[class-wp-oembed]
            class_wp_paused_extensions_storage[class-wp-paused-extensions-storage]
            class_wp_phpmailer[class-wp-phpmailer]
            class_wp_plugin_dependencies[class-wp-plugin-dependencies]
            class_wp_post_type[class-wp-post-type]
            class_wp_post[class-wp-post]
            class_wp_query[class-wp-query]
            class_wp_recovery_mode_cookie_service[class-wp-recovery-mode-cookie-service]
            class_wp_recovery_mode_email_service[class-wp-recovery-mode-email-service]
            class_wp_recovery_mode_key_service[class-wp-recovery-mode-key-service]
            class_wp_recovery_mode_link_service[class-wp-recovery-mode-link-service]
            class_wp_recovery_mode[class-wp-recovery-mode]
            class_wp_rewrite[class-wp-rewrite]
            class_wp_role[class-wp-role]
            class_wp_roles[class-wp-roles]
            class_wp_script_modules[class-wp-script-modules]
            class_wp_scripts[class-wp-scripts]
            class_wp_session_tokens[class-wp-session-tokens]
            class_wp_simplepie_file[class-wp-simplepie-file]
            class_wp_simplepie_sanitize_kses[class-wp-simplepie-sanitize-kses]
            class_wp_site_query[class-wp-site-query]
            class_wp_site[class-wp-site]
            class_wp_speculation_rules[class-wp-speculation-rules]
            class_wp_styles[class-wp-styles]
            class_wp_tax_query[class-wp-tax-query]
            class_wp_taxonomy[class-wp-taxonomy]
            class_wp_term_query[class-wp-term-query]
            class_wp_term[class-wp-term]
            class_wp_text_diff_renderer_inline[class-wp-text-diff-renderer-inline]
            class_wp_text_diff_renderer_table[class-wp-text-diff-renderer-table]
            class_wp_textdomain_registry[class-wp-textdomain-registry]
            class_wp_theme_json_data[class-wp-theme-json-data]
            class_wp_theme_json_resolver[class-wp-theme-json-resolver]
            class_wp_theme_json_schema[class-wp-theme-json-schema]
            class_wp_theme_json[class-wp-theme-json]
            class_wp_theme[class-wp-theme]
            class_wp_token_map[class-wp-token-map]
            class_wp_url_pattern_prefixer[class-wp-url-pattern-prefixer]
            class_wp_user_meta_session_tokens[class-wp-user-meta-session-tokens]
            class_wp_user_query[class-wp-user-query]
            class_wp_user_request[class-wp-user-request]
            class_wp_user[class-wp-user]
            class_wp_walker[class-wp-walker]
            class_wp_widget_factory[class-wp-widget-factory]
            class_wp_widget[class-wp-widget]
            class_wp_xmlrpc_server[class-wp-xmlrpc-server]
            class_wp[class-wp]
            class_wpdb[class-wpdb]
            class.wp_dependencies[class.wp-dependencies]
            class.wp_scripts[class.wp-scripts]
            class.wp_styles[class.wp-styles]
            comment_template[comment-template]
            comment[comment]
            compat_utf8[compat-utf8]
            compat[compat]
            cron[cron]
            date[date]
            default_constants[default-constants]
            default_filters[default-filters]
            default_widgets[default-widgets]
            deprecated[deprecated]
            embed_template[embed-template]
            embed[embed]
            error_protection[error-protection]
            feed_atom_comments[feed-atom-comments]
            feed_atom[feed-atom]
            feed_rdf[feed-rdf]
            feed_rss[feed-rss]
            feed_rss2_comments[feed-rss2-comments]
            feed_rss2[feed-rss2]
            feed[feed]
            fonts[fonts]
            formatting[formatting]
            functions[functions]
            functions.wp_scripts[functions.wp-scripts]
            functions.wp_styles[functions.wp-styles]
            general_template[general-template]
            global_styles_and_settings[global-styles-and-settings]
            http[http]
            https_detection[https-detection]
            https_migration[https-migration]
            kses[kses]
            l10n[l10n]
            link_template[link-template]
            load[load]
            locale[locale]
            media_template[media-template]
            media[media]
            meta[meta]
            ms_blogs[ms-blogs]
            ms_default_constants[ms-default-constants]
            ms_default_filters[ms-default-filters]
            ms_deprecated[ms-deprecated]
            ms_files[ms-files]
            ms_functions[ms-functions]
            ms_load[ms-load]
            ms_network[ms-network]
            ms_settings[ms-settings]
            ms_site[ms-site]
            nav_menu_template[nav-menu-template]
            nav_menu[nav-menu]
            option[option]
            pluggable_deprecated[pluggable-deprecated]
            pluggable[pluggable]
            plugin[plugin]
            post_formats[post-formats]
            post_template[post-template]
            post_thumbnail_template[post-thumbnail-template]
            post[post]
            query[query]
            registration_functions[registration-functions]
            registration[registration]
            rest_api[rest-api]
            revision[revision]
            rewrite[rewrite]
            robots_template[robots-template]
            rss_functions[rss-functions]
            rss[rss]
            script_loader[script-loader]
            script_modules[script-modules]
            session[session]
            shortcodes[shortcodes]
            sitemaps[sitemaps]
            speculative_loading[speculative-loading]
            spl_autoload_compat[spl-autoload-compat]
            style_engine[style-engine]
            taxonomy[taxonomy]
            template_canvas[template-canvas]
            template_loader[template-loader]
            template[template]
            theme_previews[theme-previews]
            theme_templates[theme-templates]
            theme[theme]
            update[update]
            user[user]
            utf8[utf8]
            vars[vars]
            version[version]
            widgets[widgets]
            wp_db[wp-db]
            wp_diff[wp-diff]
            script_loader_packages.min[script-loader-packages.min]
            script_loader_packages[script-loader-packages]
            script_loader_react_refresh_entry.min[script-loader-react-refresh-entry.min]
            script_loader_react_refresh_entry[script-loader-react-refresh-entry]
            script_loader_react_refresh_runtime.min[script-loader-react-refresh-runtime.min]
            script_loader_react_refresh_runtime[script-loader-react-refresh-runtime]
            script_modules_packages.min[script-modules-packages.min]
            script_modules_packages[script-modules-packages]
            pattern_overrides[pattern-overrides]
            post_data[post-data]
            post_meta[post-meta]
            query_grid_posts[query-grid-posts]
            query_large_title_posts[query-large-title-posts]
            query_medium_posts[query-medium-posts]
            query_offset_posts[query-offset-posts]
            query_small_posts[query-small-posts]
            query_standard_posts[query-standard-posts]
            social_links_shared_background_color[social-links-shared-background-color]
            align[align]
            aria_label[aria-label]
            background[background]
            block_style_variations[block-style-variations]
            border[border]
            colors[colors]
            custom_classname[custom-classname]
            dimensions[dimensions]
            duotone[duotone]
            elements[elements]
            generated_classname[generated-classname]
            layout[layout]
            position[position]
            settings[settings]
            shadow[shadow]
            spacing[spacing]
            typography[typography]
            utils[utils]
            archives[archives]
            avatar[avatar]
            block[block]
            blocks_json[blocks-json]
            button[button]
            calendar[calendar]
            categories[categories]
            comment_author_name[comment-author-name]
            comment_content[comment-content]
            comment_date[comment-date]
            comment_edit_link[comment-edit-link]
            comment_reply_link[comment-reply-link]
            comments_pagination_next[comments-pagination-next]
            comments_pagination_numbers[comments-pagination-numbers]
            comments_pagination_previous[comments-pagination-previous]
            comments_pagination[comments-pagination]
            comments_title[comments-title]
            comments[comments]
            cover[cover]
            file[file]
            footnotes[footnotes]
            gallery[gallery]
            heading[heading]
            home_link[home-link]
            image[image]
            index[index]
            legacy_widget[legacy-widget]
            list[list]
            loginout[loginout]
            media_text[media-text]
            navigation_link[navigation-link]
            navigation_submenu[navigation-submenu]
            navigation[navigation]
            page_list_item[page-list-item]
            page_list[page-list]
            pattern[pattern]
            post_author_biography[post-author-biography]
            post_author_name[post-author-name]
            post_author[post-author]
            post_comments_form[post-comments-form]
            post_content[post-content]
            post_date[post-date]
            post_excerpt[post-excerpt]
            post_featured_image[post-featured-image]
            post_navigation_link[post-navigation-link]
            post_terms[post-terms]
            post_title[post-title]
            query_no_results[query-no-results]
            query_pagination_next[query-pagination-next]
            query_pagination_numbers[query-pagination-numbers]
            query_pagination_previous[query-pagination-previous]
            query_pagination[query-pagination]
            query_title[query-title]
            query_total[query-total]
            read_more[read-more]
            require_dynamic_blocks[require-dynamic-blocks]
            require_static_blocks[require-static-blocks]
            search[search]
            shortcode[shortcode]
            site_logo[site-logo]
            site_tagline[site-tagline]
            site_title[site-title]
            social_link[social-link]
            tag_cloud[tag-cloud]
            template_part[template-part]
            term_description[term-description]
            widget_group[widget-group]
            view.asset[view.asset]
            view.min.asset[view.min.asset]
            view_modal.asset[view-modal.asset]
            view_modal.min.asset[view-modal.min.asset]
            class_wp_customize_background_image_control[class-wp-customize-background-image-control]
            class_wp_customize_background_image_setting[class-wp-customize-background-image-setting]
            class_wp_customize_background_position_control[class-wp-customize-background-position-control]
            class_wp_customize_code_editor_control[class-wp-customize-code-editor-control]
            class_wp_customize_color_control[class-wp-customize-color-control]
            class_wp_customize_cropped_image_control[class-wp-customize-cropped-image-control]
            class_wp_customize_custom_css_setting[class-wp-customize-custom-css-setting]
            class_wp_customize_date_time_control[class-wp-customize-date-time-control]
            class_wp_customize_filter_setting[class-wp-customize-filter-setting]
            class_wp_customize_header_image_control[class-wp-customize-header-image-control]
            class_wp_customize_header_image_setting[class-wp-customize-header-image-setting]
            class_wp_customize_image_control[class-wp-customize-image-control]
            class_wp_customize_media_control[class-wp-customize-media-control]
            class_wp_customize_nav_menu_auto_add_control[class-wp-customize-nav-menu-auto-add-control]
            class_wp_customize_nav_menu_control[class-wp-customize-nav-menu-control]
            class_wp_customize_nav_menu_item_control[class-wp-customize-nav-menu-item-control]
            class_wp_customize_nav_menu_item_setting[class-wp-customize-nav-menu-item-setting]
            class_wp_customize_nav_menu_location_control[class-wp-customize-nav-menu-location-control]
            class_wp_customize_nav_menu_locations_control[class-wp-customize-nav-menu-locations-control]
            class_wp_customize_nav_menu_name_control[class-wp-customize-nav-menu-name-control]
            class_wp_customize_nav_menu_section[class-wp-customize-nav-menu-section]
            class_wp_customize_nav_menu_setting[class-wp-customize-nav-menu-setting]
            class_wp_customize_nav_menus_panel[class-wp-customize-nav-menus-panel]
            class_wp_customize_new_menu_control[class-wp-customize-new-menu-control]
            class_wp_customize_new_menu_section[class-wp-customize-new-menu-section]
            class_wp_customize_partial[class-wp-customize-partial]
            class_wp_customize_selective_refresh[class-wp-customize-selective-refresh]
            class_wp_customize_sidebar_section[class-wp-customize-sidebar-section]
            class_wp_customize_site_icon_control[class-wp-customize-site-icon-control]
            class_wp_customize_theme_control[class-wp-customize-theme-control]
            class_wp_customize_themes_panel[class-wp-customize-themes-panel]
            class_wp_customize_themes_section[class-wp-customize-themes-section]
            class_wp_customize_upload_control[class-wp-customize-upload-control]
            class_wp_sidebar_block_editor_control[class-wp-sidebar-block-editor-control]
            class_wp_widget_area_customize_control[class-wp-widget-area-customize-control]
            class_wp_widget_form_customize_control[class-wp-widget-form-customize-control]
            class_wp_font_collection[class-wp-font-collection]
            class_wp_font_face_resolver[class-wp-font-face-resolver]
            class_wp_font_face[class-wp-font-face]
            class_wp_font_library[class-wp-font-library]
            class_wp_font_utils[class-wp-font-utils]
            class_wp_html_active_formatting_elements[class-wp-html-active-formatting-elements]
            class_wp_html_attribute_token[class-wp-html-attribute-token]
            class_wp_html_decoder[class-wp-html-decoder]
            class_wp_html_doctype_info[class-wp-html-doctype-info]
            class_wp_html_open_elements[class-wp-html-open-elements]
            class_wp_html_processor_state[class-wp-html-processor-state]
            class_wp_html_processor[class-wp-html-processor]
            class_wp_html_span[class-wp-html-span]
            class_wp_html_stack_event[class-wp-html-stack-event]
            class_wp_html_tag_processor[class-wp-html-tag-processor]
            class_wp_html_text_replacement[class-wp-html-text-replacement]
            class_wp_html_token[class-wp-html-token]
            class_wp_html_unsupported_exception[class-wp-html-unsupported-exception]
            html5_named_character_references[html5-named-character-references]
            getid3.lib[getid3.lib]
            getid3[getid3]
            module.audio_video.asf[module.audio-video.asf]
            module.audio_video.flv[module.audio-video.flv]
            module.audio_video.matroska[module.audio-video.matroska]
            module.audio_video.quicktime[module.audio-video.quicktime]
            module.audio_video.riff[module.audio-video.riff]
            module.audio.ac3[module.audio.ac3]
            module.audio.dts[module.audio.dts]
            module.audio.flac[module.audio.flac]
            module.audio.mp3[module.audio.mp3]
            module.audio.ogg[module.audio.ogg]
            module.tag.apetag[module.tag.apetag]
            module.tag.id3v1[module.tag.id3v1]
            module.tag.id3v2[module.tag.id3v2]
            module.tag.lyrics3[module.tag.lyrics3]
            class_wp_interactivity_api_directives_processor[class-wp-interactivity-api-directives-processor]
            class_wp_interactivity_api[class-wp-interactivity-api]
            interactivity_api[interactivity-api]
            class_IXR_base64[class-IXR-base64]
            class_IXR_client[class-IXR-client]
            class_IXR_clientmulticall[class-IXR-clientmulticall]
            class_IXR_date[class-IXR-date]
            class_IXR_error[class-IXR-error]
            class_IXR_introspectionserver[class-IXR-introspectionserver]
            class_IXR_message[class-IXR-message]
            class_IXR_request[class-IXR-request]
            class_IXR_server[class-IXR-server]
            class_IXR_value[class-IXR-value]
            wp_tinymce[wp-tinymce]
            class_wp_translation_controller[class-wp-translation-controller]
            class_wp_translation_file_mo[class-wp-translation-file-mo]
            class_wp_translation_file_php[class-wp-translation-file-php]
            class_wp_translation_file[class-wp-translation-file]
            class_wp_translations[class-wp-translations]
            readonly[readonly]
            DSNConfigurator[DSNConfigurator]
            Exception[Exception]
            OAuth[OAuth]
            OAuthTokenProvider[OAuthTokenProvider]
            PHPMailer[PHPMailer]
            POP3[POP3]
            SMTP[SMTP]
            entry[entry]
            mo[mo]
            plural_forms[plural-forms]
            po[po]
            streams[streams]
            translations[translations]
            Requests[Requests]
            Auth[Auth]
            Autoload[Autoload]
            Capability[Capability]
            Cookie[Cookie]
            HookManager[HookManager]
            Hooks[Hooks]
            IdnaEncoder[IdnaEncoder]
            Ipv6[Ipv6]
            Iri[Iri]
            Port[Port]
            Proxy[Proxy]
            Response[Response]
            Session[Session]
            Ssl[Ssl]
            Transport[Transport]
            Basic[Basic]
            Jar[Jar]
            ArgumentCount[ArgumentCount]
            Http[Http]
            InvalidArgument[InvalidArgument]
            Status304[Status304]
            Status305[Status305]
            Status306[Status306]
            Status400[Status400]
            Status401[Status401]
            Status402[Status402]
            Status403[Status403]
            Status404[Status404]
            Status405[Status405]
            Status406[Status406]
            Status407[Status407]
            Status408[Status408]
            Status409[Status409]
            Status410[Status410]
            Status411[Status411]
            Status412[Status412]
            Status413[Status413]
            Status414[Status414]
            Status415[Status415]
            Status416[Status416]
            Status417[Status417]
            Status418[Status418]
            Status428[Status428]
            Status429[Status429]
            Status431[Status431]
            Status500[Status500]
            Status501[Status501]
            Status502[Status502]
            Status503[Status503]
            Status504[Status504]
            Status505[Status505]
            Status511[Status511]
            StatusUnknown[StatusUnknown]
            Curl[Curl]
            Headers[Headers]
            Fsockopen[Fsockopen]
            CaseInsensitiveDictionary[CaseInsensitiveDictionary]
            FilteredIterator[FilteredIterator]
            InputValidator[InputValidator]
            class_wp_rest_request[class-wp-rest-request]
            class_wp_rest_response[class-wp-rest-response]
            class_wp_rest_server[class-wp-rest-server]
            class_wp_rest_application_passwords_controller[class-wp-rest-application-passwords-controller]
            class_wp_rest_attachments_controller[class-wp-rest-attachments-controller]
            class_wp_rest_autosaves_controller[class-wp-rest-autosaves-controller]
            class_wp_rest_block_directory_controller[class-wp-rest-block-directory-controller]
            class_wp_rest_block_pattern_categories_controller[class-wp-rest-block-pattern-categories-controller]
            class_wp_rest_block_patterns_controller[class-wp-rest-block-patterns-controller]
            class_wp_rest_block_renderer_controller[class-wp-rest-block-renderer-controller]
            class_wp_rest_block_types_controller[class-wp-rest-block-types-controller]
            class_wp_rest_blocks_controller[class-wp-rest-blocks-controller]
            class_wp_rest_comments_controller[class-wp-rest-comments-controller]
            class_wp_rest_controller[class-wp-rest-controller]
            class_wp_rest_edit_site_export_controller[class-wp-rest-edit-site-export-controller]
            class_wp_rest_font_collections_controller[class-wp-rest-font-collections-controller]
            class_wp_rest_font_faces_controller[class-wp-rest-font-faces-controller]
            class_wp_rest_font_families_controller[class-wp-rest-font-families-controller]
            class_wp_rest_global_styles_controller[class-wp-rest-global-styles-controller]
            class_wp_rest_global_styles_revisions_controller[class-wp-rest-global-styles-revisions-controller]
            class_wp_rest_menu_items_controller[class-wp-rest-menu-items-controller]
            class_wp_rest_menu_locations_controller[class-wp-rest-menu-locations-controller]
            class_wp_rest_menus_controller[class-wp-rest-menus-controller]
            class_wp_rest_navigation_fallback_controller[class-wp-rest-navigation-fallback-controller]
            class_wp_rest_pattern_directory_controller[class-wp-rest-pattern-directory-controller]
            class_wp_rest_plugins_controller[class-wp-rest-plugins-controller]
            class_wp_rest_post_statuses_controller[class-wp-rest-post-statuses-controller]
            class_wp_rest_post_types_controller[class-wp-rest-post-types-controller]
            class_wp_rest_posts_controller[class-wp-rest-posts-controller]
            class_wp_rest_revisions_controller[class-wp-rest-revisions-controller]
            class_wp_rest_search_controller[class-wp-rest-search-controller]
            class_wp_rest_settings_controller[class-wp-rest-settings-controller]
            class_wp_rest_sidebars_controller[class-wp-rest-sidebars-controller]
            class_wp_rest_site_health_controller[class-wp-rest-site-health-controller]
            class_wp_rest_taxonomies_controller[class-wp-rest-taxonomies-controller]
            class_wp_rest_template_autosaves_controller[class-wp-rest-template-autosaves-controller]
            class_wp_rest_template_revisions_controller[class-wp-rest-template-revisions-controller]
            class_wp_rest_templates_controller[class-wp-rest-templates-controller]
            class_wp_rest_terms_controller[class-wp-rest-terms-controller]
            class_wp_rest_themes_controller[class-wp-rest-themes-controller]
            class_wp_rest_url_details_controller[class-wp-rest-url-details-controller]
            class_wp_rest_users_controller[class-wp-rest-users-controller]
            class_wp_rest_widget_types_controller[class-wp-rest-widget-types-controller]
            class_wp_rest_widgets_controller[class-wp-rest-widgets-controller]
            class_wp_rest_comment_meta_fields[class-wp-rest-comment-meta-fields]
            class_wp_rest_meta_fields[class-wp-rest-meta-fields]
            class_wp_rest_post_meta_fields[class-wp-rest-post-meta-fields]
            class_wp_rest_term_meta_fields[class-wp-rest-term-meta-fields]
            class_wp_rest_user_meta_fields[class-wp-rest-user-meta-fields]
            class_wp_rest_post_format_search_handler[class-wp-rest-post-format-search-handler]
            class_wp_rest_post_search_handler[class-wp-rest-post-search-handler]
            class_wp_rest_search_handler[class-wp-rest-search-handler]
            class_wp_rest_term_search_handler[class-wp-rest-term-search-handler]
            autoloader[autoloader]
            SimplePie[SimplePie]
            Author[Author]
            Cache[Cache]
            Caption[Caption]
            Category[Category]
            Copyright[Copyright]
            Core[Core]
            Credit[Credit]
            Enclosure[Enclosure]
            File[File]
            gzdecode[gzdecode]
            IRI[IRI]
            Item[Item]
            Locator[Locator]
            Misc[Misc]
            Parser[Parser]
            Rating[Rating]
            Registry[Registry]
            Restriction[Restriction]
            Sanitize[Sanitize]
            Source[Source]
            Base[Base]
            DB[DB]
            Memcache[Memcache]
            Memcached[Memcached]
            MySQL[MySQL]
            Redis[Redis]
            Sniffer[Sniffer]
            Entities[Entities]
            IPv6[IPv6]
            Date[Date]
            Gzdecode[Gzdecode]
            RegistryAware[RegistryAware]
            BaseDataCache[BaseDataCache]
            CallableNameFilter[CallableNameFilter]
            DataCache[DataCache]
            NameFilter[NameFilter]
            Psr16[Psr16]
            Client[Client]
            ClientException[ClientException]
            FileClient[FileClient]
            Psr18Client[Psr18Client]
            Psr7Response[Psr7Response]
            RawTextResponse[RawTextResponse]
            class_wp_sitemaps_index[class-wp-sitemaps-index]
            class_wp_sitemaps_provider[class-wp-sitemaps-provider]
            class_wp_sitemaps_registry[class-wp-sitemaps-registry]
            class_wp_sitemaps_renderer[class-wp-sitemaps-renderer]
            class_wp_sitemaps_stylesheet[class-wp-sitemaps-stylesheet]
            class_wp_sitemaps[class-wp-sitemaps]
            class_wp_sitemaps_posts[class-wp-sitemaps-posts]
            class_wp_sitemaps_taxonomies[class-wp-sitemaps-taxonomies]
            class_wp_sitemaps_users[class-wp-sitemaps-users]
            autoload_php7[autoload-php7]
            autoload[autoload]
            constants[constants]
            namespaced[namespaced]
            php72compat[php72compat]
            php72compat_const[php72compat_const]
            php84compat[php84compat]
            php84compat_const[php84compat_const]
            ristretto255[ristretto255]
            sodium_compat[sodium_compat]
            stream_xchacha20[stream-xchacha20]
            Compat[Compat]
            Crypto[Crypto]
            BLAKE2b[BLAKE2b]
            ChaCha20[ChaCha20]
            Curve25519[Curve25519]
            Ed25519[Ed25519]
            HChaCha20[HChaCha20]
            HSalsa20[HSalsa20]
            Poly1305[Poly1305]
            Salsa20[Salsa20]
            SipHash[SipHash]
            Util[Util]
            X25519[X25519]
            XChaCha20[XChaCha20]
            Xsalsa20[Xsalsa20]
            Ctx[Ctx]
            IetfCtx[IetfCtx]
            Fe[Fe]
            H[H]
            Cached[Cached]
            P1p1[P1p1]
            P2[P2]
            P3[P3]
            Precomp[Precomp]
            State[State]
            Crypto32[Crypto32]
            SodiumException[SodiumException]
            AEGIS128L[AEGIS128L]
            AEGIS256[AEGIS256]
            AES[AES]
            Ristretto255[Ristretto255]
            XSalsa20[XSalsa20]
            State128L[State128L]
            State256[State256]
            Block[Block]
            Expanded[Expanded]
            KeySchedule[KeySchedule]
            Original[Original]
            UrlSafe[UrlSafe]
            Int32[Int32]
            Int64[Int64]
            SplFixedArray[SplFixedArray]
            class_wp_style_engine_css_declarations[class-wp-style-engine-css-declarations]
            class_wp_style_engine_css_rule[class-wp-style-engine-css-rule]
            class_wp_style_engine_css_rules_store[class-wp-style-engine-css-rules-store]
            class_wp_style_engine_processor[class-wp-style-engine-processor]
            class_wp_style_engine[class-wp-style-engine]
            Diff[Diff]
            Renderer[Renderer]
            native[native]
            shell[shell]
            string[string]
            xdiff[xdiff]
            inline[inline]
            embed_404[embed-404]
            embed_content[embed-content]
            footer_embed[footer-embed]
            footer[footer]
            header_embed[header-embed]
            header[header]
            sidebar[sidebar]
            class_wp_nav_menu_widget[class-wp-nav-menu-widget]
            class_wp_widget_archives[class-wp-widget-archives]
            class_wp_widget_block[class-wp-widget-block]
            class_wp_widget_calendar[class-wp-widget-calendar]
            class_wp_widget_categories[class-wp-widget-categories]
            class_wp_widget_custom_html[class-wp-widget-custom-html]
            class_wp_widget_links[class-wp-widget-links]
            class_wp_widget_media_audio[class-wp-widget-media-audio]
            class_wp_widget_media_gallery[class-wp-widget-media-gallery]
            class_wp_widget_media_image[class-wp-widget-media-image]
            class_wp_widget_media_video[class-wp-widget-media-video]
            class_wp_widget_media[class-wp-widget-media]
            class_wp_widget_meta[class-wp-widget-meta]
            class_wp_widget_pages[class-wp-widget-pages]
            class_wp_widget_recent_comments[class-wp-widget-recent-comments]
            class_wp_widget_recent_posts[class-wp-widget-recent-posts]
            class_wp_widget_rss[class-wp-widget-rss]
            class_wp_widget_search[class-wp-widget-search]
            class_wp_widget_tag_cloud[class-wp-widget-tag-cloud]
            class_wp_widget_text[class-wp-widget-text]
        end
    end

    %% Component Dependencies

    %% External Layer Dependencies
    Admin[Admin Layer]
    class_wp_textdomain_registry -.-> Admin
    class_wp_customize_header_image_setting -.-> Admin
    class_wp_customize_nav_menus_panel -.-> Admin
    class_wp_rest_plugins_controller -.-> Admin
    class_wp_rest_plugins_controller -.-> Admin
    class_wp_rest_plugins_controller -.-> Admin
    class_wp_rest_plugins_controller -.-> Admin
    class_wp_rest_site_health_controller -.-> Admin
    class_wp_rest_site_health_controller -.-> Admin
    class_wp_rest_site_health_controller -.-> Admin
```

---

## Component List

### Components

#### AEGIS128L

**Purpose:** AEGIS128L component

**File:** `AEGIS128L.php`

**Architectural Issues:** 1 violations detected

---

#### AEGIS256

**Purpose:** AEGIS256 component

**File:** `AEGIS256.php`

**Architectural Issues:** 1 violations detected

---

#### AES

**Purpose:** AES component

**File:** `AES.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentCount

**Purpose:** ArgumentCount component

**File:** `ArgumentCount.php`

**Architectural Issues:** 1 violations detected

---

#### Auth

**Purpose:** Auth component

**File:** `Auth.php`

**Architectural Issues:** 1 violations detected

---

#### Author

**Purpose:** Author component

**File:** `Author.php`

**Architectural Issues:** 2 violations detected

---

#### Autoload

**Purpose:** Autoload component

**File:** `Autoload.php`

**Architectural Issues:** 1 violations detected

---

#### BLAKE2b

**Purpose:** BLAKE2b component

**File:** `BLAKE2b.php`

**Architectural Issues:** 3 violations detected

---

#### Base

**Purpose:** Base component

**File:** `Base.php`

**Architectural Issues:** 2 violations detected

---

#### BaseDataCache

**Purpose:** BaseDataCache component

**File:** `BaseDataCache.php`

**Architectural Issues:** 1 violations detected

---

#### Basic

**Purpose:** Basic component

**File:** `Basic.php`

**Architectural Issues:** 1 violations detected

---

#### Block

**Purpose:** Block component

**File:** `Block.php`

**Architectural Issues:** 1 violations detected

---

#### Cache

**Purpose:** Cache component

**File:** `Cache.php`

**Architectural Issues:** 2 violations detected

---

#### Cached

**Purpose:** Cached component

**File:** `Cached.php`

**Architectural Issues:** 3 violations detected

---

#### CallableNameFilter

**Purpose:** CallableNameFilter component

**File:** `CallableNameFilter.php`

**Architectural Issues:** 1 violations detected

---

#### Capability

**Purpose:** Capability component

**File:** `Capability.php`

**Architectural Issues:** 1 violations detected

---

#### Caption

**Purpose:** Caption component

**File:** `Caption.php`

**Architectural Issues:** 2 violations detected

---

#### CaseInsensitiveDictionary

**Purpose:** CaseInsensitiveDictionary component

**File:** `CaseInsensitiveDictionary.php`

**Architectural Issues:** 1 violations detected

---

#### Category

**Purpose:** Category component

**File:** `Category.php`

**Architectural Issues:** 2 violations detected

---

#### ChaCha20

**Purpose:** ChaCha20 component

**File:** `ChaCha20.php`

**Architectural Issues:** 3 violations detected

---

#### Client

**Purpose:** Client component

**File:** `Client.php`

**Architectural Issues:** 1 violations detected

---

#### ClientException

**Purpose:** ClientException component

**File:** `ClientException.php`

**Architectural Issues:** 1 violations detected

---

#### Compat

**Purpose:** Compat component

**File:** `Compat.php`

**Architectural Issues:** 2 violations detected

---

#### Cookie

**Purpose:** Cookie component

**File:** `Cookie.php`

**Architectural Issues:** 1 violations detected

---

#### Copyright

**Purpose:** Copyright component

**File:** `Copyright.php`

**Architectural Issues:** 2 violations detected

---

#### Core

**Purpose:** Core component

**File:** `Core.php`

**Architectural Issues:** 1 violations detected

---

#### Credit

**Purpose:** Credit component

**File:** `Credit.php`

**Architectural Issues:** 2 violations detected

---

#### Crypto

**Purpose:** Crypto component

**File:** `Crypto.php`

**Architectural Issues:** 2 violations detected

---

#### Crypto32

**Purpose:** Crypto32 component

**File:** `Crypto32.php`

**Architectural Issues:** 1 violations detected

---

#### Ctx

**Purpose:** Ctx component

**File:** `Ctx.php`

**Architectural Issues:** 3 violations detected

---

#### Curl

**Purpose:** Curl component

**File:** `Curl.php`

**Architectural Issues:** 2 violations detected

---

#### Curve25519

**Purpose:** Curve25519 component

**File:** `Curve25519.php`

**Architectural Issues:** 3 violations detected

---

#### DB

**Purpose:** DB component

**File:** `DB.php`

**Architectural Issues:** 2 violations detected

---

#### DSNConfigurator

**Purpose:** DSNConfigurator component

**File:** `DSNConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### DataCache

**Purpose:** DataCache component

**File:** `DataCache.php`

**Architectural Issues:** 1 violations detected

---

#### Date

**Purpose:** Date component

**File:** `Date.php`

**Architectural Issues:** 2 violations detected

---

#### Diff

**Purpose:** Diff component

**File:** `Diff.php`

**Architectural Issues:** 1 violations detected

---

#### Ed25519

**Purpose:** Ed25519 component

**File:** `Ed25519.php`

**Architectural Issues:** 3 violations detected

---

#### Enclosure

**Purpose:** Enclosure component

**File:** `Enclosure.php`

**Architectural Issues:** 2 violations detected

---

#### Entities

**Purpose:** Entities component

**File:** `Entities.php`

**Architectural Issues:** 1 violations detected

---

#### Exception

**Purpose:** Exception component

**File:** `Exception.php`

**Architectural Issues:** 5 violations detected

---

#### Expanded

**Purpose:** Expanded component

**File:** `Expanded.php`

**Architectural Issues:** 1 violations detected

---

#### Fe

**Purpose:** Fe component

**File:** `Fe.php`

**Architectural Issues:** 3 violations detected

---

#### File

**Purpose:** File component

**File:** `File.php`

**Architectural Issues:** 6 violations detected

---

#### FileClient

**Purpose:** FileClient component

**File:** `FileClient.php`

**Architectural Issues:** 1 violations detected

---

#### FilteredIterator

**Purpose:** FilteredIterator component

**File:** `FilteredIterator.php`

**Architectural Issues:** 1 violations detected

---

#### Fsockopen

**Purpose:** Fsockopen component

**File:** `Fsockopen.php`

**Architectural Issues:** 1 violations detected

---

#### Gzdecode

**Purpose:** Gzdecode component

**File:** `Gzdecode.php`

**Architectural Issues:** 1 violations detected

---

#### H

**Purpose:** H component

**File:** `H.php`

**Architectural Issues:** 3 violations detected

---

#### HChaCha20

**Purpose:** HChaCha20 component

**File:** `HChaCha20.php`

**Architectural Issues:** 3 violations detected

---

#### HSalsa20

**Purpose:** HSalsa20 component

**File:** `HSalsa20.php`

**Architectural Issues:** 3 violations detected

---

#### Headers

**Purpose:** Headers component

**File:** `Headers.php`

**Architectural Issues:** 1 violations detected

---

#### HookManager

**Purpose:** Manages Hook operations

**File:** `HookManager.php`

**Architectural Issues:** 1 violations detected

---

#### Hooks

**Purpose:** Hooks component

**File:** `Hooks.php`

**Architectural Issues:** 1 violations detected

---

#### Http

**Purpose:** Http component

**File:** `Http.php`

**Architectural Issues:** 2 violations detected

---

#### IPv6

**Purpose:** IPv6 component

**File:** `IPv6.php`

**Architectural Issues:** 2 violations detected

---

#### IRI

**Purpose:** IRI component

**File:** `IRI.php`

**Architectural Issues:** 2 violations detected

---

#### IdnaEncoder

**Purpose:** IdnaEncoder component

**File:** `IdnaEncoder.php`

**Architectural Issues:** 1 violations detected

---

#### IetfCtx

**Purpose:** IetfCtx component

**File:** `IetfCtx.php`

**Architectural Issues:** 3 violations detected

---

#### InputValidator

**Purpose:** InputValidator component

**File:** `InputValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Int32

**Purpose:** Int32 component

**File:** `Int32.php`

**Architectural Issues:** 1 violations detected

---

#### Int64

**Purpose:** Int64 component

**File:** `Int64.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidArgument

**Purpose:** InvalidArgument component

**File:** `InvalidArgument.php`

**Architectural Issues:** 1 violations detected

---

#### Ipv6

**Purpose:** Ipv6 component

**File:** `Ipv6.php`

**Architectural Issues:** 1 violations detected

---

#### Iri

**Purpose:** Iri component

**File:** `Iri.php`

**Architectural Issues:** 1 violations detected

---

#### Item

**Purpose:** Item component

**File:** `Item.php`

**Architectural Issues:** 2 violations detected

---

#### Jar

**Purpose:** Jar component

**File:** `Jar.php`

**Architectural Issues:** 1 violations detected

---

#### KeySchedule

**Purpose:** KeySchedule component

**File:** `KeySchedule.php`

**Architectural Issues:** 1 violations detected

---

#### Locator

**Purpose:** Locator component

**File:** `Locator.php`

**Architectural Issues:** 2 violations detected

---

#### Memcache

**Purpose:** Memcache component

**File:** `Memcache.php`

**Architectural Issues:** 2 violations detected

---

#### Memcached

**Purpose:** Memcached component

**File:** `Memcached.php`

**Architectural Issues:** 2 violations detected

---

#### Misc

**Purpose:** Misc component

**File:** `Misc.php`

**Architectural Issues:** 2 violations detected

---

#### MySQL

**Purpose:** MySQL component

**File:** `MySQL.php`

**Architectural Issues:** 2 violations detected

---

#### NameFilter

**Purpose:** NameFilter component

**File:** `NameFilter.php`

**Architectural Issues:** 1 violations detected

---

#### OAuth

**Purpose:** OAuth component

**File:** `OAuth.php`

**Architectural Issues:** 1 violations detected

---

#### OAuthTokenProvider

**Purpose:** OAuthTokenProvider component

**File:** `OAuthTokenProvider.php`

**Architectural Issues:** 1 violations detected

---

#### Original

**Purpose:** Original component

**File:** `Original.php`

**Architectural Issues:** 1 violations detected

---

#### P1p1

**Purpose:** P1p1 component

**File:** `P1p1.php`

**Architectural Issues:** 3 violations detected

---

#### P2

**Purpose:** P2 component

**File:** `P2.php`

**Architectural Issues:** 3 violations detected

---

#### P3

**Purpose:** P3 component

**File:** `P3.php`

**Architectural Issues:** 3 violations detected

---

#### PHPMailer

**Purpose:** PHPMailer component

**File:** `PHPMailer.php`

**Architectural Issues:** 1 violations detected

---

#### POP3

**Purpose:** POP3 component

**File:** `POP3.php`

**Architectural Issues:** 1 violations detected

---

#### Parser

**Purpose:** Parser component

**File:** `Parser.php`

**Architectural Issues:** 6 violations detected

---

#### Poly1305

**Purpose:** Poly1305 component

**File:** `Poly1305.php`

**Architectural Issues:** 3 violations detected

---

#### Port

**Purpose:** Port component

**File:** `Port.php`

**Architectural Issues:** 1 violations detected

---

#### Precomp

**Purpose:** Precomp component

**File:** `Precomp.php`

**Architectural Issues:** 3 violations detected

---

#### Proxy

**Purpose:** Proxy component

**File:** `Proxy.php`

**Architectural Issues:** 1 violations detected

---

#### Psr16

**Purpose:** Psr16 component

**File:** `Psr16.php`

**Architectural Issues:** 1 violations detected

---

#### Psr18Client

**Purpose:** Psr18Client component

**File:** `Psr18Client.php`

**Architectural Issues:** 1 violations detected

---

#### Psr7Response

**Purpose:** Psr7Response component

**File:** `Psr7Response.php`

**Architectural Issues:** 1 violations detected

---

#### Rating

**Purpose:** Rating component

**File:** `Rating.php`

**Architectural Issues:** 2 violations detected

---

#### RawTextResponse

**Purpose:** RawTextResponse component

**File:** `RawTextResponse.php`

**Architectural Issues:** 1 violations detected

---

#### Redis

**Purpose:** Redis component

**File:** `Redis.php`

**Architectural Issues:** 2 violations detected

---

#### Registry

**Purpose:** Registry component

**File:** `Registry.php`

**Architectural Issues:** 2 violations detected

---

#### RegistryAware

**Purpose:** RegistryAware component

**File:** `RegistryAware.php`

**Architectural Issues:** 1 violations detected

---

#### Renderer

**Purpose:** Renderer component

**File:** `Renderer.php`

**Architectural Issues:** 1 violations detected

---

#### Requests

**Purpose:** Requests component

**File:** `Requests.php`

**Architectural Issues:** 2 violations detected

---

#### Response

**Purpose:** Response component

**File:** `Response.php`

**Architectural Issues:** 2 violations detected

---

#### Restriction

**Purpose:** Restriction component

**File:** `Restriction.php`

**Architectural Issues:** 2 violations detected

---

#### Ristretto255

**Purpose:** Ristretto255 component

**File:** `Ristretto255.php`

**Architectural Issues:** 1 violations detected

---

#### SMTP

**Purpose:** SMTP component

**File:** `SMTP.php`

**Architectural Issues:** 1 violations detected

---

#### Salsa20

**Purpose:** Salsa20 component

**File:** `Salsa20.php`

**Architectural Issues:** 3 violations detected

---

#### Sanitize

**Purpose:** Sanitize component

**File:** `Sanitize.php`

**Architectural Issues:** 2 violations detected

---

#### Session

**Purpose:** Session component

**File:** `Session.php`

**Architectural Issues:** 1 violations detected

---

#### SimplePie

**Purpose:** SimplePie component

**File:** `SimplePie.php`

**Architectural Issues:** 2 violations detected

---

#### SipHash

**Purpose:** SipHash component

**File:** `SipHash.php`

**Architectural Issues:** 3 violations detected

---

#### Sniffer

**Purpose:** Sniffer component

**File:** `Sniffer.php`

**Architectural Issues:** 2 violations detected

---

#### SodiumException

**Purpose:** SodiumException component

**File:** `SodiumException.php`

**Architectural Issues:** 1 violations detected

---

#### Source

**Purpose:** Source component

**File:** `Source.php`

**Architectural Issues:** 2 violations detected

---

#### SplFixedArray

**Purpose:** SplFixedArray component

**File:** `SplFixedArray.php`

**Architectural Issues:** 1 violations detected

---

#### Ssl

**Purpose:** Ssl component

**File:** `Ssl.php`

**Architectural Issues:** 1 violations detected

---

#### State

**Purpose:** State component

**File:** `State.php`

**Architectural Issues:** 5 violations detected

---

#### State128L

**Purpose:** State128L component

**File:** `State128L.php`

**Architectural Issues:** 1 violations detected

---

#### State256

**Purpose:** State256 component

**File:** `State256.php`

**Architectural Issues:** 1 violations detected

---

#### Status304

**Purpose:** Status304 component

**File:** `Status304.php`

**Architectural Issues:** 1 violations detected

---

#### Status305

**Purpose:** Status305 component

**File:** `Status305.php`

**Architectural Issues:** 1 violations detected

---

#### Status306

**Purpose:** Status306 component

**File:** `Status306.php`

**Architectural Issues:** 1 violations detected

---

#### Status400

**Purpose:** Status400 component

**File:** `Status400.php`

**Architectural Issues:** 1 violations detected

---

#### Status401

**Purpose:** Status401 component

**File:** `Status401.php`

**Architectural Issues:** 1 violations detected

---

#### Status402

**Purpose:** Status402 component

**File:** `Status402.php`

**Architectural Issues:** 1 violations detected

---

#### Status403

**Purpose:** Status403 component

**File:** `Status403.php`

**Architectural Issues:** 1 violations detected

---

#### Status404

**Purpose:** Status404 component

**File:** `Status404.php`

**Architectural Issues:** 1 violations detected

---

#### Status405

**Purpose:** Status405 component

**File:** `Status405.php`

**Architectural Issues:** 1 violations detected

---

#### Status406

**Purpose:** Status406 component

**File:** `Status406.php`

**Architectural Issues:** 1 violations detected

---

#### Status407

**Purpose:** Status407 component

**File:** `Status407.php`

**Architectural Issues:** 1 violations detected

---

#### Status408

**Purpose:** Status408 component

**File:** `Status408.php`

**Architectural Issues:** 1 violations detected

---

#### Status409

**Purpose:** Status409 component

**File:** `Status409.php`

**Architectural Issues:** 1 violations detected

---

#### Status410

**Purpose:** Status410 component

**File:** `Status410.php`

**Architectural Issues:** 1 violations detected

---

#### Status411

**Purpose:** Status411 component

**File:** `Status411.php`

**Architectural Issues:** 1 violations detected

---

#### Status412

**Purpose:** Status412 component

**File:** `Status412.php`

**Architectural Issues:** 1 violations detected

---

#### Status413

**Purpose:** Status413 component

**File:** `Status413.php`

**Architectural Issues:** 1 violations detected

---

#### Status414

**Purpose:** Status414 component

**File:** `Status414.php`

**Architectural Issues:** 1 violations detected

---

#### Status415

**Purpose:** Status415 component

**File:** `Status415.php`

**Architectural Issues:** 1 violations detected

---

#### Status416

**Purpose:** Status416 component

**File:** `Status416.php`

**Architectural Issues:** 1 violations detected

---

#### Status417

**Purpose:** Status417 component

**File:** `Status417.php`

**Architectural Issues:** 1 violations detected

---

#### Status418

**Purpose:** Status418 component

**File:** `Status418.php`

**Architectural Issues:** 1 violations detected

---

#### Status428

**Purpose:** Status428 component

**File:** `Status428.php`

**Architectural Issues:** 1 violations detected

---

#### Status429

**Purpose:** Status429 component

**File:** `Status429.php`

**Architectural Issues:** 1 violations detected

---

#### Status431

**Purpose:** Status431 component

**File:** `Status431.php`

**Architectural Issues:** 1 violations detected

---

#### Status500

**Purpose:** Status500 component

**File:** `Status500.php`

**Architectural Issues:** 1 violations detected

---

#### Status501

**Purpose:** Status501 component

**File:** `Status501.php`

**Architectural Issues:** 1 violations detected

---

#### Status502

**Purpose:** Status502 component

**File:** `Status502.php`

**Architectural Issues:** 1 violations detected

---

#### Status503

**Purpose:** Status503 component

**File:** `Status503.php`

**Architectural Issues:** 1 violations detected

---

#### Status504

**Purpose:** Status504 component

**File:** `Status504.php`

**Architectural Issues:** 1 violations detected

---

#### Status505

**Purpose:** Status505 component

**File:** `Status505.php`

**Architectural Issues:** 1 violations detected

---

#### Status511

**Purpose:** Status511 component

**File:** `Status511.php`

**Architectural Issues:** 1 violations detected

---

#### StatusUnknown

**Purpose:** StatusUnknown component

**File:** `StatusUnknown.php`

**Architectural Issues:** 1 violations detected

---

#### Transport

**Purpose:** Transport component

**File:** `Transport.php`

**Architectural Issues:** 2 violations detected

---

#### UrlSafe

**Purpose:** UrlSafe component

**File:** `UrlSafe.php`

**Architectural Issues:** 1 violations detected

---

#### Util

**Purpose:** Util component

**File:** `Util.php`

**Architectural Issues:** 3 violations detected

---

#### X25519

**Purpose:** X25519 component

**File:** `X25519.php`

**Architectural Issues:** 3 violations detected

---

#### XChaCha20

**Purpose:** XChaCha20 component

**File:** `XChaCha20.php`

**Architectural Issues:** 3 violations detected

---

#### XSalsa20

**Purpose:** XSalsa20 component

**File:** `XSalsa20.php`

**Architectural Issues:** 2 violations detected

---

#### Xsalsa20

**Purpose:** Xsalsa20 component

**File:** `Xsalsa20.php`

**Architectural Issues:** 1 violations detected

---

#### admin-bar

**Purpose:** admin-bar component

**File:** `admin-bar.php`

**Architectural Issues:** 1 violations detected

---

#### align

**Purpose:** align component

**File:** `align.php`

**Architectural Issues:** 1 violations detected

---

#### archives

**Purpose:** archives component

**File:** `archives.php`

**Architectural Issues:** 1 violations detected

---

#### aria-label

**Purpose:** aria-label component

**File:** `aria-label.php`

**Architectural Issues:** 1 violations detected

---

#### atomlib

**Purpose:** atomlib component

**File:** `atomlib.php`

**Architectural Issues:** 1 violations detected

---

#### author-template

**Purpose:** author-template component

**File:** `author-template.php`

**Architectural Issues:** 1 violations detected

---

#### autoload

**Purpose:** autoload component

**File:** `autoload.php`

**Architectural Issues:** 1 violations detected

---

#### autoload-php7

**Purpose:** autoload-php7 component

**File:** `autoload-php7.php`

**Architectural Issues:** 1 violations detected

---

#### autoloader

**Purpose:** autoloader component

**File:** `autoloader.php`

**Architectural Issues:** 1 violations detected

---

#### avatar

**Purpose:** avatar component

**File:** `avatar.php`

**Architectural Issues:** 1 violations detected

---

#### background

**Purpose:** background component

**File:** `background.php`

**Architectural Issues:** 1 violations detected

---

#### block

**Purpose:** block component

**File:** `block.php`

**Architectural Issues:** 1 violations detected

---

#### block-bindings

**Purpose:** block-bindings component

**File:** `block-bindings.php`

**Architectural Issues:** 1 violations detected

---

#### block-editor

**Purpose:** block-editor component

**File:** `block-editor.php`

**Architectural Issues:** 1 violations detected

---

#### block-patterns

**Purpose:** block-patterns component

**File:** `block-patterns.php`

**Architectural Issues:** 1 violations detected

---

#### block-style-variations

**Purpose:** block-style-variations component

**File:** `block-style-variations.php`

**Architectural Issues:** 1 violations detected

---

#### block-template

**Purpose:** block-template component

**File:** `block-template.php`

**Architectural Issues:** 1 violations detected

---

#### block-template-utils

**Purpose:** block-template-utils component

**File:** `block-template-utils.php`

**Architectural Issues:** 1 violations detected

---

#### blocks

**Purpose:** blocks component

**File:** `blocks.php`

**Architectural Issues:** 1 violations detected

---

#### blocks-json

**Purpose:** blocks-json component

**File:** `blocks-json.php`

**Architectural Issues:** 1 violations detected

---

#### bookmark

**Purpose:** bookmark component

**File:** `bookmark.php`

**Architectural Issues:** 1 violations detected

---

#### bookmark-template

**Purpose:** bookmark-template component

**File:** `bookmark-template.php`

**Architectural Issues:** 1 violations detected

---

#### border

**Purpose:** border component

**File:** `border.php`

**Architectural Issues:** 1 violations detected

---

#### button

**Purpose:** button component

**File:** `button.php`

**Architectural Issues:** 1 violations detected

---

#### cache

**Purpose:** cache component

**File:** `cache.php`

**Architectural Issues:** 1 violations detected

---

#### cache-compat

**Purpose:** cache-compat component

**File:** `cache-compat.php`

**Architectural Issues:** 1 violations detected

---

#### calendar

**Purpose:** calendar component

**File:** `calendar.php`

**Architectural Issues:** 1 violations detected

---

#### canonical

**Purpose:** canonical component

**File:** `canonical.php`

**Architectural Issues:** 1 violations detected

---

#### capabilities

**Purpose:** capabilities component

**File:** `capabilities.php`

**Architectural Issues:** 1 violations detected

---

#### categories

**Purpose:** categories component

**File:** `categories.php`

**Architectural Issues:** 1 violations detected

---

#### category

**Purpose:** category component

**File:** `category.php`

**Architectural Issues:** 1 violations detected

---

#### category-template

**Purpose:** category-template component

**File:** `category-template.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR

**Purpose:** class-IXR component

**File:** `class-IXR.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-base64

**Purpose:** class-IXR-base64 component

**File:** `class-IXR-base64.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-client

**Purpose:** class-IXR-client component

**File:** `class-IXR-client.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-clientmulticall

**Purpose:** class-IXR-clientmulticall component

**File:** `class-IXR-clientmulticall.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-date

**Purpose:** class-IXR-date component

**File:** `class-IXR-date.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-error

**Purpose:** class-IXR-error component

**File:** `class-IXR-error.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-introspectionserver

**Purpose:** class-IXR-introspectionserver component

**File:** `class-IXR-introspectionserver.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-message

**Purpose:** class-IXR-message component

**File:** `class-IXR-message.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-request

**Purpose:** class-IXR-request component

**File:** `class-IXR-request.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-server

**Purpose:** class-IXR-server component

**File:** `class-IXR-server.php`

**Architectural Issues:** 1 violations detected

---

#### class-IXR-value

**Purpose:** class-IXR-value component

**File:** `class-IXR-value.php`

**Architectural Issues:** 1 violations detected

---

#### class-avif-info

**Purpose:** class-avif-info component

**File:** `class-avif-info.php`

**Architectural Issues:** 1 violations detected

---

#### class-feed

**Purpose:** class-feed component

**File:** `class-feed.php`

**Architectural Issues:** 1 violations detected

---

#### class-http

**Purpose:** class-http component

**File:** `class-http.php`

**Architectural Issues:** 1 violations detected

---

#### class-json

**Purpose:** class-json component

**File:** `class-json.php`

**Architectural Issues:** 1 violations detected

---

#### class-oembed

**Purpose:** class-oembed component

**File:** `class-oembed.php`

**Architectural Issues:** 1 violations detected

---

#### class-phpass

**Purpose:** class-phpass component

**File:** `class-phpass.php`

**Architectural Issues:** 1 violations detected

---

#### class-phpmailer

**Purpose:** class-phpmailer component

**File:** `class-phpmailer.php`

**Architectural Issues:** 1 violations detected

---

#### class-pop3

**Purpose:** class-pop3 component

**File:** `class-pop3.php`

**Architectural Issues:** 1 violations detected

---

#### class-requests

**Purpose:** class-requests component

**File:** `class-requests.php`

**Architectural Issues:** 1 violations detected

---

#### class-simplepie

**Purpose:** class-simplepie component

**File:** `class-simplepie.php`

**Architectural Issues:** 1 violations detected

---

#### class-smtp

**Purpose:** class-smtp component

**File:** `class-smtp.php`

**Architectural Issues:** 1 violations detected

---

#### class-snoopy

**Purpose:** class-snoopy component

**File:** `class-snoopy.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-category

**Purpose:** class-walker-category component

**File:** `class-walker-category.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-category-dropdown

**Purpose:** class-walker-category-dropdown component

**File:** `class-walker-category-dropdown.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-comment

**Purpose:** class-walker-comment component

**File:** `class-walker-comment.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-nav-menu

**Purpose:** class-walker-nav-menu component

**File:** `class-walker-nav-menu.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-page

**Purpose:** class-walker-page component

**File:** `class-walker-page.php`

**Architectural Issues:** 1 violations detected

---

#### class-walker-page-dropdown

**Purpose:** class-walker-page-dropdown component

**File:** `class-walker-page-dropdown.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp

**Purpose:** class-wp component

**File:** `class-wp.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-admin-bar

**Purpose:** class-wp-admin-bar component

**File:** `class-wp-admin-bar.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-ajax-response

**Purpose:** class-wp-ajax-response component

**File:** `class-wp-ajax-response.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-application-passwords

**Purpose:** class-wp-application-passwords component

**File:** `class-wp-application-passwords.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block

**Purpose:** class-wp-block component

**File:** `class-wp-block.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-bindings-registry

**Purpose:** class-wp-block-bindings-registry component

**File:** `class-wp-block-bindings-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-bindings-source

**Purpose:** class-wp-block-bindings-source component

**File:** `class-wp-block-bindings-source.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-editor-context

**Purpose:** class-wp-block-editor-context component

**File:** `class-wp-block-editor-context.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-list

**Purpose:** class-wp-block-list component

**File:** `class-wp-block-list.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-metadata-registry

**Purpose:** class-wp-block-metadata-registry component

**File:** `class-wp-block-metadata-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-parser

**Purpose:** class-wp-block-parser component

**File:** `class-wp-block-parser.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-parser-block

**Purpose:** class-wp-block-parser-block component

**File:** `class-wp-block-parser-block.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-parser-frame

**Purpose:** class-wp-block-parser-frame component

**File:** `class-wp-block-parser-frame.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-pattern-categories-registry

**Purpose:** class-wp-block-pattern-categories-registry component

**File:** `class-wp-block-pattern-categories-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-patterns-registry

**Purpose:** class-wp-block-patterns-registry component

**File:** `class-wp-block-patterns-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-styles-registry

**Purpose:** class-wp-block-styles-registry component

**File:** `class-wp-block-styles-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-supports

**Purpose:** class-wp-block-supports component

**File:** `class-wp-block-supports.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-template

**Purpose:** class-wp-block-template component

**File:** `class-wp-block-template.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-templates-registry

**Purpose:** class-wp-block-templates-registry component

**File:** `class-wp-block-templates-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-type

**Purpose:** class-wp-block-type component

**File:** `class-wp-block-type.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-block-type-registry

**Purpose:** class-wp-block-type-registry component

**File:** `class-wp-block-type-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-classic-to-block-menu-converter

**Purpose:** class-wp-classic-to-block-menu-converter component

**File:** `class-wp-classic-to-block-menu-converter.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-comment

**Purpose:** class-wp-comment component

**File:** `class-wp-comment.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-comment-query

**Purpose:** class-wp-comment-query component

**File:** `class-wp-comment-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-background-image-control

**Purpose:** class-wp-customize-background-image-control component

**File:** `class-wp-customize-background-image-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-background-image-setting

**Purpose:** class-wp-customize-background-image-setting component

**File:** `class-wp-customize-background-image-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-background-position-control

**Purpose:** class-wp-customize-background-position-control component

**File:** `class-wp-customize-background-position-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-code-editor-control

**Purpose:** class-wp-customize-code-editor-control component

**File:** `class-wp-customize-code-editor-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-color-control

**Purpose:** class-wp-customize-color-control component

**File:** `class-wp-customize-color-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-control

**Purpose:** class-wp-customize-control component

**File:** `class-wp-customize-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-cropped-image-control

**Purpose:** class-wp-customize-cropped-image-control component

**File:** `class-wp-customize-cropped-image-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-custom-css-setting

**Purpose:** class-wp-customize-custom-css-setting component

**File:** `class-wp-customize-custom-css-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-date-time-control

**Purpose:** class-wp-customize-date-time-control component

**File:** `class-wp-customize-date-time-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-filter-setting

**Purpose:** class-wp-customize-filter-setting component

**File:** `class-wp-customize-filter-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-header-image-control

**Purpose:** class-wp-customize-header-image-control component

**File:** `class-wp-customize-header-image-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-header-image-setting

**Purpose:** class-wp-customize-header-image-setting component

**File:** `class-wp-customize-header-image-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-image-control

**Purpose:** class-wp-customize-image-control component

**File:** `class-wp-customize-image-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-manager

**Purpose:** class-wp-customize-manager component

**File:** `class-wp-customize-manager.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-media-control

**Purpose:** class-wp-customize-media-control component

**File:** `class-wp-customize-media-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-auto-add-control

**Purpose:** class-wp-customize-nav-menu-auto-add-control component

**File:** `class-wp-customize-nav-menu-auto-add-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-control

**Purpose:** class-wp-customize-nav-menu-control component

**File:** `class-wp-customize-nav-menu-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-item-control

**Purpose:** class-wp-customize-nav-menu-item-control component

**File:** `class-wp-customize-nav-menu-item-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-item-setting

**Purpose:** class-wp-customize-nav-menu-item-setting component

**File:** `class-wp-customize-nav-menu-item-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-location-control

**Purpose:** class-wp-customize-nav-menu-location-control component

**File:** `class-wp-customize-nav-menu-location-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-locations-control

**Purpose:** class-wp-customize-nav-menu-locations-control component

**File:** `class-wp-customize-nav-menu-locations-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-name-control

**Purpose:** class-wp-customize-nav-menu-name-control component

**File:** `class-wp-customize-nav-menu-name-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-section

**Purpose:** class-wp-customize-nav-menu-section component

**File:** `class-wp-customize-nav-menu-section.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menu-setting

**Purpose:** class-wp-customize-nav-menu-setting component

**File:** `class-wp-customize-nav-menu-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menus

**Purpose:** class-wp-customize-nav-menus component

**File:** `class-wp-customize-nav-menus.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-nav-menus-panel

**Purpose:** class-wp-customize-nav-menus-panel component

**File:** `class-wp-customize-nav-menus-panel.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-new-menu-control

**Purpose:** class-wp-customize-new-menu-control component

**File:** `class-wp-customize-new-menu-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-new-menu-section

**Purpose:** class-wp-customize-new-menu-section component

**File:** `class-wp-customize-new-menu-section.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-panel

**Purpose:** class-wp-customize-panel component

**File:** `class-wp-customize-panel.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-partial

**Purpose:** class-wp-customize-partial component

**File:** `class-wp-customize-partial.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-section

**Purpose:** class-wp-customize-section component

**File:** `class-wp-customize-section.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-selective-refresh

**Purpose:** class-wp-customize-selective-refresh component

**File:** `class-wp-customize-selective-refresh.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-setting

**Purpose:** class-wp-customize-setting component

**File:** `class-wp-customize-setting.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-sidebar-section

**Purpose:** class-wp-customize-sidebar-section component

**File:** `class-wp-customize-sidebar-section.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-site-icon-control

**Purpose:** class-wp-customize-site-icon-control component

**File:** `class-wp-customize-site-icon-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-theme-control

**Purpose:** class-wp-customize-theme-control component

**File:** `class-wp-customize-theme-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-themes-panel

**Purpose:** class-wp-customize-themes-panel component

**File:** `class-wp-customize-themes-panel.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-themes-section

**Purpose:** class-wp-customize-themes-section component

**File:** `class-wp-customize-themes-section.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-upload-control

**Purpose:** class-wp-customize-upload-control component

**File:** `class-wp-customize-upload-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-customize-widgets

**Purpose:** class-wp-customize-widgets component

**File:** `class-wp-customize-widgets.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-date-query

**Purpose:** class-wp-date-query component

**File:** `class-wp-date-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-dependencies

**Purpose:** class-wp-dependencies component

**File:** `class-wp-dependencies.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-dependency

**Purpose:** class-wp-dependency component

**File:** `class-wp-dependency.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-duotone

**Purpose:** class-wp-duotone component

**File:** `class-wp-duotone.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-editor

**Purpose:** class-wp-editor component

**File:** `class-wp-editor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-embed

**Purpose:** class-wp-embed component

**File:** `class-wp-embed.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-error

**Purpose:** class-wp-error component

**File:** `class-wp-error.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-exception

**Purpose:** class-wp-exception component

**File:** `class-wp-exception.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-fatal-error-handler

**Purpose:** class-wp-fatal-error-handler component

**File:** `class-wp-fatal-error-handler.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-feed-cache

**Purpose:** class-wp-feed-cache component

**File:** `class-wp-feed-cache.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-feed-cache-transient

**Purpose:** class-wp-feed-cache-transient component

**File:** `class-wp-feed-cache-transient.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-font-collection

**Purpose:** class-wp-font-collection component

**File:** `class-wp-font-collection.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-font-face

**Purpose:** class-wp-font-face component

**File:** `class-wp-font-face.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-font-face-resolver

**Purpose:** class-wp-font-face-resolver component

**File:** `class-wp-font-face-resolver.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-font-library

**Purpose:** class-wp-font-library component

**File:** `class-wp-font-library.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-font-utils

**Purpose:** class-wp-font-utils component

**File:** `class-wp-font-utils.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-hook

**Purpose:** class-wp-hook component

**File:** `class-wp-hook.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-active-formatting-elements

**Purpose:** class-wp-html-active-formatting-elements component

**File:** `class-wp-html-active-formatting-elements.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-attribute-token

**Purpose:** class-wp-html-attribute-token component

**File:** `class-wp-html-attribute-token.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-decoder

**Purpose:** class-wp-html-decoder component

**File:** `class-wp-html-decoder.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-doctype-info

**Purpose:** class-wp-html-doctype-info component

**File:** `class-wp-html-doctype-info.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-open-elements

**Purpose:** class-wp-html-open-elements component

**File:** `class-wp-html-open-elements.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-processor

**Purpose:** class-wp-html-processor component

**File:** `class-wp-html-processor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-processor-state

**Purpose:** class-wp-html-processor-state component

**File:** `class-wp-html-processor-state.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-span

**Purpose:** class-wp-html-span component

**File:** `class-wp-html-span.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-stack-event

**Purpose:** class-wp-html-stack-event component

**File:** `class-wp-html-stack-event.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-tag-processor

**Purpose:** class-wp-html-tag-processor component

**File:** `class-wp-html-tag-processor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-text-replacement

**Purpose:** class-wp-html-text-replacement component

**File:** `class-wp-html-text-replacement.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-token

**Purpose:** class-wp-html-token component

**File:** `class-wp-html-token.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-html-unsupported-exception

**Purpose:** class-wp-html-unsupported-exception component

**File:** `class-wp-html-unsupported-exception.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http

**Purpose:** class-wp-http component

**File:** `class-wp-http.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-cookie

**Purpose:** class-wp-http-cookie component

**File:** `class-wp-http-cookie.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-curl

**Purpose:** class-wp-http-curl component

**File:** `class-wp-http-curl.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-encoding

**Purpose:** class-wp-http-encoding component

**File:** `class-wp-http-encoding.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-ixr-client

**Purpose:** class-wp-http-ixr-client component

**File:** `class-wp-http-ixr-client.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-proxy

**Purpose:** class-wp-http-proxy component

**File:** `class-wp-http-proxy.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-requests-hooks

**Purpose:** class-wp-http-requests-hooks component

**File:** `class-wp-http-requests-hooks.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-requests-response

**Purpose:** class-wp-http-requests-response component

**File:** `class-wp-http-requests-response.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-response

**Purpose:** class-wp-http-response component

**File:** `class-wp-http-response.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-http-streams

**Purpose:** class-wp-http-streams component

**File:** `class-wp-http-streams.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-image-editor

**Purpose:** class-wp-image-editor component

**File:** `class-wp-image-editor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-image-editor-gd

**Purpose:** class-wp-image-editor-gd component

**File:** `class-wp-image-editor-gd.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-image-editor-imagick

**Purpose:** class-wp-image-editor-imagick component

**File:** `class-wp-image-editor-imagick.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-interactivity-api

**Purpose:** class-wp-interactivity-api component

**File:** `class-wp-interactivity-api.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-interactivity-api-directives-processor

**Purpose:** class-wp-interactivity-api-directives-processor component

**File:** `class-wp-interactivity-api-directives-processor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-list-util

**Purpose:** class-wp-list-util component

**File:** `class-wp-list-util.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-locale

**Purpose:** class-wp-locale component

**File:** `class-wp-locale.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-locale-switcher

**Purpose:** class-wp-locale-switcher component

**File:** `class-wp-locale-switcher.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-matchesmapregex

**Purpose:** class-wp-matchesmapregex component

**File:** `class-wp-matchesmapregex.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-meta-query

**Purpose:** class-wp-meta-query component

**File:** `class-wp-meta-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-metadata-lazyloader

**Purpose:** class-wp-metadata-lazyloader component

**File:** `class-wp-metadata-lazyloader.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-nav-menu-widget

**Purpose:** class-wp-nav-menu-widget component

**File:** `class-wp-nav-menu-widget.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-navigation-fallback

**Purpose:** class-wp-navigation-fallback component

**File:** `class-wp-navigation-fallback.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-network

**Purpose:** class-wp-network component

**File:** `class-wp-network.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-network-query

**Purpose:** class-wp-network-query component

**File:** `class-wp-network-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-object-cache

**Purpose:** class-wp-object-cache component

**File:** `class-wp-object-cache.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-oembed

**Purpose:** class-wp-oembed component

**File:** `class-wp-oembed.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-oembed-controller

**Purpose:** class-wp-oembed-controller component

**File:** `class-wp-oembed-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-paused-extensions-storage

**Purpose:** class-wp-paused-extensions-storage component

**File:** `class-wp-paused-extensions-storage.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-phpmailer

**Purpose:** class-wp-phpmailer component

**File:** `class-wp-phpmailer.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-plugin-dependencies

**Purpose:** class-wp-plugin-dependencies component

**File:** `class-wp-plugin-dependencies.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-post

**Purpose:** class-wp-post component

**File:** `class-wp-post.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-post-type

**Purpose:** class-wp-post-type component

**File:** `class-wp-post-type.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-query

**Purpose:** class-wp-query component

**File:** `class-wp-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-recovery-mode

**Purpose:** class-wp-recovery-mode component

**File:** `class-wp-recovery-mode.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-recovery-mode-cookie-service

**Purpose:** class-wp-recovery-mode-cookie-service component

**File:** `class-wp-recovery-mode-cookie-service.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-recovery-mode-email-service

**Purpose:** class-wp-recovery-mode-email-service component

**File:** `class-wp-recovery-mode-email-service.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-recovery-mode-key-service

**Purpose:** class-wp-recovery-mode-key-service component

**File:** `class-wp-recovery-mode-key-service.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-recovery-mode-link-service

**Purpose:** class-wp-recovery-mode-link-service component

**File:** `class-wp-recovery-mode-link-service.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-application-passwords-controller

**Purpose:** class-wp-rest-application-passwords-controller component

**File:** `class-wp-rest-application-passwords-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-attachments-controller

**Purpose:** class-wp-rest-attachments-controller component

**File:** `class-wp-rest-attachments-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-autosaves-controller

**Purpose:** class-wp-rest-autosaves-controller component

**File:** `class-wp-rest-autosaves-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-block-directory-controller

**Purpose:** class-wp-rest-block-directory-controller component

**File:** `class-wp-rest-block-directory-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-block-pattern-categories-controller

**Purpose:** class-wp-rest-block-pattern-categories-controller component

**File:** `class-wp-rest-block-pattern-categories-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-block-patterns-controller

**Purpose:** class-wp-rest-block-patterns-controller component

**File:** `class-wp-rest-block-patterns-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-block-renderer-controller

**Purpose:** class-wp-rest-block-renderer-controller component

**File:** `class-wp-rest-block-renderer-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-block-types-controller

**Purpose:** class-wp-rest-block-types-controller component

**File:** `class-wp-rest-block-types-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-blocks-controller

**Purpose:** class-wp-rest-blocks-controller component

**File:** `class-wp-rest-blocks-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-comment-meta-fields

**Purpose:** class-wp-rest-comment-meta-fields component

**File:** `class-wp-rest-comment-meta-fields.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-comments-controller

**Purpose:** class-wp-rest-comments-controller component

**File:** `class-wp-rest-comments-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-controller

**Purpose:** class-wp-rest-controller component

**File:** `class-wp-rest-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-edit-site-export-controller

**Purpose:** class-wp-rest-edit-site-export-controller component

**File:** `class-wp-rest-edit-site-export-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-font-collections-controller

**Purpose:** class-wp-rest-font-collections-controller component

**File:** `class-wp-rest-font-collections-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-font-faces-controller

**Purpose:** class-wp-rest-font-faces-controller component

**File:** `class-wp-rest-font-faces-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-font-families-controller

**Purpose:** class-wp-rest-font-families-controller component

**File:** `class-wp-rest-font-families-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-global-styles-controller

**Purpose:** class-wp-rest-global-styles-controller component

**File:** `class-wp-rest-global-styles-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-global-styles-revisions-controller

**Purpose:** class-wp-rest-global-styles-revisions-controller component

**File:** `class-wp-rest-global-styles-revisions-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-menu-items-controller

**Purpose:** class-wp-rest-menu-items-controller component

**File:** `class-wp-rest-menu-items-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-menu-locations-controller

**Purpose:** class-wp-rest-menu-locations-controller component

**File:** `class-wp-rest-menu-locations-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-menus-controller

**Purpose:** class-wp-rest-menus-controller component

**File:** `class-wp-rest-menus-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-meta-fields

**Purpose:** class-wp-rest-meta-fields component

**File:** `class-wp-rest-meta-fields.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-navigation-fallback-controller

**Purpose:** class-wp-rest-navigation-fallback-controller component

**File:** `class-wp-rest-navigation-fallback-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-pattern-directory-controller

**Purpose:** class-wp-rest-pattern-directory-controller component

**File:** `class-wp-rest-pattern-directory-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-plugins-controller

**Purpose:** class-wp-rest-plugins-controller component

**File:** `class-wp-rest-plugins-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-post-format-search-handler

**Purpose:** class-wp-rest-post-format-search-handler component

**File:** `class-wp-rest-post-format-search-handler.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-post-meta-fields

**Purpose:** class-wp-rest-post-meta-fields component

**File:** `class-wp-rest-post-meta-fields.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-post-search-handler

**Purpose:** class-wp-rest-post-search-handler component

**File:** `class-wp-rest-post-search-handler.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-post-statuses-controller

**Purpose:** class-wp-rest-post-statuses-controller component

**File:** `class-wp-rest-post-statuses-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-post-types-controller

**Purpose:** class-wp-rest-post-types-controller component

**File:** `class-wp-rest-post-types-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-posts-controller

**Purpose:** class-wp-rest-posts-controller component

**File:** `class-wp-rest-posts-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-request

**Purpose:** class-wp-rest-request component

**File:** `class-wp-rest-request.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-response

**Purpose:** class-wp-rest-response component

**File:** `class-wp-rest-response.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-revisions-controller

**Purpose:** class-wp-rest-revisions-controller component

**File:** `class-wp-rest-revisions-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-search-controller

**Purpose:** class-wp-rest-search-controller component

**File:** `class-wp-rest-search-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-search-handler

**Purpose:** class-wp-rest-search-handler component

**File:** `class-wp-rest-search-handler.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-server

**Purpose:** class-wp-rest-server component

**File:** `class-wp-rest-server.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-settings-controller

**Purpose:** class-wp-rest-settings-controller component

**File:** `class-wp-rest-settings-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-sidebars-controller

**Purpose:** class-wp-rest-sidebars-controller component

**File:** `class-wp-rest-sidebars-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-site-health-controller

**Purpose:** class-wp-rest-site-health-controller component

**File:** `class-wp-rest-site-health-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-taxonomies-controller

**Purpose:** class-wp-rest-taxonomies-controller component

**File:** `class-wp-rest-taxonomies-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-template-autosaves-controller

**Purpose:** class-wp-rest-template-autosaves-controller component

**File:** `class-wp-rest-template-autosaves-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-template-revisions-controller

**Purpose:** class-wp-rest-template-revisions-controller component

**File:** `class-wp-rest-template-revisions-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-templates-controller

**Purpose:** class-wp-rest-templates-controller component

**File:** `class-wp-rest-templates-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-term-meta-fields

**Purpose:** class-wp-rest-term-meta-fields component

**File:** `class-wp-rest-term-meta-fields.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-term-search-handler

**Purpose:** class-wp-rest-term-search-handler component

**File:** `class-wp-rest-term-search-handler.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-terms-controller

**Purpose:** class-wp-rest-terms-controller component

**File:** `class-wp-rest-terms-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-themes-controller

**Purpose:** class-wp-rest-themes-controller component

**File:** `class-wp-rest-themes-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-url-details-controller

**Purpose:** class-wp-rest-url-details-controller component

**File:** `class-wp-rest-url-details-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-user-meta-fields

**Purpose:** class-wp-rest-user-meta-fields component

**File:** `class-wp-rest-user-meta-fields.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-users-controller

**Purpose:** class-wp-rest-users-controller component

**File:** `class-wp-rest-users-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-widget-types-controller

**Purpose:** class-wp-rest-widget-types-controller component

**File:** `class-wp-rest-widget-types-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rest-widgets-controller

**Purpose:** class-wp-rest-widgets-controller component

**File:** `class-wp-rest-widgets-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-rewrite

**Purpose:** class-wp-rewrite component

**File:** `class-wp-rewrite.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-role

**Purpose:** class-wp-role component

**File:** `class-wp-role.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-roles

**Purpose:** class-wp-roles component

**File:** `class-wp-roles.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-script-modules

**Purpose:** class-wp-script-modules component

**File:** `class-wp-script-modules.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-scripts

**Purpose:** class-wp-scripts component

**File:** `class-wp-scripts.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-session-tokens

**Purpose:** class-wp-session-tokens component

**File:** `class-wp-session-tokens.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sidebar-block-editor-control

**Purpose:** class-wp-sidebar-block-editor-control component

**File:** `class-wp-sidebar-block-editor-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-simplepie-file

**Purpose:** class-wp-simplepie-file component

**File:** `class-wp-simplepie-file.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-simplepie-sanitize-kses

**Purpose:** class-wp-simplepie-sanitize-kses component

**File:** `class-wp-simplepie-sanitize-kses.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-site

**Purpose:** class-wp-site component

**File:** `class-wp-site.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-site-query

**Purpose:** class-wp-site-query component

**File:** `class-wp-site-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps

**Purpose:** class-wp-sitemaps component

**File:** `class-wp-sitemaps.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-index

**Purpose:** class-wp-sitemaps-index component

**File:** `class-wp-sitemaps-index.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-posts

**Purpose:** class-wp-sitemaps-posts component

**File:** `class-wp-sitemaps-posts.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-provider

**Purpose:** class-wp-sitemaps-provider component

**File:** `class-wp-sitemaps-provider.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-registry

**Purpose:** class-wp-sitemaps-registry component

**File:** `class-wp-sitemaps-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-renderer

**Purpose:** class-wp-sitemaps-renderer component

**File:** `class-wp-sitemaps-renderer.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-stylesheet

**Purpose:** class-wp-sitemaps-stylesheet component

**File:** `class-wp-sitemaps-stylesheet.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-taxonomies

**Purpose:** class-wp-sitemaps-taxonomies component

**File:** `class-wp-sitemaps-taxonomies.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-sitemaps-users

**Purpose:** class-wp-sitemaps-users component

**File:** `class-wp-sitemaps-users.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-speculation-rules

**Purpose:** class-wp-speculation-rules component

**File:** `class-wp-speculation-rules.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-style-engine

**Purpose:** class-wp-style-engine component

**File:** `class-wp-style-engine.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-style-engine-css-declarations

**Purpose:** class-wp-style-engine-css-declarations component

**File:** `class-wp-style-engine-css-declarations.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-style-engine-css-rule

**Purpose:** class-wp-style-engine-css-rule component

**File:** `class-wp-style-engine-css-rule.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-style-engine-css-rules-store

**Purpose:** class-wp-style-engine-css-rules-store component

**File:** `class-wp-style-engine-css-rules-store.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-style-engine-processor

**Purpose:** class-wp-style-engine-processor component

**File:** `class-wp-style-engine-processor.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-styles

**Purpose:** class-wp-styles component

**File:** `class-wp-styles.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-tax-query

**Purpose:** class-wp-tax-query component

**File:** `class-wp-tax-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-taxonomy

**Purpose:** class-wp-taxonomy component

**File:** `class-wp-taxonomy.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-term

**Purpose:** class-wp-term component

**File:** `class-wp-term.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-term-query

**Purpose:** class-wp-term-query component

**File:** `class-wp-term-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-text-diff-renderer-inline

**Purpose:** class-wp-text-diff-renderer-inline component

**File:** `class-wp-text-diff-renderer-inline.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-text-diff-renderer-table

**Purpose:** class-wp-text-diff-renderer-table component

**File:** `class-wp-text-diff-renderer-table.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-textdomain-registry

**Purpose:** class-wp-textdomain-registry component

**File:** `class-wp-textdomain-registry.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme

**Purpose:** class-wp-theme component

**File:** `class-wp-theme.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme-json

**Purpose:** class-wp-theme-json component

**File:** `class-wp-theme-json.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme-json-data

**Purpose:** class-wp-theme-json-data component

**File:** `class-wp-theme-json-data.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme-json-resolver

**Purpose:** class-wp-theme-json-resolver component

**File:** `class-wp-theme-json-resolver.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-theme-json-schema

**Purpose:** class-wp-theme-json-schema component

**File:** `class-wp-theme-json-schema.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-token-map

**Purpose:** class-wp-token-map component

**File:** `class-wp-token-map.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-translation-controller

**Purpose:** class-wp-translation-controller component

**File:** `class-wp-translation-controller.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-translation-file

**Purpose:** class-wp-translation-file component

**File:** `class-wp-translation-file.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-translation-file-mo

**Purpose:** class-wp-translation-file-mo component

**File:** `class-wp-translation-file-mo.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-translation-file-php

**Purpose:** class-wp-translation-file-php component

**File:** `class-wp-translation-file-php.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-translations

**Purpose:** class-wp-translations component

**File:** `class-wp-translations.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-url-pattern-prefixer

**Purpose:** class-wp-url-pattern-prefixer component

**File:** `class-wp-url-pattern-prefixer.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-user

**Purpose:** class-wp-user component

**File:** `class-wp-user.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-user-meta-session-tokens

**Purpose:** class-wp-user-meta-session-tokens component

**File:** `class-wp-user-meta-session-tokens.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-user-query

**Purpose:** class-wp-user-query component

**File:** `class-wp-user-query.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-user-request

**Purpose:** class-wp-user-request component

**File:** `class-wp-user-request.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-walker

**Purpose:** class-wp-walker component

**File:** `class-wp-walker.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget

**Purpose:** class-wp-widget component

**File:** `class-wp-widget.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-archives

**Purpose:** class-wp-widget-archives component

**File:** `class-wp-widget-archives.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-area-customize-control

**Purpose:** class-wp-widget-area-customize-control component

**File:** `class-wp-widget-area-customize-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-block

**Purpose:** class-wp-widget-block component

**File:** `class-wp-widget-block.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-calendar

**Purpose:** class-wp-widget-calendar component

**File:** `class-wp-widget-calendar.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-categories

**Purpose:** class-wp-widget-categories component

**File:** `class-wp-widget-categories.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-custom-html

**Purpose:** class-wp-widget-custom-html component

**File:** `class-wp-widget-custom-html.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-factory

**Purpose:** class-wp-widget-factory component

**File:** `class-wp-widget-factory.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-form-customize-control

**Purpose:** class-wp-widget-form-customize-control component

**File:** `class-wp-widget-form-customize-control.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-links

**Purpose:** class-wp-widget-links component

**File:** `class-wp-widget-links.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-media

**Purpose:** class-wp-widget-media component

**File:** `class-wp-widget-media.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-media-audio

**Purpose:** class-wp-widget-media-audio component

**File:** `class-wp-widget-media-audio.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-media-gallery

**Purpose:** class-wp-widget-media-gallery component

**File:** `class-wp-widget-media-gallery.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-media-image

**Purpose:** class-wp-widget-media-image component

**File:** `class-wp-widget-media-image.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-media-video

**Purpose:** class-wp-widget-media-video component

**File:** `class-wp-widget-media-video.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-meta

**Purpose:** class-wp-widget-meta component

**File:** `class-wp-widget-meta.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-pages

**Purpose:** class-wp-widget-pages component

**File:** `class-wp-widget-pages.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-recent-comments

**Purpose:** class-wp-widget-recent-comments component

**File:** `class-wp-widget-recent-comments.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-recent-posts

**Purpose:** class-wp-widget-recent-posts component

**File:** `class-wp-widget-recent-posts.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-rss

**Purpose:** class-wp-widget-rss component

**File:** `class-wp-widget-rss.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-search

**Purpose:** class-wp-widget-search component

**File:** `class-wp-widget-search.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-tag-cloud

**Purpose:** class-wp-widget-tag-cloud component

**File:** `class-wp-widget-tag-cloud.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-widget-text

**Purpose:** class-wp-widget-text component

**File:** `class-wp-widget-text.php`

**Architectural Issues:** 1 violations detected

---

#### class-wp-xmlrpc-server

**Purpose:** class-wp-xmlrpc-server component

**File:** `class-wp-xmlrpc-server.php`

**Architectural Issues:** 1 violations detected

---

#### class-wpdb

**Purpose:** class-wpdb component

**File:** `class-wpdb.php`

**Architectural Issues:** 1 violations detected

---

#### class.wp-dependencies

**Purpose:** class.wp-dependencies component

**File:** `class.wp-dependencies.php`

**Architectural Issues:** 1 violations detected

---

#### class.wp-scripts

**Purpose:** class.wp-scripts component

**File:** `class.wp-scripts.php`

**Architectural Issues:** 1 violations detected

---

#### class.wp-styles

**Purpose:** class.wp-styles component

**File:** `class.wp-styles.php`

**Architectural Issues:** 1 violations detected

---

#### colors

**Purpose:** colors component

**File:** `colors.php`

**Architectural Issues:** 1 violations detected

---

#### comment

**Purpose:** comment component

**File:** `comment.php`

**Architectural Issues:** 1 violations detected

---

#### comment-author-name

**Purpose:** comment-author-name component

**File:** `comment-author-name.php`

**Architectural Issues:** 1 violations detected

---

#### comment-content

**Purpose:** comment-content component

**File:** `comment-content.php`

**Architectural Issues:** 1 violations detected

---

#### comment-date

**Purpose:** comment-date component

**File:** `comment-date.php`

**Architectural Issues:** 1 violations detected

---

#### comment-edit-link

**Purpose:** comment-edit-link component

**File:** `comment-edit-link.php`

**Architectural Issues:** 1 violations detected

---

#### comment-reply-link

**Purpose:** comment-reply-link component

**File:** `comment-reply-link.php`

**Architectural Issues:** 1 violations detected

---

#### comment-template

**Purpose:** comment-template component

**File:** `comment-template.php`

**Architectural Issues:** 2 violations detected

---

#### comments

**Purpose:** comments component

**File:** `comments.php`

**Architectural Issues:** 2 violations detected

---

#### comments-pagination

**Purpose:** comments-pagination component

**File:** `comments-pagination.php`

**Architectural Issues:** 1 violations detected

---

#### comments-pagination-next

**Purpose:** comments-pagination-next component

**File:** `comments-pagination-next.php`

**Architectural Issues:** 1 violations detected

---

#### comments-pagination-numbers

**Purpose:** comments-pagination-numbers component

**File:** `comments-pagination-numbers.php`

**Architectural Issues:** 1 violations detected

---

#### comments-pagination-previous

**Purpose:** comments-pagination-previous component

**File:** `comments-pagination-previous.php`

**Architectural Issues:** 1 violations detected

---

#### comments-title

**Purpose:** comments-title component

**File:** `comments-title.php`

**Architectural Issues:** 1 violations detected

---

#### compat

**Purpose:** compat component

**File:** `compat.php`

**Architectural Issues:** 1 violations detected

---

#### compat-utf8

**Purpose:** compat-utf8 component

**File:** `compat-utf8.php`

**Architectural Issues:** 1 violations detected

---

#### constants

**Purpose:** constants component

**File:** `constants.php`

**Architectural Issues:** 1 violations detected

---

#### cover

**Purpose:** cover component

**File:** `cover.php`

**Architectural Issues:** 1 violations detected

---

#### cron

**Purpose:** cron component

**File:** `cron.php`

**Architectural Issues:** 1 violations detected

---

#### custom-classname

**Purpose:** custom-classname component

**File:** `custom-classname.php`

**Architectural Issues:** 1 violations detected

---

#### date

**Purpose:** date component

**File:** `date.php`

**Architectural Issues:** 1 violations detected

---

#### default-constants

**Purpose:** default-constants component

**File:** `default-constants.php`

**Architectural Issues:** 1 violations detected

---

#### default-filters

**Purpose:** default-filters component

**File:** `default-filters.php`

**Architectural Issues:** 1 violations detected

---

#### default-widgets

**Purpose:** default-widgets component

**File:** `default-widgets.php`

**Architectural Issues:** 1 violations detected

---

#### deprecated

**Purpose:** deprecated component

**File:** `deprecated.php`

**Architectural Issues:** 1 violations detected

---

#### dimensions

**Purpose:** dimensions component

**File:** `dimensions.php`

**Architectural Issues:** 1 violations detected

---

#### duotone

**Purpose:** duotone component

**File:** `duotone.php`

**Architectural Issues:** 1 violations detected

---

#### elements

**Purpose:** elements component

**File:** `elements.php`

**Architectural Issues:** 1 violations detected

---

#### embed

**Purpose:** embed component

**File:** `embed.php`

**Architectural Issues:** 2 violations detected

---

#### embed-404

**Purpose:** embed-404 component

**File:** `embed-404.php`

**Architectural Issues:** 1 violations detected

---

#### embed-content

**Purpose:** embed-content component

**File:** `embed-content.php`

**Architectural Issues:** 1 violations detected

---

#### embed-template

**Purpose:** embed-template component

**File:** `embed-template.php`

**Architectural Issues:** 1 violations detected

---

#### entry

**Purpose:** entry component

**File:** `entry.php`

**Architectural Issues:** 1 violations detected

---

#### error-protection

**Purpose:** error-protection component

**File:** `error-protection.php`

**Architectural Issues:** 1 violations detected

---

#### feed

**Purpose:** feed component

**File:** `feed.php`

**Architectural Issues:** 1 violations detected

---

#### feed-atom

**Purpose:** feed-atom component

**File:** `feed-atom.php`

**Architectural Issues:** 1 violations detected

---

#### feed-atom-comments

**Purpose:** feed-atom-comments component

**File:** `feed-atom-comments.php`

**Architectural Issues:** 1 violations detected

---

#### feed-rdf

**Purpose:** feed-rdf component

**File:** `feed-rdf.php`

**Architectural Issues:** 1 violations detected

---

#### feed-rss

**Purpose:** feed-rss component

**File:** `feed-rss.php`

**Architectural Issues:** 1 violations detected

---

#### feed-rss2

**Purpose:** feed-rss2 component

**File:** `feed-rss2.php`

**Architectural Issues:** 1 violations detected

---

#### feed-rss2-comments

**Purpose:** feed-rss2-comments component

**File:** `feed-rss2-comments.php`

**Architectural Issues:** 1 violations detected

---

#### file

**Purpose:** file component

**File:** `file.php`

**Architectural Issues:** 1 violations detected

---

#### fonts

**Purpose:** fonts component

**File:** `fonts.php`

**Architectural Issues:** 1 violations detected

---

#### footer

**Purpose:** footer component

**File:** `footer.php`

**Architectural Issues:** 1 violations detected

---

#### footer-embed

**Purpose:** footer-embed component

**File:** `footer-embed.php`

**Architectural Issues:** 1 violations detected

---

#### footnotes

**Purpose:** footnotes component

**File:** `footnotes.php`

**Architectural Issues:** 1 violations detected

---

#### formatting

**Purpose:** formatting component

**File:** `formatting.php`

**Architectural Issues:** 1 violations detected

---

#### functions

**Purpose:** functions component

**File:** `functions.php`

**Architectural Issues:** 1 violations detected

---

#### functions.wp-scripts

**Purpose:** functions.wp-scripts component

**File:** `functions.wp-scripts.php`

**Architectural Issues:** 1 violations detected

---

#### functions.wp-styles

**Purpose:** functions.wp-styles component

**File:** `functions.wp-styles.php`

**Architectural Issues:** 1 violations detected

---

#### gallery

**Purpose:** gallery component

**File:** `gallery.php`

**Architectural Issues:** 1 violations detected

---

#### general-template

**Purpose:** general-template component

**File:** `general-template.php`

**Architectural Issues:** 1 violations detected

---

#### generated-classname

**Purpose:** generated-classname component

**File:** `generated-classname.php`

**Architectural Issues:** 1 violations detected

---

#### getid3

**Purpose:** getid3 component

**File:** `getid3.php`

**Architectural Issues:** 1 violations detected

---

#### getid3.lib

**Purpose:** getid3.lib component

**File:** `getid3.lib.php`

**Architectural Issues:** 1 violations detected

---

#### global-styles-and-settings

**Purpose:** global-styles-and-settings component

**File:** `global-styles-and-settings.php`

**Architectural Issues:** 1 violations detected

---

#### gzdecode

**Purpose:** gzdecode component

**File:** `gzdecode.php`

**Architectural Issues:** 1 violations detected

---

#### header

**Purpose:** header component

**File:** `header.php`

**Architectural Issues:** 1 violations detected

---

#### header-embed

**Purpose:** header-embed component

**File:** `header-embed.php`

**Architectural Issues:** 1 violations detected

---

#### heading

**Purpose:** heading component

**File:** `heading.php`

**Architectural Issues:** 1 violations detected

---

#### home-link

**Purpose:** home-link component

**File:** `home-link.php`

**Architectural Issues:** 1 violations detected

---

#### html5-named-character-references

**Purpose:** html5-named-character-references component

**File:** `html5-named-character-references.php`

**Architectural Issues:** 1 violations detected

---

#### http

**Purpose:** http component

**File:** `http.php`

**Architectural Issues:** 1 violations detected

---

#### https-detection

**Purpose:** https-detection component

**File:** `https-detection.php`

**Architectural Issues:** 1 violations detected

---

#### https-migration

**Purpose:** https-migration component

**File:** `https-migration.php`

**Architectural Issues:** 1 violations detected

---

#### image

**Purpose:** image component

**File:** `image.php`

**Architectural Issues:** 1 violations detected

---

#### index

**Purpose:** index component

**File:** `index.php`

**Architectural Issues:** 1 violations detected

---

#### inline

**Purpose:** inline component

**File:** `inline.php`

**Architectural Issues:** 1 violations detected

---

#### interactivity-api

**Purpose:** interactivity-api component

**File:** `interactivity-api.php`

**Architectural Issues:** 1 violations detected

---

#### kses

**Purpose:** kses component

**File:** `kses.php`

**Architectural Issues:** 1 violations detected

---

#### l10n

**Purpose:** l10n component

**File:** `l10n.php`

**Architectural Issues:** 1 violations detected

---

#### layout

**Purpose:** layout component

**File:** `layout.php`

**Architectural Issues:** 1 violations detected

---

#### legacy-widget

**Purpose:** legacy-widget component

**File:** `legacy-widget.php`

**Architectural Issues:** 1 violations detected

---

#### link-template

**Purpose:** link-template component

**File:** `link-template.php`

**Architectural Issues:** 1 violations detected

---

#### list

**Purpose:** list component

**File:** `list.php`

**Architectural Issues:** 1 violations detected

---

#### load

**Purpose:** load component

**File:** `load.php`

**Architectural Issues:** 1 violations detected

---

#### locale

**Purpose:** locale component

**File:** `locale.php`

**Architectural Issues:** 1 violations detected

---

#### loginout

**Purpose:** loginout component

**File:** `loginout.php`

**Architectural Issues:** 1 violations detected

---

#### media

**Purpose:** media component

**File:** `media.php`

**Architectural Issues:** 1 violations detected

---

#### media-template

**Purpose:** media-template component

**File:** `media-template.php`

**Architectural Issues:** 1 violations detected

---

#### media-text

**Purpose:** media-text component

**File:** `media-text.php`

**Architectural Issues:** 1 violations detected

---

#### meta

**Purpose:** meta component

**File:** `meta.php`

**Architectural Issues:** 1 violations detected

---

#### mo

**Purpose:** mo component

**File:** `mo.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio-video.asf

**Purpose:** module.audio-video.asf component

**File:** `module.audio-video.asf.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio-video.flv

**Purpose:** module.audio-video.flv component

**File:** `module.audio-video.flv.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio-video.matroska

**Purpose:** module.audio-video.matroska component

**File:** `module.audio-video.matroska.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio-video.quicktime

**Purpose:** module.audio-video.quicktime component

**File:** `module.audio-video.quicktime.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio-video.riff

**Purpose:** module.audio-video.riff component

**File:** `module.audio-video.riff.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio.ac3

**Purpose:** module.audio.ac3 component

**File:** `module.audio.ac3.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio.dts

**Purpose:** module.audio.dts component

**File:** `module.audio.dts.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio.flac

**Purpose:** module.audio.flac component

**File:** `module.audio.flac.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio.mp3

**Purpose:** module.audio.mp3 component

**File:** `module.audio.mp3.php`

**Architectural Issues:** 1 violations detected

---

#### module.audio.ogg

**Purpose:** module.audio.ogg component

**File:** `module.audio.ogg.php`

**Architectural Issues:** 1 violations detected

---

#### module.tag.apetag

**Purpose:** module.tag.apetag component

**File:** `module.tag.apetag.php`

**Architectural Issues:** 1 violations detected

---

#### module.tag.id3v1

**Purpose:** module.tag.id3v1 component

**File:** `module.tag.id3v1.php`

**Architectural Issues:** 1 violations detected

---

#### module.tag.id3v2

**Purpose:** module.tag.id3v2 component

**File:** `module.tag.id3v2.php`

**Architectural Issues:** 1 violations detected

---

#### module.tag.lyrics3

**Purpose:** module.tag.lyrics3 component

**File:** `module.tag.lyrics3.php`

**Architectural Issues:** 1 violations detected

---

#### ms-blogs

**Purpose:** ms-blogs component

**File:** `ms-blogs.php`

**Architectural Issues:** 1 violations detected

---

#### ms-default-constants

**Purpose:** ms-default-constants component

**File:** `ms-default-constants.php`

**Architectural Issues:** 1 violations detected

---

#### ms-default-filters

**Purpose:** ms-default-filters component

**File:** `ms-default-filters.php`

**Architectural Issues:** 1 violations detected

---

#### ms-deprecated

**Purpose:** ms-deprecated component

**File:** `ms-deprecated.php`

**Architectural Issues:** 1 violations detected

---

#### ms-files

**Purpose:** ms-files component

**File:** `ms-files.php`

**Architectural Issues:** 1 violations detected

---

#### ms-functions

**Purpose:** ms-functions component

**File:** `ms-functions.php`

**Architectural Issues:** 1 violations detected

---

#### ms-load

**Purpose:** ms-load component

**File:** `ms-load.php`

**Architectural Issues:** 1 violations detected

---

#### ms-network

**Purpose:** ms-network component

**File:** `ms-network.php`

**Architectural Issues:** 1 violations detected

---

#### ms-settings

**Purpose:** ms-settings component

**File:** `ms-settings.php`

**Architectural Issues:** 1 violations detected

---

#### ms-site

**Purpose:** ms-site component

**File:** `ms-site.php`

**Architectural Issues:** 1 violations detected

---

#### namespaced

**Purpose:** namespaced component

**File:** `namespaced.php`

**Architectural Issues:** 1 violations detected

---

#### native

**Purpose:** native component

**File:** `native.php`

**Architectural Issues:** 1 violations detected

---

#### nav-menu

**Purpose:** nav-menu component

**File:** `nav-menu.php`

**Architectural Issues:** 1 violations detected

---

#### nav-menu-template

**Purpose:** nav-menu-template component

**File:** `nav-menu-template.php`

**Architectural Issues:** 1 violations detected

---

#### navigation

**Purpose:** navigation component

**File:** `navigation.php`

**Architectural Issues:** 1 violations detected

---

#### navigation-link

**Purpose:** navigation-link component

**File:** `navigation-link.php`

**Architectural Issues:** 1 violations detected

---

#### navigation-submenu

**Purpose:** navigation-submenu component

**File:** `navigation-submenu.php`

**Architectural Issues:** 1 violations detected

---

#### option

**Purpose:** option component

**File:** `option.php`

**Architectural Issues:** 1 violations detected

---

#### page-list

**Purpose:** page-list component

**File:** `page-list.php`

**Architectural Issues:** 1 violations detected

---

#### page-list-item

**Purpose:** page-list-item component

**File:** `page-list-item.php`

**Architectural Issues:** 1 violations detected

---

#### pattern

**Purpose:** pattern component

**File:** `pattern.php`

**Architectural Issues:** 1 violations detected

---

#### pattern-overrides

**Purpose:** pattern-overrides component

**File:** `pattern-overrides.php`

**Architectural Issues:** 1 violations detected

---

#### php72compat

**Purpose:** php72compat component

**File:** `php72compat.php`

**Architectural Issues:** 1 violations detected

---

#### php72compat_const

**Purpose:** php72compat_const component

**File:** `php72compat_const.php`

**Architectural Issues:** 1 violations detected

---

#### php84compat

**Purpose:** php84compat component

**File:** `php84compat.php`

**Architectural Issues:** 1 violations detected

---

#### php84compat_const

**Purpose:** php84compat_const component

**File:** `php84compat_const.php`

**Architectural Issues:** 1 violations detected

---

#### pluggable

**Purpose:** pluggable component

**File:** `pluggable.php`

**Architectural Issues:** 1 violations detected

---

#### pluggable-deprecated

**Purpose:** pluggable-deprecated component

**File:** `pluggable-deprecated.php`

**Architectural Issues:** 1 violations detected

---

#### plugin

**Purpose:** plugin component

**File:** `plugin.php`

**Architectural Issues:** 1 violations detected

---

#### plural-forms

**Purpose:** plural-forms component

**File:** `plural-forms.php`

**Architectural Issues:** 1 violations detected

---

#### po

**Purpose:** po component

**File:** `po.php`

**Architectural Issues:** 1 violations detected

---

#### position

**Purpose:** position component

**File:** `position.php`

**Architectural Issues:** 1 violations detected

---

#### post

**Purpose:** post component

**File:** `post.php`

**Architectural Issues:** 1 violations detected

---

#### post-author

**Purpose:** post-author component

**File:** `post-author.php`

**Architectural Issues:** 1 violations detected

---

#### post-author-biography

**Purpose:** post-author-biography component

**File:** `post-author-biography.php`

**Architectural Issues:** 1 violations detected

---

#### post-author-name

**Purpose:** post-author-name component

**File:** `post-author-name.php`

**Architectural Issues:** 1 violations detected

---

#### post-comments-form

**Purpose:** post-comments-form component

**File:** `post-comments-form.php`

**Architectural Issues:** 1 violations detected

---

#### post-content

**Purpose:** post-content component

**File:** `post-content.php`

**Architectural Issues:** 1 violations detected

---

#### post-data

**Purpose:** post-data component

**File:** `post-data.php`

**Architectural Issues:** 1 violations detected

---

#### post-date

**Purpose:** post-date component

**File:** `post-date.php`

**Architectural Issues:** 1 violations detected

---

#### post-excerpt

**Purpose:** post-excerpt component

**File:** `post-excerpt.php`

**Architectural Issues:** 1 violations detected

---

#### post-featured-image

**Purpose:** post-featured-image component

**File:** `post-featured-image.php`

**Architectural Issues:** 1 violations detected

---

#### post-formats

**Purpose:** post-formats component

**File:** `post-formats.php`

**Architectural Issues:** 1 violations detected

---

#### post-meta

**Purpose:** post-meta component

**File:** `post-meta.php`

**Architectural Issues:** 1 violations detected

---

#### post-navigation-link

**Purpose:** post-navigation-link component

**File:** `post-navigation-link.php`

**Architectural Issues:** 1 violations detected

---

#### post-template

**Purpose:** post-template component

**File:** `post-template.php`

**Architectural Issues:** 2 violations detected

---

#### post-terms

**Purpose:** post-terms component

**File:** `post-terms.php`

**Architectural Issues:** 1 violations detected

---

#### post-thumbnail-template

**Purpose:** post-thumbnail-template component

**File:** `post-thumbnail-template.php`

**Architectural Issues:** 1 violations detected

---

#### post-title

**Purpose:** post-title component

**File:** `post-title.php`

**Architectural Issues:** 1 violations detected

---

#### query

**Purpose:** query component

**File:** `query.php`

**Architectural Issues:** 2 violations detected

---

#### query-grid-posts

**Purpose:** query-grid-posts component

**File:** `query-grid-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-large-title-posts

**Purpose:** query-large-title-posts component

**File:** `query-large-title-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-medium-posts

**Purpose:** query-medium-posts component

**File:** `query-medium-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-no-results

**Purpose:** query-no-results component

**File:** `query-no-results.php`

**Architectural Issues:** 1 violations detected

---

#### query-offset-posts

**Purpose:** query-offset-posts component

**File:** `query-offset-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-pagination

**Purpose:** query-pagination component

**File:** `query-pagination.php`

**Architectural Issues:** 1 violations detected

---

#### query-pagination-next

**Purpose:** query-pagination-next component

**File:** `query-pagination-next.php`

**Architectural Issues:** 1 violations detected

---

#### query-pagination-numbers

**Purpose:** query-pagination-numbers component

**File:** `query-pagination-numbers.php`

**Architectural Issues:** 1 violations detected

---

#### query-pagination-previous

**Purpose:** query-pagination-previous component

**File:** `query-pagination-previous.php`

**Architectural Issues:** 1 violations detected

---

#### query-small-posts

**Purpose:** query-small-posts component

**File:** `query-small-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-standard-posts

**Purpose:** query-standard-posts component

**File:** `query-standard-posts.php`

**Architectural Issues:** 1 violations detected

---

#### query-title

**Purpose:** query-title component

**File:** `query-title.php`

**Architectural Issues:** 1 violations detected

---

#### query-total

**Purpose:** query-total component

**File:** `query-total.php`

**Architectural Issues:** 1 violations detected

---

#### read-more

**Purpose:** read-more component

**File:** `read-more.php`

**Architectural Issues:** 1 violations detected

---

#### readonly

**Purpose:** readonly component

**File:** `readonly.php`

**Architectural Issues:** 1 violations detected

---

#### registration

**Purpose:** registration component

**File:** `registration.php`

**Architectural Issues:** 1 violations detected

---

#### registration-functions

**Purpose:** registration-functions component

**File:** `registration-functions.php`

**Architectural Issues:** 1 violations detected

---

#### require-dynamic-blocks

**Purpose:** require-dynamic-blocks component

**File:** `require-dynamic-blocks.php`

**Architectural Issues:** 1 violations detected

---

#### require-static-blocks

**Purpose:** require-static-blocks component

**File:** `require-static-blocks.php`

**Architectural Issues:** 1 violations detected

---

#### rest-api

**Purpose:** rest-api component

**File:** `rest-api.php`

**Architectural Issues:** 1 violations detected

---

#### revision

**Purpose:** revision component

**File:** `revision.php`

**Architectural Issues:** 1 violations detected

---

#### rewrite

**Purpose:** rewrite component

**File:** `rewrite.php`

**Architectural Issues:** 1 violations detected

---

#### ristretto255

**Purpose:** ristretto255 component

**File:** `ristretto255.php`

**Architectural Issues:** 1 violations detected

---

#### robots-template

**Purpose:** robots-template component

**File:** `robots-template.php`

**Architectural Issues:** 1 violations detected

---

#### rss

**Purpose:** rss component

**File:** `rss.php`

**Architectural Issues:** 2 violations detected

---

#### rss-functions

**Purpose:** rss-functions component

**File:** `rss-functions.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader

**Purpose:** script-loader component

**File:** `script-loader.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-packages

**Purpose:** script-loader-packages component

**File:** `script-loader-packages.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-packages.min

**Purpose:** script-loader-packages.min component

**File:** `script-loader-packages.min.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-react-refresh-entry

**Purpose:** script-loader-react-refresh-entry component

**File:** `script-loader-react-refresh-entry.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-react-refresh-entry.min

**Purpose:** script-loader-react-refresh-entry.min component

**File:** `script-loader-react-refresh-entry.min.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-react-refresh-runtime

**Purpose:** script-loader-react-refresh-runtime component

**File:** `script-loader-react-refresh-runtime.php`

**Architectural Issues:** 1 violations detected

---

#### script-loader-react-refresh-runtime.min

**Purpose:** script-loader-react-refresh-runtime.min component

**File:** `script-loader-react-refresh-runtime.min.php`

**Architectural Issues:** 1 violations detected

---

#### script-modules

**Purpose:** script-modules component

**File:** `script-modules.php`

**Architectural Issues:** 1 violations detected

---

#### script-modules-packages

**Purpose:** script-modules-packages component

**File:** `script-modules-packages.php`

**Architectural Issues:** 1 violations detected

---

#### script-modules-packages.min

**Purpose:** script-modules-packages.min component

**File:** `script-modules-packages.min.php`

**Architectural Issues:** 1 violations detected

---

#### search

**Purpose:** search component

**File:** `search.php`

**Architectural Issues:** 1 violations detected

---

#### session

**Purpose:** session component

**File:** `session.php`

**Architectural Issues:** 1 violations detected

---

#### settings

**Purpose:** settings component

**File:** `settings.php`

**Architectural Issues:** 1 violations detected

---

#### shadow

**Purpose:** shadow component

**File:** `shadow.php`

**Architectural Issues:** 1 violations detected

---

#### shell

**Purpose:** shell component

**File:** `shell.php`

**Architectural Issues:** 1 violations detected

---

#### shortcode

**Purpose:** shortcode component

**File:** `shortcode.php`

**Architectural Issues:** 1 violations detected

---

#### shortcodes

**Purpose:** shortcodes component

**File:** `shortcodes.php`

**Architectural Issues:** 1 violations detected

---

#### sidebar

**Purpose:** sidebar component

**File:** `sidebar.php`

**Architectural Issues:** 1 violations detected

---

#### site-logo

**Purpose:** site-logo component

**File:** `site-logo.php`

**Architectural Issues:** 1 violations detected

---

#### site-tagline

**Purpose:** site-tagline component

**File:** `site-tagline.php`

**Architectural Issues:** 1 violations detected

---

#### site-title

**Purpose:** site-title component

**File:** `site-title.php`

**Architectural Issues:** 1 violations detected

---

#### sitemaps

**Purpose:** sitemaps component

**File:** `sitemaps.php`

**Architectural Issues:** 1 violations detected

---

#### social-link

**Purpose:** social-link component

**File:** `social-link.php`

**Architectural Issues:** 1 violations detected

---

#### social-links-shared-background-color

**Purpose:** social-links-shared-background-color component

**File:** `social-links-shared-background-color.php`

**Architectural Issues:** 1 violations detected

---

#### sodium_compat

**Purpose:** sodium_compat component

**File:** `sodium_compat.php`

**Architectural Issues:** 1 violations detected

---

#### spacing

**Purpose:** spacing component

**File:** `spacing.php`

**Architectural Issues:** 1 violations detected

---

#### speculative-loading

**Purpose:** speculative-loading component

**File:** `speculative-loading.php`

**Architectural Issues:** 1 violations detected

---

#### spl-autoload-compat

**Purpose:** spl-autoload-compat component

**File:** `spl-autoload-compat.php`

**Architectural Issues:** 1 violations detected

---

#### stream-xchacha20

**Purpose:** stream-xchacha20 component

**File:** `stream-xchacha20.php`

**Architectural Issues:** 1 violations detected

---

#### streams

**Purpose:** streams component

**File:** `streams.php`

**Architectural Issues:** 1 violations detected

---

#### string

**Purpose:** string component

**File:** `string.php`

**Architectural Issues:** 1 violations detected

---

#### style-engine

**Purpose:** style-engine component

**File:** `style-engine.php`

**Architectural Issues:** 1 violations detected

---

#### tag-cloud

**Purpose:** tag-cloud component

**File:** `tag-cloud.php`

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

#### template-canvas

**Purpose:** template-canvas component

**File:** `template-canvas.php`

**Architectural Issues:** 1 violations detected

---

#### template-loader

**Purpose:** template-loader component

**File:** `template-loader.php`

**Architectural Issues:** 1 violations detected

---

#### template-part

**Purpose:** template-part component

**File:** `template-part.php`

**Architectural Issues:** 1 violations detected

---

#### term-description

**Purpose:** term-description component

**File:** `term-description.php`

**Architectural Issues:** 1 violations detected

---

#### theme

**Purpose:** theme component

**File:** `theme.php`

**Architectural Issues:** 1 violations detected

---

#### theme-previews

**Purpose:** theme-previews component

**File:** `theme-previews.php`

**Architectural Issues:** 1 violations detected

---

#### theme-templates

**Purpose:** theme-templates component

**File:** `theme-templates.php`

**Architectural Issues:** 1 violations detected

---

#### translations

**Purpose:** translations component

**File:** `translations.php`

**Architectural Issues:** 1 violations detected

---

#### typography

**Purpose:** typography component

**File:** `typography.php`

**Architectural Issues:** 1 violations detected

---

#### update

**Purpose:** update component

**File:** `update.php`

**Architectural Issues:** 1 violations detected

---

#### user

**Purpose:** user component

**File:** `user.php`

**Architectural Issues:** 1 violations detected

---

#### utf8

**Purpose:** utf8 component

**File:** `utf8.php`

**Architectural Issues:** 1 violations detected

---

#### utils

**Purpose:** utils component

**File:** `utils.php`

**Architectural Issues:** 1 violations detected

---

#### vars

**Purpose:** vars component

**File:** `vars.php`

**Architectural Issues:** 1 violations detected

---

#### version

**Purpose:** version component

**File:** `version.php`

**Architectural Issues:** 1 violations detected

---

#### view-modal.asset

**Purpose:** view-modal.asset component

**File:** `view-modal.asset.php`

**Architectural Issues:** 1 violations detected

---

#### view-modal.min.asset

**Purpose:** view-modal.min.asset component

**File:** `view-modal.min.asset.php`

**Architectural Issues:** 1 violations detected

---

#### view.asset

**Purpose:** view.asset component

**File:** `view.asset.php`

**Architectural Issues:** 5 violations detected

---

#### view.min.asset

**Purpose:** view.min.asset component

**File:** `view.min.asset.php`

**Architectural Issues:** 5 violations detected

---

#### widget-group

**Purpose:** widget-group component

**File:** `widget-group.php`

**Architectural Issues:** 1 violations detected

---

#### widgets

**Purpose:** widgets component

**File:** `widgets.php`

**Architectural Issues:** 1 violations detected

---

#### wp-db

**Purpose:** wp-db component

**File:** `wp-db.php`

**Architectural Issues:** 1 violations detected

---

#### wp-diff

**Purpose:** wp-diff component

**File:** `wp-diff.php`

**Architectural Issues:** 1 violations detected

---

#### wp-tinymce

**Purpose:** wp-tinymce component

**File:** `wp-tinymce.php`

**Architectural Issues:** 1 violations detected

---

#### xdiff

**Purpose:** xdiff component

**File:** `xdiff.php`

**Architectural Issues:** 1 violations detected

---


## Statistics

- **Total Components:** 713
- **Component Categories:** 1
- **Internal Dependencies:** 0
- **External Dependencies:** 10

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
