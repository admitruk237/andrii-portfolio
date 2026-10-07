const GITHUB_BASE_URL = 'https://github.com'

const GITHUB_USERNAME = 'admitruk237'

export const githubRepoUrl = (owner: string, repo: string): string =>
  `${GITHUB_BASE_URL}/${owner}/${repo}`

export const personalRepoUrl = (repo: string): string =>
  githubRepoUrl(GITHUB_USERNAME, repo)

export const PROFILE = {
  fullName: 'Andrii Dmytruk',
  phone: '(+48) 516 626 351',
  email: 'admitruk237@gmail.com',
  address: '38-400 Krosno, Poland',
  githubUsername: GITHUB_USERNAME,
  githubUrl: `${GITHUB_BASE_URL}/${GITHUB_USERNAME}`,
  linkedinUsername: 'andr11-dmytruk',
  linkedinUrl: 'https://www.linkedin.com/in/andr11-dmytruk/',
  facebookUrl: 'https://www.facebook.com/share/18xKDJ3szf/',
  instagramUrl:
    'https://www.instagram.com/dmytruk_andrii_/?utm_source=qr&igsh=ZmZrcHN3dXQyemt1',
  telegramUrl: 'https://t.me/Dmytruk_Andrii',
} as const
