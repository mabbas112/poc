'use client';
import CreativeEditorSDK from '@cesdk/cesdk-js';
import { useEffect, useRef } from 'react';
import createBlog from '../../utils/createBlog';

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

                    const blog = await createBlog('/demo-image.jpeg');

                    if (blog) {
                        await instance.createFromImage(blog);
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
            style={{ width: '55vw', height: '600px' }}
        ></div>
    );
};


export default CeSdk;
