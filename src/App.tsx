import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="p-2">
      {/* post container */}
      <div className="mx-auto max-w-2xl bg-white rounded-md shadow p-4 space-y-2 divide-y">

        {/* ส่วนของเจ้าของ post */}
        <div className="space-y-2">

          {/* image and name */}
          <div className="flex space-x-2 items-center">
            <img className="w-12 h-12 rounded-full" src="/profileImages/me.jpg"></img>
            <span className='font-semibold text-lg'>Kanyanatthawee Siri 630610715</span>
          </div>

          {/* status message */}
          <p>Quiz ยากจังเลยค่าาาา ทำไม่ได้เลย ดรอปดีไหมมมมม T____T #261207</p>

          {/* like section */}
          <div className='flex items-center'>
            <img className='w-4 h-4 mr-1' src='/like.svg'></img>
            <p className='text-gray-500'>999 คน</p>
          </div>

        </div>

        {/* comments section */}
        <div className="">

          {/* normal comment */}
          <div className="flex p-2 items-start space-x-2">
            <img className="w-10 w-10 rounded-full" src="/profileImages/mindmint.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">มายมิ้นเพื่อนดีเด่น</p>
              <p>ยากจริงเพื่อนรัก</p>
              {/* like section (จะไม่แสดงถ้าไม่มีใครไลค์เลย) */}
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>99 คน</p>
              </div>
            </div>
          </div>

          {/* replies */}
          {/* ต่างกันตรงที่มี padding มากกว่าเท่านั้น (pl-14) */}
          <div className="flex p-2 items-start space-x-2 pl-14">
            <img className="w-10 w-10 rounded-full" src="/profileImages/valorant.jpg"></img>
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="font-semibold">VALORANT</p>
              <p>มาเล่นเกมกันดีกว่าครับ</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
