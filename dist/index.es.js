import React from 'react';

var onClick = function (name) {
    window.alert("hi~~ " + name);
};
var SayHello = function (_a) {
    var name = _a.name;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            "Hey ",
            name,
            ", say hello to TypeScript npm test !!!!."),
        React.createElement("button", { onClick: function () {
                onClick(name);
            } }, "click me")));
};

export default SayHello;
