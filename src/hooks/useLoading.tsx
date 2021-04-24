import React from 'react';

export function useLoading(): readonly [boolean, (promise: Promise<any>) => Promise<any>] {
  const [isLoading, setState] = React.useState(false);

  const load = (promise: Promise<any>) => {
    setState(true);
    return promise.finally(() => setState(false));
  };
  // infers [boolean, typeof load] instead of (boolean | typeof load)[]
  return [isLoading, load] as const;
}
