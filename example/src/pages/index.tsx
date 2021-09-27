// ANCHOR Solid
import { JSX } from 'solid-js';

export default function HomePage(): JSX.Element {
  return (
    <div class="flex justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <h1 class="text-center text-3xl font-medium">
          Solid Plyr Demo
        </h1>
      </div>
    </div>
  );
}
