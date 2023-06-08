import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from '@mui/material'


export const LinkWrap = ({ preparedPath, action }) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(action(preparedPath))
    }, [dispatch, preparedPath, action])

    return (
        <div className={"link-wrap"}>
            <Link href={preparedPath} underline="hover" variant="h5" gutterBottom>
                {preparedPath}
            </Link>
        </div>
    )
}

