import { useState, useContext, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {
  const [inputText, setInputText] = useState("");
  const [inputRating, setInputRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setInputText(feedbackEdit.item.text);
      setInputRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleRating = (inputRating) => {
    setInputRating(inputRating);
  };

  const handleInput = (e) => {
    const enteredText = e.target.value;
    setInputText(enteredText);
    if (enteredText.length >= 10) setBtnDisabled(false);
    else setBtnDisabled(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim().length >= 10) {
      const newFeedback = {
        id: uuidv4(),
        text: inputText,
        rating: inputRating,
      };
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setBtnDisabled(true);
      setInputRating(10);
      setInputText("");
    }
  };

  return (
    <Card>
      <RatingSelect inputRating={inputRating} handleRating={handleRating} />
      <h2>How would you rate your service with us?</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            onChange={handleInput}
            value={inputText}
            placeholder="Write review"
          />
          <Button isDisabled={btnDisabled}>Send</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
