import EventList from "../../components/event-list";
import EventSearch from "../../components/eventsearch";
import { getAllEvents } from "../../dummy-data";
import { useRouter } from "next/router";


function Events (){
  const event = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month){
    const fullpath = `/events/${year}/${month}`;

    router.push(fullpath);

  }
  return (
    <>
        <h1>All Events</h1>
        <EventSearch onSearch={findEventHandler} />
        <EventList items={event}/>
    </>
  )
}

export default Events;
