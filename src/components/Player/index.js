import React from 'react';

import './index.css';

export default class Player extends React.Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = { play: false, currentTime: 0, duration: 0 };
  }
  togglePlay = () => {
    if (this.state.play) {
      this.setState({ play: false });
      this.audio.pause();
    } else {
      this.setState({ play: true });
      this.audio.play();
    }
  };
  onMouseMove = e => {
    this.positionHandle(e.pageX);
    this.setState(
      {
        currentTime:
          ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) *
          this.state.duration
      },
      () => {
        this.audio.currentTime = this.state.currentTime;
      }
    );
  };
  onMouseDown = e => {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  };
  onMouseUp = e => {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);
  };
  positionHandle = position => {
    const timelineWidth = this.timeline.offsetWidth - this.handle.offsetWidth;
    const handleLeft = position - this.timeline.offsetLeft;
    if (handleLeft >= 0 && handleLeft <= timelineWidth) {
      this.handle.style.marginLeft = handleLeft + 'px';
    }
    if (handleLeft < 0) {
      this.handle.style.marginLeft = '0px';
    }
    if (handleLeft > timelineWidth) {
      this.handle.style.marginLeft = timelineWidth + 'px';
    }
  };
  componentWillReceiveProps() {
    this.setState({ play: false });
  }
  componentDidMount() {
    this._isMounted = true;
    this.audio.addEventListener('timeupdate', e => {
      if (this._isMounted) {
        this.setState(
          {
            currentTime: e.target.currentTime,
            duration: e.target.duration
          },
          () => {
            const ratio = this.state.currentTime / this.state.duration;
            const position =
              this.timeline.offsetWidth * ratio + this.timeline.offsetLeft;
            this.positionHandle(position);
          }
        );
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
    this.audio.removeEventListener('timeupdate', () => {});
  }
  render() {
    return (
      <div className="h-32 pl-4 border-4 border-grey-lightest rounded-lg flex items-center">
        <audio
          preload="auto"
          src={this.props.audio}
          ref={audio => {
            this.audio = audio;
          }}
          autoPlay
        />
        <div onClick={this.togglePlay} className="flex">
          {this.state.play === true ? (
            <img
              alt="pause icon"
              style={{ width: 72 }}
              src={require('../../images/icon-pause.svg')}
            />
          ) : (
            <img
              alt="play icon"
              style={{ width: 72 }}
              src={require('../../images/icon-play.svg')}
            />
          )}
        </div>
        <div
          id="timeline"
          className="mr-4 bg-grey-lighter rounded h-400 w-20 flex-1 align-center"
          onClick={this.onMouseMove}
          ref={timeline => {
            this.timeline = timeline;
          }}
        >
          <div
            id="handle"
            className="bg-teal"
            onMouseDown={this.onMouseDown}
            ref={handle => {
              this.handle = handle;
            }}
          />
        </div>
      </div>
    );
  }
}
