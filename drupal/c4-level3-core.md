# Drupal - Core Layer (C4 Level 3)

**Generated:** 2025-10-15 05:47:42  
**Layer:** Core  
**Components:** 2139  
**Source:** Deptrac dependency analysis

---

## Component Diagram

```mermaid
graph TB
    subgraph "Core Layer"
        subgraph "Components"
            AnnotationBase[AnnotationBase]
            AnnotationInterface[AnnotationInterface]
            Plugin[Plugin]
            PluginID[PluginID]
            DocParser[DocParser]
            SimpleAnnotationReader[SimpleAnnotationReader]
            StaticReflectionClass[StaticReflectionClass]
            StaticReflectionParser[StaticReflectionParser]
            AnnotatedClassDiscovery[AnnotatedClassDiscovery]
            AnnotationBridgeDecorator[AnnotationBridgeDecorator]
            MockFileFinder[MockFileFinder]
            Inspector[Inspector]
            ClassFinder[ClassFinder]
            ClassFinderInterface[ClassFinderInterface]
            DateTimePlus[DateTimePlus]
            Time[Time]
            TimeInterface[TimeInterface]
            Container[Container]
            ContainerInterface[ContainerInterface]
            PhpArrayContainer[PhpArrayContainer]
            ReverseContainer[ReverseContainer]
            OptimizedPhpArrayDumper[OptimizedPhpArrayDumper]
            PhpArrayDumper[PhpArrayDumper]
            Diff[Diff]
            DiffFormatter[DiffFormatter]
            DiffOpOutputBuilder[DiffOpOutputBuilder]
            MappedDiff[MappedDiff]
            WordLevelDiff[WordLevelDiff]
            DiffOp[DiffOp]
            DiffOpAdd[DiffOpAdd]
            DiffOpChange[DiffOpChange]
            DiffOpCopy[DiffOpCopy]
            DiffOpDelete[DiffOpDelete]
            HWLDFWordAccumulator[HWLDFWordAccumulator]
            DiscoverableInterface[DiscoverableInterface]
            DiscoveryException[DiscoveryException]
            MissingClassDetectionClassLoader[MissingClassDetectionClassLoader]
            StubTrait[StubTrait]
            YamlDirectoryDiscovery[YamlDirectoryDiscovery]
            YamlDiscovery[YamlDiscovery]
            Event[Event]
            ApcuFileCacheBackend[ApcuFileCacheBackend]
            FileCache[FileCache]
            FileCacheBackendInterface[FileCacheBackendInterface]
            FileCacheFactory[FileCacheFactory]
            FileCacheInterface[FileCacheInterface]
            NullFileCache[NullFileCache]
            FileSecurity[FileSecurity]
            FileSystem[FileSystem]
            RegexDirectoryIterator[RegexDirectoryIterator]
            FrontMatter[FrontMatter]
            FrontMatterParseException[FrontMatterParseException]
            PoHeader[PoHeader]
            PoItem[PoItem]
            PoMemoryWriter[PoMemoryWriter]
            PoMetadataInterface[PoMetadataInterface]
            PoReaderInterface[PoReaderInterface]
            PoStreamInterface[PoStreamInterface]
            PoStreamReader[PoStreamReader]
            PoStreamWriter[PoStreamWriter]
            PoWriterInterface[PoWriterInterface]
            Graph[Graph]
            SecuredRedirectResponse[SecuredRedirectResponse]
            FileReadOnlyStorage[FileReadOnlyStorage]
            FileStorage[FileStorage]
            MTimeProtectedFastFileStorage[MTimeProtectedFastFileStorage]
            MTimeProtectedFileStorage[MTimeProtectedFileStorage]
            PhpStorageInterface[PhpStorageInterface]
            CategorizingPluginManagerInterface[CategorizingPluginManagerInterface]
            ConfigurableInterface[ConfigurableInterface]
            ContextAwarePluginInterface[ContextAwarePluginInterface]
            DependentPluginInterface[DependentPluginInterface]
            DerivativeInspectionInterface[DerivativeInspectionInterface]
            FallbackPluginManagerInterface[FallbackPluginManagerInterface]
            LazyPluginCollection[LazyPluginCollection]
            PluginAwareInterface[PluginAwareInterface]
            PluginBase[PluginBase]
            PluginInspectionInterface[PluginInspectionInterface]
            PluginManagerBase[PluginManagerBase]
            PluginManagerInterface[PluginManagerInterface]
            AttributeBase[AttributeBase]
            AttributeInterface[AttributeInterface]
            Context[Context]
            ContextDefinitionInterface[ContextDefinitionInterface]
            ContextInterface[ContextInterface]
            ContextAwarePluginDefinitionInterface[ContextAwarePluginDefinitionInterface]
            ContextAwarePluginDefinitionTrait[ContextAwarePluginDefinitionTrait]
            DerivablePluginDefinitionInterface[DerivablePluginDefinitionInterface]
            PluginDefinition[PluginDefinition]
            PluginDefinitionInterface[PluginDefinitionInterface]
            DeriverBase[DeriverBase]
            DeriverInterface[DeriverInterface]
            AttributeBridgeDecorator[AttributeBridgeDecorator]
            AttributeClassDiscovery[AttributeClassDiscovery]
            CachedDiscoveryInterface[CachedDiscoveryInterface]
            DerivativeDiscoveryDecorator[DerivativeDiscoveryDecorator]
            DiscoveryCachedTrait[DiscoveryCachedTrait]
            DiscoveryInterface[DiscoveryInterface]
            DiscoveryTrait[DiscoveryTrait]
            StaticDiscovery[StaticDiscovery]
            StaticDiscoveryDecorator[StaticDiscoveryDecorator]
            ContextException[ContextException]
            ExceptionInterface[ExceptionInterface]
            InvalidDecoratedMethod[InvalidDecoratedMethod]
            InvalidDeriverException[InvalidDeriverException]
            InvalidPluginDefinitionException[InvalidPluginDefinitionException]
            MapperExceptionInterface[MapperExceptionInterface]
            MissingValueContextException[MissingValueContextException]
            PluginException[PluginException]
            PluginNotFoundException[PluginNotFoundException]
            DefaultFactory[DefaultFactory]
            FactoryInterface[FactoryInterface]
            ReflectionFactory[ReflectionFactory]
            MapperInterface[MapperInterface]
            ProxyBuilder[ProxyBuilder]
            FormattableMarkup[FormattableMarkup]
            HtmlEscapedText[HtmlEscapedText]
            MarkupInterface[MarkupInterface]
            MarkupTrait[MarkupTrait]
            OutputStrategyInterface[OutputStrategyInterface]
            PlainTextOutput[PlainTextOutput]
            Json[Json]
            ObjectAwareSerializationInterface[ObjectAwareSerializationInterface]
            PhpSerialize[PhpSerialize]
            SerializationInterface[SerializationInterface]
            Yaml[Yaml]
            YamlPecl[YamlPecl]
            InvalidDataTypeException[InvalidDataTypeException]
            PhpTransliteration[PhpTransliteration]
            TransliterationInterface[TransliterationInterface]
            da[da]
            de[de]
            eo[eo]
            kg[kg]
            uk[uk]
            x00[x00]
            x01[x01]
            x02[x02]
            x03[x03]
            x04[x04]
            x05[x05]
            x06[x06]
            x07[x07]
            x09[x09]
            x0a[x0a]
            x0b[x0b]
            x0c[x0c]
            x0d[x0d]
            x0e[x0e]
            x0f[x0f]
            x10[x10]
            x11[x11]
            x12[x12]
            x13[x13]
            x14[x14]
            x15[x15]
            x16[x16]
            x17[x17]
            x18[x18]
            x1d[x1d]
            x1e[x1e]
            x1f[x1f]
            x20[x20]
            x21[x21]
            x22[x22]
            x23[x23]
            x24[x24]
            x25[x25]
            x26[x26]
            x27[x27]
            x28[x28]
            x29[x29]
            x2a[x2a]
            x2e[x2e]
            x2f[x2f]
            x30[x30]
            x31[x31]
            x32[x32]
            x33[x33]
            x34[x34]
            x35[x35]
            x36[x36]
            x37[x37]
            x38[x38]
            x39[x39]
            x3a[x3a]
            x3b[x3b]
            x3c[x3c]
            x3d[x3d]
            x3e[x3e]
            x3f[x3f]
            x40[x40]
            x41[x41]
            x42[x42]
            x43[x43]
            x44[x44]
            x45[x45]
            x46[x46]
            x47[x47]
            x48[x48]
            x49[x49]
            x4a[x4a]
            x4b[x4b]
            x4c[x4c]
            x4d[x4d]
            x4e[x4e]
            x4f[x4f]
            x50[x50]
            x51[x51]
            x52[x52]
            x53[x53]
            x54[x54]
            x55[x55]
            x56[x56]
            x57[x57]
            x58[x58]
            x59[x59]
            x5a[x5a]
            x5b[x5b]
            x5c[x5c]
            x5d[x5d]
            x5e[x5e]
            x5f[x5f]
            x60[x60]
            x61[x61]
            x62[x62]
            x63[x63]
            x64[x64]
            x65[x65]
            x66[x66]
            x67[x67]
            x68[x68]
            x69[x69]
            x6a[x6a]
            x6b[x6b]
            x6c[x6c]
            x6d[x6d]
            x6e[x6e]
            x6f[x6f]
            x70[x70]
            x71[x71]
            x72[x72]
            x73[x73]
            x74[x74]
            x75[x75]
            x76[x76]
            x77[x77]
            x78[x78]
            x79[x79]
            x7a[x7a]
            x7b[x7b]
            x7c[x7c]
            x7d[x7d]
            x7e[x7e]
            x7f[x7f]
            x80[x80]
            x81[x81]
            x82[x82]
            x83[x83]
            x84[x84]
            x85[x85]
            x86[x86]
            x87[x87]
            x88[x88]
            x89[x89]
            x8a[x8a]
            x8b[x8b]
            x8c[x8c]
            x8d[x8d]
            x8e[x8e]
            x8f[x8f]
            x90[x90]
            x91[x91]
            x92[x92]
            x93[x93]
            x94[x94]
            x95[x95]
            x96[x96]
            x97[x97]
            x98[x98]
            x99[x99]
            x9a[x9a]
            x9b[x9b]
            x9c[x9c]
            x9d[x9d]
            x9e[x9e]
            x9f[x9f]
            xa0[xa0]
            xa1[xa1]
            xa2[xa2]
            xa3[xa3]
            xa4[xa4]
            xac[xac]
            xad[xad]
            xae[xae]
            xaf[xaf]
            xb0[xb0]
            xb1[xb1]
            xb2[xb2]
            xb3[xb3]
            xb4[xb4]
            xb5[xb5]
            xb6[xb6]
            xb7[xb7]
            xb8[xb8]
            xb9[xb9]
            xba[xba]
            xbb[xbb]
            xbc[xbc]
            xbd[xbd]
            xbe[xbe]
            xbf[xbf]
            xc0[xc0]
            xc1[xc1]
            xc2[xc2]
            xc3[xc3]
            xc4[xc4]
            xc5[xc5]
            xc6[xc6]
            xc7[xc7]
            xc8[xc8]
            xc9[xc9]
            xca[xca]
            xcb[xcb]
            xcc[xcc]
            xcd[xcd]
            xce[xce]
            xcf[xcf]
            xd0[xd0]
            xd1[xd1]
            xd2[xd2]
            xd3[xd3]
            xd4[xd4]
            xd5[xd5]
            xd6[xd6]
            xd7[xd7]
            xf9[xf9]
            xfa[xfa]
            xfb[xfb]
            xfc[xfc]
            xfd[xfd]
            xfe[xfe]
            xff[xff]
            ArgumentsResolver[ArgumentsResolver]
            ArgumentsResolverInterface[ArgumentsResolverInterface]
            Bytes[Bytes]
            Color[Color]
            Crypt[Crypt]
            DeprecatedArray[DeprecatedArray]
            DeprecationHelper[DeprecationHelper]
            DiffArray[DiffArray]
            EmailValidator[EmailValidator]
            EmailValidatorInterface[EmailValidatorInterface]
            Environment[Environment]
            FilterArray[FilterArray]
            Html[Html]
            HtmlSerializerRules[HtmlSerializerRules]
            Image[Image]
            NestedArray[NestedArray]
            Number[Number]
            OpCodeCache[OpCodeCache]
            Random[Random]
            Rectangle[Rectangle]
            Reflection[Reflection]
            SortArray[SortArray]
            Tags[Tags]
            Timer[Timer]
            ToStringTrait[ToStringTrait]
            Unicode[Unicode]
            UrlHelper[UrlHelper]
            UserAgent[UserAgent]
            Variable[Variable]
            Xss[Xss]
            Com[Com]
            Pecl[Pecl]
            Php[Php]
            Uuid[Uuid]
            UuidInterface[UuidInterface]
            Constraint[Constraint]
            CoreServiceProvider[CoreServiceProvider]
            Cron[Cron]
            CronInterface[CronInterface]
            DestructableInterface[DestructableInterface]
            DrupalKernel[DrupalKernel]
            DrupalKernelInterface[DrupalKernelInterface]
            GeneratedButton[GeneratedButton]
            GeneratedLink[GeneratedLink]
            GeneratedNoLink[GeneratedNoLink]
            GeneratedUrl[GeneratedUrl]
            Link[Link]
            PrivateKey[PrivateKey]
            Url[Url]
            AccessArgumentsResolverFactory[AccessArgumentsResolverFactory]
            AccessArgumentsResolverFactoryInterface[AccessArgumentsResolverFactoryInterface]
            AccessCheckInterface[AccessCheckInterface]
            AccessException[AccessException]
            AccessGroupAnd[AccessGroupAnd]
            AccessibleInterface[AccessibleInterface]
            AccessManager[AccessManager]
            AccessManagerInterface[AccessManagerInterface]
            AccessResult[AccessResult]
            AccessResultAllowed[AccessResultAllowed]
            AccessResultForbidden[AccessResultForbidden]
            AccessResultInterface[AccessResultInterface]
            AccessResultNeutral[AccessResultNeutral]
            AccessResultReasonInterface[AccessResultReasonInterface]
            CheckProvider[CheckProvider]
            CheckProviderInterface[CheckProviderInterface]
            CsrfAccessCheck[CsrfAccessCheck]
            CsrfRequestHeaderAccessCheck[CsrfRequestHeaderAccessCheck]
            CsrfTokenGenerator[CsrfTokenGenerator]
            CustomAccessCheck[CustomAccessCheck]
            DefaultAccessCheck[DefaultAccessCheck]
            DependentAccessInterface[DependentAccessInterface]
            RefinableDependentAccessInterface[RefinableDependentAccessInterface]
            RefinableDependentAccessTrait[RefinableDependentAccessTrait]
            RoutePathGenerationTrait[RoutePathGenerationTrait]
            RouteProcessorCsrf[RouteProcessorCsrf]
            ActionBase[ActionBase]
            ActionInterface[ActionInterface]
            ActionManager[ActionManager]
            ActionPluginCollection[ActionPluginCollection]
            ConfigurableActionBase[ConfigurableActionBase]
            Action[Action]
            DeleteAction[DeleteAction]
            EmailAction[EmailAction]
            EntityActionBase[EntityActionBase]
            GotoAction[GotoAction]
            MessageAction[MessageAction]
            PublishAction[PublishAction]
            SaveAction[SaveAction]
            UnpublishAction[UnpublishAction]
            EntityActionDeriverBase[EntityActionDeriverBase]
            EntityChangedActionDeriver[EntityChangedActionDeriver]
            EntityDeleteActionDeriver[EntityDeleteActionDeriver]
            EntityPublishedActionDeriver[EntityPublishedActionDeriver]
            AddCssCommand[AddCssCommand]
            AddJsCommand[AddJsCommand]
            AfterCommand[AfterCommand]
            AjaxFormHelperTrait[AjaxFormHelperTrait]
            AjaxHelperTrait[AjaxHelperTrait]
            AjaxResponse[AjaxResponse]
            AjaxResponseAttachmentsProcessor[AjaxResponseAttachmentsProcessor]
            AlertCommand[AlertCommand]
            AnnounceCommand[AnnounceCommand]
            AppendCommand[AppendCommand]
            BaseCommand[BaseCommand]
            BeforeCommand[BeforeCommand]
            ChangedCommand[ChangedCommand]
            CloseDialogCommand[CloseDialogCommand]
            CloseModalDialogCommand[CloseModalDialogCommand]
            CommandInterface[CommandInterface]
            CommandWithAttachedAssetsInterface[CommandWithAttachedAssetsInterface]
            CommandWithAttachedAssetsTrait[CommandWithAttachedAssetsTrait]
            CssCommand[CssCommand]
            DataCommand[DataCommand]
            FocusFirstCommand[FocusFirstCommand]
            HtmlCommand[HtmlCommand]
            InsertCommand[InsertCommand]
            InvokeCommand[InvokeCommand]
            MessageCommand[MessageCommand]
            OpenDialogCommand[OpenDialogCommand]
            OpenModalDialogCommand[OpenModalDialogCommand]
            OpenModalDialogWithUrl[OpenModalDialogWithUrl]
            OpenOffCanvasDialogCommand[OpenOffCanvasDialogCommand]
            PrependCommand[PrependCommand]
            RedirectCommand[RedirectCommand]
            RemoveCommand[RemoveCommand]
            ReplaceCommand[ReplaceCommand]
            RestripeCommand[RestripeCommand]
            ScrollTopCommand[ScrollTopCommand]
            SetDialogOptionCommand[SetDialogOptionCommand]
            SetDialogTitleCommand[SetDialogTitleCommand]
            SettingsCommand[SettingsCommand]
            TabledragWarningCommand[TabledragWarningCommand]
            UpdateBuildIdCommand[UpdateBuildIdCommand]
            ContextDefinition[ContextDefinition]
            Mail[Mail]
            PluralTranslation[PluralTranslation]
            QueueWorker[QueueWorker]
            Translation[Translation]
            ArchiverException[ArchiverException]
            ArchiverInterface[ArchiverInterface]
            ArchiverManager[ArchiverManager]
            ArchiveTar[ArchiveTar]
            Tar[Tar]
            Zip[Zip]
            Archiver[Archiver]
            AssetCollectionGrouperInterface[AssetCollectionGrouperInterface]
            AssetCollectionGroupOptimizerInterface[AssetCollectionGroupOptimizerInterface]
            AssetCollectionOptimizerInterface[AssetCollectionOptimizerInterface]
            AssetCollectionRendererInterface[AssetCollectionRendererInterface]
            AssetDumper[AssetDumper]
            AssetDumperInterface[AssetDumperInterface]
            AssetDumperUriInterface[AssetDumperUriInterface]
            AssetGroupSetHashTrait[AssetGroupSetHashTrait]
            AssetOptimizerInterface[AssetOptimizerInterface]
            AssetQueryString[AssetQueryString]
            AssetQueryStringInterface[AssetQueryStringInterface]
            AssetResolver[AssetResolver]
            AssetResolverInterface[AssetResolverInterface]
            AttachedAssets[AttachedAssets]
            AttachedAssetsInterface[AttachedAssetsInterface]
            CssCollectionGrouper[CssCollectionGrouper]
            CssCollectionOptimizerLazy[CssCollectionOptimizerLazy]
            CssCollectionRenderer[CssCollectionRenderer]
            CssOptimizer[CssOptimizer]
            JsCollectionGrouper[JsCollectionGrouper]
            JsCollectionOptimizerLazy[JsCollectionOptimizerLazy]
            JsCollectionRenderer[JsCollectionRenderer]
            JsOptimizer[JsOptimizer]
            LibrariesDirectoryFileFinder[LibrariesDirectoryFileFinder]
            LibraryDependencyResolver[LibraryDependencyResolver]
            LibraryDependencyResolverInterface[LibraryDependencyResolverInterface]
            LibraryDiscovery[LibraryDiscovery]
            LibraryDiscoveryCollector[LibraryDiscoveryCollector]
            LibraryDiscoveryInterface[LibraryDiscoveryInterface]
            LibraryDiscoveryParser[LibraryDiscoveryParser]
            IncompleteLibraryDefinitionException[IncompleteLibraryDefinitionException]
            InvalidLibrariesExtendSpecificationException[InvalidLibrariesExtendSpecificationException]
            InvalidLibrariesOverrideSpecificationException[InvalidLibrariesOverrideSpecificationException]
            InvalidLibraryFileException[InvalidLibraryFileException]
            LibraryDefinitionMissingLicenseException[LibraryDefinitionMissingLicenseException]
            AuthenticationCollector[AuthenticationCollector]
            AuthenticationCollectorInterface[AuthenticationCollectorInterface]
            AuthenticationManager[AuthenticationManager]
            AuthenticationProviderChallengeInterface[AuthenticationProviderChallengeInterface]
            AuthenticationProviderFilterInterface[AuthenticationProviderFilterInterface]
            AuthenticationProviderInterface[AuthenticationProviderInterface]
            BatchBuilder[BatchBuilder]
            BatchStorage[BatchStorage]
            BatchStorageInterface[BatchStorageInterface]
            Percentage[Percentage]
            BlockBase[BlockBase]
            BlockManager[BlockManager]
            BlockManagerInterface[BlockManagerInterface]
            BlockPluginInterface[BlockPluginInterface]
            BlockPluginTrait[BlockPluginTrait]
            MainContentBlockPluginInterface[MainContentBlockPluginInterface]
            MessagesBlockPluginInterface[MessagesBlockPluginInterface]
            TitleBlockPluginInterface[TitleBlockPluginInterface]
            Block[Block]
            Broken[Broken]
            PageTitleBlock[PageTitleBlock]
            Breadcrumb[Breadcrumb]
            BreadcrumbBuilderInterface[BreadcrumbBuilderInterface]
            BreadcrumbManager[BreadcrumbManager]
            BreadcrumbPreprocess[BreadcrumbPreprocess]
            ChainBreadcrumbBuilderInterface[ChainBreadcrumbBuilderInterface]
            ApcuBackend[ApcuBackend]
            ApcuBackendFactory[ApcuBackendFactory]
            BackendChain[BackendChain]
            Cache[Cache]
            CacheableAjaxResponse[CacheableAjaxResponse]
            CacheableDependencyInterface[CacheableDependencyInterface]
            CacheableDependencyTrait[CacheableDependencyTrait]
            CacheableJsonResponse[CacheableJsonResponse]
            CacheableMetadata[CacheableMetadata]
            CacheableRedirectResponse[CacheableRedirectResponse]
            CacheableResponse[CacheableResponse]
            CacheableResponseInterface[CacheableResponseInterface]
            CacheableResponseTrait[CacheableResponseTrait]
            CacheBackendInterface[CacheBackendInterface]
            CacheCollector[CacheCollector]
            CacheCollectorInterface[CacheCollectorInterface]
            CacheFactory[CacheFactory]
            CacheFactoryInterface[CacheFactoryInterface]
            CacheOptionalInterface[CacheOptionalInterface]
            CacheRedirect[CacheRedirect]
            CacheTagsChecksumInterface[CacheTagsChecksumInterface]
            CacheTagsChecksumPreloadInterface[CacheTagsChecksumPreloadInterface]
            CacheTagsChecksumTrait[CacheTagsChecksumTrait]
            CacheTagsInvalidator[CacheTagsInvalidator]
            CacheTagsInvalidatorInterface[CacheTagsInvalidatorInterface]
            CacheTagsPurgeInterface[CacheTagsPurgeInterface]
            ChainedFastBackend[ChainedFastBackend]
            ChainedFastBackendFactory[ChainedFastBackendFactory]
            DatabaseBackend[DatabaseBackend]
            DatabaseBackendFactory[DatabaseBackendFactory]
            DatabaseCacheTagsChecksum[DatabaseCacheTagsChecksum]
            ListCacheBinsPass[ListCacheBinsPass]
            MemoryBackend[MemoryBackend]
            MemoryBackendFactory[MemoryBackendFactory]
            MemoryCounterBackend[MemoryCounterBackend]
            MemoryCounterBackendFactory[MemoryCounterBackendFactory]
            NullBackend[NullBackend]
            NullBackendFactory[NullBackendFactory]
            PhpBackend[PhpBackend]
            PhpBackendFactory[PhpBackendFactory]
            RefinableCacheableDependencyInterface[RefinableCacheableDependencyInterface]
            RefinableCacheableDependencyTrait[RefinableCacheableDependencyTrait]
            UncacheableDependencyTrait[UncacheableDependencyTrait]
            UnchangingCacheableDependencyTrait[UnchangingCacheableDependencyTrait]
            UseCacheBackendTrait[UseCacheBackendTrait]
            VariationCache[VariationCache]
            VariationCacheFactory[VariationCacheFactory]
            VariationCacheFactoryInterface[VariationCacheFactoryInterface]
            VariationCacheInterface[VariationCacheInterface]
            AccountPermissionsCacheContext[AccountPermissionsCacheContext]
            CacheContextInterface[CacheContextInterface]
            CacheContextsManager[CacheContextsManager]
            CacheContextsPass[CacheContextsPass]
            CalculatedCacheContextInterface[CalculatedCacheContextInterface]
            ContextCacheKeys[ContextCacheKeys]
            CookiesCacheContext[CookiesCacheContext]
            HeadersCacheContext[HeadersCacheContext]
            IpCacheContext[IpCacheContext]
            IsFrontPathCacheContext[IsFrontPathCacheContext]
            IsSuperUserCacheContext[IsSuperUserCacheContext]
            LanguagesCacheContext[LanguagesCacheContext]
            MenuActiveTrailsCacheContext[MenuActiveTrailsCacheContext]
            PagersCacheContext[PagersCacheContext]
            PathCacheContext[PathCacheContext]
            PathParentCacheContext[PathParentCacheContext]
            ProtocolVersionCacheContext[ProtocolVersionCacheContext]
            QueryArgsCacheContext[QueryArgsCacheContext]
            RequestFormatCacheContext[RequestFormatCacheContext]
            RequestStackCacheContextBase[RequestStackCacheContextBase]
            RouteCacheContext[RouteCacheContext]
            RouteNameCacheContext[RouteNameCacheContext]
            SessionCacheContext[SessionCacheContext]
            SessionExistsCacheContext[SessionExistsCacheContext]
            SiteCacheContext[SiteCacheContext]
            ThemeCacheContext[ThemeCacheContext]
            TimeZoneCacheContext[TimeZoneCacheContext]
            UrlCacheContext[UrlCacheContext]
            UserCacheContext[UserCacheContext]
            UserCacheContextBase[UserCacheContextBase]
            UserRolesCacheContext[UserRolesCacheContext]
            CacheTagPreloadSubscriber[CacheTagPreloadSubscriber]
            LruMemoryCache[LruMemoryCache]
            MemoryCache[MemoryCache]
            MemoryCacheFactory[MemoryCacheFactory]
            MemoryCacheInterface[MemoryCacheInterface]
            BackwardsCompatibilityClassLoader[BackwardsCompatibilityClassLoader]
            BootableCommandTrait[BootableCommandTrait]
            DbCommandBase[DbCommandBase]
            DbDumpApplication[DbDumpApplication]
            DbDumpCommand[DbDumpCommand]
            DbImportCommand[DbImportCommand]
            DbToolsApplication[DbToolsApplication]
            GenerateProxyClassApplication[GenerateProxyClassApplication]
            GenerateProxyClassCommand[GenerateProxyClassCommand]
            GenerateTheme[GenerateTheme]
            InstallCommand[InstallCommand]
            QuickStartCommand[QuickStartCommand]
            ServerCommand[ServerCommand]
            Composer[Composer]
            ConditionAccessResolverTrait[ConditionAccessResolverTrait]
            ConditionInterface[ConditionInterface]
            ConditionManager[ConditionManager]
            ConditionPluginBase[ConditionPluginBase]
            ConditionPluginCollection[ConditionPluginCollection]
            Condition[Condition]
            BootstrapConfigStorageFactory[BootstrapConfigStorageFactory]
            CachedStorage[CachedStorage]
            Config[Config]
            ConfigBase[ConfigBase]
            ConfigCollectionEvents[ConfigCollectionEvents]
            ConfigCollectionInfo[ConfigCollectionInfo]
            ConfigCrudEvent[ConfigCrudEvent]
            ConfigDirectoryNotDefinedException[ConfigDirectoryNotDefinedException]
            ConfigDuplicateUUIDException[ConfigDuplicateUUIDException]
            ConfigEvents[ConfigEvents]
            ConfigException[ConfigException]
            ConfigFactory[ConfigFactory]
            ConfigFactoryInterface[ConfigFactoryInterface]
            ConfigFactoryOverrideBase[ConfigFactoryOverrideBase]
            ConfigFactoryOverrideInterface[ConfigFactoryOverrideInterface]
            ConfigImporter[ConfigImporter]
            ConfigImporterEvent[ConfigImporterEvent]
            ConfigImporterException[ConfigImporterException]
            ConfigImportValidateEventSubscriberBase[ConfigImportValidateEventSubscriberBase]
            ConfigInstaller[ConfigInstaller]
            ConfigInstallerInterface[ConfigInstallerInterface]
            ConfigManager[ConfigManager]
            ConfigManagerInterface[ConfigManagerInterface]
            ConfigModuleOverridesEvent[ConfigModuleOverridesEvent]
            ConfigNameException[ConfigNameException]
            ConfigPrefixLengthException[ConfigPrefixLengthException]
            ConfigRenameEvent[ConfigRenameEvent]
            ConfigValueException[ConfigValueException]
            DatabaseStorage[DatabaseStorage]
            DefaultConfigMode[DefaultConfigMode]
            ExportStorageManager[ExportStorageManager]
            ExtensionInstallStorage[ExtensionInstallStorage]
            FileStorageFactory[FileStorageFactory]
            ImmutableConfig[ImmutableConfig]
            ImmutableConfigException[ImmutableConfigException]
            ImportStorageTransformer[ImportStorageTransformer]
            InstallStorage[InstallStorage]
            ManagedStorage[ManagedStorage]
            MemoryStorage[MemoryStorage]
            NullStorage[NullStorage]
            PreExistingConfigException[PreExistingConfigException]
            ReadOnlyStorage[ReadOnlyStorage]
            StorableConfigBase[StorableConfigBase]
            StorageCacheInterface[StorageCacheInterface]
            StorageComparer[StorageComparer]
            StorageComparerInterface[StorageComparerInterface]
            StorageCopyTrait[StorageCopyTrait]
            StorageException[StorageException]
            StorageInterface[StorageInterface]
            StorageManagerInterface[StorageManagerInterface]
            StorageTransformerException[StorageTransformerException]
            StorageTransformEvent[StorageTransformEvent]
            TypedConfigManager[TypedConfigManager]
            TypedConfigManagerInterface[TypedConfigManagerInterface]
            UnmetDependenciesException[UnmetDependenciesException]
            UnsupportedDataTypeConfigException[UnsupportedDataTypeConfigException]
            ConfigActionException[ConfigActionException]
            ConfigActionManager[ConfigActionManager]
            ConfigActionPluginInterface[ConfigActionPluginInterface]
            DuplicateConfigActionIdException[DuplicateConfigActionIdException]
            EntityMethodException[EntityMethodException]
            Exists[Exists]
            ActionMethod[ActionMethod]
            ConfigAction[ConfigAction]
            CreateForEachBundle[CreateForEachBundle]
            EntityClone[EntityClone]
            EntityCreate[EntityCreate]
            EntityMethod[EntityMethod]
            PermissionsPerBundle[PermissionsPerBundle]
            SetProperties[SetProperties]
            SimpleConfigUpdate[SimpleConfigUpdate]
            CreateForEachBundleDeriver[CreateForEachBundleDeriver]
            EntityCreateDeriver[EntityCreateDeriver]
            EntityMethodDeriver[EntityMethodDeriver]
            PermissionsPerBundleDeriver[PermissionsPerBundleDeriver]
            Checkpoint[Checkpoint]
            CheckpointExistsException[CheckpointExistsException]
            CheckpointListInterface[CheckpointListInterface]
            CheckpointStorage[CheckpointStorage]
            CheckpointStorageInterface[CheckpointStorageInterface]
            LinearHistory[LinearHistory]
            NoCheckpointsException[NoCheckpointsException]
            UnknownCheckpointException[UnknownCheckpointException]
            ConfigSchemaChecker[ConfigSchemaChecker]
            LenientConfigSchemaChecker[LenientConfigSchemaChecker]
            ConfigDependencyDeleteFormTrait[ConfigDependencyDeleteFormTrait]
            ConfigDependencyManager[ConfigDependencyManager]
            ConfigEntityBase[ConfigEntityBase]
            ConfigEntityBundleBase[ConfigEntityBundleBase]
            ConfigEntityDependency[ConfigEntityDependency]
            ConfigEntityInterface[ConfigEntityInterface]
            ConfigEntityListBuilder[ConfigEntityListBuilder]
            ConfigEntityStorage[ConfigEntityStorage]
            ConfigEntityStorageInterface[ConfigEntityStorageInterface]
            ConfigEntityType[ConfigEntityType]
            ConfigEntityTypeInterface[ConfigEntityTypeInterface]
            ConfigEntityUpdater[ConfigEntityUpdater]
            DraggableListBuilder[DraggableListBuilder]
            ImportableEntityStorageInterface[ImportableEntityStorageInterface]
            ThirdPartySettingsInterface[ThirdPartySettingsInterface]
            ConfigEntityIdLengthException[ConfigEntityIdLengthException]
            ConfigEntityStorageClassException[ConfigEntityStorageClassException]
            InvalidLookupKeyException[InvalidLookupKeyException]
            Query[Query]
            QueryFactory[QueryFactory]
            ConfigImporterBatch[ConfigImporterBatch]
            FinalMissingContentSubscriber[FinalMissingContentSubscriber]
            MissingContentEvent[MissingContentEvent]
            ConfigExistsConstraint[ConfigExistsConstraint]
            ConfigExistsConstraintValidator[ConfigExistsConstraintValidator]
            LangcodeRequiredIfTranslatableValuesConstraint[LangcodeRequiredIfTranslatableValuesConstraint]
            LangcodeRequiredIfTranslatableValuesConstraintValidator[LangcodeRequiredIfTranslatableValuesConstraintValidator]
            RequiredConfigDependenciesConstraint[RequiredConfigDependenciesConstraint]
            RequiredConfigDependenciesConstraintValidator[RequiredConfigDependenciesConstraintValidator]
            ArrayElement[ArrayElement]
            ConfigSchemaAlterException[ConfigSchemaAlterException]
            ConfigSchemaDiscovery[ConfigSchemaDiscovery]
            Element[Element]
            Ignore[Ignore]
            Mapping[Mapping]
            SchemaCheckTrait[SchemaCheckTrait]
            SchemaIncompleteException[SchemaIncompleteException]
            Sequence[Sequence]
            SequenceDataDefinition[SequenceDataDefinition]
            TypedConfigInterface[TypedConfigInterface]
            TypeResolver[TypeResolver]
            Undefined[Undefined]
            ControllerBase[ControllerBase]
            ControllerResolver[ControllerResolver]
            ControllerResolverInterface[ControllerResolverInterface]
            FormController[FormController]
            HtmlFormController[HtmlFormController]
            TitleResolver[TitleResolver]
            TitleResolverInterface[TitleResolverInterface]
            Psr7RequestValueResolver[Psr7RequestValueResolver]
            RouteMatchValueResolver[RouteMatchValueResolver]
            Connection[Connection]
            ConnectionNotDefinedException[ConnectionNotDefinedException]
            database_api[database.api]
            Database[Database]
            DatabaseAccessDeniedException[DatabaseAccessDeniedException]
            DatabaseConnectionRefusedException[DatabaseConnectionRefusedException]
            DatabaseException[DatabaseException]
            DatabaseExceptionWrapper[DatabaseExceptionWrapper]
            DatabaseNotFoundException[DatabaseNotFoundException]
            DriverNotSpecifiedException[DriverNotSpecifiedException]
            ExceptionHandler[ExceptionHandler]
            FetchModeTrait[FetchModeTrait]
            IntegrityConstraintViolationException[IntegrityConstraintViolationException]
            InvalidQueryException[InvalidQueryException]
            Log[Log]
            ReplicaKillSwitch[ReplicaKillSwitch]
            RowCountException[RowCountException]
            Schema[Schema]
            SchemaException[SchemaException]
            SchemaObjectDoesNotExistException[SchemaObjectDoesNotExistException]
            SchemaObjectExistsException[SchemaObjectExistsException]
            StatementInterface[StatementInterface]
            StatementIteratorTrait[StatementIteratorTrait]
            StatementPrefetchIterator[StatementPrefetchIterator]
            StatementWrapperIterator[StatementWrapperIterator]
            SupportsTemporaryTablesInterface[SupportsTemporaryTablesInterface]
            Transaction[Transaction]
            TransactionCommitFailedException[TransactionCommitFailedException]
            TransactionException[TransactionException]
            TransactionExplicitCommitNotAllowedException[TransactionExplicitCommitNotAllowedException]
            TransactionNameNonUniqueException[TransactionNameNonUniqueException]
            TransactionNoActiveException[TransactionNoActiveException]
            TransactionOutOfOrderException[TransactionOutOfOrderException]
            DatabaseEvent[DatabaseEvent]
            StatementEvent[StatementEvent]
            StatementExecutionEndEvent[StatementExecutionEndEvent]
            StatementExecutionFailureEvent[StatementExecutionFailureEvent]
            StatementExecutionStartEvent[StatementExecutionStartEvent]
            StatementExecutionSubscriber[StatementExecutionSubscriber]
            EventException[EventException]
            SchemaPrimaryKeyMustBeDroppedException[SchemaPrimaryKeyMustBeDroppedException]
            SchemaTableColumnSizeTooLargeException[SchemaTableColumnSizeTooLargeException]
            SchemaTableKeyTooLargeException[SchemaTableKeyTooLargeException]
            Tasks[Tasks]
            AlterableInterface[AlterableInterface]
            Delete[Delete]
            ExtendableInterface[ExtendableInterface]
            FieldsOverlapException[FieldsOverlapException]
            Insert[Insert]
            InsertTrait[InsertTrait]
            InvalidMergeQueryException[InvalidMergeQueryException]
            Merge[Merge]
            NoFieldsException[NoFieldsException]
            NoUniqueFieldException[NoUniqueFieldException]
            PagerSelectExtender[PagerSelectExtender]
            PlaceholderInterface[PlaceholderInterface]
            QueryConditionTrait[QueryConditionTrait]
            Select[Select]
            SelectExtender[SelectExtender]
            SelectInterface[SelectInterface]
            TableSortExtender[TableSortExtender]
            Truncate[Truncate]
            Update[Update]
            Upsert[Upsert]
            FetchAs[FetchAs]
            PdoResult[PdoResult]
            PdoTrait[PdoTrait]
            PrefetchedResult[PrefetchedResult]
            ResultBase[ResultBase]
            StatementBase[StatementBase]
            ClientConnectionTransactionState[ClientConnectionTransactionState]
            StackItem[StackItem]
            StackItemType[StackItemType]
            TransactionManagerBase[TransactionManagerBase]
            TransactionManagerInterface[TransactionManagerInterface]
            DateFormatInterface[DateFormatInterface]
            DateFormatter[DateFormatter]
            DateFormatterInterface[DateFormatterInterface]
            DateHelper[DateHelper]
            DatePreprocess[DatePreprocess]
            DrupalDateTime[DrupalDateTime]
            FormattedDateDiff[FormattedDateDiff]
            TimeZoneFormHelper[TimeZoneFormHelper]
            DateElementBase[DateElementBase]
            Datelist[Datelist]
            Datetime[Datetime]
            DateFormat[DateFormat]
            TimestampDatetimeWidget[TimestampDatetimeWidget]
            AdminAccountSwitcher[AdminAccountSwitcher]
            ContentExportCommand[ContentExportCommand]
            Existing[Existing]
            Exporter[Exporter]
            ExportMetadata[ExportMetadata]
            ExportResult[ExportResult]
            Finder[Finder]
            Importer[Importer]
            ImportException[ImportException]
            InvalidEntityException[InvalidEntityException]
            PreExportEvent[PreExportEvent]
            PreImportEvent[PreImportEvent]
            AutowireTrait[AutowireTrait]
            ClassResolver[ClassResolver]
            ClassResolverInterface[ClassResolverInterface]
            ContainerBuilder[ContainerBuilder]
            ContainerInjectionInterface[ContainerInjectionInterface]
            ContainerNotInitializedException[ContainerNotInitializedException]
            DependencySerializationTrait[DependencySerializationTrait]
            DeprecatedServicePropertyTrait[DeprecatedServicePropertyTrait]
            ServiceModifierInterface[ServiceModifierInterface]
            ServiceProviderBase[ServiceProviderBase]
            ServiceProviderInterface[ServiceProviderInterface]
            YamlFileLoader[YamlFileLoader]
            AuthenticationProviderPass[AuthenticationProviderPass]
            BackendCompilerPass[BackendCompilerPass]
            BackwardsCompatibilityClassLoaderPass[BackwardsCompatibilityClassLoaderPass]
            CorsCompilerPass[CorsCompilerPass]
            DeprecatedServicePass[DeprecatedServicePass]
            DevelopmentSettingsPass[DevelopmentSettingsPass]
            LoggerAwarePass[LoggerAwarePass]
            ModifyServiceDefinitionsPass[ModifyServiceDefinitionsPass]
            ProxyServicesPass[ProxyServicesPass]
            RegisterAccessChecksPass[RegisterAccessChecksPass]
            RegisterEventSubscribersPass[RegisterEventSubscribersPass]
            RegisterServicesForDestructionPass[RegisterServicesForDestructionPass]
            RegisterStreamWrappersPass[RegisterStreamWrappersPass]
            StackedKernelPass[StackedKernelPass]
            StackedSessionHandlerPass[StackedSessionHandlerPass]
            SuperUserAccessPolicyPass[SuperUserAccessPolicyPass]
            TaggedHandlersPass[TaggedHandlersPass]
            TwigExtensionPass[TwigExtensionPass]
            ContextAwareVariantInterface[ContextAwareVariantInterface]
            PageVariantInterface[PageVariantInterface]
            VariantBase[VariantBase]
            VariantInterface[VariantInterface]
            VariantManager[VariantManager]
            DisplayVariant[DisplayVariant]
            PageDisplayVariant[PageDisplayVariant]
            BundleEntityFormBase[BundleEntityFormBase]
            BundleEntityStorageInterface[BundleEntityStorageInterface]
            BundlePermissionHandlerTrait[BundlePermissionHandlerTrait]
            ContentEntityBase[ContentEntityBase]
            ContentEntityConfirmFormBase[ContentEntityConfirmFormBase]
            ContentEntityDeleteForm[ContentEntityDeleteForm]
            ContentEntityForm[ContentEntityForm]
            ContentEntityFormInterface[ContentEntityFormInterface]
            ContentEntityInterface[ContentEntityInterface]
            ContentEntityNullStorage[ContentEntityNullStorage]
            ContentEntityStorageBase[ContentEntityStorageBase]
            ContentEntityStorageInterface[ContentEntityStorageInterface]
            ContentEntityType[ContentEntityType]
            ContentEntityTypeInterface[ContentEntityTypeInterface]
            ContentUninstallValidator[ContentUninstallValidator]
            DependencyTrait[DependencyTrait]
            DraggableListBuilderTrait[DraggableListBuilderTrait]
            DynamicallyFieldableEntityStorageInterface[DynamicallyFieldableEntityStorageInterface]
            EditorialContentEntityBase[EditorialContentEntityBase]
            entity_api[entity.api]
            EntityAccessCheck[EntityAccessCheck]
            EntityAccessControlHandler[EntityAccessControlHandler]
            EntityAccessControlHandlerInterface[EntityAccessControlHandlerInterface]
            EntityAutocompleteMatcher[EntityAutocompleteMatcher]
            EntityAutocompleteMatcherInterface[EntityAutocompleteMatcherInterface]
            EntityBase[EntityBase]
            EntityBundleListener[EntityBundleListener]
            EntityBundleListenerInterface[EntityBundleListenerInterface]
            EntityChangedInterface[EntityChangedInterface]
            EntityChangedTrait[EntityChangedTrait]
            EntityChangesDetectionTrait[EntityChangesDetectionTrait]
            EntityConfirmFormBase[EntityConfirmFormBase]
            EntityConstraintViolationList[EntityConstraintViolationList]
            EntityConstraintViolationListInterface[EntityConstraintViolationListInterface]
            EntityCreateAccessCheck[EntityCreateAccessCheck]
            EntityCreateAnyAccessCheck[EntityCreateAnyAccessCheck]
            EntityDefinitionUpdateManager[EntityDefinitionUpdateManager]
            EntityDefinitionUpdateManagerInterface[EntityDefinitionUpdateManagerInterface]
            EntityDeleteForm[EntityDeleteForm]
            EntityDeleteFormTrait[EntityDeleteFormTrait]
            EntityDeleteMultipleAccessCheck[EntityDeleteMultipleAccessCheck]
            EntityDescriptionInterface[EntityDescriptionInterface]
            EntityDisplayBase[EntityDisplayBase]
            EntityDisplayModeBase[EntityDisplayModeBase]
            EntityDisplayModeInterface[EntityDisplayModeInterface]
            EntityDisplayPluginCollection[EntityDisplayPluginCollection]
            EntityDisplayRepository[EntityDisplayRepository]
            EntityDisplayRepositoryInterface[EntityDisplayRepositoryInterface]
            EntityFieldManager[EntityFieldManager]
            EntityFieldManagerInterface[EntityFieldManagerInterface]
            EntityForm[EntityForm]
            EntityFormBuilder[EntityFormBuilder]
            EntityFormBuilderInterface[EntityFormBuilderInterface]
            EntityFormInterface[EntityFormInterface]
            EntityFormModeInterface[EntityFormModeInterface]
            EntityHandlerBase[EntityHandlerBase]
            EntityHandlerInterface[EntityHandlerInterface]
            EntityInterface[EntityInterface]
            EntityLastInstalledSchemaRepository[EntityLastInstalledSchemaRepository]
            EntityLastInstalledSchemaRepositoryInterface[EntityLastInstalledSchemaRepositoryInterface]
            EntityListBuilder[EntityListBuilder]
            EntityListBuilderInterface[EntityListBuilderInterface]
            EntityMalformedException[EntityMalformedException]
            EntityPublishedInterface[EntityPublishedInterface]
            EntityPublishedTrait[EntityPublishedTrait]
            EntityRepository[EntityRepository]
            EntityRepositoryInterface[EntityRepositoryInterface]
            EntityResolverManager[EntityResolverManager]
            EntityStorageBase[EntityStorageBase]
            EntityStorageException[EntityStorageException]
            EntityStorageInterface[EntityStorageInterface]
            EntityType[EntityType]
            EntityTypeBundleInfo[EntityTypeBundleInfo]
            EntityTypeBundleInfoInterface[EntityTypeBundleInfoInterface]
            EntityTypeEvent[EntityTypeEvent]
            EntityTypeEvents[EntityTypeEvents]
            EntityTypeEventSubscriberTrait[EntityTypeEventSubscriberTrait]
            EntityTypeInterface[EntityTypeInterface]
            EntityTypeListener[EntityTypeListener]
            EntityTypeListenerInterface[EntityTypeListenerInterface]
            EntityTypeManager[EntityTypeManager]
            EntityTypeManagerInterface[EntityTypeManagerInterface]
            EntityTypeRepository[EntityTypeRepository]
            EntityTypeRepositoryInterface[EntityTypeRepositoryInterface]
            EntityViewBuilder[EntityViewBuilder]
            EntityViewBuilderInterface[EntityViewBuilderInterface]
            EntityViewModeInterface[EntityViewModeInterface]
            EntityWithPluginCollectionInterface[EntityWithPluginCollectionInterface]
            FieldableEntityInterface[FieldableEntityInterface]
            FieldableEntityStorageInterface[FieldableEntityStorageInterface]
            HtmlEntityFormController[HtmlEntityFormController]
            RevisionableContentEntityBase[RevisionableContentEntityBase]
            RevisionableEntityBundleInterface[RevisionableEntityBundleInterface]
            RevisionableInterface[RevisionableInterface]
            RevisionableStorageInterface[RevisionableStorageInterface]
            RevisionLogEntityTrait[RevisionLogEntityTrait]
            RevisionLogInterface[RevisionLogInterface]
            SynchronizableEntityTrait[SynchronizableEntityTrait]
            SynchronizableInterface[SynchronizableInterface]
            TranslatableInterface[TranslatableInterface]
            TranslatableRevisionableInterface[TranslatableRevisionableInterface]
            TranslatableRevisionableStorageInterface[TranslatableRevisionableStorageInterface]
            TranslatableStorageInterface[TranslatableStorageInterface]
            EntityReferenceSelection[EntityReferenceSelection]
            EntityController[EntityController]
            EntityListController[EntityListController]
            EntityRevisionViewController[EntityRevisionViewController]
            EntityViewController[EntityViewController]
            VersionHistoryController[VersionHistoryController]
            EntityDisplayInterface[EntityDisplayInterface]
            EntityFormDisplayInterface[EntityFormDisplayInterface]
            EntityViewDisplayInterface[EntityViewDisplayInterface]
            EntityAutocomplete[EntityAutocomplete]
            EntityBundleRouteEnhancer[EntityBundleRouteEnhancer]
            EntityRouteEnhancer[EntityRouteEnhancer]
            EntityFormDisplay[EntityFormDisplay]
            EntityFormMode[EntityFormMode]
            EntityViewDisplay[EntityViewDisplay]
            EntityViewMode[EntityViewMode]
            EntityFormDisplayAccessControlHandler[EntityFormDisplayAccessControlHandler]
            EntityViewDisplayAccessControlHandler[EntityViewDisplayAccessControlHandler]
            SelectionInterface[SelectionInterface]
            SelectionPluginBase[SelectionPluginBase]
            SelectionPluginManager[SelectionPluginManager]
            SelectionPluginManagerInterface[SelectionPluginManagerInterface]
            SelectionWithAutocreateInterface[SelectionWithAutocreateInterface]
            BundleConfigImportValidate[BundleConfigImportValidate]
            AmbiguousBundleClassException[AmbiguousBundleClassException]
            AmbiguousEntityClassException[AmbiguousEntityClassException]
            BundleClassInheritanceException[BundleClassInheritanceException]
            EntityTypeIdLengthException[EntityTypeIdLengthException]
            FieldStorageDefinitionUpdateForbiddenException[FieldStorageDefinitionUpdateForbiddenException]
            InvalidLinkTemplateException[InvalidLinkTemplateException]
            MissingBundleClassException[MissingBundleClassException]
            NoCorrespondingEntityClassException[NoCorrespondingEntityClassException]
            UndefinedLinkTemplateException[UndefinedLinkTemplateException]
            UnsupportedEntityTypeDefinitionException[UnsupportedEntityTypeDefinitionException]
            DeleteMultipleForm[DeleteMultipleForm]
            RevisionDeleteForm[RevisionDeleteForm]
            RevisionRevertForm[RevisionRevertForm]
            WorkspaceSafeFormTrait[WorkspaceSafeFormTrait]
            KeyValueContentEntityStorage[KeyValueContentEntityStorage]
            KeyValueEntityStorage[KeyValueEntityStorage]
            EntityBundle[EntityBundle]
            ConfigEntityAdapter[ConfigEntityAdapter]
            EntityAdapter[EntityAdapter]
            EntityReference[EntityReference]
            EntityDeriver[EntityDeriver]
            DefaultSelectionDeriver[DefaultSelectionDeriver]
            VersionHistoryLocalTasks[VersionHistoryLocalTasks]
            DefaultSelection[DefaultSelection]
            PhpSelection[PhpSelection]
            BundleConstraint[BundleConstraint]
            BundleConstraintValidator[BundleConstraintValidator]
            CompositeConstraintBase[CompositeConstraintBase]
            EntityChangedConstraint[EntityChangedConstraint]
            EntityChangedConstraintValidator[EntityChangedConstraintValidator]
            EntityHasFieldConstraint[EntityHasFieldConstraint]
            EntityHasFieldConstraintValidator[EntityHasFieldConstraintValidator]
            EntityTypeConstraint[EntityTypeConstraint]
            EntityTypeConstraintValidator[EntityTypeConstraintValidator]
            EntityUntranslatableFieldsConstraint[EntityUntranslatableFieldsConstraint]
            EntityUntranslatableFieldsConstraintValidator[EntityUntranslatableFieldsConstraintValidator]
            ImmutablePropertiesConstraint[ImmutablePropertiesConstraint]
            ImmutablePropertiesConstraintValidator[ImmutablePropertiesConstraintValidator]
            ReferenceAccessConstraint[ReferenceAccessConstraint]
            ReferenceAccessConstraintValidator[ReferenceAccessConstraintValidator]
            ValidReferenceConstraint[ValidReferenceConstraint]
            ValidReferenceConstraintValidator[ValidReferenceConstraintValidator]
            ConditionAggregateBase[ConditionAggregateBase]
            ConditionAggregateInterface[ConditionAggregateInterface]
            ConditionBase[ConditionBase]
            ConditionFundamentals[ConditionFundamentals]
            QueryAggregateInterface[QueryAggregateInterface]
            QueryBase[QueryBase]
            QueryException[QueryException]
            QueryFactoryInterface[QueryFactoryInterface]
            QueryInterface[QueryInterface]
            ConditionAggregate[ConditionAggregate]
            QueryAggregate[QueryAggregate]
            Tables[Tables]
            TablesInterface[TablesInterface]
            AdminHtmlRouteProvider[AdminHtmlRouteProvider]
            DefaultHtmlRouteProvider[DefaultHtmlRouteProvider]
            EntityRouteProviderInterface[EntityRouteProviderInterface]
            RevisionHtmlRouteProvider[RevisionHtmlRouteProvider]
            DynamicallyFieldableEntityStorageSchemaInterface[DynamicallyFieldableEntityStorageSchemaInterface]
            EntityStorageSchemaInterface[EntityStorageSchemaInterface]
            DefaultTableMapping[DefaultTableMapping]
            SqlContentEntityStorage[SqlContentEntityStorage]
            SqlContentEntityStorageException[SqlContentEntityStorageException]
            SqlContentEntityStorageSchema[SqlContentEntityStorageSchema]
            SqlEntityStorageInterface[SqlEntityStorageInterface]
            SqlFieldableEntityTypeListenerTrait[SqlFieldableEntityTypeListenerTrait]
            TableMappingInterface[TableMappingInterface]
            EntityDataDefinition[EntityDataDefinition]
            EntityDataDefinitionInterface[EntityDataDefinitionInterface]
            ActiveLinkResponseFilter[ActiveLinkResponseFilter]
            AjaxResponseSubscriber[AjaxResponseSubscriber]
            AnonymousUserResponseSubscriber[AnonymousUserResponseSubscriber]
            AuthenticationSubscriber[AuthenticationSubscriber]
            CacheRouterRebuildSubscriber[CacheRouterRebuildSubscriber]
            ClientErrorResponseSubscriber[ClientErrorResponseSubscriber]
            ConfigImportSubscriber[ConfigImportSubscriber]
            ConfigSnapshotSubscriber[ConfigSnapshotSubscriber]
            CsrfExceptionSubscriber[CsrfExceptionSubscriber]
            CustomPageExceptionHtmlSubscriber[CustomPageExceptionHtmlSubscriber]
            DefaultExceptionHtmlSubscriber[DefaultExceptionHtmlSubscriber]
            EarlyRenderingControllerWrapperSubscriber[EarlyRenderingControllerWrapperSubscriber]
            EnforcedFormResponseSubscriber[EnforcedFormResponseSubscriber]
            EntityRouteAlterSubscriber[EntityRouteAlterSubscriber]
            EntityRouteProviderSubscriber[EntityRouteProviderSubscriber]
            ExceptionDetectNeedsInstallSubscriber[ExceptionDetectNeedsInstallSubscriber]
            ExceptionJsonSubscriber[ExceptionJsonSubscriber]
            ExceptionLoggingSubscriber[ExceptionLoggingSubscriber]
            ExcludedModulesEventSubscriber[ExcludedModulesEventSubscriber]
            Fast404ExceptionHtmlSubscriber[Fast404ExceptionHtmlSubscriber]
            FinalExceptionSubscriber[FinalExceptionSubscriber]
            FinishResponseSubscriber[FinishResponseSubscriber]
            HtmlResponsePlaceholderStrategySubscriber[HtmlResponsePlaceholderStrategySubscriber]
            HtmlResponseSubscriber[HtmlResponseSubscriber]
            HttpExceptionSubscriberBase[HttpExceptionSubscriberBase]
            MainContentViewSubscriber[MainContentViewSubscriber]
            MaintenanceModeSubscriber[MaintenanceModeSubscriber]
            MenuRouterRebuildSubscriber[MenuRouterRebuildSubscriber]
            ModuleRouteSubscriber[ModuleRouteSubscriber]
            OptionsRequestSubscriber[OptionsRequestSubscriber]
            ParamConverterSubscriber[ParamConverterSubscriber]
            PathRootsSubscriber[PathRootsSubscriber]
            PsrResponseSubscriber[PsrResponseSubscriber]
            RedirectLeadingSlashesSubscriber[RedirectLeadingSlashesSubscriber]
            RedirectResponseSubscriber[RedirectResponseSubscriber]
            RenderArrayNonHtmlSubscriber[RenderArrayNonHtmlSubscriber]
            ResponseGeneratorSubscriber[ResponseGeneratorSubscriber]
            RouteAccessResponseSubscriber[RouteAccessResponseSubscriber]
            RouteMethodSubscriber[RouteMethodSubscriber]
            RssResponseRelativeUrlFilter[RssResponseRelativeUrlFilter]
            SpecialAttributesRouteSubscriber[SpecialAttributesRouteSubscriber]
            ExecutableException[ExecutableException]
            ExecutableInterface[ExecutableInterface]
            ExecutableManagerInterface[ExecutableManagerInterface]
            ExecutablePluginBase[ExecutablePluginBase]
            ConfigImportModuleUninstallValidatorInterface[ConfigImportModuleUninstallValidatorInterface]
            DatabaseDriver[DatabaseDriver]
            DatabaseDriverList[DatabaseDriverList]
            DatabaseDriverUninstallValidator[DatabaseDriverUninstallValidator]
            Dependency[Dependency]
            Extension[Extension]
            ExtensionDiscovery[ExtensionDiscovery]
            ExtensionLifecycle[ExtensionLifecycle]
            ExtensionList[ExtensionList]
            ExtensionNameLengthException[ExtensionNameLengthException]
            ExtensionNameReservedException[ExtensionNameReservedException]
            ExtensionPathResolver[ExtensionPathResolver]
            ExtensionVersion[ExtensionVersion]
            InfoParser[InfoParser]
            InfoParserDynamic[InfoParserDynamic]
            InfoParserException[InfoParserException]
            InfoParserInterface[InfoParserInterface]
            InstallProfileUninstallValidator[InstallProfileUninstallValidator]
            InstallRequirementsInterface[InstallRequirementsInterface]
            MissingDependencyException[MissingDependencyException]
            module_api[module.api]
            ModuleDependencyMessageTrait[ModuleDependencyMessageTrait]
            ModuleExtensionList[ModuleExtensionList]
            ModuleHandler[ModuleHandler]
            ModuleHandlerInterface[ModuleHandlerInterface]
            ModuleInstaller[ModuleInstaller]
            ModuleInstallerInterface[ModuleInstallerInterface]
            ModuleRequiredByThemesUninstallValidator[ModuleRequiredByThemesUninstallValidator]
            ModuleUninstallValidatorException[ModuleUninstallValidatorException]
            ModuleUninstallValidatorInterface[ModuleUninstallValidatorInterface]
            ProceduralCall[ProceduralCall]
            ProfileExtensionList[ProfileExtensionList]
            RequiredModuleUninstallValidator[RequiredModuleUninstallValidator]
            ThemeEngineExtensionList[ThemeEngineExtensionList]
            ThemeExtensionList[ThemeExtensionList]
            ThemeHandler[ThemeHandler]
            ThemeHandlerInterface[ThemeHandlerInterface]
            ThemeInstaller[ThemeInstaller]
            ThemeInstallerInterface[ThemeInstallerInterface]
            RecursiveExtensionFilterCallback[RecursiveExtensionFilterCallback]
            ObsoleteExtensionException[ObsoleteExtensionException]
            UninstalledExtensionException[UninstalledExtensionException]
            UnknownExtensionException[UnknownExtensionException]
            UnknownExtensionTypeException[UnknownExtensionTypeException]
            ExtensionExistsConstraint[ExtensionExistsConstraint]
            ExtensionExistsConstraintValidator[ExtensionExistsConstraintValidator]
            ExtensionNameConstraint[ExtensionNameConstraint]
            RequirementSeverity[RequirementSeverity]
            BaseFieldDefinition[BaseFieldDefinition]
            BaseFieldOverrideAccessControlHandler[BaseFieldOverrideAccessControlHandler]
            BaseFieldOverrideStorage[BaseFieldOverrideStorage]
            ChangedFieldItemList[ChangedFieldItemList]
            DeletedFieldsRepository[DeletedFieldsRepository]
            DeletedFieldsRepositoryInterface[DeletedFieldsRepositoryInterface]
            EntityReferenceFieldItemList[EntityReferenceFieldItemList]
            EntityReferenceFieldItemListInterface[EntityReferenceFieldItemListInterface]
            FallbackFieldTypeCategory[FallbackFieldTypeCategory]
            FieldConfigBase[FieldConfigBase]
            FieldConfigInterface[FieldConfigInterface]
            FieldConfigStorageBase[FieldConfigStorageBase]
            FieldDefinition[FieldDefinition]
            FieldDefinitionInterface[FieldDefinitionInterface]
            FieldDefinitionListener[FieldDefinitionListener]
            FieldDefinitionListenerInterface[FieldDefinitionListenerInterface]
            FieldException[FieldException]
            FieldFilteredMarkup[FieldFilteredMarkup]
            FieldInputValueNormalizerTrait[FieldInputValueNormalizerTrait]
            FieldItemBase[FieldItemBase]
            FieldItemInterface[FieldItemInterface]
            FieldItemList[FieldItemList]
            FieldItemListInterface[FieldItemListInterface]
            FieldPreprocess[FieldPreprocess]
            FieldStorageDefinitionEvent[FieldStorageDefinitionEvent]
            FieldStorageDefinitionEvents[FieldStorageDefinitionEvents]
            FieldStorageDefinitionEventSubscriberTrait[FieldStorageDefinitionEventSubscriberTrait]
            FieldStorageDefinitionInterface[FieldStorageDefinitionInterface]
            FieldStorageDefinitionListener[FieldStorageDefinitionListener]
            FieldStorageDefinitionListenerInterface[FieldStorageDefinitionListenerInterface]
            FieldTypeCategory[FieldTypeCategory]
            FieldTypeCategoryInterface[FieldTypeCategoryInterface]
            FieldTypeCategoryManager[FieldTypeCategoryManager]
            FieldTypeCategoryManagerInterface[FieldTypeCategoryManagerInterface]
            FieldTypePluginManager[FieldTypePluginManager]
            FieldTypePluginManagerInterface[FieldTypePluginManagerInterface]
            FieldUpdateActionBase[FieldUpdateActionBase]
            FormatterBase[FormatterBase]
            FormatterInterface[FormatterInterface]
            FormatterPluginManager[FormatterPluginManager]
            MapFieldItemList[MapFieldItemList]
            PluginSettingsBase[PluginSettingsBase]
            PluginSettingsInterface[PluginSettingsInterface]
            PreconfiguredFieldUiOptionsInterface[PreconfiguredFieldUiOptionsInterface]
            RequiredFieldStorageDefinitionInterface[RequiredFieldStorageDefinitionInterface]
            WidgetBase[WidgetBase]
            WidgetBaseInterface[WidgetBaseInterface]
            WidgetInterface[WidgetInterface]
            WidgetPluginManager[WidgetPluginManager]
            FieldFormatter[FieldFormatter]
            FieldType[FieldType]
            FieldWidget[FieldWidget]
            BaseFieldOverride[BaseFieldOverride]
            FieldItem[FieldItem]
            FieldItemDeriver[FieldItemDeriver]
            BasicStringFormatter[BasicStringFormatter]
            BooleanFormatter[BooleanFormatter]
            DecimalFormatter[DecimalFormatter]
            EntityReferenceEntityFormatter[EntityReferenceEntityFormatter]
            EntityReferenceFormatterBase[EntityReferenceFormatterBase]
            EntityReferenceIdFormatter[EntityReferenceIdFormatter]
            EntityReferenceLabelFormatter[EntityReferenceLabelFormatter]
            IntegerFormatter[IntegerFormatter]
            LanguageFormatter[LanguageFormatter]
            MailToFormatter[MailToFormatter]
            NumericFormatterBase[NumericFormatterBase]
            NumericUnformattedFormatter[NumericUnformattedFormatter]
            StringFormatter[StringFormatter]
            TimestampAgoFormatter[TimestampAgoFormatter]
            TimestampFormatter[TimestampFormatter]
            UriLinkFormatter[UriLinkFormatter]
            BooleanItem[BooleanItem]
            ChangedItem[ChangedItem]
            CreatedItem[CreatedItem]
            DecimalItem[DecimalItem]
            EmailItem[EmailItem]
            EntityReferenceItem[EntityReferenceItem]
            EntityReferenceItemBase[EntityReferenceItemBase]
            EntityReferenceItemInterface[EntityReferenceItemInterface]
            FloatItem[FloatItem]
            IntegerItem[IntegerItem]
            LanguageItem[LanguageItem]
            MapItem[MapItem]
            NumericItemBase[NumericItemBase]
            PasswordItem[PasswordItem]
            StringItem[StringItem]
            StringItemBase[StringItemBase]
            StringLongItem[StringLongItem]
            TimestampItem[TimestampItem]
            UriItem[UriItem]
            UuidItem[UuidItem]
            BooleanCheckboxWidget[BooleanCheckboxWidget]
            EmailDefaultWidget[EmailDefaultWidget]
            EntityReferenceAutocompleteTagsWidget[EntityReferenceAutocompleteTagsWidget]
            EntityReferenceAutocompleteWidget[EntityReferenceAutocompleteWidget]
            LanguageSelectWidget[LanguageSelectWidget]
            NumberWidget[NumberWidget]
            OptionsButtonsWidget[OptionsButtonsWidget]
            OptionsSelectWidget[OptionsSelectWidget]
            OptionsWidgetBase[OptionsWidgetBase]
            StringTextareaWidget[StringTextareaWidget]
            StringTextfieldWidget[StringTextfieldWidget]
            UriWidget[UriWidget]
            FieldItemDataDefinition[FieldItemDataDefinition]
            FieldItemDataDefinitionInterface[FieldItemDataDefinitionInterface]
            file_api[file.api]
            FileExists[FileExists]
            FileSystemInterface[FileSystemInterface]
            FileUrlGenerator[FileUrlGenerator]
            FileUrlGeneratorInterface[FileUrlGeneratorInterface]
            HtaccessWriter[HtaccessWriter]
            HtaccessWriterInterface[HtaccessWriterInterface]
            ProtectedDirectory[ProtectedDirectory]
            FileUploadSanitizeNameEvent[FileUploadSanitizeNameEvent]
            MimeTypeMapLoadedEvent[MimeTypeMapLoadedEvent]
            LegacyMimeTypeMapLoadedSubscriber[LegacyMimeTypeMapLoadedSubscriber]
            DirectoryNotReadyException[DirectoryNotReadyException]
            FileException[FileException]
            FileExistsException[FileExistsException]
            FileNotExistsException[FileNotExistsException]
            FileWriteException[FileWriteException]
            InvalidStreamWrapperException[InvalidStreamWrapperException]
            NotRegularDirectoryException[NotRegularDirectoryException]
            NotRegularFileException[NotRegularFileException]
            ExtensionMimeTypeGuesser[ExtensionMimeTypeGuesser]
            MimeTypeGuesser[MimeTypeGuesser]
            MimeTypeMap[MimeTypeMap]
            MimeTypeMapFactory[MimeTypeMapFactory]
            MimeTypeMapInterface[MimeTypeMapInterface]
            ChmodInterface[ChmodInterface]
            FileTransfer[FileTransfer]
            FileTransferException[FileTransferException]
            FTP[FTP]
            FTPExtension[FTPExtension]
            Local[Local]
            SSH[SSH]
            FileTransferAuthorizeForm[FileTransferAuthorizeForm]
            FloodInterface[FloodInterface]
            PrefixFloodInterface[PrefixFloodInterface]
            BaseFormIdInterface[BaseFormIdInterface]
            ConfigFormBase[ConfigFormBase]
            ConfigFormBaseTrait[ConfigFormBaseTrait]
            ConfigTarget[ConfigTarget]
            ConfirmFormBase[ConfirmFormBase]
            ConfirmFormHelper[ConfirmFormHelper]
            ConfirmFormInterface[ConfirmFormInterface]
            EnforcedResponse[EnforcedResponse]
            EnforcedResponseException[EnforcedResponseException]
            form_api[form.api]
            FormAjaxException[FormAjaxException]
            FormAjaxResponseBuilder[FormAjaxResponseBuilder]
            FormAjaxResponseBuilderInterface[FormAjaxResponseBuilderInterface]
            FormBase[FormBase]
            FormBuilder[FormBuilder]
            FormBuilderInterface[FormBuilderInterface]
            FormCache[FormCache]
            FormCacheInterface[FormCacheInterface]
            FormElementHelper[FormElementHelper]
            FormErrorHandler[FormErrorHandler]
            FormErrorHandlerInterface[FormErrorHandlerInterface]
            FormHelper[FormHelper]
            FormInterface[FormInterface]
            FormPreprocess[FormPreprocess]
            FormState[FormState]
            FormStateDecoratorBase[FormStateDecoratorBase]
            FormStateInterface[FormStateInterface]
            FormStateValuesTrait[FormStateValuesTrait]
            FormSubmitter[FormSubmitter]
            FormSubmitterInterface[FormSubmitterInterface]
            FormValidator[FormValidator]
            FormValidatorInterface[FormValidatorInterface]
            OptGroup[OptGroup]
            RedundantEditableConfigNamesTrait[RedundantEditableConfigNamesTrait]
            SubformState[SubformState]
            SubformStateInterface[SubformStateInterface]
            ToConfig[ToConfig]
            WorkspaceDynamicSafeFormInterface[WorkspaceDynamicSafeFormInterface]
            WorkspaceSafeFormInterface[WorkspaceSafeFormInterface]
            FormAjaxSubscriber[FormAjaxSubscriber]
            BrokenPostRequestException[BrokenPostRequestException]
            HookCollectorKeyValueWritePass[HookCollectorKeyValueWritePass]
            HookCollectorPass[HookCollectorPass]
            ImplementationList[ImplementationList]
            Hook[Hook]
            HookAttributeInterface[HookAttributeInterface]
            LegacyHook[LegacyHook]
            LegacyModuleImplementsAlter[LegacyModuleImplementsAlter]
            ProceduralHookScanStop[ProceduralHookScanStop]
            RemoveHook[RemoveHook]
            ReorderHook[ReorderHook]
            Order[Order]
            OrderAfter[OrderAfter]
            OrderBefore[OrderBefore]
            OrderInterface[OrderInterface]
            RelativeOrderBase[RelativeOrderBase]
            BeforeOrAfter[BeforeOrAfter]
            FirstOrLast[FirstOrLast]
            OrderOperation[OrderOperation]
            Htmx[Htmx]
            HtmxLocationResponseData[HtmxLocationResponseData]
            ClientFactory[ClientFactory]
            HandlerStackConfigurator[HandlerStackConfigurator]
            LinkRelationType[LinkRelationType]
            LinkRelationTypeInterface[LinkRelationTypeInterface]
            LinkRelationTypeManager[LinkRelationTypeManager]
            TrustedHostsRequestFactory[TrustedHostsRequestFactory]
            CacheableAccessDeniedHttpException[CacheableAccessDeniedHttpException]
            CacheableBadRequestHttpException[CacheableBadRequestHttpException]
            CacheableConflictHttpException[CacheableConflictHttpException]
            CacheableGoneHttpException[CacheableGoneHttpException]
            CacheableHttpException[CacheableHttpException]
            CacheableLengthRequiredHttpException[CacheableLengthRequiredHttpException]
            CacheableMethodNotAllowedHttpException[CacheableMethodNotAllowedHttpException]
            CacheableNotAcceptableHttpException[CacheableNotAcceptableHttpException]
            CacheableNotFoundHttpException[CacheableNotFoundHttpException]
            CacheablePreconditionFailedHttpException[CacheablePreconditionFailedHttpException]
            CacheablePreconditionRequiredHttpException[CacheablePreconditionRequiredHttpException]
            CacheableServiceUnavailableHttpException[CacheableServiceUnavailableHttpException]
            CacheableTooManyRequestsHttpException[CacheableTooManyRequestsHttpException]
            CacheableUnauthorizedHttpException[CacheableUnauthorizedHttpException]
            CacheableUnprocessableEntityHttpException[CacheableUnprocessableEntityHttpException]
            CacheableUnsupportedMediaTypeHttpException[CacheableUnsupportedMediaTypeHttpException]
            ImageFactory[ImageFactory]
            ImageInterface[ImageInterface]
            ImageToolkitBase[ImageToolkitBase]
            ImageToolkitInterface[ImageToolkitInterface]
            ImageToolkitManager[ImageToolkitManager]
            ImageToolkitOperationBase[ImageToolkitOperationBase]
            ImageToolkitOperationInterface[ImageToolkitOperationInterface]
            ImageToolkitOperationManager[ImageToolkitOperationManager]
            ImageToolkitOperationManagerInterface[ImageToolkitOperationManagerInterface]
            ImageToolkit[ImageToolkit]
            ImageToolkitOperation[ImageToolkitOperation]
            ConfigOverride[ConfigOverride]
            ExtensionListTrait[ExtensionListTrait]
            InstallerAccessPolicy[InstallerAccessPolicy]
            InstallerKernel[InstallerKernel]
            InstallerModuleExtensionList[InstallerModuleExtensionList]
            InstallerRedirectTrait[InstallerRedirectTrait]
            InstallerRouteBuilder[InstallerRouteBuilder]
            InstallerRouteProviderLazyBuilder[InstallerRouteProviderLazyBuilder]
            InstallerServiceProvider[InstallerServiceProvider]
            InstallerThemeEngineExtensionList[InstallerThemeEngineExtensionList]
            InstallerThemeExtensionList[InstallerThemeExtensionList]
            NormalInstallerServiceProvider[NormalInstallerServiceProvider]
            AlreadyInstalledException[AlreadyInstalledException]
            InstallerException[InstallerException]
            NoProfilesException[NoProfilesException]
            SelectLanguageForm[SelectLanguageForm]
            SelectProfileForm[SelectProfileForm]
            SiteConfigureForm[SiteConfigureForm]
            SiteSettingsForm[SiteSettingsForm]
            DatabaseStorageExpirable[DatabaseStorageExpirable]
            KeyValueDatabaseExpirableFactory[KeyValueDatabaseExpirableFactory]
            KeyValueDatabaseFactory[KeyValueDatabaseFactory]
            KeyValueExpirableFactory[KeyValueExpirableFactory]
            KeyValueExpirableFactoryInterface[KeyValueExpirableFactoryInterface]
            KeyValueFactory[KeyValueFactory]
            KeyValueFactoryInterface[KeyValueFactoryInterface]
            KeyValueMemoryFactory[KeyValueMemoryFactory]
            KeyValueNullExpirableFactory[KeyValueNullExpirableFactory]
            KeyValueStoreExpirableInterface[KeyValueStoreExpirableInterface]
            KeyValueStoreInterface[KeyValueStoreInterface]
            NullStorageExpirable[NullStorageExpirable]
            StorageBase[StorageBase]
            language_api[language.api]
            Language[Language]
            LanguageDefault[LanguageDefault]
            LanguageInterface[LanguageInterface]
            LanguageManager[LanguageManager]
            LanguageManagerInterface[LanguageManagerInterface]
            CurrentLanguageContext[CurrentLanguageContext]
            LayoutDefault[LayoutDefault]
            LayoutDefinition[LayoutDefinition]
            LayoutInterface[LayoutInterface]
            LayoutPluginManager[LayoutPluginManager]
            LayoutPluginManagerInterface[LayoutPluginManagerInterface]
            Layout[Layout]
            IconBuilderInterface[IconBuilderInterface]
            SvgIconBuilder[SvgIconBuilder]
            CountryManager[CountryManager]
            CountryManagerInterface[CountryManagerInterface]
            DatabaseLockBackend[DatabaseLockBackend]
            LockAcquiringException[LockAcquiringException]
            LockBackendAbstract[LockBackendAbstract]
            LockBackendInterface[LockBackendInterface]
            NullLockBackend[NullLockBackend]
            PersistentDatabaseLockBackend[PersistentDatabaseLockBackend]
            LoggerChannel[LoggerChannel]
            LoggerChannelFactory[LoggerChannelFactory]
            LoggerChannelFactoryInterface[LoggerChannelFactoryInterface]
            LoggerChannelInterface[LoggerChannelInterface]
            LoggerChannelTrait[LoggerChannelTrait]
            LogMessageParser[LogMessageParser]
            LogMessageParserInterface[LogMessageParserInterface]
            RfcLoggerTrait[RfcLoggerTrait]
            RfcLogLevel[RfcLogLevel]
            MailFormatHelper[MailFormatHelper]
            MailInterface[MailInterface]
            MailManager[MailManager]
            MailManagerInterface[MailManagerInterface]
            PhpMail[PhpMail]
            SymfonyMailer[SymfonyMailer]
            TransportServiceFactory[TransportServiceFactory]
            TransportServiceFactoryInterface[TransportServiceFactoryInterface]
            TransportServiceFactoryTrait[TransportServiceFactoryTrait]
            SendmailCommandValidationTransportFactory[SendmailCommandValidationTransportFactory]
            ContextualLinkDefault[ContextualLinkDefault]
            ContextualLinkInterface[ContextualLinkInterface]
            ContextualLinkManager[ContextualLinkManager]
            ContextualLinkManagerInterface[ContextualLinkManagerInterface]
            DefaultMenuLinkTreeManipulators[DefaultMenuLinkTreeManipulators]
            InaccessibleMenuLink[InaccessibleMenuLink]
            LocalActionDefault[LocalActionDefault]
            LocalActionInterface[LocalActionInterface]
            LocalActionManager[LocalActionManager]
            LocalActionManagerInterface[LocalActionManagerInterface]
            LocalActionWithDestination[LocalActionWithDestination]
            LocalTaskDefault[LocalTaskDefault]
            LocalTaskInterface[LocalTaskInterface]
            LocalTaskManager[LocalTaskManager]
            LocalTaskManagerInterface[LocalTaskManagerInterface]
            menu_api[menu.api]
            MenuActiveTrail[MenuActiveTrail]
            MenuActiveTrailInterface[MenuActiveTrailInterface]
            MenuLinkBase[MenuLinkBase]
            MenuLinkDefault[MenuLinkDefault]
            MenuLinkFieldDefinitions[MenuLinkFieldDefinitions]
            MenuLinkInterface[MenuLinkInterface]
            MenuLinkManager[MenuLinkManager]
            MenuLinkManagerInterface[MenuLinkManagerInterface]
            MenuLinkTree[MenuLinkTree]
            MenuLinkTreeElement[MenuLinkTreeElement]
            MenuLinkTreeInterface[MenuLinkTreeInterface]
            MenuParentFormSelector[MenuParentFormSelector]
            MenuParentFormSelectorInterface[MenuParentFormSelectorInterface]
            MenuPreprocess[MenuPreprocess]
            MenuTreeParameters[MenuTreeParameters]
            MenuTreeStorage[MenuTreeStorage]
            MenuTreeStorageInterface[MenuTreeStorageInterface]
            StaticMenuLinkOverrides[StaticMenuLinkOverrides]
            StaticMenuLinkOverridesInterface[StaticMenuLinkOverridesInterface]
            MenuLinkDefaultForm[MenuLinkDefaultForm]
            MenuLinkFormInterface[MenuLinkFormInterface]
            LocalActionsBlock[LocalActionsBlock]
            LocalTasksBlock[LocalTasksBlock]
            MenuLinkDepthConstraint[MenuLinkDepthConstraint]
            MenuLinkDepthConstraintValidator[MenuLinkDepthConstraintValidator]
            Messenger[Messenger]
            MessengerInterface[MessengerInterface]
            MessengerTrait[MessengerTrait]
            ChainRequestPolicy[ChainRequestPolicy]
            ChainRequestPolicyInterface[ChainRequestPolicyInterface]
            ChainResponsePolicy[ChainResponsePolicy]
            ChainResponsePolicyInterface[ChainResponsePolicyInterface]
            DefaultRequestPolicy[DefaultRequestPolicy]
            RequestPolicyInterface[RequestPolicyInterface]
            ResponsePolicyInterface[ResponsePolicyInterface]
            CommandLineOrUnsafeMethod[CommandLineOrUnsafeMethod]
            NoSessionOpen[NoSessionOpen]
            DenyNoCacheRoutes[DenyNoCacheRoutes]
            KillSwitch[KillSwitch]
            NoServerError[NoServerError]
            Pager[Pager]
            PagerManager[PagerManager]
            PagerManagerInterface[PagerManagerInterface]
            PagerParameters[PagerParameters]
            PagerParametersInterface[PagerParametersInterface]
            PagerPreprocess[PagerPreprocess]
            AdminPathConfigEntityConverter[AdminPathConfigEntityConverter]
            DynamicEntityTypeParamConverterTrait[DynamicEntityTypeParamConverterTrait]
            EntityConverter[EntityConverter]
            EntityRevisionParamConverter[EntityRevisionParamConverter]
            MenuLinkPluginConverter[MenuLinkPluginConverter]
            ParamConverterInterface[ParamConverterInterface]
            ParamConverterManager[ParamConverterManager]
            ParamConverterManagerInterface[ParamConverterManagerInterface]
            ParamNotConvertedException[ParamNotConvertedException]
            DefaultPasswordGenerator[DefaultPasswordGenerator]
            PasswordGeneratorInterface[PasswordGeneratorInterface]
            PasswordInterface[PasswordInterface]
            PhpassHashedPasswordBase[PhpassHashedPasswordBase]
            PhpPassword[PhpPassword]
            CurrentPathStack[CurrentPathStack]
            PathMatcher[PathMatcher]
            PathMatcherInterface[PathMatcherInterface]
            PathValidator[PathValidator]
            PathValidatorInterface[PathValidatorInterface]
            UniquePathAliasConstraint[UniquePathAliasConstraint]
            UniquePathAliasConstraintValidator[UniquePathAliasConstraintValidator]
            ValidPathConstraint[ValidPathConstraint]
            ValidPathConstraintValidator[ValidPathConstraintValidator]
            InboundPathProcessorInterface[InboundPathProcessorInterface]
            NullPathProcessorManager[NullPathProcessorManager]
            OutboundPathProcessorInterface[OutboundPathProcessorInterface]
            PathProcessorDecode[PathProcessorDecode]
            PathProcessorFront[PathProcessorFront]
            PathProcessorManager[PathProcessorManager]
            PhpStorageFactory[PhpStorageFactory]
            CachedDiscoveryClearer[CachedDiscoveryClearer]
            CachedDiscoveryClearerInterface[CachedDiscoveryClearerInterface]
            CategorizingPluginManagerTrait[CategorizingPluginManagerTrait]
            Component[Component]
            ConfigurablePluginBase[ConfigurablePluginBase]
            ConfigurableTrait[ConfigurableTrait]
            ContainerFactoryPluginInterface[ContainerFactoryPluginInterface]
            ContextAwarePluginAssignmentTrait[ContextAwarePluginAssignmentTrait]
            ContextAwarePluginTrait[ContextAwarePluginTrait]
            DefaultLazyPluginCollection[DefaultLazyPluginCollection]
            DefaultPluginManager[DefaultPluginManager]
            DefaultSingleLazyPluginCollection[DefaultSingleLazyPluginCollection]
            FilteredPluginManagerInterface[FilteredPluginManagerInterface]
            FilteredPluginManagerTrait[FilteredPluginManagerTrait]
            ObjectWithPluginCollectionInterface[ObjectWithPluginCollectionInterface]
            plugin_api[plugin.api]
            PluginDependencyTrait[PluginDependencyTrait]
            PluginFormBase[PluginFormBase]
            PluginFormFactory[PluginFormFactory]
            PluginFormFactoryInterface[PluginFormFactoryInterface]
            PluginFormInterface[PluginFormInterface]
            PluginManagerPass[PluginManagerPass]
            PluginWithFormsInterface[PluginWithFormsInterface]
            PluginWithFormsTrait[PluginWithFormsTrait]
            PreviewAwarePluginInterface[PreviewAwarePluginInterface]
            PreWarmablePluginManagerTrait[PreWarmablePluginManagerTrait]
            ContextAwarePluginManagerInterface[ContextAwarePluginManagerInterface]
            ContextAwarePluginManagerTrait[ContextAwarePluginManagerTrait]
            ContextHandler[ContextHandler]
            ContextHandlerInterface[ContextHandlerInterface]
            ContextProviderInterface[ContextProviderInterface]
            ContextRepositoryInterface[ContextRepositoryInterface]
            EntityContext[EntityContext]
            EntityContextDefinition[EntityContextDefinition]
            LazyContextRepository[LazyContextRepository]
            DependentPluginDefinitionInterface[DependentPluginDefinitionInterface]
            DependentPluginDefinitionTrait[DependentPluginDefinitionTrait]
            AttributeDiscoveryWithAnnotations[AttributeDiscoveryWithAnnotations]
            ContainerDerivativeDiscoveryDecorator[ContainerDerivativeDiscoveryDecorator]
            ContainerDeriverInterface[ContainerDeriverInterface]
            DirectoryWithMetadataDiscovery[DirectoryWithMetadataDiscovery]
            DirectoryWithMetadataPluginDiscovery[DirectoryWithMetadataPluginDiscovery]
            HookDiscovery[HookDiscovery]
            InfoHookDecorator[InfoHookDecorator]
            RegexRecursiveFilterIterator[RegexRecursiveFilterIterator]
            YamlDiscoveryDecorator[YamlDiscoveryDecorator]
            ContainerFactory[ContainerFactory]
            PluginExistsConstraint[PluginExistsConstraint]
            PluginExistsConstraintValidator[PluginExistsConstraintValidator]
            CachePreWarmer[CachePreWarmer]
            CachePreWarmerInterface[CachePreWarmerInterface]
            PreWarmableInterface[PreWarmableInterface]
            BareHtmlPageRenderer[BareHtmlPageRenderer]
            MatcherDumper[MatcherDumper]
            RouteBuilder[RouteBuilder]
            Batch[Batch]
            BatchMemory[BatchMemory]
            DatabaseQueue[DatabaseQueue]
            DelayableQueueInterface[DelayableQueueInterface]
            DelayedRequeueException[DelayedRequeueException]
            Memory[Memory]
            QueueDatabaseFactory[QueueDatabaseFactory]
            QueueFactory[QueueFactory]
            QueueFactoryInterface[QueueFactoryInterface]
            QueueGarbageCollectionInterface[QueueGarbageCollectionInterface]
            QueueInterface[QueueInterface]
            QueueWorkerBase[QueueWorkerBase]
            QueueWorkerInterface[QueueWorkerInterface]
            QueueWorkerManager[QueueWorkerManager]
            QueueWorkerManagerInterface[QueueWorkerManagerInterface]
            ReliableQueueInterface[ReliableQueueInterface]
            RequeueException[RequeueException]
            SuspendQueueException[SuspendQueueException]
            AllowListConfigStorage[AllowListConfigStorage]
            ConfigConfigurator[ConfigConfigurator]
            ConsoleInputCollector[ConsoleInputCollector]
            InputCollectorInterface[InputCollectorInterface]
            InputConfigurator[InputConfigurator]
            InstallConfigurator[InstallConfigurator]
            InvalidConfigException[InvalidConfigException]
            Recipe[Recipe]
            RecipeAppliedEvent[RecipeAppliedEvent]
            RecipeCommand[RecipeCommand]
            RecipeConfigInstaller[RecipeConfigInstaller]
            RecipeConfigStorageWrapper[RecipeConfigStorageWrapper]
            RecipeConfigurator[RecipeConfigurator]
            RecipeFileException[RecipeFileException]
            RecipeInfoCommand[RecipeInfoCommand]
            RecipeInputFormTrait[RecipeInputFormTrait]
            RecipeMissingExtensionsException[RecipeMissingExtensionsException]
            RecipeOverrideConfigStorage[RecipeOverrideConfigStorage]
            RecipePreExistingConfigException[RecipePreExistingConfigException]
            RecipeRunner[RecipeRunner]
            UnknownRecipeException[UnknownRecipeException]
            AttachmentsInterface[AttachmentsInterface]
            AttachmentsResponseProcessorInterface[AttachmentsResponseProcessorInterface]
            AttachmentsTrait[AttachmentsTrait]
            BareHtmlPageRendererInterface[BareHtmlPageRendererInterface]
            BubbleableMetadata[BubbleableMetadata]
            ElementInfoManager[ElementInfoManager]
            ElementInfoManagerInterface[ElementInfoManagerInterface]
            HtmlResponse[HtmlResponse]
            HtmlResponseAttachmentsProcessor[HtmlResponseAttachmentsProcessor]
            Markup[Markup]
            MetadataBubblingUrlGenerator[MetadataBubblingUrlGenerator]
            PageDisplayVariantSelectionEvent[PageDisplayVariantSelectionEvent]
            PlaceholderGenerator[PlaceholderGenerator]
            PlaceholderGeneratorInterface[PlaceholderGeneratorInterface]
            PlaceholderingRenderCache[PlaceholderingRenderCache]
            PreviewFallbackInterface[PreviewFallbackInterface]
            RenderableInterface[RenderableInterface]
            RenderCache[RenderCache]
            RenderCacheInterface[RenderCacheInterface]
            RenderContext[RenderContext]
            Renderer[Renderer]
            RendererInterface[RendererInterface]
            RenderEvents[RenderEvents]
            theme_api[theme.api]
            FormElement[FormElement]
            RenderElement[RenderElement]
            ComponentNotFoundException[ComponentNotFoundException]
            IncompatibleComponentSchema[IncompatibleComponentSchema]
            InvalidComponentDataException[InvalidComponentDataException]
            InvalidComponentException[InvalidComponentException]
            Actions[Actions]
            Button[Button]
            Checkbox[Checkbox]
            Checkboxes[Checkboxes]
            ComponentElement[ComponentElement]
            CompositeFormElementTrait[CompositeFormElementTrait]
            Date[Date]
            Details[Details]
            Dropbutton[Dropbutton]
            ElementInterface[ElementInterface]
            Email[Email]
            Fieldgroup[Fieldgroup]
            Fieldset[Fieldset]
            File[File]
            Form[Form]
            FormElementBase[FormElementBase]
            FormElementInterface[FormElementInterface]
            Hidden[Hidden]
            HtmlTag[HtmlTag]
            Icon[Icon]
            ImageButton[ImageButton]
            InlineTemplate[InlineTemplate]
            Item[Item]
            Label[Label]
            LanguageSelect[LanguageSelect]
            MachineName[MachineName]
            MoreLink[MoreLink]
            Operations[Operations]
            Page[Page]
            PageTitle[PageTitle]
            Password[Password]
            PasswordConfirm[PasswordConfirm]
            PathElement[PathElement]
            Radio[Radio]
            Radios[Radios]
            Range[Range]
            RenderCallbackInterface[RenderCallbackInterface]
            RenderElementBase[RenderElementBase]
            Search[Search]
            StatusMessages[StatusMessages]
            StatusReport[StatusReport]
            Submit[Submit]
            SystemCompactLink[SystemCompactLink]
            Table[Table]
            Tableselect[Tableselect]
            Tel[Tel]
            Textarea[Textarea]
            Textfield[Textfield]
            Token[Token]
            Value[Value]
            VerticalTabs[VerticalTabs]
            Weight[Weight]
            AjaxRenderer[AjaxRenderer]
            DialogRenderer[DialogRenderer]
            HtmlRenderer[HtmlRenderer]
            HtmxRenderer[HtmxRenderer]
            MainContentRendererInterface[MainContentRendererInterface]
            MainContentRenderersPass[MainContentRenderersPass]
            ModalRenderer[ModalRenderer]
            OffCanvasRenderer[OffCanvasRenderer]
            CachedStrategy[CachedStrategy]
            ChainedPlaceholderStrategy[ChainedPlaceholderStrategy]
            PlaceholderStrategyInterface[PlaceholderStrategyInterface]
            SingleFlushStrategy[SingleFlushStrategy]
            SimplePageVariant[SimplePageVariant]
            OutboundRouteProcessorInterface[OutboundRouteProcessorInterface]
            RouteProcessorCurrent[RouteProcessorCurrent]
            RouteProcessorManager[RouteProcessorManager]
            AccessAwareRouter[AccessAwareRouter]
            AccessAwareRouterInterface[AccessAwareRouterInterface]
            AdminContext[AdminContext]
            BcRoute[BcRoute]
            CacheableRouteProviderInterface[CacheableRouteProviderInterface]
            CacheableSecuredRedirectResponse[CacheableSecuredRedirectResponse]
            CompiledRoute[CompiledRoute]
            ContentTypeHeaderMatcher[ContentTypeHeaderMatcher]
            CurrentRouteMatch[CurrentRouteMatch]
            EnhancerInterface[EnhancerInterface]
            FilterInterface[FilterInterface]
            GeneratorNotInitializedException[GeneratorNotInitializedException]
            LazyRouteCollection[LazyRouteCollection]
            LocalAwareRedirectResponseTrait[LocalAwareRedirectResponseTrait]
            LocalRedirectResponse[LocalRedirectResponse]
            MatcherDumperInterface[MatcherDumperInterface]
            MatchingRouteNotFoundException[MatchingRouteNotFoundException]
            MethodFilter[MethodFilter]
            NullGenerator[NullGenerator]
            NullMatcherDumper[NullMatcherDumper]
            NullRouteMatch[NullRouteMatch]
            PathChangedHelper[PathChangedHelper]
            PreloadableRouteProviderInterface[PreloadableRouteProviderInterface]
            RedirectDestination[RedirectDestination]
            RedirectDestinationInterface[RedirectDestinationInterface]
            RedirectDestinationTrait[RedirectDestinationTrait]
            RequestContext[RequestContext]
            RequestFormatRouteFilter[RequestFormatRouteFilter]
            RequestHelper[RequestHelper]
            ResettableStackedRouteMatchInterface[ResettableStackedRouteMatchInterface]
            RouteBuilderInterface[RouteBuilderInterface]
            RouteBuildEvent[RouteBuildEvent]
            RouteCompiler[RouteCompiler]
            RouteMatch[RouteMatch]
            RouteMatchInterface[RouteMatchInterface]
            RouteObjectInterface[RouteObjectInterface]
            RoutePreloader[RoutePreloader]
            RouteProvider[RouteProvider]
            RouteProviderInterface[RouteProviderInterface]
            RouteProviderLazyBuilder[RouteProviderLazyBuilder]
            Router[Router]
            RouteSubscriberBase[RouteSubscriberBase]
            routing_api[routing.api]
            RoutingEvents[RoutingEvents]
            StackedRouteMatchInterface[StackedRouteMatchInterface]
            TrustedRedirectResponse[TrustedRedirectResponse]
            UrlGenerator[UrlGenerator]
            UrlGeneratorInterface[UrlGeneratorInterface]
            UrlMatcher[UrlMatcher]
            AccessInterface[AccessInterface]
            EntityRevisionRouteEnhancer[EntityRevisionRouteEnhancer]
            FormRouteEnhancer[FormRouteEnhancer]
            ParamConversionEnhancer[ParamConversionEnhancer]
            DoTrustedCallbackTrait[DoTrustedCallbackTrait]
            RequestSanitizer[RequestSanitizer]
            StaticTrustedCallbackHelper[StaticTrustedCallbackHelper]
            TrustedCallbackInterface[TrustedCallbackInterface]
            UntrustedCallbackException[UntrustedCallbackException]
            TrustedCallback[TrustedCallback]
            JsonSchema[JsonSchema]
            AccessPolicyBase[AccessPolicyBase]
            AccessPolicyInterface[AccessPolicyInterface]
            AccessPolicyProcessor[AccessPolicyProcessor]
            AccessPolicyProcessorInterface[AccessPolicyProcessorInterface]
            AccessPolicyScopeException[AccessPolicyScopeException]
            AccountEvents[AccountEvents]
            AccountInterface[AccountInterface]
            AccountProxy[AccountProxy]
            AccountProxyInterface[AccountProxyInterface]
            AccountSetEvent[AccountSetEvent]
            AccountSwitcher[AccountSwitcher]
            AccountSwitcherInterface[AccountSwitcherInterface]
            AnonymousUserSession[AnonymousUserSession]
            CalculatedPermissions[CalculatedPermissions]
            CalculatedPermissionsInterface[CalculatedPermissionsInterface]
            CalculatedPermissionsItem[CalculatedPermissionsItem]
            CalculatedPermissionsItemInterface[CalculatedPermissionsItemInterface]
            CalculatedPermissionsTrait[CalculatedPermissionsTrait]
            MetadataBag[MetadataBag]
            PermissionChecker[PermissionChecker]
            PermissionCheckerInterface[PermissionCheckerInterface]
            PermissionsHashGenerator[PermissionsHashGenerator]
            PermissionsHashGeneratorInterface[PermissionsHashGeneratorInterface]
            RefinableCalculatedPermissions[RefinableCalculatedPermissions]
            RefinableCalculatedPermissionsInterface[RefinableCalculatedPermissionsInterface]
            ResponseKeepSessionOpenInterface[ResponseKeepSessionOpenInterface]
            SessionConfiguration[SessionConfiguration]
            SessionConfigurationInterface[SessionConfigurationInterface]
            SessionHandler[SessionHandler]
            SessionManager[SessionManager]
            SessionManagerInterface[SessionManagerInterface]
            SuperUserAccessPolicy[SuperUserAccessPolicy]
            UserRolesAccessPolicy[UserRolesAccessPolicy]
            UserSession[UserSession]
            WriteSafeSessionHandler[WriteSafeSessionHandler]
            WriteSafeSessionHandlerInterface[WriteSafeSessionHandlerInterface]
            MaintenanceMode[MaintenanceMode]
            MaintenanceModeEvents[MaintenanceModeEvents]
            MaintenanceModeInterface[MaintenanceModeInterface]
            Settings[Settings]
            SettingsEditor[SettingsEditor]
            AjaxPageState[AjaxPageState]
            ContentLength[ContentLength]
            KernelPreHandle[KernelPreHandle]
            NegotiationMiddleware[NegotiationMiddleware]
            ReverseProxyMiddleware[ReverseProxyMiddleware]
            Session[Session]
            StackedHttpKernel[StackedHttpKernel]
            State[State]
            StateInterface[StateInterface]
            AssetsStream[AssetsStream]
            LocalReadOnlyStream[LocalReadOnlyStream]
            LocalStream[LocalStream]
            PhpStreamWrapperInterface[PhpStreamWrapperInterface]
            PublicStream[PublicStream]
            ReadOnlyStream[ReadOnlyStream]
            StreamWrapperInterface[StreamWrapperInterface]
            StreamWrapperManager[StreamWrapperManager]
            StreamWrapperManagerInterface[StreamWrapperManagerInterface]
            TemporaryStream[TemporaryStream]
            ByteSizeMarkup[ByteSizeMarkup]
            PluralTranslatableMarkup[PluralTranslatableMarkup]
            StringTranslationTrait[StringTranslationTrait]
            TranslatableMarkup[TranslatableMarkup]
            TranslationInterface[TranslationInterface]
            TranslationManager[TranslationManager]
            CustomStrings[CustomStrings]
            FileTranslation[FileTranslation]
            StaticTranslation[StaticTranslation]
            TranslatorInterface[TranslatorInterface]
            Attribute[Attribute]
            AttributeArray[AttributeArray]
            AttributeBoolean[AttributeBoolean]
            AttributeHelper[AttributeHelper]
            AttributeValueBase[AttributeValueBase]
            ComponentNodeVisitor[ComponentNodeVisitor]
            ComponentsTwigExtension[ComponentsTwigExtension]
            DebugExtension[DebugExtension]
            IconsTwigExtension[IconsTwigExtension]
            RemoveCheckToStringNodeVisitor[RemoveCheckToStringNodeVisitor]
            TwigEnvironment[TwigEnvironment]
            TwigExtension[TwigExtension]
            TwigNodeCheckDeprecations[TwigNodeCheckDeprecations]
            TwigNodeTrans[TwigNodeTrans]
            TwigNodeVisitor[TwigNodeVisitor]
            TwigNodeVisitorCheckDeprecations[TwigNodeVisitorCheckDeprecations]
            TwigPhpStorageCache[TwigPhpStorageCache]
            TwigSandboxPolicy[TwigSandboxPolicy]
            TwigSimpleCheckToStringNode[TwigSimpleCheckToStringNode]
            TwigTransTokenParser[TwigTransTokenParser]
            ComponentLoader[ComponentLoader]
            FilesystemLoader[FilesystemLoader]
            StringLoader[StringLoader]
            ThemeRegistryLoader[ThemeRegistryLoader]
            Lock[Lock]
            PrivateTempStore[PrivateTempStore]
            PrivateTempStoreFactory[PrivateTempStoreFactory]
            SharedTempStore[SharedTempStore]
            SharedTempStoreFactory[SharedTempStoreFactory]
            TempStoreException[TempStoreException]
            BreakLockLink[BreakLockLink]
            ActiveTheme[ActiveTheme]
            AjaxBasePageNegotiator[AjaxBasePageNegotiator]
            ComponentNegotiator[ComponentNegotiator]
            ComponentPluginManager[ComponentPluginManager]
            DefaultNegotiator[DefaultNegotiator]
            ExtensionType[ExtensionType]
            ImagePreprocess[ImagePreprocess]
            MissingThemeDependencyException[MissingThemeDependencyException]
            Registry[Registry]
            StarterKitInterface[StarterKitInterface]
            ThemeAccessCheck[ThemeAccessCheck]
            ThemeCommonElements[ThemeCommonElements]
            ThemeInitialization[ThemeInitialization]
            ThemeInitializationInterface[ThemeInitializationInterface]
            ThemeManager[ThemeManager]
            ThemeManagerInterface[ThemeManagerInterface]
            ThemeNegotiator[ThemeNegotiator]
            ThemeNegotiatorInterface[ThemeNegotiatorInterface]
            ThemePreprocess[ThemePreprocess]
            ThemeSettings[ThemeSettings]
            ComponentMetadata[ComponentMetadata]
            ComponentValidator[ComponentValidator]
            SchemaCompatibilityChecker[SchemaCompatibilityChecker]
            IconCollector[IconCollector]
            IconDefinition[IconDefinition]
            IconDefinitionInterface[IconDefinitionInterface]
            IconExtractorBase[IconExtractorBase]
            IconExtractorInterface[IconExtractorInterface]
            IconExtractorPluginManager[IconExtractorPluginManager]
            IconExtractorSettingsForm[IconExtractorSettingsForm]
            IconExtractorWithFinder[IconExtractorWithFinder]
            IconExtractorWithFinderInterface[IconExtractorWithFinderInterface]
            IconFinder[IconFinder]
            IconFinderInterface[IconFinderInterface]
            IconPackExtractorForm[IconPackExtractorForm]
            IconExtractor[IconExtractor]
            IconDefinitionInvalidDataException[IconDefinitionInvalidDataException]
            IconPackConfigErrorException[IconPackConfigErrorException]
            IconPackManager[IconPackManager]
            IconPackManagerInterface[IconPackManagerInterface]
            PathExtractor[PathExtractor]
            SvgExtractor[SvgExtractor]
            SvgSpriteExtractor[SvgSpriteExtractor]
            ComplexDataDefinitionBase[ComplexDataDefinitionBase]
            ComplexDataDefinitionInterface[ComplexDataDefinitionInterface]
            ComplexDataInterface[ComplexDataInterface]
            ComputedItemListTrait[ComputedItemListTrait]
            DataDefinition[DataDefinition]
            DataDefinitionInterface[DataDefinitionInterface]
            DataReferenceBase[DataReferenceBase]
            DataReferenceDefinition[DataReferenceDefinition]
            DataReferenceDefinitionInterface[DataReferenceDefinitionInterface]
            DataReferenceInterface[DataReferenceInterface]
            DataReferenceTargetDefinition[DataReferenceTargetDefinition]
            ListDataDefinition[ListDataDefinition]
            ListDataDefinitionInterface[ListDataDefinitionInterface]
            ListInterface[ListInterface]
            MapDataDefinition[MapDataDefinition]
            OptionsProviderInterface[OptionsProviderInterface]
            PrimitiveBase[PrimitiveBase]
            PrimitiveInterface[PrimitiveInterface]
            TranslationStatusInterface[TranslationStatusInterface]
            TraversableTypedDataInterface[TraversableTypedDataInterface]
            TypedData[TypedData]
            TypedDataInterface[TypedDataInterface]
            TypedDataInternalPropertiesHelper[TypedDataInternalPropertiesHelper]
            TypedDataManager[TypedDataManager]
            TypedDataManagerInterface[TypedDataManagerInterface]
            TypedDataTrait[TypedDataTrait]
            DataType[DataType]
            MissingDataException[MissingDataException]
            ReadOnlyException[ReadOnlyException]
            Any[Any]
            BinaryData[BinaryData]
            BooleanData[BooleanData]
            DateTimeIso8601[DateTimeIso8601]
            DecimalData[DecimalData]
            DurationIso8601[DurationIso8601]
            FloatData[FloatData]
            IntegerData[IntegerData]
            ItemList[ItemList]
            LanguageReference[LanguageReference]
            Map[Map]
            StringData[StringData]
            TimeSpan[TimeSpan]
            Timestamp[Timestamp]
            Uri[Uri]
            BinaryInterface[BinaryInterface]
            BooleanInterface[BooleanInterface]
            DateTimeInterface[DateTimeInterface]
            DecimalInterface[DecimalInterface]
            DurationInterface[DurationInterface]
            FloatInterface[FloatInterface]
            IntegerInterface[IntegerInterface]
            StringInterface[StringInterface]
            UriInterface[UriInterface]
            ContextualValidatorInterface[ContextualValidatorInterface]
            RecursiveContextualValidator[RecursiveContextualValidator]
            RecursiveValidator[RecursiveValidator]
            TypedDataAwareValidatorTrait[TypedDataAwareValidatorTrait]
            TypedDataMetadata[TypedDataMetadata]
            EquivalentUpdate[EquivalentUpdate]
            RemovedPostUpdateNameException[RemovedPostUpdateNameException]
            UpdateBackend[UpdateBackend]
            UpdateCacheBackendFactory[UpdateCacheBackendFactory]
            UpdateCompilerPass[UpdateCompilerPass]
            UpdateHookRegistry[UpdateHookRegistry]
            UpdateKernel[UpdateKernel]
            UpdateRegistry[UpdateRegistry]
            UpdateServiceProvider[UpdateServiceProvider]
            Module[Module]
            Theme[Theme]
            Updater[Updater]
            UpdaterException[UpdaterException]
            UpdaterFileTransferException[UpdaterFileTransferException]
            UpdaterInterface[UpdaterInterface]
            CallableResolver[CallableResolver]
            Error[Error]
            link_api[link.api]
            LinkGenerator[LinkGenerator]
            LinkGeneratorInterface[LinkGeneratorInterface]
            OptionsEnumTrait[OptionsEnumTrait]
            PhpRequirements[PhpRequirements]
            ProjectInfo[ProjectInfo]
            TableSort[TableSort]
            ThemeRegistry[ThemeRegistry]
            token_api[token.api]
            UnroutedUrlAssembler[UnroutedUrlAssembler]
            UnroutedUrlAssemblerInterface[UnroutedUrlAssemblerInterface]
            UpdateException[UpdateException]
            BasicRecursiveValidatorFactory[BasicRecursiveValidatorFactory]
            ConstraintFactory[ConstraintFactory]
            ConstraintManager[ConstraintManager]
            ConstraintValidatorFactory[ConstraintValidatorFactory]
            ConstraintViolationBuilder[ConstraintViolationBuilder]
            DrupalTranslator[DrupalTranslator]
            ExecutionContext[ExecutionContext]
            ExecutionContextFactory[ExecutionContextFactory]
            AllowedValuesConstraint[AllowedValuesConstraint]
            AllowedValuesConstraintValidator[AllowedValuesConstraintValidator]
            AtLeastOneOfConstraint[AtLeastOneOfConstraint]
            AtLeastOneOfConstraintValidator[AtLeastOneOfConstraintValidator]
            ClassResolverConstraint[ClassResolverConstraint]
            ClassResolverConstraintValidator[ClassResolverConstraintValidator]
            ComplexDataConstraint[ComplexDataConstraint]
            ComplexDataConstraintValidator[ComplexDataConstraintValidator]
            CountConstraint[CountConstraint]
            CountryCodeConstraint[CountryCodeConstraint]
            EmailConstraint[EmailConstraint]
            EntityBundleExistsConstraint[EntityBundleExistsConstraint]
            EntityBundleExistsConstraintValidator[EntityBundleExistsConstraintValidator]
            FullyValidatableConstraint[FullyValidatableConstraint]
            FullyValidatableConstraintValidator[FullyValidatableConstraintValidator]
            IsNullConstraint[IsNullConstraint]
            IsNullConstraintValidator[IsNullConstraintValidator]
            LengthConstraint[LengthConstraint]
            NotNullConstraint[NotNullConstraint]
            NotNullConstraintValidator[NotNullConstraintValidator]
            PrimitiveTypeConstraint[PrimitiveTypeConstraint]
            PrimitiveTypeConstraintValidator[PrimitiveTypeConstraintValidator]
            RangeConstraint[RangeConstraint]
            RangeConstraintValidator[RangeConstraintValidator]
            RegexConstraint[RegexConstraint]
            UniqueFieldConstraint[UniqueFieldConstraint]
            UniqueFieldValueValidator[UniqueFieldValueValidator]
            UriHostConstraint[UriHostConstraint]
            UriHostConstraintValidator[UriHostConstraintValidator]
            UuidConstraint[UuidConstraint]
            ValidKeysConstraint[ValidKeysConstraint]
            ValidKeysConstraintValidator[ValidKeysConstraintValidator]
        end
    end

    %% Component Dependencies

    %% External Layer Dependencies
    ContribModules[ContribModules Layer]
    CoreModules[CoreModules Layer]
    Infrastructure[Infrastructure Layer]
OptimizedPhpArrayDumper -.-> Infrastructure
OptimizedPhpArrayDumper -.-> Infrastructure
OptimizedPhpArrayDumper -.-> Infrastructure
OptimizedPhpArrayDumper -.-> Infrastructure
ServerCommand -.-> CoreModules
ServerCommand -.-> ContribModules
ServerCommand -.-> CoreModules
ServerCommand -.-> ContribModules
Composer -.-> Infrastructure
Composer -.-> Infrastructure
    %% ... and 145 more external dependencies
```

---

## Component List

### Components

#### AccessArgumentsResolverFactory

**Purpose:** AccessArgumentsResolverFactory component

**File:** `AccessArgumentsResolverFactory.php`

**Architectural Issues:** 1 violations detected

---

#### AccessArgumentsResolverFactoryInterface

**Purpose:** AccessArgumentsResolverFactoryInterface component

**File:** `AccessArgumentsResolverFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessAwareRouter

**Purpose:** AccessAwareRouter component

**File:** `AccessAwareRouter.php`

**Architectural Issues:** 1 violations detected

---

#### AccessAwareRouterInterface

**Purpose:** AccessAwareRouterInterface component

**File:** `AccessAwareRouterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessCheckInterface

**Purpose:** AccessCheckInterface component

**File:** `AccessCheckInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessException

**Purpose:** AccessException component

**File:** `AccessException.php`

**Architectural Issues:** 1 violations detected

---

#### AccessGroupAnd

**Purpose:** AccessGroupAnd component

**File:** `AccessGroupAnd.php`

**Architectural Issues:** 1 violations detected

---

#### AccessInterface

**Purpose:** AccessInterface component

**File:** `AccessInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessManager

**Purpose:** Manages Access operations

**File:** `AccessManager.php`

**Architectural Issues:** 1 violations detected

---

#### AccessManagerInterface

**Purpose:** Manages AccessInterface operations

**File:** `AccessManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPolicyBase

**Purpose:** AccessPolicyBase component

**File:** `AccessPolicyBase.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPolicyInterface

**Purpose:** AccessPolicyInterface component

**File:** `AccessPolicyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPolicyProcessor

**Purpose:** AccessPolicyProcessor component

**File:** `AccessPolicyProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPolicyProcessorInterface

**Purpose:** AccessPolicyProcessorInterface component

**File:** `AccessPolicyProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessPolicyScopeException

**Purpose:** AccessPolicyScopeException component

**File:** `AccessPolicyScopeException.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResult

**Purpose:** AccessResult component

**File:** `AccessResult.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResultAllowed

**Purpose:** AccessResultAllowed component

**File:** `AccessResultAllowed.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResultForbidden

**Purpose:** AccessResultForbidden component

**File:** `AccessResultForbidden.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResultInterface

**Purpose:** AccessResultInterface component

**File:** `AccessResultInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResultNeutral

**Purpose:** AccessResultNeutral component

**File:** `AccessResultNeutral.php`

**Architectural Issues:** 1 violations detected

---

#### AccessResultReasonInterface

**Purpose:** AccessResultReasonInterface component

**File:** `AccessResultReasonInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccessibleInterface

**Purpose:** AccessibleInterface component

**File:** `AccessibleInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccountEvents

**Purpose:** AccountEvents component

**File:** `AccountEvents.php`

**Architectural Issues:** 1 violations detected

---

#### AccountInterface

**Purpose:** AccountInterface component

**File:** `AccountInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccountPermissionsCacheContext

**Purpose:** AccountPermissionsCacheContext component

**File:** `AccountPermissionsCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### AccountProxy

**Purpose:** AccountProxy component

**File:** `AccountProxy.php`

**Architectural Issues:** 1 violations detected

---

#### AccountProxyInterface

**Purpose:** AccountProxyInterface component

**File:** `AccountProxyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AccountSetEvent

**Purpose:** AccountSetEvent component

**File:** `AccountSetEvent.php`

**Architectural Issues:** 1 violations detected

---

#### AccountSwitcher

**Purpose:** AccountSwitcher component

**File:** `AccountSwitcher.php`

**Architectural Issues:** 1 violations detected

---

#### AccountSwitcherInterface

**Purpose:** AccountSwitcherInterface component

**File:** `AccountSwitcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Action

**Purpose:** Action component

**File:** `Action.php`

**Architectural Issues:** 2 violations detected

---

#### ActionBase

**Purpose:** ActionBase component

**File:** `ActionBase.php`

**Architectural Issues:** 1 violations detected

---

#### ActionInterface

**Purpose:** ActionInterface component

**File:** `ActionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ActionManager

**Purpose:** Manages Action operations

**File:** `ActionManager.php`

**Architectural Issues:** 1 violations detected

---

#### ActionMethod

**Purpose:** ActionMethod component

**File:** `ActionMethod.php`

**Architectural Issues:** 1 violations detected

---

#### ActionPluginCollection

**Purpose:** ActionPluginCollection component

**File:** `ActionPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### Actions

**Purpose:** Actions component

**File:** `Actions.php`

**Architectural Issues:** 1 violations detected

---

#### ActiveLinkResponseFilter

**Purpose:** ActiveLinkResponseFilter component

**File:** `ActiveLinkResponseFilter.php`

**Architectural Issues:** 1 violations detected

---

#### ActiveTheme

**Purpose:** ActiveTheme component

**File:** `ActiveTheme.php`

**Architectural Issues:** 1 violations detected

---

#### AddCssCommand

**Purpose:** AddCssCommand component

**File:** `AddCssCommand.php`

**Architectural Issues:** 1 violations detected

---

#### AddJsCommand

**Purpose:** AddJsCommand component

**File:** `AddJsCommand.php`

**Architectural Issues:** 1 violations detected

---

#### AdminAccountSwitcher

**Purpose:** AdminAccountSwitcher component

**File:** `AdminAccountSwitcher.php`

**Architectural Issues:** 1 violations detected

---

#### AdminContext

**Purpose:** AdminContext component

**File:** `AdminContext.php`

**Architectural Issues:** 1 violations detected

---

#### AdminHtmlRouteProvider

**Purpose:** AdminHtmlRouteProvider component

**File:** `AdminHtmlRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### AdminPathConfigEntityConverter

**Purpose:** AdminPathConfigEntityConverter component

**File:** `AdminPathConfigEntityConverter.php`

**Architectural Issues:** 2 violations detected

---

#### AfterCommand

**Purpose:** AfterCommand component

**File:** `AfterCommand.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxBasePageNegotiator

**Purpose:** AjaxBasePageNegotiator component

**File:** `AjaxBasePageNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxFormHelperTrait

**Purpose:** Form handling for AjaxHelperTrait

**File:** `AjaxFormHelperTrait.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxHelperTrait

**Purpose:** AjaxHelperTrait component

**File:** `AjaxHelperTrait.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxPageState

**Purpose:** AjaxPageState component

**File:** `AjaxPageState.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxRenderer

**Purpose:** AjaxRenderer component

**File:** `AjaxRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxResponse

**Purpose:** AjaxResponse component

**File:** `AjaxResponse.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxResponseAttachmentsProcessor

**Purpose:** AjaxResponseAttachmentsProcessor component

**File:** `AjaxResponseAttachmentsProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### AjaxResponseSubscriber

**Purpose:** AjaxResponseSubscriber component

**File:** `AjaxResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AlertCommand

**Purpose:** AlertCommand component

**File:** `AlertCommand.php`

**Architectural Issues:** 1 violations detected

---

#### AllowListConfigStorage

**Purpose:** AllowListConfigStorage component

**File:** `AllowListConfigStorage.php`

**Architectural Issues:** 1 violations detected

---

#### AllowedValuesConstraint

**Purpose:** AllowedValuesConstraint component

**File:** `AllowedValuesConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### AllowedValuesConstraintValidator

**Purpose:** AllowedValuesConstraintValidator component

**File:** `AllowedValuesConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### AlreadyInstalledException

**Purpose:** AlreadyInstalledException component

**File:** `AlreadyInstalledException.php`

**Architectural Issues:** 1 violations detected

---

#### AlterableInterface

**Purpose:** AlterableInterface component

**File:** `AlterableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AmbiguousBundleClassException

**Purpose:** AmbiguousBundleClassException component

**File:** `AmbiguousBundleClassException.php`

**Architectural Issues:** 1 violations detected

---

#### AmbiguousEntityClassException

**Purpose:** AmbiguousEntityClassException component

**File:** `AmbiguousEntityClassException.php`

**Architectural Issues:** 1 violations detected

---

#### AnnotatedClassDiscovery

**Purpose:** AnnotatedClassDiscovery component

**File:** `AnnotatedClassDiscovery.php`

**Architectural Issues:** 2 violations detected

---

#### AnnotationBase

**Purpose:** AnnotationBase component

**File:** `AnnotationBase.php`

**Architectural Issues:** 1 violations detected

---

#### AnnotationBridgeDecorator

**Purpose:** AnnotationBridgeDecorator component

**File:** `AnnotationBridgeDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### AnnotationInterface

**Purpose:** AnnotationInterface component

**File:** `AnnotationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AnnounceCommand

**Purpose:** AnnounceCommand component

**File:** `AnnounceCommand.php`

**Architectural Issues:** 1 violations detected

---

#### AnonymousUserResponseSubscriber

**Purpose:** AnonymousUserResponseSubscriber component

**File:** `AnonymousUserResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AnonymousUserSession

**Purpose:** AnonymousUserSession component

**File:** `AnonymousUserSession.php`

**Architectural Issues:** 1 violations detected

---

#### Any

**Purpose:** Any component

**File:** `Any.php`

**Architectural Issues:** 1 violations detected

---

#### ApcuBackend

**Purpose:** ApcuBackend component

**File:** `ApcuBackend.php`

**Architectural Issues:** 1 violations detected

---

#### ApcuBackendFactory

**Purpose:** ApcuBackendFactory component

**File:** `ApcuBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ApcuFileCacheBackend

**Purpose:** ApcuFileCacheBackend component

**File:** `ApcuFileCacheBackend.php`

**Architectural Issues:** 1 violations detected

---

#### AppendCommand

**Purpose:** AppendCommand component

**File:** `AppendCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ArchiveTar

**Purpose:** ArchiveTar component

**File:** `ArchiveTar.php`

**Architectural Issues:** 1 violations detected

---

#### Archiver

**Purpose:** Archiver component

**File:** `Archiver.php`

**Architectural Issues:** 2 violations detected

---

#### ArchiverException

**Purpose:** ArchiverException component

**File:** `ArchiverException.php`

**Architectural Issues:** 1 violations detected

---

#### ArchiverInterface

**Purpose:** ArchiverInterface component

**File:** `ArchiverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ArchiverManager

**Purpose:** Manages Archiver operations

**File:** `ArchiverManager.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentsResolver

**Purpose:** ArgumentsResolver component

**File:** `ArgumentsResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ArgumentsResolverInterface

**Purpose:** ArgumentsResolverInterface component

**File:** `ArgumentsResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayElement

**Purpose:** ArrayElement component

**File:** `ArrayElement.php`

**Architectural Issues:** 1 violations detected

---

#### AssetCollectionGroupOptimizerInterface

**Purpose:** AssetCollectionGroupOptimizerInterface component

**File:** `AssetCollectionGroupOptimizerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetCollectionGrouperInterface

**Purpose:** AssetCollectionGrouperInterface component

**File:** `AssetCollectionGrouperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetCollectionOptimizerInterface

**Purpose:** AssetCollectionOptimizerInterface component

**File:** `AssetCollectionOptimizerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetCollectionRendererInterface

**Purpose:** AssetCollectionRendererInterface component

**File:** `AssetCollectionRendererInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetDumper

**Purpose:** AssetDumper component

**File:** `AssetDumper.php`

**Architectural Issues:** 1 violations detected

---

#### AssetDumperInterface

**Purpose:** AssetDumperInterface component

**File:** `AssetDumperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetDumperUriInterface

**Purpose:** AssetDumperUriInterface component

**File:** `AssetDumperUriInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetGroupSetHashTrait

**Purpose:** AssetGroupSetHashTrait component

**File:** `AssetGroupSetHashTrait.php`

**Architectural Issues:** 1 violations detected

---

#### AssetOptimizerInterface

**Purpose:** AssetOptimizerInterface component

**File:** `AssetOptimizerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetQueryString

**Purpose:** AssetQueryString component

**File:** `AssetQueryString.php`

**Architectural Issues:** 1 violations detected

---

#### AssetQueryStringInterface

**Purpose:** AssetQueryStringInterface component

**File:** `AssetQueryStringInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetResolver

**Purpose:** AssetResolver component

**File:** `AssetResolver.php`

**Architectural Issues:** 1 violations detected

---

#### AssetResolverInterface

**Purpose:** AssetResolverInterface component

**File:** `AssetResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AssetsStream

**Purpose:** AssetsStream component

**File:** `AssetsStream.php`

**Architectural Issues:** 1 violations detected

---

#### AtLeastOneOfConstraint

**Purpose:** AtLeastOneOfConstraint component

**File:** `AtLeastOneOfConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### AtLeastOneOfConstraintValidator

**Purpose:** AtLeastOneOfConstraintValidator component

**File:** `AtLeastOneOfConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### AttachedAssets

**Purpose:** AttachedAssets component

**File:** `AttachedAssets.php`

**Architectural Issues:** 1 violations detected

---

#### AttachedAssetsInterface

**Purpose:** AttachedAssetsInterface component

**File:** `AttachedAssetsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AttachmentsInterface

**Purpose:** AttachmentsInterface component

**File:** `AttachmentsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AttachmentsResponseProcessorInterface

**Purpose:** AttachmentsResponseProcessorInterface component

**File:** `AttachmentsResponseProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AttachmentsTrait

**Purpose:** AttachmentsTrait component

**File:** `AttachmentsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Attribute

**Purpose:** Attribute component

**File:** `Attribute.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeArray

**Purpose:** AttributeArray component

**File:** `AttributeArray.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeBase

**Purpose:** AttributeBase component

**File:** `AttributeBase.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeBoolean

**Purpose:** AttributeBoolean component

**File:** `AttributeBoolean.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeBridgeDecorator

**Purpose:** AttributeBridgeDecorator component

**File:** `AttributeBridgeDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeClassDiscovery

**Purpose:** AttributeClassDiscovery component

**File:** `AttributeClassDiscovery.php`

**Architectural Issues:** 2 violations detected

---

#### AttributeDiscoveryWithAnnotations

**Purpose:** AttributeDiscoveryWithAnnotations component

**File:** `AttributeDiscoveryWithAnnotations.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeHelper

**Purpose:** AttributeHelper component

**File:** `AttributeHelper.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeInterface

**Purpose:** AttributeInterface component

**File:** `AttributeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AttributeValueBase

**Purpose:** AttributeValueBase component

**File:** `AttributeValueBase.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationCollector

**Purpose:** AuthenticationCollector component

**File:** `AuthenticationCollector.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationCollectorInterface

**Purpose:** AuthenticationCollectorInterface component

**File:** `AuthenticationCollectorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationManager

**Purpose:** Manages Authentication operations

**File:** `AuthenticationManager.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationProviderChallengeInterface

**Purpose:** AuthenticationProviderChallengeInterface component

**File:** `AuthenticationProviderChallengeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationProviderFilterInterface

**Purpose:** AuthenticationProviderFilterInterface component

**File:** `AuthenticationProviderFilterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationProviderInterface

**Purpose:** AuthenticationProviderInterface component

**File:** `AuthenticationProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationProviderPass

**Purpose:** AuthenticationProviderPass component

**File:** `AuthenticationProviderPass.php`

**Architectural Issues:** 1 violations detected

---

#### AuthenticationSubscriber

**Purpose:** AuthenticationSubscriber component

**File:** `AuthenticationSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### AutowireTrait

**Purpose:** AutowireTrait component

**File:** `AutowireTrait.php`

**Architectural Issues:** 1 violations detected

---

#### BackendChain

**Purpose:** BackendChain component

**File:** `BackendChain.php`

**Architectural Issues:** 1 violations detected

---

#### BackendCompilerPass

**Purpose:** BackendCompilerPass component

**File:** `BackendCompilerPass.php`

**Architectural Issues:** 1 violations detected

---

#### BackwardsCompatibilityClassLoader

**Purpose:** BackwardsCompatibilityClassLoader component

**File:** `BackwardsCompatibilityClassLoader.php`

**Architectural Issues:** 1 violations detected

---

#### BackwardsCompatibilityClassLoaderPass

**Purpose:** BackwardsCompatibilityClassLoaderPass component

**File:** `BackwardsCompatibilityClassLoaderPass.php`

**Architectural Issues:** 1 violations detected

---

#### BareHtmlPageRenderer

**Purpose:** BareHtmlPageRenderer component

**File:** `BareHtmlPageRenderer.php`

**Architectural Issues:** 2 violations detected

---

#### BareHtmlPageRendererInterface

**Purpose:** BareHtmlPageRendererInterface component

**File:** `BareHtmlPageRendererInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BaseCommand

**Purpose:** BaseCommand component

**File:** `BaseCommand.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFieldDefinition

**Purpose:** BaseFieldDefinition component

**File:** `BaseFieldDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFieldOverride

**Purpose:** BaseFieldOverride component

**File:** `BaseFieldOverride.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFieldOverrideAccessControlHandler

**Purpose:** Handles requests for BaseFieldOverrideAccessControl

**File:** `BaseFieldOverrideAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFieldOverrideStorage

**Purpose:** BaseFieldOverrideStorage component

**File:** `BaseFieldOverrideStorage.php`

**Architectural Issues:** 1 violations detected

---

#### BaseFormIdInterface

**Purpose:** Form handling for BaseIdInterface

**File:** `BaseFormIdInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BasicRecursiveValidatorFactory

**Purpose:** BasicRecursiveValidatorFactory component

**File:** `BasicRecursiveValidatorFactory.php`

**Architectural Issues:** 1 violations detected

---

#### BasicStringFormatter

**Purpose:** Form handling for BasicStringatter

**File:** `BasicStringFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### Batch

**Purpose:** Batch component

**File:** `Batch.php`

**Architectural Issues:** 1 violations detected

---

#### BatchBuilder

**Purpose:** BatchBuilder component

**File:** `BatchBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BatchMemory

**Purpose:** BatchMemory component

**File:** `BatchMemory.php`

**Architectural Issues:** 1 violations detected

---

#### BatchStorage

**Purpose:** BatchStorage component

**File:** `BatchStorage.php`

**Architectural Issues:** 2 violations detected

---

#### BatchStorageInterface

**Purpose:** BatchStorageInterface component

**File:** `BatchStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BcRoute

**Purpose:** BcRoute component

**File:** `BcRoute.php`

**Architectural Issues:** 1 violations detected

---

#### BeforeCommand

**Purpose:** BeforeCommand component

**File:** `BeforeCommand.php`

**Architectural Issues:** 1 violations detected

---

#### BeforeOrAfter

**Purpose:** BeforeOrAfter component

**File:** `BeforeOrAfter.php`

**Architectural Issues:** 1 violations detected

---

#### BinaryData

**Purpose:** BinaryData component

**File:** `BinaryData.php`

**Architectural Issues:** 1 violations detected

---

#### BinaryInterface

**Purpose:** BinaryInterface component

**File:** `BinaryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Block

**Purpose:** Block component

**File:** `Block.php`

**Architectural Issues:** 2 violations detected

---

#### BlockBase

**Purpose:** BlockBase component

**File:** `BlockBase.php`

**Architectural Issues:** 1 violations detected

---

#### BlockManager

**Purpose:** Manages Block operations

**File:** `BlockManager.php`

**Architectural Issues:** 1 violations detected

---

#### BlockManagerInterface

**Purpose:** Manages BlockInterface operations

**File:** `BlockManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPluginInterface

**Purpose:** BlockPluginInterface component

**File:** `BlockPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BlockPluginTrait

**Purpose:** BlockPluginTrait component

**File:** `BlockPluginTrait.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanCheckboxWidget

**Purpose:** BooleanCheckboxWidget component

**File:** `BooleanCheckboxWidget.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanData

**Purpose:** BooleanData component

**File:** `BooleanData.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanFormatter

**Purpose:** Form handling for Booleanatter

**File:** `BooleanFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanInterface

**Purpose:** BooleanInterface component

**File:** `BooleanInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanItem

**Purpose:** BooleanItem component

**File:** `BooleanItem.php`

**Architectural Issues:** 1 violations detected

---

#### BootableCommandTrait

**Purpose:** BootableCommandTrait component

**File:** `BootableCommandTrait.php`

**Architectural Issues:** 1 violations detected

---

#### BootstrapConfigStorageFactory

**Purpose:** BootstrapConfigStorageFactory component

**File:** `BootstrapConfigStorageFactory.php`

**Architectural Issues:** 1 violations detected

---

#### Breadcrumb

**Purpose:** Breadcrumb component

**File:** `Breadcrumb.php`

**Architectural Issues:** 1 violations detected

---

#### BreadcrumbBuilderInterface

**Purpose:** BreadcrumbBuilderInterface component

**File:** `BreadcrumbBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BreadcrumbManager

**Purpose:** Manages Breadcrumb operations

**File:** `BreadcrumbManager.php`

**Architectural Issues:** 1 violations detected

---

#### BreadcrumbPreprocess

**Purpose:** BreadcrumbPreprocess component

**File:** `BreadcrumbPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### BreakLockLink

**Purpose:** BreakLockLink component

**File:** `BreakLockLink.php`

**Architectural Issues:** 1 violations detected

---

#### Broken

**Purpose:** Broken component

**File:** `Broken.php`

**Architectural Issues:** 2 violations detected

---

#### BrokenPostRequestException

**Purpose:** BrokenPostRequestException component

**File:** `BrokenPostRequestException.php`

**Architectural Issues:** 1 violations detected

---

#### BubbleableMetadata

**Purpose:** BubbleableMetadata component

**File:** `BubbleableMetadata.php`

**Architectural Issues:** 1 violations detected

---

#### BundleClassInheritanceException

**Purpose:** BundleClassInheritanceException component

**File:** `BundleClassInheritanceException.php`

**Architectural Issues:** 1 violations detected

---

#### BundleConfigImportValidate

**Purpose:** BundleConfigImportValidate component

**File:** `BundleConfigImportValidate.php`

**Architectural Issues:** 1 violations detected

---

#### BundleConstraint

**Purpose:** BundleConstraint component

**File:** `BundleConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### BundleConstraintValidator

**Purpose:** BundleConstraintValidator component

**File:** `BundleConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### BundleEntityFormBase

**Purpose:** Form handling for BundleEntityBase

**File:** `BundleEntityFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### BundleEntityStorageInterface

**Purpose:** BundleEntityStorageInterface component

**File:** `BundleEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### BundlePermissionHandlerTrait

**Purpose:** Handles requests for BundlePermissionTrait

**File:** `BundlePermissionHandlerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Button

**Purpose:** Button component

**File:** `Button.php`

**Architectural Issues:** 1 violations detected

---

#### ByteSizeMarkup

**Purpose:** ByteSizeMarkup component

**File:** `ByteSizeMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### Bytes

**Purpose:** Bytes component

**File:** `Bytes.php`

**Architectural Issues:** 1 violations detected

---

#### Cache

**Purpose:** Cache component

**File:** `Cache.php`

**Architectural Issues:** 1 violations detected

---

#### CacheBackendInterface

**Purpose:** CacheBackendInterface component

**File:** `CacheBackendInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheCollector

**Purpose:** CacheCollector component

**File:** `CacheCollector.php`

**Architectural Issues:** 1 violations detected

---

#### CacheCollectorInterface

**Purpose:** CacheCollectorInterface component

**File:** `CacheCollectorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheContextInterface

**Purpose:** CacheContextInterface component

**File:** `CacheContextInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheContextsManager

**Purpose:** Manages CacheContexts operations

**File:** `CacheContextsManager.php`

**Architectural Issues:** 1 violations detected

---

#### CacheContextsPass

**Purpose:** CacheContextsPass component

**File:** `CacheContextsPass.php`

**Architectural Issues:** 1 violations detected

---

#### CacheFactory

**Purpose:** CacheFactory component

**File:** `CacheFactory.php`

**Architectural Issues:** 1 violations detected

---

#### CacheFactoryInterface

**Purpose:** CacheFactoryInterface component

**File:** `CacheFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheOptionalInterface

**Purpose:** CacheOptionalInterface component

**File:** `CacheOptionalInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CachePreWarmer

**Purpose:** CachePreWarmer component

**File:** `CachePreWarmer.php`

**Architectural Issues:** 1 violations detected

---

#### CachePreWarmerInterface

**Purpose:** CachePreWarmerInterface component

**File:** `CachePreWarmerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheRedirect

**Purpose:** CacheRedirect component

**File:** `CacheRedirect.php`

**Architectural Issues:** 1 violations detected

---

#### CacheRouterRebuildSubscriber

**Purpose:** CacheRouterRebuildSubscriber component

**File:** `CacheRouterRebuildSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagPreloadSubscriber

**Purpose:** CacheTagPreloadSubscriber component

**File:** `CacheTagPreloadSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsChecksumInterface

**Purpose:** CacheTagsChecksumInterface component

**File:** `CacheTagsChecksumInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsChecksumPreloadInterface

**Purpose:** CacheTagsChecksumPreloadInterface component

**File:** `CacheTagsChecksumPreloadInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsChecksumTrait

**Purpose:** CacheTagsChecksumTrait component

**File:** `CacheTagsChecksumTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsInvalidator

**Purpose:** CacheTagsInvalidator component

**File:** `CacheTagsInvalidator.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsInvalidatorInterface

**Purpose:** CacheTagsInvalidatorInterface component

**File:** `CacheTagsInvalidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheTagsPurgeInterface

**Purpose:** CacheTagsPurgeInterface component

**File:** `CacheTagsPurgeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableAccessDeniedHttpException

**Purpose:** CacheableAccessDeniedHttpException component

**File:** `CacheableAccessDeniedHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableAjaxResponse

**Purpose:** CacheableAjaxResponse component

**File:** `CacheableAjaxResponse.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableBadRequestHttpException

**Purpose:** CacheableBadRequestHttpException component

**File:** `CacheableBadRequestHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableConflictHttpException

**Purpose:** CacheableConflictHttpException component

**File:** `CacheableConflictHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableDependencyInterface

**Purpose:** CacheableDependencyInterface component

**File:** `CacheableDependencyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableDependencyTrait

**Purpose:** CacheableDependencyTrait component

**File:** `CacheableDependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableGoneHttpException

**Purpose:** CacheableGoneHttpException component

**File:** `CacheableGoneHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableHttpException

**Purpose:** CacheableHttpException component

**File:** `CacheableHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableJsonResponse

**Purpose:** CacheableJsonResponse component

**File:** `CacheableJsonResponse.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableLengthRequiredHttpException

**Purpose:** CacheableLengthRequiredHttpException component

**File:** `CacheableLengthRequiredHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableMetadata

**Purpose:** CacheableMetadata component

**File:** `CacheableMetadata.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableMethodNotAllowedHttpException

**Purpose:** CacheableMethodNotAllowedHttpException component

**File:** `CacheableMethodNotAllowedHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableNotAcceptableHttpException

**Purpose:** CacheableNotAcceptableHttpException component

**File:** `CacheableNotAcceptableHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableNotFoundHttpException

**Purpose:** CacheableNotFoundHttpException component

**File:** `CacheableNotFoundHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheablePreconditionFailedHttpException

**Purpose:** CacheablePreconditionFailedHttpException component

**File:** `CacheablePreconditionFailedHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheablePreconditionRequiredHttpException

**Purpose:** CacheablePreconditionRequiredHttpException component

**File:** `CacheablePreconditionRequiredHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableRedirectResponse

**Purpose:** CacheableRedirectResponse component

**File:** `CacheableRedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableResponse

**Purpose:** CacheableResponse component

**File:** `CacheableResponse.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableResponseInterface

**Purpose:** CacheableResponseInterface component

**File:** `CacheableResponseInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableResponseTrait

**Purpose:** CacheableResponseTrait component

**File:** `CacheableResponseTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableRouteProviderInterface

**Purpose:** CacheableRouteProviderInterface component

**File:** `CacheableRouteProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableSecuredRedirectResponse

**Purpose:** CacheableSecuredRedirectResponse component

**File:** `CacheableSecuredRedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableServiceUnavailableHttpException

**Purpose:** Service for CacheableUnavailableHttpException

**File:** `CacheableServiceUnavailableHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableTooManyRequestsHttpException

**Purpose:** CacheableTooManyRequestsHttpException component

**File:** `CacheableTooManyRequestsHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableUnauthorizedHttpException

**Purpose:** CacheableUnauthorizedHttpException component

**File:** `CacheableUnauthorizedHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableUnprocessableEntityHttpException

**Purpose:** CacheableUnprocessableEntityHttpException component

**File:** `CacheableUnprocessableEntityHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheableUnsupportedMediaTypeHttpException

**Purpose:** CacheableUnsupportedMediaTypeHttpException component

**File:** `CacheableUnsupportedMediaTypeHttpException.php`

**Architectural Issues:** 1 violations detected

---

#### CachedDiscoveryClearer

**Purpose:** CachedDiscoveryClearer component

**File:** `CachedDiscoveryClearer.php`

**Architectural Issues:** 1 violations detected

---

#### CachedDiscoveryClearerInterface

**Purpose:** CachedDiscoveryClearerInterface component

**File:** `CachedDiscoveryClearerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CachedDiscoveryInterface

**Purpose:** CachedDiscoveryInterface component

**File:** `CachedDiscoveryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CachedStorage

**Purpose:** CachedStorage component

**File:** `CachedStorage.php`

**Architectural Issues:** 1 violations detected

---

#### CachedStrategy

**Purpose:** CachedStrategy component

**File:** `CachedStrategy.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedCacheContextInterface

**Purpose:** CalculatedCacheContextInterface component

**File:** `CalculatedCacheContextInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedPermissions

**Purpose:** CalculatedPermissions component

**File:** `CalculatedPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedPermissionsInterface

**Purpose:** CalculatedPermissionsInterface component

**File:** `CalculatedPermissionsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedPermissionsItem

**Purpose:** CalculatedPermissionsItem component

**File:** `CalculatedPermissionsItem.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedPermissionsItemInterface

**Purpose:** CalculatedPermissionsItemInterface component

**File:** `CalculatedPermissionsItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CalculatedPermissionsTrait

**Purpose:** CalculatedPermissionsTrait component

**File:** `CalculatedPermissionsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CallableResolver

**Purpose:** CallableResolver component

**File:** `CallableResolver.php`

**Architectural Issues:** 1 violations detected

---

#### CategorizingPluginManagerInterface

**Purpose:** Manages CategorizingPluginInterface operations

**File:** `CategorizingPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CategorizingPluginManagerTrait

**Purpose:** Manages CategorizingPluginTrait operations

**File:** `CategorizingPluginManagerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ChainBreadcrumbBuilderInterface

**Purpose:** ChainBreadcrumbBuilderInterface component

**File:** `ChainBreadcrumbBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ChainRequestPolicy

**Purpose:** ChainRequestPolicy component

**File:** `ChainRequestPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### ChainRequestPolicyInterface

**Purpose:** ChainRequestPolicyInterface component

**File:** `ChainRequestPolicyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ChainResponsePolicy

**Purpose:** ChainResponsePolicy component

**File:** `ChainResponsePolicy.php`

**Architectural Issues:** 2 violations detected

---

#### ChainResponsePolicyInterface

**Purpose:** ChainResponsePolicyInterface component

**File:** `ChainResponsePolicyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ChainedFastBackend

**Purpose:** ChainedFastBackend component

**File:** `ChainedFastBackend.php`

**Architectural Issues:** 1 violations detected

---

#### ChainedFastBackendFactory

**Purpose:** ChainedFastBackendFactory component

**File:** `ChainedFastBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ChainedPlaceholderStrategy

**Purpose:** ChainedPlaceholderStrategy component

**File:** `ChainedPlaceholderStrategy.php`

**Architectural Issues:** 1 violations detected

---

#### ChangedCommand

**Purpose:** ChangedCommand component

**File:** `ChangedCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ChangedFieldItemList

**Purpose:** ChangedFieldItemList component

**File:** `ChangedFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### ChangedItem

**Purpose:** ChangedItem component

**File:** `ChangedItem.php`

**Architectural Issues:** 1 violations detected

---

#### CheckProvider

**Purpose:** CheckProvider component

**File:** `CheckProvider.php`

**Architectural Issues:** 1 violations detected

---

#### CheckProviderInterface

**Purpose:** CheckProviderInterface component

**File:** `CheckProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Checkbox

**Purpose:** Checkbox component

**File:** `Checkbox.php`

**Architectural Issues:** 1 violations detected

---

#### Checkboxes

**Purpose:** Checkboxes component

**File:** `Checkboxes.php`

**Architectural Issues:** 1 violations detected

---

#### Checkpoint

**Purpose:** Checkpoint component

**File:** `Checkpoint.php`

**Architectural Issues:** 1 violations detected

---

#### CheckpointExistsException

**Purpose:** CheckpointExistsException component

**File:** `CheckpointExistsException.php`

**Architectural Issues:** 1 violations detected

---

#### CheckpointListInterface

**Purpose:** CheckpointListInterface component

**File:** `CheckpointListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CheckpointStorage

**Purpose:** CheckpointStorage component

**File:** `CheckpointStorage.php`

**Architectural Issues:** 1 violations detected

---

#### CheckpointStorageInterface

**Purpose:** CheckpointStorageInterface component

**File:** `CheckpointStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ChmodInterface

**Purpose:** ChmodInterface component

**File:** `ChmodInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ClassFinder

**Purpose:** ClassFinder component

**File:** `ClassFinder.php`

**Architectural Issues:** 1 violations detected

---

#### ClassFinderInterface

**Purpose:** ClassFinderInterface component

**File:** `ClassFinderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ClassResolver

**Purpose:** ClassResolver component

**File:** `ClassResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ClassResolverConstraint

**Purpose:** ClassResolverConstraint component

**File:** `ClassResolverConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ClassResolverConstraintValidator

**Purpose:** ClassResolverConstraintValidator component

**File:** `ClassResolverConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ClassResolverInterface

**Purpose:** ClassResolverInterface component

**File:** `ClassResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ClientConnectionTransactionState

**Purpose:** ClientConnectionTransactionState component

**File:** `ClientConnectionTransactionState.php`

**Architectural Issues:** 1 violations detected

---

#### ClientErrorResponseSubscriber

**Purpose:** ClientErrorResponseSubscriber component

**File:** `ClientErrorResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ClientFactory

**Purpose:** ClientFactory component

**File:** `ClientFactory.php`

**Architectural Issues:** 1 violations detected

---

#### CloseDialogCommand

**Purpose:** CloseDialogCommand component

**File:** `CloseDialogCommand.php`

**Architectural Issues:** 1 violations detected

---

#### CloseModalDialogCommand

**Purpose:** CloseModalDialogCommand component

**File:** `CloseModalDialogCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Color

**Purpose:** Color component

**File:** `Color.php`

**Architectural Issues:** 2 violations detected

---

#### Com

**Purpose:** Com component

**File:** `Com.php`

**Architectural Issues:** 1 violations detected

---

#### CommandInterface

**Purpose:** CommandInterface component

**File:** `CommandInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommandLineOrUnsafeMethod

**Purpose:** CommandLineOrUnsafeMethod component

**File:** `CommandLineOrUnsafeMethod.php`

**Architectural Issues:** 1 violations detected

---

#### CommandWithAttachedAssetsInterface

**Purpose:** CommandWithAttachedAssetsInterface component

**File:** `CommandWithAttachedAssetsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CommandWithAttachedAssetsTrait

**Purpose:** CommandWithAttachedAssetsTrait component

**File:** `CommandWithAttachedAssetsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### CompiledRoute

**Purpose:** CompiledRoute component

**File:** `CompiledRoute.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataConstraint

**Purpose:** ComplexDataConstraint component

**File:** `ComplexDataConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataConstraintValidator

**Purpose:** ComplexDataConstraintValidator component

**File:** `ComplexDataConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataDefinitionBase

**Purpose:** ComplexDataDefinitionBase component

**File:** `ComplexDataDefinitionBase.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataDefinitionInterface

**Purpose:** ComplexDataDefinitionInterface component

**File:** `ComplexDataDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ComplexDataInterface

**Purpose:** ComplexDataInterface component

**File:** `ComplexDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Component

**Purpose:** Component component

**File:** `Component.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentElement

**Purpose:** ComponentElement component

**File:** `ComponentElement.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentLoader

**Purpose:** ComponentLoader component

**File:** `ComponentLoader.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentMetadata

**Purpose:** ComponentMetadata component

**File:** `ComponentMetadata.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentNegotiator

**Purpose:** ComponentNegotiator component

**File:** `ComponentNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentNodeVisitor

**Purpose:** ComponentNodeVisitor component

**File:** `ComponentNodeVisitor.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentNotFoundException

**Purpose:** ComponentNotFoundException component

**File:** `ComponentNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentPluginManager

**Purpose:** Manages ComponentPlugin operations

**File:** `ComponentPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentValidator

**Purpose:** ComponentValidator component

**File:** `ComponentValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ComponentsTwigExtension

**Purpose:** ComponentsTwigExtension component

**File:** `ComponentsTwigExtension.php`

**Architectural Issues:** 1 violations detected

---

#### Composer

**Purpose:** Composer component

**File:** `Composer.php`

**Architectural Issues:** 1 violations detected

---

#### CompositeConstraintBase

**Purpose:** CompositeConstraintBase component

**File:** `CompositeConstraintBase.php`

**Architectural Issues:** 1 violations detected

---

#### CompositeFormElementTrait

**Purpose:** Form handling for CompositeElementTrait

**File:** `CompositeFormElementTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ComputedItemListTrait

**Purpose:** ComputedItemListTrait component

**File:** `ComputedItemListTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Condition

**Purpose:** Condition component

**File:** `Condition.php`

**Architectural Issues:** 8 violations detected

---

#### ConditionAccessResolverTrait

**Purpose:** ConditionAccessResolverTrait component

**File:** `ConditionAccessResolverTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionAggregate

**Purpose:** ConditionAggregate component

**File:** `ConditionAggregate.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionAggregateBase

**Purpose:** ConditionAggregateBase component

**File:** `ConditionAggregateBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionAggregateInterface

**Purpose:** ConditionAggregateInterface component

**File:** `ConditionAggregateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionBase

**Purpose:** ConditionBase component

**File:** `ConditionBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionFundamentals

**Purpose:** ConditionFundamentals component

**File:** `ConditionFundamentals.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionInterface

**Purpose:** ConditionInterface component

**File:** `ConditionInterface.php`

**Architectural Issues:** 3 violations detected

---

#### ConditionManager

**Purpose:** Manages Condition operations

**File:** `ConditionManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionPluginBase

**Purpose:** ConditionPluginBase component

**File:** `ConditionPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionPluginCollection

**Purpose:** ConditionPluginCollection component

**File:** `ConditionPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### Config

**Purpose:** Config component

**File:** `Config.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigAction

**Purpose:** ConfigAction component

**File:** `ConfigAction.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigActionException

**Purpose:** ConfigActionException component

**File:** `ConfigActionException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigActionManager

**Purpose:** Manages ConfigAction operations

**File:** `ConfigActionManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigActionPluginInterface

**Purpose:** ConfigActionPluginInterface component

**File:** `ConfigActionPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigBase

**Purpose:** ConfigBase component

**File:** `ConfigBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigCollectionEvents

**Purpose:** ConfigCollectionEvents component

**File:** `ConfigCollectionEvents.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigCollectionInfo

**Purpose:** ConfigCollectionInfo component

**File:** `ConfigCollectionInfo.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigConfigurator

**Purpose:** ConfigConfigurator component

**File:** `ConfigConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigCrudEvent

**Purpose:** ConfigCrudEvent component

**File:** `ConfigCrudEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigDependencyDeleteFormTrait

**Purpose:** Form handling for ConfigDependencyDeleteTrait

**File:** `ConfigDependencyDeleteFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigDependencyManager

**Purpose:** Manages ConfigDependency operations

**File:** `ConfigDependencyManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigDirectoryNotDefinedException

**Purpose:** ConfigDirectoryNotDefinedException component

**File:** `ConfigDirectoryNotDefinedException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigDuplicateUUIDException

**Purpose:** ConfigDuplicateUUIDException component

**File:** `ConfigDuplicateUUIDException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityAdapter

**Purpose:** ConfigEntityAdapter component

**File:** `ConfigEntityAdapter.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityBase

**Purpose:** ConfigEntityBase component

**File:** `ConfigEntityBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityBundleBase

**Purpose:** ConfigEntityBundleBase component

**File:** `ConfigEntityBundleBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityDependency

**Purpose:** ConfigEntityDependency component

**File:** `ConfigEntityDependency.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityIdLengthException

**Purpose:** ConfigEntityIdLengthException component

**File:** `ConfigEntityIdLengthException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityInterface

**Purpose:** ConfigEntityInterface component

**File:** `ConfigEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityListBuilder

**Purpose:** ConfigEntityListBuilder component

**File:** `ConfigEntityListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityStorage

**Purpose:** ConfigEntityStorage component

**File:** `ConfigEntityStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityStorageClassException

**Purpose:** ConfigEntityStorageClassException component

**File:** `ConfigEntityStorageClassException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityStorageInterface

**Purpose:** ConfigEntityStorageInterface component

**File:** `ConfigEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityType

**Purpose:** ConfigEntityType component

**File:** `ConfigEntityType.php`

**Architectural Issues:** 3 violations detected

---

#### ConfigEntityTypeInterface

**Purpose:** ConfigEntityTypeInterface component

**File:** `ConfigEntityTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEntityUpdater

**Purpose:** ConfigEntityUpdater component

**File:** `ConfigEntityUpdater.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigEvents

**Purpose:** ConfigEvents component

**File:** `ConfigEvents.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigException

**Purpose:** ConfigException component

**File:** `ConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigExistsConstraint

**Purpose:** ConfigExistsConstraint component

**File:** `ConfigExistsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigExistsConstraintValidator

**Purpose:** ConfigExistsConstraintValidator component

**File:** `ConfigExistsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFactory

**Purpose:** ConfigFactory component

**File:** `ConfigFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFactoryInterface

**Purpose:** ConfigFactoryInterface component

**File:** `ConfigFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFactoryOverrideBase

**Purpose:** ConfigFactoryOverrideBase component

**File:** `ConfigFactoryOverrideBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFactoryOverrideInterface

**Purpose:** ConfigFactoryOverrideInterface component

**File:** `ConfigFactoryOverrideInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFormBase

**Purpose:** Form handling for ConfigBase

**File:** `ConfigFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigFormBaseTrait

**Purpose:** Form handling for ConfigBaseTrait

**File:** `ConfigFormBaseTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImportModuleUninstallValidatorInterface

**Purpose:** ConfigImportModuleUninstallValidatorInterface component

**File:** `ConfigImportModuleUninstallValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImportSubscriber

**Purpose:** ConfigImportSubscriber component

**File:** `ConfigImportSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImportValidateEventSubscriberBase

**Purpose:** ConfigImportValidateEventSubscriberBase component

**File:** `ConfigImportValidateEventSubscriberBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImporter

**Purpose:** ConfigImporter component

**File:** `ConfigImporter.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImporterBatch

**Purpose:** ConfigImporterBatch component

**File:** `ConfigImporterBatch.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImporterEvent

**Purpose:** ConfigImporterEvent component

**File:** `ConfigImporterEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigImporterException

**Purpose:** ConfigImporterException component

**File:** `ConfigImporterException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigInstaller

**Purpose:** ConfigInstaller component

**File:** `ConfigInstaller.php`

**Architectural Issues:** 2 violations detected

---

#### ConfigInstallerInterface

**Purpose:** ConfigInstallerInterface component

**File:** `ConfigInstallerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigManager

**Purpose:** Manages Config operations

**File:** `ConfigManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigManagerInterface

**Purpose:** Manages ConfigInterface operations

**File:** `ConfigManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigModuleOverridesEvent

**Purpose:** ConfigModuleOverridesEvent component

**File:** `ConfigModuleOverridesEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigNameException

**Purpose:** ConfigNameException component

**File:** `ConfigNameException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigOverride

**Purpose:** ConfigOverride component

**File:** `ConfigOverride.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigPrefixLengthException

**Purpose:** ConfigPrefixLengthException component

**File:** `ConfigPrefixLengthException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigRenameEvent

**Purpose:** ConfigRenameEvent component

**File:** `ConfigRenameEvent.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSchemaAlterException

**Purpose:** ConfigSchemaAlterException component

**File:** `ConfigSchemaAlterException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSchemaChecker

**Purpose:** ConfigSchemaChecker component

**File:** `ConfigSchemaChecker.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSchemaDiscovery

**Purpose:** ConfigSchemaDiscovery component

**File:** `ConfigSchemaDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigSnapshotSubscriber

**Purpose:** ConfigSnapshotSubscriber component

**File:** `ConfigSnapshotSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigTarget

**Purpose:** ConfigTarget component

**File:** `ConfigTarget.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigValueException

**Purpose:** ConfigValueException component

**File:** `ConfigValueException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableActionBase

**Purpose:** ConfigurableActionBase component

**File:** `ConfigurableActionBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableInterface

**Purpose:** ConfigurableInterface component

**File:** `ConfigurableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurablePluginBase

**Purpose:** ConfigurablePluginBase component

**File:** `ConfigurablePluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigurableTrait

**Purpose:** ConfigurableTrait component

**File:** `ConfigurableTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ConfirmFormBase

**Purpose:** Form handling for ConfirmBase

**File:** `ConfirmFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ConfirmFormHelper

**Purpose:** Form handling for ConfirmHelper

**File:** `ConfirmFormHelper.php`

**Architectural Issues:** 1 violations detected

---

#### ConfirmFormInterface

**Purpose:** Form handling for ConfirmInterface

**File:** `ConfirmFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Connection

**Purpose:** Connection component

**File:** `Connection.php`

**Architectural Issues:** 1 violations detected

---

#### ConnectionNotDefinedException

**Purpose:** ConnectionNotDefinedException component

**File:** `ConnectionNotDefinedException.php`

**Architectural Issues:** 1 violations detected

---

#### ConsoleInputCollector

**Purpose:** ConsoleInputCollector component

**File:** `ConsoleInputCollector.php`

**Architectural Issues:** 1 violations detected

---

#### Constraint

**Purpose:** Constraint component

**File:** `Constraint.php`

**Architectural Issues:** 3 violations detected

---

#### ConstraintFactory

**Purpose:** ConstraintFactory component

**File:** `ConstraintFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ConstraintManager

**Purpose:** Manages Constraint operations

**File:** `ConstraintManager.php`

**Architectural Issues:** 1 violations detected

---

#### ConstraintValidatorFactory

**Purpose:** ConstraintValidatorFactory component

**File:** `ConstraintValidatorFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ConstraintViolationBuilder

**Purpose:** ConstraintViolationBuilder component

**File:** `ConstraintViolationBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### Container

**Purpose:** Container component

**File:** `Container.php`

**Architectural Issues:** 3 violations detected

---

#### ContainerBuilder

**Purpose:** ContainerBuilder component

**File:** `ContainerBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerDerivativeDiscoveryDecorator

**Purpose:** ContainerDerivativeDiscoveryDecorator component

**File:** `ContainerDerivativeDiscoveryDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerDeriverInterface

**Purpose:** ContainerDeriverInterface component

**File:** `ContainerDeriverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerFactory

**Purpose:** ContainerFactory component

**File:** `ContainerFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerFactoryPluginInterface

**Purpose:** ContainerFactoryPluginInterface component

**File:** `ContainerFactoryPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerInjectionInterface

**Purpose:** ContainerInjectionInterface component

**File:** `ContainerInjectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerInterface

**Purpose:** ContainerInterface component

**File:** `ContainerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerNotInitializedException

**Purpose:** ContainerNotInitializedException component

**File:** `ContainerNotInitializedException.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityBase

**Purpose:** ContentEntityBase component

**File:** `ContentEntityBase.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityConfirmFormBase

**Purpose:** Form handling for ContentEntityConfirmBase

**File:** `ContentEntityConfirmFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityDeleteForm

**Purpose:** Form handling for ContentEntityDelete

**File:** `ContentEntityDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityForm

**Purpose:** Form handling for ContentEntity

**File:** `ContentEntityForm.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityFormInterface

**Purpose:** Form handling for ContentEntityInterface

**File:** `ContentEntityFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityInterface

**Purpose:** ContentEntityInterface component

**File:** `ContentEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityNullStorage

**Purpose:** ContentEntityNullStorage component

**File:** `ContentEntityNullStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityStorageBase

**Purpose:** ContentEntityStorageBase component

**File:** `ContentEntityStorageBase.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityStorageInterface

**Purpose:** ContentEntityStorageInterface component

**File:** `ContentEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentEntityType

**Purpose:** ContentEntityType component

**File:** `ContentEntityType.php`

**Architectural Issues:** 3 violations detected

---

#### ContentEntityTypeInterface

**Purpose:** ContentEntityTypeInterface component

**File:** `ContentEntityTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContentExportCommand

**Purpose:** ContentExportCommand component

**File:** `ContentExportCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ContentLength

**Purpose:** ContentLength component

**File:** `ContentLength.php`

**Architectural Issues:** 1 violations detected

---

#### ContentTypeHeaderMatcher

**Purpose:** ContentTypeHeaderMatcher component

**File:** `ContentTypeHeaderMatcher.php`

**Architectural Issues:** 1 violations detected

---

#### ContentUninstallValidator

**Purpose:** ContentUninstallValidator component

**File:** `ContentUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Context

**Purpose:** Context component

**File:** `Context.php`

**Architectural Issues:** 2 violations detected

---

#### ContextAwarePluginAssignmentTrait

**Purpose:** ContextAwarePluginAssignmentTrait component

**File:** `ContextAwarePluginAssignmentTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwarePluginDefinitionInterface

**Purpose:** ContextAwarePluginDefinitionInterface component

**File:** `ContextAwarePluginDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwarePluginDefinitionTrait

**Purpose:** ContextAwarePluginDefinitionTrait component

**File:** `ContextAwarePluginDefinitionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwarePluginInterface

**Purpose:** ContextAwarePluginInterface component

**File:** `ContextAwarePluginInterface.php`

**Architectural Issues:** 2 violations detected

---

#### ContextAwarePluginManagerInterface

**Purpose:** Manages ContextAwarePluginInterface operations

**File:** `ContextAwarePluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwarePluginManagerTrait

**Purpose:** Manages ContextAwarePluginTrait operations

**File:** `ContextAwarePluginManagerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwarePluginTrait

**Purpose:** ContextAwarePluginTrait component

**File:** `ContextAwarePluginTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ContextAwareVariantInterface

**Purpose:** ContextAwareVariantInterface component

**File:** `ContextAwareVariantInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextCacheKeys

**Purpose:** ContextCacheKeys component

**File:** `ContextCacheKeys.php`

**Architectural Issues:** 1 violations detected

---

#### ContextDefinition

**Purpose:** ContextDefinition component

**File:** `ContextDefinition.php`

**Architectural Issues:** 2 violations detected

---

#### ContextDefinitionInterface

**Purpose:** ContextDefinitionInterface component

**File:** `ContextDefinitionInterface.php`

**Architectural Issues:** 2 violations detected

---

#### ContextException

**Purpose:** ContextException component

**File:** `ContextException.php`

**Architectural Issues:** 1 violations detected

---

#### ContextHandler

**Purpose:** Handles requests for Context

**File:** `ContextHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ContextHandlerInterface

**Purpose:** Handles requests for ContextInterface

**File:** `ContextHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextInterface

**Purpose:** ContextInterface component

**File:** `ContextInterface.php`

**Architectural Issues:** 2 violations detected

---

#### ContextProviderInterface

**Purpose:** ContextProviderInterface component

**File:** `ContextProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextRepositoryInterface

**Purpose:** ContextRepositoryInterface component

**File:** `ContextRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualLinkDefault

**Purpose:** ContextualLinkDefault component

**File:** `ContextualLinkDefault.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualLinkInterface

**Purpose:** ContextualLinkInterface component

**File:** `ContextualLinkInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualLinkManager

**Purpose:** Manages ContextualLink operations

**File:** `ContextualLinkManager.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualLinkManagerInterface

**Purpose:** Manages ContextualLinkInterface operations

**File:** `ContextualLinkManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContextualValidatorInterface

**Purpose:** ContextualValidatorInterface component

**File:** `ContextualValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerBase

**Purpose:** Controls Base operations

**File:** `ControllerBase.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerResolver

**Purpose:** Controls Resolver operations

**File:** `ControllerResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerResolverInterface

**Purpose:** Controls ResolverInterface operations

**File:** `ControllerResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CookiesCacheContext

**Purpose:** CookiesCacheContext component

**File:** `CookiesCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### CoreServiceProvider

**Purpose:** Service for CoreProvider

**File:** `CoreServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### CorsCompilerPass

**Purpose:** CorsCompilerPass component

**File:** `CorsCompilerPass.php`

**Architectural Issues:** 1 violations detected

---

#### CountConstraint

**Purpose:** CountConstraint component

**File:** `CountConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### CountryCodeConstraint

**Purpose:** CountryCodeConstraint component

**File:** `CountryCodeConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### CountryManager

**Purpose:** Manages Country operations

**File:** `CountryManager.php`

**Architectural Issues:** 1 violations detected

---

#### CountryManagerInterface

**Purpose:** Manages CountryInterface operations

**File:** `CountryManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CreateForEachBundle

**Purpose:** CreateForEachBundle component

**File:** `CreateForEachBundle.php`

**Architectural Issues:** 1 violations detected

---

#### CreateForEachBundleDeriver

**Purpose:** CreateForEachBundleDeriver component

**File:** `CreateForEachBundleDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### CreatedItem

**Purpose:** CreatedItem component

**File:** `CreatedItem.php`

**Architectural Issues:** 1 violations detected

---

#### Cron

**Purpose:** Cron component

**File:** `Cron.php`

**Architectural Issues:** 1 violations detected

---

#### CronInterface

**Purpose:** CronInterface component

**File:** `CronInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Crypt

**Purpose:** Crypt component

**File:** `Crypt.php`

**Architectural Issues:** 1 violations detected

---

#### CsrfAccessCheck

**Purpose:** CsrfAccessCheck component

**File:** `CsrfAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### CsrfExceptionSubscriber

**Purpose:** CsrfExceptionSubscriber component

**File:** `CsrfExceptionSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### CsrfRequestHeaderAccessCheck

**Purpose:** CsrfRequestHeaderAccessCheck component

**File:** `CsrfRequestHeaderAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### CsrfTokenGenerator

**Purpose:** CsrfTokenGenerator component

**File:** `CsrfTokenGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### CssCollectionGrouper

**Purpose:** CssCollectionGrouper component

**File:** `CssCollectionGrouper.php`

**Architectural Issues:** 1 violations detected

---

#### CssCollectionOptimizerLazy

**Purpose:** CssCollectionOptimizerLazy component

**File:** `CssCollectionOptimizerLazy.php`

**Architectural Issues:** 1 violations detected

---

#### CssCollectionRenderer

**Purpose:** CssCollectionRenderer component

**File:** `CssCollectionRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### CssCommand

**Purpose:** CssCommand component

**File:** `CssCommand.php`

**Architectural Issues:** 1 violations detected

---

#### CssOptimizer

**Purpose:** CssOptimizer component

**File:** `CssOptimizer.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentLanguageContext

**Purpose:** CurrentLanguageContext component

**File:** `CurrentLanguageContext.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentPathStack

**Purpose:** CurrentPathStack component

**File:** `CurrentPathStack.php`

**Architectural Issues:** 1 violations detected

---

#### CurrentRouteMatch

**Purpose:** CurrentRouteMatch component

**File:** `CurrentRouteMatch.php`

**Architectural Issues:** 1 violations detected

---

#### CustomAccessCheck

**Purpose:** CustomAccessCheck component

**File:** `CustomAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### CustomPageExceptionHtmlSubscriber

**Purpose:** CustomPageExceptionHtmlSubscriber component

**File:** `CustomPageExceptionHtmlSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### CustomStrings

**Purpose:** CustomStrings component

**File:** `CustomStrings.php`

**Architectural Issues:** 1 violations detected

---

#### DataCommand

**Purpose:** DataCommand component

**File:** `DataCommand.php`

**Architectural Issues:** 1 violations detected

---

#### DataDefinition

**Purpose:** DataDefinition component

**File:** `DataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### DataDefinitionInterface

**Purpose:** DataDefinitionInterface component

**File:** `DataDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DataReferenceBase

**Purpose:** DataReferenceBase component

**File:** `DataReferenceBase.php`

**Architectural Issues:** 1 violations detected

---

#### DataReferenceDefinition

**Purpose:** DataReferenceDefinition component

**File:** `DataReferenceDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### DataReferenceDefinitionInterface

**Purpose:** DataReferenceDefinitionInterface component

**File:** `DataReferenceDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DataReferenceInterface

**Purpose:** DataReferenceInterface component

**File:** `DataReferenceInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DataReferenceTargetDefinition

**Purpose:** DataReferenceTargetDefinition component

**File:** `DataReferenceTargetDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### DataType

**Purpose:** DataType component

**File:** `DataType.php`

**Architectural Issues:** 2 violations detected

---

#### Database

**Purpose:** Database component

**File:** `Database.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseAccessDeniedException

**Purpose:** DatabaseAccessDeniedException component

**File:** `DatabaseAccessDeniedException.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseBackend

**Purpose:** DatabaseBackend component

**File:** `DatabaseBackend.php`

**Architectural Issues:** 2 violations detected

---

#### DatabaseBackendFactory

**Purpose:** DatabaseBackendFactory component

**File:** `DatabaseBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseCacheTagsChecksum

**Purpose:** DatabaseCacheTagsChecksum component

**File:** `DatabaseCacheTagsChecksum.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseConnectionRefusedException

**Purpose:** DatabaseConnectionRefusedException component

**File:** `DatabaseConnectionRefusedException.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseDriver

**Purpose:** DatabaseDriver component

**File:** `DatabaseDriver.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseDriverList

**Purpose:** DatabaseDriverList component

**File:** `DatabaseDriverList.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseDriverUninstallValidator

**Purpose:** DatabaseDriverUninstallValidator component

**File:** `DatabaseDriverUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseEvent

**Purpose:** DatabaseEvent component

**File:** `DatabaseEvent.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseException

**Purpose:** DatabaseException component

**File:** `DatabaseException.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseExceptionWrapper

**Purpose:** DatabaseExceptionWrapper component

**File:** `DatabaseExceptionWrapper.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseLockBackend

**Purpose:** DatabaseLockBackend component

**File:** `DatabaseLockBackend.php`

**Architectural Issues:** 2 violations detected

---

#### DatabaseNotFoundException

**Purpose:** DatabaseNotFoundException component

**File:** `DatabaseNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseQueue

**Purpose:** DatabaseQueue component

**File:** `DatabaseQueue.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseStorage

**Purpose:** DatabaseStorage component

**File:** `DatabaseStorage.php`

**Architectural Issues:** 2 violations detected

---

#### DatabaseStorageExpirable

**Purpose:** DatabaseStorageExpirable component

**File:** `DatabaseStorageExpirable.php`

**Architectural Issues:** 1 violations detected

---

#### Date

**Purpose:** Date component

**File:** `Date.php`

**Architectural Issues:** 1 violations detected

---

#### DateElementBase

**Purpose:** DateElementBase component

**File:** `DateElementBase.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormat

**Purpose:** Form handling for Dateat

**File:** `DateFormat.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatInterface

**Purpose:** Form handling for DateatInterface

**File:** `DateFormatInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatter

**Purpose:** Form handling for Dateatter

**File:** `DateFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DateFormatterInterface

**Purpose:** Form handling for DateatterInterface

**File:** `DateFormatterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateHelper

**Purpose:** DateHelper component

**File:** `DateHelper.php`

**Architectural Issues:** 1 violations detected

---

#### DatePreprocess

**Purpose:** DatePreprocess component

**File:** `DatePreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeInterface

**Purpose:** DateTimeInterface component

**File:** `DateTimeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeIso8601

**Purpose:** DateTimeIso8601 component

**File:** `DateTimeIso8601.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimePlus

**Purpose:** DateTimePlus component

**File:** `DateTimePlus.php`

**Architectural Issues:** 1 violations detected

---

#### Datelist

**Purpose:** Datelist component

**File:** `Datelist.php`

**Architectural Issues:** 1 violations detected

---

#### Datetime

**Purpose:** Datetime component

**File:** `Datetime.php`

**Architectural Issues:** 1 violations detected

---

#### DbCommandBase

**Purpose:** DbCommandBase component

**File:** `DbCommandBase.php`

**Architectural Issues:** 1 violations detected

---

#### DbDumpApplication

**Purpose:** DbDumpApplication component

**File:** `DbDumpApplication.php`

**Architectural Issues:** 1 violations detected

---

#### DbDumpCommand

**Purpose:** DbDumpCommand component

**File:** `DbDumpCommand.php`

**Architectural Issues:** 1 violations detected

---

#### DbImportCommand

**Purpose:** DbImportCommand component

**File:** `DbImportCommand.php`

**Architectural Issues:** 1 violations detected

---

#### DbToolsApplication

**Purpose:** DbToolsApplication component

**File:** `DbToolsApplication.php`

**Architectural Issues:** 1 violations detected

---

#### DebugExtension

**Purpose:** DebugExtension component

**File:** `DebugExtension.php`

**Architectural Issues:** 1 violations detected

---

#### DecimalData

**Purpose:** DecimalData component

**File:** `DecimalData.php`

**Architectural Issues:** 1 violations detected

---

#### DecimalFormatter

**Purpose:** Form handling for Decimalatter

**File:** `DecimalFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### DecimalInterface

**Purpose:** DecimalInterface component

**File:** `DecimalInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DecimalItem

**Purpose:** DecimalItem component

**File:** `DecimalItem.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultAccessCheck

**Purpose:** DefaultAccessCheck component

**File:** `DefaultAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultConfigMode

**Purpose:** DefaultConfigMode component

**File:** `DefaultConfigMode.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultExceptionHtmlSubscriber

**Purpose:** DefaultExceptionHtmlSubscriber component

**File:** `DefaultExceptionHtmlSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultFactory

**Purpose:** DefaultFactory component

**File:** `DefaultFactory.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultHtmlRouteProvider

**Purpose:** DefaultHtmlRouteProvider component

**File:** `DefaultHtmlRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultLazyPluginCollection

**Purpose:** DefaultLazyPluginCollection component

**File:** `DefaultLazyPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultMenuLinkTreeManipulators

**Purpose:** DefaultMenuLinkTreeManipulators component

**File:** `DefaultMenuLinkTreeManipulators.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultNegotiator

**Purpose:** DefaultNegotiator component

**File:** `DefaultNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultPasswordGenerator

**Purpose:** DefaultPasswordGenerator component

**File:** `DefaultPasswordGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultPluginManager

**Purpose:** Manages DefaultPlugin operations

**File:** `DefaultPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultRequestPolicy

**Purpose:** DefaultRequestPolicy component

**File:** `DefaultRequestPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultSelection

**Purpose:** DefaultSelection component

**File:** `DefaultSelection.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultSelectionDeriver

**Purpose:** DefaultSelectionDeriver component

**File:** `DefaultSelectionDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultSingleLazyPluginCollection

**Purpose:** DefaultSingleLazyPluginCollection component

**File:** `DefaultSingleLazyPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### DefaultTableMapping

**Purpose:** DefaultTableMapping component

**File:** `DefaultTableMapping.php`

**Architectural Issues:** 1 violations detected

---

#### DelayableQueueInterface

**Purpose:** DelayableQueueInterface component

**File:** `DelayableQueueInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DelayedRequeueException

**Purpose:** DelayedRequeueException component

**File:** `DelayedRequeueException.php`

**Architectural Issues:** 1 violations detected

---

#### Delete

**Purpose:** Delete component

**File:** `Delete.php`

**Architectural Issues:** 1 violations detected

---

#### DeleteAction

**Purpose:** DeleteAction component

**File:** `DeleteAction.php`

**Architectural Issues:** 1 violations detected

---

#### DeleteMultipleForm

**Purpose:** Form handling for DeleteMultiple

**File:** `DeleteMultipleForm.php`

**Architectural Issues:** 1 violations detected

---

#### DeletedFieldsRepository

**Purpose:** DeletedFieldsRepository component

**File:** `DeletedFieldsRepository.php`

**Architectural Issues:** 1 violations detected

---

#### DeletedFieldsRepositoryInterface

**Purpose:** DeletedFieldsRepositoryInterface component

**File:** `DeletedFieldsRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DenyNoCacheRoutes

**Purpose:** DenyNoCacheRoutes component

**File:** `DenyNoCacheRoutes.php`

**Architectural Issues:** 1 violations detected

---

#### Dependency

**Purpose:** Dependency component

**File:** `Dependency.php`

**Architectural Issues:** 1 violations detected

---

#### DependencySerializationTrait

**Purpose:** DependencySerializationTrait component

**File:** `DependencySerializationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DependencyTrait

**Purpose:** DependencyTrait component

**File:** `DependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DependentAccessInterface

**Purpose:** DependentAccessInterface component

**File:** `DependentAccessInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DependentPluginDefinitionInterface

**Purpose:** DependentPluginDefinitionInterface component

**File:** `DependentPluginDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DependentPluginDefinitionTrait

**Purpose:** DependentPluginDefinitionTrait component

**File:** `DependentPluginDefinitionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DependentPluginInterface

**Purpose:** DependentPluginInterface component

**File:** `DependentPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DeprecatedArray

**Purpose:** DeprecatedArray component

**File:** `DeprecatedArray.php`

**Architectural Issues:** 1 violations detected

---

#### DeprecatedServicePass

**Purpose:** Service for DeprecatedPass

**File:** `DeprecatedServicePass.php`

**Architectural Issues:** 1 violations detected

---

#### DeprecatedServicePropertyTrait

**Purpose:** Service for DeprecatedPropertyTrait

**File:** `DeprecatedServicePropertyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DeprecationHelper

**Purpose:** DeprecationHelper component

**File:** `DeprecationHelper.php`

**Architectural Issues:** 1 violations detected

---

#### DerivablePluginDefinitionInterface

**Purpose:** DerivablePluginDefinitionInterface component

**File:** `DerivablePluginDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DerivativeDiscoveryDecorator

**Purpose:** DerivativeDiscoveryDecorator component

**File:** `DerivativeDiscoveryDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### DerivativeInspectionInterface

**Purpose:** DerivativeInspectionInterface component

**File:** `DerivativeInspectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DeriverBase

**Purpose:** DeriverBase component

**File:** `DeriverBase.php`

**Architectural Issues:** 1 violations detected

---

#### DeriverInterface

**Purpose:** DeriverInterface component

**File:** `DeriverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DestructableInterface

**Purpose:** DestructableInterface component

**File:** `DestructableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Details

**Purpose:** Details component

**File:** `Details.php`

**Architectural Issues:** 1 violations detected

---

#### DevelopmentSettingsPass

**Purpose:** DevelopmentSettingsPass component

**File:** `DevelopmentSettingsPass.php`

**Architectural Issues:** 1 violations detected

---

#### DialogRenderer

**Purpose:** DialogRenderer component

**File:** `DialogRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### Diff

**Purpose:** Diff component

**File:** `Diff.php`

**Architectural Issues:** 1 violations detected

---

#### DiffArray

**Purpose:** DiffArray component

**File:** `DiffArray.php`

**Architectural Issues:** 1 violations detected

---

#### DiffFormatter

**Purpose:** Form handling for Diffatter

**File:** `DiffFormatter.php`

**Architectural Issues:** 2 violations detected

---

#### DiffOp

**Purpose:** DiffOp component

**File:** `DiffOp.php`

**Architectural Issues:** 1 violations detected

---

#### DiffOpAdd

**Purpose:** DiffOpAdd component

**File:** `DiffOpAdd.php`

**Architectural Issues:** 1 violations detected

---

#### DiffOpChange

**Purpose:** DiffOpChange component

**File:** `DiffOpChange.php`

**Architectural Issues:** 1 violations detected

---

#### DiffOpCopy

**Purpose:** DiffOpCopy component

**File:** `DiffOpCopy.php`

**Architectural Issues:** 1 violations detected

---

#### DiffOpDelete

**Purpose:** DiffOpDelete component

**File:** `DiffOpDelete.php`

**Architectural Issues:** 1 violations detected

---

#### DiffOpOutputBuilder

**Purpose:** DiffOpOutputBuilder component

**File:** `DiffOpOutputBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### DirectoryNotReadyException

**Purpose:** DirectoryNotReadyException component

**File:** `DirectoryNotReadyException.php`

**Architectural Issues:** 1 violations detected

---

#### DirectoryWithMetadataDiscovery

**Purpose:** DirectoryWithMetadataDiscovery component

**File:** `DirectoryWithMetadataDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### DirectoryWithMetadataPluginDiscovery

**Purpose:** DirectoryWithMetadataPluginDiscovery component

**File:** `DirectoryWithMetadataPluginDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### DiscoverableInterface

**Purpose:** DiscoverableInterface component

**File:** `DiscoverableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DiscoveryCachedTrait

**Purpose:** DiscoveryCachedTrait component

**File:** `DiscoveryCachedTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DiscoveryException

**Purpose:** DiscoveryException component

**File:** `DiscoveryException.php`

**Architectural Issues:** 1 violations detected

---

#### DiscoveryInterface

**Purpose:** DiscoveryInterface component

**File:** `DiscoveryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DiscoveryTrait

**Purpose:** DiscoveryTrait component

**File:** `DiscoveryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DisplayVariant

**Purpose:** DisplayVariant component

**File:** `DisplayVariant.php`

**Architectural Issues:** 2 violations detected

---

#### DoTrustedCallbackTrait

**Purpose:** DoTrustedCallbackTrait component

**File:** `DoTrustedCallbackTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DocParser

**Purpose:** DocParser component

**File:** `DocParser.php`

**Architectural Issues:** 1 violations detected

---

#### DraggableListBuilder

**Purpose:** DraggableListBuilder component

**File:** `DraggableListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### DraggableListBuilderTrait

**Purpose:** DraggableListBuilderTrait component

**File:** `DraggableListBuilderTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DriverNotSpecifiedException

**Purpose:** DriverNotSpecifiedException component

**File:** `DriverNotSpecifiedException.php`

**Architectural Issues:** 1 violations detected

---

#### Dropbutton

**Purpose:** Dropbutton component

**File:** `Dropbutton.php`

**Architectural Issues:** 1 violations detected

---

#### DrupalDateTime

**Purpose:** DrupalDateTime component

**File:** `DrupalDateTime.php`

**Architectural Issues:** 1 violations detected

---

#### DrupalKernel

**Purpose:** DrupalKernel component

**File:** `DrupalKernel.php`

**Architectural Issues:** 1 violations detected

---

#### DrupalKernelInterface

**Purpose:** DrupalKernelInterface component

**File:** `DrupalKernelInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DrupalTranslator

**Purpose:** DrupalTranslator component

**File:** `DrupalTranslator.php`

**Architectural Issues:** 1 violations detected

---

#### DuplicateConfigActionIdException

**Purpose:** DuplicateConfigActionIdException component

**File:** `DuplicateConfigActionIdException.php`

**Architectural Issues:** 1 violations detected

---

#### DurationInterface

**Purpose:** DurationInterface component

**File:** `DurationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DurationIso8601

**Purpose:** DurationIso8601 component

**File:** `DurationIso8601.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicEntityTypeParamConverterTrait

**Purpose:** DynamicEntityTypeParamConverterTrait component

**File:** `DynamicEntityTypeParamConverterTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicallyFieldableEntityStorageInterface

**Purpose:** DynamicallyFieldableEntityStorageInterface component

**File:** `DynamicallyFieldableEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### DynamicallyFieldableEntityStorageSchemaInterface

**Purpose:** DynamicallyFieldableEntityStorageSchemaInterface component

**File:** `DynamicallyFieldableEntityStorageSchemaInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EarlyRenderingControllerWrapperSubscriber

**Purpose:** Controls EarlyRenderingWrapperSubscriber operations

**File:** `EarlyRenderingControllerWrapperSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EditorialContentEntityBase

**Purpose:** EditorialContentEntityBase component

**File:** `EditorialContentEntityBase.php`

**Architectural Issues:** 1 violations detected

---

#### Element

**Purpose:** Element component

**File:** `Element.php`

**Architectural Issues:** 2 violations detected

---

#### ElementInfoManager

**Purpose:** Manages ElementInfo operations

**File:** `ElementInfoManager.php`

**Architectural Issues:** 1 violations detected

---

#### ElementInfoManagerInterface

**Purpose:** Manages ElementInfoInterface operations

**File:** `ElementInfoManagerInterface.php`

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

**Architectural Issues:** 2 violations detected

---

#### EmailAction

**Purpose:** EmailAction component

**File:** `EmailAction.php`

**Architectural Issues:** 1 violations detected

---

#### EmailConstraint

**Purpose:** EmailConstraint component

**File:** `EmailConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EmailDefaultWidget

**Purpose:** EmailDefaultWidget component

**File:** `EmailDefaultWidget.php`

**Architectural Issues:** 1 violations detected

---

#### EmailItem

**Purpose:** EmailItem component

**File:** `EmailItem.php`

**Architectural Issues:** 1 violations detected

---

#### EmailValidator

**Purpose:** EmailValidator component

**File:** `EmailValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EmailValidatorInterface

**Purpose:** EmailValidatorInterface component

**File:** `EmailValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EnforcedFormResponseSubscriber

**Purpose:** Form handling for EnforcedResponseSubscriber

**File:** `EnforcedFormResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EnforcedResponse

**Purpose:** EnforcedResponse component

**File:** `EnforcedResponse.php`

**Architectural Issues:** 1 violations detected

---

#### EnforcedResponseException

**Purpose:** EnforcedResponseException component

**File:** `EnforcedResponseException.php`

**Architectural Issues:** 1 violations detected

---

#### EnhancerInterface

**Purpose:** EnhancerInterface component

**File:** `EnhancerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessCheck

**Purpose:** EntityAccessCheck component

**File:** `EntityAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessControlHandler

**Purpose:** Handles requests for EntityAccessControl

**File:** `EntityAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAccessControlHandlerInterface

**Purpose:** Handles requests for EntityAccessControlInterface

**File:** `EntityAccessControlHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityActionBase

**Purpose:** EntityActionBase component

**File:** `EntityActionBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityActionDeriverBase

**Purpose:** EntityActionDeriverBase component

**File:** `EntityActionDeriverBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAdapter

**Purpose:** EntityAdapter component

**File:** `EntityAdapter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAutocomplete

**Purpose:** EntityAutocomplete component

**File:** `EntityAutocomplete.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAutocompleteMatcher

**Purpose:** EntityAutocompleteMatcher component

**File:** `EntityAutocompleteMatcher.php`

**Architectural Issues:** 1 violations detected

---

#### EntityAutocompleteMatcherInterface

**Purpose:** EntityAutocompleteMatcherInterface component

**File:** `EntityAutocompleteMatcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBase

**Purpose:** EntityBase component

**File:** `EntityBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBundle

**Purpose:** EntityBundle component

**File:** `EntityBundle.php`

**Architectural Issues:** 2 violations detected

---

#### EntityBundleExistsConstraint

**Purpose:** EntityBundleExistsConstraint component

**File:** `EntityBundleExistsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBundleExistsConstraintValidator

**Purpose:** EntityBundleExistsConstraintValidator component

**File:** `EntityBundleExistsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBundleListener

**Purpose:** EntityBundleListener component

**File:** `EntityBundleListener.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBundleListenerInterface

**Purpose:** EntityBundleListenerInterface component

**File:** `EntityBundleListenerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityBundleRouteEnhancer

**Purpose:** EntityBundleRouteEnhancer component

**File:** `EntityBundleRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangedActionDeriver

**Purpose:** EntityChangedActionDeriver component

**File:** `EntityChangedActionDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangedConstraint

**Purpose:** EntityChangedConstraint component

**File:** `EntityChangedConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangedConstraintValidator

**Purpose:** EntityChangedConstraintValidator component

**File:** `EntityChangedConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangedInterface

**Purpose:** EntityChangedInterface component

**File:** `EntityChangedInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangedTrait

**Purpose:** EntityChangedTrait component

**File:** `EntityChangedTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityChangesDetectionTrait

**Purpose:** EntityChangesDetectionTrait component

**File:** `EntityChangesDetectionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityClone

**Purpose:** EntityClone component

**File:** `EntityClone.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConfirmFormBase

**Purpose:** Form handling for EntityConfirmBase

**File:** `EntityConfirmFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConstraintViolationList

**Purpose:** EntityConstraintViolationList component

**File:** `EntityConstraintViolationList.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConstraintViolationListInterface

**Purpose:** EntityConstraintViolationListInterface component

**File:** `EntityConstraintViolationListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityContext

**Purpose:** EntityContext component

**File:** `EntityContext.php`

**Architectural Issues:** 1 violations detected

---

#### EntityContextDefinition

**Purpose:** EntityContextDefinition component

**File:** `EntityContextDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### EntityController

**Purpose:** Controls Entity operations

**File:** `EntityController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityConverter

**Purpose:** EntityConverter component

**File:** `EntityConverter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCreate

**Purpose:** EntityCreate component

**File:** `EntityCreate.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCreateAccessCheck

**Purpose:** EntityCreateAccessCheck component

**File:** `EntityCreateAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCreateAnyAccessCheck

**Purpose:** EntityCreateAnyAccessCheck component

**File:** `EntityCreateAnyAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### EntityCreateDeriver

**Purpose:** EntityCreateDeriver component

**File:** `EntityCreateDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDataDefinition

**Purpose:** EntityDataDefinition component

**File:** `EntityDataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDataDefinitionInterface

**Purpose:** EntityDataDefinitionInterface component

**File:** `EntityDataDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDefinitionUpdateManager

**Purpose:** Manages EntityDefinitionUpdate operations

**File:** `EntityDefinitionUpdateManager.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDefinitionUpdateManagerInterface

**Purpose:** Manages EntityDefinitionUpdateInterface operations

**File:** `EntityDefinitionUpdateManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeleteActionDeriver

**Purpose:** EntityDeleteActionDeriver component

**File:** `EntityDeleteActionDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeleteForm

**Purpose:** Form handling for EntityDelete

**File:** `EntityDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeleteFormTrait

**Purpose:** Form handling for EntityDeleteTrait

**File:** `EntityDeleteFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeleteMultipleAccessCheck

**Purpose:** EntityDeleteMultipleAccessCheck component

**File:** `EntityDeleteMultipleAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDeriver

**Purpose:** EntityDeriver component

**File:** `EntityDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDescriptionInterface

**Purpose:** EntityDescriptionInterface component

**File:** `EntityDescriptionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayBase

**Purpose:** EntityDisplayBase component

**File:** `EntityDisplayBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayInterface

**Purpose:** EntityDisplayInterface component

**File:** `EntityDisplayInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeBase

**Purpose:** EntityDisplayModeBase component

**File:** `EntityDisplayModeBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayModeInterface

**Purpose:** EntityDisplayModeInterface component

**File:** `EntityDisplayModeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayPluginCollection

**Purpose:** EntityDisplayPluginCollection component

**File:** `EntityDisplayPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayRepository

**Purpose:** EntityDisplayRepository component

**File:** `EntityDisplayRepository.php`

**Architectural Issues:** 1 violations detected

---

#### EntityDisplayRepositoryInterface

**Purpose:** EntityDisplayRepositoryInterface component

**File:** `EntityDisplayRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldManager

**Purpose:** Manages EntityField operations

**File:** `EntityFieldManager.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFieldManagerInterface

**Purpose:** Manages EntityFieldInterface operations

**File:** `EntityFieldManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityForm

**Purpose:** Form handling for Entity

**File:** `EntityForm.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormBuilder

**Purpose:** Form handling for EntityBuilder

**File:** `EntityFormBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormBuilderInterface

**Purpose:** Form handling for EntityBuilderInterface

**File:** `EntityFormBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormDisplay

**Purpose:** Form handling for EntityDisplay

**File:** `EntityFormDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormDisplayAccessControlHandler

**Purpose:** Handles requests for EntityFormDisplayAccessControl

**File:** `EntityFormDisplayAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormDisplayInterface

**Purpose:** Form handling for EntityDisplayInterface

**File:** `EntityFormDisplayInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormInterface

**Purpose:** Form handling for EntityInterface

**File:** `EntityFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormMode

**Purpose:** Form handling for EntityMode

**File:** `EntityFormMode.php`

**Architectural Issues:** 1 violations detected

---

#### EntityFormModeInterface

**Purpose:** Form handling for EntityModeInterface

**File:** `EntityFormModeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityHandlerBase

**Purpose:** Handles requests for EntityBase

**File:** `EntityHandlerBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityHandlerInterface

**Purpose:** Handles requests for EntityInterface

**File:** `EntityHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityHasFieldConstraint

**Purpose:** EntityHasFieldConstraint component

**File:** `EntityHasFieldConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityHasFieldConstraintValidator

**Purpose:** EntityHasFieldConstraintValidator component

**File:** `EntityHasFieldConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityInterface

**Purpose:** EntityInterface component

**File:** `EntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityLastInstalledSchemaRepository

**Purpose:** EntityLastInstalledSchemaRepository component

**File:** `EntityLastInstalledSchemaRepository.php`

**Architectural Issues:** 1 violations detected

---

#### EntityLastInstalledSchemaRepositoryInterface

**Purpose:** EntityLastInstalledSchemaRepositoryInterface component

**File:** `EntityLastInstalledSchemaRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityListBuilder

**Purpose:** EntityListBuilder component

**File:** `EntityListBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityListBuilderInterface

**Purpose:** EntityListBuilderInterface component

**File:** `EntityListBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityListController

**Purpose:** Controls EntityList operations

**File:** `EntityListController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityMalformedException

**Purpose:** EntityMalformedException component

**File:** `EntityMalformedException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityMethod

**Purpose:** EntityMethod component

**File:** `EntityMethod.php`

**Architectural Issues:** 1 violations detected

---

#### EntityMethodDeriver

**Purpose:** EntityMethodDeriver component

**File:** `EntityMethodDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityMethodException

**Purpose:** EntityMethodException component

**File:** `EntityMethodException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPublishedActionDeriver

**Purpose:** EntityPublishedActionDeriver component

**File:** `EntityPublishedActionDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPublishedInterface

**Purpose:** EntityPublishedInterface component

**File:** `EntityPublishedInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityPublishedTrait

**Purpose:** EntityPublishedTrait component

**File:** `EntityPublishedTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReference

**Purpose:** EntityReference component

**File:** `EntityReference.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceAutocompleteTagsWidget

**Purpose:** EntityReferenceAutocompleteTagsWidget component

**File:** `EntityReferenceAutocompleteTagsWidget.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceAutocompleteWidget

**Purpose:** EntityReferenceAutocompleteWidget component

**File:** `EntityReferenceAutocompleteWidget.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceEntityFormatter

**Purpose:** Form handling for EntityReferenceEntityatter

**File:** `EntityReferenceEntityFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFieldItemList

**Purpose:** EntityReferenceFieldItemList component

**File:** `EntityReferenceFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFieldItemListInterface

**Purpose:** EntityReferenceFieldItemListInterface component

**File:** `EntityReferenceFieldItemListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceFormatterBase

**Purpose:** Form handling for EntityReferenceatterBase

**File:** `EntityReferenceFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceIdFormatter

**Purpose:** Form handling for EntityReferenceIdatter

**File:** `EntityReferenceIdFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceItem

**Purpose:** EntityReferenceItem component

**File:** `EntityReferenceItem.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceItemBase

**Purpose:** EntityReferenceItemBase component

**File:** `EntityReferenceItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceItemInterface

**Purpose:** EntityReferenceItemInterface component

**File:** `EntityReferenceItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceLabelFormatter

**Purpose:** Form handling for EntityReferenceLabelatter

**File:** `EntityReferenceLabelFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityReferenceSelection

**Purpose:** EntityReferenceSelection component

**File:** `EntityReferenceSelection.php`

**Architectural Issues:** 2 violations detected

---

#### EntityRepository

**Purpose:** EntityRepository component

**File:** `EntityRepository.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRepositoryInterface

**Purpose:** EntityRepositoryInterface component

**File:** `EntityRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityResolverManager

**Purpose:** Manages EntityResolver operations

**File:** `EntityResolverManager.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRevisionParamConverter

**Purpose:** EntityRevisionParamConverter component

**File:** `EntityRevisionParamConverter.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRevisionRouteEnhancer

**Purpose:** EntityRevisionRouteEnhancer component

**File:** `EntityRevisionRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRevisionViewController

**Purpose:** Controls EntityRevisionView operations

**File:** `EntityRevisionViewController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRouteAlterSubscriber

**Purpose:** EntityRouteAlterSubscriber component

**File:** `EntityRouteAlterSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRouteEnhancer

**Purpose:** EntityRouteEnhancer component

**File:** `EntityRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRouteProviderInterface

**Purpose:** EntityRouteProviderInterface component

**File:** `EntityRouteProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityRouteProviderSubscriber

**Purpose:** EntityRouteProviderSubscriber component

**File:** `EntityRouteProviderSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### EntityStorageBase

**Purpose:** EntityStorageBase component

**File:** `EntityStorageBase.php`

**Architectural Issues:** 1 violations detected

---

#### EntityStorageException

**Purpose:** EntityStorageException component

**File:** `EntityStorageException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityStorageInterface

**Purpose:** EntityStorageInterface component

**File:** `EntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityStorageSchemaInterface

**Purpose:** EntityStorageSchemaInterface component

**File:** `EntityStorageSchemaInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityType

**Purpose:** EntityType component

**File:** `EntityType.php`

**Architectural Issues:** 3 violations detected

---

#### EntityTypeBundleInfo

**Purpose:** EntityTypeBundleInfo component

**File:** `EntityTypeBundleInfo.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeBundleInfoInterface

**Purpose:** EntityTypeBundleInfoInterface component

**File:** `EntityTypeBundleInfoInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeConstraint

**Purpose:** EntityTypeConstraint component

**File:** `EntityTypeConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeConstraintValidator

**Purpose:** EntityTypeConstraintValidator component

**File:** `EntityTypeConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeEvent

**Purpose:** EntityTypeEvent component

**File:** `EntityTypeEvent.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeEventSubscriberTrait

**Purpose:** EntityTypeEventSubscriberTrait component

**File:** `EntityTypeEventSubscriberTrait.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeEvents

**Purpose:** EntityTypeEvents component

**File:** `EntityTypeEvents.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeIdLengthException

**Purpose:** EntityTypeIdLengthException component

**File:** `EntityTypeIdLengthException.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeInterface

**Purpose:** EntityTypeInterface component

**File:** `EntityTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeListener

**Purpose:** EntityTypeListener component

**File:** `EntityTypeListener.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeListenerInterface

**Purpose:** EntityTypeListenerInterface component

**File:** `EntityTypeListenerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeManager

**Purpose:** Manages EntityType operations

**File:** `EntityTypeManager.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeManagerInterface

**Purpose:** Manages EntityTypeInterface operations

**File:** `EntityTypeManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeRepository

**Purpose:** EntityTypeRepository component

**File:** `EntityTypeRepository.php`

**Architectural Issues:** 1 violations detected

---

#### EntityTypeRepositoryInterface

**Purpose:** EntityTypeRepositoryInterface component

**File:** `EntityTypeRepositoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityUntranslatableFieldsConstraint

**Purpose:** EntityUntranslatableFieldsConstraint component

**File:** `EntityUntranslatableFieldsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### EntityUntranslatableFieldsConstraintValidator

**Purpose:** EntityUntranslatableFieldsConstraintValidator component

**File:** `EntityUntranslatableFieldsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewBuilder

**Purpose:** EntityViewBuilder component

**File:** `EntityViewBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewBuilderInterface

**Purpose:** EntityViewBuilderInterface component

**File:** `EntityViewBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewController

**Purpose:** Controls EntityView operations

**File:** `EntityViewController.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewDisplay

**Purpose:** EntityViewDisplay component

**File:** `EntityViewDisplay.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewDisplayAccessControlHandler

**Purpose:** Handles requests for EntityViewDisplayAccessControl

**File:** `EntityViewDisplayAccessControlHandler.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewDisplayInterface

**Purpose:** EntityViewDisplayInterface component

**File:** `EntityViewDisplayInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewMode

**Purpose:** EntityViewMode component

**File:** `EntityViewMode.php`

**Architectural Issues:** 1 violations detected

---

#### EntityViewModeInterface

**Purpose:** EntityViewModeInterface component

**File:** `EntityViewModeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### EntityWithPluginCollectionInterface

**Purpose:** EntityWithPluginCollectionInterface component

**File:** `EntityWithPluginCollectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Environment

**Purpose:** Environment component

**File:** `Environment.php`

**Architectural Issues:** 1 violations detected

---

#### EquivalentUpdate

**Purpose:** EquivalentUpdate component

**File:** `EquivalentUpdate.php`

**Architectural Issues:** 1 violations detected

---

#### Error

**Purpose:** Error component

**File:** `Error.php`

**Architectural Issues:** 1 violations detected

---

#### Event

**Purpose:** Event component

**File:** `Event.php`

**Architectural Issues:** 1 violations detected

---

#### EventException

**Purpose:** EventException component

**File:** `EventException.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionDetectNeedsInstallSubscriber

**Purpose:** ExceptionDetectNeedsInstallSubscriber component

**File:** `ExceptionDetectNeedsInstallSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionHandler

**Purpose:** Handles requests for Exception

**File:** `ExceptionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionInterface

**Purpose:** ExceptionInterface component

**File:** `ExceptionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionJsonSubscriber

**Purpose:** ExceptionJsonSubscriber component

**File:** `ExceptionJsonSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionLoggingSubscriber

**Purpose:** ExceptionLoggingSubscriber component

**File:** `ExceptionLoggingSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ExcludedModulesEventSubscriber

**Purpose:** ExcludedModulesEventSubscriber component

**File:** `ExcludedModulesEventSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutableException

**Purpose:** ExecutableException component

**File:** `ExecutableException.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutableInterface

**Purpose:** ExecutableInterface component

**File:** `ExecutableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutableManagerInterface

**Purpose:** Manages ExecutableInterface operations

**File:** `ExecutableManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutablePluginBase

**Purpose:** ExecutablePluginBase component

**File:** `ExecutablePluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutionContext

**Purpose:** ExecutionContext component

**File:** `ExecutionContext.php`

**Architectural Issues:** 1 violations detected

---

#### ExecutionContextFactory

**Purpose:** ExecutionContextFactory component

**File:** `ExecutionContextFactory.php`

**Architectural Issues:** 1 violations detected

---

#### Existing

**Purpose:** Existing component

**File:** `Existing.php`

**Architectural Issues:** 1 violations detected

---

#### Exists

**Purpose:** Exists component

**File:** `Exists.php`

**Architectural Issues:** 1 violations detected

---

#### ExportMetadata

**Purpose:** ExportMetadata component

**File:** `ExportMetadata.php`

**Architectural Issues:** 1 violations detected

---

#### ExportResult

**Purpose:** ExportResult component

**File:** `ExportResult.php`

**Architectural Issues:** 1 violations detected

---

#### ExportStorageManager

**Purpose:** Manages ExportStorage operations

**File:** `ExportStorageManager.php`

**Architectural Issues:** 1 violations detected

---

#### Exporter

**Purpose:** Exporter component

**File:** `Exporter.php`

**Architectural Issues:** 1 violations detected

---

#### ExtendableInterface

**Purpose:** ExtendableInterface component

**File:** `ExtendableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Extension

**Purpose:** Extension component

**File:** `Extension.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionDiscovery

**Purpose:** ExtensionDiscovery component

**File:** `ExtensionDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionExistsConstraint

**Purpose:** ExtensionExistsConstraint component

**File:** `ExtensionExistsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionExistsConstraintValidator

**Purpose:** ExtensionExistsConstraintValidator component

**File:** `ExtensionExistsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionInstallStorage

**Purpose:** ExtensionInstallStorage component

**File:** `ExtensionInstallStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionLifecycle

**Purpose:** ExtensionLifecycle component

**File:** `ExtensionLifecycle.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionList

**Purpose:** ExtensionList component

**File:** `ExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionListTrait

**Purpose:** ExtensionListTrait component

**File:** `ExtensionListTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionMimeTypeGuesser

**Purpose:** ExtensionMimeTypeGuesser component

**File:** `ExtensionMimeTypeGuesser.php`

**Architectural Issues:** 2 violations detected

---

#### ExtensionNameConstraint

**Purpose:** ExtensionNameConstraint component

**File:** `ExtensionNameConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionNameLengthException

**Purpose:** ExtensionNameLengthException component

**File:** `ExtensionNameLengthException.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionNameReservedException

**Purpose:** ExtensionNameReservedException component

**File:** `ExtensionNameReservedException.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionPathResolver

**Purpose:** ExtensionPathResolver component

**File:** `ExtensionPathResolver.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionType

**Purpose:** ExtensionType component

**File:** `ExtensionType.php`

**Architectural Issues:** 1 violations detected

---

#### ExtensionVersion

**Purpose:** ExtensionVersion component

**File:** `ExtensionVersion.php`

**Architectural Issues:** 1 violations detected

---

#### FTP

**Purpose:** FTP component

**File:** `FTP.php`

**Architectural Issues:** 1 violations detected

---

#### FTPExtension

**Purpose:** FTPExtension component

**File:** `FTPExtension.php`

**Architectural Issues:** 1 violations detected

---

#### FactoryInterface

**Purpose:** FactoryInterface component

**File:** `FactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FallbackFieldTypeCategory

**Purpose:** FallbackFieldTypeCategory component

**File:** `FallbackFieldTypeCategory.php`

**Architectural Issues:** 1 violations detected

---

#### FallbackPluginManagerInterface

**Purpose:** Manages FallbackPluginInterface operations

**File:** `FallbackPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Fast404ExceptionHtmlSubscriber

**Purpose:** Fast404ExceptionHtmlSubscriber component

**File:** `Fast404ExceptionHtmlSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### FetchAs

**Purpose:** FetchAs component

**File:** `FetchAs.php`

**Architectural Issues:** 1 violations detected

---

#### FetchModeTrait

**Purpose:** FetchModeTrait component

**File:** `FetchModeTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigBase

**Purpose:** FieldConfigBase component

**File:** `FieldConfigBase.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigInterface

**Purpose:** FieldConfigInterface component

**File:** `FieldConfigInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldConfigStorageBase

**Purpose:** FieldConfigStorageBase component

**File:** `FieldConfigStorageBase.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDefinition

**Purpose:** FieldDefinition component

**File:** `FieldDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDefinitionInterface

**Purpose:** FieldDefinitionInterface component

**File:** `FieldDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDefinitionListener

**Purpose:** FieldDefinitionListener component

**File:** `FieldDefinitionListener.php`

**Architectural Issues:** 1 violations detected

---

#### FieldDefinitionListenerInterface

**Purpose:** FieldDefinitionListenerInterface component

**File:** `FieldDefinitionListenerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldException

**Purpose:** FieldException component

**File:** `FieldException.php`

**Architectural Issues:** 1 violations detected

---

#### FieldFilteredMarkup

**Purpose:** FieldFilteredMarkup component

**File:** `FieldFilteredMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### FieldFormatter

**Purpose:** Form handling for Fieldatter

**File:** `FieldFormatter.php`

**Architectural Issues:** 2 violations detected

---

#### FieldInputValueNormalizerTrait

**Purpose:** FieldInputValueNormalizerTrait component

**File:** `FieldInputValueNormalizerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItem

**Purpose:** FieldItem component

**File:** `FieldItem.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemBase

**Purpose:** FieldItemBase component

**File:** `FieldItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemDataDefinition

**Purpose:** FieldItemDataDefinition component

**File:** `FieldItemDataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemDataDefinitionInterface

**Purpose:** FieldItemDataDefinitionInterface component

**File:** `FieldItemDataDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemDeriver

**Purpose:** FieldItemDeriver component

**File:** `FieldItemDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemInterface

**Purpose:** FieldItemInterface component

**File:** `FieldItemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemList

**Purpose:** FieldItemList component

**File:** `FieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### FieldItemListInterface

**Purpose:** FieldItemListInterface component

**File:** `FieldItemListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldPreprocess

**Purpose:** FieldPreprocess component

**File:** `FieldPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionEvent

**Purpose:** FieldStorageDefinitionEvent component

**File:** `FieldStorageDefinitionEvent.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionEventSubscriberTrait

**Purpose:** FieldStorageDefinitionEventSubscriberTrait component

**File:** `FieldStorageDefinitionEventSubscriberTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionEvents

**Purpose:** FieldStorageDefinitionEvents component

**File:** `FieldStorageDefinitionEvents.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionInterface

**Purpose:** FieldStorageDefinitionInterface component

**File:** `FieldStorageDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionListener

**Purpose:** FieldStorageDefinitionListener component

**File:** `FieldStorageDefinitionListener.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionListenerInterface

**Purpose:** FieldStorageDefinitionListenerInterface component

**File:** `FieldStorageDefinitionListenerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldStorageDefinitionUpdateForbiddenException

**Purpose:** FieldStorageDefinitionUpdateForbiddenException component

**File:** `FieldStorageDefinitionUpdateForbiddenException.php`

**Architectural Issues:** 1 violations detected

---

#### FieldType

**Purpose:** FieldType component

**File:** `FieldType.php`

**Architectural Issues:** 2 violations detected

---

#### FieldTypeCategory

**Purpose:** FieldTypeCategory component

**File:** `FieldTypeCategory.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypeCategoryInterface

**Purpose:** FieldTypeCategoryInterface component

**File:** `FieldTypeCategoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypeCategoryManager

**Purpose:** Manages FieldTypeCategory operations

**File:** `FieldTypeCategoryManager.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypeCategoryManagerInterface

**Purpose:** Manages FieldTypeCategoryInterface operations

**File:** `FieldTypeCategoryManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypePluginManager

**Purpose:** Manages FieldTypePlugin operations

**File:** `FieldTypePluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### FieldTypePluginManagerInterface

**Purpose:** Manages FieldTypePluginInterface operations

**File:** `FieldTypePluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldUpdateActionBase

**Purpose:** FieldUpdateActionBase component

**File:** `FieldUpdateActionBase.php`

**Architectural Issues:** 1 violations detected

---

#### FieldWidget

**Purpose:** FieldWidget component

**File:** `FieldWidget.php`

**Architectural Issues:** 2 violations detected

---

#### FieldableEntityInterface

**Purpose:** FieldableEntityInterface component

**File:** `FieldableEntityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FieldableEntityStorageInterface

**Purpose:** FieldableEntityStorageInterface component

**File:** `FieldableEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Fieldgroup

**Purpose:** Fieldgroup component

**File:** `Fieldgroup.php`

**Architectural Issues:** 1 violations detected

---

#### FieldsOverlapException

**Purpose:** FieldsOverlapException component

**File:** `FieldsOverlapException.php`

**Architectural Issues:** 1 violations detected

---

#### Fieldset

**Purpose:** Fieldset component

**File:** `Fieldset.php`

**Architectural Issues:** 1 violations detected

---

#### File

**Purpose:** File component

**File:** `File.php`

**Architectural Issues:** 1 violations detected

---

#### FileCache

**Purpose:** FileCache component

**File:** `FileCache.php`

**Architectural Issues:** 1 violations detected

---

#### FileCacheBackendInterface

**Purpose:** FileCacheBackendInterface component

**File:** `FileCacheBackendInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileCacheFactory

**Purpose:** FileCacheFactory component

**File:** `FileCacheFactory.php`

**Architectural Issues:** 1 violations detected

---

#### FileCacheInterface

**Purpose:** FileCacheInterface component

**File:** `FileCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileException

**Purpose:** FileException component

**File:** `FileException.php`

**Architectural Issues:** 1 violations detected

---

#### FileExists

**Purpose:** FileExists component

**File:** `FileExists.php`

**Architectural Issues:** 1 violations detected

---

#### FileExistsException

**Purpose:** FileExistsException component

**File:** `FileExistsException.php`

**Architectural Issues:** 1 violations detected

---

#### FileNotExistsException

**Purpose:** FileNotExistsException component

**File:** `FileNotExistsException.php`

**Architectural Issues:** 1 violations detected

---

#### FileReadOnlyStorage

**Purpose:** FileReadOnlyStorage component

**File:** `FileReadOnlyStorage.php`

**Architectural Issues:** 1 violations detected

---

#### FileSecurity

**Purpose:** FileSecurity component

**File:** `FileSecurity.php`

**Architectural Issues:** 1 violations detected

---

#### FileStorage

**Purpose:** FileStorage component

**File:** `FileStorage.php`

**Architectural Issues:** 2 violations detected

---

#### FileStorageFactory

**Purpose:** FileStorageFactory component

**File:** `FileStorageFactory.php`

**Architectural Issues:** 1 violations detected

---

#### FileSystem

**Purpose:** FileSystem component

**File:** `FileSystem.php`

**Architectural Issues:** 2 violations detected

---

#### FileSystemInterface

**Purpose:** FileSystemInterface component

**File:** `FileSystemInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileTransfer

**Purpose:** FileTransfer component

**File:** `FileTransfer.php`

**Architectural Issues:** 1 violations detected

---

#### FileTransferAuthorizeForm

**Purpose:** Form handling for FileTransferAuthorize

**File:** `FileTransferAuthorizeForm.php`

**Architectural Issues:** 1 violations detected

---

#### FileTransferException

**Purpose:** FileTransferException component

**File:** `FileTransferException.php`

**Architectural Issues:** 1 violations detected

---

#### FileTranslation

**Purpose:** FileTranslation component

**File:** `FileTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### FileUploadSanitizeNameEvent

**Purpose:** FileUploadSanitizeNameEvent component

**File:** `FileUploadSanitizeNameEvent.php`

**Architectural Issues:** 1 violations detected

---

#### FileUrlGenerator

**Purpose:** FileUrlGenerator component

**File:** `FileUrlGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### FileUrlGeneratorInterface

**Purpose:** FileUrlGeneratorInterface component

**File:** `FileUrlGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileWriteException

**Purpose:** FileWriteException component

**File:** `FileWriteException.php`

**Architectural Issues:** 1 violations detected

---

#### FilesystemLoader

**Purpose:** FilesystemLoader component

**File:** `FilesystemLoader.php`

**Architectural Issues:** 1 violations detected

---

#### FilterArray

**Purpose:** FilterArray component

**File:** `FilterArray.php`

**Architectural Issues:** 1 violations detected

---

#### FilterInterface

**Purpose:** FilterInterface component

**File:** `FilterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FilteredPluginManagerInterface

**Purpose:** Manages FilteredPluginInterface operations

**File:** `FilteredPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FilteredPluginManagerTrait

**Purpose:** Manages FilteredPluginTrait operations

**File:** `FilteredPluginManagerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FinalExceptionSubscriber

**Purpose:** FinalExceptionSubscriber component

**File:** `FinalExceptionSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### FinalMissingContentSubscriber

**Purpose:** FinalMissingContentSubscriber component

**File:** `FinalMissingContentSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### Finder

**Purpose:** Finder component

**File:** `Finder.php`

**Architectural Issues:** 1 violations detected

---

#### FinishResponseSubscriber

**Purpose:** FinishResponseSubscriber component

**File:** `FinishResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### FirstOrLast

**Purpose:** FirstOrLast component

**File:** `FirstOrLast.php`

**Architectural Issues:** 1 violations detected

---

#### FloatData

**Purpose:** FloatData component

**File:** `FloatData.php`

**Architectural Issues:** 1 violations detected

---

#### FloatInterface

**Purpose:** FloatInterface component

**File:** `FloatInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FloatItem

**Purpose:** FloatItem component

**File:** `FloatItem.php`

**Architectural Issues:** 1 violations detected

---

#### FloodInterface

**Purpose:** FloodInterface component

**File:** `FloodInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FocusFirstCommand

**Purpose:** FocusFirstCommand component

**File:** `FocusFirstCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Form

**Purpose:** Form handling for 

**File:** `Form.php`

**Architectural Issues:** 1 violations detected

---

#### FormAjaxException

**Purpose:** Form handling for AjaxException

**File:** `FormAjaxException.php`

**Architectural Issues:** 1 violations detected

---

#### FormAjaxResponseBuilder

**Purpose:** Form handling for AjaxResponseBuilder

**File:** `FormAjaxResponseBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FormAjaxResponseBuilderInterface

**Purpose:** Form handling for AjaxResponseBuilderInterface

**File:** `FormAjaxResponseBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormAjaxSubscriber

**Purpose:** Form handling for AjaxSubscriber

**File:** `FormAjaxSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### FormBase

**Purpose:** Form handling for Base

**File:** `FormBase.php`

**Architectural Issues:** 1 violations detected

---

#### FormBuilder

**Purpose:** Form handling for Builder

**File:** `FormBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### FormBuilderInterface

**Purpose:** Form handling for BuilderInterface

**File:** `FormBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormCache

**Purpose:** Form handling for Cache

**File:** `FormCache.php`

**Architectural Issues:** 1 violations detected

---

#### FormCacheInterface

**Purpose:** Form handling for CacheInterface

**File:** `FormCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormController

**Purpose:** Controls Form operations

**File:** `FormController.php`

**Architectural Issues:** 1 violations detected

---

#### FormElement

**Purpose:** Form handling for Element

**File:** `FormElement.php`

**Architectural Issues:** 3 violations detected

---

#### FormElementBase

**Purpose:** Form handling for ElementBase

**File:** `FormElementBase.php`

**Architectural Issues:** 1 violations detected

---

#### FormElementHelper

**Purpose:** Form handling for ElementHelper

**File:** `FormElementHelper.php`

**Architectural Issues:** 1 violations detected

---

#### FormElementInterface

**Purpose:** Form handling for ElementInterface

**File:** `FormElementInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormErrorHandler

**Purpose:** Handles requests for FormError

**File:** `FormErrorHandler.php`

**Architectural Issues:** 1 violations detected

---

#### FormErrorHandlerInterface

**Purpose:** Handles requests for FormErrorInterface

**File:** `FormErrorHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormHelper

**Purpose:** Form handling for Helper

**File:** `FormHelper.php`

**Architectural Issues:** 1 violations detected

---

#### FormInterface

**Purpose:** Form handling for Interface

**File:** `FormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormPreprocess

**Purpose:** Form handling for Preprocess

**File:** `FormPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### FormRouteEnhancer

**Purpose:** Form handling for RouteEnhancer

**File:** `FormRouteEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### FormState

**Purpose:** Form handling for State

**File:** `FormState.php`

**Architectural Issues:** 1 violations detected

---

#### FormStateDecoratorBase

**Purpose:** Form handling for StateDecoratorBase

**File:** `FormStateDecoratorBase.php`

**Architectural Issues:** 1 violations detected

---

#### FormStateInterface

**Purpose:** Form handling for StateInterface

**File:** `FormStateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormStateValuesTrait

**Purpose:** Form handling for StateValuesTrait

**File:** `FormStateValuesTrait.php`

**Architectural Issues:** 1 violations detected

---

#### FormSubmitter

**Purpose:** Form handling for Submitter

**File:** `FormSubmitter.php`

**Architectural Issues:** 1 violations detected

---

#### FormSubmitterInterface

**Purpose:** Form handling for SubmitterInterface

**File:** `FormSubmitterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormValidator

**Purpose:** Form handling for Validator

**File:** `FormValidator.php`

**Architectural Issues:** 1 violations detected

---

#### FormValidatorInterface

**Purpose:** Form handling for ValidatorInterface

**File:** `FormValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormattableMarkup

**Purpose:** Form handling for attableMarkup

**File:** `FormattableMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### FormattedDateDiff

**Purpose:** Form handling for attedDateDiff

**File:** `FormattedDateDiff.php`

**Architectural Issues:** 1 violations detected

---

#### FormatterBase

**Purpose:** Form handling for atterBase

**File:** `FormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### FormatterInterface

**Purpose:** Form handling for atterInterface

**File:** `FormatterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FormatterPluginManager

**Purpose:** Form handling for atterPluginManager

**File:** `FormatterPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### FrontMatter

**Purpose:** FrontMatter component

**File:** `FrontMatter.php`

**Architectural Issues:** 1 violations detected

---

#### FrontMatterParseException

**Purpose:** FrontMatterParseException component

**File:** `FrontMatterParseException.php`

**Architectural Issues:** 1 violations detected

---

#### FullyValidatableConstraint

**Purpose:** FullyValidatableConstraint component

**File:** `FullyValidatableConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### FullyValidatableConstraintValidator

**Purpose:** FullyValidatableConstraintValidator component

**File:** `FullyValidatableConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### GenerateProxyClassApplication

**Purpose:** GenerateProxyClassApplication component

**File:** `GenerateProxyClassApplication.php`

**Architectural Issues:** 1 violations detected

---

#### GenerateProxyClassCommand

**Purpose:** GenerateProxyClassCommand component

**File:** `GenerateProxyClassCommand.php`

**Architectural Issues:** 1 violations detected

---

#### GenerateTheme

**Purpose:** GenerateTheme component

**File:** `GenerateTheme.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratedButton

**Purpose:** GeneratedButton component

**File:** `GeneratedButton.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratedLink

**Purpose:** GeneratedLink component

**File:** `GeneratedLink.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratedNoLink

**Purpose:** GeneratedNoLink component

**File:** `GeneratedNoLink.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratedUrl

**Purpose:** GeneratedUrl component

**File:** `GeneratedUrl.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratorNotInitializedException

**Purpose:** GeneratorNotInitializedException component

**File:** `GeneratorNotInitializedException.php`

**Architectural Issues:** 1 violations detected

---

#### GotoAction

**Purpose:** GotoAction component

**File:** `GotoAction.php`

**Architectural Issues:** 1 violations detected

---

#### Graph

**Purpose:** Graph component

**File:** `Graph.php`

**Architectural Issues:** 1 violations detected

---

#### HWLDFWordAccumulator

**Purpose:** HWLDFWordAccumulator component

**File:** `HWLDFWordAccumulator.php`

**Architectural Issues:** 1 violations detected

---

#### HandlerStackConfigurator

**Purpose:** Handles requests for StackConfigurator

**File:** `HandlerStackConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### HeadersCacheContext

**Purpose:** HeadersCacheContext component

**File:** `HeadersCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### Hidden

**Purpose:** Hidden component

**File:** `Hidden.php`

**Architectural Issues:** 1 violations detected

---

#### Hook

**Purpose:** Hook component

**File:** `Hook.php`

**Architectural Issues:** 1 violations detected

---

#### HookAttributeInterface

**Purpose:** HookAttributeInterface component

**File:** `HookAttributeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HookCollectorKeyValueWritePass

**Purpose:** HookCollectorKeyValueWritePass component

**File:** `HookCollectorKeyValueWritePass.php`

**Architectural Issues:** 1 violations detected

---

#### HookCollectorPass

**Purpose:** HookCollectorPass component

**File:** `HookCollectorPass.php`

**Architectural Issues:** 1 violations detected

---

#### HookDiscovery

**Purpose:** HookDiscovery component

**File:** `HookDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### HtaccessWriter

**Purpose:** HtaccessWriter component

**File:** `HtaccessWriter.php`

**Architectural Issues:** 1 violations detected

---

#### HtaccessWriterInterface

**Purpose:** HtaccessWriterInterface component

**File:** `HtaccessWriterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Html

**Purpose:** Html component

**File:** `Html.php`

**Architectural Issues:** 2 violations detected

---

#### HtmlCommand

**Purpose:** HtmlCommand component

**File:** `HtmlCommand.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlEntityFormController

**Purpose:** Controls HtmlEntityForm operations

**File:** `HtmlEntityFormController.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlEscapedText

**Purpose:** HtmlEscapedText component

**File:** `HtmlEscapedText.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlFormController

**Purpose:** Controls HtmlForm operations

**File:** `HtmlFormController.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlRenderer

**Purpose:** HtmlRenderer component

**File:** `HtmlRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlResponse

**Purpose:** HtmlResponse component

**File:** `HtmlResponse.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlResponseAttachmentsProcessor

**Purpose:** HtmlResponseAttachmentsProcessor component

**File:** `HtmlResponseAttachmentsProcessor.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlResponsePlaceholderStrategySubscriber

**Purpose:** HtmlResponsePlaceholderStrategySubscriber component

**File:** `HtmlResponsePlaceholderStrategySubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlResponseSubscriber

**Purpose:** HtmlResponseSubscriber component

**File:** `HtmlResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlSerializerRules

**Purpose:** HtmlSerializerRules component

**File:** `HtmlSerializerRules.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlTag

**Purpose:** HtmlTag component

**File:** `HtmlTag.php`

**Architectural Issues:** 1 violations detected

---

#### Htmx

**Purpose:** Htmx component

**File:** `Htmx.php`

**Architectural Issues:** 1 violations detected

---

#### HtmxLocationResponseData

**Purpose:** HtmxLocationResponseData component

**File:** `HtmxLocationResponseData.php`

**Architectural Issues:** 1 violations detected

---

#### HtmxRenderer

**Purpose:** HtmxRenderer component

**File:** `HtmxRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### HttpExceptionSubscriberBase

**Purpose:** HttpExceptionSubscriberBase component

**File:** `HttpExceptionSubscriberBase.php`

**Architectural Issues:** 1 violations detected

---

#### Icon

**Purpose:** Icon component

**File:** `Icon.php`

**Architectural Issues:** 1 violations detected

---

#### IconBuilderInterface

**Purpose:** IconBuilderInterface component

**File:** `IconBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconCollector

**Purpose:** IconCollector component

**File:** `IconCollector.php`

**Architectural Issues:** 1 violations detected

---

#### IconDefinition

**Purpose:** IconDefinition component

**File:** `IconDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### IconDefinitionInterface

**Purpose:** IconDefinitionInterface component

**File:** `IconDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconDefinitionInvalidDataException

**Purpose:** IconDefinitionInvalidDataException component

**File:** `IconDefinitionInvalidDataException.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractor

**Purpose:** IconExtractor component

**File:** `IconExtractor.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorBase

**Purpose:** IconExtractorBase component

**File:** `IconExtractorBase.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorInterface

**Purpose:** IconExtractorInterface component

**File:** `IconExtractorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorPluginManager

**Purpose:** Manages IconExtractorPlugin operations

**File:** `IconExtractorPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorSettingsForm

**Purpose:** Form handling for IconExtractorSettings

**File:** `IconExtractorSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorWithFinder

**Purpose:** IconExtractorWithFinder component

**File:** `IconExtractorWithFinder.php`

**Architectural Issues:** 1 violations detected

---

#### IconExtractorWithFinderInterface

**Purpose:** IconExtractorWithFinderInterface component

**File:** `IconExtractorWithFinderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconFinder

**Purpose:** IconFinder component

**File:** `IconFinder.php`

**Architectural Issues:** 1 violations detected

---

#### IconFinderInterface

**Purpose:** IconFinderInterface component

**File:** `IconFinderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconPackConfigErrorException

**Purpose:** IconPackConfigErrorException component

**File:** `IconPackConfigErrorException.php`

**Architectural Issues:** 1 violations detected

---

#### IconPackExtractorForm

**Purpose:** Form handling for IconPackExtractor

**File:** `IconPackExtractorForm.php`

**Architectural Issues:** 1 violations detected

---

#### IconPackManager

**Purpose:** Manages IconPack operations

**File:** `IconPackManager.php`

**Architectural Issues:** 1 violations detected

---

#### IconPackManagerInterface

**Purpose:** Manages IconPackInterface operations

**File:** `IconPackManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IconsTwigExtension

**Purpose:** IconsTwigExtension component

**File:** `IconsTwigExtension.php`

**Architectural Issues:** 1 violations detected

---

#### Ignore

**Purpose:** Ignore component

**File:** `Ignore.php`

**Architectural Issues:** 1 violations detected

---

#### Image

**Purpose:** Image component

**File:** `Image.php`

**Architectural Issues:** 2 violations detected

---

#### ImageButton

**Purpose:** ImageButton component

**File:** `ImageButton.php`

**Architectural Issues:** 1 violations detected

---

#### ImageFactory

**Purpose:** ImageFactory component

**File:** `ImageFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ImageInterface

**Purpose:** ImageInterface component

**File:** `ImageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImagePreprocess

**Purpose:** ImagePreprocess component

**File:** `ImagePreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkit

**Purpose:** ImageToolkit component

**File:** `ImageToolkit.php`

**Architectural Issues:** 2 violations detected

---

#### ImageToolkitBase

**Purpose:** ImageToolkitBase component

**File:** `ImageToolkitBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitInterface

**Purpose:** ImageToolkitInterface component

**File:** `ImageToolkitInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitManager

**Purpose:** Manages ImageToolkit operations

**File:** `ImageToolkitManager.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitOperation

**Purpose:** ImageToolkitOperation component

**File:** `ImageToolkitOperation.php`

**Architectural Issues:** 2 violations detected

---

#### ImageToolkitOperationBase

**Purpose:** ImageToolkitOperationBase component

**File:** `ImageToolkitOperationBase.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitOperationInterface

**Purpose:** ImageToolkitOperationInterface component

**File:** `ImageToolkitOperationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitOperationManager

**Purpose:** Manages ImageToolkitOperation operations

**File:** `ImageToolkitOperationManager.php`

**Architectural Issues:** 1 violations detected

---

#### ImageToolkitOperationManagerInterface

**Purpose:** Manages ImageToolkitOperationInterface operations

**File:** `ImageToolkitOperationManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImmutableConfig

**Purpose:** ImmutableConfig component

**File:** `ImmutableConfig.php`

**Architectural Issues:** 1 violations detected

---

#### ImmutableConfigException

**Purpose:** ImmutableConfigException component

**File:** `ImmutableConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### ImmutablePropertiesConstraint

**Purpose:** ImmutablePropertiesConstraint component

**File:** `ImmutablePropertiesConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ImmutablePropertiesConstraintValidator

**Purpose:** ImmutablePropertiesConstraintValidator component

**File:** `ImmutablePropertiesConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ImplementationList

**Purpose:** ImplementationList component

**File:** `ImplementationList.php`

**Architectural Issues:** 1 violations detected

---

#### ImportException

**Purpose:** ImportException component

**File:** `ImportException.php`

**Architectural Issues:** 1 violations detected

---

#### ImportStorageTransformer

**Purpose:** ImportStorageTransformer component

**File:** `ImportStorageTransformer.php`

**Architectural Issues:** 1 violations detected

---

#### ImportableEntityStorageInterface

**Purpose:** ImportableEntityStorageInterface component

**File:** `ImportableEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Importer

**Purpose:** Importer component

**File:** `Importer.php`

**Architectural Issues:** 1 violations detected

---

#### InaccessibleMenuLink

**Purpose:** InaccessibleMenuLink component

**File:** `InaccessibleMenuLink.php`

**Architectural Issues:** 1 violations detected

---

#### InboundPathProcessorInterface

**Purpose:** InboundPathProcessorInterface component

**File:** `InboundPathProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IncompatibleComponentSchema

**Purpose:** IncompatibleComponentSchema component

**File:** `IncompatibleComponentSchema.php`

**Architectural Issues:** 1 violations detected

---

#### IncompleteLibraryDefinitionException

**Purpose:** IncompleteLibraryDefinitionException component

**File:** `IncompleteLibraryDefinitionException.php`

**Architectural Issues:** 1 violations detected

---

#### InfoHookDecorator

**Purpose:** InfoHookDecorator component

**File:** `InfoHookDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### InfoParser

**Purpose:** InfoParser component

**File:** `InfoParser.php`

**Architectural Issues:** 1 violations detected

---

#### InfoParserDynamic

**Purpose:** InfoParserDynamic component

**File:** `InfoParserDynamic.php`

**Architectural Issues:** 1 violations detected

---

#### InfoParserException

**Purpose:** InfoParserException component

**File:** `InfoParserException.php`

**Architectural Issues:** 1 violations detected

---

#### InfoParserInterface

**Purpose:** InfoParserInterface component

**File:** `InfoParserInterface.php`

**Architectural Issues:** 1 violations detected

---

#### InlineTemplate

**Purpose:** InlineTemplate component

**File:** `InlineTemplate.php`

**Architectural Issues:** 1 violations detected

---

#### InputCollectorInterface

**Purpose:** InputCollectorInterface component

**File:** `InputCollectorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### InputConfigurator

**Purpose:** InputConfigurator component

**File:** `InputConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### Insert

**Purpose:** Insert component

**File:** `Insert.php`

**Architectural Issues:** 1 violations detected

---

#### InsertCommand

**Purpose:** InsertCommand component

**File:** `InsertCommand.php`

**Architectural Issues:** 1 violations detected

---

#### InsertTrait

**Purpose:** InsertTrait component

**File:** `InsertTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Inspector

**Purpose:** Inspector component

**File:** `Inspector.php`

**Architectural Issues:** 1 violations detected

---

#### InstallCommand

**Purpose:** InstallCommand component

**File:** `InstallCommand.php`

**Architectural Issues:** 1 violations detected

---

#### InstallConfigurator

**Purpose:** InstallConfigurator component

**File:** `InstallConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### InstallProfileUninstallValidator

**Purpose:** InstallProfileUninstallValidator component

**File:** `InstallProfileUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### InstallRequirementsInterface

**Purpose:** InstallRequirementsInterface component

**File:** `InstallRequirementsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### InstallStorage

**Purpose:** InstallStorage component

**File:** `InstallStorage.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerAccessPolicy

**Purpose:** InstallerAccessPolicy component

**File:** `InstallerAccessPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerException

**Purpose:** InstallerException component

**File:** `InstallerException.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerKernel

**Purpose:** InstallerKernel component

**File:** `InstallerKernel.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerModuleExtensionList

**Purpose:** InstallerModuleExtensionList component

**File:** `InstallerModuleExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerRedirectTrait

**Purpose:** InstallerRedirectTrait component

**File:** `InstallerRedirectTrait.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerRouteBuilder

**Purpose:** InstallerRouteBuilder component

**File:** `InstallerRouteBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerRouteProviderLazyBuilder

**Purpose:** InstallerRouteProviderLazyBuilder component

**File:** `InstallerRouteProviderLazyBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerServiceProvider

**Purpose:** Service for InstallerProvider

**File:** `InstallerServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerThemeEngineExtensionList

**Purpose:** InstallerThemeEngineExtensionList component

**File:** `InstallerThemeEngineExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### InstallerThemeExtensionList

**Purpose:** InstallerThemeExtensionList component

**File:** `InstallerThemeExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### IntegerData

**Purpose:** IntegerData component

**File:** `IntegerData.php`

**Architectural Issues:** 1 violations detected

---

#### IntegerFormatter

**Purpose:** Form handling for Integeratter

**File:** `IntegerFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### IntegerInterface

**Purpose:** IntegerInterface component

**File:** `IntegerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### IntegerItem

**Purpose:** IntegerItem component

**File:** `IntegerItem.php`

**Architectural Issues:** 1 violations detected

---

#### IntegrityConstraintViolationException

**Purpose:** IntegrityConstraintViolationException component

**File:** `IntegrityConstraintViolationException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidComponentDataException

**Purpose:** InvalidComponentDataException component

**File:** `InvalidComponentDataException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidComponentException

**Purpose:** InvalidComponentException component

**File:** `InvalidComponentException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidConfigException

**Purpose:** InvalidConfigException component

**File:** `InvalidConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidDataTypeException

**Purpose:** InvalidDataTypeException component

**File:** `InvalidDataTypeException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidDecoratedMethod

**Purpose:** InvalidDecoratedMethod component

**File:** `InvalidDecoratedMethod.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidDeriverException

**Purpose:** InvalidDeriverException component

**File:** `InvalidDeriverException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidEntityException

**Purpose:** InvalidEntityException component

**File:** `InvalidEntityException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidLibrariesExtendSpecificationException

**Purpose:** InvalidLibrariesExtendSpecificationException component

**File:** `InvalidLibrariesExtendSpecificationException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidLibrariesOverrideSpecificationException

**Purpose:** InvalidLibrariesOverrideSpecificationException component

**File:** `InvalidLibrariesOverrideSpecificationException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidLibraryFileException

**Purpose:** InvalidLibraryFileException component

**File:** `InvalidLibraryFileException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidLinkTemplateException

**Purpose:** InvalidLinkTemplateException component

**File:** `InvalidLinkTemplateException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidLookupKeyException

**Purpose:** InvalidLookupKeyException component

**File:** `InvalidLookupKeyException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidMergeQueryException

**Purpose:** InvalidMergeQueryException component

**File:** `InvalidMergeQueryException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidPluginDefinitionException

**Purpose:** InvalidPluginDefinitionException component

**File:** `InvalidPluginDefinitionException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidQueryException

**Purpose:** InvalidQueryException component

**File:** `InvalidQueryException.php`

**Architectural Issues:** 1 violations detected

---

#### InvalidStreamWrapperException

**Purpose:** InvalidStreamWrapperException component

**File:** `InvalidStreamWrapperException.php`

**Architectural Issues:** 1 violations detected

---

#### InvokeCommand

**Purpose:** InvokeCommand component

**File:** `InvokeCommand.php`

**Architectural Issues:** 1 violations detected

---

#### IpCacheContext

**Purpose:** IpCacheContext component

**File:** `IpCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### IsFrontPathCacheContext

**Purpose:** IsFrontPathCacheContext component

**File:** `IsFrontPathCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### IsNullConstraint

**Purpose:** IsNullConstraint component

**File:** `IsNullConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### IsNullConstraintValidator

**Purpose:** IsNullConstraintValidator component

**File:** `IsNullConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### IsSuperUserCacheContext

**Purpose:** IsSuperUserCacheContext component

**File:** `IsSuperUserCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### Item

**Purpose:** Item component

**File:** `Item.php`

**Architectural Issues:** 1 violations detected

---

#### ItemList

**Purpose:** ItemList component

**File:** `ItemList.php`

**Architectural Issues:** 1 violations detected

---

#### JsCollectionGrouper

**Purpose:** JsCollectionGrouper component

**File:** `JsCollectionGrouper.php`

**Architectural Issues:** 1 violations detected

---

#### JsCollectionOptimizerLazy

**Purpose:** JsCollectionOptimizerLazy component

**File:** `JsCollectionOptimizerLazy.php`

**Architectural Issues:** 1 violations detected

---

#### JsCollectionRenderer

**Purpose:** JsCollectionRenderer component

**File:** `JsCollectionRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### JsOptimizer

**Purpose:** JsOptimizer component

**File:** `JsOptimizer.php`

**Architectural Issues:** 1 violations detected

---

#### Json

**Purpose:** Json component

**File:** `Json.php`

**Architectural Issues:** 1 violations detected

---

#### JsonSchema

**Purpose:** JsonSchema component

**File:** `JsonSchema.php`

**Architectural Issues:** 1 violations detected

---

#### KernelPreHandle

**Purpose:** KernelPreHandle component

**File:** `KernelPreHandle.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueContentEntityStorage

**Purpose:** KeyValueContentEntityStorage component

**File:** `KeyValueContentEntityStorage.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueDatabaseExpirableFactory

**Purpose:** KeyValueDatabaseExpirableFactory component

**File:** `KeyValueDatabaseExpirableFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueDatabaseFactory

**Purpose:** KeyValueDatabaseFactory component

**File:** `KeyValueDatabaseFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueEntityStorage

**Purpose:** KeyValueEntityStorage component

**File:** `KeyValueEntityStorage.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueExpirableFactory

**Purpose:** KeyValueExpirableFactory component

**File:** `KeyValueExpirableFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueExpirableFactoryInterface

**Purpose:** KeyValueExpirableFactoryInterface component

**File:** `KeyValueExpirableFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueFactory

**Purpose:** KeyValueFactory component

**File:** `KeyValueFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueFactoryInterface

**Purpose:** KeyValueFactoryInterface component

**File:** `KeyValueFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueMemoryFactory

**Purpose:** KeyValueMemoryFactory component

**File:** `KeyValueMemoryFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueNullExpirableFactory

**Purpose:** KeyValueNullExpirableFactory component

**File:** `KeyValueNullExpirableFactory.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueStoreExpirableInterface

**Purpose:** KeyValueStoreExpirableInterface component

**File:** `KeyValueStoreExpirableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### KeyValueStoreInterface

**Purpose:** KeyValueStoreInterface component

**File:** `KeyValueStoreInterface.php`

**Architectural Issues:** 1 violations detected

---

#### KillSwitch

**Purpose:** KillSwitch component

**File:** `KillSwitch.php`

**Architectural Issues:** 1 violations detected

---

#### Label

**Purpose:** Label component

**File:** `Label.php`

**Architectural Issues:** 1 violations detected

---

#### LangcodeRequiredIfTranslatableValuesConstraint

**Purpose:** LangcodeRequiredIfTranslatableValuesConstraint component

**File:** `LangcodeRequiredIfTranslatableValuesConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LangcodeRequiredIfTranslatableValuesConstraintValidator

**Purpose:** LangcodeRequiredIfTranslatableValuesConstraintValidator component

**File:** `LangcodeRequiredIfTranslatableValuesConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Language

**Purpose:** Language component

**File:** `Language.php`

**Architectural Issues:** 2 violations detected

---

#### LanguageDefault

**Purpose:** LanguageDefault component

**File:** `LanguageDefault.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageFormatter

**Purpose:** Form handling for Languageatter

**File:** `LanguageFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageInterface

**Purpose:** LanguageInterface component

**File:** `LanguageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageItem

**Purpose:** LanguageItem component

**File:** `LanguageItem.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageManager

**Purpose:** Manages Language operations

**File:** `LanguageManager.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageManagerInterface

**Purpose:** Manages LanguageInterface operations

**File:** `LanguageManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageReference

**Purpose:** LanguageReference component

**File:** `LanguageReference.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageSelect

**Purpose:** LanguageSelect component

**File:** `LanguageSelect.php`

**Architectural Issues:** 1 violations detected

---

#### LanguageSelectWidget

**Purpose:** LanguageSelectWidget component

**File:** `LanguageSelectWidget.php`

**Architectural Issues:** 1 violations detected

---

#### LanguagesCacheContext

**Purpose:** LanguagesCacheContext component

**File:** `LanguagesCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### Layout

**Purpose:** Layout component

**File:** `Layout.php`

**Architectural Issues:** 2 violations detected

---

#### LayoutDefault

**Purpose:** LayoutDefault component

**File:** `LayoutDefault.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutDefinition

**Purpose:** LayoutDefinition component

**File:** `LayoutDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutInterface

**Purpose:** LayoutInterface component

**File:** `LayoutInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutPluginManager

**Purpose:** Manages LayoutPlugin operations

**File:** `LayoutPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### LayoutPluginManagerInterface

**Purpose:** Manages LayoutPluginInterface operations

**File:** `LayoutPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LazyContextRepository

**Purpose:** LazyContextRepository component

**File:** `LazyContextRepository.php`

**Architectural Issues:** 1 violations detected

---

#### LazyPluginCollection

**Purpose:** LazyPluginCollection component

**File:** `LazyPluginCollection.php`

**Architectural Issues:** 1 violations detected

---

#### LazyRouteCollection

**Purpose:** LazyRouteCollection component

**File:** `LazyRouteCollection.php`

**Architectural Issues:** 1 violations detected

---

#### LegacyHook

**Purpose:** LegacyHook component

**File:** `LegacyHook.php`

**Architectural Issues:** 1 violations detected

---

#### LegacyMimeTypeMapLoadedSubscriber

**Purpose:** LegacyMimeTypeMapLoadedSubscriber component

**File:** `LegacyMimeTypeMapLoadedSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### LegacyModuleImplementsAlter

**Purpose:** LegacyModuleImplementsAlter component

**File:** `LegacyModuleImplementsAlter.php`

**Architectural Issues:** 1 violations detected

---

#### LengthConstraint

**Purpose:** LengthConstraint component

**File:** `LengthConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### LenientConfigSchemaChecker

**Purpose:** LenientConfigSchemaChecker component

**File:** `LenientConfigSchemaChecker.php`

**Architectural Issues:** 1 violations detected

---

#### LibrariesDirectoryFileFinder

**Purpose:** LibrariesDirectoryFileFinder component

**File:** `LibrariesDirectoryFileFinder.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDefinitionMissingLicenseException

**Purpose:** LibraryDefinitionMissingLicenseException component

**File:** `LibraryDefinitionMissingLicenseException.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDependencyResolver

**Purpose:** LibraryDependencyResolver component

**File:** `LibraryDependencyResolver.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDependencyResolverInterface

**Purpose:** LibraryDependencyResolverInterface component

**File:** `LibraryDependencyResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDiscovery

**Purpose:** LibraryDiscovery component

**File:** `LibraryDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDiscoveryCollector

**Purpose:** LibraryDiscoveryCollector component

**File:** `LibraryDiscoveryCollector.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDiscoveryInterface

**Purpose:** LibraryDiscoveryInterface component

**File:** `LibraryDiscoveryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LibraryDiscoveryParser

**Purpose:** LibraryDiscoveryParser component

**File:** `LibraryDiscoveryParser.php`

**Architectural Issues:** 1 violations detected

---

#### LinearHistory

**Purpose:** LinearHistory component

**File:** `LinearHistory.php`

**Architectural Issues:** 1 violations detected

---

#### Link

**Purpose:** Link component

**File:** `Link.php`

**Architectural Issues:** 2 violations detected

---

#### LinkGenerator

**Purpose:** LinkGenerator component

**File:** `LinkGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### LinkGeneratorInterface

**Purpose:** LinkGeneratorInterface component

**File:** `LinkGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LinkRelationType

**Purpose:** LinkRelationType component

**File:** `LinkRelationType.php`

**Architectural Issues:** 1 violations detected

---

#### LinkRelationTypeInterface

**Purpose:** LinkRelationTypeInterface component

**File:** `LinkRelationTypeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LinkRelationTypeManager

**Purpose:** Manages LinkRelationType operations

**File:** `LinkRelationTypeManager.php`

**Architectural Issues:** 1 violations detected

---

#### ListCacheBinsPass

**Purpose:** ListCacheBinsPass component

**File:** `ListCacheBinsPass.php`

**Architectural Issues:** 1 violations detected

---

#### ListDataDefinition

**Purpose:** ListDataDefinition component

**File:** `ListDataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### ListDataDefinitionInterface

**Purpose:** ListDataDefinitionInterface component

**File:** `ListDataDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ListInterface

**Purpose:** ListInterface component

**File:** `ListInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Local

**Purpose:** Local component

**File:** `Local.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionDefault

**Purpose:** LocalActionDefault component

**File:** `LocalActionDefault.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionInterface

**Purpose:** LocalActionInterface component

**File:** `LocalActionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionManager

**Purpose:** Manages LocalAction operations

**File:** `LocalActionManager.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionManagerInterface

**Purpose:** Manages LocalActionInterface operations

**File:** `LocalActionManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionWithDestination

**Purpose:** LocalActionWithDestination component

**File:** `LocalActionWithDestination.php`

**Architectural Issues:** 1 violations detected

---

#### LocalActionsBlock

**Purpose:** LocalActionsBlock component

**File:** `LocalActionsBlock.php`

**Architectural Issues:** 1 violations detected

---

#### LocalAwareRedirectResponseTrait

**Purpose:** LocalAwareRedirectResponseTrait component

**File:** `LocalAwareRedirectResponseTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LocalReadOnlyStream

**Purpose:** LocalReadOnlyStream component

**File:** `LocalReadOnlyStream.php`

**Architectural Issues:** 1 violations detected

---

#### LocalRedirectResponse

**Purpose:** LocalRedirectResponse component

**File:** `LocalRedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### LocalStream

**Purpose:** LocalStream component

**File:** `LocalStream.php`

**Architectural Issues:** 1 violations detected

---

#### LocalTaskDefault

**Purpose:** LocalTaskDefault component

**File:** `LocalTaskDefault.php`

**Architectural Issues:** 1 violations detected

---

#### LocalTaskInterface

**Purpose:** LocalTaskInterface component

**File:** `LocalTaskInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LocalTaskManager

**Purpose:** Manages LocalTask operations

**File:** `LocalTaskManager.php`

**Architectural Issues:** 1 violations detected

---

#### LocalTaskManagerInterface

**Purpose:** Manages LocalTaskInterface operations

**File:** `LocalTaskManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LocalTasksBlock

**Purpose:** LocalTasksBlock component

**File:** `LocalTasksBlock.php`

**Architectural Issues:** 1 violations detected

---

#### Lock

**Purpose:** Lock component

**File:** `Lock.php`

**Architectural Issues:** 1 violations detected

---

#### LockAcquiringException

**Purpose:** LockAcquiringException component

**File:** `LockAcquiringException.php`

**Architectural Issues:** 1 violations detected

---

#### LockBackendAbstract

**Purpose:** LockBackendAbstract component

**File:** `LockBackendAbstract.php`

**Architectural Issues:** 1 violations detected

---

#### LockBackendInterface

**Purpose:** LockBackendInterface component

**File:** `LockBackendInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Log

**Purpose:** Log component

**File:** `Log.php`

**Architectural Issues:** 1 violations detected

---

#### LogMessageParser

**Purpose:** LogMessageParser component

**File:** `LogMessageParser.php`

**Architectural Issues:** 1 violations detected

---

#### LogMessageParserInterface

**Purpose:** LogMessageParserInterface component

**File:** `LogMessageParserInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerAwarePass

**Purpose:** LoggerAwarePass component

**File:** `LoggerAwarePass.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerChannel

**Purpose:** LoggerChannel component

**File:** `LoggerChannel.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerChannelFactory

**Purpose:** LoggerChannelFactory component

**File:** `LoggerChannelFactory.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerChannelFactoryInterface

**Purpose:** LoggerChannelFactoryInterface component

**File:** `LoggerChannelFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerChannelInterface

**Purpose:** LoggerChannelInterface component

**File:** `LoggerChannelInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerChannelTrait

**Purpose:** LoggerChannelTrait component

**File:** `LoggerChannelTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LruMemoryCache

**Purpose:** LruMemoryCache component

**File:** `LruMemoryCache.php`

**Architectural Issues:** 1 violations detected

---

#### MTimeProtectedFastFileStorage

**Purpose:** MTimeProtectedFastFileStorage component

**File:** `MTimeProtectedFastFileStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MTimeProtectedFileStorage

**Purpose:** MTimeProtectedFileStorage component

**File:** `MTimeProtectedFileStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MachineName

**Purpose:** MachineName component

**File:** `MachineName.php`

**Architectural Issues:** 1 violations detected

---

#### Mail

**Purpose:** Mail component

**File:** `Mail.php`

**Architectural Issues:** 2 violations detected

---

#### MailFormatHelper

**Purpose:** Form handling for MailatHelper

**File:** `MailFormatHelper.php`

**Architectural Issues:** 1 violations detected

---

#### MailInterface

**Purpose:** MailInterface component

**File:** `MailInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MailManager

**Purpose:** Manages Mail operations

**File:** `MailManager.php`

**Architectural Issues:** 1 violations detected

---

#### MailManagerInterface

**Purpose:** Manages MailInterface operations

**File:** `MailManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MailToFormatter

**Purpose:** Form handling for MailToatter

**File:** `MailToFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### MainContentBlockPluginInterface

**Purpose:** MainContentBlockPluginInterface component

**File:** `MainContentBlockPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MainContentRendererInterface

**Purpose:** MainContentRendererInterface component

**File:** `MainContentRendererInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MainContentRenderersPass

**Purpose:** MainContentRenderersPass component

**File:** `MainContentRenderersPass.php`

**Architectural Issues:** 1 violations detected

---

#### MainContentViewSubscriber

**Purpose:** MainContentViewSubscriber component

**File:** `MainContentViewSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### MaintenanceMode

**Purpose:** MaintenanceMode component

**File:** `MaintenanceMode.php`

**Architectural Issues:** 1 violations detected

---

#### MaintenanceModeEvents

**Purpose:** MaintenanceModeEvents component

**File:** `MaintenanceModeEvents.php`

**Architectural Issues:** 1 violations detected

---

#### MaintenanceModeInterface

**Purpose:** MaintenanceModeInterface component

**File:** `MaintenanceModeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MaintenanceModeSubscriber

**Purpose:** MaintenanceModeSubscriber component

**File:** `MaintenanceModeSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ManagedStorage

**Purpose:** ManagedStorage component

**File:** `ManagedStorage.php`

**Architectural Issues:** 1 violations detected

---

#### Map

**Purpose:** Map component

**File:** `Map.php`

**Architectural Issues:** 1 violations detected

---

#### MapDataDefinition

**Purpose:** MapDataDefinition component

**File:** `MapDataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### MapFieldItemList

**Purpose:** MapFieldItemList component

**File:** `MapFieldItemList.php`

**Architectural Issues:** 1 violations detected

---

#### MapItem

**Purpose:** MapItem component

**File:** `MapItem.php`

**Architectural Issues:** 1 violations detected

---

#### MappedDiff

**Purpose:** MappedDiff component

**File:** `MappedDiff.php`

**Architectural Issues:** 1 violations detected

---

#### MapperExceptionInterface

**Purpose:** MapperExceptionInterface component

**File:** `MapperExceptionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MapperInterface

**Purpose:** MapperInterface component

**File:** `MapperInterface.php`

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

#### MarkupInterface

**Purpose:** MarkupInterface component

**File:** `MarkupInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MarkupTrait

**Purpose:** MarkupTrait component

**File:** `MarkupTrait.php`

**Architectural Issues:** 1 violations detected

---

#### MatcherDumper

**Purpose:** MatcherDumper component

**File:** `MatcherDumper.php`

**Architectural Issues:** 2 violations detected

---

#### MatcherDumperInterface

**Purpose:** MatcherDumperInterface component

**File:** `MatcherDumperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MatchingRouteNotFoundException

**Purpose:** MatchingRouteNotFoundException component

**File:** `MatchingRouteNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### Memory

**Purpose:** Memory component

**File:** `Memory.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryBackend

**Purpose:** MemoryBackend component

**File:** `MemoryBackend.php`

**Architectural Issues:** 2 violations detected

---

#### MemoryBackendFactory

**Purpose:** MemoryBackendFactory component

**File:** `MemoryBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryCache

**Purpose:** MemoryCache component

**File:** `MemoryCache.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryCacheFactory

**Purpose:** MemoryCacheFactory component

**File:** `MemoryCacheFactory.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryCacheInterface

**Purpose:** MemoryCacheInterface component

**File:** `MemoryCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryCounterBackend

**Purpose:** MemoryCounterBackend component

**File:** `MemoryCounterBackend.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryCounterBackendFactory

**Purpose:** MemoryCounterBackendFactory component

**File:** `MemoryCounterBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### MemoryStorage

**Purpose:** MemoryStorage component

**File:** `MemoryStorage.php`

**Architectural Issues:** 2 violations detected

---

#### MenuActiveTrail

**Purpose:** MenuActiveTrail component

**File:** `MenuActiveTrail.php`

**Architectural Issues:** 2 violations detected

---

#### MenuActiveTrailInterface

**Purpose:** MenuActiveTrailInterface component

**File:** `MenuActiveTrailInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuActiveTrailsCacheContext

**Purpose:** MenuActiveTrailsCacheContext component

**File:** `MenuActiveTrailsCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkBase

**Purpose:** MenuLinkBase component

**File:** `MenuLinkBase.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkDefault

**Purpose:** MenuLinkDefault component

**File:** `MenuLinkDefault.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkDefaultForm

**Purpose:** Form handling for MenuLinkDefault

**File:** `MenuLinkDefaultForm.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkDepthConstraint

**Purpose:** MenuLinkDepthConstraint component

**File:** `MenuLinkDepthConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkDepthConstraintValidator

**Purpose:** MenuLinkDepthConstraintValidator component

**File:** `MenuLinkDepthConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkFieldDefinitions

**Purpose:** MenuLinkFieldDefinitions component

**File:** `MenuLinkFieldDefinitions.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkFormInterface

**Purpose:** Form handling for MenuLinkInterface

**File:** `MenuLinkFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkInterface

**Purpose:** MenuLinkInterface component

**File:** `MenuLinkInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkManager

**Purpose:** Manages MenuLink operations

**File:** `MenuLinkManager.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkManagerInterface

**Purpose:** Manages MenuLinkInterface operations

**File:** `MenuLinkManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkPluginConverter

**Purpose:** MenuLinkPluginConverter component

**File:** `MenuLinkPluginConverter.php`

**Architectural Issues:** 2 violations detected

---

#### MenuLinkTree

**Purpose:** MenuLinkTree component

**File:** `MenuLinkTree.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkTreeElement

**Purpose:** MenuLinkTreeElement component

**File:** `MenuLinkTreeElement.php`

**Architectural Issues:** 1 violations detected

---

#### MenuLinkTreeInterface

**Purpose:** MenuLinkTreeInterface component

**File:** `MenuLinkTreeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuParentFormSelector

**Purpose:** Form handling for MenuParentSelector

**File:** `MenuParentFormSelector.php`

**Architectural Issues:** 1 violations detected

---

#### MenuParentFormSelectorInterface

**Purpose:** Form handling for MenuParentSelectorInterface

**File:** `MenuParentFormSelectorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MenuPreprocess

**Purpose:** MenuPreprocess component

**File:** `MenuPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### MenuRouterRebuildSubscriber

**Purpose:** MenuRouterRebuildSubscriber component

**File:** `MenuRouterRebuildSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTreeParameters

**Purpose:** MenuTreeParameters component

**File:** `MenuTreeParameters.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTreeStorage

**Purpose:** MenuTreeStorage component

**File:** `MenuTreeStorage.php`

**Architectural Issues:** 1 violations detected

---

#### MenuTreeStorageInterface

**Purpose:** MenuTreeStorageInterface component

**File:** `MenuTreeStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Merge

**Purpose:** Merge component

**File:** `Merge.php`

**Architectural Issues:** 1 violations detected

---

#### MessageAction

**Purpose:** MessageAction component

**File:** `MessageAction.php`

**Architectural Issues:** 1 violations detected

---

#### MessageCommand

**Purpose:** MessageCommand component

**File:** `MessageCommand.php`

**Architectural Issues:** 1 violations detected

---

#### MessagesBlockPluginInterface

**Purpose:** MessagesBlockPluginInterface component

**File:** `MessagesBlockPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Messenger

**Purpose:** Messenger component

**File:** `Messenger.php`

**Architectural Issues:** 1 violations detected

---

#### MessengerInterface

**Purpose:** MessengerInterface component

**File:** `MessengerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MessengerTrait

**Purpose:** MessengerTrait component

**File:** `MessengerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### MetadataBag

**Purpose:** MetadataBag component

**File:** `MetadataBag.php`

**Architectural Issues:** 1 violations detected

---

#### MetadataBubblingUrlGenerator

**Purpose:** MetadataBubblingUrlGenerator component

**File:** `MetadataBubblingUrlGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### MethodFilter

**Purpose:** MethodFilter component

**File:** `MethodFilter.php`

**Architectural Issues:** 1 violations detected

---

#### MimeTypeGuesser

**Purpose:** MimeTypeGuesser component

**File:** `MimeTypeGuesser.php`

**Architectural Issues:** 2 violations detected

---

#### MimeTypeMap

**Purpose:** MimeTypeMap component

**File:** `MimeTypeMap.php`

**Architectural Issues:** 1 violations detected

---

#### MimeTypeMapFactory

**Purpose:** MimeTypeMapFactory component

**File:** `MimeTypeMapFactory.php`

**Architectural Issues:** 1 violations detected

---

#### MimeTypeMapInterface

**Purpose:** MimeTypeMapInterface component

**File:** `MimeTypeMapInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MimeTypeMapLoadedEvent

**Purpose:** MimeTypeMapLoadedEvent component

**File:** `MimeTypeMapLoadedEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MissingBundleClassException

**Purpose:** MissingBundleClassException component

**File:** `MissingBundleClassException.php`

**Architectural Issues:** 1 violations detected

---

#### MissingClassDetectionClassLoader

**Purpose:** MissingClassDetectionClassLoader component

**File:** `MissingClassDetectionClassLoader.php`

**Architectural Issues:** 1 violations detected

---

#### MissingContentEvent

**Purpose:** MissingContentEvent component

**File:** `MissingContentEvent.php`

**Architectural Issues:** 1 violations detected

---

#### MissingDataException

**Purpose:** MissingDataException component

**File:** `MissingDataException.php`

**Architectural Issues:** 1 violations detected

---

#### MissingDependencyException

**Purpose:** MissingDependencyException component

**File:** `MissingDependencyException.php`

**Architectural Issues:** 1 violations detected

---

#### MissingThemeDependencyException

**Purpose:** MissingThemeDependencyException component

**File:** `MissingThemeDependencyException.php`

**Architectural Issues:** 1 violations detected

---

#### MissingValueContextException

**Purpose:** MissingValueContextException component

**File:** `MissingValueContextException.php`

**Architectural Issues:** 1 violations detected

---

#### MockFileFinder

**Purpose:** MockFileFinder component

**File:** `MockFileFinder.php`

**Architectural Issues:** 1 violations detected

---

#### ModalRenderer

**Purpose:** ModalRenderer component

**File:** `ModalRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### ModifyServiceDefinitionsPass

**Purpose:** Service for ModifyDefinitionsPass

**File:** `ModifyServiceDefinitionsPass.php`

**Architectural Issues:** 1 violations detected

---

#### Module

**Purpose:** Module component

**File:** `Module.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleDependencyMessageTrait

**Purpose:** ModuleDependencyMessageTrait component

**File:** `ModuleDependencyMessageTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleExtensionList

**Purpose:** ModuleExtensionList component

**File:** `ModuleExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleHandler

**Purpose:** Handles requests for Module

**File:** `ModuleHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleHandlerInterface

**Purpose:** Handles requests for ModuleInterface

**File:** `ModuleHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleInstaller

**Purpose:** ModuleInstaller component

**File:** `ModuleInstaller.php`

**Architectural Issues:** 2 violations detected

---

#### ModuleInstallerInterface

**Purpose:** ModuleInstallerInterface component

**File:** `ModuleInstallerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleRequiredByThemesUninstallValidator

**Purpose:** ModuleRequiredByThemesUninstallValidator component

**File:** `ModuleRequiredByThemesUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleRouteSubscriber

**Purpose:** ModuleRouteSubscriber component

**File:** `ModuleRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleUninstallValidatorException

**Purpose:** ModuleUninstallValidatorException component

**File:** `ModuleUninstallValidatorException.php`

**Architectural Issues:** 1 violations detected

---

#### ModuleUninstallValidatorInterface

**Purpose:** ModuleUninstallValidatorInterface component

**File:** `ModuleUninstallValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MoreLink

**Purpose:** MoreLink component

**File:** `MoreLink.php`

**Architectural Issues:** 1 violations detected

---

#### NegotiationMiddleware

**Purpose:** NegotiationMiddleware component

**File:** `NegotiationMiddleware.php`

**Architectural Issues:** 1 violations detected

---

#### NestedArray

**Purpose:** NestedArray component

**File:** `NestedArray.php`

**Architectural Issues:** 1 violations detected

---

#### NoCheckpointsException

**Purpose:** NoCheckpointsException component

**File:** `NoCheckpointsException.php`

**Architectural Issues:** 1 violations detected

---

#### NoCorrespondingEntityClassException

**Purpose:** NoCorrespondingEntityClassException component

**File:** `NoCorrespondingEntityClassException.php`

**Architectural Issues:** 1 violations detected

---

#### NoFieldsException

**Purpose:** NoFieldsException component

**File:** `NoFieldsException.php`

**Architectural Issues:** 1 violations detected

---

#### NoProfilesException

**Purpose:** NoProfilesException component

**File:** `NoProfilesException.php`

**Architectural Issues:** 1 violations detected

---

#### NoServerError

**Purpose:** NoServerError component

**File:** `NoServerError.php`

**Architectural Issues:** 1 violations detected

---

#### NoSessionOpen

**Purpose:** NoSessionOpen component

**File:** `NoSessionOpen.php`

**Architectural Issues:** 1 violations detected

---

#### NoUniqueFieldException

**Purpose:** NoUniqueFieldException component

**File:** `NoUniqueFieldException.php`

**Architectural Issues:** 1 violations detected

---

#### NormalInstallerServiceProvider

**Purpose:** Service for NormalInstallerProvider

**File:** `NormalInstallerServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### NotNullConstraint

**Purpose:** NotNullConstraint component

**File:** `NotNullConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### NotNullConstraintValidator

**Purpose:** NotNullConstraintValidator component

**File:** `NotNullConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### NotRegularDirectoryException

**Purpose:** NotRegularDirectoryException component

**File:** `NotRegularDirectoryException.php`

**Architectural Issues:** 1 violations detected

---

#### NotRegularFileException

**Purpose:** NotRegularFileException component

**File:** `NotRegularFileException.php`

**Architectural Issues:** 1 violations detected

---

#### NullBackend

**Purpose:** NullBackend component

**File:** `NullBackend.php`

**Architectural Issues:** 1 violations detected

---

#### NullBackendFactory

**Purpose:** NullBackendFactory component

**File:** `NullBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### NullFileCache

**Purpose:** NullFileCache component

**File:** `NullFileCache.php`

**Architectural Issues:** 1 violations detected

---

#### NullGenerator

**Purpose:** NullGenerator component

**File:** `NullGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### NullLockBackend

**Purpose:** NullLockBackend component

**File:** `NullLockBackend.php`

**Architectural Issues:** 1 violations detected

---

#### NullMatcherDumper

**Purpose:** NullMatcherDumper component

**File:** `NullMatcherDumper.php`

**Architectural Issues:** 1 violations detected

---

#### NullPathProcessorManager

**Purpose:** Manages NullPathProcessor operations

**File:** `NullPathProcessorManager.php`

**Architectural Issues:** 1 violations detected

---

#### NullRouteMatch

**Purpose:** NullRouteMatch component

**File:** `NullRouteMatch.php`

**Architectural Issues:** 1 violations detected

---

#### NullStorage

**Purpose:** NullStorage component

**File:** `NullStorage.php`

**Architectural Issues:** 1 violations detected

---

#### NullStorageExpirable

**Purpose:** NullStorageExpirable component

**File:** `NullStorageExpirable.php`

**Architectural Issues:** 1 violations detected

---

#### Number

**Purpose:** Number component

**File:** `Number.php`

**Architectural Issues:** 2 violations detected

---

#### NumberWidget

**Purpose:** NumberWidget component

**File:** `NumberWidget.php`

**Architectural Issues:** 1 violations detected

---

#### NumericFormatterBase

**Purpose:** Form handling for NumericatterBase

**File:** `NumericFormatterBase.php`

**Architectural Issues:** 1 violations detected

---

#### NumericItemBase

**Purpose:** NumericItemBase component

**File:** `NumericItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### NumericUnformattedFormatter

**Purpose:** Form handling for NumericUnformattedatter

**File:** `NumericUnformattedFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### ObjectAwareSerializationInterface

**Purpose:** ObjectAwareSerializationInterface component

**File:** `ObjectAwareSerializationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ObjectWithPluginCollectionInterface

**Purpose:** ObjectWithPluginCollectionInterface component

**File:** `ObjectWithPluginCollectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ObsoleteExtensionException

**Purpose:** ObsoleteExtensionException component

**File:** `ObsoleteExtensionException.php`

**Architectural Issues:** 1 violations detected

---

#### OffCanvasRenderer

**Purpose:** OffCanvasRenderer component

**File:** `OffCanvasRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### OpCodeCache

**Purpose:** OpCodeCache component

**File:** `OpCodeCache.php`

**Architectural Issues:** 1 violations detected

---

#### OpenDialogCommand

**Purpose:** OpenDialogCommand component

**File:** `OpenDialogCommand.php`

**Architectural Issues:** 1 violations detected

---

#### OpenModalDialogCommand

**Purpose:** OpenModalDialogCommand component

**File:** `OpenModalDialogCommand.php`

**Architectural Issues:** 1 violations detected

---

#### OpenModalDialogWithUrl

**Purpose:** OpenModalDialogWithUrl component

**File:** `OpenModalDialogWithUrl.php`

**Architectural Issues:** 1 violations detected

---

#### OpenOffCanvasDialogCommand

**Purpose:** OpenOffCanvasDialogCommand component

**File:** `OpenOffCanvasDialogCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Operations

**Purpose:** Operations component

**File:** `Operations.php`

**Architectural Issues:** 1 violations detected

---

#### OptGroup

**Purpose:** OptGroup component

**File:** `OptGroup.php`

**Architectural Issues:** 1 violations detected

---

#### OptimizedPhpArrayDumper

**Purpose:** OptimizedPhpArrayDumper component

**File:** `OptimizedPhpArrayDumper.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsButtonsWidget

**Purpose:** OptionsButtonsWidget component

**File:** `OptionsButtonsWidget.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsEnumTrait

**Purpose:** OptionsEnumTrait component

**File:** `OptionsEnumTrait.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsProviderInterface

**Purpose:** OptionsProviderInterface component

**File:** `OptionsProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsRequestSubscriber

**Purpose:** OptionsRequestSubscriber component

**File:** `OptionsRequestSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsSelectWidget

**Purpose:** OptionsSelectWidget component

**File:** `OptionsSelectWidget.php`

**Architectural Issues:** 1 violations detected

---

#### OptionsWidgetBase

**Purpose:** OptionsWidgetBase component

**File:** `OptionsWidgetBase.php`

**Architectural Issues:** 1 violations detected

---

#### Order

**Purpose:** Order component

**File:** `Order.php`

**Architectural Issues:** 1 violations detected

---

#### OrderAfter

**Purpose:** OrderAfter component

**File:** `OrderAfter.php`

**Architectural Issues:** 1 violations detected

---

#### OrderBefore

**Purpose:** OrderBefore component

**File:** `OrderBefore.php`

**Architectural Issues:** 1 violations detected

---

#### OrderInterface

**Purpose:** OrderInterface component

**File:** `OrderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OrderOperation

**Purpose:** OrderOperation component

**File:** `OrderOperation.php`

**Architectural Issues:** 1 violations detected

---

#### OutboundPathProcessorInterface

**Purpose:** OutboundPathProcessorInterface component

**File:** `OutboundPathProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OutboundRouteProcessorInterface

**Purpose:** OutboundRouteProcessorInterface component

**File:** `OutboundRouteProcessorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### OutputStrategyInterface

**Purpose:** OutputStrategyInterface component

**File:** `OutputStrategyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Page

**Purpose:** Page component

**File:** `Page.php`

**Architectural Issues:** 1 violations detected

---

#### PageDisplayVariant

**Purpose:** PageDisplayVariant component

**File:** `PageDisplayVariant.php`

**Architectural Issues:** 2 violations detected

---

#### PageDisplayVariantSelectionEvent

**Purpose:** PageDisplayVariantSelectionEvent component

**File:** `PageDisplayVariantSelectionEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PageTitle

**Purpose:** PageTitle component

**File:** `PageTitle.php`

**Architectural Issues:** 1 violations detected

---

#### PageTitleBlock

**Purpose:** PageTitleBlock component

**File:** `PageTitleBlock.php`

**Architectural Issues:** 1 violations detected

---

#### PageVariantInterface

**Purpose:** PageVariantInterface component

**File:** `PageVariantInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Pager

**Purpose:** Pager component

**File:** `Pager.php`

**Architectural Issues:** 2 violations detected

---

#### PagerManager

**Purpose:** Manages Pager operations

**File:** `PagerManager.php`

**Architectural Issues:** 1 violations detected

---

#### PagerManagerInterface

**Purpose:** Manages PagerInterface operations

**File:** `PagerManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PagerParameters

**Purpose:** PagerParameters component

**File:** `PagerParameters.php`

**Architectural Issues:** 1 violations detected

---

#### PagerParametersInterface

**Purpose:** PagerParametersInterface component

**File:** `PagerParametersInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PagerPreprocess

**Purpose:** PagerPreprocess component

**File:** `PagerPreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### PagerSelectExtender

**Purpose:** PagerSelectExtender component

**File:** `PagerSelectExtender.php`

**Architectural Issues:** 1 violations detected

---

#### PagersCacheContext

**Purpose:** PagersCacheContext component

**File:** `PagersCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### ParamConversionEnhancer

**Purpose:** ParamConversionEnhancer component

**File:** `ParamConversionEnhancer.php`

**Architectural Issues:** 1 violations detected

---

#### ParamConverterInterface

**Purpose:** ParamConverterInterface component

**File:** `ParamConverterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ParamConverterManager

**Purpose:** Manages ParamConverter operations

**File:** `ParamConverterManager.php`

**Architectural Issues:** 1 violations detected

---

#### ParamConverterManagerInterface

**Purpose:** Manages ParamConverterInterface operations

**File:** `ParamConverterManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ParamConverterSubscriber

**Purpose:** ParamConverterSubscriber component

**File:** `ParamConverterSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ParamNotConvertedException

**Purpose:** ParamNotConvertedException component

**File:** `ParamNotConvertedException.php`

**Architectural Issues:** 1 violations detected

---

#### Password

**Purpose:** Password component

**File:** `Password.php`

**Architectural Issues:** 1 violations detected

---

#### PasswordConfirm

**Purpose:** PasswordConfirm component

**File:** `PasswordConfirm.php`

**Architectural Issues:** 1 violations detected

---

#### PasswordGeneratorInterface

**Purpose:** PasswordGeneratorInterface component

**File:** `PasswordGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PasswordInterface

**Purpose:** PasswordInterface component

**File:** `PasswordInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PasswordItem

**Purpose:** PasswordItem component

**File:** `PasswordItem.php`

**Architectural Issues:** 1 violations detected

---

#### PathCacheContext

**Purpose:** PathCacheContext component

**File:** `PathCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### PathChangedHelper

**Purpose:** PathChangedHelper component

**File:** `PathChangedHelper.php`

**Architectural Issues:** 1 violations detected

---

#### PathElement

**Purpose:** PathElement component

**File:** `PathElement.php`

**Architectural Issues:** 1 violations detected

---

#### PathExtractor

**Purpose:** PathExtractor component

**File:** `PathExtractor.php`

**Architectural Issues:** 1 violations detected

---

#### PathMatcher

**Purpose:** PathMatcher component

**File:** `PathMatcher.php`

**Architectural Issues:** 1 violations detected

---

#### PathMatcherInterface

**Purpose:** PathMatcherInterface component

**File:** `PathMatcherInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PathParentCacheContext

**Purpose:** PathParentCacheContext component

**File:** `PathParentCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorDecode

**Purpose:** PathProcessorDecode component

**File:** `PathProcessorDecode.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorFront

**Purpose:** PathProcessorFront component

**File:** `PathProcessorFront.php`

**Architectural Issues:** 1 violations detected

---

#### PathProcessorManager

**Purpose:** Manages PathProcessor operations

**File:** `PathProcessorManager.php`

**Architectural Issues:** 1 violations detected

---

#### PathRootsSubscriber

**Purpose:** PathRootsSubscriber component

**File:** `PathRootsSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### PathValidator

**Purpose:** PathValidator component

**File:** `PathValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PathValidatorInterface

**Purpose:** PathValidatorInterface component

**File:** `PathValidatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PdoResult

**Purpose:** PdoResult component

**File:** `PdoResult.php`

**Architectural Issues:** 1 violations detected

---

#### PdoTrait

**Purpose:** PdoTrait component

**File:** `PdoTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Pecl

**Purpose:** Pecl component

**File:** `Pecl.php`

**Architectural Issues:** 1 violations detected

---

#### Percentage

**Purpose:** Percentage component

**File:** `Percentage.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionChecker

**Purpose:** PermissionChecker component

**File:** `PermissionChecker.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionCheckerInterface

**Purpose:** PermissionCheckerInterface component

**File:** `PermissionCheckerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionsHashGenerator

**Purpose:** PermissionsHashGenerator component

**File:** `PermissionsHashGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionsHashGeneratorInterface

**Purpose:** PermissionsHashGeneratorInterface component

**File:** `PermissionsHashGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionsPerBundle

**Purpose:** PermissionsPerBundle component

**File:** `PermissionsPerBundle.php`

**Architectural Issues:** 1 violations detected

---

#### PermissionsPerBundleDeriver

**Purpose:** PermissionsPerBundleDeriver component

**File:** `PermissionsPerBundleDeriver.php`

**Architectural Issues:** 1 violations detected

---

#### PersistentDatabaseLockBackend

**Purpose:** PersistentDatabaseLockBackend component

**File:** `PersistentDatabaseLockBackend.php`

**Architectural Issues:** 2 violations detected

---

#### Php

**Purpose:** Php component

**File:** `Php.php`

**Architectural Issues:** 1 violations detected

---

#### PhpArrayContainer

**Purpose:** PhpArrayContainer component

**File:** `PhpArrayContainer.php`

**Architectural Issues:** 1 violations detected

---

#### PhpArrayDumper

**Purpose:** PhpArrayDumper component

**File:** `PhpArrayDumper.php`

**Architectural Issues:** 1 violations detected

---

#### PhpBackend

**Purpose:** PhpBackend component

**File:** `PhpBackend.php`

**Architectural Issues:** 1 violations detected

---

#### PhpBackendFactory

**Purpose:** PhpBackendFactory component

**File:** `PhpBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### PhpMail

**Purpose:** PhpMail component

**File:** `PhpMail.php`

**Architectural Issues:** 1 violations detected

---

#### PhpPassword

**Purpose:** PhpPassword component

**File:** `PhpPassword.php`

**Architectural Issues:** 1 violations detected

---

#### PhpRequirements

**Purpose:** PhpRequirements component

**File:** `PhpRequirements.php`

**Architectural Issues:** 1 violations detected

---

#### PhpSelection

**Purpose:** PhpSelection component

**File:** `PhpSelection.php`

**Architectural Issues:** 1 violations detected

---

#### PhpSerialize

**Purpose:** PhpSerialize component

**File:** `PhpSerialize.php`

**Architectural Issues:** 1 violations detected

---

#### PhpStorageFactory

**Purpose:** PhpStorageFactory component

**File:** `PhpStorageFactory.php`

**Architectural Issues:** 1 violations detected

---

#### PhpStorageInterface

**Purpose:** PhpStorageInterface component

**File:** `PhpStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PhpStreamWrapperInterface

**Purpose:** PhpStreamWrapperInterface component

**File:** `PhpStreamWrapperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PhpTransliteration

**Purpose:** PhpTransliteration component

**File:** `PhpTransliteration.php`

**Architectural Issues:** 2 violations detected

---

#### PhpassHashedPasswordBase

**Purpose:** PhpassHashedPasswordBase component

**File:** `PhpassHashedPasswordBase.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceholderGenerator

**Purpose:** PlaceholderGenerator component

**File:** `PlaceholderGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceholderGeneratorInterface

**Purpose:** PlaceholderGeneratorInterface component

**File:** `PlaceholderGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceholderInterface

**Purpose:** PlaceholderInterface component

**File:** `PlaceholderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceholderStrategyInterface

**Purpose:** PlaceholderStrategyInterface component

**File:** `PlaceholderStrategyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PlaceholderingRenderCache

**Purpose:** PlaceholderingRenderCache component

**File:** `PlaceholderingRenderCache.php`

**Architectural Issues:** 1 violations detected

---

#### PlainTextOutput

**Purpose:** PlainTextOutput component

**File:** `PlainTextOutput.php`

**Architectural Issues:** 1 violations detected

---

#### Plugin

**Purpose:** Plugin component

**File:** `Plugin.php`

**Architectural Issues:** 2 violations detected

---

#### PluginAwareInterface

**Purpose:** PluginAwareInterface component

**File:** `PluginAwareInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginBase

**Purpose:** PluginBase component

**File:** `PluginBase.php`

**Architectural Issues:** 2 violations detected

---

#### PluginDefinition

**Purpose:** PluginDefinition component

**File:** `PluginDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### PluginDefinitionInterface

**Purpose:** PluginDefinitionInterface component

**File:** `PluginDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginDependencyTrait

**Purpose:** PluginDependencyTrait component

**File:** `PluginDependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PluginException

**Purpose:** PluginException component

**File:** `PluginException.php`

**Architectural Issues:** 1 violations detected

---

#### PluginExistsConstraint

**Purpose:** PluginExistsConstraint component

**File:** `PluginExistsConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### PluginExistsConstraintValidator

**Purpose:** PluginExistsConstraintValidator component

**File:** `PluginExistsConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PluginFormBase

**Purpose:** Form handling for PluginBase

**File:** `PluginFormBase.php`

**Architectural Issues:** 1 violations detected

---

#### PluginFormFactory

**Purpose:** Form handling for PluginFactory

**File:** `PluginFormFactory.php`

**Architectural Issues:** 1 violations detected

---

#### PluginFormFactoryInterface

**Purpose:** Form handling for PluginFactoryInterface

**File:** `PluginFormFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginFormInterface

**Purpose:** Form handling for PluginInterface

**File:** `PluginFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginID

**Purpose:** PluginID component

**File:** `PluginID.php`

**Architectural Issues:** 2 violations detected

---

#### PluginInspectionInterface

**Purpose:** PluginInspectionInterface component

**File:** `PluginInspectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginManagerBase

**Purpose:** Manages PluginBase operations

**File:** `PluginManagerBase.php`

**Architectural Issues:** 1 violations detected

---

#### PluginManagerInterface

**Purpose:** Manages PluginInterface operations

**File:** `PluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginManagerPass

**Purpose:** Manages PluginPass operations

**File:** `PluginManagerPass.php`

**Architectural Issues:** 1 violations detected

---

#### PluginNotFoundException

**Purpose:** PluginNotFoundException component

**File:** `PluginNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### PluginSettingsBase

**Purpose:** PluginSettingsBase component

**File:** `PluginSettingsBase.php`

**Architectural Issues:** 1 violations detected

---

#### PluginSettingsInterface

**Purpose:** PluginSettingsInterface component

**File:** `PluginSettingsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginWithFormsInterface

**Purpose:** Form handling for PluginWithsInterface

**File:** `PluginWithFormsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginWithFormsTrait

**Purpose:** Form handling for PluginWithsTrait

**File:** `PluginWithFormsTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PluralTranslatableMarkup

**Purpose:** PluralTranslatableMarkup component

**File:** `PluralTranslatableMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### PluralTranslation

**Purpose:** PluralTranslation component

**File:** `PluralTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### PoHeader

**Purpose:** PoHeader component

**File:** `PoHeader.php`

**Architectural Issues:** 1 violations detected

---

#### PoItem

**Purpose:** PoItem component

**File:** `PoItem.php`

**Architectural Issues:** 1 violations detected

---

#### PoMemoryWriter

**Purpose:** PoMemoryWriter component

**File:** `PoMemoryWriter.php`

**Architectural Issues:** 1 violations detected

---

#### PoMetadataInterface

**Purpose:** PoMetadataInterface component

**File:** `PoMetadataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PoReaderInterface

**Purpose:** PoReaderInterface component

**File:** `PoReaderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PoStreamInterface

**Purpose:** PoStreamInterface component

**File:** `PoStreamInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PoStreamReader

**Purpose:** PoStreamReader component

**File:** `PoStreamReader.php`

**Architectural Issues:** 1 violations detected

---

#### PoStreamWriter

**Purpose:** PoStreamWriter component

**File:** `PoStreamWriter.php`

**Architectural Issues:** 1 violations detected

---

#### PoWriterInterface

**Purpose:** PoWriterInterface component

**File:** `PoWriterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PreExistingConfigException

**Purpose:** PreExistingConfigException component

**File:** `PreExistingConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### PreExportEvent

**Purpose:** PreExportEvent component

**File:** `PreExportEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PreImportEvent

**Purpose:** PreImportEvent component

**File:** `PreImportEvent.php`

**Architectural Issues:** 1 violations detected

---

#### PreWarmableInterface

**Purpose:** PreWarmableInterface component

**File:** `PreWarmableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PreWarmablePluginManagerTrait

**Purpose:** Manages PreWarmablePluginTrait operations

**File:** `PreWarmablePluginManagerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PreconfiguredFieldUiOptionsInterface

**Purpose:** PreconfiguredFieldUiOptionsInterface component

**File:** `PreconfiguredFieldUiOptionsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PrefetchedResult

**Purpose:** PrefetchedResult component

**File:** `PrefetchedResult.php`

**Architectural Issues:** 1 violations detected

---

#### PrefixFloodInterface

**Purpose:** PrefixFloodInterface component

**File:** `PrefixFloodInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PreloadableRouteProviderInterface

**Purpose:** PreloadableRouteProviderInterface component

**File:** `PreloadableRouteProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PrependCommand

**Purpose:** PrependCommand component

**File:** `PrependCommand.php`

**Architectural Issues:** 1 violations detected

---

#### PreviewAwarePluginInterface

**Purpose:** PreviewAwarePluginInterface component

**File:** `PreviewAwarePluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PreviewFallbackInterface

**Purpose:** PreviewFallbackInterface component

**File:** `PreviewFallbackInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PrimitiveBase

**Purpose:** PrimitiveBase component

**File:** `PrimitiveBase.php`

**Architectural Issues:** 1 violations detected

---

#### PrimitiveInterface

**Purpose:** PrimitiveInterface component

**File:** `PrimitiveInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PrimitiveTypeConstraint

**Purpose:** PrimitiveTypeConstraint component

**File:** `PrimitiveTypeConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### PrimitiveTypeConstraintValidator

**Purpose:** PrimitiveTypeConstraintValidator component

**File:** `PrimitiveTypeConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### PrivateKey

**Purpose:** PrivateKey component

**File:** `PrivateKey.php`

**Architectural Issues:** 1 violations detected

---

#### PrivateTempStore

**Purpose:** PrivateTempStore component

**File:** `PrivateTempStore.php`

**Architectural Issues:** 1 violations detected

---

#### PrivateTempStoreFactory

**Purpose:** PrivateTempStoreFactory component

**File:** `PrivateTempStoreFactory.php`

**Architectural Issues:** 1 violations detected

---

#### ProceduralCall

**Purpose:** ProceduralCall component

**File:** `ProceduralCall.php`

**Architectural Issues:** 1 violations detected

---

#### ProceduralHookScanStop

**Purpose:** ProceduralHookScanStop component

**File:** `ProceduralHookScanStop.php`

**Architectural Issues:** 1 violations detected

---

#### ProfileExtensionList

**Purpose:** ProfileExtensionList component

**File:** `ProfileExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### ProjectInfo

**Purpose:** ProjectInfo component

**File:** `ProjectInfo.php`

**Architectural Issues:** 1 violations detected

---

#### ProtectedDirectory

**Purpose:** ProtectedDirectory component

**File:** `ProtectedDirectory.php`

**Architectural Issues:** 1 violations detected

---

#### ProtocolVersionCacheContext

**Purpose:** ProtocolVersionCacheContext component

**File:** `ProtocolVersionCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### ProxyBuilder

**Purpose:** ProxyBuilder component

**File:** `ProxyBuilder.php`

**Architectural Issues:** 2 violations detected

---

#### ProxyServicesPass

**Purpose:** Service for ProxysPass

**File:** `ProxyServicesPass.php`

**Architectural Issues:** 1 violations detected

---

#### Psr7RequestValueResolver

**Purpose:** Psr7RequestValueResolver component

**File:** `Psr7RequestValueResolver.php`

**Architectural Issues:** 1 violations detected

---

#### PsrResponseSubscriber

**Purpose:** PsrResponseSubscriber component

**File:** `PsrResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### PublicStream

**Purpose:** PublicStream component

**File:** `PublicStream.php`

**Architectural Issues:** 1 violations detected

---

#### PublishAction

**Purpose:** PublishAction component

**File:** `PublishAction.php`

**Architectural Issues:** 1 violations detected

---

#### Query

**Purpose:** Query component

**File:** `Query.php`

**Architectural Issues:** 5 violations detected

---

#### QueryAggregate

**Purpose:** QueryAggregate component

**File:** `QueryAggregate.php`

**Architectural Issues:** 1 violations detected

---

#### QueryAggregateInterface

**Purpose:** QueryAggregateInterface component

**File:** `QueryAggregateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueryArgsCacheContext

**Purpose:** QueryArgsCacheContext component

**File:** `QueryArgsCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### QueryBase

**Purpose:** QueryBase component

**File:** `QueryBase.php`

**Architectural Issues:** 1 violations detected

---

#### QueryConditionTrait

**Purpose:** QueryConditionTrait component

**File:** `QueryConditionTrait.php`

**Architectural Issues:** 1 violations detected

---

#### QueryException

**Purpose:** QueryException component

**File:** `QueryException.php`

**Architectural Issues:** 1 violations detected

---

#### QueryFactory

**Purpose:** QueryFactory component

**File:** `QueryFactory.php`

**Architectural Issues:** 5 violations detected

---

#### QueryFactoryInterface

**Purpose:** QueryFactoryInterface component

**File:** `QueryFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueryInterface

**Purpose:** QueryInterface component

**File:** `QueryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueueDatabaseFactory

**Purpose:** QueueDatabaseFactory component

**File:** `QueueDatabaseFactory.php`

**Architectural Issues:** 1 violations detected

---

#### QueueFactory

**Purpose:** QueueFactory component

**File:** `QueueFactory.php`

**Architectural Issues:** 1 violations detected

---

#### QueueFactoryInterface

**Purpose:** QueueFactoryInterface component

**File:** `QueueFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueueGarbageCollectionInterface

**Purpose:** QueueGarbageCollectionInterface component

**File:** `QueueGarbageCollectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueueInterface

**Purpose:** QueueInterface component

**File:** `QueueInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueueWorker

**Purpose:** QueueWorker component

**File:** `QueueWorker.php`

**Architectural Issues:** 2 violations detected

---

#### QueueWorkerBase

**Purpose:** QueueWorkerBase component

**File:** `QueueWorkerBase.php`

**Architectural Issues:** 1 violations detected

---

#### QueueWorkerInterface

**Purpose:** QueueWorkerInterface component

**File:** `QueueWorkerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QueueWorkerManager

**Purpose:** Manages QueueWorker operations

**File:** `QueueWorkerManager.php`

**Architectural Issues:** 1 violations detected

---

#### QueueWorkerManagerInterface

**Purpose:** Manages QueueWorkerInterface operations

**File:** `QueueWorkerManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### QuickStartCommand

**Purpose:** QuickStartCommand component

**File:** `QuickStartCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Radio

**Purpose:** Radio component

**File:** `Radio.php`

**Architectural Issues:** 1 violations detected

---

#### Radios

**Purpose:** Radios component

**File:** `Radios.php`

**Architectural Issues:** 1 violations detected

---

#### Random

**Purpose:** Random component

**File:** `Random.php`

**Architectural Issues:** 1 violations detected

---

#### Range

**Purpose:** Range component

**File:** `Range.php`

**Architectural Issues:** 1 violations detected

---

#### RangeConstraint

**Purpose:** RangeConstraint component

**File:** `RangeConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### RangeConstraintValidator

**Purpose:** RangeConstraintValidator component

**File:** `RangeConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ReadOnlyException

**Purpose:** ReadOnlyException component

**File:** `ReadOnlyException.php`

**Architectural Issues:** 1 violations detected

---

#### ReadOnlyStorage

**Purpose:** ReadOnlyStorage component

**File:** `ReadOnlyStorage.php`

**Architectural Issues:** 1 violations detected

---

#### ReadOnlyStream

**Purpose:** ReadOnlyStream component

**File:** `ReadOnlyStream.php`

**Architectural Issues:** 1 violations detected

---

#### Recipe

**Purpose:** Recipe component

**File:** `Recipe.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeAppliedEvent

**Purpose:** RecipeAppliedEvent component

**File:** `RecipeAppliedEvent.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeCommand

**Purpose:** RecipeCommand component

**File:** `RecipeCommand.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeConfigInstaller

**Purpose:** RecipeConfigInstaller component

**File:** `RecipeConfigInstaller.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeConfigStorageWrapper

**Purpose:** RecipeConfigStorageWrapper component

**File:** `RecipeConfigStorageWrapper.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeConfigurator

**Purpose:** RecipeConfigurator component

**File:** `RecipeConfigurator.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeFileException

**Purpose:** RecipeFileException component

**File:** `RecipeFileException.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeInfoCommand

**Purpose:** RecipeInfoCommand component

**File:** `RecipeInfoCommand.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeInputFormTrait

**Purpose:** Form handling for RecipeInputTrait

**File:** `RecipeInputFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeMissingExtensionsException

**Purpose:** RecipeMissingExtensionsException component

**File:** `RecipeMissingExtensionsException.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeOverrideConfigStorage

**Purpose:** RecipeOverrideConfigStorage component

**File:** `RecipeOverrideConfigStorage.php`

**Architectural Issues:** 1 violations detected

---

#### RecipePreExistingConfigException

**Purpose:** RecipePreExistingConfigException component

**File:** `RecipePreExistingConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### RecipeRunner

**Purpose:** RecipeRunner component

**File:** `RecipeRunner.php`

**Architectural Issues:** 1 violations detected

---

#### Rectangle

**Purpose:** Rectangle component

**File:** `Rectangle.php`

**Architectural Issues:** 1 violations detected

---

#### RecursiveContextualValidator

**Purpose:** RecursiveContextualValidator component

**File:** `RecursiveContextualValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RecursiveExtensionFilterCallback

**Purpose:** RecursiveExtensionFilterCallback component

**File:** `RecursiveExtensionFilterCallback.php`

**Architectural Issues:** 1 violations detected

---

#### RecursiveValidator

**Purpose:** RecursiveValidator component

**File:** `RecursiveValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectCommand

**Purpose:** RedirectCommand component

**File:** `RedirectCommand.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectDestination

**Purpose:** RedirectDestination component

**File:** `RedirectDestination.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectDestinationInterface

**Purpose:** RedirectDestinationInterface component

**File:** `RedirectDestinationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectDestinationTrait

**Purpose:** RedirectDestinationTrait component

**File:** `RedirectDestinationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectLeadingSlashesSubscriber

**Purpose:** RedirectLeadingSlashesSubscriber component

**File:** `RedirectLeadingSlashesSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectResponseSubscriber

**Purpose:** RedirectResponseSubscriber component

**File:** `RedirectResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### RedundantEditableConfigNamesTrait

**Purpose:** RedundantEditableConfigNamesTrait component

**File:** `RedundantEditableConfigNamesTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ReferenceAccessConstraint

**Purpose:** ReferenceAccessConstraint component

**File:** `ReferenceAccessConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ReferenceAccessConstraintValidator

**Purpose:** ReferenceAccessConstraintValidator component

**File:** `ReferenceAccessConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableCacheableDependencyInterface

**Purpose:** RefinableCacheableDependencyInterface component

**File:** `RefinableCacheableDependencyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableCacheableDependencyTrait

**Purpose:** RefinableCacheableDependencyTrait component

**File:** `RefinableCacheableDependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableCalculatedPermissions

**Purpose:** RefinableCalculatedPermissions component

**File:** `RefinableCalculatedPermissions.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableCalculatedPermissionsInterface

**Purpose:** RefinableCalculatedPermissionsInterface component

**File:** `RefinableCalculatedPermissionsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableDependentAccessInterface

**Purpose:** RefinableDependentAccessInterface component

**File:** `RefinableDependentAccessInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RefinableDependentAccessTrait

**Purpose:** RefinableDependentAccessTrait component

**File:** `RefinableDependentAccessTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Reflection

**Purpose:** Reflection component

**File:** `Reflection.php`

**Architectural Issues:** 1 violations detected

---

#### ReflectionFactory

**Purpose:** ReflectionFactory component

**File:** `ReflectionFactory.php`

**Architectural Issues:** 1 violations detected

---

#### RegexConstraint

**Purpose:** RegexConstraint component

**File:** `RegexConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### RegexDirectoryIterator

**Purpose:** RegexDirectoryIterator component

**File:** `RegexDirectoryIterator.php`

**Architectural Issues:** 1 violations detected

---

#### RegexRecursiveFilterIterator

**Purpose:** RegexRecursiveFilterIterator component

**File:** `RegexRecursiveFilterIterator.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterAccessChecksPass

**Purpose:** RegisterAccessChecksPass component

**File:** `RegisterAccessChecksPass.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterEventSubscribersPass

**Purpose:** RegisterEventSubscribersPass component

**File:** `RegisterEventSubscribersPass.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterServicesForDestructionPass

**Purpose:** Service for RegistersForDestructionPass

**File:** `RegisterServicesForDestructionPass.php`

**Architectural Issues:** 1 violations detected

---

#### RegisterStreamWrappersPass

**Purpose:** RegisterStreamWrappersPass component

**File:** `RegisterStreamWrappersPass.php`

**Architectural Issues:** 1 violations detected

---

#### Registry

**Purpose:** Registry component

**File:** `Registry.php`

**Architectural Issues:** 1 violations detected

---

#### RelativeOrderBase

**Purpose:** RelativeOrderBase component

**File:** `RelativeOrderBase.php`

**Architectural Issues:** 1 violations detected

---

#### ReliableQueueInterface

**Purpose:** ReliableQueueInterface component

**File:** `ReliableQueueInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveCheckToStringNodeVisitor

**Purpose:** RemoveCheckToStringNodeVisitor component

**File:** `RemoveCheckToStringNodeVisitor.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveCommand

**Purpose:** RemoveCommand component

**File:** `RemoveCommand.php`

**Architectural Issues:** 1 violations detected

---

#### RemoveHook

**Purpose:** RemoveHook component

**File:** `RemoveHook.php`

**Architectural Issues:** 1 violations detected

---

#### RemovedPostUpdateNameException

**Purpose:** RemovedPostUpdateNameException component

**File:** `RemovedPostUpdateNameException.php`

**Architectural Issues:** 1 violations detected

---

#### RenderArrayNonHtmlSubscriber

**Purpose:** RenderArrayNonHtmlSubscriber component

**File:** `RenderArrayNonHtmlSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### RenderCache

**Purpose:** RenderCache component

**File:** `RenderCache.php`

**Architectural Issues:** 1 violations detected

---

#### RenderCacheInterface

**Purpose:** RenderCacheInterface component

**File:** `RenderCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RenderCallbackInterface

**Purpose:** RenderCallbackInterface component

**File:** `RenderCallbackInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RenderContext

**Purpose:** RenderContext component

**File:** `RenderContext.php`

**Architectural Issues:** 1 violations detected

---

#### RenderElement

**Purpose:** RenderElement component

**File:** `RenderElement.php`

**Architectural Issues:** 3 violations detected

---

#### RenderElementBase

**Purpose:** RenderElementBase component

**File:** `RenderElementBase.php`

**Architectural Issues:** 1 violations detected

---

#### RenderEvents

**Purpose:** RenderEvents component

**File:** `RenderEvents.php`

**Architectural Issues:** 1 violations detected

---

#### RenderableInterface

**Purpose:** RenderableInterface component

**File:** `RenderableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Renderer

**Purpose:** Renderer component

**File:** `Renderer.php`

**Architectural Issues:** 1 violations detected

---

#### RendererInterface

**Purpose:** RendererInterface component

**File:** `RendererInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ReorderHook

**Purpose:** ReorderHook component

**File:** `ReorderHook.php`

**Architectural Issues:** 1 violations detected

---

#### ReplaceCommand

**Purpose:** ReplaceCommand component

**File:** `ReplaceCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ReplicaKillSwitch

**Purpose:** ReplicaKillSwitch component

**File:** `ReplicaKillSwitch.php`

**Architectural Issues:** 1 violations detected

---

#### RequestContext

**Purpose:** RequestContext component

**File:** `RequestContext.php`

**Architectural Issues:** 1 violations detected

---

#### RequestFormatCacheContext

**Purpose:** Form handling for RequestatCacheContext

**File:** `RequestFormatCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### RequestFormatRouteFilter

**Purpose:** Form handling for RequestatRouteFilter

**File:** `RequestFormatRouteFilter.php`

**Architectural Issues:** 1 violations detected

---

#### RequestHelper

**Purpose:** RequestHelper component

**File:** `RequestHelper.php`

**Architectural Issues:** 1 violations detected

---

#### RequestPolicyInterface

**Purpose:** RequestPolicyInterface component

**File:** `RequestPolicyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RequestSanitizer

**Purpose:** RequestSanitizer component

**File:** `RequestSanitizer.php`

**Architectural Issues:** 1 violations detected

---

#### RequestStackCacheContextBase

**Purpose:** RequestStackCacheContextBase component

**File:** `RequestStackCacheContextBase.php`

**Architectural Issues:** 1 violations detected

---

#### RequeueException

**Purpose:** RequeueException component

**File:** `RequeueException.php`

**Architectural Issues:** 1 violations detected

---

#### RequiredConfigDependenciesConstraint

**Purpose:** RequiredConfigDependenciesConstraint component

**File:** `RequiredConfigDependenciesConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### RequiredConfigDependenciesConstraintValidator

**Purpose:** RequiredConfigDependenciesConstraintValidator component

**File:** `RequiredConfigDependenciesConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RequiredFieldStorageDefinitionInterface

**Purpose:** RequiredFieldStorageDefinitionInterface component

**File:** `RequiredFieldStorageDefinitionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RequiredModuleUninstallValidator

**Purpose:** RequiredModuleUninstallValidator component

**File:** `RequiredModuleUninstallValidator.php`

**Architectural Issues:** 1 violations detected

---

#### RequirementSeverity

**Purpose:** RequirementSeverity component

**File:** `RequirementSeverity.php`

**Architectural Issues:** 1 violations detected

---

#### ResettableStackedRouteMatchInterface

**Purpose:** ResettableStackedRouteMatchInterface component

**File:** `ResettableStackedRouteMatchInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseGeneratorSubscriber

**Purpose:** ResponseGeneratorSubscriber component

**File:** `ResponseGeneratorSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseKeepSessionOpenInterface

**Purpose:** ResponseKeepSessionOpenInterface component

**File:** `ResponseKeepSessionOpenInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsePolicyInterface

**Purpose:** ResponsePolicyInterface component

**File:** `ResponsePolicyInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RestripeCommand

**Purpose:** RestripeCommand component

**File:** `RestripeCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ResultBase

**Purpose:** ResultBase component

**File:** `ResultBase.php`

**Architectural Issues:** 1 violations detected

---

#### ReverseContainer

**Purpose:** ReverseContainer component

**File:** `ReverseContainer.php`

**Architectural Issues:** 1 violations detected

---

#### ReverseProxyMiddleware

**Purpose:** ReverseProxyMiddleware component

**File:** `ReverseProxyMiddleware.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionDeleteForm

**Purpose:** Form handling for RevisionDelete

**File:** `RevisionDeleteForm.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionHtmlRouteProvider

**Purpose:** RevisionHtmlRouteProvider component

**File:** `RevisionHtmlRouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionLogEntityTrait

**Purpose:** RevisionLogEntityTrait component

**File:** `RevisionLogEntityTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionLogInterface

**Purpose:** RevisionLogInterface component

**File:** `RevisionLogInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionRevertForm

**Purpose:** Form handling for RevisionRevert

**File:** `RevisionRevertForm.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionableContentEntityBase

**Purpose:** RevisionableContentEntityBase component

**File:** `RevisionableContentEntityBase.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionableEntityBundleInterface

**Purpose:** RevisionableEntityBundleInterface component

**File:** `RevisionableEntityBundleInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionableInterface

**Purpose:** RevisionableInterface component

**File:** `RevisionableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RevisionableStorageInterface

**Purpose:** RevisionableStorageInterface component

**File:** `RevisionableStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RfcLogLevel

**Purpose:** RfcLogLevel component

**File:** `RfcLogLevel.php`

**Architectural Issues:** 1 violations detected

---

#### RfcLoggerTrait

**Purpose:** RfcLoggerTrait component

**File:** `RfcLoggerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RouteAccessResponseSubscriber

**Purpose:** RouteAccessResponseSubscriber component

**File:** `RouteAccessResponseSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### RouteBuildEvent

**Purpose:** RouteBuildEvent component

**File:** `RouteBuildEvent.php`

**Architectural Issues:** 1 violations detected

---

#### RouteBuilder

**Purpose:** RouteBuilder component

**File:** `RouteBuilder.php`

**Architectural Issues:** 2 violations detected

---

#### RouteBuilderInterface

**Purpose:** RouteBuilderInterface component

**File:** `RouteBuilderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RouteCacheContext

**Purpose:** RouteCacheContext component

**File:** `RouteCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### RouteCompiler

**Purpose:** RouteCompiler component

**File:** `RouteCompiler.php`

**Architectural Issues:** 1 violations detected

---

#### RouteMatch

**Purpose:** RouteMatch component

**File:** `RouteMatch.php`

**Architectural Issues:** 1 violations detected

---

#### RouteMatchInterface

**Purpose:** RouteMatchInterface component

**File:** `RouteMatchInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RouteMatchValueResolver

**Purpose:** RouteMatchValueResolver component

**File:** `RouteMatchValueResolver.php`

**Architectural Issues:** 1 violations detected

---

#### RouteMethodSubscriber

**Purpose:** RouteMethodSubscriber component

**File:** `RouteMethodSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### RouteNameCacheContext

**Purpose:** RouteNameCacheContext component

**File:** `RouteNameCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### RouteObjectInterface

**Purpose:** RouteObjectInterface component

**File:** `RouteObjectInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RoutePathGenerationTrait

**Purpose:** RoutePathGenerationTrait component

**File:** `RoutePathGenerationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### RoutePreloader

**Purpose:** RoutePreloader component

**File:** `RoutePreloader.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProcessorCsrf

**Purpose:** RouteProcessorCsrf component

**File:** `RouteProcessorCsrf.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProcessorCurrent

**Purpose:** RouteProcessorCurrent component

**File:** `RouteProcessorCurrent.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProcessorManager

**Purpose:** Manages RouteProcessor operations

**File:** `RouteProcessorManager.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProvider

**Purpose:** RouteProvider component

**File:** `RouteProvider.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProviderInterface

**Purpose:** RouteProviderInterface component

**File:** `RouteProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RouteProviderLazyBuilder

**Purpose:** RouteProviderLazyBuilder component

**File:** `RouteProviderLazyBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### RouteSubscriberBase

**Purpose:** RouteSubscriberBase component

**File:** `RouteSubscriberBase.php`

**Architectural Issues:** 1 violations detected

---

#### Router

**Purpose:** Router component

**File:** `Router.php`

**Architectural Issues:** 1 violations detected

---

#### RoutingEvents

**Purpose:** RoutingEvents component

**File:** `RoutingEvents.php`

**Architectural Issues:** 1 violations detected

---

#### RowCountException

**Purpose:** RowCountException component

**File:** `RowCountException.php`

**Architectural Issues:** 1 violations detected

---

#### RssResponseRelativeUrlFilter

**Purpose:** RssResponseRelativeUrlFilter component

**File:** `RssResponseRelativeUrlFilter.php`

**Architectural Issues:** 1 violations detected

---

#### SSH

**Purpose:** SSH component

**File:** `SSH.php`

**Architectural Issues:** 1 violations detected

---

#### SaveAction

**Purpose:** SaveAction component

**File:** `SaveAction.php`

**Architectural Issues:** 1 violations detected

---

#### Schema

**Purpose:** Schema component

**File:** `Schema.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaCheckTrait

**Purpose:** SchemaCheckTrait component

**File:** `SchemaCheckTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaCompatibilityChecker

**Purpose:** SchemaCompatibilityChecker component

**File:** `SchemaCompatibilityChecker.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaException

**Purpose:** SchemaException component

**File:** `SchemaException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaIncompleteException

**Purpose:** SchemaIncompleteException component

**File:** `SchemaIncompleteException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaObjectDoesNotExistException

**Purpose:** SchemaObjectDoesNotExistException component

**File:** `SchemaObjectDoesNotExistException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaObjectExistsException

**Purpose:** SchemaObjectExistsException component

**File:** `SchemaObjectExistsException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaPrimaryKeyMustBeDroppedException

**Purpose:** SchemaPrimaryKeyMustBeDroppedException component

**File:** `SchemaPrimaryKeyMustBeDroppedException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaTableColumnSizeTooLargeException

**Purpose:** SchemaTableColumnSizeTooLargeException component

**File:** `SchemaTableColumnSizeTooLargeException.php`

**Architectural Issues:** 1 violations detected

---

#### SchemaTableKeyTooLargeException

**Purpose:** SchemaTableKeyTooLargeException component

**File:** `SchemaTableKeyTooLargeException.php`

**Architectural Issues:** 1 violations detected

---

#### ScrollTopCommand

**Purpose:** ScrollTopCommand component

**File:** `ScrollTopCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Search

**Purpose:** Search component

**File:** `Search.php`

**Architectural Issues:** 1 violations detected

---

#### SecuredRedirectResponse

**Purpose:** SecuredRedirectResponse component

**File:** `SecuredRedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### Select

**Purpose:** Select component

**File:** `Select.php`

**Architectural Issues:** 2 violations detected

---

#### SelectExtender

**Purpose:** SelectExtender component

**File:** `SelectExtender.php`

**Architectural Issues:** 1 violations detected

---

#### SelectInterface

**Purpose:** SelectInterface component

**File:** `SelectInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SelectLanguageForm

**Purpose:** Form handling for SelectLanguage

**File:** `SelectLanguageForm.php`

**Architectural Issues:** 1 violations detected

---

#### SelectProfileForm

**Purpose:** Form handling for SelectProfile

**File:** `SelectProfileForm.php`

**Architectural Issues:** 1 violations detected

---

#### SelectionInterface

**Purpose:** SelectionInterface component

**File:** `SelectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SelectionPluginBase

**Purpose:** SelectionPluginBase component

**File:** `SelectionPluginBase.php`

**Architectural Issues:** 1 violations detected

---

#### SelectionPluginManager

**Purpose:** Manages SelectionPlugin operations

**File:** `SelectionPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### SelectionPluginManagerInterface

**Purpose:** Manages SelectionPluginInterface operations

**File:** `SelectionPluginManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SelectionWithAutocreateInterface

**Purpose:** SelectionWithAutocreateInterface component

**File:** `SelectionWithAutocreateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SendmailCommandValidationTransportFactory

**Purpose:** SendmailCommandValidationTransportFactory component

**File:** `SendmailCommandValidationTransportFactory.php`

**Architectural Issues:** 1 violations detected

---

#### Sequence

**Purpose:** Sequence component

**File:** `Sequence.php`

**Architectural Issues:** 1 violations detected

---

#### SequenceDataDefinition

**Purpose:** SequenceDataDefinition component

**File:** `SequenceDataDefinition.php`

**Architectural Issues:** 1 violations detected

---

#### SerializationInterface

**Purpose:** SerializationInterface component

**File:** `SerializationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ServerCommand

**Purpose:** ServerCommand component

**File:** `ServerCommand.php`

**Architectural Issues:** 1 violations detected

---

#### ServiceModifierInterface

**Purpose:** Service for ModifierInterface

**File:** `ServiceModifierInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ServiceProviderBase

**Purpose:** Service for ProviderBase

**File:** `ServiceProviderBase.php`

**Architectural Issues:** 1 violations detected

---

#### ServiceProviderInterface

**Purpose:** Service for ProviderInterface

**File:** `ServiceProviderInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Session

**Purpose:** Session component

**File:** `Session.php`

**Architectural Issues:** 1 violations detected

---

#### SessionCacheContext

**Purpose:** SessionCacheContext component

**File:** `SessionCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### SessionConfiguration

**Purpose:** SessionConfiguration component

**File:** `SessionConfiguration.php`

**Architectural Issues:** 1 violations detected

---

#### SessionConfigurationInterface

**Purpose:** SessionConfigurationInterface component

**File:** `SessionConfigurationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SessionExistsCacheContext

**Purpose:** SessionExistsCacheContext component

**File:** `SessionExistsCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### SessionHandler

**Purpose:** Handles requests for Session

**File:** `SessionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### SessionManager

**Purpose:** Manages Session operations

**File:** `SessionManager.php`

**Architectural Issues:** 1 violations detected

---

#### SessionManagerInterface

**Purpose:** Manages SessionInterface operations

**File:** `SessionManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SetDialogOptionCommand

**Purpose:** SetDialogOptionCommand component

**File:** `SetDialogOptionCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SetDialogTitleCommand

**Purpose:** SetDialogTitleCommand component

**File:** `SetDialogTitleCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SetProperties

**Purpose:** SetProperties component

**File:** `SetProperties.php`

**Architectural Issues:** 1 violations detected

---

#### Settings

**Purpose:** Settings component

**File:** `Settings.php`

**Architectural Issues:** 1 violations detected

---

#### SettingsCommand

**Purpose:** SettingsCommand component

**File:** `SettingsCommand.php`

**Architectural Issues:** 1 violations detected

---

#### SettingsEditor

**Purpose:** SettingsEditor component

**File:** `SettingsEditor.php`

**Architectural Issues:** 1 violations detected

---

#### SharedTempStore

**Purpose:** SharedTempStore component

**File:** `SharedTempStore.php`

**Architectural Issues:** 1 violations detected

---

#### SharedTempStoreFactory

**Purpose:** SharedTempStoreFactory component

**File:** `SharedTempStoreFactory.php`

**Architectural Issues:** 1 violations detected

---

#### SimpleAnnotationReader

**Purpose:** SimpleAnnotationReader component

**File:** `SimpleAnnotationReader.php`

**Architectural Issues:** 1 violations detected

---

#### SimpleConfigUpdate

**Purpose:** SimpleConfigUpdate component

**File:** `SimpleConfigUpdate.php`

**Architectural Issues:** 1 violations detected

---

#### SimplePageVariant

**Purpose:** SimplePageVariant component

**File:** `SimplePageVariant.php`

**Architectural Issues:** 1 violations detected

---

#### SingleFlushStrategy

**Purpose:** SingleFlushStrategy component

**File:** `SingleFlushStrategy.php`

**Architectural Issues:** 1 violations detected

---

#### SiteCacheContext

**Purpose:** SiteCacheContext component

**File:** `SiteCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### SiteConfigureForm

**Purpose:** Form handling for SiteConfigure

**File:** `SiteConfigureForm.php`

**Architectural Issues:** 1 violations detected

---

#### SiteSettingsForm

**Purpose:** Form handling for SiteSettings

**File:** `SiteSettingsForm.php`

**Architectural Issues:** 1 violations detected

---

#### SortArray

**Purpose:** SortArray component

**File:** `SortArray.php`

**Architectural Issues:** 1 violations detected

---

#### SpecialAttributesRouteSubscriber

**Purpose:** SpecialAttributesRouteSubscriber component

**File:** `SpecialAttributesRouteSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### SqlContentEntityStorage

**Purpose:** SqlContentEntityStorage component

**File:** `SqlContentEntityStorage.php`

**Architectural Issues:** 1 violations detected

---

#### SqlContentEntityStorageException

**Purpose:** SqlContentEntityStorageException component

**File:** `SqlContentEntityStorageException.php`

**Architectural Issues:** 1 violations detected

---

#### SqlContentEntityStorageSchema

**Purpose:** SqlContentEntityStorageSchema component

**File:** `SqlContentEntityStorageSchema.php`

**Architectural Issues:** 1 violations detected

---

#### SqlEntityStorageInterface

**Purpose:** SqlEntityStorageInterface component

**File:** `SqlEntityStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SqlFieldableEntityTypeListenerTrait

**Purpose:** SqlFieldableEntityTypeListenerTrait component

**File:** `SqlFieldableEntityTypeListenerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### StackItem

**Purpose:** StackItem component

**File:** `StackItem.php`

**Architectural Issues:** 1 violations detected

---

#### StackItemType

**Purpose:** StackItemType component

**File:** `StackItemType.php`

**Architectural Issues:** 1 violations detected

---

#### StackedHttpKernel

**Purpose:** StackedHttpKernel component

**File:** `StackedHttpKernel.php`

**Architectural Issues:** 1 violations detected

---

#### StackedKernelPass

**Purpose:** StackedKernelPass component

**File:** `StackedKernelPass.php`

**Architectural Issues:** 1 violations detected

---

#### StackedRouteMatchInterface

**Purpose:** StackedRouteMatchInterface component

**File:** `StackedRouteMatchInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StackedSessionHandlerPass

**Purpose:** Handles requests for StackedSessionPass

**File:** `StackedSessionHandlerPass.php`

**Architectural Issues:** 1 violations detected

---

#### StarterKitInterface

**Purpose:** StarterKitInterface component

**File:** `StarterKitInterface.php`

**Architectural Issues:** 1 violations detected

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

#### StatementBase

**Purpose:** StatementBase component

**File:** `StatementBase.php`

**Architectural Issues:** 1 violations detected

---

#### StatementEvent

**Purpose:** StatementEvent component

**File:** `StatementEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StatementExecutionEndEvent

**Purpose:** StatementExecutionEndEvent component

**File:** `StatementExecutionEndEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StatementExecutionFailureEvent

**Purpose:** StatementExecutionFailureEvent component

**File:** `StatementExecutionFailureEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StatementExecutionStartEvent

**Purpose:** StatementExecutionStartEvent component

**File:** `StatementExecutionStartEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StatementExecutionSubscriber

**Purpose:** StatementExecutionSubscriber component

**File:** `StatementExecutionSubscriber.php`

**Architectural Issues:** 1 violations detected

---

#### StatementInterface

**Purpose:** StatementInterface component

**File:** `StatementInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StatementIteratorTrait

**Purpose:** StatementIteratorTrait component

**File:** `StatementIteratorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### StatementPrefetchIterator

**Purpose:** StatementPrefetchIterator component

**File:** `StatementPrefetchIterator.php`

**Architectural Issues:** 1 violations detected

---

#### StatementWrapperIterator

**Purpose:** StatementWrapperIterator component

**File:** `StatementWrapperIterator.php`

**Architectural Issues:** 1 violations detected

---

#### StaticDiscovery

**Purpose:** StaticDiscovery component

**File:** `StaticDiscovery.php`

**Architectural Issues:** 1 violations detected

---

#### StaticDiscoveryDecorator

**Purpose:** StaticDiscoveryDecorator component

**File:** `StaticDiscoveryDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### StaticMenuLinkOverrides

**Purpose:** StaticMenuLinkOverrides component

**File:** `StaticMenuLinkOverrides.php`

**Architectural Issues:** 1 violations detected

---

#### StaticMenuLinkOverridesInterface

**Purpose:** StaticMenuLinkOverridesInterface component

**File:** `StaticMenuLinkOverridesInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StaticReflectionClass

**Purpose:** StaticReflectionClass component

**File:** `StaticReflectionClass.php`

**Architectural Issues:** 1 violations detected

---

#### StaticReflectionParser

**Purpose:** StaticReflectionParser component

**File:** `StaticReflectionParser.php`

**Architectural Issues:** 1 violations detected

---

#### StaticTranslation

**Purpose:** StaticTranslation component

**File:** `StaticTranslation.php`

**Architectural Issues:** 1 violations detected

---

#### StaticTrustedCallbackHelper

**Purpose:** StaticTrustedCallbackHelper component

**File:** `StaticTrustedCallbackHelper.php`

**Architectural Issues:** 1 violations detected

---

#### StatusMessages

**Purpose:** StatusMessages component

**File:** `StatusMessages.php`

**Architectural Issues:** 1 violations detected

---

#### StatusReport

**Purpose:** StatusReport component

**File:** `StatusReport.php`

**Architectural Issues:** 1 violations detected

---

#### StorableConfigBase

**Purpose:** StorableConfigBase component

**File:** `StorableConfigBase.php`

**Architectural Issues:** 1 violations detected

---

#### StorageBase

**Purpose:** StorageBase component

**File:** `StorageBase.php`

**Architectural Issues:** 1 violations detected

---

#### StorageCacheInterface

**Purpose:** StorageCacheInterface component

**File:** `StorageCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StorageComparer

**Purpose:** StorageComparer component

**File:** `StorageComparer.php`

**Architectural Issues:** 1 violations detected

---

#### StorageComparerInterface

**Purpose:** StorageComparerInterface component

**File:** `StorageComparerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StorageCopyTrait

**Purpose:** StorageCopyTrait component

**File:** `StorageCopyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### StorageException

**Purpose:** StorageException component

**File:** `StorageException.php`

**Architectural Issues:** 1 violations detected

---

#### StorageInterface

**Purpose:** StorageInterface component

**File:** `StorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StorageManagerInterface

**Purpose:** Manages StorageInterface operations

**File:** `StorageManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StorageTransformEvent

**Purpose:** StorageTransformEvent component

**File:** `StorageTransformEvent.php`

**Architectural Issues:** 1 violations detected

---

#### StorageTransformerException

**Purpose:** StorageTransformerException component

**File:** `StorageTransformerException.php`

**Architectural Issues:** 1 violations detected

---

#### StreamWrapperInterface

**Purpose:** StreamWrapperInterface component

**File:** `StreamWrapperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StreamWrapperManager

**Purpose:** Manages StreamWrapper operations

**File:** `StreamWrapperManager.php`

**Architectural Issues:** 1 violations detected

---

#### StreamWrapperManagerInterface

**Purpose:** Manages StreamWrapperInterface operations

**File:** `StreamWrapperManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StringData

**Purpose:** StringData component

**File:** `StringData.php`

**Architectural Issues:** 1 violations detected

---

#### StringFormatter

**Purpose:** Form handling for Stringatter

**File:** `StringFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### StringInterface

**Purpose:** StringInterface component

**File:** `StringInterface.php`

**Architectural Issues:** 1 violations detected

---

#### StringItem

**Purpose:** StringItem component

**File:** `StringItem.php`

**Architectural Issues:** 1 violations detected

---

#### StringItemBase

**Purpose:** StringItemBase component

**File:** `StringItemBase.php`

**Architectural Issues:** 1 violations detected

---

#### StringLoader

**Purpose:** StringLoader component

**File:** `StringLoader.php`

**Architectural Issues:** 1 violations detected

---

#### StringLongItem

**Purpose:** StringLongItem component

**File:** `StringLongItem.php`

**Architectural Issues:** 1 violations detected

---

#### StringTextareaWidget

**Purpose:** StringTextareaWidget component

**File:** `StringTextareaWidget.php`

**Architectural Issues:** 1 violations detected

---

#### StringTextfieldWidget

**Purpose:** StringTextfieldWidget component

**File:** `StringTextfieldWidget.php`

**Architectural Issues:** 1 violations detected

---

#### StringTranslationTrait

**Purpose:** StringTranslationTrait component

**File:** `StringTranslationTrait.php`

**Architectural Issues:** 1 violations detected

---

#### StubTrait

**Purpose:** StubTrait component

**File:** `StubTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SubformState

**Purpose:** SubformState component

**File:** `SubformState.php`

**Architectural Issues:** 1 violations detected

---

#### SubformStateInterface

**Purpose:** SubformStateInterface component

**File:** `SubformStateInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Submit

**Purpose:** Submit component

**File:** `Submit.php`

**Architectural Issues:** 1 violations detected

---

#### SuperUserAccessPolicy

**Purpose:** SuperUserAccessPolicy component

**File:** `SuperUserAccessPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### SuperUserAccessPolicyPass

**Purpose:** SuperUserAccessPolicyPass component

**File:** `SuperUserAccessPolicyPass.php`

**Architectural Issues:** 1 violations detected

---

#### SupportsTemporaryTablesInterface

**Purpose:** SupportsTemporaryTablesInterface component

**File:** `SupportsTemporaryTablesInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SuspendQueueException

**Purpose:** SuspendQueueException component

**File:** `SuspendQueueException.php`

**Architectural Issues:** 1 violations detected

---

#### SvgExtractor

**Purpose:** SvgExtractor component

**File:** `SvgExtractor.php`

**Architectural Issues:** 1 violations detected

---

#### SvgIconBuilder

**Purpose:** SvgIconBuilder component

**File:** `SvgIconBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### SvgSpriteExtractor

**Purpose:** SvgSpriteExtractor component

**File:** `SvgSpriteExtractor.php`

**Architectural Issues:** 1 violations detected

---

#### SymfonyMailer

**Purpose:** SymfonyMailer component

**File:** `SymfonyMailer.php`

**Architectural Issues:** 1 violations detected

---

#### SynchronizableEntityTrait

**Purpose:** SynchronizableEntityTrait component

**File:** `SynchronizableEntityTrait.php`

**Architectural Issues:** 1 violations detected

---

#### SynchronizableInterface

**Purpose:** SynchronizableInterface component

**File:** `SynchronizableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### SystemCompactLink

**Purpose:** SystemCompactLink component

**File:** `SystemCompactLink.php`

**Architectural Issues:** 1 violations detected

---

#### Table

**Purpose:** Table component

**File:** `Table.php`

**Architectural Issues:** 1 violations detected

---

#### TableMappingInterface

**Purpose:** TableMappingInterface component

**File:** `TableMappingInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TableSort

**Purpose:** TableSort component

**File:** `TableSort.php`

**Architectural Issues:** 1 violations detected

---

#### TableSortExtender

**Purpose:** TableSortExtender component

**File:** `TableSortExtender.php`

**Architectural Issues:** 1 violations detected

---

#### TabledragWarningCommand

**Purpose:** TabledragWarningCommand component

**File:** `TabledragWarningCommand.php`

**Architectural Issues:** 1 violations detected

---

#### Tables

**Purpose:** Tables component

**File:** `Tables.php`

**Architectural Issues:** 1 violations detected

---

#### TablesInterface

**Purpose:** TablesInterface component

**File:** `TablesInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Tableselect

**Purpose:** Tableselect component

**File:** `Tableselect.php`

**Architectural Issues:** 1 violations detected

---

#### TaggedHandlersPass

**Purpose:** Handles requests for TaggedsPass

**File:** `TaggedHandlersPass.php`

**Architectural Issues:** 1 violations detected

---

#### Tags

**Purpose:** Tags component

**File:** `Tags.php`

**Architectural Issues:** 1 violations detected

---

#### Tar

**Purpose:** Tar component

**File:** `Tar.php`

**Architectural Issues:** 1 violations detected

---

#### Tasks

**Purpose:** Tasks component

**File:** `Tasks.php`

**Architectural Issues:** 1 violations detected

---

#### Tel

**Purpose:** Tel component

**File:** `Tel.php`

**Architectural Issues:** 1 violations detected

---

#### TempStoreException

**Purpose:** TempStoreException component

**File:** `TempStoreException.php`

**Architectural Issues:** 1 violations detected

---

#### TemporaryStream

**Purpose:** TemporaryStream component

**File:** `TemporaryStream.php`

**Architectural Issues:** 1 violations detected

---

#### Textarea

**Purpose:** Textarea component

**File:** `Textarea.php`

**Architectural Issues:** 1 violations detected

---

#### Textfield

**Purpose:** Textfield component

**File:** `Textfield.php`

**Architectural Issues:** 1 violations detected

---

#### Theme

**Purpose:** Theme component

**File:** `Theme.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeAccessCheck

**Purpose:** ThemeAccessCheck component

**File:** `ThemeAccessCheck.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeCacheContext

**Purpose:** ThemeCacheContext component

**File:** `ThemeCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeCommonElements

**Purpose:** ThemeCommonElements component

**File:** `ThemeCommonElements.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeEngineExtensionList

**Purpose:** ThemeEngineExtensionList component

**File:** `ThemeEngineExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeExtensionList

**Purpose:** ThemeExtensionList component

**File:** `ThemeExtensionList.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeHandler

**Purpose:** Handles requests for Theme

**File:** `ThemeHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeHandlerInterface

**Purpose:** Handles requests for ThemeInterface

**File:** `ThemeHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeInitialization

**Purpose:** ThemeInitialization component

**File:** `ThemeInitialization.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeInitializationInterface

**Purpose:** ThemeInitializationInterface component

**File:** `ThemeInitializationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeInstaller

**Purpose:** ThemeInstaller component

**File:** `ThemeInstaller.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeInstallerInterface

**Purpose:** ThemeInstallerInterface component

**File:** `ThemeInstallerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeManager

**Purpose:** Manages Theme operations

**File:** `ThemeManager.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeManagerInterface

**Purpose:** Manages ThemeInterface operations

**File:** `ThemeManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeNegotiator

**Purpose:** ThemeNegotiator component

**File:** `ThemeNegotiator.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeNegotiatorInterface

**Purpose:** ThemeNegotiatorInterface component

**File:** `ThemeNegotiatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThemePreprocess

**Purpose:** ThemePreprocess component

**File:** `ThemePreprocess.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeRegistry

**Purpose:** ThemeRegistry component

**File:** `ThemeRegistry.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeRegistryLoader

**Purpose:** ThemeRegistryLoader component

**File:** `ThemeRegistryLoader.php`

**Architectural Issues:** 1 violations detected

---

#### ThemeSettings

**Purpose:** ThemeSettings component

**File:** `ThemeSettings.php`

**Architectural Issues:** 1 violations detected

---

#### ThirdPartySettingsInterface

**Purpose:** ThirdPartySettingsInterface component

**File:** `ThirdPartySettingsInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Time

**Purpose:** Time component

**File:** `Time.php`

**Architectural Issues:** 1 violations detected

---

#### TimeInterface

**Purpose:** TimeInterface component

**File:** `TimeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TimeSpan

**Purpose:** TimeSpan component

**File:** `TimeSpan.php`

**Architectural Issues:** 1 violations detected

---

#### TimeZoneCacheContext

**Purpose:** TimeZoneCacheContext component

**File:** `TimeZoneCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### TimeZoneFormHelper

**Purpose:** Form handling for TimeZoneHelper

**File:** `TimeZoneFormHelper.php`

**Architectural Issues:** 1 violations detected

---

#### Timer

**Purpose:** Timer component

**File:** `Timer.php`

**Architectural Issues:** 1 violations detected

---

#### Timestamp

**Purpose:** Timestamp component

**File:** `Timestamp.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampAgoFormatter

**Purpose:** Form handling for TimestampAgoatter

**File:** `TimestampAgoFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampDatetimeWidget

**Purpose:** TimestampDatetimeWidget component

**File:** `TimestampDatetimeWidget.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampFormatter

**Purpose:** Form handling for Timestampatter

**File:** `TimestampFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampItem

**Purpose:** TimestampItem component

**File:** `TimestampItem.php`

**Architectural Issues:** 1 violations detected

---

#### TitleBlockPluginInterface

**Purpose:** TitleBlockPluginInterface component

**File:** `TitleBlockPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TitleResolver

**Purpose:** TitleResolver component

**File:** `TitleResolver.php`

**Architectural Issues:** 1 violations detected

---

#### TitleResolverInterface

**Purpose:** TitleResolverInterface component

**File:** `TitleResolverInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ToConfig

**Purpose:** ToConfig component

**File:** `ToConfig.php`

**Architectural Issues:** 1 violations detected

---

#### ToStringTrait

**Purpose:** ToStringTrait component

**File:** `ToStringTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Token

**Purpose:** Token component

**File:** `Token.php`

**Architectural Issues:** 2 violations detected

---

#### Transaction

**Purpose:** Transaction component

**File:** `Transaction.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionCommitFailedException

**Purpose:** TransactionCommitFailedException component

**File:** `TransactionCommitFailedException.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionException

**Purpose:** TransactionException component

**File:** `TransactionException.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionExplicitCommitNotAllowedException

**Purpose:** TransactionExplicitCommitNotAllowedException component

**File:** `TransactionExplicitCommitNotAllowedException.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionManagerBase

**Purpose:** Manages TransactionBase operations

**File:** `TransactionManagerBase.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionManagerInterface

**Purpose:** Manages TransactionInterface operations

**File:** `TransactionManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionNameNonUniqueException

**Purpose:** TransactionNameNonUniqueException component

**File:** `TransactionNameNonUniqueException.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionNoActiveException

**Purpose:** TransactionNoActiveException component

**File:** `TransactionNoActiveException.php`

**Architectural Issues:** 1 violations detected

---

#### TransactionOutOfOrderException

**Purpose:** TransactionOutOfOrderException component

**File:** `TransactionOutOfOrderException.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableInterface

**Purpose:** TranslatableInterface component

**File:** `TranslatableInterface.php`

**Architectural Issues:** 2 violations detected

---

#### TranslatableMarkup

**Purpose:** TranslatableMarkup component

**File:** `TranslatableMarkup.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableRevisionableInterface

**Purpose:** TranslatableRevisionableInterface component

**File:** `TranslatableRevisionableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableRevisionableStorageInterface

**Purpose:** TranslatableRevisionableStorageInterface component

**File:** `TranslatableRevisionableStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatableStorageInterface

**Purpose:** TranslatableStorageInterface component

**File:** `TranslatableStorageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Translation

**Purpose:** Translation component

**File:** `Translation.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationInterface

**Purpose:** TranslationInterface component

**File:** `TranslationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationManager

**Purpose:** Manages Translation operations

**File:** `TranslationManager.php`

**Architectural Issues:** 1 violations detected

---

#### TranslationStatusInterface

**Purpose:** TranslationStatusInterface component

**File:** `TranslationStatusInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TranslatorInterface

**Purpose:** TranslatorInterface component

**File:** `TranslatorInterface.php`

**Architectural Issues:** 2 violations detected

---

#### TransliterationInterface

**Purpose:** TransliterationInterface component

**File:** `TransliterationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TransportServiceFactory

**Purpose:** Service for TransportFactory

**File:** `TransportServiceFactory.php`

**Architectural Issues:** 1 violations detected

---

#### TransportServiceFactoryInterface

**Purpose:** Service for TransportFactoryInterface

**File:** `TransportServiceFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TransportServiceFactoryTrait

**Purpose:** Service for TransportFactoryTrait

**File:** `TransportServiceFactoryTrait.php`

**Architectural Issues:** 1 violations detected

---

#### TraversableTypedDataInterface

**Purpose:** TraversableTypedDataInterface component

**File:** `TraversableTypedDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Truncate

**Purpose:** Truncate component

**File:** `Truncate.php`

**Architectural Issues:** 1 violations detected

---

#### TrustedCallback

**Purpose:** TrustedCallback component

**File:** `TrustedCallback.php`

**Architectural Issues:** 1 violations detected

---

#### TrustedCallbackInterface

**Purpose:** TrustedCallbackInterface component

**File:** `TrustedCallbackInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TrustedHostsRequestFactory

**Purpose:** TrustedHostsRequestFactory component

**File:** `TrustedHostsRequestFactory.php`

**Architectural Issues:** 1 violations detected

---

#### TrustedRedirectResponse

**Purpose:** TrustedRedirectResponse component

**File:** `TrustedRedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### TwigEnvironment

**Purpose:** TwigEnvironment component

**File:** `TwigEnvironment.php`

**Architectural Issues:** 1 violations detected

---

#### TwigExtension

**Purpose:** TwigExtension component

**File:** `TwigExtension.php`

**Architectural Issues:** 1 violations detected

---

#### TwigExtensionPass

**Purpose:** TwigExtensionPass component

**File:** `TwigExtensionPass.php`

**Architectural Issues:** 1 violations detected

---

#### TwigNodeCheckDeprecations

**Purpose:** TwigNodeCheckDeprecations component

**File:** `TwigNodeCheckDeprecations.php`

**Architectural Issues:** 1 violations detected

---

#### TwigNodeTrans

**Purpose:** TwigNodeTrans component

**File:** `TwigNodeTrans.php`

**Architectural Issues:** 1 violations detected

---

#### TwigNodeVisitor

**Purpose:** TwigNodeVisitor component

**File:** `TwigNodeVisitor.php`

**Architectural Issues:** 1 violations detected

---

#### TwigNodeVisitorCheckDeprecations

**Purpose:** TwigNodeVisitorCheckDeprecations component

**File:** `TwigNodeVisitorCheckDeprecations.php`

**Architectural Issues:** 1 violations detected

---

#### TwigPhpStorageCache

**Purpose:** TwigPhpStorageCache component

**File:** `TwigPhpStorageCache.php`

**Architectural Issues:** 1 violations detected

---

#### TwigSandboxPolicy

**Purpose:** TwigSandboxPolicy component

**File:** `TwigSandboxPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### TwigSimpleCheckToStringNode

**Purpose:** TwigSimpleCheckToStringNode component

**File:** `TwigSimpleCheckToStringNode.php`

**Architectural Issues:** 1 violations detected

---

#### TwigTransTokenParser

**Purpose:** TwigTransTokenParser component

**File:** `TwigTransTokenParser.php`

**Architectural Issues:** 1 violations detected

---

#### TypeResolver

**Purpose:** TypeResolver component

**File:** `TypeResolver.php`

**Architectural Issues:** 1 violations detected

---

#### TypedConfigInterface

**Purpose:** TypedConfigInterface component

**File:** `TypedConfigInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TypedConfigManager

**Purpose:** Manages TypedConfig operations

**File:** `TypedConfigManager.php`

**Architectural Issues:** 1 violations detected

---

#### TypedConfigManagerInterface

**Purpose:** Manages TypedConfigInterface operations

**File:** `TypedConfigManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TypedData

**Purpose:** TypedData component

**File:** `TypedData.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataAwareValidatorTrait

**Purpose:** TypedDataAwareValidatorTrait component

**File:** `TypedDataAwareValidatorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataInterface

**Purpose:** TypedDataInterface component

**File:** `TypedDataInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataInternalPropertiesHelper

**Purpose:** TypedDataInternalPropertiesHelper component

**File:** `TypedDataInternalPropertiesHelper.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataManager

**Purpose:** Manages TypedData operations

**File:** `TypedDataManager.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataManagerInterface

**Purpose:** Manages TypedDataInterface operations

**File:** `TypedDataManagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataMetadata

**Purpose:** TypedDataMetadata component

**File:** `TypedDataMetadata.php`

**Architectural Issues:** 1 violations detected

---

#### TypedDataTrait

**Purpose:** TypedDataTrait component

**File:** `TypedDataTrait.php`

**Architectural Issues:** 1 violations detected

---

#### UncacheableDependencyTrait

**Purpose:** UncacheableDependencyTrait component

**File:** `UncacheableDependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### UnchangingCacheableDependencyTrait

**Purpose:** UnchangingCacheableDependencyTrait component

**File:** `UnchangingCacheableDependencyTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Undefined

**Purpose:** Undefined component

**File:** `Undefined.php`

**Architectural Issues:** 1 violations detected

---

#### UndefinedLinkTemplateException

**Purpose:** UndefinedLinkTemplateException component

**File:** `UndefinedLinkTemplateException.php`

**Architectural Issues:** 1 violations detected

---

#### Unicode

**Purpose:** Unicode component

**File:** `Unicode.php`

**Architectural Issues:** 1 violations detected

---

#### UninstalledExtensionException

**Purpose:** UninstalledExtensionException component

**File:** `UninstalledExtensionException.php`

**Architectural Issues:** 1 violations detected

---

#### UniqueFieldConstraint

**Purpose:** UniqueFieldConstraint component

**File:** `UniqueFieldConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UniqueFieldValueValidator

**Purpose:** UniqueFieldValueValidator component

**File:** `UniqueFieldValueValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UniquePathAliasConstraint

**Purpose:** UniquePathAliasConstraint component

**File:** `UniquePathAliasConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UniquePathAliasConstraintValidator

**Purpose:** UniquePathAliasConstraintValidator component

**File:** `UniquePathAliasConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownCheckpointException

**Purpose:** UnknownCheckpointException component

**File:** `UnknownCheckpointException.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownExtensionException

**Purpose:** UnknownExtensionException component

**File:** `UnknownExtensionException.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownExtensionTypeException

**Purpose:** UnknownExtensionTypeException component

**File:** `UnknownExtensionTypeException.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownRecipeException

**Purpose:** UnknownRecipeException component

**File:** `UnknownRecipeException.php`

**Architectural Issues:** 1 violations detected

---

#### UnmetDependenciesException

**Purpose:** UnmetDependenciesException component

**File:** `UnmetDependenciesException.php`

**Architectural Issues:** 1 violations detected

---

#### UnpublishAction

**Purpose:** UnpublishAction component

**File:** `UnpublishAction.php`

**Architectural Issues:** 1 violations detected

---

#### UnroutedUrlAssembler

**Purpose:** UnroutedUrlAssembler component

**File:** `UnroutedUrlAssembler.php`

**Architectural Issues:** 1 violations detected

---

#### UnroutedUrlAssemblerInterface

**Purpose:** UnroutedUrlAssemblerInterface component

**File:** `UnroutedUrlAssemblerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UnsupportedDataTypeConfigException

**Purpose:** UnsupportedDataTypeConfigException component

**File:** `UnsupportedDataTypeConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### UnsupportedEntityTypeDefinitionException

**Purpose:** UnsupportedEntityTypeDefinitionException component

**File:** `UnsupportedEntityTypeDefinitionException.php`

**Architectural Issues:** 1 violations detected

---

#### UntrustedCallbackException

**Purpose:** UntrustedCallbackException component

**File:** `UntrustedCallbackException.php`

**Architectural Issues:** 1 violations detected

---

#### Update

**Purpose:** Update component

**File:** `Update.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateBackend

**Purpose:** UpdateBackend component

**File:** `UpdateBackend.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateBuildIdCommand

**Purpose:** UpdateBuildIdCommand component

**File:** `UpdateBuildIdCommand.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateCacheBackendFactory

**Purpose:** UpdateCacheBackendFactory component

**File:** `UpdateCacheBackendFactory.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateCompilerPass

**Purpose:** UpdateCompilerPass component

**File:** `UpdateCompilerPass.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateException

**Purpose:** UpdateException component

**File:** `UpdateException.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateHookRegistry

**Purpose:** UpdateHookRegistry component

**File:** `UpdateHookRegistry.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateKernel

**Purpose:** UpdateKernel component

**File:** `UpdateKernel.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateRegistry

**Purpose:** UpdateRegistry component

**File:** `UpdateRegistry.php`

**Architectural Issues:** 1 violations detected

---

#### UpdateServiceProvider

**Purpose:** Service for UpdateProvider

**File:** `UpdateServiceProvider.php`

**Architectural Issues:** 1 violations detected

---

#### Updater

**Purpose:** Updater component

**File:** `Updater.php`

**Architectural Issues:** 1 violations detected

---

#### UpdaterException

**Purpose:** UpdaterException component

**File:** `UpdaterException.php`

**Architectural Issues:** 1 violations detected

---

#### UpdaterFileTransferException

**Purpose:** UpdaterFileTransferException component

**File:** `UpdaterFileTransferException.php`

**Architectural Issues:** 1 violations detected

---

#### UpdaterInterface

**Purpose:** UpdaterInterface component

**File:** `UpdaterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Upsert

**Purpose:** Upsert component

**File:** `Upsert.php`

**Architectural Issues:** 1 violations detected

---

#### Uri

**Purpose:** Uri component

**File:** `Uri.php`

**Architectural Issues:** 1 violations detected

---

#### UriHostConstraint

**Purpose:** UriHostConstraint component

**File:** `UriHostConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UriHostConstraintValidator

**Purpose:** UriHostConstraintValidator component

**File:** `UriHostConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### UriInterface

**Purpose:** UriInterface component

**File:** `UriInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UriItem

**Purpose:** UriItem component

**File:** `UriItem.php`

**Architectural Issues:** 1 violations detected

---

#### UriLinkFormatter

**Purpose:** Form handling for UriLinkatter

**File:** `UriLinkFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### UriWidget

**Purpose:** UriWidget component

**File:** `UriWidget.php`

**Architectural Issues:** 1 violations detected

---

#### Url

**Purpose:** Url component

**File:** `Url.php`

**Architectural Issues:** 2 violations detected

---

#### UrlCacheContext

**Purpose:** UrlCacheContext component

**File:** `UrlCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### UrlGenerator

**Purpose:** UrlGenerator component

**File:** `UrlGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### UrlGeneratorInterface

**Purpose:** UrlGeneratorInterface component

**File:** `UrlGeneratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UrlHelper

**Purpose:** UrlHelper component

**File:** `UrlHelper.php`

**Architectural Issues:** 1 violations detected

---

#### UrlMatcher

**Purpose:** UrlMatcher component

**File:** `UrlMatcher.php`

**Architectural Issues:** 1 violations detected

---

#### UseCacheBackendTrait

**Purpose:** UseCacheBackendTrait component

**File:** `UseCacheBackendTrait.php`

**Architectural Issues:** 1 violations detected

---

#### UserAgent

**Purpose:** UserAgent component

**File:** `UserAgent.php`

**Architectural Issues:** 1 violations detected

---

#### UserCacheContext

**Purpose:** UserCacheContext component

**File:** `UserCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### UserCacheContextBase

**Purpose:** UserCacheContextBase component

**File:** `UserCacheContextBase.php`

**Architectural Issues:** 1 violations detected

---

#### UserRolesAccessPolicy

**Purpose:** UserRolesAccessPolicy component

**File:** `UserRolesAccessPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### UserRolesCacheContext

**Purpose:** UserRolesCacheContext component

**File:** `UserRolesCacheContext.php`

**Architectural Issues:** 1 violations detected

---

#### UserSession

**Purpose:** UserSession component

**File:** `UserSession.php`

**Architectural Issues:** 1 violations detected

---

#### Uuid

**Purpose:** Uuid component

**File:** `Uuid.php`

**Architectural Issues:** 1 violations detected

---

#### UuidConstraint

**Purpose:** UuidConstraint component

**File:** `UuidConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### UuidInterface

**Purpose:** UuidInterface component

**File:** `UuidInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UuidItem

**Purpose:** UuidItem component

**File:** `UuidItem.php`

**Architectural Issues:** 1 violations detected

---

#### ValidKeysConstraint

**Purpose:** ValidKeysConstraint component

**File:** `ValidKeysConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ValidKeysConstraintValidator

**Purpose:** ValidKeysConstraintValidator component

**File:** `ValidKeysConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ValidPathConstraint

**Purpose:** ValidPathConstraint component

**File:** `ValidPathConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ValidPathConstraintValidator

**Purpose:** ValidPathConstraintValidator component

**File:** `ValidPathConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### ValidReferenceConstraint

**Purpose:** ValidReferenceConstraint component

**File:** `ValidReferenceConstraint.php`

**Architectural Issues:** 1 violations detected

---

#### ValidReferenceConstraintValidator

**Purpose:** ValidReferenceConstraintValidator component

**File:** `ValidReferenceConstraintValidator.php`

**Architectural Issues:** 1 violations detected

---

#### Value

**Purpose:** Value component

**File:** `Value.php`

**Architectural Issues:** 1 violations detected

---

#### Variable

**Purpose:** Variable component

**File:** `Variable.php`

**Architectural Issues:** 1 violations detected

---

#### VariantBase

**Purpose:** VariantBase component

**File:** `VariantBase.php`

**Architectural Issues:** 1 violations detected

---

#### VariantInterface

**Purpose:** VariantInterface component

**File:** `VariantInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VariantManager

**Purpose:** Manages Variant operations

**File:** `VariantManager.php`

**Architectural Issues:** 1 violations detected

---

#### VariationCache

**Purpose:** VariationCache component

**File:** `VariationCache.php`

**Architectural Issues:** 1 violations detected

---

#### VariationCacheFactory

**Purpose:** VariationCacheFactory component

**File:** `VariationCacheFactory.php`

**Architectural Issues:** 1 violations detected

---

#### VariationCacheFactoryInterface

**Purpose:** VariationCacheFactoryInterface component

**File:** `VariationCacheFactoryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VariationCacheInterface

**Purpose:** VariationCacheInterface component

**File:** `VariationCacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### VersionHistoryController

**Purpose:** Controls VersionHistory operations

**File:** `VersionHistoryController.php`

**Architectural Issues:** 1 violations detected

---

#### VersionHistoryLocalTasks

**Purpose:** VersionHistoryLocalTasks component

**File:** `VersionHistoryLocalTasks.php`

**Architectural Issues:** 1 violations detected

---

#### VerticalTabs

**Purpose:** VerticalTabs component

**File:** `VerticalTabs.php`

**Architectural Issues:** 1 violations detected

---

#### Weight

**Purpose:** Weight component

**File:** `Weight.php`

**Architectural Issues:** 1 violations detected

---

#### WidgetBase

**Purpose:** WidgetBase component

**File:** `WidgetBase.php`

**Architectural Issues:** 1 violations detected

---

#### WidgetBaseInterface

**Purpose:** WidgetBaseInterface component

**File:** `WidgetBaseInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WidgetInterface

**Purpose:** WidgetInterface component

**File:** `WidgetInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WidgetPluginManager

**Purpose:** Manages WidgetPlugin operations

**File:** `WidgetPluginManager.php`

**Architectural Issues:** 1 violations detected

---

#### WordLevelDiff

**Purpose:** WordLevelDiff component

**File:** `WordLevelDiff.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceDynamicSafeFormInterface

**Purpose:** Form handling for WorkspaceDynamicSafeInterface

**File:** `WorkspaceDynamicSafeFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSafeFormInterface

**Purpose:** Form handling for WorkspaceSafeInterface

**File:** `WorkspaceSafeFormInterface.php`

**Architectural Issues:** 1 violations detected

---

#### WorkspaceSafeFormTrait

**Purpose:** Form handling for WorkspaceSafeTrait

**File:** `WorkspaceSafeFormTrait.php`

**Architectural Issues:** 1 violations detected

---

#### WriteSafeSessionHandler

**Purpose:** Handles requests for WriteSafeSession

**File:** `WriteSafeSessionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### WriteSafeSessionHandlerInterface

**Purpose:** Handles requests for WriteSafeSessionInterface

**File:** `WriteSafeSessionHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Xss

**Purpose:** Xss component

**File:** `Xss.php`

**Architectural Issues:** 1 violations detected

---

#### Yaml

**Purpose:** Yaml component

**File:** `Yaml.php`

**Architectural Issues:** 2 violations detected

---

#### YamlDirectoryDiscovery

**Purpose:** YamlDirectoryDiscovery component

**File:** `YamlDirectoryDiscovery.php`

**Architectural Issues:** 2 violations detected

---

#### YamlDiscovery

**Purpose:** YamlDiscovery component

**File:** `YamlDiscovery.php`

**Architectural Issues:** 3 violations detected

---

#### YamlDiscoveryDecorator

**Purpose:** YamlDiscoveryDecorator component

**File:** `YamlDiscoveryDecorator.php`

**Architectural Issues:** 1 violations detected

---

#### YamlFileLoader

**Purpose:** YamlFileLoader component

**File:** `YamlFileLoader.php`

**Architectural Issues:** 1 violations detected

---

#### YamlPecl

**Purpose:** YamlPecl component

**File:** `YamlPecl.php`

**Architectural Issues:** 1 violations detected

---

#### Zip

**Purpose:** Zip component

**File:** `Zip.php`

**Architectural Issues:** 1 violations detected

---

#### da

**Purpose:** da component

**File:** `da.php`

**Architectural Issues:** 1 violations detected

---

#### database.api

**Purpose:** database.api component

**File:** `database.api.php`

**Architectural Issues:** 1 violations detected

---

#### de

**Purpose:** de component

**File:** `de.php`

**Architectural Issues:** 1 violations detected

---

#### entity.api

**Purpose:** entity.api component

**File:** `entity.api.php`

**Architectural Issues:** 1 violations detected

---

#### eo

**Purpose:** eo component

**File:** `eo.php`

**Architectural Issues:** 1 violations detected

---

#### file.api

**Purpose:** file.api component

**File:** `file.api.php`

**Architectural Issues:** 1 violations detected

---

#### form.api

**Purpose:** form.api component

**File:** `form.api.php`

**Architectural Issues:** 1 violations detected

---

#### kg

**Purpose:** kg component

**File:** `kg.php`

**Architectural Issues:** 1 violations detected

---

#### language.api

**Purpose:** language.api component

**File:** `language.api.php`

**Architectural Issues:** 1 violations detected

---

#### link.api

**Purpose:** link.api component

**File:** `link.api.php`

**Architectural Issues:** 1 violations detected

---

#### menu.api

**Purpose:** menu.api component

**File:** `menu.api.php`

**Architectural Issues:** 1 violations detected

---

#### module.api

**Purpose:** module.api component

**File:** `module.api.php`

**Architectural Issues:** 1 violations detected

---

#### plugin.api

**Purpose:** plugin.api component

**File:** `plugin.api.php`

**Architectural Issues:** 1 violations detected

---

#### routing.api

**Purpose:** routing.api component

**File:** `routing.api.php`

**Architectural Issues:** 1 violations detected

---

#### theme.api

**Purpose:** theme.api component

**File:** `theme.api.php`

**Architectural Issues:** 1 violations detected

---

#### token.api

**Purpose:** token.api component

**File:** `token.api.php`

**Architectural Issues:** 1 violations detected

---

#### uk

**Purpose:** uk component

**File:** `uk.php`

**Architectural Issues:** 1 violations detected

---

#### x00

**Purpose:** x00 component

**File:** `x00.php`

**Architectural Issues:** 1 violations detected

---

#### x01

**Purpose:** x01 component

**File:** `x01.php`

**Architectural Issues:** 1 violations detected

---

#### x02

**Purpose:** x02 component

**File:** `x02.php`

**Architectural Issues:** 1 violations detected

---

#### x03

**Purpose:** x03 component

**File:** `x03.php`

**Architectural Issues:** 1 violations detected

---

#### x04

**Purpose:** x04 component

**File:** `x04.php`

**Architectural Issues:** 1 violations detected

---

#### x05

**Purpose:** x05 component

**File:** `x05.php`

**Architectural Issues:** 1 violations detected

---

#### x06

**Purpose:** x06 component

**File:** `x06.php`

**Architectural Issues:** 1 violations detected

---

#### x07

**Purpose:** x07 component

**File:** `x07.php`

**Architectural Issues:** 1 violations detected

---

#### x09

**Purpose:** x09 component

**File:** `x09.php`

**Architectural Issues:** 1 violations detected

---

#### x0a

**Purpose:** x0a component

**File:** `x0a.php`

**Architectural Issues:** 1 violations detected

---

#### x0b

**Purpose:** x0b component

**File:** `x0b.php`

**Architectural Issues:** 1 violations detected

---

#### x0c

**Purpose:** x0c component

**File:** `x0c.php`

**Architectural Issues:** 1 violations detected

---

#### x0d

**Purpose:** x0d component

**File:** `x0d.php`

**Architectural Issues:** 1 violations detected

---

#### x0e

**Purpose:** x0e component

**File:** `x0e.php`

**Architectural Issues:** 1 violations detected

---

#### x0f

**Purpose:** x0f component

**File:** `x0f.php`

**Architectural Issues:** 1 violations detected

---

#### x10

**Purpose:** x10 component

**File:** `x10.php`

**Architectural Issues:** 1 violations detected

---

#### x11

**Purpose:** x11 component

**File:** `x11.php`

**Architectural Issues:** 1 violations detected

---

#### x12

**Purpose:** x12 component

**File:** `x12.php`

**Architectural Issues:** 1 violations detected

---

#### x13

**Purpose:** x13 component

**File:** `x13.php`

**Architectural Issues:** 1 violations detected

---

#### x14

**Purpose:** x14 component

**File:** `x14.php`

**Architectural Issues:** 1 violations detected

---

#### x15

**Purpose:** x15 component

**File:** `x15.php`

**Architectural Issues:** 1 violations detected

---

#### x16

**Purpose:** x16 component

**File:** `x16.php`

**Architectural Issues:** 1 violations detected

---

#### x17

**Purpose:** x17 component

**File:** `x17.php`

**Architectural Issues:** 1 violations detected

---

#### x18

**Purpose:** x18 component

**File:** `x18.php`

**Architectural Issues:** 1 violations detected

---

#### x1d

**Purpose:** x1d component

**File:** `x1d.php`

**Architectural Issues:** 1 violations detected

---

#### x1e

**Purpose:** x1e component

**File:** `x1e.php`

**Architectural Issues:** 1 violations detected

---

#### x1f

**Purpose:** x1f component

**File:** `x1f.php`

**Architectural Issues:** 1 violations detected

---

#### x20

**Purpose:** x20 component

**File:** `x20.php`

**Architectural Issues:** 1 violations detected

---

#### x21

**Purpose:** x21 component

**File:** `x21.php`

**Architectural Issues:** 1 violations detected

---

#### x22

**Purpose:** x22 component

**File:** `x22.php`

**Architectural Issues:** 1 violations detected

---

#### x23

**Purpose:** x23 component

**File:** `x23.php`

**Architectural Issues:** 1 violations detected

---

#### x24

**Purpose:** x24 component

**File:** `x24.php`

**Architectural Issues:** 1 violations detected

---

#### x25

**Purpose:** x25 component

**File:** `x25.php`

**Architectural Issues:** 1 violations detected

---

#### x26

**Purpose:** x26 component

**File:** `x26.php`

**Architectural Issues:** 1 violations detected

---

#### x27

**Purpose:** x27 component

**File:** `x27.php`

**Architectural Issues:** 1 violations detected

---

#### x28

**Purpose:** x28 component

**File:** `x28.php`

**Architectural Issues:** 1 violations detected

---

#### x29

**Purpose:** x29 component

**File:** `x29.php`

**Architectural Issues:** 1 violations detected

---

#### x2a

**Purpose:** x2a component

**File:** `x2a.php`

**Architectural Issues:** 1 violations detected

---

#### x2e

**Purpose:** x2e component

**File:** `x2e.php`

**Architectural Issues:** 1 violations detected

---

#### x2f

**Purpose:** x2f component

**File:** `x2f.php`

**Architectural Issues:** 1 violations detected

---

#### x30

**Purpose:** x30 component

**File:** `x30.php`

**Architectural Issues:** 1 violations detected

---

#### x31

**Purpose:** x31 component

**File:** `x31.php`

**Architectural Issues:** 1 violations detected

---

#### x32

**Purpose:** x32 component

**File:** `x32.php`

**Architectural Issues:** 1 violations detected

---

#### x33

**Purpose:** x33 component

**File:** `x33.php`

**Architectural Issues:** 1 violations detected

---

#### x34

**Purpose:** x34 component

**File:** `x34.php`

**Architectural Issues:** 1 violations detected

---

#### x35

**Purpose:** x35 component

**File:** `x35.php`

**Architectural Issues:** 1 violations detected

---

#### x36

**Purpose:** x36 component

**File:** `x36.php`

**Architectural Issues:** 1 violations detected

---

#### x37

**Purpose:** x37 component

**File:** `x37.php`

**Architectural Issues:** 1 violations detected

---

#### x38

**Purpose:** x38 component

**File:** `x38.php`

**Architectural Issues:** 1 violations detected

---

#### x39

**Purpose:** x39 component

**File:** `x39.php`

**Architectural Issues:** 1 violations detected

---

#### x3a

**Purpose:** x3a component

**File:** `x3a.php`

**Architectural Issues:** 1 violations detected

---

#### x3b

**Purpose:** x3b component

**File:** `x3b.php`

**Architectural Issues:** 1 violations detected

---

#### x3c

**Purpose:** x3c component

**File:** `x3c.php`

**Architectural Issues:** 1 violations detected

---

#### x3d

**Purpose:** x3d component

**File:** `x3d.php`

**Architectural Issues:** 1 violations detected

---

#### x3e

**Purpose:** x3e component

**File:** `x3e.php`

**Architectural Issues:** 1 violations detected

---

#### x3f

**Purpose:** x3f component

**File:** `x3f.php`

**Architectural Issues:** 1 violations detected

---

#### x40

**Purpose:** x40 component

**File:** `x40.php`

**Architectural Issues:** 1 violations detected

---

#### x41

**Purpose:** x41 component

**File:** `x41.php`

**Architectural Issues:** 1 violations detected

---

#### x42

**Purpose:** x42 component

**File:** `x42.php`

**Architectural Issues:** 1 violations detected

---

#### x43

**Purpose:** x43 component

**File:** `x43.php`

**Architectural Issues:** 1 violations detected

---

#### x44

**Purpose:** x44 component

**File:** `x44.php`

**Architectural Issues:** 1 violations detected

---

#### x45

**Purpose:** x45 component

**File:** `x45.php`

**Architectural Issues:** 1 violations detected

---

#### x46

**Purpose:** x46 component

**File:** `x46.php`

**Architectural Issues:** 1 violations detected

---

#### x47

**Purpose:** x47 component

**File:** `x47.php`

**Architectural Issues:** 1 violations detected

---

#### x48

**Purpose:** x48 component

**File:** `x48.php`

**Architectural Issues:** 1 violations detected

---

#### x49

**Purpose:** x49 component

**File:** `x49.php`

**Architectural Issues:** 1 violations detected

---

#### x4a

**Purpose:** x4a component

**File:** `x4a.php`

**Architectural Issues:** 1 violations detected

---

#### x4b

**Purpose:** x4b component

**File:** `x4b.php`

**Architectural Issues:** 1 violations detected

---

#### x4c

**Purpose:** x4c component

**File:** `x4c.php`

**Architectural Issues:** 1 violations detected

---

#### x4d

**Purpose:** x4d component

**File:** `x4d.php`

**Architectural Issues:** 1 violations detected

---

#### x4e

**Purpose:** x4e component

**File:** `x4e.php`

**Architectural Issues:** 1 violations detected

---

#### x4f

**Purpose:** x4f component

**File:** `x4f.php`

**Architectural Issues:** 1 violations detected

---

#### x50

**Purpose:** x50 component

**File:** `x50.php`

**Architectural Issues:** 1 violations detected

---

#### x51

**Purpose:** x51 component

**File:** `x51.php`

**Architectural Issues:** 1 violations detected

---

#### x52

**Purpose:** x52 component

**File:** `x52.php`

**Architectural Issues:** 1 violations detected

---

#### x53

**Purpose:** x53 component

**File:** `x53.php`

**Architectural Issues:** 1 violations detected

---

#### x54

**Purpose:** x54 component

**File:** `x54.php`

**Architectural Issues:** 1 violations detected

---

#### x55

**Purpose:** x55 component

**File:** `x55.php`

**Architectural Issues:** 1 violations detected

---

#### x56

**Purpose:** x56 component

**File:** `x56.php`

**Architectural Issues:** 1 violations detected

---

#### x57

**Purpose:** x57 component

**File:** `x57.php`

**Architectural Issues:** 1 violations detected

---

#### x58

**Purpose:** x58 component

**File:** `x58.php`

**Architectural Issues:** 1 violations detected

---

#### x59

**Purpose:** x59 component

**File:** `x59.php`

**Architectural Issues:** 1 violations detected

---

#### x5a

**Purpose:** x5a component

**File:** `x5a.php`

**Architectural Issues:** 1 violations detected

---

#### x5b

**Purpose:** x5b component

**File:** `x5b.php`

**Architectural Issues:** 1 violations detected

---

#### x5c

**Purpose:** x5c component

**File:** `x5c.php`

**Architectural Issues:** 1 violations detected

---

#### x5d

**Purpose:** x5d component

**File:** `x5d.php`

**Architectural Issues:** 1 violations detected

---

#### x5e

**Purpose:** x5e component

**File:** `x5e.php`

**Architectural Issues:** 1 violations detected

---

#### x5f

**Purpose:** x5f component

**File:** `x5f.php`

**Architectural Issues:** 1 violations detected

---

#### x60

**Purpose:** x60 component

**File:** `x60.php`

**Architectural Issues:** 1 violations detected

---

#### x61

**Purpose:** x61 component

**File:** `x61.php`

**Architectural Issues:** 1 violations detected

---

#### x62

**Purpose:** x62 component

**File:** `x62.php`

**Architectural Issues:** 1 violations detected

---

#### x63

**Purpose:** x63 component

**File:** `x63.php`

**Architectural Issues:** 1 violations detected

---

#### x64

**Purpose:** x64 component

**File:** `x64.php`

**Architectural Issues:** 1 violations detected

---

#### x65

**Purpose:** x65 component

**File:** `x65.php`

**Architectural Issues:** 1 violations detected

---

#### x66

**Purpose:** x66 component

**File:** `x66.php`

**Architectural Issues:** 1 violations detected

---

#### x67

**Purpose:** x67 component

**File:** `x67.php`

**Architectural Issues:** 1 violations detected

---

#### x68

**Purpose:** x68 component

**File:** `x68.php`

**Architectural Issues:** 1 violations detected

---

#### x69

**Purpose:** x69 component

**File:** `x69.php`

**Architectural Issues:** 1 violations detected

---

#### x6a

**Purpose:** x6a component

**File:** `x6a.php`

**Architectural Issues:** 1 violations detected

---

#### x6b

**Purpose:** x6b component

**File:** `x6b.php`

**Architectural Issues:** 1 violations detected

---

#### x6c

**Purpose:** x6c component

**File:** `x6c.php`

**Architectural Issues:** 1 violations detected

---

#### x6d

**Purpose:** x6d component

**File:** `x6d.php`

**Architectural Issues:** 1 violations detected

---

#### x6e

**Purpose:** x6e component

**File:** `x6e.php`

**Architectural Issues:** 1 violations detected

---

#### x6f

**Purpose:** x6f component

**File:** `x6f.php`

**Architectural Issues:** 1 violations detected

---

#### x70

**Purpose:** x70 component

**File:** `x70.php`

**Architectural Issues:** 1 violations detected

---

#### x71

**Purpose:** x71 component

**File:** `x71.php`

**Architectural Issues:** 1 violations detected

---

#### x72

**Purpose:** x72 component

**File:** `x72.php`

**Architectural Issues:** 1 violations detected

---

#### x73

**Purpose:** x73 component

**File:** `x73.php`

**Architectural Issues:** 1 violations detected

---

#### x74

**Purpose:** x74 component

**File:** `x74.php`

**Architectural Issues:** 1 violations detected

---

#### x75

**Purpose:** x75 component

**File:** `x75.php`

**Architectural Issues:** 1 violations detected

---

#### x76

**Purpose:** x76 component

**File:** `x76.php`

**Architectural Issues:** 1 violations detected

---

#### x77

**Purpose:** x77 component

**File:** `x77.php`

**Architectural Issues:** 1 violations detected

---

#### x78

**Purpose:** x78 component

**File:** `x78.php`

**Architectural Issues:** 1 violations detected

---

#### x79

**Purpose:** x79 component

**File:** `x79.php`

**Architectural Issues:** 1 violations detected

---

#### x7a

**Purpose:** x7a component

**File:** `x7a.php`

**Architectural Issues:** 1 violations detected

---

#### x7b

**Purpose:** x7b component

**File:** `x7b.php`

**Architectural Issues:** 1 violations detected

---

#### x7c

**Purpose:** x7c component

**File:** `x7c.php`

**Architectural Issues:** 1 violations detected

---

#### x7d

**Purpose:** x7d component

**File:** `x7d.php`

**Architectural Issues:** 1 violations detected

---

#### x7e

**Purpose:** x7e component

**File:** `x7e.php`

**Architectural Issues:** 1 violations detected

---

#### x7f

**Purpose:** x7f component

**File:** `x7f.php`

**Architectural Issues:** 1 violations detected

---

#### x80

**Purpose:** x80 component

**File:** `x80.php`

**Architectural Issues:** 1 violations detected

---

#### x81

**Purpose:** x81 component

**File:** `x81.php`

**Architectural Issues:** 1 violations detected

---

#### x82

**Purpose:** x82 component

**File:** `x82.php`

**Architectural Issues:** 1 violations detected

---

#### x83

**Purpose:** x83 component

**File:** `x83.php`

**Architectural Issues:** 1 violations detected

---

#### x84

**Purpose:** x84 component

**File:** `x84.php`

**Architectural Issues:** 1 violations detected

---

#### x85

**Purpose:** x85 component

**File:** `x85.php`

**Architectural Issues:** 1 violations detected

---

#### x86

**Purpose:** x86 component

**File:** `x86.php`

**Architectural Issues:** 1 violations detected

---

#### x87

**Purpose:** x87 component

**File:** `x87.php`

**Architectural Issues:** 1 violations detected

---

#### x88

**Purpose:** x88 component

**File:** `x88.php`

**Architectural Issues:** 1 violations detected

---

#### x89

**Purpose:** x89 component

**File:** `x89.php`

**Architectural Issues:** 1 violations detected

---

#### x8a

**Purpose:** x8a component

**File:** `x8a.php`

**Architectural Issues:** 1 violations detected

---

#### x8b

**Purpose:** x8b component

**File:** `x8b.php`

**Architectural Issues:** 1 violations detected

---

#### x8c

**Purpose:** x8c component

**File:** `x8c.php`

**Architectural Issues:** 1 violations detected

---

#### x8d

**Purpose:** x8d component

**File:** `x8d.php`

**Architectural Issues:** 1 violations detected

---

#### x8e

**Purpose:** x8e component

**File:** `x8e.php`

**Architectural Issues:** 1 violations detected

---

#### x8f

**Purpose:** x8f component

**File:** `x8f.php`

**Architectural Issues:** 1 violations detected

---

#### x90

**Purpose:** x90 component

**File:** `x90.php`

**Architectural Issues:** 1 violations detected

---

#### x91

**Purpose:** x91 component

**File:** `x91.php`

**Architectural Issues:** 1 violations detected

---

#### x92

**Purpose:** x92 component

**File:** `x92.php`

**Architectural Issues:** 1 violations detected

---

#### x93

**Purpose:** x93 component

**File:** `x93.php`

**Architectural Issues:** 1 violations detected

---

#### x94

**Purpose:** x94 component

**File:** `x94.php`

**Architectural Issues:** 1 violations detected

---

#### x95

**Purpose:** x95 component

**File:** `x95.php`

**Architectural Issues:** 1 violations detected

---

#### x96

**Purpose:** x96 component

**File:** `x96.php`

**Architectural Issues:** 1 violations detected

---

#### x97

**Purpose:** x97 component

**File:** `x97.php`

**Architectural Issues:** 1 violations detected

---

#### x98

**Purpose:** x98 component

**File:** `x98.php`

**Architectural Issues:** 1 violations detected

---

#### x99

**Purpose:** x99 component

**File:** `x99.php`

**Architectural Issues:** 1 violations detected

---

#### x9a

**Purpose:** x9a component

**File:** `x9a.php`

**Architectural Issues:** 1 violations detected

---

#### x9b

**Purpose:** x9b component

**File:** `x9b.php`

**Architectural Issues:** 1 violations detected

---

#### x9c

**Purpose:** x9c component

**File:** `x9c.php`

**Architectural Issues:** 1 violations detected

---

#### x9d

**Purpose:** x9d component

**File:** `x9d.php`

**Architectural Issues:** 1 violations detected

---

#### x9e

**Purpose:** x9e component

**File:** `x9e.php`

**Architectural Issues:** 1 violations detected

---

#### x9f

**Purpose:** x9f component

**File:** `x9f.php`

**Architectural Issues:** 1 violations detected

---

#### xa0

**Purpose:** xa0 component

**File:** `xa0.php`

**Architectural Issues:** 1 violations detected

---

#### xa1

**Purpose:** xa1 component

**File:** `xa1.php`

**Architectural Issues:** 1 violations detected

---

#### xa2

**Purpose:** xa2 component

**File:** `xa2.php`

**Architectural Issues:** 1 violations detected

---

#### xa3

**Purpose:** xa3 component

**File:** `xa3.php`

**Architectural Issues:** 1 violations detected

---

#### xa4

**Purpose:** xa4 component

**File:** `xa4.php`

**Architectural Issues:** 1 violations detected

---

#### xac

**Purpose:** xac component

**File:** `xac.php`

**Architectural Issues:** 1 violations detected

---

#### xad

**Purpose:** xad component

**File:** `xad.php`

**Architectural Issues:** 1 violations detected

---

#### xae

**Purpose:** xae component

**File:** `xae.php`

**Architectural Issues:** 1 violations detected

---

#### xaf

**Purpose:** xaf component

**File:** `xaf.php`

**Architectural Issues:** 1 violations detected

---

#### xb0

**Purpose:** xb0 component

**File:** `xb0.php`

**Architectural Issues:** 1 violations detected

---

#### xb1

**Purpose:** xb1 component

**File:** `xb1.php`

**Architectural Issues:** 1 violations detected

---

#### xb2

**Purpose:** xb2 component

**File:** `xb2.php`

**Architectural Issues:** 1 violations detected

---

#### xb3

**Purpose:** xb3 component

**File:** `xb3.php`

**Architectural Issues:** 1 violations detected

---

#### xb4

**Purpose:** xb4 component

**File:** `xb4.php`

**Architectural Issues:** 1 violations detected

---

#### xb5

**Purpose:** xb5 component

**File:** `xb5.php`

**Architectural Issues:** 1 violations detected

---

#### xb6

**Purpose:** xb6 component

**File:** `xb6.php`

**Architectural Issues:** 1 violations detected

---

#### xb7

**Purpose:** xb7 component

**File:** `xb7.php`

**Architectural Issues:** 1 violations detected

---

#### xb8

**Purpose:** xb8 component

**File:** `xb8.php`

**Architectural Issues:** 1 violations detected

---

#### xb9

**Purpose:** xb9 component

**File:** `xb9.php`

**Architectural Issues:** 1 violations detected

---

#### xba

**Purpose:** xba component

**File:** `xba.php`

**Architectural Issues:** 1 violations detected

---

#### xbb

**Purpose:** xbb component

**File:** `xbb.php`

**Architectural Issues:** 1 violations detected

---

#### xbc

**Purpose:** xbc component

**File:** `xbc.php`

**Architectural Issues:** 1 violations detected

---

#### xbd

**Purpose:** xbd component

**File:** `xbd.php`

**Architectural Issues:** 1 violations detected

---

#### xbe

**Purpose:** xbe component

**File:** `xbe.php`

**Architectural Issues:** 1 violations detected

---

#### xbf

**Purpose:** xbf component

**File:** `xbf.php`

**Architectural Issues:** 1 violations detected

---

#### xc0

**Purpose:** xc0 component

**File:** `xc0.php`

**Architectural Issues:** 1 violations detected

---

#### xc1

**Purpose:** xc1 component

**File:** `xc1.php`

**Architectural Issues:** 1 violations detected

---

#### xc2

**Purpose:** xc2 component

**File:** `xc2.php`

**Architectural Issues:** 1 violations detected

---

#### xc3

**Purpose:** xc3 component

**File:** `xc3.php`

**Architectural Issues:** 1 violations detected

---

#### xc4

**Purpose:** xc4 component

**File:** `xc4.php`

**Architectural Issues:** 1 violations detected

---

#### xc5

**Purpose:** xc5 component

**File:** `xc5.php`

**Architectural Issues:** 1 violations detected

---

#### xc6

**Purpose:** xc6 component

**File:** `xc6.php`

**Architectural Issues:** 1 violations detected

---

#### xc7

**Purpose:** xc7 component

**File:** `xc7.php`

**Architectural Issues:** 1 violations detected

---

#### xc8

**Purpose:** xc8 component

**File:** `xc8.php`

**Architectural Issues:** 1 violations detected

---

#### xc9

**Purpose:** xc9 component

**File:** `xc9.php`

**Architectural Issues:** 1 violations detected

---

#### xca

**Purpose:** xca component

**File:** `xca.php`

**Architectural Issues:** 1 violations detected

---

#### xcb

**Purpose:** xcb component

**File:** `xcb.php`

**Architectural Issues:** 1 violations detected

---

#### xcc

**Purpose:** xcc component

**File:** `xcc.php`

**Architectural Issues:** 1 violations detected

---

#### xcd

**Purpose:** xcd component

**File:** `xcd.php`

**Architectural Issues:** 1 violations detected

---

#### xce

**Purpose:** xce component

**File:** `xce.php`

**Architectural Issues:** 1 violations detected

---

#### xcf

**Purpose:** xcf component

**File:** `xcf.php`

**Architectural Issues:** 1 violations detected

---

#### xd0

**Purpose:** xd0 component

**File:** `xd0.php`

**Architectural Issues:** 1 violations detected

---

#### xd1

**Purpose:** xd1 component

**File:** `xd1.php`

**Architectural Issues:** 1 violations detected

---

#### xd2

**Purpose:** xd2 component

**File:** `xd2.php`

**Architectural Issues:** 1 violations detected

---

#### xd3

**Purpose:** xd3 component

**File:** `xd3.php`

**Architectural Issues:** 1 violations detected

---

#### xd4

**Purpose:** xd4 component

**File:** `xd4.php`

**Architectural Issues:** 1 violations detected

---

#### xd5

**Purpose:** xd5 component

**File:** `xd5.php`

**Architectural Issues:** 1 violations detected

---

#### xd6

**Purpose:** xd6 component

**File:** `xd6.php`

**Architectural Issues:** 1 violations detected

---

#### xd7

**Purpose:** xd7 component

**File:** `xd7.php`

**Architectural Issues:** 1 violations detected

---

#### xf9

**Purpose:** xf9 component

**File:** `xf9.php`

**Architectural Issues:** 1 violations detected

---

#### xfa

**Purpose:** xfa component

**File:** `xfa.php`

**Architectural Issues:** 1 violations detected

---

#### xfb

**Purpose:** xfb component

**File:** `xfb.php`

**Architectural Issues:** 1 violations detected

---

#### xfc

**Purpose:** xfc component

**File:** `xfc.php`

**Architectural Issues:** 1 violations detected

---

#### xfd

**Purpose:** xfd component

**File:** `xfd.php`

**Architectural Issues:** 1 violations detected

---

#### xfe

**Purpose:** xfe component

**File:** `xfe.php`

**Architectural Issues:** 1 violations detected

---

#### xff

**Purpose:** xff component

**File:** `xff.php`

**Architectural Issues:** 1 violations detected

---


## Statistics

- **Total Components:** 2139
- **Component Categories:** 1
- **Internal Dependencies:** 0
- **External Dependencies:** 155

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
