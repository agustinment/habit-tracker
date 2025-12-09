// STATELESS COMPONENT
import '../styles/habit-tracker.css'
import HabitRow from './HabitRow'

const HabitTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" className='col'>HABIT</th>
                    <th scope="col" className='col'>Mo</th>
                    <th scope="col" className='col'>Tu</th>
                    <th scope="col" className='col'>We</th>
                    <th scope="col" className='col'>Th</th>
                    <th scope="col" className='col'>Fr</th>
                    <th scope="col" className='col'>Sa</th>
                    <th scope="col" className='col'>Su</th>
                </tr>
            </thead>
            <tbody>
                {props.habits.map((habit, index) => <HabitRow habit={habit} habitIdx={index} onToggleDay={props.onToggleDay}/>)}
            </tbody>
        </table>
    )
}

export default HabitTable;