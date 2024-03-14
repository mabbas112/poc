'use client';
import CreativeEditorSDK from '@cesdk/cesdk-js';

import { useEffect, useRef } from 'react';

interface Props {
    config?: any
}
const CeSdk = ({ config = {} }: Props) => {

    const cesdk_container = useRef(null);

    useEffect(() => {
        if (cesdk_container.current) {
            config.license = process.env.NEXT_PUBLIC_LICENSE;
            config.baseURL =
                'https://cdn.img.ly/packages/imgly/cesdk-js/1.22.0/assets';
            config.callbacks = { onUpload: 'local' };


            CreativeEditorSDK.create(cesdk_container.current, config).then(
                async (instance) => {
                    instance.addDefaultAssetSources();
                    instance.addDemoAssetSources({ sceneMode: 'Design' });
                    await instance.createDesignScene();
                }
            );
        }
    }, [config]);


    return (
        <div
            ref={cesdk_container}
            style={{ width: '55vw', height: '600px' }}
        ></div>
    );
};


export default CeSdk;
