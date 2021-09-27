// ANCHOR Solid
import {
  createSignal,
  createEffect,
  onCleanup,
  createMemo,
} from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

// ANCHOR Hls
import Hls from 'hls.js';

// ANCHOR Types
import {
  CreatePlyrProps,
  CreatePlyrResult,
} from '../createPlyr/index.d';
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr/index.d';

declare global {
  interface Window { hls: Hls; }
}

export default function createHlsPlyr(
  props: CreatePlyrProps
): CreatePlyrResult {
  const [
    plyr,
    setPlyr,
  ] = createSignal<HTMLPlyrVideoElement>();
  const [
    hlsPlyr,
    setHlsPlyr,
  ] = createSignal<HTMLPlyrVideoElement>();
  const hls = createMemo(() => new Hls());
  const [
    availableQualities,
    setAvailableQualities,
  ] = createSignal<number[]>();

  const options = props.options ?? {};
  const { source } = props;
  const currentSource = source.sources[0].src;

  createEffect(() => {
    const plyrInstance = plyr();
    const hlsInstance = hls();

    if (!window) {
      return;
    }

    window.hls = window.hls || {};

    if (plyrInstance) {
      if (plyrInstance.canPlayType('application/vnd.apple.mpegURL')) {
        const newPlayer = new Plyr('.solid-plyr', options);
        newPlayer.source = {
          ...source,
          sources: [
            {
              ...source.sources[0],
              type: 'application/vnd.apple.mpegURL',
            }
          ]
        };

        plyrInstance.plyr = newPlayer;
        setHlsPlyr(plyrInstance);
      } else if (!Hls.isSupported()) {
        const newPlayer = new Plyr('.solid-plyr', options);

        plyrInstance.plyr = newPlayer;
        setHlsPlyr(plyrInstance);
      } else {
        hlsInstance.loadSource(currentSource);

        hlsInstance.on(
          Hls.Events.MANIFEST_PARSED,
          () => {
            const availableLevels = hlsInstance.levels
              .map((level) => level.height);
            const qualities = [0, ...availableLevels];

            setAvailableQualities(qualities);

            hlsInstance.on(Hls.Events.LEVEL_SWITCHED, (_, data) => {
              let span = document.querySelector(
                ".plyr__menu__container [data-plyr='quality'][value='0'] span"
              );

              if (span) {
                if (hlsInstance.autoLevelEnabled) {
                  span.innerHTML = `AUTO (${hlsInstance.levels[data.level].height}p)`
                } else {
                  span.innerHTML = `AUTO`
                }
              }
            });
          }
        );
      }
    }
  });

  createEffect(() => {
    const plyrInstance = plyr();
    const hlsInstance = hls();
    const qualityOptions = availableQualities();

    if (qualityOptions && plyrInstance) {
      const newOptions: Plyr.Options = {
        ...options,
        quality: {
          default: 720,
          options: qualityOptions,
          forced: true,
          onChange: newQuality => {
            if (newQuality === 0) {
              hlsInstance.currentLevel = -1;
            } else {
              hlsInstance.levels.forEach((level, levelIndex) => {
                if (level.height === newQuality) {
                  hlsInstance.currentLevel = levelIndex;
                }
              });
            }
          }
        },
        i18n: {
          qualityLabel: {
            0: 'Auto'
          }
        }
      }

      const newPlayer = new Plyr('.solid-plyr', newOptions);

      plyrInstance.plyr = newPlayer;
      setHlsPlyr(plyrInstance);
      hlsInstance.attachMedia(plyrInstance);
      window.hls = hlsInstance;
    }

    onCleanup(() => {
      if (hlsInstance && qualityOptions) {
        hlsInstance.detachMedia();
      }
    });
  });

  return [hlsPlyr, setPlyr];
};
