import { SOCIAL_LINKS } from '@/constants'

type Props = {
  containerStyles?: string
  iconStyles?: string
}

const Social = ({ containerStyles, iconStyles }: Props) => (
  <div className={containerStyles}>
    {SOCIAL_LINKS.map(({ name, icon: Icon, href }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={iconStyles}
      >
        <Icon />
      </a>
    ))}
  </div>
)

export default Social
