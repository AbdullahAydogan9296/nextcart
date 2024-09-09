import Image from 'next/image';
import React from 'react';

const SuccessIcon = () => (
    <Image
        src="/icons/checked.svg"
        alt="Order Success"
        width={150}
        height={150}
        className="mb-6"
    />
);

export default SuccessIcon;