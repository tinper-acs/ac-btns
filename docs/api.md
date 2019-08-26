# 编程模型所有按钮 Btns


## 何时使用


## 如何使用

```
    import Btns from 'ac-btns';
    import 'ac-btns/build/Btns.css';

```

## 代码演示

## API

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|btns|按钮对象数组，详见demo3，支持按钮及code已全部列出|Object|-|
|powerBtns|按钮权限数组，包含所有可用按钮的code，不使用按钮权限可不传|array|-|
|forcePowerBtns|不受按钮权限控制的code数组|array|-|
|type|渲染组件是 `Button` 还是 `span`, `button`/`line`二选一，`line` 多用于table的操作列 |string|button|
|maxSize|渲染组件是 `span` 时, 超出几个按钮变为下拉|number|2|
|localeCookie|获取多语cookie的key值|string|locale|
|addToBtns|扩展的按钮,例如 `{'example':{ 'colors':'write','name_zh_CN':'测试按钮','name_zh_TW':'測試按鈕','name_en_US':'Test Button','className':'ac-btns-example'}}`
|object|-|



### copyToEnd

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|colors|按钮样式，参考(bee-button不同颜色的按钮)[http://bee.tinper.org/tinper-bee/bee-button#%E4%B8%8D%E5%90%8C%E9%A2%9C%E8%89%B2%E7%9A%84%E6%8C%89%E9%92%AE]|string|-|
|name_zh_CN|中文简体内容|string|-|
|name_zh_TW|中文繁体内容|string|-|
|name_en_US|英文内容|string|-|
|className|类名|string|-|

### btns下的属性 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|className|类名|string|-|
|name|自定义渲染name，不传，则使用默认|node|-|
|node|自定义渲染dom，不传，则使用默认|node|-|




### 已支持的按钮及code如下

```js
{
    'add':{ //新增
        'name':'新增',
        'className':'ac-btns-add'
    },
    'search':{//查询
        'name':'查询',
        'className':'ac-btns-search'
    },
    'clear':{//清空
        'name':'清空',
        'className':'ac-btns-clear'
    },
    'export':{//导出
        'name':'导出',
        'className':'ac-btns-export'
    },
    'save':{//保存
        'name':'保存',
        'className':'ac-btns-save'
    },
    'cancel':{//取消
        'name':'取消',
        
        'className':'ac-btns-cancel'
    },
    'update':{//编辑
        'name':'编辑',
        'className':'ac-btns-update'
    },
    'delete':{//删除
        'name':'删除',
        'className':'ac-btns-delete'
    },
    'pbmsubmit':{//提交
        'name':'提交',
        'className':'ac-btns-pbmsubmit'
    },
    'pbmcancle':{//撤回
        'name':'撤回',
        'className':'ac-btns-pbmcancle'
    },
    'pbmapprove':{//审批
        'name':'审批',
        'className':'ac-btns-pbmapprove'
    },
    'printpreview':{//打印预览
        'name':'打印预览',
        'className':'ac-btns-printpreview'
    },
    'printdesign':{//打印设计
        'name':'打印设计',
        'className':'ac-btns-printdesign'
    },
    'upload':{//上传文件       
        'name':'上传文件',
        'className':'ac-btns-upload'
    },
    'addRow':{//增行        
        'name':'增行',
        'className':'ac-btns-addRow'
    },
    'delRow':{//删行        
        'name':'删行',
        'className':'ac-btns-delRow'
    },
    'copyRow':{//复制行        
        'name':'复制行',
        'className':'ac-btns-copyRow'
    },
    'max':{//最大化        
        'name':'max',
        'className':'ac-btns-max'
    },
    'copyToEnd':{//粘贴至末行
        'name':'粘贴至末行',
        'className':'ac-btns-copyToEnd'
    },
}


```

 ## 注意事项

 暂无

 ## 更新日志