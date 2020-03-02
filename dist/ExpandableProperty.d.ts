import * as React from 'react';
export declare const PropertyName: import("styled-components").StyledComponent<"div", any, {}, never>;
interface Props {
    title: string;
    expanded?: boolean;
}
interface State {
    isOpen: boolean;
}
export default class ExpandableProperty extends React.Component<Props, State> {
    state: {
        isOpen: boolean;
    };
    render(): JSX.Element;
}
export {};
