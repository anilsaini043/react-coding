import { } from 'react';
import Progress from "../progressBar/Progress.jsx";

const ProgressBar = () => {
    const progressCount = [3,5, 30, 60, 80, 95]
    return (
        <>
            <h1>Project - 1 (Progress bar)</h1>
            <br/>
            {
                progressCount.map((progress, index)=>{
                    return <Progress key={index} progress={progress} />
                })
            }
        </>
    )
}

export default ProgressBar;