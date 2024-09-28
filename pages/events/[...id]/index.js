import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "../../../components/event-list";
import ResultsTitle from "../../../components/results-title/results-title";
import Link from "next/link";
import Button from "../../../components/ui/button";
import ErrorAlert from "../../../components/error-alert/error-alert/error-alert";



const FilterEventPage = () => {
  const router = useRouter();
  const filterdata = router.query.id;

  if(!filterdata){
    return <p className="center">Loading...</p>
  }

  const filterYear = filterdata[0];
  const filterMonth = filterdata[1];

  const newYear = +filterYear;
  const newMonth = +filterMonth;

  if(
    isNaN(newYear) ||
    isNaN(newMonth) ||
    newYear > 2030 ||
    newMonth < 1 ||
    newMonth > 12 
  ){
    return  <>
    <p>Invalid filter. Please adjust your filter</p>
    <div className="center">
      <Button link={'/events'}>All Events</Button>
    </div>
    </>
    
  }

  const filterEvents = getFilteredEvents({
    year: newYear,
    month: newMonth,
  });

  if(!filterEvents || filterEvents.length === 0){
    return <ErrorAlert>
    <p>No events found for the chosen filter! </p>
    <div className="center">
      <Button link={'/events'}>All Events</Button>
    </div>
    </ErrorAlert>
    
    
  }
  const date = new Date(newYear, newMonth -1);
  return (
    <>
    <div>Filter Event Page</div>
    <ResultsTitle date={date}/>

    <EventList items={filterEvents} />
    </>
    
  )
}

export default FilterEventPage