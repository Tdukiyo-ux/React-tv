import "./shows.css";
import setSelectedEpisode from



export default function ShowSelection({ shows, setSelectedShow }) {
  return (
    <nav className="shows">
      {shows.map((show) => (
        <a key={show.name} className="show" onClick={() => setSelectedShow(show)}>
          {show.name}
        </a>
      ))}
    </nav>
  );
}
/** A navbar that allows users to choose between a list of shows */
// export default function ShowSelection({ shows, setSelectedShow }) {

//   return <nav className="shows">
//     {shows.map((show) => (
//   <a key={show.id} className="show" onClick={() => setSelectedShow(show)}>
//     {show.title}
//   </a>
// ))}
//   </nav>;
//   console.log(ShowSelection)
// }

