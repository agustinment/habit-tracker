// STATELESS COMPONENT
import '../styles/habit-tracker.css'

const DAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

const HabitRows = props => {
    const values = Object.values(props.habit.weekState);
    const daysChecked = values.filter(v => v).length;
    const total = values.length;

    return (
        <>
            <tr>
                <th scope='row'>{props.habit.name}</th>
                {DAYS.map(dayKey => (
                    <td
                        key={dayKey}
                        className={props.habit.weekState[dayKey]? 'check' : 'day'}
                        onClick={() => props.onToggleDay(props.habitIdx, dayKey)}
                    >
                    </td>
                ))}
                <td className='counter'>{daysChecked} / {total} <span className='streak'>{daysChecked >= 5 ? `${daysChecked}🔥` : null}</span></td>
            </tr>
        </>
    )
}

export default HabitRows;