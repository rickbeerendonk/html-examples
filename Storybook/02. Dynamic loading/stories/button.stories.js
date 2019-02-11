import { storiesOf } from '@storybook/html';
import { action } from '@storybook/addon-actions';

/* global module */

storiesOf('button', module)
  .add('default', () => {
    const button = document.createElement('button');
    button.innerText = 'Button';
    return button;
  })
  .add('onClick', () => {
    const button = document.createElement('button');
    button.innerText = 'Button';
    button.addEventListener('click', action('button-click'));
    return button;
  });
