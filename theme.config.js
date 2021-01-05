export default {
  repository: 'https://github.com/zaifinance/zai-protocol', // project repo
  docsRepository: 'https://github.com/haxcru/zai-docs', // docs repo
  branch: 'master', // branch of docs
  // path: '/', // path of docs
  titleSuffix: ' – ZAI',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: '',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <>
      <svg>...</svg>
      <span>Zero Collateral Dai</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Zero Collateral Dai" />
      <meta name="og:title" content="Zero Collateral Dai" />
    </>
  ),
}
