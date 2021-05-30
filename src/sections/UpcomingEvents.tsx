import styled from "styled-components";
import { Button, Section } from "components";

const UpcomingEvents = () => {
  return (
    <Section
      id="upcoming-events"
      heading="Upcoming Events"
      subheading="Club Life"
      backgroundImage="/images/events-bg.png"
      bgColour="#171a3b"
    >
      <EventInformation>
        Due to Covid-19 no events are currently running as per goverment
        guidelines. However, check out our calendar to see when we will return!
      </EventInformation>

      <CalendarInformation>
        <Button colour="primary">Calendar</Button>
      </CalendarInformation>
    </Section>
  );
};

const EventInformation = styled.p`
  font-size: 1.8rem;
  line-height: 2.4rem;
  text-align: center;

  ${({ theme }) => theme.mediaQuery("md")`
		width: 600px;
		margin: 1em auto;
	`};
`;

const CalendarInformation = styled.div`
  text-align: center;
`;

export default UpcomingEvents;
