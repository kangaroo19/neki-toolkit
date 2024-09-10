var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
var NekiButton = function (_a) {
    var onClick = _a.onClick, disabled = _a.disabled, children = _a.children, _b = _a.type, type = _b === void 0 ? "button" : _b, style = _a.style, className = _a.className;
    return (_jsx("button", __assign({ className: className, onClick: onClick, disabled: disabled, type: type, style: style }, { children: children })));
};
export default NekiButton;
