"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPath = void 0;

var isBrowser_1 = __importDefault(require("./isBrowser"));

exports.getPath = isBrowser_1["default"] ? window.location.pathname.split('#')[0].split('?')[0].split('/') : [];