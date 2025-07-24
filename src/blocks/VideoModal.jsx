import React, { Component } from 'react';
import homeVideo from '../assets/video/home-video.mp4'; // adjust path if needed

class VideoModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  closeModal = () => {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <>
        <button className="video-popup position-top-center" onClick={this.openModal}>
          <span className="play-icon">▶</span>
        </button>

        {this.state.isOpen && (
          <div className="custom-video-modal">
            <div className="modal-content">
              <span className="close-btn" onClick={this.closeModal}>&times;</span>
              <video
                className="video-player"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={homeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Inline styles */}
        <style>{`
          .video-popup {
            background-color: transparent;
            border: none;
            cursor: pointer;
            font-size: 40px;
            color: #fff;
            z-index: 1000;
          }

          .position-top-center {
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 10;
          }

          .custom-video-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0,0,0,0.9); /* No image, solid dark bg */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .modal-content {
            position: relative;
            width: 90%;
            max-width: 800px;
            background: none;
            padding: 0;
            border-radius: 10px;
          }

          .close-btn {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            color: white;
            cursor: pointer;
            z-index: 10000;
          }

          .video-player {
            width: 100%;
            height: auto;
            border-radius: 10px;
            outline: none;
            display: block;
          }
        `}</style>
      </>
    );
  }
}

export default VideoModal;
