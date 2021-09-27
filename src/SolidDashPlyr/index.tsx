// ANCHOR Solid
import { JSX } from 'solid-js';

// ANCHOR Signals
import createDashPlyr from '../createDashPlyr';

// ANCHOR Types
import {
  CreatePlyrProps,
} from '../createPlyr/index.d';

// ANCHOR Components
import UncontrolledPlyr from '../UncontrolledPlyr';
import '../styles.css';

export default function SolidDashPlyr(
  props: CreatePlyrProps,
): JSX.Element {
  const [plyr, setPlyr] = createDashPlyr(props);

  return (
    <UncontrolledPlyr
      ref={setPlyr}
      isLoading={!plyr()}
    />
  );
}
