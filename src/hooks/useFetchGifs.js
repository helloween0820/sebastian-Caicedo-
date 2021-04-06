import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    Data: [],
    loading: true,
  });
  useEffect(() => {
    getGifs(category).then((imgs) => {
      setState({
        Data: imgs,
        loaging: false,
      });
    });
  }, [category]);

  return state;
};
