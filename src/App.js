import "./styles.css";
import Header from "./header";
import TinderCards from "./tinderCard";
import SwipeButton from "./swipeButton";

export default function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header/>
      {/* Swipe Section */}
      <TinderCards />
      {/* action */}
      <SwipeButton/>
    </div>
  );
}
