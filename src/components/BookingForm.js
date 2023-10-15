import React, { useState } from "react";
import "../css/booking.css";

const BookingForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState(
    ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
  );
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');

  return (
  <form>
    <label for="res-date">Choose date</label>
    <input type="date" id="booking-date" name="booking-date"
          onChange={e => setDate(e.target.value)} value={date}
          placeholder="date"
    />
    <label for="booking-time">Choose time</label>
    <select id="booking-time" value={time} onChange={e => setTime(e.target.value)}>
    {availableTimes.map((availableTime, index) => (
      <option key={index} value={availableTime}>{availableTime}</option>
    ))}
    </select>
    <label for="guests">Number of guests</label>
    <input type="number"
          value={guests} onChange={e => setGuests(e.target.value)}
          placeholder="1" min="1" max="10" id="guests"
    />
    <label for="occasion">Occasion</label>
    <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>
    <input type="submit" value="Make Your reservation"/>
  </form>
  );
}

export default BookingForm;