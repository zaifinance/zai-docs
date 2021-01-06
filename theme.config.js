import React from 'react'

export default {
  repository: 'https://github.com/zaifinance/zai-protocol', // project repo
  docsRepository: 'https://github.com/haxcru/zai-docs', // docs repo
  branch: 'master', // branch of docs
  // path: '/', // path of docs
  titleSuffix: ' – Zero Collateral Dai',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: '',
  footerEditOnGitHubLink: true, // will link to the docs repo
  logo: (
    <React.Fragment>
      <img src="https://zai.finance/logo/Zai-Logo-Black.png" width="40" />
      <span className="ml-2 mr-2 font-extrabold hidden md:inline">
        Zero Collateral Dai
      </span>
      <span className="text-gray-600 font-normal hidden md:inline">
        A hybrid synthetic-algorithmic stablecoin
      </span>
    </React.Fragment>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Zero Collateral Dai" />
      <meta name="og:title" content="Zero Collateral Dai" />
    </>
  ),
}
