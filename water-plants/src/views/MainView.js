import React from 'react';
import PlantList from '../components/PlantList/PlantList';
import BottomNav from '../components/Menus/BottomNav';

export default function MainView(props) {
    return (
        <div>
            <PlantList {...props} />
            <BottomNav {...props} />
        </div>
    );
}