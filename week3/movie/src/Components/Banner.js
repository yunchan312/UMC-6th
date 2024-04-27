export default function Banner({
  backdrop_path,
  title,
  vote_average,
  overview,
}) {
  return (
    <div>
      {backdrop_path ? (
        <div>
          <div
            className="w-full h-[80vh] bg-cover"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
            }}
          >
            <div className="px-10 w-[80%] h-full text-white bg-gradient-to-r from-black via-black to-transparent flex justify-center items-center">
              <div>
                <div className="text-[50px]">{title}</div>
                <div className="text-[45px]">⭐{vote_average.toFixed(1)}</div>
                <div className="text-lg w-[60%]">{overview}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[30px] text-center py-24">환영합니다</div>
      )}
    </div>
  );
}
