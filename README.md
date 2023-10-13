# rollup-v4-browser-vite-demo
A repo for reproducing an error with the Rollup v4 browser build, described in https://stackoverflow.com/questions/77276441/vite-react-wasm-errors-when-running-rollup-browser-side

I'm currently trying to figure out what to do for migrating to v4 to support the browser build of Rollup in a Vite-based app. Sharing my research so far here.

I reviewed the migration guide https://rollupjs.org/migration/ but nothing is mentioned there about WASM for the browser build. I also see that in https://github.com/rollup/rollup/blob/master/CHANGELOG.md#general-changes There is this hint:

>The browser build now relies on a WASM artifact that needs to be provided as well (#5073)

I'm currently trying to decipher https://github.com/rollup/rollup/pull/5073 to find out how to use this WASM artifact. Any guidance would be greatly appreciated. Thanks!
