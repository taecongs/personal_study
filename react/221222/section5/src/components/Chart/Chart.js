import React from 'react';

import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
    const dataPointValue = props.dataPoint.map((dataPoint) => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValue);

    return (
        <div className='chart'>
            {/* props 통해 dataPoint를 받고 그 값은 배열이다. */}
            {props.dataPoint.map((dataPoint) =>
                <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} />
            )}
        </div>
    );
}

export default Chart;