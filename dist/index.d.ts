import sentry from '@sentry/node';
import TransportStream = require('winston-transport');
import { TransportStreamOptions } from 'winston-transport';
export default class Sentry extends TransportStream {
    protected name: string;
    protected tags: {
        [s: string]: any;
    };
    protected sentryClient: typeof sentry;
    protected levelsMap: any;
    constructor(opts: {
        config: sentry.NodeOptions & {
            tags?: any;
            extra?: any;
        };
        [key: string]: any;
    } & TransportStreamOptions);
    log(info: any, callback: any): any;
}
