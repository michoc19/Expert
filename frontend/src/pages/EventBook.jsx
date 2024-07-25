// import React from 'react';
// import { Link } from 'react-router-dom';

// // Mock event data
// const events = [
//   {
//     id: 1,
//     title: "Freshman Orientation 2024",
//     date: "August 1, 2024",
//     description: "An introductory session for all incoming freshmen to get acquainted with the university."
//   },
//   {
//     id: 2,
//     title: "Campus Tour and Social",
//     date: "August 2, 2024",
//     description: "A guided tour around the campus followed by a social gathering to meet fellow students."
//   },
//   {
//     id: 3,
//     title: "Academic Advising Session",
//     date: "August 3, 2024",
//     description: "Meet with academic advisors to plan your course schedule and understand academic requirements."
//   }
// ];

// // Card component
// const Card = ({ children, className }) => (
//   <div className={`bg-white shadow-md rounded-lg p-4 ${className}`}>
//     {children}
//   </div>
// );

// // CardHeader component
// const CardHeader = ({ children }) => (
//   <div className="mb-2">
//     {children}
//   </div>
// );

// // CardTitle component
// const CardTitle = ({ children }) => (
//   <h2 className="text-xl font-bold">
//     {children}
//   </h2>
// );

// // CardContent component
// const CardContent = ({ children }) => (
//   <div className="mb-2">
//     {children}
//   </div>
// );

// // CardFooter component
// const CardFooter = ({ children }) => (
//   <div className="mt-4">
//     {children}
//   </div>
// );

// // Button component
// const Button = ({ onClick, children }) => (
//   <button
//     onClick={onClick}
//     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//   >
//     {children}
//   </button>
// );

// // EventCard component
// const EventCard = ({ event }) => {
//   return (
//     <Card className="mb-4">
//       <CardHeader>
//         <CardTitle>{event.title}</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p><strong>Date:</strong> {event.date}</p>
//         <p>{event.description}</p>
//       </CardContent>
//       <CardFooter>
//         <Link to="/eventticket">
//           <Button>Book Ticket</Button>
//         </Link>
//       </CardFooter>
//     </Card>
//   );
// };

// // EventsPage component
// const EventsPage = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Upcoming Orientation Events</h1>
//       {events.map(event => (
//         <EventCard key={event.id} event={event} />
//       ))}
//     </div>
//   );
// };

// export default EventsPage;
