import { rollup } from "@rollup/browser";

const modules = {
  "main.js": "import foo from 'foo.js'; console.log(foo);",
  "foo.js": "export default 42;",
};

rollup({
  input: "main.js",
  plugins: [
    {
      name: "loader",
      resolveId(source) {
        if (modules.hasOwnProperty(source)) {
          return source;
        }
      },
      load(id) {
        if (modules.hasOwnProperty(id)) {
          return modules[id];
        }
      },
    },
  ],
})
  .then((bundle) => bundle.generate({ format: "es" }))
  .then(({ output }) => console.log(output[0].code));
