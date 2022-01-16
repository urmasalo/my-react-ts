import {useEffect, useRef, useState} from 'react';

type TimeArgs = {
    milliseconds: number
}

export const Timer = ({milliseconds}: TimeArgs) => {

    const [seconds, setSeconds] = useState(0);
    const ref = useRef<NodeJS.Timeout>();

    useEffect( () => {
        ref.current && clearInterval( ref.current );
        ref.current = setInterval( () => setSeconds( s => s + 1), milliseconds);
    }, [milliseconds])

    return (
        <>
            <h4>Timer: <small>{ seconds }</small></h4>
        </>
    )
}
