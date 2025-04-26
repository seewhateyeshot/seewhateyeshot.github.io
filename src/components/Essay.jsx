import React from 'react';

export default function Essay({ projectId }) {
  if (projectId !== 'pattaya') return null;

  return (
    <div className="essay-column">
      <div className="essay-scroll">
        <p>if read aloud slowly, at the end of the night<br />
          on an empty street after everything’s closed.</p>
        <p>money here isn’t spent,<br />it’s a hit —<br />it writes history.</p>
        <p>it spreads like a tumor,<br />and kills us all slowly.</p>
        <p>it feeds babies<br />and temporarily relieves hungry men.<br />this is it:<br />the cycle of life.</p>
        <p>cash here is king<br />with its cursed superpower —<br />a few hundred baht<br />buys an eternity in an hour.</p>
        <p>some are born to sweet delight.</p>
        <p>—</p>
        <p>the children watch.<br />they know the choreography by heart.<br />some are still learning how to walk.<br />others already know<br />how to smile without meaning it,<br />playing their part on the puppet row.</p>
        <p>a girl holds a plastic pony<br />like a relic.<br />she escapes her fate<br />for just a split-second.<br />the moment’s already passed.</p>
      </div>
    </div>
  );
}
