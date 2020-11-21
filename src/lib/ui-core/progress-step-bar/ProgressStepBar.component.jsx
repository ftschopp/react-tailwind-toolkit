import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const ProgressStepBar = ({ className, steps, activeStep }) => {
  return (
    <>
      <div
        className={`max-w-full mx-auto my-4 border-b-2 pb-1 bg-white${className}`}
      >
        <div className="flex pb-1">
          <div className="flex-1"></div>
          {steps.map((step, index) => {
            const current = index === activeStep;
            const showCompleted = index < activeStep;
            const isLastStep = index === steps.length - 1;
            return (
              <Fragment key={index}>
                <div className="flex-1">
                  <div>
                    {!showCompleted && (
                      <div
                        className={`w-10 h-10 bg-white border-2 ${
                          current
                            ? 'border-green-400 bg-green-300'
                            : 'border-grey-light'
                        } mx-auto rounded-full text-lg text-white flex items-center`}
                      >
                        <span className="text-gray-600 text-center w-full">
                          {index + 1}
                        </span>
                      </div>
                    )}
                    {showCompleted && (
                      <div className="w-10 h-10 border-2 border-green-400 mx-auto rounded-full flex items-center justify-center bg-green-300">
                        <FontAwesomeIcon icon={faCheck} color="green" />
                      </div>
                    )}
                  </div>
                  <div className="flex text-xs content-center text-center justify-center">
                    {step.description}
                  </div>
                </div>
                {!isLastStep && (
                  <div className="w-1/6 align-center items-center align-middle content-center flex">
                    <div
                      className={`w-full rounded items-center align-middle align-center flex-1 ${
                        showCompleted ? 'bg-green-400' : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className="text-xs leading-none py-1 text-center text-grey-darkest rounded "
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                  </div>
                )}
              </Fragment>
            );
          })}

          <div className="flex-1"></div>
        </div>
      </div>
    </>
  );
};

ProgressStepBar.defaultProps = {
  className: '',
};

export default ProgressStepBar;
