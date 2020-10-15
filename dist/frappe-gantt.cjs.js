"use strict";function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Gantt=_interopDefault(require("theop-gantt")),extendStatics=function(t,e){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function __extends(t,e){function n(){this.constructor=t}extendStatics(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var Task=function(){function t(t){void 0===t&&(t={}),this._dependencies=[],this.id="",this.name="",this.start="",this.end="",this._progress=.52,Object.assign(this,t)}return Object.defineProperty(t.prototype,"progress",{get:function(){return this._progress||.52},set:function(t){this._progress=t||.52},enumerable:!0,configurable:!0}),t.prototype.setDependencies=function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()})},Object.defineProperty(t.prototype,"dependencies",{get:function(){return this._dependencies},set:function(t){this._dependencies=Array.isArray(t)?t:t.split(",").map(function(t){return t.trim()}).filter(Boolean)},enumerable:!0,configurable:!0}),t}();!function(t){t.QuarterDay="Quarter Day",t.HalfDay="Half Day",t.Day="Day",t.Week="Week",t.Month="Month"}(exports.ViewMode||(exports.ViewMode={}));var frappeGanttDefaultProps={viewMode:exports.ViewMode.Day,onTasksChange:function(t){},onClick:function(t){},onDateChange:function(t,e,n){},onProgressChange:function(t,e){},onViewChange:function(t){}},FrappeGantt=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._target=React.createRef(),e._svg=React.createRef(),e._gantt=null,e.state={viewMode:null,tasks:[]},e}return __extends(e,t),e.getDerivedStateFromProps=function(t,e){return{viewMode:t.viewMode,tasks:t.tasks.map(function(t){return new Task(t)})}},e.prototype.componentDidUpdate=function(){this._gantt&&(this._gantt.refresh(this.state.tasks),this._gantt.change_view_mode(this.state.viewMode))},e.prototype.componentDidMount=function(){var t=this;this._gantt=new Gantt(this._svg.current,this.state.tasks,{on_click:this.props.onClick,on_view_change:this.props.onViewChange,on_progress_change:function(e,n){t.props.onProgressChange(e,n),t.props.onTasksChange(t.props.tasks)},on_date_change:function(e,n,r){t.props.onDateChange(e,n,r),t.props.onTasksChange(t.props.tasks)}}),this._gantt&&this._gantt.change_view_mode(this.state.viewMode);var e=.5*this._svg.current.clientWidth;this._target.current.scrollLeft=e},e.prototype.render=function(){return React__default.createElement("div",{style:{overflow:"scroll"},ref:this._target},React__default.createElement("svg",{ref:this._svg,width:"100%",height:"100%",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"}))},e.defaultProps=frappeGanttDefaultProps,e}(React__default.Component);exports.FrappeGantt=FrappeGantt,exports.Task=Task;
