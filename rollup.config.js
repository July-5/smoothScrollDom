import babel from "rollup-plugin-babel"
import { uglify } from "rollup-plugin-uglify"
export default {
    input: "index.js",
    output: [{
            file: "./dist/index.umd.js",
            format: "umd",
            name: "vueSlide"
        },
        {
            file: "./dist/index.es.js",
            format: "esm"
        },
        {
            file: "./dist/index.cjs.js",
            format: "cjs"
        }
    ],
    plugins: [babel(), uglify()],
}