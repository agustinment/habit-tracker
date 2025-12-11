// STATEFUL COMPONENT
import { useState, useEffect } from 'react';
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

    // LOCAL STORAGE
    useEffect(() => {
        const habitTrackerData = localStorage.getItem('habits-data');
        if (habitTrackerData) {
            try {
                setHabits(JSON.parse(habitTrackerData))
            }
            catch {
                setHabits([])
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('habits-data', JSON.stringify(habits))
    }, [habits])


    function handleToggleDay(habitIdx, day){
        setHabits(prevHabits => {
            let arrayCopy = [...prevHabits];
            let habitCopy = { ...arrayCopy[habitIdx] };
            let weekCopy = { ...habitCopy.weekState };

            weekCopy[day] = !weekCopy[day]
            habitCopy.weekState = weekCopy;
            arrayCopy[habitIdx] = habitCopy;
            
            return arrayCopy;
        })
    }

    return (
        <HabitTable habits={habits} onToggleDay={handleToggleDay} />
    )

};



export default HabitTracker;