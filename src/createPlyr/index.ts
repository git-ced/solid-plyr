// ANCHOR Solid
import {
  createSignal,
  createEffect,
  onCleanup,
  Accessor,
  Setter,
} from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

// ANCHOR Types
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr';

export interface CreatePlyrProps {
  source: Plyr.SourceInfo;
  options?: Plyr.Options;
}

type PlyrResult = HTMLPlyrVideoElement | undefined;

export type CreatePlyrResult = [
  plyr: Accessor<PlyrResult>,
  setPlyr: Setter<PlyrResult>,
];


export default function createPlyr(
  props: CreatePlyrProps
): CreatePlyrResult {
  const [
    plyr,
    setPlyr,
  ] = createSignal<HTMLPlyrVideoElement>();

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
    );

    onCleanup(() => {
      newPlayer.destroy();
    });
  });

  return [plyr, setPlyr];
};
