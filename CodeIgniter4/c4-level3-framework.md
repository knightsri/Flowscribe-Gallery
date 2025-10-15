# CodeIgniter 4 - Framework Layer (C4 Level 3)

**Generated:** 2025-10-15 05:07:37  
**Layer:** Framework  
**Components:** 452  
**Source:** Deptrac dependency analysis

---

## Component Diagram

```mermaid
graph TB
    subgraph "Framework Layer"
        subgraph "Components"
            BaseModel[BaseModel]
            Boot[Boot]
            bootstrap[bootstrap]
            CodeIgniter[CodeIgniter]
            Common[Common]
            ComposerScripts[ComposerScripts]
            Controller[Controller]
            Model[Model]
            rewrite[rewrite]
            Superglobals[Superglobals]
            util_bootstrap[util_bootstrap]
            ResponseTrait[ResponseTrait]
            Autoloader[Autoloader]
            FileLocator[FileLocator]
            FileLocatorCached[FileLocatorCached]
            FileLocatorInterface[FileLocatorInterface]
            CacheFactory[CacheFactory]
            CacheInterface[CacheInterface]
            FactoriesCache[FactoriesCache]
            ResponseCache[ResponseCache]
            CacheException[CacheException]
            FileVarExportHandler[FileVarExportHandler]
            BaseHandler[BaseHandler]
            DummyHandler[DummyHandler]
            FileHandler[FileHandler]
            MemcachedHandler[MemcachedHandler]
            PredisHandler[PredisHandler]
            RedisHandler[RedisHandler]
            WincacheHandler[WincacheHandler]
            BaseCommand[BaseCommand]
            CLI[CLI]
            Commands[Commands]
            Console[Console]
            GeneratorTrait[GeneratorTrait]
            InputOutput[InputOutput]
            CLIException[CLIException]
            Help[Help]
            ListCommands[ListCommands]
            ClearCache[ClearCache]
            InfoCache[InfoCache]
            CreateDatabase[CreateDatabase]
            Migrate[Migrate]
            MigrateRefresh[MigrateRefresh]
            MigrateRollback[MigrateRollback]
            Seed[Seed]
            ShowTableInfo[ShowTableInfo]
            GenerateKey[GenerateKey]
            CellGenerator[CellGenerator]
            CommandGenerator[CommandGenerator]
            ConfigGenerator[ConfigGenerator]
            ControllerGenerator[ControllerGenerator]
            EntityGenerator[EntityGenerator]
            FilterGenerator[FilterGenerator]
            MigrationGenerator[MigrationGenerator]
            ModelGenerator[ModelGenerator]
            ScaffoldGenerator[ScaffoldGenerator]
            SeederGenerator[SeederGenerator]
            ValidationGenerator[ValidationGenerator]
            cell.tpl[cell.tpl]
            cell_view.tpl[cell_view.tpl]
            command.tpl[command.tpl]
            config.tpl[config.tpl]
            controller.tpl[controller.tpl]
            entity.tpl[entity.tpl]
            filter.tpl[filter.tpl]
            migration.tpl[migration.tpl]
            model.tpl[model.tpl]
            seeder.tpl[seeder.tpl]
            validation.tpl[validation.tpl]
            ClearDebugbar[ClearDebugbar]
            ClearLogs[ClearLogs]
            Serve[Serve]
            LocalizationFinder[LocalizationFinder]
            LocalizationSync[LocalizationSync]
            ConfigCheck[ConfigCheck]
            Environment[Environment]
            FilterCheck[FilterCheck]
            Namespaces[Namespaces]
            Optimize[Optimize]
            PhpIniCheck[PhpIniCheck]
            Publish[Publish]
            Routes[Routes]
            AutoRouteCollector[AutoRouteCollector]
            ControllerFinder[ControllerFinder]
            ControllerMethodReader[ControllerMethodReader]
            FilterCollector[FilterCollector]
            FilterFinder[FilterFinder]
            SampleURIGenerator[SampleURIGenerator]
            AutoloadConfig[AutoloadConfig]
            BaseConfig[BaseConfig]
            BaseService[BaseService]
            DotEnv[DotEnv]
            Factories[Factories]
            Factory[Factory]
            Filters[Filters]
            ForeignCharacters[ForeignCharacters]
            Publisher[Publisher]
            Routing[Routing]
            Services[Services]
            View[View]
            CloneableCookieInterface[CloneableCookieInterface]
            Cookie[Cookie]
            CookieInterface[CookieInterface]
            CookieStore[CookieStore]
            CookieException[CookieException]
            BaseBuilder[BaseBuilder]
            BaseConnection[BaseConnection]
            BasePreparedQuery[BasePreparedQuery]
            BaseResult[BaseResult]
            BaseUtils[BaseUtils]
            Config[Config]
            ConnectionInterface[ConnectionInterface]
            Database[Database]
            Forge[Forge]
            Migration[Migration]
            MigrationRunner[MigrationRunner]
            PreparedQueryInterface[PreparedQueryInterface]
            Query[Query]
            QueryInterface[QueryInterface]
            RawSql[RawSql]
            ResultInterface[ResultInterface]
            Seeder[Seeder]
            TableName[TableName]
            DatabaseException[DatabaseException]
            DataException[DataException]
            ExceptionInterface[ExceptionInterface]
            Builder[Builder]
            Connection[Connection]
            PreparedQuery[PreparedQuery]
            Result[Result]
            Utils[Utils]
            Table[Table]
            DataCaster[DataCaster]
            ArrayCast[ArrayCast]
            BaseCast[BaseCast]
            BooleanCast[BooleanCast]
            CastInterface[CastInterface]
            CSVCast[CSVCast]
            DatetimeCast[DatetimeCast]
            FloatCast[FloatCast]
            IntBoolCast[IntBoolCast]
            IntegerCast[IntegerCast]
            JsonCast[JsonCast]
            TimestampCast[TimestampCast]
            URICast[URICast]
            CastException[CastException]
            DataConverter[DataConverter]
            BaseExceptionHandler[BaseExceptionHandler]
            ExceptionHandler[ExceptionHandler]
            ExceptionHandlerInterface[ExceptionHandlerInterface]
            Exceptions[Exceptions]
            Iterator[Iterator]
            Timer[Timer]
            Toolbar[Toolbar]
            BaseCollector[BaseCollector]
            Events[Events]
            Files[Files]
            History[History]
            Logs[Logs]
            Timers[Timers]
            Views[Views]
            toolbar.tpl[toolbar.tpl]
            Email[Email]
            EncrypterInterface[EncrypterInterface]
            Encryption[Encryption]
            EncryptionException[EncryptionException]
            OpenSSLHandler[OpenSSLHandler]
            SodiumHandler[SodiumHandler]
            Entity[Entity]
            ObjectCast[ObjectCast]
            StringCast[StringCast]
            BadFunctionCallException[BadFunctionCallException]
            BadMethodCallException[BadMethodCallException]
            ConfigException[ConfigException]
            CriticalError[CriticalError]
            DebugTraceableTrait[DebugTraceableTrait]
            DownloadException[DownloadException]
            FrameworkException[FrameworkException]
            HasExitCodeInterface[HasExitCodeInterface]
            HTTPExceptionInterface[HTTPExceptionInterface]
            InvalidArgumentException[InvalidArgumentException]
            LogicException[LogicException]
            ModelException[ModelException]
            PageNotFoundException[PageNotFoundException]
            RuntimeException[RuntimeException]
            File[File]
            FileCollection[FileCollection]
            FileSizeUnit[FileSizeUnit]
            FileException[FileException]
            FileNotFoundException[FileNotFoundException]
            Cors[Cors]
            CSRF[CSRF]
            DebugToolbar[DebugToolbar]
            FilterInterface[FilterInterface]
            ForceHTTPS[ForceHTTPS]
            Honeypot[Honeypot]
            InvalidChars[InvalidChars]
            PageCache[PageCache]
            PerformanceMetrics[PerformanceMetrics]
            SecureHeaders[SecureHeaders]
            FilterException[FilterException]
            Format[Format]
            FormatterInterface[FormatterInterface]
            JSONFormatter[JSONFormatter]
            XMLFormatter[XMLFormatter]
            FormatException[FormatException]
            array_helper[array_helper]
            cookie_helper[cookie_helper]
            date_helper[date_helper]
            filesystem_helper[filesystem_helper]
            form_helper[form_helper]
            html_helper[html_helper]
            inflector_helper[inflector_helper]
            kint_helper[kint_helper]
            number_helper[number_helper]
            security_helper[security_helper]
            text_helper[text_helper]
            url_helper[url_helper]
            xml_helper[xml_helper]
            ArrayHelper[ArrayHelper]
            HoneypotException[HoneypotException]
            DirectoryHasher[DirectoryHasher]
            HotReloader[HotReloader]
            IteratorFilter[IteratorFilter]
            CLIRequest[CLIRequest]
            ContentSecurityPolicy[ContentSecurityPolicy]
            CURLRequest[CURLRequest]
            DownloadResponse[DownloadResponse]
            Header[Header]
            IncomingRequest[IncomingRequest]
            Message[Message]
            MessageInterface[MessageInterface]
            MessageTrait[MessageTrait]
            Method[Method]
            Negotiate[Negotiate]
            OutgoingRequest[OutgoingRequest]
            OutgoingRequestInterface[OutgoingRequestInterface]
            RedirectResponse[RedirectResponse]
            Request[Request]
            RequestInterface[RequestInterface]
            RequestTrait[RequestTrait]
            ResponsableInterface[ResponsableInterface]
            Response[Response]
            ResponseInterface[ResponseInterface]
            SiteURI[SiteURI]
            SiteURIFactory[SiteURIFactory]
            URI[URI]
            UserAgent[UserAgent]
            BadRequestException[BadRequestException]
            HTTPException[HTTPException]
            RedirectException[RedirectException]
            UploadedFile[UploadedFile]
            UploadedFileInterface[UploadedFileInterface]
            Time[Time]
            TimeDifference[TimeDifference]
            TimeLegacy[TimeLegacy]
            TimeTrait[TimeTrait]
            I18nException[I18nException]
            Image[Image]
            ImageHandlerInterface[ImageHandlerInterface]
            ImageException[ImageException]
            GDHandler[GDHandler]
            ImageMagickHandler[ImageMagickHandler]
            Language[Language]
            Cache[Cache]
            Cast[Cast]
            Core[Core]
            Errors[Errors]
            Fabricator[Fabricator]
            HTTP[HTTP]
            Images[Images]
            Log[Log]
            Migrations[Migrations]
            Number[Number]
            Pager[Pager]
            RESTful[RESTful]
            Router[Router]
            Security[Security]
            Session[Session]
            Validation[Validation]
            Logger[Logger]
            LogException[LogException]
            ChromeLoggerHandler[ChromeLoggerHandler]
            ErrorlogHandler[ErrorlogHandler]
            HandlerInterface[HandlerInterface]
            Modules[Modules]
            PagerInterface[PagerInterface]
            PagerRenderer[PagerRenderer]
            PagerException[PagerException]
            default_full[default_full]
            default_head[default_head]
            default_simple[default_simple]
            ContentReplacer[ContentReplacer]
            PublisherException[PublisherException]
            BaseResource[BaseResource]
            ResourceController[ResourceController]
            ResourcePresenter[ResourcePresenter]
            AutoRouter[AutoRouter]
            AutoRouterImproved[AutoRouterImproved]
            AutoRouterInterface[AutoRouterInterface]
            DefinedRouteCollector[DefinedRouteCollector]
            RouteCollection[RouteCollection]
            RouteCollectionInterface[RouteCollectionInterface]
            RouterInterface[RouterInterface]
            MethodNotFoundException[MethodNotFoundException]
            RouterException[RouterException]
            CheckPhpIni[CheckPhpIni]
            SecurityInterface[SecurityInterface]
            SecurityException[SecurityException]
            SessionInterface[SessionInterface]
            SessionException[SessionException]
            ArrayHandler[ArrayHandler]
            DatabaseHandler[DatabaseHandler]
            MySQLiHandler[MySQLiHandler]
            PostgreHandler[PostgreHandler]
            Escaper[Escaper]
            EscaperInterface[EscaperInterface]
            CallFinder[CallFinder]
            FacadeInterface[FacadeInterface]
            init[init]
            init_helpers[init_helpers]
            Kint[Kint]
            AbstractPlugin[AbstractPlugin]
            ArrayLimitPlugin[ArrayLimitPlugin]
            ArrayObjectPlugin[ArrayObjectPlugin]
            Base64Plugin[Base64Plugin]
            BinaryPlugin[BinaryPlugin]
            BlacklistPlugin[BlacklistPlugin]
            ClassHooksPlugin[ClassHooksPlugin]
            ClassMethodsPlugin[ClassMethodsPlugin]
            ClassStaticsPlugin[ClassStaticsPlugin]
            ClassStringsPlugin[ClassStringsPlugin]
            ClosurePlugin[ClosurePlugin]
            ColorPlugin[ColorPlugin]
            ConstructablePluginInterface[ConstructablePluginInterface]
            DateTimePlugin[DateTimePlugin]
            DomPlugin[DomPlugin]
            EnumPlugin[EnumPlugin]
            FsPathPlugin[FsPathPlugin]
            HtmlPlugin[HtmlPlugin]
            IteratorPlugin[IteratorPlugin]
            JsonPlugin[JsonPlugin]
            MicrotimePlugin[MicrotimePlugin]
            MysqliPlugin[MysqliPlugin]
            Parser[Parser]
            PluginBeginInterface[PluginBeginInterface]
            PluginCompleteInterface[PluginCompleteInterface]
            PluginInterface[PluginInterface]
            ProfilePlugin[ProfilePlugin]
            ProxyPlugin[ProxyPlugin]
            SerializePlugin[SerializePlugin]
            SimpleXMLElementPlugin[SimpleXMLElementPlugin]
            SplFileInfoPlugin[SplFileInfoPlugin]
            StreamPlugin[StreamPlugin]
            TablePlugin[TablePlugin]
            ThrowablePlugin[ThrowablePlugin]
            TimestampPlugin[TimestampPlugin]
            ToStringPlugin[ToStringPlugin]
            TracePlugin[TracePlugin]
            XmlPlugin[XmlPlugin]
            AbstractRenderer[AbstractRenderer]
            AssetRendererTrait[AssetRendererTrait]
            CliRenderer[CliRenderer]
            ConstructableRendererInterface[ConstructableRendererInterface]
            PlainRenderer[PlainRenderer]
            RendererInterface[RendererInterface]
            RichRenderer[RichRenderer]
            TextRenderer[TextRenderer]
            CallableDefinitionPlugin[CallableDefinitionPlugin]
            CallablePlugin[CallablePlugin]
            LockPlugin[LockPlugin]
            SourcePlugin[SourcePlugin]
            TabPluginInterface[TabPluginInterface]
            TraceFramePlugin[TraceFramePlugin]
            ValuePluginInterface[ValuePluginInterface]
            AbstractValue[AbstractValue]
            ArrayValue[ArrayValue]
            ClosedResourceValue[ClosedResourceValue]
            ClosureValue[ClosureValue]
            ColorValue[ColorValue]
            DateTimeValue[DateTimeValue]
            DeclaredCallableBag[DeclaredCallableBag]
            DomNodeListValue[DomNodeListValue]
            DomNodeValue[DomNodeValue]
            EnumValue[EnumValue]
            FixedWidthValue[FixedWidthValue]
            FunctionValue[FunctionValue]
            InstanceValue[InstanceValue]
            MethodValue[MethodValue]
            MicrotimeValue[MicrotimeValue]
            ParameterBag[ParameterBag]
            ParameterHoldingTrait[ParameterHoldingTrait]
            ResourceValue[ResourceValue]
            SimpleXMLElementValue[SimpleXMLElementValue]
            SplFileInfoValue[SplFileInfoValue]
            StreamValue[StreamValue]
            StringValue[StringValue]
            ThrowableValue[ThrowableValue]
            TraceFrameValue[TraceFrameValue]
            TraceValue[TraceValue]
            UninitializedValue[UninitializedValue]
            UnknownValue[UnknownValue]
            VirtualValue[VirtualValue]
            ArrayContext[ArrayContext]
            BaseContext[BaseContext]
            ClassConstContext[ClassConstContext]
            ClassDeclaredContext[ClassDeclaredContext]
            ClassOwnedContext[ClassOwnedContext]
            ContextInterface[ContextInterface]
            DoubleAccessMemberContext[DoubleAccessMemberContext]
            MethodContext[MethodContext]
            PropertyContext[PropertyContext]
            StaticPropertyContext[StaticPropertyContext]
            AbstractRepresentation[AbstractRepresentation]
            BinaryRepresentation[BinaryRepresentation]
            CallableDefinitionRepresentation[CallableDefinitionRepresentation]
            ColorRepresentation[ColorRepresentation]
            ContainerRepresentation[ContainerRepresentation]
            MicrotimeRepresentation[MicrotimeRepresentation]
            ProfileRepresentation[ProfileRepresentation]
            RepresentationInterface[RepresentationInterface]
            SourceRepresentation[SourceRepresentation]
            SplFileInfoRepresentation[SplFileInfoRepresentation]
            StringRepresentation[StringRepresentation]
            TableRepresentation[TableRepresentation]
            ValueRepresentation[ValueRepresentation]
            AbstractLogger[AbstractLogger]
            LoggerAwareInterface[LoggerAwareInterface]
            LoggerAwareTrait[LoggerAwareTrait]
            LoggerInterface[LoggerInterface]
            LoggerTrait[LoggerTrait]
            LogLevel[LogLevel]
            NullLogger[NullLogger]
            Throttler[Throttler]
            ThrottlerInterface[ThrottlerInterface]
            ConditionalTrait[ConditionalTrait]
            PropertiesTrait[PropertiesTrait]
            Typography[Typography]
            CreditCardRules[CreditCardRules]
            DotArrayFilter[DotArrayFilter]
            FileRules[FileRules]
            FormatRules[FormatRules]
            Rules[Rules]
            ValidationInterface[ValidationInterface]
            ValidationException[ValidationException]
            list[list]
            single[single]
            Cell[Cell]
            Plugins[Plugins]
            ViewDecoratorInterface[ViewDecoratorInterface]
            ViewDecoratorTrait[ViewDecoratorTrait]
            ViewException[ViewException]
        end
    end

    %% Component Dependencies
    FileLocatorCachedTest --> FileLocatorTest
    FactoriesCacheFileHandlerTest --> AbstractFactoriesCacheHandlerTestCase
    FactoriesCacheFileVarExportHandlerTest --> AbstractFactoriesCacheHandlerTestCase
    FileHandlerTest --> BaseTestFileHandler
    FileHandlerTest --> BaseTestFileHandler
    FileHandlerTest --> BaseTestFileHandler
    FileHandlerTest --> AbstractHandlerTestCase
    MemcachedHandlerTest --> AbstractHandlerTestCase
    PredisHandlerTest --> AbstractHandlerTestCase
    RedisHandlerTest --> AbstractHandlerTestCase
    ControllerMethodReaderTest --> Dash_controller
    ControllerMethodReaderTest --> BlogController
    ControllerMethodReaderTest --> Home
    ControllerMethodReaderTest --> Dash_controller
    ControllerMethodReaderTest --> Home
    ControllerMethodReaderTest --> BlogController
    BaseConfigTest --> SimpleConfig
    BaseConfigTest --> SimpleConfig
    BaseConfigTest --> SimpleConfig
    BaseConfigTest --> SimpleConfig
    %% ... and 121 more internal dependencies

    %% External Layer Dependencies
    Tests[Tests Layer]
    Application[Application Layer]
    Autoloader -.-> Application
    Autoloader -.-> Application
    Autoloader -.-> Application
    Autoloader -.-> Application
    Autoloader -.-> Application
    Autoloader -.-> Application
    Autoloader -.-> Application
    BaseModel -.-> Application
    BaseModel -.-> Application
    BaseModel -.-> Application
    %% ... and 8396 more external dependencies
```

