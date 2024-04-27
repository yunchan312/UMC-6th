export default function Card({ poster_path, title, vote_average }) {
  return (
    <div>
      <img src={`/${poster_path}`} />
    </div>
  );
}
