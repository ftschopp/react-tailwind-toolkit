import React, { useMemo, Fragment } from 'react';
import { Icon } from '../../icons';
import { find, propSatisfies, gt, compose, prop } from 'ramda';

const StepCheckpoint = ({ number, porcentage, active }) => {
  const isCompleted = porcentage === 100;

  return (
    <div className="mx-1">
      <div
        className={`w-10 h-10 ${
          isCompleted ? 'bg-green-300' : 'bg-green-100'
        } mx-auto rounded-full text-lg text-white flex items-center ${
          active ? 'border-4 border-green-300' : ''
        }`}
      >
        {isCompleted && (
          <Icon name="tick" className="w-full fill-current text-white" />
        )}
        {!isCompleted && (
          <span className="text-gray-300 text-center w-full">{number}</span>
        )}
      </div>
    </div>
  );
};

const StepProgress = ({ porcentage }) => {
  return (
    <div className="align-center align-middle content-center flex items-center mx-1 my-4 w-32">
      <div className="w-full bg-gray-100 h-2 rounded items-center align-middle align-center">
        <div
          className="bg-green-300 text-xs leading-none py-1 text-center text-red-400 rounded mb-4"
          style={{ width: `${porcentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const getActiveStepNumber = compose(
  prop('number'),
  find(propSatisfies(gt(100), 'porcentage'))
);

const ProgressStepBar = ({ className, steps }) => {
  const activeStep = useMemo(() => getActiveStepNumber(steps), [steps]);

  const stepLength = steps.length;

  const maxCol = stepLength * 4;

  return (
    <div class={`grid grid-cols-${maxCol} gap-0`}>
      <div class="row-start-1 col-start-1 w-16"></div>
      {steps.map((step, i) => {
        const isLastStep = i + 1 === stepLength;
        const { porcentage, number } = step;
        return (
          <>
            <div class={`row-start-1 col-start-${4 * (i + 1) - 2} col-span-2`}>
              <StepCheckpoint
                number={number}
                porcentage={porcentage}
                active={i + 1 === activeStep}
              />
            </div>
            {!isLastStep && (
              <div class="row-start-1 col-span-2">
                <StepProgress porcentage={porcentage} />
              </div>
            )}
            <div
              class={`row-start-2 col-start-${
                i * 4 + 1
              } col-span-4 flex justify-center text-sm`}
            >
              {step.description}
            </div>
          </>
        );
      })}
      <div className={`row-start-1 col-start-${maxCol - 1} w-16`}></div>
    </div>
  );
};

ProgressStepBar.defaultProps = {
  className: '',
};

export default ProgressStepBar;