---

## Component List

### Components

#### AbstractLogger

**Purpose:** AbstractLogger component

**File:** `AbstractLogger.php`

**Architectural Issues:** 1 violations detected

---

#### AbstractPlugin

**Purpose:** AbstractPlugin component

**File:** `AbstractPlugin.php`

**Architectural Issues:** 3 violations detected

---

#### AbstractRenderer

**Purpose:** AbstractRenderer component

**File:** `AbstractRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### AbstractRepresentation

**Purpose:** AbstractRepresentation component

**File:** `AbstractRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### AbstractValue

**Purpose:** AbstractValue component

**File:** `AbstractValue.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayCast

**Purpose:** ArrayCast component

**File:** `ArrayCast.php`

**Architectural Issues:** 2 violations detected

---

#### ArrayContext

**Purpose:** ArrayContext component

**File:** `ArrayContext.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayHandler

**Purpose:** Handles requests for Array

**File:** `ArrayHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayHelper

**Purpose:** ArrayHelper component

**File:** `ArrayHelper.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayLimitPlugin

**Purpose:** ArrayLimitPlugin component

**File:** `ArrayLimitPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayObjectPlugin

**Purpose:** ArrayObjectPlugin component

**File:** `ArrayObjectPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ArrayValue

**Purpose:** ArrayValue component

