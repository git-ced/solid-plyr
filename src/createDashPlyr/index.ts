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
import Dash from 'dashjs';

// ANCHOR Types
import {
  CreatePlyrProps,
  CreatePlyrResult,
} from '../createPlyr';
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr';

export default function createDashPlyr(
  props: CreatePlyrProps
): CreatePlyrResult {
  const [
    plyr,
    setPlyr,
  ] = createSignal<HTMLPlyrVideoElement>();
  const [
    dashPlyr,
    setDashPlyr,
  ] = createSignal<HTMLPlyrVideoElement>();
  const dash = createMemo(() => (
    Dash.MediaPlayer().create()
  ));
  const [
    availableQualities,
    setAvailableQualities,
  ] = createSignal<number[]>();

  const options = props.options ?? {};
  const { source } = props;
  const currentSource = source.sources[0].src;

  createEffect(() => {
    const plyrInstance = plyr();
    const dashInstance = dash();

    if (!window) {
      return;
    }

    window.dashjs = window.dashjs || {};

    if (plyrInstance) {
      if (!Dash.supportsMediaSource) {
        const newPlayer = new Plyr('.solid-plyr', options);

        plyrInstance.plyr = newPlayer;
        setDashPlyr(plyrInstance);
      } else {
        dashInstance.initialize(
          plyrInstance,
          currentSource,
          options?.autoplay ?? false,
        );

        dashInstance.on(
          'playbackMetaDataLoaded',
          () => {
            let span = document.querySelector(
              ".plyr__menu__container [data-plyr='quality'][value='0'] span"
            );

            if (span) {
              span.innerHTML = 'AUTO';
            }

            const bitrateList = dashInstance
              .getBitrateInfoListFor('video');
            const availableLevels = bitrateList
              .map(bitrate => bitrate.height);
            const qualities = [0, ...availableLevels];

            setAvailableQualities(qualities);
          }
        )
      }
    }
  })

  createEffect(() => {
    const plyrInstance = plyr();
    const dashInstance = dash();
    const qualityOptions = availableQualities();

    if (qualityOptions && plyrInstance) {
      const newOptions: Plyr.Options = {
        ...options,
        quality: {
          default: 720,
          options: qualityOptions,
          forced: true,
          onChange: (newQuality) => {
            dashInstance.setQualityFor(
              'video',
              newQuality === 0 ? -1 : qualityOptions.indexOf(newQuality) - 1,
              true,
            );
          }
        },
        i18n: {
          qualityLabel: {
            0: 'Auto',
          },
        },
      }

      const newPlayer = new Plyr('.solid-plyr', newOptions);

      plyrInstance.plyr = newPlayer;
      setDashPlyr(plyrInstance);
    }

    onCleanup(() => {
      if (dashInstance && qualityOptions) {
        dashInstance.reset();
      }
    });
  });

  return [dashPlyr, setPlyr];
};
