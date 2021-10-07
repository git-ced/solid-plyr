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
  createDashPlyr,
  UncontrolledPlyr,
} from 'solid-plyr';

const dashSrc: SourceInfo = {
  type: 'video',
  sources: [
    {
      src: 'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      type: 'application/dash+xml',
    },
  ],
};

export default function DashDemo(): JSX.Element {
  const [plyr, setPlyr] = createDashPlyr({
    source: dashSrc,
  });
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const dashPlayer = plyr()?.plyr;

    if (dashPlayer) {
      setLoading(false);
      dashPlayer.on('timeupdate', (event) => {
        const instance = event.detail.plyr;
        // eslint-disable-next-line no-console
        console.log(instance.currentTime);
      });
    }
  });

  return (
    <div>
      <h2 class="text-center text-2xl font-medium text-gray-600 mb-6">
        Dash Usage
      </h2>
      <UncontrolledPlyr
        ref={setPlyr}
        isLoading={loading()}
      />
    </div>
  );
}
