import _Symbol from "@babel/runtime-corejs3/core-js/symbol";
import _getIteratorMethod from "@babel/runtime-corejs3/core-js/get-iterator-method";
export default function _iterableToArrayLimitLoose(arr, i) {
  var _i = arr && (typeof _Symbol !== "undefined" && _getIteratorMethod(arr) || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];

  for (_i = _i.call(arr), _step; !(_step = _i.next()).done;) {
    _arr.push(_step.value);

    if (i && _arr.length === i) break;
  }

  return _arr;
}