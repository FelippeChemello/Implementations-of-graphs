"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = __importDefault(require("util"));
const array = [34, 84, 15, 0, -1, 2, 99, 79, 9, 88, 89, 18, 31, 39, 100, 101];
const root = {};
function insert(value) {
    if (!root.value) {
        root.value = value;
    }
    else {
        let current = root;
        let parent = undefined;
        while (1) {
            parent = current;
            // console.log(value)
            if (!(parent === null || parent === void 0 ? void 0 : parent.value)) {
                console.log(value);
                return;
            }
            if (value < parent.value) {
                if (!current.left) {
                    current.left = { value };
                    return;
                }
                current = current === null || current === void 0 ? void 0 : current.left;
            }
            else {
                if (!(current === null || current === void 0 ? void 0 : current.right)) {
                    current.right = { value };
                    return;
                }
                current = current.right;
            }
        }
    }
}
array.forEach(value => insert(value));
console.log(util_1.default.inspect(root, { depth: 20 }));
