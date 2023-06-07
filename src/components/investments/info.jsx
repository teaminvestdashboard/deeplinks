import {useSelector} from 'react-redux'
import {Typography} from '@mui/material'


export const Info = () => {
  const links = useSelector(({ investments }) => investments)

  return(
    <div>
      <Typography variant="h6" component="h2">
        Платформа: {links.platform.path}
      </Typography>
      <Typography variant="h6" component="h2">
        Куда перейти: {links.deeplink.title}
      </Typography>
      <Typography variant="h6" component="h2">
        Экран: {links.screen.path}
      </Typography>
      <Typography variant="h6" component="h2">
        Переход: {links.source.code}
      </Typography>
    </div>
  )
}

