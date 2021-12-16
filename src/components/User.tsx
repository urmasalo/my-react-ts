import { useState } from 'react'

interface user {
    id: number,
    name: string
}

export const User = () => {

    const [user, setUser] = useState<user>()

    const login = () => {
        setUser({
            id: 1,
            name: "Mauricio"
        })
    }

    return (
        <div className='mt-5'>
            <h3>User: useState</h3>
            <button 
                onClick={login}
                className="btn btn-outline-primary">Login
            </button>
            {
                (!user)
                    ? <pre> No Hay Usuario</pre>
                    : <pre> {JSON.stringify(user)}</pre>
            }
            

        </div>
    )
}
