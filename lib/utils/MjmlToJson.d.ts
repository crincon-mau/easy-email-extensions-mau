import { IPage } from 'easy-email-core';
export declare function MjmlToJson(data: MjmlBlockItem | string): IPage;
export declare function getMetaDataFromMjml(data?: IChildrenItem): {
    [key: string]: any;
};
