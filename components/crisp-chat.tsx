"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("cf5faa14-5c1c-4a9e-b48d-f436096cf17b");
    }, [])

    return null;
}

export default CrispChat
