import { useLocation } from 'react-router-dom'
import Errors from '../components/ui/Error'

const UnAuthorized = () => {
    const { state } = useLocation()
    const { message } = state

    return <Errors message={message} statusCode={401} />
}

export default UnAuthorized