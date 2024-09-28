import { useRouter } from 'next/router';
import { Fragment } from 'react'
import { getEventById } from '../../dummy-data';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/error-alert/error-alert/error-alert';


function EventdetailPage() {
  const router = useRouter();
  const eventId = router.query.eventIdd;
  
  //console.log(router.query);
  const event = getEventById(eventId);
  if(!event){
    return <ErrorAlert> <p>no event found such type </p>
    <div className="center">
      <Button link={'/events'}>All Events</Button>
    </div>
    </ErrorAlert>
  }
  
  //console.log(event, "nothing");
  //console.log(eventId);
  return (
    <Fragment>
       <EventSummary title={event.title} />
       <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} /> 
       <EventContent >
        <p>{event.description}</p>
      </EventContent> 

      {/* <EventSummary title={event.title} />
      <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent> */}
      {/* <h1>there is no content <br/></h1> */}
    </Fragment>
  );
}

export default EventdetailPage;