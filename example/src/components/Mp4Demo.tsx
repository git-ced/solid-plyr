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

const mp4Src: SourceInfo = {
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
};

export default function Mp4Demo(): JSX.Element {
  const [plyr, setPlyr] = createPlyr({
    source: mp4Src,
  });
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const mp4Player = plyr()?.plyr;

    if (mp4Player) {
      setLoading(false);
      mp4Player.on('timeupdate', event => {
        const instance = event.detail.plyr;
        console.log(instance.currentTime);
      });
    }
  })

  return (
    <div>
      <h2 class="text-center text-2xl font-medium text-gray-600 mb-6">
        MP4 Usage
      </h2>
      <UncontrolledPlyr
        ref={setPlyr}
        isLoading={loading()}
      />
    </div>
  );
}
