"use strict";
exports.__esModule = true;
var main_1 = require("./main");
var user = new main_1.Person("arman", "ahmed", "male");
user.getFullName();
console.log(user.getInfo());
var admin = new main_1.Admin('halima', 'sultan', 'female');
admin.setEditor('edits others scripts');
console.log(admin.getInfo());
