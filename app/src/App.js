import React, { useState } from 'react';

function App() {
 
    const [foo, useFoo] = useState(0)

    return (
      <div onClick={() => useFoo(foo + 1)}>
        {foo}
      </div>
    );

}

export default App;
