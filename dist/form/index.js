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
import { Form } from "react-hook-form";
export default function NekiForm(_a) {
    var children = _a.children, className = _a.className, onSubmit = _a.onSubmit, control = _a.control, onError = _a.onError, onSuccess = _a.onSuccess;
    return (_jsx(Form, __assign({ action: "", onError: onError, onSuccess: onSuccess, className: className, onSubmit: onSubmit, control: control }, { children: children })));
}
