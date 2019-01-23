import * as React from 'react';
import styled from 'styled-components';

export const PropertyName = styled.div`
  color: #008080;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

interface Props {
  title: string;
  expanded?: boolean;
}

interface State {
  isOpen: boolean;
}

export default class ExpandableProperty extends React.Component<Props, State> {
  state = {
    isOpen: !!this.props.expanded
  };

  render() {
    return (
      <React.Fragment>
        <PropertyName onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
          {this.props.title}
          {this.state.isOpen ? '-' : '+'}
        </PropertyName>
        {this.state.isOpen ? this.props.children : null}
        {React.Children.count(this.props.children) === 0 && this.state.isOpen ? 'The list is empty!' : null}
      </React.Fragment>
    );
  }
}