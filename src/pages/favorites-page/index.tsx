import { lazy, Suspense } from 'react'
import { Loader } from '../../components/loader'
import styles from "./styles.module.scss"

const FavoritesList = lazy(() => import("../../components/favorites-list"));

export const FavoritesPage = () => {

  return (
    <section className={styles.favorites}>
      <Suspense fallback={<Loader />}>
        <FavoritesList />
      </Suspense>
    </section>
  )
}
