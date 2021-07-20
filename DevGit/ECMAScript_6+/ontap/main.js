// default value
function logger(log, type = 'log'){
    console[type](log)
}
logger('messages','warn')