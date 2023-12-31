import React from 'react';
export interface UploadFieldProps {
    onChange: (val: string) => void;
    value: string;
    inputDisabled?: boolean;
    accept?: string;
    uploadHandler: (file: File) => Promise<string>;
}
export declare function UploadField(props: UploadFieldProps): React.JSX.Element;
