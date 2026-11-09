import * as runtime from "@prisma/client/runtime/client";
const config = {
    "previewFeatures": [],
    "clientVersion": "7.10.1",
    "engineVersion": "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8",
    "activeProvider": "postgresql",
    "inlineSchema": "generator client {\n  provider = \"prisma-client\"\n  output   = \"../generated/prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n}\n\nmodel User {\n  id        Int      @id @default(autoincrement())\n  name      String\n  email     String   @unique\n  createdAt DateTime @default(now())\n}\n\nmodel Product {\n  id        Int      @id @default(autoincrement())\n  name      String\n  price     Int\n  createdAt DateTime @default(now())\n}\n",
    "runtimeDataModel": {
        "models": {},
        "enums": {},
        "types": {}
    },
    "parameterizationSchema": {
        "strings": [],
        "graph": ""
    }
};
config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null},\"Product\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"price\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null,\"schema\":null}},\"enums\":{},\"types\":{}}");
config.parameterizationSchema = {
    strings: JSON.parse("[\"where\",\"User.findUnique\",\"User.findUniqueOrThrow\",\"orderBy\",\"cursor\",\"User.findFirst\",\"User.findFirstOrThrow\",\"User.findMany\",\"data\",\"User.createOne\",\"User.createMany\",\"User.createManyAndReturn\",\"User.updateOne\",\"User.updateMany\",\"User.updateManyAndReturn\",\"create\",\"update\",\"User.upsertOne\",\"User.deleteOne\",\"User.deleteMany\",\"having\",\"_count\",\"_avg\",\"_sum\",\"_min\",\"_max\",\"User.groupBy\",\"User.aggregate\",\"Product.findUnique\",\"Product.findUniqueOrThrow\",\"Product.findFirst\",\"Product.findFirstOrThrow\",\"Product.findMany\",\"Product.createOne\",\"Product.createMany\",\"Product.createManyAndReturn\",\"Product.updateOne\",\"Product.updateMany\",\"Product.updateManyAndReturn\",\"Product.upsertOne\",\"Product.deleteOne\",\"Product.deleteMany\",\"Product.groupBy\",\"Product.aggregate\",\"AND\",\"OR\",\"NOT\",\"id\",\"name\",\"price\",\"createdAt\",\"equals\",\"in\",\"notIn\",\"lt\",\"lte\",\"gt\",\"gte\",\"not\",\"contains\",\"startsWith\",\"endsWith\",\"email\",\"set\",\"increment\",\"decrement\",\"multiply\",\"divide\"]"),
    graph: "UBUgBywAAEMAMC0AAAQAEC4AAEMAMC8CAAAAATABAEAAITJAAEEAIT4BAAAAAQEAAAABACABAAAAAQAgBywAAEMAMC0AAAQAEC4AAEMAMC8CAD8AITABAEAAITJAAEEAIT4BAEAAIQADAAAABAAgAwAABQAwBAAAAQAgAwAAAAQAIAMAAAUAMAQAAAEAIAMAAAAEACADAAAFADAEAAABACAELwIAAAABMAEAAAABMkAAAAABPgEAAAABAQgAAAkAIAQvAgAAAAEwAQAAAAEyQAAAAAE-AQAAAAEBCAAACwAwAQgAAAsAMAQvAgBKACEwAQBJACEyQABLACE-AQBJACECAAAAAQAgCAAADgAgBC8CAEoAITABAEkAITJAAEsAIT4BAEkAIQIAAAAEACAIAAAQACACAAAABAAgCAAAEAAgAwAAAAEAIA8AAAkAIBAAAA4AIAEAAAABACABAAAABAAgBRUAAEwAIBYAAE0AIBcAAFAAIBgAAE8AIBkAAE4AIAcsAABCADAtAAAXABAuAABCADAvAgA0ACEwAQA1ACEyQAA2ACE-AQA1ACEDAAAABAAgAwAAFgAwFAAAFwAgAwAAAAQAIAMAAAUAMAQAAAEAIAcsAAA-ADAtAAAdABAuAAA-ADAvAgAAAAEwAQBAACExAgA_ACEyQABBACEBAAAAGgAgAQAAABoAIAcsAAA-ADAtAAAdABAuAAA-ADAvAgA_ACEwAQBAACExAgA_ACEyQABBACEAAwAAAB0AIAMAAB4AMAQAABoAIAMAAAAdACADAAAeADAEAAAaACADAAAAHQAgAwAAHgAwBAAAGgAgBC8CAAAAATABAAAAATECAAAAATJAAAAAAQEIAAAiACAELwIAAAABMAEAAAABMQIAAAABMkAAAAABAQgAACQAMAEIAAAkADAELwIASgAhMAEASQAhMQIASgAhMkAASwAhAgAAABoAIAgAACcAIAQvAgBKACEwAQBJACExAgBKACEyQABLACECAAAAHQAgCAAAKQAgAgAAAB0AIAgAACkAIAMAAAAaACAPAAAiACAQAAAnACABAAAAGgAgAQAAAB0AIAUVAABEACAWAABFACAXAABIACAYAABHACAZAABGACAHLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQIANAAhMkAANgAhAwAAAB0AIAMAAC8AMBQAADAAIAMAAAAdACADAAAeADAEAAAaACAHLAAAMwAwLQAAMAAQLgAAMwAwLwIANAAhMAEANQAhMQIANAAhMkAANgAhDRUAADgAIBYAAD0AIBcAADgAIBgAADgAIBkAADgAIDMCAAAAATQCAAAABDUCAAAABDYCAAAAATcCAAAAATgCAAAAATkCAAAAAToCADwAIQ4VAAA4ACAYAAA7ACAZAAA7ACAzAQAAAAE0AQAAAAQ1AQAAAAQ2AQAAAAE3AQAAAAE4AQAAAAE5AQAAAAE6AQA6ACE7AQAAAAE8AQAAAAE9AQAAAAELFQAAOAAgGAAAOQAgGQAAOQAgM0AAAAABNEAAAAAENUAAAAAENkAAAAABN0AAAAABOEAAAAABOUAAAAABOkAANwAhCxUAADgAIBgAADkAIBkAADkAIDNAAAAAATRAAAAABDVAAAAABDZAAAAAATdAAAAAAThAAAAAATlAAAAAATpAADcAIQgzAgAAAAE0AgAAAAQ1AgAAAAQ2AgAAAAE3AgAAAAE4AgAAAAE5AgAAAAE6AgA4ACEIM0AAAAABNEAAAAAENUAAAAAENkAAAAABN0AAAAABOEAAAAABOUAAAAABOkAAOQAhDhUAADgAIBgAADsAIBkAADsAIDMBAAAAATQBAAAABDUBAAAABDYBAAAAATcBAAAAATgBAAAAATkBAAAAAToBADoAITsBAAAAATwBAAAAAT0BAAAAAQszAQAAAAE0AQAAAAQ1AQAAAAQ2AQAAAAE3AQAAAAE4AQAAAAE5AQAAAAE6AQA7ACE7AQAAAAE8AQAAAAE9AQAAAAENFQAAOAAgFgAAPQAgFwAAOAAgGAAAOAAgGQAAOAAgMwIAAAABNAIAAAAENQIAAAAENgIAAAABNwIAAAABOAIAAAABOQIAAAABOgIAPAAhCDMIAAAAATQIAAAABDUIAAAABDYIAAAAATcIAAAAATgIAAAAATkIAAAAAToIAD0AIQcsAAA-ADAtAAAdABAuAAA-ADAvAgA_ACEwAQBAACExAgA_ACEyQABBACEIMwIAAAABNAIAAAAENQIAAAAENgIAAAABNwIAAAABOAIAAAABOQIAAAABOgIAOAAhCzMBAAAAATQBAAAABDUBAAAABDYBAAAAATcBAAAAATgBAAAAATkBAAAAAToBADsAITsBAAAAATwBAAAAAT0BAAAAAQgzQAAAAAE0QAAAAAQ1QAAAAAQ2QAAAAAE3QAAAAAE4QAAAAAE5QAAAAAE6QAA5ACEHLAAAQgAwLQAAFwAQLgAAQgAwLwIANAAhMAEANQAhMkAANgAhPgEANQAhBywAAEMAMC0AAAQAEC4AAEMAMC8CAD8AITABAEAAITJAAEEAIT4BAEAAIQAAAAAAAT8BAAAAAQU_AgAAAAFAAgAAAAFBAgAAAAFCAgAAAAFDAgAAAAEBP0AAAAABAAAAAAAAAAAABRUABhYABxcACBgACRkACgAAAAAABRUABhYABxcACBgACRkACgAAAAUVABAWABEXABIYABMZABQAAAAAAAUVABAWABEXABIYABMZABQBAgECAwEFBgEGBwEHCAEJCgEKDAILDQMMDwENEQIOEgQREwESFAETFQIaGAUbGQscGwwdHAweHwwfIAwgIQwhIwwiJQIjJg0kKAwlKgImKw4nLAwoLQwpLgIqMQ8rMhU"
};
async function decodeBase64AsWasm(wasmBase64) {
    const { Buffer } = await import('node:buffer');
    const wasmArray = Buffer.from(wasmBase64, 'base64');
    return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
    getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.mjs"),
    getQueryCompilerWasmModule: async () => {
        const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.postgresql.wasm-base64.mjs");
        return await decodeBase64AsWasm(wasm);
    },
    importName: "./query_compiler_fast_bg.js"
};
export function getPrismaClientClass() {
    return runtime.getPrismaClient(config);
}
//# sourceMappingURL=class.js.map