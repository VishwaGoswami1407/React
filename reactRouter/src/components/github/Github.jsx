import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
//     useEffect(() => {
//         fetch('https://api.github.com/users/VishwaGoswami1407')
//         .then(Response => Response.json())
//         .then(data => {
//             console.log(data);
//             setData(data)
            
//         })
//     }, [])
  return (
    <div  className='bg-wh '>
        
        <h1 className=' text-center m-4 text-white bg-black text-3xl mr-3'>Github Followers :{ data.followers}</h1>
    <img className='align-middle m-4  mr-3' src={data.avatar_url} alt="img" width={400} height={400}/>
    </div>
  )
}

export default Github

 

export const githubInLoader = async () => {
   const Response = await fetch('https://api.github.com/users/VishwaGoswami1407')
   return Response.json();
   
}
