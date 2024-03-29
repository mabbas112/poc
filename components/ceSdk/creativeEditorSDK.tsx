'use client';
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef } from 'react';
import createBlog from '../../utils/createBlog';
import { fileToBlobConverter } from '../../utils/fileToBlobConverter';
import removeImageBackground from '../../utils/removeImageBackground';

interface Props {
    config: any
    image?: File
}
const CeSdk = ({ image, config }: Props) => {

    const cesdk_container = useRef(null);

    useEffect(() => {
        if (cesdk_container.current) {
            config.license = process.env.NEXT_PUBLIC_LICENSE;
            config.baseURL = 'https://cdn.img.ly/packages/imgly/cesdk-js/1.22.0/assets';
            config.callbacks = { onUpload: 'local' };

            CreativeEditorSDK.create(cesdk_container.current, config).then(
                async (instance) => {

                    const callbackHandler = async (blob: any) => {
                        const objectUrl = await removeImageBackground(blob);
                        // const objectUrl = URL.createObjectURL(blob);
                        objectUrl && await instance.createFromImage(objectUrl);

                    }

                    const blob = image ? fileToBlobConverter(image, callbackHandler) : await createBlog('/demo-image.jpeg');
                    if (blob) {
                        callbackHandler(blob);
                    }

                    instance.engine.block.findByType('graphic')[0];
                }
            );
        }

        return () => {
            cesdk_container.current = null;
        }
    }, [config]);


    return (
        <div
            ref={cesdk_container}
            style={{ width: '100%', height: '600px' }}
        ></div>
    );
};


export default CeSdk;
