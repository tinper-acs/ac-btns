import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BtnsJSON from './btnJSON';
import Button from 'bee-button';
import Icon from 'bee-icon';
import Dropdown from 'bee-dropdown';
import Menus from 'bee-menus'

const Item = Menus.Item;

// 默认权限按钮数组是全部
let defaultPowerBtns = ['add', 'search', 'clear', 'export', 'save', 'cancel',
'update', 'delete', 'pbmsubmit', 'pbmcancle', 'pbmapprove',
'printpreview', 'printdesign', 'upload','addRow','delRow','copyRow',
'max','copyToEnd','other','min']


const propTypes = {
    powerBtns:PropTypes.array,// 按钮权限 code数组
    btns:PropTypes.object,// 按钮对象数组
    type:PropTypes.oneOfType(['button','line']),
    maxSize:PropTypes.number,
    forcePowerBtns:[],//不受权限控制的按钮code数组
};
const defaultProps = {
    powerBtns:defaultPowerBtns,
    btns:{},
    type:'button',
    maxSize:2,
    forcePowerBtns:['cancel','search','clear'],//取消、查询、清空不受权限管理控制
};



class Btns extends Component {


    renderBtns=()=>{
        let { btns, type, maxSize, powerBtns,forcePowerBtns } = this.props;
        let btnArray = [];
        Object.keys(btns).map(item=>{
            if(forcePowerBtns.indexOf(item)!=-1){
                let btn = this.renderBtn(item)
                if(btn)btnArray.push(btn)
            }
            if(powerBtns.indexOf(item)!=-1){
                let btn = this.renderBtn(item)
                if(btn)btnArray.push(btn)
            }
        })
        if(type=='line'){
            if(btnArray.length>maxSize){
                let menusList = (<Menus>
                        {
                            btnArray.map((item,index)=>{
                                if(index>maxSize-1)return <Item key={index} onClick={item.onClick}>{item}</Item>
                            })
                        }
                    </Menus>)
                let drop = (<Dropdown 
                        overlayClassName='ac-btns-dropdown'
                        trigger={['click']}
                        overlay={menusList}
                        animation="slide-up">
                        <span className='ac-btns-item ac-btns-more'>更多</span>
                    </Dropdown>)
                btnArray.splice(maxSize,btnArray.length-maxSize+1,drop)
                return btnArray;
            }else{
                return btnArray;
            }
        }else{
            return btnArray;
        }
        
    }

    renderBtn=(key)=>{
        if(!this.props.btns.hasOwnProperty(key))return;
        let itemProps = this.props.btns[key];
        let { colors,className,name,name_zh_tw,name_en_us} = BtnsJSON[key];
        let clss = 'ac-btns-item '+className;
        if(itemProps){
            if(itemProps.className)clss+=' '+itemProps.className;
            if(itemProps.name)name=itemProps.name
        }
        if(BtnsJSON[key]){
            if(itemProps&&itemProps.node){
                return itemProps.node
            }else{
                if(this.props.type=='button'){
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
                        case 'min':
                            return <Button key={key} {...itemProps} colors={colors} className={`ac-btns-write ${clss}`}>
                                        <Icon type='uf-minimize'/>
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
            }
            
            
        }else{
            return null 
        }
        
    }

    render(){
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