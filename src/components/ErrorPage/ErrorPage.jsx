import { useRouteError } from 'react-router-dom';
import Navigationbar from '../Navbar/Navigationbar';


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className='text-center font-2xl'>
           <Navigationbar></Navigationbar>
           <h2> Error Message:</h2>
           <p className='font-bold'>{error.error.message}</p>
           <p>Error status code: {error.status}</p>
            
        </div>
    );
};

export default ErrorPage;