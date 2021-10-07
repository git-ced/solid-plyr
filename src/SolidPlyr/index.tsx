// ANCHOR Solid
import { JSX } from 'solid-js';

// ANCHOR Signals
import createPlyr from '../createPlyr';

// ANCHOR Types
import {
  CreatePlyrProps,
} from '../createPlyr';

// ANCHOR Components
import UncontrolledPlyr from '../UncontrolledPlyr';
import '../styles.css';

export default function SolidPlyr(
  props: CreatePlyrProps,
): JSX.Element {
  const [plyr, setPlyr] = createPlyr(props);

  return (
    <UncontrolledPlyr
      ref={setPlyr}
      isLoading={!plyr()}
    />
  );
}
