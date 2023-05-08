import React from 'react';
import {Header} from '../pages/LobbyGame/Components/Header';
import {render, screen} from '@testing-library/react';
import style from '../pages/LobbyGame/LobbyGame.module.scss';
import {hexToRGB} from '../constants/hexToRGB';

describe('Header in Lobby', () => {
  it('Should render Header in button', () => {
    render(
      <Header
        style={style}
        hexToRGB={hexToRGB}
        name={'test'}
        color='black'
      />
    );
    const h1Element = screen.getByRole('heading', {level: 1});
    expect(h1Element).toHaveTextContent();
  });
});
