import {APP} from './constants'

export const getTarget = (data, {product, isWeb}) => {
  const target = typeof data === 'object' && data[product] && data[product][isWeb ? APP.WEB : APP.MOBILE];
  return target || [];
}
