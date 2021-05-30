import styled from "styled-components";
import { Button, Section } from "components";
import { DateRange, MailOutline, Person, Schedule } from "@material-ui/icons";

const Reservation = () => {
  const handleSubmit = (e: any) => e.preventDefault();

  return (
    <Section
      id="reservation"
      subheading="Reservation"
      heading="Booking a Table"
    >
      <Form onSubmit={handleSubmit} autocomplete="off">
        <Form.Control>
          <Input type="text" placeholder="Your Name" />
          <Person color="inherit" />
        </Form.Control>

        <Form.Control>
          <Input type="text" placeholder="Your Email" />
          <MailOutline color="inherit" />
        </Form.Control>

        <Form.Control>
          <Input
            type="text"
            placeholder="Date"
            onFocus={({ target }) => {
              target.placeholder = "MM/DD/YYYY";
              target.type = "date";
            }}
          />
          <DateRange color="inherit" />
        </Form.Control>

        <Form.Control>
          <Input
            type="text"
            placeholder="Time"
            onFocus={({ target }) => (target.type = "time")}
            min="23:00"
            max="06:00"
          />
          <Schedule color="inherit" />
        </Form.Control>

        <Submit>
          <Button type="submit" colour="primary" size="small">
            Book Now
          </Button>
        </Submit>
      </Form>
    </Section>
  );
};

const Form: any = styled.form`
  border: ${({ theme }) => `4px solid ${theme.primary}`};
  padding: 1.5em;
`;

const Control = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 2em;
`;

Form.Control = Control;

const Input = styled.input`
  all: unset;
  flex: 1;

  color: white;

  ::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }

  ::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
`;

const Submit = styled.div`
  text-align: center;
`;

export default Reservation;
