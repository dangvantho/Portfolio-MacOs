import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleBoot, toggleLogin, toggleShutdown} from '../app/reducers/background.reducer'
import Shutdown from '../pages/Shutdown'
import Login from '../pages/Login'
import Screen from '../pages/Screen'

Route.propTypes = {
    
};

function Route(props) {
    const { bg }= props
    const { shutdown, login, desktop }= bg
    return (
        <React.Fragment>
            { shutdown && <Shutdown /> }
            { login && <Login /> }
            { desktop && <Screen />}
        </React.Fragment>
    );
}

const mapStateToProps= state=>({
    bg: state.background

})
export default connect(mapStateToProps, null)(Route)