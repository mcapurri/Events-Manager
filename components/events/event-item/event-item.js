import style from './event-item.module.css';
import Button from '../../UI/Button/Button';
import DateIcon from '../../icons/date-icon';
import AddressIcon from '../../icons/address-icon';
import ArrowRightIcon from '../../icons/arrow-right-icon';

const EventItem = ({ title, image, date, location, id }) => {
    const niceDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const exploreLink = `/events/${id}`;

    return (
        <li className={style.item}>
            <img src={'/' + image} alt="event-img" />
            <div className={style.content}>
                <div className={style.summary}>
                    <h2>{title}</h2>
                </div>
                <div className={style.date}>
                    <DateIcon />
                    <time>{niceDate}</time>
                </div>
                <div className={style.address}>
                    <AddressIcon />
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={style.actions}>
                <Button link={exploreLink}>
                    <span>Explore Event</span>
                    <span className={style.icon}>
                        <ArrowRightIcon />
                    </span>
                </Button>
            </div>
        </li>
    );
};

export default EventItem;
