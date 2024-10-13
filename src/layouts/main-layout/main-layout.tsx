import { useContext, useEffect } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { Outlet, useNavigate } from "react-router-dom"
import { ErrorFallback } from "../../components/error-fallback"
import { Header } from "../../components/header"
import { Paths } from "../../constants"
import { ThemeContext } from "../../context/theme-context"

import styles from "./styles.module.scss"

export const MainLayout = () => {
    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const isLocalhost = "http://localhost:3000/mikhalchuk-aston-movies"
        const isGithubPages = "https://BossVlados94.github.io/aston-poopshoot-movies/"
        if (window.location.href === isLocalhost || window.location.href === isGithubPages) {
            navigate(Paths.MAIN)
        }
    }, [])

    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <section className={`${styles.main} ${styles[theme]}`}>
                <Header />
                <div className={styles.container}>
                    <Outlet />
                </div>
            </section>
        </ErrorBoundary>
    )
}