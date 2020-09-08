import { setConfiguration } from 'react-grid-system'

// https://www.npmjs.com/package/react-grid-system
export const setGridSystem = () =>
  setConfiguration({
    defaultScreenClass: 'xl',
    gridColumns: 12,
    gutterWidth: 40,
    breakpoints: [576, 768, 992, 768],
    containerWidths: [540, 750, 960, 1170],
  })
