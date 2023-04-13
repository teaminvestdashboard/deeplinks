import React from 'react';
import { PRODUCT } from './constants';


export const SettingsContext =  React.createContext({
  product: PRODUCT.INVESTMENTS_DASHBOARD,
  isWeb: false,
});

export default SettingsContext;
