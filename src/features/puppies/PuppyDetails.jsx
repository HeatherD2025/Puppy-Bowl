/**import
 * @component
 * Shows comprehensive information about the selected puppy, if there is one.
 * Also provides a button for users to remove the selected puppy from the roster.
 */
// import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDeletePuppyMutation, useGetPuppyQuery } from "./puppySlice";
import { useParams, useNavigate } from "react-router-dom";

export default function PuppyDetails() {
  // TODO: Grab data from the `getPuppy` query
  // **************
  const { id } = useParams();
  const navigate = useNavigate();
  const [deletePuppy] = useDeletePuppyMutation();

  const dispatch = useDispatch;
  // const grabPuppy = useGetPuppyQuery(id);
  const { status, isLoading, data: puppy } = useGetPuppyQuery(id);
  console.log(puppy);

  // TODO: Use the `deletePuppy` mutation to remove a puppy when the button is clicked

  async function removePuppy(id) {
    // {
    //   useDeletePuppyMutation();
    //   setSelectedPuppyId();
    // }
    try {
      const response = await deletePuppy(id).unwrap();
      console.log(response);
      navigate("/")
    } catch (error) {
      console.error(error);
    }
  }

  // There are 3 possibilities:
  let $details;
  // 1. A puppy has not yet been selected.
  if (!id) {
    $details = <p>Please select a puppy to see more details.</p>;
  }
  //  2. A puppy has been selected, but results have not yet returned from the API.
  else if (isLoading) {
    $details = <p>Loading puppy information...</p>;
  }
  // 3. Information about the selected puppy has returned from the API.
  else {
    $details = (
      <>
        <h3>
          {puppy.name} #{puppy.id}
        </h3>
        <p>{puppy.breed}</p>
        <p>Team {puppy.team?.name ?? "Unassigned"}</p>

        <button onClick={() => 
          removePuppy(puppy.id)}>Remove from roster</button>
        <figure>
          <img src={puppy.imageUrl} alt={puppy.name} />
        </figure>
      </>
    );
  }

  return (
    <aside>
      <h2>Selected Puppy</h2>
      {$details}
    </aside>
  );
}
