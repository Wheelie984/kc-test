import React from 'react';

export interface IRouteItem {
    path: string;
    name: string;
    component: React.FC;
    routes?: IRouteItem[];
    layout?: React.FC<any>;
    title: string;
    exact: boolean;
    needAuth: boolean;
    isAuthPage?: boolean;
}
