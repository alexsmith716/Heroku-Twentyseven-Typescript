import React from 'react';
import universal from 'react-universal-component';

// import universalImport from 'babel-plugin-universal-import/universalImport.js'
// import path from 'path'
//
// const GraphqlPageLoadable = universal(universalImport({
//   chunkName: () => 'GraphqlPage',
//   path: () => path.join(__dirname, './GraphqlPage.js'),
//   resolve: () => require.resolveWeak('./GraphqlPage.js'),
//   load: () => Promise.all([
//     import( /* webpackChunkName: 'GraphqlPage' */ './GraphqlPage.js')
//   ]).then(proms => proms[0])
// }))

const GraphqlPageLoadable = universal(() => import('./GraphqlPage'));

export default GraphqlPageLoadable;
