import { useState } from "react";
import "./shows.css";
import EpisodeList from "../episodes/EpisodeList.jsx";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return <p>Please select a show to get started!</p>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}



















// /** Allows users to browse through the episodes of the given show */
// export default function ShowDetails({show}) {
// const[selectedEpisode, setSelectedEpisode] = useState(null)
// return <div>
//   {!selectedEpisode ? (
//     <div className="show-details"></div>
//   ) : (
//   <p>no episode selected</p>
//  )}
// </div>
// }
