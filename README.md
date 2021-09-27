# solid-plyr
> A simple HTML5, YouTube and Vimeo player (Plyr) for SolidJS

[![NPM](https://img.shields.io/npm/v/solid-plyr.svg)](https://www.npmjs.com/package/solid-plyr)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/solid-plyr)
![npm bundle size (scoped version)](https://img.shields.io/bundlephobia/minzip/solid-plyr)
![Libraries.io dependency status for latest release, scoped npm package](https://img.shields.io/librariesio/release/npm/solid-plyr)
![NPM](https://img.shields.io/npm/l/solid-plyr)

## Table of Contents
 - [Installation](#installation)
 - [Setup](#setup)
 - [Usage](#usage)
 - [Authors](#authors)
 - [Changelog](#changelog)
 - [License](#license)

 <!-- toc -->

## Installation

This library is available through the [npm registry](https://www.npmjs.com/).

NPM
```bash
$ npm -i solid-plyr
```

Yarn
```bash
$ yarn add solid-plyr
```

## Setup

Start using it by importing the library first.

### CommonJS
```javascript
const SolidPlyr = require('solid-plyr');
```

or 

### ES6
```javascript
import { SolidPlyr } from 'solid-plyr';
```

The `SolidPlyr` component requires the following CSS for styling:

**Using link tags**
```html
<link href="https://unpkg.com/solid-plyr@1.0.0/dist/esm/index.css.map" rel="stylesheet">
```

**Using import**
```javascript
import 'solid-plyr/dist/esm/index.css.map';
```

## Usage

**Video playback through Solid Plyr Player**
```javascript
import { SolidPlyr } from 'solid-plyr';

const SOURCES = [
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    type: 'application/dash+xml',
  }
];

export default function Player() {
  return (
    <SolidPlyr sources={SOURCES} autoplay="muted" />
  );
}
```
**Uncontrolled Solid Plyr Player**
```javascript
import { UncontrolledSolidPlyr, createPlayer } from 'solid-plyr';

const SOURCES = [
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://bitmovin-a.akamaihd.net/content/playhouse-vr/mpds/105560.mpd',
    type: 'application/dash+xml',
  }
];

export default function Player() {
  const { ref } = createPlayer({ 
    sources: SOURCES,
    muted: true,
  });

  return (
    <UncontrolledSolidPlyr playerRef={SOURCES} />
  );
}
```

## Authors

- [Prince Neil Cedrick Castro](https://github.com/git-ced/) - Initial work

See also the list of [contributors](https://github.com/git-ced/solid-plyr/contributors) who participated in this project.

## Changelog

[Changelog](https://github.com/git-ced/solid-plyr/releases)

## License

  [MIT](LICENSE)
