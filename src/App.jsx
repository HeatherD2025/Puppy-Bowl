import PuppyDetails from "./features/puppies/PuppyDetails";
import PuppyList from "./features/puppies/PuppyList";
import PuppyForm from "./features/puppies/PuppyForm";
import Nav from "./features/Nav";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/**
 * @component
 * This app shows a list of puppy bowl players from the API.
 * Users can view players in the roster, add a player to the roster,
 * see more details about a specific player, and remove a player from the roster.
 */
export default function App() {
  return (
    <>
      <h1>Puppy Bowl</h1>
      <BrowserRouter>
        <Nav />
          <Routes>
            <Route path="/PuppyForm" element={<PuppyForm />} />
            <Route path="/" element={<PuppyList />} />
            <Route path="/PuppyDetails/:id" element={<PuppyDetails />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
