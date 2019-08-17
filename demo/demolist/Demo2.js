/**
 *
 * @title 不使用 Button 按钮
 * @description isBtn={false} 
 *
 */
import React, { Component } from 'react';
import Btns from '../../src'


let powerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel',
                'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove',
                'printpreview', 'printdesign', 'upload','addRow','delRow','copyRow',
                'max','copyToEnd']

let btns = {
    add: {
        onClick: () => {
            console.log('add')
        }
    },
    search: {
        onClick: () => {
            console.log('search')
        }
    },
    clear: {
        onClick: () => {
            console.log('clear')
        }
    },
    export: {
        onClick: () => {
            console.log('export')
        }
    },
    save: {
        onClick: () => {
            console.log('save')
        }
    },
    cancel: {
        onClick: () => {
            console.log('cancel')
        }
    },
    update: {
        onClick: () => {
            console.log('update')
        }
    },
    delete: {
        onClick: () => {
            console.log('delete')
        }
    },
    pbmsubmit: {
        onClick: () => {
            console.log('pbmsubmit')
        }
    },
    pbmcancle: {
        onClick: () => {
            console.log('pbmcancle')
        }
    },
    pbmapprove: {
        onClick: () => {
            console.log('pbmapprove')
        }
    },
    printpreview: {
        onClick: () => {
            console.log('printpreview')
        }
    },
    printdesign: {
        onClick: () => {
            console.log('printdesign')
        }
    },
    upload: {
        onClick: () => {
            console.log('upload')
        }
    },
    addRow: {
        onClick: () => {
            console.log('addRow')
        }
    },
    delRow: {
        onClick: () => {
            console.log('delRow')
        }
    },
    copyRow: {
        onClick: () => {
            console.log('copyRow')
        }
    },
    copyToEnd: {
        onClick: () => {
            console.log('copyToEnd')
        }
    },
    max: {
        onClick: () => {
            console.log('max')
        }
    },
}

class Demo1 extends Component {

    render() {
        return <Btns isBtn={false} btns = {btns} powerBtns={powerBtns}/>
    }
}
export default Demo1