**File:** `ArrayValue.php`

**Architectural Issues:** 1 violations detected

---

#### AssetRendererTrait

**Purpose:** AssetRendererTrait component

**File:** `AssetRendererTrait.php`

**Architectural Issues:** 1 violations detected

---

#### AutoRouteCollector

**Purpose:** AutoRouteCollector component

**File:** `AutoRouteCollector.php`

**Architectural Issues:** 2 violations detected

---

#### AutoRouter

**Purpose:** AutoRouter component

**File:** `AutoRouter.php`

**Architectural Issues:** 1 violations detected

---

#### AutoRouterImproved

**Purpose:** AutoRouterImproved component

**File:** `AutoRouterImproved.php`

**Architectural Issues:** 1 violations detected

---

#### AutoRouterInterface

**Purpose:** AutoRouterInterface component

**File:** `AutoRouterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### AutoloadConfig

**Purpose:** AutoloadConfig component

**File:** `AutoloadConfig.php`

**Architectural Issues:** 1 violations detected

---

#### Autoloader

**Purpose:** Autoloader component

**File:** `Autoloader.php`

**Architectural Issues:** 1 violations detected

---

#### BadFunctionCallException

**Purpose:** BadFunctionCallException component

**File:** `BadFunctionCallException.php`

**Architectural Issues:** 1 violations detected

---

#### BadMethodCallException

**Purpose:** BadMethodCallException component

**File:** `BadMethodCallException.php`

**Architectural Issues:** 1 violations detected

---

#### BadRequestException

**Purpose:** BadRequestException component

**File:** `BadRequestException.php`

**Architectural Issues:** 1 violations detected

---

#### Base64Plugin

**Purpose:** Base64Plugin component

**File:** `Base64Plugin.php`

**Architectural Issues:** 1 violations detected

---

#### BaseBuilder

**Purpose:** BaseBuilder component

**File:** `BaseBuilder.php`

**Architectural Issues:** 1 violations detected

---

#### BaseCast

**Purpose:** BaseCast component

**File:** `BaseCast.php`

**Architectural Issues:** 2 violations detected

---

#### BaseCollector

**Purpose:** BaseCollector component

**File:** `BaseCollector.php`

**Architectural Issues:** 1 violations detected

---

#### BaseCommand

**Purpose:** BaseCommand component

**File:** `BaseCommand.php`

**Architectural Issues:** 1 violations detected

---

#### BaseConfig

**Purpose:** BaseConfig component

**File:** `BaseConfig.php`

**Architectural Issues:** 1 violations detected

---

#### BaseConnection

**Purpose:** BaseConnection component

**File:** `BaseConnection.php`

**Architectural Issues:** 1 violations detected

---

#### BaseContext

**Purpose:** BaseContext component

**File:** `BaseContext.php`

**Architectural Issues:** 1 violations detected

---

#### BaseExceptionHandler

**Purpose:** Handles requests for BaseException

**File:** `BaseExceptionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### BaseHandler

**Purpose:** Handles requests for Base

**File:** `BaseHandler.php`

**Architectural Issues:** 5 violations detected

---

#### BaseModel

**Purpose:** BaseModel component

**File:** `BaseModel.php`

**Architectural Issues:** 1 violations detected

---

#### BasePreparedQuery

**Purpose:** BasePreparedQuery component

**File:** `BasePreparedQuery.php`

**Architectural Issues:** 1 violations detected

---

#### BaseResource

**Purpose:** BaseResource component

**File:** `BaseResource.php`

**Architectural Issues:** 1 violations detected

---

#### BaseResult

**Purpose:** BaseResult component

**File:** `BaseResult.php`

**Architectural Issues:** 1 violations detected

---

#### BaseService

**Purpose:** Service for Base

**File:** `BaseService.php`

**Architectural Issues:** 1 violations detected

---

#### BaseUtils

**Purpose:** BaseUtils component

**File:** `BaseUtils.php`

**Architectural Issues:** 1 violations detected

---

#### BinaryPlugin

**Purpose:** BinaryPlugin component

**File:** `BinaryPlugin.php`

**Architectural Issues:** 2 violations detected

---

#### BinaryRepresentation

**Purpose:** BinaryRepresentation component

**File:** `BinaryRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### BlacklistPlugin

**Purpose:** BlacklistPlugin component

**File:** `BlacklistPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### BooleanCast

**Purpose:** BooleanCast component

**File:** `BooleanCast.php`

**Architectural Issues:** 2 violations detected

---

#### Boot

**Purpose:** Boot component

**File:** `Boot.php`

**Architectural Issues:** 1 violations detected

---

#### Builder

**Purpose:** Builder component

**File:** `Builder.php`

**Architectural Issues:** 5 violations detected

---

#### CLI

**Purpose:** CLI component

**File:** `CLI.php`

**Architectural Issues:** 2 violations detected

---

#### CLIException

**Purpose:** CLIException component

**File:** `CLIException.php`

**Architectural Issues:** 1 violations detected

---

#### CLIRequest

**Purpose:** CLIRequest component

**File:** `CLIRequest.php`

**Architectural Issues:** 1 violations detected

---

#### CSRF

**Purpose:** CSRF component

**File:** `CSRF.php`

**Architectural Issues:** 1 violations detected

---

#### CSVCast

**Purpose:** CSVCast component

**File:** `CSVCast.php`

**Architectural Issues:** 2 violations detected

---

#### CURLRequest

**Purpose:** CURLRequest component

**File:** `CURLRequest.php`

**Architectural Issues:** 1 violations detected

---

#### Cache

**Purpose:** Cache component

**File:** `Cache.php`

**Architectural Issues:** 1 violations detected

---

#### CacheException

**Purpose:** CacheException component

**File:** `CacheException.php`

**Architectural Issues:** 1 violations detected

---

#### CacheFactory

**Purpose:** CacheFactory component

**File:** `CacheFactory.php`

**Architectural Issues:** 1 violations detected

---

#### CacheInterface

**Purpose:** CacheInterface component

**File:** `CacheInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CallFinder

**Purpose:** CallFinder component

**File:** `CallFinder.php`

**Architectural Issues:** 1 violations detected

---

#### CallableDefinitionPlugin

**Purpose:** CallableDefinitionPlugin component

**File:** `CallableDefinitionPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### CallableDefinitionRepresentation

**Purpose:** CallableDefinitionRepresentation component

**File:** `CallableDefinitionRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### CallablePlugin

**Purpose:** CallablePlugin component

**File:** `CallablePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Cast

**Purpose:** Cast component

**File:** `Cast.php`

**Architectural Issues:** 1 violations detected

---

#### CastException

**Purpose:** CastException component

**File:** `CastException.php`

**Architectural Issues:** 2 violations detected

---

#### CastInterface

**Purpose:** CastInterface component

**File:** `CastInterface.php`

**Architectural Issues:** 2 violations detected

---

#### Cell

**Purpose:** Cell component

**File:** `Cell.php`

**Architectural Issues:** 2 violations detected

---

#### CellGenerator

**Purpose:** CellGenerator component

**File:** `CellGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### CheckPhpIni

**Purpose:** CheckPhpIni component

**File:** `CheckPhpIni.php`

**Architectural Issues:** 1 violations detected

---

#### ChromeLoggerHandler

**Purpose:** Handles requests for ChromeLogger

**File:** `ChromeLoggerHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ClassConstContext

**Purpose:** ClassConstContext component

**File:** `ClassConstContext.php`

**Architectural Issues:** 1 violations detected

---

#### ClassDeclaredContext

**Purpose:** ClassDeclaredContext component

**File:** `ClassDeclaredContext.php`

**Architectural Issues:** 1 violations detected

---

#### ClassHooksPlugin

**Purpose:** ClassHooksPlugin component

