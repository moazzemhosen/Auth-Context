import {Link} from 'react-router-dom'


export const Navbar=()=>{
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/users">User</Link>



            {/* {navigator.maxTouchPoints((e,i)=(
                <Link key={i} to={e.to} style={{margin:"5px"}}>
                {e.title}</Link>
            ))} */}
        </div>
    )
}