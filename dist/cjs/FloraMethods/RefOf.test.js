"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreationSuiteA = void 0;
const Flora_1 = require("../Flora");
const fauna_test_setup_1 = require("fauna-test-setup");
const q = __importStar(require("faunadb/query"));
const Creation_1 = require("./Creation");
const shortid_1 = require("shortid");
const RefOf_1 = require("./RefOf");
const CreationSuiteA = () => {
    describe("Flora exceptions basic functionality", () => {
        let db;
        beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
            db = yield (0, fauna_test_setup_1.FaunaTestDb)();
        }));
        test("Simple RefOf", () => __awaiter(void 0, void 0, void 0, function* () {
            const collection = (0, shortid_1.generate)();
            const resultA = yield db.client.query((0, Flora_1.Flora)((0, Creation_1.CreateCollection)({ name: collection })));
            const resultB = yield db.client.query((0, Flora_1.Flora)((0, RefOf_1.RefOf)((0, Creation_1.Document)((0, Creation_1.Collection)(collection), {
                hello: "world"
            }))));
            const resultC = yield db.client.query((0, Flora_1.Flora)((0, RefOf_1.RefOf)(q.Get(resultB))));
            expect(resultC).toStrictEqual(resultB);
        }));
    });
};
exports.CreationSuiteA = CreationSuiteA;
(0, exports.CreationSuiteA)();