**File:** `ClassHooksPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ClassMethodsPlugin

**Purpose:** ClassMethodsPlugin component

**File:** `ClassMethodsPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ClassOwnedContext

**Purpose:** ClassOwnedContext component

**File:** `ClassOwnedContext.php`

**Architectural Issues:** 1 violations detected

---

#### ClassStaticsPlugin

**Purpose:** ClassStaticsPlugin component

**File:** `ClassStaticsPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ClassStringsPlugin

**Purpose:** ClassStringsPlugin component

**File:** `ClassStringsPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ClearCache

**Purpose:** ClearCache component

**File:** `ClearCache.php`

**Architectural Issues:** 1 violations detected

---

#### ClearDebugbar

**Purpose:** ClearDebugbar component

**File:** `ClearDebugbar.php`

**Architectural Issues:** 1 violations detected

---

#### ClearLogs

**Purpose:** ClearLogs component

**File:** `ClearLogs.php`

**Architectural Issues:** 1 violations detected

---

#### CliRenderer

**Purpose:** CliRenderer component

**File:** `CliRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### CloneableCookieInterface

**Purpose:** CloneableCookieInterface component

**File:** `CloneableCookieInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ClosedResourceValue

**Purpose:** ClosedResourceValue component

**File:** `ClosedResourceValue.php`

**Architectural Issues:** 1 violations detected

---

#### ClosurePlugin

**Purpose:** ClosurePlugin component

**File:** `ClosurePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ClosureValue

**Purpose:** ClosureValue component

**File:** `ClosureValue.php`

**Architectural Issues:** 1 violations detected

---

#### CodeIgniter

**Purpose:** CodeIgniter component

**File:** `CodeIgniter.php`

**Architectural Issues:** 1 violations detected

---

#### ColorPlugin

**Purpose:** ColorPlugin component

**File:** `ColorPlugin.php`

**Architectural Issues:** 2 violations detected

---

#### ColorRepresentation

**Purpose:** ColorRepresentation component

**File:** `ColorRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### ColorValue

**Purpose:** ColorValue component

**File:** `ColorValue.php`

**Architectural Issues:** 1 violations detected

---

#### CommandGenerator

**Purpose:** CommandGenerator component

**File:** `CommandGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### Commands

**Purpose:** Commands component

**File:** `Commands.php`

**Architectural Issues:** 1 violations detected

---

#### Common

**Purpose:** Common component

**File:** `Common.php`

**Architectural Issues:** 1 violations detected

---

#### ComposerScripts

**Purpose:** ComposerScripts component

**File:** `ComposerScripts.php`

**Architectural Issues:** 1 violations detected

---

#### ConditionalTrait

**Purpose:** ConditionalTrait component

**File:** `ConditionalTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Config

**Purpose:** Config component

**File:** `Config.php`

**Architectural Issues:** 2 violations detected

---

#### ConfigCheck

**Purpose:** ConfigCheck component

**File:** `ConfigCheck.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigException

**Purpose:** ConfigException component

**File:** `ConfigException.php`

**Architectural Issues:** 1 violations detected

---

#### ConfigGenerator

**Purpose:** ConfigGenerator component

**File:** `ConfigGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### Connection

**Purpose:** Connection component

**File:** `Connection.php`

**Architectural Issues:** 5 violations detected

---

#### ConnectionInterface

**Purpose:** ConnectionInterface component

**File:** `ConnectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Console

**Purpose:** Console component

**File:** `Console.php`

**Architectural Issues:** 1 violations detected

---

#### ConstructablePluginInterface

**Purpose:** ConstructablePluginInterface component

**File:** `ConstructablePluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ConstructableRendererInterface

**Purpose:** ConstructableRendererInterface component

**File:** `ConstructableRendererInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ContainerRepresentation

**Purpose:** ContainerRepresentation component

**File:** `ContainerRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### ContentReplacer

**Purpose:** ContentReplacer component

**File:** `ContentReplacer.php`

**Architectural Issues:** 1 violations detected

---

#### ContentSecurityPolicy

**Purpose:** ContentSecurityPolicy component

**File:** `ContentSecurityPolicy.php`

**Architectural Issues:** 1 violations detected

---

#### ContextInterface

**Purpose:** ContextInterface component

**File:** `ContextInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Controller

**Purpose:** Controls  operations

**File:** `Controller.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerFinder

**Purpose:** Controls Finder operations

**File:** `ControllerFinder.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerGenerator

**Purpose:** Controls Generator operations

**File:** `ControllerGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### ControllerMethodReader

**Purpose:** Controls MethodReader operations

**File:** `ControllerMethodReader.php`

**Architectural Issues:** 2 violations detected

---

#### Cookie

**Purpose:** Cookie component

**File:** `Cookie.php`

**Architectural Issues:** 2 violations detected

---

#### CookieException

**Purpose:** CookieException component

**File:** `CookieException.php`

**Architectural Issues:** 1 violations detected

---

#### CookieInterface

**Purpose:** CookieInterface component

**File:** `CookieInterface.php`

**Architectural Issues:** 1 violations detected

---

#### CookieStore

**Purpose:** CookieStore component

**File:** `CookieStore.php`

**Architectural Issues:** 1 violations detected

---

#### Core

**Purpose:** Core component

**File:** `Core.php`

**Architectural Issues:** 1 violations detected

---

#### Cors

**Purpose:** Cors component

**File:** `Cors.php`

**Architectural Issues:** 2 violations detected

---

#### CreateDatabase

**Purpose:** CreateDatabase component

**File:** `CreateDatabase.php`

**Architectural Issues:** 1 violations detected

---

#### CreditCardRules

**Purpose:** CreditCardRules component

**File:** `CreditCardRules.php`

**Architectural Issues:** 2 violations detected

---

#### CriticalError

**Purpose:** CriticalError component

**File:** `CriticalError.php`

**Architectural Issues:** 1 violations detected

---

#### DataCaster

**Purpose:** DataCaster component

**File:** `DataCaster.php`

**Architectural Issues:** 1 violations detected

---

#### DataConverter

**Purpose:** DataConverter component

**File:** `DataConverter.php`

**Architectural Issues:** 1 violations detected

---

#### DataException

**Purpose:** DataException component

**File:** `DataException.php`

**Architectural Issues:** 1 violations detected

---

#### Database

**Purpose:** Database component

**File:** `Database.php`

**Architectural Issues:** 3 violations detected

---

#### DatabaseException

**Purpose:** DatabaseException component

**File:** `DatabaseException.php`

**Architectural Issues:** 1 violations detected

---

#### DatabaseHandler

**Purpose:** Handles requests for Database

**File:** `DatabaseHandler.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimePlugin

**Purpose:** DateTimePlugin component

**File:** `DateTimePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### DateTimeValue

**Purpose:** DateTimeValue component

**File:** `DateTimeValue.php`

**Architectural Issues:** 1 violations detected

---

#### DatetimeCast

**Purpose:** DatetimeCast component

**File:** `DatetimeCast.php`

**Architectural Issues:** 2 violations detected

---

#### DebugToolbar

**Purpose:** DebugToolbar component

**File:** `DebugToolbar.php`

**Architectural Issues:** 1 violations detected

---

#### DebugTraceableTrait

**Purpose:** DebugTraceableTrait component

**File:** `DebugTraceableTrait.php`

**Architectural Issues:** 1 violations detected

---

#### DeclaredCallableBag

**Purpose:** DeclaredCallableBag component

**File:** `DeclaredCallableBag.php`

**Architectural Issues:** 1 violations detected

---

#### DefinedRouteCollector

**Purpose:** DefinedRouteCollector component

**File:** `DefinedRouteCollector.php`

**Architectural Issues:** 1 violations detected

---

#### DirectoryHasher

**Purpose:** DirectoryHasher component

**File:** `DirectoryHasher.php`

**Architectural Issues:** 1 violations detected

---

#### DomNodeListValue

**Purpose:** DomNodeListValue component

**File:** `DomNodeListValue.php`

**Architectural Issues:** 1 violations detected

---

#### DomNodeValue

**Purpose:** DomNodeValue component

**File:** `DomNodeValue.php`

**Architectural Issues:** 1 violations detected

---

#### DomPlugin

**Purpose:** DomPlugin component

**File:** `DomPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### DotArrayFilter

**Purpose:** DotArrayFilter component

**File:** `DotArrayFilter.php`

**Architectural Issues:** 1 violations detected

---

#### DotEnv

**Purpose:** DotEnv component

**File:** `DotEnv.php`

**Architectural Issues:** 1 violations detected

---

#### DoubleAccessMemberContext

**Purpose:** DoubleAccessMemberContext component

**File:** `DoubleAccessMemberContext.php`

**Architectural Issues:** 1 violations detected

---

#### DownloadException

**Purpose:** DownloadException component

**File:** `DownloadException.php`

**Architectural Issues:** 1 violations detected

---

#### DownloadResponse

**Purpose:** DownloadResponse component

**File:** `DownloadResponse.php`

**Architectural Issues:** 1 violations detected

---

#### DummyHandler

**Purpose:** Handles requests for Dummy

**File:** `DummyHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Email

**Purpose:** Email component

**File:** `Email.php`

**Architectural Issues:** 2 violations detected

---

#### EncrypterInterface

**Purpose:** EncrypterInterface component

**File:** `EncrypterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Encryption

**Purpose:** Encryption component

**File:** `Encryption.php`

**Architectural Issues:** 2 violations detected

---

#### EncryptionException

**Purpose:** EncryptionException component

**File:** `EncryptionException.php`

**Architectural Issues:** 1 violations detected

---

#### Entity

**Purpose:** Entity component

**File:** `Entity.php`

**Architectural Issues:** 1 violations detected

---

#### EntityGenerator

**Purpose:** EntityGenerator component

**File:** `EntityGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### EnumPlugin

