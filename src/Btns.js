import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BtnsJSON from './btnJSON';
import Button from 'bee-button';
import Icon from 'bee-icon';


// 默认权限按钮数组是全部
let defaultPowerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel',
'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove',
'printpreview', 'printdesign', 'upload','addRow','delRow','copyRow',
'max','copyToEnd']


const propTypes = {
    powerBtns:PropTypes.array,// 按钮权限 code数组
    btns:PropTypes.object,// 按钮对象数组
    isBtn:PropTypes.bool,//是否是按钮
};
const defaultProps = {
    powerBtns:defaultPowerBtns,
    btns:{},
    isBtn:true
};



class Btns extends Component {


    renderBtns=()=>{
        let btnArray = [];
        this.props.powerBtns.forEach(item => {
            let btn = this.renderBtn(item)
            if(btn)btnArray.push(btn)
        });
        return btnArray;
    }

    renderBtn=(key)=>{
        let itemProps = this.props.btns[key];
        let { colors,className,name,name_zh_tw,name_en_us} = BtnsJSON[key];
        let clss = 'ac-btns-item '+className;
        if(itemProps.className)clss+=' '+itemProps.className;
        if(BtnsJSON[key]){
            if(this.props.isBtn){
                switch(key){
                    case 'search':
                        return <Button key={key} {...itemProps} colors={colors} className={clss}>
                                    <Icon type='uf-search-light-2'/>
                                </Button>
                    case 'clear':
                        return <Button key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>
                                    <Icon type='uf-clean'/>
                                </Button>
                    case 'max':
                        return <Button key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>
                                    <Icon type='uf-maxmize'/>
                                </Button>
                    default:
                        return <Button key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>{name}</Button>
                }
            }else{
                switch(key){
                    case 'search':
                        return <span key={key} {...itemProps} colors={colors} className={clss}>
                                    <Icon type='uf-search-light-2'/>
                                </span>
                    case 'clear':
                        return <span key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>
                                    <Icon type='uf-clean'/>
                                </span>
                    case 'max':
                        return <span key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>
                                    <Icon type='uf-maxmize'/>
                                </span>
                    default:
                        return <span key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>{name}</span>
                }
            }
            
        }else{
            return null 
        }
        
    }

    render(){
        console.log(this.props.btns)
        return(
            <span className='ac-btns'>
                {this.renderBtns()}
            </span>
        )
    }
};

Btns.propTypes = propTypes;
Btns.defaultProps = defaultProps;
export default Btns;