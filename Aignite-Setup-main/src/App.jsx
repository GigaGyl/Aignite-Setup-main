import React from "react";

function App()
{
  return (
    <div className="bg-red-900 flex justify-center w-full min-h-screen text-white">
      <header className='absolute top-0 text-xl p-5 bg w-full text-center rounded-lg'>
        To-Do List App
      </header>

      <main className='pt-36 w-3/4'>
        {/* User Prompt */}
        <div className='flex justify-center'>
          <input className='bg-slate-700 p-4 rounded-2xl w-3/4 shadow-md' placeholder='Type your text...' />
          <button className='pl-2 h-12 pt-2'>
      <img 
        src='/logo192.png' 
        alt='enter' 
        className='w-full h-full' 
      />
    </button>
        </div>
  {/* Spacing */}
  <div className='p-6'>

    {/* To-Do List */}
    <div className='flex justify-center'>
      <div className='w-[85%] flex flex-col gap-y-4'>
        <hr/>
        <p className='font-semibold text-xl'>Your To-Do List</p>

        {/* Card 1 */}
        <div className='bg-slate-700 p-4 rounded-2xl shadow-lg'>
          <span className='font-semibold text-2xl'>
            Crossing the Road
          </span>
          <br />
          <br />
          <span className='text-base'>
            Why did the chicken cross the road <br />
            Date: 30 October 2025 <br />
            Time: 10.00 AM <br />
            Status: Active <br />
            <input type='checkbox'/>
          </span>
        </div>
        {/* Card 2 */}
        <div className='bg-slate-700 p-4 rounded-2xl shadow-lg'>
          <span className='font-semibold text-2xl'>
            Cleaning the house
          </span>
          <br />
          <br />
          <span className='text-base'>
            Why did the chicken clean the house <br />
            Date: 31 October 2025 <br />
            Time: 11.00 AM <br />
            Status: Active <br />
            <input type='checkbox'/>
          </span>
        </div>
      </div>
    </div>
    
  </div>
</main>
    </div>
  );
}

export default App;
