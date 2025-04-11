import { useState } from "react";
import { useAddPuppyMutation } from "./puppySlice";
import { useNavigate } from "react-router-dom";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */

export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [addPuppy] = useAddPuppyMutation();
  const navigate = useNavigate();
  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted
  const postPuppy = async (event) => {
    event.preventDefault();
    const { data, error } = await addPuppy({ name, breed }).unwrap();
    if (error) {
      console.error(error);
    } else {
      console.log("Puppy added:", data);
      navigate("/");
    }
  };

  // Placeholder image w/ random photos of dogs
  const imageUrl = "https://loremflickr.com/200/300/dog";

  return (
    <>
      <h2>Add a Puppy</h2>
      <form onSubmit={postPuppy}>
        <label>
          Name
          <input
            name="puppyName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed
          <input
            name="breed"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <button onClick={() => (setName, setBreed)}>Add to Roster</button>
        {<output>Uploading puppy information...</output>}
        {/* { <output>{error.message}</output>} */}
      </form>
    </>
  );
}
