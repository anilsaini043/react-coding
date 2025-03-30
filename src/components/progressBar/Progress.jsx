import { useEffect, useState } from "react";

const Progress = ({ progress }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(progress)
    }, [progress])

    return (
        <div className='outer-bar'>
            <div role="progressbar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={progress} className='inner-bar' style={{ color: `${progress < 5 ? '#000' : '#fff'}`, transform: `translateX(${count - 100}%)` }}>{count}%</div>
        </div>
    )
}

export default Progress;