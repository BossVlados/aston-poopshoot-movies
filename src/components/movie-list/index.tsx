import { List } from "antd"
import { FC, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Paths, REQUEST_LIMIT } from "../../constants"
import { useAppSelector } from "../../hooks/use-app-selector"
import useMovieActions from "../../hooks/use-movie-actions"
import { useGetMoviesQuery } from "../../services"
import { MovieListProps, MovieListType } from "../../types/types"
import { EmptyBlock } from "../empty-block"
import { Loader } from "../loader"
import { MovieCard } from "../movie-card"

import styles from "./styles.module.scss"

export const MovieList: FC<MovieListProps> = ({ searchString, type, page }) => {
  const { data, isFetching } = useGetMoviesQuery({ searchString, type, page })
  const { setSelectedMovie, setIsDataLoading, setMovieList } = useMovieActions();
  const { movieList } = useAppSelector(state => state.movie);
  const navigate = useNavigate();

  const handleCardClick = (data: MovieListType) => {
    setSelectedMovie(data.kinopoiskId);
    navigate(Paths.DETAILS);
  };

  useEffect(() => {
    setMovieList(data)
    setIsDataLoading(isFetching)
  }, [isFetching, data])

  if (isFetching) return <Loader />

  return (
    <List className={styles.cards}
      grid={{ gutter: REQUEST_LIMIT, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 5, }}
      dataSource={movieList?.items}
      locale={{ emptyText: <EmptyBlock message={"По вашему запросу ничего не найдено"} /> }}
      renderItem={(item) => (
        <List.Item onClick={() => handleCardClick(item)}>
          <MovieCard key={item.kinopoiskId} data={item} />
        </List.Item>
      )} />
  )
}
