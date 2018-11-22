var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Application = function (_React$Component) {_inherits(Application, _React$Component);
  function Application(props) {_classCallCheck(this, Application);return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this,
    props));
  }_createClass(Application, [{ key: "render", value: function render()
    {
      return (
        React.createElement(PomodoroClock, null));

    } }]);return Application;}(React.Component);var


PomodoroClock = function (_React$Component2) {_inherits(PomodoroClock, _React$Component2);
  function PomodoroClock(props) {_classCallCheck(this, PomodoroClock);var _this2 = _possibleConstructorReturn(this, (PomodoroClock.__proto__ || Object.getPrototypeOf(PomodoroClock)).call(this,
    props));
    _this2.state = {
      timerID: "",
      running: false,
      currentlySession: true,
      breakLength: 300000,
      sessionLength: 1500000,
      timeLeft: 1500000 };

    _this2.decrementBreakLength = _this2.decrementBreakLength.bind(_this2);
    _this2.incrementBreakLength = _this2.incrementBreakLength.bind(_this2);
    _this2.decrementSessionLength = _this2.decrementSessionLength.bind(_this2);
    _this2.incrementSessionLength = _this2.incrementSessionLength.bind(_this2);
    _this2.decrementTimeLeft = _this2.decrementTimeLeft.bind(_this2);
    _this2.startStop = _this2.startStop.bind(_this2);
    _this2.reset = _this2.reset.bind(_this2);return _this2;
  }_createClass(PomodoroClock, [{ key: "turnMilliIntoMinAndSec", value: function turnMilliIntoMinAndSec(
    milli) {
      return ("0" + Math.floor(milli / 1000 / 60)).slice(-2) + ":" + ("0" + Math.floor(milli / 1000 % 60)).slice(-2);
    } }, { key: "milliToMin", value: function milliToMin(
    milli) {
      return milli / 1000 / 60;
    } }, { key: "startStop", value: function startStop(
    e) {
      if (this.state.running) {
        this.setState({
          timerID: this.state.timerID,
          running: false,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      } else {
        this.setState({
          timerID: this.state.timerID,
          running: true,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      }
    } }, { key: "reset", value: function reset(
    e) {
      document.getElementById("beep").pause();
      document.getElementById("beep").currentTime = 0;
      this.setState({
        timerID: this.state.timerID,
        running: false,
        currentlySession: true,
        breakLength: 300000,
        sessionLength: 1500000,
        timeLeft: 1500000 });

    } }, { key: "decrementBreakLength", value: function decrementBreakLength(
    e) {
      if (this.state.breakLength > 60000) {
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength - 60000,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      }
    } }, { key: "incrementBreakLength", value: function incrementBreakLength(
    e) {
      if (this.state.breakLength < 3600000) {
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength + 60000,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      }
    } }, { key: "decrementSessionLength", value: function decrementSessionLength(
    e) {
      if (this.state.sessionLength > 60000) {
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength - 60000,
          timeLeft: this.state.timeLeft - 60000 });

      }
    } }, { key: "incrementSessionLength", value: function incrementSessionLength(
    e) {
      if (this.state.sessionLength < 3600000) {
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength + 60000,
          timeLeft: this.state.timeLeft + 60000 });

      }
    } }, { key: "decrementTimeLeft", value: function decrementTimeLeft(
    e) {
      this.setState({
        timerID: this.state.timerID,
        running: this.state.running,
        currentlySession: this.state.currentlySession,
        breakLength: this.state.breakLength,
        sessionLength: this.state.sessionLength,
        timeLeft: this.state.timeLeft - 20 });

    } }, { key: "render", value: function render()
    {
      if (this.state.timeLeft === 0 && this.state.currentlySession) {
        document.getElementById("beep").play();
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: false,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.breakLength });

      } else if (this.state.timeLeft === 0 && !this.state.currentlySession) {
        document.getElementById("beep").play();
        this.setState({
          timerID: this.state.timerID,
          running: this.state.running,
          currentlySession: true,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.sessionLength });

      }
      if (this.state.running && this.state.timerID === "") {
        var id = setInterval(this.decrementTimeLeft, 20);
        this.setState({
          timerID: id,
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      } else if (!this.state.running && this.state.timerID !== "") {
        clearInterval(this.state.timerID);
        this.setState({
          timerID: "",
          running: this.state.running,
          currentlySession: this.state.currentlySession,
          breakLength: this.state.breakLength,
          sessionLength: this.state.sessionLength,
          timeLeft: this.state.timeLeft });

      }
      return (
        React.createElement("div", { id: "pomodoro-clock" },
          React.createElement("div", { id: "inner-clock-items" },
            React.createElement("div", { id: "timer" },
              React.createElement("div", { id: "time-left" }, this.turnMilliIntoMinAndSec(this.state.timeLeft)),
              React.createElement("div", { id: "timer-label" }, this.state.currentlySession ? "Session" : "Break")),

            React.createElement("div", { id: "timer-btns" },
              React.createElement("div", { id: "start_stop", onClick: this.startStop }, this.state.running ? React.createElement("i", { "class": "fas fa-pause" }) : React.createElement("i", { "class": "fas fa-play" })),
              React.createElement("div", { id: "reset", onClick: this.reset }, React.createElement("i", { "class": "fa fa-refresh", "aria-hidden": "true" }))),

            React.createElement("div", { id: "length-stuff" },
              React.createElement("div", { id: "break" },
                React.createElement("div", { id: "break-label" }, "Break Length"),
                React.createElement("div", { id: "break-length-btns" },
                  React.createElement("div", { "class": "decrement-btn", id: "break-decrement", onClick: this.decrementBreakLength }, "-"),
                  React.createElement("div", { id: "break-length" }, this.milliToMin(this.state.breakLength)),
                  React.createElement("div", { "class": "increment-btn", id: "break-increment", onClick: this.incrementBreakLength }, "+"))),


              React.createElement("div", { id: "session" },
                React.createElement("div", { id: "session-label" }, "Session Length "),
                React.createElement("div", { id: "session-length-btns" },
                  React.createElement("div", { "class": "decrement-btn", id: "session-decrement", onClick: this.decrementSessionLength }, "-"),
                  React.createElement("div", { id: "session-length" }, this.milliToMin(this.state.sessionLength)),
                  React.createElement("div", { "class": "increment-btn", id: "session-increment", onClick: this.incrementSessionLength }, "+")))),



            React.createElement("audio", { id: "beep", src: "http://soundbible.com/grab.php?id=1491&type=mp3" }))));



    } }]);return PomodoroClock;}(React.Component);


ReactDOM.render(React.createElement(Application, null), document.getElementById("app"));