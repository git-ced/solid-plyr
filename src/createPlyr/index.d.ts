// ANCHOR Solid
import { Accessor, Setter } from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

// ANCHOR Types
import { HTMLPlyrVideoElement } from '../UncontrolledPlyr/index.d';

export interface CreatePlyrProps {
  source: Plyr.SourceInfo;
  options?: Plyr.Options;
}

type PlyrResult = HTMLPlyrVideoElement | undefined;

export type CreatePlyrResult = [
  plyr: Accessor<PlyrResult>,
  setPlyr: Setter<PlyrResult>,
];
