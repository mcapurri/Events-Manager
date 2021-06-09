import EventItem from '../event-item/event-item';
import style from './event-list.module.css';

const EventList = ({ items }) => {
    return (
        <ul className={style.list}>
            {items.map((event) => (
                <EventItem
                    key={event.id}
                    id={event.id}
                    title={event.title}
                    location={event.location}
                    date={event.date}
                    image={event.image}
                />
            ))}
        </ul>
    );
};

export default EventList;