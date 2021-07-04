import React, { useState } from 'react';

var AudioDefault = function (props) {
    var value = props.value;
    var _a = useState(0), counter = _a[0], setCounter = _a[1];
    var setCounterUp = function () { return setCounter(counter + value); };
    return (React.createElement("div", { style: { padding: 20 } },
        counter,
        React.createElement("button", { onClick: setCounterUp, style: { marginLeft: 15 } },
            "Like!! +",
            value)));
};

export default AudioDefault;
