// ANCHOR Solid
import { JSX } from 'solid-js';

// ANCHOR Signals
import createHlsPlyr from '../createHlsPlyr';

// ANCHOR Types
import {
  CreatePlyrProps,
} from '../createPlyr';

// ANCHOR Components
import UncontrolledPlyr from '../UncontrolledPlyr';
import '../styles.css';

export default function SolidHlsPlyr(
  props: CreatePlyrProps,
): JSX.Element {
  const [plyr, setPlyr] = createHlsPlyr(props);

  return (
    <UncontrolledPlyr
      ref={setPlyr}
      isLoading={!plyr()}
    />
  );
}
