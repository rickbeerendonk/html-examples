/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { configure } from '@storybook/html';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
