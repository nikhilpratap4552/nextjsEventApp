import EventItem from "./event-item";
import classes from './eventlist.module.css'

function EventList(props) {
    const {items} = props;
  return (
    <>
    {/* <div>Event List</div> */}
        <ul className={classes.list}>
            {items.map((event) => (
                <EventItem key={event.id} id={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
            ))}
        </ul>
  
    </>
    );
}

export default EventList;