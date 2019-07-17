import React from 'react';

class Disappear extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showChildren: true,
            timer: null,
        }
    }

    componentDidMount() {
        const { ms } = this.props;
        const timeout = setTimeout(this.hideChildren, ms);

        this.setState({timer: timeout});
    }

    hideChildren = () => {
        this.setState({showChildren: false});
    }

    removeTimer = () => {
        clearTimeout(this.state.timer);
        this.setState({timer: null});
    }

    componentWillUnmount() {
        this.removeTimer();
    }

    render() {
        const { showChildren } = this.state;

        return showChildren ? this.props.children : null;
    }
}

export default ms => Component => props => <Disappear ms={ms}><Component {...props} /></Disappear>