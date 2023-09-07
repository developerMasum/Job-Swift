
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import {
      BiDotsHorizontal,
      BiEnvelope,
      BiMessageCheck,
      BiSolidCalendar,
      BiSolidChat,
      BiSolidHandLeft,
      BiSolidHandRight,
      BiSolidHand,
      BiLocationPlus,
      BiPhone,
      BiLogoLinkedinSquare,
      BiLogoFacebookSquare,
      BiUser,
      BiCategoryAlt,
} from "react-icons/bi";

const CandidiateUserDetails = () => {

      // const { id } = useParams();
      // console.log("error", id);
      // const [userDetails, setUserDetails] = useState(null);
    
      // useEffect(() => {
      //   // Fetch candidate profile data from the server based on the 'id' parameter
      //   const URL = `http://localhost:5000/all-applications/${id}`;
      //   console.log(URL);
      //   fetch(URL)
      //     .then((response) => response.json())
      //     .then((data) => {
      //       // Set the profile data in the state
      //       setUserDetails(data);
      //     })
      //     .catch((error) => {
      //       console.error("Error fetching profile data:", error);
      //     });
      // }, [id]); // Include 'id' as a dependency in the useEffect dependency array
    
      // // Check if profileData is still null or loading, and render accordingly
      // if (userDetails === null) {
      //   return <Loader />;
      // }


      const userDetails = [
            {

                  name: "Md Farhan Massum", gmail: "farhan445@gmail.com", phone: "+8801616841446", location: "Dhaka, Bangladesh", college: "Dhaka College", image: "https://signature.freefire-name.com/img.php?f=2&t=Masum",
                  job: "Redux.Dev", department: "Geography and Environment"
            },
            // {

            //       name: "Safull Islam", gmail: "saifull445@gmail.com", phone: "+8801616841448", location: "Dhaka, Bangladesh", college: "Tejgoan College", image: "https://www.nameslook.com/names/saifull-nameslook.png"
            // },
      ]

      return (
            <div className='pt-20'>
                  <div className='bg-image  bg-opacity-40 border border-slate-300 shadow-lg   '>
                        <div className='flex lg:md:justify-end  p-4'>
                              <div className='flex justify-around gap-8 bg-white px-4 items-center border border-slate-400 rounded-lg p-2'>
                                    <BiDotsHorizontal className='border-r-2 border-slate-400 pr-2 text-3xl'></BiDotsHorizontal>
                                    <BiEnvelope></BiEnvelope>
                                    <BiMessageCheck></BiMessageCheck>
                                    <BiSolidCalendar className='border-r-2 border-slate-400 pr-3 text-3xl'></BiSolidCalendar>
                                    <BiSolidChat></BiSolidChat>
                                    <div className='flex border-r-2 border-slate-400 pr-8 text-2xl'>
                                          <BiSolidHandRight></BiSolidHandRight>
                                          <BiSolidHandLeft></BiSolidHandLeft>
                                    </div>
                                    <BiSolidHand className='text-red-700'></BiSolidHand>
                                    <details className="dropdown btn-sm btn-primary rounded-md">
                                          <summary className="m-1 ">open or close</summary>
                                          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                                <li><a>Item 1</a></li>
                                                <li><a>Item 2</a></li>
                                          </ul>
                                    </details>
                              </div>
                        </div>
                  </div>
                  <div>
                        {
                              userDetails?.map((user, index) => {
                                    console.log(user);
                                    return <div key={index} className='shadow-2xl flex justify-between'>
                                          <div className='p-8 flex '>

                                                <div>
                                                      <img className='h-24 w-24 rounded-xl border border-slate-500' src={user?.image} alt="" />
                                                </div>
                                                <div className='px-4'>
                                                      <h1>{user?.name}</h1>
                                                      <h2>{user?.college}</h2>
                                                      <h3 className='flex gap-2 items-center'>
                                                            <BiLocationPlus></BiLocationPlus>
                                                            {user?.location}
                                                      </h3>
                                                      <h3 className='flex gap-2 items-center'>
                                                            <BiPhone></BiPhone>
                                                            {user?.phone}
                                                      </h3>
                                                </div>
                                          </div>
                                          <div className='p-8'>
                                                <div>
                                                      {user?.job} <small className='ml-4 font-bold'>.interview</small>
                                                </div>
                                                <div>
                                                      <p>via <small className='font-bold'>career page</small></p>
                                                </div>
                                          </div>
                                    </div>
                              })
                        }
                  </div>

                  <div className='mt-12 shadow-lg border border-slate-400 p-8 rounded-lg'>


                        <Tabs>
                              <TabList className="flex gap-12 mb-8 flex-col">
                                    <div>
                                          <div>
                                                <article className='font-bold'>Education</article>
                                                <div>
                                                      <div className='mt-4'>2019 - N/A</div>
                                                      <div>{userDetails.map(user => {
                                                            return <div className='flex gap-4'>
                                                                  <p>BSC in </p>
                                                                  <p>{user.department} in {user.college}</p>
                                                            </div>
                                                      })}</div>
                                                </div>
                                          </div>
                                    </div>
                                    <div className='flex gap-12'>
                                          <Tab className="btn-outline border border-slate-700 rounded-lg  px-8 py-2">Profile</Tab>
                                          <Tab className="btn-outline border border-slate-700 rounded-lg  px-8 py-2">Timeline</Tab>
                                    </div>
                              </TabList>

                              <TabPanel>
                                    <div className='border border-slate-700 p-64 text-center'>Here will be PDF viewer Section</div>

                                    <div className='mt-10'>
                                          <div>
                                                <h1 className='font-bold'>CONTACT DETAILS</h1>
                                                {
                                                      userDetails?.map(user => {
                                                            return <div className='mt-6'>
                                                                  <p className='flex gap-6'>
                                                                        <span>Adress</span>
                                                                        <span>{user?.location}</span>
                                                                  </p>
                                                                  <p className='flex gap-4'>
                                                                        <span>Phone: </span>
                                                                        <span>  {user?.phone}</span>
                                                                  </p>
                                                                  <p className='flex gap-6'>
                                                                        <span>Gmail: </span>
                                                                        <span>{user?.gmail}</span>
                                                                  </p>

                                                            </div>
                                                      })
                                                }
                                          </div>
                                          <div className="divider mt-10 font-bold"></div>

                                          <div>
                                                <h1 className='font-bold'>CONTACT PREFERENCES</h1>
                                                {
                                                      userDetails?.map(user => {
                                                            return <div className='mt-6'>
                                                                  <p className='flex gap-6'>
                                                                        <span>Texting:</span>
                                                                        <span>Enabled - consent confirmed</span>
                                                                  </p>

                                                            </div>
                                                      })
                                                }
                                          </div>
                                          <div className="divider mt-10 font-bold"></div>

                                          <div>
                                                <h1 className='font-bold'>SOCIAL PROFILES</h1>

                                                <div className='mt-6'>
                                                      <p>  These profiles were automatically retrieved, not provided by the candidate.</p>
                                                      <p className='flex gap-6 mt-4 text-xl'>
                                                            <BiLogoLinkedinSquare></BiLogoLinkedinSquare>
                                                            <BiLogoFacebookSquare></BiLogoFacebookSquare>
                                                      </p>

                                                </div>


                                          </div>
                                    </div>
                              </TabPanel>
                              <TabPanel className="border border-slate-600 rounded-lg p-8">
                                    <div className='flex justify-end gap-3 items-center mb-6'>
                                          <input type="checkbox" className="toggle" disabled checked />
                                          <small>Hide All Details</small>
                                    </div>
                                    <div>

                                          <div className="divider mt-6 font-bold"></div>
                                          <div className='flex items-center gap-8 pl-12'>
                                                <BiSolidHand className='text-2xl'></BiSolidHand>
                                                <div className="avatar">
                                                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                            AR
                                                      </div>
                                                </div>
                                                <p>Md Arifur Rahman</p>
                                                <p>disqualified candidate</p>
                                                <br />
                                                <br />
                                                <p className='flex justify-end'> .....  about 19 Hours ago</p>

                                          </div>

                                          <div className="divider mt-6 font-bold"></div>
                                          <div className="divider mt-6 font-bold"></div>
                                          <div className='flex items-center gap-8 pl-12'>

                                                <BiCategoryAlt className='text-2xl'></BiCategoryAlt>
                                                <div className="avatar">
                                                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                            BK
                                                      </div>
                                                </div>
                                                <p>Md Farhan Massum</p>
                                                <p>qualified candidate</p>
                                                <br />
                                                <br />
                                                <p className='flex justify-end'> .....  about 9 Hours ago</p>

                                          </div>

                                          <div className="divider mt-6 font-bold"></div>
                                          <div className="divider mt-6 font-bold"></div>

                                          <div className='flex items-center gap-8 pl-12'>

                                                <BiSolidChat className='text-2xl'></BiSolidChat>
                                                <div className="avatar">
                                                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                            KH
                                                      </div>
                                                </div>
                                                <p>Kabir Hossain</p>
                                                <p>interview candidate</p>
                                                <br />
                                                <br />
                                                <p className='flex justify-end'> .....  about 23 Hours ago</p>

                                          </div>

                                          <div className="divider mt-6 font-bold"></div>
                                          <div className="divider mt-6 font-bold"></div>
                                          <div className='flex items-center gap-8 pl-12'>

                                                <BiUser className='text-2xl'></BiUser>
                                                <div className="avatar">
                                                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                            AR
                                                      </div>
                                                </div>
                                                <p>Md Saifull Islam</p>
                                                <p>Hired candidate</p>
                                                <br />
                                                <br />
                                                <p className='flex justify-end'> .....  about 19 Hours ago</p>

                                          </div>

                                          <div className="divider mt-6 font-bold"></div>
                                          <div className="divider mt-6 font-bold"></div>
                                          <div className='flex items-center gap-8 pl-12'>
                                                <BiPhone className='text-2xl'></BiPhone>
                                                <div className="avatar">
                                                      <div className="w-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 p-2 text-center">
                                                            {/* <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
                                                            AB
                                                      </div>
                                                </div>
                                                <p>Anik Bissas Antor</p>
                                                <p>assesment candidate</p>
                                                <br />
                                                <br />
                                                <p className='flex justify-end'> .....  about 1 week  ago</p>

                                          </div>

                                          <div className="divider mt-6 font-bold"></div>

                                    </div>
                                    <footer className='text-center'>No more activities to view</footer>
                              </TabPanel>
                        </Tabs>
                  </div>

            </div >
      );
};

export default CandidiateUserDetails;
