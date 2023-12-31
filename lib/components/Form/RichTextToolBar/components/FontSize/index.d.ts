import React from 'react';
export interface FontSizeProps {
    execCommand: (cmd: string, value: any) => void;
    getPopupContainer: () => HTMLElement;
}
export declare function FontSize(props: FontSizeProps): React.JSX.Element;
