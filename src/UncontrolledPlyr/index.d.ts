// ANCHOR Solid
import { JSX } from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

export type HTMLPlyrVideoElement = HTMLVideoElement
  & { plyr?: Plyr }

export interface UncontrolledPlyrProps
  extends JSX.VideoHTMLAttributes<HTMLPlyrVideoElement> {
  fallback?: JSX.Element;
  isLoading?: boolean;
}
