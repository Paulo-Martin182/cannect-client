import theme from 'styles/theme'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  fullWidth?: boolean
}

const Logo = ({ color = 'white', fullWidth }: LogoProps) => {
  const selectColor = () => {
    if (color === 'white') {
      return 'secondary'
    } else {
      return 'primary'
    }
  }
  return (
    <S.Wrapper color={color} fullWidth={fullWidth}>
      <svg
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Cannect"
        viewBox={fullWidth ? '0 0 512 70' : undefined}
      >
        <g clipPath="url(#a)">
          <path
            d="M0 18.46c.375-1.626.605-3.301 1.133-4.884A19.154 19.154 0 0 1 9.928 2.992 19.525 19.525 0 0 1 23.629.947a19.248 19.248 0 0 1 7.437 3.155 18.991 18.991 0 0 1 5.45 5.912c.112.177.214.371.308.556v.227h-6.261c-.273 0-.58-.345-.8-.58a14.029 14.029 0 0 0-6.568-4.21 14.22 14.22 0 0 0-9.82 1.058 13.973 13.973 0 0 0-6.697 7.176c-3.134 7.367.605 16.485 8.126 19.364 5.358 2.03 10.162.708 14.243-3.199a2.814 2.814 0 0 1 2.232-.9c1.771.067 3.543 0 5.442 0a19.209 19.209 0 0 1-4.54 5.472C21.193 43.936 4.421 39.188.52 24.25c-.222-.841-.333-1.683-.503-2.576L0 18.46Z"
            fill="currentColor"
          />
          <path
            d="M99.55 1.259h5.528v37.5h-5.392c-.23 0-.503-.346-.656-.59-4.543-7.01-9.086-14.027-13.63-21.048a3141.162 3141.162 0 0 0-4.258-6.593c-.136-.21-.29-.412-.562-.791v28.962h-5.537V1.217h5.656c.255 0 .554.353.724.623a25593.02 25593.02 0 0 1 16.849 26.024c.376.596.803 1.16 1.277 1.683V1.26ZM142.901 38.758h-5.332c-.256 0-.579-.328-.741-.59a5598.257 5598.257 0 0 1-12.505-19.296l-5.349-8.268-.605-.91V38.7h-5.494V1.217h5.724c.222 0 .486.362.648.614 5.32 8.2 10.616 16.395 15.886 24.585a30.859 30.859 0 0 0 2.274 3.199V1.267h5.494v37.491Z"
            fill="currentColor"
          />
          <path
            d="M36.723 38.758c.852-2.147 1.61-4.21 2.385-6.222 3.901-10.159 7.8-20.327 11.695-30.503.23-.598.494-.842 1.193-.842 1.103.063 2.21.063 3.313 0 .247-.04.5.018.705.16a.95.95 0 0 1 .394.598c3.441 9.031 6.888 18.06 10.34 27.085 1.236 3.2 2.462 6.398 3.74 9.724h-5.605c-.196 0-.443-.404-.545-.665a783.842 783.842 0 0 1-3.688-9.699.842.842 0 0 0-.353-.53.86.86 0 0 0-.627-.135H47.464a.86.86 0 0 0-.627.136.841.841 0 0 0-.353.529c-1.192 3.216-2.453 6.416-3.637 9.64a.984.984 0 0 1-.421.617 1.006 1.006 0 0 1-.737.15c-1.593-.068-3.203-.043-4.966-.043Zm21.772-16.131c-1.61-4.782-3.186-9.489-4.77-14.204h-.17c-1.602 4.732-3.195 9.472-4.813 14.204h9.753Z"
            fill="currentColor"
          />
          <path
            d="M212.057 29.488a19.575 19.575 0 0 1-9.45 8.434 19.867 19.867 0 0 1-12.697.937 20.157 20.157 0 0 1-10.653-7.355 19.77 19.77 0 0 1-3.896-12.253c.315-8.933 6.925-16.772 15.52-18.354 8.859-1.642 17.471 2.332 21.295 9.833a5.718 5.718 0 0 1-.613.068h-5.111a1.72 1.72 0 0 1-1.457-.623 13.39 13.39 0 0 0-7.257-4.362 14.25 14.25 0 0 0-9.43 1.405 14 14 0 0 0-6.371 7.015c-3.126 7.375.613 16.485 8.135 19.314 5.358 2.02 10.162.707 14.234-3.2a2.839 2.839 0 0 1 2.24-.9c1.865.084 3.637.041 5.511.041ZM234 1.267v4.521c0 .488-.316.471-.656.471h-6.627v32.474h-5.537V6.25h-7.266V1.267H234Z"
            fill="currentColor"
          />
          <path
            d="M172.703 6.226v-4.95h-25.281v4.95h25.281ZM147.422 33.774v4.925h25.264v-4.925h-25.264ZM147.422 22.265h20.315v-4.934h-20.315v4.934Z"
            fill={`${theme.colors[selectColor()]}`}
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h234v40H0z" />
          </clipPath>
        </defs>
      </svg>
    </S.Wrapper>
  )
}

export default Logo
