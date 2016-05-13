import React from 'react';
import PlaygroundList from './components/PlaygroundList';
import normalizeMetaInfo from './utils/normalizeMetaInfo';

export default function playground(options, data, Component, componentPath) {
  return (
    <PlaygroundList
      componentPath={componentPath}
      component={Component}
      meta={normalizeMetaInfo(data.reactDocs)}
    />
  );
}
