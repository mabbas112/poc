import dynamic from 'next/dynamic'

interface Props {
    image?: File
}
const CreativeEditorSDKWithNoSSR = ({ image }: Props) => {

    let config = {
        license: "",
        baseURL: ''
    };

    const CeSDKwithNoSSR = dynamic(() => import('./creativeEditorSDK'), {
        ssr: false
    })

    return <CeSDKwithNoSSR image={image} config={config} />
}

export default CreativeEditorSDKWithNoSSR;