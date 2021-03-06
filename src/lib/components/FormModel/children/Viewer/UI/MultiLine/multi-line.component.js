import React, { useContext } from 'react';
import { Wrapper, Label, Value } from './multi-line.style';

import { ThemeContext } from '@context';
import { UI } from '@constants';

type Props = {
  id: string,
  data: object
};

export const MultiLine = (props: Props) => {
  const { id, data } = props;
  const { theme } = useContext(ThemeContext);
  const { [UI.LABEL]: label, [UI.VALUE]: value } = data;

  return (
    <div className={theme && theme.multiLine}>
      <Wrapper>
        <Label htmlFor={id} className="label">
          {label}
        </Label>
        <Value id={id} className="value">
          {value || ''}
        </Value>
      </Wrapper>
    </div>
  );
};

export default MultiLine;
