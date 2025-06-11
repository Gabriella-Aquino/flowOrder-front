import React from 'react'

function Client({name, email}) {
  return (
    <div className='flex w-full p-3 justify-between'>
      <div>
        nome: {name}
      </div>
      <div>
        email: {email}
      </div>
    </div>
  )
}

export default Client