import axios from "axios";

export const getPopular = async () => {
  const temp = await axios
    .get(
      "https://api.themoviedb.org/3/movie/popular?api_key=df298b7fcfd4e5ab46610192dc9adee7"
    )
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => console.log(err));
  console.log("temp", temp);
  return temp;
};
