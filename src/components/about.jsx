import React from 'react'

const about = () => {
  return (
    <div name = "about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-centerw-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aut numquam cum consequuntur ipsa similique magni doloremque itaque minima. A incidunt praesentium vel rerum quo saepe quas numquam maiores maxime exercitationem ullam iste fuga nulla ea, molestiae cupiditate, voluptas rem tempore illum repellendus quod impedit. Labore error asperiores fuga aliquid?
            </p>
            <br/>
            <p  className='text-xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eius tempore enim modi, eum neque hic distinctio dolor fuga expedita temporibus quo cumque repellendus aliquam possimus maiores deserunt voluptatum exercitationem praesentium? Corrupti a repellendus explicabo illo odit atque aut, assumenda placeat ipsa facere? Nostrum magni molestiae voluptate doloremque, dolorum perspiciatis?
            </p>
        </div>
    </div>
  )
}

export default about