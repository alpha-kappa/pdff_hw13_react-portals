import React from 'react';

import Alert from '../Alert';
import {withDisappear, withPortal} from '../../hocs';

const DISSAPEAR_TIMEOUT = 3000;
const portalNode = document.getElementById('alerts-panel');

class AlertsForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            alerts: [],
        }

        this.inputRef = React.createRef();
    }
    
    componentDidMount() {
        this.setFocusOnInput()
    }

    onChangeValue = ({target: {value}}) => this.setState({value})

    setFocusOnInput() {
        this.inputRef.current.focus();
    }

    pushAlert = () => {
        const {value: text} = this.state;

        const DisappearableAlert = withDisappear(DISSAPEAR_TIMEOUT)(Alert);
        const PortaledAlert = withPortal(portalNode)(DisappearableAlert)
        const key = Date.now();
        this.setState(prev => ({value: '', alerts: [...prev.alerts, <PortaledAlert text={text} key={key} />]}));

        this.setFocusOnInput();
    }

    render() {
        const {value, alerts} = this.state;

        return (
            <div>
                <input value={value} onChange={this.onChangeValue} ref={this.inputRef} />
                <button type="button" disabled={!value.length} onClick={this.pushAlert}>Push alert</button>
                {alerts}
            </div>
        )
    }
}

export default AlertsForm;