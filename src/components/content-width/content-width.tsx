import React from 'react';

import * as Styled from './content-width.styles';

export const ContentWidth: React.FunctionComponent = ({
  children,
}) => {
  return (
    <Styled.ContentWidth>
      {children}
    </Styled.ContentWidth>
  );
};

export default ContentWidth;
