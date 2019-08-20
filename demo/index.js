import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 基本使用","code":"/**\n *\n * @title 基本使用\n * @description 基本使用\n *\n */\nimport React, { Component } from 'react';\nimport  Btns, Button  from 'ac-btns';\n\n\nlet btns = {\n    add: {\n        onClick: () => {\n            console.log('add')\n        }\n    },\n    search:{\n        onClick: () => {\n            console.log('search')\n        }\n    },\n    cancel:{\n        onClick: () => {\n            console.log('cancel')\n        }\n    },\n    clear: {\n        onClick: () => {\n            console.log('clear')\n        }\n    },\n    export: {\n        onClick: () => {\n            console.log('export')\n        }\n    },\n    save: {\n        onClick: () => {\n            console.log('save')\n        }\n    },\n    cancel: {\n        onClick: () => {\n            console.log('cancel')\n        }\n    },\n    update: {\n        onClick: () => {\n            console.log('update')\n        }\n    },\n    delete: {\n        onClick: () => {\n            console.log('delete')\n        }\n    },\n    pbmsubmit: {\n        onClick: () => {\n            console.log('pbmsubmit')\n        }\n    },\n    pbmcancle: {\n        onClick: () => {\n            console.log('pbmcancle')\n        }\n    },\n    pbmapprove: {\n        onClick: () => {\n            console.log('pbmapprove')\n        }\n    },\n    printpreview: {\n        onClick: () => {\n            console.log('printpreview')\n        }\n    },\n    printdesign: {\n        onClick: () => {\n            console.log('printdesign')\n        }\n    },\n    upload: {\n        onClick: () => {\n            console.log('upload')\n        }\n    },\n    addRow: {\n        onClick: () => {\n            console.log('addRow')\n        }\n    },\n    delRow: {\n        onClick: () => {\n            console.log('delRow')\n        }\n    },\n    copyRow: {\n        onClick: () => {\n            console.log('copyRow')\n        }\n    },\n    copyToEnd: {\n        onClick: () => {\n            console.log('copyToEnd')\n        }\n    },\n    max: {\n        onClick: () => {\n            console.log('max')\n        }\n    },\n    min: {\n        onClick: () => {\n            console.log('min')\n        }\n    },\n}\nclass Demo1 extends Component {\n\n    render() {\n        return <Btns btns = {btns} />\n    }\n}\n","desc":" 基本使用"},{"example":<Demo2 />,"title":" 不使用 Button 按钮","code":"/**\n *\n * @title 不使用 Button 按钮\n * @description isBtn={false} \n *\n */\nimport React, { Component } from 'react';\nimport  Btns  from 'ac-btns';\n\n\nlet powerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel',\n                'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove',\n                'printpreview', 'printdesign', 'upload','addRow','delRow','copyRow',\n                'max','copyToEnd']\n\nlet btns = {\n    add: {\n        onClick: () => {\n            console.log('add')\n        }\n    },\n    search: {\n        onClick: () => {\n            console.log('search')\n        }\n    },\n    clear: {\n        onClick: () => {\n            console.log('clear')\n        }\n    },\n    export: {\n        onClick: () => {\n            console.log('export')\n        }\n    },\n    save: {\n        onClick: () => {\n            console.log('save')\n        }\n    },\n    cancel: {\n        onClick: () => {\n            console.log('cancel')\n        }\n    },\n    update: {\n        onClick: () => {\n            console.log('update')\n        }\n    },\n    delete: {\n        onClick: () => {\n            console.log('delete')\n        }\n    },\n    pbmsubmit: {\n        onClick: () => {\n            console.log('pbmsubmit')\n        }\n    },\n    pbmcancle: {\n        onClick: () => {\n            console.log('pbmcancle')\n        }\n    },\n    pbmapprove: {\n        onClick: () => {\n            console.log('pbmapprove')\n        }\n    },\n    printpreview: {\n        onClick: () => {\n            console.log('printpreview')\n        }\n    },\n    printdesign: {\n        onClick: () => {\n            console.log('printdesign')\n        }\n    },\n    upload: {\n        onClick: () => {\n            console.log('upload')\n        }\n    },\n    addRow: {\n        onClick: () => {\n            console.log('addRow')\n        }\n    },\n    delRow: {\n        onClick: () => {\n            console.log('delRow')\n        }\n    },\n    copyRow: {\n        onClick: () => {\n            console.log('copyRow')\n        }\n    },\n    copyToEnd: {\n        onClick: () => {\n            console.log('copyToEnd')\n        }\n    },\n    max: {\n        onClick: () => {\n            console.log('max')\n        }\n    },\n}\n\nclass Demo1 extends Component {\n\n    render() {\n        return <Btns type='line' btns = {btns} powerBtns={powerBtns}/>\n    }\n}\n","desc":" isBtn={false} "},{"example":<Demo3 />,"title":" 使用按钮权限","code":"/**\n *\n * @title 使用按钮权限\n * @description 传入 powerBtns，最终显示按钮是 pwoerBtns和btn说的交集\n *\n */\nimport React, { Component } from 'react';\nimport  Btns  from 'ac-btns';\n\n\nlet powerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel',\n                'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove',\n                'printpreview']\n\nlet btns = {\n    add: {\n        onClick: () => {\n            console.log('add')\n        }\n    },\n    search: {\n        onClick: () => {\n            console.log('search')\n        }\n    },\n    clear: {\n        onClick: () => {\n            console.log('clear')\n        }\n    },\n    export: {\n        onClick: () => {\n            console.log('export')\n        }\n    },\n    save: {\n        onClick: () => {\n            console.log('save')\n        }\n    },\n    cancel: {\n        onClick: () => {\n            console.log('cancel')\n        }\n    },\n    update: {\n        onClick: () => {\n            console.log('update')\n        }\n    },\n    delete: {\n        onClick: () => {\n            console.log('delete')\n        }\n    },\n    pbmsubmit: {\n        onClick: () => {\n            console.log('pbmsubmit')\n        }\n    },\n    pbmcancle: {\n        onClick: () => {\n            console.log('pbmcancle')\n        }\n    },\n    pbmapprove: {\n        onClick: () => {\n            console.log('pbmapprove')\n        }\n    },\n    printpreview: {\n        onClick: () => {\n            console.log('printpreview')\n        }\n    },\n    printdesign: {\n        onClick: () => {\n            console.log('printdesign')\n        }\n    },\n    upload: {\n        onClick: () => {\n            console.log('upload')\n        }\n    },\n    addRow: {\n        onClick: () => {\n            console.log('addRow')\n        }\n    },\n    delRow: {\n        onClick: () => {\n            console.log('delRow')\n        }\n    },\n    copyRow: {\n        onClick: () => {\n            console.log('copyRow')\n        }\n    },\n    copyToEnd: {\n        onClick: () => {\n            console.log('copyToEnd')\n        }\n    },\n    max: {\n        onClick: () => {\n            console.log('max')\n        }\n    },\n}\n\nclass Demo1 extends Component {\n\n    render() {\n        return <Btns btns = {btns} powerBtns={powerBtns}/>\n    }\n}\n","desc":" 传入 powerBtns，最终显示按钮是 pwoerBtns和btn说的交集"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
