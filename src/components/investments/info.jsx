import {useSelector} from 'react-redux'
import {Typography} from '@mui/material'


export const Info = () => {
  const links = useSelector(({ investments }) => investments)

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
        Переход: {links.source}
      </Typography>
    </div>
  )
}

