import { getFeaturedEvents } from "../dummy-data";
import EventList from "../components/event-list";

function Index() {
  const filteredEvents = getFeaturedEvents();
  return (
    <div>
      {/* THE HOME PAGE */}
      <EventList items={filteredEvents}/>
      </div>
  );
}

export default Index;