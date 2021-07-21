import { TYPE_LOG } from './constant.js';
function logger(log, type = TYPE_LOG){
    console[type](log)
}
export default logger;
// muốn export cái gì thì điền name giống cái ấy
// lưu ý một module chỉ được export default một cái
// còn lại thì export vô số kiểu export thường