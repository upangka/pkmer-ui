import  { defineConfig } from 'rollup';
import {nodeResolve} from "@rollup/plugin-node-resolve"
import { resolve } from "node:path"
import esbuild from 'rollup-plugin-esbuild'

const dir = process.cwd()
const config = defineConfig({
	input: 'src/index.ts',
    output:[{
        dir: 'dist',
        format: "esm",
        preserveModules: true,
    }],
    plugins: [
        nodeResolve({extensions: ['.ts', '.tsx', '.js', '.jsx']}),
        esbuild({
            sourceMap: true, // 打包后是否生成sourcemap
            tsconfig: resolve(dir,'tsconfig.build.json'), // tsconfig.json路径
            platform: 'browser',
            jsx:"automatic",  // 很重要
            minify: false,
        })
    ],
    external: ['react', 'react-dom',"react/jsx-runtime"],
    onwarn: (msg, warn) => {
        if (msg.code === "SOURCEMAP_ERROR") return
        if (msg.code === "MODULE_LEVEL_DIRECTIVE") return
    }
});
export default config;