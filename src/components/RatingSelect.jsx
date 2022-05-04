import { useState } from "react";

function RatingSelect({ inputRating, handleRating }) {
  const [selected, setSelected] = useState(inputRating);

  const handleChange = (e) => {
    setSelected(+e.currentTarget.value);
    handleRating(+e.currentTarget.value);
  };

  return (
    <ul className="rating">
      {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).map((a) => {
        return (
          <li key={`rating-${a}`}>
            <input
              type="radio"
              id={`num${a}`}
              name="rating"
              value={a}
              onChange={handleChange}
              checked={selected === a}
            />
            <label htmlFor={`num${a}`}>{a}</label>
          </li>
        );
      })}
    </ul>
  );
}

export default RatingSelect;