**Purpose:** EnumPlugin component

**File:** `EnumPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### EnumValue

**Purpose:** EnumValue component

**File:** `EnumValue.php`

**Architectural Issues:** 1 violations detected

---

#### Environment

**Purpose:** Environment component

**File:** `Environment.php`

**Architectural Issues:** 1 violations detected

---

#### ErrorlogHandler

**Purpose:** Handles requests for Errorlog

**File:** `ErrorlogHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Errors

**Purpose:** Errors component

**File:** `Errors.php`

**Architectural Issues:** 1 violations detected

---

#### Escaper

**Purpose:** Escaper component

**File:** `Escaper.php`

**Architectural Issues:** 1 violations detected

---

#### EscaperInterface

**Purpose:** EscaperInterface component

**File:** `EscaperInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Events

**Purpose:** Events component

**File:** `Events.php`

**Architectural Issues:** 2 violations detected

---

#### ExceptionHandler

**Purpose:** Handles requests for Exception

**File:** `ExceptionHandler.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionHandlerInterface

**Purpose:** Handles requests for ExceptionInterface

**File:** `ExceptionHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ExceptionInterface

**Purpose:** ExceptionInterface component

**File:** `ExceptionInterface.php`

**Architectural Issues:** 6 violations detected

---

#### Exceptions

**Purpose:** Exceptions component

**File:** `Exceptions.php`

**Architectural Issues:** 1 violations detected

---

#### Fabricator

**Purpose:** Fabricator component

**File:** `Fabricator.php`

**Architectural Issues:** 1 violations detected

---

#### FacadeInterface

**Purpose:** FacadeInterface component

**File:** `FacadeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Factories

**Purpose:** Factories component

**File:** `Factories.php`

**Architectural Issues:** 1 violations detected

---

#### FactoriesCache

**Purpose:** FactoriesCache component

**File:** `FactoriesCache.php`

**Architectural Issues:** 1 violations detected

---

#### Factory

**Purpose:** Factory component

**File:** `Factory.php`

**Architectural Issues:** 1 violations detected

---

#### File

**Purpose:** File component

**File:** `File.php`

**Architectural Issues:** 1 violations detected

---

#### FileCollection

**Purpose:** FileCollection component

**File:** `FileCollection.php`

**Architectural Issues:** 2 violations detected

---

#### FileException

**Purpose:** FileException component

**File:** `FileException.php`

**Architectural Issues:** 1 violations detected

---

#### FileHandler

**Purpose:** Handles requests for File

**File:** `FileHandler.php`

**Architectural Issues:** 3 violations detected

---

#### FileLocator

**Purpose:** FileLocator component

**File:** `FileLocator.php`

**Architectural Issues:** 1 violations detected

---

#### FileLocatorCached

**Purpose:** FileLocatorCached component

**File:** `FileLocatorCached.php`

**Architectural Issues:** 1 violations detected

---

#### FileLocatorInterface

**Purpose:** FileLocatorInterface component

**File:** `FileLocatorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FileNotFoundException

**Purpose:** FileNotFoundException component

**File:** `FileNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### FileRules

**Purpose:** FileRules component

**File:** `FileRules.php`

**Architectural Issues:** 2 violations detected

---

#### FileSizeUnit

**Purpose:** FileSizeUnit component

**File:** `FileSizeUnit.php`

**Architectural Issues:** 1 violations detected

---

#### FileVarExportHandler

**Purpose:** Handles requests for FileVarExport

**File:** `FileVarExportHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Files

**Purpose:** Files component

**File:** `Files.php`

**Architectural Issues:** 2 violations detected

---

#### FilterCheck

**Purpose:** FilterCheck component

**File:** `FilterCheck.php`

**Architectural Issues:** 1 violations detected

---

#### FilterCollector

**Purpose:** FilterCollector component

**File:** `FilterCollector.php`

**Architectural Issues:** 1 violations detected

---

#### FilterException

**Purpose:** FilterException component

**File:** `FilterException.php`

**Architectural Issues:** 1 violations detected

---

#### FilterFinder

**Purpose:** FilterFinder component

**File:** `FilterFinder.php`

**Architectural Issues:** 1 violations detected

---

#### FilterGenerator

**Purpose:** FilterGenerator component

**File:** `FilterGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### FilterInterface

**Purpose:** FilterInterface component

**File:** `FilterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Filters

**Purpose:** Filters component

**File:** `Filters.php`

**Architectural Issues:** 4 violations detected

---

#### FixedWidthValue

**Purpose:** FixedWidthValue component

**File:** `FixedWidthValue.php`

**Architectural Issues:** 1 violations detected

---

#### FloatCast

**Purpose:** FloatCast component

**File:** `FloatCast.php`

**Architectural Issues:** 2 violations detected

---

#### ForceHTTPS

**Purpose:** ForceHTTPS component

**File:** `ForceHTTPS.php`

**Architectural Issues:** 1 violations detected

---

#### ForeignCharacters

**Purpose:** ForeignCharacters component

**File:** `ForeignCharacters.php`

**Architectural Issues:** 1 violations detected

---

#### Forge

**Purpose:** Forge component

**File:** `Forge.php`

**Architectural Issues:** 6 violations detected

---

#### Format

**Purpose:** Form handling for at

**File:** `Format.php`

**Architectural Issues:** 2 violations detected

---

#### FormatException

**Purpose:** Form handling for atException

**File:** `FormatException.php`

**Architectural Issues:** 1 violations detected

---

#### FormatRules

**Purpose:** Form handling for atRules

**File:** `FormatRules.php`

**Architectural Issues:** 2 violations detected

---

#### FormatterInterface

**Purpose:** Form handling for atterInterface

**File:** `FormatterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### FrameworkException

**Purpose:** FrameworkException component

**File:** `FrameworkException.php`

**Architectural Issues:** 1 violations detected

---

#### FsPathPlugin

**Purpose:** FsPathPlugin component

**File:** `FsPathPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### FunctionValue

**Purpose:** FunctionValue component

**File:** `FunctionValue.php`

**Architectural Issues:** 1 violations detected

---

#### GDHandler

**Purpose:** Handles requests for GD

**File:** `GDHandler.php`

**Architectural Issues:** 1 violations detected

---

#### GenerateKey

**Purpose:** GenerateKey component

**File:** `GenerateKey.php`

**Architectural Issues:** 1 violations detected

---

#### GeneratorTrait

**Purpose:** GeneratorTrait component

**File:** `GeneratorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### HTTP

**Purpose:** HTTP component

**File:** `HTTP.php`

**Architectural Issues:** 1 violations detected

---

#### HTTPException

**Purpose:** HTTPException component

**File:** `HTTPException.php`

**Architectural Issues:** 1 violations detected

---

#### HTTPExceptionInterface

**Purpose:** HTTPExceptionInterface component

**File:** `HTTPExceptionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HandlerInterface

**Purpose:** Handles requests for Interface

**File:** `HandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### HasExitCodeInterface

**Purpose:** HasExitCodeInterface component

**File:** `HasExitCodeInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Header

**Purpose:** Header component

**File:** `Header.php`

**Architectural Issues:** 1 violations detected

---

#### Help

**Purpose:** Help component

**File:** `Help.php`

**Architectural Issues:** 1 violations detected

---

#### History

**Purpose:** History component

**File:** `History.php`

**Architectural Issues:** 1 violations detected

---

#### Honeypot

**Purpose:** Honeypot component

**File:** `Honeypot.php`

**Architectural Issues:** 3 violations detected

---

#### HoneypotException

**Purpose:** HoneypotException component

**File:** `HoneypotException.php`

**Architectural Issues:** 1 violations detected

---

#### HotReloader

**Purpose:** HotReloader component

**File:** `HotReloader.php`

**Architectural Issues:** 1 violations detected

---

#### HtmlPlugin

**Purpose:** HtmlPlugin component

**File:** `HtmlPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### I18nException

**Purpose:** I18nException component

**File:** `I18nException.php`

**Architectural Issues:** 1 violations detected

---

#### Image

**Purpose:** Image component

**File:** `Image.php`

**Architectural Issues:** 1 violations detected

---

#### ImageException

**Purpose:** ImageException component

**File:** `ImageException.php`

**Architectural Issues:** 1 violations detected

---

#### ImageHandlerInterface

**Purpose:** Handles requests for ImageInterface

**File:** `ImageHandlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ImageMagickHandler

**Purpose:** Handles requests for ImageMagick

**File:** `ImageMagickHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Images

**Purpose:** Images component

**File:** `Images.php`

**Architectural Issues:** 1 violations detected

---

#### IncomingRequest

**Purpose:** IncomingRequest component

**File:** `IncomingRequest.php`

**Architectural Issues:** 1 violations detected

---

#### InfoCache

**Purpose:** InfoCache component

**File:** `InfoCache.php`

**Architectural Issues:** 1 violations detected

---

#### InputOutput

**Purpose:** InputOutput component

**File:** `InputOutput.php`

**Architectural Issues:** 1 violations detected

---

#### InstanceValue

**Purpose:** InstanceValue component

**File:** `InstanceValue.php`

**Architectural Issues:** 1 violations detected

---

#### IntBoolCast

**Purpose:** IntBoolCast component

**File:** `IntBoolCast.php`

**Architectural Issues:** 2 violations detected

---

#### IntegerCast

**Purpose:** IntegerCast component

**File:** `IntegerCast.php`

**Architectural Issues:** 2 violations detected

---

#### InvalidArgumentException

**Purpose:** InvalidArgumentException component

**File:** `InvalidArgumentException.php`

**Architectural Issues:** 3 violations detected

---

#### InvalidChars

**Purpose:** InvalidChars component

