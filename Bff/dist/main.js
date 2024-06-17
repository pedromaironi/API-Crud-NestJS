"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./infrastructure/modules/app.module");
const common_1 = require("@nestjs/common");
const helmet_1 = require("helmet");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({ origin: '*' });
    app.useGlobalPipes(new common_1.ValidationPipe({}));
    app.enableVersioning({ type: common_1.VersioningType.URI });
    app.use((0, helmet_1.default)());
    await app.listen(4000, () => {
        console.log(`🚀 BFF Application running at port 4000`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map