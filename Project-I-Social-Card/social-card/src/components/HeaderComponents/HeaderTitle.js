import React from 'react';
import './Header.css';
// import moment from 'moment';

const HeaderTitle = () => {
    return (
        <div className='header-title-wrapper'>
            <div className='header-title'>
                Lambda School
                <span className='twitter-handle'> @LambdaSchool • </span>
                <span className='time-stamp'>26 Jan</span>
                {/* <span className='time-stamp'>{time.format('MMM Do ')}</span> */}
            </div>   
        </div>
    )
}

export default HeaderTitle;