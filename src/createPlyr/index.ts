// ANCHOR Solid
import {
  createSignal,
  createEffect,
  onCleanup,
} from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

// ANCHOR Types
import {
  CreatePlyrProps,
  CreatePlyrResult,
} from './index.d';
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr/index.d';

export default function createPlyr(
  props: CreatePlyrProps
): CreatePlyrResult {
  let [plyr, setPlyr] = createSignal<HTMLPlyrVideoElement>();

  createEffect(() => {
    const options = props.options ?? {};
    const newPlayer = new Plyr('.solid-plyr', options);
    newPlayer.source = props.source;

    setPlyr((current) => current
      ? ({
        ...current,
        plyr: newPlayer,
      })
      : undefined,
    )

    onCleanup(() => {
      newPlayer.destroy();
    });
  });

  return [plyr, setPlyr];
};
