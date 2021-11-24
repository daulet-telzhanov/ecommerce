/// <reference types="react-scripts" />
declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: 'development' | 'production' | 'test'
        PUBLIC_URL: string
        REACT_APP_MODE: 'default' | 'testing',
        REACT_APP_PUBLIC_URL: string
    }
}
