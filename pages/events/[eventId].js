import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from '../../components/event-detail/event-summary/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics/event-logistics';
import EventContent from '../../components/event-detail/event-content/event-content';

const EventDetails = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    console.log('event', event);

    if (!event) {
        return <p>No event found!</p>;
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.imageAlt}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default EventDetails;
