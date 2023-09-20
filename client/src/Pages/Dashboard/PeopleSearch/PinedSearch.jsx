import React from 'react';

const PinedSearch = () => {
    const previousBookmark = JSON.parse(localStorage.getItem("bookMark"))
    // console.log(previousBookmark)
    return (
        <div className='pt-40 '>

            <h1 className='text-center text-3xl font-bold'>PINED SEARCHED</h1>
            <div className='pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>


                {
                previousBookmark ?. map((pinBook, index) => {
                    return <div key={index}
                        className="card w-full bg-base-100 shadow-xl border border-slate-500">

                        <figure className='pt-4'>

                            <img className='h-64 w-64 rounded-lg border border-slate-500 shadow-md '
                                src={
                                    pinBook ?. image
                                }
                                alt="Not found"/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {
                                pinBook ?. jobTitle
                            }
                                <div className="badge bg-green-200 p-2">Pin</div>
                            </h2>
                            <p> {
                                pinBook ?. summary ?. slice(0, 200)
                            }
                                .....</p>

                            <div className="card-actions justify-around mt-10">
                                <div className="badge badge-outline">Stage: {
                                    pinBook ?. stage
                                }</div>
                                <div className="badge badge-outline">Location: {
                                    pinBook ?. location
                                }</div>
                            </div>
                        </div>
                    </div>


            })
            } </div>

        </div>

    );
};

export default PinedSearch;
