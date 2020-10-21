import React from 'react';
import universal from 'react-universal-component';

const AboutLoadable = universal(() => import('./About'));

export default AboutLoadable;
