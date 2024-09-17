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
// 컴포넌트 정의
export default function NekiLabel(_a) {
    var className = _a.className, children = _a.children, htmlFor = _a.htmlFor;
    // 스타일을 적용하는 헬퍼 함수 (divideStyleIDString) 가정
    return (_jsx("label", __assign({ className: className, htmlFor: htmlFor }, { children: children })));
}
