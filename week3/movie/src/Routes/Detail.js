import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDetail } from "../api";
import Loading from "../Components/Loading.js";

export default function Detail() {
  const [detail, setDetail] = useState({});
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const getStar = (t) => {
    return "⭐".repeat(t);
  };
  const getDetails = async () => {
    const result = await getDetail(id);
    setDetail(result);
    setGenres(detail.genres);
  };
  const onClick = () => {
    navigate(-1);
  };
  const init = () => {
    setTimeout(() => setLoading(false), 1000);
  };
  useEffect(() => {
    init();
    getDetails();
  }, [id, genres]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className="h-[100vh] bg-cover text-white"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${detail.backdrop_path})`,
          }}
        >
          <div className="h-full bg-gradient-to-t from-black via-black/70 to-transparent">
            <div
              className="px-10 text-[35px] cursor-pointer hover:text-logo"
              onClick={onClick}
            >
              &larr;
            </div>
            <div className="px-10 flex gap-5 justify-center items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
              />
              <div className="flex flex-col justify-center gap-6 w-[30%]">
                <div>
                  <span className="text-[40px] font-bold">{detail.title}</span>{" "}
                  <span className="text-white text-[20px]">
                    ({detail.release_date})
                  </span>
                </div>
                <div>평점 {getStar(Math.floor(detail.vote_average))}</div>
                <div>
                  <div>줄거리</div>
                  {detail.overview === ""
                    ? "제공하는 줄거리가 없습니다."
                    : detail.overview}
                </div>
                <div>
                  <div>장르</div>
                  {genres
                    ? genres.map((g) => {
                        return (
                          <span className="mr-5" key={g.id}>
                            {g.name}
                          </span>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
