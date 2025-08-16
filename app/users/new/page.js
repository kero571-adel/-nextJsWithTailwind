import TestClick from '@/app/components/testClick';
import React from 'react';
import Testcss from '@/app/components/testcss';
const page = () => {
  return (
    <>
        <div className='p-1.5 my-2 bg-sky-400 text-white text-2xl hover:bg-sky-700'>page</div>
        <TestClick/>
        <Testcss/>
    </>
  )
}
export default page