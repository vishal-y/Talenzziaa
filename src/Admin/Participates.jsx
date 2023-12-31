import PropTypes from 'prop-types';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../fireConfig';
import { useEffect, useState } from 'react';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default function Participates({ dbname }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db.collection(dbname).get();
        const newData = querySnapshot.docs.map((doc) => doc.data());
        setData(newData);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };
    fetchData();
  }, [dbname]);


  const reload = () => {
    location.reload();
  }

  const newspaperSpinning = [
  { transform: "scale(1)" },
  { display: "" },
  { transform: "scale(0)" },
  { display: "none" },
];

const newspaperTiming = {
  duration: 200,
  iterations: 1,
  fill : "forwards"
};

  function hide(e){
    console.log(e)
    document.getElementById(e).animate(newspaperSpinning, newspaperTiming);
  }


  return (
    
  
  <>

  {
    dbname == "initial" ? <div className='h-screen w-full flex justify-center items-center'>Click on the event name tab to get the data</div> :
    <div className="flex" key={dbname} >
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div className='flex justify-between items-center'>
          <h2 className="text-2xl font-semibold leading-tight">{dbname}</h2>
          <h2 onClick={reload}>Reload</h2>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal" id="table">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    id
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Fist Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    College Name
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Status
                  </th>

                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                    Hide
                  </th>

                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr id={`data${index}`} key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.firstName}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.lastName}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.email}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{user.collegeName}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {user.isPaid ? (
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">paid</span>
                        </span>
                      ) : (
                        <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-orange-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">Pending</span>
                        </span>
                      )}
                    </td>
                   
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap flex ">
                        <label className="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" className="sr-only peer" />
  <div onClick={(e)=>{hide(e.target.parentNode.parentNode.parentNode.parentNode.id)}} className="w-11 h-6 border  border-blue-500 bg-slate-400 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>

</label>
                         </p>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  }

   </>
    
  );
}

Participates.propTypes = {
  dbname: PropTypes.string,
};
