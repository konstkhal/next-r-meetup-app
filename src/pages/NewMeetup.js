import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    addMeetupHandler(meetupData) {

    }
  return (
    <section>
      <h1>New Meetup Page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  ) ;
}

export default NewMeetupPage;
