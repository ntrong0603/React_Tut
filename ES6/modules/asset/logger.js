export const TYPE_LOG   = 'log';
export const TYPE_WARN  = 'warn';
export const TYPE_ERROR = 'error';

function logger(log, type = "log")
{
    console[type](log);
}

// 1 module chỉ export default 1 cái
export default logger;