import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, cosector adispicing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, cosector adispicing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, cosector adispicing elit.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="bg-titusDarkGray rounded-md p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-200 my-4">Events</h1>
        <img src="/moreDark.png" alt="" height={20} width={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-[1px] border-gray-400 border-t-4 odd:border-t-titusLilac even:border-titusSky"
            key={event.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-500 ">{event.title}</h1>
              <span className="text-xs text-gray-600 ">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-600 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
