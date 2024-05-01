export default function Banner({
  backdrop_path,
  title,
  vote_average,
  overview,
}) {
  return (
    <div>
      {backdrop_path ? (
        <div
          className="w-full h-[80vh] bg-cover"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${backdrop_path})`,
          }}
        >
          <div className="w-[80%] px-10 h-full text-white bg-gradient-to-r from-black via-black to-transparent flex justify-start items-center">
            <div className="w-[50%]">
              <div className="text-[50px]">{title}</div>
              <div className="text-[45px]">⭐{vote_average.toFixed(1)}</div>
              {overview == "" ? null : (
                <div className="text-lg w-full">{overview}</div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-[30px] text-center py-24">환영합니다</div>
      )}
    </div>
  );
}
