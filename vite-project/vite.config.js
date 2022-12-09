import {defineConfig} from 'vite'

//npm i @vitejs/plugin-legacy -D 安装插件

import legacy from '@vitejs/plugin-legacy'
export default defineConfig({
    plugins:[legacy({
        targets:['defaults','ie 11']
    })]
})