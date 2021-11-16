import React from 'react';
import './MiddleSection.css';

const MiddleSection = () => {
    return (
        <div className='row'>
            <div className='col-1'>
                <img src='https://i.imgur.com/yplqcll.jpg' className='bg-image' alt=''/>
            </div>
            <div className='col-2'>
                <div className='card'>
                    <p Style='color:#212197'>LOREM IPSUM</p>
                    <h3>Lorem Ipsum<br/>dolor sit amet</h3>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                </div>
                <div class='social-links'>
                    <img src='https://i.imgur.com/ZQNUwyV.png' alt=''/>
                    <img src='https://i.imgur.com/UBrNv8i.png' alt=''/>
                    <img src='https://i.imgur.com/Z920cCD.png' alt=''/>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
