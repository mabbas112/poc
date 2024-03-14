import dynamic from 'next/dynamic'

interface Props {
    config: any
}
const CreativeEditorSDKWithNoSSR = ({ config }: Props) => {
    const CeSDKwithNoSSR = dynamic(() => import('./creativeEditorSDK'), {
        ssr: false
    })

    return <CeSDKwithNoSSR config={config} />
}

export default CreativeEditorSDKWithNoSSR;