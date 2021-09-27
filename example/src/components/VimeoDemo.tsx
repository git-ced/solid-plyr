// ANCHOR Solid
import {
  createSignal,
  createEffect,
  JSX,
} from 'solid-js';

// ANCHOR Plyr
import { SourceInfo } from 'plyr';

// ANCHOR Solid Plyr
import {
  createPlyr,
  UncontrolledPlyr,
} from '../../../src';

const vimeoSrc: SourceInfo = {
  type: 'video',
  sources: [
    {
      src: 'https://vimeo.com/533559247',
      provider: 'vimeo'
    }
  ]
};

export default function VimeoDemo(): JSX.Element {
  const [plyr, setPlyr] = createPlyr({
    source: vimeoSrc,
  });
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const vimeoPlayer = plyr()?.plyr;

    if (vimeoPlayer) {
      setLoading(false);
      vimeoPlayer.on('timeupdate', event => {
        const instance = event.detail.plyr;
        console.log(instance.currentTime);
      });
    }
  })

  return (
    <div>
      <h2 class="text-center text-2xl font-medium text-gray-600 mb-6">
        Vimeo Usage
      </h2>
      <UncontrolledPlyr
        ref={setPlyr}
        isLoading={loading()}
      />
    </div>
  );
}
