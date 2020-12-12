import React from 'react';

import * as Styled from './widget.styles';

export interface WidgetProps {
  children: any,
  heading?: string,
}

export const Widget: React.FunctionComponent<WidgetProps> = ({
  children,
  heading,
}) => {
  return (
    <Styled.Widget>
      { !!heading && (
        <Styled.Header>{heading}</Styled.Header>
      )}

      <Styled.Body>
        {children}
      </Styled.Body>
    </Styled.Widget>
  );
}
