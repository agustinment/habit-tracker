// STATEFUL COMPONENT
import React, { useState } from 'react';
import '../styles/habit-tracker.css'
import HabitTable from './HabitTable'

const HabitTracker = () => {
    const [habits, setHabits] = useState([
        {
            name: 'Practice React',
            weekState: {
                Mo: false, 
                Tu: false, 
                We: false, 
                Th: false, 
                Fr: false, 
                Sa: false, 
                Su: false
            }
        },
        {
             name: 'Make my bed',
            weekState: {
                Mo: false, 
                Tu: false, 
                We: false, 
                Th: false, 
                Fr: false, 
                Sa: false, 
                Su: false
            }
        },
        {
            name: 'Do exercise',
            weekState: {
                Mo: false, 
                Tu: false, 
                We: false, 
                Th: false, 
                Fr: false, 
                Sa: false, 
                Su: false
            }
        }

    ]);

    return (
        <HabitTable habits={habits} />
    )

};



export default HabitTracker;