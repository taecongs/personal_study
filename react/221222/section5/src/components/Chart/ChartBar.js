import React from 'react';

import './ChartBar.css';

const ChartBar = (props) => {
    // 초기값을 0% 설정
    let barFillHeight = '0%';

    // 최대값이 0보다 큰지 확인
    if(props.maxValue > 0){
        // 1 ~ 100 사이의 값을 퍼센트로 나타나게 정의한다.
        // Math.round() : 가까운 정수로 반올림
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return(
        <div className='chart-bar'>

            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height : barFillHeight}}></div>
            </div>

            <div className='chart-bar__label'>{props.label}</div>
        </div>
    );
}

export default ChartBar;