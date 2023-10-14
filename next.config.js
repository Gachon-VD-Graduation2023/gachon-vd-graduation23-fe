module.exports = {
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    // 이미 설정된 다른 config를 유지한 뒤, svg 로더 설정을 추가합니다.
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    // config를 반환해야 이전 설정과 병합 가능합니다.
    return config
  },
  env: {
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
    NEXT_DATABASE_URL: process.env.NEXT_DATABASE_URL,
  },
}
