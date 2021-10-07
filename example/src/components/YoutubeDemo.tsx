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
} from 'solid-plyr';

const youtubeSrc: SourceInfo = {
  type: 'video',
  sources: [
    {
      src: 'yWtFb9LJs3o',
      provider: 'youtube'
    }
  ]
};

export default function YoutubeDemo(): JSX.Element {
  const [plyr, setPlyr] = createPlyr({
    source: youtubeSrc,
  });
  const [loading, setLoading] = createSignal(true);

  createEffect(() => {
    const youtubePlayer = plyr()?.plyr;

    if (youtubePlayer) {
      setLoading(false);
      youtubePlayer.on('timeupdate', event => {
        const instance = event.detail.plyr;
        console.log(instance.currentTime);
      });
    }
  })

  return (
    <div>
      <h2 class="text-center text-2xl font-medium text-gray-600 mb-6">
        YouTube Usage
      </h2>
      <UncontrolledPlyr
        ref={setPlyr}
        isLoading={loading()}
      />
    </div>
  );
}
