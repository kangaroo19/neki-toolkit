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
export default function NekiInputField(_a) {
    var onChange = _a.onChange, type = _a.type, style = _a.style, className = _a.className, registerFn = _a.registerFn, placeholder = _a.placeholder, defaultValue = _a.defaultValue, id = _a.id;
    return (_jsx("input", __assign({ id: id, type: type, className: className, style: style, onChange: onChange }, registerFn, { placeholder: placeholder })));
}
