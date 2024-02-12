import { Link } from "react-router-dom";
function NotFound() {
    return (
        <>
            <img src="./src/assets/404_page_cover.jpg" />

            <div><Link to="/">Go back to Homepage</Link></div>
        </>
    )
}
export default NotFound;