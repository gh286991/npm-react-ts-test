'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var onClick = function (name) {
    window.alert("hi~~ " + name);
};
var SayHello = function (_a) {
    var name = _a.name;
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", null,
            "Hey ",
            name,
            ", say hello to TypeScript npm test !!!!."),
        React__default['default'].createElement("button", { onClick: function () {
                onClick(name);
            } }, "click me")));
};

module.exports = SayHello;
