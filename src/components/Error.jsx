import React from 'react';

function Error({children}) {
  return (
    <div>
      <p className="font-body font-light text-xs text-red-500 ml-4">
        {children}
      </p>
    </div>
  )
}

export default Error;