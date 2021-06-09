import styles from '../styles/Home.module.css';
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list/event-list';
import EventsSearch from '../components/events/events-search/events-search';

function Home() {
    const featuredEvents = getFeaturedEvents();
    return (
        <>
            <EventsSearch />
            <EventList items={featuredEvents} />
        </>
    );
}

export default Home;
