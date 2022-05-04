import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
