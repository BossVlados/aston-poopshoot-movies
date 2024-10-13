import { FC, useContext, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Outlet } from 'react-router-dom'
import { ErrorFallback } from '../../components/error-fallback'
import { ACCESS_TOKEN } from '../../constants'
import { ThemeContext } from '../../context/theme-context'
import styles from './styles.module.scss'

export const AuthLayout: FC = () => {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token)
        }
    }, [])

    return(
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <section className={`${styles.auth} ${theme}`}>
                <Outlet />
            </section>
        </ErrorBoundary>
    )
}