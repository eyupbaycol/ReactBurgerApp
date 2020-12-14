import React, { Component } from 'react';

import Aux from '../Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import classes from './Layout.css';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state = {
        showSideDrawer: false
    }
    SideDrawerClosedandler = ()  => {
        this.setState({showSideDrawer: false})
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState)=>{
           return {showSideDrawer: !prevState.showSideDrawer}
        })
    }
    render () {
        return (
            <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedandler} />
            <main className={ classes.Content }>
                {this.props.children}
            </main>
        </Aux>
        )
    }
} 
export default Layout;