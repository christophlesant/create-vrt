import { useState } from 'react';

// Look for the {/******/} and delete that + everything between when you're ready to start developing!

function App() {
  {
    /*********/
  }
  const [blueBorder, setBlueBorder] = useState('border-4');
  const [redBorder, setRedBorder] = useState('border-4');
  const [yellowBorder, setYellowBorder] = useState('border-4');
  const [background, setBackground] = useState('bg-slate-900');
  const handleBlueDown = () => {
    setBlueBorder('');
    setBackground('bg-slate-900');
  };
  const handleBlueUp = () => {
    setBlueBorder('border-4');
    setBackground('bg-blue-900');
  };
  const handleRedDown = () => {
    setRedBorder('');
    setBackground('bg-slate-900');
  };
  const handleRedUp = () => {
    setRedBorder('border-4');
    setBackground('bg-red-900');
  };
  const handleYellowDown = () => {
    setYellowBorder('');
    setBackground('bg-slate-900');
  };
  const handleYellowUp = () => {
    setYellowBorder('border-4');
    setBackground('bg-yellow-700');
  };
  {
    /*********/
  }
  return (
    <div>
      {/*********/}
      <div className='flex flex-col h-screen w-screen rounded-3xl items-center justify-center bg-gradient-to-tr from-purple-900 via-sky-800 to-sky-950'>
        <div
          className={`text-center w-98 p-10 rounded-[50px] ${background} shadow-xl shadow-black transition-colors ease-in`}
        >
          <div className='italic font-mono uppercase'>
            Test the buttons below
          </div>
          <div className='flex justify-around py-8'>
            <div
              className={`w-10 h-10 rounded-[50%] border-black ${blueBorder} transition-all ease-linear`}
            >
              <button
                className='w-10 h-10 rounded-[50%] bg-cyan-600 border-4 border-neutral-700'
                onMouseDown={handleBlueDown}
                onMouseUp={handleBlueUp}
              ></button>
            </div>
            <div
              className={`w-10 h-10 rounded-[50%] border-black ${redBorder} transition-all ease-linear`}
            >
              <button
                className='w-10 h-10 rounded-[50%] bg-rose-800 border-4 border-neutral-700'
                onMouseDown={handleRedDown}
                onMouseUp={handleRedUp}
              ></button>
            </div>
            <div
              className={`w-10 h-10 rounded-[50%] border-black ${yellowBorder} transition-all ease-linear`}
            >
              <button
                className='w-10 h-10 rounded-[50%] bg-yellow-600 border-4 border-neutral-700'
                onMouseDown={handleYellowDown}
                onMouseUp={handleYellowUp}
              ></button>
            </div>
          </div>
          <div className='font-mono'>
            If colors changed then you're good to go &#128077;
          </div>
        </div>
        <div className='mt-12'>
          <a href='https://react.dev/' target='_blank'>
            <div
              className='font-bold font-mono my-4 text-white text-center hover:text-cyan-200
             bg-slate-800 hover:bg-blue-950 hover:shadow hover:shadow-white py-4 px-8 rounded-3xl transition-all ease-linear'
            >
              Learn more about React
            </div>
          </a>
          <a href='https://tailwindcss.com/' target='_blank'>
            <div
              className='font-bold font-mono my-4 text-white text-center hover:text-cyan-200
             bg-slate-800 hover:bg-slate-900 hover:shadow hover:shadow-white py-4 px-8 rounded-3xl transition-all ease-linear'
            >
              Brush up on Tailwind CSS
            </div>
          </a>
          <div>
            Give me a follow on{' '}
            <a
              href='https://twitter.com/Heavysomnia'
              target='_blank'
              className='text-cyan-400 hover:text-cyan-300'
            >
              X/Twitter
            </a>{' '}
            if you've found this package helpful ✌️
          </div>
        </div>
      </div>
      {/*********/}
    </div>
  );
}

export default App;
