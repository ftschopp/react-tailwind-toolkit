import React from 'react';
import 'wicg-inert';
import Portal from '../portal/Portal.component';

export default function Modal(props) {
  const [active, setActive] = React.useState(false);
  const { open, onClose, locked, className } = props;
  const backdrop = React.useRef(null);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = e => !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = e => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector('#__next').setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      document.querySelector('#__next').removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className={`modal-portal z-20`}>
          <div
            ref={backdrop}
            className={`portal-container ${
              active && open ? 'portal-container-active' : 'portal-container-inactive'
            }`}
          >
            <div
              className={`${className} ${
                active && open ? 'modal-content-active' : 'modal-content-inactive'
              }`}
            >
              {props.children}
            </div>
          </div>
        </Portal>
      )}

      <style jsx>
        {`
          .portal-container {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: rgba(51, 51, 51, 0.3);
            backdrop-filter: blur(1px);
            opacity: 0;
            transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
            transition-delay: 200ms;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 1;
          }

          .portal-container-active {
            transition-duration: 250ms;
            transition-delay: 0ms;
            opacity: 1;
          }

          .modal-content-inactive {
            transform: translateY(300px);
            transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 0;
          }
          .modal-content-active {
            transform: translateY(0);
            opacity: 1;
            transition-delay: 250ms;
            transition-duration: 350ms;
          }
        `}
      </style>
    </React.Fragment>
  );
}
