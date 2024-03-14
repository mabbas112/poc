import dynamic from 'next/dynamic'

const CreativeEditorSDKWithNoSSR = dynamic(() => import('./index'), {
    ssr: false
})

export default CreativeEditorSDKWithNoSSR;