**File:** `InvalidChars.php`

**Architectural Issues:** 1 violations detected

---

#### Iterator

**Purpose:** Iterator component

**File:** `Iterator.php`

**Architectural Issues:** 1 violations detected

---

#### IteratorFilter

**Purpose:** IteratorFilter component

**File:** `IteratorFilter.php`

**Architectural Issues:** 1 violations detected

---

#### IteratorPlugin

**Purpose:** IteratorPlugin component

**File:** `IteratorPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### JSONFormatter

**Purpose:** Form handling for JSONatter

**File:** `JSONFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### JsonCast

**Purpose:** JsonCast component

**File:** `JsonCast.php`

**Architectural Issues:** 2 violations detected

---

#### JsonPlugin

**Purpose:** JsonPlugin component

**File:** `JsonPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Kint

**Purpose:** Kint component

**File:** `Kint.php`

**Architectural Issues:** 1 violations detected

---

#### Language

**Purpose:** Language component

**File:** `Language.php`

**Architectural Issues:** 2 violations detected

---

#### ListCommands

**Purpose:** ListCommands component

**File:** `ListCommands.php`

**Architectural Issues:** 1 violations detected

---

#### LocalizationFinder

**Purpose:** LocalizationFinder component

**File:** `LocalizationFinder.php`

**Architectural Issues:** 1 violations detected

---

#### LocalizationSync

**Purpose:** LocalizationSync component

**File:** `LocalizationSync.php`

**Architectural Issues:** 1 violations detected

---

#### LockPlugin

**Purpose:** LockPlugin component

**File:** `LockPlugin.php`

**Architectural Issues:** 2 violations detected

---

#### Log

**Purpose:** Log component

**File:** `Log.php`

**Architectural Issues:** 1 violations detected

---

#### LogException

**Purpose:** LogException component

**File:** `LogException.php`

**Architectural Issues:** 1 violations detected

---

#### LogLevel

**Purpose:** LogLevel component

**File:** `LogLevel.php`

**Architectural Issues:** 1 violations detected

---

#### Logger

**Purpose:** Logger component

**File:** `Logger.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerAwareInterface

**Purpose:** LoggerAwareInterface component

**File:** `LoggerAwareInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerAwareTrait

**Purpose:** LoggerAwareTrait component

**File:** `LoggerAwareTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerInterface

**Purpose:** LoggerInterface component

**File:** `LoggerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### LoggerTrait

**Purpose:** LoggerTrait component

**File:** `LoggerTrait.php`

**Architectural Issues:** 1 violations detected

---

#### LogicException

**Purpose:** LogicException component

**File:** `LogicException.php`

**Architectural Issues:** 1 violations detected

---

#### Logs

**Purpose:** Logs component

**File:** `Logs.php`

**Architectural Issues:** 1 violations detected

---

#### MemcachedHandler

**Purpose:** Handles requests for Memcached

**File:** `MemcachedHandler.php`

**Architectural Issues:** 2 violations detected

---

#### Message

**Purpose:** Message component

**File:** `Message.php`

**Architectural Issues:** 1 violations detected

---

#### MessageInterface

**Purpose:** MessageInterface component

**File:** `MessageInterface.php`

**Architectural Issues:** 1 violations detected

---

#### MessageTrait

**Purpose:** MessageTrait component

**File:** `MessageTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Method

**Purpose:** Method component

**File:** `Method.php`

**Architectural Issues:** 1 violations detected

---

#### MethodContext

**Purpose:** MethodContext component

**File:** `MethodContext.php`

**Architectural Issues:** 1 violations detected

---

#### MethodNotFoundException

**Purpose:** MethodNotFoundException component

**File:** `MethodNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### MethodValue

**Purpose:** MethodValue component

**File:** `MethodValue.php`

**Architectural Issues:** 1 violations detected

---

#### MicrotimePlugin

**Purpose:** MicrotimePlugin component

**File:** `MicrotimePlugin.php`

**Architectural Issues:** 3 violations detected

---

#### MicrotimeRepresentation

**Purpose:** MicrotimeRepresentation component

**File:** `MicrotimeRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### MicrotimeValue

**Purpose:** MicrotimeValue component

**File:** `MicrotimeValue.php`

**Architectural Issues:** 1 violations detected

---

#### Migrate

**Purpose:** Migrate component

**File:** `Migrate.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateRefresh

**Purpose:** MigrateRefresh component

**File:** `MigrateRefresh.php`

**Architectural Issues:** 1 violations detected

---

#### MigrateRollback

**Purpose:** MigrateRollback component

**File:** `MigrateRollback.php`

**Architectural Issues:** 1 violations detected

---

#### Migration

**Purpose:** Migration component

**File:** `Migration.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationGenerator

**Purpose:** MigrationGenerator component

**File:** `MigrationGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### MigrationRunner

**Purpose:** MigrationRunner component

**File:** `MigrationRunner.php`

**Architectural Issues:** 1 violations detected

---

#### Migrations

**Purpose:** Migrations component

**File:** `Migrations.php`

**Architectural Issues:** 1 violations detected

---

#### Model

**Purpose:** Model component

**File:** `Model.php`

**Architectural Issues:** 1 violations detected

---

#### ModelException

**Purpose:** ModelException component

**File:** `ModelException.php`

**Architectural Issues:** 1 violations detected

---

#### ModelGenerator

**Purpose:** ModelGenerator component

**File:** `ModelGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### Modules

**Purpose:** Modules component

**File:** `Modules.php`

**Architectural Issues:** 1 violations detected

---

#### MySQLiHandler

**Purpose:** Handles requests for MySQLi

**File:** `MySQLiHandler.php`

**Architectural Issues:** 1 violations detected

---

#### MysqliPlugin

**Purpose:** MysqliPlugin component

**File:** `MysqliPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Namespaces

**Purpose:** Namespaces component

**File:** `Namespaces.php`

**Architectural Issues:** 1 violations detected

---

#### Negotiate

**Purpose:** Negotiate component

**File:** `Negotiate.php`

**Architectural Issues:** 1 violations detected

---

#### NullLogger

**Purpose:** NullLogger component

**File:** `NullLogger.php`

**Architectural Issues:** 1 violations detected

---

#### Number

**Purpose:** Number component

**File:** `Number.php`

**Architectural Issues:** 1 violations detected

---

#### ObjectCast

**Purpose:** ObjectCast component

**File:** `ObjectCast.php`

**Architectural Issues:** 1 violations detected

---

#### OpenSSLHandler

**Purpose:** Handles requests for OpenSSL

**File:** `OpenSSLHandler.php`

**Architectural Issues:** 1 violations detected

---

#### Optimize

**Purpose:** Optimize component

**File:** `Optimize.php`

**Architectural Issues:** 1 violations detected

---

#### OutgoingRequest

**Purpose:** OutgoingRequest component

**File:** `OutgoingRequest.php`

**Architectural Issues:** 1 violations detected

---

#### OutgoingRequestInterface

**Purpose:** OutgoingRequestInterface component

**File:** `OutgoingRequestInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PageCache

**Purpose:** PageCache component

**File:** `PageCache.php`

**Architectural Issues:** 1 violations detected

---

#### PageNotFoundException

**Purpose:** PageNotFoundException component

**File:** `PageNotFoundException.php`

**Architectural Issues:** 1 violations detected

---

#### Pager

**Purpose:** Pager component

**File:** `Pager.php`

**Architectural Issues:** 2 violations detected

---

#### PagerException

**Purpose:** PagerException component

**File:** `PagerException.php`

**Architectural Issues:** 1 violations detected

---

#### PagerInterface

**Purpose:** PagerInterface component

**File:** `PagerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PagerRenderer

**Purpose:** PagerRenderer component

**File:** `PagerRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### ParameterBag

**Purpose:** ParameterBag component

**File:** `ParameterBag.php`

**Architectural Issues:** 1 violations detected

---

#### ParameterHoldingTrait

**Purpose:** ParameterHoldingTrait component

**File:** `ParameterHoldingTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Parser

**Purpose:** Parser component

**File:** `Parser.php`

**Architectural Issues:** 2 violations detected

---

#### PerformanceMetrics

**Purpose:** PerformanceMetrics component

**File:** `PerformanceMetrics.php`

**Architectural Issues:** 1 violations detected

---

#### PhpIniCheck

**Purpose:** PhpIniCheck component

**File:** `PhpIniCheck.php`

**Architectural Issues:** 1 violations detected

---

#### PlainRenderer

**Purpose:** PlainRenderer component

**File:** `PlainRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### PluginBeginInterface

**Purpose:** PluginBeginInterface component

**File:** `PluginBeginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginCompleteInterface

**Purpose:** PluginCompleteInterface component

**File:** `PluginCompleteInterface.php`

**Architectural Issues:** 1 violations detected

---

#### PluginInterface

**Purpose:** PluginInterface component

**File:** `PluginInterface.php`

**Architectural Issues:** 3 violations detected

---

#### Plugins

**Purpose:** Plugins component

**File:** `Plugins.php`

**Architectural Issues:** 1 violations detected

---

#### PostgreHandler

**Purpose:** Handles requests for Postgre

**File:** `PostgreHandler.php`

**Architectural Issues:** 1 violations detected

---

#### PredisHandler

**Purpose:** Handles requests for Predis

**File:** `PredisHandler.php`

**Architectural Issues:** 1 violations detected

---

#### PreparedQuery

**Purpose:** PreparedQuery component

**File:** `PreparedQuery.php`

**Architectural Issues:** 5 violations detected

---

#### PreparedQueryInterface

**Purpose:** PreparedQueryInterface component

**File:** `PreparedQueryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ProfilePlugin

**Purpose:** ProfilePlugin component

**File:** `ProfilePlugin.php`

