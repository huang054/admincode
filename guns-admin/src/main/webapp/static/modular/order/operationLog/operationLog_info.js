/**
 * 初始化订单管理详情对话框
 */
var OperationLogInfoDlg = {
    operationLogInfoData : {}
};

/**
 * 清除数据
 */
OperationLogInfoDlg.clearData = function() {
    this.operationLogInfoData = {};
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OperationLogInfoDlg.set = function(key, val) {
    this.operationLogInfoData[key] = (typeof val == "undefined") ? $("#" + key).val() : val;
    return this;
}

/**
 * 设置对话框中的数据
 *
 * @param key 数据的名称
 * @param val 数据的具体值
 */
OperationLogInfoDlg.get = function(key) {
    return $("#" + key).val();
}

/**
 * 关闭此对话框
 */
OperationLogInfoDlg.close = function() {
    parent.layer.close(window.parent.OperationLog.layerIndex);
}

/**
 * 收集数据
 */
OperationLogInfoDlg.collectData = function() {
    this
    .set('id')
    .set('logtype')
    .set('logname')
    .set('userid')
    .set('classname')
    .set('method')
    .set('createtime')
    .set('succeed')
    .set('message');
}

/**
 * 提交添加
 */
OperationLogInfoDlg.addSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/operationLog/add", function(data){
        Feng.success("添加成功!");
        window.parent.OperationLog.table.refresh();
        OperationLogInfoDlg.close();
    },function(data){
        Feng.error("添加失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.operationLogInfoData);
    ajax.start();
}

/**
 * 提交修改
 */
OperationLogInfoDlg.editSubmit = function() {

    this.clearData();
    this.collectData();

    //提交信息
    var ajax = new $ax(Feng.ctxPath + "/operationLog/update", function(data){
        Feng.success("修改成功!");
        window.parent.OperationLog.table.refresh();
        OperationLogInfoDlg.close();
    },function(data){
        Feng.error("修改失败!" + data.responseJSON.message + "!");
    });
    ajax.set(this.operationLogInfoData);
    ajax.start();
}

$(function() {

});
