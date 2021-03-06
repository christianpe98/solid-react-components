import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { getByText, getByLabelText } from '@testing-library/dom';
import { Input } from './input.component';
import { UI } from '@constants';
import 'jest-dom/extend-expect';

afterAll(cleanup);

test('Renders without crashing', () => {
  const data = {};
  const { container } = render(<Input data={data} />);
  expect(container).toBeTruthy();
});

test('Renders the label', () => {
  const data = {
    [UI.LABEL]: 'input label'
  };
  const { container } = render(<Input data={data} />);
  expect(getByText(container, 'input label')).toBeTruthy();
});

test('Renders the input content', () => {
  const data = {
    [UI.LABEL]: 'input label',
    [UI.VALUE]: 'any content'
  };
  const { container } = render(<Input id="testid" data={data} />);
  expect(getByLabelText(container, 'input label').value).toBe('any content');
});
