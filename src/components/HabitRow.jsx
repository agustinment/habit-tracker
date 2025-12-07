// STATELESS COMPONENT
import '../styles/habit-tracker.css'

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const HabitRows = props => {
    return (
        <>
            <tr>
                <th scope='row'>{props.habit.name}</th>
                {DAYS.map(dayKey => (
                    <td
                        key={dayKey}
                        className={props.habit.weekState[dayKey]? 'check' : ''}
                    >
                    </td>
                ))}
            </tr>
        </>
    )
}

export default HabitRows;