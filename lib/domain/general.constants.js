"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = void 0;
exports.config = {
  CONTENTFUL_URL: process.env.NEXT_PUBLIC_CONTENTFUL_URL || '',
  CONTENTFUL_AUTH_TOKEN: process.env.NEXT_PUBLIC_CONTENTFUL_AUTH_TOKEN,
  MOJITO_API_URL: process.env.NEXT_PUBLIC_MOJITO_API_URL || '',
  INVOICE_URL: process.env.NEXT_PUBLIC_INVOICE_URL || '',
  ORGANIZATION_ID: process.env.NEXT_PUBLIC_API_ORGANIZATION_ID || '8fb128bd-f55d-4bcc-8b6c-0beb684e4d4e',
  MARKETPLACE_ID: process.env.NEXT_PUBLIC_MARKETPLACE_ID || 'c5ac4f84-b78b-4cb7-a24f-7f0c38da0eb2'
};