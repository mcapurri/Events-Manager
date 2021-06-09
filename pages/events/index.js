import { useRouter } from 'next/router';
import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list';
import EventsSearch from '../../components/events/events-search/events-search';

const Events = () => {
    const events = getAllEvents();
    const router = useRouter();

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push();
    };
    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </>
    );
};

export default Events;
