import {Link} from 'react-router-dom';
import '../css/Navbar.css';

const num_events_ex = 3
const num_states_ex = 2


export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar">
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li className="navbar dropdown">
                    <Link to="#" className="dropbtn">Events Exercises</Link>
                    <div className="dropdown-content">
                        {new Array(num_events_ex).fill(0).map((_, index) => (
                            <Link to={`/events/${index+1}`} key={index}>Events {index+1}</Link>
                        ))}
                    </div>
                </li>
                <li className="navbar dropdown">
                    <Link to="#" className="dropbtn">States Exercises</Link>
                    <div className="dropdown-content">
                        {new Array(num_states_ex).fill(0).map((_, index) => (
                            <Link to={`/states/${index+1}`} key={index}>Events {index+1}</Link>
                        ))}
                    </div>
                </li>
            </ul>
        </nav>
    )
}