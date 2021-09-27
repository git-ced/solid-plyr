// ANCHOR Solid
import { JSX } from 'solid-js';
import './styles.css';

export interface HelloProps {
  greeting: string;
}

export default function Hello({
  greeting,
}: HelloProps): JSX.Element {
  return <h1>{`Hello ${greeting}`}</h1>;
}
