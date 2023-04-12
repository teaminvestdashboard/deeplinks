import {useSelector} from 'react-redux'
import {Typography} from '@mui/material'


const Info = () => {
  const links = useSelector(({Links}) => Links)

  return(
    <div>
      <Typography variant="h6" component="h2">
        Платформа: {links.platform}
      </Typography>
      <Typography variant="h6" component="h2">
        Куда перейти: {links.deeplink}
      </Typography>
      <Typography variant="h6" component="h2">
        Экран: {links.screen}
      </Typography>
      <Typography variant="h6" component="h2">
        Внутренний переход: {links.internalSource}
      </Typography>
      <Typography variant="h6" component="h2">
        Внешний переход: {links.externalSource}
      </Typography>
    </div>
  )
}

export default Info;
