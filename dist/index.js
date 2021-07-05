'use strict';

var React = require('react');
var moment = require('moment');
var R = require('ramda');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var moment__default = /*#__PURE__*/_interopDefaultLegacy(moment);
var R__namespace = /*#__PURE__*/_interopNamespace(R);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".index-module_container__p6aGD {\n  text-align: center;\n  width: fit-content;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  border: 2px blue solid;\n}\n.index-module_exampleContainer__1UPpM {\n  border: 2px red solid;\n}\n\n.index-module_testContainer__2r4wU {\n  width: fit-content;\n}\n\n.index-module_volume_slider_icon__l7o5d {\n  height: 10px;\n  width: 100%;\n  position: relative;\n  background-color: #ddd;\n}\n.index-module_volume_slider__2ULpg {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background-color: red;\n}\n";
var styles = {"container":"index-module_container__p6aGD","exampleContainer":"index-module_exampleContainer__1UPpM","testContainer":"index-module_testContainer__2r4wU","volume_slider_icon":"index-module_volume_slider_icon__l7o5d","volume_slider":"index-module_volume_slider__2ULpg","volumeSliderIcon":"index-module_volume_slider_icon__l7o5d","volumeSlider":"index-module_volume_slider__2ULpg"};
styleInject(css_248z);

var AudioDefault = function () {
    var _a = React.useState(0), duringTime = _a[0], setDuringTime = _a[1];
    var _b = React.useState(false), isPlaying = _b[0], setIsPlaying = _b[1];
    var _c = React.useState(false), isPause = _c[0], setIsPause = _c[1];
    var _d = React.useState(false), isMuted = _d[0], setIsMuted = _d[1];
    React.useEffect(function () {
        audioProcess();
    }, []);
    var audio = typeof window === 'undefined' ? null : document.querySelector('audio');
    var allTime = R__namespace.pathOr(0, ['duration'], audio);
    if (typeof window !== 'undefined' && isPlaying) {
        audio === null || audio === void 0 ? void 0 : audio.addEventListener('timeupdate', function () {
            setDuringTime(Math.floor(audio.currentTime));
        });
        audio === null || audio === void 0 ? void 0 : audio.addEventListener('ended', function () {
            setIsPlaying(false);
        });
    }
    var handelVolumeChange = function (event) {
        var target = event.target;
        var value = Number(target.value);
        if (!audio)
            return;
        audio.volume = value / 100;
    };
    var handelPlay = function () {
        if (!isPause)
            setDuringTime(0);
        setIsPlaying(true);
        setIsPause(false);
        if (!audio)
            return;
        audio.play();
    };
    var handelStop = function () {
        setIsPlaying(false);
        setIsPause(true);
        if (!audio)
            return;
        audio.pause();
    };
    var audioProcess = function () {
        var progress = document.getElementById('progressBar');
        if (!audio || !progress)
            return;
        var duration = Math.floor(audio.duration);
        progress.setAttribute('max', String(duration));
    };
    var handelProcessChange = function (event) {
        var target = event.target;
        var value = Number(target.value);
        setDuringTime(value);
        if (!audio)
            return;
        audio.currentTime = value;
    };
    var onClickVolume = function () {
        if (!audio)
            return;
        audio.muted = isMuted;
        setIsMuted(!isMuted);
    };
    var timeFormat = function (inputTime) { return moment__default['default'].utc(inputTime * 1000).format('mm:ss'); };
    return (React__default['default'].createElement("div", { className: styles.container },
        React__default['default'].createElement("div", { className: styles.container },
            React__default['default'].createElement("audio", { src: "http://www.sousound.com/music/healing/healing_01.mp3" }),
            isPlaying ? (React__default['default'].createElement("button", { onClick: function () {
                    handelStop();
                } },
                React__default['default'].createElement("span", null, "Stop"))) : (React__default['default'].createElement("button", { style: { border: '2px red solid' }, onClick: function () {
                    handelPlay();
                } },
                React__default['default'].createElement("span", null, "Play"))),
            React__default['default'].createElement("div", { className: "player-bar" },
                React__default['default'].createElement("input", { id: "progressBar", value: duringTime, type: "range", onChange: function (event) {
                        handelProcessChange(event);
                    } })),
            React__default['default'].createElement("input", { type: "range", min: "0", max: "100", onChange: function (event) {
                    handelVolumeChange(event);
                } }),
            React__default['default'].createElement("button", { onClick: function () {
                    onClickVolume();
                } }, "volume"),
            React__default['default'].createElement("div", null, timeFormat(duringTime) + "/" + timeFormat(allTime)),
            React__default['default'].createElement("br", null),
            React__default['default'].createElement("audio", { src: "http://www.sousound.com/music/healing/healing_01.mp3", controls: true }))));
};

module.exports = AudioDefault;
