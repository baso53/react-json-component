import * as React from 'react';
export declare const PropertyName: import("styled-components").StyledComponent<"span", any, {}, never>;
interface IterableObject {
    [s: number]: number | string | boolean | IterableObject;
}
interface Props {
    property: number | string | boolean | IterableObject;
    propertyName: string;
    excludeBottomBorder: boolean;
    emptyPropertyLabel?: string;
    rootProperty?: boolean;
    propertyNameProcessor?: (name: string) => string;
}
declare const RecursiveProperty: React.FC<Props>;
export default RecursiveProperty;
