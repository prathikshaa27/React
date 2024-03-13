import React, {Suspense} from "react";

const OtherComponent = React.lazy(()=> import('./othercomponent'));
const AnotherComponent = React.lazy(() => import('./anothercomponent'));


export default function CodeSplitting() {
  return (
    <div>
        <h1>Simple example</h1>
        <Suspense fallback={<div>Loading....</div>}>
            <section>
        <OtherComponent />
        <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}

 