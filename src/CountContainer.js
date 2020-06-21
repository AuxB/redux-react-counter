import React from 'react';
import { connect } from 'react-redux';

const addOneAction = {type: 'ADD_ONE'}
const addTenAction = {type: 'ADD_TEN'}
const removeOneAction = {type: 'REMOVE_ONE'}
const removeTenAction = {type: 'REMOVE_TEN'}
const resetAction = {type: 'RESET'}

function CountComponent(props) {
    const { dispatch } = props
    return (
        <div>
            <p>{props.count}</p>
            <button onClick={() => dispatch(addOneAction)}>add 1</button>
            <button onClick={() => dispatch(removeOneAction)}>remove -</button>
            <button onClick={() => dispatch(addTenAction)}>add 10</button>
            <button onClick={() => dispatch(removeTenAction)}>remove 10</button>
            <button onClick={() => dispatch(resetAction)}>reset</button>

        </div>
    );
}

const mapStateToProps = state => ({
    count: state
})

const CountContainer = connect(mapStateToProps)(CountComponent)

export default CountContainer;