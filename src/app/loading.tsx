// REF: https://nextjs.org/docs/app/building-your-application/routing/loading-ui-and-streaming
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <Skeleton />
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
    </>
  );
}
