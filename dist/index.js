'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var AudioDefault = function (props) {
    var value = props.value;
    var _a = React.useState(0), counter = _a[0], setCounter = _a[1];
    var setCounterUp = function () { return setCounter(counter + value); };
    return (React__default['default'].createElement("div", { style: { padding: 20 } },
        counter,
        React__default['default'].createElement("button", { onClick: setCounterUp, style: { marginLeft: 15 } },
            "Like!! +",
            value)));
};

module.exports = AudioDefault;
