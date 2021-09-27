// ANCHOR Solid
import { SourceInfo } from 'plyr';
import { JSX } from 'solid-js';

// ANCHOR Solid Plyr
import { SolidPlyr } from '../../../src';

const youtubeSrc: SourceInfo = {
  type: 'video',
  sources: [
    {
      src: 'yWtFb9LJs3o',
      provider: 'youtube'
    }
  ]
};

export default function HomePage(): JSX.Element {
  return (
    <div class="flex justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <h1 class="text-center text-3xl font-medium">
          Solid Plyr Demo
        </h1>
        <div>
          <SolidPlyr source={youtubeSrc} />
        </div>
      </div>
    </div>
  );
}
