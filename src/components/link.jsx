import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {addLink} from '../__data__/actions/linkAction'
import {Link} from '@mui/material'


const LinkWrap = () => {
    const links = useSelector(({Links}) => Links);
    const path = `${links.platform}${links.screen}${links.internalSource}${links.externalSource}`
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(addLink(path))
    }, [dispatch, path])

    return (
      <div className={"link-wrap"}>
          <Link href={path} underline="hover" variant="h5" gutterBottom>
              {path}
          </Link>
      </div>
    )
}

export default LinkWrap
