import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext/AuthContext';
import './home.scss';
import {useNavigate} from 'react-router-dom';

const Home = () => {
    const { dispatch } = useContext(AuthContext)
    const navigate = useNavigate()
    const logoutUser = (e) => {
        e.preventDefault();
        localStorage.removeItem('authentication')
        dispatch({ type: 'LOGOUT' })
        navigate('/login')
    }



    return (
        <div className='homeWrapper'>
            <div className="body" style={{textAlign:'center'}}>
                <h2>Hi</h2>
                <h5>You are logeed in</h5>
                <button onClick={logoutUser}>Logout</button>

            </div>

        </div>
    )
}

export default Home