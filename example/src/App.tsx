// ANCHOR Solid
import { JSX, lazy } from 'solid-js';

// ANCHOR Solid App Router
import { useRoutes } from 'solid-app-router';

export default function App(): JSX.Element {
  const AppRoutes = useRoutes([
    {
      path: '/',
      component: lazy(() => import('./pages')),
    },
  ]);

  return <AppRoutes />;
}
