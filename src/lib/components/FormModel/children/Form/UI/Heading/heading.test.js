import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { getByText } from '@testing-library/dom';
import { Heading } from './heading.component';
import { UI } from '@constants';

import 'jest-dom/extend-expect';

afterAll(cleanup);

test('Renders without crashing', () => {
  const data = {};
  const { container } = render(<Heading data={data} />);
  expect(container).toBeTruthy();
});

test('Renders the heading', () => {
  const data = {
    [UI.CONTENTS]: 'heading'
  };
  const { container } = render(<Heading data={data} />);
  expect(getByText(container, 'heading')).toBeTruthy();
});
