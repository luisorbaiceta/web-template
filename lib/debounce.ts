export function debounce(fn: (params: any) => any, ms: number) {
  let timer: any;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      // @ts-ignore TODO
      fn.apply(this, arguments);
    }, ms);
  };
}
