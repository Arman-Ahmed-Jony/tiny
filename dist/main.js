"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Admin = exports.Person = void 0;
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("arman", "ahmed"));
var user = {
    name: "arman",
    age: 25,
    getMessage: function () {
        return this.name;
    }
};
var user2 = {
    name: "john",
    getMessage: function () {
        return this.name;
    }
};
var populartags = ["movie", "webseries"];
var pageName = "1";
var errorMessage = null;
var user3 = null;
// any, void, never, unknown
var doSomeThing = function () {
    console.log("doSomething called ");
    // return 4
};
var Person = /** @class */ (function () {
    function Person(firstName, lastName, gender) {
        this.firstname = firstName;
        this.lastname = lastName;
        this.gender = gender;
    }
    Person.prototype.getInfo = function () {
        return this;
        throw new Error("Method not implemented.");
    };
    /**
     * this will not allow us to change gender
     */
    Person.prototype.changeGender = function () {
        // this.gender = 'male'
    };
    Person.prototype.getFullName = function () {
        console.log(this.firstname + " " + this.lastname);
        return this.firstname + " " + this.lastname;
    };
    return Person;
}());
exports.Person = Person;
// inheritence
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(Person));
exports.Admin = Admin;
