import { useDeletePuppyMutation, useGetPuppiesQuery } from "./puppySlice";
import { useEffect, useState } from "react";
import { data, useNavigate } from "react-router-dom";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId }) {
  const [listOfPuppies, setListOfPuppies] = useState([]);
  // TODO: Get data from getPuppies query
  const { data: allPuppies, error, status, isLoading } = useGetPuppiesQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "fufuilled") {
      setListOfPuppies(allPuppies);
    }
  }, [status]);

  const viewPuppy = (id) => {
    navigate(`/puppy/${id}`);
  };
  console.log(allPuppies);

  if (isLoading) {
    return <h1> Is loading </h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      <article>
        <h2>Roster</h2>
        <ul className="puppies">
          {isLoading && <li>Loading puppies...</li>}
          {allPuppies.data.players.map((p) => (
            <li key={p.id}>
              <h3>
                {p.name} #{p.id}
              </h3>
              <figure>
                <img src={p.imageUrl} alt={p.name} />
              </figure>
              {/* <button onClick={() => setSelectedPuppyId(p.id)}> */}
              {/* <button onClick={() => viewPuppy(p.id)}> */}
              <button type="button" onClick={() => navigate(`/PuppyDetails/${p.id}`)}>
                See details
              </button>
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
