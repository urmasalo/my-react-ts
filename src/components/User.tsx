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
        <>
            <h3>User</h3>
            <button 
                onClick={login}
                className="btn btn-outline-primary">Login
            </button>
            {
                (!user)
                    ? <pre> No Hay Usuario</pre>
                    : <pre> {JSON.stringify(user)}</pre>
            }
            

        </>
    )
}
