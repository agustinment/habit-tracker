// STATELESS COMPONENT
import '../styles/habit-tracker.css'
import HabitRow from './HabitRow'

const HabitTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">HABIT</th>
                    <th scope="col">Mo</th>
                    <th scope="col">Tu</th>
                    <th scope="col">We</th>
                    <th scope="col">Th</th>
                    <th scope="col">Fr</th>
                    <th scope="col">Sa</th>
                    <th scope="col">Su</th>
                </tr>
            </thead>
            <tbody>
                {props.habits.map((habit, index) => <HabitRow habit={habit} habitIdx={index}/>)}
            </tbody>
        </table>
    )
}

export default HabitTable;