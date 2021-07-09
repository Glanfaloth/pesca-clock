import React, {useState} from 'react';
import './App.css';
import TimerLengthControl from './components/TimerLengthControl';

const accurateInterval = function (fn, time) {
  var cancel, nextAt, timeout, wrapper;
  nextAt = new Date().getTime() + time;
  timeout = null;
  wrapper = function () {
    nextAt += time;
    timeout = setTimeout(wrapper, nextAt - new Date().getTime());
    return fn();
  };
  cancel = function () {
    return clearTimeout(timeout);
  };
  timeout = setTimeout(wrapper, nextAt - new Date().getTime());
  return {
    cancel: cancel
  };
};

export default function Timer() {
    const [brkLength, setBrkLengthO] = useState(5);
    const [seshLength, setSeshLengthO] = useState(25);
    const [timerState, setTimerState] = useState('stopped');
    const [timerType, setTimerType] = useState('Session');
    const [timer, setTimer] = useState(1500);
    const [intervalID, setIntervalID] = useState('');
    const [alarmColor, setAlarmColor] = useState({ color: 'white' });
  function setBrkLength(e) {
    lengthControl(
      'brkLength',
      e.currentTarget.value,
      brkLength,
      'Session'
    );
  }
  function setSeshLength(e) {
    lengthControl(
      'seshLength',
      e.currentTarget.value,
      seshLength,
      'Break'
    );
  }
  function lengthControl(stateToChange, sign, currentLength, timerType) {
    if (timerState === 'running') {
      return;
    }
    if (timerType === timerType) {
      if (sign === '-' && currentLength !== 1) {
        setBrkLengthO(currentLength - 1);
      } else if (sign === '+' && currentLength !== 60) {
        setBrkLengthO(currentLength + 1);
      }
    } else if (sign === '-' && currentLength !== 1) {
      setBrkLengthO(currentLength - 1);
      setTimer(currentLength * 60 - 60);
    } else if (sign === '+' && currentLength !== 60) {
      setBrkLengthO(currentLength + 1);
      setTimer(currentLength * 60 + 60);
    }
  }
  function timerControl() {
    if (timerState === 'stopped') {
      beginCountDown();
      setTimerState('running');
    } else {
      setTimerState('stopped');
      if (intervalID) {
        intervalID.cancel();
      }
    }
  }
  function beginCountDown() {
    setIntervalID(accurateInterval(() => {
        decrementTimer();
        phaseControl();
      }, 1000));
  }
  function decrementTimer() {
    setTimer(timer - 1);
  }
  function phaseControl() {
    let timer = timer;
    warning(timer);
    if (timer < 0) {
      if (intervalID) {
        intervalID.cancel();
      }
      if (timerType === 'Session') {
        beginCountDown();
        switchTimer(brkLength * 60, 'Break');
      } else {
        beginCountDown();
        switchTimer(seshLength * 60, 'Session');
      }
    }
  }
  function warning(_timer) {
    if (_timer < 61) {
      setAlarmColor({ color: '#a50d0d' });
    } else {
      setAlarmColor({ color: 'white' });
    }
  }

  function switchTimer(num, str) {
    setTimer(num);
    setTimerType(str);
    setAlarmColor({ color: 'white' });
  }
  function clockify() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }
  function reset() {
      setBrkLengthO(5);
      setSeshLengthO(25);
      setTimerState('stopped');
      setTimerType('Session');
      setTimer(1500);
      setIntervalID('');
      setAlarmColor({ color: 'white' })
    if (intervalID) {
      intervalID.cancel();
    }
  }
    return (
      <div>
        <div className="main-title">Pesca</div>
        <TimerLengthControl
          addID="break-increment"
          length={brkLength}
          lengthID="break-length"
          minID="break-decrement"
          onClick={setBrkLength}
          title="Break Length"
          titleID="break-label"
        />
        <TimerLengthControl
          addID="session-increment"
          length={seshLength}
          lengthID="session-length"
          minID="session-decrement"
          onClick={setSeshLength}
          title="Session Length"
          titleID="session-label"
        />
        <div className="timer" style={alarmColor}>
          <div className="timer-wrapper">
            <div id="timer-label">{timerType}</div>
            <div id="time-left">{clockify()}</div>
          </div>
        </div>
        <div className="timer-control">
          <button id="start_stop" onClick={timerControl}>
            <i className="fa fa-play fa-2x" />
            <i className="fa fa-pause fa-2x" />
          </button>
          <button id="reset" onClick={reset}>
            <i className="fa fa-refresh fa-2x" />
          </button>
        </div>
      </div>
    );
}