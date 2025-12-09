// STATELESS COMPONENT
import '../styles/habit-tracker.css'

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const HabitRows = props => {
    const values = Object.values(props.habit.weekState);
    const length = values.filter(v => v).length;
    const total = values.length;

    return (
        <>
            <tr>
                <th scope='row'>{props.habit.name}</th>
                {DAYS.map(dayKey => (
                    <td
                        key={dayKey}
                        className={props.habit.weekState[dayKey]? 'check' : ''}
                        onClick={() => props.onToggleDay(props.habitIdx, dayKey)}
                    >
                    </td>
                ))}
                <td className='counter'>{length} / {total}</td>
            </tr>
        </>
    )
}

export default HabitRows;