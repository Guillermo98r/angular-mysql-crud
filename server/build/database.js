"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2/promise');
const keys_1 = __importDefault(require("./keys"));
const pool = mysql.createPool(keys_1.default.database);
pool.getConnection(function (err, conn) {
    console.log('DB is conected');
});
exports.default = pool;
