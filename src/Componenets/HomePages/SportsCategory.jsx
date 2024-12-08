// import React, { useEffect, useState } from 'react';


const SportsCategory = () => {
    // const [category, setCategory] = useState([])
    // console.log(category);
    // useEffect(() => {
    //     fetch('http://localhost:5000/sportsall')
    //     .then(res => res.json())
    //     .then(data => {
    //         const uniqueCategories = [...new Map(data.map(item => [item.category, item])).values()];
    //         setCategory(uniqueCategories);
    //     })
    // }, [])
    return (
        <div className='xl:mt-32 md:mt-20 mt-8'>

            <div className='flex items-center  justify-center gap-5' >
                 <div className="grid md:grid-cols-5  grid-cols-2 gap-6">
                     <button className="border border-[#baf120] py-2 hover:bg-[#baf120] px-4 ">Football</button>
                     <button className="border border-[#baf120] py-2 px-4 hover:bg-[#baf120] ">Tennis</button>
                     <button className="border border-[#baf120] py-2 px-4 hover:bg-[#baf120] ">Cricket</button>
                     <button className="border border-[#baf120] py-2 px-4 hover:bg-[#baf120] ">Basketball</button>
                     <button className="border border-[#baf120] py-2 px-4 hover:bg-[#baf120] ">Hockey</button>
                     
                 </div>
            </div>
        </div>
    );
};

export default SportsCategory;