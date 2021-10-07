// ANCHOR Solid
import { JSX, Show } from 'solid-js';

// ANCHOR Plyr
import Plyr from 'plyr';

// ANCHOR Types
export type HTMLPlyrVideoElement = HTMLVideoElement
  & { plyr?: Plyr }

export interface UncontrolledPlyrProps
  extends JSX.VideoHTMLAttributes<HTMLPlyrVideoElement> {
  fallback?: JSX.Element;
  isLoading?: boolean;
}

export default function UncontrolledPlyr(
  props: UncontrolledPlyrProps,
): JSX.Element {
  return (
    <>
      <Show when={props.isLoading}>
        <Show
          when={props.fallback}
          fallback={(
            <div class="lion-spinner-container">
              <div class="lion-spinner lion-spinner-wave" />
            </div>
          )}
        >
          {(fallback) => fallback}
        </Show>
      </Show>
      <div>
        <video
          {...props}
          ref={props.ref}
          class="solid-plyr plyr"
        />
      </div>
    </>
  );
}
