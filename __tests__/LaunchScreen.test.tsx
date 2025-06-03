import React from 'react';
import { render } from '@testing-library/react-native';
import LaunchScreen from '../src/screens/LaunchScreen';

jest.mock('../src/components/atoms/LogoLaunch', () => {
  return () => <></>;
});

describe('LaunchScreen', () => {
  it('se renderiza correctamente', () => {
    const { getByTestId } = render(<LaunchScreen />);
    expect(getByTestId('launch-container')).toBeTruthy();
  });
});