**Architectural Issues:** 2 violations detected

---

#### ProfileRepresentation

**Purpose:** ProfileRepresentation component

**File:** `ProfileRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### PropertiesTrait

**Purpose:** PropertiesTrait component

**File:** `PropertiesTrait.php`

**Architectural Issues:** 1 violations detected

---

#### PropertyContext

**Purpose:** PropertyContext component

**File:** `PropertyContext.php`

**Architectural Issues:** 1 violations detected

---

#### ProxyPlugin

**Purpose:** ProxyPlugin component

**File:** `ProxyPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Publish

**Purpose:** Publish component

**File:** `Publish.php`

**Architectural Issues:** 1 violations detected

---

#### Publisher

**Purpose:** Publisher component

**File:** `Publisher.php`

**Architectural Issues:** 3 violations detected

---

#### PublisherException

**Purpose:** PublisherException component

**File:** `PublisherException.php`

**Architectural Issues:** 1 violations detected

---

#### Query

**Purpose:** Query component

**File:** `Query.php`

**Architectural Issues:** 1 violations detected

---

#### QueryInterface

**Purpose:** QueryInterface component

**File:** `QueryInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RESTful

**Purpose:** RESTful component

**File:** `RESTful.php`

**Architectural Issues:** 1 violations detected

---

#### RawSql

**Purpose:** RawSql component

**File:** `RawSql.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectException

**Purpose:** RedirectException component

**File:** `RedirectException.php`

**Architectural Issues:** 1 violations detected

---

#### RedirectResponse

**Purpose:** RedirectResponse component

**File:** `RedirectResponse.php`

**Architectural Issues:** 1 violations detected

---

#### RedisHandler

**Purpose:** Handles requests for Redis

**File:** `RedisHandler.php`

**Architectural Issues:** 2 violations detected

---

#### RendererInterface

**Purpose:** RendererInterface component

**File:** `RendererInterface.php`

**Architectural Issues:** 2 violations detected

---

#### RepresentationInterface

**Purpose:** RepresentationInterface component

**File:** `RepresentationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Request

**Purpose:** Request component

**File:** `Request.php`

**Architectural Issues:** 1 violations detected

---

#### RequestInterface

**Purpose:** RequestInterface component

**File:** `RequestInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RequestTrait

**Purpose:** RequestTrait component

**File:** `RequestTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceController

**Purpose:** Controls Resource operations

**File:** `ResourceController.php`

**Architectural Issues:** 1 violations detected

---

#### ResourcePresenter

**Purpose:** ResourcePresenter component

**File:** `ResourcePresenter.php`

**Architectural Issues:** 1 violations detected

---

#### ResourceValue

**Purpose:** ResourceValue component

**File:** `ResourceValue.php`

**Architectural Issues:** 1 violations detected

---

#### ResponsableInterface

**Purpose:** ResponsableInterface component

**File:** `ResponsableInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Response

**Purpose:** Response component

**File:** `Response.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseCache

**Purpose:** ResponseCache component

**File:** `ResponseCache.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseInterface

**Purpose:** ResponseInterface component

**File:** `ResponseInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ResponseTrait

**Purpose:** ResponseTrait component

**File:** `ResponseTrait.php`

**Architectural Issues:** 2 violations detected

---

#### Result

**Purpose:** Result component

**File:** `Result.php`

**Architectural Issues:** 5 violations detected

---

#### ResultInterface

**Purpose:** ResultInterface component

**File:** `ResultInterface.php`

**Architectural Issues:** 1 violations detected

---

#### RichRenderer

**Purpose:** RichRenderer component

**File:** `RichRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### RouteCollection

**Purpose:** RouteCollection component

**File:** `RouteCollection.php`

**Architectural Issues:** 1 violations detected

---

#### RouteCollectionInterface

**Purpose:** RouteCollectionInterface component

**File:** `RouteCollectionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Router

**Purpose:** Router component

**File:** `Router.php`

**Architectural Issues:** 2 violations detected

---

#### RouterException

**Purpose:** RouterException component

**File:** `RouterException.php`

**Architectural Issues:** 1 violations detected

---

#### RouterInterface

**Purpose:** RouterInterface component

**File:** `RouterInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Routes

**Purpose:** Routes component

**File:** `Routes.php`

**Architectural Issues:** 2 violations detected

---

#### Routing

**Purpose:** Routing component

**File:** `Routing.php`

**Architectural Issues:** 1 violations detected

---

#### Rules

**Purpose:** Rules component

**File:** `Rules.php`

**Architectural Issues:** 2 violations detected

---

#### RuntimeException

**Purpose:** RuntimeException component

**File:** `RuntimeException.php`

**Architectural Issues:** 2 violations detected

---

#### SampleURIGenerator

**Purpose:** SampleURIGenerator component

**File:** `SampleURIGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### ScaffoldGenerator

**Purpose:** ScaffoldGenerator component

**File:** `ScaffoldGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### SecureHeaders

**Purpose:** SecureHeaders component

**File:** `SecureHeaders.php`

**Architectural Issues:** 1 violations detected

---

#### Security

**Purpose:** Security component

**File:** `Security.php`

**Architectural Issues:** 2 violations detected

---

#### SecurityException

**Purpose:** SecurityException component

**File:** `SecurityException.php`

**Architectural Issues:** 1 violations detected

---

#### SecurityInterface

**Purpose:** SecurityInterface component

**File:** `SecurityInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Seed

**Purpose:** Seed component

**File:** `Seed.php`

**Architectural Issues:** 1 violations detected

---

#### Seeder

**Purpose:** Seeder component

**File:** `Seeder.php`

**Architectural Issues:** 1 violations detected

---

#### SeederGenerator

**Purpose:** SeederGenerator component

**File:** `SeederGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### SerializePlugin

**Purpose:** SerializePlugin component

**File:** `SerializePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Serve

**Purpose:** Serve component

**File:** `Serve.php`

**Architectural Issues:** 1 violations detected

---

#### Services

**Purpose:** Service for s

**File:** `Services.php`

**Architectural Issues:** 1 violations detected

---

#### Session

**Purpose:** Session component

**File:** `Session.php`

**Architectural Issues:** 2 violations detected

---

#### SessionException

**Purpose:** SessionException component

**File:** `SessionException.php`

**Architectural Issues:** 1 violations detected

---

#### SessionInterface

**Purpose:** SessionInterface component

**File:** `SessionInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ShowTableInfo

**Purpose:** ShowTableInfo component

**File:** `ShowTableInfo.php`

**Architectural Issues:** 1 violations detected

---

#### SimpleXMLElementPlugin

**Purpose:** SimpleXMLElementPlugin component

**File:** `SimpleXMLElementPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### SimpleXMLElementValue

**Purpose:** SimpleXMLElementValue component

**File:** `SimpleXMLElementValue.php`

**Architectural Issues:** 1 violations detected

---

#### SiteURI

**Purpose:** SiteURI component

**File:** `SiteURI.php`

**Architectural Issues:** 1 violations detected

---

#### SiteURIFactory

**Purpose:** SiteURIFactory component

**File:** `SiteURIFactory.php`

**Architectural Issues:** 1 violations detected

---

#### SodiumHandler

**Purpose:** Handles requests for Sodium

**File:** `SodiumHandler.php`

**Architectural Issues:** 1 violations detected

---

#### SourcePlugin

**Purpose:** SourcePlugin component

**File:** `SourcePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### SourceRepresentation

**Purpose:** SourceRepresentation component

**File:** `SourceRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### SplFileInfoPlugin

**Purpose:** SplFileInfoPlugin component

**File:** `SplFileInfoPlugin.php`

**Architectural Issues:** 2 violations detected

---

#### SplFileInfoRepresentation

**Purpose:** SplFileInfoRepresentation component

**File:** `SplFileInfoRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### SplFileInfoValue

**Purpose:** SplFileInfoValue component

**File:** `SplFileInfoValue.php`

**Architectural Issues:** 1 violations detected

---

#### StaticPropertyContext

**Purpose:** StaticPropertyContext component

**File:** `StaticPropertyContext.php`

**Architectural Issues:** 1 violations detected

---

#### StreamPlugin

**Purpose:** StreamPlugin component

**File:** `StreamPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### StreamValue

**Purpose:** StreamValue component

**File:** `StreamValue.php`

**Architectural Issues:** 1 violations detected

---

#### StringCast

**Purpose:** StringCast component

**File:** `StringCast.php`

**Architectural Issues:** 1 violations detected

---

#### StringRepresentation

**Purpose:** StringRepresentation component

**File:** `StringRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### StringValue

**Purpose:** StringValue component

**File:** `StringValue.php`

**Architectural Issues:** 1 violations detected

---

#### Superglobals

**Purpose:** Superglobals component

**File:** `Superglobals.php`

**Architectural Issues:** 1 violations detected

---

#### TabPluginInterface

**Purpose:** TabPluginInterface component

**File:** `TabPluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### Table

**Purpose:** Table component

**File:** `Table.php`

**Architectural Issues:** 2 violations detected

---

#### TableName

**Purpose:** TableName component

**File:** `TableName.php`

**Architectural Issues:** 1 violations detected

---

#### TablePlugin

**Purpose:** TablePlugin component

**File:** `TablePlugin.php`

**Architectural Issues:** 2 violations detected

---

#### TableRepresentation

**Purpose:** TableRepresentation component

**File:** `TableRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### TextRenderer

**Purpose:** TextRenderer component

**File:** `TextRenderer.php`

**Architectural Issues:** 1 violations detected

---

#### Throttler

**Purpose:** Throttler component

**File:** `Throttler.php`

**Architectural Issues:** 1 violations detected

---

#### ThrottlerInterface

**Purpose:** ThrottlerInterface component

