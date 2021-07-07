import React from 'react';

import TextArea from './TextArea.component';

export default {
  title: 'ui-core/TextArea',
  component: TextArea,
};

export const Standard = () => (
  <TextArea label="Texto" value="" className="w-64" error="" touched={false} showCheck={true} />
);
