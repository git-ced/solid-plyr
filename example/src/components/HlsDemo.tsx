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
  createHlsPlyr,
  UncontrolledPlyr,
} from 'solid-plyr';

const hlsSrc: SourceInfo = {
  type: 'video',
  sources: [
    {
      src:
        'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
      type: 'application/x-mpegURL',
    },
  ],
};

export default function HlsDemo(): JSX.Element {
  const [plyr, setPlyr] = createHlsPlyr({
    source: hlsSrc,
  });
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const hlsPlayer = plyr()?.plyr;

    if (hlsPlayer) {
      setLoading(false);
      hlsPlayer.on('timeupdate', (event) => {
        const instance = event.detail.plyr;
        // eslint-disable-next-line no-console
        console.log(instance.currentTime);
      });
    }
  });

  return (
    <div>
      <h2 class="text-center text-2xl font-medium text-gray-600 mb-6">
        HLS Usage
      </h2>
      <UncontrolledPlyr
        ref={setPlyr}
        isLoading={loading()}
      />
    </div>
  );
}
