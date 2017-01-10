import React, { Component } from 'react'

import RefreshIcon from './RefreshIcon'
import TextBar from './TextBar'

class Search extends Component {

    constructor (props) {
        super(props)

        const tab = this.getThisTab(props)

        this.state = {
            tab,
            url: tab.url || ''
        }

        this.changeUrl = this.changeUrl.bind(this)
        this.setUrl = this.setUrl.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        const tab = this.getThisTab(nextProps)
        this.setState({
            tab,
            url: tab.url || ''
        })
    }

    getThisTab (props) {
        const connections = props.connections.connections
        const list = props.connections.list
        let activeTab = props.activeTab

        return list[connections[activeTab].index]
    }

    changeUrl (e) {
        this.setState({
            url: e.target.value
        })
    }

    setUrl (e) {
        e && e.preventDefault()
        const url = this.state.url
        if ( url )
            this.props.setUrl(this.state.tab.id, url)
    }

    render () {
        // const state = this.state
        // const connected = state.tab.connected
        // const tabUrl = state.tab.url

        // const state = this.state,
        //    connected = state.tab.connected,
        //    tabUrl = state.tab.url

        const {
            state,
            state: {
                tab: {
                    connected,
                    url: tabUrl
                }
            }
        } = this

        return (
            <div className="search">
                <RefreshIcon faded={connected || !tabUrl} setUrl={this.setUrl} />
                <TextBar url={state.url} originalUrl={tabUrl} changeUrl={this.changeUrl} setUrl={this.setUrl} connected={connected} />
            </div>
        )
    }
}

export default Search
