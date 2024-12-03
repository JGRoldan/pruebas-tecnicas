import Errors from '../components/ui/Error'

const NotFound = () => {
    return <Errors
        statusCode={404}
        message="Sorry, we can't find that page. You'll find lots to explore on the home page."
    />
}

export default NotFound