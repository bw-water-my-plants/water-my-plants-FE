import React from 'react';
import styled from 'styled-components';

//import components
import BottomNav from '../components/Menus/BottomNav';
import Profile from '../components/Profile/Profile';

export default function ProfilePageView(props) {
    return (
        <div>
            <Profile />
            <BottomNav {...props} />
        </div>
    );
}
