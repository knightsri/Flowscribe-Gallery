# Drupal - CoreModules Layer (C4 Level 3)

**Generated:** 2025-10-15 05:53:06  
**Layer:** CoreModules  
**Components:** 2425  
**Source:** Deptrac dependency analysis

---

## Component Diagram

```mermaid
graph TB
    subgraph "CoreModules Layer"
        subgraph "Components"
            AnnounceFetcher[AnnounceFetcher]
            Announcement[Announcement]
            AnnounceRenderer[AnnounceRenderer]
            LazyBuilders[LazyBuilders]
            RenderCallbacks[RenderCallbacks]
            AnnounceController[AnnounceController]
            AnnouncementsFeedHooks[AnnouncementsFeedHooks]
            AnnounceBlock[AnnounceBlock]
            AutomatedCron[AutomatedCron]
            AutomatedCronHooks[AutomatedCronHooks]
            BanIpManager[BanIpManager]
            BanIpManagerInterface[BanIpManagerInterface]
            BanMiddleware[BanMiddleware]
            BanAdmin[BanAdmin]
            BanDelete[BanDelete]
            BanHooks[BanHooks]
            BlockedIp[BlockedIp]
            BlockedIps[BlockedIps]
            BasicAuth[BasicAuth]
            BasicAuthHooks[BasicAuthHooks]
            DisallowBasicAuthRequests[DisallowBasicAuthRequests]
            big_pipe_post_update[big_pipe.post_update]
            BigPipeController[BigPipeController]
            HtmlResponseBigPipeSubscriber[HtmlResponseBigPipeSubscriber]
            NoBigPipeRouteAlterSubscriber[NoBigPipeRouteAlterSubscriber]
            BigPipeHooks[BigPipeHooks]
            BigPipeThemeHooks[BigPipeThemeHooks]
            BigPipe[BigPipe]
            BigPipeMarkup[BigPipeMarkup]
            BigPipeResponse[BigPipeResponse]
            BigPipeResponseAttachmentsProcessor[BigPipeResponseAttachmentsProcessor]
            BigPipeStrategy[BigPipeStrategy]
            ContentLength[ContentLength]
            block_api[block.api]
            block_post_update[block.post_update]
            BlockAccessControlHandler[BlockAccessControlHandler]
            BlockConfigUpdater[BlockConfigUpdater]
            BlockForm[BlockForm]
            BlockInterface[BlockInterface]
            BlockListBuilder[BlockListBuilder]
            BlockPluginCollection[BlockPluginCollection]
            BlockRepository[BlockRepository]
            BlockRepositoryInterface[BlockRepositoryInterface]
            BlockViewBuilder[BlockViewBuilder]
            BlockAddController[BlockAddController]
            BlockController[BlockController]
            BlockLibraryController[BlockLibraryController]
            BlockListController[BlockListController]
            CategoryAutocompleteController[CategoryAutocompleteController]
            Block[Block]
            BlockPageDisplayVariantSubscriber[BlockPageDisplayVariantSubscriber]
            BlockDeleteForm[BlockDeleteForm]
            BlockHooks[BlockHooks]
            BlockThemeHooks[BlockThemeHooks]
            PlaceBlock[PlaceBlock]
            PlaceBlockDeriver[PlaceBlockDeriver]
            ThemeLocalTask[ThemeLocalTask]
            BlockPageVariant[BlockPageVariant]
            EntityBlock[EntityBlock]
            BlockPluginId[BlockPluginId]
            BlockRegion[BlockRegion]
            BlockSettings[BlockSettings]
            BlockTheme[BlockTheme]
            BlockVisibility[BlockVisibility]
            RolesLookup[RolesLookup]
            BlockTranslation[BlockTranslation]
            AdminDemoNegotiator[AdminDemoNegotiator]
            block_content_post_update[block_content.post_update]
            BlockContentStorageBodyFieldHook[BlockContentStorageBodyFieldHook]
            BlockContentAccessControlHandler[BlockContentAccessControlHandler]
            BlockContentEvents[BlockContentEvents]
            BlockContentForm[BlockContentForm]
            BlockContentInterface[BlockContentInterface]
            BlockContentListBuilder[BlockContentListBuilder]
            BlockContentPermissions[BlockContentPermissions]
            BlockContentStorageSchema[BlockContentStorageSchema]
            BlockContentTranslationHandler[BlockContentTranslationHandler]
            BlockContentTypeForm[BlockContentTypeForm]
            BlockContentTypeInterface[BlockContentTypeInterface]
            BlockContentTypeListBuilder[BlockContentTypeListBuilder]
            BlockContentUuidLookup[BlockContentUuidLookup]
            BlockContentViewBuilder[BlockContentViewBuilder]
            BlockContentViewsData[BlockContentViewsData]
            BlockTypeAccessControlHandler[BlockTypeAccessControlHandler]
            BlockContentIsReusableAccessCheck[BlockContentIsReusableAccessCheck]
            BlockContentController[BlockContentController]
            BlockContent[BlockContent]
            BlockContentType[BlockContentType]
            BlockContentGetDependencyEvent[BlockContentGetDependencyEvent]
            BlockContentDeleteForm[BlockContentDeleteForm]
            BlockContentTypeDeleteForm[BlockContentTypeDeleteForm]
            BlockContentHooks[BlockContentHooks]
            BlockContentThemeHooks[BlockContentThemeHooks]
            BlockContentBlock[BlockContentBlock]
            BlockContentAddLocalAction[BlockContentAddLocalAction]
            Box[Box]
            BoxTranslation[BoxTranslation]
            BlockCustom[BlockCustom]
            BlockCustomTranslation[BlockCustomTranslation]
            BlockContentEntityChangedConstraint[BlockContentEntityChangedConstraint]
            BlockContentEntityChangedConstraintValidator[BlockContentEntityChangedConstraintValidator]
            ListingEmpty[ListingEmpty]
            BlockContentRouteProvider[BlockContentRouteProvider]
            BlockContentTypeRouteProvider[BlockContentTypeRouteProvider]
            RouteSubscriber[RouteSubscriber]
            Breakpoint[Breakpoint]
            BreakpointInterface[BreakpointInterface]
            BreakpointManager[BreakpointManager]
            BreakpointManagerInterface[BreakpointManagerInterface]
            BreakpointHooks[BreakpointHooks]
            ckeditor5_api[ckeditor5.api]
            ckeditor5_post_update[ckeditor5.post_update]
            HTMLRestrictions[HTMLRestrictions]
            SmartDefaultSettings[SmartDefaultSettings]
            CKEditor5AspectsOfCKEditor5Plugin[CKEditor5AspectsOfCKEditor5Plugin]
            CKEditor5Plugin[CKEditor5Plugin]
            DrupalAspectsOfCKEditor5Plugin[DrupalAspectsOfCKEditor5Plugin]
            CKEditor5ImageController[CKEditor5ImageController]
            CKEditor5MediaController[CKEditor5MediaController]
            CKEditor5CacheTag[CKEditor5CacheTag]
            Ckeditor5Hooks[Ckeditor5Hooks]
            CKEditor5PluginConfigurableInterface[CKEditor5PluginConfigurableInterface]
            CKEditor5PluginConfigurableTrait[CKEditor5PluginConfigurableTrait]
            CKEditor5PluginDefault[CKEditor5PluginDefault]
            CKEditor5PluginDefinition[CKEditor5PluginDefinition]
            CKEditor5PluginElementsSubsetInterface[CKEditor5PluginElementsSubsetInterface]
            CKEditor5PluginInterface[CKEditor5PluginInterface]
            CKEditor5PluginManager[CKEditor5PluginManager]
            CKEditor5PluginManagerInterface[CKEditor5PluginManagerInterface]
            Alignment[Alignment]
            CodeBlock[CodeBlock]
            DynamicPluginConfigWithCsrfTokenUrlTrait[DynamicPluginConfigWithCsrfTokenUrlTrait]
            GlobalAttribute[GlobalAttribute]
            Heading[Heading]
            Image[Image]
            ImageResize[ImageResize]
            Language[Language]
            ListPlugin[ListPlugin]
            Media[Media]
            MediaLibrary[MediaLibrary]
            SourceEditing[SourceEditing]
            Style[Style]
            AddItemToToolbar[AddItemToToolbar]
            CKEditor5[CKEditor5]
            CKEditor5ElementConstraint[CKEditor5ElementConstraint]
            CKEditor5ElementConstraintValidator[CKEditor5ElementConstraintValidator]
            CKEditor5MediaAndFilterSettingsInSyncConstraint[CKEditor5MediaAndFilterSettingsInSyncConstraint]
            CKEditor5MediaAndFilterSettingsInSyncConstraintValidator[CKEditor5MediaAndFilterSettingsInSyncConstraintValidator]
            EnabledConfigurablePluginsConstraint[EnabledConfigurablePluginsConstraint]
            EnabledConfigurablePluginsConstraintValidator[EnabledConfigurablePluginsConstraintValidator]
            FundamentalCompatibilityConstraint[FundamentalCompatibilityConstraint]
            FundamentalCompatibilityConstraintValidator[FundamentalCompatibilityConstraintValidator]
            PluginManagerDependentValidatorTrait[PluginManagerDependentValidatorTrait]
            PrecedingConstraintAwareValidatorTrait[PrecedingConstraintAwareValidatorTrait]
            SourceEditingPreventSelfXssConstraint[SourceEditingPreventSelfXssConstraint]
            SourceEditingPreventSelfXssConstraintValidator[SourceEditingPreventSelfXssConstraintValidator]
            SourceEditingRedundantTagsConstraint[SourceEditingRedundantTagsConstraint]
            SourceEditingRedundantTagsConstraintValidator[SourceEditingRedundantTagsConstraintValidator]
            StyleSensibleElementConstraint[StyleSensibleElementConstraint]
            StyleSensibleElementConstraintValidator[StyleSensibleElementConstraintValidator]
            TextEditorObjectDependentValidatorTrait[TextEditorObjectDependentValidatorTrait]
            ToolbarItemConditionsMetConstraint[ToolbarItemConditionsMetConstraint]
            ToolbarItemConditionsMetConstraintValidator[ToolbarItemConditionsMetConstraintValidator]
            ToolbarItemConstraint[ToolbarItemConstraint]
            ToolbarItemConstraintValidator[ToolbarItemConstraintValidator]
            ToolbarItemDependencyConstraint[ToolbarItemDependencyConstraint]
            ToolbarItemDependencyConstraintValidator[ToolbarItemDependencyConstraintValidator]
            UniqueLabelInListConstraint[UniqueLabelInListConstraint]
            UniqueLabelInListConstraintValidator[UniqueLabelInListConstraintValidator]
            comment_api[comment.api]
            comment_post_update[comment.post_update]
            CommentAccessControlHandler[CommentAccessControlHandler]
            CommentBreadcrumbBuilder[CommentBreadcrumbBuilder]
            CommentFieldItemList[CommentFieldItemList]
            CommentForm[CommentForm]
            CommentInterface[CommentInterface]
            CommentLazyBuilders[CommentLazyBuilders]
            CommentLinkBuilder[CommentLinkBuilder]
            CommentLinkBuilderInterface[CommentLinkBuilderInterface]
            CommentManager[CommentManager]
            CommentManagerInterface[CommentManagerInterface]
            CommentPreviewMode[CommentPreviewMode]
            CommentStatistics[CommentStatistics]
            CommentStatisticsInterface[CommentStatisticsInterface]
            CommentStorage[CommentStorage]
            CommentStorageInterface[CommentStorageInterface]
            CommentStorageSchema[CommentStorageSchema]
            CommentTranslationHandler[CommentTranslationHandler]
            CommentTypeForm[CommentTypeForm]
            CommentTypeInterface[CommentTypeInterface]
            CommentTypeListBuilder[CommentTypeListBuilder]
            CommentViewBuilder[CommentViewBuilder]
            CommentViewsData[CommentViewsData]
            CommentController[CommentController]
            Comment[Comment]
            CommentType[CommentType]
            CommentAdminOverview[CommentAdminOverview]
            CommentTypeDeleteForm[CommentTypeDeleteForm]
            ConfirmDeleteMultiple[ConfirmDeleteMultiple]
            DeleteForm[DeleteForm]
            CommentHooks[CommentHooks]
            CommentThemeHooks[CommentThemeHooks]
            CommentTokensHooks[CommentTokensHooks]
            CommentViewsHooks[CommentViewsHooks]
            CommentSelection[CommentSelection]
            AuthorNameFormatter[AuthorNameFormatter]
            CommentDefaultFormatter[CommentDefaultFormatter]
            CommentPermalinkFormatter[CommentPermalinkFormatter]
            CommentItem[CommentItem]
            CommentItemInterface[CommentItemInterface]
            CommentWidget[CommentWidget]
            UnapprovedComments[UnapprovedComments]
            D7Comment[D7Comment]
            EntityComment[EntityComment]
            EntityCommentType[EntityCommentType]
            CommentEntityTranslation[CommentEntityTranslation]
            CommentNameConstraint[CommentNameConstraint]
            CommentNameConstraintValidator[CommentNameConstraintValidator]
            UserUid[UserUid]
            CommentBulkForm[CommentBulkForm]
            CommentedEntity[CommentedEntity]
            Depth[Depth]
            EntityLink[EntityLink]
            LastTimestamp[LastTimestamp]
            LinkApprove[LinkApprove]
            LinkReply[LinkReply]
            NodeNewComments[NodeNewComments]
            StatisticsLastCommentName[StatisticsLastCommentName]
            StatisticsLastUpdated[StatisticsLastUpdated]
            NodeComment[NodeComment]
            Rss[Rss]
            Thread[Thread]
            ConfigSubscriber[ConfigSubscriber]
            StorageReplaceDataWrapper[StorageReplaceDataWrapper]
            ConfigController[ConfigController]
            ConfigExportForm[ConfigExportForm]
            ConfigImportForm[ConfigImportForm]
            ConfigSingleExportForm[ConfigSingleExportForm]
            ConfigSingleImportForm[ConfigSingleImportForm]
            ConfigSync[ConfigSync]
            ConfigHooks[ConfigHooks]
            config_translation_api[config_translation.api]
            ConfigEntityMapper[ConfigEntityMapper]
            ConfigEntityMapperInterface[ConfigEntityMapperInterface]
            ConfigFieldMapper[ConfigFieldMapper]
            ConfigMapperInterface[ConfigMapperInterface]
            ConfigMapperManager[ConfigMapperManager]
            ConfigMapperManagerInterface[ConfigMapperManagerInterface]
            ConfigNamesMapper[ConfigNamesMapper]
            ConfigTranslationFormAccess[ConfigTranslationFormAccess]
            ConfigTranslationOverviewAccess[ConfigTranslationOverviewAccess]
            ConfigTranslationBlockListBuilder[ConfigTranslationBlockListBuilder]
            ConfigTranslationController[ConfigTranslationController]
            ConfigTranslationEntityListBuilder[ConfigTranslationEntityListBuilder]
            ConfigTranslationEntityListBuilderInterface[ConfigTranslationEntityListBuilderInterface]
            ConfigTranslationFieldListBuilder[ConfigTranslationFieldListBuilder]
            ConfigTranslationListController[ConfigTranslationListController]
            ConfigTranslationMapperList[ConfigTranslationMapperList]
            ConfigMapperPopulateEvent[ConfigMapperPopulateEvent]
            ConfigTranslationEvents[ConfigTranslationEvents]
            ConfigMapperLanguageException[ConfigMapperLanguageException]
            ConfigTranslationAddForm[ConfigTranslationAddForm]
            ConfigTranslationDeleteForm[ConfigTranslationDeleteForm]
            ConfigTranslationEditForm[ConfigTranslationEditForm]
            ConfigTranslationFormBase[ConfigTranslationFormBase]
            DateFormat[DateFormat]
            ElementInterface[ElementInterface]
            FormElementBase[FormElementBase]
            ListElement[ListElement]
            PluralVariants[PluralVariants]
            Textarea[Textarea]
            Textfield[Textfield]
            TextFormat[TextFormat]
            ConfigTranslationHooks[ConfigTranslationHooks]
            ConfigTranslationContextualLinks[ConfigTranslationContextualLinks]
            ConfigTranslationLocalTasks[ConfigTranslationLocalTasks]
            ConfigTranslationContextualLink[ConfigTranslationContextualLink]
            ConfigTranslationLocalTask[ConfigTranslationLocalTask]
            ProfileFieldTranslation[ProfileFieldTranslation]
            contact_post_update[contact.post_update]
            ContactFormAccessControlHandler[ContactFormAccessControlHandler]
            ContactFormEditForm[ContactFormEditForm]
            ContactFormInterface[ContactFormInterface]
            ContactFormListBuilder[ContactFormListBuilder]
            ContactMessageAccessControlHandler[ContactMessageAccessControlHandler]
            MailHandler[MailHandler]
            MailHandlerException[MailHandlerException]
            MailHandlerInterface[MailHandlerInterface]
            MessageForm[MessageForm]
            MessageInterface[MessageInterface]
            MessageViewBuilder[MessageViewBuilder]
            ContactPageAccess[ContactPageAccess]
            ContactController[ContactController]
            ContactForm[ContactForm]
            Message[Message]
            ContactFormHooks[ContactFormHooks]
            ContactHooks[ContactHooks]
            ContactViewsHooks[ContactViewsHooks]
            ContactCategory[ContactCategory]
            ContactSettings[ContactSettings]
            ContactMessageResource[ContactMessageResource]
            ContactLink[ContactLink]
            content_moderation_api[content_moderation.api]
            content_moderation_post_update[content_moderation.post_update]
            ContentModerationState[ContentModerationState]
            ContentModerationStateAccessControlHandler[ContentModerationStateAccessControlHandler]
            ContentPreprocess[ContentPreprocess]
            EntityOperations[EntityOperations]
            EntityTypeInfo[EntityTypeInfo]
            ModeratedNodeListBuilder[ModeratedNodeListBuilder]
            ModerationInformation[ModerationInformation]
            ModerationInformationInterface[ModerationInformationInterface]
            Permissions[Permissions]
            StateTransitionValidation[StateTransitionValidation]
            StateTransitionValidationInterface[StateTransitionValidationInterface]
            ViewsData[ViewsData]
            ModeratedContentController[ModeratedContentController]
            ContentModerationStateInterface[ContentModerationStateInterface]
            BlockContentModerationHandler[BlockContentModerationHandler]
            ModerationHandler[ModerationHandler]
            ModerationHandlerInterface[ModerationHandlerInterface]
            NodeModerationHandler[NodeModerationHandler]
            TaxonomyTermModerationHandler[TaxonomyTermModerationHandler]
            EntityModerationRouteProvider[EntityModerationRouteProvider]
            ConfigImportSubscriber[ConfigImportSubscriber]
            DefaultContentSubscriber[DefaultContentSubscriber]
            WorkspaceSubscriber[WorkspaceSubscriber]
            ContentModerationConfigureEntityTypesForm[ContentModerationConfigureEntityTypesForm]
            ContentModerationConfigureForm[ContentModerationConfigureForm]
            ContentModerationStateForm[ContentModerationStateForm]
            EntityModerationForm[EntityModerationForm]
            ContentModerationHooks[ContentModerationHooks]
            ContentModerationThemeHooks[ContentModerationThemeHooks]
            ContentModerationViewsExecutionHooks[ContentModerationViewsExecutionHooks]
            ContentModerationViewsHooks[ContentModerationViewsHooks]
            ModerationOptOutPublish[ModerationOptOutPublish]
            ModerationOptOutUnpublish[ModerationOptOutUnpublish]
            AddModeration[AddModeration]
            AddModerationDeriver[AddModerationDeriver]
            DynamicLocalTasks[DynamicLocalTasks]
            ModerationStateFieldItemList[ModerationStateFieldItemList]
            ContentModerationStateFormatter[ContentModerationStateFormatter]
            ModerationStateWidget[ModerationStateWidget]
            ModerationStateConstraint[ModerationStateConstraint]
            ModerationStateConstraintValidator[ModerationStateConstraintValidator]
            ModerationStateJoinViewsHandlerTrait[ModerationStateJoinViewsHandlerTrait]
            ModerationStateField[ModerationStateField]
            ModerationStateFilter[ModerationStateFilter]
            ModerationStateSort[ModerationStateSort]
            ContentModeration[ContentModeration]
            ContentModerationInterface[ContentModerationInterface]
            ContentModerationRouteSubscriber[ContentModerationRouteSubscriber]
            BundleTranslationSettingsInterface[BundleTranslationSettingsInterface]
            ContentTranslationHandler[ContentTranslationHandler]
            ContentTranslationHandlerInterface[ContentTranslationHandlerInterface]
            ContentTranslationManager[ContentTranslationManager]
            ContentTranslationManagerInterface[ContentTranslationManagerInterface]
            ContentTranslationMetadataWrapper[ContentTranslationMetadataWrapper]
            ContentTranslationMetadataWrapperInterface[ContentTranslationMetadataWrapperInterface]
            ContentTranslationPermissions[ContentTranslationPermissions]
            FieldTranslationSynchronizer[FieldTranslationSynchronizer]
            FieldTranslationSynchronizerInterface[FieldTranslationSynchronizerInterface]
            ContentTranslationDeleteAccess[ContentTranslationDeleteAccess]
            ContentTranslationManageAccessCheck[ContentTranslationManageAccessCheck]
            ContentTranslationOverviewAccess[ContentTranslationOverviewAccess]
            ContentTranslationController[ContentTranslationController]
            ContentTranslationDeleteForm[ContentTranslationDeleteForm]
            ContentTranslationHooks[ContentTranslationHooks]
            ContentTranslationThemeHooks[ContentTranslationThemeHooks]
            ContentTranslationContextualLinks[ContentTranslationContextualLinks]
            ContentTranslationLocalTasks[ContentTranslationLocalTasks]
            EntityTranslationSettings[EntityTranslationSettings]
            ContentTranslationSynchronizedFieldsConstraint[ContentTranslationSynchronizedFieldsConstraint]
            ContentTranslationSynchronizedFieldsConstraintValidator[ContentTranslationSynchronizedFieldsConstraintValidator]
            TranslationLink[TranslationLink]
            ContentTranslationRouteSubscriber[ContentTranslationRouteSubscriber]
            contextual_api[contextual.api]
            contextual_post_update[contextual.post_update]
            ContextualController[ContextualController]
            ContextualLinks[ContextualLinks]
            ContextualLinksPlaceholder[ContextualLinksPlaceholder]
            ContextualHooks[ContextualHooks]
            ContextualThemeHooks[ContextualThemeHooks]
            ContextualViewsHooks[ContextualViewsHooks]
            DateTimeComputed[DateTimeComputed]
            DateTimeViewsHelper[DateTimeViewsHelper]
            DatetimeHooks[DatetimeHooks]
            DatetimeViewsHooks[DatetimeViewsHooks]
            DateTimeCustomFormatter[DateTimeCustomFormatter]
            DateTimeDefaultFormatter[DateTimeDefaultFormatter]
            DateTimeFormatterBase[DateTimeFormatterBase]
            DateTimePlainFormatter[DateTimePlainFormatter]
            DateTimeTimeAgoFormatter[DateTimeTimeAgoFormatter]
            DateTimeFieldItemList[DateTimeFieldItemList]
            DateTimeItem[DateTimeItem]
            DateTimeItemInterface[DateTimeItemInterface]
            DateTimeDatelistWidget[DateTimeDatelistWidget]
            DateTimeDefaultWidget[DateTimeDefaultWidget]
            DateTimeWidgetBase[DateTimeWidgetBase]
            DateField[DateField]
            DateTimeFormatConstraint[DateTimeFormatConstraint]
            DateTimeFormatConstraintValidator[DateTimeFormatConstraintValidator]
            Date[Date]
            DayDate[DayDate]
            FullDate[FullDate]
            MonthDate[MonthDate]
            WeekDate[WeekDate]
            YearDate[YearDate]
            YearMonthDate[YearMonthDate]
            datetime_range_post_update[datetime_range.post_update]
            DateTimeRangeConstantsInterface[DateTimeRangeConstantsInterface]
            DateTimeRangeDisplayOptions[DateTimeRangeDisplayOptions]
            DateTimeRangeTrait[DateTimeRangeTrait]
            DatetimeRangeHooks[DatetimeRangeHooks]
            DatetimeRangeViewsHooks[DatetimeRangeViewsHooks]
            DateRangeCustomFormatter[DateRangeCustomFormatter]
            DateRangeDefaultFormatter[DateRangeDefaultFormatter]
            DateRangePlainFormatter[DateRangePlainFormatter]
            DateRangeFieldItemList[DateRangeFieldItemList]
            DateRangeItem[DateRangeItem]
            DateRangeDatelistWidget[DateRangeDatelistWidget]
            DateRangeDefaultWidget[DateRangeDefaultWidget]
            DateRangeWidgetBase[DateRangeWidgetBase]
            dblog_post_update[dblog.post_update]
            DbLogController[DbLogController]
            DblogClearLogConfirmForm[DblogClearLogConfirmForm]
            DblogFilterForm[DblogFilterForm]
            DblogHooks[DblogHooks]
            DblogViewsHooks[DblogViewsHooks]
            DbLog[DbLog]
            DbLogResource[DbLogResource]
            DblogMessage[DblogMessage]
            DblogOperations[DblogOperations]
            DblogTypes[DblogTypes]
            Watchdog[Watchdog]
            DynamicPageCacheSubscriber[DynamicPageCacheSubscriber]
            DynamicPageCacheHooks[DynamicPageCacheHooks]
            DefaultRequestPolicy[DefaultRequestPolicy]
            DenyAdminRoutes[DenyAdminRoutes]
            editor_api[editor.api]
            editor_post_update[editor.post_update]
            EditorAccessControlHandler[EditorAccessControlHandler]
            EditorController[EditorController]
            EditorInterface[EditorInterface]
            EditorXssFilterInterface[EditorXssFilterInterface]
            Element[Element]
            EditorDialogSave[EditorDialogSave]
            Editor[Editor]
            Standard[Standard]
            EditorConfigTranslationSubscriber[EditorConfigTranslationSubscriber]
            EditorHooks[EditorHooks]
            EditorBase[EditorBase]
            EditorManager[EditorManager]
            EditorPluginInterface[EditorPluginInterface]
            EditorFileReference[EditorFileReference]
            field_api[field.api]
            field_post_update[field.post_update]
            ConfigImporterFieldPurger[ConfigImporterFieldPurger]
            EntityDisplayRebuilder[EntityDisplayRebuilder]
            FieldConfigAccessControlHandler[FieldConfigAccessControlHandler]
            FieldConfigInterface[FieldConfigInterface]
            FieldConfigStorage[FieldConfigStorage]
            FieldLabelOptionsTrait[FieldLabelOptionsTrait]
            FieldStorageConfigAccessControlHandler[FieldStorageConfigAccessControlHandler]
            FieldStorageConfigInterface[FieldStorageConfigInterface]
            FieldStorageConfigStorage[FieldStorageConfigStorage]
            FieldStorageConfigUpdateForbiddenException[FieldStorageConfigUpdateForbiddenException]
            FieldUninstallValidator[FieldUninstallValidator]
            FieldConfig[FieldConfig]
            FieldStorageConfig[FieldStorageConfig]
            FieldHooks[FieldHooks]
            AddToAllBundles[AddToAllBundles]
            Email[Email]
            EntityReference[EntityReference]
            NumberField[NumberField]
            FieldType[FieldType]
            ProcessField[ProcessField]
            FieldFormatterSettingsDefaults[FieldFormatterSettingsDefaults]
            FieldInstanceDefaults[FieldInstanceDefaults]
            FieldInstanceOptionTranslation[FieldInstanceOptionTranslation]
            FieldInstanceSettings[FieldInstanceSettings]
            FieldInstanceWidgetSettings[FieldInstanceWidgetSettings]
            FieldOptionTranslation[FieldOptionTranslation]
            FieldSettings[FieldSettings]
            FieldTypeDefaults[FieldTypeDefaults]
            FieldBundle[FieldBundle]
            Field[Field]
            FieldInstance[FieldInstance]
            FieldInstancePerFormDisplay[FieldInstancePerFormDisplay]
            FieldInstancePerViewMode[FieldInstancePerViewMode]
            FieldLabelDescriptionTranslation[FieldLabelDescriptionTranslation]
            ViewMode[ViewMode]
            FieldLayoutBuilder[FieldLayoutBuilder]
            EntityDisplayWithLayoutInterface[EntityDisplayWithLayoutInterface]
            FieldLayoutEntityDisplayTrait[FieldLayoutEntityDisplayTrait]
            FieldLayoutEntityFormDisplay[FieldLayoutEntityFormDisplay]
            FieldLayoutEntityViewDisplay[FieldLayoutEntityViewDisplay]
            FieldLayoutEntityDisplayFormTrait[FieldLayoutEntityDisplayFormTrait]
            FieldLayoutEntityFormDisplayEditForm[FieldLayoutEntityFormDisplayEditForm]
            FieldLayoutEntityViewDisplayEditForm[FieldLayoutEntityViewDisplayEditForm]
            FieldLayoutHooks[FieldLayoutHooks]
            field_ui_api[field_ui.api]
            DisplayModeLocalAction[DisplayModeLocalAction]
            EntityDisplayModeListBuilder[EntityDisplayModeListBuilder]
            EntityFormModeListBuilder[EntityFormModeListBuilder]
            FieldConfigListBuilder[FieldConfigListBuilder]
            FieldStorageConfigListBuilder[FieldStorageConfigListBuilder]
            FieldUI[FieldUI]
            FieldUiPermissions[FieldUiPermissions]
            FieldReuseAccessCheck[FieldReuseAccessCheck]
            FormModeAccessCheck[FormModeAccessCheck]
            ViewModeAccessCheck[ViewModeAccessCheck]
            EntityDisplayModeController[EntityDisplayModeController]
            FieldConfigAddController[FieldConfigAddController]
            FieldConfigListController[FieldConfigListController]
            FieldStorageAddController[FieldStorageAddController]
            FieldUiTable[FieldUiTable]
            EntityDisplayFormBase[EntityDisplayFormBase]
            EntityDisplayModeAddForm[EntityDisplayModeAddForm]
            EntityDisplayModeDeleteForm[EntityDisplayModeDeleteForm]
            EntityDisplayModeEditForm[EntityDisplayModeEditForm]
            EntityDisplayModeFormBase[EntityDisplayModeFormBase]
            EntityFormDisplayEditForm[EntityFormDisplayEditForm]
            EntityFormModeAddForm[EntityFormModeAddForm]
            EntityViewDisplayEditForm[EntityViewDisplayEditForm]
            FieldConfigDeleteForm[FieldConfigDeleteForm]
            FieldConfigEditForm[FieldConfigEditForm]
            FieldStorageAddForm[FieldStorageAddForm]
            FieldStorageConfigEditForm[FieldStorageConfigEditForm]
            FieldStorageCreationTrait[FieldStorageCreationTrait]
            FieldStorageReuseForm[FieldStorageReuseForm]
            FieldUiHooks[FieldUiHooks]
            FieldUiThemeHooks[FieldUiThemeHooks]
            FieldUiLocalAction[FieldUiLocalAction]
            FieldUiLocalTask[FieldUiLocalTask]
            file_api[file.api]
            file_post_update[file.post_update]
            ComputedFileUrl[ComputedFileUrl]
            FileAccessControlHandler[FileAccessControlHandler]
            FileAccessFormatterControlHandlerInterface[FileAccessFormatterControlHandlerInterface]
            FileInterface[FileInterface]
            FileRepository[FileRepository]
            FileRepositoryInterface[FileRepositoryInterface]
            FileServiceProvider[FileServiceProvider]
            FileStorage[FileStorage]
            FileStorageInterface[FileStorageInterface]
            FileStorageSchema[FileStorageSchema]
            FileViewsData[FileViewsData]
            IconMimeTypes[IconMimeTypes]
            FileWidgetAjaxController[FileWidgetAjaxController]
            ManagedFile[ManagedFile]
            File[File]
            FileRouteProvider[FileRouteProvider]
            FileEventSubscriber[FileEventSubscriber]
            DatabaseFileUsageBackend[DatabaseFileUsageBackend]
            FileUsageBase[FileUsageBase]
            FileUsageInterface[FileUsageInterface]
            CronHook[CronHook]
            FileDownloadHook[FileDownloadHook]
            FileFormHooks[FileFormHooks]
            FileHooks[FileHooks]
            FileRequirements[FileRequirements]
            FileThemeHooks[FileThemeHooks]
            FileViewsHooks[FileViewsHooks]
            TokenHooks[TokenHooks]
            FileSelection[FileSelection]
            BaseFieldFileFormatterBase[BaseFieldFileFormatterBase]
            DefaultFileFormatter[DefaultFileFormatter]
            DescriptionAwareFileFormatterBase[DescriptionAwareFileFormatterBase]
            FileAudioFormatter[FileAudioFormatter]
            FileExtensionFormatter[FileExtensionFormatter]
            FileFormatterBase[FileFormatterBase]
            FileMediaFormatterBase[FileMediaFormatterBase]
            FileMediaFormatterInterface[FileMediaFormatterInterface]
            FilemimeFormatter[FilemimeFormatter]
            FileSize[FileSize]
            FileUriFormatter[FileUriFormatter]
            FileVideoFormatter[FileVideoFormatter]
            GenericFileFormatter[GenericFileFormatter]
            RSSEnclosureFormatter[RSSEnclosureFormatter]
            TableFormatter[TableFormatter]
            UrlPlainFormatter[UrlPlainFormatter]
            FileFieldItemList[FileFieldItemList]
            FileItem[FileItem]
            FileUriItem[FileUriItem]
            FileWidget[FileWidget]
            EntityFile[EntityFile]
            FileField[FileField]
            FieldFile[FieldFile]
            FileUri[FileUri]
            Upload[Upload]
            UploadInstance[UploadInstance]
            FileUploadResource[FileUploadResource]
            BaseFileConstraintValidator[BaseFileConstraintValidator]
            FileEncodingConstraint[FileEncodingConstraint]
            FileEncodingConstraintValidator[FileEncodingConstraintValidator]
            FileExtensionConstraint[FileExtensionConstraint]
            FileExtensionConstraintValidator[FileExtensionConstraintValidator]
            FileExtensionSecureConstraint[FileExtensionSecureConstraint]
            FileExtensionSecureConstraintValidator[FileExtensionSecureConstraintValidator]
            FileImageDimensionsConstraint[FileImageDimensionsConstraint]
            FileImageDimensionsConstraintValidator[FileImageDimensionsConstraintValidator]
            FileIsImageConstraint[FileIsImageConstraint]
            FileIsImageConstraintValidator[FileIsImageConstraintValidator]
            FileNameLengthConstraint[FileNameLengthConstraint]
            FileNameLengthConstraintValidator[FileNameLengthConstraintValidator]
            FileSizeLimitConstraint[FileSizeLimitConstraint]
            FileSizeLimitConstraintValidator[FileSizeLimitConstraintValidator]
            FileUriUnique[FileUriUnique]
            FileValidationConstraint[FileValidationConstraint]
            FileValidationConstraintValidator[FileValidationConstraintValidator]
            Fid[Fid]
            Status[Status]
            ContentDispositionFilenameParser[ContentDispositionFilenameParser]
            FileUploadHandler[FileUploadHandler]
            FileUploadHandlerInterface[FileUploadHandlerInterface]
            FileUploadLocationTrait[FileUploadLocationTrait]
            FileUploadResult[FileUploadResult]
            FileValidationException[FileValidationException]
            FormUploadedFile[FormUploadedFile]
            InputStreamFileWriter[InputStreamFileWriter]
            InputStreamFileWriterInterface[InputStreamFileWriterInterface]
            InputStreamUploadedFile[InputStreamUploadedFile]
            UploadedFileInterface[UploadedFileInterface]
            FileValidationEvent[FileValidationEvent]
            FileValidator[FileValidator]
            FileValidatorInterface[FileValidatorInterface]
            FileValidatorSettingsTrait[FileValidatorSettingsTrait]
            RecursiveValidatorFactory[RecursiveValidatorFactory]
            UploadedFileConstraint[UploadedFileConstraint]
            UploadedFileConstraintValidator[UploadedFileConstraintValidator]
            filter_api[filter.api]
            filter_post_update[filter.post_update]
            FilterFormatAccessControlHandler[FilterFormatAccessControlHandler]
            FilterFormatAddForm[FilterFormatAddForm]
            FilterFormatEditForm[FilterFormatEditForm]
            FilterFormatFormBase[FilterFormatFormBase]
            FilterFormatInterface[FilterFormatInterface]
            FilterFormatListBuilder[FilterFormatListBuilder]
            FilterPermissions[FilterPermissions]
            FilterPluginCollection[FilterPluginCollection]
            FilterPluginManager[FilterPluginManager]
            FilterProcessResult[FilterProcessResult]
            FilterUninstallValidator[FilterUninstallValidator]
            Filter[Filter]
            FilterController[FilterController]
            ProcessedText[ProcessedText]
            FilterFormat[FilterFormat]
            FilterDisableForm[FilterDisableForm]
            FilterEnableForm[FilterEnableForm]
            FilterHooks[FilterHooks]
            FilterThemeHooks[FilterThemeHooks]
            FilterBase[FilterBase]
            FilterInterface[FilterInterface]
            FilterAlign[FilterAlign]
            FilterAutoP[FilterAutoP]
            FilterCaption[FilterCaption]
            FilterHtml[FilterHtml]
            FilterHtmlCorrector[FilterHtmlCorrector]
            FilterHtmlEscape[FilterHtmlEscape]
            FilterHtmlImageSecure[FilterHtmlImageSecure]
            FilterImageLazyLoad[FilterImageLazyLoad]
            FilterNull[FilterNull]
            FilterUrl[FilterUrl]
            FilterID[FilterID]
            FilterSettings[FilterSettings]
            FilterFormatPermission[FilterFormatPermission]
            FilteredMarkup[FilteredMarkup]
            help_api[help.api]
            help_post_update[help.post_update]
            HelpBreadcrumbBuilder[HelpBreadcrumbBuilder]
            HelpSectionManager[HelpSectionManager]
            HelpSectionPluginInterface[HelpSectionPluginInterface]
            HelpTopicDiscovery[HelpTopicDiscovery]
            HelpTopicPluginBase[HelpTopicPluginBase]
            HelpTopicPluginInterface[HelpTopicPluginInterface]
            HelpTopicPluginManager[HelpTopicPluginManager]
            HelpTopicPluginManagerInterface[HelpTopicPluginManagerInterface]
            HelpTopicTwig[HelpTopicTwig]
            HelpTopicTwigLoader[HelpTopicTwigLoader]
            HelpTwigExtension[HelpTwigExtension]
            SearchableHelpInterface[SearchableHelpInterface]
            HelpSection[HelpSection]
            HelpController[HelpController]
            HelpTopicPluginController[HelpTopicPluginController]
            HelpHooks[HelpHooks]
            HelpThemeHooks[HelpThemeHooks]
            HelpBlock[HelpBlock]
            HelpSectionPluginBase[HelpSectionPluginBase]
            HelpTopicSection[HelpTopicSection]
            HookHelpSection[HookHelpSection]
            HelpSearch[HelpSearch]
            HistoryCommentLinkBuilder[HistoryCommentLinkBuilder]
            HistoryRenderCallback[HistoryRenderCallback]
            HistoryController[HistoryController]
            HistoryHooks[HistoryHooks]
            HistoryViewsHooks[HistoryViewsHooks]
            HistoryUserTimestamp[HistoryUserTimestamp]
            image_api[image.api]
            image_post_update[image.post_update]
            ConfigurableImageEffectBase[ConfigurableImageEffectBase]
            ConfigurableImageEffectInterface[ConfigurableImageEffectInterface]
            ImageEffectBase[ImageEffectBase]
            ImageEffectInterface[ImageEffectInterface]
            ImageEffectManager[ImageEffectManager]
            ImageEffectPluginCollection[ImageEffectPluginCollection]
            ImageStyleInterface[ImageStyleInterface]
            ImageStyleListBuilder[ImageStyleListBuilder]
            ImageStyleStorage[ImageStyleStorage]
            ImageStyleStorageInterface[ImageStyleStorageInterface]
            ImageEffect[ImageEffect]
            ImageStyleDownloadController[ImageStyleDownloadController]
            ImageStyle[ImageStyle]
            ImageEffectAddForm[ImageEffectAddForm]
            ImageEffectDeleteForm[ImageEffectDeleteForm]
            ImageEffectEditForm[ImageEffectEditForm]
            ImageEffectFormBase[ImageEffectFormBase]
            ImageStyleAddForm[ImageStyleAddForm]
            ImageStyleDeleteForm[ImageStyleDeleteForm]
            ImageStyleEditForm[ImageStyleEditForm]
            ImageStyleFlushForm[ImageStyleFlushForm]
            ImageStyleFormBase[ImageStyleFormBase]
            ImageHooks[ImageHooks]
            ImageRequirements[ImageRequirements]
            ImageThemeHooks[ImageThemeHooks]
            ImageViewsHooks[ImageViewsHooks]
            PathProcessorImageStyles[PathProcessorImageStyles]
            ImageFormatter[ImageFormatter]
            ImageFormatterBase[ImageFormatterBase]
            ImageUrlFormatter[ImageUrlFormatter]
            ImageItem[ImageItem]
            ImageWidget[ImageWidget]
            AvifImageEffect[AvifImageEffect]
            ConvertImageEffect[ConvertImageEffect]
            CropImageEffect[CropImageEffect]
            DesaturateImageEffect[DesaturateImageEffect]
            ResizeImageEffect[ResizeImageEffect]
            RotateImageEffect[RotateImageEffect]
            ScaleAndCropImageEffect[ScaleAndCropImageEffect]
            ScaleImageEffect[ScaleImageEffect]
            EntityImageStyle[EntityImageStyle]
            ImageField[ImageField]
            ImageCacheActions[ImageCacheActions]
            ImageCachePreset[ImageCachePreset]
            ImageStyles[ImageStyles]
            ImageStyleRoutes[ImageStyleRoutes]
            FormErrorHandler[FormErrorHandler]
            InlineFormErrorsServiceProvider[InlineFormErrorsServiceProvider]
            RenderElementHelper[RenderElementHelper]
            InlineFormErrorsHooks[InlineFormErrorsHooks]
            InlineFormErrorsThemeHooks[InlineFormErrorsThemeHooks]
            jsonapi_api[jsonapi.api]
            CacheableResourceResponse[CacheableResourceResponse]
            IncludeResolver[IncludeResolver]
            JsonApiFilter[JsonApiFilter]
            JsonapiServiceProvider[JsonapiServiceProvider]
            JsonApiSpec[JsonApiSpec]
            ResourceResponse[ResourceResponse]
            EntityAccessChecker[EntityAccessChecker]
            RelationshipRouteAccessCheck[RelationshipRouteAccessCheck]
            TemporaryQueryGuard[TemporaryQueryGuard]
            FieldResolver[FieldResolver]
            EntityResource[EntityResource]
            EntryPoint[EntryPoint]
            FileUpload[FileUpload]
            RegisterSerializationClassesCompilerPass[RegisterSerializationClassesCompilerPass]
            JsonEncoder[JsonEncoder]
            EntityValidationTrait[EntityValidationTrait]
            CollectRelationshipMetaEvent[CollectRelationshipMetaEvent]
            CollectResourceObjectMetaEvent[CollectResourceObjectMetaEvent]
            DefaultExceptionSubscriber[DefaultExceptionSubscriber]
            JsonapiMaintenanceModeSubscriber[JsonapiMaintenanceModeSubscriber]
            JsonApiRequestValidator[JsonApiRequestValidator]
            ResourceObjectNormalizationCacher[ResourceObjectNormalizationCacher]
            ResourceResponseSubscriber[ResourceResponseSubscriber]
            ResourceResponseValidator[ResourceResponseValidator]
            EntityAccessDeniedHttpException[EntityAccessDeniedHttpException]
            UnprocessableHttpEntityException[UnprocessableHttpEntityException]
            JsonApiSettingsForm[JsonApiSettingsForm]
            JsonapiHooks[JsonapiHooks]
            JsonapiRequirements[JsonapiRequirements]
            Data[Data]
            ErrorCollection[ErrorCollection]
            IncludedData[IncludedData]
            JsonApiDocumentTopLevel[JsonApiDocumentTopLevel]
            LabelOnlyResourceObject[LabelOnlyResourceObject]
            Link[Link]
            LinkCollection[LinkCollection]
            NullIncludedData[NullIncludedData]
            OmittedData[OmittedData]
            Relationship[Relationship]
            RelationshipData[RelationshipData]
            ResourceIdentifier[ResourceIdentifier]
            ResourceIdentifierInterface[ResourceIdentifierInterface]
            ResourceIdentifierTrait[ResourceIdentifierTrait]
            ResourceObject[ResourceObject]
            ResourceObjectData[ResourceObjectData]
            TopLevelDataInterface[TopLevelDataInterface]
            ConfigEntityDenormalizer[ConfigEntityDenormalizer]
            ContentEntityDenormalizer[ContentEntityDenormalizer]
            DataNormalizer[DataNormalizer]
            EntityAccessDeniedHttpExceptionNormalizer[EntityAccessDeniedHttpExceptionNormalizer]
            EntityDenormalizerBase[EntityDenormalizerBase]
            EntityReferenceFieldNormalizer[EntityReferenceFieldNormalizer]
            FieldItemNormalizer[FieldItemNormalizer]
            FieldNormalizer[FieldNormalizer]
            HttpExceptionNormalizer[HttpExceptionNormalizer]
            JsonApiDocumentTopLevelNormalizer[JsonApiDocumentTopLevelNormalizer]
            LinkCollectionNormalizer[LinkCollectionNormalizer]
            NormalizerBase[NormalizerBase]
            RelationshipNormalizer[RelationshipNormalizer]
            ResourceIdentifierNormalizer[ResourceIdentifierNormalizer]
            ResourceObjectNormalizer[ResourceObjectNormalizer]
            UnprocessableHttpEntityExceptionNormalizer[UnprocessableHttpEntityExceptionNormalizer]
            CacheableNormalization[CacheableNormalization]
            CacheableOmission[CacheableOmission]
            HttpExceptionNormalizerValue[HttpExceptionNormalizerValue]
            TemporaryArrayObjectThrowingExceptions[TemporaryArrayObjectThrowingExceptions]
            EntityUuidConverter[EntityUuidConverter]
            ResourceTypeConverter[ResourceTypeConverter]
            EntityCondition[EntityCondition]
            EntityConditionGroup[EntityConditionGroup]
            OffsetPage[OffsetPage]
            Sort[Sort]
            ResourceType[ResourceType]
            ResourceTypeAttribute[ResourceTypeAttribute]
            ResourceTypeBuildEvent[ResourceTypeBuildEvent]
            ResourceTypeBuildEvents[ResourceTypeBuildEvents]
            ResourceTypeField[ResourceTypeField]
            ResourceTypeRelationship[ResourceTypeRelationship]
            ResourceTypeRepository[ResourceTypeRepository]
            ResourceTypeRepositoryInterface[ResourceTypeRepositoryInterface]
            InvalidVersionIdentifierException[InvalidVersionIdentifierException]
            NegotiatorBase[NegotiatorBase]
            ResourceVersionRouteEnhancer[ResourceVersionRouteEnhancer]
            VersionById[VersionById]
            VersionByRel[VersionByRel]
            VersionNegotiator[VersionNegotiator]
            VersionNegotiatorInterface[VersionNegotiatorInterface]
            VersionNotFoundException[VersionNotFoundException]
            EarlyFormatSetter[EarlyFormatSetter]
            ReadOnlyModeMethodFilter[ReadOnlyModeMethodFilter]
            RouteEnhancer[RouteEnhancer]
            Routes[Routes]
            Serializer[Serializer]
            language_api[language.api]
            language_post_update[language.post_update]
            ConfigurableLanguageInterface[ConfigurableLanguageInterface]
            ConfigurableLanguageManager[ConfigurableLanguageManager]
            ConfigurableLanguageManagerInterface[ConfigurableLanguageManagerInterface]
            ContentLanguageSettingsException[ContentLanguageSettingsException]
            ContentLanguageSettingsInterface[ContentLanguageSettingsInterface]
            DefaultLanguageItem[DefaultLanguageItem]
            LanguageAccessControlHandler[LanguageAccessControlHandler]
            LanguageConverter[LanguageConverter]
            LanguageListBuilder[LanguageListBuilder]
            LanguageNegotiationMethodBase[LanguageNegotiationMethodBase]
            LanguageNegotiationMethodInterface[LanguageNegotiationMethodInterface]
            LanguageNegotiationMethodManager[LanguageNegotiationMethodManager]
            LanguageNegotiator[LanguageNegotiator]
            LanguageNegotiatorInterface[LanguageNegotiatorInterface]
            LanguageServiceProvider[LanguageServiceProvider]
            LanguageSwitcherInterface[LanguageSwitcherInterface]
            LanguageNegotiation[LanguageNegotiation]
            LanguageConfigCollectionNameTrait[LanguageConfigCollectionNameTrait]
            LanguageConfigFactoryOverride[LanguageConfigFactoryOverride]
            LanguageConfigFactoryOverrideInterface[LanguageConfigFactoryOverrideInterface]
            LanguageConfigOverride[LanguageConfigOverride]
            LanguageConfigOverrideCrudEvent[LanguageConfigOverrideCrudEvent]
            LanguageConfigOverrideEvents[LanguageConfigOverrideEvents]
            LanguageConfiguration[LanguageConfiguration]
            ConfigurableLanguage[ConfigurableLanguage]
            ContentLanguageSettings[ContentLanguageSettings]
            LanguageRequestSubscriber[LanguageRequestSubscriber]
            DeleteDefaultLanguageException[DeleteDefaultLanguageException]
            LanguageException[LanguageException]
            ContentLanguageSettingsForm[ContentLanguageSettingsForm]
            LanguageAddForm[LanguageAddForm]
            LanguageDeleteForm[LanguageDeleteForm]
            LanguageEditForm[LanguageEditForm]
            LanguageFormBase[LanguageFormBase]
            NegotiationBrowserDeleteForm[NegotiationBrowserDeleteForm]
            NegotiationBrowserForm[NegotiationBrowserForm]
            NegotiationConfigureForm[NegotiationConfigureForm]
            NegotiationSelectedForm[NegotiationSelectedForm]
            NegotiationSessionForm[NegotiationSessionForm]
            NegotiationUrlForm[NegotiationUrlForm]
            LanguageHooks[LanguageHooks]
            LanguageThemeHooks[LanguageThemeHooks]
            PathProcessorLanguage[PathProcessorLanguage]
            LanguageBlock[LanguageBlock]
            LanguageNegotiationBrowser[LanguageNegotiationBrowser]
            LanguageNegotiationContentEntity[LanguageNegotiationContentEntity]
            LanguageNegotiationSelected[LanguageNegotiationSelected]
            LanguageNegotiationSession[LanguageNegotiationSession]
            LanguageNegotiationUI[LanguageNegotiationUI]
            LanguageNegotiationUrl[LanguageNegotiationUrl]
            LanguageNegotiationUrlFallback[LanguageNegotiationUrlFallback]
            DefaultLangcode[DefaultLangcode]
            ContentTranslationEnabledSetting[ContentTranslationEnabledSetting]
            LanguageDomains[LanguageDomains]
            LanguageTypes[LanguageTypes]
            LanguageContentSettings[LanguageContentSettings]
            LanguageContentSettingsTaxonomyVocabulary[LanguageContentSettingsTaxonomyVocabulary]
            layout_builder_api[layout_builder.api]
            layout_builder_post_update[layout_builder.post_update]
            LayoutBuilderExposeAllFieldBlocksHooks[LayoutBuilderExposeAllFieldBlocksHooks]
            DefaultsSectionStorageInterface[DefaultsSectionStorageInterface]
            InlineBlockEntityOperations[InlineBlockEntityOperations]
            InlineBlockUsage[InlineBlockUsage]
            InlineBlockUsageInterface[InlineBlockUsageInterface]
            LayoutBuilderEnabledInterface[LayoutBuilderEnabledInterface]
            LayoutBuilderEvents[LayoutBuilderEvents]
            LayoutBuilderHighlightTrait[LayoutBuilderHighlightTrait]
            LayoutBuilderOverridableInterface[LayoutBuilderOverridableInterface]
            LayoutBuilderOverridesPermissions[LayoutBuilderOverridesPermissions]
            LayoutBuilderServiceProvider[LayoutBuilderServiceProvider]
            LayoutEntityHelperTrait[LayoutEntityHelperTrait]
            LayoutOverrideFieldHelper[LayoutOverrideFieldHelper]
            LayoutTempstoreRepository[LayoutTempstoreRepository]
            LayoutTempstoreRepositoryInterface[LayoutTempstoreRepositoryInterface]
            OverridesSectionStorageInterface[OverridesSectionStorageInterface]
            Section[Section]
            SectionComponent[SectionComponent]
            SectionListInterface[SectionListInterface]
            SectionListTrait[SectionListTrait]
            SectionStorageInterface[SectionStorageInterface]
            TempStoreIdentifierInterface[TempStoreIdentifierInterface]
            LayoutBuilderAccessCheck[LayoutBuilderAccessCheck]
            LayoutPreviewAccessAllowed[LayoutPreviewAccessAllowed]
            SectionStorage[SectionStorage]
            ExtraFieldBlockCacheTagInvalidator[ExtraFieldBlockCacheTagInvalidator]
            LayoutBuilderIsActiveCacheContext[LayoutBuilderIsActiveCacheContext]
            LayoutBuilderUiCacheContext[LayoutBuilderUiCacheContext]
            LayoutBuilderContextTrait[LayoutBuilderContextTrait]
            AddSectionController[AddSectionController]
            ChooseBlockController[ChooseBlockController]
            ChooseSectionController[ChooseSectionController]
            LayoutBuilderController[LayoutBuilderController]
            LayoutRebuildTrait[LayoutRebuildTrait]
            MoveBlockController[MoveBlockController]
            LayoutBuilder[LayoutBuilder]
            LayoutBuilderEntityViewDisplay[LayoutBuilderEntityViewDisplay]
            LayoutBuilderEntityViewDisplayStorage[LayoutBuilderEntityViewDisplayStorage]
            LayoutBuilderSampleEntityGenerator[LayoutBuilderSampleEntityGenerator]
            LayoutEntityDisplayInterface[LayoutEntityDisplayInterface]
            SampleEntityGeneratorInterface[SampleEntityGeneratorInterface]
            PrepareLayoutEvent[PrepareLayoutEvent]
            SectionComponentBuildRenderArrayEvent[SectionComponentBuildRenderArrayEvent]
            BlockComponentRenderArray[BlockComponentRenderArray]
            PrepareLayout[PrepareLayout]
            SetInlineBlockDependency[SetInlineBlockDependency]
            LayoutSectionItemList[LayoutSectionItemList]
            AddBlockForm[AddBlockForm]
            ConfigureBlockFormBase[ConfigureBlockFormBase]
            ConfigureSectionForm[ConfigureSectionForm]
            DefaultsEntityForm[DefaultsEntityForm]
            DiscardLayoutChangesForm[DiscardLayoutChangesForm]
            LayoutBuilderDisableForm[LayoutBuilderDisableForm]
            LayoutBuilderEntityFormTrait[LayoutBuilderEntityFormTrait]
            LayoutBuilderEntityViewDisplayForm[LayoutBuilderEntityViewDisplayForm]
            LayoutRebuildConfirmFormBase[LayoutRebuildConfirmFormBase]
            MoveBlockForm[MoveBlockForm]
            OverridesEntityForm[OverridesEntityForm]
            PreviewToggleTrait[PreviewToggleTrait]
            RemoveBlockForm[RemoveBlockForm]
            RemoveSectionForm[RemoveSectionForm]
            RevertOverridesForm[RevertOverridesForm]
            UpdateBlockForm[UpdateBlockForm]
            WorkspaceSafeFormTrait[WorkspaceSafeFormTrait]
            LayoutBuilderHooks[LayoutBuilderHooks]
            LayoutBuilderThemeHooks[LayoutBuilderThemeHooks]
            LayoutEntityDisplayNormalizer[LayoutEntityDisplayNormalizer]
            ExtraFieldBlock[ExtraFieldBlock]
            FieldBlock[FieldBlock]
            InlineBlock[InlineBlock]
            AddComponent[AddComponent]
            AddComponentDeriver[AddComponentDeriver]
            SectionData[SectionData]
            ExtraFieldBlockDeriver[ExtraFieldBlockDeriver]
            FieldBlockDeriver[FieldBlockDeriver]
            InlineBlockDeriver[InlineBlockDeriver]
            LayoutBuilderLocalTaskDeriver[LayoutBuilderLocalTaskDeriver]
            LayoutSectionItem[LayoutSectionItem]
            LayoutBuilderWidget[LayoutBuilderWidget]
            BlankLayout[BlankLayout]
            MultiWidthLayoutBase[MultiWidthLayoutBase]
            ThreeColumnLayout[ThreeColumnLayout]
            TwoColumnLayout[TwoColumnLayout]
            DefaultsSectionStorage[DefaultsSectionStorage]
            OverridesSectionStorage[OverridesSectionStorage]
            SectionStorageBase[SectionStorageBase]
            SectionStorageLocalTaskProviderInterface[SectionStorageLocalTaskProviderInterface]
            LayoutBuilderRoutes[LayoutBuilderRoutes]
            LayoutSectionStorageParamConverter[LayoutSectionStorageParamConverter]
            LayoutTempstoreRouteEnhancer[LayoutTempstoreRouteEnhancer]
            SectionStorageDefinition[SectionStorageDefinition]
            SectionStorageManager[SectionStorageManager]
            SectionStorageManagerInterface[SectionStorageManagerInterface]
            layout_discovery_post_update[layout_discovery.post_update]
            LayoutDiscoveryHooks[LayoutDiscoveryHooks]
            LayoutDiscoveryThemeHooks[LayoutDiscoveryThemeHooks]
            LayoutDiscoveryRequirements[LayoutDiscoveryRequirements]
            AttributeXss[AttributeXss]
            LinkItemInterface[LinkItemInterface]
            LinkTitleVisibility[LinkTitleVisibility]
            LinkHooks[LinkHooks]
            LinkThemeHooks[LinkThemeHooks]
            LinkFormatter[LinkFormatter]
            LinkSeparateFormatter[LinkSeparateFormatter]
            LinkItem[LinkItem]
            LinkWidget[LinkWidget]
            LinkField[LinkField]
            FieldLink[FieldLink]
            LinkAccessConstraint[LinkAccessConstraint]
            LinkAccessConstraintValidator[LinkAccessConstraintValidator]
            LinkExternalProtocolsConstraint[LinkExternalProtocolsConstraint]
            LinkExternalProtocolsConstraintValidator[LinkExternalProtocolsConstraintValidator]
            LinkNotExistingInternalConstraint[LinkNotExistingInternalConstraint]
            LinkNotExistingInternalConstraintValidator[LinkNotExistingInternalConstraintValidator]
            LinkTypeConstraint[LinkTypeConstraint]
            LinkTypeConstraintValidator[LinkTypeConstraintValidator]
            locale_api[locale.api]
            locale_post_update[locale.post_update]
            Gettext[Gettext]
            LocaleConfigManager[LocaleConfigManager]
            LocaleConfigSubscriber[LocaleConfigSubscriber]
            LocaleDefaultConfigStorage[LocaleDefaultConfigStorage]
            LocaleEvent[LocaleEvent]
            LocaleEvents[LocaleEvents]
            LocaleLookup[LocaleLookup]
            LocaleProjectStorage[LocaleProjectStorage]
            LocaleProjectStorageInterface[LocaleProjectStorageInterface]
            LocaleTranslation[LocaleTranslation]
            PluralFormula[PluralFormula]
            PluralFormulaInterface[PluralFormulaInterface]
            PoDatabaseReader[PoDatabaseReader]
            PoDatabaseWriter[PoDatabaseWriter]
            SourceString[SourceString]
            StringBase[StringBase]
            StringDatabaseStorage[StringDatabaseStorage]
            StringInterface[StringInterface]
            StringStorageException[StringStorageException]
            StringStorageInterface[StringStorageInterface]
            TranslationString[TranslationString]
            LocaleController[LocaleController]
            LocaleTranslationCacheTag[LocaleTranslationCacheTag]
            ExportForm[ExportForm]
            ImportForm[ImportForm]
            LocaleSettingsForm[LocaleSettingsForm]
            TranslateEditForm[TranslateEditForm]
            TranslateFilterForm[TranslateFilterForm]
            TranslateFormBase[TranslateFormBase]
            TranslationStatusForm[TranslationStatusForm]
            LocaleHooks[LocaleHooks]
            LocaleRequirements[LocaleRequirements]
            LocaleThemeHooks[LocaleThemeHooks]
            TranslationsStream[TranslationsStream]
            MailerHooks[MailerHooks]
            media_api[media.api]
            media_post_update[media.post_update]
            IFrameMarkup[IFrameMarkup]
            IFrameUrlHelper[IFrameUrlHelper]
            MediaAccessControlHandler[MediaAccessControlHandler]
            MediaForm[MediaForm]
            MediaInterface[MediaInterface]
            MediaListBuilder[MediaListBuilder]
            MediaPermissions[MediaPermissions]
            MediaSourceBase[MediaSourceBase]
            MediaSourceEntityConstraintsInterface[MediaSourceEntityConstraintsInterface]
            MediaSourceFieldConstraintsInterface[MediaSourceFieldConstraintsInterface]
            MediaSourceInterface[MediaSourceInterface]
            MediaSourceManager[MediaSourceManager]
            MediaStorage[MediaStorage]
            MediaTypeAccessControlHandler[MediaTypeAccessControlHandler]
            MediaTypeForm[MediaTypeForm]
            MediaTypeInterface[MediaTypeInterface]
            MediaTypeListBuilder[MediaTypeListBuilder]
            MediaViewsData[MediaViewsData]
            MediaSource[MediaSource]
            OEmbedMediaSource[OEmbedMediaSource]
            MediaFilterController[MediaFilterController]
            OEmbedIframeController[OEmbedIframeController]
            MediaType[MediaType]
            MediaConfigSubscriber[MediaConfigSubscriber]
            MediaSettingsForm[MediaSettingsForm]
            MediaTypeDeleteConfirmForm[MediaTypeDeleteConfirmForm]
            MediaHooks[MediaHooks]
            MediaRequirementsHooks[MediaRequirementsHooks]
            MediaThemeHooks[MediaThemeHooks]
            MediaThemeSuggestionsHooks[MediaThemeSuggestionsHooks]
            MediaRequirements[MediaRequirements]
            Endpoint[Endpoint]
            Provider[Provider]
            ProviderException[ProviderException]
            ProviderRepository[ProviderRepository]
            ProviderRepositoryInterface[ProviderRepositoryInterface]
            Resource[Resource]
            ResourceException[ResourceException]
            ResourceFetcher[ResourceFetcher]
            ResourceFetcherInterface[ResourceFetcherInterface]
            UrlResolver[UrlResolver]
            UrlResolverInterface[UrlResolverInterface]
            MediaSelection[MediaSelection]
            MediaThumbnailFormatter[MediaThumbnailFormatter]
            OEmbedFormatter[OEmbedFormatter]
            OEmbedWidget[OEmbedWidget]
            MediaEmbed[MediaEmbed]
            AudioFile[AudioFile]
            OEmbed[OEmbed]
            OEmbedDeriver[OEmbedDeriver]
            OEmbedInterface[OEmbedInterface]
            VideoFile[VideoFile]
            ThumbnailDownloader[ThumbnailDownloader]
            MediaMappingsConstraint[MediaMappingsConstraint]
            MediaMappingsConstraintValidator[MediaMappingsConstraintValidator]
            OEmbedResourceConstraint[OEmbedResourceConstraint]
            OEmbedResourceConstraintValidator[OEmbedResourceConstraintValidator]
            MediaRevision[MediaRevision]
            MediaRouteProvider[MediaRouteProvider]
            media_library_api[media_library.api]
            media_library_post_update[media_library.post_update]
            MediaLibraryEditorOpener[MediaLibraryEditorOpener]
            MediaLibraryFieldWidgetOpener[MediaLibraryFieldWidgetOpener]
            MediaLibraryOpenerInterface[MediaLibraryOpenerInterface]
            MediaLibraryServiceProvider[MediaLibraryServiceProvider]
            MediaLibraryState[MediaLibraryState]
            MediaLibraryUiBuilder[MediaLibraryUiBuilder]
            OpenerResolver[OpenerResolver]
            OpenerResolverInterface[OpenerResolverInterface]
            UpdateSelectionCommand[UpdateSelectionCommand]
            AddFormBase[AddFormBase]
            FileUploadForm[FileUploadForm]
            OEmbedForm[OEmbedForm]
            SettingsForm[SettingsForm]
            MediaLibraryHooks[MediaLibraryHooks]
            MediaLibraryThemeHooks[MediaLibraryThemeHooks]
            MediaLibraryViewsHooks[MediaLibraryViewsHooks]
            MediaLibraryWidget[MediaLibraryWidget]
            MediaLibrarySelectForm[MediaLibrarySelectForm]
            menu_link_content_post_update[menu_link_content.post_update]
            MenuLinkContentAccessControlHandler[MenuLinkContentAccessControlHandler]
            MenuLinkContentInterface[MenuLinkContentInterface]
            MenuLinkContentStorage[MenuLinkContentStorage]
            MenuLinkContentStorageInterface[MenuLinkContentStorageInterface]
            MenuLinkContentStorageSchema[MenuLinkContentStorageSchema]
            MenuLinkListBuilder[MenuLinkListBuilder]
            MenuController[MenuController]
            MenuLinkContent[MenuLinkContent]
            MenuLinkContentDeleteForm[MenuLinkContentDeleteForm]
            MenuLinkContentForm[MenuLinkContentForm]
            MenuLinkContentHooks[MenuLinkContentHooks]
            MenuLinkContentDeriver[MenuLinkContentDeriver]
            LinkOptions[LinkOptions]
            LinkUri[LinkUri]
            MenuLink[MenuLink]
            MenuLinkTranslation[MenuLinkTranslation]
            MenuLinkLocalized[MenuLinkLocalized]
            MenuTreeHierarchyConstraint[MenuTreeHierarchyConstraint]
            MenuTreeHierarchyConstraintValidator[MenuTreeHierarchyConstraintValidator]
            MenuForm[MenuForm]
            MenuListBuilder[MenuListBuilder]
            MenuDeleteForm[MenuDeleteForm]
            MenuLinkEditForm[MenuLinkEditForm]
            MenuLinkResetForm[MenuLinkResetForm]
            MenuUiHooks[MenuUiHooks]
            MenuUiThemeHooks[MenuUiThemeHooks]
            MenuUiMenuTreeManipulators[MenuUiMenuTreeManipulators]
            MenuLinkAdd[MenuLinkAdd]
            MenuSettingsConstraint[MenuSettingsConstraint]
            MenuSettingsConstraintValidator[MenuSettingsConstraintValidator]
            migrate_api[migrate.api]
            migrate_post_update[migrate.post_update]
            EntityFieldDefinitionTrait[EntityFieldDefinitionTrait]
            MigrateBuildDependencyInterface[MigrateBuildDependencyInterface]
            MigrateException[MigrateException]
            MigrateExecutable[MigrateExecutable]
            MigrateExecutableInterface[MigrateExecutableInterface]
            MigrateLookup[MigrateLookup]
            MigrateLookupInterface[MigrateLookupInterface]
            MigrateMessage[MigrateMessage]
            MigrateMessageInterface[MigrateMessageInterface]
            MigrateSkipProcessException[MigrateSkipProcessException]
            MigrateSkipRowException[MigrateSkipRowException]
            ProcessPluginBase[ProcessPluginBase]
            Row[Row]
            MigrateDestination[MigrateDestination]
            MigrateProcessPlugin[MigrateProcessPlugin]
            MigrateSource[MigrateSource]
            MultipleProviderAnnotationInterface[MultipleProviderAnnotationInterface]
            MigrateProcess[MigrateProcess]
            AuditException[AuditException]
            AuditorInterface[AuditorInterface]
            AuditResult[AuditResult]
            HighestIdInterface[HighestIdInterface]
            IdAuditor[IdAuditor]
            MigrateMessageController[MigrateMessageController]
            EventBase[EventBase]
            ImportAwareInterface[ImportAwareInterface]
            MigrateEvents[MigrateEvents]
            MigrateIdMapMessageEvent[MigrateIdMapMessageEvent]
            MigrateImportEvent[MigrateImportEvent]
            MigrateMapDeleteEvent[MigrateMapDeleteEvent]
            MigrateMapSaveEvent[MigrateMapSaveEvent]
            MigratePostRowSaveEvent[MigratePostRowSaveEvent]
            MigratePreRowSaveEvent[MigratePreRowSaveEvent]
            MigrateRollbackEvent[MigrateRollbackEvent]
            MigrateRowDeleteEvent[MigrateRowDeleteEvent]
            RollbackAwareInterface[RollbackAwareInterface]
            EntityValidationException[EntityValidationException]
            RequirementsException[RequirementsException]
            MigrateHooks[MigrateHooks]
            MigrateDestinationInterface[MigrateDestinationInterface]
            MigrateDestinationPluginManager[MigrateDestinationPluginManager]
            MigrateIdMapInterface[MigrateIdMapInterface]
            MigratePluginManager[MigratePluginManager]
            MigratePluginManagerInterface[MigratePluginManagerInterface]
            MigrateProcessInterface[MigrateProcessInterface]
            MigrateSourceInterface[MigrateSourceInterface]
            MigrateSourcePluginManager[MigrateSourcePluginManager]
            MigrateValidatableEntityInterface[MigrateValidatableEntityInterface]
            Migration[Migration]
            MigrationDeriverTrait[MigrationDeriverTrait]
            MigrationInterface[MigrationInterface]
            MigrationPluginManager[MigrationPluginManager]
            MigrationPluginManagerInterface[MigrationPluginManagerInterface]
            NoSourcePluginDecorator[NoSourcePluginDecorator]
            PluginEventSubscriber[PluginEventSubscriber]
            RequirementsInterface[RequirementsInterface]
            MigrateEntity[MigrateEntity]
            MigrateEntityComplete[MigrateEntityComplete]
            MigrateEntityRevision[MigrateEntityRevision]
            AnnotatedClassDiscoveryAutomatedProviders[AnnotatedClassDiscoveryAutomatedProviders]
            AnnotatedDiscoveryAutomatedProvidersTrait[AnnotatedDiscoveryAutomatedProvidersTrait]
            AttributeDiscoveryWithAnnotationsAutomatedProviders[AttributeDiscoveryWithAnnotationsAutomatedProviders]
            ProviderFilterDecorator[ProviderFilterDecorator]
            StaticReflectionParser[StaticReflectionParser]
            BadPluginDefinitionException[BadPluginDefinitionException]
            ComponentEntityDisplayBase[ComponentEntityDisplayBase]
            Config[Config]
            DestinationBase[DestinationBase]
            Entity[Entity]
            EntityBaseFieldOverride[EntityBaseFieldOverride]
            EntityConfigBase[EntityConfigBase]
            EntityContentBase[EntityContentBase]
            EntityContentComplete[EntityContentComplete]
            EntityFieldInstance[EntityFieldInstance]
            EntityFieldStorageConfig[EntityFieldStorageConfig]
            EntityRevision[EntityRevision]
            EntityViewMode[EntityViewMode]
            NullDestination[NullDestination]
            PerComponentEntityDisplay[PerComponentEntityDisplay]
            PerComponentEntityFormDisplay[PerComponentEntityFormDisplay]
            NullIdMap[NullIdMap]
            Sql[Sql]
            ArrayBuild[ArrayBuild]
            Callback[Callback]
            Concat[Concat]
            DefaultValue[DefaultValue]
            Download[Download]
            EntityExists[EntityExists]
            Explode[Explode]
            Extract[Extract]
            FileCopy[FileCopy]
            FileProcessBase[FileProcessBase]
            Flatten[Flatten]
            FormatDate[FormatDate]
            Get[Get]
            Log[Log]
            MachineName[MachineName]
            MakeUniqueBase[MakeUniqueBase]
            MakeUniqueEntityField[MakeUniqueEntityField]
            MenuLinkParent[MenuLinkParent]
            MigrationLookup[MigrationLookup]
            NullCoalesce[NullCoalesce]
            Route[Route]
            SkipOnEmpty[SkipOnEmpty]
            SkipRowIfNotSet[SkipRowIfNotSet]
            StaticMap[StaticMap]
            SubProcess[SubProcess]
            Substr[Substr]
            UrlEncode[UrlEncode]
            ConfigEntity[ConfigEntity]
            ContentEntity[ContentEntity]
            ContentEntityDeriver[ContentEntityDeriver]
            DummyQueryTrait[DummyQueryTrait]
            EmbeddedDataSource[EmbeddedDataSource]
            EmptySource[EmptySource]
            SourcePluginBase[SourcePluginBase]
            SqlBase[SqlBase]
            migrate_drupal_post_update[migrate_drupal.post_update]
            FieldDiscovery[FieldDiscovery]
            FieldDiscoveryInterface[FieldDiscoveryInterface]
            MigrateDrupalServiceProvider[MigrateDrupalServiceProvider]
            MigrationConfigurationTrait[MigrationConfigurationTrait]
            MigrationState[MigrationState]
            NodeMigrateType[NodeMigrateType]
            MigrateField[MigrateField]
            MigrateDrupalHooks[MigrateDrupalHooks]
            MigrateFieldInterface[MigrateFieldInterface]
            MigrateFieldPluginManager[MigrateFieldPluginManager]
            MigrateFieldPluginManagerInterface[MigrateFieldPluginManagerInterface]
            MigrationWithFollowUpInterface[MigrationWithFollowUpInterface]
            EntityReferenceTranslationDeriver[EntityReferenceTranslationDeriver]
            FieldMigration[FieldMigration]
            FieldPluginBase[FieldPluginBase]
            ReferenceBase[ReferenceBase]
            NodeReference[NodeReference]
            UserReference[UserReference]
            NodeCompleteNodeLookup[NodeCompleteNodeLookup]
            NodeCompleteNodeRevisionLookup[NodeCompleteNodeRevisionLookup]
            NodeCompleteNodeTranslationLookup[NodeCompleteNodeTranslationLookup]
            DrupalSqlBase[DrupalSqlBase]
            I18nQueryTrait[I18nQueryTrait]
            Variable[Variable]
            VariableMultiRow[VariableMultiRow]
            VariableTranslation[VariableTranslation]
            FieldableEntity[FieldableEntity]
            MigrateAccessCheck[MigrateAccessCheck]
            MigrateMessageCapture[MigrateMessageCapture]
            MigrateUpgradeImportBatch[MigrateUpgradeImportBatch]
            MigrateController[MigrateController]
            CredentialForm[CredentialForm]
            IdConflictForm[IdConflictForm]
            IncrementalForm[IncrementalForm]
            MigrateUpgradeFormBase[MigrateUpgradeFormBase]
            OverviewForm[OverviewForm]
            ReviewForm[ReviewForm]
            MigrateDrupalUiHooks[MigrateDrupalUiHooks]
            MigrateDrupalUiRouteSubscriber[MigrateDrupalUiRouteSubscriber]
            MysqlServiceProvider[MysqlServiceProvider]
            RequirementsTrait[RequirementsTrait]
            Connection[Connection]
            Delete[Delete]
            ExceptionHandler[ExceptionHandler]
            Insert[Insert]
            Merge[Merge]
            Schema[Schema]
            Select[Select]
            TransactionManager[TransactionManager]
            Truncate[Truncate]
            Update[Update]
            Upsert[Upsert]
            Tasks[Tasks]
            MysqlHooks[MysqlHooks]
            MysqlRequirements[MysqlRequirements]
            MysqlCastSql[MysqlCastSql]
            InvalidCharsetException[InvalidCharsetException]
            NamedPlaceholderConverter[NamedPlaceholderConverter]
            Result[Result]
            Statement[Statement]
            MysqliHooks[MysqliHooks]
            MysqliCastSql[MysqliCastSql]
            navigation_api[navigation.api]
            navigation_post_update[navigation.post_update]
            EntityRouteHelper[EntityRouteHelper]
            NavigationContentLinks[NavigationContentLinks]
            NavigationLayout[NavigationLayout]
            NavigationRenderer[NavigationRenderer]
            NavigationServiceProvider[NavigationServiceProvider]
            ShortcutLazyBuilder[ShortcutLazyBuilder]
            TopBarItemBase[TopBarItemBase]
            TopBarItemManager[TopBarItemManager]
            TopBarItemManagerInterface[TopBarItemManagerInterface]
            TopBarItemPluginInterface[TopBarItemPluginInterface]
            TopBarRegion[TopBarRegion]
            WorkspacesLazyBuilder[WorkspacesLazyBuilder]
            TopBarItem[TopBarItem]
            TopBar[TopBar]
            LayoutForm[LayoutForm]
            NavigationHooks[NavigationHooks]
            NavigationRequirements[NavigationRequirements]
            NavigationThemeHooks[NavigationThemeHooks]
            NavigationMenuLinkTree[NavigationMenuLinkTree]
            NavigationMenuLinkTreeManipulators[NavigationMenuLinkTreeManipulators]
            NavigationLinkBlock[NavigationLinkBlock]
            NavigationMenuBlock[NavigationMenuBlock]
            NavigationShortcutsBlock[NavigationShortcutsBlock]
            NavigationUserBlock[NavigationUserBlock]
            AddNavigationBlock[AddNavigationBlock]
            SystemMenuNavigationBlock[SystemMenuNavigationBlock]
            NavigationSectionStorage[NavigationSectionStorage]
            PageActions[PageActions]
            PageContext[PageContext]
            node_api[node.api]
            node_post_update[node.post_update]
            NodeStorageBodyFieldHooks[NodeStorageBodyFieldHooks]
            NodeAccessControlHandler[NodeAccessControlHandler]
            NodeAccessControlHandlerInterface[NodeAccessControlHandlerInterface]
            NodeBulkUpdate[NodeBulkUpdate]
            NodeGrantDatabaseStorage[NodeGrantDatabaseStorage]
            NodeGrantDatabaseStorageInterface[NodeGrantDatabaseStorageInterface]
            NodeInterface[NodeInterface]
            NodeListBuilder[NodeListBuilder]
            NodePermissions[NodePermissions]
            NodePreviewMode[NodePreviewMode]
            NodeServiceProvider[NodeServiceProvider]
            NodeStorage[NodeStorage]
            NodeStorageInterface[NodeStorageInterface]
            NodeStorageSchema[NodeStorageSchema]
            NodeTranslationHandler[NodeTranslationHandler]
            NodeTypeAccessControlHandler[NodeTypeAccessControlHandler]
            NodeTypeInterface[NodeTypeInterface]
            NodeTypeListBuilder[NodeTypeListBuilder]
            NodeViewBuilder[NodeViewBuilder]
            NodeViewsData[NodeViewsData]
            NodePreviewAccessCheck[NodePreviewAccessCheck]
            NodeAccessGrantsCacheContext[NodeAccessGrantsCacheContext]
            NodeTypeMapper[NodeTypeMapper]
            NodeRouteContext[NodeRouteContext]
            NodeController[NodeController]
            NodePreviewController[NodePreviewController]
            NodeViewController[NodeViewController]
            Node[Node]
            NodeRouteProvider[NodeRouteProvider]
            NodeType[NodeType]
            NodeAdminRouteSubscriber[NodeAdminRouteSubscriber]
            NodeTranslationExceptionSubscriber[NodeTranslationExceptionSubscriber]
            NodeTranslationMigrateSubscriber[NodeTranslationMigrateSubscriber]
            DeleteMultiple[DeleteMultiple]
            NodeDeleteForm[NodeDeleteForm]
            NodeForm[NodeForm]
            NodePreviewForm[NodePreviewForm]
            NodeRevisionDeleteForm[NodeRevisionDeleteForm]
            NodeRevisionRevertForm[NodeRevisionRevertForm]
            NodeRevisionRevertTranslationForm[NodeRevisionRevertTranslationForm]
            NodeTypeDeleteConfirm[NodeTypeDeleteConfirm]
            NodeTypeForm[NodeTypeForm]
            RebuildPermissionsForm[RebuildPermissionsForm]
            NodeBlockHooks[NodeBlockHooks]
            NodeConfigTranslationHooks[NodeConfigTranslationHooks]
            NodeDatabaseHooks[NodeDatabaseHooks]
            NodeEntityHooks[NodeEntityHooks]
            NodeFormHooks[NodeFormHooks]
            NodeHelpHooks[NodeHelpHooks]
            NodeMenuHooks[NodeMenuHooks]
            NodeModuleHooks[NodeModuleHooks]
            NodeRequirements[NodeRequirements]
            NodeSearchHooks[NodeSearchHooks]
            NodeThemeHooks[NodeThemeHooks]
            NodeTokensHooks[NodeTokensHooks]
            NodeUserHooks[NodeUserHooks]
            NodeViewsHooks[NodeViewsHooks]
            NodePreviewConverter[NodePreviewConverter]
            DemoteNode[DemoteNode]
            PromoteNode[PromoteNode]
            StickyNode[StickyNode]
            UnstickyNode[UnstickyNode]
            SyndicateBlock[SyndicateBlock]
            NodeSelection[NodeSelection]
            D6NodeDeriver[D6NodeDeriver]
            D6NodeTranslation[D6NodeTranslation]
            D7NodeDeriver[D7NodeDeriver]
            D7NodeTranslation[D7NodeTranslation]
            EntityNodeType[EntityNodeType]
            NodeUpdate7008[NodeUpdate7008]
            NodeComplete[NodeComplete]
            NodeRevision[NodeRevision]
            ViewModeBase[ViewModeBase]
            NodeEntityTranslation[NodeEntityTranslation]
            NodeSearch[NodeSearch]
            UidRevisionTrait[UidRevisionTrait]
            Nid[Nid]
            Type[Type]
            UidRevision[UidRevision]
            Vid[Vid]
            NodeBulkForm[NodeBulkForm]
            RevisionLink[RevisionLink]
            RevisionLinkDelete[RevisionLinkDelete]
            RevisionLinkRevert[RevisionLinkRevert]
            Access[Access]
            NodeRow[NodeRow]
            options_api[options.api]
            OptionsHooks[OptionsHooks]
            OptionsViewsHooks[OptionsViewsHooks]
            OptionsDefaultFormatter[OptionsDefaultFormatter]
            OptionsKeyFormatter[OptionsKeyFormatter]
            ListFloatItem[ListFloatItem]
            ListIntegerItem[ListIntegerItem]
            ListItemBase[ListItemBase]
            ListStringItem[ListStringItem]
            OptionWidgetsField[OptionWidgetsField]
            ListField[ListField]
            OptionsField[OptionsField]
            NumberListField[NumberListField]
            StringListField[StringListField]
            package_manager_api[package_manager.api]
            ComposerInspector[ComposerInspector]
            ComposerRunner[ComposerRunner]
            DirectWritePreconditionBypass[DirectWritePreconditionBypass]
            ExecutableFinder[ExecutableFinder]
            FailureMarker[FailureMarker]
            FileProcessOutputCallback[FileProcessOutputCallback]
            ImmutablePathList[ImmutablePathList]
            InstalledPackage[InstalledPackage]
            InstalledPackagesList[InstalledPackagesList]
            LegacyVersionUtility[LegacyVersionUtility]
            LoggingBeginner[LoggingBeginner]
            LoggingCommitter[LoggingCommitter]
            LoggingStager[LoggingStager]
            PackageManagerUninstallValidator[PackageManagerUninstallValidator]
            PackageManagerUpdateProcessor[PackageManagerUpdateProcessor]
            PathLocator[PathLocator]
            ProcessOutputCallback[ProcessOutputCallback]
            ProjectInfo[ProjectInfo]
            SandboxManagerBase[SandboxManagerBase]
            StatusCheckTrait[StatusCheckTrait]
            TranslatableStringAdapter[TranslatableStringAdapter]
            TranslatableStringFactory[TranslatableStringFactory]
            ValidationResult[ValidationResult]
            AllowDirectWrite[AllowDirectWrite]
            CollectPathsToExcludeEvent[CollectPathsToExcludeEvent]
            EventWithPackageListTrait[EventWithPackageListTrait]
            PostApplyEvent[PostApplyEvent]
            PostCreateEvent[PostCreateEvent]
            PostRequireEvent[PostRequireEvent]
            PreApplyEvent[PreApplyEvent]
            PreCreateEvent[PreCreateEvent]
            PreRequireEvent[PreRequireEvent]
            SandboxEvent[SandboxEvent]
            SandboxValidationEvent[SandboxValidationEvent]
            StatusCheckEvent[StatusCheckEvent]
            ChangeLogger[ChangeLogger]
            DirectWriteSubscriber[DirectWriteSubscriber]
            UpdateDataSubscriber[UpdateDataSubscriber]
            ApplyFailedException[ApplyFailedException]
            ComposerNotReadyException[ComposerNotReadyException]
            FailureMarkerExistsException[FailureMarkerExistsException]
            SandboxEventException[SandboxEventException]
            SandboxException[SandboxException]
            SandboxOwnershipException[SandboxOwnershipException]
            PackageManagerHooks[PackageManagerHooks]
            PackageManagerRequirementsHooks[PackageManagerRequirementsHooks]
            PackageManagerRequirements[PackageManagerRequirements]
            GitExcluder[GitExcluder]
            NodeModulesExcluder[NodeModulesExcluder]
            SiteConfigurationExcluder[SiteConfigurationExcluder]
            SiteFilesExcluder[SiteFilesExcluder]
            SqliteDatabaseExcluder[SqliteDatabaseExcluder]
            UnknownPathExcluder[UnknownPathExcluder]
            VendorHardeningExcluder[VendorHardeningExcluder]
            Cleaner[Cleaner]
            AllowedScaffoldPackagesValidator[AllowedScaffoldPackagesValidator]
            BaseRequirementsFulfilledValidator[BaseRequirementsFulfilledValidator]
            BaseRequirementValidatorTrait[BaseRequirementValidatorTrait]
            ComposerMinimumStabilityValidator[ComposerMinimumStabilityValidator]
            ComposerPatchesValidator[ComposerPatchesValidator]
            ComposerPluginsValidator[ComposerPluginsValidator]
            ComposerValidator[ComposerValidator]
            DiskSpaceValidator[DiskSpaceValidator]
            DuplicateInfoFileValidator[DuplicateInfoFileValidator]
            EnabledExtensionsValidator[EnabledExtensionsValidator]
            EnvironmentSupportValidator[EnvironmentSupportValidator]
            LockFileValidator[LockFileValidator]
            MultisiteValidator[MultisiteValidator]
            OverwriteExistingPackagesValidator[OverwriteExistingPackagesValidator]
            PendingUpdatesValidator[PendingUpdatesValidator]
            PhpExtensionsValidator[PhpExtensionsValidator]
            PhpTufValidator[PhpTufValidator]
            RsyncValidator[RsyncValidator]
            SandboxDatabaseUpdatesValidator[SandboxDatabaseUpdatesValidator]
            SandboxDirectoryValidator[SandboxDirectoryValidator]
            SettingsValidator[SettingsValidator]
            SupportedReleaseValidator[SupportedReleaseValidator]
            SymlinkValidator[SymlinkValidator]
            WritableFileSystemValidator[WritableFileSystemValidator]
            PageCacheHooks[PageCacheHooks]
            PageCache[PageCache]
            path_post_update[path.post_update]
            PathAliasForm[PathAliasForm]
            PathAliasListBuilder[PathAliasListBuilder]
            PathFilterForm[PathFilterForm]
            PathHooks[PathHooks]
            PathFieldItemList[PathFieldItemList]
            PathItem[PathItem]
            PathWidget[PathWidget]
            PathSetTranslated[PathSetTranslated]
            UrlAliasBase[UrlAliasBase]
            UrlAlias[UrlAlias]
            PathAliasConstraint[PathAliasConstraint]
            PathAliasConstraintValidator[PathAliasConstraintValidator]
            path_alias_post_update[path_alias.post_update]
            AliasManager[AliasManager]
            AliasManagerInterface[AliasManagerInterface]
            AliasPrefixList[AliasPrefixList]
            AliasPrefixListInterface[AliasPrefixListInterface]
            AliasRepository[AliasRepository]
            AliasRepositoryInterface[AliasRepositoryInterface]
            AliasWhitelist[AliasWhitelist]
            AliasWhitelistInterface[AliasWhitelistInterface]
            PathAliasInterface[PathAliasInterface]
            PathAliasStorage[PathAliasStorage]
            PathAliasStorageSchema[PathAliasStorageSchema]
            PathAlias[PathAlias]
            AliasPathProcessor[AliasPathProcessor]
            Condition[Condition]
            QueryFactory[QueryFactory]
            PgsqlHooks[PgsqlHooks]
            PgsqlRequirementsHooks[PgsqlRequirementsHooks]
            PgsqlRequirements[PgsqlRequirements]
            PhpassHooks[PhpassHooks]
            PhpassHashedPassword[PhpassHashedPassword]
            responsive_image_post_update[responsive_image.post_update]
            ResponsiveImageBuilder[ResponsiveImageBuilder]
            ResponsiveImageStyleForm[ResponsiveImageStyleForm]
            ResponsiveImageStyleInterface[ResponsiveImageStyleInterface]
            ResponsiveImageStyleListBuilder[ResponsiveImageStyleListBuilder]
            ResponsiveImage[ResponsiveImage]
            ResponsiveImageStyle[ResponsiveImageStyle]
            ResponsiveImageHooks[ResponsiveImageHooks]
            ResponsiveImageThemeHooks[ResponsiveImageThemeHooks]
            ResponsiveImageFormatter[ResponsiveImageFormatter]
            ImageStyleMappings[ImageStyleMappings]
            ResponsiveImageStyles[ResponsiveImageStyles]
            rest_api[rest.api]
            rest_post_update[rest.post_update]
            ModifiedResourceResponse[ModifiedResourceResponse]
            RequestHandler[RequestHandler]
            ResourceResponseInterface[ResourceResponseInterface]
            ResourceResponseTrait[ResourceResponseTrait]
            RestPermissions[RestPermissions]
            RestResourceConfigInterface[RestResourceConfigInterface]
            RestResource[RestResource]
            ConfigDependencies[ConfigDependencies]
            RestResourceConfig[RestResourceConfig]
            EntityResourcePostRouteSubscriber[EntityResourcePostRouteSubscriber]
            RestHooks[RestHooks]
            ResourceBase[ResourceBase]
            ResourceInterface[ResourceInterface]
            EntityDeriver[EntityDeriver]
            EntityResourceAccessTrait[EntityResourceAccessTrait]
            EntityResourceValidationTrait[EntityResourceValidationTrait]
            ResourcePluginManager[ResourcePluginManager]
            RestExport[RestExport]
            DataEntityRow[DataEntityRow]
            DataFieldRow[DataFieldRow]
            ResourceRoutes[ResourceRoutes]
            search_api[search.api]
            search_post_update[search.post_update]
            SearchIndex[SearchIndex]
            SearchIndexInterface[SearchIndexInterface]
            SearchPageAccessControlHandler[SearchPageAccessControlHandler]
            SearchPageInterface[SearchPageInterface]
            SearchPageListBuilder[SearchPageListBuilder]
            SearchPageRepository[SearchPageRepository]
            SearchPageRepositoryInterface[SearchPageRepositoryInterface]
            SearchPluginManager[SearchPluginManager]
            SearchQuery[SearchQuery]
            SearchTextProcessor[SearchTextProcessor]
            SearchTextProcessorInterface[SearchTextProcessorInterface]
            ViewsSearchQuery[ViewsSearchQuery]
            SearchPlugin[SearchPlugin]
            Search[Search]
            SearchController[SearchController]
            SearchPage[SearchPage]
            SearchIndexException[SearchIndexException]
            ReindexConfirm[ReindexConfirm]
            SearchBlockForm[SearchBlockForm]
            SearchPageAddForm[SearchPageAddForm]
            SearchPageEditForm[SearchPageEditForm]
            SearchPageForm[SearchPageForm]
            SearchPageFormBase[SearchPageFormBase]
            SearchHooks[SearchHooks]
            SearchRequirements[SearchRequirements]
            SearchThemeHooks[SearchThemeHooks]
            ConfigurableSearchPluginBase[ConfigurableSearchPluginBase]
            ConfigurableSearchPluginInterface[ConfigurableSearchPluginInterface]
            SearchIndexingInterface[SearchIndexingInterface]
            SearchInterface[SearchInterface]
            SearchPluginBase[SearchPluginBase]
            SearchPluginCollection[SearchPluginCollection]
            SearchBlock[SearchBlock]
            SearchLocalTask[SearchLocalTask]
            EntitySearchPage[EntitySearchPage]
            SearchConfigurationRankings[SearchConfigurationRankings]
            Score[Score]
            SearchRow[SearchRow]
            SearchPageRoutes[SearchPageRoutes]
            serialization_post_update[serialization.post_update]
            RegisterEntityResolversCompilerPass[RegisterEntityResolversCompilerPass]
            SerializationServiceProvider[SerializationServiceProvider]
            XmlEncoder[XmlEncoder]
            ChainEntityResolver[ChainEntityResolver]
            ChainEntityResolverInterface[ChainEntityResolverInterface]
            EntityResolverInterface[EntityResolverInterface]
            TargetIdResolver[TargetIdResolver]
            UuidReferenceInterface[UuidReferenceInterface]
            UuidResolver[UuidResolver]
            UserRouteAlterSubscriber[UserRouteAlterSubscriber]
            SerializationHooks[SerializationHooks]
            CacheableNormalizerInterface[CacheableNormalizerInterface]
            ComplexDataNormalizer[ComplexDataNormalizer]
            ConfigEntityNormalizer[ConfigEntityNormalizer]
            ContentEntityNormalizer[ContentEntityNormalizer]
            DateTimeIso8601Normalizer[DateTimeIso8601Normalizer]
            DateTimeNormalizer[DateTimeNormalizer]
            EntityNormalizer[EntityNormalizer]
            EntityReferenceFieldItemNormalizer[EntityReferenceFieldItemNormalizer]
            EntityReferenceFieldItemNormalizerTrait[EntityReferenceFieldItemNormalizerTrait]
            FieldableEntityNormalizerTrait[FieldableEntityNormalizerTrait]
            JsonSchemaReflectionTrait[JsonSchemaReflectionTrait]
            ListNormalizer[ListNormalizer]
            MarkupNormalizer[MarkupNormalizer]
            NullNormalizer[NullNormalizer]
            PrimitiveDataNormalizer[PrimitiveDataNormalizer]
            SchematicNormalizerFallbackTrait[SchematicNormalizerFallbackTrait]
            SchematicNormalizerHelperTrait[SchematicNormalizerHelperTrait]
            SchematicNormalizerTrait[SchematicNormalizerTrait]
            SerializedColumnNormalizerTrait[SerializedColumnNormalizerTrait]
            TimestampItemNormalizer[TimestampItemNormalizer]
            TimestampNormalizer[TimestampNormalizer]
            TypedDataNormalizer[TypedDataNormalizer]
            JsonSchemaProviderSerializerInterface[JsonSchemaProviderSerializerInterface]
            JsonSchemaProviderSerializerTrait[JsonSchemaProviderSerializerTrait]
            settings_tray_api[settings_tray.api]
            BlockHasOverridesAccessCheck[BlockHasOverridesAccessCheck]
            BlockPluginHasSettingsTrayFormAccessCheck[BlockPluginHasSettingsTrayFormAccessCheck]
            BlockEntitySettingTrayForm[BlockEntitySettingTrayForm]
            SettingsTrayHooks[SettingsTrayHooks]
            SettingsTrayThemeHooks[SettingsTrayThemeHooks]
            shortcut_api[shortcut.api]
            ShortcutAccessControlHandler[ShortcutAccessControlHandler]
            ShortcutForm[ShortcutForm]
            ShortcutInterface[ShortcutInterface]
            ShortcutLazyBuilders[ShortcutLazyBuilders]
            ShortcutSetAccessControlHandler[ShortcutSetAccessControlHandler]
            ShortcutSetForm[ShortcutSetForm]
            ShortcutSetInterface[ShortcutSetInterface]
            ShortcutSetListBuilder[ShortcutSetListBuilder]
            ShortcutSetStorage[ShortcutSetStorage]
            ShortcutSetStorageInterface[ShortcutSetStorageInterface]
            ShortcutController[ShortcutController]
            ShortcutSetController[ShortcutSetController]
            Shortcut[Shortcut]
            ShortcutSet[ShortcutSet]
            SetCustomize[SetCustomize]
            ShortcutDeleteForm[ShortcutDeleteForm]
            ShortcutSetDeleteForm[ShortcutSetDeleteForm]
            SwitchShortcutSet[SwitchShortcutSet]
            ShortcutHooks[ShortcutHooks]
            ShortcutThemeHooks[ShortcutThemeHooks]
            ShortcutsBlock[ShortcutsBlock]
            EntityShortcutSet[EntityShortcutSet]
            ShortcutSetUsers[ShortcutSetUsers]
            PDOConnection[PDOConnection]
            SqliteHooks[SqliteHooks]
            SyslogHooks[SyslogHooks]
            SysLog[SysLog]
            system_api[system.api]
            system_post_update[system.post_update]
            ActionConfigEntityInterface[ActionConfigEntityInterface]
            CronController[CronController]
            DateFormatAccessControlHandler[DateFormatAccessControlHandler]
            DateFormatListBuilder[DateFormatListBuilder]
            FileDownloadController[FileDownloadController]
            MenuAccessControlHandler[MenuAccessControlHandler]
            MenuInterface[MenuInterface]
            MenuStorage[MenuStorage]
            ModuleAdminLinksHelper[ModuleAdminLinksHelper]
            PathBasedBreadcrumbBuilder[PathBasedBreadcrumbBuilder]
            SystemConfigSubscriber[SystemConfigSubscriber]
            SystemManager[SystemManager]
            TimeZoneResolver[TimeZoneResolver]
            CronAccessCheck[CronAccessCheck]
            DbUpdateAccessCheck[DbUpdateAccessCheck]
            SystemAdminMenuBlockAccessCheck[SystemAdminMenuBlockAccessCheck]
            AdminController[AdminController]
            AssetControllerBase[AssetControllerBase]
            BatchController[BatchController]
            CsrfTokenController[CsrfTokenController]
            CssAssetController[CssAssetController]
            DbUpdateController[DbUpdateController]
            EntityAutocompleteController[EntityAutocompleteController]
            Http4xxController[Http4xxController]
            JsAssetController[JsAssetController]
            LinksetController[LinksetController]
            PerformanceController[PerformanceController]
            SystemController[SystemController]
            SystemInfoController[SystemInfoController]
            ThemeController[ThemeController]
            TimezoneController[TimezoneController]
            StatusReportPage[StatusReportPage]
            Action[Action]
            Menu[Menu]
            AccessRouteAlterSubscriber[AccessRouteAlterSubscriber]
            AdminRouteSubscriber[AdminRouteSubscriber]
            AdvisoriesConfigSubscriber[AdvisoriesConfigSubscriber]
            ConfigCacheTag[ConfigCacheTag]
            SecurityFileUploadEventSubscriber[SecurityFileUploadEventSubscriber]
            ClearCacheForm[ClearCacheForm]
            CronForm[CronForm]
            DateFormatAddForm[DateFormatAddForm]
            DateFormatDeleteForm[DateFormatDeleteForm]
            DateFormatEditForm[DateFormatEditForm]
            DateFormatFormBase[DateFormatFormBase]
            DevelopmentSettingsForm[DevelopmentSettingsForm]
            FileSystemForm[FileSystemForm]
            ImageToolkitForm[ImageToolkitForm]
            LoggingForm[LoggingForm]
            MenuLinksetSettingsForm[MenuLinksetSettingsForm]
            ModulesEnabledTrait[ModulesEnabledTrait]
            ModulesListConfirmForm[ModulesListConfirmForm]
            ModulesListForm[ModulesListForm]
            ModulesListNonStableConfirmForm[ModulesListNonStableConfirmForm]
            ModulesUninstallConfirmForm[ModulesUninstallConfirmForm]
            ModulesUninstallForm[ModulesUninstallForm]
            PerformanceForm[PerformanceForm]
            PrepareModulesEntityUninstallForm[PrepareModulesEntityUninstallForm]
            RegionalForm[RegionalForm]
            SiteInformationForm[SiteInformationForm]
            SiteMaintenanceModeForm[SiteMaintenanceModeForm]
            SystemBrandingOffCanvasForm[SystemBrandingOffCanvasForm]
            SystemMenuOffCanvasForm[SystemMenuOffCanvasForm]
            ThemeAdminForm[ThemeAdminForm]
            ThemeExperimentalConfirmForm[ThemeExperimentalConfirmForm]
            ThemeSettingsForm[ThemeSettingsForm]
            PageAttachmentsHook[PageAttachmentsHook]
            SystemHooks[SystemHooks]
            SystemRequirementsHooks[SystemRequirementsHooks]
            SystemThemeHooks[SystemThemeHooks]
            SystemTokensHooks[SystemTokensHooks]
            SystemRequirements[SystemRequirements]
            PathProcessorFiles[PathProcessorFiles]
            MockPhpStorage[MockPhpStorage]
            Tar[Tar]
            Zip[Zip]
            ClearCacheBlock[ClearCacheBlock]
            SystemBrandingBlock[SystemBrandingBlock]
            SystemBreadcrumbBlock[SystemBreadcrumbBlock]
            SystemMainBlock[SystemMainBlock]
            SystemMenuBlock[SystemMenuBlock]
            SystemMessagesBlock[SystemMessagesBlock]
            SystemPoweredByBlock[SystemPoweredByBlock]
            CurrentThemeCondition[CurrentThemeCondition]
            RequestPath[RequestPath]
            ResponseStatus[ResponseStatus]
            GDToolkit[GDToolkit]
            Convert[Convert]
            CreateNew[CreateNew]
            Crop[Crop]
            Desaturate[Desaturate]
            GDImageToolkitOperationBase[GDImageToolkitOperationBase]
            Resize[Resize]
            Rotate[Rotate]
            Scale[Scale]
            ScaleAndCrop[ScaleAndCrop]
            EntityDateFormat[EntityDateFormat]
            ThemeSettings[ThemeSettings]
            SystemUpdate7000[SystemUpdate7000]
            TimeZone[TimeZone]
            Extension[Extension]
            MenuTranslation[MenuTranslation]
            AssetRoutes[AssetRoutes]
            MenuLinksetRoutes[MenuLinksetRoutes]
            SecurityAdvisoriesFetcher[SecurityAdvisoriesFetcher]
            SecurityAdvisory[SecurityAdvisory]
            BatchNegotiator[BatchNegotiator]
            DbUpdateNegotiator[DbUpdateNegotiator]
            SystemAdminThemePreprocess[SystemAdminThemePreprocess]
            taxonomy_post_update[taxonomy.post_update]
            TaxonomyIndexDepthQueryTrait[TaxonomyIndexDepthQueryTrait]
            TaxonomyPermissions[TaxonomyPermissions]
            TermAccessControlHandler[TermAccessControlHandler]
            TermBreadcrumbBuilder[TermBreadcrumbBuilder]
            TermForm[TermForm]
            TermInterface[TermInterface]
            TermStorage[TermStorage]
            TermStorageInterface[TermStorageInterface]
            TermStorageSchema[TermStorageSchema]
            TermTranslationHandler[TermTranslationHandler]
            TermViewsData[TermViewsData]
            VocabularyAccessControlHandler[VocabularyAccessControlHandler]
            VocabularyForm[VocabularyForm]
            VocabularyInterface[VocabularyInterface]
            VocabularyListBuilder[VocabularyListBuilder]
            VocabularyStorage[VocabularyStorage]
            VocabularyStorageInterface[VocabularyStorageInterface]
            TermRouteContext[TermRouteContext]
            TaxonomyController[TaxonomyController]
            Term[Term]
            Vocabulary[Vocabulary]
            VocabularyRouteProvider[VocabularyRouteProvider]
            OverviewTerms[OverviewTerms]
            TermDeleteForm[TermDeleteForm]
            VocabularyDeleteForm[VocabularyDeleteForm]
            VocabularyResetForm[VocabularyResetForm]
            TaxonomyHooks[TaxonomyHooks]
            TaxonomyThemeHooks[TaxonomyThemeHooks]
            TaxonomyTokensHooks[TaxonomyTokensHooks]
            TaxonomyViewsHooks[TaxonomyViewsHooks]
            TermSelection[TermSelection]
            EntityReferenceTaxonomyTermRssFormatter[EntityReferenceTaxonomyTermRssFormatter]
            D6TermNodeDeriver[D6TermNodeDeriver]
            D7TaxonomyTermDeriver[D7TaxonomyTermDeriver]
            EntityTaxonomyVocabulary[EntityTaxonomyVocabulary]
            TaxonomyTermReference[TaxonomyTermReference]
            TargetBundle[TargetBundle]
            TermLocalizedTranslation[TermLocalizedTranslation]
            TermNode[TermNode]
            TermNodeRevision[TermNodeRevision]
            VocabularyPerType[VocabularyPerType]
            VocabularyTranslation[VocabularyTranslation]
            TermEntityTranslation[TermEntityTranslation]
            TermTranslation[TermTranslation]
            TaxonomyTermHierarchyConstraint[TaxonomyTermHierarchyConstraint]
            TaxonomyTermHierarchyConstraintValidator[TaxonomyTermHierarchyConstraintValidator]
            IndexTid[IndexTid]
            IndexTidDepth[IndexTidDepth]
            IndexTidDepthModifier[IndexTidDepthModifier]
            Taxonomy[Taxonomy]
            VocabularyVid[VocabularyVid]
            Tid[Tid]
            TermName[TermName]
            TaxonomyIndexTid[TaxonomyIndexTid]
            TaxonomyIndexTidDepth[TaxonomyIndexTidDepth]
            NodeTermData[NodeTermData]
            TaxonomyTerm[TaxonomyTerm]
            TelephoneHooks[TelephoneHooks]
            TelephoneLinkFormatter[TelephoneLinkFormatter]
            TelephoneItem[TelephoneItem]
            TelephoneDefaultWidget[TelephoneDefaultWidget]
            PhoneField[PhoneField]
            TelephoneField[TelephoneField]
            text_post_update[text.post_update]
            TextProcessed[TextProcessed]
            TextHooks[TextHooks]
            TextDefaultFormatter[TextDefaultFormatter]
            TextSummaryOrTrimmedFormatter[TextSummaryOrTrimmedFormatter]
            TextTrimmedFormatter[TextTrimmedFormatter]
            TextFieldItemList[TextFieldItemList]
            TextItem[TextItem]
            TextItemBase[TextItemBase]
            TextLongItem[TextLongItem]
            TextWithSummaryItem[TextWithSummaryItem]
            TextareaWidget[TextareaWidget]
            TextareaWithSummaryWidget[TextareaWithSummaryWidget]
            TextfieldWidget[TextfieldWidget]
            TextField[TextField]
            toolbar_api[toolbar.api]
            SetSubtreesCommand[SetSubtreesCommand]
            ToolbarController[ToolbarController]
            Toolbar[Toolbar]
            ToolbarItem[ToolbarItem]
            ToolbarHooks[ToolbarHooks]
            ToolbarThemeHooks[ToolbarThemeHooks]
            ToolbarMenuLinkTree[ToolbarMenuLinkTree]
            AllowToolbarPath[AllowToolbarPath]
            update_api[update.api]
            update_post_update[update.post_update]
            ProjectCoreCompatibility[ProjectCoreCompatibility]
            ProjectRelease[ProjectRelease]
            ProjectSecurityData[ProjectSecurityData]
            ProjectSecurityRequirement[ProjectSecurityRequirement]
            UpdateFetcher[UpdateFetcher]
            UpdateFetcherInterface[UpdateFetcherInterface]
            UpdateManager[UpdateManager]
            UpdateManagerInterface[UpdateManagerInterface]
            UpdateProcessor[UpdateProcessor]
            UpdateProcessorInterface[UpdateProcessorInterface]
            UpdateRoot[UpdateRoot]
            UpdateSettingsForm[UpdateSettingsForm]
            UpdateManagerAccessCheck[UpdateManagerAccessCheck]
            UpdateController[UpdateController]
            UpdateHooks[UpdateHooks]
            UpdateRequirements[UpdateRequirements]
            UpdateThemeHooks[UpdateThemeHooks]
            UpdateSettings[UpdateSettings]
            user_api[user.api]
            user_post_update[user.post_update]
            AccountForm[AccountForm]
            AccountSettingsForm[AccountSettingsForm]
            EntityOwnerInterface[EntityOwnerInterface]
            EntityOwnerTrait[EntityOwnerTrait]
            ModulePermissionsLinkHelper[ModulePermissionsLinkHelper]
            PermissionHandler[PermissionHandler]
            PermissionHandlerInterface[PermissionHandlerInterface]
            ProfileForm[ProfileForm]
            ProfileTranslationHandler[ProfileTranslationHandler]
            RegisterForm[RegisterForm]
            RoleAccessControlHandler[RoleAccessControlHandler]
            RoleForm[RoleForm]
            RoleInterface[RoleInterface]
            RoleListBuilder[RoleListBuilder]
            RoleStorage[RoleStorage]
            RoleStorageInterface[RoleStorageInterface]
            StatusItem[StatusItem]
            TimeZoneItem[TimeZoneItem]
            ToolbarLinkBuilder[ToolbarLinkBuilder]
            UserAccessControlHandler[UserAccessControlHandler]
            UserAuth[UserAuth]
            UserAuthentication[UserAuthentication]
            UserAuthenticationInterface[UserAuthenticationInterface]
            UserAuthInterface[UserAuthInterface]
            UserData[UserData]
            UserDataInterface[UserDataInterface]
            UserFloodControl[UserFloodControl]
            UserFloodControlInterface[UserFloodControlInterface]
            UserInterface[UserInterface]
            UserListBuilder[UserListBuilder]
            UserNameItem[UserNameItem]
            UserNameValidator[UserNameValidator]
            UserStorage[UserStorage]
            UserStorageInterface[UserStorageInterface]
            UserStorageSchema[UserStorageSchema]
            UserViewsData[UserViewsData]
            LoginStatusCheck[LoginStatusCheck]
            PermissionAccessCheck[PermissionAccessCheck]
            RegisterAccessCheck[RegisterAccessCheck]
            RoleAccessCheck[RoleAccessCheck]
            Cookie[Cookie]
            CurrentUserContext[CurrentUserContext]
            UserAuthenticationController[UserAuthenticationController]
            UserController[UserController]
            EntityPermissionsRouteProvider[EntityPermissionsRouteProvider]
            EntityPermissionsRouteProviderWithCheck[EntityPermissionsRouteProviderWithCheck]
            Role[Role]
            User[User]
            UserRouteProvider[UserRouteProvider]
            UserEvents[UserEvents]
            UserFloodEvent[UserFloodEvent]
            AccessDeniedSubscriber[AccessDeniedSubscriber]
            MaintenanceModeSubscriber[MaintenanceModeSubscriber]
            UserFloodSubscriber[UserFloodSubscriber]
            UserRequestSubscriber[UserRequestSubscriber]
            EntityPermissionsForm[EntityPermissionsForm]
            RoleSettingsForm[RoleSettingsForm]
            UserCancelForm[UserCancelForm]
            UserLoginForm[UserLoginForm]
            UserLogoutConfirm[UserLogoutConfirm]
            UserMultipleCancelConfirm[UserMultipleCancelConfirm]
            UserPasswordForm[UserPasswordForm]
            UserPasswordResetForm[UserPasswordResetForm]
            UserPermissionsForm[UserPermissionsForm]
            UserPermissionsModuleSpecificForm[UserPermissionsModuleSpecificForm]
            UserPermissionsRoleSpecificForm[UserPermissionsRoleSpecificForm]
            UserHooks[UserHooks]
            UserRequirements[UserRequirements]
            UserThemeHooks[UserThemeHooks]
            UserTokensHooks[UserTokensHooks]
            UserViewsExecutionHooks[UserViewsExecutionHooks]
            UserViewsHooks[UserViewsHooks]
            AddRoleUser[AddRoleUser]
            BlockUser[BlockUser]
            CancelUser[CancelUser]
            ChangeUserRoleBase[ChangeUserRoleBase]
            RemoveRoleUser[RemoveRoleUser]
            UnblockUser[UnblockUser]
            UserLoginBlock[UserLoginBlock]
            UserRole[UserRole]
            UserLocalTask[UserLocalTask]
            UserSelection[UserSelection]
            AuthorFormatter[AuthorFormatter]
            UserNameFormatter[UserNameFormatter]
            LanguageNegotiationUser[LanguageNegotiationUser]
            LanguageNegotiationUserAdmin[LanguageNegotiationUserAdmin]
            LoginLogoutMenuLink[LoginLogoutMenuLink]
            ProfileValues[ProfileValues]
            EntityUser[EntityUser]
            EntityUserRole[EntityUserRole]
            ConvertTokens[ConvertTokens]
            ProfileFieldSettings[ProfileFieldSettings]
            UserLangcode[UserLangcode]
            UserUpdate8002[UserUpdate8002]
            ProfileFieldOptionTranslation[ProfileFieldOptionTranslation]
            UserUpdate7002[UserUpdate7002]
            ProfileField[ProfileField]
            UserPictureInstance[UserPictureInstance]
            ProfileFieldValues[ProfileFieldValues]
            UserPicture[UserPicture]
            UserPictureFile[UserPictureFile]
            UserEntityTranslation[UserEntityTranslation]
            UserRegistrationResource[UserRegistrationResource]
            UserSearch[UserSearch]
            ProtectedUserFieldConstraint[ProtectedUserFieldConstraint]
            ProtectedUserFieldConstraintValidator[ProtectedUserFieldConstraintValidator]
            RoleExistsConstraint[RoleExistsConstraint]
            RoleExistsConstraintValidator[RoleExistsConstraintValidator]
            UserCancelMethodsConstraint[UserCancelMethodsConstraint]
            UserMailRequired[UserMailRequired]
            UserMailRequiredValidator[UserMailRequiredValidator]
            UserMailUnique[UserMailUnique]
            UserNameConstraint[UserNameConstraint]
            UserNameConstraintValidator[UserNameConstraintValidator]
            UserNameUnique[UserNameUnique]
            Permission[Permission]
            RolesRid[RolesRid]
            Uid[Uid]
            CurrentUser[CurrentUser]
            UserName[UserName]
            Roles[Roles]
            UserBulkForm[UserBulkForm]
            Current[Current]
            Name[Name]
            UserRow[UserRow]
            Users[Users]
            AdminNegotiator[AdminNegotiator]
            views_api[views.api]
            views_post_update[views.post_update]
            Analyzer[Analyzer]
            DisplayPluginCollection[DisplayPluginCollection]
            EntityViewsData[EntityViewsData]
            EntityViewsDataInterface[EntityViewsDataInterface]
            ExposedFormCache[ExposedFormCache]
            FieldAPIHandlerTrait[FieldAPIHandlerTrait]
            FieldViewsDataProvider[FieldViewsDataProvider]
            ManyToOneHelper[ManyToOneHelper]
            ResultRow[ResultRow]
            ViewEntityInterface[ViewEntityInterface]
            ViewExecutable[ViewExecutable]
            ViewExecutableFactory[ViewExecutableFactory]
            Views[Views]
            ViewsConfigUpdater[ViewsConfigUpdater]
            ViewsDataHelper[ViewsDataHelper]
            HighlightCommand[HighlightCommand]
            ReplaceTitleCommand[ReplaceTitleCommand]
            ShowButtonsCommand[ShowButtonsCommand]
            TriggerPreviewCommand[TriggerPreviewCommand]
            ViewAjaxResponse[ViewAjaxResponse]
            ViewsAccess[ViewsAccess]
            ViewsArea[ViewsArea]
            ViewsArgument[ViewsArgument]
            ViewsArgumentDefault[ViewsArgumentDefault]
            ViewsArgumentValidator[ViewsArgumentValidator]
            ViewsCache[ViewsCache]
            ViewsDisplay[ViewsDisplay]
            ViewsDisplayExtender[ViewsDisplayExtender]
            ViewsExposedForm[ViewsExposedForm]
            ViewsField[ViewsField]
            ViewsFilter[ViewsFilter]
            ViewsHandlerAnnotationBase[ViewsHandlerAnnotationBase]
            ViewsJoin[ViewsJoin]
            ViewsPager[ViewsPager]
            ViewsPluginAnnotationBase[ViewsPluginAnnotationBase]
            ViewsQuery[ViewsQuery]
            ViewsRelationship[ViewsRelationship]
            ViewsRow[ViewsRow]
            ViewsSort[ViewsSort]
            ViewsStyle[ViewsStyle]
            ViewsWizard[ViewsWizard]
            ViewAjaxController[ViewAjaxController]
            View[View]
            ConfigurableLanguageRenderer[ConfigurableLanguageRenderer]
            DefaultLanguageRenderer[DefaultLanguageRenderer]
            EntityFieldRenderer[EntityFieldRenderer]
            EntityTranslationRendererBase[EntityTranslationRendererBase]
            EntityTranslationRenderTrait[EntityTranslationRenderTrait]
            RendererBase[RendererBase]
            TranslationLanguageRenderer[TranslationLanguageRenderer]
            ViewsEntitySchemaSubscriber[ViewsEntitySchemaSubscriber]
            ViewRenderElementException[ViewRenderElementException]
            ViewsForm[ViewsForm]
            ViewsFormMainForm[ViewsFormMainForm]
            ViewsHooks[ViewsHooks]
            ViewsThemeHooks[ViewsThemeHooks]
            ViewsTokensHooks[ViewsTokensHooks]
            ViewsViewsExecutionHooks[ViewsViewsExecutionHooks]
            ViewsViewsHooks[ViewsViewsHooks]
            DependentWithRemovalPluginInterface[DependentWithRemovalPluginInterface]
            ViewsHandlerManager[ViewsHandlerManager]
            ViewsPluginManager[ViewsPluginManager]
            ViewsBlock[ViewsBlock]
            ViewsBlockBase[ViewsBlockBase]
            ViewsExposedFilterBlock[ViewsExposedFilterBlock]
            DefaultWizardDeriver[DefaultWizardDeriver]
            ViewsEntityArgumentValidator[ViewsEntityArgumentValidator]
            ViewsEntityRow[ViewsEntityRow]
            ViewsLocalTask[ViewsLocalTask]
            ViewsMenuLink[ViewsMenuLink]
            ViewsSelection[ViewsSelection]
            ViewsMenuLinkForm[ViewsMenuLinkForm]
            BrokenHandlerTrait[BrokenHandlerTrait]
            HandlerBase[HandlerBase]
            PluginBase[PluginBase]
            ViewsHandlerInterface[ViewsHandlerInterface]
            ViewsPluginInterface[ViewsPluginInterface]
            AccessPluginBase[AccessPluginBase]
            None[None]
            AreaPluginBase[AreaPluginBase]
            Broken[Broken]
            DisplayLink[DisplayLink]
            HTTPStatusCode[HTTPStatusCode]
            Messages[Messages]
            Text[Text]
            TextCustom[TextCustom]
            Title[Title]
            TokenizeAreaPluginBase[TokenizeAreaPluginBase]
            ArgumentPluginBase[ArgumentPluginBase]
            EntityArgument[EntityArgument]
            EntityReferenceArgument[EntityReferenceArgument]
            Formula[Formula]
            GroupByNumeric[GroupByNumeric]
            LanguageArgument[LanguageArgument]
            ManyToOne[ManyToOne]
            NullArgument[NullArgument]
            NumericArgument[NumericArgument]
            StringArgument[StringArgument]
            ArgumentDefaultPluginBase[ArgumentDefaultPluginBase]
            Fixed[Fixed]
            QueryParameter[QueryParameter]
            Raw[Raw]
            ArgumentValidatorPluginBase[ArgumentValidatorPluginBase]
            NumericArgumentValidator[NumericArgumentValidator]
            CachePluginBase[CachePluginBase]
            Tag[Tag]
            Time[Time]
            Attachment[Attachment]
            DefaultDisplay[DefaultDisplay]
            DisplayMenuInterface[DisplayMenuInterface]
            DisplayPluginBase[DisplayPluginBase]
            DisplayPluginInterface[DisplayPluginInterface]
            DisplayRouterInterface[DisplayRouterInterface]
            Embed[Embed]
            Feed[Feed]
            Page[Page]
            PathPluginBase[PathPluginBase]
            ResponseDisplayPluginInterface[ResponseDisplayPluginInterface]
            DefaultDisplayExtender[DefaultDisplayExtender]
            DisplayExtenderPluginBase[DisplayExtenderPluginBase]
            Basic[Basic]
            ExposedFormPluginBase[ExposedFormPluginBase]
            ExposedFormPluginInterface[ExposedFormPluginInterface]
            InputRequired[InputRequired]
            Boolean[Boolean]
            BulkForm[BulkForm]
            Counter[Counter]
            Custom[Custom]
            Dropbutton[Dropbutton]
            EntityField[EntityField]
            EntityLabel[EntityLabel]
            EntityLinkDelete[EntityLinkDelete]
            EntityLinkEdit[EntityLinkEdit]
            FieldHandlerInterface[FieldHandlerInterface]
            FieldLanguage[FieldLanguage]
            LanguageField[LanguageField]
            LinkBase[LinkBase]
            Links[Links]
            Markup[Markup]
            MultiItemsFieldHandlerInterface[MultiItemsFieldHandlerInterface]
            NumericField[NumericField]
            PrerenderList[PrerenderList]
            RenderedEntity[RenderedEntity]
            Serialized[Serialized]
            TimeInterval[TimeInterval]
            UncacheableFieldHandlerTrait[UncacheableFieldHandlerTrait]
            Url[Url]
            BooleanOperator[BooleanOperator]
            BooleanOperatorString[BooleanOperatorString]
            Bundle[Bundle]
            Combine[Combine]
            Equality[Equality]
            FilterOperatorsInterface[FilterOperatorsInterface]
            FilterPluginBase[FilterPluginBase]
            InOperator[InOperator]
            LanguageFilter[LanguageFilter]
            NumericFilter[NumericFilter]
            StringFilter[StringFilter]
            CastedIntFieldJoin[CastedIntFieldJoin]
            FieldOrLanguageJoin[FieldOrLanguageJoin]
            JoinPluginBase[JoinPluginBase]
            JoinPluginInterface[JoinPluginInterface]
            Subquery[Subquery]
            Full[Full]
            Mini[Mini]
            PagerPluginBase[PagerPluginBase]
            Some[Some]
            CastSql[CastSql]
            CastSqlInterface[CastSqlInterface]
            DateSqlInterface[DateSqlInterface]
            MysqlDateSql[MysqlDateSql]
            PostgresqlDateSql[PostgresqlDateSql]
            QueryPluginBase[QueryPluginBase]
            SqliteDateSql[SqliteDateSql]
            EntityReverse[EntityReverse]
            GroupwiseMax[GroupwiseMax]
            RelationshipPluginBase[RelationshipPluginBase]
            EntityRow[EntityRow]
            Fields[Fields]
            OpmlFields[OpmlFields]
            RowPluginBase[RowPluginBase]
            RssFields[RssFields]
            RssPluginBase[RssPluginBase]
            Random[Random]
            SortPluginBase[SortPluginBase]
            DefaultStyle[DefaultStyle]
            DefaultSummary[DefaultSummary]
            Grid[Grid]
            GridResponsive[GridResponsive]
            HtmlList[HtmlList]
            Mapping[Mapping]
            Opml[Opml]
            StylePluginBase[StylePluginBase]
            Table[Table]
            UnformattedSummary[UnformattedSummary]
            WizardException[WizardException]
            WizardInterface[WizardInterface]
            WizardPluginBase[WizardPluginBase]
            ViewsRenderPipelineMarkup[ViewsRenderPipelineMarkup]
            ViewPageController[ViewPageController]
            views_ui_api[views_ui.api]
            ViewAddForm[ViewAddForm]
            ViewDuplicateForm[ViewDuplicateForm]
            ViewEditForm[ViewEditForm]
            ViewFormBase[ViewFormBase]
            ViewListBuilder[ViewListBuilder]
            ViewPreviewForm[ViewPreviewForm]
            ViewUI[ViewUI]
            SetFormCommand[SetFormCommand]
            ViewsUIController[ViewsUIController]
            AdvancedSettingsForm[AdvancedSettingsForm]
            BasicSettingsForm[BasicSettingsForm]
            BreakLockForm[BreakLockForm]
            AddHandler[AddHandler]
            Analyze[Analyze]
            ConfigHandler[ConfigHandler]
            ConfigHandlerExtra[ConfigHandlerExtra]
            ConfigHandlerGroup[ConfigHandlerGroup]
            Display[Display]
            EditDetails[EditDetails]
            Rearrange[Rearrange]
            RearrangeFilter[RearrangeFilter]
            ReorderDisplays[ReorderDisplays]
            ViewsFormBase[ViewsFormBase]
            ViewsFormInterface[ViewsFormInterface]
            ViewsUiHooks[ViewsUiHooks]
            ViewsUiThemeHooks[ViewsUiThemeHooks]
            ViewUIConverter[ViewUIConverter]
            workflows_api[workflows.api]
            State[State]
            StateInterface[StateInterface]
            Transition[Transition]
            TransitionInterface[TransitionInterface]
            WorkflowAccessControlHandler[WorkflowAccessControlHandler]
            WorkflowInterface[WorkflowInterface]
            WorkflowListBuilder[WorkflowListBuilder]
            WorkflowStateTransitionOperationsAccessCheck[WorkflowStateTransitionOperationsAccessCheck]
            WorkflowTypeInterface[WorkflowTypeInterface]
            WorkflowTypeManager[WorkflowTypeManager]
            WorkflowType[WorkflowType]
            Workflow[Workflow]
            RequiredStateMissingException[RequiredStateMissingException]
            WorkflowAddForm[WorkflowAddForm]
            WorkflowDeleteForm[WorkflowDeleteForm]
            WorkflowEditForm[WorkflowEditForm]
            WorkflowStateAddForm[WorkflowStateAddForm]
            WorkflowStateDeleteForm[WorkflowStateDeleteForm]
            WorkflowStateEditForm[WorkflowStateEditForm]
            WorkflowTransitionAddForm[WorkflowTransitionAddForm]
            WorkflowTransitionDeleteForm[WorkflowTransitionDeleteForm]
            WorkflowTransitionEditForm[WorkflowTransitionEditForm]
            WorkflowsHooks[WorkflowsHooks]
            WorkflowTypeBase[WorkflowTypeBase]
            WorkflowTypeConfigureFormBase[WorkflowTypeConfigureFormBase]
            WorkflowTypeStateFormBase[WorkflowTypeStateFormBase]
            WorkflowTypeTransitionFormBase[WorkflowTypeTransitionFormBase]
            workspaces_post_update[workspaces.post_update]
            WorkspaceAccessControlHandler[WorkspaceAccessControlHandler]
            WorkspaceAccessException[WorkspaceAccessException]
            WorkspaceAssociation[WorkspaceAssociation]
            WorkspaceAssociationInterface[WorkspaceAssociationInterface]
            WorkspaceCacheContext[WorkspaceCacheContext]
            WorkspaceConflictException[WorkspaceConflictException]
            WorkspaceInformation[WorkspaceInformation]
            WorkspaceInformationInterface[WorkspaceInformationInterface]
            WorkspaceInterface[WorkspaceInterface]
            WorkspaceListBuilder[WorkspaceListBuilder]
            WorkspaceManager[WorkspaceManager]
            WorkspaceManagerInterface[WorkspaceManagerInterface]
            WorkspaceMerger[WorkspaceMerger]
            WorkspaceMergerInterface[WorkspaceMergerInterface]
            WorkspaceOperationFactory[WorkspaceOperationFactory]
            WorkspaceOperationInterface[WorkspaceOperationInterface]
            WorkspacePublisher[WorkspacePublisher]
            WorkspacePublisherInterface[WorkspacePublisherInterface]
            WorkspacePublishException[WorkspacePublishException]
            WorkspaceRepository[WorkspaceRepository]
            WorkspaceRepositoryInterface[WorkspaceRepositoryInterface]
            WorkspacesAliasRepository[WorkspacesAliasRepository]
            WorkspacesEntityRepository[WorkspacesEntityRepository]
            WorkspacesLayoutTempstoreRepository[WorkspacesLayoutTempstoreRepository]
            WorkspacesLazyBuilders[WorkspacesLazyBuilders]
            WorkspacesMenuTreeStorage[WorkspacesMenuTreeStorage]
            WorkspacesServiceProvider[WorkspacesServiceProvider]
            WorkspaceViewBuilder[WorkspaceViewBuilder]
            ActiveWorkspaceCheck[ActiveWorkspaceCheck]
            WorkspacesHtmlEntityFormController[WorkspacesHtmlEntityFormController]
            Workspace[Workspace]
            BlockContentWorkspaceHandler[BlockContentWorkspaceHandler]
            DefaultWorkspaceHandler[DefaultWorkspaceHandler]
            IgnoredWorkspaceHandler[IgnoredWorkspaceHandler]
            WorkspaceHandlerInterface[WorkspaceHandlerInterface]
            PgsqlQueryFactory[PgsqlQueryFactory]
            Query[Query]
            QueryAggregate[QueryAggregate]
            QueryTrait[QueryTrait]
            Tables[Tables]
            WorkspacePostPublishEvent[WorkspacePostPublishEvent]
            WorkspacePrePublishEvent[WorkspacePrePublishEvent]
            WorkspacePublishEvent[WorkspacePublishEvent]
            EntitySchemaSubscriber[EntitySchemaSubscriber]
            WorkspaceRequestSubscriber[WorkspaceRequestSubscriber]
            SwitchToLiveForm[SwitchToLiveForm]
            WorkspaceActivateForm[WorkspaceActivateForm]
            WorkspaceDeleteForm[WorkspaceDeleteForm]
            WorkspaceForm[WorkspaceForm]
            WorkspaceMergeForm[WorkspaceMergeForm]
            WorkspacePublishForm[WorkspacePublishForm]
            WorkspaceSwitcherForm[WorkspaceSwitcherForm]
            EntityAccess[EntityAccess]
            FormOperations[FormOperations]
            ViewsOperations[ViewsOperations]
            WorkspacesHooks[WorkspacesHooks]
            WorkspacesRequirements[WorkspacesRequirements]
            QueryParameterWorkspaceNegotiator[QueryParameterWorkspaceNegotiator]
            SessionWorkspaceNegotiator[SessionWorkspaceNegotiator]
            WorkspaceIdNegotiatorInterface[WorkspaceIdNegotiatorInterface]
            WorkspaceNegotiatorInterface[WorkspaceNegotiatorInterface]
            WorkspaceSwitcherBlock[WorkspaceSwitcherBlock]
            WorkspaceSelection[WorkspaceSelection]
            DeletedWorkspaceConstraint[DeletedWorkspaceConstraint]
            DeletedWorkspaceConstraintValidator[DeletedWorkspaceConstraintValidator]
            EntityReferenceSupportedNewEntitiesConstraint[EntityReferenceSupportedNewEntitiesConstraint]
            EntityReferenceSupportedNewEntitiesConstraintValidator[EntityReferenceSupportedNewEntitiesConstraintValidator]
            EntityWorkspaceConflictConstraint[EntityWorkspaceConflictConstraint]
            EntityWorkspaceConflictConstraintValidator[EntityWorkspaceConflictConstraintValidator]
            WorkspacesUiHooks[WorkspacesUiHooks]
        end
    end

    %% Component Dependencies
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
WorkspaceSafeFormTrait --> WorkspaceInformationInterface
    %% ... and 238473 more internal dependencies

    %% External Layer Dependencies
    Core[Core Layer]
    Infrastructure[Infrastructure Layer]
    ContribModules[ContribModules Layer]
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
WorkspaceSafeFormTrait -.-> ContribModules
    %% ... and 467985 more external dependencies
```

---

## Component List

### Components

#### Access

**Purpose:** Access component

**File:** `Access.php`

**Architectural Issues:** 1 violations detected

---

#### AccessDeniedSubscriber

**Purpose:** AccessDeniedSubscriber component

**File:** `AccessDeniedSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPluginBase

**Purpose:** AccessPluginBase component

**File:** `AccessPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### AccessRouteAlterSubscriber

**Purpose:** AccessRouteAlterSubscriber component

**File:** `AccessRouteAlterSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AccountForm

**Purpose:** Form handling for Account

**File:** `AccountForm.php`

**Architectural Issues:** 1 violations detected

---

#### AccountSettingsForm

**Purpose:** Form handling for AccountSettings

**File:** `AccountSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### Action

**Purpose:** Action component

**File:** `Action.php`

**Architectural Issues:** 2 violations detected

---

#### ActionConfigEntityInterface

**Purpose:** ActionConfigEntityInterface component

**File:** `ActionConfigEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ActiveWorkspaceCheck

**Purpose:** ActiveWorkspaceCheck component

**File:** `ActiveWorkspaceCheck.php`

**Architectural Issues:** 1 violations detected

---

#### AddBlockForm

**Purpose:** Form handling for AddBlock

**File:** `AddBlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### AddComponent

**Purpose:** AddComponent component

**File:** `AddComponent.php`

**Architectural Issues:** 1 violations detected

---

#### AddComponentDeriver

**Purpose:** AddComponentDeriver component

**File:** `AddComponentDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### AddFormBase

**Purpose:** Form handling for AddBase

**File:** `AddFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### AddHandler

**Purpose:** Handles requests for Add

**File:** `AddHandler.php`

**Architectural Issues:** 1 violations detected

---

#### AddItemToToolbar

**Purpose:** AddItemToToolbar component

**File:** `AddItemToToolbar.php`

**Architectural Issues:** 1 violations detected

---

#### AddModeration

**Purpose:** AddModeration component

**File:** `AddModeration.php`

**Architectural Issues:** 1 violations detected

---

#### AddModerationDeriver

**Purpose:** AddModerationDeriver component

**File:** `AddModerationDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### AddNavigationBlock

**Purpose:** AddNavigationBlock component

**File:** `AddNavigationBlock.php`

**Architectural Issues:** 1 violations detected

---

#### AddRoleUser

**Purpose:** AddRoleUser component

**File:** `AddRoleUser.php`

**Architectural Issues:** 1 violations detected

---

#### AddSectionController

**Purpose:** Controls AddSection operations

**File:** `AddSectionController.php`

**Architectural Issues:** 1 violations detected

---

#### AddToAllBundles

**Purpose:** AddToAllBundles component

**File:** `AddToAllBundles.php`

**Architectural Issues:** 1 violations detected

---

#### AdminController

**Purpose:** Controls Admin operations

**File:** `AdminController.php`

**Architectural Issues:** 1 violations detected

---

#### AdminDemoNegotiator

**Purpose:** AdminDemoNegotiator component

**File:** `AdminDemoNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### AdminNegotiator

**Purpose:** AdminNegotiator component

**File:** `AdminNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### AdminRouteSubscriber

**Purpose:** AdminRouteSubscriber component

**File:** `AdminRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AdvancedSettingsForm

**Purpose:** Form handling for AdvancedSettings

**File:** `AdvancedSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### AdvisoriesConfigSubscriber

**Purpose:** AdvisoriesConfigSubscriber component

**File:** `AdvisoriesConfigSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AliasManager

**Purpose:** Manages Alias operations

**File:** `AliasManager.php`

**Architectural Issues:** 1 violations detected

---

#### AliasManagerInterface

**Purpose:** Manages AliasInterface operations

**File:** `AliasManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AliasPathProcessor

**Purpose:** AliasPathProcessor component

**File:** `AliasPathProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### AliasPrefixList

**Purpose:** AliasPrefixList component

**File:** `AliasPrefixList.php`

**Architectural Issues:** 1 violations detected

---

#### AliasPrefixListInterface

**Purpose:** AliasPrefixListInterface component

**File:** `AliasPrefixListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AliasRepository

**Purpose:** AliasRepository component

**File:** `AliasRepository.php`

**Architectural Issues:** 1 violations detected

---

#### AliasRepositoryInterface

**Purpose:** AliasRepositoryInterface component

**File:** `AliasRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AliasWhitelist

**Purpose:** AliasWhitelist component

**File:** `AliasWhitelist.php`

**Architectural Issues:** 1 violations detected

---

#### AliasWhitelistInterface

**Purpose:** AliasWhitelistInterface component

**File:** `AliasWhitelistInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Alignment

**Purpose:** Alignment component

**File:** `Alignment.php`

**Architectural Issues:** 1 violations detected

---

#### AllowDirectWrite

**Purpose:** AllowDirectWrite component

**File:** `AllowDirectWrite.php`

**Architectural Issues:** 1 violations detected

---

#### AllowToolbarPath

**Purpose:** AllowToolbarPath component

**File:** `AllowToolbarPath.php`

**Architectural Issues:** 1 violations detected

---

#### AllowedScaffoldPackagesValidator

**Purpose:** AllowedScaffoldPackagesValidator component

**File:** `AllowedScaffoldPackagesValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Analyze

**Purpose:** Analyze component

**File:** `Analyze.php`

**Architectural Issues:** 1 violations detected

---

#### Analyzer

**Purpose:** Analyzer component

**File:** `Analyzer.php`

**Architectural Issues:** 1 violations detected

---

#### AnnotatedClassDiscoveryAutomatedProviders

**Purpose:** AnnotatedClassDiscoveryAutomatedProviders component

**File:** `AnnotatedClassDiscoveryAutomatedProviders.php`

**Architectural Issues:** 1 violations detected

---

#### AnnotatedDiscoveryAutomatedProvidersTrait

**Purpose:** AnnotatedDiscoveryAutomatedProvidersTrait component

**File:** `AnnotatedDiscoveryAutomatedProvidersTrait.php`

**Architectural Issues:** 1 violations detected

---

#### AnnounceBlock

**Purpose:** AnnounceBlock component

**File:** `AnnounceBlock.php`

**Architectural Issues:** 1 violations detected

---

#### AnnounceController

**Purpose:** Controls Announce operations

**File:** `AnnounceController.php`

**Architectural Issues:** 1 violations detected

---

#### AnnounceFetcher

**Purpose:** AnnounceFetcher component

**File:** `AnnounceFetcher.php`

**Architectural Issues:** 1 violations detected

---

#### AnnounceRenderer

**Purpose:** AnnounceRenderer component

**File:** `AnnounceRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### Announcement

**Purpose:** Announcement component

**File:** `Announcement.php`

**Architectural Issues:** 1 violations detected

---

#### AnnouncementsFeedHooks

**Purpose:** AnnouncementsFeedHooks component

**File:** `AnnouncementsFeedHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ApplyFailedException

**Purpose:** ApplyFailedException component

**File:** `ApplyFailedException.php`

**Architectural Issues:** 1 violations detected

---

#### AreaPluginBase

**Purpose:** AreaPluginBase component

**File:** `AreaPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentDefaultPluginBase

**Purpose:** ArgumentDefaultPluginBase component

**File:** `ArgumentDefaultPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentPluginBase

**Purpose:** ArgumentPluginBase component

**File:** `ArgumentPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentValidatorPluginBase

**Purpose:** ArgumentValidatorPluginBase component

**File:** `ArgumentValidatorPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayBuild

**Purpose:** ArrayBuild component

**File:** `ArrayBuild.php`

**Architectural Issues:** 1 violations detected

---

#### AssetControllerBase

**Purpose:** Controls AssetBase operations

**File:** `AssetControllerBase.php`

**Architectural Issues:** 1 violations detected

---

#### AssetRoutes

**Purpose:** AssetRoutes component

**File:** `AssetRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### Attachment

**Purpose:** Attachment component

**File:** `Attachment.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeDiscoveryWithAnnotationsAutomatedProviders

**Purpose:** AttributeDiscoveryWithAnnotationsAutomatedProviders component

**File:** `AttributeDiscoveryWithAnnotationsAutomatedProviders.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeXss

**Purpose:** AttributeXss component

**File:** `AttributeXss.php`

**Architectural Issues:** 1 violations detected

---

#### AudioFile

**Purpose:** AudioFile component

**File:** `AudioFile.php`

**Architectural Issues:** 1 violations detected

---

#### AuditException

**Purpose:** AuditException component

**File:** `AuditException.php`

**Architectural Issues:** 1 violations detected

---

#### AuditResult

**Purpose:** AuditResult component

**File:** `AuditResult.php`

**Architectural Issues:** 1 violations detected

---

#### AuditorInterface

**Purpose:** AuditorInterface component

**File:** `AuditorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AuthorFormatter

**Purpose:** Form handling for Authoratter

**File:** `AuthorFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### AuthorNameFormatter

**Purpose:** Form handling for AuthorNameatter

**File:** `AuthorNameFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### AutomatedCron

**Purpose:** AutomatedCron component

**File:** `AutomatedCron.php`

**Architectural Issues:** 1 violations detected

---

#### AutomatedCronHooks

**Purpose:** AutomatedCronHooks component

**File:** `AutomatedCronHooks.php`

**Architectural Issues:** 1 violations detected

---

#### AvifImageEffect

**Purpose:** AvifImageEffect component

**File:** `AvifImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### BadPluginDefinitionException

**Purpose:** BadPluginDefinitionException component

**File:** `BadPluginDefinitionException.php`

**Architectural Issues:** 1 violations detected

---

#### BanAdmin

**Purpose:** BanAdmin component

**File:** `BanAdmin.php`

**Architectural Issues:** 1 violations detected

---

#### BanDelete

**Purpose:** BanDelete component

**File:** `BanDelete.php`

**Architectural Issues:** 1 violations detected

---

#### BanHooks

**Purpose:** BanHooks component

**File:** `BanHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BanIpManager

**Purpose:** Manages BanIp operations

**File:** `BanIpManager.php`

**Architectural Issues:** 1 violations detected

---

#### BanIpManagerInterface

**Purpose:** Manages BanIpInterface operations

**File:** `BanIpManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BanMiddleware

**Purpose:** BanMiddleware component

**File:** `BanMiddleware.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFieldFileFormatterBase

**Purpose:** Form handling for BaseFieldFileatterBase

**File:** `BaseFieldFileFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFileConstraintValidator

**Purpose:** BaseFileConstraintValidator component

**File:** `BaseFileConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### BaseRequirementValidatorTrait

**Purpose:** BaseRequirementValidatorTrait component

**File:** `BaseRequirementValidatorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### BaseRequirementsFulfilledValidator

**Purpose:** BaseRequirementsFulfilledValidator component

**File:** `BaseRequirementsFulfilledValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Basic

**Purpose:** Basic component

**File:** `Basic.php`

**Architectural Issues:** 1 violations detected

---

#### BasicAuth

**Purpose:** BasicAuth component

**File:** `BasicAuth.php`

**Architectural Issues:** 1 violations detected

---

#### BasicAuthHooks

**Purpose:** BasicAuthHooks component

**File:** `BasicAuthHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BasicSettingsForm

**Purpose:** Form handling for BasicSettings

**File:** `BasicSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### BatchController

**Purpose:** Controls Batch operations

**File:** `BatchController.php`

**Architectural Issues:** 1 violations detected

---

#### BatchNegotiator

**Purpose:** BatchNegotiator component

**File:** `BatchNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipe

**Purpose:** BigPipe component

**File:** `BigPipe.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeController

**Purpose:** Controls BigPipe operations

**File:** `BigPipeController.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeHooks

**Purpose:** BigPipeHooks component

**File:** `BigPipeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeMarkup

**Purpose:** BigPipeMarkup component

**File:** `BigPipeMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeResponse

**Purpose:** BigPipeResponse component

**File:** `BigPipeResponse.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeResponseAttachmentsProcessor

**Purpose:** BigPipeResponseAttachmentsProcessor component

**File:** `BigPipeResponseAttachmentsProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeStrategy

**Purpose:** BigPipeStrategy component

**File:** `BigPipeStrategy.php`

**Architectural Issues:** 1 violations detected

---

#### BigPipeThemeHooks

**Purpose:** BigPipeThemeHooks component

**File:** `BigPipeThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BlankLayout

**Purpose:** BlankLayout component

**File:** `BlankLayout.php`

**Architectural Issues:** 1 violations detected

---

#### Block

**Purpose:** Block component

**File:** `Block.php`

**Architectural Issues:** 3 violations detected

---

#### BlockAccessControlHandler

**Purpose:** Handles requests for BlockAccessControl

**File:** `BlockAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockAddController

**Purpose:** Controls BlockAdd operations

**File:** `BlockAddController.php`

**Architectural Issues:** 1 violations detected

---

#### BlockComponentRenderArray

**Purpose:** BlockComponentRenderArray component

**File:** `BlockComponentRenderArray.php`

**Architectural Issues:** 1 violations detected

---

#### BlockConfigUpdater

**Purpose:** BlockConfigUpdater component

**File:** `BlockConfigUpdater.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContent

**Purpose:** BlockContent component

**File:** `BlockContent.php`

**Architectural Issues:** 3 violations detected

---

#### BlockContentAccessControlHandler

**Purpose:** Handles requests for BlockContentAccessControl

**File:** `BlockContentAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentAddLocalAction

**Purpose:** BlockContentAddLocalAction component

**File:** `BlockContentAddLocalAction.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentBlock

**Purpose:** BlockContentBlock component

**File:** `BlockContentBlock.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentController

**Purpose:** Controls BlockContent operations

**File:** `BlockContentController.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentDeleteForm

**Purpose:** Form handling for BlockContentDelete

**File:** `BlockContentDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentEntityChangedConstraint

**Purpose:** BlockContentEntityChangedConstraint component

**File:** `BlockContentEntityChangedConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentEntityChangedConstraintValidator

**Purpose:** BlockContentEntityChangedConstraintValidator component

**File:** `BlockContentEntityChangedConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentEvents

**Purpose:** BlockContentEvents component

**File:** `BlockContentEvents.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentForm

**Purpose:** Form handling for BlockContent

**File:** `BlockContentForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentGetDependencyEvent

**Purpose:** BlockContentGetDependencyEvent component

**File:** `BlockContentGetDependencyEvent.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentHooks

**Purpose:** BlockContentHooks component

**File:** `BlockContentHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentInterface

**Purpose:** BlockContentInterface component

**File:** `BlockContentInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentIsReusableAccessCheck

**Purpose:** BlockContentIsReusableAccessCheck component

**File:** `BlockContentIsReusableAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentListBuilder

**Purpose:** BlockContentListBuilder component

**File:** `BlockContentListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentModerationHandler

**Purpose:** Handles requests for BlockContentModeration

**File:** `BlockContentModerationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentPermissions

**Purpose:** BlockContentPermissions component

**File:** `BlockContentPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentRouteProvider

**Purpose:** BlockContentRouteProvider component

**File:** `BlockContentRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentStorageBodyFieldHook

**Purpose:** BlockContentStorageBodyFieldHook component

**File:** `BlockContentStorageBodyFieldHook.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentStorageSchema

**Purpose:** BlockContentStorageSchema component

**File:** `BlockContentStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentThemeHooks

**Purpose:** BlockContentThemeHooks component

**File:** `BlockContentThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTranslationHandler

**Purpose:** Handles requests for BlockContentTranslation

**File:** `BlockContentTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentType

**Purpose:** BlockContentType component

**File:** `BlockContentType.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTypeDeleteForm

**Purpose:** Form handling for BlockContentTypeDelete

**File:** `BlockContentTypeDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTypeForm

**Purpose:** Form handling for BlockContentType

**File:** `BlockContentTypeForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTypeInterface

**Purpose:** BlockContentTypeInterface component

**File:** `BlockContentTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTypeListBuilder

**Purpose:** BlockContentTypeListBuilder component

**File:** `BlockContentTypeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentTypeRouteProvider

**Purpose:** BlockContentTypeRouteProvider component

**File:** `BlockContentTypeRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentUuidLookup

**Purpose:** BlockContentUuidLookup component

**File:** `BlockContentUuidLookup.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentViewBuilder

**Purpose:** BlockContentViewBuilder component

**File:** `BlockContentViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentViewsData

**Purpose:** BlockContentViewsData component

**File:** `BlockContentViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### BlockContentWorkspaceHandler

**Purpose:** Handles requests for BlockContentWorkspace

**File:** `BlockContentWorkspaceHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockController

**Purpose:** Controls Block operations

**File:** `BlockController.php`

**Architectural Issues:** 1 violations detected

---

#### BlockCustom

**Purpose:** BlockCustom component

**File:** `BlockCustom.php`

**Architectural Issues:** 1 violations detected

---

#### BlockCustomTranslation

**Purpose:** BlockCustomTranslation component

**File:** `BlockCustomTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### BlockDeleteForm

**Purpose:** Form handling for BlockDelete

**File:** `BlockDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockEntitySettingTrayForm

**Purpose:** Form handling for BlockEntitySettingTray

**File:** `BlockEntitySettingTrayForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockForm

**Purpose:** Form handling for Block

**File:** `BlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### BlockHasOverridesAccessCheck

**Purpose:** BlockHasOverridesAccessCheck component

**File:** `BlockHasOverridesAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### BlockHooks

**Purpose:** BlockHooks component

**File:** `BlockHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BlockInterface

**Purpose:** BlockInterface component

**File:** `BlockInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockLibraryController

**Purpose:** Controls BlockLibrary operations

**File:** `BlockLibraryController.php`

**Architectural Issues:** 1 violations detected

---

#### BlockListBuilder

**Purpose:** BlockListBuilder component

**File:** `BlockListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BlockListController

**Purpose:** Controls BlockList operations

**File:** `BlockListController.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPageDisplayVariantSubscriber

**Purpose:** BlockPageDisplayVariantSubscriber component

**File:** `BlockPageDisplayVariantSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPageVariant

**Purpose:** BlockPageVariant component

**File:** `BlockPageVariant.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPluginCollection

**Purpose:** BlockPluginCollection component

**File:** `BlockPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPluginHasSettingsTrayFormAccessCheck

**Purpose:** Form handling for BlockPluginHasSettingsTrayAccessCheck

**File:** `BlockPluginHasSettingsTrayFormAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPluginId

**Purpose:** BlockPluginId component

**File:** `BlockPluginId.php`

**Architectural Issues:** 1 violations detected

---

#### BlockRegion

**Purpose:** BlockRegion component

**File:** `BlockRegion.php`

**Architectural Issues:** 1 violations detected

---

#### BlockRepository

**Purpose:** BlockRepository component

**File:** `BlockRepository.php`

**Architectural Issues:** 1 violations detected

---

#### BlockRepositoryInterface

**Purpose:** BlockRepositoryInterface component

**File:** `BlockRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockSettings

**Purpose:** BlockSettings component

**File:** `BlockSettings.php`

**Architectural Issues:** 1 violations detected

---

#### BlockTheme

**Purpose:** BlockTheme component

**File:** `BlockTheme.php`

**Architectural Issues:** 1 violations detected

---

#### BlockThemeHooks

**Purpose:** BlockThemeHooks component

**File:** `BlockThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BlockTranslation

**Purpose:** BlockTranslation component

**File:** `BlockTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### BlockTypeAccessControlHandler

**Purpose:** Handles requests for BlockTypeAccessControl

**File:** `BlockTypeAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BlockUser

**Purpose:** BlockUser component

**File:** `BlockUser.php`

**Architectural Issues:** 1 violations detected

---

#### BlockViewBuilder

**Purpose:** BlockViewBuilder component

**File:** `BlockViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BlockVisibility

**Purpose:** BlockVisibility component

**File:** `BlockVisibility.php`

**Architectural Issues:** 1 violations detected

---

#### BlockedIp

**Purpose:** BlockedIp component

**File:** `BlockedIp.php`

**Architectural Issues:** 1 violations detected

---

#### BlockedIps

**Purpose:** BlockedIps component

**File:** `BlockedIps.php`

**Architectural Issues:** 1 violations detected

---

#### Boolean

**Purpose:** Boolean component

**File:** `Boolean.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanOperator

**Purpose:** BooleanOperator component

**File:** `BooleanOperator.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanOperatorString

**Purpose:** BooleanOperatorString component

**File:** `BooleanOperatorString.php`

**Architectural Issues:** 1 violations detected

---

#### Box

**Purpose:** Box component

**File:** `Box.php`

**Architectural Issues:** 1 violations detected

---

#### BoxTranslation

**Purpose:** BoxTranslation component

**File:** `BoxTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### BreakLockForm

**Purpose:** Form handling for BreakLock

**File:** `BreakLockForm.php`

**Architectural Issues:** 1 violations detected

---

#### Breakpoint

**Purpose:** Breakpoint component

**File:** `Breakpoint.php`

**Architectural Issues:** 1 violations detected

---

#### BreakpointHooks

**Purpose:** BreakpointHooks component

**File:** `BreakpointHooks.php`

**Architectural Issues:** 1 violations detected

---

#### BreakpointInterface

**Purpose:** BreakpointInterface component

**File:** `BreakpointInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BreakpointManager

**Purpose:** Manages Breakpoint operations

**File:** `BreakpointManager.php`

**Architectural Issues:** 1 violations detected

---

#### BreakpointManagerInterface

**Purpose:** Manages BreakpointInterface operations

**File:** `BreakpointManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Broken

**Purpose:** Broken component

**File:** `Broken.php`

**Architectural Issues:** 6 violations detected

---

#### BrokenHandlerTrait

**Purpose:** Handles requests for BrokenTrait

**File:** `BrokenHandlerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### BulkForm

**Purpose:** Form handling for Bulk

**File:** `BulkForm.php`

**Architectural Issues:** 1 violations detected

---

#### Bundle

**Purpose:** Bundle component

**File:** `Bundle.php`

**Architectural Issues:** 1 violations detected

---

#### BundleTranslationSettingsInterface

**Purpose:** BundleTranslationSettingsInterface component

**File:** `BundleTranslationSettingsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5

**Purpose:** CKEditor5 component

**File:** `CKEditor5.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5AspectsOfCKEditor5Plugin

**Purpose:** CKEditor5AspectsOfCKEditor5Plugin component

**File:** `CKEditor5AspectsOfCKEditor5Plugin.php`

**Architectural Issues:** 2 violations detected

---

#### CKEditor5CacheTag

**Purpose:** CKEditor5CacheTag component

**File:** `CKEditor5CacheTag.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5ElementConstraint

**Purpose:** CKEditor5ElementConstraint component

**File:** `CKEditor5ElementConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5ElementConstraintValidator

**Purpose:** CKEditor5ElementConstraintValidator component

**File:** `CKEditor5ElementConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5ImageController

**Purpose:** Controls CKEditor5Image operations

**File:** `CKEditor5ImageController.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5MediaAndFilterSettingsInSyncConstraint

**Purpose:** CKEditor5MediaAndFilterSettingsInSyncConstraint component

**File:** `CKEditor5MediaAndFilterSettingsInSyncConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5MediaAndFilterSettingsInSyncConstraintValidator

**Purpose:** CKEditor5MediaAndFilterSettingsInSyncConstraintValidator component

**File:** `CKEditor5MediaAndFilterSettingsInSyncConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5MediaController

**Purpose:** Controls CKEditor5Media operations

**File:** `CKEditor5MediaController.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5Plugin

**Purpose:** CKEditor5Plugin component

**File:** `CKEditor5Plugin.php`

**Architectural Issues:** 2 violations detected

---

#### CKEditor5PluginConfigurableInterface

**Purpose:** CKEditor5PluginConfigurableInterface component

**File:** `CKEditor5PluginConfigurableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginConfigurableTrait

**Purpose:** CKEditor5PluginConfigurableTrait component

**File:** `CKEditor5PluginConfigurableTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginDefault

**Purpose:** CKEditor5PluginDefault component

**File:** `CKEditor5PluginDefault.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginDefinition

**Purpose:** CKEditor5PluginDefinition component

**File:** `CKEditor5PluginDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginElementsSubsetInterface

**Purpose:** CKEditor5PluginElementsSubsetInterface component

**File:** `CKEditor5PluginElementsSubsetInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginInterface

**Purpose:** CKEditor5PluginInterface component

**File:** `CKEditor5PluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginManager

**Purpose:** Manages CKEditor5Plugin operations

**File:** `CKEditor5PluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### CKEditor5PluginManagerInterface

**Purpose:** Manages CKEditor5PluginInterface operations

**File:** `CKEditor5PluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CachePluginBase

**Purpose:** CachePluginBase component

**File:** `CachePluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableNormalization

**Purpose:** CacheableNormalization component

**File:** `CacheableNormalization.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableNormalizerInterface

**Purpose:** CacheableNormalizerInterface component

**File:** `CacheableNormalizerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableOmission

**Purpose:** CacheableOmission component

**File:** `CacheableOmission.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableResourceResponse

**Purpose:** CacheableResourceResponse component

**File:** `CacheableResourceResponse.php`

**Architectural Issues:** 1 violations detected

---

#### Callback

**Purpose:** Callback component

**File:** `Callback.php`

**Architectural Issues:** 1 violations detected

---

#### CancelUser

**Purpose:** CancelUser component

**File:** `CancelUser.php`

**Architectural Issues:** 1 violations detected

---

#### CastSql

**Purpose:** CastSql component

**File:** `CastSql.php`

**Architectural Issues:** 1 violations detected

---

#### CastSqlInterface

**Purpose:** CastSqlInterface component

**File:** `CastSqlInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CastedIntFieldJoin

**Purpose:** CastedIntFieldJoin component

**File:** `CastedIntFieldJoin.php`

**Architectural Issues:** 1 violations detected

---

#### CategoryAutocompleteController

**Purpose:** Controls CategoryAutocomplete operations

**File:** `CategoryAutocompleteController.php`

**Architectural Issues:** 1 violations detected

---

#### ChainEntityResolver

**Purpose:** ChainEntityResolver component

**File:** `ChainEntityResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ChainEntityResolverInterface

**Purpose:** ChainEntityResolverInterface component

**File:** `ChainEntityResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ChangeLogger

**Purpose:** ChangeLogger component

**File:** `ChangeLogger.php`

**Architectural Issues:** 1 violations detected

---

#### ChangeUserRoleBase

**Purpose:** ChangeUserRoleBase component

**File:** `ChangeUserRoleBase.php`

**Architectural Issues:** 1 violations detected

---

#### ChooseBlockController

**Purpose:** Controls ChooseBlock operations

**File:** `ChooseBlockController.php`

**Architectural Issues:** 1 violations detected

---

#### ChooseSectionController

**Purpose:** Controls ChooseSection operations

**File:** `ChooseSectionController.php`

**Architectural Issues:** 1 violations detected

---

#### Ckeditor5Hooks

**Purpose:** Ckeditor5Hooks component

**File:** `Ckeditor5Hooks.php`

**Architectural Issues:** 1 violations detected

---

#### Cleaner

**Purpose:** Cleaner component

**File:** `Cleaner.php`

**Architectural Issues:** 1 violations detected

---

#### ClearCacheBlock

**Purpose:** ClearCacheBlock component

**File:** `ClearCacheBlock.php`

**Architectural Issues:** 1 violations detected

---

#### ClearCacheForm

**Purpose:** Form handling for ClearCache

**File:** `ClearCacheForm.php`

**Architectural Issues:** 1 violations detected

---

#### CodeBlock

**Purpose:** CodeBlock component

**File:** `CodeBlock.php`

**Architectural Issues:** 1 violations detected

---

#### CollectPathsToExcludeEvent

**Purpose:** CollectPathsToExcludeEvent component

**File:** `CollectPathsToExcludeEvent.php`

**Architectural Issues:** 1 violations detected

---

#### CollectRelationshipMetaEvent

**Purpose:** CollectRelationshipMetaEvent component

**File:** `CollectRelationshipMetaEvent.php`

**Architectural Issues:** 1 violations detected

---

#### CollectResourceObjectMetaEvent

**Purpose:** CollectResourceObjectMetaEvent component

**File:** `CollectResourceObjectMetaEvent.php`

**Architectural Issues:** 1 violations detected

---

#### Combine

**Purpose:** Combine component

**File:** `Combine.php`

**Architectural Issues:** 1 violations detected

---

#### Comment

**Purpose:** Comment component

**File:** `Comment.php`

**Architectural Issues:** 4 violations detected

---

#### CommentAccessControlHandler

**Purpose:** Handles requests for CommentAccessControl

**File:** `CommentAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### CommentAdminOverview

**Purpose:** CommentAdminOverview component

**File:** `CommentAdminOverview.php`

**Architectural Issues:** 1 violations detected

---

#### CommentBreadcrumbBuilder

**Purpose:** CommentBreadcrumbBuilder component

**File:** `CommentBreadcrumbBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### CommentBulkForm

**Purpose:** Form handling for CommentBulk

**File:** `CommentBulkForm.php`

**Architectural Issues:** 1 violations detected

---

#### CommentController

**Purpose:** Controls Comment operations

**File:** `CommentController.php`

**Architectural Issues:** 1 violations detected

---

#### CommentDefaultFormatter

**Purpose:** Form handling for CommentDefaultatter

**File:** `CommentDefaultFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### CommentEntityTranslation

**Purpose:** CommentEntityTranslation component

**File:** `CommentEntityTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### CommentFieldItemList

**Purpose:** CommentFieldItemList component

**File:** `CommentFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### CommentForm

**Purpose:** Form handling for Comment

**File:** `CommentForm.php`

**Architectural Issues:** 1 violations detected

---

#### CommentHooks

**Purpose:** CommentHooks component

**File:** `CommentHooks.php`

**Architectural Issues:** 1 violations detected

---

#### CommentInterface

**Purpose:** CommentInterface component

**File:** `CommentInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentItem

**Purpose:** CommentItem component

**File:** `CommentItem.php`

**Architectural Issues:** 1 violations detected

---

#### CommentItemInterface

**Purpose:** CommentItemInterface component

**File:** `CommentItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentLazyBuilders

**Purpose:** CommentLazyBuilders component

**File:** `CommentLazyBuilders.php`

**Architectural Issues:** 1 violations detected

---

#### CommentLinkBuilder

**Purpose:** CommentLinkBuilder component

**File:** `CommentLinkBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### CommentLinkBuilderInterface

**Purpose:** CommentLinkBuilderInterface component

**File:** `CommentLinkBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentManager

**Purpose:** Manages Comment operations

**File:** `CommentManager.php`

**Architectural Issues:** 1 violations detected

---

#### CommentManagerInterface

**Purpose:** Manages CommentInterface operations

**File:** `CommentManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentNameConstraint

**Purpose:** CommentNameConstraint component

**File:** `CommentNameConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### CommentNameConstraintValidator

**Purpose:** CommentNameConstraintValidator component

**File:** `CommentNameConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### CommentPermalinkFormatter

**Purpose:** Form handling for CommentPermalinkatter

**File:** `CommentPermalinkFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### CommentPreviewMode

**Purpose:** CommentPreviewMode component

**File:** `CommentPreviewMode.php`

**Architectural Issues:** 1 violations detected

---

#### CommentSelection

**Purpose:** CommentSelection component

**File:** `CommentSelection.php`

**Architectural Issues:** 1 violations detected

---

#### CommentStatistics

**Purpose:** CommentStatistics component

**File:** `CommentStatistics.php`

**Architectural Issues:** 1 violations detected

---

#### CommentStatisticsInterface

**Purpose:** CommentStatisticsInterface component

**File:** `CommentStatisticsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentStorage

**Purpose:** CommentStorage component

**File:** `CommentStorage.php`

**Architectural Issues:** 1 violations detected

---

#### CommentStorageInterface

**Purpose:** CommentStorageInterface component

**File:** `CommentStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentStorageSchema

**Purpose:** CommentStorageSchema component

**File:** `CommentStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### CommentThemeHooks

**Purpose:** CommentThemeHooks component

**File:** `CommentThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### CommentTokensHooks

**Purpose:** CommentTokensHooks component

**File:** `CommentTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### CommentTranslationHandler

**Purpose:** Handles requests for CommentTranslation

**File:** `CommentTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### CommentType

**Purpose:** CommentType component

**File:** `CommentType.php`

**Architectural Issues:** 2 violations detected

---

#### CommentTypeDeleteForm

**Purpose:** Form handling for CommentTypeDelete

**File:** `CommentTypeDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### CommentTypeForm

**Purpose:** Form handling for CommentType

**File:** `CommentTypeForm.php`

**Architectural Issues:** 1 violations detected

---

#### CommentTypeInterface

**Purpose:** CommentTypeInterface component

**File:** `CommentTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommentTypeListBuilder

**Purpose:** CommentTypeListBuilder component

**File:** `CommentTypeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### CommentViewBuilder

**Purpose:** CommentViewBuilder component

**File:** `CommentViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### CommentViewsData

**Purpose:** CommentViewsData component

**File:** `CommentViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### CommentViewsHooks

**Purpose:** CommentViewsHooks component

**File:** `CommentViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### CommentWidget

**Purpose:** CommentWidget component

**File:** `CommentWidget.php`

**Architectural Issues:** 1 violations detected

---

#### CommentedEntity

**Purpose:** CommentedEntity component

**File:** `CommentedEntity.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataNormalizer

**Purpose:** ComplexDataNormalizer component

**File:** `ComplexDataNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentEntityDisplayBase

**Purpose:** ComponentEntityDisplayBase component

**File:** `ComponentEntityDisplayBase.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerInspector

**Purpose:** ComposerInspector component

**File:** `ComposerInspector.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerMinimumStabilityValidator

**Purpose:** ComposerMinimumStabilityValidator component

**File:** `ComposerMinimumStabilityValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerNotReadyException

**Purpose:** ComposerNotReadyException component

**File:** `ComposerNotReadyException.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerPatchesValidator

**Purpose:** ComposerPatchesValidator component

**File:** `ComposerPatchesValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerPluginsValidator

**Purpose:** ComposerPluginsValidator component

**File:** `ComposerPluginsValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerRunner

**Purpose:** ComposerRunner component

**File:** `ComposerRunner.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerValidator

**Purpose:** ComposerValidator component

**File:** `ComposerValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComputedFileUrl

**Purpose:** ComputedFileUrl component

**File:** `ComputedFileUrl.php`

**Architectural Issues:** 1 violations detected

---

#### Concat

**Purpose:** Concat component

**File:** `Concat.php`

**Architectural Issues:** 1 violations detected

---

#### Condition

**Purpose:** Condition component

**File:** `Condition.php`

**Architectural Issues:** 1 violations detected

---

#### Config

**Purpose:** Config component

**File:** `Config.php`

**Architectural Issues:** 2 violations detected

---

#### ConfigCacheTag

**Purpose:** ConfigCacheTag component

**File:** `ConfigCacheTag.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigController

**Purpose:** Controls Config operations

**File:** `ConfigController.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigDependencies

**Purpose:** ConfigDependencies component

**File:** `ConfigDependencies.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntity

**Purpose:** ConfigEntity component

**File:** `ConfigEntity.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityDenormalizer

**Purpose:** ConfigEntityDenormalizer component

**File:** `ConfigEntityDenormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityMapper

**Purpose:** ConfigEntityMapper component

**File:** `ConfigEntityMapper.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityMapperInterface

**Purpose:** ConfigEntityMapperInterface component

**File:** `ConfigEntityMapperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityNormalizer

**Purpose:** ConfigEntityNormalizer component

**File:** `ConfigEntityNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigExportForm

**Purpose:** Form handling for ConfigExport

**File:** `ConfigExportForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFieldMapper

**Purpose:** ConfigFieldMapper component

**File:** `ConfigFieldMapper.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigHandler

**Purpose:** Handles requests for Config

**File:** `ConfigHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigHandlerExtra

**Purpose:** Handles requests for ConfigExtra

**File:** `ConfigHandlerExtra.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigHandlerGroup

**Purpose:** Handles requests for ConfigGroup

**File:** `ConfigHandlerGroup.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigHooks

**Purpose:** ConfigHooks component

**File:** `ConfigHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImportForm

**Purpose:** Form handling for ConfigImport

**File:** `ConfigImportForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImportSubscriber

**Purpose:** ConfigImportSubscriber component

**File:** `ConfigImportSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImporterFieldPurger

**Purpose:** ConfigImporterFieldPurger component

**File:** `ConfigImporterFieldPurger.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigMapperInterface

**Purpose:** ConfigMapperInterface component

**File:** `ConfigMapperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigMapperLanguageException

**Purpose:** ConfigMapperLanguageException component

**File:** `ConfigMapperLanguageException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigMapperManager

**Purpose:** Manages ConfigMapper operations

**File:** `ConfigMapperManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigMapperManagerInterface

**Purpose:** Manages ConfigMapperInterface operations

**File:** `ConfigMapperManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigMapperPopulateEvent

**Purpose:** ConfigMapperPopulateEvent component

**File:** `ConfigMapperPopulateEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigNamesMapper

**Purpose:** ConfigNamesMapper component

**File:** `ConfigNamesMapper.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSingleExportForm

**Purpose:** Form handling for ConfigSingleExport

**File:** `ConfigSingleExportForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSingleImportForm

**Purpose:** Form handling for ConfigSingleImport

**File:** `ConfigSingleImportForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSubscriber

**Purpose:** ConfigSubscriber component

**File:** `ConfigSubscriber.php`

**Architectural Issues:** 2 violations detected

---

#### ConfigSync

**Purpose:** ConfigSync component

**File:** `ConfigSync.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationAddForm

**Purpose:** Form handling for ConfigTranslationAdd

**File:** `ConfigTranslationAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationBlockListBuilder

**Purpose:** ConfigTranslationBlockListBuilder component

**File:** `ConfigTranslationBlockListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationContextualLink

**Purpose:** ConfigTranslationContextualLink component

**File:** `ConfigTranslationContextualLink.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationContextualLinks

**Purpose:** ConfigTranslationContextualLinks component

**File:** `ConfigTranslationContextualLinks.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationController

**Purpose:** Controls ConfigTranslation operations

**File:** `ConfigTranslationController.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationDeleteForm

**Purpose:** Form handling for ConfigTranslationDelete

**File:** `ConfigTranslationDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationEditForm

**Purpose:** Form handling for ConfigTranslationEdit

**File:** `ConfigTranslationEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationEntityListBuilder

**Purpose:** ConfigTranslationEntityListBuilder component

**File:** `ConfigTranslationEntityListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationEntityListBuilderInterface

**Purpose:** ConfigTranslationEntityListBuilderInterface component

**File:** `ConfigTranslationEntityListBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationEvents

**Purpose:** ConfigTranslationEvents component

**File:** `ConfigTranslationEvents.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationFieldListBuilder

**Purpose:** ConfigTranslationFieldListBuilder component

**File:** `ConfigTranslationFieldListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationFormAccess

**Purpose:** Form handling for ConfigTranslationAccess

**File:** `ConfigTranslationFormAccess.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationFormBase

**Purpose:** Form handling for ConfigTranslationBase

**File:** `ConfigTranslationFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationHooks

**Purpose:** ConfigTranslationHooks component

**File:** `ConfigTranslationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationListController

**Purpose:** Controls ConfigTranslationList operations

**File:** `ConfigTranslationListController.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationLocalTask

**Purpose:** ConfigTranslationLocalTask component

**File:** `ConfigTranslationLocalTask.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationLocalTasks

**Purpose:** ConfigTranslationLocalTasks component

**File:** `ConfigTranslationLocalTasks.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationMapperList

**Purpose:** ConfigTranslationMapperList component

**File:** `ConfigTranslationMapperList.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTranslationOverviewAccess

**Purpose:** ConfigTranslationOverviewAccess component

**File:** `ConfigTranslationOverviewAccess.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableImageEffectBase

**Purpose:** ConfigurableImageEffectBase component

**File:** `ConfigurableImageEffectBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableImageEffectInterface

**Purpose:** ConfigurableImageEffectInterface component

**File:** `ConfigurableImageEffectInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableLanguage

**Purpose:** ConfigurableLanguage component

**File:** `ConfigurableLanguage.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableLanguageInterface

**Purpose:** ConfigurableLanguageInterface component

**File:** `ConfigurableLanguageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableLanguageManager

**Purpose:** Manages ConfigurableLanguage operations

**File:** `ConfigurableLanguageManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableLanguageManagerInterface

**Purpose:** Manages ConfigurableLanguageInterface operations

**File:** `ConfigurableLanguageManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableLanguageRenderer

**Purpose:** ConfigurableLanguageRenderer component

**File:** `ConfigurableLanguageRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableSearchPluginBase

**Purpose:** ConfigurableSearchPluginBase component

**File:** `ConfigurableSearchPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableSearchPluginInterface

**Purpose:** ConfigurableSearchPluginInterface component

**File:** `ConfigurableSearchPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigureBlockFormBase

**Purpose:** Form handling for ConfigureBlockBase

**File:** `ConfigureBlockFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigureSectionForm

**Purpose:** Form handling for ConfigureSection

**File:** `ConfigureSectionForm.php`

**Architectural Issues:** 1 violations detected

---

#### ConfirmDeleteMultiple

**Purpose:** ConfirmDeleteMultiple component

**File:** `ConfirmDeleteMultiple.php`

**Architectural Issues:** 1 violations detected

---

#### Connection

**Purpose:** Connection component

**File:** `Connection.php`

**Architectural Issues:** 4 violations detected

---

#### ContactCategory

**Purpose:** ContactCategory component

**File:** `ContactCategory.php`

**Architectural Issues:** 1 violations detected

---

#### ContactController

**Purpose:** Controls Contact operations

**File:** `ContactController.php`

**Architectural Issues:** 1 violations detected

---

#### ContactForm

**Purpose:** Form handling for Contact

**File:** `ContactForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContactFormAccessControlHandler

**Purpose:** Handles requests for ContactFormAccessControl

**File:** `ContactFormAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ContactFormEditForm

**Purpose:** Form handling for ContactEdit

**File:** `ContactFormEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContactFormHooks

**Purpose:** Form handling for ContactHooks

**File:** `ContactFormHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContactFormInterface

**Purpose:** Form handling for ContactInterface

**File:** `ContactFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContactFormListBuilder

**Purpose:** Form handling for ContactListBuilder

**File:** `ContactFormListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ContactHooks

**Purpose:** ContactHooks component

**File:** `ContactHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContactLink

**Purpose:** ContactLink component

**File:** `ContactLink.php`

**Architectural Issues:** 1 violations detected

---

#### ContactMessageAccessControlHandler

**Purpose:** Handles requests for ContactMessageAccessControl

**File:** `ContactMessageAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ContactMessageResource

**Purpose:** ContactMessageResource component

**File:** `ContactMessageResource.php`

**Architectural Issues:** 1 violations detected

---

#### ContactPageAccess

**Purpose:** ContactPageAccess component

**File:** `ContactPageAccess.php`

**Architectural Issues:** 1 violations detected

---

#### ContactSettings

**Purpose:** ContactSettings component

**File:** `ContactSettings.php`

**Architectural Issues:** 1 violations detected

---

#### ContactViewsHooks

**Purpose:** ContactViewsHooks component

**File:** `ContactViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentDispositionFilenameParser

**Purpose:** ContentDispositionFilenameParser component

**File:** `ContentDispositionFilenameParser.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntity

**Purpose:** ContentEntity component

**File:** `ContentEntity.php`

**Architectural Issues:** 2 violations detected

---

#### ContentEntityDenormalizer

**Purpose:** ContentEntityDenormalizer component

**File:** `ContentEntityDenormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityDeriver

**Purpose:** ContentEntityDeriver component

**File:** `ContentEntityDeriver.php`

**Architectural Issues:** 2 violations detected

---

#### ContentEntityNormalizer

**Purpose:** ContentEntityNormalizer component

**File:** `ContentEntityNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLanguageSettings

**Purpose:** ContentLanguageSettings component

**File:** `ContentLanguageSettings.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLanguageSettingsException

**Purpose:** ContentLanguageSettingsException component

**File:** `ContentLanguageSettingsException.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLanguageSettingsForm

**Purpose:** Form handling for ContentLanguageSettings

**File:** `ContentLanguageSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLanguageSettingsInterface

**Purpose:** ContentLanguageSettingsInterface component

**File:** `ContentLanguageSettingsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLength

**Purpose:** ContentLength component

**File:** `ContentLength.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModeration

**Purpose:** ContentModeration component

**File:** `ContentModeration.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationConfigureEntityTypesForm

**Purpose:** Form handling for ContentModerationConfigureEntityTypes

**File:** `ContentModerationConfigureEntityTypesForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationConfigureForm

**Purpose:** Form handling for ContentModerationConfigure

**File:** `ContentModerationConfigureForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationHooks

**Purpose:** ContentModerationHooks component

**File:** `ContentModerationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationInterface

**Purpose:** ContentModerationInterface component

**File:** `ContentModerationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationRouteSubscriber

**Purpose:** ContentModerationRouteSubscriber component

**File:** `ContentModerationRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationState

**Purpose:** ContentModerationState component

**File:** `ContentModerationState.php`

**Architectural Issues:** 2 violations detected

---

#### ContentModerationStateAccessControlHandler

**Purpose:** Handles requests for ContentModerationStateAccessControl

**File:** `ContentModerationStateAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationStateForm

**Purpose:** Form handling for ContentModerationState

**File:** `ContentModerationStateForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationStateFormatter

**Purpose:** Form handling for ContentModerationStateatter

**File:** `ContentModerationStateFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationStateInterface

**Purpose:** ContentModerationStateInterface component

**File:** `ContentModerationStateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationThemeHooks

**Purpose:** ContentModerationThemeHooks component

**File:** `ContentModerationThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationViewsExecutionHooks

**Purpose:** ContentModerationViewsExecutionHooks component

**File:** `ContentModerationViewsExecutionHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentModerationViewsHooks

**Purpose:** ContentModerationViewsHooks component

**File:** `ContentModerationViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentPreprocess

**Purpose:** ContentPreprocess component

**File:** `ContentPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationContextualLinks

**Purpose:** ContentTranslationContextualLinks component

**File:** `ContentTranslationContextualLinks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationController

**Purpose:** Controls ContentTranslation operations

**File:** `ContentTranslationController.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationDeleteAccess

**Purpose:** ContentTranslationDeleteAccess component

**File:** `ContentTranslationDeleteAccess.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationDeleteForm

**Purpose:** Form handling for ContentTranslationDelete

**File:** `ContentTranslationDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationEnabledSetting

**Purpose:** ContentTranslationEnabledSetting component

**File:** `ContentTranslationEnabledSetting.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationHandler

**Purpose:** Handles requests for ContentTranslation

**File:** `ContentTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationHandlerInterface

**Purpose:** Handles requests for ContentTranslationInterface

**File:** `ContentTranslationHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationHooks

**Purpose:** ContentTranslationHooks component

**File:** `ContentTranslationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationLocalTasks

**Purpose:** ContentTranslationLocalTasks component

**File:** `ContentTranslationLocalTasks.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationManageAccessCheck

**Purpose:** ContentTranslationManageAccessCheck component

**File:** `ContentTranslationManageAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationManager

**Purpose:** Manages ContentTranslation operations

**File:** `ContentTranslationManager.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationManagerInterface

**Purpose:** Manages ContentTranslationInterface operations

**File:** `ContentTranslationManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationMetadataWrapper

**Purpose:** ContentTranslationMetadataWrapper component

**File:** `ContentTranslationMetadataWrapper.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationMetadataWrapperInterface

**Purpose:** ContentTranslationMetadataWrapperInterface component

**File:** `ContentTranslationMetadataWrapperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationOverviewAccess

**Purpose:** ContentTranslationOverviewAccess component

**File:** `ContentTranslationOverviewAccess.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationPermissions

**Purpose:** ContentTranslationPermissions component

**File:** `ContentTranslationPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationRouteSubscriber

**Purpose:** ContentTranslationRouteSubscriber component

**File:** `ContentTranslationRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationSynchronizedFieldsConstraint

**Purpose:** ContentTranslationSynchronizedFieldsConstraint component

**File:** `ContentTranslationSynchronizedFieldsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationSynchronizedFieldsConstraintValidator

**Purpose:** ContentTranslationSynchronizedFieldsConstraintValidator component

**File:** `ContentTranslationSynchronizedFieldsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTranslationThemeHooks

**Purpose:** ContentTranslationThemeHooks component

**File:** `ContentTranslationThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualController

**Purpose:** Controls Contextual operations

**File:** `ContextualController.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualHooks

**Purpose:** ContextualHooks component

**File:** `ContextualHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualLinks

**Purpose:** ContextualLinks component

**File:** `ContextualLinks.php`

**Architectural Issues:** 2 violations detected

---

#### ContextualLinksPlaceholder

**Purpose:** ContextualLinksPlaceholder component

**File:** `ContextualLinksPlaceholder.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualThemeHooks

**Purpose:** ContextualThemeHooks component

**File:** `ContextualThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualViewsHooks

**Purpose:** ContextualViewsHooks component

**File:** `ContextualViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Convert

**Purpose:** Convert component

**File:** `Convert.php`

**Architectural Issues:** 1 violations detected

---

#### ConvertImageEffect

**Purpose:** ConvertImageEffect component

**File:** `ConvertImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### ConvertTokens

**Purpose:** ConvertTokens component

**File:** `ConvertTokens.php`

**Architectural Issues:** 1 violations detected

---

#### Cookie

**Purpose:** Cookie component

**File:** `Cookie.php`

**Architectural Issues:** 1 violations detected

---

#### Counter

**Purpose:** Counter component

**File:** `Counter.php`

**Architectural Issues:** 1 violations detected

---

#### CreateNew

**Purpose:** CreateNew component

**File:** `CreateNew.php`

**Architectural Issues:** 1 violations detected

---

#### CredentialForm

**Purpose:** Form handling for Credential

**File:** `CredentialForm.php`

**Architectural Issues:** 1 violations detected

---

#### CronAccessCheck

**Purpose:** CronAccessCheck component

**File:** `CronAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### CronController

**Purpose:** Controls Cron operations

**File:** `CronController.php`

**Architectural Issues:** 1 violations detected

---

#### CronForm

**Purpose:** Form handling for Cron

**File:** `CronForm.php`

**Architectural Issues:** 1 violations detected

---

#### CronHook

**Purpose:** CronHook component

**File:** `CronHook.php`

**Architectural Issues:** 1 violations detected

---

#### Crop

**Purpose:** Crop component

**File:** `Crop.php`

**Architectural Issues:** 1 violations detected

---

#### CropImageEffect

**Purpose:** CropImageEffect component

**File:** `CropImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### CsrfTokenController

**Purpose:** Controls CsrfToken operations

**File:** `CsrfTokenController.php`

**Architectural Issues:** 1 violations detected

---

#### CssAssetController

**Purpose:** Controls CssAsset operations

**File:** `CssAssetController.php`

**Architectural Issues:** 1 violations detected

---

#### Current

**Purpose:** Current component

**File:** `Current.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentThemeCondition

**Purpose:** CurrentThemeCondition component

**File:** `CurrentThemeCondition.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentUser

**Purpose:** CurrentUser component

**File:** `CurrentUser.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentUserContext

**Purpose:** CurrentUserContext component

**File:** `CurrentUserContext.php`

**Architectural Issues:** 1 violations detected

---

#### Custom

**Purpose:** Custom component

**File:** `Custom.php`

**Architectural Issues:** 1 violations detected

---

#### D6NodeDeriver

**Purpose:** D6NodeDeriver component

**File:** `D6NodeDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### D6NodeTranslation

**Purpose:** D6NodeTranslation component

**File:** `D6NodeTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### D6TermNodeDeriver

**Purpose:** D6TermNodeDeriver component

**File:** `D6TermNodeDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### D7Comment

**Purpose:** D7Comment component

**File:** `D7Comment.php`

**Architectural Issues:** 1 violations detected

---

#### D7NodeDeriver

**Purpose:** D7NodeDeriver component

**File:** `D7NodeDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### D7NodeTranslation

**Purpose:** D7NodeTranslation component

**File:** `D7NodeTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### D7TaxonomyTermDeriver

**Purpose:** D7TaxonomyTermDeriver component

**File:** `D7TaxonomyTermDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### Data

**Purpose:** Data component

**File:** `Data.php`

**Architectural Issues:** 1 violations detected

---

#### DataEntityRow

**Purpose:** DataEntityRow component

**File:** `DataEntityRow.php`

**Architectural Issues:** 1 violations detected

---

#### DataFieldRow

**Purpose:** DataFieldRow component

**File:** `DataFieldRow.php`

**Architectural Issues:** 1 violations detected

---

#### DataNormalizer

**Purpose:** DataNormalizer component

**File:** `DataNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseFileUsageBackend

**Purpose:** DatabaseFileUsageBackend component

**File:** `DatabaseFileUsageBackend.php`

**Architectural Issues:** 1 violations detected

---

#### Date

**Purpose:** Date component

**File:** `Date.php`

**Architectural Issues:** 7 violations detected

---

#### DateField

**Purpose:** DateField component

**File:** `DateField.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormat

**Purpose:** Form handling for Dateat

**File:** `DateFormat.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatAccessControlHandler

**Purpose:** Handles requests for DateFormatAccessControl

**File:** `DateFormatAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatAddForm

**Purpose:** Form handling for DateatAdd

**File:** `DateFormatAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatDeleteForm

**Purpose:** Form handling for DateatDelete

**File:** `DateFormatDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatEditForm

**Purpose:** Form handling for DateatEdit

**File:** `DateFormatEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatFormBase

**Purpose:** Form handling for DateatBase

**File:** `DateFormatFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatListBuilder

**Purpose:** Form handling for DateatListBuilder

**File:** `DateFormatListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeCustomFormatter

**Purpose:** Form handling for DateRangeCustomatter

**File:** `DateRangeCustomFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeDatelistWidget

**Purpose:** DateRangeDatelistWidget component

**File:** `DateRangeDatelistWidget.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeDefaultFormatter

**Purpose:** Form handling for DateRangeDefaultatter

**File:** `DateRangeDefaultFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeDefaultWidget

**Purpose:** DateRangeDefaultWidget component

**File:** `DateRangeDefaultWidget.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeFieldItemList

**Purpose:** DateRangeFieldItemList component

**File:** `DateRangeFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeItem

**Purpose:** DateRangeItem component

**File:** `DateRangeItem.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangePlainFormatter

**Purpose:** Form handling for DateRangePlainatter

**File:** `DateRangePlainFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateRangeWidgetBase

**Purpose:** DateRangeWidgetBase component

**File:** `DateRangeWidgetBase.php`

**Architectural Issues:** 1 violations detected

---

#### DateSqlInterface

**Purpose:** DateSqlInterface component

**File:** `DateSqlInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeComputed

**Purpose:** DateTimeComputed component

**File:** `DateTimeComputed.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeCustomFormatter

**Purpose:** Form handling for DateTimeCustomatter

**File:** `DateTimeCustomFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeDatelistWidget

**Purpose:** DateTimeDatelistWidget component

**File:** `DateTimeDatelistWidget.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeDefaultFormatter

**Purpose:** Form handling for DateTimeDefaultatter

**File:** `DateTimeDefaultFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeDefaultWidget

**Purpose:** DateTimeDefaultWidget component

**File:** `DateTimeDefaultWidget.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeFieldItemList

**Purpose:** DateTimeFieldItemList component

**File:** `DateTimeFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeFormatConstraint

**Purpose:** Form handling for DateTimeatConstraint

**File:** `DateTimeFormatConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeFormatConstraintValidator

**Purpose:** Form handling for DateTimeatConstraintValidator

**File:** `DateTimeFormatConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeFormatterBase

**Purpose:** Form handling for DateTimeatterBase

**File:** `DateTimeFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeIso8601Normalizer

**Purpose:** DateTimeIso8601Normalizer component

**File:** `DateTimeIso8601Normalizer.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeItem

**Purpose:** DateTimeItem component

**File:** `DateTimeItem.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeItemInterface

**Purpose:** DateTimeItemInterface component

**File:** `DateTimeItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeNormalizer

**Purpose:** DateTimeNormalizer component

**File:** `DateTimeNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimePlainFormatter

**Purpose:** Form handling for DateTimePlainatter

**File:** `DateTimePlainFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeRangeConstantsInterface

**Purpose:** DateTimeRangeConstantsInterface component

**File:** `DateTimeRangeConstantsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeRangeDisplayOptions

**Purpose:** DateTimeRangeDisplayOptions component

**File:** `DateTimeRangeDisplayOptions.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeRangeTrait

**Purpose:** DateTimeRangeTrait component

**File:** `DateTimeRangeTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeTimeAgoFormatter

**Purpose:** Form handling for DateTimeTimeAgoatter

**File:** `DateTimeTimeAgoFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeViewsHelper

**Purpose:** DateTimeViewsHelper component

**File:** `DateTimeViewsHelper.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeWidgetBase

**Purpose:** DateTimeWidgetBase component

**File:** `DateTimeWidgetBase.php`

**Architectural Issues:** 1 violations detected

---

#### DatetimeHooks

**Purpose:** DatetimeHooks component

**File:** `DatetimeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DatetimeRangeHooks

**Purpose:** DatetimeRangeHooks component

**File:** `DatetimeRangeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DatetimeRangeViewsHooks

**Purpose:** DatetimeRangeViewsHooks component

**File:** `DatetimeRangeViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DatetimeViewsHooks

**Purpose:** DatetimeViewsHooks component

**File:** `DatetimeViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DayDate

**Purpose:** DayDate component

**File:** `DayDate.php`

**Architectural Issues:** 2 violations detected

---

#### DbLog

**Purpose:** DbLog component

**File:** `DbLog.php`

**Architectural Issues:** 1 violations detected

---

#### DbLogController

**Purpose:** Controls DbLog operations

**File:** `DbLogController.php`

**Architectural Issues:** 1 violations detected

---

#### DbLogResource

**Purpose:** DbLogResource component

**File:** `DbLogResource.php`

**Architectural Issues:** 1 violations detected

---

#### DbUpdateAccessCheck

**Purpose:** DbUpdateAccessCheck component

**File:** `DbUpdateAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### DbUpdateController

**Purpose:** Controls DbUpdate operations

**File:** `DbUpdateController.php`

**Architectural Issues:** 1 violations detected

---

#### DbUpdateNegotiator

**Purpose:** DbUpdateNegotiator component

**File:** `DbUpdateNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### DblogClearLogConfirmForm

**Purpose:** Form handling for DblogClearLogConfirm

**File:** `DblogClearLogConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### DblogFilterForm

**Purpose:** Form handling for DblogFilter

**File:** `DblogFilterForm.php`

**Architectural Issues:** 1 violations detected

---

#### DblogHooks

**Purpose:** DblogHooks component

**File:** `DblogHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DblogMessage

**Purpose:** DblogMessage component

**File:** `DblogMessage.php`

**Architectural Issues:** 1 violations detected

---

#### DblogOperations

**Purpose:** DblogOperations component

**File:** `DblogOperations.php`

**Architectural Issues:** 1 violations detected

---

#### DblogTypes

**Purpose:** DblogTypes component

**File:** `DblogTypes.php`

**Architectural Issues:** 1 violations detected

---

#### DblogViewsHooks

**Purpose:** DblogViewsHooks component

**File:** `DblogViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultContentSubscriber

**Purpose:** DefaultContentSubscriber component

**File:** `DefaultContentSubscriber.php`

**Architectural Issues:** 6 violations detected

---

#### DefaultDisplay

**Purpose:** DefaultDisplay component

**File:** `DefaultDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultDisplayExtender

**Purpose:** DefaultDisplayExtender component

**File:** `DefaultDisplayExtender.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultExceptionSubscriber

**Purpose:** DefaultExceptionSubscriber component

**File:** `DefaultExceptionSubscriber.php`

**Architectural Issues:** 2 violations detected

---

#### DefaultFileFormatter

**Purpose:** Form handling for DefaultFileatter

**File:** `DefaultFileFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultLangcode

**Purpose:** DefaultLangcode component

**File:** `DefaultLangcode.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultLanguageItem

**Purpose:** DefaultLanguageItem component

**File:** `DefaultLanguageItem.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultLanguageRenderer

**Purpose:** DefaultLanguageRenderer component

**File:** `DefaultLanguageRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultRequestPolicy

**Purpose:** DefaultRequestPolicy component

**File:** `DefaultRequestPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultStyle

**Purpose:** DefaultStyle component

**File:** `DefaultStyle.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultSummary

**Purpose:** DefaultSummary component

**File:** `DefaultSummary.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultValue

**Purpose:** DefaultValue component

**File:** `DefaultValue.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultWizardDeriver

**Purpose:** DefaultWizardDeriver component

**File:** `DefaultWizardDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultWorkspaceHandler

**Purpose:** Handles requests for DefaultWorkspace

**File:** `DefaultWorkspaceHandler.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultsEntityForm

**Purpose:** Form handling for DefaultsEntity

**File:** `DefaultsEntityForm.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultsSectionStorage

**Purpose:** DefaultsSectionStorage component

**File:** `DefaultsSectionStorage.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultsSectionStorageInterface

**Purpose:** DefaultsSectionStorageInterface component

**File:** `DefaultsSectionStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Delete

**Purpose:** Delete component

**File:** `Delete.php`

**Architectural Issues:** 3 violations detected

---

#### DeleteDefaultLanguageException

**Purpose:** DeleteDefaultLanguageException component

**File:** `DeleteDefaultLanguageException.php`

**Architectural Issues:** 1 violations detected

---

#### DeleteForm

**Purpose:** Form handling for Delete

**File:** `DeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### DeleteMultiple

**Purpose:** DeleteMultiple component

**File:** `DeleteMultiple.php`

**Architectural Issues:** 1 violations detected

---

#### DeletedWorkspaceConstraint

**Purpose:** DeletedWorkspaceConstraint component

**File:** `DeletedWorkspaceConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### DeletedWorkspaceConstraintValidator

**Purpose:** DeletedWorkspaceConstraintValidator component

**File:** `DeletedWorkspaceConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### DemoteNode

**Purpose:** DemoteNode component

**File:** `DemoteNode.php`

**Architectural Issues:** 1 violations detected

---

#### DenyAdminRoutes

**Purpose:** DenyAdminRoutes component

**File:** `DenyAdminRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### DependentWithRemovalPluginInterface

**Purpose:** DependentWithRemovalPluginInterface component

**File:** `DependentWithRemovalPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Depth

**Purpose:** Depth component

**File:** `Depth.php`

**Architectural Issues:** 1 violations detected

---

#### Desaturate

**Purpose:** Desaturate component

**File:** `Desaturate.php`

**Architectural Issues:** 1 violations detected

---

#### DesaturateImageEffect

**Purpose:** DesaturateImageEffect component

**File:** `DesaturateImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### DescriptionAwareFileFormatterBase

**Purpose:** Form handling for DescriptionAwareFileatterBase

**File:** `DescriptionAwareFileFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### DestinationBase

**Purpose:** DestinationBase component

**File:** `DestinationBase.php`

**Architectural Issues:** 1 violations detected

---

#### DevelopmentSettingsForm

**Purpose:** Form handling for DevelopmentSettings

**File:** `DevelopmentSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### DirectWritePreconditionBypass

**Purpose:** DirectWritePreconditionBypass component

**File:** `DirectWritePreconditionBypass.php`

**Architectural Issues:** 1 violations detected

---

#### DirectWriteSubscriber

**Purpose:** DirectWriteSubscriber component

**File:** `DirectWriteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### DisallowBasicAuthRequests

**Purpose:** DisallowBasicAuthRequests component

**File:** `DisallowBasicAuthRequests.php`

**Architectural Issues:** 1 violations detected

---

#### DiscardLayoutChangesForm

**Purpose:** Form handling for DiscardLayoutChanges

**File:** `DiscardLayoutChangesForm.php`

**Architectural Issues:** 1 violations detected

---

#### DiskSpaceValidator

**Purpose:** DiskSpaceValidator component

**File:** `DiskSpaceValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Display

**Purpose:** Display component

**File:** `Display.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayExtenderPluginBase

**Purpose:** DisplayExtenderPluginBase component

**File:** `DisplayExtenderPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayLink

**Purpose:** DisplayLink component

**File:** `DisplayLink.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayMenuInterface

**Purpose:** DisplayMenuInterface component

**File:** `DisplayMenuInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayModeLocalAction

**Purpose:** DisplayModeLocalAction component

**File:** `DisplayModeLocalAction.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayPluginBase

**Purpose:** DisplayPluginBase component

**File:** `DisplayPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayPluginCollection

**Purpose:** DisplayPluginCollection component

**File:** `DisplayPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayPluginInterface

**Purpose:** DisplayPluginInterface component

**File:** `DisplayPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayRouterInterface

**Purpose:** DisplayRouterInterface component

**File:** `DisplayRouterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Download

**Purpose:** Download component

**File:** `Download.php`

**Architectural Issues:** 1 violations detected

---

#### Dropbutton

**Purpose:** Dropbutton component

**File:** `Dropbutton.php`

**Architectural Issues:** 1 violations detected

---

#### DrupalAspectsOfCKEditor5Plugin

**Purpose:** DrupalAspectsOfCKEditor5Plugin component

**File:** `DrupalAspectsOfCKEditor5Plugin.php`

**Architectural Issues:** 2 violations detected

---

#### DrupalSqlBase

**Purpose:** DrupalSqlBase component

**File:** `DrupalSqlBase.php`

**Architectural Issues:** 1 violations detected

---

#### DummyQueryTrait

**Purpose:** DummyQueryTrait component

**File:** `DummyQueryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DuplicateInfoFileValidator

**Purpose:** DuplicateInfoFileValidator component

**File:** `DuplicateInfoFileValidator.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicLocalTasks

**Purpose:** DynamicLocalTasks component

**File:** `DynamicLocalTasks.php`

**Architectural Issues:** 2 violations detected

---

#### DynamicPageCacheHooks

**Purpose:** DynamicPageCacheHooks component

**File:** `DynamicPageCacheHooks.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicPageCacheSubscriber

**Purpose:** DynamicPageCacheSubscriber component

**File:** `DynamicPageCacheSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicPluginConfigWithCsrfTokenUrlTrait

**Purpose:** DynamicPluginConfigWithCsrfTokenUrlTrait component

**File:** `DynamicPluginConfigWithCsrfTokenUrlTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EarlyFormatSetter

**Purpose:** Form handling for EarlyatSetter

**File:** `EarlyFormatSetter.php`

**Architectural Issues:** 1 violations detected

---

#### EditDetails

**Purpose:** EditDetails component

**File:** `EditDetails.php`

**Architectural Issues:** 1 violations detected

---

#### Editor

**Purpose:** Editor component

**File:** `Editor.php`

**Architectural Issues:** 3 violations detected

---

#### EditorAccessControlHandler

**Purpose:** Handles requests for EditorAccessControl

**File:** `EditorAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### EditorBase

**Purpose:** EditorBase component

**File:** `EditorBase.php`

**Architectural Issues:** 1 violations detected

---

#### EditorConfigTranslationSubscriber

**Purpose:** EditorConfigTranslationSubscriber component

**File:** `EditorConfigTranslationSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EditorController

**Purpose:** Controls Editor operations

**File:** `EditorController.php`

**Architectural Issues:** 1 violations detected

---

#### EditorDialogSave

**Purpose:** EditorDialogSave component

**File:** `EditorDialogSave.php`

**Architectural Issues:** 1 violations detected

---

#### EditorFileReference

**Purpose:** EditorFileReference component

**File:** `EditorFileReference.php`

**Architectural Issues:** 1 violations detected

---

#### EditorHooks

**Purpose:** EditorHooks component

**File:** `EditorHooks.php`

**Architectural Issues:** 1 violations detected

---

#### EditorInterface

**Purpose:** EditorInterface component

**File:** `EditorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EditorManager

**Purpose:** Manages Editor operations

**File:** `EditorManager.php`

**Architectural Issues:** 1 violations detected

---

#### EditorPluginInterface

**Purpose:** EditorPluginInterface component

**File:** `EditorPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EditorXssFilterInterface

**Purpose:** EditorXssFilterInterface component

**File:** `EditorXssFilterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Element

**Purpose:** Element component

**File:** `Element.php`

**Architectural Issues:** 1 violations detected

---

#### ElementInterface

**Purpose:** ElementInterface component

**File:** `ElementInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Email

**Purpose:** Email component

**File:** `Email.php`

**Architectural Issues:** 1 violations detected

---

#### Embed

**Purpose:** Embed component

**File:** `Embed.php`

**Architectural Issues:** 1 violations detected

---

#### EmbeddedDataSource

**Purpose:** EmbeddedDataSource component

**File:** `EmbeddedDataSource.php`

**Architectural Issues:** 1 violations detected

---

#### EmptySource

**Purpose:** EmptySource component

**File:** `EmptySource.php`

**Architectural Issues:** 2 violations detected

---

#### EnabledConfigurablePluginsConstraint

**Purpose:** EnabledConfigurablePluginsConstraint component

**File:** `EnabledConfigurablePluginsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EnabledConfigurablePluginsConstraintValidator

**Purpose:** EnabledConfigurablePluginsConstraintValidator component

**File:** `EnabledConfigurablePluginsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EnabledExtensionsValidator

**Purpose:** EnabledExtensionsValidator component

**File:** `EnabledExtensionsValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Endpoint

**Purpose:** Endpoint component

**File:** `Endpoint.php`

**Architectural Issues:** 1 violations detected

---

#### Entity

**Purpose:** Entity component

**File:** `Entity.php`

**Architectural Issues:** 3 violations detected

---

#### EntityAccess

**Purpose:** EntityAccess component

**File:** `EntityAccess.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessChecker

**Purpose:** EntityAccessChecker component

**File:** `EntityAccessChecker.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessDeniedHttpException

**Purpose:** EntityAccessDeniedHttpException component

**File:** `EntityAccessDeniedHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessDeniedHttpExceptionNormalizer

**Purpose:** EntityAccessDeniedHttpExceptionNormalizer component

**File:** `EntityAccessDeniedHttpExceptionNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityArgument

**Purpose:** EntityArgument component

**File:** `EntityArgument.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAutocompleteController

**Purpose:** Controls EntityAutocomplete operations

**File:** `EntityAutocompleteController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBaseFieldOverride

**Purpose:** EntityBaseFieldOverride component

**File:** `EntityBaseFieldOverride.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBlock

**Purpose:** EntityBlock component

**File:** `EntityBlock.php`

**Architectural Issues:** 1 violations detected

---

#### EntityComment

**Purpose:** EntityComment component

**File:** `EntityComment.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCommentType

**Purpose:** EntityCommentType component

**File:** `EntityCommentType.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCondition

**Purpose:** EntityCondition component

**File:** `EntityCondition.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConditionGroup

**Purpose:** EntityConditionGroup component

**File:** `EntityConditionGroup.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConfigBase

**Purpose:** EntityConfigBase component

**File:** `EntityConfigBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityContentBase

**Purpose:** EntityContentBase component

**File:** `EntityContentBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityContentComplete

**Purpose:** EntityContentComplete component

**File:** `EntityContentComplete.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDateFormat

**Purpose:** Form handling for EntityDateat

**File:** `EntityDateFormat.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDenormalizerBase

**Purpose:** EntityDenormalizerBase component

**File:** `EntityDenormalizerBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeriver

**Purpose:** EntityDeriver component

**File:** `EntityDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayFormBase

**Purpose:** Form handling for EntityDisplayBase

**File:** `EntityDisplayFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeAddForm

**Purpose:** Form handling for EntityDisplayModeAdd

**File:** `EntityDisplayModeAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeController

**Purpose:** Controls EntityDisplayMode operations

**File:** `EntityDisplayModeController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeDeleteForm

**Purpose:** Form handling for EntityDisplayModeDelete

**File:** `EntityDisplayModeDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeEditForm

**Purpose:** Form handling for EntityDisplayModeEdit

**File:** `EntityDisplayModeEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeFormBase

**Purpose:** Form handling for EntityDisplayModeBase

**File:** `EntityDisplayModeFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeListBuilder

**Purpose:** EntityDisplayModeListBuilder component

**File:** `EntityDisplayModeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayRebuilder

**Purpose:** EntityDisplayRebuilder component

**File:** `EntityDisplayRebuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayWithLayoutInterface

**Purpose:** EntityDisplayWithLayoutInterface component

**File:** `EntityDisplayWithLayoutInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityExists

**Purpose:** EntityExists component

**File:** `EntityExists.php`

**Architectural Issues:** 1 violations detected

---

#### EntityField

**Purpose:** EntityField component

**File:** `EntityField.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldDefinitionTrait

**Purpose:** EntityFieldDefinitionTrait component

**File:** `EntityFieldDefinitionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldInstance

**Purpose:** EntityFieldInstance component

**File:** `EntityFieldInstance.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldRenderer

**Purpose:** EntityFieldRenderer component

**File:** `EntityFieldRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldStorageConfig

**Purpose:** EntityFieldStorageConfig component

**File:** `EntityFieldStorageConfig.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFile

**Purpose:** EntityFile component

**File:** `EntityFile.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormDisplayEditForm

**Purpose:** Form handling for EntityDisplayEdit

**File:** `EntityFormDisplayEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormModeAddForm

**Purpose:** Form handling for EntityModeAdd

**File:** `EntityFormModeAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormModeListBuilder

**Purpose:** Form handling for EntityModeListBuilder

**File:** `EntityFormModeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityImageStyle

**Purpose:** EntityImageStyle component

**File:** `EntityImageStyle.php`

**Architectural Issues:** 1 violations detected

---

#### EntityLabel

**Purpose:** EntityLabel component

**File:** `EntityLabel.php`

**Architectural Issues:** 1 violations detected

---

#### EntityLink

**Purpose:** EntityLink component

**File:** `EntityLink.php`

**Architectural Issues:** 2 violations detected

---

#### EntityLinkDelete

**Purpose:** EntityLinkDelete component

**File:** `EntityLinkDelete.php`

**Architectural Issues:** 1 violations detected

---

#### EntityLinkEdit

**Purpose:** EntityLinkEdit component

**File:** `EntityLinkEdit.php`

**Architectural Issues:** 1 violations detected

---

#### EntityModerationForm

**Purpose:** Form handling for EntityModeration

**File:** `EntityModerationForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityModerationRouteProvider

**Purpose:** EntityModerationRouteProvider component

**File:** `EntityModerationRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### EntityNodeType

**Purpose:** EntityNodeType component

**File:** `EntityNodeType.php`

**Architectural Issues:** 1 violations detected

---

#### EntityNormalizer

**Purpose:** EntityNormalizer component

**File:** `EntityNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityOperations

**Purpose:** EntityOperations component

**File:** `EntityOperations.php`

**Architectural Issues:** 3 violations detected

---

#### EntityOwnerInterface

**Purpose:** EntityOwnerInterface component

**File:** `EntityOwnerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityOwnerTrait

**Purpose:** EntityOwnerTrait component

**File:** `EntityOwnerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPermissionsForm

**Purpose:** Form handling for EntityPermissions

**File:** `EntityPermissionsForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPermissionsRouteProvider

**Purpose:** EntityPermissionsRouteProvider component

**File:** `EntityPermissionsRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPermissionsRouteProviderWithCheck

**Purpose:** EntityPermissionsRouteProviderWithCheck component

**File:** `EntityPermissionsRouteProviderWithCheck.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReference

**Purpose:** EntityReference component

**File:** `EntityReference.php`

**Architectural Issues:** 5 violations detected

---

#### EntityReferenceArgument

**Purpose:** EntityReferenceArgument component

**File:** `EntityReferenceArgument.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFieldItemNormalizer

**Purpose:** EntityReferenceFieldItemNormalizer component

**File:** `EntityReferenceFieldItemNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFieldItemNormalizerTrait

**Purpose:** EntityReferenceFieldItemNormalizerTrait component

**File:** `EntityReferenceFieldItemNormalizerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFieldNormalizer

**Purpose:** EntityReferenceFieldNormalizer component

**File:** `EntityReferenceFieldNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceSupportedNewEntitiesConstraint

**Purpose:** EntityReferenceSupportedNewEntitiesConstraint component

**File:** `EntityReferenceSupportedNewEntitiesConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceSupportedNewEntitiesConstraintValidator

**Purpose:** EntityReferenceSupportedNewEntitiesConstraintValidator component

**File:** `EntityReferenceSupportedNewEntitiesConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceTaxonomyTermRssFormatter

**Purpose:** Form handling for EntityReferenceTaxonomyTermRssatter

**File:** `EntityReferenceTaxonomyTermRssFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceTranslationDeriver

**Purpose:** EntityReferenceTranslationDeriver component

**File:** `EntityReferenceTranslationDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityResolverInterface

**Purpose:** EntityResolverInterface component

**File:** `EntityResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityResource

**Purpose:** EntityResource component

**File:** `EntityResource.php`

**Architectural Issues:** 2 violations detected

---

#### EntityResourceAccessTrait

**Purpose:** EntityResourceAccessTrait component

**File:** `EntityResourceAccessTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityResourcePostRouteSubscriber

**Purpose:** EntityResourcePostRouteSubscriber component

**File:** `EntityResourcePostRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EntityResourceValidationTrait

**Purpose:** EntityResourceValidationTrait component

**File:** `EntityResourceValidationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReverse

**Purpose:** EntityReverse component

**File:** `EntityReverse.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRevision

**Purpose:** EntityRevision component

**File:** `EntityRevision.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRouteHelper

**Purpose:** EntityRouteHelper component

**File:** `EntityRouteHelper.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRow

**Purpose:** EntityRow component

**File:** `EntityRow.php`

**Architectural Issues:** 1 violations detected

---

#### EntitySchemaSubscriber

**Purpose:** EntitySchemaSubscriber component

**File:** `EntitySchemaSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EntitySearchPage

**Purpose:** EntitySearchPage component

**File:** `EntitySearchPage.php`

**Architectural Issues:** 1 violations detected

---

#### EntityShortcutSet

**Purpose:** EntityShortcutSet component

**File:** `EntityShortcutSet.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTaxonomyVocabulary

**Purpose:** EntityTaxonomyVocabulary component

**File:** `EntityTaxonomyVocabulary.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTranslationRenderTrait

**Purpose:** EntityTranslationRenderTrait component

**File:** `EntityTranslationRenderTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTranslationRendererBase

**Purpose:** EntityTranslationRendererBase component

**File:** `EntityTranslationRendererBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTranslationSettings

**Purpose:** EntityTranslationSettings component

**File:** `EntityTranslationSettings.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeInfo

**Purpose:** EntityTypeInfo component

**File:** `EntityTypeInfo.php`

**Architectural Issues:** 2 violations detected

---

#### EntityUser

**Purpose:** EntityUser component

**File:** `EntityUser.php`

**Architectural Issues:** 1 violations detected

---

#### EntityUserRole

**Purpose:** EntityUserRole component

**File:** `EntityUserRole.php`

**Architectural Issues:** 1 violations detected

---

#### EntityUuidConverter

**Purpose:** EntityUuidConverter component

**File:** `EntityUuidConverter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityValidationException

**Purpose:** EntityValidationException component

**File:** `EntityValidationException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityValidationTrait

**Purpose:** EntityValidationTrait component

**File:** `EntityValidationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewDisplayEditForm

**Purpose:** Form handling for EntityViewDisplayEdit

**File:** `EntityViewDisplayEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewMode

**Purpose:** EntityViewMode component

**File:** `EntityViewMode.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewsData

**Purpose:** EntityViewsData component

**File:** `EntityViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewsDataInterface

**Purpose:** EntityViewsDataInterface component

**File:** `EntityViewsDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityWorkspaceConflictConstraint

**Purpose:** EntityWorkspaceConflictConstraint component

**File:** `EntityWorkspaceConflictConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityWorkspaceConflictConstraintValidator

**Purpose:** EntityWorkspaceConflictConstraintValidator component

**File:** `EntityWorkspaceConflictConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntryPoint

**Purpose:** EntryPoint component

**File:** `EntryPoint.php`

**Architectural Issues:** 1 violations detected

---

#### EnvironmentSupportValidator

**Purpose:** EnvironmentSupportValidator component

**File:** `EnvironmentSupportValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Equality

**Purpose:** Equality component

**File:** `Equality.php`

**Architectural Issues:** 1 violations detected

---

#### ErrorCollection

**Purpose:** ErrorCollection component

**File:** `ErrorCollection.php`

**Architectural Issues:** 1 violations detected

---

#### EventBase

**Purpose:** EventBase component

**File:** `EventBase.php`

**Architectural Issues:** 1 violations detected

---

#### EventWithPackageListTrait

**Purpose:** EventWithPackageListTrait component

**File:** `EventWithPackageListTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionHandler

**Purpose:** Handles requests for Exception

**File:** `ExceptionHandler.php`

**Architectural Issues:** 2 violations detected

---

#### ExecutableFinder

**Purpose:** ExecutableFinder component

**File:** `ExecutableFinder.php`

**Architectural Issues:** 1 violations detected

---

#### Explode

**Purpose:** Explode component

**File:** `Explode.php`

**Architectural Issues:** 1 violations detected

---

#### ExportForm

**Purpose:** Form handling for Export

**File:** `ExportForm.php`

**Architectural Issues:** 1 violations detected

---

#### ExposedFormCache

**Purpose:** Form handling for ExposedCache

**File:** `ExposedFormCache.php`

**Architectural Issues:** 1 violations detected

---

#### ExposedFormPluginBase

**Purpose:** Form handling for ExposedPluginBase

**File:** `ExposedFormPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ExposedFormPluginInterface

**Purpose:** Form handling for ExposedPluginInterface

**File:** `ExposedFormPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Extension

**Purpose:** Extension component

**File:** `Extension.php`

**Architectural Issues:** 1 violations detected

---

#### ExtraFieldBlock

**Purpose:** ExtraFieldBlock component

**File:** `ExtraFieldBlock.php`

**Architectural Issues:** 1 violations detected

---

#### ExtraFieldBlockCacheTagInvalidator

**Purpose:** ExtraFieldBlockCacheTagInvalidator component

**File:** `ExtraFieldBlockCacheTagInvalidator.php`

**Architectural Issues:** 1 violations detected

---

#### ExtraFieldBlockDeriver

**Purpose:** ExtraFieldBlockDeriver component

**File:** `ExtraFieldBlockDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### Extract

**Purpose:** Extract component

**File:** `Extract.php`

**Architectural Issues:** 1 violations detected

---

#### FailureMarker

**Purpose:** FailureMarker component

**File:** `FailureMarker.php`

**Architectural Issues:** 1 violations detected

---

#### FailureMarkerExistsException

**Purpose:** FailureMarkerExistsException component

**File:** `FailureMarkerExistsException.php`

**Architectural Issues:** 1 violations detected

---

#### Feed

**Purpose:** Feed component

**File:** `Feed.php`

**Architectural Issues:** 1 violations detected

---

#### Fid

**Purpose:** Fid component

**File:** `Fid.php`

**Architectural Issues:** 1 violations detected

---

#### Field

**Purpose:** Field component

**File:** `Field.php`

**Architectural Issues:** 2 violations detected

---

#### FieldAPIHandlerTrait

**Purpose:** Handles requests for FieldAPITrait

**File:** `FieldAPIHandlerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldBlock

**Purpose:** FieldBlock component

**File:** `FieldBlock.php`

**Architectural Issues:** 1 violations detected

---

#### FieldBlockDeriver

**Purpose:** FieldBlockDeriver component

**File:** `FieldBlockDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### FieldBundle

**Purpose:** FieldBundle component

**File:** `FieldBundle.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfig

**Purpose:** FieldConfig component

**File:** `FieldConfig.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigAccessControlHandler

**Purpose:** Handles requests for FieldConfigAccessControl

**File:** `FieldConfigAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigAddController

**Purpose:** Controls FieldConfigAdd operations

**File:** `FieldConfigAddController.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigDeleteForm

**Purpose:** Form handling for FieldConfigDelete

**File:** `FieldConfigDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigEditForm

**Purpose:** Form handling for FieldConfigEdit

**File:** `FieldConfigEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigInterface

**Purpose:** FieldConfigInterface component

**File:** `FieldConfigInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigListBuilder

**Purpose:** FieldConfigListBuilder component

**File:** `FieldConfigListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigListController

**Purpose:** Controls FieldConfigList operations

**File:** `FieldConfigListController.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigStorage

**Purpose:** FieldConfigStorage component

**File:** `FieldConfigStorage.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDiscovery

**Purpose:** FieldDiscovery component

**File:** `FieldDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDiscoveryInterface

**Purpose:** FieldDiscoveryInterface component

**File:** `FieldDiscoveryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldFile

**Purpose:** FieldFile component

**File:** `FieldFile.php`

**Architectural Issues:** 1 violations detected

---

#### FieldFormatterSettingsDefaults

**Purpose:** Form handling for FieldatterSettingsDefaults

**File:** `FieldFormatterSettingsDefaults.php`

**Architectural Issues:** 1 violations detected

---

#### FieldHandlerInterface

**Purpose:** Handles requests for FieldInterface

**File:** `FieldHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldHooks

**Purpose:** FieldHooks component

**File:** `FieldHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FieldInstance

**Purpose:** FieldInstance component

**File:** `FieldInstance.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInstanceDefaults

**Purpose:** FieldInstanceDefaults component

**File:** `FieldInstanceDefaults.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInstanceOptionTranslation

**Purpose:** FieldInstanceOptionTranslation component

**File:** `FieldInstanceOptionTranslation.php`

**Architectural Issues:** 3 violations detected

---

#### FieldInstancePerFormDisplay

**Purpose:** Form handling for FieldInstancePerDisplay

**File:** `FieldInstancePerFormDisplay.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInstancePerViewMode

**Purpose:** FieldInstancePerViewMode component

**File:** `FieldInstancePerViewMode.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInstanceSettings

**Purpose:** FieldInstanceSettings component

**File:** `FieldInstanceSettings.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInstanceWidgetSettings

**Purpose:** FieldInstanceWidgetSettings component

**File:** `FieldInstanceWidgetSettings.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemNormalizer

**Purpose:** FieldItemNormalizer component

**File:** `FieldItemNormalizer.php`

**Architectural Issues:** 2 violations detected

---

#### FieldLabelDescriptionTranslation

**Purpose:** FieldLabelDescriptionTranslation component

**File:** `FieldLabelDescriptionTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### FieldLabelOptionsTrait

**Purpose:** FieldLabelOptionsTrait component

**File:** `FieldLabelOptionsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLanguage

**Purpose:** FieldLanguage component

**File:** `FieldLanguage.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutBuilder

**Purpose:** FieldLayoutBuilder component

**File:** `FieldLayoutBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityDisplayFormTrait

**Purpose:** Form handling for FieldLayoutEntityDisplayTrait

**File:** `FieldLayoutEntityDisplayFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityDisplayTrait

**Purpose:** FieldLayoutEntityDisplayTrait component

**File:** `FieldLayoutEntityDisplayTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityFormDisplay

**Purpose:** Form handling for FieldLayoutEntityDisplay

**File:** `FieldLayoutEntityFormDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityFormDisplayEditForm

**Purpose:** Form handling for FieldLayoutEntityDisplayEdit

**File:** `FieldLayoutEntityFormDisplayEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityViewDisplay

**Purpose:** FieldLayoutEntityViewDisplay component

**File:** `FieldLayoutEntityViewDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutEntityViewDisplayEditForm

**Purpose:** Form handling for FieldLayoutEntityViewDisplayEdit

**File:** `FieldLayoutEntityViewDisplayEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLayoutHooks

**Purpose:** FieldLayoutHooks component

**File:** `FieldLayoutHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FieldLink

**Purpose:** FieldLink component

**File:** `FieldLink.php`

**Architectural Issues:** 1 violations detected

---

#### FieldMigration

**Purpose:** FieldMigration component

**File:** `FieldMigration.php`

**Architectural Issues:** 1 violations detected

---

#### FieldNormalizer

**Purpose:** FieldNormalizer component

**File:** `FieldNormalizer.php`

**Architectural Issues:** 2 violations detected

---

#### FieldOptionTranslation

**Purpose:** FieldOptionTranslation component

**File:** `FieldOptionTranslation.php`

**Architectural Issues:** 4 violations detected

---

#### FieldOrLanguageJoin

**Purpose:** FieldOrLanguageJoin component

**File:** `FieldOrLanguageJoin.php`

**Architectural Issues:** 1 violations detected

---

#### FieldPluginBase

**Purpose:** FieldPluginBase component

**File:** `FieldPluginBase.php`

**Architectural Issues:** 2 violations detected

---

#### FieldResolver

**Purpose:** FieldResolver component

**File:** `FieldResolver.php`

**Architectural Issues:** 1 violations detected

---

#### FieldReuseAccessCheck

**Purpose:** FieldReuseAccessCheck component

**File:** `FieldReuseAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### FieldSettings

**Purpose:** FieldSettings component

**File:** `FieldSettings.php`

**Architectural Issues:** 2 violations detected

---

#### FieldStorageAddController

**Purpose:** Controls FieldStorageAdd operations

**File:** `FieldStorageAddController.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageAddForm

**Purpose:** Form handling for FieldStorageAdd

**File:** `FieldStorageAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfig

**Purpose:** FieldStorageConfig component

**File:** `FieldStorageConfig.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigAccessControlHandler

**Purpose:** Handles requests for FieldStorageConfigAccessControl

**File:** `FieldStorageConfigAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigEditForm

**Purpose:** Form handling for FieldStorageConfigEdit

**File:** `FieldStorageConfigEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigInterface

**Purpose:** FieldStorageConfigInterface component

**File:** `FieldStorageConfigInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigListBuilder

**Purpose:** FieldStorageConfigListBuilder component

**File:** `FieldStorageConfigListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigStorage

**Purpose:** FieldStorageConfigStorage component

**File:** `FieldStorageConfigStorage.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageConfigUpdateForbiddenException

**Purpose:** FieldStorageConfigUpdateForbiddenException component

**File:** `FieldStorageConfigUpdateForbiddenException.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageCreationTrait

**Purpose:** FieldStorageCreationTrait component

**File:** `FieldStorageCreationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageReuseForm

**Purpose:** Form handling for FieldStorageReuse

**File:** `FieldStorageReuseForm.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTranslationSynchronizer

**Purpose:** FieldTranslationSynchronizer component

**File:** `FieldTranslationSynchronizer.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTranslationSynchronizerInterface

**Purpose:** FieldTranslationSynchronizerInterface component

**File:** `FieldTranslationSynchronizerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldType

**Purpose:** FieldType component

**File:** `FieldType.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypeDefaults

**Purpose:** FieldTypeDefaults component

**File:** `FieldTypeDefaults.php`

**Architectural Issues:** 2 violations detected

---

#### FieldUI

**Purpose:** FieldUI component

**File:** `FieldUI.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiHooks

**Purpose:** FieldUiHooks component

**File:** `FieldUiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiLocalAction

**Purpose:** FieldUiLocalAction component

**File:** `FieldUiLocalAction.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiLocalTask

**Purpose:** FieldUiLocalTask component

**File:** `FieldUiLocalTask.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiPermissions

**Purpose:** FieldUiPermissions component

**File:** `FieldUiPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiTable

**Purpose:** FieldUiTable component

**File:** `FieldUiTable.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUiThemeHooks

**Purpose:** FieldUiThemeHooks component

**File:** `FieldUiThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUninstallValidator

**Purpose:** FieldUninstallValidator component

**File:** `FieldUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FieldViewsDataProvider

**Purpose:** FieldViewsDataProvider component

**File:** `FieldViewsDataProvider.php`

**Architectural Issues:** 1 violations detected

---

#### FieldableEntity

**Purpose:** FieldableEntity component

**File:** `FieldableEntity.php`

**Architectural Issues:** 1 violations detected

---

#### FieldableEntityNormalizerTrait

**Purpose:** FieldableEntityNormalizerTrait component

**File:** `FieldableEntityNormalizerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Fields

**Purpose:** Fields component

**File:** `Fields.php`

**Architectural Issues:** 1 violations detected

---

#### File

**Purpose:** File component

**File:** `File.php`

**Architectural Issues:** 6 violations detected

---

#### FileAccessControlHandler

**Purpose:** Handles requests for FileAccessControl

**File:** `FileAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FileAccessFormatterControlHandlerInterface

**Purpose:** Handles requests for FileAccessFormatterControlInterface

**File:** `FileAccessFormatterControlHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileAudioFormatter

**Purpose:** Form handling for FileAudioatter

**File:** `FileAudioFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### FileCopy

**Purpose:** FileCopy component

**File:** `FileCopy.php`

**Architectural Issues:** 1 violations detected

---

#### FileDownloadController

**Purpose:** Controls FileDownload operations

**File:** `FileDownloadController.php`

**Architectural Issues:** 1 violations detected

---

#### FileDownloadHook

**Purpose:** FileDownloadHook component

**File:** `FileDownloadHook.php`

**Architectural Issues:** 1 violations detected

---

#### FileEncodingConstraint

**Purpose:** FileEncodingConstraint component

**File:** `FileEncodingConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileEncodingConstraintValidator

**Purpose:** FileEncodingConstraintValidator component

**File:** `FileEncodingConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileEventSubscriber

**Purpose:** FileEventSubscriber component

**File:** `FileEventSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### FileExtensionConstraint

**Purpose:** FileExtensionConstraint component

**File:** `FileExtensionConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileExtensionConstraintValidator

**Purpose:** FileExtensionConstraintValidator component

**File:** `FileExtensionConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileExtensionFormatter

**Purpose:** Form handling for FileExtensionatter

**File:** `FileExtensionFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### FileExtensionSecureConstraint

**Purpose:** FileExtensionSecureConstraint component

**File:** `FileExtensionSecureConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileExtensionSecureConstraintValidator

**Purpose:** FileExtensionSecureConstraintValidator component

**File:** `FileExtensionSecureConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileField

**Purpose:** FileField component

**File:** `FileField.php`

**Architectural Issues:** 2 violations detected

---

#### FileFieldItemList

**Purpose:** FileFieldItemList component

**File:** `FileFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### FileFormHooks

**Purpose:** Form handling for FileHooks

**File:** `FileFormHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FileFormatterBase

**Purpose:** Form handling for FileatterBase

**File:** `FileFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### FileHooks

**Purpose:** FileHooks component

**File:** `FileHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FileImageDimensionsConstraint

**Purpose:** FileImageDimensionsConstraint component

**File:** `FileImageDimensionsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileImageDimensionsConstraintValidator

**Purpose:** FileImageDimensionsConstraintValidator component

**File:** `FileImageDimensionsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileInterface

**Purpose:** FileInterface component

**File:** `FileInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileIsImageConstraint

**Purpose:** FileIsImageConstraint component

**File:** `FileIsImageConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileIsImageConstraintValidator

**Purpose:** FileIsImageConstraintValidator component

**File:** `FileIsImageConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileItem

**Purpose:** FileItem component

**File:** `FileItem.php`

**Architectural Issues:** 1 violations detected

---

#### FileMediaFormatterBase

**Purpose:** Form handling for FileMediaatterBase

**File:** `FileMediaFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### FileMediaFormatterInterface

**Purpose:** Form handling for FileMediaatterInterface

**File:** `FileMediaFormatterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileNameLengthConstraint

**Purpose:** FileNameLengthConstraint component

**File:** `FileNameLengthConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileNameLengthConstraintValidator

**Purpose:** FileNameLengthConstraintValidator component

**File:** `FileNameLengthConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileProcessBase

**Purpose:** FileProcessBase component

**File:** `FileProcessBase.php`

**Architectural Issues:** 1 violations detected

---

#### FileProcessOutputCallback

**Purpose:** FileProcessOutputCallback component

**File:** `FileProcessOutputCallback.php`

**Architectural Issues:** 1 violations detected

---

#### FileRepository

**Purpose:** FileRepository component

**File:** `FileRepository.php`

**Architectural Issues:** 1 violations detected

---

#### FileRepositoryInterface

**Purpose:** FileRepositoryInterface component

**File:** `FileRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileRequirements

**Purpose:** FileRequirements component

**File:** `FileRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### FileRouteProvider

**Purpose:** FileRouteProvider component

**File:** `FileRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### FileSelection

**Purpose:** FileSelection component

**File:** `FileSelection.php`

**Architectural Issues:** 1 violations detected

---

#### FileServiceProvider

**Purpose:** Service for FileProvider

**File:** `FileServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### FileSize

**Purpose:** FileSize component

**File:** `FileSize.php`

**Architectural Issues:** 2 violations detected

---

#### FileSizeLimitConstraint

**Purpose:** FileSizeLimitConstraint component

**File:** `FileSizeLimitConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileSizeLimitConstraintValidator

**Purpose:** FileSizeLimitConstraintValidator component

**File:** `FileSizeLimitConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileStorage

**Purpose:** FileStorage component

**File:** `FileStorage.php`

**Architectural Issues:** 1 violations detected

---

#### FileStorageInterface

**Purpose:** FileStorageInterface component

**File:** `FileStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileStorageSchema

**Purpose:** FileStorageSchema component

**File:** `FileStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### FileSystemForm

**Purpose:** Form handling for FileSystem

**File:** `FileSystemForm.php`

**Architectural Issues:** 1 violations detected

---

#### FileThemeHooks

**Purpose:** FileThemeHooks component

**File:** `FileThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FileUpload

**Purpose:** FileUpload component

**File:** `FileUpload.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadForm

**Purpose:** Form handling for FileUpload

**File:** `FileUploadForm.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadHandler

**Purpose:** Handles requests for FileUpload

**File:** `FileUploadHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadHandlerInterface

**Purpose:** Handles requests for FileUploadInterface

**File:** `FileUploadHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadLocationTrait

**Purpose:** FileUploadLocationTrait component

**File:** `FileUploadLocationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadResource

**Purpose:** FileUploadResource component

**File:** `FileUploadResource.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadResult

**Purpose:** FileUploadResult component

**File:** `FileUploadResult.php`

**Architectural Issues:** 1 violations detected

---

#### FileUri

**Purpose:** FileUri component

**File:** `FileUri.php`

**Architectural Issues:** 1 violations detected

---

#### FileUriFormatter

**Purpose:** Form handling for FileUriatter

**File:** `FileUriFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### FileUriItem

**Purpose:** FileUriItem component

**File:** `FileUriItem.php`

**Architectural Issues:** 1 violations detected

---

#### FileUriUnique

**Purpose:** FileUriUnique component

**File:** `FileUriUnique.php`

**Architectural Issues:** 1 violations detected

---

#### FileUsageBase

**Purpose:** FileUsageBase component

**File:** `FileUsageBase.php`

**Architectural Issues:** 1 violations detected

---

#### FileUsageInterface

**Purpose:** FileUsageInterface component

**File:** `FileUsageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidationConstraint

**Purpose:** FileValidationConstraint component

**File:** `FileValidationConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidationConstraintValidator

**Purpose:** FileValidationConstraintValidator component

**File:** `FileValidationConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidationEvent

**Purpose:** FileValidationEvent component

**File:** `FileValidationEvent.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidationException

**Purpose:** FileValidationException component

**File:** `FileValidationException.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidator

**Purpose:** FileValidator component

**File:** `FileValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidatorInterface

**Purpose:** FileValidatorInterface component

**File:** `FileValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileValidatorSettingsTrait

**Purpose:** FileValidatorSettingsTrait component

**File:** `FileValidatorSettingsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FileVideoFormatter

**Purpose:** Form handling for FileVideoatter

**File:** `FileVideoFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### FileViewsData

**Purpose:** FileViewsData component

**File:** `FileViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### FileViewsHooks

**Purpose:** FileViewsHooks component

**File:** `FileViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FileWidget

**Purpose:** FileWidget component

**File:** `FileWidget.php`

**Architectural Issues:** 1 violations detected

---

#### FileWidgetAjaxController

**Purpose:** Controls FileWidgetAjax operations

**File:** `FileWidgetAjaxController.php`

**Architectural Issues:** 1 violations detected

---

#### FilemimeFormatter

**Purpose:** Form handling for Filemimeatter

**File:** `FilemimeFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### Filter

**Purpose:** Filter component

**File:** `Filter.php`

**Architectural Issues:** 3 violations detected

---

#### FilterAlign

**Purpose:** FilterAlign component

**File:** `FilterAlign.php`

**Architectural Issues:** 1 violations detected

---

#### FilterAutoP

**Purpose:** FilterAutoP component

**File:** `FilterAutoP.php`

**Architectural Issues:** 1 violations detected

---

#### FilterBase

**Purpose:** FilterBase component

**File:** `FilterBase.php`

**Architectural Issues:** 1 violations detected

---

#### FilterCaption

**Purpose:** FilterCaption component

**File:** `FilterCaption.php`

**Architectural Issues:** 1 violations detected

---

#### FilterController

**Purpose:** Controls Filter operations

**File:** `FilterController.php`

**Architectural Issues:** 1 violations detected

---

#### FilterDisableForm

**Purpose:** Form handling for FilterDisable

**File:** `FilterDisableForm.php`

**Architectural Issues:** 1 violations detected

---

#### FilterEnableForm

**Purpose:** Form handling for FilterEnable

**File:** `FilterEnableForm.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormat

**Purpose:** Form handling for Filterat

**File:** `FilterFormat.php`

**Architectural Issues:** 4 violations detected

---

#### FilterFormatAccessControlHandler

**Purpose:** Handles requests for FilterFormatAccessControl

**File:** `FilterFormatAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatAddForm

**Purpose:** Form handling for FilteratAdd

**File:** `FilterFormatAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatEditForm

**Purpose:** Form handling for FilteratEdit

**File:** `FilterFormatEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatFormBase

**Purpose:** Form handling for FilteratBase

**File:** `FilterFormatFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatInterface

**Purpose:** Form handling for FilteratInterface

**File:** `FilterFormatInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatListBuilder

**Purpose:** Form handling for FilteratListBuilder

**File:** `FilterFormatListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFormatPermission

**Purpose:** Form handling for FilteratPermission

**File:** `FilterFormatPermission.php`

**Architectural Issues:** 1 violations detected

---

#### FilterHooks

**Purpose:** FilterHooks component

**File:** `FilterHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FilterHtml

**Purpose:** FilterHtml component

**File:** `FilterHtml.php`

**Architectural Issues:** 1 violations detected

---

#### FilterHtmlCorrector

**Purpose:** FilterHtmlCorrector component

**File:** `FilterHtmlCorrector.php`

**Architectural Issues:** 1 violations detected

---

#### FilterHtmlEscape

**Purpose:** FilterHtmlEscape component

**File:** `FilterHtmlEscape.php`

**Architectural Issues:** 1 violations detected

---

#### FilterHtmlImageSecure

**Purpose:** FilterHtmlImageSecure component

**File:** `FilterHtmlImageSecure.php`

**Architectural Issues:** 1 violations detected

---

#### FilterID

**Purpose:** FilterID component

**File:** `FilterID.php`

**Architectural Issues:** 1 violations detected

---

#### FilterImageLazyLoad

**Purpose:** FilterImageLazyLoad component

**File:** `FilterImageLazyLoad.php`

**Architectural Issues:** 1 violations detected

---

#### FilterInterface

**Purpose:** FilterInterface component

**File:** `FilterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FilterNull

**Purpose:** FilterNull component

**File:** `FilterNull.php`

**Architectural Issues:** 1 violations detected

---

#### FilterOperatorsInterface

**Purpose:** FilterOperatorsInterface component

**File:** `FilterOperatorsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FilterPermissions

**Purpose:** FilterPermissions component

**File:** `FilterPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### FilterPluginBase

**Purpose:** FilterPluginBase component

**File:** `FilterPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### FilterPluginCollection

**Purpose:** FilterPluginCollection component

**File:** `FilterPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### FilterPluginManager

**Purpose:** Manages FilterPlugin operations

**File:** `FilterPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### FilterProcessResult

**Purpose:** FilterProcessResult component

**File:** `FilterProcessResult.php`

**Architectural Issues:** 1 violations detected

---

#### FilterSettings

**Purpose:** FilterSettings component

**File:** `FilterSettings.php`

**Architectural Issues:** 1 violations detected

---

#### FilterThemeHooks

**Purpose:** FilterThemeHooks component

**File:** `FilterThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### FilterUninstallValidator

**Purpose:** FilterUninstallValidator component

**File:** `FilterUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FilterUrl

**Purpose:** FilterUrl component

**File:** `FilterUrl.php`

**Architectural Issues:** 1 violations detected

---

#### FilteredMarkup

**Purpose:** FilteredMarkup component

**File:** `FilteredMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### Fixed

**Purpose:** Fixed component

**File:** `Fixed.php`

**Architectural Issues:** 1 violations detected

---

#### Flatten

**Purpose:** Flatten component

**File:** `Flatten.php`

**Architectural Issues:** 1 violations detected

---

#### FormElementBase

**Purpose:** Form handling for ElementBase

**File:** `FormElementBase.php`

**Architectural Issues:** 1 violations detected

---

#### FormErrorHandler

**Purpose:** Handles requests for FormError

**File:** `FormErrorHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FormModeAccessCheck

**Purpose:** Form handling for ModeAccessCheck

**File:** `FormModeAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### FormOperations

**Purpose:** Form handling for Operations

**File:** `FormOperations.php`

**Architectural Issues:** 1 violations detected

---

#### FormUploadedFile

**Purpose:** Form handling for UploadedFile

**File:** `FormUploadedFile.php`

**Architectural Issues:** 1 violations detected

---

#### FormatDate

**Purpose:** Form handling for atDate

**File:** `FormatDate.php`

**Architectural Issues:** 1 violations detected

---

#### Formula

**Purpose:** Form handling for ula

**File:** `Formula.php`

**Architectural Issues:** 1 violations detected

---

#### Full

**Purpose:** Full component

**File:** `Full.php`

**Architectural Issues:** 1 violations detected

---

#### FullDate

**Purpose:** FullDate component

**File:** `FullDate.php`

**Architectural Issues:** 2 violations detected

---

#### FundamentalCompatibilityConstraint

**Purpose:** FundamentalCompatibilityConstraint component

**File:** `FundamentalCompatibilityConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FundamentalCompatibilityConstraintValidator

**Purpose:** FundamentalCompatibilityConstraintValidator component

**File:** `FundamentalCompatibilityConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### GDImageToolkitOperationBase

**Purpose:** GDImageToolkitOperationBase component

**File:** `GDImageToolkitOperationBase.php`

**Architectural Issues:** 1 violations detected

---

#### GDToolkit

**Purpose:** GDToolkit component

**File:** `GDToolkit.php`

**Architectural Issues:** 1 violations detected

---

#### GenericFileFormatter

**Purpose:** Form handling for GenericFileatter

**File:** `GenericFileFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### Get

**Purpose:** Get component

**File:** `Get.php`

**Architectural Issues:** 1 violations detected

---

#### Gettext

**Purpose:** Gettext component

**File:** `Gettext.php`

**Architectural Issues:** 1 violations detected

---

#### GitExcluder

**Purpose:** GitExcluder component

**File:** `GitExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### GlobalAttribute

**Purpose:** GlobalAttribute component

**File:** `GlobalAttribute.php`

**Architectural Issues:** 1 violations detected

---

#### Grid

**Purpose:** Grid component

**File:** `Grid.php`

**Architectural Issues:** 1 violations detected

---

#### GridResponsive

**Purpose:** GridResponsive component

**File:** `GridResponsive.php`

**Architectural Issues:** 1 violations detected

---

#### GroupByNumeric

**Purpose:** GroupByNumeric component

**File:** `GroupByNumeric.php`

**Architectural Issues:** 3 violations detected

---

#### GroupwiseMax

**Purpose:** GroupwiseMax component

**File:** `GroupwiseMax.php`

**Architectural Issues:** 1 violations detected

---

#### HTMLRestrictions

**Purpose:** HTMLRestrictions component

**File:** `HTMLRestrictions.php`

**Architectural Issues:** 1 violations detected

---

#### HTTPStatusCode

**Purpose:** HTTPStatusCode component

**File:** `HTTPStatusCode.php`

**Architectural Issues:** 1 violations detected

---

#### HandlerBase

**Purpose:** Handles requests for Base

**File:** `HandlerBase.php`

**Architectural Issues:** 1 violations detected

---

#### Heading

**Purpose:** Heading component

**File:** `Heading.php`

**Architectural Issues:** 1 violations detected

---

#### HelpBlock

**Purpose:** HelpBlock component

**File:** `HelpBlock.php`

**Architectural Issues:** 1 violations detected

---

#### HelpBreadcrumbBuilder

**Purpose:** HelpBreadcrumbBuilder component

**File:** `HelpBreadcrumbBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### HelpController

**Purpose:** Controls Help operations

**File:** `HelpController.php`

**Architectural Issues:** 1 violations detected

---

#### HelpHooks

**Purpose:** HelpHooks component

**File:** `HelpHooks.php`

**Architectural Issues:** 1 violations detected

---

#### HelpSearch

**Purpose:** HelpSearch component

**File:** `HelpSearch.php`

**Architectural Issues:** 1 violations detected

---

#### HelpSection

**Purpose:** HelpSection component

**File:** `HelpSection.php`

**Architectural Issues:** 2 violations detected

---

#### HelpSectionManager

**Purpose:** Manages HelpSection operations

**File:** `HelpSectionManager.php`

**Architectural Issues:** 1 violations detected

---

#### HelpSectionPluginBase

**Purpose:** HelpSectionPluginBase component

**File:** `HelpSectionPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### HelpSectionPluginInterface

**Purpose:** HelpSectionPluginInterface component

**File:** `HelpSectionPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HelpThemeHooks

**Purpose:** HelpThemeHooks component

**File:** `HelpThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicDiscovery

**Purpose:** HelpTopicDiscovery component

**File:** `HelpTopicDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicPluginBase

**Purpose:** HelpTopicPluginBase component

**File:** `HelpTopicPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicPluginController

**Purpose:** Controls HelpTopicPlugin operations

**File:** `HelpTopicPluginController.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicPluginInterface

**Purpose:** HelpTopicPluginInterface component

**File:** `HelpTopicPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicPluginManager

**Purpose:** Manages HelpTopicPlugin operations

**File:** `HelpTopicPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicPluginManagerInterface

**Purpose:** Manages HelpTopicPluginInterface operations

**File:** `HelpTopicPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicSection

**Purpose:** HelpTopicSection component

**File:** `HelpTopicSection.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicTwig

**Purpose:** HelpTopicTwig component

**File:** `HelpTopicTwig.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTopicTwigLoader

**Purpose:** HelpTopicTwigLoader component

**File:** `HelpTopicTwigLoader.php`

**Architectural Issues:** 1 violations detected

---

#### HelpTwigExtension

**Purpose:** HelpTwigExtension component

**File:** `HelpTwigExtension.php`

**Architectural Issues:** 1 violations detected

---

#### HighestIdInterface

**Purpose:** HighestIdInterface component

**File:** `HighestIdInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HighlightCommand

**Purpose:** HighlightCommand component

**File:** `HighlightCommand.php`

**Architectural Issues:** 1 violations detected

---

#### HistoryCommentLinkBuilder

**Purpose:** HistoryCommentLinkBuilder component

**File:** `HistoryCommentLinkBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### HistoryController

**Purpose:** Controls History operations

**File:** `HistoryController.php`

**Architectural Issues:** 1 violations detected

---

#### HistoryHooks

**Purpose:** HistoryHooks component

**File:** `HistoryHooks.php`

**Architectural Issues:** 1 violations detected

---

#### HistoryRenderCallback

**Purpose:** HistoryRenderCallback component

**File:** `HistoryRenderCallback.php`

**Architectural Issues:** 1 violations detected

---

#### HistoryUserTimestamp

**Purpose:** HistoryUserTimestamp component

**File:** `HistoryUserTimestamp.php`

**Architectural Issues:** 2 violations detected

---

#### HistoryViewsHooks

**Purpose:** HistoryViewsHooks component

**File:** `HistoryViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### HookHelpSection

**Purpose:** HookHelpSection component

**File:** `HookHelpSection.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlList

**Purpose:** HtmlList component

**File:** `HtmlList.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlResponseBigPipeSubscriber

**Purpose:** HtmlResponseBigPipeSubscriber component

**File:** `HtmlResponseBigPipeSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### Http4xxController

**Purpose:** Controls Http4xx operations

**File:** `Http4xxController.php`

**Architectural Issues:** 1 violations detected

---

#### HttpExceptionNormalizer

**Purpose:** HttpExceptionNormalizer component

**File:** `HttpExceptionNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### HttpExceptionNormalizerValue

**Purpose:** HttpExceptionNormalizerValue component

**File:** `HttpExceptionNormalizerValue.php`

**Architectural Issues:** 1 violations detected

---

#### I18nQueryTrait

**Purpose:** I18nQueryTrait component

**File:** `I18nQueryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### IFrameMarkup

**Purpose:** IFrameMarkup component

**File:** `IFrameMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### IFrameUrlHelper

**Purpose:** IFrameUrlHelper component

**File:** `IFrameUrlHelper.php`

**Architectural Issues:** 1 violations detected

---

#### IconMimeTypes

**Purpose:** IconMimeTypes component

**File:** `IconMimeTypes.php`

**Architectural Issues:** 1 violations detected

---

#### IdAuditor

**Purpose:** IdAuditor component

**File:** `IdAuditor.php`

**Architectural Issues:** 1 violations detected

---

#### IdConflictForm

**Purpose:** Form handling for IdConflict

**File:** `IdConflictForm.php`

**Architectural Issues:** 1 violations detected

---

#### IgnoredWorkspaceHandler

**Purpose:** Handles requests for IgnoredWorkspace

**File:** `IgnoredWorkspaceHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Image

**Purpose:** Image component

**File:** `Image.php`

**Architectural Issues:** 2 violations detected

---

#### ImageCacheActions

**Purpose:** ImageCacheActions component

**File:** `ImageCacheActions.php`

**Architectural Issues:** 1 violations detected

---

#### ImageCachePreset

**Purpose:** ImageCachePreset component

**File:** `ImageCachePreset.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffect

**Purpose:** ImageEffect component

**File:** `ImageEffect.php`

**Architectural Issues:** 2 violations detected

---

#### ImageEffectAddForm

**Purpose:** Form handling for ImageEffectAdd

**File:** `ImageEffectAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectBase

**Purpose:** ImageEffectBase component

**File:** `ImageEffectBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectDeleteForm

**Purpose:** Form handling for ImageEffectDelete

**File:** `ImageEffectDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectEditForm

**Purpose:** Form handling for ImageEffectEdit

**File:** `ImageEffectEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectFormBase

**Purpose:** Form handling for ImageEffectBase

**File:** `ImageEffectFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectInterface

**Purpose:** ImageEffectInterface component

**File:** `ImageEffectInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectManager

**Purpose:** Manages ImageEffect operations

**File:** `ImageEffectManager.php`

**Architectural Issues:** 1 violations detected

---

#### ImageEffectPluginCollection

**Purpose:** ImageEffectPluginCollection component

**File:** `ImageEffectPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### ImageField

**Purpose:** ImageField component

**File:** `ImageField.php`

**Architectural Issues:** 2 violations detected

---

#### ImageFormatter

**Purpose:** Form handling for Imageatter

**File:** `ImageFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### ImageFormatterBase

**Purpose:** Form handling for ImageatterBase

**File:** `ImageFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageHooks

**Purpose:** ImageHooks component

**File:** `ImageHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ImageItem

**Purpose:** ImageItem component

**File:** `ImageItem.php`

**Architectural Issues:** 1 violations detected

---

#### ImageRequirements

**Purpose:** ImageRequirements component

**File:** `ImageRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### ImageResize

**Purpose:** ImageResize component

**File:** `ImageResize.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyle

**Purpose:** ImageStyle component

**File:** `ImageStyle.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleAddForm

**Purpose:** Form handling for ImageStyleAdd

**File:** `ImageStyleAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleDeleteForm

**Purpose:** Form handling for ImageStyleDelete

**File:** `ImageStyleDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleDownloadController

**Purpose:** Controls ImageStyleDownload operations

**File:** `ImageStyleDownloadController.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleEditForm

**Purpose:** Form handling for ImageStyleEdit

**File:** `ImageStyleEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleFlushForm

**Purpose:** Form handling for ImageStyleFlush

**File:** `ImageStyleFlushForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleFormBase

**Purpose:** Form handling for ImageStyleBase

**File:** `ImageStyleFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleInterface

**Purpose:** ImageStyleInterface component

**File:** `ImageStyleInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleListBuilder

**Purpose:** ImageStyleListBuilder component

**File:** `ImageStyleListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleMappings

**Purpose:** ImageStyleMappings component

**File:** `ImageStyleMappings.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleRoutes

**Purpose:** ImageStyleRoutes component

**File:** `ImageStyleRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleStorage

**Purpose:** ImageStyleStorage component

**File:** `ImageStyleStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyleStorageInterface

**Purpose:** ImageStyleStorageInterface component

**File:** `ImageStyleStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageStyles

**Purpose:** ImageStyles component

**File:** `ImageStyles.php`

**Architectural Issues:** 1 violations detected

---

#### ImageThemeHooks

**Purpose:** ImageThemeHooks component

**File:** `ImageThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitForm

**Purpose:** Form handling for ImageToolkit

**File:** `ImageToolkitForm.php`

**Architectural Issues:** 1 violations detected

---

#### ImageUrlFormatter

**Purpose:** Form handling for ImageUrlatter

**File:** `ImageUrlFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### ImageViewsHooks

**Purpose:** ImageViewsHooks component

**File:** `ImageViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ImageWidget

**Purpose:** ImageWidget component

**File:** `ImageWidget.php`

**Architectural Issues:** 1 violations detected

---

#### ImmutablePathList

**Purpose:** ImmutablePathList component

**File:** `ImmutablePathList.php`

**Architectural Issues:** 1 violations detected

---

#### ImportAwareInterface

**Purpose:** ImportAwareInterface component

**File:** `ImportAwareInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImportForm

**Purpose:** Form handling for Import

**File:** `ImportForm.php`

**Architectural Issues:** 1 violations detected

---

#### InOperator

**Purpose:** InOperator component

**File:** `InOperator.php`

**Architectural Issues:** 1 violations detected

---

#### IncludeResolver

**Purpose:** IncludeResolver component

**File:** `IncludeResolver.php`

**Architectural Issues:** 1 violations detected

---

#### IncludedData

**Purpose:** IncludedData component

**File:** `IncludedData.php`

**Architectural Issues:** 1 violations detected

---

#### IncrementalForm

**Purpose:** Form handling for Incremental

**File:** `IncrementalForm.php`

**Architectural Issues:** 1 violations detected

---

#### IndexTid

**Purpose:** IndexTid component

**File:** `IndexTid.php`

**Architectural Issues:** 1 violations detected

---

#### IndexTidDepth

**Purpose:** IndexTidDepth component

**File:** `IndexTidDepth.php`

**Architectural Issues:** 1 violations detected

---

#### IndexTidDepthModifier

**Purpose:** IndexTidDepthModifier component

**File:** `IndexTidDepthModifier.php`

**Architectural Issues:** 1 violations detected

---

#### InlineBlock

**Purpose:** InlineBlock component

**File:** `InlineBlock.php`

**Architectural Issues:** 1 violations detected

---

#### InlineBlockDeriver

**Purpose:** InlineBlockDeriver component

**File:** `InlineBlockDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### InlineBlockEntityOperations

**Purpose:** InlineBlockEntityOperations component

**File:** `InlineBlockEntityOperations.php`

**Architectural Issues:** 1 violations detected

---

#### InlineBlockUsage

**Purpose:** InlineBlockUsage component

**File:** `InlineBlockUsage.php`

**Architectural Issues:** 1 violations detected

---

#### InlineBlockUsageInterface

**Purpose:** InlineBlockUsageInterface component

**File:** `InlineBlockUsageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### InlineFormErrorsHooks

**Purpose:** Form handling for InlineErrorsHooks

**File:** `InlineFormErrorsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### InlineFormErrorsServiceProvider

**Purpose:** Form handling for InlineErrorsServiceProvider

**File:** `InlineFormErrorsServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### InlineFormErrorsThemeHooks

**Purpose:** Form handling for InlineErrorsThemeHooks

**File:** `InlineFormErrorsThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### InputRequired

**Purpose:** InputRequired component

**File:** `InputRequired.php`

**Architectural Issues:** 1 violations detected

---

#### InputStreamFileWriter

**Purpose:** InputStreamFileWriter component

**File:** `InputStreamFileWriter.php`

**Architectural Issues:** 1 violations detected

---

#### InputStreamFileWriterInterface

**Purpose:** InputStreamFileWriterInterface component

**File:** `InputStreamFileWriterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### InputStreamUploadedFile

**Purpose:** InputStreamUploadedFile component

**File:** `InputStreamUploadedFile.php`

**Architectural Issues:** 1 violations detected

---

#### Insert

**Purpose:** Insert component

**File:** `Insert.php`

**Architectural Issues:** 3 violations detected

---

#### InstalledPackage

**Purpose:** InstalledPackage component

**File:** `InstalledPackage.php`

**Architectural Issues:** 1 violations detected

---

#### InstalledPackagesList

**Purpose:** InstalledPackagesList component

**File:** `InstalledPackagesList.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidCharsetException

**Purpose:** InvalidCharsetException component

**File:** `InvalidCharsetException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidVersionIdentifierException

**Purpose:** InvalidVersionIdentifierException component

**File:** `InvalidVersionIdentifierException.php`

**Architectural Issues:** 1 violations detected

---

#### JoinPluginBase

**Purpose:** JoinPluginBase component

**File:** `JoinPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### JoinPluginInterface

**Purpose:** JoinPluginInterface component

**File:** `JoinPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### JsAssetController

**Purpose:** Controls JsAsset operations

**File:** `JsAssetController.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiDocumentTopLevel

**Purpose:** JsonApiDocumentTopLevel component

**File:** `JsonApiDocumentTopLevel.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiDocumentTopLevelNormalizer

**Purpose:** JsonApiDocumentTopLevelNormalizer component

**File:** `JsonApiDocumentTopLevelNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiFilter

**Purpose:** JsonApiFilter component

**File:** `JsonApiFilter.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiRequestValidator

**Purpose:** JsonApiRequestValidator component

**File:** `JsonApiRequestValidator.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiSettingsForm

**Purpose:** Form handling for JsonApiSettings

**File:** `JsonApiSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### JsonApiSpec

**Purpose:** JsonApiSpec component

**File:** `JsonApiSpec.php`

**Architectural Issues:** 1 violations detected

---

#### JsonEncoder

**Purpose:** JsonEncoder component

**File:** `JsonEncoder.php`

**Architectural Issues:** 2 violations detected

---

#### JsonSchemaProviderSerializerInterface

**Purpose:** JsonSchemaProviderSerializerInterface component

**File:** `JsonSchemaProviderSerializerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### JsonSchemaProviderSerializerTrait

**Purpose:** JsonSchemaProviderSerializerTrait component

**File:** `JsonSchemaProviderSerializerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### JsonSchemaReflectionTrait

**Purpose:** JsonSchemaReflectionTrait component

**File:** `JsonSchemaReflectionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### JsonapiHooks

**Purpose:** JsonapiHooks component

**File:** `JsonapiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### JsonapiMaintenanceModeSubscriber

**Purpose:** JsonapiMaintenanceModeSubscriber component

**File:** `JsonapiMaintenanceModeSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### JsonapiRequirements

**Purpose:** JsonapiRequirements component

**File:** `JsonapiRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### JsonapiServiceProvider

**Purpose:** Service for JsonapiProvider

**File:** `JsonapiServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### LabelOnlyResourceObject

**Purpose:** LabelOnlyResourceObject component

**File:** `LabelOnlyResourceObject.php`

**Architectural Issues:** 1 violations detected

---

#### Language

**Purpose:** Language component

**File:** `Language.php`

**Architectural Issues:** 3 violations detected

---

#### LanguageAccessControlHandler

**Purpose:** Handles requests for LanguageAccessControl

**File:** `LanguageAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageAddForm

**Purpose:** Form handling for LanguageAdd

**File:** `LanguageAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageArgument

**Purpose:** LanguageArgument component

**File:** `LanguageArgument.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageBlock

**Purpose:** LanguageBlock component

**File:** `LanguageBlock.php`

**Architectural Issues:** 2 violations detected

---

#### LanguageConfigCollectionNameTrait

**Purpose:** LanguageConfigCollectionNameTrait component

**File:** `LanguageConfigCollectionNameTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfigFactoryOverride

**Purpose:** LanguageConfigFactoryOverride component

**File:** `LanguageConfigFactoryOverride.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfigFactoryOverrideInterface

**Purpose:** LanguageConfigFactoryOverrideInterface component

**File:** `LanguageConfigFactoryOverrideInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfigOverride

**Purpose:** LanguageConfigOverride component

**File:** `LanguageConfigOverride.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfigOverrideCrudEvent

**Purpose:** LanguageConfigOverrideCrudEvent component

**File:** `LanguageConfigOverrideCrudEvent.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfigOverrideEvents

**Purpose:** LanguageConfigOverrideEvents component

**File:** `LanguageConfigOverrideEvents.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageConfiguration

**Purpose:** LanguageConfiguration component

**File:** `LanguageConfiguration.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageContentSettings

**Purpose:** LanguageContentSettings component

**File:** `LanguageContentSettings.php`

**Architectural Issues:** 2 violations detected

---

#### LanguageContentSettingsTaxonomyVocabulary

**Purpose:** LanguageContentSettingsTaxonomyVocabulary component

**File:** `LanguageContentSettingsTaxonomyVocabulary.php`

**Architectural Issues:** 2 violations detected

---

#### LanguageConverter

**Purpose:** LanguageConverter component

**File:** `LanguageConverter.php`

**Architectural Issues:** 2 violations detected

---

#### LanguageDeleteForm

**Purpose:** Form handling for LanguageDelete

**File:** `LanguageDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageDomains

**Purpose:** LanguageDomains component

**File:** `LanguageDomains.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageEditForm

**Purpose:** Form handling for LanguageEdit

**File:** `LanguageEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageException

**Purpose:** LanguageException component

**File:** `LanguageException.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageField

**Purpose:** LanguageField component

**File:** `LanguageField.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageFilter

**Purpose:** LanguageFilter component

**File:** `LanguageFilter.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageFormBase

**Purpose:** Form handling for LanguageBase

**File:** `LanguageFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageHooks

**Purpose:** LanguageHooks component

**File:** `LanguageHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageListBuilder

**Purpose:** LanguageListBuilder component

**File:** `LanguageListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiation

**Purpose:** LanguageNegotiation component

**File:** `LanguageNegotiation.php`

**Architectural Issues:** 3 violations detected

---

#### LanguageNegotiationBrowser

**Purpose:** LanguageNegotiationBrowser component

**File:** `LanguageNegotiationBrowser.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationContentEntity

**Purpose:** LanguageNegotiationContentEntity component

**File:** `LanguageNegotiationContentEntity.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationMethodBase

**Purpose:** LanguageNegotiationMethodBase component

**File:** `LanguageNegotiationMethodBase.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationMethodInterface

**Purpose:** LanguageNegotiationMethodInterface component

**File:** `LanguageNegotiationMethodInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationMethodManager

**Purpose:** Manages LanguageNegotiationMethod operations

**File:** `LanguageNegotiationMethodManager.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationSelected

**Purpose:** LanguageNegotiationSelected component

**File:** `LanguageNegotiationSelected.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationSession

**Purpose:** LanguageNegotiationSession component

**File:** `LanguageNegotiationSession.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationUI

**Purpose:** LanguageNegotiationUI component

**File:** `LanguageNegotiationUI.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationUrl

**Purpose:** LanguageNegotiationUrl component

**File:** `LanguageNegotiationUrl.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationUrlFallback

**Purpose:** LanguageNegotiationUrlFallback component

**File:** `LanguageNegotiationUrlFallback.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationUser

**Purpose:** LanguageNegotiationUser component

**File:** `LanguageNegotiationUser.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiationUserAdmin

**Purpose:** LanguageNegotiationUserAdmin component

**File:** `LanguageNegotiationUserAdmin.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiator

**Purpose:** LanguageNegotiator component

**File:** `LanguageNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageNegotiatorInterface

**Purpose:** LanguageNegotiatorInterface component

**File:** `LanguageNegotiatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageRequestSubscriber

**Purpose:** LanguageRequestSubscriber component

**File:** `LanguageRequestSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageServiceProvider

**Purpose:** Service for LanguageProvider

**File:** `LanguageServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageSwitcherInterface

**Purpose:** LanguageSwitcherInterface component

**File:** `LanguageSwitcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageThemeHooks

**Purpose:** LanguageThemeHooks component

**File:** `LanguageThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageTypes

**Purpose:** LanguageTypes component

**File:** `LanguageTypes.php`

**Architectural Issues:** 1 violations detected

---

#### LastTimestamp

**Purpose:** LastTimestamp component

**File:** `LastTimestamp.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilder

**Purpose:** LayoutBuilder component

**File:** `LayoutBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderAccessCheck

**Purpose:** LayoutBuilderAccessCheck component

**File:** `LayoutBuilderAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderContextTrait

**Purpose:** LayoutBuilderContextTrait component

**File:** `LayoutBuilderContextTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderController

**Purpose:** Controls LayoutBuilder operations

**File:** `LayoutBuilderController.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderDisableForm

**Purpose:** Form handling for LayoutBuilderDisable

**File:** `LayoutBuilderDisableForm.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEnabledInterface

**Purpose:** LayoutBuilderEnabledInterface component

**File:** `LayoutBuilderEnabledInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEntityFormTrait

**Purpose:** Form handling for LayoutBuilderEntityTrait

**File:** `LayoutBuilderEntityFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEntityViewDisplay

**Purpose:** LayoutBuilderEntityViewDisplay component

**File:** `LayoutBuilderEntityViewDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEntityViewDisplayForm

**Purpose:** Form handling for LayoutBuilderEntityViewDisplay

**File:** `LayoutBuilderEntityViewDisplayForm.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEntityViewDisplayStorage

**Purpose:** LayoutBuilderEntityViewDisplayStorage component

**File:** `LayoutBuilderEntityViewDisplayStorage.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderEvents

**Purpose:** LayoutBuilderEvents component

**File:** `LayoutBuilderEvents.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderExposeAllFieldBlocksHooks

**Purpose:** LayoutBuilderExposeAllFieldBlocksHooks component

**File:** `LayoutBuilderExposeAllFieldBlocksHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderHighlightTrait

**Purpose:** LayoutBuilderHighlightTrait component

**File:** `LayoutBuilderHighlightTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderHooks

**Purpose:** LayoutBuilderHooks component

**File:** `LayoutBuilderHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderIsActiveCacheContext

**Purpose:** LayoutBuilderIsActiveCacheContext component

**File:** `LayoutBuilderIsActiveCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderLocalTaskDeriver

**Purpose:** LayoutBuilderLocalTaskDeriver component

**File:** `LayoutBuilderLocalTaskDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderOverridableInterface

**Purpose:** LayoutBuilderOverridableInterface component

**File:** `LayoutBuilderOverridableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderOverridesPermissions

**Purpose:** LayoutBuilderOverridesPermissions component

**File:** `LayoutBuilderOverridesPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderRoutes

**Purpose:** LayoutBuilderRoutes component

**File:** `LayoutBuilderRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderSampleEntityGenerator

**Purpose:** LayoutBuilderSampleEntityGenerator component

**File:** `LayoutBuilderSampleEntityGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderServiceProvider

**Purpose:** Service for LayoutBuilderProvider

**File:** `LayoutBuilderServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderThemeHooks

**Purpose:** LayoutBuilderThemeHooks component

**File:** `LayoutBuilderThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderUiCacheContext

**Purpose:** LayoutBuilderUiCacheContext component

**File:** `LayoutBuilderUiCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutBuilderWidget

**Purpose:** LayoutBuilderWidget component

**File:** `LayoutBuilderWidget.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutDiscoveryHooks

**Purpose:** LayoutDiscoveryHooks component

**File:** `LayoutDiscoveryHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutDiscoveryRequirements

**Purpose:** LayoutDiscoveryRequirements component

**File:** `LayoutDiscoveryRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutDiscoveryThemeHooks

**Purpose:** LayoutDiscoveryThemeHooks component

**File:** `LayoutDiscoveryThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutEntityDisplayInterface

**Purpose:** LayoutEntityDisplayInterface component

**File:** `LayoutEntityDisplayInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutEntityDisplayNormalizer

**Purpose:** LayoutEntityDisplayNormalizer component

**File:** `LayoutEntityDisplayNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutEntityHelperTrait

**Purpose:** LayoutEntityHelperTrait component

**File:** `LayoutEntityHelperTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutForm

**Purpose:** Form handling for Layout

**File:** `LayoutForm.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutOverrideFieldHelper

**Purpose:** LayoutOverrideFieldHelper component

**File:** `LayoutOverrideFieldHelper.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutPreviewAccessAllowed

**Purpose:** LayoutPreviewAccessAllowed component

**File:** `LayoutPreviewAccessAllowed.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutRebuildConfirmFormBase

**Purpose:** Form handling for LayoutRebuildConfirmBase

**File:** `LayoutRebuildConfirmFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutRebuildTrait

**Purpose:** LayoutRebuildTrait component

**File:** `LayoutRebuildTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutSectionItem

**Purpose:** LayoutSectionItem component

**File:** `LayoutSectionItem.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutSectionItemList

**Purpose:** LayoutSectionItemList component

**File:** `LayoutSectionItemList.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutSectionStorageParamConverter

**Purpose:** LayoutSectionStorageParamConverter component

**File:** `LayoutSectionStorageParamConverter.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutTempstoreRepository

**Purpose:** LayoutTempstoreRepository component

**File:** `LayoutTempstoreRepository.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutTempstoreRepositoryInterface

**Purpose:** LayoutTempstoreRepositoryInterface component

**File:** `LayoutTempstoreRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutTempstoreRouteEnhancer

**Purpose:** LayoutTempstoreRouteEnhancer component

**File:** `LayoutTempstoreRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### LazyBuilders

**Purpose:** LazyBuilders component

**File:** `LazyBuilders.php`

**Architectural Issues:** 1 violations detected

---

#### LegacyVersionUtility

**Purpose:** LegacyVersionUtility component

**File:** `LegacyVersionUtility.php`

**Architectural Issues:** 1 violations detected

---

#### Link

**Purpose:** Link component

**File:** `Link.php`

**Architectural Issues:** 1 violations detected

---

#### LinkAccessConstraint

**Purpose:** LinkAccessConstraint component

**File:** `LinkAccessConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LinkAccessConstraintValidator

**Purpose:** LinkAccessConstraintValidator component

**File:** `LinkAccessConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### LinkApprove

**Purpose:** LinkApprove component

**File:** `LinkApprove.php`

**Architectural Issues:** 1 violations detected

---

#### LinkBase

**Purpose:** LinkBase component

**File:** `LinkBase.php`

**Architectural Issues:** 1 violations detected

---

#### LinkCollection

**Purpose:** LinkCollection component

**File:** `LinkCollection.php`

**Architectural Issues:** 1 violations detected

---

#### LinkCollectionNormalizer

**Purpose:** LinkCollectionNormalizer component

**File:** `LinkCollectionNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### LinkExternalProtocolsConstraint

**Purpose:** LinkExternalProtocolsConstraint component

**File:** `LinkExternalProtocolsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LinkExternalProtocolsConstraintValidator

**Purpose:** LinkExternalProtocolsConstraintValidator component

**File:** `LinkExternalProtocolsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### LinkField

**Purpose:** LinkField component

**File:** `LinkField.php`

**Architectural Issues:** 2 violations detected

---

#### LinkFormatter

**Purpose:** Form handling for Linkatter

**File:** `LinkFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### LinkHooks

**Purpose:** LinkHooks component

**File:** `LinkHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LinkItem

**Purpose:** LinkItem component

**File:** `LinkItem.php`

**Architectural Issues:** 1 violations detected

---

#### LinkItemInterface

**Purpose:** LinkItemInterface component

**File:** `LinkItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LinkNotExistingInternalConstraint

**Purpose:** LinkNotExistingInternalConstraint component

**File:** `LinkNotExistingInternalConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LinkNotExistingInternalConstraintValidator

**Purpose:** LinkNotExistingInternalConstraintValidator component

**File:** `LinkNotExistingInternalConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### LinkOptions

**Purpose:** LinkOptions component

**File:** `LinkOptions.php`

**Architectural Issues:** 1 violations detected

---

#### LinkReply

**Purpose:** LinkReply component

**File:** `LinkReply.php`

**Architectural Issues:** 1 violations detected

---

#### LinkSeparateFormatter

**Purpose:** Form handling for LinkSeparateatter

**File:** `LinkSeparateFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### LinkThemeHooks

**Purpose:** LinkThemeHooks component

**File:** `LinkThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LinkTitleVisibility

**Purpose:** LinkTitleVisibility component

**File:** `LinkTitleVisibility.php`

**Architectural Issues:** 1 violations detected

---

#### LinkTypeConstraint

**Purpose:** LinkTypeConstraint component

**File:** `LinkTypeConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LinkTypeConstraintValidator

**Purpose:** LinkTypeConstraintValidator component

**File:** `LinkTypeConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### LinkUri

**Purpose:** LinkUri component

**File:** `LinkUri.php`

**Architectural Issues:** 1 violations detected

---

#### LinkWidget

**Purpose:** LinkWidget component

**File:** `LinkWidget.php`

**Architectural Issues:** 1 violations detected

---

#### Links

**Purpose:** Links component

**File:** `Links.php`

**Architectural Issues:** 1 violations detected

---

#### LinksetController

**Purpose:** Controls Linkset operations

**File:** `LinksetController.php`

**Architectural Issues:** 1 violations detected

---

#### ListElement

**Purpose:** ListElement component

**File:** `ListElement.php`

**Architectural Issues:** 1 violations detected

---

#### ListField

**Purpose:** ListField component

**File:** `ListField.php`

**Architectural Issues:** 2 violations detected

---

#### ListFloatItem

**Purpose:** ListFloatItem component

**File:** `ListFloatItem.php`

**Architectural Issues:** 1 violations detected

---

#### ListIntegerItem

**Purpose:** ListIntegerItem component

**File:** `ListIntegerItem.php`

**Architectural Issues:** 1 violations detected

---

#### ListItemBase

**Purpose:** ListItemBase component

**File:** `ListItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### ListNormalizer

**Purpose:** ListNormalizer component

**File:** `ListNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ListPlugin

**Purpose:** ListPlugin component

**File:** `ListPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ListStringItem

**Purpose:** ListStringItem component

**File:** `ListStringItem.php`

**Architectural Issues:** 1 violations detected

---

#### ListingEmpty

**Purpose:** ListingEmpty component

**File:** `ListingEmpty.php`

**Architectural Issues:** 2 violations detected

---

#### LocaleConfigManager

**Purpose:** Manages LocaleConfig operations

**File:** `LocaleConfigManager.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleConfigSubscriber

**Purpose:** LocaleConfigSubscriber component

**File:** `LocaleConfigSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleController

**Purpose:** Controls Locale operations

**File:** `LocaleController.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleDefaultConfigStorage

**Purpose:** LocaleDefaultConfigStorage component

**File:** `LocaleDefaultConfigStorage.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleEvent

**Purpose:** LocaleEvent component

**File:** `LocaleEvent.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleEvents

**Purpose:** LocaleEvents component

**File:** `LocaleEvents.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleHooks

**Purpose:** LocaleHooks component

**File:** `LocaleHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleLookup

**Purpose:** LocaleLookup component

**File:** `LocaleLookup.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleProjectStorage

**Purpose:** LocaleProjectStorage component

**File:** `LocaleProjectStorage.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleProjectStorageInterface

**Purpose:** LocaleProjectStorageInterface component

**File:** `LocaleProjectStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleRequirements

**Purpose:** LocaleRequirements component

**File:** `LocaleRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleSettingsForm

**Purpose:** Form handling for LocaleSettings

**File:** `LocaleSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleThemeHooks

**Purpose:** LocaleThemeHooks component

**File:** `LocaleThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### LocaleTranslation

**Purpose:** LocaleTranslation component

**File:** `LocaleTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### LocaleTranslationCacheTag

**Purpose:** LocaleTranslationCacheTag component

**File:** `LocaleTranslationCacheTag.php`

**Architectural Issues:** 1 violations detected

---

#### LockFileValidator

**Purpose:** LockFileValidator component

**File:** `LockFileValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Log

**Purpose:** Log component

**File:** `Log.php`

**Architectural Issues:** 1 violations detected

---

#### LoggingBeginner

**Purpose:** LoggingBeginner component

**File:** `LoggingBeginner.php`

**Architectural Issues:** 1 violations detected

---

#### LoggingCommitter

**Purpose:** LoggingCommitter component

**File:** `LoggingCommitter.php`

**Architectural Issues:** 1 violations detected

---

#### LoggingForm

**Purpose:** Form handling for Logging

**File:** `LoggingForm.php`

**Architectural Issues:** 1 violations detected

---

#### LoggingStager

**Purpose:** LoggingStager component

**File:** `LoggingStager.php`

**Architectural Issues:** 1 violations detected

---

#### LoginLogoutMenuLink

**Purpose:** LoginLogoutMenuLink component

**File:** `LoginLogoutMenuLink.php`

**Architectural Issues:** 1 violations detected

---

#### LoginStatusCheck

**Purpose:** LoginStatusCheck component

**File:** `LoginStatusCheck.php`

**Architectural Issues:** 1 violations detected

---

#### MachineName

**Purpose:** MachineName component

**File:** `MachineName.php`

**Architectural Issues:** 2 violations detected

---

#### MailHandler

**Purpose:** Handles requests for Mail

**File:** `MailHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MailHandlerException

**Purpose:** Handles requests for MailException

**File:** `MailHandlerException.php`

**Architectural Issues:** 1 violations detected

---

#### MailHandlerInterface

**Purpose:** Handles requests for MailInterface

**File:** `MailHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MailerHooks

**Purpose:** MailerHooks component

**File:** `MailerHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MaintenanceModeSubscriber

**Purpose:** MaintenanceModeSubscriber component

**File:** `MaintenanceModeSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### MakeUniqueBase

**Purpose:** MakeUniqueBase component

**File:** `MakeUniqueBase.php`

**Architectural Issues:** 1 violations detected

---

#### MakeUniqueEntityField

**Purpose:** MakeUniqueEntityField component

**File:** `MakeUniqueEntityField.php`

**Architectural Issues:** 1 violations detected

---

#### ManagedFile

**Purpose:** ManagedFile component

**File:** `ManagedFile.php`

**Architectural Issues:** 1 violations detected

---

#### ManyToOne

**Purpose:** ManyToOne component

**File:** `ManyToOne.php`

**Architectural Issues:** 2 violations detected

---

#### ManyToOneHelper

**Purpose:** ManyToOneHelper component

**File:** `ManyToOneHelper.php`

**Architectural Issues:** 1 violations detected

---

#### Mapping

**Purpose:** Mapping component

**File:** `Mapping.php`

**Architectural Issues:** 1 violations detected

---

#### Markup

**Purpose:** Markup component

**File:** `Markup.php`

**Architectural Issues:** 1 violations detected

---

#### MarkupNormalizer

**Purpose:** MarkupNormalizer component

**File:** `MarkupNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### Media

**Purpose:** Media component

**File:** `Media.php`

**Architectural Issues:** 3 violations detected

---

#### MediaAccessControlHandler

**Purpose:** Handles requests for MediaAccessControl

**File:** `MediaAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MediaConfigSubscriber

**Purpose:** MediaConfigSubscriber component

**File:** `MediaConfigSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### MediaEmbed

**Purpose:** MediaEmbed component

**File:** `MediaEmbed.php`

**Architectural Issues:** 1 violations detected

---

#### MediaFilterController

**Purpose:** Controls MediaFilter operations

**File:** `MediaFilterController.php`

**Architectural Issues:** 1 violations detected

---

#### MediaForm

**Purpose:** Form handling for Media

**File:** `MediaForm.php`

**Architectural Issues:** 1 violations detected

---

#### MediaHooks

**Purpose:** MediaHooks component

**File:** `MediaHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaInterface

**Purpose:** MediaInterface component

**File:** `MediaInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibrary

**Purpose:** MediaLibrary component

**File:** `MediaLibrary.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryEditorOpener

**Purpose:** MediaLibraryEditorOpener component

**File:** `MediaLibraryEditorOpener.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryFieldWidgetOpener

**Purpose:** MediaLibraryFieldWidgetOpener component

**File:** `MediaLibraryFieldWidgetOpener.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryHooks

**Purpose:** MediaLibraryHooks component

**File:** `MediaLibraryHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryOpenerInterface

**Purpose:** MediaLibraryOpenerInterface component

**File:** `MediaLibraryOpenerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibrarySelectForm

**Purpose:** Form handling for MediaLibrarySelect

**File:** `MediaLibrarySelectForm.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryServiceProvider

**Purpose:** Service for MediaLibraryProvider

**File:** `MediaLibraryServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryState

**Purpose:** MediaLibraryState component

**File:** `MediaLibraryState.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryThemeHooks

**Purpose:** MediaLibraryThemeHooks component

**File:** `MediaLibraryThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryUiBuilder

**Purpose:** MediaLibraryUiBuilder component

**File:** `MediaLibraryUiBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryViewsHooks

**Purpose:** MediaLibraryViewsHooks component

**File:** `MediaLibraryViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaLibraryWidget

**Purpose:** MediaLibraryWidget component

**File:** `MediaLibraryWidget.php`

**Architectural Issues:** 1 violations detected

---

#### MediaListBuilder

**Purpose:** MediaListBuilder component

**File:** `MediaListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### MediaMappingsConstraint

**Purpose:** MediaMappingsConstraint component

**File:** `MediaMappingsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### MediaMappingsConstraintValidator

**Purpose:** MediaMappingsConstraintValidator component

**File:** `MediaMappingsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### MediaPermissions

**Purpose:** MediaPermissions component

**File:** `MediaPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### MediaRequirements

**Purpose:** MediaRequirements component

**File:** `MediaRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### MediaRequirementsHooks

**Purpose:** MediaRequirementsHooks component

**File:** `MediaRequirementsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaRevision

**Purpose:** MediaRevision component

**File:** `MediaRevision.php`

**Architectural Issues:** 1 violations detected

---

#### MediaRouteProvider

**Purpose:** MediaRouteProvider component

**File:** `MediaRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSelection

**Purpose:** MediaSelection component

**File:** `MediaSelection.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSettingsForm

**Purpose:** Form handling for MediaSettings

**File:** `MediaSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSource

**Purpose:** MediaSource component

**File:** `MediaSource.php`

**Architectural Issues:** 2 violations detected

---

#### MediaSourceBase

**Purpose:** MediaSourceBase component

**File:** `MediaSourceBase.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSourceEntityConstraintsInterface

**Purpose:** MediaSourceEntityConstraintsInterface component

**File:** `MediaSourceEntityConstraintsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSourceFieldConstraintsInterface

**Purpose:** MediaSourceFieldConstraintsInterface component

**File:** `MediaSourceFieldConstraintsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSourceInterface

**Purpose:** MediaSourceInterface component

**File:** `MediaSourceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaSourceManager

**Purpose:** Manages MediaSource operations

**File:** `MediaSourceManager.php`

**Architectural Issues:** 1 violations detected

---

#### MediaStorage

**Purpose:** MediaStorage component

**File:** `MediaStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MediaThemeHooks

**Purpose:** MediaThemeHooks component

**File:** `MediaThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaThemeSuggestionsHooks

**Purpose:** MediaThemeSuggestionsHooks component

**File:** `MediaThemeSuggestionsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MediaThumbnailFormatter

**Purpose:** Form handling for MediaThumbnailatter

**File:** `MediaThumbnailFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### MediaType

**Purpose:** MediaType component

**File:** `MediaType.php`

**Architectural Issues:** 1 violations detected

---

#### MediaTypeAccessControlHandler

**Purpose:** Handles requests for MediaTypeAccessControl

**File:** `MediaTypeAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MediaTypeDeleteConfirmForm

**Purpose:** Form handling for MediaTypeDeleteConfirm

**File:** `MediaTypeDeleteConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### MediaTypeForm

**Purpose:** Form handling for MediaType

**File:** `MediaTypeForm.php`

**Architectural Issues:** 1 violations detected

---

#### MediaTypeInterface

**Purpose:** MediaTypeInterface component

**File:** `MediaTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MediaTypeListBuilder

**Purpose:** MediaTypeListBuilder component

**File:** `MediaTypeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### MediaViewsData

**Purpose:** MediaViewsData component

**File:** `MediaViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### Menu

**Purpose:** Menu component

**File:** `Menu.php`

**Architectural Issues:** 2 violations detected

---

#### MenuAccessControlHandler

**Purpose:** Handles requests for MenuAccessControl

**File:** `MenuAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MenuController

**Purpose:** Controls Menu operations

**File:** `MenuController.php`

**Architectural Issues:** 2 violations detected

---

#### MenuDeleteForm

**Purpose:** Form handling for MenuDelete

**File:** `MenuDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuForm

**Purpose:** Form handling for Menu

**File:** `MenuForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuInterface

**Purpose:** MenuInterface component

**File:** `MenuInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLink

**Purpose:** MenuLink component

**File:** `MenuLink.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkAdd

**Purpose:** MenuLinkAdd component

**File:** `MenuLinkAdd.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContent

**Purpose:** MenuLinkContent component

**File:** `MenuLinkContent.php`

**Architectural Issues:** 2 violations detected

---

#### MenuLinkContentAccessControlHandler

**Purpose:** Handles requests for MenuLinkContentAccessControl

**File:** `MenuLinkContentAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentDeleteForm

**Purpose:** Form handling for MenuLinkContentDelete

**File:** `MenuLinkContentDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentDeriver

**Purpose:** MenuLinkContentDeriver component

**File:** `MenuLinkContentDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentForm

**Purpose:** Form handling for MenuLinkContent

**File:** `MenuLinkContentForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentHooks

**Purpose:** MenuLinkContentHooks component

**File:** `MenuLinkContentHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentInterface

**Purpose:** MenuLinkContentInterface component

**File:** `MenuLinkContentInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentStorage

**Purpose:** MenuLinkContentStorage component

**File:** `MenuLinkContentStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentStorageInterface

**Purpose:** MenuLinkContentStorageInterface component

**File:** `MenuLinkContentStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkContentStorageSchema

**Purpose:** MenuLinkContentStorageSchema component

**File:** `MenuLinkContentStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkEditForm

**Purpose:** Form handling for MenuLinkEdit

**File:** `MenuLinkEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkListBuilder

**Purpose:** MenuLinkListBuilder component

**File:** `MenuLinkListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkLocalized

**Purpose:** MenuLinkLocalized component

**File:** `MenuLinkLocalized.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkParent

**Purpose:** MenuLinkParent component

**File:** `MenuLinkParent.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkResetForm

**Purpose:** Form handling for MenuLinkReset

**File:** `MenuLinkResetForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkTranslation

**Purpose:** MenuLinkTranslation component

**File:** `MenuLinkTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### MenuLinksetRoutes

**Purpose:** MenuLinksetRoutes component

**File:** `MenuLinksetRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinksetSettingsForm

**Purpose:** Form handling for MenuLinksetSettings

**File:** `MenuLinksetSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuListBuilder

**Purpose:** MenuListBuilder component

**File:** `MenuListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### MenuSettingsConstraint

**Purpose:** MenuSettingsConstraint component

**File:** `MenuSettingsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### MenuSettingsConstraintValidator

**Purpose:** MenuSettingsConstraintValidator component

**File:** `MenuSettingsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### MenuStorage

**Purpose:** MenuStorage component

**File:** `MenuStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTranslation

**Purpose:** MenuTranslation component

**File:** `MenuTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTreeHierarchyConstraint

**Purpose:** MenuTreeHierarchyConstraint component

**File:** `MenuTreeHierarchyConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTreeHierarchyConstraintValidator

**Purpose:** MenuTreeHierarchyConstraintValidator component

**File:** `MenuTreeHierarchyConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### MenuUiHooks

**Purpose:** MenuUiHooks component

**File:** `MenuUiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MenuUiMenuTreeManipulators

**Purpose:** MenuUiMenuTreeManipulators component

**File:** `MenuUiMenuTreeManipulators.php`

**Architectural Issues:** 1 violations detected

---

#### MenuUiThemeHooks

**Purpose:** MenuUiThemeHooks component

**File:** `MenuUiThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Merge

**Purpose:** Merge component

**File:** `Merge.php`

**Architectural Issues:** 3 violations detected

---

#### Message

**Purpose:** Message component

**File:** `Message.php`

**Architectural Issues:** 1 violations detected

---

#### MessageForm

**Purpose:** Form handling for Message

**File:** `MessageForm.php`

**Architectural Issues:** 2 violations detected

---

#### MessageInterface

**Purpose:** MessageInterface component

**File:** `MessageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MessageViewBuilder

**Purpose:** MessageViewBuilder component

**File:** `MessageViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### Messages

**Purpose:** Messages component

**File:** `Messages.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateAccessCheck

**Purpose:** MigrateAccessCheck component

**File:** `MigrateAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateBuildDependencyInterface

**Purpose:** MigrateBuildDependencyInterface component

**File:** `MigrateBuildDependencyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateController

**Purpose:** Controls Migrate operations

**File:** `MigrateController.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDestination

**Purpose:** MigrateDestination component

**File:** `MigrateDestination.php`

**Architectural Issues:** 2 violations detected

---

#### MigrateDestinationInterface

**Purpose:** MigrateDestinationInterface component

**File:** `MigrateDestinationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDestinationPluginManager

**Purpose:** Manages MigrateDestinationPlugin operations

**File:** `MigrateDestinationPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDrupalHooks

**Purpose:** MigrateDrupalHooks component

**File:** `MigrateDrupalHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDrupalServiceProvider

**Purpose:** Service for MigrateDrupalProvider

**File:** `MigrateDrupalServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDrupalUiHooks

**Purpose:** MigrateDrupalUiHooks component

**File:** `MigrateDrupalUiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateDrupalUiRouteSubscriber

**Purpose:** MigrateDrupalUiRouteSubscriber component

**File:** `MigrateDrupalUiRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateEntity

**Purpose:** MigrateEntity component

**File:** `MigrateEntity.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateEntityComplete

**Purpose:** MigrateEntityComplete component

**File:** `MigrateEntityComplete.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateEntityRevision

**Purpose:** MigrateEntityRevision component

**File:** `MigrateEntityRevision.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateEvents

**Purpose:** MigrateEvents component

**File:** `MigrateEvents.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateException

**Purpose:** MigrateException component

**File:** `MigrateException.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateExecutable

**Purpose:** MigrateExecutable component

**File:** `MigrateExecutable.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateExecutableInterface

**Purpose:** MigrateExecutableInterface component

**File:** `MigrateExecutableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateField

**Purpose:** MigrateField component

**File:** `MigrateField.php`

**Architectural Issues:** 2 violations detected

---

#### MigrateFieldInterface

**Purpose:** MigrateFieldInterface component

**File:** `MigrateFieldInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateFieldPluginManager

**Purpose:** Manages MigrateFieldPlugin operations

**File:** `MigrateFieldPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateFieldPluginManagerInterface

**Purpose:** Manages MigrateFieldPluginInterface operations

**File:** `MigrateFieldPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateHooks

**Purpose:** MigrateHooks component

**File:** `MigrateHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateIdMapInterface

**Purpose:** MigrateIdMapInterface component

**File:** `MigrateIdMapInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateIdMapMessageEvent

**Purpose:** MigrateIdMapMessageEvent component

**File:** `MigrateIdMapMessageEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateImportEvent

**Purpose:** MigrateImportEvent component

**File:** `MigrateImportEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateLookup

**Purpose:** MigrateLookup component

**File:** `MigrateLookup.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateLookupInterface

**Purpose:** MigrateLookupInterface component

**File:** `MigrateLookupInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateMapDeleteEvent

**Purpose:** MigrateMapDeleteEvent component

**File:** `MigrateMapDeleteEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateMapSaveEvent

**Purpose:** MigrateMapSaveEvent component

**File:** `MigrateMapSaveEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateMessage

**Purpose:** MigrateMessage component

**File:** `MigrateMessage.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateMessageCapture

**Purpose:** MigrateMessageCapture component

**File:** `MigrateMessageCapture.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateMessageController

**Purpose:** Controls MigrateMessage operations

**File:** `MigrateMessageController.php`

**Architectural Issues:** 2 violations detected

---

#### MigrateMessageInterface

**Purpose:** MigrateMessageInterface component

**File:** `MigrateMessageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigratePluginManager

**Purpose:** Manages MigratePlugin operations

**File:** `MigratePluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### MigratePluginManagerInterface

**Purpose:** Manages MigratePluginInterface operations

**File:** `MigratePluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigratePostRowSaveEvent

**Purpose:** MigratePostRowSaveEvent component

**File:** `MigratePostRowSaveEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigratePreRowSaveEvent

**Purpose:** MigratePreRowSaveEvent component

**File:** `MigratePreRowSaveEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateProcess

**Purpose:** MigrateProcess component

**File:** `MigrateProcess.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateProcessInterface

**Purpose:** MigrateProcessInterface component

**File:** `MigrateProcessInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateProcessPlugin

**Purpose:** MigrateProcessPlugin component

**File:** `MigrateProcessPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateRollbackEvent

**Purpose:** MigrateRollbackEvent component

**File:** `MigrateRollbackEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateRowDeleteEvent

**Purpose:** MigrateRowDeleteEvent component

**File:** `MigrateRowDeleteEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateSkipProcessException

**Purpose:** MigrateSkipProcessException component

**File:** `MigrateSkipProcessException.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateSkipRowException

**Purpose:** MigrateSkipRowException component

**File:** `MigrateSkipRowException.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateSource

**Purpose:** MigrateSource component

**File:** `MigrateSource.php`

**Architectural Issues:** 2 violations detected

---

#### MigrateSourceInterface

**Purpose:** MigrateSourceInterface component

**File:** `MigrateSourceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateSourcePluginManager

**Purpose:** Manages MigrateSourcePlugin operations

**File:** `MigrateSourcePluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateUpgradeFormBase

**Purpose:** Form handling for MigrateUpgradeBase

**File:** `MigrateUpgradeFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateUpgradeImportBatch

**Purpose:** MigrateUpgradeImportBatch component

**File:** `MigrateUpgradeImportBatch.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateValidatableEntityInterface

**Purpose:** MigrateValidatableEntityInterface component

**File:** `MigrateValidatableEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Migration

**Purpose:** Migration component

**File:** `Migration.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationConfigurationTrait

**Purpose:** MigrationConfigurationTrait component

**File:** `MigrationConfigurationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationDeriverTrait

**Purpose:** MigrationDeriverTrait component

**File:** `MigrationDeriverTrait.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationInterface

**Purpose:** MigrationInterface component

**File:** `MigrationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationLookup

**Purpose:** MigrationLookup component

**File:** `MigrationLookup.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationPluginManager

**Purpose:** Manages MigrationPlugin operations

**File:** `MigrationPluginManager.php`

**Architectural Issues:** 2 violations detected

---

#### MigrationPluginManagerInterface

**Purpose:** Manages MigrationPluginInterface operations

**File:** `MigrationPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationState

**Purpose:** MigrationState component

**File:** `MigrationState.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationWithFollowUpInterface

**Purpose:** MigrationWithFollowUpInterface component

**File:** `MigrationWithFollowUpInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Mini

**Purpose:** Mini component

**File:** `Mini.php`

**Architectural Issues:** 1 violations detected

---

#### MockPhpStorage

**Purpose:** MockPhpStorage component

**File:** `MockPhpStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ModeratedContentController

**Purpose:** Controls ModeratedContent operations

**File:** `ModeratedContentController.php`

**Architectural Issues:** 1 violations detected

---

#### ModeratedNodeListBuilder

**Purpose:** ModeratedNodeListBuilder component

**File:** `ModeratedNodeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationHandler

**Purpose:** Handles requests for Moderation

**File:** `ModerationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationHandlerInterface

**Purpose:** Handles requests for ModerationInterface

**File:** `ModerationHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationInformation

**Purpose:** ModerationInformation component

**File:** `ModerationInformation.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationInformationInterface

**Purpose:** ModerationInformationInterface component

**File:** `ModerationInformationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationOptOutPublish

**Purpose:** ModerationOptOutPublish component

**File:** `ModerationOptOutPublish.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationOptOutUnpublish

**Purpose:** ModerationOptOutUnpublish component

**File:** `ModerationOptOutUnpublish.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateConstraint

**Purpose:** ModerationStateConstraint component

**File:** `ModerationStateConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateConstraintValidator

**Purpose:** ModerationStateConstraintValidator component

**File:** `ModerationStateConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateField

**Purpose:** ModerationStateField component

**File:** `ModerationStateField.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateFieldItemList

**Purpose:** ModerationStateFieldItemList component

**File:** `ModerationStateFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateFilter

**Purpose:** ModerationStateFilter component

**File:** `ModerationStateFilter.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateJoinViewsHandlerTrait

**Purpose:** Handles requests for ModerationStateJoinViewsTrait

**File:** `ModerationStateJoinViewsHandlerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateSort

**Purpose:** ModerationStateSort component

**File:** `ModerationStateSort.php`

**Architectural Issues:** 1 violations detected

---

#### ModerationStateWidget

**Purpose:** ModerationStateWidget component

**File:** `ModerationStateWidget.php`

**Architectural Issues:** 1 violations detected

---

#### ModifiedResourceResponse

**Purpose:** ModifiedResourceResponse component

**File:** `ModifiedResourceResponse.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleAdminLinksHelper

**Purpose:** ModuleAdminLinksHelper component

**File:** `ModuleAdminLinksHelper.php`

**Architectural Issues:** 1 violations detected

---

#### ModulePermissionsLinkHelper

**Purpose:** ModulePermissionsLinkHelper component

**File:** `ModulePermissionsLinkHelper.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesEnabledTrait

**Purpose:** ModulesEnabledTrait component

**File:** `ModulesEnabledTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesListConfirmForm

**Purpose:** Form handling for ModulesListConfirm

**File:** `ModulesListConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesListForm

**Purpose:** Form handling for ModulesList

**File:** `ModulesListForm.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesListNonStableConfirmForm

**Purpose:** Form handling for ModulesListNonStableConfirm

**File:** `ModulesListNonStableConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesUninstallConfirmForm

**Purpose:** Form handling for ModulesUninstallConfirm

**File:** `ModulesUninstallConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### ModulesUninstallForm

**Purpose:** Form handling for ModulesUninstall

**File:** `ModulesUninstallForm.php`

**Architectural Issues:** 1 violations detected

---

#### MonthDate

**Purpose:** MonthDate component

**File:** `MonthDate.php`

**Architectural Issues:** 2 violations detected

---

#### MoveBlockController

**Purpose:** Controls MoveBlock operations

**File:** `MoveBlockController.php`

**Architectural Issues:** 1 violations detected

---

#### MoveBlockForm

**Purpose:** Form handling for MoveBlock

**File:** `MoveBlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### MultiItemsFieldHandlerInterface

**Purpose:** Handles requests for MultiItemsFieldInterface

**File:** `MultiItemsFieldHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MultiWidthLayoutBase

**Purpose:** MultiWidthLayoutBase component

**File:** `MultiWidthLayoutBase.php`

**Architectural Issues:** 1 violations detected

---

#### MultipleProviderAnnotationInterface

**Purpose:** MultipleProviderAnnotationInterface component

**File:** `MultipleProviderAnnotationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MultisiteValidator

**Purpose:** MultisiteValidator component

**File:** `MultisiteValidator.php`

**Architectural Issues:** 1 violations detected

---

#### MysqlCastSql

**Purpose:** MysqlCastSql component

**File:** `MysqlCastSql.php`

**Architectural Issues:** 1 violations detected

---

#### MysqlDateSql

**Purpose:** MysqlDateSql component

**File:** `MysqlDateSql.php`

**Architectural Issues:** 1 violations detected

---

#### MysqlHooks

**Purpose:** MysqlHooks component

**File:** `MysqlHooks.php`

**Architectural Issues:** 1 violations detected

---

#### MysqlRequirements

**Purpose:** MysqlRequirements component

**File:** `MysqlRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### MysqlServiceProvider

**Purpose:** Service for MysqlProvider

**File:** `MysqlServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### MysqliCastSql

**Purpose:** MysqliCastSql component

**File:** `MysqliCastSql.php`

**Architectural Issues:** 1 violations detected

---

#### MysqliHooks

**Purpose:** MysqliHooks component

**File:** `MysqliHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Name

**Purpose:** Name component

**File:** `Name.php`

**Architectural Issues:** 1 violations detected

---

#### NamedPlaceholderConverter

**Purpose:** NamedPlaceholderConverter component

**File:** `NamedPlaceholderConverter.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationContentLinks

**Purpose:** NavigationContentLinks component

**File:** `NavigationContentLinks.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationHooks

**Purpose:** NavigationHooks component

**File:** `NavigationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationLayout

**Purpose:** NavigationLayout component

**File:** `NavigationLayout.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationLinkBlock

**Purpose:** NavigationLinkBlock component

**File:** `NavigationLinkBlock.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationMenuBlock

**Purpose:** NavigationMenuBlock component

**File:** `NavigationMenuBlock.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationMenuLinkTree

**Purpose:** NavigationMenuLinkTree component

**File:** `NavigationMenuLinkTree.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationMenuLinkTreeManipulators

**Purpose:** NavigationMenuLinkTreeManipulators component

**File:** `NavigationMenuLinkTreeManipulators.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationRenderer

**Purpose:** NavigationRenderer component

**File:** `NavigationRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationRequirements

**Purpose:** NavigationRequirements component

**File:** `NavigationRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationSectionStorage

**Purpose:** NavigationSectionStorage component

**File:** `NavigationSectionStorage.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationServiceProvider

**Purpose:** Service for NavigationProvider

**File:** `NavigationServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationShortcutsBlock

**Purpose:** NavigationShortcutsBlock component

**File:** `NavigationShortcutsBlock.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationThemeHooks

**Purpose:** NavigationThemeHooks component

**File:** `NavigationThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NavigationUserBlock

**Purpose:** NavigationUserBlock component

**File:** `NavigationUserBlock.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationBrowserDeleteForm

**Purpose:** Form handling for NegotiationBrowserDelete

**File:** `NegotiationBrowserDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationBrowserForm

**Purpose:** Form handling for NegotiationBrowser

**File:** `NegotiationBrowserForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationConfigureForm

**Purpose:** Form handling for NegotiationConfigure

**File:** `NegotiationConfigureForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationSelectedForm

**Purpose:** Form handling for NegotiationSelected

**File:** `NegotiationSelectedForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationSessionForm

**Purpose:** Form handling for NegotiationSession

**File:** `NegotiationSessionForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationUrlForm

**Purpose:** Form handling for NegotiationUrl

**File:** `NegotiationUrlForm.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiatorBase

**Purpose:** NegotiatorBase component

**File:** `NegotiatorBase.php`

**Architectural Issues:** 1 violations detected

---

#### Nid

**Purpose:** Nid component

**File:** `Nid.php`

**Architectural Issues:** 1 violations detected

---

#### NoBigPipeRouteAlterSubscriber

**Purpose:** NoBigPipeRouteAlterSubscriber component

**File:** `NoBigPipeRouteAlterSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### NoSourcePluginDecorator

**Purpose:** NoSourcePluginDecorator component

**File:** `NoSourcePluginDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### Node

**Purpose:** Node component

**File:** `Node.php`

**Architectural Issues:** 6 violations detected

---

#### NodeAccessControlHandler

**Purpose:** Handles requests for NodeAccessControl

**File:** `NodeAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### NodeAccessControlHandlerInterface

**Purpose:** Handles requests for NodeAccessControlInterface

**File:** `NodeAccessControlHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### NodeAccessGrantsCacheContext

**Purpose:** NodeAccessGrantsCacheContext component

**File:** `NodeAccessGrantsCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### NodeAdminRouteSubscriber

**Purpose:** NodeAdminRouteSubscriber component

**File:** `NodeAdminRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### NodeBlockHooks

**Purpose:** NodeBlockHooks component

**File:** `NodeBlockHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeBulkForm

**Purpose:** Form handling for NodeBulk

**File:** `NodeBulkForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeBulkUpdate

**Purpose:** NodeBulkUpdate component

**File:** `NodeBulkUpdate.php`

**Architectural Issues:** 1 violations detected

---

#### NodeComment

**Purpose:** NodeComment component

**File:** `NodeComment.php`

**Architectural Issues:** 1 violations detected

---

#### NodeComplete

**Purpose:** NodeComplete component

**File:** `NodeComplete.php`

**Architectural Issues:** 2 violations detected

---

#### NodeCompleteNodeLookup

**Purpose:** NodeCompleteNodeLookup component

**File:** `NodeCompleteNodeLookup.php`

**Architectural Issues:** 1 violations detected

---

#### NodeCompleteNodeRevisionLookup

**Purpose:** NodeCompleteNodeRevisionLookup component

**File:** `NodeCompleteNodeRevisionLookup.php`

**Architectural Issues:** 1 violations detected

---

#### NodeCompleteNodeTranslationLookup

**Purpose:** NodeCompleteNodeTranslationLookup component

**File:** `NodeCompleteNodeTranslationLookup.php`

**Architectural Issues:** 1 violations detected

---

#### NodeConfigTranslationHooks

**Purpose:** NodeConfigTranslationHooks component

**File:** `NodeConfigTranslationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeController

**Purpose:** Controls Node operations

**File:** `NodeController.php`

**Architectural Issues:** 1 violations detected

---

#### NodeDatabaseHooks

**Purpose:** NodeDatabaseHooks component

**File:** `NodeDatabaseHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeDeleteForm

**Purpose:** Form handling for NodeDelete

**File:** `NodeDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeEntityHooks

**Purpose:** NodeEntityHooks component

**File:** `NodeEntityHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeEntityTranslation

**Purpose:** NodeEntityTranslation component

**File:** `NodeEntityTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### NodeForm

**Purpose:** Form handling for Node

**File:** `NodeForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeFormHooks

**Purpose:** Form handling for NodeHooks

**File:** `NodeFormHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeGrantDatabaseStorage

**Purpose:** NodeGrantDatabaseStorage component

**File:** `NodeGrantDatabaseStorage.php`

**Architectural Issues:** 1 violations detected

---

#### NodeGrantDatabaseStorageInterface

**Purpose:** NodeGrantDatabaseStorageInterface component

**File:** `NodeGrantDatabaseStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### NodeHelpHooks

**Purpose:** NodeHelpHooks component

**File:** `NodeHelpHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeInterface

**Purpose:** NodeInterface component

**File:** `NodeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### NodeListBuilder

**Purpose:** NodeListBuilder component

**File:** `NodeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### NodeMenuHooks

**Purpose:** NodeMenuHooks component

**File:** `NodeMenuHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeMigrateType

**Purpose:** NodeMigrateType component

**File:** `NodeMigrateType.php`

**Architectural Issues:** 1 violations detected

---

#### NodeModerationHandler

**Purpose:** Handles requests for NodeModeration

**File:** `NodeModerationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### NodeModuleHooks

**Purpose:** NodeModuleHooks component

**File:** `NodeModuleHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeModulesExcluder

**Purpose:** NodeModulesExcluder component

**File:** `NodeModulesExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### NodeNewComments

**Purpose:** NodeNewComments component

**File:** `NodeNewComments.php`

**Architectural Issues:** 2 violations detected

---

#### NodePermissions

**Purpose:** NodePermissions component

**File:** `NodePermissions.php`

**Architectural Issues:** 1 violations detected

---

#### NodePreviewAccessCheck

**Purpose:** NodePreviewAccessCheck component

**File:** `NodePreviewAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### NodePreviewController

**Purpose:** Controls NodePreview operations

**File:** `NodePreviewController.php`

**Architectural Issues:** 1 violations detected

---

#### NodePreviewConverter

**Purpose:** NodePreviewConverter component

**File:** `NodePreviewConverter.php`

**Architectural Issues:** 2 violations detected

---

#### NodePreviewForm

**Purpose:** Form handling for NodePreview

**File:** `NodePreviewForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodePreviewMode

**Purpose:** NodePreviewMode component

**File:** `NodePreviewMode.php`

**Architectural Issues:** 1 violations detected

---

#### NodeReference

**Purpose:** NodeReference component

**File:** `NodeReference.php`

**Architectural Issues:** 2 violations detected

---

#### NodeRequirements

**Purpose:** NodeRequirements component

**File:** `NodeRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRevision

**Purpose:** NodeRevision component

**File:** `NodeRevision.php`

**Architectural Issues:** 3 violations detected

---

#### NodeRevisionDeleteForm

**Purpose:** Form handling for NodeRevisionDelete

**File:** `NodeRevisionDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRevisionRevertForm

**Purpose:** Form handling for NodeRevisionRevert

**File:** `NodeRevisionRevertForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRevisionRevertTranslationForm

**Purpose:** Form handling for NodeRevisionRevertTranslation

**File:** `NodeRevisionRevertTranslationForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRouteContext

**Purpose:** NodeRouteContext component

**File:** `NodeRouteContext.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRouteProvider

**Purpose:** NodeRouteProvider component

**File:** `NodeRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### NodeRow

**Purpose:** NodeRow component

**File:** `NodeRow.php`

**Architectural Issues:** 1 violations detected

---

#### NodeSearch

**Purpose:** NodeSearch component

**File:** `NodeSearch.php`

**Architectural Issues:** 1 violations detected

---

#### NodeSearchHooks

**Purpose:** NodeSearchHooks component

**File:** `NodeSearchHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeSelection

**Purpose:** NodeSelection component

**File:** `NodeSelection.php`

**Architectural Issues:** 1 violations detected

---

#### NodeServiceProvider

**Purpose:** Service for NodeProvider

**File:** `NodeServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### NodeStorage

**Purpose:** NodeStorage component

**File:** `NodeStorage.php`

**Architectural Issues:** 1 violations detected

---

#### NodeStorageBodyFieldHooks

**Purpose:** NodeStorageBodyFieldHooks component

**File:** `NodeStorageBodyFieldHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeStorageInterface

**Purpose:** NodeStorageInterface component

**File:** `NodeStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### NodeStorageSchema

**Purpose:** NodeStorageSchema component

**File:** `NodeStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTermData

**Purpose:** NodeTermData component

**File:** `NodeTermData.php`

**Architectural Issues:** 1 violations detected

---

#### NodeThemeHooks

**Purpose:** NodeThemeHooks component

**File:** `NodeThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTokensHooks

**Purpose:** NodeTokensHooks component

**File:** `NodeTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTranslationExceptionSubscriber

**Purpose:** NodeTranslationExceptionSubscriber component

**File:** `NodeTranslationExceptionSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTranslationHandler

**Purpose:** Handles requests for NodeTranslation

**File:** `NodeTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTranslationMigrateSubscriber

**Purpose:** NodeTranslationMigrateSubscriber component

**File:** `NodeTranslationMigrateSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### NodeType

**Purpose:** NodeType component

**File:** `NodeType.php`

**Architectural Issues:** 3 violations detected

---

#### NodeTypeAccessControlHandler

**Purpose:** Handles requests for NodeTypeAccessControl

**File:** `NodeTypeAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTypeDeleteConfirm

**Purpose:** NodeTypeDeleteConfirm component

**File:** `NodeTypeDeleteConfirm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTypeForm

**Purpose:** Form handling for NodeType

**File:** `NodeTypeForm.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTypeInterface

**Purpose:** NodeTypeInterface component

**File:** `NodeTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTypeListBuilder

**Purpose:** NodeTypeListBuilder component

**File:** `NodeTypeListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### NodeTypeMapper

**Purpose:** NodeTypeMapper component

**File:** `NodeTypeMapper.php`

**Architectural Issues:** 1 violations detected

---

#### NodeUpdate7008

**Purpose:** NodeUpdate7008 component

**File:** `NodeUpdate7008.php`

**Architectural Issues:** 1 violations detected

---

#### NodeUserHooks

**Purpose:** NodeUserHooks component

**File:** `NodeUserHooks.php`

**Architectural Issues:** 1 violations detected

---

#### NodeViewBuilder

**Purpose:** NodeViewBuilder component

**File:** `NodeViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### NodeViewController

**Purpose:** Controls NodeView operations

**File:** `NodeViewController.php`

**Architectural Issues:** 1 violations detected

---

#### NodeViewsData

**Purpose:** NodeViewsData component

**File:** `NodeViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### NodeViewsHooks

**Purpose:** NodeViewsHooks component

**File:** `NodeViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### None

**Purpose:** None component

**File:** `None.php`

**Architectural Issues:** 4 violations detected

---

#### NormalizerBase

**Purpose:** NormalizerBase component

**File:** `NormalizerBase.php`

**Architectural Issues:** 2 violations detected

---

#### NullArgument

**Purpose:** NullArgument component

**File:** `NullArgument.php`

**Architectural Issues:** 1 violations detected

---

#### NullCoalesce

**Purpose:** NullCoalesce component

**File:** `NullCoalesce.php`

**Architectural Issues:** 1 violations detected

---

#### NullDestination

**Purpose:** NullDestination component

**File:** `NullDestination.php`

**Architectural Issues:** 1 violations detected

---

#### NullIdMap

**Purpose:** NullIdMap component

**File:** `NullIdMap.php`

**Architectural Issues:** 1 violations detected

---

#### NullIncludedData

**Purpose:** NullIncludedData component

**File:** `NullIncludedData.php`

**Architectural Issues:** 1 violations detected

---

#### NullNormalizer

**Purpose:** NullNormalizer component

**File:** `NullNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### NumberField

**Purpose:** NumberField component

**File:** `NumberField.php`

**Architectural Issues:** 1 violations detected

---

#### NumberListField

**Purpose:** NumberListField component

**File:** `NumberListField.php`

**Architectural Issues:** 1 violations detected

---

#### NumericArgument

**Purpose:** NumericArgument component

**File:** `NumericArgument.php`

**Architectural Issues:** 1 violations detected

---

#### NumericArgumentValidator

**Purpose:** NumericArgumentValidator component

**File:** `NumericArgumentValidator.php`

**Architectural Issues:** 1 violations detected

---

#### NumericField

**Purpose:** NumericField component

**File:** `NumericField.php`

**Architectural Issues:** 1 violations detected

---

#### NumericFilter

**Purpose:** NumericFilter component

**File:** `NumericFilter.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbed

**Purpose:** OEmbed component

**File:** `OEmbed.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedDeriver

**Purpose:** OEmbedDeriver component

**File:** `OEmbedDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedForm

**Purpose:** Form handling for OEmbed

**File:** `OEmbedForm.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedFormatter

**Purpose:** Form handling for OEmbedatter

**File:** `OEmbedFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedIframeController

**Purpose:** Controls OEmbedIframe operations

**File:** `OEmbedIframeController.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedInterface

**Purpose:** OEmbedInterface component

**File:** `OEmbedInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedMediaSource

**Purpose:** OEmbedMediaSource component

**File:** `OEmbedMediaSource.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedResourceConstraint

**Purpose:** OEmbedResourceConstraint component

**File:** `OEmbedResourceConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedResourceConstraintValidator

**Purpose:** OEmbedResourceConstraintValidator component

**File:** `OEmbedResourceConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### OEmbedWidget

**Purpose:** OEmbedWidget component

**File:** `OEmbedWidget.php`

**Architectural Issues:** 1 violations detected

---

#### OffsetPage

**Purpose:** OffsetPage component

**File:** `OffsetPage.php`

**Architectural Issues:** 1 violations detected

---

#### OmittedData

**Purpose:** OmittedData component

**File:** `OmittedData.php`

**Architectural Issues:** 1 violations detected

---

#### OpenerResolver

**Purpose:** OpenerResolver component

**File:** `OpenerResolver.php`

**Architectural Issues:** 1 violations detected

---

#### OpenerResolverInterface

**Purpose:** OpenerResolverInterface component

**File:** `OpenerResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Opml

**Purpose:** Opml component

**File:** `Opml.php`

**Architectural Issues:** 1 violations detected

---

#### OpmlFields

**Purpose:** OpmlFields component

**File:** `OpmlFields.php`

**Architectural Issues:** 1 violations detected

---

#### OptionWidgetsField

**Purpose:** OptionWidgetsField component

**File:** `OptionWidgetsField.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsDefaultFormatter

**Purpose:** Form handling for OptionsDefaultatter

**File:** `OptionsDefaultFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsField

**Purpose:** OptionsField component

**File:** `OptionsField.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsHooks

**Purpose:** OptionsHooks component

**File:** `OptionsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsKeyFormatter

**Purpose:** Form handling for OptionsKeyatter

**File:** `OptionsKeyFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsViewsHooks

**Purpose:** OptionsViewsHooks component

**File:** `OptionsViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### OverridesEntityForm

**Purpose:** Form handling for OverridesEntity

**File:** `OverridesEntityForm.php`

**Architectural Issues:** 1 violations detected

---

#### OverridesSectionStorage

**Purpose:** OverridesSectionStorage component

**File:** `OverridesSectionStorage.php`

**Architectural Issues:** 1 violations detected

---

#### OverridesSectionStorageInterface

**Purpose:** OverridesSectionStorageInterface component

**File:** `OverridesSectionStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OverviewForm

**Purpose:** Form handling for Overview

**File:** `OverviewForm.php`

**Architectural Issues:** 1 violations detected

---

#### OverviewTerms

**Purpose:** OverviewTerms component

**File:** `OverviewTerms.php`

**Architectural Issues:** 1 violations detected

---

#### OverwriteExistingPackagesValidator

**Purpose:** OverwriteExistingPackagesValidator component

**File:** `OverwriteExistingPackagesValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PDOConnection

**Purpose:** PDOConnection component

**File:** `PDOConnection.php`

**Architectural Issues:** 1 violations detected

---

#### PackageManagerHooks

**Purpose:** Manages PackageHooks operations

**File:** `PackageManagerHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PackageManagerRequirements

**Purpose:** Manages PackageRequirements operations

**File:** `PackageManagerRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### PackageManagerRequirementsHooks

**Purpose:** Manages PackageRequirementsHooks operations

**File:** `PackageManagerRequirementsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PackageManagerUninstallValidator

**Purpose:** Manages PackageUninstallValidator operations

**File:** `PackageManagerUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PackageManagerUpdateProcessor

**Purpose:** Manages PackageUpdateProcessor operations

**File:** `PackageManagerUpdateProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### Page

**Purpose:** Page component

**File:** `Page.php`

**Architectural Issues:** 1 violations detected

---

#### PageActions

**Purpose:** PageActions component

**File:** `PageActions.php`

**Architectural Issues:** 1 violations detected

---

#### PageAttachmentsHook

**Purpose:** PageAttachmentsHook component

**File:** `PageAttachmentsHook.php`

**Architectural Issues:** 1 violations detected

---

#### PageCache

**Purpose:** PageCache component

**File:** `PageCache.php`

**Architectural Issues:** 1 violations detected

---

#### PageCacheHooks

**Purpose:** PageCacheHooks component

**File:** `PageCacheHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PageContext

**Purpose:** PageContext component

**File:** `PageContext.php`

**Architectural Issues:** 1 violations detected

---

#### PagerPluginBase

**Purpose:** PagerPluginBase component

**File:** `PagerPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### PathAlias

**Purpose:** PathAlias component

**File:** `PathAlias.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasConstraint

**Purpose:** PathAliasConstraint component

**File:** `PathAliasConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasConstraintValidator

**Purpose:** PathAliasConstraintValidator component

**File:** `PathAliasConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasForm

**Purpose:** Form handling for PathAlias

**File:** `PathAliasForm.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasInterface

**Purpose:** PathAliasInterface component

**File:** `PathAliasInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasListBuilder

**Purpose:** PathAliasListBuilder component

**File:** `PathAliasListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasStorage

**Purpose:** PathAliasStorage component

**File:** `PathAliasStorage.php`

**Architectural Issues:** 1 violations detected

---

#### PathAliasStorageSchema

**Purpose:** PathAliasStorageSchema component

**File:** `PathAliasStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### PathBasedBreadcrumbBuilder

**Purpose:** PathBasedBreadcrumbBuilder component

**File:** `PathBasedBreadcrumbBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### PathFieldItemList

**Purpose:** PathFieldItemList component

**File:** `PathFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### PathFilterForm

**Purpose:** Form handling for PathFilter

**File:** `PathFilterForm.php`

**Architectural Issues:** 1 violations detected

---

#### PathHooks

**Purpose:** PathHooks component

**File:** `PathHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PathItem

**Purpose:** PathItem component

**File:** `PathItem.php`

**Architectural Issues:** 1 violations detected

---

#### PathLocator

**Purpose:** PathLocator component

**File:** `PathLocator.php`

**Architectural Issues:** 1 violations detected

---

#### PathPluginBase

**Purpose:** PathPluginBase component

**File:** `PathPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorFiles

**Purpose:** PathProcessorFiles component

**File:** `PathProcessorFiles.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorImageStyles

**Purpose:** PathProcessorImageStyles component

**File:** `PathProcessorImageStyles.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorLanguage

**Purpose:** PathProcessorLanguage component

**File:** `PathProcessorLanguage.php`

**Architectural Issues:** 1 violations detected

---

#### PathSetTranslated

**Purpose:** PathSetTranslated component

**File:** `PathSetTranslated.php`

**Architectural Issues:** 1 violations detected

---

#### PathWidget

**Purpose:** PathWidget component

**File:** `PathWidget.php`

**Architectural Issues:** 1 violations detected

---

#### PendingUpdatesValidator

**Purpose:** PendingUpdatesValidator component

**File:** `PendingUpdatesValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PerComponentEntityDisplay

**Purpose:** PerComponentEntityDisplay component

**File:** `PerComponentEntityDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### PerComponentEntityFormDisplay

**Purpose:** Form handling for PerComponentEntityDisplay

**File:** `PerComponentEntityFormDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### PerformanceController

**Purpose:** Controls Performance operations

**File:** `PerformanceController.php`

**Architectural Issues:** 1 violations detected

---

#### PerformanceForm

**Purpose:** Form handling for Performance

**File:** `PerformanceForm.php`

**Architectural Issues:** 1 violations detected

---

#### Permission

**Purpose:** Permission component

**File:** `Permission.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionAccessCheck

**Purpose:** PermissionAccessCheck component

**File:** `PermissionAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionHandler

**Purpose:** Handles requests for Permission

**File:** `PermissionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionHandlerInterface

**Purpose:** Handles requests for PermissionInterface

**File:** `PermissionHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Permissions

**Purpose:** Permissions component

**File:** `Permissions.php`

**Architectural Issues:** 3 violations detected

---

#### PgsqlHooks

**Purpose:** PgsqlHooks component

**File:** `PgsqlHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PgsqlQueryFactory

**Purpose:** PgsqlQueryFactory component

**File:** `PgsqlQueryFactory.php`

**Architectural Issues:** 1 violations detected

---

#### PgsqlRequirements

**Purpose:** PgsqlRequirements component

**File:** `PgsqlRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### PgsqlRequirementsHooks

**Purpose:** PgsqlRequirementsHooks component

**File:** `PgsqlRequirementsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PhoneField

**Purpose:** PhoneField component

**File:** `PhoneField.php`

**Architectural Issues:** 1 violations detected

---

#### PhpExtensionsValidator

**Purpose:** PhpExtensionsValidator component

**File:** `PhpExtensionsValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PhpTufValidator

**Purpose:** PhpTufValidator component

**File:** `PhpTufValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PhpassHashedPassword

**Purpose:** PhpassHashedPassword component

**File:** `PhpassHashedPassword.php`

**Architectural Issues:** 1 violations detected

---

#### PhpassHooks

**Purpose:** PhpassHooks component

**File:** `PhpassHooks.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceBlock

**Purpose:** PlaceBlock component

**File:** `PlaceBlock.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceBlockDeriver

**Purpose:** PlaceBlockDeriver component

**File:** `PlaceBlockDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### PluginBase

**Purpose:** PluginBase component

**File:** `PluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### PluginEventSubscriber

**Purpose:** PluginEventSubscriber component

**File:** `PluginEventSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### PluginManagerDependentValidatorTrait

**Purpose:** Manages PluginDependentValidatorTrait operations

**File:** `PluginManagerDependentValidatorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PluralFormula

**Purpose:** Form handling for Pluralula

**File:** `PluralFormula.php`

**Architectural Issues:** 1 violations detected

---

#### PluralFormulaInterface

**Purpose:** Form handling for PluralulaInterface

**File:** `PluralFormulaInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluralVariants

**Purpose:** PluralVariants component

**File:** `PluralVariants.php`

**Architectural Issues:** 1 violations detected

---

#### PoDatabaseReader

**Purpose:** PoDatabaseReader component

**File:** `PoDatabaseReader.php`

**Architectural Issues:** 1 violations detected

---

#### PoDatabaseWriter

**Purpose:** PoDatabaseWriter component

**File:** `PoDatabaseWriter.php`

**Architectural Issues:** 1 violations detected

---

#### PostApplyEvent

**Purpose:** PostApplyEvent component

**File:** `PostApplyEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PostCreateEvent

**Purpose:** PostCreateEvent component

**File:** `PostCreateEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PostRequireEvent

**Purpose:** PostRequireEvent component

**File:** `PostRequireEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PostgresqlDateSql

**Purpose:** PostgresqlDateSql component

**File:** `PostgresqlDateSql.php`

**Architectural Issues:** 1 violations detected

---

#### PreApplyEvent

**Purpose:** PreApplyEvent component

**File:** `PreApplyEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PreCreateEvent

**Purpose:** PreCreateEvent component

**File:** `PreCreateEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PreRequireEvent

**Purpose:** PreRequireEvent component

**File:** `PreRequireEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PrecedingConstraintAwareValidatorTrait

**Purpose:** PrecedingConstraintAwareValidatorTrait component

**File:** `PrecedingConstraintAwareValidatorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PrepareLayout

**Purpose:** PrepareLayout component

**File:** `PrepareLayout.php`

**Architectural Issues:** 1 violations detected

---

#### PrepareLayoutEvent

**Purpose:** PrepareLayoutEvent component

**File:** `PrepareLayoutEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PrepareModulesEntityUninstallForm

**Purpose:** Form handling for PrepareModulesEntityUninstall

**File:** `PrepareModulesEntityUninstallForm.php`

**Architectural Issues:** 1 violations detected

---

#### PrerenderList

**Purpose:** PrerenderList component

**File:** `PrerenderList.php`

**Architectural Issues:** 1 violations detected

---

#### PreviewToggleTrait

**Purpose:** PreviewToggleTrait component

**File:** `PreviewToggleTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PrimitiveDataNormalizer

**Purpose:** PrimitiveDataNormalizer component

**File:** `PrimitiveDataNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ProcessField

**Purpose:** ProcessField component

**File:** `ProcessField.php`

**Architectural Issues:** 1 violations detected

---

#### ProcessOutputCallback

**Purpose:** ProcessOutputCallback component

**File:** `ProcessOutputCallback.php`

**Architectural Issues:** 1 violations detected

---

#### ProcessPluginBase

**Purpose:** ProcessPluginBase component

**File:** `ProcessPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ProcessedText

**Purpose:** ProcessedText component

**File:** `ProcessedText.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileField

**Purpose:** ProfileField component

**File:** `ProfileField.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileFieldOptionTranslation

**Purpose:** ProfileFieldOptionTranslation component

**File:** `ProfileFieldOptionTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### ProfileFieldSettings

**Purpose:** ProfileFieldSettings component

**File:** `ProfileFieldSettings.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileFieldTranslation

**Purpose:** ProfileFieldTranslation component

**File:** `ProfileFieldTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileFieldValues

**Purpose:** ProfileFieldValues component

**File:** `ProfileFieldValues.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileForm

**Purpose:** Form handling for Profile

**File:** `ProfileForm.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileTranslationHandler

**Purpose:** Handles requests for ProfileTranslation

**File:** `ProfileTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileValues

**Purpose:** ProfileValues component

**File:** `ProfileValues.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectCoreCompatibility

**Purpose:** ProjectCoreCompatibility component

**File:** `ProjectCoreCompatibility.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectInfo

**Purpose:** ProjectInfo component

**File:** `ProjectInfo.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectRelease

**Purpose:** ProjectRelease component

**File:** `ProjectRelease.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectSecurityData

**Purpose:** ProjectSecurityData component

**File:** `ProjectSecurityData.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectSecurityRequirement

**Purpose:** ProjectSecurityRequirement component

**File:** `ProjectSecurityRequirement.php`

**Architectural Issues:** 1 violations detected

---

#### PromoteNode

**Purpose:** PromoteNode component

**File:** `PromoteNode.php`

**Architectural Issues:** 1 violations detected

---

#### ProtectedUserFieldConstraint

**Purpose:** ProtectedUserFieldConstraint component

**File:** `ProtectedUserFieldConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ProtectedUserFieldConstraintValidator

**Purpose:** ProtectedUserFieldConstraintValidator component

**File:** `ProtectedUserFieldConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Provider

**Purpose:** Provider component

**File:** `Provider.php`

**Architectural Issues:** 1 violations detected

---

#### ProviderException

**Purpose:** ProviderException component

**File:** `ProviderException.php`

**Architectural Issues:** 1 violations detected

---

#### ProviderFilterDecorator

**Purpose:** ProviderFilterDecorator component

**File:** `ProviderFilterDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### ProviderRepository

**Purpose:** ProviderRepository component

**File:** `ProviderRepository.php`

**Architectural Issues:** 1 violations detected

---

#### ProviderRepositoryInterface

**Purpose:** ProviderRepositoryInterface component

**File:** `ProviderRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Query

**Purpose:** Query component

**File:** `Query.php`

**Architectural Issues:** 1 violations detected

---

#### QueryAggregate

**Purpose:** QueryAggregate component

**File:** `QueryAggregate.php`

**Architectural Issues:** 1 violations detected

---

#### QueryFactory

**Purpose:** QueryFactory component

**File:** `QueryFactory.php`

**Architectural Issues:** 2 violations detected

---

#### QueryParameter

**Purpose:** QueryParameter component

**File:** `QueryParameter.php`

**Architectural Issues:** 1 violations detected

---

#### QueryParameterWorkspaceNegotiator

**Purpose:** QueryParameterWorkspaceNegotiator component

**File:** `QueryParameterWorkspaceNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### QueryPluginBase

**Purpose:** QueryPluginBase component

**File:** `QueryPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### QueryTrait

**Purpose:** QueryTrait component

**File:** `QueryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RSSEnclosureFormatter

**Purpose:** Form handling for RSSEnclosureatter

**File:** `RSSEnclosureFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### Random

**Purpose:** Random component

**File:** `Random.php`

**Architectural Issues:** 1 violations detected

---

#### Raw

**Purpose:** Raw component

**File:** `Raw.php`

**Architectural Issues:** 1 violations detected

---

#### ReadOnlyModeMethodFilter

**Purpose:** ReadOnlyModeMethodFilter component

**File:** `ReadOnlyModeMethodFilter.php`

**Architectural Issues:** 1 violations detected

---

#### Rearrange

**Purpose:** Rearrange component

**File:** `Rearrange.php`

**Architectural Issues:** 1 violations detected

---

#### RearrangeFilter

**Purpose:** RearrangeFilter component

**File:** `RearrangeFilter.php`

**Architectural Issues:** 1 violations detected

---

#### RebuildPermissionsForm

**Purpose:** Form handling for RebuildPermissions

**File:** `RebuildPermissionsForm.php`

**Architectural Issues:** 1 violations detected

---

#### RecursiveValidatorFactory

**Purpose:** RecursiveValidatorFactory component

**File:** `RecursiveValidatorFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ReferenceBase

**Purpose:** ReferenceBase component

**File:** `ReferenceBase.php`

**Architectural Issues:** 1 violations detected

---

#### RegionalForm

**Purpose:** Form handling for Regional

**File:** `RegionalForm.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterAccessCheck

**Purpose:** RegisterAccessCheck component

**File:** `RegisterAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterEntityResolversCompilerPass

**Purpose:** RegisterEntityResolversCompilerPass component

**File:** `RegisterEntityResolversCompilerPass.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterForm

**Purpose:** Form handling for Register

**File:** `RegisterForm.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterSerializationClassesCompilerPass

**Purpose:** RegisterSerializationClassesCompilerPass component

**File:** `RegisterSerializationClassesCompilerPass.php`

**Architectural Issues:** 2 violations detected

---

#### ReindexConfirm

**Purpose:** ReindexConfirm component

**File:** `ReindexConfirm.php`

**Architectural Issues:** 1 violations detected

---

#### Relationship

**Purpose:** Relationship component

**File:** `Relationship.php`

**Architectural Issues:** 1 violations detected

---

#### RelationshipData

**Purpose:** RelationshipData component

**File:** `RelationshipData.php`

**Architectural Issues:** 1 violations detected

---

#### RelationshipNormalizer

**Purpose:** RelationshipNormalizer component

**File:** `RelationshipNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### RelationshipPluginBase

**Purpose:** RelationshipPluginBase component

**File:** `RelationshipPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### RelationshipRouteAccessCheck

**Purpose:** RelationshipRouteAccessCheck component

**File:** `RelationshipRouteAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveBlockForm

**Purpose:** Form handling for RemoveBlock

**File:** `RemoveBlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveRoleUser

**Purpose:** RemoveRoleUser component

**File:** `RemoveRoleUser.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveSectionForm

**Purpose:** Form handling for RemoveSection

**File:** `RemoveSectionForm.php`

**Architectural Issues:** 1 violations detected

---

#### RenderCallbacks

**Purpose:** RenderCallbacks component

**File:** `RenderCallbacks.php`

**Architectural Issues:** 2 violations detected

---

#### RenderElementHelper

**Purpose:** RenderElementHelper component

**File:** `RenderElementHelper.php`

**Architectural Issues:** 1 violations detected

---

#### RenderedEntity

**Purpose:** RenderedEntity component

**File:** `RenderedEntity.php`

**Architectural Issues:** 1 violations detected

---

#### RendererBase

**Purpose:** RendererBase component

**File:** `RendererBase.php`

**Architectural Issues:** 1 violations detected

---

#### ReorderDisplays

**Purpose:** ReorderDisplays component

**File:** `ReorderDisplays.php`

**Architectural Issues:** 1 violations detected

---

#### ReplaceTitleCommand

**Purpose:** ReplaceTitleCommand component

**File:** `ReplaceTitleCommand.php`

**Architectural Issues:** 1 violations detected

---

#### RequestHandler

**Purpose:** Handles requests for Request

**File:** `RequestHandler.php`

**Architectural Issues:** 1 violations detected

---

#### RequestPath

**Purpose:** RequestPath component

**File:** `RequestPath.php`

**Architectural Issues:** 1 violations detected

---

#### RequiredStateMissingException

**Purpose:** RequiredStateMissingException component

**File:** `RequiredStateMissingException.php`

**Architectural Issues:** 1 violations detected

---

#### RequirementsException

**Purpose:** RequirementsException component

**File:** `RequirementsException.php`

**Architectural Issues:** 1 violations detected

---

#### RequirementsInterface

**Purpose:** RequirementsInterface component

**File:** `RequirementsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RequirementsTrait

**Purpose:** RequirementsTrait component

**File:** `RequirementsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Resize

**Purpose:** Resize component

**File:** `Resize.php`

**Architectural Issues:** 1 violations detected

---

#### ResizeImageEffect

**Purpose:** ResizeImageEffect component

**File:** `ResizeImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### Resource

**Purpose:** Resource component

**File:** `Resource.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceBase

**Purpose:** ResourceBase component

**File:** `ResourceBase.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceException

**Purpose:** ResourceException component

**File:** `ResourceException.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceFetcher

**Purpose:** ResourceFetcher component

**File:** `ResourceFetcher.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceFetcherInterface

**Purpose:** ResourceFetcherInterface component

**File:** `ResourceFetcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceIdentifier

**Purpose:** ResourceIdentifier component

**File:** `ResourceIdentifier.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceIdentifierInterface

**Purpose:** ResourceIdentifierInterface component

**File:** `ResourceIdentifierInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceIdentifierNormalizer

**Purpose:** ResourceIdentifierNormalizer component

**File:** `ResourceIdentifierNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceIdentifierTrait

**Purpose:** ResourceIdentifierTrait component

**File:** `ResourceIdentifierTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceInterface

**Purpose:** ResourceInterface component

**File:** `ResourceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceObject

**Purpose:** ResourceObject component

**File:** `ResourceObject.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceObjectData

**Purpose:** ResourceObjectData component

**File:** `ResourceObjectData.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceObjectNormalizationCacher

**Purpose:** ResourceObjectNormalizationCacher component

**File:** `ResourceObjectNormalizationCacher.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceObjectNormalizer

**Purpose:** ResourceObjectNormalizer component

**File:** `ResourceObjectNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### ResourcePluginManager

**Purpose:** Manages ResourcePlugin operations

**File:** `ResourcePluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceResponse

**Purpose:** ResourceResponse component

**File:** `ResourceResponse.php`

**Architectural Issues:** 2 violations detected

---

#### ResourceResponseInterface

**Purpose:** ResourceResponseInterface component

**File:** `ResourceResponseInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceResponseSubscriber

**Purpose:** ResourceResponseSubscriber component

**File:** `ResourceResponseSubscriber.php`

**Architectural Issues:** 2 violations detected

---

#### ResourceResponseTrait

**Purpose:** ResourceResponseTrait component

**File:** `ResourceResponseTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceResponseValidator

**Purpose:** ResourceResponseValidator component

**File:** `ResourceResponseValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceRoutes

**Purpose:** ResourceRoutes component

**File:** `ResourceRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceType

**Purpose:** ResourceType component

**File:** `ResourceType.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeAttribute

**Purpose:** ResourceTypeAttribute component

**File:** `ResourceTypeAttribute.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeBuildEvent

**Purpose:** ResourceTypeBuildEvent component

**File:** `ResourceTypeBuildEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeBuildEvents

**Purpose:** ResourceTypeBuildEvents component

**File:** `ResourceTypeBuildEvents.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeConverter

**Purpose:** ResourceTypeConverter component

**File:** `ResourceTypeConverter.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeField

**Purpose:** ResourceTypeField component

**File:** `ResourceTypeField.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeRelationship

**Purpose:** ResourceTypeRelationship component

**File:** `ResourceTypeRelationship.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeRepository

**Purpose:** ResourceTypeRepository component

**File:** `ResourceTypeRepository.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceTypeRepositoryInterface

**Purpose:** ResourceTypeRepositoryInterface component

**File:** `ResourceTypeRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceVersionRouteEnhancer

**Purpose:** ResourceVersionRouteEnhancer component

**File:** `ResourceVersionRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseDisplayPluginInterface

**Purpose:** ResponseDisplayPluginInterface component

**File:** `ResponseDisplayPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseStatus

**Purpose:** ResponseStatus component

**File:** `ResponseStatus.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImage

**Purpose:** ResponsiveImage component

**File:** `ResponsiveImage.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageBuilder

**Purpose:** ResponsiveImageBuilder component

**File:** `ResponsiveImageBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageFormatter

**Purpose:** Form handling for ResponsiveImageatter

**File:** `ResponsiveImageFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageHooks

**Purpose:** ResponsiveImageHooks component

**File:** `ResponsiveImageHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageStyle

**Purpose:** ResponsiveImageStyle component

**File:** `ResponsiveImageStyle.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageStyleForm

**Purpose:** Form handling for ResponsiveImageStyle

**File:** `ResponsiveImageStyleForm.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageStyleInterface

**Purpose:** ResponsiveImageStyleInterface component

**File:** `ResponsiveImageStyleInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageStyleListBuilder

**Purpose:** ResponsiveImageStyleListBuilder component

**File:** `ResponsiveImageStyleListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageStyles

**Purpose:** ResponsiveImageStyles component

**File:** `ResponsiveImageStyles.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsiveImageThemeHooks

**Purpose:** ResponsiveImageThemeHooks component

**File:** `ResponsiveImageThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### RestExport

**Purpose:** RestExport component

**File:** `RestExport.php`

**Architectural Issues:** 1 violations detected

---

#### RestHooks

**Purpose:** RestHooks component

**File:** `RestHooks.php`

**Architectural Issues:** 1 violations detected

---

#### RestPermissions

**Purpose:** RestPermissions component

**File:** `RestPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### RestResource

**Purpose:** RestResource component

**File:** `RestResource.php`

**Architectural Issues:** 2 violations detected

---

#### RestResourceConfig

**Purpose:** RestResourceConfig component

**File:** `RestResourceConfig.php`

**Architectural Issues:** 1 violations detected

---

#### RestResourceConfigInterface

**Purpose:** RestResourceConfigInterface component

**File:** `RestResourceConfigInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Result

**Purpose:** Result component

**File:** `Result.php`

**Architectural Issues:** 2 violations detected

---

#### ResultRow

**Purpose:** ResultRow component

**File:** `ResultRow.php`

**Architectural Issues:** 1 violations detected

---

#### RevertOverridesForm

**Purpose:** Form handling for RevertOverrides

**File:** `RevertOverridesForm.php`

**Architectural Issues:** 1 violations detected

---

#### ReviewForm

**Purpose:** Form handling for Review

**File:** `ReviewForm.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionLink

**Purpose:** RevisionLink component

**File:** `RevisionLink.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionLinkDelete

**Purpose:** RevisionLinkDelete component

**File:** `RevisionLinkDelete.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionLinkRevert

**Purpose:** RevisionLinkRevert component

**File:** `RevisionLinkRevert.php`

**Architectural Issues:** 1 violations detected

---

#### Role

**Purpose:** Role component

**File:** `Role.php`

**Architectural Issues:** 4 violations detected

---

#### RoleAccessCheck

**Purpose:** RoleAccessCheck component

**File:** `RoleAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### RoleAccessControlHandler

**Purpose:** Handles requests for RoleAccessControl

**File:** `RoleAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### RoleExistsConstraint

**Purpose:** RoleExistsConstraint component

**File:** `RoleExistsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### RoleExistsConstraintValidator

**Purpose:** RoleExistsConstraintValidator component

**File:** `RoleExistsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RoleForm

**Purpose:** Form handling for Role

**File:** `RoleForm.php`

**Architectural Issues:** 1 violations detected

---

#### RoleInterface

**Purpose:** RoleInterface component

**File:** `RoleInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RoleListBuilder

**Purpose:** RoleListBuilder component

**File:** `RoleListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### RoleSettingsForm

**Purpose:** Form handling for RoleSettings

**File:** `RoleSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### RoleStorage

**Purpose:** RoleStorage component

**File:** `RoleStorage.php`

**Architectural Issues:** 1 violations detected

---

#### RoleStorageInterface

**Purpose:** RoleStorageInterface component

**File:** `RoleStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Roles

**Purpose:** Roles component

**File:** `Roles.php`

**Architectural Issues:** 2 violations detected

---

#### RolesLookup

**Purpose:** RolesLookup component

**File:** `RolesLookup.php`

**Architectural Issues:** 1 violations detected

---

#### RolesRid

**Purpose:** RolesRid component

**File:** `RolesRid.php`

**Architectural Issues:** 1 violations detected

---

#### RollbackAwareInterface

**Purpose:** RollbackAwareInterface component

**File:** `RollbackAwareInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Rotate

**Purpose:** Rotate component

**File:** `Rotate.php`

**Architectural Issues:** 1 violations detected

---

#### RotateImageEffect

**Purpose:** RotateImageEffect component

**File:** `RotateImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### Route

**Purpose:** Route component

**File:** `Route.php`

**Architectural Issues:** 1 violations detected

---

#### RouteEnhancer

**Purpose:** RouteEnhancer component

**File:** `RouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### RouteSubscriber

**Purpose:** RouteSubscriber component

**File:** `RouteSubscriber.php`

**Architectural Issues:** 7 violations detected

---

#### Routes

**Purpose:** Routes component

**File:** `Routes.php`

**Architectural Issues:** 1 violations detected

---

#### Row

**Purpose:** Row component

**File:** `Row.php`

**Architectural Issues:** 1 violations detected

---

#### RowPluginBase

**Purpose:** RowPluginBase component

**File:** `RowPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### Rss

**Purpose:** Rss component

**File:** `Rss.php`

**Architectural Issues:** 3 violations detected

---

#### RssFields

**Purpose:** RssFields component

**File:** `RssFields.php`

**Architectural Issues:** 1 violations detected

---

#### RssPluginBase

**Purpose:** RssPluginBase component

**File:** `RssPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### RsyncValidator

**Purpose:** RsyncValidator component

**File:** `RsyncValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SampleEntityGeneratorInterface

**Purpose:** SampleEntityGeneratorInterface component

**File:** `SampleEntityGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxDatabaseUpdatesValidator

**Purpose:** SandboxDatabaseUpdatesValidator component

**File:** `SandboxDatabaseUpdatesValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxDirectoryValidator

**Purpose:** SandboxDirectoryValidator component

**File:** `SandboxDirectoryValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxEvent

**Purpose:** SandboxEvent component

**File:** `SandboxEvent.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxEventException

**Purpose:** SandboxEventException component

**File:** `SandboxEventException.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxException

**Purpose:** SandboxException component

**File:** `SandboxException.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxManagerBase

**Purpose:** Manages SandboxBase operations

**File:** `SandboxManagerBase.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxOwnershipException

**Purpose:** SandboxOwnershipException component

**File:** `SandboxOwnershipException.php`

**Architectural Issues:** 1 violations detected

---

#### SandboxValidationEvent

**Purpose:** SandboxValidationEvent component

**File:** `SandboxValidationEvent.php`

**Architectural Issues:** 1 violations detected

---

#### Scale

**Purpose:** Scale component

**File:** `Scale.php`

**Architectural Issues:** 1 violations detected

---

#### ScaleAndCrop

**Purpose:** ScaleAndCrop component

**File:** `ScaleAndCrop.php`

**Architectural Issues:** 1 violations detected

---

#### ScaleAndCropImageEffect

**Purpose:** ScaleAndCropImageEffect component

**File:** `ScaleAndCropImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### ScaleImageEffect

**Purpose:** ScaleImageEffect component

**File:** `ScaleImageEffect.php`

**Architectural Issues:** 1 violations detected

---

#### Schema

**Purpose:** Schema component

**File:** `Schema.php`

**Architectural Issues:** 3 violations detected

---

#### SchematicNormalizerFallbackTrait

**Purpose:** SchematicNormalizerFallbackTrait component

**File:** `SchematicNormalizerFallbackTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SchematicNormalizerHelperTrait

**Purpose:** SchematicNormalizerHelperTrait component

**File:** `SchematicNormalizerHelperTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SchematicNormalizerTrait

**Purpose:** SchematicNormalizerTrait component

**File:** `SchematicNormalizerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Score

**Purpose:** Score component

**File:** `Score.php`

**Architectural Issues:** 2 violations detected

---

#### Search

**Purpose:** Search component

**File:** `Search.php`

**Architectural Issues:** 3 violations detected

---

#### SearchBlock

**Purpose:** SearchBlock component

**File:** `SearchBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SearchBlockForm

**Purpose:** Form handling for SearchBlock

**File:** `SearchBlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### SearchConfigurationRankings

**Purpose:** SearchConfigurationRankings component

**File:** `SearchConfigurationRankings.php`

**Architectural Issues:** 1 violations detected

---

#### SearchController

**Purpose:** Controls Search operations

**File:** `SearchController.php`

**Architectural Issues:** 1 violations detected

---

#### SearchHooks

**Purpose:** SearchHooks component

**File:** `SearchHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SearchIndex

**Purpose:** SearchIndex component

**File:** `SearchIndex.php`

**Architectural Issues:** 1 violations detected

---

#### SearchIndexException

**Purpose:** SearchIndexException component

**File:** `SearchIndexException.php`

**Architectural Issues:** 1 violations detected

---

#### SearchIndexInterface

**Purpose:** SearchIndexInterface component

**File:** `SearchIndexInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchIndexingInterface

**Purpose:** SearchIndexingInterface component

**File:** `SearchIndexingInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchInterface

**Purpose:** SearchInterface component

**File:** `SearchInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchLocalTask

**Purpose:** SearchLocalTask component

**File:** `SearchLocalTask.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPage

**Purpose:** SearchPage component

**File:** `SearchPage.php`

**Architectural Issues:** 3 violations detected

---

#### SearchPageAccessControlHandler

**Purpose:** Handles requests for SearchPageAccessControl

**File:** `SearchPageAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageAddForm

**Purpose:** Form handling for SearchPageAdd

**File:** `SearchPageAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageEditForm

**Purpose:** Form handling for SearchPageEdit

**File:** `SearchPageEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageForm

**Purpose:** Form handling for SearchPage

**File:** `SearchPageForm.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageFormBase

**Purpose:** Form handling for SearchPageBase

**File:** `SearchPageFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageInterface

**Purpose:** SearchPageInterface component

**File:** `SearchPageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageListBuilder

**Purpose:** SearchPageListBuilder component

**File:** `SearchPageListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageRepository

**Purpose:** SearchPageRepository component

**File:** `SearchPageRepository.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageRepositoryInterface

**Purpose:** SearchPageRepositoryInterface component

**File:** `SearchPageRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPageRoutes

**Purpose:** SearchPageRoutes component

**File:** `SearchPageRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPlugin

**Purpose:** SearchPlugin component

**File:** `SearchPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPluginBase

**Purpose:** SearchPluginBase component

**File:** `SearchPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPluginCollection

**Purpose:** SearchPluginCollection component

**File:** `SearchPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### SearchPluginManager

**Purpose:** Manages SearchPlugin operations

**File:** `SearchPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### SearchQuery

**Purpose:** SearchQuery component

**File:** `SearchQuery.php`

**Architectural Issues:** 1 violations detected

---

#### SearchRequirements

**Purpose:** SearchRequirements component

**File:** `SearchRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### SearchRow

**Purpose:** SearchRow component

**File:** `SearchRow.php`

**Architectural Issues:** 1 violations detected

---

#### SearchTextProcessor

**Purpose:** SearchTextProcessor component

**File:** `SearchTextProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### SearchTextProcessorInterface

**Purpose:** SearchTextProcessorInterface component

**File:** `SearchTextProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SearchThemeHooks

**Purpose:** SearchThemeHooks component

**File:** `SearchThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SearchableHelpInterface

**Purpose:** SearchableHelpInterface component

**File:** `SearchableHelpInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Section

**Purpose:** Section component

**File:** `Section.php`

**Architectural Issues:** 1 violations detected

---

#### SectionComponent

**Purpose:** SectionComponent component

**File:** `SectionComponent.php`

**Architectural Issues:** 1 violations detected

---

#### SectionComponentBuildRenderArrayEvent

**Purpose:** SectionComponentBuildRenderArrayEvent component

**File:** `SectionComponentBuildRenderArrayEvent.php`

**Architectural Issues:** 1 violations detected

---

#### SectionData

**Purpose:** SectionData component

**File:** `SectionData.php`

**Architectural Issues:** 1 violations detected

---

#### SectionListInterface

**Purpose:** SectionListInterface component

**File:** `SectionListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SectionListTrait

**Purpose:** SectionListTrait component

**File:** `SectionListTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorage

**Purpose:** SectionStorage component

**File:** `SectionStorage.php`

**Architectural Issues:** 2 violations detected

---

#### SectionStorageBase

**Purpose:** SectionStorageBase component

**File:** `SectionStorageBase.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorageDefinition

**Purpose:** SectionStorageDefinition component

**File:** `SectionStorageDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorageInterface

**Purpose:** SectionStorageInterface component

**File:** `SectionStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorageLocalTaskProviderInterface

**Purpose:** SectionStorageLocalTaskProviderInterface component

**File:** `SectionStorageLocalTaskProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorageManager

**Purpose:** Manages SectionStorage operations

**File:** `SectionStorageManager.php`

**Architectural Issues:** 1 violations detected

---

#### SectionStorageManagerInterface

**Purpose:** Manages SectionStorageInterface operations

**File:** `SectionStorageManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SecurityAdvisoriesFetcher

**Purpose:** SecurityAdvisoriesFetcher component

**File:** `SecurityAdvisoriesFetcher.php`

**Architectural Issues:** 1 violations detected

---

#### SecurityAdvisory

**Purpose:** SecurityAdvisory component

**File:** `SecurityAdvisory.php`

**Architectural Issues:** 1 violations detected

---

#### SecurityFileUploadEventSubscriber

**Purpose:** SecurityFileUploadEventSubscriber component

**File:** `SecurityFileUploadEventSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### Select

**Purpose:** Select component

**File:** `Select.php`

**Architectural Issues:** 3 violations detected

---

#### SerializationHooks

**Purpose:** SerializationHooks component

**File:** `SerializationHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SerializationServiceProvider

**Purpose:** Service for SerializationProvider

**File:** `SerializationServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### Serialized

**Purpose:** Serialized component

**File:** `Serialized.php`

**Architectural Issues:** 1 violations detected

---

#### SerializedColumnNormalizerTrait

**Purpose:** SerializedColumnNormalizerTrait component

**File:** `SerializedColumnNormalizerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Serializer

**Purpose:** Serializer component

**File:** `Serializer.php`

**Architectural Issues:** 3 violations detected

---

#### SessionWorkspaceNegotiator

**Purpose:** SessionWorkspaceNegotiator component

**File:** `SessionWorkspaceNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### SetCustomize

**Purpose:** SetCustomize component

**File:** `SetCustomize.php`

**Architectural Issues:** 1 violations detected

---

#### SetFormCommand

**Purpose:** Form handling for SetCommand

**File:** `SetFormCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SetInlineBlockDependency

**Purpose:** SetInlineBlockDependency component

**File:** `SetInlineBlockDependency.php`

**Architectural Issues:** 1 violations detected

---

#### SetSubtreesCommand

**Purpose:** SetSubtreesCommand component

**File:** `SetSubtreesCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SettingsForm

**Purpose:** Form handling for Settings

**File:** `SettingsForm.php`

**Architectural Issues:** 2 violations detected

---

#### SettingsTrayHooks

**Purpose:** SettingsTrayHooks component

**File:** `SettingsTrayHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SettingsTrayThemeHooks

**Purpose:** SettingsTrayThemeHooks component

**File:** `SettingsTrayThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SettingsValidator

**Purpose:** SettingsValidator component

**File:** `SettingsValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Shortcut

**Purpose:** Shortcut component

**File:** `Shortcut.php`

**Architectural Issues:** 2 violations detected

---

#### ShortcutAccessControlHandler

**Purpose:** Handles requests for ShortcutAccessControl

**File:** `ShortcutAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutController

**Purpose:** Controls Shortcut operations

**File:** `ShortcutController.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutDeleteForm

**Purpose:** Form handling for ShortcutDelete

**File:** `ShortcutDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutForm

**Purpose:** Form handling for Shortcut

**File:** `ShortcutForm.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutHooks

**Purpose:** ShortcutHooks component

**File:** `ShortcutHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutInterface

**Purpose:** ShortcutInterface component

**File:** `ShortcutInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutLazyBuilder

**Purpose:** ShortcutLazyBuilder component

**File:** `ShortcutLazyBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutLazyBuilders

**Purpose:** ShortcutLazyBuilders component

**File:** `ShortcutLazyBuilders.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSet

**Purpose:** ShortcutSet component

**File:** `ShortcutSet.php`

**Architectural Issues:** 2 violations detected

---

#### ShortcutSetAccessControlHandler

**Purpose:** Handles requests for ShortcutSetAccessControl

**File:** `ShortcutSetAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetController

**Purpose:** Controls ShortcutSet operations

**File:** `ShortcutSetController.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetDeleteForm

**Purpose:** Form handling for ShortcutSetDelete

**File:** `ShortcutSetDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetForm

**Purpose:** Form handling for ShortcutSet

**File:** `ShortcutSetForm.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetInterface

**Purpose:** ShortcutSetInterface component

**File:** `ShortcutSetInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetListBuilder

**Purpose:** ShortcutSetListBuilder component

**File:** `ShortcutSetListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetStorage

**Purpose:** ShortcutSetStorage component

**File:** `ShortcutSetStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetStorageInterface

**Purpose:** ShortcutSetStorageInterface component

**File:** `ShortcutSetStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutSetUsers

**Purpose:** ShortcutSetUsers component

**File:** `ShortcutSetUsers.php`

**Architectural Issues:** 2 violations detected

---

#### ShortcutThemeHooks

**Purpose:** ShortcutThemeHooks component

**File:** `ShortcutThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ShortcutsBlock

**Purpose:** ShortcutsBlock component

**File:** `ShortcutsBlock.php`

**Architectural Issues:** 1 violations detected

---

#### ShowButtonsCommand

**Purpose:** ShowButtonsCommand component

**File:** `ShowButtonsCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SiteConfigurationExcluder

**Purpose:** SiteConfigurationExcluder component

**File:** `SiteConfigurationExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### SiteFilesExcluder

**Purpose:** SiteFilesExcluder component

**File:** `SiteFilesExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### SiteInformationForm

**Purpose:** Form handling for SiteInformation

**File:** `SiteInformationForm.php`

**Architectural Issues:** 1 violations detected

---

#### SiteMaintenanceModeForm

**Purpose:** Form handling for SiteMaintenanceMode

**File:** `SiteMaintenanceModeForm.php`

**Architectural Issues:** 1 violations detected

---

#### SkipOnEmpty

**Purpose:** SkipOnEmpty component

**File:** `SkipOnEmpty.php`

**Architectural Issues:** 1 violations detected

---

#### SkipRowIfNotSet

**Purpose:** SkipRowIfNotSet component

**File:** `SkipRowIfNotSet.php`

**Architectural Issues:** 1 violations detected

---

#### SmartDefaultSettings

**Purpose:** SmartDefaultSettings component

**File:** `SmartDefaultSettings.php`

**Architectural Issues:** 1 violations detected

---

#### Some

**Purpose:** Some component

**File:** `Some.php`

**Architectural Issues:** 1 violations detected

---

#### Sort

**Purpose:** Sort component

**File:** `Sort.php`

**Architectural Issues:** 1 violations detected

---

#### SortPluginBase

**Purpose:** SortPluginBase component

**File:** `SortPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### SourceEditing

**Purpose:** SourceEditing component

**File:** `SourceEditing.php`

**Architectural Issues:** 1 violations detected

---

#### SourceEditingPreventSelfXssConstraint

**Purpose:** SourceEditingPreventSelfXssConstraint component

**File:** `SourceEditingPreventSelfXssConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### SourceEditingPreventSelfXssConstraintValidator

**Purpose:** SourceEditingPreventSelfXssConstraintValidator component

**File:** `SourceEditingPreventSelfXssConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SourceEditingRedundantTagsConstraint

**Purpose:** SourceEditingRedundantTagsConstraint component

**File:** `SourceEditingRedundantTagsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### SourceEditingRedundantTagsConstraintValidator

**Purpose:** SourceEditingRedundantTagsConstraintValidator component

**File:** `SourceEditingRedundantTagsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SourcePluginBase

**Purpose:** SourcePluginBase component

**File:** `SourcePluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### SourceString

**Purpose:** SourceString component

**File:** `SourceString.php`

**Architectural Issues:** 1 violations detected

---

#### Sql

**Purpose:** Sql component

**File:** `Sql.php`

**Architectural Issues:** 2 violations detected

---

#### SqlBase

**Purpose:** SqlBase component

**File:** `SqlBase.php`

**Architectural Issues:** 2 violations detected

---

#### SqliteDatabaseExcluder

**Purpose:** SqliteDatabaseExcluder component

**File:** `SqliteDatabaseExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### SqliteDateSql

**Purpose:** SqliteDateSql component

**File:** `SqliteDateSql.php`

**Architectural Issues:** 1 violations detected

---

#### SqliteHooks

**Purpose:** SqliteHooks component

**File:** `SqliteHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Standard

**Purpose:** Standard component

**File:** `Standard.php`

**Architectural Issues:** 8 violations detected

---

#### State

**Purpose:** State component

**File:** `State.php`

**Architectural Issues:** 1 violations detected

---

#### StateInterface

**Purpose:** StateInterface component

**File:** `StateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StateTransitionValidation

**Purpose:** StateTransitionValidation component

**File:** `StateTransitionValidation.php`

**Architectural Issues:** 1 violations detected

---

#### StateTransitionValidationInterface

**Purpose:** StateTransitionValidationInterface component

**File:** `StateTransitionValidationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Statement

**Purpose:** Statement component

**File:** `Statement.php`

**Architectural Issues:** 2 violations detected

---

#### StaticMap

**Purpose:** StaticMap component

**File:** `StaticMap.php`

**Architectural Issues:** 1 violations detected

---

#### StaticReflectionParser

**Purpose:** StaticReflectionParser component

**File:** `StaticReflectionParser.php`

**Architectural Issues:** 1 violations detected

---

#### StatisticsLastCommentName

**Purpose:** StatisticsLastCommentName component

**File:** `StatisticsLastCommentName.php`

**Architectural Issues:** 2 violations detected

---

#### StatisticsLastUpdated

**Purpose:** StatisticsLastUpdated component

**File:** `StatisticsLastUpdated.php`

**Architectural Issues:** 3 violations detected

---

#### Status

**Purpose:** Status component

**File:** `Status.php`

**Architectural Issues:** 3 violations detected

---

#### StatusCheckEvent

**Purpose:** StatusCheckEvent component

**File:** `StatusCheckEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StatusCheckTrait

**Purpose:** StatusCheckTrait component

**File:** `StatusCheckTrait.php`

**Architectural Issues:** 1 violations detected

---

#### StatusItem

**Purpose:** StatusItem component

**File:** `StatusItem.php`

**Architectural Issues:** 1 violations detected

---

#### StatusReportPage

**Purpose:** StatusReportPage component

**File:** `StatusReportPage.php`

**Architectural Issues:** 1 violations detected

---

#### StickyNode

**Purpose:** StickyNode component

**File:** `StickyNode.php`

**Architectural Issues:** 1 violations detected

---

#### StorageReplaceDataWrapper

**Purpose:** StorageReplaceDataWrapper component

**File:** `StorageReplaceDataWrapper.php`

**Architectural Issues:** 1 violations detected

---

#### StringArgument

**Purpose:** StringArgument component

**File:** `StringArgument.php`

**Architectural Issues:** 1 violations detected

---

#### StringBase

**Purpose:** StringBase component

**File:** `StringBase.php`

**Architectural Issues:** 1 violations detected

---

#### StringDatabaseStorage

**Purpose:** StringDatabaseStorage component

**File:** `StringDatabaseStorage.php`

**Architectural Issues:** 1 violations detected

---

#### StringFilter

**Purpose:** StringFilter component

**File:** `StringFilter.php`

**Architectural Issues:** 1 violations detected

---

#### StringInterface

**Purpose:** StringInterface component

**File:** `StringInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StringListField

**Purpose:** StringListField component

**File:** `StringListField.php`

**Architectural Issues:** 1 violations detected

---

#### StringStorageException

**Purpose:** StringStorageException component

**File:** `StringStorageException.php`

**Architectural Issues:** 1 violations detected

---

#### StringStorageInterface

**Purpose:** StringStorageInterface component

**File:** `StringStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Style

**Purpose:** Style component

**File:** `Style.php`

**Architectural Issues:** 1 violations detected

---

#### StylePluginBase

**Purpose:** StylePluginBase component

**File:** `StylePluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### StyleSensibleElementConstraint

**Purpose:** StyleSensibleElementConstraint component

**File:** `StyleSensibleElementConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### StyleSensibleElementConstraintValidator

**Purpose:** StyleSensibleElementConstraintValidator component

**File:** `StyleSensibleElementConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SubProcess

**Purpose:** SubProcess component

**File:** `SubProcess.php`

**Architectural Issues:** 1 violations detected

---

#### Subquery

**Purpose:** Subquery component

**File:** `Subquery.php`

**Architectural Issues:** 1 violations detected

---

#### Substr

**Purpose:** Substr component

**File:** `Substr.php`

**Architectural Issues:** 1 violations detected

---

#### SupportedReleaseValidator

**Purpose:** SupportedReleaseValidator component

**File:** `SupportedReleaseValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SwitchShortcutSet

**Purpose:** SwitchShortcutSet component

**File:** `SwitchShortcutSet.php`

**Architectural Issues:** 1 violations detected

---

#### SwitchToLiveForm

**Purpose:** Form handling for SwitchToLive

**File:** `SwitchToLiveForm.php`

**Architectural Issues:** 1 violations detected

---

#### SymlinkValidator

**Purpose:** SymlinkValidator component

**File:** `SymlinkValidator.php`

**Architectural Issues:** 1 violations detected

---

#### SyndicateBlock

**Purpose:** SyndicateBlock component

**File:** `SyndicateBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SysLog

**Purpose:** SysLog component

**File:** `SysLog.php`

**Architectural Issues:** 1 violations detected

---

#### SyslogHooks

**Purpose:** SyslogHooks component

**File:** `SyslogHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SystemAdminMenuBlockAccessCheck

**Purpose:** SystemAdminMenuBlockAccessCheck component

**File:** `SystemAdminMenuBlockAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### SystemAdminThemePreprocess

**Purpose:** SystemAdminThemePreprocess component

**File:** `SystemAdminThemePreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### SystemBrandingBlock

**Purpose:** SystemBrandingBlock component

**File:** `SystemBrandingBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemBrandingOffCanvasForm

**Purpose:** Form handling for SystemBrandingOffCanvas

**File:** `SystemBrandingOffCanvasForm.php`

**Architectural Issues:** 1 violations detected

---

#### SystemBreadcrumbBlock

**Purpose:** SystemBreadcrumbBlock component

**File:** `SystemBreadcrumbBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemConfigSubscriber

**Purpose:** SystemConfigSubscriber component

**File:** `SystemConfigSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### SystemController

**Purpose:** Controls System operations

**File:** `SystemController.php`

**Architectural Issues:** 1 violations detected

---

#### SystemHooks

**Purpose:** SystemHooks component

**File:** `SystemHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SystemInfoController

**Purpose:** Controls SystemInfo operations

**File:** `SystemInfoController.php`

**Architectural Issues:** 1 violations detected

---

#### SystemMainBlock

**Purpose:** SystemMainBlock component

**File:** `SystemMainBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemManager

**Purpose:** Manages System operations

**File:** `SystemManager.php`

**Architectural Issues:** 1 violations detected

---

#### SystemMenuBlock

**Purpose:** SystemMenuBlock component

**File:** `SystemMenuBlock.php`

**Architectural Issues:** 2 violations detected

---

#### SystemMenuNavigationBlock

**Purpose:** SystemMenuNavigationBlock component

**File:** `SystemMenuNavigationBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemMenuOffCanvasForm

**Purpose:** Form handling for SystemMenuOffCanvas

**File:** `SystemMenuOffCanvasForm.php`

**Architectural Issues:** 1 violations detected

---

#### SystemMessagesBlock

**Purpose:** SystemMessagesBlock component

**File:** `SystemMessagesBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemPoweredByBlock

**Purpose:** SystemPoweredByBlock component

**File:** `SystemPoweredByBlock.php`

**Architectural Issues:** 1 violations detected

---

#### SystemRequirements

**Purpose:** SystemRequirements component

**File:** `SystemRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### SystemRequirementsHooks

**Purpose:** SystemRequirementsHooks component

**File:** `SystemRequirementsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SystemThemeHooks

**Purpose:** SystemThemeHooks component

**File:** `SystemThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SystemTokensHooks

**Purpose:** SystemTokensHooks component

**File:** `SystemTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### SystemUpdate7000

**Purpose:** SystemUpdate7000 component

**File:** `SystemUpdate7000.php`

**Architectural Issues:** 1 violations detected

---

#### Table

**Purpose:** Table component

**File:** `Table.php`

**Architectural Issues:** 1 violations detected

---

#### TableFormatter

**Purpose:** Form handling for Tableatter

**File:** `TableFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### Tables

**Purpose:** Tables component

**File:** `Tables.php`

**Architectural Issues:** 1 violations detected

---

#### Tag

**Purpose:** Tag component

**File:** `Tag.php`

**Architectural Issues:** 1 violations detected

---

#### Tar

**Purpose:** Tar component

**File:** `Tar.php`

**Architectural Issues:** 1 violations detected

---

#### TargetBundle

**Purpose:** TargetBundle component

**File:** `TargetBundle.php`

**Architectural Issues:** 1 violations detected

---

#### TargetIdResolver

**Purpose:** TargetIdResolver component

**File:** `TargetIdResolver.php`

**Architectural Issues:** 1 violations detected

---

#### Tasks

**Purpose:** Tasks component

**File:** `Tasks.php`

**Architectural Issues:** 4 violations detected

---

#### Taxonomy

**Purpose:** Taxonomy component

**File:** `Taxonomy.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyController

**Purpose:** Controls Taxonomy operations

**File:** `TaxonomyController.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyHooks

**Purpose:** TaxonomyHooks component

**File:** `TaxonomyHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyIndexDepthQueryTrait

**Purpose:** TaxonomyIndexDepthQueryTrait component

**File:** `TaxonomyIndexDepthQueryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyIndexTid

**Purpose:** TaxonomyIndexTid component

**File:** `TaxonomyIndexTid.php`

**Architectural Issues:** 2 violations detected

---

#### TaxonomyIndexTidDepth

**Purpose:** TaxonomyIndexTidDepth component

**File:** `TaxonomyIndexTidDepth.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyPermissions

**Purpose:** TaxonomyPermissions component

**File:** `TaxonomyPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTerm

**Purpose:** TaxonomyTerm component

**File:** `TaxonomyTerm.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTermHierarchyConstraint

**Purpose:** TaxonomyTermHierarchyConstraint component

**File:** `TaxonomyTermHierarchyConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTermHierarchyConstraintValidator

**Purpose:** TaxonomyTermHierarchyConstraintValidator component

**File:** `TaxonomyTermHierarchyConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTermModerationHandler

**Purpose:** Handles requests for TaxonomyTermModeration

**File:** `TaxonomyTermModerationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTermReference

**Purpose:** TaxonomyTermReference component

**File:** `TaxonomyTermReference.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyThemeHooks

**Purpose:** TaxonomyThemeHooks component

**File:** `TaxonomyThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyTokensHooks

**Purpose:** TaxonomyTokensHooks component

**File:** `TaxonomyTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TaxonomyViewsHooks

**Purpose:** TaxonomyViewsHooks component

**File:** `TaxonomyViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TelephoneDefaultWidget

**Purpose:** TelephoneDefaultWidget component

**File:** `TelephoneDefaultWidget.php`

**Architectural Issues:** 1 violations detected

---

#### TelephoneField

**Purpose:** TelephoneField component

**File:** `TelephoneField.php`

**Architectural Issues:** 1 violations detected

---

#### TelephoneHooks

**Purpose:** TelephoneHooks component

**File:** `TelephoneHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TelephoneItem

**Purpose:** TelephoneItem component

**File:** `TelephoneItem.php`

**Architectural Issues:** 1 violations detected

---

#### TelephoneLinkFormatter

**Purpose:** Form handling for TelephoneLinkatter

**File:** `TelephoneLinkFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TempStoreIdentifierInterface

**Purpose:** TempStoreIdentifierInterface component

**File:** `TempStoreIdentifierInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TemporaryArrayObjectThrowingExceptions

**Purpose:** TemporaryArrayObjectThrowingExceptions component

**File:** `TemporaryArrayObjectThrowingExceptions.php`

**Architectural Issues:** 1 violations detected

---

#### TemporaryQueryGuard

**Purpose:** TemporaryQueryGuard component

**File:** `TemporaryQueryGuard.php`

**Architectural Issues:** 1 violations detected

---

#### Term

**Purpose:** Term component

**File:** `Term.php`

**Architectural Issues:** 3 violations detected

---

#### TermAccessControlHandler

**Purpose:** Handles requests for TermAccessControl

**File:** `TermAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### TermBreadcrumbBuilder

**Purpose:** TermBreadcrumbBuilder component

**File:** `TermBreadcrumbBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### TermDeleteForm

**Purpose:** Form handling for TermDelete

**File:** `TermDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### TermEntityTranslation

**Purpose:** TermEntityTranslation component

**File:** `TermEntityTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### TermForm

**Purpose:** Form handling for Term

**File:** `TermForm.php`

**Architectural Issues:** 1 violations detected

---

#### TermInterface

**Purpose:** TermInterface component

**File:** `TermInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TermLocalizedTranslation

**Purpose:** TermLocalizedTranslation component

**File:** `TermLocalizedTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### TermName

**Purpose:** TermName component

**File:** `TermName.php`

**Architectural Issues:** 2 violations detected

---

#### TermNode

**Purpose:** TermNode component

**File:** `TermNode.php`

**Architectural Issues:** 1 violations detected

---

#### TermNodeRevision

**Purpose:** TermNodeRevision component

**File:** `TermNodeRevision.php`

**Architectural Issues:** 1 violations detected

---

#### TermRouteContext

**Purpose:** TermRouteContext component

**File:** `TermRouteContext.php`

**Architectural Issues:** 1 violations detected

---

#### TermSelection

**Purpose:** TermSelection component

**File:** `TermSelection.php`

**Architectural Issues:** 1 violations detected

---

#### TermStorage

**Purpose:** TermStorage component

**File:** `TermStorage.php`

**Architectural Issues:** 1 violations detected

---

#### TermStorageInterface

**Purpose:** TermStorageInterface component

**File:** `TermStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TermStorageSchema

**Purpose:** TermStorageSchema component

**File:** `TermStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### TermTranslation

**Purpose:** TermTranslation component

**File:** `TermTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### TermTranslationHandler

**Purpose:** Handles requests for TermTranslation

**File:** `TermTranslationHandler.php`

**Architectural Issues:** 1 violations detected

---

#### TermViewsData

**Purpose:** TermViewsData component

**File:** `TermViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### Text

**Purpose:** Text component

**File:** `Text.php`

**Architectural Issues:** 1 violations detected

---

#### TextCustom

**Purpose:** TextCustom component

**File:** `TextCustom.php`

**Architectural Issues:** 1 violations detected

---

#### TextDefaultFormatter

**Purpose:** Form handling for TextDefaultatter

**File:** `TextDefaultFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TextEditorObjectDependentValidatorTrait

**Purpose:** TextEditorObjectDependentValidatorTrait component

**File:** `TextEditorObjectDependentValidatorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### TextField

**Purpose:** TextField component

**File:** `TextField.php`

**Architectural Issues:** 2 violations detected

---

#### TextFieldItemList

**Purpose:** TextFieldItemList component

**File:** `TextFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### TextFormat

**Purpose:** Form handling for Textat

**File:** `TextFormat.php`

**Architectural Issues:** 2 violations detected

---

#### TextHooks

**Purpose:** TextHooks component

**File:** `TextHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TextItem

**Purpose:** TextItem component

**File:** `TextItem.php`

**Architectural Issues:** 1 violations detected

---

#### TextItemBase

**Purpose:** TextItemBase component

**File:** `TextItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### TextLongItem

**Purpose:** TextLongItem component

**File:** `TextLongItem.php`

**Architectural Issues:** 1 violations detected

---

#### TextProcessed

**Purpose:** TextProcessed component

**File:** `TextProcessed.php`

**Architectural Issues:** 1 violations detected

---

#### TextSummaryOrTrimmedFormatter

**Purpose:** Form handling for TextSummaryOrTrimmedatter

**File:** `TextSummaryOrTrimmedFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TextTrimmedFormatter

**Purpose:** Form handling for TextTrimmedatter

**File:** `TextTrimmedFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TextWithSummaryItem

**Purpose:** TextWithSummaryItem component

**File:** `TextWithSummaryItem.php`

**Architectural Issues:** 1 violations detected

---

#### Textarea

**Purpose:** Textarea component

**File:** `Textarea.php`

**Architectural Issues:** 1 violations detected

---

#### TextareaWidget

**Purpose:** TextareaWidget component

**File:** `TextareaWidget.php`

**Architectural Issues:** 1 violations detected

---

#### TextareaWithSummaryWidget

**Purpose:** TextareaWithSummaryWidget component

**File:** `TextareaWithSummaryWidget.php`

**Architectural Issues:** 1 violations detected

---

#### Textfield

**Purpose:** Textfield component

**File:** `Textfield.php`

**Architectural Issues:** 1 violations detected

---

#### TextfieldWidget

**Purpose:** TextfieldWidget component

**File:** `TextfieldWidget.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeAdminForm

**Purpose:** Form handling for ThemeAdmin

**File:** `ThemeAdminForm.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeController

**Purpose:** Controls Theme operations

**File:** `ThemeController.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeExperimentalConfirmForm

**Purpose:** Form handling for ThemeExperimentalConfirm

**File:** `ThemeExperimentalConfirmForm.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeLocalTask

**Purpose:** ThemeLocalTask component

**File:** `ThemeLocalTask.php`

**Architectural Issues:** 2 violations detected

---

#### ThemeSettings

**Purpose:** ThemeSettings component

**File:** `ThemeSettings.php`

**Architectural Issues:** 2 violations detected

---

#### ThemeSettingsForm

**Purpose:** Form handling for ThemeSettings

**File:** `ThemeSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### Thread

**Purpose:** Thread component

**File:** `Thread.php`

**Architectural Issues:** 1 violations detected

---

#### ThreeColumnLayout

**Purpose:** ThreeColumnLayout component

**File:** `ThreeColumnLayout.php`

**Architectural Issues:** 1 violations detected

---

#### ThumbnailDownloader

**Purpose:** ThumbnailDownloader component

**File:** `ThumbnailDownloader.php`

**Architectural Issues:** 1 violations detected

---

#### Tid

**Purpose:** Tid component

**File:** `Tid.php`

**Architectural Issues:** 1 violations detected

---

#### Time

**Purpose:** Time component

**File:** `Time.php`

**Architectural Issues:** 1 violations detected

---

#### TimeInterval

**Purpose:** TimeInterval component

**File:** `TimeInterval.php`

**Architectural Issues:** 1 violations detected

---

#### TimeZone

**Purpose:** TimeZone component

**File:** `TimeZone.php`

**Architectural Issues:** 1 violations detected

---

#### TimeZoneItem

**Purpose:** TimeZoneItem component

**File:** `TimeZoneItem.php`

**Architectural Issues:** 1 violations detected

---

#### TimeZoneResolver

**Purpose:** TimeZoneResolver component

**File:** `TimeZoneResolver.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampItemNormalizer

**Purpose:** TimestampItemNormalizer component

**File:** `TimestampItemNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampNormalizer

**Purpose:** TimestampNormalizer component

**File:** `TimestampNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### TimezoneController

**Purpose:** Controls Timezone operations

**File:** `TimezoneController.php`

**Architectural Issues:** 1 violations detected

---

#### Title

**Purpose:** Title component

**File:** `Title.php`

**Architectural Issues:** 1 violations detected

---

#### TokenHooks

**Purpose:** TokenHooks component

**File:** `TokenHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TokenizeAreaPluginBase

**Purpose:** TokenizeAreaPluginBase component

**File:** `TokenizeAreaPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### Toolbar

**Purpose:** Toolbar component

**File:** `Toolbar.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarController

**Purpose:** Controls Toolbar operations

**File:** `ToolbarController.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarHooks

**Purpose:** ToolbarHooks component

**File:** `ToolbarHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItem

**Purpose:** ToolbarItem component

**File:** `ToolbarItem.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemConditionsMetConstraint

**Purpose:** ToolbarItemConditionsMetConstraint component

**File:** `ToolbarItemConditionsMetConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemConditionsMetConstraintValidator

**Purpose:** ToolbarItemConditionsMetConstraintValidator component

**File:** `ToolbarItemConditionsMetConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemConstraint

**Purpose:** ToolbarItemConstraint component

**File:** `ToolbarItemConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemConstraintValidator

**Purpose:** ToolbarItemConstraintValidator component

**File:** `ToolbarItemConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemDependencyConstraint

**Purpose:** ToolbarItemDependencyConstraint component

**File:** `ToolbarItemDependencyConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarItemDependencyConstraintValidator

**Purpose:** ToolbarItemDependencyConstraintValidator component

**File:** `ToolbarItemDependencyConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarLinkBuilder

**Purpose:** ToolbarLinkBuilder component

**File:** `ToolbarLinkBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarMenuLinkTree

**Purpose:** ToolbarMenuLinkTree component

**File:** `ToolbarMenuLinkTree.php`

**Architectural Issues:** 1 violations detected

---

#### ToolbarThemeHooks

**Purpose:** ToolbarThemeHooks component

**File:** `ToolbarThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### TopBar

**Purpose:** TopBar component

**File:** `TopBar.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarItem

**Purpose:** TopBarItem component

**File:** `TopBarItem.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarItemBase

**Purpose:** TopBarItemBase component

**File:** `TopBarItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarItemManager

**Purpose:** Manages TopBarItem operations

**File:** `TopBarItemManager.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarItemManagerInterface

**Purpose:** Manages TopBarItemInterface operations

**File:** `TopBarItemManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarItemPluginInterface

**Purpose:** TopBarItemPluginInterface component

**File:** `TopBarItemPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TopBarRegion

**Purpose:** TopBarRegion component

**File:** `TopBarRegion.php`

**Architectural Issues:** 1 violations detected

---

#### TopLevelDataInterface

**Purpose:** TopLevelDataInterface component

**File:** `TopLevelDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionManager

**Purpose:** Manages Transaction operations

**File:** `TransactionManager.php`

**Architectural Issues:** 4 violations detected

---

#### Transition

**Purpose:** Transition component

**File:** `Transition.php`

**Architectural Issues:** 1 violations detected

---

#### TransitionInterface

**Purpose:** TransitionInterface component

**File:** `TransitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableStringAdapter

**Purpose:** TranslatableStringAdapter component

**File:** `TranslatableStringAdapter.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableStringFactory

**Purpose:** TranslatableStringFactory component

**File:** `TranslatableStringFactory.php`

**Architectural Issues:** 1 violations detected

---

#### TranslateEditForm

**Purpose:** Form handling for TranslateEdit

**File:** `TranslateEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### TranslateFilterForm

**Purpose:** Form handling for TranslateFilter

**File:** `TranslateFilterForm.php`

**Architectural Issues:** 1 violations detected

---

#### TranslateFormBase

**Purpose:** Form handling for TranslateBase

**File:** `TranslateFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationLanguageRenderer

**Purpose:** TranslationLanguageRenderer component

**File:** `TranslationLanguageRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationLink

**Purpose:** TranslationLink component

**File:** `TranslationLink.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationStatusForm

**Purpose:** Form handling for TranslationStatus

**File:** `TranslationStatusForm.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationString

**Purpose:** TranslationString component

**File:** `TranslationString.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationsStream

**Purpose:** TranslationsStream component

**File:** `TranslationsStream.php`

**Architectural Issues:** 1 violations detected

---

#### TriggerPreviewCommand

**Purpose:** TriggerPreviewCommand component

**File:** `TriggerPreviewCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Truncate

**Purpose:** Truncate component

**File:** `Truncate.php`

**Architectural Issues:** 3 violations detected

---

#### TwoColumnLayout

**Purpose:** TwoColumnLayout component

**File:** `TwoColumnLayout.php`

**Architectural Issues:** 1 violations detected

---

#### Type

**Purpose:** Type component

**File:** `Type.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataNormalizer

**Purpose:** TypedDataNormalizer component

**File:** `TypedDataNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### Uid

**Purpose:** Uid component

**File:** `Uid.php`

**Architectural Issues:** 1 violations detected

---

#### UidRevision

**Purpose:** UidRevision component

**File:** `UidRevision.php`

**Architectural Issues:** 2 violations detected

---

#### UidRevisionTrait

**Purpose:** UidRevisionTrait component

**File:** `UidRevisionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### UnapprovedComments

**Purpose:** UnapprovedComments component

**File:** `UnapprovedComments.php`

**Architectural Issues:** 1 violations detected

---

#### UnblockUser

**Purpose:** UnblockUser component

**File:** `UnblockUser.php`

**Architectural Issues:** 1 violations detected

---

#### UncacheableFieldHandlerTrait

**Purpose:** Handles requests for UncacheableFieldTrait

**File:** `UncacheableFieldHandlerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### UnformattedSummary

**Purpose:** UnformattedSummary component

**File:** `UnformattedSummary.php`

**Architectural Issues:** 1 violations detected

---

#### UniqueLabelInListConstraint

**Purpose:** UniqueLabelInListConstraint component

**File:** `UniqueLabelInListConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UniqueLabelInListConstraintValidator

**Purpose:** UniqueLabelInListConstraintValidator component

**File:** `UniqueLabelInListConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownPathExcluder

**Purpose:** UnknownPathExcluder component

**File:** `UnknownPathExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### UnprocessableHttpEntityException

**Purpose:** UnprocessableHttpEntityException component

**File:** `UnprocessableHttpEntityException.php`

**Architectural Issues:** 1 violations detected

---

#### UnprocessableHttpEntityExceptionNormalizer

**Purpose:** UnprocessableHttpEntityExceptionNormalizer component

**File:** `UnprocessableHttpEntityExceptionNormalizer.php`

**Architectural Issues:** 1 violations detected

---

#### UnstickyNode

**Purpose:** UnstickyNode component

**File:** `UnstickyNode.php`

**Architectural Issues:** 1 violations detected

---

#### Update

**Purpose:** Update component

**File:** `Update.php`

**Architectural Issues:** 3 violations detected

---

#### UpdateBlockForm

**Purpose:** Form handling for UpdateBlock

**File:** `UpdateBlockForm.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateController

**Purpose:** Controls Update operations

**File:** `UpdateController.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateDataSubscriber

**Purpose:** UpdateDataSubscriber component

**File:** `UpdateDataSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateFetcher

**Purpose:** UpdateFetcher component

**File:** `UpdateFetcher.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateFetcherInterface

**Purpose:** UpdateFetcherInterface component

**File:** `UpdateFetcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateHooks

**Purpose:** UpdateHooks component

**File:** `UpdateHooks.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateManager

**Purpose:** Manages Update operations

**File:** `UpdateManager.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateManagerAccessCheck

**Purpose:** Manages UpdateAccessCheck operations

**File:** `UpdateManagerAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateManagerInterface

**Purpose:** Manages UpdateInterface operations

**File:** `UpdateManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateProcessor

**Purpose:** UpdateProcessor component

**File:** `UpdateProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateProcessorInterface

**Purpose:** UpdateProcessorInterface component

**File:** `UpdateProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateRequirements

**Purpose:** UpdateRequirements component

**File:** `UpdateRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateRoot

**Purpose:** UpdateRoot component

**File:** `UpdateRoot.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateSelectionCommand

**Purpose:** UpdateSelectionCommand component

**File:** `UpdateSelectionCommand.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateSettings

**Purpose:** UpdateSettings component

**File:** `UpdateSettings.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateSettingsForm

**Purpose:** Form handling for UpdateSettings

**File:** `UpdateSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateThemeHooks

**Purpose:** UpdateThemeHooks component

**File:** `UpdateThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Upload

**Purpose:** Upload component

**File:** `Upload.php`

**Architectural Issues:** 1 violations detected

---

#### UploadInstance

**Purpose:** UploadInstance component

**File:** `UploadInstance.php`

**Architectural Issues:** 1 violations detected

---

#### UploadedFileConstraint

**Purpose:** UploadedFileConstraint component

**File:** `UploadedFileConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UploadedFileConstraintValidator

**Purpose:** UploadedFileConstraintValidator component

**File:** `UploadedFileConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UploadedFileInterface

**Purpose:** UploadedFileInterface component

**File:** `UploadedFileInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Upsert

**Purpose:** Upsert component

**File:** `Upsert.php`

**Architectural Issues:** 3 violations detected

---

#### Url

**Purpose:** Url component

**File:** `Url.php`

**Architectural Issues:** 1 violations detected

---

#### UrlAlias

**Purpose:** UrlAlias component

**File:** `UrlAlias.php`

**Architectural Issues:** 2 violations detected

---

#### UrlAliasBase

**Purpose:** UrlAliasBase component

**File:** `UrlAliasBase.php`

**Architectural Issues:** 1 violations detected

---

#### UrlEncode

**Purpose:** UrlEncode component

**File:** `UrlEncode.php`

**Architectural Issues:** 1 violations detected

---

#### UrlPlainFormatter

**Purpose:** Form handling for UrlPlainatter

**File:** `UrlPlainFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### UrlResolver

**Purpose:** UrlResolver component

**File:** `UrlResolver.php`

**Architectural Issues:** 1 violations detected

---

#### UrlResolverInterface

**Purpose:** UrlResolverInterface component

**File:** `UrlResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### User

**Purpose:** User component

**File:** `User.php`

**Architectural Issues:** 6 violations detected

---

#### UserAccessControlHandler

**Purpose:** Handles requests for UserAccessControl

**File:** `UserAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### UserAuth

**Purpose:** UserAuth component

**File:** `UserAuth.php`

**Architectural Issues:** 1 violations detected

---

#### UserAuthInterface

**Purpose:** UserAuthInterface component

**File:** `UserAuthInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserAuthentication

**Purpose:** UserAuthentication component

**File:** `UserAuthentication.php`

**Architectural Issues:** 1 violations detected

---

#### UserAuthenticationController

**Purpose:** Controls UserAuthentication operations

**File:** `UserAuthenticationController.php`

**Architectural Issues:** 1 violations detected

---

#### UserAuthenticationInterface

**Purpose:** UserAuthenticationInterface component

**File:** `UserAuthenticationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserBulkForm

**Purpose:** Form handling for UserBulk

**File:** `UserBulkForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserCancelForm

**Purpose:** Form handling for UserCancel

**File:** `UserCancelForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserCancelMethodsConstraint

**Purpose:** UserCancelMethodsConstraint component

**File:** `UserCancelMethodsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UserController

**Purpose:** Controls User operations

**File:** `UserController.php`

**Architectural Issues:** 1 violations detected

---

#### UserData

**Purpose:** UserData component

**File:** `UserData.php`

**Architectural Issues:** 3 violations detected

---

#### UserDataInterface

**Purpose:** UserDataInterface component

**File:** `UserDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserEntityTranslation

**Purpose:** UserEntityTranslation component

**File:** `UserEntityTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### UserEvents

**Purpose:** UserEvents component

**File:** `UserEvents.php`

**Architectural Issues:** 1 violations detected

---

#### UserFloodControl

**Purpose:** UserFloodControl component

**File:** `UserFloodControl.php`

**Architectural Issues:** 1 violations detected

---

#### UserFloodControlInterface

**Purpose:** UserFloodControlInterface component

**File:** `UserFloodControlInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserFloodEvent

**Purpose:** UserFloodEvent component

**File:** `UserFloodEvent.php`

**Architectural Issues:** 1 violations detected

---

#### UserFloodSubscriber

**Purpose:** UserFloodSubscriber component

**File:** `UserFloodSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### UserHooks

**Purpose:** UserHooks component

**File:** `UserHooks.php`

**Architectural Issues:** 1 violations detected

---

#### UserInterface

**Purpose:** UserInterface component

**File:** `UserInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserLangcode

**Purpose:** UserLangcode component

**File:** `UserLangcode.php`

**Architectural Issues:** 1 violations detected

---

#### UserListBuilder

**Purpose:** UserListBuilder component

**File:** `UserListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### UserLocalTask

**Purpose:** UserLocalTask component

**File:** `UserLocalTask.php`

**Architectural Issues:** 1 violations detected

---

#### UserLoginBlock

**Purpose:** UserLoginBlock component

**File:** `UserLoginBlock.php`

**Architectural Issues:** 1 violations detected

---

#### UserLoginForm

**Purpose:** Form handling for UserLogin

**File:** `UserLoginForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserLogoutConfirm

**Purpose:** UserLogoutConfirm component

**File:** `UserLogoutConfirm.php`

**Architectural Issues:** 1 violations detected

---

#### UserMailRequired

**Purpose:** UserMailRequired component

**File:** `UserMailRequired.php`

**Architectural Issues:** 1 violations detected

---

#### UserMailRequiredValidator

**Purpose:** UserMailRequiredValidator component

**File:** `UserMailRequiredValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UserMailUnique

**Purpose:** UserMailUnique component

**File:** `UserMailUnique.php`

**Architectural Issues:** 1 violations detected

---

#### UserMultipleCancelConfirm

**Purpose:** UserMultipleCancelConfirm component

**File:** `UserMultipleCancelConfirm.php`

**Architectural Issues:** 1 violations detected

---

#### UserName

**Purpose:** UserName component

**File:** `UserName.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameConstraint

**Purpose:** UserNameConstraint component

**File:** `UserNameConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameConstraintValidator

**Purpose:** UserNameConstraintValidator component

**File:** `UserNameConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameFormatter

**Purpose:** Form handling for UserNameatter

**File:** `UserNameFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameItem

**Purpose:** UserNameItem component

**File:** `UserNameItem.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameUnique

**Purpose:** UserNameUnique component

**File:** `UserNameUnique.php`

**Architectural Issues:** 1 violations detected

---

#### UserNameValidator

**Purpose:** UserNameValidator component

**File:** `UserNameValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UserPasswordForm

**Purpose:** Form handling for UserPassword

**File:** `UserPasswordForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserPasswordResetForm

**Purpose:** Form handling for UserPasswordReset

**File:** `UserPasswordResetForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserPermissionsForm

**Purpose:** Form handling for UserPermissions

**File:** `UserPermissionsForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserPermissionsModuleSpecificForm

**Purpose:** Form handling for UserPermissionsModuleSpecific

**File:** `UserPermissionsModuleSpecificForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserPermissionsRoleSpecificForm

**Purpose:** Form handling for UserPermissionsRoleSpecific

**File:** `UserPermissionsRoleSpecificForm.php`

**Architectural Issues:** 1 violations detected

---

#### UserPicture

**Purpose:** UserPicture component

**File:** `UserPicture.php`

**Architectural Issues:** 1 violations detected

---

#### UserPictureFile

**Purpose:** UserPictureFile component

**File:** `UserPictureFile.php`

**Architectural Issues:** 1 violations detected

---

#### UserPictureInstance

**Purpose:** UserPictureInstance component

**File:** `UserPictureInstance.php`

**Architectural Issues:** 1 violations detected

---

#### UserReference

**Purpose:** UserReference component

**File:** `UserReference.php`

**Architectural Issues:** 2 violations detected

---

#### UserRegistrationResource

**Purpose:** UserRegistrationResource component

**File:** `UserRegistrationResource.php`

**Architectural Issues:** 1 violations detected

---

#### UserRequestSubscriber

**Purpose:** UserRequestSubscriber component

**File:** `UserRequestSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### UserRequirements

**Purpose:** UserRequirements component

**File:** `UserRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### UserRole

**Purpose:** UserRole component

**File:** `UserRole.php`

**Architectural Issues:** 1 violations detected

---

#### UserRouteAlterSubscriber

**Purpose:** UserRouteAlterSubscriber component

**File:** `UserRouteAlterSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### UserRouteProvider

**Purpose:** UserRouteProvider component

**File:** `UserRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### UserRow

**Purpose:** UserRow component

**File:** `UserRow.php`

**Architectural Issues:** 1 violations detected

---

#### UserSearch

**Purpose:** UserSearch component

**File:** `UserSearch.php`

**Architectural Issues:** 1 violations detected

---

#### UserSelection

**Purpose:** UserSelection component

**File:** `UserSelection.php`

**Architectural Issues:** 1 violations detected

---

#### UserStorage

**Purpose:** UserStorage component

**File:** `UserStorage.php`

**Architectural Issues:** 1 violations detected

---

#### UserStorageInterface

**Purpose:** UserStorageInterface component

**File:** `UserStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserStorageSchema

**Purpose:** UserStorageSchema component

**File:** `UserStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### UserThemeHooks

**Purpose:** UserThemeHooks component

**File:** `UserThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### UserTokensHooks

**Purpose:** UserTokensHooks component

**File:** `UserTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### UserUid

**Purpose:** UserUid component

**File:** `UserUid.php`

**Architectural Issues:** 2 violations detected

---

#### UserUpdate7002

**Purpose:** UserUpdate7002 component

**File:** `UserUpdate7002.php`

**Architectural Issues:** 1 violations detected

---

#### UserUpdate8002

**Purpose:** UserUpdate8002 component

**File:** `UserUpdate8002.php`

**Architectural Issues:** 1 violations detected

---

#### UserViewsData

**Purpose:** UserViewsData component

**File:** `UserViewsData.php`

**Architectural Issues:** 1 violations detected

---

#### UserViewsExecutionHooks

**Purpose:** UserViewsExecutionHooks component

**File:** `UserViewsExecutionHooks.php`

**Architectural Issues:** 1 violations detected

---

#### UserViewsHooks

**Purpose:** UserViewsHooks component

**File:** `UserViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Users

**Purpose:** Users component

**File:** `Users.php`

**Architectural Issues:** 1 violations detected

---

#### UuidReferenceInterface

**Purpose:** UuidReferenceInterface component

**File:** `UuidReferenceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UuidResolver

**Purpose:** UuidResolver component

**File:** `UuidResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ValidationResult

**Purpose:** ValidationResult component

**File:** `ValidationResult.php`

**Architectural Issues:** 1 violations detected

---

#### Variable

**Purpose:** Variable component

**File:** `Variable.php`

**Architectural Issues:** 1 violations detected

---

#### VariableMultiRow

**Purpose:** VariableMultiRow component

**File:** `VariableMultiRow.php`

**Architectural Issues:** 1 violations detected

---

#### VariableTranslation

**Purpose:** VariableTranslation component

**File:** `VariableTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### VendorHardeningExcluder

**Purpose:** VendorHardeningExcluder component

**File:** `VendorHardeningExcluder.php`

**Architectural Issues:** 1 violations detected

---

#### VersionById

**Purpose:** VersionById component

**File:** `VersionById.php`

**Architectural Issues:** 1 violations detected

---

#### VersionByRel

**Purpose:** VersionByRel component

**File:** `VersionByRel.php`

**Architectural Issues:** 1 violations detected

---

#### VersionNegotiator

**Purpose:** VersionNegotiator component

**File:** `VersionNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### VersionNegotiatorInterface

**Purpose:** VersionNegotiatorInterface component

**File:** `VersionNegotiatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VersionNotFoundException

**Purpose:** VersionNotFoundException component

**File:** `VersionNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### Vid

**Purpose:** Vid component

**File:** `Vid.php`

**Architectural Issues:** 1 violations detected

---

#### VideoFile

**Purpose:** VideoFile component

**File:** `VideoFile.php`

**Architectural Issues:** 1 violations detected

---

#### View

**Purpose:** View component

**File:** `View.php`

**Architectural Issues:** 3 violations detected

---

#### ViewAddForm

**Purpose:** Form handling for ViewAdd

**File:** `ViewAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewAjaxController

**Purpose:** Controls ViewAjax operations

**File:** `ViewAjaxController.php`

**Architectural Issues:** 1 violations detected

---

#### ViewAjaxResponse

**Purpose:** ViewAjaxResponse component

**File:** `ViewAjaxResponse.php`

**Architectural Issues:** 1 violations detected

---

#### ViewDuplicateForm

**Purpose:** Form handling for ViewDuplicate

**File:** `ViewDuplicateForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewEditForm

**Purpose:** Form handling for ViewEdit

**File:** `ViewEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewEntityInterface

**Purpose:** ViewEntityInterface component

**File:** `ViewEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ViewExecutable

**Purpose:** ViewExecutable component

**File:** `ViewExecutable.php`

**Architectural Issues:** 1 violations detected

---

#### ViewExecutableFactory

**Purpose:** ViewExecutableFactory component

**File:** `ViewExecutableFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ViewFormBase

**Purpose:** Form handling for ViewBase

**File:** `ViewFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewListBuilder

**Purpose:** ViewListBuilder component

**File:** `ViewListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ViewMode

**Purpose:** ViewMode component

**File:** `ViewMode.php`

**Architectural Issues:** 2 violations detected

---

#### ViewModeAccessCheck

**Purpose:** ViewModeAccessCheck component

**File:** `ViewModeAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### ViewModeBase

**Purpose:** ViewModeBase component

**File:** `ViewModeBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewPageController

**Purpose:** Controls ViewPage operations

**File:** `ViewPageController.php`

**Architectural Issues:** 1 violations detected

---

#### ViewPreviewForm

**Purpose:** Form handling for ViewPreview

**File:** `ViewPreviewForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewRenderElementException

**Purpose:** ViewRenderElementException component

**File:** `ViewRenderElementException.php`

**Architectural Issues:** 1 violations detected

---

#### ViewUI

**Purpose:** ViewUI component

**File:** `ViewUI.php`

**Architectural Issues:** 1 violations detected

---

#### ViewUIConverter

**Purpose:** ViewUIConverter component

**File:** `ViewUIConverter.php`

**Architectural Issues:** 2 violations detected

---

#### Views

**Purpose:** Views component

**File:** `Views.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsAccess

**Purpose:** ViewsAccess component

**File:** `ViewsAccess.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsArea

**Purpose:** ViewsArea component

**File:** `ViewsArea.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsArgument

**Purpose:** ViewsArgument component

**File:** `ViewsArgument.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsArgumentDefault

**Purpose:** ViewsArgumentDefault component

**File:** `ViewsArgumentDefault.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsArgumentValidator

**Purpose:** ViewsArgumentValidator component

**File:** `ViewsArgumentValidator.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsBlock

**Purpose:** ViewsBlock component

**File:** `ViewsBlock.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsBlockBase

**Purpose:** ViewsBlockBase component

**File:** `ViewsBlockBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsCache

**Purpose:** ViewsCache component

**File:** `ViewsCache.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsConfigUpdater

**Purpose:** ViewsConfigUpdater component

**File:** `ViewsConfigUpdater.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsData

**Purpose:** ViewsData component

**File:** `ViewsData.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsDataHelper

**Purpose:** ViewsDataHelper component

**File:** `ViewsDataHelper.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsDisplay

**Purpose:** ViewsDisplay component

**File:** `ViewsDisplay.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsDisplayExtender

**Purpose:** ViewsDisplayExtender component

**File:** `ViewsDisplayExtender.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsEntityArgumentValidator

**Purpose:** ViewsEntityArgumentValidator component

**File:** `ViewsEntityArgumentValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsEntityRow

**Purpose:** ViewsEntityRow component

**File:** `ViewsEntityRow.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsEntitySchemaSubscriber

**Purpose:** ViewsEntitySchemaSubscriber component

**File:** `ViewsEntitySchemaSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsExposedFilterBlock

**Purpose:** ViewsExposedFilterBlock component

**File:** `ViewsExposedFilterBlock.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsExposedForm

**Purpose:** Form handling for ViewsExposed

**File:** `ViewsExposedForm.php`

**Architectural Issues:** 3 violations detected

---

#### ViewsField

**Purpose:** ViewsField component

**File:** `ViewsField.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsFilter

**Purpose:** ViewsFilter component

**File:** `ViewsFilter.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsForm

**Purpose:** Form handling for Views

**File:** `ViewsForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsFormBase

**Purpose:** Form handling for ViewsBase

**File:** `ViewsFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsFormInterface

**Purpose:** Form handling for ViewsInterface

**File:** `ViewsFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsFormMainForm

**Purpose:** Form handling for ViewsMain

**File:** `ViewsFormMainForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsHandlerAnnotationBase

**Purpose:** Handles requests for ViewsAnnotationBase

**File:** `ViewsHandlerAnnotationBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsHandlerInterface

**Purpose:** Handles requests for ViewsInterface

**File:** `ViewsHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsHandlerManager

**Purpose:** Handles requests for ViewsManager

**File:** `ViewsHandlerManager.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsHooks

**Purpose:** ViewsHooks component

**File:** `ViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsJoin

**Purpose:** ViewsJoin component

**File:** `ViewsJoin.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsLocalTask

**Purpose:** ViewsLocalTask component

**File:** `ViewsLocalTask.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsMenuLink

**Purpose:** ViewsMenuLink component

**File:** `ViewsMenuLink.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsMenuLinkForm

**Purpose:** Form handling for ViewsMenuLink

**File:** `ViewsMenuLinkForm.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsOperations

**Purpose:** ViewsOperations component

**File:** `ViewsOperations.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsPager

**Purpose:** ViewsPager component

**File:** `ViewsPager.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsPluginAnnotationBase

**Purpose:** ViewsPluginAnnotationBase component

**File:** `ViewsPluginAnnotationBase.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsPluginInterface

**Purpose:** ViewsPluginInterface component

**File:** `ViewsPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsPluginManager

**Purpose:** Manages ViewsPlugin operations

**File:** `ViewsPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsQuery

**Purpose:** ViewsQuery component

**File:** `ViewsQuery.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsRelationship

**Purpose:** ViewsRelationship component

**File:** `ViewsRelationship.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsRenderPipelineMarkup

**Purpose:** ViewsRenderPipelineMarkup component

**File:** `ViewsRenderPipelineMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsRow

**Purpose:** ViewsRow component

**File:** `ViewsRow.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsSearchQuery

**Purpose:** ViewsSearchQuery component

**File:** `ViewsSearchQuery.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsSelection

**Purpose:** ViewsSelection component

**File:** `ViewsSelection.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsSort

**Purpose:** ViewsSort component

**File:** `ViewsSort.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsStyle

**Purpose:** ViewsStyle component

**File:** `ViewsStyle.php`

**Architectural Issues:** 2 violations detected

---

#### ViewsThemeHooks

**Purpose:** ViewsThemeHooks component

**File:** `ViewsThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsTokensHooks

**Purpose:** ViewsTokensHooks component

**File:** `ViewsTokensHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsUIController

**Purpose:** Controls ViewsUI operations

**File:** `ViewsUIController.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsUiHooks

**Purpose:** ViewsUiHooks component

**File:** `ViewsUiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsUiThemeHooks

**Purpose:** ViewsUiThemeHooks component

**File:** `ViewsUiThemeHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsViewsExecutionHooks

**Purpose:** ViewsViewsExecutionHooks component

**File:** `ViewsViewsExecutionHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsViewsHooks

**Purpose:** ViewsViewsHooks component

**File:** `ViewsViewsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### ViewsWizard

**Purpose:** ViewsWizard component

**File:** `ViewsWizard.php`

**Architectural Issues:** 2 violations detected

---

#### Vocabulary

**Purpose:** Vocabulary component

**File:** `Vocabulary.php`

**Architectural Issues:** 3 violations detected

---

#### VocabularyAccessControlHandler

**Purpose:** Handles requests for VocabularyAccessControl

**File:** `VocabularyAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyDeleteForm

**Purpose:** Form handling for VocabularyDelete

**File:** `VocabularyDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyForm

**Purpose:** Form handling for Vocabulary

**File:** `VocabularyForm.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyInterface

**Purpose:** VocabularyInterface component

**File:** `VocabularyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyListBuilder

**Purpose:** VocabularyListBuilder component

**File:** `VocabularyListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyPerType

**Purpose:** VocabularyPerType component

**File:** `VocabularyPerType.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyResetForm

**Purpose:** Form handling for VocabularyReset

**File:** `VocabularyResetForm.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyRouteProvider

**Purpose:** VocabularyRouteProvider component

**File:** `VocabularyRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyStorage

**Purpose:** VocabularyStorage component

**File:** `VocabularyStorage.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyStorageInterface

**Purpose:** VocabularyStorageInterface component

**File:** `VocabularyStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VocabularyTranslation

**Purpose:** VocabularyTranslation component

**File:** `VocabularyTranslation.php`

**Architectural Issues:** 2 violations detected

---

#### VocabularyVid

**Purpose:** VocabularyVid component

**File:** `VocabularyVid.php`

**Architectural Issues:** 1 violations detected

---

#### Watchdog

**Purpose:** Watchdog component

**File:** `Watchdog.php`

**Architectural Issues:** 1 violations detected

---

#### WeekDate

**Purpose:** WeekDate component

**File:** `WeekDate.php`

**Architectural Issues:** 2 violations detected

---

#### WizardException

**Purpose:** WizardException component

**File:** `WizardException.php`

**Architectural Issues:** 1 violations detected

---

#### WizardInterface

**Purpose:** WizardInterface component

**File:** `WizardInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WizardPluginBase

**Purpose:** WizardPluginBase component

**File:** `WizardPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### Workflow

**Purpose:** Workflow component

**File:** `Workflow.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowAccessControlHandler

**Purpose:** Handles requests for WorkflowAccessControl

**File:** `WorkflowAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowAddForm

**Purpose:** Form handling for WorkflowAdd

**File:** `WorkflowAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowDeleteForm

**Purpose:** Form handling for WorkflowDelete

**File:** `WorkflowDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowEditForm

**Purpose:** Form handling for WorkflowEdit

**File:** `WorkflowEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowInterface

**Purpose:** WorkflowInterface component

**File:** `WorkflowInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowListBuilder

**Purpose:** WorkflowListBuilder component

**File:** `WorkflowListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowStateAddForm

**Purpose:** Form handling for WorkflowStateAdd

**File:** `WorkflowStateAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowStateDeleteForm

**Purpose:** Form handling for WorkflowStateDelete

**File:** `WorkflowStateDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowStateEditForm

**Purpose:** Form handling for WorkflowStateEdit

**File:** `WorkflowStateEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowStateTransitionOperationsAccessCheck

**Purpose:** WorkflowStateTransitionOperationsAccessCheck component

**File:** `WorkflowStateTransitionOperationsAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTransitionAddForm

**Purpose:** Form handling for WorkflowTransitionAdd

**File:** `WorkflowTransitionAddForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTransitionDeleteForm

**Purpose:** Form handling for WorkflowTransitionDelete

**File:** `WorkflowTransitionDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTransitionEditForm

**Purpose:** Form handling for WorkflowTransitionEdit

**File:** `WorkflowTransitionEditForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowType

**Purpose:** WorkflowType component

**File:** `WorkflowType.php`

**Architectural Issues:** 2 violations detected

---

#### WorkflowTypeBase

**Purpose:** WorkflowTypeBase component

**File:** `WorkflowTypeBase.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTypeConfigureFormBase

**Purpose:** Form handling for WorkflowTypeConfigureBase

**File:** `WorkflowTypeConfigureFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTypeInterface

**Purpose:** WorkflowTypeInterface component

**File:** `WorkflowTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTypeManager

**Purpose:** Manages WorkflowType operations

**File:** `WorkflowTypeManager.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTypeStateFormBase

**Purpose:** Form handling for WorkflowTypeStateBase

**File:** `WorkflowTypeStateFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowTypeTransitionFormBase

**Purpose:** Form handling for WorkflowTypeTransitionBase

**File:** `WorkflowTypeTransitionFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### WorkflowsHooks

**Purpose:** WorkflowsHooks component

**File:** `WorkflowsHooks.php`

**Architectural Issues:** 1 violations detected

---

#### Workspace

**Purpose:** Workspace component

**File:** `Workspace.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceAccessControlHandler

**Purpose:** Handles requests for WorkspaceAccessControl

**File:** `WorkspaceAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceAccessException

**Purpose:** WorkspaceAccessException component

**File:** `WorkspaceAccessException.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceActivateForm

**Purpose:** Form handling for WorkspaceActivate

**File:** `WorkspaceActivateForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceAssociation

**Purpose:** WorkspaceAssociation component

**File:** `WorkspaceAssociation.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceAssociationInterface

**Purpose:** WorkspaceAssociationInterface component

**File:** `WorkspaceAssociationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceCacheContext

**Purpose:** WorkspaceCacheContext component

**File:** `WorkspaceCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceConflictException

**Purpose:** WorkspaceConflictException component

**File:** `WorkspaceConflictException.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceDeleteForm

**Purpose:** Form handling for WorkspaceDelete

**File:** `WorkspaceDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceForm

**Purpose:** Form handling for Workspace

**File:** `WorkspaceForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceHandlerInterface

**Purpose:** Handles requests for WorkspaceInterface

**File:** `WorkspaceHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceIdNegotiatorInterface

**Purpose:** WorkspaceIdNegotiatorInterface component

**File:** `WorkspaceIdNegotiatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceInformation

**Purpose:** WorkspaceInformation component

**File:** `WorkspaceInformation.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceInformationInterface

**Purpose:** WorkspaceInformationInterface component

**File:** `WorkspaceInformationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceInterface

**Purpose:** WorkspaceInterface component

**File:** `WorkspaceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceListBuilder

**Purpose:** WorkspaceListBuilder component

**File:** `WorkspaceListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceManager

**Purpose:** Manages Workspace operations

**File:** `WorkspaceManager.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceManagerInterface

**Purpose:** Manages WorkspaceInterface operations

**File:** `WorkspaceManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceMergeForm

**Purpose:** Form handling for WorkspaceMerge

**File:** `WorkspaceMergeForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceMerger

**Purpose:** WorkspaceMerger component

**File:** `WorkspaceMerger.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceMergerInterface

**Purpose:** WorkspaceMergerInterface component

**File:** `WorkspaceMergerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceNegotiatorInterface

**Purpose:** WorkspaceNegotiatorInterface component

**File:** `WorkspaceNegotiatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceOperationFactory

**Purpose:** WorkspaceOperationFactory component

**File:** `WorkspaceOperationFactory.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceOperationInterface

**Purpose:** WorkspaceOperationInterface component

**File:** `WorkspaceOperationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePostPublishEvent

**Purpose:** WorkspacePostPublishEvent component

**File:** `WorkspacePostPublishEvent.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePrePublishEvent

**Purpose:** WorkspacePrePublishEvent component

**File:** `WorkspacePrePublishEvent.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePublishEvent

**Purpose:** WorkspacePublishEvent component

**File:** `WorkspacePublishEvent.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePublishException

**Purpose:** WorkspacePublishException component

**File:** `WorkspacePublishException.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePublishForm

**Purpose:** Form handling for WorkspacePublish

**File:** `WorkspacePublishForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePublisher

**Purpose:** WorkspacePublisher component

**File:** `WorkspacePublisher.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacePublisherInterface

**Purpose:** WorkspacePublisherInterface component

**File:** `WorkspacePublisherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceRepository

**Purpose:** WorkspaceRepository component

**File:** `WorkspaceRepository.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceRepositoryInterface

**Purpose:** WorkspaceRepositoryInterface component

**File:** `WorkspaceRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceRequestSubscriber

**Purpose:** WorkspaceRequestSubscriber component

**File:** `WorkspaceRequestSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSafeFormTrait

**Purpose:** Form handling for WorkspaceSafeTrait

**File:** `WorkspaceSafeFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSelection

**Purpose:** WorkspaceSelection component

**File:** `WorkspaceSelection.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSubscriber

**Purpose:** WorkspaceSubscriber component

**File:** `WorkspaceSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSwitcherBlock

**Purpose:** WorkspaceSwitcherBlock component

**File:** `WorkspaceSwitcherBlock.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSwitcherForm

**Purpose:** Form handling for WorkspaceSwitcher

**File:** `WorkspaceSwitcherForm.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceViewBuilder

**Purpose:** WorkspaceViewBuilder component

**File:** `WorkspaceViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesAliasRepository

**Purpose:** WorkspacesAliasRepository component

**File:** `WorkspacesAliasRepository.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesEntityRepository

**Purpose:** WorkspacesEntityRepository component

**File:** `WorkspacesEntityRepository.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesHooks

**Purpose:** WorkspacesHooks component

**File:** `WorkspacesHooks.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesHtmlEntityFormController

**Purpose:** Controls WorkspacesHtmlEntityForm operations

**File:** `WorkspacesHtmlEntityFormController.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesLayoutTempstoreRepository

**Purpose:** WorkspacesLayoutTempstoreRepository component

**File:** `WorkspacesLayoutTempstoreRepository.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesLazyBuilder

**Purpose:** WorkspacesLazyBuilder component

**File:** `WorkspacesLazyBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesLazyBuilders

**Purpose:** WorkspacesLazyBuilders component

**File:** `WorkspacesLazyBuilders.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesMenuTreeStorage

**Purpose:** WorkspacesMenuTreeStorage component

**File:** `WorkspacesMenuTreeStorage.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesRequirements

**Purpose:** WorkspacesRequirements component

**File:** `WorkspacesRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesServiceProvider

**Purpose:** Service for WorkspacesProvider

**File:** `WorkspacesServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspacesUiHooks

**Purpose:** WorkspacesUiHooks component

**File:** `WorkspacesUiHooks.php`

**Architectural Issues:** 1 violations detected

---

#### WritableFileSystemValidator

**Purpose:** WritableFileSystemValidator component

**File:** `WritableFileSystemValidator.php`

**Architectural Issues:** 1 violations detected

---

#### XmlEncoder

**Purpose:** XmlEncoder component

**File:** `XmlEncoder.php`

**Architectural Issues:** 1 violations detected

---

#### YearDate

**Purpose:** YearDate component

**File:** `YearDate.php`

**Architectural Issues:** 2 violations detected

---

#### YearMonthDate

**Purpose:** YearMonthDate component

**File:** `YearMonthDate.php`

**Architectural Issues:** 2 violations detected

---

#### Zip

**Purpose:** Zip component

**File:** `Zip.php`

**Architectural Issues:** 1 violations detected

---

#### big_pipe.post_update

**Purpose:** big_pipe.post_update component

**File:** `big_pipe.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### block.api

**Purpose:** block.api component

**File:** `block.api.php`

**Architectural Issues:** 1 violations detected

---

#### block.post_update

**Purpose:** block.post_update component

**File:** `block.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### block_content.post_update

**Purpose:** block_content.post_update component

**File:** `block_content.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### ckeditor5.api

**Purpose:** ckeditor5.api component

**File:** `ckeditor5.api.php`

**Architectural Issues:** 1 violations detected

---

#### ckeditor5.post_update

**Purpose:** ckeditor5.post_update component

**File:** `ckeditor5.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### comment.api

**Purpose:** comment.api component

**File:** `comment.api.php`

**Architectural Issues:** 1 violations detected

---

#### comment.post_update

**Purpose:** comment.post_update component

**File:** `comment.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### config_translation.api

**Purpose:** config_translation.api component

**File:** `config_translation.api.php`

**Architectural Issues:** 1 violations detected

---

#### contact.post_update

**Purpose:** contact.post_update component

**File:** `contact.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### content_moderation.api

**Purpose:** content_moderation.api component

**File:** `content_moderation.api.php`

**Architectural Issues:** 1 violations detected

---

#### content_moderation.post_update

**Purpose:** content_moderation.post_update component

**File:** `content_moderation.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### contextual.api

**Purpose:** contextual.api component

**File:** `contextual.api.php`

**Architectural Issues:** 1 violations detected

---

#### contextual.post_update

**Purpose:** contextual.post_update component

**File:** `contextual.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### datetime_range.post_update

**Purpose:** datetime_range.post_update component

**File:** `datetime_range.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### dblog.post_update

**Purpose:** dblog.post_update component

**File:** `dblog.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### editor.api

**Purpose:** editor.api component

**File:** `editor.api.php`

**Architectural Issues:** 1 violations detected

---

#### editor.post_update

**Purpose:** editor.post_update component

**File:** `editor.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### field.api

**Purpose:** field.api component

**File:** `field.api.php`

**Architectural Issues:** 1 violations detected

---

#### field.post_update

**Purpose:** field.post_update component

**File:** `field.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### field_ui.api

**Purpose:** field_ui.api component

**File:** `field_ui.api.php`

**Architectural Issues:** 1 violations detected

---

#### file.api

**Purpose:** file.api component

**File:** `file.api.php`

**Architectural Issues:** 1 violations detected

---

#### file.post_update

**Purpose:** file.post_update component

**File:** `file.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### filter.api

**Purpose:** filter.api component

**File:** `filter.api.php`

**Architectural Issues:** 1 violations detected

---

#### filter.post_update

**Purpose:** filter.post_update component

**File:** `filter.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### help.api

**Purpose:** help.api component

**File:** `help.api.php`

**Architectural Issues:** 1 violations detected

---

#### help.post_update

**Purpose:** help.post_update component

**File:** `help.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### image.api

**Purpose:** image.api component

**File:** `image.api.php`

**Architectural Issues:** 1 violations detected

---

#### image.post_update

**Purpose:** image.post_update component

**File:** `image.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### jsonapi.api

**Purpose:** jsonapi.api component

**File:** `jsonapi.api.php`

**Architectural Issues:** 1 violations detected

---

#### language.api

**Purpose:** language.api component

**File:** `language.api.php`

**Architectural Issues:** 1 violations detected

---

#### language.post_update

**Purpose:** language.post_update component

**File:** `language.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### layout_builder.api

**Purpose:** layout_builder.api component

**File:** `layout_builder.api.php`

**Architectural Issues:** 1 violations detected

---

#### layout_builder.post_update

**Purpose:** layout_builder.post_update component

**File:** `layout_builder.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### layout_discovery.post_update

**Purpose:** layout_discovery.post_update component

**File:** `layout_discovery.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### locale.api

**Purpose:** locale.api component

**File:** `locale.api.php`

**Architectural Issues:** 1 violations detected

---

#### locale.post_update

**Purpose:** locale.post_update component

**File:** `locale.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### media.api

**Purpose:** media.api component

**File:** `media.api.php`

**Architectural Issues:** 1 violations detected

---

#### media.post_update

**Purpose:** media.post_update component

**File:** `media.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### media_library.api

**Purpose:** media_library.api component

**File:** `media_library.api.php`

**Architectural Issues:** 1 violations detected

---

#### media_library.post_update

**Purpose:** media_library.post_update component

**File:** `media_library.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### menu_link_content.post_update

**Purpose:** menu_link_content.post_update component

**File:** `menu_link_content.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### migrate.api

**Purpose:** migrate.api component

**File:** `migrate.api.php`

**Architectural Issues:** 1 violations detected

---

#### migrate.post_update

**Purpose:** migrate.post_update component

**File:** `migrate.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### migrate_drupal.post_update

**Purpose:** migrate_drupal.post_update component

**File:** `migrate_drupal.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### navigation.api

**Purpose:** navigation.api component

**File:** `navigation.api.php`

**Architectural Issues:** 1 violations detected

---

#### navigation.post_update

**Purpose:** navigation.post_update component

**File:** `navigation.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### node.api

**Purpose:** node.api component

**File:** `node.api.php`

**Architectural Issues:** 1 violations detected

---

#### node.post_update

**Purpose:** node.post_update component

**File:** `node.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### options.api

**Purpose:** options.api component

**File:** `options.api.php`

**Architectural Issues:** 1 violations detected

---

#### package_manager.api

**Purpose:** package_manager.api component

**File:** `package_manager.api.php`

**Architectural Issues:** 1 violations detected

---

#### path.post_update

**Purpose:** path.post_update component

**File:** `path.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### path_alias.post_update

**Purpose:** path_alias.post_update component

**File:** `path_alias.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### responsive_image.post_update

**Purpose:** responsive_image.post_update component

**File:** `responsive_image.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### rest.api

**Purpose:** rest.api component

**File:** `rest.api.php`

**Architectural Issues:** 1 violations detected

---

#### rest.post_update

**Purpose:** rest.post_update component

**File:** `rest.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### search.api

**Purpose:** search.api component

**File:** `search.api.php`

**Architectural Issues:** 1 violations detected

---

#### search.post_update

**Purpose:** search.post_update component

**File:** `search.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### serialization.post_update

**Purpose:** serialization.post_update component

**File:** `serialization.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### settings_tray.api

**Purpose:** settings_tray.api component

**File:** `settings_tray.api.php`

**Architectural Issues:** 1 violations detected

---

#### shortcut.api

**Purpose:** shortcut.api component

**File:** `shortcut.api.php`

**Architectural Issues:** 1 violations detected

---

#### system.api

**Purpose:** system.api component

**File:** `system.api.php`

**Architectural Issues:** 1 violations detected

---

#### system.post_update

**Purpose:** system.post_update component

**File:** `system.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### taxonomy.post_update

**Purpose:** taxonomy.post_update component

**File:** `taxonomy.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### text.post_update

**Purpose:** text.post_update component

**File:** `text.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### toolbar.api

**Purpose:** toolbar.api component

**File:** `toolbar.api.php`

**Architectural Issues:** 1 violations detected

---

#### update.api

**Purpose:** update.api component

**File:** `update.api.php`

**Architectural Issues:** 1 violations detected

---

#### update.post_update

**Purpose:** update.post_update component

**File:** `update.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### user.api

**Purpose:** user.api component

**File:** `user.api.php`

**Architectural Issues:** 1 violations detected

---

#### user.post_update

**Purpose:** user.post_update component

**File:** `user.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### views.api

**Purpose:** views.api component

**File:** `views.api.php`

**Architectural Issues:** 1 violations detected

---

#### views.post_update

**Purpose:** views.post_update component

**File:** `views.post_update.php`

**Architectural Issues:** 1 violations detected

---

#### views_ui.api

**Purpose:** views_ui.api component

**File:** `views_ui.api.php`

**Architectural Issues:** 1 violations detected

---

#### workflows.api

**Purpose:** workflows.api component

**File:** `workflows.api.php`

**Architectural Issues:** 1 violations detected

---

#### workspaces.post_update

**Purpose:** workspaces.post_update component

**File:** `workspaces.post_update.php`

**Architectural Issues:** 1 violations detected

---


## Statistics

- **Total Components:** 2425
- **Component Categories:** 1
- **Internal Dependencies:** 238493
- **External Dependencies:** 467995

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
