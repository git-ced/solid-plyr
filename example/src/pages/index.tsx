// ANCHOR Solid
import { JSX, lazy, createSignal } from 'solid-js';

// ANCHOR Components
const HlsDemo = lazy(() => (
  import('../components/HlsDemo')
));
const YoutubeDemo = lazy(() => (
  import('../components/YoutubeDemo')
));
const VimeoDemo = lazy(() => (
  import('../components/VimeoDemo')
));
const Mp4Demo = lazy(() => (
  import('../components/Mp4Demo')
));
// const DashDemo = lazy(() => (
//   import('../components/DashDemo')
// ));

export default function HomePage(): JSX.Element {
  const [state, setState] = createSignal('hls');

  return (
    <div class="flex justify-center px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div class="w-full md:w-3/4 lg:w-7/12">
        <h1 class="text-center text-3xl font-medium mb-2">
          Solid Plyr Demo
        </h1>
        <div>
          {
            state() === 'mp4' && (
              <Mp4Demo />
            )
          }
          {
            state() === 'hls' && (
              <HlsDemo />
            )
          }
          {/* {
            state() === 'dash' && (
              <DashDemo />
            )
          } */}
          {
            state() === 'youtube' && (
              <YoutubeDemo />
            )
          }
          {
            state() === 'vimeo' && (
              <VimeoDemo />
            )
          }
          <div class="grid grid-cols-5 mt-4 h-10 space-x-4">
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setState('mp4')}
            >
              MP4 Player
            </button>
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setState('hls')}
            >
              HLS Player
            </button>
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setState('dash')}
            >
              Dash Player
            </button>
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setState('youtube')}
            >
              Youtube Player
            </button>
            <button
              type="button"
              class="inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => setState('vimeo')}
            >
              Vimeo Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
