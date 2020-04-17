import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from '../store/counterAction'


const Counter = props =>
  <div>
    <h1>{props.counter.number}</h1>
    <input onChange={props.stepChanged} value={props.counter.step} type='number'/>
    <button onClick={props.inc}>Inc</button>
    <button onClick={props.dec}>Dec</button>
  </div>



const mapDispatchToProps = dispatch =>
  bindActionCreators({ inc, dec, stepChanged }, dispatch);

const mapStateToProps = state => ({
  counter: state.counter

});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)