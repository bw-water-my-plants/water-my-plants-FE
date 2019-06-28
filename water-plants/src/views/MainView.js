import React from 'react';
import PlantList from '../components/PlantList/PlantList';
import BottomNav from '../components/Menus/BottomNav';
import AddPlant from '../components/Menus/AddPlant';
import NavBar from "../components/NavBar/NavBar";
export default function MainView(props) {
    return (
        <div>
            <NavBar {...props} />
            <PlantList {...props} />
            <BottomNav {...props} />
            <AddPlant />
        </div>
    );
}