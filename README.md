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

**Video playback using Solid Plyr Player**
```javascript
import { SolidPlyr } from 'solid-plyr';

const SOURCE = {
  type: 'video',
  sources: [
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
      type: 'video/mp4',
      size: 720,
    },
    {
      src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
      type: 'video/mp4',
      size: 1080,
    }
  ]
}

const OPTIONS = {
  autoplay: true,
  muted: true,
}

export default function Player() {
  return (
    <SolidPlyr source={SOURCE} options={OPTIONS} />
  );
}
```

**Uncontrolled Solid Plyr Player**
```javascript
import { UncontrolledSolidPlyr, createPlyr } from 'solid-plyr';
import { createEffect } from 'solid-js';

const SOURCE = {
  // ...
}

const OPTIONS = {
  // ...
}

export default function Player() {
  const [ref, setRef] = createPlyr({ 
    source: SOURCE,
    options: OPTIONS,
  });

  createEffect(() => {
    const player = ref()?.plyr;

    if (player) {
      player.on('timeupdate', (event) => {
        // Log current time while playing the playback
        console.log(event.detail.plyr.currentTime);
      });
    }
  })

  return (
    <UncontrolledSolidPlyr ref={setRef} />
  );
}
```

**Play YouTube Videos using Solid Plyr**
```javascript
import { SolidPlyr } from 'solid-plyr';

const SOURCE = {
  type: 'video',
  sources: [
    {
      src: 'yWtFb9LJs3o',
      provider: 'youtube'
    }
  ]
}

const OPTIONS = {
  // ...
}

export default function Player() {
  return (
    <SolidPlyr source={SOURCE} options={OPTIONS} />
  );
}
```

**Play Vimeo Videos using Solid Plyr**
```javascript
import { SolidPlyr } from 'solid-plyr';

const SOURCE = {
  type: 'video',
  sources: [
    {
      src: 'https://vimeo.com/533559247',
      provider: 'vimeo'
    }
  ]
}

const OPTIONS = {
  // ...
}

export default function Player() {
  return (
    <SolidPlyr source={SOURCE} options={OPTIONS} />
  );
}
```

**Video Playback with HLS using Solid Plyr**
```javascript
import { SolidHlsPlyr } from 'solid-plyr';

const SOURCE = {
  type: 'video',
  sources: [
    {
      src:
        'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
      type: 'application/x-mpegURL'
    }
  ]
}

const OPTIONS = {
  // ...
}

export default function Player() {
  return (
    <SolidHlsPlyr source={SOURCE} options={OPTIONS} />
  );
}
```

**Uncontrolled Video Playback with HLS using Solid Plyr**
```javascript
import { UncontrolledSolidPlyr, createHlsPlyr } from 'solid-plyr';
import { createEffect } from 'solid-js';

const SOURCE = {
  // ...
}

const OPTIONS = {
  // ...
}

export default function Player() {
  const [ref, setRef] = createHlsPlyr({ 
    source: SOURCE,
    options: OPTIONS,
  });

  createEffect(() => {
    const player = ref()?.plyr;

    if (player) {
      player.on('timeupdate', (event) => {
        // Log current time while playing the playback
        console.log(event.detail.plyr.currentTime);
      });
    }
  })

  return (
    <UncontrolledSolidPlyr ref={setRef} />
  );
}
```

**Video Playback with Dash using Solid Plyr**
```javascript
import { SolidDashPlyr } from 'solid-plyr';

const SOURCE = {
  type: 'video',
  sources: [
    {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      type: 'application/dash+xml',
    }
  ]
}

const OPTIONS = {
  // ...
}

export default function Player() {
  return (
    <SolidDashPlyr source={SOURCE} options={OPTIONS} />
  );
}
```

**Uncontrolled Video Playback with Dash using Solid Plyr**
```javascript
import { UncontrolledSolidPlyr, createDashPlyr } from 'solid-plyr';
import { createEffect } from 'solid-js';

const SOURCE = {
  // ...
}

const OPTIONS = {
  // ...
}

export default function Player() {
  const [ref, setRef] = createDashPlyr({ 
    source: SOURCE,
    options: OPTIONS,
  });

  createEffect(() => {
    const player = ref()?.plyr;

    if (player) {
      player.on('timeupdate', (event) => {
        // Log current time while playing the playback
        console.log(event.detail.plyr.currentTime);
      });
    }
  })

  return (
    <UncontrolledSolidPlyr ref={setRef} />
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