**File:** `ThrottlerInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ThrowablePlugin

**Purpose:** ThrowablePlugin component

**File:** `ThrowablePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ThrowableValue

**Purpose:** ThrowableValue component

**File:** `ThrowableValue.php`

**Architectural Issues:** 1 violations detected

---

#### Time

**Purpose:** Time component

**File:** `Time.php`

**Architectural Issues:** 2 violations detected

---

#### TimeDifference

**Purpose:** TimeDifference component

**File:** `TimeDifference.php`

**Architectural Issues:** 1 violations detected

---

#### TimeLegacy

**Purpose:** TimeLegacy component

**File:** `TimeLegacy.php`

**Architectural Issues:** 1 violations detected

---

#### TimeTrait

**Purpose:** TimeTrait component

**File:** `TimeTrait.php`

**Architectural Issues:** 1 violations detected

---

#### Timer

**Purpose:** Timer component

**File:** `Timer.php`

**Architectural Issues:** 1 violations detected

---

#### Timers

**Purpose:** Timers component

**File:** `Timers.php`

**Architectural Issues:** 1 violations detected

---

#### TimestampCast

**Purpose:** TimestampCast component

**File:** `TimestampCast.php`

**Architectural Issues:** 2 violations detected

---

#### TimestampPlugin

**Purpose:** TimestampPlugin component

**File:** `TimestampPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### ToStringPlugin

**Purpose:** ToStringPlugin component

**File:** `ToStringPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### Toolbar

**Purpose:** Toolbar component

**File:** `Toolbar.php`

**Architectural Issues:** 1 violations detected

---

#### TraceFramePlugin

**Purpose:** TraceFramePlugin component

**File:** `TraceFramePlugin.php`

**Architectural Issues:** 1 violations detected

---

#### TraceFrameValue

**Purpose:** TraceFrameValue component

**File:** `TraceFrameValue.php`

**Architectural Issues:** 1 violations detected

---

#### TracePlugin

**Purpose:** TracePlugin component

**File:** `TracePlugin.php`

**Architectural Issues:** 2 violations detected

---

#### TraceValue

**Purpose:** TraceValue component

**File:** `TraceValue.php`

**Architectural Issues:** 1 violations detected

---

#### Typography

**Purpose:** Typography component

**File:** `Typography.php`

**Architectural Issues:** 1 violations detected

---

#### URI

**Purpose:** URI component

**File:** `URI.php`

**Architectural Issues:** 1 violations detected

---

#### URICast

**Purpose:** URICast component

**File:** `URICast.php`

**Architectural Issues:** 2 violations detected

---

#### UninitializedValue

**Purpose:** UninitializedValue component

**File:** `UninitializedValue.php`

**Architectural Issues:** 1 violations detected

---

#### UnknownValue

**Purpose:** UnknownValue component

**File:** `UnknownValue.php`

**Architectural Issues:** 1 violations detected

---

#### UploadedFile

**Purpose:** UploadedFile component

**File:** `UploadedFile.php`

**Architectural Issues:** 1 violations detected

---

#### UploadedFileInterface

**Purpose:** UploadedFileInterface component

**File:** `UploadedFileInterface.php`

**Architectural Issues:** 1 violations detected

---

#### UserAgent

**Purpose:** UserAgent component

**File:** `UserAgent.php`

**Architectural Issues:** 1 violations detected

---

#### Utils

**Purpose:** Utils component

**File:** `Utils.php`

**Architectural Issues:** 6 violations detected

---

#### Validation

**Purpose:** Validation component

**File:** `Validation.php`

**Architectural Issues:** 2 violations detected

---

#### ValidationException

**Purpose:** ValidationException component

**File:** `ValidationException.php`

**Architectural Issues:** 1 violations detected

---

#### ValidationGenerator

**Purpose:** ValidationGenerator component

**File:** `ValidationGenerator.php`

**Architectural Issues:** 1 violations detected

---

#### ValidationInterface

**Purpose:** ValidationInterface component

**File:** `ValidationInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ValuePluginInterface

**Purpose:** ValuePluginInterface component

**File:** `ValuePluginInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ValueRepresentation

**Purpose:** ValueRepresentation component

**File:** `ValueRepresentation.php`

**Architectural Issues:** 1 violations detected

---

#### View

**Purpose:** View component

**File:** `View.php`

**Architectural Issues:** 3 violations detected

---

#### ViewDecoratorInterface

**Purpose:** ViewDecoratorInterface component

**File:** `ViewDecoratorInterface.php`

**Architectural Issues:** 1 violations detected

---

#### ViewDecoratorTrait

**Purpose:** ViewDecoratorTrait component

**File:** `ViewDecoratorTrait.php`

**Architectural Issues:** 1 violations detected

---

#### ViewException

**Purpose:** ViewException component

**File:** `ViewException.php`

**Architectural Issues:** 1 violations detected

---

#### Views

**Purpose:** Views component

**File:** `Views.php`

**Architectural Issues:** 1 violations detected

---

#### VirtualValue

**Purpose:** VirtualValue component

**File:** `VirtualValue.php`

**Architectural Issues:** 1 violations detected

---

#### WincacheHandler

**Purpose:** Handles requests for Wincache

**File:** `WincacheHandler.php`

**Architectural Issues:** 1 violations detected

---

#### XMLFormatter

**Purpose:** Form handling for XMLatter

**File:** `XMLFormatter.php`

**Architectural Issues:** 1 violations detected

---

#### XmlPlugin

**Purpose:** XmlPlugin component

**File:** `XmlPlugin.php`

**Architectural Issues:** 1 violations detected

---

#### array_helper

**Purpose:** array_helper component

**File:** `array_helper.php`

**Architectural Issues:** 1 violations detected

---

#### bootstrap

**Purpose:** bootstrap component

**File:** `bootstrap.php`

**Architectural Issues:** 1 violations detected

---

#### cell.tpl

**Purpose:** cell.tpl component

**File:** `cell.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### cell_view.tpl

**Purpose:** cell_view.tpl component

**File:** `cell_view.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### command.tpl

**Purpose:** command.tpl component

**File:** `command.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### config.tpl

**Purpose:** config.tpl component

**File:** `config.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### controller.tpl

**Purpose:** controller.tpl component

**File:** `controller.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### cookie_helper

**Purpose:** cookie_helper component

**File:** `cookie_helper.php`

**Architectural Issues:** 1 violations detected

---

#### date_helper

**Purpose:** date_helper component

**File:** `date_helper.php`

**Architectural Issues:** 1 violations detected

---

#### default_full

**Purpose:** default_full component

**File:** `default_full.php`

**Architectural Issues:** 1 violations detected

---

#### default_head

**Purpose:** default_head component

**File:** `default_head.php`

**Architectural Issues:** 1 violations detected

---

#### default_simple

**Purpose:** default_simple component

**File:** `default_simple.php`

**Architectural Issues:** 1 violations detected

---

#### entity.tpl

**Purpose:** entity.tpl component

**File:** `entity.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### filesystem_helper

**Purpose:** filesystem_helper component

**File:** `filesystem_helper.php`

**Architectural Issues:** 1 violations detected

---

#### filter.tpl

**Purpose:** filter.tpl component

**File:** `filter.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### form_helper

**Purpose:** form_helper component

**File:** `form_helper.php`

**Architectural Issues:** 1 violations detected

---

#### html_helper

**Purpose:** html_helper component

**File:** `html_helper.php`

**Architectural Issues:** 1 violations detected

---

#### inflector_helper

**Purpose:** inflector_helper component

**File:** `inflector_helper.php`

**Architectural Issues:** 1 violations detected

---

#### init

**Purpose:** init component

**File:** `init.php`

**Architectural Issues:** 1 violations detected

---

#### init_helpers

**Purpose:** init_helpers component

**File:** `init_helpers.php`

**Architectural Issues:** 1 violations detected

---

#### kint_helper

**Purpose:** kint_helper component

**File:** `kint_helper.php`

**Architectural Issues:** 1 violations detected

---

#### list

**Purpose:** list component

**File:** `list.php`

**Architectural Issues:** 1 violations detected

---

#### migration.tpl

**Purpose:** migration.tpl component

**File:** `migration.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### model.tpl

**Purpose:** model.tpl component

**File:** `model.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### number_helper

**Purpose:** number_helper component

**File:** `number_helper.php`

**Architectural Issues:** 1 violations detected

---

#### rewrite

**Purpose:** rewrite component

**File:** `rewrite.php`

**Architectural Issues:** 1 violations detected

---

#### security_helper

**Purpose:** security_helper component

**File:** `security_helper.php`

**Architectural Issues:** 1 violations detected

---

#### seeder.tpl

**Purpose:** seeder.tpl component

**File:** `seeder.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### single

**Purpose:** single component

**File:** `single.php`

**Architectural Issues:** 1 violations detected

---

#### text_helper

**Purpose:** text_helper component

**File:** `text_helper.php`

**Architectural Issues:** 1 violations detected

---

#### toolbar.tpl

**Purpose:** toolbar.tpl component

**File:** `toolbar.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### url_helper

**Purpose:** url_helper component

**File:** `url_helper.php`

**Architectural Issues:** 1 violations detected

---

#### util_bootstrap

**Purpose:** util_bootstrap component

**File:** `util_bootstrap.php`

**Architectural Issues:** 1 violations detected

---

#### validation.tpl

**Purpose:** validation.tpl component

**File:** `validation.tpl.php`

**Architectural Issues:** 1 violations detected

---

#### xml_helper

**Purpose:** xml_helper component

**File:** `xml_helper.php`

**Architectural Issues:** 1 violations detected

---


## Statistics

- **Total Components:** 452
- **Component Categories:** 1
- **Internal Dependencies:** 141
- **External Dependencies:** 8406

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
