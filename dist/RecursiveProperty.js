var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from 'react';
import styled from 'styled-components';
import ExpandableProperty from './ExpandableProperty';
import { camelCaseToNormal } from './utils';
var RecursivePropertyContainer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-top: 10px;\n  padding-left: 3px;\n  margin-left: 10px;\n  ", "\n  color: #666;    \n  font-size: 16px;\n"], ["\n  padding-top: 10px;\n  padding-left: 3px;\n  margin-left: 10px;\n  ",
    "\n  color: #666;    \n  font-size: 16px;\n"])), function (props) {
    return props.excludeBottomBorder ? '' : 'border-bottom: 1px solid #b2d6ff;';
});
export var PropertyName = styled.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: black;\n  font-size: 14px;\n  font-weight: bold;\n"], ["\n  color: black;\n  font-size: 14px;\n  font-weight: bold;\n"])));
var RecursiveProperty = function (props) {
    return (React.createElement(RecursivePropertyContainer, { excludeBottomBorder: props.excludeBottomBorder }, props.property ? (typeof props.property === 'number' ||
        typeof props.property === 'string' ||
        typeof props.property === 'boolean' ? (React.createElement(React.Fragment, null,
        React.createElement(PropertyName, null,
            props.propertyNameProcessor(props.propertyName),
            ": "),
        props.property.toString())) : (React.createElement(ExpandableProperty, { title: props.propertyNameProcessor(props.propertyName), expanded: !!props.rootProperty }, Object.values(props.property).map(function (property, index, _a) {
        var length = _a.length;
        return (React.createElement(RecursiveProperty, { key: index, property: property, propertyName: Object.getOwnPropertyNames(props.property)[index], propertyNameProcessor: props.propertyNameProcessor, excludeBottomBorder: index === length - 1 }));
    })))) : props.emptyPropertyLabel));
};
RecursiveProperty.defaultProps = {
    emptyPropertyLabel: 'Property is empty',
    excludeBottomBorder: false,
    propertyNameProcessor: camelCaseToNormal
};
export default RecursiveProperty;
var templateObject_1, templateObject_2;
