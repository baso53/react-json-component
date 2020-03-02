import * as React from 'react';
import styled from 'styled-components';
import ExpandableProperty from './ExpandableProperty';
import { camelCaseToNormal } from './utils';

const RecursivePropertyContainer = styled.div`
  padding-top: 10px;
  padding-left: 3px;
  margin-left: 10px;
  ${(props: { excludeBottomBorder: boolean }) =>
    props.excludeBottomBorder ? '' : 'border-bottom: 1px solid #b2d6ff;'}
  color: #666;    
  font-size: 16px;
`;

export const PropertyName = styled.span`
  color: black;
  font-size: 14px;
  font-weight: bold;
`;

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

const RecursiveProperty: React.FC<Props> = props => {
  return (
    <RecursivePropertyContainer excludeBottomBorder={props.excludeBottomBorder}>
      {props.property ? (
        typeof props.property === 'number' ||
          typeof props.property === 'string' ||
          typeof props.property === 'boolean' ? (
            <React.Fragment>
              <PropertyName>{props.propertyNameProcessor!(props.propertyName)}: </PropertyName>
              {props.property.toString()}
            </React.Fragment>
          ) : (
            <ExpandableProperty title={props.propertyNameProcessor!(props.propertyName)} expanded={!!props.rootProperty}>
              {Object.values(props.property).map((property, index, { length }) => (
                <RecursiveProperty
                  key={index}
                  property={property}
                  propertyName={Object.getOwnPropertyNames(props.property)[index]}
                  propertyNameProcessor={props.propertyNameProcessor}
                  excludeBottomBorder={index === length - 1}
                />
              ))}
            </ExpandableProperty>
          )
      ) : props.emptyPropertyLabel
      }
    </RecursivePropertyContainer>
  );
}

RecursiveProperty.defaultProps = {
  emptyPropertyLabel: 'Property is empty',
  excludeBottomBorder: false,
  propertyNameProcessor: camelCaseToNormal
};

export default RecursiveProperty;