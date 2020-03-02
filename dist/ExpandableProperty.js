var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styled from 'styled-components';
export var PropertyName = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: #008080;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n"], ["\n  color: #008080;\n  font-size: 14px;\n  font-weight: bold;\n  cursor: pointer;\n"])));
var ExpandableProperty = /** @class */ (function (_super) {
    __extends(ExpandableProperty, _super);
    function ExpandableProperty() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isOpen: !!_this.props.expanded
        };
        return _this;
    }
    ExpandableProperty.prototype.render = function () {
        var _this = this;
        return (React.createElement(React.Fragment, null,
            React.createElement(PropertyName, { onClick: function () { return _this.setState({ isOpen: !_this.state.isOpen }); } },
                this.props.title,
                this.state.isOpen ? '-' : '+'),
            this.state.isOpen ? this.props.children : null,
            React.Children.count(this.props.children) === 0 && this.state.isOpen ? 'The list is empty!' : null));
    };
    return ExpandableProperty;
}(React.Component));
export default ExpandableProperty;
var templateObject_1;
